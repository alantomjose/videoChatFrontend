import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl text-white uppercase my-32 antialiased font-extrabold">
        Aradhana Fellowship
        <br />
        Video Chat App
      </h1>
      <div
        className={`text-4xl bg-orange-200 inline uppercase px-10 py-5 rounded-lg 
        font-bold shadow-xl  mt-20`}
      >
        Start Video Call
      </div>
    </div>
  );
}
