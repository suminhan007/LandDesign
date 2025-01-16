import styled from "styled-components";
import Title from "../../packages/Title";
import Grid, { gridType } from "../../packages/Grid";

export default function GridExample() {
  return (
    <div className="flex column gap-24">
      <div className="flex column gap-12">
        <Title title="类型" type="h3" />
        <div className="flex justify-center gap-24 border p-32" style={{ height: '200px' }}>
          <Grid className="width-100" type={gridType.ColumnRepeat} repeatNum={3}>
            <StyledCardLight></StyledCardLight>
            <StyledCardDark></StyledCardDark>
            <StyledCardLight></StyledCardLight>
            <StyledCardLight></StyledCardLight>
          </Grid>
        </div>
      </div>
    </div>
  );
}

const StyledCardLight = styled.div`
  background-color: var(--color-primary-3);
`;

const StyledCardDark = styled.div`
  background-color: var(--color-primary-4);
`;
