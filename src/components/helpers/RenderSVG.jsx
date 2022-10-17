import sprite from "assets/icons/sprite.svg";

function RenderSVG({ name, size }) {
  return (
    <>
      <svg width={size} height={size}>
        <use xlinkHref={`${sprite}#${name}`}>
          <title>{name}</title>
        </use>
      </svg>
    </>
  );
}

export default RenderSVG;
