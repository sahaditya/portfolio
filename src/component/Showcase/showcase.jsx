import React from "react";
import SkillDetail from "../SkillDetail/skillDetail";

import * as Styled from "./style";

const Showcase = () => {
  return (
    <Styled.ShowcaseContainer>
      <Styled.Skills>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </Styled.Skills>
      <SkillDetail />
    </Styled.ShowcaseContainer>
  );
};

export default Showcase;
