import React from "react";
import * as Styled from "./style.jsx";

import DP from "../../assets/dp.png";

const Profile = () => {
  return (
    <Styled.ProfileContainer>
      <Styled.Picture>
        <Styled.ProfilePic src={DP} alt="Picture" />
        <p>Manoj Sah, Nick name: Aditya</p>
      </Styled.Picture>
      <Styled.HorizontalLine />
      <Styled.Bio>
        <div>A</div>
        <div>B</div>
      </Styled.Bio>
    </Styled.ProfileContainer>
  );
};

export default Profile;
