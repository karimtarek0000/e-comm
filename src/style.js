import styled from "styled-components";

const ResponsiveCols = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1%;

  > * {
    flex-basis: calc(98% / ${(props) => props.col});
    margin-bottom: 1%;

    /* Responsive */
    @media only screen and (max-width: 50rem) {
      flex-basis: calc(98% / 2);
    }

    @media only screen and (max-width: 37.5rem) {
      flex-basis: 100%;
    }
  }
`;

export { ResponsiveCols };
