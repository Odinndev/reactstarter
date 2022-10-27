import React from 'react';
import app from "./base";

export default function Home() {

  return (

    <div className="home">

     <button onClick={() => app.auth().signOut()} />

    </div>

  )
}
