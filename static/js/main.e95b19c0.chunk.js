(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/einstein-1.b0932b34.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/einstein-2.06653dbb.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/einstein-3.61187d6c.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/einstein-4.69c2f86a.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/einstein-5.385d6f74.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/relativity-formulae.2384305a.svg"},124:function(e,t,a){e.exports=a(313)},129:function(e,t,a){},138:function(e,t,a){},240:function(e,t){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=(a(129),a(109)),s=a(50),c=a.n(s),u=a(110),m=a(111),h=a(112),d=a(122),g=a(113),f=a(15),p=a(123),b=a(114),w=a.n(b),v=a(115),E=a.n(v),y=a(116),k=a.n(y),I=a(117),S=a.n(I),j=a(118),x=a.n(j),C=a(119),z=a.n(C),O=[{original:E.a},{original:k.a},{original:S.a},{original:x.a},{original:z.a}],M=["I've got a feeling we're not in kansas anymore.","I'll have what she's having.","There are 10 types of people: those who understand binary, and those who don\u2019t.","The concept of global warming was created by and for the Chinese","Leave your stupid comments in your pocket!"];var B=a(120),F=a.n(B),_=(a(137),a(138),a(19)),A=a.n(_),L=a(121),N=a.n(L),T=(a(139),a(31)),D=a.n(T),H=a(146),J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).state={font:"Ubuntu",fontSize:12,message:"Default statement",imageIndex:0,show:!1,returnedImage:"",loading:!1},a.generateImage=a.generateImage.bind(Object(f.a)(a)),a.handleSelect=a.handleSelect.bind(Object(f.a)(a)),a.handleImage=a.handleImage.bind(Object(f.a)(a)),a.handleModal=a.handleModal.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"generateImage",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),this.setState({message:M[Math.floor(Math.random()*M.length)]},function(){return console.log(a.state.message)}),e.abrupt("return",fetch(O[this.state.imageIndex].original).then(function(e){return e.blob()}).then(function(e){H.upload([e],{params:{auth:{key:"ee723b70d56f11e8b7809f4882ea3f24"},steps:{":original":{robot:"/upload/handle"},resized:{use:[":original"],robot:"/image/resize",result:!1,height:500,imagemagick_stack:"v1.0.0",resize_strategy:"fit",width:500,zoom:!1},watermarked:{use:["resized"],robot:"/image/resize",result:!0,imagemagick_stack:"v1.0.0",text:[{text:a.state.message,size:parseInt(a.state.fontSize),font:a.state.font,color:"#eeeeee",valign:"bottom",align:"right",x_offset:16,y_offset:-10}]}}},waitForEncoding:!0}).then(function(e){a.setState({show:!0,loading:!1,returnedImage:e.results[0].ssl_url})})}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSelect",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;this.setState(Object(l.a)({},t,a))}},{key:"handleImage",value:function(e){this.setState({imageIndex:e})}},{key:"handleModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:F.a,className:"App-logo",alt:"logo"})),o.a.createElement("h1",null,"Select An Einstein"),o.a.createElement(D.a,{show:this.state.show,onHide:this.handleModal,size:"lg"},o.a.createElement(D.a.Header,null,o.a.createElement(D.a.Body,null,o.a.createElement("img",{src:this.state.returnedImage,alt:"new"})))),o.a.createElement(w.a,{onSlide:function(t){return e.handleImage(t)},items:O,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1}),o.a.createElement(A.a,null,o.a.createElement(A.a.Label,null,"Font"),o.a.createElement(A.a.Control,{name:"font",as:"select",onChange:function(t){return e.handleSelect(t)}},o.a.createElement("option",null,"Ubuntu"),o.a.createElement("option",null,"Arial"),o.a.createElement("option",null,"Comic Sans MS")),o.a.createElement(A.a.Label,null,"Font Size"),o.a.createElement(A.a.Control,{name:"fontSize",as:"select",onChange:function(t){return e.handleSelect(t)}},o.a.createElement("option",null,"12"),o.a.createElement("option",null,"18"),o.a.createElement("option",null,"24")),o.a.createElement("br",null)),o.a.createElement(N.a,{disabled:this.state.loading,onClick:function(t){return e.generateImage(t)},variant:"outline-primary"},"Create My Einstein"),o.a.createElement("br",null),o.a.createElement("div",null,"Icons made by ",o.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,1,2]]]);
//# sourceMappingURL=main.e95b19c0.chunk.js.map