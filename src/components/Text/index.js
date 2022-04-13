import PropTypes from "prop-types";
import React from "react";
import cn from "classnames";

import s from "./Text.module.css";

const Text = ({
  element = "div",
  children,
  className,
  strong,
  italic,
  disabled,
}) => {
  return React.createElement(
    element,
    {
      className: cn(
        s.root,
        className,
        { [s.strong]: strong },
        { [s.disabled]: disabled },
        { [s.italic]: italic }
      ),
    },
    children
  );
};

Text.propTypes = {
  element: PropTypes.oneOf(["div", "p", "span"]),
};

export default Text;
