import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./Heading.module.css";

const Heading = ({ children, level, className, black }) => {
  const el = `h${level}`;
  return React.createElement(
    el,
    {
      className: cn(s.root, className, s[`level${level}`], {
        [s.colorBlack]: black,
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
};

Heading.defaultProps = {
  level: 1,
  className: null,
  black: false,
  children: null,
};

export default Heading;
