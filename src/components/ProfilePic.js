import React from "react";
import PortfolioPicture from "../Photos/PortfolioPicture.PNG";

export default function ProfilePic() {
  return (
    <main className="profile-pic">
      <img src={PortfolioPicture} alt="Profile" />
    </main>
  );
}
