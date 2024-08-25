"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import Styles from "./page.module.css";

const Invite = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const detectSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    detectSize();

    window.addEventListener("resize", detectSize);

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
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          wind={0}
          opacity={0.7}
        />
      )}

      <audio
        id="background-audio"
        src="/assets/sound.mp3" // Ensure this path is correct
        loop
        autoPlay
        style={{ display: "none" }} // Hide the audio element
      >
        Your browser does not support the <code>audio</code> element.
      </audio>

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
      <div className="invite">
        <div className={Styles.card}>
          <div className={Styles.header}>
            <h1 className={Styles.titles}>INVITATION</h1>
          </div>
          <div className={Styles.body}>
            <p className={Styles.message}>
              The <strong className={Styles.strong}>Computer Science Department</strong> of{" "}
              <strong className={Styles.strong}>Vivekananda Mahavidyalaya</strong> cordially invites all
              the esteemed professors to celebrate{" "}
              <strong className={Styles.strong}>Teachers` Day</strong> with our students.
            </p>
            <p className={Styles.message}>
              This day is an opportunity for us to express our deep appreciation
              for your dedication, mentorship, and the invaluable knowledge you
              impart. Your guidance has shaped the future of countless students,
              and we wish to honor your commitment to excellence in education.
            </p>
            <p className={Styles.message}>
              Let us come together to celebrate the bond between teachers and
              students, and to reflect on the impact you`ve made in our academic
              journey. Join us for a day of gratitude, reflection, and joy as we
              pay tribute to the pillars of our institution.
            </p>
            <p className={Styles.details}>
              <strong className={Styles.strong}>Date:</strong> September 5, 2024 <br />
              <strong className={Styles.strong}>Time:</strong> 11:00 AM <br />
              <strong className={Styles.strong}>Venue:</strong> Computer Science Dept
            </p>
            <div className={Styles.footer}>
              <p className={Styles.note}>
                We look forward to your presence to make this day memorable for
                everyone! Together, let`s celebrate the spirit of teaching and
                learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className={Styles.copy}>
      <p>© Copyright, Made By Voyager With ❤️</p>
      </footer>
    </>
  );
};

export default Invite;
