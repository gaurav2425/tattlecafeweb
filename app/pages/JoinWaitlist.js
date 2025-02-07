// import { useState } from "react";
import Image from "next/image";
import "./JoinWaitlist.css"; // Import the CSS file

export default function JoinWaitlist() {
  //   const [phone, setPhone] = useState("");

  return (
    <div className="container">
      {/* Left Side - Image */}
      <div className="left">
        <Image
          src="/couple_car.jpg"
          alt="Couple Picnic"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div
        className="right"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="form-box">
          <h2>JOIN TATTLE WAITINGLIST...</h2>

          <div className="form-group">
            <label>TELL US YOUR MOBILE NUMBER</label>
            <input
              type="text"
              placeholder="+91"
              value={23876}
              //   onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Checkbox */}
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              We’re the only app that makes dating better by putting women’s
              experiences first. Because when things are better for women,
              they’re better for everyone.
            </label>
          </div>

          {/* Next Button */}
          <button className="next-btn">NEXT →</button>
        </div>
      </div>
    </div>
  );
}
