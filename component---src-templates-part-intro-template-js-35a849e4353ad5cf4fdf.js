(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"E+oP":function(e,a,t){var n=t("A90E"),o=t("QqLw"),r=t("03A+"),i=t("Z0cm"),s=t("MMmD"),c=t("DSRE"),l=t("6sVZ"),d=t("c6wG"),u=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||d(e)||r(e)))return!e.length;var a=o(e);if("[object Map]"==a||"[object Set]"==a)return!e.size;if(l(e))return!n(e).length;for(var t in e)if(u.call(e,t))return!1;return!0}},GGGK:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return L}));var n=t("KQm4"),o=(t("Ppn1"),t("XFRJ")),r=t("mt4B"),i=t("jsr+"),s=t("Bl7J"),c=t("76ZC"),l=t.n(c),d=t("kl3L"),u=t("q1tI"),p=t.n(u),m=t("vrFN"),b=t("u1fg"),g=t("GkXj"),k=t.n(g),v=t("KJAY"),f=t.n(v),h=t("gqR3"),E=t.n(h),y=t("5I0T"),R=t.n(y),x=t("ymbu"),C=t.n(x),N=t("Zosa"),j=t("33yf"),w=t.n(j),S=t("c7NW"),F=t.n(S),I=t("xB9W");function L(e){let{data:a}=e;const{markdownRemark:t}=a,{frontmatter:c,html:u}=t,{mainImage:g,part:v,lang:h}=c,y=f()(C.a[h][v])?[]:Object.keys(C.a[h][v]),x={replace:e=>{let{type:a,attribs:t,children:n}=e;if("tag"===a&&"intro"===t.class)return p.a.createElement("div",{className:"col-7"},k()(n,x))}};return p.a.createElement(s.a,null,p.a.createElement(m.a,{lang:h,title:`Fullstack ${"fi"===h?"osa":"part"}${v}`,description:E.a[h],keywords:[].concat(Object(n.a)(R.a),[C.a[h][v]?Object.values(C.a[h][v]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(r.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:`url(${w.a.resolve(g.publicURL)})`,backgroundColor:b[N.a[v]]}},p.a.createElement(i.a,{className:"container"},p.a.createElement(o.a,{className:"breadcrumb",content:[{backgroundColor:b[N.a[v]],text:"Fullstack",link:`/${"fi"===h?"":h+"/"}#course-contents`},{backgroundColor:b.black,text:`${"fi"===h?"Osa":"Part"} ${v}`}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},l()(u,x)),y&&p.a.createElement(o.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:y.map(e=>({backgroundColor:b.white,letter:e,path:Object(I.a)(h,v,"/"+F()(C.a[h][v][e])),text:`${e} ${C.a[h][v][e]}`}))}))),p.a.createElement(d.a,{part:v,lang:h})))}},KJAY:function(e,a,t){var n=t("sZCt")("isEmpty",t("E+oP"),t("Eszj"));n.placeholder=t("wuTn"),e.exports=n},Ppn1:function(e,a,t){},U4Ha:function(e){e.exports=JSON.parse('{"en":13,"es":10,"fi":13,"fr":3,"ptbr":5,"zh":13}')},XFRJ:function(e,a,t){"use strict";t("m4Pe");var n=t("jsr+"),o=t("Wbzz"),r=t("q1tI"),i=t.n(r),s=t("u1fg");const c=e=>{let{className:a,wrapperClassName:t,link:r,content:c,stack:l,bold:d,thickBorder:u,upperCase:p,...m}=e;const b=i.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},c.map((e,a)=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===s.black?"white":s.black};return i.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},m),i.a.createElement("div",{className:`arrow__rectangle ${d?"bold":""} ${u?"arrow__rectangle--thick-border":""}`,style:t},e.link?i.a.createElement(o.Link,{to:e.link},p?e.text.toUpperCase():e.text):p?e.text.toUpperCase():e.text),i.a.createElement("div",{className:"arrow__point "+(u?"arrow__point--thick-border":""),style:t}))}));let g;return l||r?!l&&r?g=i.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},i.a.createElement(o.Link,{to:r,style:{display:"inline-block"}},b)):l&&(g=i.a.createElement("div",{className:"col-10 spacing--after "+t},i.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},c.map(e=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===s.black?"white":s.black};return i.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},m),i.a.createElement(n.a,{flex:!0,className:"arrow__rectangle",style:t},i.a.createElement("p",{className:"arrow--stacked-title"},i.a.createElement("span",null,e.text))),i.a.createElement("div",{className:"arrow__point",style:t}))})))):g=i.a.createElement("div",{className:"col-10 spacing--after"},b),g};c.defaultProps={className:"",wrapperClassName:""},a.a=c},Zosa:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"part10-light-blue",11:"purple",12:"pale-pink",13:"sqlgreen"}},gqR3:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin JavaScript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on JavaScript based modern web development by University of Helsinki and Houston Inc..",es:"Curso en línea abierto de desarrollo web moderno basado en JavaScript por la Universidad de Helsinki y Houston Inc.."}},kl3L:function(e,a,t){"use strict";t("l54/");var n=t("U4Ha"),o=t("jsr+"),r=t("Wbzz"),i=t("q1tI"),s=t.n(i),c=t("ymbu"),l=t.n(c),d=t("c7NW"),u=t.n(d),p=t("9Koi");const m=e=>String.fromCharCode(e.charCodeAt(0)-1),b=e=>String.fromCharCode(e.charCodeAt(0)+1),g=(e,a)=>Object.keys(l.a[a]).includes(e.toString()),k=(e,a,t)=>b(e)in l.a[t][a],v=(e,a,t)=>!e&&g(a+1,t)||e&&k(e,a,t),f=e=>"fi"===e?"Osa":"Part",h=e=>"fi"===e?"/osa":`/${e}/part`,E=e=>{let{part:a,letter:t,lang:i}=e;const{t:c}=Object(p.a)();return s.a.createElement(o.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&g(a-1,i)?s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Link,{to:`${h(i)}${a-1}`,className:"col-4--mobile push-right-1 prev"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",a-1),s.a.createElement("b",null,c("previousPart")))),v(t,a,i)&&s.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Link,{to:`${h(i)}${a}/${u()(l.a[i][a][m(t)])}`,className:"col-4--mobile push-right-1 prev"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",`${a}${m(t)}`),s.a.createElement("b",null,c("previousPart")))),v(t,a,i)&&s.a.createElement("div",{className:"col-1--mobile separator"})):g(a-1,i)?s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Link,{to:`${h(i)}${a-1}`,className:"col-4--mobile push-right-1 prev"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",a-1),s.a.createElement("b",null,c("previousPart")))),v(t,a,i)&&s.a.createElement("div",{className:"col-1--mobile separator"})):s.a.createElement(o.a,{className:"push-right-1"}):s.a.createElement(o.a,{className:"push-right-1"}),!t&&g(a+1,i)?(n[i]<=a&&(i="en"),s.a.createElement(r.Link,{to:`${h(i)}${a+1}`,className:"col-4--mobile push-left-1 next"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",a+1),s.a.createElement("b",null,c("nextPart"))))):t?k(t,a,i)?s.a.createElement(r.Link,{to:`${h(i)}${a}/${u()(l.a[i][a][b(t)])}`,className:"col-4--mobile push-left-1 next"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",`${a}${b(t)}`),s.a.createElement("b",null,c("nextPart")))):g(a+1,i)?s.a.createElement(r.Link,{to:`${h(i)}${a+1}`,className:"col-4--mobile push-left-1 next"},s.a.createElement(o.a,{flex:!0,dirColumn:!0},s.a.createElement("p",null,f(i)," ",a+1),s.a.createElement("b",null,c("nextPart")))):s.a.createElement(o.a,{className:"push-left-1"}):s.a.createElement(o.a,{className:"push-left-1"}))};E.defaultProps={part:void 0,letter:void 0},a.a=E},"l54/":function(e,a,t){},m4Pe:function(e,a,t){},mt4B:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("rXWv");var n=t("q1tI"),o=t.n(n);const r=e=>{let{className:a,backgroundColor:t,...n}=e;const r=t?{backgroundColor:t}:null;return o.a.createElement("div",Object.assign({className:"banner "+a,style:r},n))};r.defaultProps={className:""}},rXWv:function(e,a,t){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2","pale-pink":"#F9B9D3","sqlgreen":"#C5FF73"}')},xB9W:function(e,a,t){"use strict";var n=t("U4Ha");a.a=function(e,a,t){return void 0===t&&(t=""),n[e]<a?`/en/part${a}${t}`:"fi"===e?`/osa${a}${t}`:`/${e}/part${a}${t}`}},ymbu:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"JavaScriptia",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"React Query, useReducer ja context"},7:{a:"React Router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"},9:{},10:{},11:{},12:{},13:{a:"Relaatiotietokannan käyttö Sequelize-kirjastolla",b:"Liitostaulut ja -kyselyt",c:"Migraatiot, monen suhde moneen -yhteydet"}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"React Query, useReducer and the context"},7:{a:"React Router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with TypeScript",c:"Typing an Express app",d:"React with types",e:"Grande finale: Patientor"},10:{a:"Introduction to React Native",b:"React Native basics",c:"Communicating with server",d:"Testing and extending our application"},11:{a:"Introduction to CI/CD",b:"Getting started with GitHub Actions",c:"Deployment",d:"Keeping green",e:"Expanding Further"},12:{a:"Introduction to Containers",b:"Building and configuring environments",c:"Basics of Orchestration"},13:{a:"Using relational databases with Sequelize",b:"Join tables and queries",c:"Migrations, many-to-many relationships"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"TypeScript的一小步",c:"TypeScript版的express应用",d:"利用TypeScript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"},11:{a:"CI/CD 简介",b:"开始认识 GitHub Actions 吧",c:"部署",d:"保持健康状态",e:"再扩展一下"},12:{a:"容器介绍",b:"构建配置环境",c:"编排基础"},13:{a:"用 Sequelize 使用关系型数据库",b:"加入表与查询",c:"迁移，多对多关系"}},es:{0:{a:"Información general",b:"Fundamentos de las aplicaciones web"},1:{a:"Introducción a React",b:"JavaScript",c:"Estado del componente, controladores de eventos",d:"Un estado más complejo, depurando aplicaciones React"},2:{a:"Renderizando una colección, módulos",b:"Formularios",c:"Obteniendo datos del servidor",d:"Alterando datos en el servidor",e:"Agregar estilos a la aplicación React"},3:{a:"Node.js y Express",b:"Implementación de la aplicación en Internet",c:"Guardando datos en MongoDB",d:"Validación y ESLint"},4:{a:"Estructura de la aplicación backend, introducción a las pruebas",b:"Probando el backend",c:"Administración de usuarios",d:"Autenticación de token"},5:{a:"Iniciar sesión en la interfaz",b:"props.children y proptypes",c:"Probando aplicaciones React",d:"Pruebas de extremo a extremo"},6:{a:"Flux-architecture y Redux",b:"Muchos reducers",c:"Comunicarse con el servidor en una aplicación redux",d:"React Query, useReducer y  el contexto",e:"connect (la parte antigua)"},7:{a:"React-router",b:"Hooks personalizados",c:"Más sobre estilos",d:"Webpack",e:"Componentes de clases, varios",f:"Ejercicios: ampliar la lista de blogs"},8:{a:"Servidor GraphQL",b:"React y GraphQL",c:"Administración de bases de datos y usuarios",d:"Iniciar sesión y actualizar la caché",e:"Fragmentos y suscripciones"},9:{a:"Antecedentes e introducción",b:"Primeros pasos con TypeScript",c:"Tipando una aplicación Express",d:"React con tipos",e:"Grande finale: Patientor"},10:{a:"Introducción a React Native",b:"Conceptos básicos de React Native",c:"Comunicándose con el servidor",d:"Probar y ampliar nuestra aplicación"},11:{a:"Introducción a CI/CD",b:"Introducción a las acciones de Github",c:"Despliegue",d:"Manteniéndose verde",e:"Expandiéndose aún más"},12:{a:"Introducción a los Contenedores",b:"Construir y configurar entornos",c:"Conceptos básicos de orquestación"},13:{a:"Uso de bases de datos relacionales con Sequelize",b:"Unir tablas y consultas",c:"Migraciones, relaciones de muchos-a-muchos"}},fr:{0:{a:"Informations générales",b:"Introduction aux applications Web"},1:{a:"Premiers pas avec React",b:"JavaScript",c:"État des composants, gestionnaires d'événements",d:"Plongez dans le débogage d'applications React"},2:{a:"Rendu de collections, modules",b:"Formulaires",c:"Obtenir des données du serveur",d:"Modification des donées côté serveur",e:"Styliser vos applications React"},3:{a:"Node.js et Express",b:"Déployer votre application sur Internet",c:"Stocker des données sur MongoDB",d:"Validation et ESLint"},4:{a:"Structure de l'application backend, introduction aux tests",b:"Tester le backend",c:"Gestion des utilisateurs",d:"Jeton d'authentification"},5:{a:"Connexion front-end",b:"props.children et proptypes",c:"Tester les applications React",d:"Tests de bout en bout"},6:{a:"Architecture de flux et Redux",b:"Quelques reducers",c:"Communiquer avec le backend dans l'application Redux",d:"Connect"},7:{a:"React-router",b:"Hooks personnalisés",c:"Allez-plus loin avec le style",d:"Webpack",e:"Apprivoisez les composants classe",f:"Exercices: étendre la bloglist"},8:{a:"Serveur GraphQL",b:"React et GraphQL",c:"Base de données et gestion des utilisateurs",d:"Connexion et mise à jour du cache",e:"Fragments et subscriptions"},9:{a:"Contexte et introduction",b:"Premiers pas avec TypeScript",c:"De l'application express à TypeScript",d:"Écrire des applications React avec TypeScript"},10:{a:"Introduction à React Native",b:"Les bases de React Native",c:"Communiquer avec le serveur",d:"Tester et étendre notre application"},11:{a:"Introduction au CI/CD",b:"Premiers pas avec GitHub Actions",c:"Déploiement",d:"Rester dans le vert",e:"Allez plus loin"},12:{a:"Introduction aux Conteneurs",b:"Construire et configurer des environnements",c:"Bases de l'Orchestration"},13:{a:"Bases de données relationnelles avec Sequelize",b:"Joindre tables et requêtes",c:"Migrations, relations plusieurs-à-plusieurs"}},ptbr:{0:{a:"Informações gerais",b:"Fundamentos de aplicações web"},1:{a:"Introdução à biblioteca React",b:"JavaScript",c:"Estado de componente e gerenciadores de eventos",d:"Um estado mais complexo e depuração de aplicações React"},2:{a:"Renderização de uma coleção e módulos",b:"Formulários",c:"Obtendo dados do servidor",d:"Alterando dados no servidor",e:"Adicionando estilos à aplicação React"},3:{a:"Node.js e Express",b:"Implantação da aplicação na internet",c:"Salvando dados no MongoDB",d:"Validação e ESLint"},4:{a:"Estrutura de uma aplicação back-end, introdução a testes",b:"Testando o back-end",c:"Administração de usuários",d:"Autenticação por token"},5:{a:"Login no front-end",b:"props.children e proptypes",c:"Testando aplicações React",d:"Testes end-to-end"},6:{a:"Arquitetura Flux e Redux",b:"Muitos Reducers",c:"Comunicação com o servidor em uma aplicação Redux",d:"connect"},7:{a:"React-router",b:"Hooks personalizados",c:"Mais sobre estilos",d:"Webpack",e:"Componentes de classe, Miscelâneos",f:"Exercícios: estendendo o bloglist"},8:{a:"Servidor GraphQL",b:"React e GraphQL",c:"Banco de dados e administração de usuários",d:"Login e atualização do cache",e:"Fragmentos e assinaturas"},9:{a:"Background e introdução",b:"Primeiros passos com TypeScript",c:"Tipando a aplicação Express",d:"React com tipos"},10:{a:"Introdução à biblioteca React Native",b:"Conceitos básicos de React Native",c:"Comunicação com o servidor",d:"Testando e estendendo nossa aplicação"},11:{a:"Introdução a CI/CD",b:"Começando com GitHub Actions",c:"Deployment",d:'Mantendo tudo "limpo"',e:"Expandindo ainda mais"},12:{a:"Introdução a Containers",b:"Construindo e configurando ambientes",c:"Conceitos básicos de Orquestração"},13:{a:"Usando bancos de dados relacionais com Sequelize",b:"Tabelas de junção e consultas",c:"Migrações e Relacionamentos de Muitos para Muitos"}}}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-35a849e4353ad5cf4fdf.js.map