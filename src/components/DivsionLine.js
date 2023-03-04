import styled from "styled-components";

const DivsionLine = () => {
  return (
    <DLineCss>
      <div></div>
    </DLineCss>
  );
};
export default DivsionLine;

const DLineCss = styled.div`
  div {
    width: 100%;
    height: 1px;
    background-color: var(--clr-primary-light);
  }
`;
