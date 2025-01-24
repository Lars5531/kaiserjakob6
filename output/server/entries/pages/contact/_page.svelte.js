import { f as escape_html, h as head, e as bind_props } from "../../../chunks/index2.js";
import { a as attr } from "../../../chunks/attributes.js";
import { N as Nav, F as Footer } from "../../../chunks/Nav.js";
function Contact($$payload) {
  let name = "";
  let email = "";
  let message = "";
  let company = "";
  let phone = "";
  $$payload.out += `<section class="bg-black mx-5"><div class="max-w-2xl mx-auto rounded-xl shadow-2xl"><h2 class="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-wide text-center">Kontaktformular</h2> <div class="w-[300px] h-[2px] mx-auto bg-gradient-to-r from-transparent via-kj_yellow to-transparent mb-10"></div> <p class="text-white text-center text-lg leading-relaxed text-neutral-400 mb-6 font-bold">Kontaktieren Sie uns über das Formular, schreiben Sie uns direkt per E-Mail an <a href="mailto:fabio@kaiserjakob.ch" class="text-kj_yellow underline">fabio@kaiserjakob.ch</a> oder rufen Sie uns unter <a href="tel:+41794666802" class="text-kj_yellow underline">+41 79 466 68 02</a> an.</p> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form class="space-y-8"><div><label for="name" class="block text-lg font-medium text-white">Name</label> <input type="text" id="name"${attr("value", name)} class="text-white bg-neutral-800 w-full px-6 py-3 mt-2 border border-gray-500 rounded-xl focus:ring-2 focus:ring-kj_yellow focus:ring-opacity-75 placeholder:text-neutral-500 transition-all" placeholder="Max Mustermann" required></div> <div><label for="company" class="block text-lg font-medium text-white">Unternehmen (optional)</label> <input type="text" id="company"${attr("value", company)} class="text-white bg-neutral-800 w-full px-6 py-3 mt-2 border border-gray-500 rounded-xl focus:ring-2 focus:ring-kj_yellow focus:ring-opacity-75 placeholder:text-neutral-500 transition-all" placeholder="Firma XYZ"></div> <div><label for="email" class="block text-lg font-medium text-white">E-Mail</label> <input type="email" id="email"${attr("value", email)} class="text-white bg-neutral-800 w-full px-6 py-3 mt-2 border border-gray-500 rounded-xl focus:ring-2 focus:ring-kj_yellow focus:ring-opacity-75 placeholder:text-neutral-500 transition-all" placeholder="max@mustermann.com" required></div> <div><label for="phone" class="block text-lg font-medium text-white">Telefonnummer</label> <input type="tel" id="phone"${attr("value", phone)} class="text-white bg-neutral-800 w-full px-6 py-3 mt-2 border border-gray-500 rounded-xl focus:ring-2 focus:ring-kj_yellow focus:ring-opacity-75 placeholder:text-neutral-500 transition-all" placeholder="+41 79 466 68 02" required></div> <div><label for="message" class="block text-lg font-medium text-white">Nachricht</label> <textarea id="message" class="text-white bg-neutral-800 w-full h-48 px-6 py-3 mt-2 border border-gray-500 rounded-xl focus:ring-2 focus:ring-kj_yellow focus:ring-opacity-75 placeholder:text-neutral-500 transition-all" placeholder="Ihre Nachricht hier..." required>`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="font-semibold">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button style="box-shadow: inset -1px 1px 2px #ffffff, 0 0 5px #facc15;" type="submit" class="w-full bg-kj_yellow text-black py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-kj_yellow">Nachricht senden</button>`;
  }
  $$payload.out += `<!--]--></div></form></div></section>`;
}
function _page($$payload, $$props) {
  const prerender = true;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Kontaktieren Sie uns – Social Media Erfolg beginnt hier!</title>`;
    $$payload2.out += `<meta name="description" content="Nehmen Sie Kontakt auf und erfahren Sie, wie unsere Social-Media-Lösungen Ihre Online-Präsenz stärken und Ihre Ziele erreichen können. Jetzt Beratung sichern!"> <meta property="og:title" content="Kaiserjakob GmbH – Social Media Marketing, das wirkt"> <meta property="og:image" content="/logo/logo.png"> <meta property="og:url" content="https://www.kaiserjakob.ch"> <meta name="robots" content="index, follow">`;
  });
  $$payload.out += `<main class="text-white bg-kj_bg min-h-screen">`;
  Nav($$payload);
  $$payload.out += `<!----> `;
  Contact($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
  bind_props($$props, { prerender });
}
export {
  _page as default
};
