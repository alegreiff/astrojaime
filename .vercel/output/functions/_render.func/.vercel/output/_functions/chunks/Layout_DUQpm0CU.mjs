import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, a as renderComponent, d as addAttribute, e as renderHead, f as createAstro } from './astro/server_C_K7vQ6T.mjs';
/* empty css                         */

const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="btn btn-neutral"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"], renderTemplate` . `)} </a>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"> <div class="mx-auto"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
Space launches
</h2> <p class="font-light text-gray-500 sm:text-xl ">
Este será el lanzamiento
</p> </div> <nav class="mt-8 flex flex-col gap-8 items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path></svg>`, "default": ($$result2) => renderTemplate`
Los Últimos lanzamientos
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-three-fingers"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path><path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path><path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path></svg>`, "default": ($$result2) => renderTemplate`Los más viejos
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "after": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-table-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"></path><path d="M3 10h18"></path><path d="M10 3v18"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path></svg>`, "default": ($$result2) => renderTemplate` 
Sobre el proyecto` })} </nav> </header>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
