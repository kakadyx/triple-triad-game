import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./Heading.module.css";

const Heading = ({ children, level = 1, className, black = false }) => {
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
  level: PropTypes.number,
  className: PropTypes.string,
  black: PropTypes.bool,
};

export default Heading;
