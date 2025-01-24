

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C7ksYUeB.js","_app/immutable/chunks/disclose-version.CMjnySVL.js","_app/immutable/chunks/runtime.Dx5fny6y.js","_app/immutable/chunks/legacy.DPygY2ux.js","_app/immutable/chunks/props.BjliC3Y3.js"];
export const stylesheets = ["_app/immutable/assets/0.D9nHgni8.css","_app/immutable/assets/font-awesome.CC8cKAEj.css"];
export const fonts = ["_app/immutable/assets/fontawesome-webfont.B-jkhYfk.woff2","_app/immutable/assets/fontawesome-webfont.CDK5bt4p.woff","_app/immutable/assets/fontawesome-webfont.CQDK8MU3.ttf"];
