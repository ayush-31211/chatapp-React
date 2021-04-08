import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Join() {

  const [name,setName]=useState('');
  const [room,setRoom]=useState('');

  return (
    <>
      <h1>Join</h1>
      <input type='text' placeholder='UserName' onChange={(event)=>setName(event.target.value)} />
      <input type='text' placeholder='Room' onChange={(event)=>setRoom(event.target.value)} />
      <Link onClick={(event)=>(!name||!room)?event.preventDefault() : null} to = {`/chat?name=${name}&room=${room}`}>
          <button type='submit'>Sign In</button>
      </Link>

    </>
  );
}

export default Join;
