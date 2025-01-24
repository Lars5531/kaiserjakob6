export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/bolliger.png","images/filme.png","images/gregor_jakob.png","images/gurtner.png","images/jakob.png","images/jakob2.png","images/kaiser.png","images/kaiser2.png","images/karlijakob.png","images/luethi.png","images/noah.png","images/panaiia_und_crausaz_ag.png","images/service1.png","images/service2.png","images/service3.png","images/social.png","images/vincenzo_salerno.png","images/vorstellung.png","images/werbe.png","images/winistoerfer.png","images/zaugg.png","logo/android-chrome-192x192.png","logo/android-chrome-512x512.png","logo/apple-touch-icon.png","logo/favicon-16x16.png","logo/favicon-32x32.png","logo/favicon.ico","logo/logo.png","logo/site.webmanifest","projects/444x870","videos/video.mp4"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.CxGX0rQ5.js","app":"_app/immutable/entry/app.DE93ckMQ.js","imports":["_app/immutable/entry/start.CxGX0rQ5.js","_app/immutable/chunks/entry.D3YoA8L5.js","_app/immutable/chunks/runtime.Dx5fny6y.js","_app/immutable/chunks/index-client.C98SYSna.js","_app/immutable/entry/app.DE93ckMQ.js","_app/immutable/chunks/preload-helper.lvW1ahCC.js","_app/immutable/chunks/runtime.Dx5fny6y.js","_app/immutable/chunks/render.uXj9c-Np.js","_app/immutable/chunks/events.DFyfviee.js","_app/immutable/chunks/disclose-version.CMjnySVL.js","_app/immutable/chunks/if.risi6iHK.js","_app/immutable/chunks/index-client.C98SYSna.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/videos",
				pattern: /^\/api\/videos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/videos/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/contact/_server.ts.js'))
			},
			{
				id: "/impressum",
				pattern: /^\/impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
