if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let d=Promise.resolve();return r[e]||(d=new Promise(async d=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=d}else importScripts(e),d()})),d.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},d=(d,r)=>{Promise.all(d.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(d)};self.define=(d,a,i)=>{r[d]||(r[d]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+d.slice(1)};return Promise.all(a.map(d=>{switch(d){case"exports":return r;case"module":return o;default:return e(d)}})).then(e=>{const d=i(...e);return r.default||(r.default=d),r})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"b9e53c6f87a72ffa8742ed94131557cc"},{url:"about/glossary/index.html",revision:"89d0084bf6535dabb1b5fe959b84677b"},{url:"about/index.html",revision:"142f71bc82250c615dcd14573a7a029f"},{url:"css/swagger-ui.css",revision:"2bea51f4d46e7ee5b51d2d3656ffda58"},{url:"docs/index.html",revision:"2e5ca4bf477451b250af6e3bb0c0afff"},{url:"docs/nt/1-korinto/1-korinto-1/index.html",revision:"61dbbebf8a1a5f32827d7b74628d252c"},{url:"docs/nt/1-korinto/1-korinto-2/index.html",revision:"86a23500e7e4ed2031401a329e679df1"},{url:"docs/nt/1-korinto/index.html",revision:"f4327aba16f9a9672c864ee3fa6a2d7c"},{url:"docs/nt/index.html",revision:"d2d764d986c556f4311f4a952498bece"},{url:"docs/nt/roma/index.html",revision:"548ad24f7de37b0765b96e9eed010500"},{url:"docs/nt/roma/roma-1/index.html",revision:"c87c78335e66a6f61c7f8ddec813c61a"},{url:"docs/nt/roma/roma-10/index.html",revision:"57cfd8703be08bea4e81f35cba7371d2"},{url:"docs/nt/roma/roma-11/index.html",revision:"f14e7419b258ff57ad6fa573c406f9e5"},{url:"docs/nt/roma/roma-12/index.html",revision:"3c538bf3e5fe7404ba1485478dc1c70b"},{url:"docs/nt/roma/roma-13/index.html",revision:"47e1721e718a13107c42434ad4a3f32b"},{url:"docs/nt/roma/roma-14/index.html",revision:"777e9892764d8745d695ae643817cdac"},{url:"docs/nt/roma/roma-15/index.html",revision:"f6e84b110b9436f1e88acdf63d94aca1"},{url:"docs/nt/roma/roma-16/index.html",revision:"4adc8c7e3d0d8742f87172259ae95e08"},{url:"docs/nt/roma/roma-2/index.html",revision:"acd8438c659e3565bf01774bf13c86e7"},{url:"docs/nt/roma/roma-3/index.html",revision:"a04269f4cbf0523cdc98844b58605d96"},{url:"docs/nt/roma/roma-4/index.html",revision:"373ed6b802e6efee405e207113522ea1"},{url:"docs/nt/roma/roma-5/index.html",revision:"59f4d6ceedccab80b6b78e9fcd38a1d1"},{url:"docs/nt/roma/roma-6/index.html",revision:"15e44abaef794d81e57ed8176c92def2"},{url:"docs/nt/roma/roma-7/index.html",revision:"b2d3df493bd2c70623a1a38c425ab30a"},{url:"docs/nt/roma/roma-8/index.html",revision:"b892225eb6aaf261cc65c166e9e65bab"},{url:"docs/nt/roma/roma-9/index.html",revision:"42a886bf7a2abea2b591bff990078434"},{url:"docs/ot/index.html",revision:"bd2156bcec61ebb75a654866b3654fef"},{url:"index.html",revision:"507b1b10f0bde76bcb34d8f583a523f1"},{url:"js/main.min.7afee248b9b3c1d4438c6841cc272ae0ac1f81a3ee5c0ed939f1d57c18de3f7d.js",revision:"2d2c77daa11a8ebbb1f962a42c6cddb2"},{url:"js/swagger-ui-bundle.js",revision:"928fbb3dec6dc1a62165bd25aa48af9d"},{url:"js/swagger-ui-standalone-preset.js",revision:"3a02d3a600039d72ab0a2b191acf2118"},{url:"manifest.json",revision:"ed32f1f3a4677b37feab1f4ebd0f465d"},{url:"offline-search-index.b16df49f07e96c537f2ad6594454b0bb3e782de0c282d3ea98712e5bf6a4dd96c597748a6f01d22c4ad123704ae62b3803771c5b244bde5f0e2dd61433530a17.json",revision:"809b05aa228f2ed0af829320ace5dfbe"},{url:"scss/main.min.43ee7e241ab7c4b4a62d9ecde9817e5a5794bf4c1cb1fc84939e32267d3810df.css",revision:"4dabb30d3384d0ba3494a695c4b00d4e"},{url:"search/index.html",revision:"94822a3f289d62dfc136c2095bf52cfe"}],{})}));
//# sourceMappingURL=sw.js.map
