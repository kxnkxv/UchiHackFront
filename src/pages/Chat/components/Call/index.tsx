import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import WebRTCConnectionGenerator from "../../../../utils/webRTCConnectionGenerator";
import { Button } from "antd";

import {
  CallWindow,
  Container,
  LocalVideo,
  RemoteVideo,
  StartCall,
  Controls,
  Close,
  VideoContainer,
} from "./styled";

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
  const myUserName = useRef(`${Date.now()}`);

  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [usersList, setUsersList] = useState<string[]>([]);

  const connection = useRef<WebSocket | null>(null);
  const webcamStream = useRef<MediaStream | null>(null);
  const localVideoEl = useRef<HTMLVideoElement>(null);
  const remoteVideoEl = useRef<HTMLVideoElement>(null);
  const clientID = useRef("");

  const closeVideoHandler = () => {
    if (connection.current) {
      sendToServer({
        name: myUserName.current,
        type: "user-disconnected",
      });
    }
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
      name: myUserName.current,
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
          setIsAudioEnabled(true);
          setIsVideoEnabled(true);
        })
        .catch((err) => {
          navigator.mediaDevices
            .getUserMedia(audioMediaConstraints)
            .then((stream) => {
              webcamStream.current = stream;
              if (localVideoEl.current) {
                localVideoEl.current.srcObject = stream;
              }
              setIsAudioEnabled(true);
              setIsVideoEnabled(false);
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
      name: myUserName.current,
      type: "user-joined",
    });
  };

  const toggleAudio = () => {
    setIsAudioEnabled((prevState) => {
      if (webcamStream.current) {
        webcamStream.current.getAudioTracks()[0].enabled = !prevState;
      }
      return !prevState;
    });
  };

  const toggleVideo = () => {
    setIsVideoEnabled((prevState) => {
      if (webcamStream.current) {
        webcamStream.current.getVideoTracks()[0].enabled = !prevState;
      }
      return !prevState;
    });
  };

  useEffect(() => {
    const serverUrl = "wss://wss.meet2code.com/hahathon";
    const peerConnectionsList: Record<
      string,
      WebRTCConnectionGenerator | null
    > = {};
    connection.current = new WebSocket(serverUrl, "json");

    connection.current.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);

      if (
        msg.type !== "id" &&
        msg.type !== "user-disconnected" &&
        msg.name &&
        msg.name !== myUserName.current &&
        !peerConnectionsList[msg.name] &&
        localVideoEl.current
      ) {
        setUsersList((prevState) => [...prevState, msg.name]);
        peerConnectionsList[msg.name] = new WebRTCConnectionGenerator(
          localVideoEl.current.srcObject as MediaStream,
          sendToServer,
          myUserName.current,
          msg.name
        );
      }

      switch (msg.type) {
        case "id":
          clientID.current = msg.id;
          setUsername();
          break;

        case "user-joined":
          break;

        case "user-disconnected":
          setUsersList((prevState) =>
            [...prevState].filter((item) => item !== msg.name)
          );
          peerConnectionsList[msg.name]?.closeVideoCall();
          peerConnectionsList[msg.name] = null;
          break;

        case "video-offer":
          peerConnectionsList[msg.name]?.handleVideoOfferMsg(msg);
          break;

        case "video-answer":
          peerConnectionsList[msg.name]?.handleVideoAnswerMsg(msg);
          break;

        case "new-ice-candidate":
          peerConnectionsList[msg.name]?.handleNewICECandidateMsg(msg);
          break;

        default:
          console.log("unknown message type");
      }
    };
  }, []);

  useEffect(() => {
    initWebCam();
  }, [initWebCam]);

  return (
    <Container>
      <CallWindow>
        <Close onClick={closeVideoHandler}>Закрыть</Close>
        <VideoContainer usersCount={usersList.length + 1 || 1}>
          <LocalVideo
            playsInline
            id="localVideo"
            ref={localVideoEl}
            autoPlay
            muted
          />
        </VideoContainer>
        {usersList.map((item) => (
          <VideoContainer key={item} usersCount={usersList.length + 1 || 1}>
            <RemoteVideo playsInline id={item} ref={remoteVideoEl} autoPlay />
          </VideoContainer>
        ))}
        <Controls>
          <Button onClick={toggleAudio}>
            {isAudioEnabled ? "Звук включен" : "Звук выключен"}
          </Button>
          <StartCall onClick={startCall}>
            {isCallStarted ? "Звонок начат" : "Начать звонок"}
          </StartCall>
          <Button onClick={toggleVideo}>
            {isVideoEnabled ? "Видео включено" : "Видео выключено"}
          </Button>
        </Controls>
      </CallWindow>
    </Container>
  );
};

export default Call;
