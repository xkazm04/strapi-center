(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8853],{87760:function(B,_,o){(function(s,y){B.exports=y(o(53547))})(this,function(s){return function(y){var p={};function f(m){if(p[m])return p[m].exports;var P=p[m]={i:m,l:!1,exports:{}};return y[m].call(P.exports,P,P.exports,f),P.l=!0,P.exports}return f.m=y,f.c=p,f.d=function(m,P,E){f.o(m,P)||Object.defineProperty(m,P,{enumerable:!0,get:E})},f.r=function(m){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})},f.t=function(m,P){if(1&P&&(m=f(m)),8&P||4&P&&typeof m=="object"&&m&&m.__esModule)return m;var E=Object.create(null);if(f.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:m}),2&P&&typeof m!="string")for(var h in m)f.d(E,h,function(v){return m[v]}.bind(null,h));return E},f.n=function(m){var P=m&&m.__esModule?function(){return m.default}:function(){return m};return f.d(P,"a",P),P},f.o=function(m,P){return Object.prototype.hasOwnProperty.call(m,P)},f.p="",f(f.s=5)}({0:function(y,p){y.exports=s},5:function(y,p,f){"use strict";f.r(p);var m=f(0);function P(){return(P=Object.assign||function(E){for(var h=1;h<arguments.length;h++){var v=arguments[h];for(var A in v)Object.prototype.hasOwnProperty.call(v,A)&&(E[A]=v[A])}return E}).apply(this,arguments)}p.default=function(E){return m.createElement("svg",P({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E),m.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},16098:(B,_,o)=>{"use strict";o.r(_),o.d(_,{default:()=>Cs});var s=o(53547),y=o(49656),p=o(68547),f=o(31498),m=o(81912),P=o(64459),E=o(35395),h=o(80117),v=o(43546),A=o(19631),R=o(33483),N=o(67422),Z=o(89326),F=o.n(Z),C=o(97132),S=o(23724),H=o(63852),G=o(89031),re=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Je=(r,e)=>re(void 0,null,function*(){try{const{data:t}=yield G.be.get((0,G.Gc)("roles"));return e("The roles have loaded successfully"),t}catch(t){throw r({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),qe=(r,e)=>re(void 0,null,function*(){try{yield G.be.delete(`${(0,G.Gc)("roles")}/${r}`)}catch(t){e({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});var et=o(45697),T=o.n(et),se=o(49549),X=o(40264),tt=o(56204),rt=o.n(tt),st=o(62982),nt=o.n(st),ot=Object.defineProperty,ne=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,oe=(r,e,t)=>e in r?ot(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ae=(r,e)=>{for(var t in e||(e={}))at.call(e,t)&&oe(r,t,e[t]);if(ne)for(var t of ne(e))it.call(e,t)&&oe(r,t,e[t]);return r};const Y=({sortedRoles:r,canDelete:e,permissions:t,setRoleToDelete:i,onDelete:u})=>{const{formatMessage:l}=(0,C.useIntl)(),{push:d}=(0,y.useHistory)(),[a,n]=u,c=g=>e&&!["public","authenticated"].includes(g.type),O=g=>{i(g),n(!a)},b=g=>{d(`/settings/${f.Z}/roles/${g}`)};return s.createElement(v.Tbody,null,r==null?void 0:r.map(g=>s.createElement(v.Tr,ae({key:g.name},(0,p.onRowClick)({fn:()=>b(g.id)})),s.createElement(v.Td,{width:"20%"},s.createElement(R.Typography,null,g.name)),s.createElement(v.Td,{width:"50%"},s.createElement(R.Typography,null,g.description)),s.createElement(v.Td,{width:"30%"},s.createElement(R.Typography,null,`${g.nb_users} ${l({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),s.createElement(v.Td,null,s.createElement(X.Flex,ae({justifyContent:"end"},p.stopPropagation),s.createElement(p.CheckPermissions,{permissions:t.updateRole},s.createElement(se.IconButton,{onClick:()=>b(g.id),noBorder:!0,icon:s.createElement(rt(),null),label:l({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${g.name}`})})),c(g)&&s.createElement(p.CheckPermissions,{permissions:t.deleteRole},s.createElement(se.IconButton,{onClick:()=>O(g.id),noBorder:!0,icon:s.createElement(nt(),null),label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${g.name}`})})))))))},lt=Y;Y.defaultProps={canDelete:!1},Y.propTypes={onDelete:T().array.isRequired,permissions:T().object.isRequired,setRoleToDelete:T().func.isRequired,sortedRoles:T().array.isRequired,canDelete:T().bool};var ie=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const ct=()=>{const{trackUsage:r}=(0,p.useTracking)(),{formatMessage:e}=(0,C.useIntl)(),{push:t}=(0,y.useHistory)(),i=(0,p.useNotification)(),{notifyStatus:u}=(0,N.useNotifyAT)(),[{query:l}]=(0,p.useQueryParams)(),d=(l==null?void 0:l._q)||"",[a,n]=(0,s.useState)(!1),[c,O]=(0,s.useState)(!1),[b,g]=(0,s.useState)();(0,p.useFocusWhenNavigate)();const L=(0,S.useQueryClient)(),D=(0,s.useMemo)(()=>({create:m.Z.createRole,read:m.Z.readRoles,update:m.Z.updateRole,delete:m.Z.deleteRole}),[]),{isLoading:j,allowedActions:{canRead:I,canDelete:V}}=(0,p.useRBAC)(D),{isLoading:Ts,data:{roles:te},isFetching:Ds}=(0,S.useQuery)("get-roles",()=>Je(i,u),{initialData:{},enabled:I}),Ye=Ts||Ds,Ls=()=>{r("willCreateRole"),t(`/settings/${f.Z}/roles/new`)},As=()=>{n(!a)},Ss={roles:{id:(0,G.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,G.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},ws=e({id:"global.roles",defaultMessage:"Roles"}),Ms=(0,S.useMutation)(_s=>qe(_s,i),{onSuccess:()=>ie(void 0,null,function*(){yield L.invalidateQueries("get-roles")})}),js=()=>ie(void 0,null,function*(){O(!0),yield Ms.mutateAsync(b),n(!a),O(!1)}),W=(0,H.ZP)(te||[],d,{keys:["name","description"]}),Is=d&&!W.length?"search":"roles",Us=4,xs=((te==null?void 0:te.length)||0)+1;return s.createElement(E.Layout,null,s.createElement(p.SettingsPageTitle,{name:ws}),s.createElement(h.Main,{"aria-busy":Ye},s.createElement(E.HeaderLayout,{title:e({id:"global.roles",defaultMessage:"Roles"}),subtitle:e({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:s.createElement(p.CheckPermissions,{permissions:m.Z.createRole},s.createElement(P.Button,{onClick:Ls,startIcon:s.createElement(F(),null),size:"L"},e({id:(0,G.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),s.createElement(E.ActionLayout,{startActions:s.createElement(p.SearchURLQuery,{label:e({id:"app.component.search.label",defaultMessage:"Search"})})}),s.createElement(E.ContentLayout,null,!I&&s.createElement(p.NoPermissions,null),(Ye||j)&&s.createElement(p.LoadingIndicatorPage,null),I&&W&&(W==null?void 0:W.length)?s.createElement(v.Table,{colCount:Us,rowCount:xs},s.createElement(v.Thead,null,s.createElement(v.Tr,null,s.createElement(v.Th,null,s.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.name",defaultMessage:"Name"}))),s.createElement(v.Th,null,s.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.description",defaultMessage:"Description"}))),s.createElement(v.Th,null,s.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.users",defaultMessage:"Users"}))),s.createElement(v.Th,null,s.createElement(A.VisuallyHidden,null,e({id:"global.actions",defaultMessage:"Actions"}))))),s.createElement(lt,{sortedRoles:W,canDelete:V,permissions:m.Z,setRoleToDelete:g,onDelete:[a,n]})):s.createElement(p.EmptyStateLayout,{content:Ss[Is]})),s.createElement(p.ConfirmDialog,{isConfirmButtonLoading:c,onConfirm:js,onToggleDialog:As,isOpen:a})))},ut=()=>s.createElement(p.CheckPagePermissions,{permissions:m.Z.accessRoles},s.createElement(ct,null));var le=o(80831),w=o(9524),U=o(94117),ce=o(99136),ue=o(78607),dt=o(87760),pt=o.n(dt),mt=o(22754),de=o.n(mt),M=o(39272),$=o(84757),x=o(96486);const pe=(0,s.createContext)({}),me=({children:r,value:e})=>s.createElement(pe.Provider,{value:e},r),J=()=>(0,s.useContext)(pe);me.propTypes={children:T().node.isRequired,value:T().object.isRequired};var z=o(16384),gt=o(35161),ft=o.n(gt),Pt=o(13217),vt=o.n(Pt);const yt=r=>{switch(r){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Et=(0,z.default)(U.Box)`
  margin: -1px;
  border-radius: ${({theme:r})=>r.spaces[1]} 0 0 ${({theme:r})=>r.spaces[1]};
`;function q({route:r}){const{formatMessage:e}=(0,C.useIntl)(),{method:t,handler:i,path:u}=r,l=u?vt()(u.split("/")):[],[d="",a=""]=i?i.split("."):[],n=yt(r.method);return s.createElement(w.Stack,{spacing:2},s.createElement(R.Typography,{variant:"delta",as:"h3"},e({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",s.createElement("span",null,d),s.createElement(R.Typography,{variant:"delta",textColor:"primary600"},".",a)),s.createElement(w.Stack,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},s.createElement(Et,{background:n.background,borderColor:n.border,padding:2},s.createElement(R.Typography,{fontWeight:"bold",textColor:n.text},t)),s.createElement(U.Box,{paddingLeft:2,paddingRight:2},ft()(l,c=>s.createElement(R.Typography,{key:c,textColor:c.includes(":")?"neutral600":"neutral900"},"/",c)))))}q.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},q.propTypes={route:T().shape({handler:T().string,method:T().string,path:T().string})};const ht=q,Ot=()=>{const{formatMessage:r}=(0,C.useIntl)(),{selectedAction:e,routes:t}=J(),i=(0,x.without)(e.split("."),"controllers"),u=(0,x.get)(t,i[0]),l=i.slice(1).join("."),d=(0,x.isEmpty)(u)?[]:u.filter(a=>a.handler.endsWith(l));return s.createElement(M.GridItem,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},e?s.createElement(w.Stack,{spacing:2},d.map((a,n)=>s.createElement(ht,{key:n,route:a}))):s.createElement(w.Stack,{spacing:2},s.createElement(R.Typography,{variant:"delta",as:"h3"},r({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),s.createElement(R.Typography,{as:"p",textColor:"neutral600"},r({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var ee=o(47949),Rt=o(11700),bt=o.n(Rt);function Ct(r){switch(r){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return bt()(r.replace("api::","").replace("plugin::",""))}}const Tt=Ct;var Dt=o(89734),ge=o.n(Dt),fe=o(43499),Lt=o(17581),At=o.n(Lt);const Pe=z.css`
  background: ${r=>r.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,St=(0,z.default)(U.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${r=>r.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${r=>r.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,wt=z.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:r})=>r.colors.neutral150};
`,ve=({subCategory:r})=>{const{formatMessage:e}=(0,C.useIntl)(),{onChange:t,onChangeSelectAll:i,onSelectedAction:u,selectedAction:l,modifiedData:d}=J(),a=(0,s.useMemo)(()=>(0,x.get)(d,r.name,{}),[d,r]),n=(0,s.useMemo)(()=>Object.values(a).every(g=>g.enabled===!0),[a]),c=(0,s.useMemo)(()=>Object.values(a).some(g=>g.enabled===!0)&&!n,[a,n]),O=(0,s.useCallback)(({target:{name:g}})=>{i({target:{name:g,value:!n}})},[n,i]),b=(0,s.useCallback)(g=>l===g,[l]);return s.createElement(U.Box,null,s.createElement(X.Flex,{justifyContent:"space-between",alignItems:"center"},s.createElement(U.Box,{paddingRight:4},s.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},r.label)),s.createElement(wt,null),s.createElement(U.Box,{paddingLeft:4},s.createElement(fe.Checkbox,{name:r.name,value:n,onValueChange:g=>O({target:{name:r.name,value:g}}),indeterminate:c},e({id:"app.utils.select-all",defaultMessage:"Select all"})))),s.createElement(X.Flex,{paddingTop:6,paddingBottom:6},s.createElement(M.Grid,{gap:2,style:{flex:1}},r.actions.map(g=>{const L=`${g.name}.enabled`;return s.createElement(M.GridItem,{col:6,key:g.name},s.createElement(St,{isActive:b(g.name),padding:2,hasRadius:!0},s.createElement(fe.Checkbox,{value:(0,x.get)(d,L,!1),name:L,onValueChange:D=>t({target:{name:L,value:D}})},g.label),s.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>u(g.name),style:{display:"inline-flex",alignItems:"center"}},s.createElement(At(),null))))}))))};ve.propTypes={subCategory:T().object.isRequired};const Mt=ve;var jt=Object.defineProperty,It=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,Ee=(r,e,t)=>e in r?jt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Bt=(r,e)=>{for(var t in e||(e={}))xt.call(e,t)&&Ee(r,t,e[t]);if(ye)for(var t of ye(e))_t.call(e,t)&&Ee(r,t,e[t]);return r},Nt=(r,e)=>It(r,Ut(e));const he=({name:r,permissions:e})=>{const t=(0,s.useMemo)(()=>ge()(Object.values(e.controllers).reduce((i,u,l)=>{const d=`${r}.controllers.${Object.keys(e.controllers)[l]}`,a=ge()(Object.keys(u).reduce((n,c)=>[...n,Nt(Bt({},u[c]),{label:c,name:`${d}.${c}`})],[]),"label");return[...i,{actions:a,label:Object.keys(e.controllers)[l],name:d}]},[]),"label"),[r,e]);return s.createElement(U.Box,{padding:6},t.map(i=>s.createElement(Mt,{key:i.name,subCategory:i})))};he.propTypes={name:T().string.isRequired,permissions:T().object.isRequired};const Gt=he;var Ft=Object.defineProperty,Zt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable,Re=(r,e,t)=>e in r?Ft(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ht=(r,e)=>{for(var t in e||(e={}))kt.call(e,t)&&Re(r,t,e[t]);if(Oe)for(var t of Oe(e))Vt.call(e,t)&&Re(r,t,e[t]);return r},Wt=(r,e)=>Zt(r,$t(e));const zt=(r,e)=>{const t=Object.keys(e).sort().map(i=>({name:i,isOpen:!1}));return Wt(Ht({},r),{collapses:t})};var K=o(73749),Kt=Object.defineProperty,Qt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Ce=(r,e,t)=>e in r?Kt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Te=(r,e)=>{for(var t in e||(e={}))Yt.call(e,t)&&Ce(r,t,e[t]);if(be)for(var t of be(e))Jt.call(e,t)&&Ce(r,t,e[t]);return r},De=(r,e)=>Qt(r,Xt(e));const qt={collapses:[]},er=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"TOGGLE_COLLAPSE":{t.collapses=r.collapses.map((i,u)=>u===e.index?De(Te({},i),{isOpen:!i.isOpen}):De(Te({},i),{isOpen:!1}));break}default:return t}}),tr=()=>{const{modifiedData:r}=J(),{formatMessage:e}=(0,C.useIntl)(),[{collapses:t},i]=(0,s.useReducer)(er,qt,l=>zt(l,r)),u=l=>i({type:"TOGGLE_COLLAPSE",index:l});return s.createElement(w.Stack,{spacing:1},t.map((l,d)=>s.createElement(ee.Accordion,{expanded:l.isOpen,onToggle:()=>u(d),key:l.name,variant:d%2===0?"secondary":void 0},s.createElement(ee.AccordionToggle,{title:Tt(l.name),description:e({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:l.name}),variant:d%2?"primary":"secondary"}),s.createElement(ee.AccordionContent,null,s.createElement(U.Box,null,s.createElement(Gt,{permissions:r[l.name],name:l.name}))))))};var rr=Object.defineProperty,sr=Object.defineProperties,nr=Object.getOwnPropertyDescriptors,Le=Object.getOwnPropertySymbols,or=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,Ae=(r,e,t)=>e in r?rr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ir=(r,e)=>{for(var t in e||(e={}))or.call(e,t)&&Ae(r,t,e[t]);if(Le)for(var t of Le(e))ar.call(e,t)&&Ae(r,t,e[t]);return r},lr=(r,e)=>sr(r,nr(e));const cr={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},ur=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"ON_CHANGE":{const i=e.keys.length,u=e.keys[i-1]==="enabled";if(e.value&&u){const l=(0,x.take)(e.keys,i-1).join(".");t.selectedAction=l}(0,x.set)(t,["modifiedData",...e.keys],e.value);break}case"ON_CHANGE_SELECT_ALL":{const i=["modifiedData",...e.keys],u=(0,x.get)(r,i,{}),l=Object.keys(u).reduce((d,a)=>(d[a]=lr(ir({},u[a]),{enabled:e.value}),d),{});(0,x.set)(t,i,l);break}case"ON_RESET":{t.modifiedData=r.initialData;break}case"ON_SUBMIT_SUCCEEDED":{t.initialData=r.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:i}=e;t.selectedAction=i===r.selectedAction?"":i;break}default:return t}});var dr=Object.defineProperty,pr=Object.defineProperties,mr=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,gr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable,we=(r,e,t)=>e in r?dr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Pr=(r,e)=>{for(var t in e||(e={}))gr.call(e,t)&&we(r,t,e[t]);if(Se)for(var t of Se(e))fr.call(e,t)&&we(r,t,e[t]);return r},vr=(r,e)=>pr(r,mr(e));const yr=(r,e,t)=>vr(Pr({},r),{initialData:e,modifiedData:e,routes:t});var Er=Object.defineProperty,hr=Object.defineProperties,Or=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,Rr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,je=(r,e,t)=>e in r?Er(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Cr=(r,e)=>{for(var t in e||(e={}))Rr.call(e,t)&&je(r,t,e[t]);if(Me)for(var t of Me(e))br.call(e,t)&&je(r,t,e[t]);return r},Tr=(r,e)=>hr(r,Or(e));const Ie=(0,s.forwardRef)(({permissions:r,routes:e},t)=>{const{formatMessage:i}=(0,C.useIntl)(),[u,l]=(0,s.useReducer)(ur,cr,O=>yr(O,r,e));(0,s.useImperativeHandle)(t,()=>({getPermissions:()=>({permissions:u.modifiedData}),resetForm:()=>{l({type:"ON_RESET"})},setFormAfterSubmit:()=>{l({type:"ON_SUBMIT_SUCCEEDED"})}}));const d=({target:{name:O,value:b}})=>l({type:"ON_CHANGE",keys:O.split("."),value:b==="empty__string_value"?"":b}),a=({target:{name:O,value:b}})=>l({type:"ON_CHANGE_SELECT_ALL",keys:O.split("."),value:b}),n=O=>l({type:"SELECT_ACTION",actionToSelect:O}),c=Tr(Cr({},u),{onChange:d,onChangeSelectAll:a,onSelectedAction:n});return s.createElement(me,{value:c},s.createElement(M.Grid,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},s.createElement(M.GridItem,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(w.Stack,{spacing:6},s.createElement(w.Stack,{spacing:2},s.createElement(R.Typography,{variant:"delta",as:"h2"},i({id:(0,$.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),s.createElement(R.Typography,{as:"p",textColor:"neutral600"},i({id:(0,$.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),s.createElement(tr,null))),s.createElement(Ot,null)))});Ie.propTypes={permissions:T().object.isRequired,routes:T().object.isRequired};const Ue=(0,s.memo)(Ie),Ws={isLoading:!0,modifiedData:{}},zs=(r,e)=>produce(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.modifiedData={};break}case"GET_DATA_SUCCEEDED":{t.isLoading=!1,t.modifiedData=e.data;break}case"GET_DATA_ERROR":{t.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{t.modifiedData=e.data;break}default:return t}}),Ks=null;var Dr=o(25108),Lr=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Qs=(r,e)=>{const{isLoading:t,allowedActions:i}=useRBAC(e),[{isLoading:u,modifiedData:l},d]=useReducer(reducer,initialState),a=useNotification(),n=useRef(!0),c=new AbortController,{signal:O}=c;useEffect(()=>(t||(()=>Lr(void 0,null,function*(){try{d({type:"GET_DATA"});const L=yield request(getRequestURL(r),{method:"GET",signal:O});d({type:"GET_DATA_SUCCEEDED",data:L})}catch(L){n.current&&(d({type:"GET_DATA_ERROR"}),Dr.error(L),a({type:"warning",message:{id:"notification.error"}}))}}))(),()=>{c.abort(),n.current=!1}),[t,r]);const b=useCallback(g=>{d({type:"ON_SUBMIT_SUCCEEDED",data:g})},[]);return{allowedActions:i,dispatchSubmitSucceeded:b,isLoading:u,isLoadingForPermissions:t,modifiedData:l}},Xs=null;var Ar=Object.defineProperty,Sr=Object.defineProperties,wr=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,Mr=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,_e=(r,e,t)=>e in r?Ar(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ir=(r,e)=>{for(var t in e||(e={}))Mr.call(e,t)&&_e(r,t,e[t]);if(xe)for(var t of xe(e))jr.call(e,t)&&_e(r,t,e[t]);return r},Ur=(r,e)=>Sr(r,wr(e));const Ys=(r,e)=>Ur(Ir({},r),{isLoading:e}),Js=null,qs={roles:[],isLoading:!0},en=(r,e)=>produce(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.roles=[];break}case"GET_DATA_SUCCEEDED":{t.roles=e.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}default:return t}}),tn=null;var xr=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const rn=(r=!0)=>{const[{roles:e,isLoading:t},i]=useReducer(reducer,initialState,()=>init(initialState,r)),u=useNotification(),l=useRef(!0),d=new AbortController,{signal:a}=d;useEffect(()=>(r&&n(),()=>{d.abort(),l.current=!1}),[r]);const n=()=>xr(void 0,null,function*(){try{i({type:"GET_DATA"});const{roles:c}=yield request(`/${pluginId}/roles`,{method:"GET",signal:a});i({type:"GET_DATA_SUCCEEDED",data:c})}catch(c){const O=get(c,["response","payload","message"],"An error occured");l.current&&(i({type:"GET_DATA_ERROR"}),O!=="Forbidden"&&u({type:"warning",message:O}))}});return{roles:e,isLoading:t,getData:n}},sn=null;var _r=Object.defineProperty,Br=Object.defineProperties,Nr=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable,Ne=(r,e,t)=>e in r?_r(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Zr=(r,e)=>{for(var t in e||(e={}))Gr.call(e,t)&&Ne(r,t,e[t]);if(Be)for(var t of Be(e))Fr.call(e,t)&&Ne(r,t,e[t]);return r},$r=(r,e)=>Br(r,Nr(e));const kr=(r,e)=>$r(Zr({},r),{isLoading:e});var Q=o(46979);const Ge={permissions:{},routes:{},isLoading:!0},Vr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.permissions={},t.routes={};break}case"GET_DATA_SUCCEEDED":{t.permissions=e.permissions,t.routes=e.routes,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}default:return t}});var Fe=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Ze=(r=!0)=>{const e=(0,p.useNotification)(),[{permissions:t,routes:i,isLoading:u},l]=(0,s.useReducer)(Vr,Ge,()=>kr(Ge,r)),d=(0,s.useCallback)(()=>Fe(void 0,null,function*(){try{l({type:"GET_DATA"});const[{permissions:a},{routes:n}]=yield Promise.all([`/${f.Z}/permissions`,`/${f.Z}/routes`].map(c=>Fe(void 0,null,function*(){return(yield Q.Z.get(c)).data})));l({type:"GET_DATA_SUCCEEDED",permissions:(0,G.YX)(a),routes:n})}catch(a){const n=(0,x.get)(a,["response","payload","message"],"An error occured");l({type:"GET_DATA_ERROR"}),n!=="Forbidden"&&e({type:"warning",message:n})}}),[e]);return(0,s.useEffect)(()=>{r&&d()},[d,r]),{permissions:t,routes:i,getData:d,isLoading:u}},Hr={role:{},isLoading:!0},Wr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"GET_DATA_SUCCEEDED":{t.role=e.role,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{t.role.name=e.name,t.role.description=e.description;break}default:return t}});var zr=o(25108),Kr=Object.defineProperty,Qr=Object.defineProperties,Xr=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,Yr=Object.prototype.hasOwnProperty,Jr=Object.prototype.propertyIsEnumerable,ke=(r,e,t)=>e in r?Kr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ve=(r,e)=>{for(var t in e||(e={}))Yr.call(e,t)&&ke(r,t,e[t]);if($e)for(var t of $e(e))Jr.call(e,t)&&ke(r,t,e[t]);return r},qr=(r,e)=>Qr(r,Xr(e)),es=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const ts=r=>{const[e,t]=(0,s.useReducer)(Wr,Hr),i=(0,p.useNotification)(),u=(0,s.useRef)(null);(0,s.useEffect)(()=>(u.current=!0,r?l(r):t({type:"GET_DATA_SUCCEEDED",role:{}}),()=>u.current=!1),[r]);const l=a=>es(void 0,null,function*(){try{const{data:{role:n}}=yield Q.Z.get(`/${f.Z}/roles/${a}`);u.current&&t({type:"GET_DATA_SUCCEEDED",role:n})}catch(n){zr.error(n),t({type:"GET_DATA_ERROR"}),i({type:"warning",message:{id:"notification.error"}})}}),d=(0,s.useCallback)(a=>{t(Ve({type:"ON_SUBMIT_SUCCEEDED"},a))},[]);return qr(Ve({},e),{onSubmitSucceeded:d})};var k=o(53209);const rs=k.Ry().shape({name:k.Z_().required(p.translatedErrors.required),description:k.Z_().required(p.translatedErrors.required)});var ss=o(25108),ns=Object.defineProperty,os=Object.defineProperties,as=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,is=Object.prototype.hasOwnProperty,ls=Object.prototype.propertyIsEnumerable,We=(r,e,t)=>e in r?ns(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ze=(r,e)=>{for(var t in e||(e={}))is.call(e,t)&&We(r,t,e[t]);if(He)for(var t of He(e))ls.call(e,t)&&We(r,t,e[t]);return r},cs=(r,e)=>os(r,as(e)),us=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const ds=()=>{const{formatMessage:r}=(0,C.useIntl)(),[e,t]=(0,s.useState)(!1),i=(0,p.useNotification)(),{lockApp:u,unlockApp:l}=(0,p.useOverlayBlocker)(),{params:{id:d}}=(0,y.useRouteMatch)(`/settings/${f.Z}/roles/:id`),{isLoading:a,routes:n}=Ze(),{role:c,onSubmitSucceeded:O,isLoading:b}=ts(d),g=(0,s.useRef)(),L=D=>us(void 0,null,function*(){u(),t(!0);try{const j=g.current.getPermissions();yield Q.Z.put(`/${f.Z}/roles/${d}`,cs(ze(ze({},D),j),{users:[]})),O({name:D.name,description:D.description}),i({type:"success",message:{id:(0,$.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(j){ss.error(j),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}t(!1),l()});return b?s.createElement(p.LoadingIndicatorPage,null):s.createElement(h.Main,null,s.createElement(p.SettingsPageTitle,{name:"Roles"}),s.createElement(le.Formik,{enableReinitialize:!0,initialValues:{name:c.name,description:c.description},onSubmit:L,validationSchema:rs},({handleSubmit:D,values:j,handleChange:I,errors:V})=>s.createElement(p.Form,{noValidate:!0,onSubmit:D},s.createElement(E.HeaderLayout,{primaryAction:!a&&s.createElement(P.Button,{disabled:c.code==="strapi-super-admin",type:"submit",loading:e,startIcon:s.createElement(de(),null)},r({id:"global.save",defaultMessage:"Save"})),title:c.name,subtitle:c.description,navigationAction:s.createElement(p.Link,{startIcon:s.createElement(pt(),null),to:"/settings/users-permissions/roles"},r({id:"global.back",defaultMessage:"Back"}))}),s.createElement(E.ContentLayout,null,s.createElement(w.Stack,{spacing:7},s.createElement(U.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(w.Stack,{spacing:4},s.createElement(R.Typography,{variant:"delta",as:"h2"},r({id:(0,$.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),s.createElement(M.Grid,{gap:4},s.createElement(M.GridItem,{col:6},s.createElement(ce.TextInput,{name:"name",value:j.name||"",onChange:I,label:r({id:"global.name",defaultMessage:"Name"}),error:V.name?r({id:V.name,defaultMessage:"Invalid value"}):null})),s.createElement(M.GridItem,{col:6},s.createElement(ue.Textarea,{name:"description",value:j.description||"",onChange:I,label:r({id:"global.description",defaultMessage:"Description"}),error:V.description?r({id:V.description,defaultMessage:"Invalid value"}):null}))))),!a&&s.createElement(Ue,{ref:g,permissions:c.permissions,routes:n}))))))},ps=()=>s.createElement(p.CheckPagePermissions,{permissions:m.Z.updateRole},s.createElement(ds,null)),ms=k.Ry().shape({name:k.Z_().required(p.translatedErrors.required),description:k.Z_().required(p.translatedErrors.required)});var gs=o(25108),fs=Object.defineProperty,Ps=Object.defineProperties,vs=Object.getOwnPropertyDescriptors,Ke=Object.getOwnPropertySymbols,ys=Object.prototype.hasOwnProperty,Es=Object.prototype.propertyIsEnumerable,Qe=(r,e,t)=>e in r?fs(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xe=(r,e)=>{for(var t in e||(e={}))ys.call(e,t)&&Qe(r,t,e[t]);if(Ke)for(var t of Ke(e))Es.call(e,t)&&Qe(r,t,e[t]);return r},hs=(r,e)=>Ps(r,vs(e)),Os=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Rs=()=>{const{formatMessage:r}=(0,C.useIntl)(),[e,t]=(0,s.useState)(!1),i=(0,p.useNotification)(),{goBack:u}=(0,y.useHistory)(),{lockApp:l,unlockApp:d}=(0,p.useOverlayBlocker)(),{isLoading:a,permissions:n,routes:c}=Ze(),{trackUsage:O}=(0,p.useTracking)(),b=(0,s.useRef)(),g=L=>Os(void 0,null,function*(){l(),t(!0);try{const D=b.current.getPermissions();yield Q.Z.post(`/${f.Z}/roles`,hs(Xe(Xe({},L),D),{users:[]})),O("didCreateRole"),i({type:"success",message:{id:(0,$.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),u()}catch(D){gs.error(D),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}t(!1),d()});return s.createElement(h.Main,null,s.createElement(p.SettingsPageTitle,{name:"Roles"}),s.createElement(le.Formik,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:g,validationSchema:ms},({handleSubmit:L,values:D,handleChange:j,errors:I})=>s.createElement(p.Form,{noValidate:!0,onSubmit:L},s.createElement(E.HeaderLayout,{primaryAction:!a&&s.createElement(P.Button,{type:"submit",loading:e,startIcon:s.createElement(de(),null)},r({id:"global.save",defaultMessage:"Save"})),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),s.createElement(E.ContentLayout,null,s.createElement(w.Stack,{spacing:7},s.createElement(U.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(w.Stack,{spacing:4},s.createElement(R.Typography,{variant:"delta",as:"h2"},r({id:(0,$.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),s.createElement(M.Grid,{gap:4},s.createElement(M.GridItem,{col:6},s.createElement(ce.TextInput,{name:"name",value:D.name||"",onChange:j,label:r({id:"global.name",defaultMessage:"Name"}),error:I.name?r({id:I.name,defaultMessage:"Invalid value"}):null})),s.createElement(M.GridItem,{col:6},s.createElement(ue.Textarea,{name:"description",value:D.description||"",onChange:j,label:r({id:"global.description",defaultMessage:"Description"}),error:I.description?r({id:I.description,defaultMessage:"Invalid value"}):null}))))),!a&&s.createElement(Ue,{ref:b,permissions:n,routes:c}))))))},bs=()=>s.createElement(p.CheckPagePermissions,{permissions:m.Z.createRole},s.createElement(Rs,null)),Cs=()=>s.createElement(p.CheckPagePermissions,{permissions:m.Z.accessRoles},s.createElement(y.Switch,null,s.createElement(y.Route,{path:`/settings/${f.Z}/roles/new`,component:bs,exact:!0}),s.createElement(y.Route,{path:`/settings/${f.Z}/roles/:id`,component:ps,exact:!0}),s.createElement(y.Route,{path:`/settings/${f.Z}/roles`,component:ut,exact:!0}),s.createElement(y.Route,{path:"",component:p.NotFound})))},46979:(B,_,o)=>{"use strict";o.d(_,{Z:()=>E});var s=o(9669),y=o.n(s),p=o(68547),f=o.n(p),m=(h,v,A)=>new Promise((R,N)=>{var Z=S=>{try{C(A.next(S))}catch(H){N(H)}},F=S=>{try{C(A.throw(S))}catch(H){N(H)}},C=S=>S.done?R(S.value):Promise.resolve(S.value).then(Z,F);C((A=A.apply(h,v)).next())});const P=y().create({baseURL:""});P.interceptors.request.use(h=>m(void 0,null,function*(){return h.headers={Authorization:`Bearer ${p.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},h}),h=>{Promise.reject(h)}),P.interceptors.response.use(h=>h,h=>{var v;throw((v=h.response)==null?void 0:v.status)===401&&(p.auth.clearAppStorage(),window.location.reload()),h});const E=P},89031:(B,_,o)=>{"use strict";o.d(_,{be:()=>s.Z,YX:()=>f,Gc:()=>E,OB:()=>h.Z});var s=o(46979),y=o(96486);const f=v=>Object.keys(v).reduce((A,R)=>{const N=v[R].controllers,Z=Object.keys(N).reduce((F,C)=>((0,y.isEmpty)(N[C])||(F[C]=N[C]),F),{});return(0,y.isEmpty)(Z)||(A[R]={controllers:Z}),A},{});var m=o(31498);const E=v=>`/${m.Z}/${v}`;var h=o(84757)},35161:(B,_,o)=>{var s=o(29932),y=o(67206),p=o(69199),f=o(1469);function m(P,E){var h=f(P)?s:p;return h(P,y(E,3))}B.exports=m},13217:(B,_,o)=>{var s=o(14259);function y(p){var f=p==null?0:p.length;return f?s(p,1,f):[]}B.exports=y}}]);
