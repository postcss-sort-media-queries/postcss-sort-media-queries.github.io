var e={exports:{}};const t=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,s=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,r=d(t,s,/\(\s*min(-device)?-width/i),i=d(s,t,/\(\s*max(-device)?-width/i),n=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,o=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,c=d(n,o,/\(\s*min(-device)?-height/i),a=d(o,n,/\(\s*max(-device)?-height/i),l=/print/i,p=/^print$/i,u=Number.MAX_VALUE;function m(e){if(null===(e=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(e)))return u;let t=e[1];switch(e[2]){case"ch":t=8.8984375*parseFloat(t);break;case"em":case"rem":t=16*parseFloat(t);break;case"ex":t=8.296875*parseFloat(t);break;case"px":t=parseFloat(t)}return+t}function d(e,t,s){return function(r){return!!e.test(r)||!t.test(r)&&s.test(r)}}function h(e,t){const s=l.test(e),r=p.test(e),i=l.test(t),n=p.test(t);return s&&i?!r&&n?1:r&&!n?-1:e.localeCompare(t):s?1:i?-1:null}function f(e,t){const s=h(e,t);if(null!==s)return s;const n=r(e)||c(e),o=i(e)||a(e),l=r(t)||c(t),p=i(t)||a(t);if(n&&p)return-1;if(o&&l)return 1;let d=m(e),f=m(t);return d===u&&f===u?e.localeCompare(t):d===u?1:f===u?-1:d>f?o?-1:1:d<f?o?1:-1:e.localeCompare(t)}f.desktopFirst=function(e,t){const s=h(e,t);if(null!==s)return s;const n=r(e)||c(e),o=i(e)||a(e),l=r(t)||c(t),p=i(t)||a(t);if(n&&p)return 1;if(o&&l)return-1;const d=m(e),f=m(t);return d===u&&f===u?e.localeCompare(t):d===u?1:f===u?-1:d>f?o?-1:1:d<f?o?1:-1:-e.localeCompare(t)};const x=f;e.exports=(e={})=>(e=Object.assign({sort:"mobile-first"},e),{postcssPlugin:"postcss-sort-media-queries",OnceExit(t,{AtRule:s}){let r=[];var i,n;t.walkAtRules("media",(e=>{let t=e.params;r[t]||(r[t]=new s({name:e.name,params:e.params,source:e.source})),e.nodes.forEach((e=>{r[t].append(e.clone())})),e.remove()})),(i=Object.keys(r),n=e.sort,"function"!=typeof n&&(n="desktop-first"===n?x.desktopFirst:x),i.sort(n)).forEach((e=>{t.append(r[e])}))}});var v=e.exports.postcss=!0,b=e.exports,g=Object.freeze(Object.assign(Object.create(null),e.exports,{[Symbol.toStringTag]:"Module",default:b,postcss:v}));export{g as i};
