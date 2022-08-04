// src/Button.tsx
import { jsxs } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsxs("button", {
    children: [
      props.children,
      " \u{1F64A}"
    ]
  });
}
Button.displayName = "Button";
export {
  Button
};
