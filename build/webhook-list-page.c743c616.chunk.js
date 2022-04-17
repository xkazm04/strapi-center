"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4121],{72251:(e,t,a)=>{var n=a(25108),l=a(95318),o=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(87757)),u=l(a(67154)),i=l(a(59713)),s=l(a(48926)),c=l(a(63038)),d=H(a(53547)),f=a(39711),E=a(97132),b=a(68547),h=a(35395),p=a(92543),g=a(40264),m=a(9524),k=a(49549),w=a(46458),T=a(43546),y=a(33483),O=a(64459),v=a(19631),D=a(36825),S=a(80117),_=a(31512),L=a(67422),C=a(94117),B=l(a(89326)),M=l(a(56204)),x=l(a(62982)),P=l(a(26485)),W=H(a(71681)),j=l(a(13240));function A(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(A=function(e){return e?a:t})(e)}function H(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var a=A(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=l?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){(0,i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(){var e=(0,b.useRBAC)(j.default.settings.webhooks),t=e.isLoading,a=e.allowedActions,l=a.canCreate,o=a.canRead,i=a.canUpdate,A=a.canDelete,H=(0,b.useNotification)(),K=(0,d.useRef)(!0),I=(0,E.useIntl)().formatMessage,N=(0,d.useState)(!1),R=(0,c.default)(N,2),U=R[0],F=R[1],q=(0,d.useReducer)(W.default,W.initialState),z=(0,c.default)(q,2),V=z[0],J=V.webhooks,Q=V.webhooksToDelete,X=V.webhookToDelete,Y=V.loadingWebhooks,Z=z[1],$=(0,L.useNotifyAT)().notifyStatus;(0,b.useFocusWhenNavigate)();var ee=(0,f.useHistory)().push,te=(0,f.useLocation)().pathname,ae=J.length,ne=Q.length,le=function(e){return J.findIndex((function(t){return t.id===e}))};(0,d.useEffect)((function(){return K.current=!0,function(){K.current=!1}}),[]),(0,d.useEffect)((function(){o&&oe()}),[o]);var oe=function(){var e=(0,s.default)(r.default.mark((function e(){var t,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.request)("/admin/webhooks",{method:"GET"});case 3:t=e.sent,a=t.data,K.current&&(Z({type:"GET_DATA_SUCCEEDED",data:a}),$("webhooks have been loaded")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n.log(e.t0),K.current&&(20!==e.t0.code&&H({type:"warning",message:{id:"notification.error"}}),Z({type:"TOGGLE_LOADING"}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,s.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.request)("/admin/webhooks/".concat(X),{method:"DELETE"});case 3:Z({type:"WEBHOOK_DELETED",index:le(X)}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),20!==e.t0.code&&H({type:"warning",message:{id:"notification.error"}});case 9:F(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.default)(r.default.mark((function e(){var t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={ids:Q},e.prev=1,e.next=4,(0,b.request)("/admin/webhooks/batch-delete",{method:"POST",body:t});case 4:K.current&&Z({type:"WEBHOOKS_DELETED"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),K.current&&20!==e.t0.code&&H({type:"warning",message:{id:"notification.error"}});case 10:F(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),ie=function(e){F(!0),"all"!==e&&Z({type:"SET_WEBHOOK_TO_DELETE",id:e})},se=function(){var e=(0,s.default)(r.default.mark((function e(t,a){var n,l,o,u;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=le(a),l=J[n],o=[n,"isEnabled"],delete(u=G(G({},l),{},{isEnabled:t})).id,e.prev=5,Z({type:"SET_WEBHOOK_ENABLED",keys:o,value:t}),e.next=9,(0,b.request)("/admin/webhooks/".concat(a),{method:"PUT",body:u});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),K.current&&(Z({type:"SET_WEBHOOK_ENABLED",keys:o,value:!t}),20!==e.t0.code&&H({type:"warning",message:{id:"notification.error"}}));case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,a){return e.apply(this,arguments)}}(),ce=function(e){ee("".concat(te,"/").concat(e))};return d.default.createElement(h.Layout,null,d.default.createElement(b.SettingsPageTitle,{name:"Webhooks"}),d.default.createElement(S.Main,{"aria-busy":t||Y},d.default.createElement(h.HeaderLayout,{title:I({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:I({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:l&&!Y&&d.default.createElement(_.LinkButton,{startIcon:d.default.createElement(B.default,null),variant:"default",to:"".concat(te,"/create"),size:"L"},I({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),ne>0&&A&&d.default.createElement(h.ActionLayout,{startActions:d.default.createElement(d.default.Fragment,null,d.default.createElement(y.Typography,{variant:"epsilon",textColor:"neutral600"},I({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:ne})),d.default.createElement(O.Button,{onClick:function(){return ie("all")},startIcon:d.default.createElement(x.default,null),size:"L",variant:"danger-light"},I({id:"global.delete",defaultMessage:"Delete"})))}),d.default.createElement(h.ContentLayout,null,t||Y?d.default.createElement(C.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},d.default.createElement(b.LoadingIndicatorPage,null)):d.default.createElement(d.default.Fragment,null,ae>0?d.default.createElement(T.Table,{colCount:5,rowCount:ae+1,footer:d.default.createElement(T.TFooter,{onClick:function(){return l?ce("create"):{}},icon:d.default.createElement(B.default,null)},I({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},d.default.createElement(T.Thead,null,d.default.createElement(T.Tr,null,d.default.createElement(T.Th,null,d.default.createElement(w.BaseCheckbox,{"aria-label":I({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:ne>0&&ne<ae,value:ne===ae,onValueChange:function(){Z({type:"SET_ALL_WEBHOOKS_TO_DELETE"})}})),d.default.createElement(T.Th,{width:"20%"},d.default.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},I({id:"global.name",defaultMessage:"Name"}))),d.default.createElement(T.Th,{width:"60%"},d.default.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},I({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),d.default.createElement(T.Th,{width:"20%"},d.default.createElement(y.Typography,{variant:"sigma",textColor:"neutral600"},I({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),d.default.createElement(T.Th,null,d.default.createElement(v.VisuallyHidden,null,I({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),d.default.createElement(T.Tbody,null,J.map((function(e){return d.default.createElement(T.Tr,(0,u.default)({key:e.id},(0,b.onRowClick)({fn:function(){return ce(e.id)},condition:i})),d.default.createElement(T.Td,b.stopPropagation,d.default.createElement(w.BaseCheckbox,{"aria-label":"".concat(I({id:"global.select",defaultMessage:"Select"})," ").concat(e.name),value:null===Q||void 0===Q?void 0:Q.includes(e.id),onValueChange:function(t){return function(e,t){Z({type:"SET_WEBHOOKS_TO_DELETE",value:e,id:t})}(t,e.id)},id:"select",name:"select"})),d.default.createElement(T.Td,null,d.default.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral800"},e.name)),d.default.createElement(T.Td,null,d.default.createElement(y.Typography,{textColor:"neutral800"},e.url)),d.default.createElement(T.Td,null,d.default.createElement(g.Flex,b.stopPropagation,d.default.createElement(D.Switch,{onLabel:I({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:I({id:"global.disabled",defaultMessage:"Disabled"}),label:"".concat(e.name," ").concat(I({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})),selected:e.isEnabled,onChange:function(){return se(!e.isEnabled,e.id)},visibleLabels:!0}))),d.default.createElement(T.Td,null,d.default.createElement(m.Stack,(0,u.default)({horizontal:!0,spacing:1},b.stopPropagation),i&&d.default.createElement(k.IconButton,{onClick:function(){ce(e.id)},label:I({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:d.default.createElement(M.default,null),noBorder:!0}),A&&d.default.createElement(k.IconButton,{onClick:function(){return ie(e.id)},label:I({id:"global.delete",defaultMessage:"Delete"}),icon:d.default.createElement(x.default,null),noBorder:!0,id:"delete-".concat(e.id)}))))})))):d.default.createElement(p.EmptyStateLayout,{icon:d.default.createElement(P.default,{width:"160px"}),content:I({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:d.default.createElement(O.Button,{variant:"secondary",startIcon:d.default.createElement(B.default,null),onClick:function(){return l?ce("create"):{}}},I({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),d.default.createElement(b.ConfirmDialog,{isOpen:U,onToggleDialog:function(){F((function(e){return!e}))},onConfirm:function(){X?re():ue()}}))};t.default=I},71681:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var l=n(a(319)),o=n(a(66312)),r=n(a(36968));t.initialState={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0};var u=function(e,t){return(0,o.default)(e,(function(a){switch(t.type){case"GET_DATA_SUCCEEDED":a.webhooks=t.data,a.loadingWebhooks=!1;break;case"TOGGLE_LOADING":a.loadingWebhooks=!e.loadingWebhooks;break;case"SET_WEBHOOK_ENABLED":(0,r.default)(a,["webhooks"].concat((0,l.default)(t.keys)),t.value);break;case"SET_WEBHOOK_TO_DELETE":a.webhookToDelete=t.id;break;case"SET_WEBHOOKS_TO_DELETE":t.value?a.webhooksToDelete.push(t.id):a.webhooksToDelete=e.webhooksToDelete.filter((function(e){return e!==t.id}));break;case"SET_ALL_WEBHOOKS_TO_DELETE":0===e.webhooksToDelete.length?a.webhooksToDelete=e.webhooks.map((function(e){return e.id})):a.webhooksToDelete=[];break;case"WEBHOOKS_DELETED":a.webhooks=e.webhooks.filter((function(t){return!e.webhooksToDelete.includes(t.id)})),a.webhooksToDelete=[];break;case"WEBHOOK_DELETED":a.webhooks=e.webhooks.filter((function(e,a){return a!==t.index})),a.webhookToDelete=null;break;default:return a}}))};t.default=u},94859:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(53547)),o=a(68547),r=n(a(13240)),u=n(a(72251)),i=function(){return l.default.createElement(o.CheckPagePermissions,{permissions:r.default.settings.webhooks.main},l.default.createElement(u.default,null))};t.default=i}}]);