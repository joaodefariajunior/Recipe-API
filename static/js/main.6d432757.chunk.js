(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=a(2),l=a.n(s),u=a(6),m=a(1),o=(a(13),a(3)),p=a.n(o);function f(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,"Calories:",a.toFixed(0)),c.a.createElement("img",{className:p.a.image,src:n,alt:""}))}var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),o=s[0],p=s[1],b=Object(n.useState)("chicken"),d=Object(m.a)(b,2),h=d[0],E=d[1];Object(n.useEffect)((function(){v()}),[h]);var v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("03956316","&app_key=").concat("8416274d1102f3272a67c49d0b06648a"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"edaman"},"The Edaman API"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(o),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:o,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},3:function(e,t,a){e.exports={recipe:"recipe_recipe__1IG3a",image:"recipe_image__234HM"}},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6d432757.chunk.js.map