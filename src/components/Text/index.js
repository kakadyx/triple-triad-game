import PropTypes from "prop-types";
import React from "react";
import cn from "classnames";

import s from "./Text.module.scss";

const Text = ({ element, children, className, strong, italic, disabled }) => {
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
  children: PropTypes.node,
  className: PropTypes.string,
  strong: PropTypes.bool,
  disabled: PropTypes.bool,
  italic: PropTypes.bool,
};

Text.defaultProps = {
  element: "div",
  children: null,
  className: null,
  strong: false,
  disabled: false,
  italic: false,
};

export default Text;
