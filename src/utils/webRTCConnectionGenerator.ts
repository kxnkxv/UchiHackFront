import {fullMediaConstraints} from "../pages/Chat/components/Call";

const iceServer = process.env.NODE_ENV === 'production'
  ? [
    {
      urls: 'stun:stun.stunprotocol.org',
    },
    {
      urls: 'turn:numb.viagenie.ca',
      credential: 'hahathon',
      username: 'aleksey-finding-job@yandex.ru',
    },
  ]
  : [
    {
      urls: 'turn:localhost',
      username: 'webrtc',
      credential: 'turnserver',
    },
  ];

class WebRTCConnectionGenerator {
  private readonly newPeerConnection: RTCPeerConnection;
  private webcamStream: MediaStream;
  isNegotiating: boolean;
  private readonly sendToServer: any;
  private readonly myUserName: string;
  private readonly targetUsername: string;

  constructor(webcamStream: MediaStream, sendToServer: any, myUserName: string, targetUsername: string) {
    this.myUserName = myUserName;
    this.targetUsername = targetUsername;
    this.sendToServer = sendToServer;
    this.isNegotiating = false;
    this.newPeerConnection = new RTCPeerConnection({
      iceServers: iceServer,
    });
    this.webcamStream = webcamStream;

    this.newPeerConnection.onicecandidate = (ev) => this.handleICECandidateEvent(ev);
    this.newPeerConnection.oniceconnectionstatechange = () => this.handleICEConnectionStateChangeEvent();
    this.newPeerConnection.onicegatheringstatechange = () => this.handleICEGatheringStateChangeEvent();
    this.newPeerConnection.onsignalingstatechange = () => this.handleSignalingStateChangeEvent();
    this.newPeerConnection.onnegotiationneeded = () => this.handleNegotiationNeededEvent();
    this.newPeerConnection.ontrack = (ev) => this.handleTrackEvent(ev);
    this.webcamStream.getTracks().forEach(
      (track) => (this.newPeerConnection && this.webcamStream)
        && this.newPeerConnection.addTransceiver(track, { streams: [this.webcamStream] }),
    );
  }

  async handleNegotiationNeededEvent(): Promise<void> {
    if (this.isNegotiating) {
      return;
    }

    try {
      const offer = await this.newPeerConnection.createOffer();

      if (this.newPeerConnection.signalingState !== 'stable') {
        return;
      }
      await this.newPeerConnection.setLocalDescription(offer);
      this.isNegotiating = true;

      this.sendToServer({
        name: this.myUserName,
        sendTo: this.targetUsername,
        type: 'video-offer',
        sdp: this.newPeerConnection.localDescription,
      });
    } catch (err) {}
  }

  handleTrackEvent(event: RTCTrackEvent): void {
    const remoteVideoEl = document.getElementById(this.targetUsername) as HTMLVideoElement;
    if (remoteVideoEl) {
      remoteVideoEl.srcObject = event.streams[0];
    }
  }

  handleICECandidateEvent({ candidate }: RTCPeerConnectionIceEvent): void {
    if (candidate) {
      this.sendToServer({
        name: this.myUserName,
        type: 'new-ice-candidate',
        sendTo: this.targetUsername,
        candidate: candidate,
      });
    }
  }

  handleICEGatheringStateChangeEvent(): void {}

  async handleVideoAnswerMsg(msg: any): Promise<void> {
    const desc = new RTCSessionDescription(msg.sdp);
    if (this.newPeerConnection) {
      await this.newPeerConnection.setRemoteDescription(desc)
        .catch(err => console.log(err));
    }
  }

  async handleNewICECandidateMsg(msg: any): Promise<void> {
    const iceCandidate = new RTCIceCandidate(msg.candidate);

    try {
      if (this.newPeerConnection) {
        await this.newPeerConnection.addIceCandidate(iceCandidate);
      }
    } catch (err) {}
  }

  closeVideoCall(): void {
    this.newPeerConnection.getTransceivers().forEach((transceiver) => transceiver.receiver.track.stop());
    this.newPeerConnection.close();
  }

  handleICEConnectionStateChangeEvent(): void {
    if (this.newPeerConnection) {
      switch (this.newPeerConnection.iceConnectionState) {
        case 'connected':
          console.log('connected');
          break;
        case 'closed':
        case 'failed':
        case 'disconnected':
          alert('disconnected')
          break;
        default:
      }
    }
  }

  handleSignalingStateChangeEvent(): void {
    if (this.newPeerConnection) {
      this.isNegotiating = this.newPeerConnection.signalingState !== 'stable';
      switch (this.newPeerConnection.signalingState) {
        case 'closed':
          alert('closed')
          break;
        default:
      }
    }
  }

  async handleVideoOfferMsg(msg: any): Promise<void> {
    if (this.isNegotiating) {
      return;
    }

    const desc = new RTCSessionDescription(msg.sdp);

    if (this.newPeerConnection.signalingState !== 'stable') {
      await Promise.all([
        this.newPeerConnection.setLocalDescription({ type: 'rollback' })
          .catch(() => {
            alert('Ошибка подключения, попробуйте снова');
          }),
        this.newPeerConnection.setRemoteDescription(desc)
          .catch(() => {
            alert('Ошибка подключения, попробуйте снова');
          }),
      ]);

      return;
    }

    await this.newPeerConnection.setRemoteDescription(desc);

    if (!this.webcamStream) {
      try {
        this.webcamStream = await navigator.mediaDevices.getUserMedia(fullMediaConstraints);
      } catch (err) {
        // handleGetUserMediaError(err);
        return;
      }

      const localVideoEl = document.getElementById('localVideo') as HTMLVideoElement;
      if (localVideoEl) {
        localVideoEl.srcObject = this.webcamStream;
      }

      try {
        if (this.newPeerConnection) {
          this.webcamStream.getTracks().forEach(
            (track) => (this.newPeerConnection && this.webcamStream)
              && this.newPeerConnection.addTransceiver(track, { streams: [this.webcamStream] }),
          );
        }
      } catch (err) {
        // handleGetUserMediaError(err);
      }
    }

    await this.newPeerConnection.setLocalDescription(await this.newPeerConnection.createAnswer());

    this.sendToServer({
      name: this.myUserName,
      sendTo: this.targetUsername,
      type: 'video-answer',
      sdp: this.newPeerConnection.localDescription,
    });
  }

}

export default WebRTCConnectionGenerator;
