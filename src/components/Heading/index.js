import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./Heading.module.scss";

const Heading = ({ children, level, className, black, backline }) => {
  const el = `h${level}`;
  return React.createElement(
    el,
    {
      className: cn(s.root, s[`level${level}`], className, {
        [s.colorBlack]: black,
        [s.backline]: backline,
      }),
    },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  className: PropTypes.string,
  black: PropTypes.bool,
  backline: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  black: false,
  backline: false,
};

export default Heading;
