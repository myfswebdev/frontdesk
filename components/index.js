import PropTypes from "prop-types";

const Vector = ({ className = "" }) => {
  return (
    <div
      className={`w-[1317px] max-w-full h-[731px] bg-[url('/vector@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    />
  );
};

Vector.propTypes = {
  className: PropTypes.string,
};

export default Vector;
