import React from "react";

import Profile from "../Profile/profile";
import Showcase from "../Showcase/showcase";

import * as Styled from "./style";

const Layout = () => {
  return (
    <Styled.LayoutContainer>
      <Styled.Left>
        <Profile />
      </Styled.Left>
      <Styled.Right>
        <Showcase />
      </Styled.Right>
    </Styled.LayoutContainer>
  );
};

export default Layout;
