import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_btn__O2CPT {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.Button-module_btn-primary__jyJcV {\n  background-color: #1b5ff5;\n  color: #ffffff;\n  border-radius: 12px;\n}\n.Button-module_btn-secondary__eNry- {\n  background-color: #5d5d5d;\n  color: #ffffff;\n  border-radius: 12px;\n}\n.Button-module_btn-danger__NYuVS {\n  background-color: #ed114b;\n  color: #ffffff;\n  border-radius: 12px;\n}\n.Button-module_btn__O2CPT:hover {\n  opacity: 0.3;\n  transition: all 0.3s ease;\n  border-radius: 12px;\n}";
var styles = {"btn":"Button-module_btn__O2CPT","btn-primary":"Button-module_btn-primary__jyJcV","btn-secondary":"Button-module_btn-secondary__eNry-","btn-danger":"Button-module_btn-danger__NYuVS"};
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  var buttonClass = "".concat(styles.btn, " ").concat(styles["btn-".concat(variant)]);
  return /*#__PURE__*/React.createElement("button", {
    className: buttonClass,
    onClick: onClick
  }, children);
};

export { Button };
