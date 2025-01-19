import React from "react";
import "./qr.css";
// import { AiFillSound } from "react-icons/ai";


export default function Qr_code(){
    const playSound = () => {
        const audio = new Audio("./sounds/Barcode-scanner.mp3");
        audio.currentTime = 0;  
        audio.play();
        setTimeout(() => {
            audio.pause();  // stop play sound
          }, 2000);
      };
    return(
        <>
            <div className="hover_barcode">
                <p className="cursor typewriter-animation">Click on Barcode  </p> 
                {/* <AiFillSound  className="speaker_icon"/> */}
            </div>
            <div className="qr_box">
                <img className="qrcode_logo" 
                src="./images/image-qr-code.png"
                onClick={playSound}  // play sound when click on barcode image
                // onMouseOver={playSound}  // play sound when hover on barcode image
            />
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
            </div>

            <div className="signature">
                <p id="sign">Created by: <span style={{color:"#FF8383"}}>Atiyeh</span></p>
            </div>
        </>
    )
}