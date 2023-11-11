import CopyToClipboard, { copyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../socketContext';
import { useState, useContext } from 'react';

function Options({ children }) {

    const {
        callAccepted,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall
    } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (<>
        <div>
            Video chat Options
            <br />
            <div style={{display:"flex", width:"600px", justifyContent:"space-between"}}>
                <div>
                    Account Info
                    <br />

                    Name
                    <br />
                    <input type='text' fullwidth value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <br />
                    <CopyToClipboard text={me}>
                        <button>Copy </button>
                    </CopyToClipboard>
                </div>
                <div>

                    Make a call
                    <br />

                    ID to call
                    <br />

                    <input type='text' fullwidth value={idToCall} onChange={(e) => {
                        setIdToCall(e.target.value)
                    }} />
                    {callAccepted && !callEnded ?
                        <button onClick={leaveCall}>Hang up</button> :
                        <button onClick={()=>callUser(idToCall)}>call</button>
                    }


                </div>
            </div>
            {children}
        </div>

    </>);
}

export default Options;
