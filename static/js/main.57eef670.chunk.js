(this["webpackJsonpmy-pet-project"]=this["webpackJsonpmy-pet-project"]||[]).push([[0],{100:function(e,t,a){e.exports={categoriesWrapper:"GigCategories_categoriesWrapper__Ni7zz"}},109:function(e,t,a){},110:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(39),i=a.n(c),s=(a(109),a(110),a(95)),o=a(96),l=a(104),u=a(103),d=a(16),p=a(7),j=a.n(p),m=a(62),f=function(e){if(!e.textField&&!e.textField)throw new m.a({textField:"Can't be empty"})},h=a(234),b=a(233),x=a(10),O=a(63),g=a(59),_=a.n(g),v=a(2),y=function(e){e.input;var t=e.meta,a=(e.child,e.element,Object(O.a)(e,["input","meta","child","element"])),r=t.touched&&t.error;return Object(v.jsxs)("div",{className:_.a.formControl+" "+(r?_.a.error:""),children:[Object(v.jsx)("div",{children:a.children}),r&&Object(v.jsxs)("span",{children:[" ",t.error," "]})]})},S=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(O.a)(e,["input","meta","child","element"]));return Object(v.jsxs)(y,Object(x.a)(Object(x.a)({},e),{},{children:[" ",Object(v.jsx)("input",Object(x.a)(Object(x.a)({},t),a))," "]}))},k=Object(b.a)({form:"searchGif"})((function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:j.a.searchFormBlock,onSubmit:e.dirty?e.handleSubmit:e.handleSubmit(f),children:[Object(v.jsx)(h.a,{name:"textField",type:"input",component:S,label:"TextField"}),Object(v.jsx)("button",{className:j.a.searchFormBtn,disabled:e.preload,children:" \u043f\u043e\u0438\u0441\u043a"})]})})})),C=a.p+"static/media/Preloader.98b61a8c.svg",P=a(99),N=a.n(P),G=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:N.a.Preloader,src:C,alt:"Preloader"})})},w=function(e){return Object(v.jsx)("div",{className:j.a.GifWrapper,children:e.preload&&!e.data?Object(v.jsx)("div",{className:j.a.preloaderBlock,children:Object(v.jsx)(G,{})}):e.data.map((function(e){return Object(v.jsx)("span",{className:j.a.imageBlock,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{className:j.a.images,src:e.images.original.url,alt:""}),Object(v.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(v.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(v.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]})},e.id)}))})},F=function(e){return Object(v.jsx)("div",{children:e.preload?Object(v.jsx)("div",{className:j.a.preloaderBlock,children:Object(v.jsx)(G,{})}):e.dataSearch.reverse().map((function(e){return Object(v.jsxs)("span",{className:j.a.imageBlock,children:[Object(v.jsx)("img",{className:j.a.images,src:e.images.original.url,alt:""}),Object(v.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(v.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(v.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]},e.id)}))})},B=a(100),T=a.n(B),E=function(e){var t=e.setCategoriesSearchGif;return Object(v.jsx)("div",{className:T.a.categoriesWrapper,children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{onClick:function(e){t(e.currentTarget.innerText)},children:" \u0421\u043c\u0435\u0448\u043d\u044b\u0435"}),Object(v.jsx)("li",{onClick:function(e){t(e.currentTarget.innerText)},children:" \u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"}),Object(v.jsx)("li",{onClick:function(e){t(e.currentTarget.innerText)},children:" \u041c\u0435\u043c\u044b"})]})})},I=function(e){return Object(v.jsxs)("div",{className:j.a.wrapper,children:[Object(v.jsx)(E,{setCategoriesSearchGif:e.setCategoriesSearchGif}),Object(v.jsx)("span",{children:Object(v.jsx)(k,{onSubmit:function(t){!function(t){e.searchGif(t)}(t.textField)}})}),Object(v.jsx)(F,{preload:e.preload,dataSearch:e.dataSearch}),Object(v.jsx)(w,{preload:e.preload,data:e.data})]})},D=a(19),W=a.n(D),J=a(42),Q=a(101).create({baseURL:"https://api.giphy.com/v1/gifs/trending?api_key=".concat("'YQiZ73lqJTxPV7D3Px4fIIPexS661EQy' // Called in api/api.js","&limit=4&rating=r")}),Z=function(){return Q.get("").then((function(e){return e.data}))},q=function(e){return Q.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("'YQiZ73lqJTxPV7D3Px4fIIPexS661EQy' // Called in api/api.js","&q=").concat(e,"&limit=1&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))},R=function(e){return Q.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("'YQiZ73lqJTxPV7D3Px4fIIPexS661EQy' // Called in api/api.js","&q=").concat(e,"&limit=4&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))},V="SET_GIF",L="SET_SEARCH_GIF",Y="ON_PRELOADER",A={data:[],dataSearch:[],preload:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(x.a)(Object(x.a)({},e),{},{data:t.data});case L:return Object(x.a)(Object(x.a)({},e),{},{dataSearch:e.dataSearch.concat(t.data)});case Y:return Object(x.a)(Object(x.a)({},e),{},{preload:t.isTrue});default:return e}},z=function(e){return{type:V,data:e}},H=function(e){return{type:L,data:e}},U=function(e){return{type:Y,isTrue:e}},X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).searchGif=function(t){e.props.setSearchGif(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.setGif()}},{key:"render",value:function(){return Object(v.jsx)(I,{data:this.props.data,dataSearch:this.props.dataSearch,searchGif:this.searchGif,setCategoriesSearchGif:this.props.setCategoriesSearchGif,preload:this.props.preload})}}]),a}(n.a.Component),K=X=Object(d.b)((function(e){return{data:e.mainPage.data,dataSearch:e.mainPage.dataSearch,currentText:e.mainPage.currentText,preload:e.mainPage.preload}}),{setGif:function(e,t){return function(){var a=Object(J.a)(W.a.mark((function a(r){var n;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(U(!0)),a.next=3,Z(e,t);case 3:n=a.sent,r(z(n.data)),r(U(!1));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setSearchGif:function(e){return function(){var t=Object(J.a)(W.a.mark((function t(a){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U(!0)),t.next=3,q(e);case 3:r=t.sent,a(U(!1)),a(H(r.data));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCategoriesSearchGif:function(e){return function(){var t=Object(J.a)(W.a.mark((function t(a){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U(!0)),t.next=3,R(e);case 3:r=t.sent,a(z(r.data)),a(U(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(X),$=a(6),ee=a(102),te=a(235),ae=Object($.c)({mainPage:M,form:te.a}),re=Object($.d)(ae,Object($.a)(ee.a));var ne=function(){return Object(v.jsx)(d.a,{store:re,children:Object(v.jsx)(K,{})})};i.a.render(Object(v.jsx)(ne,{}),document.getElementById("root"))},59:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2DFbf",error:"FormsControls_error__2XV4D",formSummaryError:"FormsControls_formSummaryError__2b1FN"}},7:function(e,t,a){e.exports={wrapper:"mainPage_wrapper__1Z0yV",gifWrapper:"mainPage_gifWrapper__2ZBMi",searchFormBlock:"mainPage_searchFormBlock__kW0-b",form:"mainPage_form__17dum",images:"mainPage_images__1LZ8C",descriptionBlock:"mainPage_descriptionBlock__2JpL9",imageBlock:"mainPage_imageBlock__2OfY6"}},99:function(e,t,a){e.exports={Preloader:"preloader_Preloader__3yMGR"}}},[[232,1,2]]]);
//# sourceMappingURL=main.57eef670.chunk.js.map