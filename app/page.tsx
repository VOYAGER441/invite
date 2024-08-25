"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation"; // Updated import for `app` directory

declare global {
  interface Window {
    util: {
      open: (button: HTMLButtonElement) => void;
    };
  }
}

export default function Home() {
  const router = useRouter(); 

  useEffect(() => {
    window.util = {
      open: (button) => {
        
        router.push("/Invite");
      },
    };
  }, [router]);

  return (
    <div className="loading-page" id="welcome">
      <div className="content">
        <div className="text-center">
          <h2 className="font-esthetic mb-4">Happy Teachers’ Day!</h2>

          <div className="img-crop mb-4">
            <Image
              src="/assets/logo.jpg" // Ensure this path is correct
              alt="Teachers' Day Logo"
              width={250}
              height={250}
              className="rounded-circle"
            />
          </div>

          <h2 className="font-esthetic my-4">Computer Science</h2>
          <div
            id="guest-name"
            data-message="Kepada Yth Bapak/Ibu/Saudara/i"
          ></div>

          <button
            type="button"
            className="btn btn-light shadow rounded-4 mt-4"
            onClick={(event) =>
              window.util.open(event.currentTarget as HTMLButtonElement)
            }
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} /> Open Invitation
          </button>
        </div>
      </div>

      <style jsx>{`
        .loading-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #000;
          color: #fff;
          text-align: center;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .font-esthetic {
          font-family: "Lobster",cursive;
          font-size: 2.5rem;
          margin-top: 20px;
        }
        .img-crop {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 250px;
          overflow: hidden;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          margin-top: 20px;
        }
        .rounded-circle {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .btn {
          width:80%;
          height:50px;
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
          border-radius: 1rem;
          border: none;
          background-color: #fff;
          color: #000;
          cursor: pointer;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }
        .btn:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
}
