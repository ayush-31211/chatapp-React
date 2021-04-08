import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {Redirect} from 'react-router-dom';

let socket;

function Chat({location}) {

  const [name,setName]=useState('');
  const [room,setRoom]=useState('');
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);
  const [users,setUsers]=useState([]);

  const ENDPOINT = 'http://localhost:5000/';
  
  
  useEffect(()=>{
    const {name,room} = queryString.parse(location.search);
    
    
    socket = io(ENDPOINT, { transports : ['websocket'] });
    
    console.log("Page Started");
    setName(name);
    setRoom(room)

    socket.emit('join',{name, room},()=>{
      console.log("JOIN Callback");
      return <Redirect to='/'/>
    });
    return function cleanup() {
      alert("CLEANUP");
      console.log("CLEANUP")      
    };

  },[ENDPOINT, location.search])



  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

}, []);

  useEffect(()=>{
    socket.on("roomData", ({ users }) => {
      console.log("room data",users)
      setUsers(users);
    });
    
},[]);



  const sendMessage = (event)=>{
    console.log(event,message);
    event.preventDefault();
    if(message)
    {
      console.log("MESSAGE SENT",socket)
      socket.emit('sendMessage',message,function(){setMessage('')});
    }

  }

  console.log("Message",message,messages);

  return (
    <>
      <div>
        <div>
          
        </div>
        <div>

          <div>
            <h1>In Room</h1>
          {users.map((val,idx)=>{return <div key={idx}>{val.name} {idx}</div>})}
          </div>
          
          <div>
          {messages.map((val,idx)=>{return <div key={idx}>{val.text} {idx}</div>})}
          </div>
          <input type="text" val={message} onChange={(event)=>setMessage(event.target.value)} onKeyPress={(event)=>event.key==='Enter'?sendMessage(event):null}/>
        </div>
      </div>
    </>
  );
}

export default Chat;
