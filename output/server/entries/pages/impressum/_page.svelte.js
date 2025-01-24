import { h as head, f as escape_html, e as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
import { N as Nav, F as Footer } from "../../../chunks/Nav.js";
function _page($$payload, $$props) {
  push();
  const prerender = true;
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta name="description" content="Wir revolutionieren Ihre Online-Präsenz durch innovative Social-Media-Kampagnen und kreative Inhalte, die Ihre Zielgruppe begeistern und echte Ergebnisse liefern."> <meta property="og:title" content="Kaiserjakob GmbH – Social Media Marketing, das wirkt"> <meta property="og:image" content="/logo/logo.png"> <meta property="og:url" content="https://www.kaiserjakob.ch">`;
  });
  $$payload.out += `<main class="text-white bg-kj_bg min-h-screen">`;
  Nav($$payload);
  $$payload.out += `<!----> <section class="bg-kj_bg text-gray-200 p-8"><div class="max-w-4xl mx-auto"><h1 class="text-3xl font-bold mb-6">Impressum</h1> <div class="space-y-4"><div><p><span class="font-semibold text-kj_yellow">Kaiserjakob GmbH</span><br> Biberiststrasse 10h<br> 4500 Solothurn<br> Schweiz</p></div> <div><h2 class="text-xl font-semibold">Vertreten durch:</h2> <p>Geschäftsführer: Samuel Kaiser, Fabio Jakob</p></div> <div><h2 class="text-xl font-semibold">Kontakt:</h2> <p>Telefon: <a href="tel:+41794666802" class="font-semibold text-kj_yellow">+41 (0) 79 466 68 02</a><br> E-Mail: <a href="mailto:info@kaiserjakob.ch" class="font-semibold text-kj_yellow">info@kaiserjakob.ch</a></p></div> <div><h2 class="text-xl font-semibold">Handelsregistereintrag:</h2> <p>Eintragung im Handelsregister des Kantons Solothurn<br> Handelsregisternummer: CH-241.4.024.962-4<br> UID: CHE-366.662.587</p></div> <div><h2 class="text-xl font-semibold">Unternehmenszweck:</h2> <p>Erbringung von Marketingdienstleistungen, insbesondere im Bereich des digitalen Marketings. Die Gesellschaft kann Zweigniederlassungen und Tochtergesellschaften im In- und Ausland errichten und sich an anderen Unternehmen beteiligen sowie alle Geschäfte tätigen, die direkt oder indirekt mit ihrem Zweck in Zusammenhang stehen. Ferner kann sie Grundeigentum erwerben, belasten, veräußern und verwalten sowie Finanzierungen vornehmen.</p></div> <footer class="mt-8 border-t pt-4 text-sm text-gray-200"><p>KaiserJakob GmbH © ${escape_html(currentYear)} – Alle Rechte vorbehalten.</p></footer></div></div></section> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
  bind_props($$props, { prerender });
  pop();
}
export {
  _page as default
};
