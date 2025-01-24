import { h as head, d as slot, e as bind_props } from "../../chunks/index2.js";
/* empty css                            */
function _layout($$payload, $$props) {
  const prerender = true;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="icon" href="/logo/favicon-32x32.png" sizes="32x32" type="image/png"> <link rel="icon" href="/logo/favicon-16x16.png" sizes="16x16" type="image/png"> <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png">`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  bind_props($$props, { prerender });
}
export {
  _layout as default
};
