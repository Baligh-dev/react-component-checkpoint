import React from "react";
import ThePhoto from "../../assets/thePicture.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <img src={ThePhoto} className="photo" alt="profilePhoto" />
    </div>
  );
};

export default ProfilePhoto;
