import{transformStringToKebab as i}from"./utils-Dj6Q6ZiA.js";function n(c,d){d.forEach(a=>{const e=document.createElement("div");e.classList.add("card"),e.dataset.modal="card-item",c.appendChild(e);const t=i(a.category),s=`./images/gift-${t}.png`;e.innerHTML=`
      <div class="card-img">
        <img class="prodact-img" src=${s} alt=${a.name}>
      </div>
      <div class="card-text">
        <div class="card-category ${t}">${a.category}</div>
        <h3 class="heading-3 card-name">${a.name}</h3>
      </div>`})}export{n as a};
//# sourceMappingURL=cards-BqsdUq2z.js.map
