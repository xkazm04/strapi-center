"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[801],{94369:(k,C,n)=>{n.r(C),n.d(C,{default:()=>en});var e=n(53547),i=n(68547),b=n(23724),P=n(27361),X=n.n(P);const M={i8:"4.3.3"};var $=n(59942),p=n(49656),N=n(37424),L=n(99168),K=n(61080),F=n(38914),G=n.n(F),O=n(64729),T=n(16384),U=n(45697),r=n.n(U),l=n(97132),v=n(54451),E=n(15577),g=n(40264),R=n(94117),w=n(9524),be=n(49549),oe=n(64459),Ne=n(7228),Ge=n.n(Ne);const Ue=(0,T.default)(g.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,se=({onClose:t,onSkip:a,children:o,hideSkip:s})=>{const{formatMessage:u}=(0,l.useIntl)();return e.createElement(v.Portal,null,e.createElement(Ue,{onClick:t,padding:8,justifyContent:"center"},e.createElement(E.FocusTrap,{onEscape:t},e.createElement(w.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:d=>d.stopPropagation()},e.createElement(g.Flex,{justifyContent:"flex-end"},e.createElement(be.IconButton,{onClick:t,"aria-label":u({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(Ge(),null)})),e.createElement(R.Box,{paddingLeft:7,paddingRight:7,paddingBottom:s?8:0},o),!s&&e.createElement(g.Flex,{justifyContent:"flex-end"},e.createElement(oe.Button,{variant:"tertiary",onClick:a},u({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};se.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};const Fe=se;var re=n(73749);const ie={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},We=(t=ie,a)=>(0,re.default)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var S=n(33483),je=n(64290),le=n.n(je);const $e=T.default.li`
  list-style: disc;
