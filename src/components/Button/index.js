import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ black, children, className, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={cn(s.button, { [s.black]: black }, className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  black: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  black: false,
};

export default Button;
