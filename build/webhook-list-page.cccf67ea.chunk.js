"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4121],{77967:(Me,B,n)=>{n.r(B),n.d(B,{default:()=>ye});var e=n(53547),r=n(68547),P=n(92699),W=n(49656),U=n(97132),v=n(35395),j=n(92543),z=n(40264),Z=n(9524),M=n(49549),x=n(46458),i=n(43546),f=n(33483),A=n(64459),J=n(19631),Q=n(36825),X=n(80117),Y=n(31512),q=n(67422),_=n(94117),ee=n(89326),w=n.n(ee),te=n(56204),ne=n.n(te),oe=n(62982),H=n.n(oe),le=n(26485),ae=n.n(le),se=n(8041),ie=n(36968),re=n.n(ie);const de={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ce=(a,l)=>(0,se.default)(a,o=>{switch(l.type){case"GET_DATA_SUCCEEDED":{o.webhooks=l.data,o.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{o.loadingWebhooks=!a.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{re()(o,["webhooks",...l.keys],l.value);break}case"SET_WEBHOOK_TO_DELETE":{o.webhookToDelete=l.id;break}case"SET_WEBHOOKS_TO_DELETE":{l.value?o.webhooksToDelete.push(l.id):o.webhooksToDelete=a.webhooksToDelete.filter(d=>d!==l.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{a.webhooksToDelete.length===0?o.webhooksToDelete=a.webhooks.map(d=>d.id):o.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{o.webhooks=a.webhooks.filter(d=>!a.webhooksToDelete.includes(d.id)),o.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{o.webhooks=a.webhooks.filter((d,g)=>g!==l.index),o.webhookToDelete=null;break}default:return o}});var ue=n(25108),Ee=Object.defineProperty,he=Object.defineProperties,me=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,K=(a,l,o)=>l in a?Ee(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,b=(a,l)=>{for(var o in l||(l={}))ge.call(l,o)&&K(a,o,l[o]);if(I)for(var o of I(l))fe.call(l,o)&&K(a,o,l[o]);return a},Te=(a,l)=>he(a,me(l)),p=(a,l,o)=>new Promise((d,g)=>{var T=E=>{try{s(o.next(E))}catch(m){g(m)}},u=E=>{try{s(o.throw(E))}catch(m){g(m)}},s=E=>E.done?d(E.value):Promise.resolve(E.value).then(T,u);s((o=o.apply(a,l)).next())});const be=()=>{const{isLoading:a,allowedActions:{canCreate:l,canRead:o,canUpdate:d,canDelete:g}}=(0,r.useRBAC)(P.Z.settings.webhooks),T=(0,r.useNotification)(),u=(0,e.useRef)(!0),{formatMessage:s}=(0,U.useIntl)(),[E,m]=(0,e.useState)(!1),[{webhooks:D,webhooksToDelete:O,webhookToDelete:C,loadingWebhooks:S},h]=(0,e.useReducer)(ce,de),{notifyStatus:ve}=(0,q.useNotifyAT)();(0,r.useFocusWhenNavigate)();const{push:pe}=(0,W.useHistory)(),{pathname:N}=(0,W.useLocation)(),L=D.length,y=O.length,V=t=>D.findIndex(c=>c.id===t);(0,e.useEffect)(()=>(u.current=!0,()=>{u.current=!1}),[]),(0,e.useEffect)(()=>{o&&De()},[o]);const De=()=>p(void 0,null,function*(){try{const{data:t}=yield(0,r.request)("/admin/webhooks",{method:"GET"});u.current&&(h({type:"GET_DATA_SUCCEEDED",data:t}),ve("webhooks have been loaded"))}catch(t){ue.log(t),u.current&&(t.code!==20&&T({type:"warning",message:{id:"notification.error"}}),h({type:"TOGGLE_LOADING"}))}}),Oe=()=>{m(t=>!t)},Le=()=>{C?ke():we()},ke=()=>p(void 0,null,function*(){try{yield(0,r.request)(`/admin/webhooks/${C}`,{method:"DELETE"}),h({type:"WEBHOOK_DELETED",index:V(C)})}catch(t){t.code!==20&&T({type:"warning",message:{id:"notification.error"}})}m(!1)}),we=()=>p(void 0,null,function*(){const t={ids:O};try{yield(0,r.request)("/admin/webhooks/batch-delete",{method:"POST",body:t}),u.current&&h({type:"WEBHOOKS_DELETED"})}catch(c){u.current&&c.code!==20&&T({type:"warning",message:{id:"notification.error"}})}m(!1)}),G=t=>{m(!0),t!=="all"&&h({type:"SET_WEBHOOK_TO_DELETE",id:t})},Ce=(t,c)=>p(void 0,null,function*(){const $=V(c),Pe=D[$],R=[$,"isEnabled"],F=Te(b({},Pe),{isEnabled:t});delete F.id;try{h({type:"SET_WEBHOOK_ENABLED",keys:R,value:t}),yield(0,r.request)(`/admin/webhooks/${c}`,{method:"PUT",body:F})}catch(We){u.current&&(h({type:"SET_WEBHOOK_ENABLED",keys:R,value:!t}),We.code!==20&&T({type:"warning",message:{id:"notification.error"}}))}}),Se=()=>{h({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Be=(t,c)=>{h({type:"SET_WEBHOOKS_TO_DELETE",value:t,id:c})},k=t=>{pe(`${N}/${t}`)};return e.createElement(v.Layout,null,e.createElement(r.SettingsPageTitle,{name:"Webhooks"}),e.createElement(X.Main,{"aria-busy":a||S},e.createElement(v.HeaderLayout,{title:s({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:s({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:l&&!S&&e.createElement(Y.LinkButton,{startIcon:e.createElement(w(),null),variant:"default",to:`${N}/create`,size:"L"},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),y>0&&g&&e.createElement(v.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(f.Typography,{variant:"epsilon",textColor:"neutral600"},s({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:y})),e.createElement(A.Button,{onClick:()=>G("all"),startIcon:e.createElement(H(),null),size:"L",variant:"danger-light"},s({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(v.ContentLayout,null,a||S?e.createElement(_.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(r.LoadingIndicatorPage,null)):e.createElement(e.Fragment,null,L>0?e.createElement(i.Table,{colCount:5,rowCount:L+1,footer:e.createElement(i.TFooter,{onClick:()=>l?k("create"):{},icon:e.createElement(w(),null)},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(i.Thead,null,e.createElement(i.Tr,null,e.createElement(i.Th,null,e.createElement(x.BaseCheckbox,{"aria-label":s({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:y>0&&y<L,value:y===L,onValueChange:Se})),e.createElement(i.Th,{width:"20%"},e.createElement(f.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(f.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(f.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(J.VisuallyHidden,null,s({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(i.Tbody,null,D.map(t=>e.createElement(i.Tr,b({key:t.id},(0,r.onRowClick)({fn:()=>k(t.id),condition:d})),e.createElement(i.Td,b({},r.stopPropagation),e.createElement(x.BaseCheckbox,{"aria-label":`${s({id:"global.select",defaultMessage:"Select"})} ${t.name}`,value:O==null?void 0:O.includes(t.id),onValueChange:c=>Be(c,t.id),id:"select",name:"select"})),e.createElement(i.Td,null,e.createElement(f.Typography,{fontWeight:"semiBold",textColor:"neutral800"},t.name)),e.createElement(i.Td,null,e.createElement(f.Typography,{textColor:"neutral800"},t.url)),e.createElement(i.Td,null,e.createElement(z.Flex,b({},r.stopPropagation),e.createElement(Q.Switch,{onLabel:s({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:s({id:"global.disabled",defaultMessage:"Disabled"}),label:`${t.name} ${s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:t.isEnabled,onChange:()=>Ce(!t.isEnabled,t.id),visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(Z.Stack,b({horizontal:!0,spacing:1},r.stopPropagation),d&&e.createElement(M.IconButton,{onClick:()=>{k(t.id)},label:s({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ne(),null),noBorder:!0}),g&&e.createElement(M.IconButton,{onClick:()=>G(t.id),label:s({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(H(),null),noBorder:!0,id:`delete-${t.id}`}))))))):e.createElement(j.EmptyStateLayout,{icon:e.createElement(ae(),{width:"160px"}),content:s({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(A.Button,{variant:"secondary",startIcon:e.createElement(w(),null),onClick:()=>l?k("create"):{}},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),e.createElement(r.ConfirmDialog,{isOpen:E,onToggleDialog:Oe,onConfirm:Le}))},ye=()=>e.createElement(r.CheckPagePermissions,{permissions:P.Z.settings.webhooks.main},e.createElement(be,null))}}]);
