import React, { useState } from "react";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";
import Countdown from "react-countdown";

function App() {
  const [newYearMessageType, setNewYearMessageType] = useState([
    "Hitung mundur",
    "Menunggu..",
  ]);
  const particlesInitiliazition = async (engine) => {
    await loadHyperspacePreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingDate = newYearDate - nowDate;
    return remainingDate;
  }

  return (
    <>
      <Particles
        init={particlesInitiliazition}
        options={{ preset: "hyperspace" }}
        refresh
      />
      <div className="flex flex-col justify-center items-center min-h-screen text-white">
        <div className="bg-black border border-white rounded-2xl text-center gap-10 px-7 py-5 z-50">
          <span className="text-2xl font-bold px-5">
            <Typewriter
              loop={false}
              words={newYearMessageType}
              cursor
              cursorStyle={"👋"}
            />
          </span>
          <div className="text-[50px] md:text-8xl">
            <Countdown
              date={Date.now() + timeLeft()}
              onComplete={() => setNewYearMessageType(["Happy New Year 2024!"])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
