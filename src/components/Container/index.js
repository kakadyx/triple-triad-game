import PropTypes from "prop-types";
import s from "./Container.module.scss";
import cn from "classnames";

const Container = ({ children, className }) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
