import { useContext } from "react";
import { SocketContext } from "../socketContext";

function VideoPlayer() {
    const {
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        callEnded
    } = useContext(SocketContext);

    return (<>
        Video chat VidoPlayer
        <br />

        {stream && <div style={{ minHeight: "300px", minWidth: "400px", border: 'solid 1px red', margin: "2rem" }}>
            {name || "User 1"}
            <br />
            <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
            />
        </div>
        }

        {callAccepted && !callEnded && <div style={{ minHeight: "300px", minWidth: "400px", border: 'solid 1px green', margin: "2rem" }}>
            {call.name || "User 2"}
            <br />

            <video
                playsInline
                ref={userVideo}
                autoPlay
            />
        </div>
        }

    </>);
}

export default VideoPlayer;
