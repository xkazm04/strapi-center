(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8418],{44981:(z,L,h)=>{"use strict";z.exports=h(5582)},5582:function(z,L,h){(function(p,P){z.exports=P(h(53547),h(16384),h(74764))})(this,function(p,P,d){return function(i){var s={};function t(r){if(s[r])return s[r].exports;var u=s[r]={i:r,l:!1,exports:{}};return i[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=i,t.c=s,t.d=function(r,u,c){t.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:c})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,u){if(1&u&&(r=t(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var a in r)t.d(c,a,function(l){return r[l]}.bind(null,a));return c},t.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(u,"a",u),u},t.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},t.p="",t(t.s=111)}({0:function(i,s,t){i.exports=t(17)()},1:function(i,s){i.exports=p},10:function(i,s,t){var r=t(23),u=t(24),c=t(20),a=t(25);i.exports=function(l,f){return r(l)||u(l,f)||c(l,f)||a()},i.exports.default=i.exports,i.exports.__esModule=!0},111:function(i,s,t){"use strict";t.r(s),t.d(s,"Crumb",function(){return w}),t.d(s,"Breadcrumbs",function(){return U});var r,u=t(5),c=t.n(u),a=t(3),l=t.n(a),f=t(1),m=t.n(f),g=t(0),v=t.n(g),n=t(2),e=t.n(n),o=t(51),y=t.n(o),S=t(8),j=t(4),W=t(9),Q=t(21),Z=["children","label"],k=e()(W.Flex)(r||(r=l()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(I){return I.theme.colors.neutral300},j.Box),w=function(I){var N=I.children;return m.a.createElement(k,{inline:!0,as:"li"},m.a.createElement(S.Typography,{fontWeight:"bold",color:"neutral800"},N),m.a.createElement(j.Box,{paddingLeft:3,paddingRight:3},m.a.createElement(y.a,null)))};w.displayName="Crumb",w.propTypes={children:v.a.string.isRequired};var H=v.a.shape({type:v.a.oneOf([w])}),U=function(I){var N=I.children,_=I.label,$=c()(I,Z);return m.a.createElement(W.Flex,$,m.a.createElement(Q.VisuallyHidden,null,_),m.a.createElement("ol",{"aria-hidden":!0},N))};U.displayName="Breadcrumbs",U.propTypes={children:v.a.oneOfType([v.a.arrayOf(H),H]).isRequired,label:v.a.string.isRequired}},13:function(i,s){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(i.exports=t=function(u){return typeof u},i.exports.default=i.exports,i.exports.__esModule=!0):(i.exports=t=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i.exports.default=i.exports,i.exports.__esModule=!0),t(r)}i.exports=t,i.exports.default=i.exports,i.exports.__esModule=!0},17:function(i,s,t){"use strict";var r=t(18);function u(){}function c(){}c.resetWarningCache=u,i.exports=function(){function a(m,g,v,n,e,o){if(o!==r){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function l(){return a}a.isRequired=a;var f={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:l,element:a,elementType:a,instanceOf:l,node:a,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:c,resetWarningCache:u};return f.PropTypes=f,f}},18:function(i,s,t){"use strict";i.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(i,s){i.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var u=0,c=new Array(r);u<r;u++)c[u]=t[u];return c},i.exports.default=i.exports,i.exports.__esModule=!0},2:function(i,s){i.exports=P},20:function(i,s,t){var r=t(19);i.exports=function(u,c){if(u){if(typeof u=="string")return r(u,c);var a=Object.prototype.toString.call(u).slice(8,-1);return a==="Object"&&u.constructor&&(a=u.constructor.name),a==="Map"||a==="Set"?Array.from(u):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(u,c):void 0}},i.exports.default=i.exports,i.exports.__esModule=!0},21:function(i,s,t){"use strict";t.r(s),t.d(s,"VisuallyHidden",function(){return l});var r,u=t(3),c=t.n(u),a=t(2),l=t.n(a).a.div(r||(r=c()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},22:function(i,s){i.exports=function(t,r){if(t==null)return{};var u,c,a={},l=Object.keys(t);for(c=0;c<l.length;c++)u=l[c],r.indexOf(u)>=0||(a[u]=t[u]);return a},i.exports.default=i.exports,i.exports.__esModule=!0},23:function(i,s){i.exports=function(t){if(Array.isArray(t))return t},i.exports.default=i.exports,i.exports.__esModule=!0},24:function(i,s){i.exports=function(t,r){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var c,a,l=[],f=!0,m=!1;try{for(u=u.call(t);!(f=(c=u.next()).done)&&(l.push(c.value),!r||l.length!==r);f=!0);}catch(g){m=!0,a=g}finally{try{f||u.return==null||u.return()}finally{if(m)throw a}}return l}},i.exports.default=i.exports,i.exports.__esModule=!0},25:function(i,s){i.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},i.exports.default=i.exports,i.exports.__esModule=!0},3:function(i,s){i.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},i.exports.default=i.exports,i.exports.__esModule=!0},4:function(i,s,t){"use strict";t.r(s),t.d(s,"Box",function(){return n});var r,u=t(3),c=t.n(u),a=t(0),l=t.n(a),f=t(2),m=t.n(f),g=t(7),v={color:!0},n=m.a.div.withConfig({shouldForwardProp:function(e,o){return!v[e]&&o(e)}})(r||(r=c()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,y=e.background;return o.colors[y]},function(e){var o=e.theme,y=e.color;return o.colors[y]},function(e){var o=e.theme,y=e.padding;return Object(g.a)("padding",y,o)},function(e){var o=e.theme,y=e.paddingTop;return Object(g.a)("padding-top",y,o)},function(e){var o=e.theme,y=e.paddingRight;return Object(g.a)("padding-right",y,o)},function(e){var o=e.theme,y=e.paddingBottom;return Object(g.a)("padding-bottom",y,o)},function(e){var o=e.theme,y=e.paddingLeft;return Object(g.a)("padding-left",y,o)},function(e){var o=e.theme,y=e.marginLeft;return Object(g.a)("margin-left",y,o)},function(e){var o=e.theme,y=e.marginRight;return Object(g.a)("margin-right",y,o)},function(e){var o=e.theme,y=e.marginTop;return Object(g.a)("margin-top",y,o)},function(e){var o=e.theme,y=e.marginBottom;return Object(g.a)("margin-bottom",y,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,y=e.hasRadius,S=e.borderRadius;return y?o.borderRadius:S},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,y=e.borderColor,S=e.borderStyle,j=e.borderWidth;if(y&&!S&&!j)return"1px solid ".concat(o.colors[y])},function(e){var o=e.theme,y=e.shadow;return o.shadows[y]},function(e){return e.pointerEvents},function(e){var o=e._hover,y=e.theme;return o?o(y):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});n.displayName="Box",n.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},n.propTypes={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])}},5:function(i,s,t){var r=t(22);i.exports=function(u,c){if(u==null)return{};var a,l,f=r(u,c);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(u);for(l=0;l<m.length;l++)a=m[l],c.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(u,a)&&(f[a]=u[a])}return f},i.exports.default=i.exports,i.exports.__esModule=!0},51:function(i,s){i.exports=d},7:function(i,s,t){"use strict";var r=t(10),u=t.n(r),c=t(13),a=t.n(c);s.a=function(l,f,m){var g=f;if(Array.isArray(f)||a()(f)!=="object"||(g=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),g!==void 0){if(Array.isArray(g)){var v=g,n=u()(v,3),e=n[0],o=n[1],y=n[2],S="".concat(l,": ").concat(m.spaces[e],";");return o!==void 0&&(S+="".concat(m.mediaQueries.tablet,`{
          `).concat(l,": ").concat(m.spaces[o],`;
        }`)),y!==void 0&&(S+="".concat(m.mediaQueries.mobile,`{
          `).concat(l,": ").concat(m.spaces[y],`;
        }`)),S}var j=m.spaces[g]||g;return"".concat(l,": ").concat(j,";")}}},8:function(i,s,t){"use strict";t.r(s),t.d(s,"Typography",function(){return v});var r,u=t(3),c=t.n(u),a=t(0),l=t.n(a),f=t(2),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],g={fontSize:!0,fontWeight:!0},v=t.n(f).a.span.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var e=n.theme,o=n.fontWeight;return e.fontWeights[o]},function(n){var e=n.theme,o=n.fontSize;return e.fontSizes[o]},function(n){var e=n.theme,o=n.lineHeight;return e.lineHeights[o]},function(n){var e=n.theme,o=n.textColor;return e.colors[o||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var e=n.variant,o=n.theme;switch(e){case"alpha":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[5],`;
        line-height: `).concat(o.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[4],`;
        line-height: `).concat(o.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(o.fontWeights.semiBold,`;
        font-size: `).concat(o.fontSizes[3],`;
        line-height: `).concat(o.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(o.fontSizes[3],`;
        line-height: `).concat(o.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(o.fontSizes[2],`;
        line-height: `).concat(o.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(o.fontSizes[1],`;
        line-height: `).concat(o.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[0],`;
        line-height: `).concat(o.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(o.fontSizes[2],`;
      `)}});v.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},v.propTypes={fontSize:l.a.oneOfType([l.a.number,l.a.string]),fontWeight:l.a.string,lineHeight:l.a.oneOfType([l.a.number,l.a.string]),textColor:l.a.string,textTransform:l.a.string,variant:l.a.oneOf(m)}},9:function(i,s,t){"use strict";t.r(s),t.d(s,"Flex",function(){return n});var r,u=t(3),c=t.n(u),a=t(0),l=t.n(a),f=t(2),m=t.n(f),g=t(4),v={direction:!0},n=m()(g.Box).withConfig({shouldForwardProp:function(e,o){return!v[e]&&o(e)}})(r||(r=c()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(e){return e.inline?"inline-flex":"flex"},function(e){return e.direction},function(e){return e.justifyContent},function(e){return e.alignItems},function(e){return e.wrap});n.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},n.propTypes={alignItems:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.number]),direction:l.a.string,inline:l.a.bool,justifyContent:l.a.string,reverse:l.a.bool,wrap:l.a.string}}})})},80117:(z,L,h)=>{"use strict";z.exports=h(41706)},41706:function(z,L,h){(function(p,P){z.exports=P(h(53547),h(16384))})(this,function(p,P){return function(d){var i={};function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return d[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=d,s.c=i,s.d=function(t,r,u){s.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:u})},s.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,r){if(1&r&&(t=s(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(s.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var c in t)s.d(u,c,function(a){return t[a]}.bind(null,c));return u},s.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(r,"a",r),r},s.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},s.p="",s(s.s=109)}({0:function(d,i,s){d.exports=s(17)()},1:function(d,i){d.exports=p},10:function(d,i,s){var t=s(23),r=s(24),u=s(20),c=s(25);d.exports=function(a,l){return t(a)||r(a,l)||u(a,l)||c()},d.exports.default=d.exports,d.exports.__esModule=!0},109:function(d,i,s){"use strict";s.r(i),s.d(i,"Main",function(){return j}),s.d(i,"SkipToContent",function(){return k});var t,r=s(6),u=s.n(r),c=s(5),a=s.n(c),l=s(3),f=s.n(l),m=s(1),g=s.n(m),v=s(0),n=s.n(v),e=s(2),o=s.n(e),y=["labelledBy"],S=o.a.main(t||(t=f()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),j=function(w){var H=w.labelledBy,U=a()(w,y),I=H||"main-content-title";return g.a.createElement(S,u()({"aria-labelledby":I,id:"main-content",tabIndex:-1},U))};j.defaultProps={labelledBy:void 0},j.propTypes={labelledBy:n.a.string};var W,Q=s(4),Z=o()(Q.Box)(W||(W=f()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),k=function(w){var H=w.children;return g.a.createElement(Z,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};k.propTypes={children:n.a.node.isRequired}},13:function(d,i){function s(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(d.exports=s=function(r){return typeof r},d.exports.default=d.exports,d.exports.__esModule=!0):(d.exports=s=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d.exports.default=d.exports,d.exports.__esModule=!0),s(t)}d.exports=s,d.exports.default=d.exports,d.exports.__esModule=!0},17:function(d,i,s){"use strict";var t=s(18);function r(){}function u(){}u.resetWarningCache=r,d.exports=function(){function c(f,m,g,v,n,e){if(e!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return c}c.isRequired=c;var l={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:u,resetWarningCache:r};return l.PropTypes=l,l}},18:function(d,i,s){"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(d,i){d.exports=function(s,t){(t==null||t>s.length)&&(t=s.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=s[r];return u},d.exports.default=d.exports,d.exports.__esModule=!0},2:function(d,i){d.exports=P},20:function(d,i,s){var t=s(19);d.exports=function(r,u){if(r){if(typeof r=="string")return t(r,u);var c=Object.prototype.toString.call(r).slice(8,-1);return c==="Object"&&r.constructor&&(c=r.constructor.name),c==="Map"||c==="Set"?Array.from(r):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(r,u):void 0}},d.exports.default=d.exports,d.exports.__esModule=!0},22:function(d,i){d.exports=function(s,t){if(s==null)return{};var r,u,c={},a=Object.keys(s);for(u=0;u<a.length;u++)r=a[u],t.indexOf(r)>=0||(c[r]=s[r]);return c},d.exports.default=d.exports,d.exports.__esModule=!0},23:function(d,i){d.exports=function(s){if(Array.isArray(s))return s},d.exports.default=d.exports,d.exports.__esModule=!0},24:function(d,i){d.exports=function(s,t){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var u,c,a=[],l=!0,f=!1;try{for(r=r.call(s);!(l=(u=r.next()).done)&&(a.push(u.value),!t||a.length!==t);l=!0);}catch(m){f=!0,c=m}finally{try{l||r.return==null||r.return()}finally{if(f)throw c}}return a}},d.exports.default=d.exports,d.exports.__esModule=!0},25:function(d,i){d.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},d.exports.default=d.exports,d.exports.__esModule=!0},3:function(d,i){d.exports=function(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))},d.exports.default=d.exports,d.exports.__esModule=!0},4:function(d,i,s){"use strict";s.r(i),s.d(i,"Box",function(){return v});var t,r=s(3),u=s.n(r),c=s(0),a=s.n(c),l=s(2),f=s.n(l),m=s(7),g={color:!0},v=f.a.div.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(t||(t=u()([`
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
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,o=n.background;return e.colors[o]},function(n){var e=n.theme,o=n.color;return e.colors[o]},function(n){var e=n.theme,o=n.padding;return Object(m.a)("padding",o,e)},function(n){var e=n.theme,o=n.paddingTop;return Object(m.a)("padding-top",o,e)},function(n){var e=n.theme,o=n.paddingRight;return Object(m.a)("padding-right",o,e)},function(n){var e=n.theme,o=n.paddingBottom;return Object(m.a)("padding-bottom",o,e)},function(n){var e=n.theme,o=n.paddingLeft;return Object(m.a)("padding-left",o,e)},function(n){var e=n.theme,o=n.marginLeft;return Object(m.a)("margin-left",o,e)},function(n){var e=n.theme,o=n.marginRight;return Object(m.a)("margin-right",o,e)},function(n){var e=n.theme,o=n.marginTop;return Object(m.a)("margin-top",o,e)},function(n){var e=n.theme,o=n.marginBottom;return Object(m.a)("margin-bottom",o,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,o=n.hasRadius,y=n.borderRadius;return o?e.borderRadius:y},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,o=n.borderColor,y=n.borderStyle,S=n.borderWidth;if(o&&!y&&!S)return"1px solid ".concat(e.colors[o])},function(n){var e=n.theme,o=n.shadow;return e.shadows[o]},function(n){return n.pointerEvents},function(n){var e=n._hover,o=n.theme;return e?e(o):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});v.displayName="Box",v.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},v.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},5:function(d,i,s){var t=s(22);d.exports=function(r,u){if(r==null)return{};var c,a,l=t(r,u);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(a=0;a<f.length;a++)c=f[a],u.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(r,c)&&(l[c]=r[c])}return l},d.exports.default=d.exports,d.exports.__esModule=!0},6:function(d,i){function s(){return d.exports=s=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t},d.exports.default=d.exports,d.exports.__esModule=!0,s.apply(this,arguments)}d.exports=s,d.exports.default=d.exports,d.exports.__esModule=!0},7:function(d,i,s){"use strict";var t=s(10),r=s.n(t),u=s(13),c=s.n(u);i.a=function(a,l,f){var m=l;if(Array.isArray(l)||c()(l)!=="object"||(m=[l==null?void 0:l.desktop,l==null?void 0:l.tablet,l==null?void 0:l.mobile]),m!==void 0){if(Array.isArray(m)){var g=m,v=r()(g,3),n=v[0],e=v[1],o=v[2],y="".concat(a,": ").concat(f.spaces[n],";");return e!==void 0&&(y+="".concat(f.mediaQueries.tablet,`{
          `).concat(a,": ").concat(f.spaces[e],`;
        }`)),o!==void 0&&(y+="".concat(f.mediaQueries.mobile,`{
          `).concat(a,": ").concat(f.spaces[o],`;
        }`)),y}var S=f.spaces[m]||m;return"".concat(a,": ").concat(S,";")}}}})})},84210:(z,L,h)=>{"use strict";h.r(L),h.d(L,{default:()=>Te});var p=h(53547),P=h(23724),d=h(97132),i=h(68547),s=h(67422),t=h(80117),r=h(35395),u=h(51725),c=h(42722),a=(x,O,b)=>new Promise((M,E)=>{var B=T=>{try{A(b.next(T))}catch(C){E(C)}},R=T=>{try{A(b.throw(T))}catch(C){E(C)}},A=T=>T.done?M(T.value):Promise.resolve(T.value).then(B,R);A((b=b.apply(x,O)).next())});const l=()=>a(void 0,null,function*(){const{data:x}=yield c.be.get((0,c.Gc)("email-templates"));return x}),f=x=>c.be.put((0,c.Gc)("email-templates"),x);var m=h(45697),g=h.n(m),v=h(43546),n=h(19631),e=h(33483),o=h(49549),y=h(33699),S=h(56204),j=h.n(S),W=h(79274),Q=h.n(W),Z=h(22754),k=h.n(Z),w=Object.defineProperty,H=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(x,O,b)=>O in x?w(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,_=(x,O)=>{for(var b in O||(O={}))U.call(O,b)&&N(x,b,O[b]);if(H)for(var b of H(O))I.call(O,b)&&N(x,b,O[b]);return x};const $=({canUpdate:x,onEditClick:O})=>{const{formatMessage:b}=(0,d.useIntl)();return p.createElement(v.Table,{colCount:3,rowCount:3},p.createElement(v.Thead,null,p.createElement(v.Tr,null,p.createElement(v.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),p.createElement(v.Th,null,p.createElement(e.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,c.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),p.createElement(v.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),p.createElement(v.Tbody,null,p.createElement(v.Tr,_({},(0,i.onRowClick)({fn:()=>O("reset_password")})),p.createElement(v.Td,null,p.createElement(y.Icon,null,p.createElement(Q(),{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),p.createElement(v.Td,null,p.createElement(e.Typography,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),p.createElement(v.Td,_({},i.stopPropagation),p.createElement(o.IconButton,{onClick:()=>O("reset_password"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)}))),p.createElement(v.Tr,_({},(0,i.onRowClick)({fn:()=>O("email_confirmation")})),p.createElement(v.Td,null,p.createElement(y.Icon,null,p.createElement(k(),{"aria-label":b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),p.createElement(v.Td,null,p.createElement(e.Typography,null,b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),p.createElement(v.Td,_({},i.stopPropagation),p.createElement(o.IconButton,{onClick:()=>O("email_confirmation"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)})))))};$.propTypes={canUpdate:g().bool.isRequired,onEditClick:g().func.isRequired};const le=$;var ue=h(80831),X=h(68991),G=h(39272),ne=h(64459),ee=h(44981),ce=h(78607),F=h(63600);const de=F.Ry().shape({options:F.Ry().shape({from:F.Ry().shape({name:F.Z_().required(i.translatedErrors.required),email:F.Z_().email(i.translatedErrors.email).required(i.translatedErrors.required)}).required(),response_email:F.Z_().email(i.translatedErrors.email),object:F.Z_().required(i.translatedErrors.required),message:F.Z_().required(i.translatedErrors.required)}).required(i.translatedErrors.required)}),re=({template:x,onToggle:O,onSubmit:b})=>{const{formatMessage:M}=(0,d.useIntl)();return p.createElement(X.ModalLayout,{onClose:O,labelledBy:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(X.ModalHeader,null,p.createElement(ee.Breadcrumbs,{label:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(ee.Crumb,null,M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),p.createElement(ee.Crumb,null,M({id:(0,c.OB)(x.display),defaultMessage:x.display})))),p.createElement(ue.Formik,{onSubmit:b,initialValues:x,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:E,values:B,handleChange:R,isSubmitting:A})=>{var T,C,V,K,Y,J,q;return p.createElement(i.Form,null,p.createElement(X.ModalBody,null,p.createElement(G.Grid,{gap:5},p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:R,value:B.options.from.name,error:(C=(T=E==null?void 0:E.options)==null?void 0:T.from)==null?void 0:C.name,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:R,value:B.options.from.email,error:(K=(V=E==null?void 0:E.options)==null?void 0:V.from)==null?void 0:K.email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:R,value:B.options.response_email,error:(Y=E==null?void 0:E.options)==null?void 0:Y.response_email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(i.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:R,value:B.options.object,error:(J=E==null?void 0:E.options)==null?void 0:J.object,type:"text"})),p.createElement(G.GridItem,{col:12,s:12},p.createElement(ce.Textarea,{label:M({id:(0,c.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:R,value:B.options.message,error:((q=E==null?void 0:E.options)==null?void 0:q.message)&&M({id:E.options.message,defaultMessage:E.options.message})})))),p.createElement(X.ModalFooter,{startActions:p.createElement(ne.Button,{onClick:O,variant:"tertiary"},"Cancel"),endActions:p.createElement(ne.Button,{loading:A,type:"submit"},"Finish")}))}))};re.propTypes={template:g().shape({display:g().string,icon:g().string,options:g().shape({from:g().shape({name:g().string,email:g().string}),message:g().string,object:g().string,response_email:g().string})}).isRequired,onSubmit:g().func.isRequired,onToggle:g().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(x,O,b)=>O in x?fe(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,ye=(x,O)=>{for(var b in O||(O={}))ge.call(O,b)&&ae(x,b,O[b]);if(oe)for(var b of oe(O))ve.call(O,b)&&ae(x,b,O[b]);return x},be=(x,O)=>me(x,he(O)),xe=(x,O,b)=>new Promise((M,E)=>{var B=T=>{try{A(b.next(T))}catch(C){E(C)}},R=T=>{try{A(b.throw(T))}catch(C){E(C)}},A=T=>T.done?M(T.value):Promise.resolve(T.value).then(B,R);A((b=b.apply(x,O)).next())});const Oe=()=>p.createElement(i.CheckPagePermissions,{permissions:u.Z.readEmailTemplates},p.createElement(Ee,null)),Ee=()=>{const{formatMessage:x}=(0,d.useIntl)(),{trackUsage:O}=(0,i.useTracking)(),{notifyStatus:b}=(0,s.useNotifyAT)(),M=(0,i.useNotification)(),{lockApp:E,unlockApp:B}=(0,i.useOverlayBlocker)(),R=(0,p.useRef)(O),A=(0,P.useQueryClient)();(0,i.useFocusWhenNavigate)();const[T,C]=(0,p.useState)(!1),[V,K]=(0,p.useState)(null),Y=(0,p.useMemo)(()=>({update:u.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,i.useRBAC)(Y),{status:Se,data:ie}=(0,P.useQuery)("email-templates",()=>l(),{onSuccess:()=>{b(x({id:(0,c.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Pe=J||Se!=="success",te=()=>{C(D=>!D)},Me=D=>{K(D),te()},se=(0,P.useMutation)(D=>f({"email-templates":D}),{onSuccess:()=>xe(void 0,null,function*(){yield A.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),R.current("didEditEmailTemplates"),B(),te()}),onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),B()},refetchActive:!0}),{isLoading:we}=se,je=D=>{E(),R.current("willEditEmailTemplates");const Be=be(ye({},ie),{[V]:D});se.mutate(Be)};return Pe?p.createElement(t.Main,{"aria-busy":"true"},p.createElement(i.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(r.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(r.ContentLayout,null,p.createElement(i.LoadingIndicatorPage,null))):p.createElement(t.Main,{"aria-busy":we},p.createElement(i.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(r.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(r.ContentLayout,null,p.createElement(le,{onEditClick:Me,canUpdate:q}),T&&p.createElement(pe,{template:ie[V],onToggle:te,onSubmit:je})))},Te=Oe},65772:(z,L,h)=>{"use strict";h.d(L,{Z:()=>r});var p=h(9669),P=h.n(p),d=h(68547),i=h.n(d),s=(u,c,a)=>new Promise((l,f)=>{var m=n=>{try{v(a.next(n))}catch(e){f(e)}},g=n=>{try{v(a.throw(n))}catch(e){f(e)}},v=n=>n.done?l(n.value):Promise.resolve(n.value).then(m,g);v((a=a.apply(u,c)).next())});const t=P().create({baseURL:""});t.interceptors.request.use(u=>s(void 0,null,function*(){return u.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},u}),u=>{Promise.reject(u)}),t.interceptors.response.use(u=>u,u=>{var c;throw((c=u.response)==null?void 0:c.status)===401&&(d.auth.clearAppStorage(),window.location.reload()),u});const r=t},42722:(z,L,h)=>{"use strict";h.d(L,{be:()=>p.Z,YX:()=>i,Gc:()=>r,OB:()=>u.Z});var p=h(65772),P=h(96486);const i=c=>Object.keys(c).reduce((a,l)=>{const f=c[l].controllers,m=Object.keys(f).reduce((g,v)=>((0,P.isEmpty)(f[v])||(g[v]=f[v]),g),{});return(0,P.isEmpty)(m)||(a[l]={controllers:m}),a},{});var s=h(83086);const r=c=>`/${s.Z}/${c}`;var u=h(97961)}}]);
