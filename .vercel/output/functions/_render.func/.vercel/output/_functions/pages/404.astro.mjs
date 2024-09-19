/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_K7vQ6T.mjs';
import { $ as $$Layout } from '../chunks/Layout_DUQpm0CU.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>404</h1> ` })}`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/404.astro", void 0);

const $$file = "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
