(()=>{const t="materialsymbols",e={};"customIcons"in window||(window.customIcons={}),window.customIcons.ms={getIcon:s=>((s,o)=>new Promise((async(n,r)=>{const c=`${s}:${o}`;e[c]&&n(e[c]),e[c]=(async(e,s)=>{const[o,n]=s.split("#"),r=await fetch(`/${t}/icons/${e}/${o}.svg`),c=await r.text(),a=(new DOMParser).parseFromString(c,"text/html");if(!a||!a.querySelector("svg"))return{};const i=a.querySelector("svg").getAttribute("viewBox"),w=a.querySelectorAll("path");let u="";for(const t of w)u+=t.getAttribute("d"),t.classList[0];return{viewBox:i,path:u,paths:{},format:n}})(s,o),n(e[c])})))("rounded",s),getIconList:()=>(async e=>{const s=await fetch(`/${t}/list/rounded`),o=await s.text();return JSON.parse(o)})()}})();