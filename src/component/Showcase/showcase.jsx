import React from "react";
import WorkDetail from "../WorkDetail/workDetail";
import workList from "./mockWorkList";

import * as Styled from "./style";

const Showcase = () => {
  return (
    <Styled.ShowcaseContainer>
      <Styled.WorkOverview>
        {workList.map((item, index) => (
          <Info item={item} index={index}></Info>
        ))}
      </Styled.WorkOverview>
      <WorkDetail />
    </Styled.ShowcaseContainer>
  );
};

export default Showcase;

const Info = (props) => {
  const { item, index } = props;
  return (
    <Styled.InfoContainer>
      <div style={{ position: "relative" }}>
        <Styled.Number></Styled.Number>
        <Styled.NumberText>{index + 1}</Styled.NumberText>
      </div>
      <div>{item.name}</div>
    </Styled.InfoContainer>
  );
};
