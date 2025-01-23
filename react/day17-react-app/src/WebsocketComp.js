import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket'
export const WebsocketComp = () => {
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const { sendMessage, lastMessage, readyState } = useWebSocket(url);
    const [messageHistory, setMessageHistory] = useState([]);
    const connectClicked = () => {
        setUrl('ws://localhost:9000?username=' + username);
        console.log(readyState);
    };
    useEffect(() => {
        if (lastMessage !== null) {
          setMessageHistory((prev) => prev.concat(lastMessage));
        }
      }, [lastMessage]);

    useEffect(() => {
        console.log("******* " + readyState + " ******");
    }, [readyState]);
    
    const sendClicked = () => {
        sendMessage(userMessage);
    };
    return (<div>
        <h5>Web socket</h5>
        <input type="text" onChange={e => setUsername(e.target.value)}></input>
        <br/>
        <button onClick={connectClicked}>Connect</button>
        <br/> <hr/>
        <input type="text" placeholder='enter message' onChange={e => setUserMessage(e.target.value)}></input>
        <button onClick={sendClicked}>Send message</button>
        <div>
        {messageHistory.map((message, idx) => (
          <p key={idx}>{message ? message.data : null}</p>
        ))}
      </div>
    </div>);
};