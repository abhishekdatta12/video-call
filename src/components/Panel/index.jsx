import React, { useContext, useState } from "react";
import { SocketContext } from "../../SocketContext";

const Panel = ({ children }) => {
    const {
        me,
        callReceived,
        name,
        setName,
        callDisconnected,
        disconnectCall,
        initCall
    } = useContext(SocketContext);
    const [callerID, setCallerID] = useState("");
    return (
        <div>
            <form>
                <h4>Your name</h4>
                <p>{me}</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <h4>Make a call</h4>
                <input
                    type="text"
                    value={callerID}
                    onChange={(e) => setCallerID(e.target.value)}
                />
                {callReceived && !callDisconnected ? (
                    <button onClick={disconnectCall}>Hang up</button>
                ) : (
                    <button onClick={(e) => { e.preventDefault(); initCall(callerID) }}>Call</button>
                )}
                {children}
            </form>
        </div>
    );
};

export default Panel;
