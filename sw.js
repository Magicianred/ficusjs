if(!self.define){const i=i=>{"require"!==i&&(i+=".js");let e=Promise.resolve();return c[i]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=i,document.head.appendChild(c),c.onload=e}else importScripts(i),e()})),e.then(()=>{if(!c[i])throw new Error(`Module ${i} didn’t register its module`);return c[i]})},e=(e,c)=>{Promise.all(e.map(i)).then(i=>c(1===i.length?i[0]:i))},c={require:Promise.resolve(e)};self.define=(e,a,n)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const s={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return c;case"module":return s;default:return i(e)}})).then(i=>{const e=n(...i);return c.default||(c.default=e),c})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(i){"use strict";self.addEventListener("message",i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()}),i.precacheAndRoute([{url:"css/darcula.css",revision:"e68fd261fd70d657b21575184d7682b2"},{url:"css/doc.css",revision:"f34374c1dbdbb8e5503bd273559ce06a"},{url:"css/home.css",revision:"976803f51a89c75cb400077f3934cec1"},{url:"css/scribbler-doc.css",revision:"c594dbfb3d587bd485130f817946c527"},{url:"css/scribbler-global.css",revision:"7c68e29bc5f16a96c771038a4ce3cecc"},{url:"css/scribbler-landing.css",revision:"aaa5dadf944be98252f2b6d77bb40787"},{url:"docs/browser-support/index.html",revision:"6534c76613a241c5d643c4bfe40e35ba"},{url:"docs/components/index.html",revision:"3ab6e97bf2952ea70c807a58bbf8ea44"},{url:"docs/event-bus/index.html",revision:"38d97d142a32b9add1b54cf473fe3ac3"},{url:"docs/features/index.html",revision:"c4ce76e409012b350036988c3ce1f761"},{url:"docs/getting-started/index.html",revision:"be74672da14f4f58d7fb543d68a091ab"},{url:"docs/going-build-less/index.html",revision:"c80e8ed4f95226c25e673a7f3c63e7f0"},{url:"docs/index.html",revision:"adcfe0766253957ddf08a11e4a32b4f0"},{url:"docs/installation/index.html",revision:"a72d93ffc1f50a83708b7a21e8f1d024"},{url:"docs/legacy-browsers/index.html",revision:"805edd65842686c14b75a6c4a6bdcb13"},{url:"docs/modules/index.html",revision:"84af06f8a31422016d9b550f462fb71d"},{url:"docs/router/index.html",revision:"29e6b1a51284e717996dd87bc0c330c3"},{url:"docs/stores/index.html",revision:"b8ed21d60046a768a33e0de73db55755"},{url:"favicon.ico",revision:"9500c1c7e1921df2eadfaf0a8b4ef778"},{url:"img/angle_up.svg",revision:"374066f276653a657f519a665abc08a4"},{url:"img/checkmark.svg",revision:"c21feaddd1021e077125a5ab772f22cf"},{url:"img/favicons/android-icon-144x144.png",revision:"be969c9187bc9de41d693a6e7950fad4"},{url:"img/favicons/android-icon-192x192.png",revision:"eb6eeedfa9af32961787ad5c0d3ae92b"},{url:"img/favicons/android-icon-36x36.png",revision:"a6f87a40a28503125ecf30fa617c5fd6"},{url:"img/favicons/android-icon-48x48.png",revision:"61dd13213da57a72d48a5f80a705582a"},{url:"img/favicons/android-icon-72x72.png",revision:"ae49cf86623296648316ec13ba7f4ba5"},{url:"img/favicons/android-icon-96x96.png",revision:"b7f774ec0b6545fddd89d4bf90f6767f"},{url:"img/favicons/apple-icon-114x114.png",revision:"8a170264c59658e3a7aea42ad81091a8"},{url:"img/favicons/apple-icon-120x120.png",revision:"7dd74694531e5ab026c9006dd3c9942a"},{url:"img/favicons/apple-icon-144x144.png",revision:"be969c9187bc9de41d693a6e7950fad4"},{url:"img/favicons/apple-icon-152x152.png",revision:"39453150c5e58d0ce6f55f6445098373"},{url:"img/favicons/apple-icon-180x180.png",revision:"bbc776a3c6aac5da0626016b531fc267"},{url:"img/favicons/apple-icon-57x57.png",revision:"27b8cf2e16e35864db54d602a20ba269"},{url:"img/favicons/apple-icon-60x60.png",revision:"7381daaf3d9f869dccaaee632281778c"},{url:"img/favicons/apple-icon-72x72.png",revision:"ae49cf86623296648316ec13ba7f4ba5"},{url:"img/favicons/apple-icon-76x76.png",revision:"682e139ca16cd96edb7ab178ae890714"},{url:"img/favicons/apple-icon-precomposed.png",revision:"831ed0fd379c20e092248b2135c56e9c"},{url:"img/favicons/apple-icon.png",revision:"831ed0fd379c20e092248b2135c56e9c"},{url:"img/favicons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"img/favicons/favicon-16x16.png",revision:"98b4aeb28c308b37bdbb023c5afca51d"},{url:"img/favicons/favicon-32x32.png",revision:"da776031c892d2434630f94f2e45f178"},{url:"img/favicons/favicon-512x512.png",revision:"e96dd8784b662bc56edd13eeef4fd090"},{url:"img/favicons/favicon-96x96.png",revision:"b7f774ec0b6545fddd89d4bf90f6767f"},{url:"img/favicons/favicon.ico",revision:"9500c1c7e1921df2eadfaf0a8b4ef778"},{url:"img/favicons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"img/favicons/maskable_icon.png",revision:"602578a8ecfc85ae76d38a02b5d80196"},{url:"img/favicons/ms-icon-144x144.png",revision:"be969c9187bc9de41d693a6e7950fad4"},{url:"img/favicons/ms-icon-150x150.png",revision:"21b7f73f466d0ad77ed9dc87d2b92f36"},{url:"img/favicons/ms-icon-310x310.png",revision:"3487ca0dda61d80b91ab5f96f8aa0e89"},{url:"img/favicons/ms-icon-70x70.png",revision:"c5932db8e0d3534c305c1d4f37de5f8a"},{url:"img/logo.svg",revision:"2befbe08895f766a9c615d2d1221381b"},{url:"index.html",revision:"71f1457735fc773b0c44136881ec4eaa"},{url:"js/highlight.pack.js",revision:"a9c5dae3385e70289854966505ea6bbd"},{url:"js/scribbler.js",revision:"876b2ccf9b2c40157c7e150aa6cf1d1f"},{url:"js/service-worker.js",revision:"ade91a199a292910292675c48bf145c1"},{url:"manifest.json",revision:"6be75c80db23dba749c39a065744a904"}],{})}));
//# sourceMappingURL=sw.js.map
