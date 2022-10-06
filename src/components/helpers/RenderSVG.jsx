import sprite from "assets/icons/sprite.svg";

function RenderSVG({ name, size }) {
  return (
    <>
      <svg width={size} height={size}>
        <use xlinkHref={`${sprite}#${name}`}></use>
      </svg>
    </>
  );
}

export default RenderSVG;
