(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5395],{35395:(V,on,I)=>{"use strict";V.exports=I(58779)},58779:function(V,on,I){(function(Z,X){V.exports=X(I(53547),I(16384))})(this,function(Z,X){return function(o){var f={};function t(a){if(f[a])return f[a].exports;var i=f[a]={i:a,l:!1,exports:{}};return o[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=o,t.c=f,t.d=function(a,i,c){t.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:c})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,i){if(1&i&&(a=t(a)),8&i||4&i&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&i&&typeof a!="string")for(var s in a)t.d(c,s,function(e){return a[e]}.bind(null,s));return c},t.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(i,"a",i),i},t.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},t.p="",t(t.s=96)}({0:function(o,f,t){o.exports=t(17)()},1:function(o,f){o.exports=Z},10:function(o,f,t){var a=t(23),i=t(24),c=t(20),s=t(25);o.exports=function(e,u){return a(e)||i(e,u)||c(e,u)||s()},o.exports.default=o.exports,o.exports.__esModule=!0},13:function(o,f){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(i){return typeof i},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},o.exports.default=o.exports,o.exports.__esModule=!0),t(a)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},17:function(o,f,t){"use strict";var a=t(18);function i(){}function c(){}c.resetWarningCache=i,o.exports=function(){function s(m,d,y,p,n,r){if(r!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return s}s.isRequired=s;var u={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:e,element:s,elementType:s,instanceOf:e,node:s,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:i};return u.PropTypes=u,u}},18:function(o,f,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(o,f){o.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var i=0,c=new Array(a);i<a;i++)c[i]=t[i];return c},o.exports.default=o.exports,o.exports.__esModule=!0},2:function(o,f){o.exports=X},20:function(o,f,t){var a=t(19);o.exports=function(i,c){if(i){if(typeof i=="string")return a(i,c);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(i,c):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,f){o.exports=function(t,a){if(t==null)return{};var i,c,s={},e=Object.keys(t);for(c=0;c<e.length;c++)i=e[c],a.indexOf(i)>=0||(s[i]=t[i]);return s},o.exports.default=o.exports,o.exports.__esModule=!0},23:function(o,f){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,f){o.exports=function(t,a){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var c,s,e=[],u=!0,m=!1;try{for(i=i.call(t);!(u=(c=i.next()).done)&&(e.push(c.value),!a||e.length!==a);u=!0);}catch(d){m=!0,s=d}finally{try{u||i.return==null||i.return()}finally{if(m)throw s}}return e}},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,f){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,f){o.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,f,t){"use strict";t.r(f),t.d(f,"Box",function(){return p});var a,i=t(3),c=t.n(i),s=t(0),e=t.n(s),u=t(2),m=t.n(u),d=t(7),y={color:!0},p=m.a.div.withConfig({shouldForwardProp:function(n,r){return!y[n]&&r(n)}})(a||(a=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var r=n.fontSize;return n.theme.fontSizes[r]||r},function(n){var r=n.theme,l=n.background;return r.colors[l]},function(n){var r=n.theme,l=n.color;return r.colors[l]},function(n){var r=n.theme,l=n.padding;return Object(d.a)("padding",l,r)},function(n){var r=n.theme,l=n.paddingTop;return Object(d.a)("padding-top",l,r)},function(n){var r=n.theme,l=n.paddingRight;return Object(d.a)("padding-right",l,r)},function(n){var r=n.theme,l=n.paddingBottom;return Object(d.a)("padding-bottom",l,r)},function(n){var r=n.theme,l=n.paddingLeft;return Object(d.a)("padding-left",l,r)},function(n){var r=n.theme,l=n.marginLeft;return Object(d.a)("margin-left",l,r)},function(n){var r=n.theme,l=n.marginRight;return Object(d.a)("margin-right",l,r)},function(n){var r=n.theme,l=n.marginTop;return Object(d.a)("margin-top",l,r)},function(n){var r=n.theme,l=n.marginBottom;return Object(d.a)("margin-bottom",l,r)},function(n){var r=n.theme;return n.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(n){var r=n.theme;return n.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(n){var r=n.theme,l=n.hasRadius,x=n.borderRadius;return l?r.borderRadius:x},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var r=n.borderColor;return n.theme.colors[r]},function(n){var r=n.theme,l=n.borderColor,x=n.borderStyle,O=n.borderWidth;if(l&&!x&&!O)return"1px solid ".concat(r.colors[l])},function(n){var r=n.theme,l=n.shadow;return r.shadows[l]},function(n){return n.pointerEvents},function(n){var r=n._hover,l=n.theme;return r?r(l):void 0},function(n){return n.display},function(n){return n.position},function(n){var r=n.left;return n.theme.spaces[r]||r},function(n){var r=n.right;return n.theme.spaces[r]||r},function(n){var r=n.top;return n.theme.spaces[r]||r},function(n){var r=n.bottom;return n.theme.spaces[r]||r},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var r=n.width;return n.theme.spaces[r]||r},function(n){var r=n.maxWidth;return n.theme.spaces[r]||r},function(n){var r=n.minWidth;return n.theme.spaces[r]||r},function(n){var r=n.height;return n.theme.spaces[r]||r},function(n){var r=n.maxHeight;return n.theme.spaces[r]||r},function(n){var r=n.minHeight;return n.theme.spaces[r]||r},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:e.a.func,background:e.a.string,basis:e.a.oneOfType([e.a.string,e.a.string]),borderColor:e.a.string,children:e.a.oneOfType([e.a.node,e.a.string]),color:e.a.string,flex:e.a.oneOfType([e.a.string,e.a.string]),grow:e.a.oneOfType([e.a.string,e.a.string]),hasRadius:e.a.bool,hiddenS:e.a.bool,hiddenXS:e.a.bool,padding:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingBottom:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingLeft:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingRight:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingTop:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),shadow:e.a.string,shrink:e.a.oneOfType([e.a.string,e.a.string])}},47:function(o,f,t){"use strict";t.d(f,"a",function(){return i});var a=t(1),i=function(c,s){Object(a.useEffect)(function(){var e=new ResizeObserver(s);return Array.isArray(c)?c.map(function(u){return e.observe(u.current)}):e.observe(c.current),function(){e.disconnect()}},[])}},49:function(o,f,t){"use strict";t.r(f),t.d(f,"Grid",function(){return k}),t.d(f,"GridItem",function(){return P});var a,i=t(6),c=t.n(i),s=t(5),e=t.n(s),u=t(3),m=t.n(u),d=t(1),y=t.n(d),p=t(2),n=t.n(p),r=t(0),l=t.n(r),x=Object(d.createContext)({gap:0,gridCols:12}),O=t(4),W=t(7),S=["gap","gridCols"],F=n()(O.Box)(a||(a=m()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(h){return h.gridCols},function(h){var E=h.theme,w=h.gap;return Object(W.a)("gap",w,E)}),k=function(h){var E=h.gap,w=h.gridCols,L=e()(h,S);return y.a.createElement(x.Provider,{value:{gap:E,gridCols:w}},y.a.createElement(F,c()({gap:E,gridCols:w},L)))};k.defaultProps={gap:0,gridCols:12},k.propTypes={gap:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),gridCols:l.a.number};var R,N=["col","xs","s"],q=n.a.div(R||(R=m()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(h){return h.col},function(h){return h.theme.mediaQueries.tablet},function(h){return h.s},function(h){return h.theme.mediaQueries.mobile},function(h){return h.xs}),P=function(h){var E=h.col,w=h.xs,L=h.s,A=e()(h,N),C=Object(d.useContext)(x),Y=C.gap,$=C.gridCols;return y.a.createElement(q,{gap:Y,gridCols:$,col:E,xs:w,s:L},y.a.createElement(O.Box,A))};P.defaultProps={col:void 0,s:void 0,xs:void 0},P.propTypes={col:l.a.number,s:l.a.number,xs:l.a.number}},5:function(o,f,t){var a=t(22);o.exports=function(i,c){if(i==null)return{};var s,e,u=a(i,c);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(e=0;e<m.length;e++)s=m[e],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(u[s]=i[s])}return u},o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,f){function t(){return o.exports=t=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s])}return a},o.exports.default=o.exports,o.exports.__esModule=!0,t.apply(this,arguments)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},7:function(o,f,t){"use strict";var a=t(10),i=t.n(a),c=t(13),s=t.n(c);f.a=function(e,u,m){var d=u;if(Array.isArray(u)||s()(u)!=="object"||(d=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),d!==void 0){if(Array.isArray(d)){var y=d,p=i()(y,3),n=p[0],r=p[1],l=p[2],x="".concat(e,": ").concat(m.spaces[n],";");return r!==void 0&&(x+="".concat(m.mediaQueries.tablet,`{
          `).concat(e,": ").concat(m.spaces[r],`;
        }`)),l!==void 0&&(x+="".concat(m.mediaQueries.mobile,`{
          `).concat(e,": ").concat(m.spaces[l],`;
        }`)),x}var O=m.spaces[d]||d;return"".concat(e,": ").concat(O,";")}}},8:function(o,f,t){"use strict";t.r(f),t.d(f,"Typography",function(){return y});var a,i=t(3),c=t.n(i),s=t(0),e=t.n(s),u=t(2),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},y=t.n(u).a.span.withConfig({shouldForwardProp:function(p,n){return!d[p]&&n(p)}})(a||(a=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(p){var n=p.theme,r=p.fontWeight;return n.fontWeights[r]},function(p){var n=p.theme,r=p.fontSize;return n.fontSizes[r]},function(p){var n=p.theme,r=p.lineHeight;return n.lineHeights[r]},function(p){var n=p.theme,r=p.textColor;return n.colors[r||"neutral800"]},function(p){return p.textTransform},function(p){return p.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(p){var n=p.variant,r=p.theme;switch(n){case"alpha":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[5],`;
        line-height: `).concat(r.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[4],`;
        line-height: `).concat(r.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(r.fontWeights.semiBold,`;
        font-size: `).concat(r.fontSizes[3],`;
        line-height: `).concat(r.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(r.fontSizes[3],`;
        line-height: `).concat(r.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(r.fontSizes[2],`;
        line-height: `).concat(r.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(r.fontSizes[1],`;
        line-height: `).concat(r.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[0],`;
        line-height: `).concat(r.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(r.fontSizes[2],`;
      `)}});y.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},y.propTypes={fontSize:e.a.oneOfType([e.a.number,e.a.string]),fontWeight:e.a.string,lineHeight:e.a.oneOfType([e.a.number,e.a.string]),textColor:e.a.string,textTransform:e.a.string,variant:e.a.oneOf(m)}},9:function(o,f,t){"use strict";t.r(f),t.d(f,"Flex",function(){return p});var a,i=t(3),c=t.n(i),s=t(0),e=t.n(s),u=t(2),m=t.n(u),d=t(4),y={direction:!0},p=m()(d.Box).withConfig({shouldForwardProp:function(n,r){return!y[n]&&r(n)}})(a||(a=c()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(n){return n.inline?"inline-flex":"flex"},function(n){return n.direction},function(n){return n.justifyContent},function(n){return n.alignItems},function(n){return n.wrap});p.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},p.propTypes={alignItems:e.a.string,basis:e.a.oneOfType([e.a.string,e.a.number]),direction:e.a.string,inline:e.a.bool,justifyContent:e.a.string,reverse:e.a.bool,wrap:e.a.string}},96:function(o,f,t){"use strict";t.r(f),t.d(f,"Layout",function(){return x}),t.d(f,"ActionLayout",function(){return R}),t.d(f,"ContentLayout",function(){return N}),t.d(f,"HeaderLayout",function(){return G}),t.d(f,"BaseHeaderLayout",function(){return B}),t.d(f,"TwoColsLayout",function(){return tn}),t.d(f,"GridLayout",function(){return en});var a,i,c=t(3),s=t.n(c),e=t(1),u=t.n(e),m=t(0),d=t.n(m),y=t(2),p=t.n(y),n=t(4),r=p()(n.Box)(a||(a=s()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(g){return g.hasSideNav?"auto 1fr":"1fr"}),l=p()(n.Box)(i||(i=s()([`
  overflow-x: hidden;
`]))),x=function(g){var v=g.sideNav,b=g.children;return u.a.createElement(r,{hasSideNav:Boolean(v)},v,u.a.createElement(l,{paddingBottom:10},b))};x.defaultProps={sideNav:void 0},x.propTypes={children:d.a.node.isRequired,sideNav:d.a.node};var O,W,S=t(9),F=p()(S.Flex)(O||(O=s()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(g){return g.theme.spaces[2]},function(g){return g.pullRight?"auto":void 0}),k=p()(F)(W||(W=s()([`
  flex-shrink: 0;
`]))),R=function(g){var v=g.startActions,b=g.endActions;return v||b?u.a.createElement(n.Box,{paddingLeft:10,paddingRight:10},u.a.createElement(n.Box,{paddingBottom:4},u.a.createElement(S.Flex,{justifyContent:"space-between",alignItems:"flex-start"},v&&u.a.createElement(F,{wrap:"wrap"},v),b&&u.a.createElement(k,{pullRight:!0},b)))):null};R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:d.a.node,startActions:d.a.node};var N=function(g){var v=g.children;return u.a.createElement(n.Box,{paddingLeft:10,paddingRight:10},v)};N.propTypes={children:d.a.node.isRequired};var q,P=t(5),h=t.n(P),E=t(6),w=t.n(E),L=t(10),A=t.n(L),C=t(8),Y=t(47),$=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],an=function(){var g=Object(e.useRef)(null),v=Object(e.useState)(null),b=A()(v,2),_=b[0],T=b[1],j=function(M){var Q=Object(e.useRef)(null),sn=Object(e.useState)(!0),rn=A()(sn,2),cn=rn[0],dn=rn[1],ln=function(D){var U=A()(D,1)[0];dn(U.isIntersecting)};return Object(e.useEffect)(function(){var D=Q.current,U=new IntersectionObserver(ln,M);return D&&U.observe(Q.current),function(){D&&U.disconnect()}},[Q,M]),[Q,cn]}({root:null,rootMargin:"0px",threshold:0}),H=A()(j,2),z=H[0],K=H[1];return Object(Y.a)(z,function(){z.current&&T(z.current.getBoundingClientRect())}),Object(e.useEffect)(function(){g.current&&T(g.current.getBoundingClientRect())},[g]),{containerRef:z,isVisible:K,baseHeaderLayoutRef:g,headerSize:_}},G=function(g){var v=an(),b=v.containerRef,_=v.isVisible,T=v.baseHeaderLayoutRef,j=v.headerSize;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{height:j==null?void 0:j.height},ref:b},_&&u.a.createElement(B,w()({ref:T},g))),!_&&u.a.createElement(B,w()({},g,{sticky:!0,width:j==null?void 0:j.width})))};G.displayName="HeaderLayout";var un=p()(n.Box)(q||(q=s()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(g){return g.width},function(g){return g.theme.shadows.tableShadow}),B=u.a.forwardRef(function(g,v){var b=g.navigationAction,_=g.primaryAction,T=g.secondaryAction,j=g.subtitle,H=g.title,z=g.sticky,K=g.width,M=h()(g,$);return z?u.a.createElement(un,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:K,"data-strapi-header-sticky":!0},u.a.createElement(S.Flex,{justifyContent:"space-between"},u.a.createElement(S.Flex,null,b&&u.a.createElement(n.Box,{paddingRight:3},b),u.a.createElement(n.Box,null,u.a.createElement(C.Typography,w()({variant:"beta",as:"h1"},M),H),u.a.createElement(C.Typography,{variant:"pi",textColor:"neutral600"},j)),T?u.a.createElement(n.Box,{paddingLeft:4},T):null),u.a.createElement(S.Flex,null,_?u.a.createElement(n.Box,{paddingLeft:2},_):void 0))):u.a.createElement(n.Box,{ref:v,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:b?6:8,background:"neutral100","data-strapi-header":!0},b?u.a.createElement(n.Box,{paddingBottom:2},b):null,u.a.createElement(S.Flex,{justifyContent:"space-between"},u.a.createElement(S.Flex,null,u.a.createElement(C.Typography,w()({as:"h1",variant:"alpha"},M),H),T?u.a.createElement(n.Box,{paddingLeft:4},T):null),_),u.a.createElement(C.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},j))});B.displayName="BaseHeaderLayout",B.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},B.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,sticky:d.a.bool,subtitle:d.a.string,title:d.a.string.isRequired,width:d.a.number},G.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},G.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,subtitle:d.a.string,title:d.a.string.isRequired};var nn,J=t(49),tn=function(g){var v=g.startCol,b=g.endCol;return u.a.createElement(J.Grid,{gap:4},u.a.createElement(J.GridItem,{col:9,s:12},u.a.createElement(n.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},v)),u.a.createElement(J.GridItem,{col:3,s:12},u.a.createElement(n.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},b)))};tn.propTypes={endCol:d.a.node.isRequired,startCol:d.a.node.isRequired};var en=p.a.div(nn||(nn=s()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(g){return g.theme.spaces[4]});en.propTypes={children:d.a.node.isRequired}}})})}}]);
