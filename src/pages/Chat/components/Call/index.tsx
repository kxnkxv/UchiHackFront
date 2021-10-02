import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import WebRTCConnectionGenerator from "../../../../utils/webRTCConnectionGenerator";

import {
  CallWindow,
  Container,
  LocalVideo,
  RemoteVideo,
  StartCall,
} from "./styled";
import { Button } from "antd";

export const fullMediaConstraints = {
  audio: true,
  video: {
    aspectRatio: {
      ideal: 1.7777777778,
    },
  },
};

const audioMediaConstraints = {
  audio: true,
};

interface OwnProps {
  close: () => void;
}

const Call: FC<OwnProps> = ({ close }) => {
  const myUserName = `${Date.now()}`;

  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [usersList, setUsersList] = useState<string[]>([]);

  const connection = useRef<WebSocket | null>(null);
  const webcamStream = useRef<MediaStream | null>(null);
  const localVideoEl = useRef<HTMLVideoElement>(null);
  const remoteVideoEl = useRef<HTMLVideoElement>(null);
  const clientID = useRef("");
  const testStart = useRef(false);

  const closeVideoHandler = () => {
    cleanListeners();
    close();
  };

  function sendToServer(msg: any): void {
    const msgJSON = JSON.stringify(msg);

    if (connection.current) {
      connection.current.send(msgJSON);
    }
  }

  function setUsername(): void {
    sendToServer({
      name: myUserName,
      id: clientID.current,
      type: "username",
    });
  }

  const initWebCam = useCallback(() => {
    if (localVideoEl.current) {
      navigator.mediaDevices
        .getUserMedia(fullMediaConstraints)
        .then((stream) => {
          webcamStream.current = stream;
          if (localVideoEl.current) {
            localVideoEl.current.srcObject = stream;
          }
        })
        .catch((err) => {
          navigator.mediaDevices
            .getUserMedia(audioMediaConstraints)
            .then((stream) => {
              webcamStream.current = stream;
              if (localVideoEl.current) {
                localVideoEl.current.srcObject = stream;
              }
            })
            .catch(() => {});
        });
    }
  }, [localVideoEl]);

  const cleanListeners = () => {
    if (connection.current) {
      connection.current.close();
    }
    if (localVideoEl.current) {
      localVideoEl.current.pause();
      (localVideoEl.current.srcObject as MediaStream)
        ?.getTracks()
        .forEach((track) => {
          track.stop();
        });
    }
    webcamStream.current = null;
  };

  const startCall = () => {
    setIsCallStarted(true);
    sendToServer({
      name: myUserName,
      type: "user-joined",
    });
  };

  const muteAudio = () => {
    if (webcamStream.current) {
      webcamStream.current.getAudioTracks()[0].enabled = false;
      setIsAudioEnabled(false);
    }
  };
  const unMuteAudio = () => {
    if (webcamStream.current) {
      webcamStream.current.getAudioTracks()[0].enabled = true;
      setIsAudioEnabled(true);
    }
  };
  useEffect(() => {
    const serverUrl = "wss://wss.meet2code.com/video";
    const peerConnectionsList: Record<string, WebRTCConnectionGenerator> = {};
    connection.current = new WebSocket(serverUrl, "json");

    connection.current.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);

      if (
        msg.type !== "id" &&
        msg.name &&
        !peerConnectionsList[msg.name] &&
        localVideoEl.current
      ) {
        setUsersList((prevState) => [...prevState, msg.name]);
        peerConnectionsList[msg.name] = new WebRTCConnectionGenerator(
          localVideoEl.current.srcObject as MediaStream,
          sendToServer,
          myUserName,
          msg.name
        );
      }

      switch (msg.type) {
        case "id":
          clientID.current = msg.id;
          setUsername();
          break;

        case "user-joined":
          testStart.current = true;
          break;

        case "partner-disconnected":
          peerConnectionsList[msg.name].closeVideoCall();
          break;

        case "video-offer":
          peerConnectionsList[msg.name].handleVideoOfferMsg(msg);
          break;

        case "video-answer":
          peerConnectionsList[msg.name].handleVideoAnswerMsg(msg);
          break;

        case "new-ice-candidate":
          peerConnectionsList[msg.name].handleNewICECandidateMsg(msg);
          break;

        case "hang-up":
          peerConnectionsList[msg.name].closeVideoCall();
          break;

        default:
          console.log("unknown message type");
      }
    };
  }, []);

  useEffect(() => {
    initWebCam();
  }, [initWebCam]);

  useEffect(
    () => () => {
      cleanListeners();
    },
    []
  );

  useEffect(() => {
    testStart.current = isCallStarted;
  }, [isCallStarted]);

  return (
    <Container>
      <CallWindow>
        <Button onClick={closeVideoHandler}>Закрыть</Button>
        <LocalVideo id="localVideo" ref={localVideoEl} autoPlay muted />
        {usersList.map((item) => (
          <RemoteVideo key={item} id={item} ref={remoteVideoEl} autoPlay />
        ))}
        <StartCall onClick={startCall}>
          {isCallStarted ? "звонок начат" : "начать звонок"}
        </StartCall>
        <Button onClick={isAudioEnabled ? muteAudio : unMuteAudio}>
          {isAudioEnabled ? "звук включен" : "выключен"}
        </Button>
      </CallWindow>
    </Container>
  );
};

export default Call;