`,de=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,l.useIntl)();return e.createElement(w.Stack,{spacing:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:s=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},s),b:s=>e.createElement(S.Typography,{fontWeight:"semiBold"},s),p:s=>e.createElement(S.Typography,null,s),light:s=>e.createElement(S.Typography,{textColor:"neutral600"},s),ul:s=>e.createElement(R.Box,{paddingLeft:6},e.createElement("ul",null,s)),li:s=>e.createElement($e,null,s)}))};de.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};const Ke=de;var J=n(89285),Ve=n(96392);const q=({number:t,last:a,type:o})=>e.createElement(R.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Ve.Z,{number:t,type:o}));q.defaultProps={number:void 0,last:!1,type:""},q.propTypes={number:r().number,last:r().bool,type:r().string};const ce=q;var W=n(99872),ze=Object.defineProperty,pe=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,ue=(t,a,o)=>a in t?ze(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,Ze=(t,a)=>{for(var o in a||(a={}))ke.call(a,o)&&ue(t,o,a[o]);if(pe)for(var o of pe(a))He.call(a,o)&&ue(t,o,a[o]);return t};const _=({title:t,content:a,cta:o,onCtaClick:s,sectionIndex:u,stepIndex:d,hasSectionAfter:f})=>{const{formatMessage:y}=(0,l.useIntl)(),h=u>0,c=d>0,D=u+1;return e.createElement(e.Fragment,null,e.createElement(g.Flex,{alignItems:"stretch"},e.createElement(g.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(J.Z,{type:W.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(S.Typography,{variant:"sigma",textColor:"primary600"},y({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(g.Flex,null,e.createElement(g.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(ce,{number:u+1,type:c?W.hx:W.lW})),e.createElement(S.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},y(t))),e.createElement(g.Flex,{alignItems:"stretch"},e.createElement(g.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},f&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:W.hx}),c&&e.createElement(ce,{number:D+1,type:W.lW,last:!0}))),e.createElement(R.Box,null,e.createElement(Ke,Ze({},a)),o&&(o.target?e.createElement(i.LinkButton,{endIcon:e.createElement(le(),null),onClick:s,to:o.target},y(o.title)):e.createElement(oe.Button,{endIcon:e.createElement(le(),null),onClick:s},y(o.title))))),c&&f&&e.createElement(R.Box,{paddingTop:3},e.createElement(g.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(J.Z,{type:W.hx,minHeight:(0,i.pxToRem)(24)}))))};_.defaultProps={currentStep:null,cta:void 0},_.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};const Qe=_;var Ye=Object.defineProperty,Xe=Object.defineProperties,we=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,ge=(t,a,o)=>a in t?Ye(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,_e=(t,a)=>{for(var o in a||(a={}))Je.call(a,o)&&ge(t,o,a[o]);if(me)for(var o of me(a))qe.call(a,o)&&ge(t,o,a[o]);return t},et=(t,a)=>Xe(t,we(a));const tt=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:s,isGuidedTourVisible:u,setSkipped:d}=(0,i.useGuidedTour)(),[f,y]=(0,e.useState)(t),[{stepContent:h,sectionIndex:c,stepIndex:D,hasSectionAfter:B,hasStepAfter:V},z]=(0,e.useReducer)(We,ie),{trackUsage:j}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){y(!1);return}const[I]=G()(a,t);y(!I&&u)},[t,a,u]),(0,e.useEffect)(()=>{if(t){const[I]=G()(O.Z,t),Z=Object.keys(a),[Q,Be]=t.split("."),ae=Z.indexOf(Q),Y=Object.keys(a[Q]).indexOf(Be),tn=ae<Z.length-1,nn=Y<Object.keys(a[Q]).length-1;z({type:"UPDATE_MODAL",content:I,newSectionIndex:ae,newStepIndex:Y,newHasSectionAfter:tn,newHasStepAfter:nn})}},[t,a]);const m=()=>{s(t,!0),j(h.trackingEvent),o(null)},x=()=>{d(!0),o(null),j("didSkipGuidedtour")};return f&&h?e.createElement(Fe,{hideSkip:!V&&!B,onSkip:x,onClose:m},e.createElement(Qe,et(_e({},h),{onCtaClick:m,currentStep:t,sectionIndex:c,stepIndex:D,hasSectionAfter:B}))):null};var nt=n(97833),A=n(18741),at=n(14613),ot=n.n(at),st=n(42075),rt=n.n(st),it=n(87569);const lt=(0,T.default)(R.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,fe=(0,T.default)(p.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,he=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[s,u]=(0,e.useState)(!1),{logos:{menu:d}}=(0,it.Z)(),[f,y]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:c}=(0,l.useIntl)(),D=h.split(" ").map(m=>m.substring(0,1)).join("").substring(0,2),B=()=>u(m=>!m),V=()=>{i.auth.clearAppStorage(),B()},z=m=>{var x,I;!m.currentTarget.contains(m.relatedTarget)&&((I=(x=m.relatedTarget)==null?void 0:x.parentElement)==null?void 0:I.id)!=="main-nav-user-button"&&u(!1)},j=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(A.MainNav,{condensed:f},e.createElement(A.NavBrand,{as:p.NavLink,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:j,icon:e.createElement("img",{src:d.custom||d.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(nt.Divider,null),e.createElement(A.NavSections,null,e.createElement(A.NavLink,{as:p.NavLink,to:"/content-manager",icon:e.createElement(ot(),null)},c({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(A.NavSection,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(m=>{const x=m.icon;return e.createElement(A.NavLink,{as:p.NavLink,to:m.to,key:m.to,icon:e.createElement(x,null)},c(m.intlLabel))})):null,t.length>0?e.createElement(A.NavSection,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(m=>{const x=m.icon;return e.createElement(A.NavLink,{as:p.NavLink,badgeContent:m.notificationsCount>0&&m.notificationsCount.toString()||void 0,to:m.to,key:m.to,icon:e.createElement(x,null)},c(m.intlLabel))})):null),e.createElement(A.NavUser,{id:"main-nav-user-button",ref:o,onClick:B,initials:D},h),s&&e.createElement(lt,{onBlur:z,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(E.FocusTrap,{onEscape:B},e.createElement(w.Stack,{spacing:0},e.createElement(fe,{tabIndex:0,onClick:B,to:"/me"},e.createElement(S.Typography,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(fe,{tabIndex:0,onClick:V,logout:"logout",to:"/auth/login"},e.createElement(S.Typography,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(rt(),null))))),e.createElement(A.NavCondense,{onClick:()=>y(m=>!m)},c(f?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};he.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};const dt=he;var ct=n(80117);const pt=(0,T.default)(R.Box)`
  flex: 1;
