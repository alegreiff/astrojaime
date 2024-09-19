/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, a as renderComponent } from '../chunks/astro/server_C_K7vQ6T.mjs';
import { $ as $$Layout } from '../chunks/Layout_DUQpm0CU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flightNumber, img, id, details } = Astro2.props;
  const successText = success ? "\xC9xito" : "Fracaso";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border-shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col"> <picture class="flex justify-center p-4"> <img${addAttribute(img, "src")}${addAttribute(`Patch for launch ${img}`, "alt")} class="mb-5 rounded-lg"> </picture> <header class="p-4 flex-grow"> <span${addAttribute(
    [
      "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
      {
        "bg-green-200 text-green-900": success,
        "bg-red-200 text-red-900": !success
      }
    ],
    "class:list"
  )}>${successText}</span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Flight # ${flightNumber} </h2> <p class="mb-4 font-light text-gray-400"> ${details != null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/components/CardLaunch.astro", void 0);

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      sort: {
        date_unix: "asc"
      },
      limit: 3
    })
  });
  const { docs: launches } = await res.json();
  console.log("BARAKUNATANA");
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map(({ links, flight_number, details, id, success }) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": id, "img": links.patch.small, "details": details, "flightNumber": flight_number, "success": success })}`)} </div>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log("hello");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>La página de inicio</p> ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/index.astro", void 0);

const $$file = "/Users/alegreiff/Documents/desarrollo/ASTRO/pixie/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
