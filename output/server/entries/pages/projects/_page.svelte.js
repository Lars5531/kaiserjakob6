import { i as ensure_array_like, c as pop, k as stringify, p as push, h as head, e as bind_props } from "../../../chunks/index2.js";
import { a as attr } from "../../../chunks/attributes.js";
import { N as Nav, F as Footer } from "../../../chunks/Nav.js";
function Projects($$payload, $$props) {
  push();
  let currentIndex = 0;
  const videos = [
    {
      src: "https://player.vimeo.com/video/1048400579?h=5d4d8ea581&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 1
    },
    {
      src: "https://player.vimeo.com/video/1048400569?h=c5f9619903&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 2
    },
    {
      src: "https://player.vimeo.com/video/1048397811?h=442b84d00b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 3
    },
    {
      src: "https://player.vimeo.com/video/1048397857?h=1a9e76f31d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 4
    },
    {
      src: "https://player.vimeo.com/video/1048397822?h=d3b3d2aaa1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 5
    },
    {
      src: "https://player.vimeo.com/video/1048397902?h=019a9b9ca3&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 6
    },
    {
      src: "https://player.vimeo.com/video/1048397874?h=ca176baca9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 7
    },
    {
      src: "https://player.vimeo.com/video/1048398521?h=2b9f2784a7&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "zaugg",
      id: 8
    }
  ];
  const each_array = ensure_array_like(videos);
  $$payload.out += `<section class="bg-black text-white px-4 sm:px-8"><div class="text-center mb-12 max-w-4xl mx-auto"><h2 class="text-4xl sm:text-5xl text-kj_yellow font-bold mb-6">Unsere bisherigen Projekte</h2> <div class="w-[300px] h-[2px] mx-auto bg-gradient-to-r from-transparent via-kj_yellow to-transparent"></div> <p class="text-lg sm:text-xl text-gray-300 mt-4 leading-relaxed px-6 md:px-0">Wir haben bereits eine Vielzahl an Social-Media-Videos für unterschiedliche Unternehmen und Branchen umgesetzt. Ob trendbasierte Inhalte oder Videos zur Verbesserung des Markenimages – jedes Video wurde gezielt entwickelt, um Aufmerksamkeit zu generieren und Marken authentisch in Szene zu setzen. Unsere Arbeit vereint innovative Ideen mit modernem Design und messbarem Erfolg.</p></div> <div class="relative overflow-hidden"><div class="flex"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let video = each_array[$$index];
    $$payload.out += `<div class="flex-none p-6 w-[100%] sm:w-[50%] md:w-[33%] lg:w-[25%] h-[80vh] mx-auto transition-transform duration-500"${attr("style", `transform: translateX(-${stringify(currentIndex * 100)}%)`)}><iframe${attr("src", video.src)}${attr("title", video.title)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" class="w-full h-full rounded-lg shadow-lg"></iframe></div>`;
  }
  $$payload.out += `<!--]--></div> <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">❮</button> <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">❯</button></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  const prerender = true;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Unsere Social Media Projekte – Erfolgreiche Kampagnen und Innovationen</title>`;
    $$payload2.out += `<meta name="description" content="Entdecken Sie unsere Social-Media-Erfolgsgeschichten: kreative Kampagnen und Projekte, die Unternehmen geholfen haben, ihre Marke auf das nächste Level zu bringen."> <meta property="og:title" content="Kaiserjakob GmbH – Social Media Marketing, das wirkt"> <meta property="og:image" content="/logo/logo.png"> <meta property="og:url" content="https://www.kaiserjakob.ch"> <meta name="robots" content="index, follow">`;
  });
  $$payload.out += `<main class="text-white bg-kj_bg min-h-screen">`;
  Nav($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
  bind_props($$props, { prerender });
}
export {
  _page as default
};
