import { useContext } from "react";
import { SocketContext } from "../socketContext";

function Notifcation() {
    const {
        callAccepted,
        call,
        answerCall
    } = useContext(SocketContext);
    return (
        <>
            {
                call.isReceivingCall && !callAccepted &&
                <>
                    {call.name} is calling
                    <button onClick={answerCall}>Answer call</button>
                </>
            }
        </>);
}

export default Notifcation;
