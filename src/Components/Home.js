import React from "react";

export default function Home() {
  return (
    <div>
      <div className="h-screen   z-10 body">
        <h1 className="text-6xl text-white uppercase py-32 antialiased font-extrabold">
          Aradhana Fellowship
          <br />
          Video Chat App
        </h1>
        <a
          href="https://jitsi.org/"
          className={`text-4xl bg-orange-200 inline uppercase px-10 py-5 rounded-lg cursor-pointer 
        font-bold shadow-xl  mt-20`}
        >
          Start Video Call
        </a>
      </div>
    </div>
  );
}
