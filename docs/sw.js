if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return d[e]||(a=new Promise(async a=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=a}else importScripts(e),a()})),a.then(()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]})},a=(a,d)=>{Promise.all(a.map(e)).then(e=>d(1===e.length?e[0]:e))},d={require:Promise.resolve(a)};self.define=(a,r,i)=>{d[a]||(d[a]=Promise.resolve().then(()=>{let d={};const c={uri:location.origin+a.slice(1)};return Promise.all(r.map(a=>{switch(a){case"exports":return d;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return d.default||(d.default=a),d})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"456d8b475f461a0085058ed84f4c1dd9"},{url:"about/glossary/index.html",revision:"66a42ef929ed910a64355ff936b5d531"},{url:"about/index.html",revision:"4cdcf02fe2d4bc4312836d96f5576d2c"},{url:"css/swagger-ui.css",revision:"2bea51f4d46e7ee5b51d2d3656ffda58"},{url:"docs/index.html",revision:"7ad967fda6a8c3a4068363a222a9a7c0"},{url:"docs/nt/1-korinto/1-korinto-1/index.html",revision:"af228548896f8bc37861e2c968209920"},{url:"docs/nt/1-korinto/1-korinto-2/index.html",revision:"3e44a071a1f22bc51528f49dfde2cbbc"},{url:"docs/nt/1-korinto/index.html",revision:"30122875157d8f0feae98d274669da2a"},{url:"docs/nt/index.html",revision:"54344b02160a14c8039e7088c05170ef"},{url:"docs/nt/roma/index.html",revision:"cce352e1f18bcde7aeb34aa19044a162"},{url:"docs/nt/roma/roma-1/index.html",revision:"6ef807fa963905decc07e881706f1f2f"},{url:"docs/nt/roma/roma-10/index.html",revision:"7a2cec59af195a75c63144ac2fc33dc0"},{url:"docs/nt/roma/roma-11/index.html",revision:"f1ed2ce722f66b371fa908cafcd4b297"},{url:"docs/nt/roma/roma-12/index.html",revision:"ffa9c3fa5b3d792a07151b5be6f14190"},{url:"docs/nt/roma/roma-13/index.html",revision:"7b4d1ba599a99ba681c716571cc702c0"},{url:"docs/nt/roma/roma-14/index.html",revision:"d3445126614854b2d355fa9265b831fa"},{url:"docs/nt/roma/roma-15/index.html",revision:"dc6bc4092ec21251645c6564f1b05456"},{url:"docs/nt/roma/roma-16/index.html",revision:"fbd6008e00864bc21be4777c14db5c65"},{url:"docs/nt/roma/roma-2/index.html",revision:"aa4eeb3ea89a0a506f6cbf0fcb1a6572"},{url:"docs/nt/roma/roma-3/index.html",revision:"b3be08966a30367526c67b23a16da128"},{url:"docs/nt/roma/roma-4/index.html",revision:"fd57836e02074079dc00fd635d5c5a10"},{url:"docs/nt/roma/roma-5/index.html",revision:"6375fca12ba7bf30f00eabc3f3b5b420"},{url:"docs/nt/roma/roma-6/index.html",revision:"6d5e0f8fd5d176d596b3b61b7c5ab8a6"},{url:"docs/nt/roma/roma-7/index.html",revision:"edf8a10a7adc98cb61d79c45c9238f55"},{url:"docs/nt/roma/roma-8/index.html",revision:"9cfbe879ad46acb830aecfc833ad88a5"},{url:"docs/nt/roma/roma-9/index.html",revision:"7f4ba52bd3a4630fec2036320da896c8"},{url:"docs/ot/index.html",revision:"166fac638350bd8d6538658b775f625e"},{url:"index.html",revision:"57eea12cb30d2d37bebeb3daede2d56a"},{url:"js/main.min.7afee248b9b3c1d4438c6841cc272ae0ac1f81a3ee5c0ed939f1d57c18de3f7d.js",revision:"2d2c77daa11a8ebbb1f962a42c6cddb2"},{url:"js/swagger-ui-bundle.js",revision:"928fbb3dec6dc1a62165bd25aa48af9d"},{url:"js/swagger-ui-standalone-preset.js",revision:"3a02d3a600039d72ab0a2b191acf2118"},{url:"manifest.json",revision:"ed32f1f3a4677b37feab1f4ebd0f465d"},{url:"offline-search-index.c6090b6c64301303b398b28c25970c02b553198397603e1eb9547c648e961fe734388e422568a51c0c031eb6bd3857527f43be5fefd89e07cf08923b5810da43.json",revision:"a612ca43fbc6fa57b0e7f434e3863f24"},{url:"scss/main.min.43ee7e241ab7c4b4a62d9ecde9817e5a5794bf4c1cb1fc84939e32267d3810df.css",revision:"4dabb30d3384d0ba3494a695c4b00d4e"},{url:"search/index.html",revision:"227f63619d4a0fe1cbda066b520b16dd"}],{})}));
//# sourceMappingURL=sw.js.map
