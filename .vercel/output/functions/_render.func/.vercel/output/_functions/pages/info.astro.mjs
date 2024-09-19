/* empty css                                 */
export { renderers } from '../renderers.mjs';

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2 class="bg-teal-500 text-white text-4xl">Este es el info</h2>
</body>
</html>`
	}
render["astro:html"] = true;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: render
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
