(this.webpackJsonphomegametracker=this.webpackJsonphomegametracker||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),r=(n(9),n(2)),o=(n(10),n(11),n(0)),l=function(e){var t=e.onRouteChanged;return Object(o.jsxs)("div",{className:"Navigation",children:[Object(o.jsx)("div",{onClick:function(){t("home")},className:"Logo",children:Object(o.jsx)("a",{href:"#",children:"Home"})}),Object(o.jsxs)("div",{className:"Menu",children:[Object(o.jsx)("a",{onClick:function(){t("games")},href:"#",children:"Games"}),Object(o.jsx)("a",{onClick:function(){t("friends")},href:"#",children:"Friends"})]})]})},d=(n(13),n(14),n(15),function(e){var t=e.friend,n=e.index,a=e.mode;return function(){switch(a){case"edit":return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("section",{className:"Friend",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",defaultValue:t.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Points"}),Object(o.jsx)("input",{type:"text",defaultValue:t.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Image Url"}),Object(o.jsx)("input",{type:"text",defaultValue:t.imageUrl}),Object(o.jsx)("img",{src:t.imageUrl,alt:"#"})]}),Object(o.jsx)("div",{className:"UpdatePlayerButton",children:Object(o.jsx)("button",{children:"Update player"})})]})});default:return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("section",{className:"Friend",children:[Object(o.jsxs)("h2",{children:["Rank : ",n]}),Object(o.jsxs)("h3",{children:[t.name," : ",t.points,"  "]}),Object(o.jsx)("img",{src:t.imageUrl,alt:"#"})]})})}}()}),j=function(e){var t=e.friends,n=e.mode,a=t.sort((function(e,t){return t.points-e.points}));return function(){switch(n){case"edit":return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("h1",{className:"FriendsManageHeader",children:"Manage your friends"}),Object(o.jsx)("div",{className:"FriendsEdit",children:a.map((function(e,t){return Object(o.jsx)(d,{friend:e,index:t+1,mode:n})}))})]});default:return Object(o.jsx)("div",{className:"Friends",children:a.map((function(e,t){return Object(o.jsx)(d,{friend:e,index:t+1,mode:n})}))})}}()},m=(n(16),function(e){var t=e.party,n=t.players.sort((function(e,t){return t.points-e.points}));return Object(o.jsxs)("div",{className:"Party",children:[Object(o.jsxs)("h2",{children:["Winner : ",n[0].name]}),Object(o.jsx)("img",{src:t.game.imageUrl}),t.date.toLocaleDateString()]})}),u=(n(17),function(e){var t=e.partys.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));return Object(o.jsx)("div",{className:"Partys",children:t.map((function(e){return Object(o.jsx)(m,{party:e})}))})});var b=function(e){var t=e.friends,n=(e.games,e.partys);return Object(o.jsxs)("div",{className:"Home",children:[Object(o.jsx)("h1",{children:"Welcome home"}),Object(o.jsxs)("div",{className:"HomeContent",children:[Object(o.jsx)(u,{partys:n}),Object(o.jsx)(j,{friends:t,mode:"list"})]})]})},h=(n(18),n(19),function(e){var t=e.game;return Object(o.jsxs)("section",{className:"Game",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",defaultValue:t.name})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Image Url"}),Object(o.jsx)("input",{type:"text",defaultValue:t.imageUrl})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"ImageGame",src:t.imageUrl})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"UpdateGameButton",children:"Update game"})})]})}),p=function(e){var t=e.games;return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("h1",{className:"GamesHeader",children:"Manage your games"}),Object(o.jsx)("div",{className:"Games",children:t.map((function(e){return Object(o.jsx)(h,{game:e})}))})]})},x=[{name:"Jean",pseudo:"Jeannot",points:10,imageUrl:"https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg"},{name:"Julie",pseudo:"Julyyy",points:50,imageUrl:"https://media.istockphoto.com/photos/conference-call-picture-id1249750732?s=612x612"},{name:"Romain",pseudo:"Rotor",points:50,imageUrl:"https://media.istockphoto.com/photos/crazy-guys-at-pub-drinking-beer-and-taking-selfie-picture-id871440942?s=612x612"},{name:"Adeline",pseudo:"Boulla",points:150,imageUrl:"https://media.istockphoto.com/photos/smiling-european-woman-holding-video-call-at-home-picture-id1279977965?s=612x612"}],O=[{players:[{name:"Jean",points:10},{name:"Julie",points:50}],game:{name:"Scrabble",imageUrl:"https://www.montres-de-luxe.com/photo/art/default/44254703-36237167.jpg?v=1585622136"},date:new Date("December 17, 1995 03:24:00")},{players:[{name:"Jean",points:10},{name:"Julie",points:50}],game:{name:"Poker",imageUrl:"https://img.huffingtonpost.com/asset/5c933ee32a0000ba024e69bc.jpeg?ops=scalefit_720_noupscale&format=webp"},date:new Date("December 20, 2020 03:24:00")},{players:[{name:"Rotor",points:40},{name:"Boulla",points:150}],game:{name:"Blind test",imageUrl:"https://cibul.s3.amazonaws.com/c4efc99789a44ee1bd3243d04fd3307b.base.image.jpg"},date:new Date("December 25, 2020 03:24:00")}],g=[{id:1,name:"Blind test",imageUrl:"https://cibul.s3.amazonaws.com/c4efc99789a44ee1bd3243d04fd3307b.base.image.jpg"},{id:2,name:"Poker",imageUrl:"https://img.huffingtonpost.com/asset/5c933ee32a0000ba024e69bc.jpeg?ops=scalefit_720_noupscale&format=webp"}];var f=function(){var e=Object(a.useState)("home"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(x),d=Object(r.a)(i,2),m=d[0],u=(d[1],Object(a.useState)(g)),h=Object(r.a)(u,2),f=h[0],v=(h[1],Object(a.useState)(O)),y=Object(r.a)(v,2),N=y[0],U=(y[1],Object(a.useState)("list")),w=Object(r.a)(U,2),k=w[0],F=w[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{onRouteChanged:function(e){switch(c(e),e){case"home":F("list");break;default:F("edit")}}}),function(){switch(n){case"home":return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)(b,{friends:m,games:f,partys:N})});case"friends":return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)(j,{friends:m,mode:k})});case"games":return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)(p,{games:f})})}}()]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.30c63ca1.chunk.js.map