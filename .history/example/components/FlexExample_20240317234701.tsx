import React from "react";
import styled from "styled-components";
import Title from "../../packages/Title";
import Flex from "../../packages/Flex";

export default function FlexExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="方向" type="h3" />
        <Flex>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
        </Flex>
        <Title title="对齐方式" type="h3" />
        <Flex>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
        </Flex>
        <Title title="对齐方式" type="h3" />
        <Flex>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
          <StyledCardLight></StyledCardLight>
          <StyledCardDark></StyledCardDark>
        </Flex>
      </div>
    </div>
  );
}

const StyledCardLight = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--color-primary-3);
`;

const StyledCardDark = styled.div`
  width: 100px;
  height: 60px;
  background-color: var(--color-primary-4);
`;
