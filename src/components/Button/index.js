import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ black, children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
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
