import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1%;
  /* gap: ${({ gap }) => (gap ? `${gap}rem` : "1rem")}; */

  /* Margin */
  ${(props) => props.m && { margin: `${props.m}rem` }}
  ${(props) => props.my && { marginBlock: `${props.my}rem` }}
  ${(props) => props.mt && { marginBlockStart: `${props.mt}rem` }}
  ${(props) => props.mb && { marginBlockEnd: `${props.mb}rem` }}
  ${(props) => props.mx && { marginInline: `${props.mx}rem` }}
  ${(props) => props.ms && { marginInlineStart: `${props.ms}rem` }}
  ${(props) => props.me && { marginInlineEnd: `${props.me}rem` }}
  /* Padding */
  ${(props) => props.p && { padding: `${props.p}rem` }}
  ${(props) => props.pt && { paddingBlockStart: `${props.pt}rem` }}
  ${(props) => props.pb && { paddingBlockEnd: `${props.pb}rem` }}
  ${(props) => props.py && { paddingBlock: `${props.py}rem` }}
  ${(props) => props.px && { paddingInline: `${props.px}rem` }}
  ${(props) => props.ps && { paddingInlineStart: `${props.ps}rem` }}
  ${(props) => props.pe && { paddingInlineEnd: `${props.pe}rem` }}

  /*  */
  > * {
    flex-basis: calc(
      (100% - (1% * ${({ cols }) => cols})) / ${({ cols }) => cols}
    );
    margin-bottom: 1%;

    /* Responsive */
    @media only screen and (max-width: 62rem) {
      flex-basis: calc(98% / 3);
    }

    @media only screen and (max-width: 50rem) {
      flex-basis: calc(98% / 2);
    }

    @media only screen and (max-width: 37.5rem) {
      flex-basis: 100%;
    }
  }
`;

const Paragraph = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PriceWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

const Discount = styled.span`
  font-size: 1.5rem;
  ${(props) =>
    props.dis
      ? {
          color: "var(--eighth-color)",
          textDecoration: "line-through",
          fontWeight: 200,
        }
      : { color: "var(--second-color)" }}
`;

const DiscountWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled(Discount)`
  color: var(--fourth-color);
  display: block;
  /* margin-left: auto; */
  font-size: var(--md-x-font);
`;

export { Row, DiscountWrapp, Discount, Price, PriceWrapp, Paragraph };