`,Ee=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,l.useIntl)();return e.createElement(R.Box,{background:"neutral100"},e.createElement(ct.SkipToContent,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(g.Flex,{alignItems:"flex-start"},a,e.createElement(pt,null,t)))};Ee.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};const ut=Ee;var ye=n(8610),mt=n(36657),ee=n(67814),ve=n(1200);const gt=(0,T.default)(R.Box)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,ft=T.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,ht=(0,T.default)(R.Box)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,Et=T.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[S.Typography]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[S.Typography]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,yt=()=>{const[t,a]=(0,e.useState)(!1),{formatMessage:o}=(0,l.useIntl)(),{showTutorials:s}=(0,$.um)();if(!s)return null;const u=[{icon:"book",label:o({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:o({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],d=()=>{a(f=>!f)};return e.createElement(gt,{as:"aside"},e.createElement(ft,{id:"onboarding","aria-label":o({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:d},!t&&e.createElement(ee.G,{icon:ve.faQuestion}),t&&e.createElement(ee.G,{icon:ve.faTimes})),t&&e.createElement(E.FocusTrap,{onEscape:d},e.createElement(ht,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},u.map(f=>e.createElement(Et,{key:f.label,rel:"nofollow noreferrer noopener",target:"_blank",href:f.destination},e.createElement(ee.G,{icon:f.icon}),e.createElement(S.Typography,null,f.label))))))},vt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5431),n.e(5928),n.e(2491),n.e(994)]).then(n.bind(n,77064))),Tt=(0,e.lazy)(()=>Promise.all([n.e(6798),n.e(3981)]).then(n.bind(n,36717))),Pt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),Ct=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,44021))),Te=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),Mt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),Ot=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),Pe=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5431),n.e(5351),n.e(5895)]).then(n.bind(n,93500))),Rt=()=>{const{trackUsage:t}=(0,i.useTracking)(),a=(0,N.useDispatch)(),o=(0,N.useSelector)(s=>s.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:mt.e}))},[o])},St=()=>{Rt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,$.H9)(),{menu:s}=(0,i.useStrapiApp)(),u=(0,e.useMemo)(()=>s.filter(d=>d.Component).map(({to:d,Component:f,exact:y})=>(0,ye.ot)(f,d,y)),[s]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(L.DndProvider,{backend:K.PD},e.createElement(ut,{sideNav:e.createElement(dt,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(p.Switch,null,e.createElement(p.Route,{path:"/",component:Tt,exact:!0}),e.createElement(p.Route,{path:"/me",component:Ot,exact:!0}),e.createElement(p.Route,{path:"/content-manager",component:vt}),u,e.createElement(p.Route,{path:"/settings/:settingId",component:Pe}),e.createElement(p.Route,{path:"/settings",component:Pe,exact:!0}),e.createElement(p.Route,{path:"/marketplace"},e.createElement(Ct,null)),e.createElement(p.Route,{path:"/list-plugins",exact:!0},e.createElement(Pt,null)),e.createElement(p.Route,{path:"/404",component:Te}),e.createElement(p.Route,{path:"/500",component:Mt}),e.createElement(p.Route,{path:"",component:Te}))),e.createElement(tt,null),e.createElement(yt,null)))};var At=Object.defineProperty,Ce=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Me=(t,a,o)=>a in t?At(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,Lt=(t,a)=>{for(var o in a||(a={}))xt.call(a,o)&&Me(t,o,a[o]);if(Ce)for(var o of Ce(a))It.call(a,o)&&Me(t,o,a[o]);return t};const Dt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]=Lt({},t[o]),a),{})});var Bt=n(36968),bt=n.n(Bt);const Oe={plugins:null},Nt=(t=Oe,a)=>(0,re.default)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{bt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Gt=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:a},o]=(0,e.useReducer)(Nt,Oe,()=>Dt(t)),s=(0,e.useRef)(d=>{o({type:"SET_PLUGIN_READY",pluginId:d})});if(Object.keys(a).some(d=>a[d].isReady===!1)){const d=Object.keys(a).reduce((f,y)=>{const h=a[y].initializer;if(h){const c=a[y].pluginId;f.push(e.createElement(h,{key:c,setPlugin:s.current}))}return f},[]);return e.createElement(e.Fragment,null,d,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(St,null)};var Re=n(28344);const Ut=()=>({type:Re.l}),Ft=t=>({type:Re.m,permissions:t}),Se=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:s}=(0,N.useSelector)(d=>d.rbacProvider),u=(0,N.useDispatch)();return(0,e.useEffect)(()=>(u(Ft(a)),()=>{u(Ut())}),[a,u]),s?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:s,refetchPermissions:o}},t):e.createElement(i.LoadingIndicatorPage,null)};Se.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};const Wt=Se;var jt=n(9669),$t=n.n(jt),Kt=n(81249),te=n.n(Kt);const Ae=(t,a)=>!te().valid(t)||!te().valid(a)?!1:te().lt(t,a);var ne=n(23998),H=(t,a,o)=>new Promise((s,u)=>{var d=h=>{try{y(o.next(h))}catch(c){u(c)}},f=h=>{try{y(o.throw(h))}catch(c){u(c)}},y=h=>h.done?s(h.value):Promise.resolve(h.value).then(d,f);y((o=o.apply(t,a)).next())});const xe=M.i8,Vt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),zt=t=>H(void 0,null,function*(){try{const{data:{tag_name:a}}=yield $t().get("https://api.github.com/repos/strapi/strapi/releases/latest");return Ae(xe,a)&&Vt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch(a){return xe}}),kt=()=>H(void 0,null,function*(){try{const{data:t,headers:a}=yield ne.be.get("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Ht=()=>H(void 0,null,function*(){try{const{data:t,headers:a}=yield ne.be.get("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Zt=()=>H(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield ne.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var Qt=Object.defineProperty,Yt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Le=(t,a,o)=>a in t?Qt(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,qt=(t,a)=>{for(var o in a||(a={}))wt.call(a,o)&&Le(t,o,a[o]);if(Ie)for(var o of Ie(a))Jt.call(a,o)&&Le(t,o,a[o]);return t},_t=(t,a)=>Yt(t,Xt(a));const De=M.i8,en=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),a=(0,i.useNotification)(),o=(0,e.useRef)(t),s=i.auth.getUserInfo(),u=X()(s,"username")||(0,ye.Pp)(s.firstname,s.lastname),[d,f]=(0,e.useState)(u),{showReleaseNotification:y}=(0,$.um)(),[{data:h,status:c},{data:D,isLoading:B},{data:V,status:z,refetch:j,isFetched:m,isFetching:x},{data:I}]=(0,b.useQueries)([{queryKey:"app-infos",queryFn:kt},{queryKey:"strapi-release",queryFn:()=>zt(a),enabled:y,initialData:De},{queryKey:"admin-users-permission",queryFn:Ht,initialData:[]},{queryKey:"user-roles",queryFn:Zt}]),Z=(0,e.useMemo)(()=>Ae(De,D),[D]);return(0,e.useEffect)(()=>{I&&I.find(({code:Y})=>Y==="strapi-super-admin")&&o.current(!0)},[I]),B||(x&&m||c==="loading"||z==="loading")?e.createElement(i.LoadingIndicatorPage,null):c==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:_t(qt({},h),{latestStrapiReleaseTag:D,setUserDisplayName:f,shouldUpdateStrapi:Z,userDisplayName:d})},e.createElement(Wt,{permissions:V,refetchPermissions:j},e.createElement(Gt,null)))}},89285:(k,C,n)=>{n.d(C,{Z:()=>r});var e=n(53547),i=n(45697),b=n.n(i),P=n(68547),X=n.n(P),M=n(94117),$=n.n(M),p=n(99872),N=Object.defineProperty,L=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(l,v,E)=>v in l?N(l,v,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[v]=E,O=(l,v)=>{for(var E in v||(v={}))K.call(v,E)&&G(l,E,v[E]);if(L)for(var E of L(v))F.call(v,E)&&G(l,E,v[E]);return l},T=(l,v)=>{var E={};for(var g in l)K.call(l,g)&&v.indexOf(g)<0&&(E[g]=l[g]);if(l!=null&&L)for(var g of L(l))v.indexOf(g)<0&&F.call(l,g)&&(E[g]=l[g]);return E};const U=l=>{var v=l,{type:E}=v,g=T(v,["type"]);return e.createElement(M.Box,O({width:(0,P.pxToRem)(2),height:"100%",background:E===p.VM?"neutral300":"primary500",hasRadius:!0},g))};U.defaultProps={type:p.VM},U.propTypes={type:b().oneOf([p.lW,p.hx,p.VM])};const r=U},96392:(k,C,n)=>{n.d(C,{Z:()=>U});var e=n(53547),i=n(45697),b=n.n(i),P=n(68547),X=n.n(P),M=n(40264),$=n.n(M),p=n(33483),N=n.n(p),L=n(33699),K=n.n(L),F=n(22754),G=n.n(F),O=n(99872);const T=({type:r,number:l})=>r===O.hx?e.createElement(M.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(L.Icon,{as:G(),"aria-hidden":!0,width:(0,P.pxToRem)(16),color:"neutral0"})):r===O.lW?e.createElement(M.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral0"},l)):e.createElement(M.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral600"},l));T.defaultProps={number:void 0,type:O.VM},T.propTypes={number:b().number,type:b().oneOf([O.lW,O.hx,O.VM])};const U=T},99872:(k,C,n)=>{n.d(C,{VM:()=>b,hx:()=>i,lW:()=>e});const e="isActive",i="isDone",b="isNotDone"},64729:(k,C,n)=>{n.d(C,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
