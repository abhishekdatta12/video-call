import React, { useContext } from 'react'

import { SocketContext } from '../../SocketContext';

const Alert = () => {
    const {
        receiveCall,
        call,
        callReceived
    } = useContext(SocketContext);

    console.log(call)

    return (
        <>
            {call.isReceivingCall && !callReceived && (
                <div>
                    <h1>Calling '{call.name}'...</h1>
                    <button onClick={receiveCall}>
                        Receive Call
                    </button>
                    <button onClick={() => window.location.reload()}>
                        Reject Call
                    </button>
                </div>
            )}
        </>
    )
}

export default Alert
