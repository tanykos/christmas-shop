function r(e,n){const t=new Set,o=new Set(e);if(n>o.size)throw new Error("Requested amount exceeds the number of unique elements in the array");for(;t.size<n;){const s=Math.floor(Math.random()*e.length);t.add(e[s])}return t}function i(e){return e.toLowerCase().split(" ").join("-")}export{r as default,i as transformStringToKebab};
//# sourceMappingURL=utils-Dj6Q6ZiA.js.map
