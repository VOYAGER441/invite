"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import Styles from "./page.module.css";

const Invite = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  // const buttonRef = useRef<HTMLButtonElement>(null); // Create a ref for the button

  useEffect(() => {
    // Function to update window size
    const detectSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    detectSize();

    // Add resize event listener
    window.addEventListener("resize", detectSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  // Automatically trigger button click on component mount
  // useEffect(() => {
  //   if (buttonRef.current) {
  //     buttonRef.current.click(); // Simulate button click
  //   }
  // }, []);

  // Function to play audio

  const handlePlayAudio = () => {
    const audio = document.getElementById(
      "background-audio"
    ) as HTMLAudioElement;
    if (audio) {
      audio.play().catch((error) => {
        console.log("Audio play was prevented:", error);
      });
    }
  };

  return (
    <>
      {/* Hidden button to start audio */}
      {/* <button
        ref={buttonRef}
        onClick={handlePlayAudio}
        style={{ display: "none" }}
      >
        Play Audio
      </button> */}

      {/* for confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          wind={0}
          opacity={0.7}
        />
      )}

      {/* for audio clip */}
      <audio
        id="background-audio"
        src="/assets/sound.mp3" // Ensure this path is correct
        loop
        autoPlay
        style={{ display: "none" }} // Hide the audio element
      >
        Your browser does not support the <code>audio</code> element.
      </audio>

      {/* for main or content part */}
      <main className={Styles.main}>
        <div className={Styles.content}>
          <h2 className={Styles.title}>Happy Teachers’ Day!</h2>
          <div className={Styles.imageWrapper}>
            <Image
              src="/assets/logo.jpg"
              alt="Teachers' Day Logo"
              width={250}
              height={250}
              className={Styles.image}
            />
          </div>
          <h2 className={Styles.subtitle}>Computer Science</h2>
          <div className="scroll">
            <Image
              src="/assets/scroll.png"
              alt="Scroll Down"
              width={50}
              height={50}
              className={Styles.mouse}
            />
          </div>
          <h2 className={Styles.subtitle}>Scroll Down</h2>
        </div>
        <svg className={Styles.wave} viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,320L48,282.7C96,245,192,171,288,144C384,117,480,139,576,170.7C672,203,768,245,864,234.7C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </main>
    </>
  );
};

export default Invite;
