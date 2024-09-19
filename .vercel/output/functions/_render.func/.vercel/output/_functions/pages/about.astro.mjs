/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_K7vQ6T.mjs';
import { $ as $$Layout } from '../chunks/Layout_DUQpm0CU.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white"> <h1>Acerca del proyecto</h1> <p>Esto es la info del lanzamiento</p> </div> ` })}`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/about.astro", void 0);

const $$file = "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
