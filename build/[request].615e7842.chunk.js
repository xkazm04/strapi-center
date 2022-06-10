(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[6750],{56156:(F,$,v)=>{"use strict";F.exports=v(44709)},44709:function(F,$,v){(function(o,y){F.exports=y(v(53547),v(16384),v(39711),v(74657))})(this,function(o,y,x,c){return function(e){var i={};function n(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=i,n.d=function(s,l,d){n.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:d})},n.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},n.t=function(s,l){if(1&l&&(s=n(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var u in s)n.d(d,u,function(a){return s[a]}.bind(null,u));return d},n.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(l,"a",l),l},n.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},n.p="",n(n.s=114)}({0:function(e,i,n){e.exports=n(17)()},1:function(e,i){e.exports=o},10:function(e,i,n){var s=n(23),l=n(24),d=n(20),u=n(25);e.exports=function(a,h){return s(a)||l(a,h)||d(a,h)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},114:function(e,i,n){"use strict";n.r(i),n.d(i,"Link",function(){return V});var s,l,d=n(6),u=n.n(d),a=n(5),h=n.n(a),T=n(3),E=n.n(T),k=n(1),f=n.n(k),t=n(0),r=n.n(t),p=n(2),R=n.n(p),D=n(79),_=n.n(D),ee=n(36),te=n(8),ne=n(4),Q=n(14),Y=["href","to","children","disabled","startIcon","endIcon"],re=R.a.a(s||(s=E()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(O){return O.disabled?"none":void 0},function(O){var N=O.disabled,K=O.theme;return N?K.colors.neutral600:K.colors.primary600},.625,function(O){return O.theme.colors.primary800},Q.a),J=R()(ne.Box)(l||(l=E()([`
  display: flex;
`]))),V=function(O){var N=O.href,K=O.to,oe=O.children,U=O.disabled,Z=O.startIcon,q=O.endIcon,ae=h()(O,Y),ie=N?"_blank":void 0,le=N?"noreferrer noopener":void 0;return f.a.createElement(re,u()({as:K&&!U?ee.NavLink:"a",target:ie,rel:le,to:U?void 0:K,href:U?"#":N,disabled:U},ae),Z&&f.a.createElement(J,{as:"span","aria-hidden":!0,paddingRight:2},Z),f.a.createElement(te.Typography,{variant:"pi",textColor:U?"neutral600":"primary600"},oe),q&&!N&&f.a.createElement(J,{as:"span","aria-hidden":!0,paddingLeft:2},q),N&&f.a.createElement(J,{as:"span","aria-hidden":!0,paddingLeft:2},f.a.createElement(_.a,null)))};V.displayName="Link",V.defaultProps={href:void 0,to:void 0,disabled:!1},V.propTypes={children:r.a.node.isRequired,disabled:r.a.bool,endIcon:r.a.element,href:function(O){if(!O.disabled&&!O.to&&!O.href)return new Error("href must be defined")},startIcon:r.a.element,to:function(O){if(!O.disabled&&!O.href&&!O.to)return new Error("to must be defined")}}},13:function(e,i){function n(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=n=function(l){return typeof l},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},e.exports.default=e.exports,e.exports.__esModule=!0),n(s)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},14:function(e,i,n){"use strict";n.d(i,"b",function(){return s}),n.d(i,"c",function(){return l}),n.d(i,"a",function(){return d});var s=function(u){return function(a){var h=a.theme,T=a.size;return h.sizes[u][T]}},l=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(a){var h=a.theme,T=a.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(u,`:focus-within {
        border: 1px solid `).concat(T?h.colors.danger600:h.colors.primary600,`;
        box-shadow: `).concat(T?h.colors.danger600:h.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},d=function(u){var a=u.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(a.colors.primary600,`;
    }
  }
`)}},17:function(e,i,n){"use strict";var s=n(18);function l(){}function d(){}d.resetWarningCache=l,e.exports=function(){function u(T,E,k,f,t,r){if(r!==s){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function a(){return u}u.isRequired=u;var h={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:a,element:u,elementType:u,instanceOf:a,node:u,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:d,resetWarningCache:l};return h.PropTypes=h,h}},18:function(e,i,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,i){e.exports=function(n,s){(s==null||s>n.length)&&(s=n.length);for(var l=0,d=new Array(s);l<s;l++)d[l]=n[l];return d},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,i){e.exports=y},20:function(e,i,n){var s=n(19);e.exports=function(l,d){if(l){if(typeof l=="string")return s(l,d);var u=Object.prototype.toString.call(l).slice(8,-1);return u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set"?Array.from(l):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?s(l,d):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,i){e.exports=function(n,s){if(n==null)return{};var l,d,u={},a=Object.keys(n);for(d=0;d<a.length;d++)l=a[d],s.indexOf(l)>=0||(u[l]=n[l]);return u},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,i){e.exports=function(n){if(Array.isArray(n))return n},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,i){e.exports=function(n,s){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var d,u,a=[],h=!0,T=!1;try{for(l=l.call(n);!(h=(d=l.next()).done)&&(a.push(d.value),!s||a.length!==s);h=!0);}catch(E){T=!0,u=E}finally{try{h||l.return==null||l.return()}finally{if(T)throw u}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,i){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,i){e.exports=function(n,s){return s||(s=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(s)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},36:function(e,i){e.exports=x},4:function(e,i,n){"use strict";n.r(i),n.d(i,"Box",function(){return f});var s,l=n(3),d=n.n(l),u=n(0),a=n.n(u),h=n(2),T=n.n(h),E=n(7),k={color:!0},f=T.a.div.withConfig({shouldForwardProp:function(t,r){return!k[t]&&r(t)}})(s||(s=d()([`
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
`])),function(t){var r=t.fontSize;return t.theme.fontSizes[r]||r},function(t){var r=t.theme,p=t.background;return r.colors[p]},function(t){var r=t.theme,p=t.color;return r.colors[p]},function(t){var r=t.theme,p=t.padding;return Object(E.a)("padding",p,r)},function(t){var r=t.theme,p=t.paddingTop;return Object(E.a)("padding-top",p,r)},function(t){var r=t.theme,p=t.paddingRight;return Object(E.a)("padding-right",p,r)},function(t){var r=t.theme,p=t.paddingBottom;return Object(E.a)("padding-bottom",p,r)},function(t){var r=t.theme,p=t.paddingLeft;return Object(E.a)("padding-left",p,r)},function(t){var r=t.theme,p=t.marginLeft;return Object(E.a)("margin-left",p,r)},function(t){var r=t.theme,p=t.marginRight;return Object(E.a)("margin-right",p,r)},function(t){var r=t.theme,p=t.marginTop;return Object(E.a)("margin-top",p,r)},function(t){var r=t.theme,p=t.marginBottom;return Object(E.a)("margin-bottom",p,r)},function(t){var r=t.theme;return t.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(t){var r=t.theme;return t.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(t){var r=t.theme,p=t.hasRadius,R=t.borderRadius;return p?r.borderRadius:R},function(t){return t.borderStyle},function(t){return t.borderWidth},function(t){var r=t.borderColor;return t.theme.colors[r]},function(t){var r=t.theme,p=t.borderColor,R=t.borderStyle,D=t.borderWidth;if(p&&!R&&!D)return"1px solid ".concat(r.colors[p])},function(t){var r=t.theme,p=t.shadow;return r.shadows[p]},function(t){return t.pointerEvents},function(t){var r=t._hover,p=t.theme;return r?r(p):void 0},function(t){return t.display},function(t){return t.position},function(t){var r=t.left;return t.theme.spaces[r]||r},function(t){var r=t.right;return t.theme.spaces[r]||r},function(t){var r=t.top;return t.theme.spaces[r]||r},function(t){var r=t.bottom;return t.theme.spaces[r]||r},function(t){return t.zIndex},function(t){return t.overflow},function(t){return t.cursor},function(t){var r=t.width;return t.theme.spaces[r]||r},function(t){var r=t.maxWidth;return t.theme.spaces[r]||r},function(t){var r=t.minWidth;return t.theme.spaces[r]||r},function(t){var r=t.height;return t.theme.spaces[r]||r},function(t){var r=t.maxHeight;return t.theme.spaces[r]||r},function(t){var r=t.minHeight;return t.theme.spaces[r]||r},function(t){return t.transition},function(t){return t.transform},function(t){return t.animation},function(t){return t.shrink},function(t){return t.grow},function(t){return t.basis},function(t){return t.flex},function(t){return t.textAlign},function(t){return t.textTransform},function(t){return t.lineHeight},function(t){return t.cursor});f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},5:function(e,i,n){var s=n(22);e.exports=function(l,d){if(l==null)return{};var u,a,h=s(l,d);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(l);for(a=0;a<T.length;a++)u=T[a],d.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(l,u)&&(h[u]=l[u])}return h},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,i){function n(){return e.exports=n=Object.assign||function(s){for(var l=1;l<arguments.length;l++){var d=arguments[l];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}return s},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,i,n){"use strict";var s=n(10),l=n.n(s),d=n(13),u=n.n(d);i.a=function(a,h,T){var E=h;if(Array.isArray(h)||u()(h)!=="object"||(E=[h==null?void 0:h.desktop,h==null?void 0:h.tablet,h==null?void 0:h.mobile]),E!==void 0){if(Array.isArray(E)){var k=E,f=l()(k,3),t=f[0],r=f[1],p=f[2],R="".concat(a,": ").concat(T.spaces[t],";");return r!==void 0&&(R+="".concat(T.mediaQueries.tablet,`{
          `).concat(a,": ").concat(T.spaces[r],`;
        }`)),p!==void 0&&(R+="".concat(T.mediaQueries.mobile,`{
          `).concat(a,": ").concat(T.spaces[p],`;
        }`)),R}var D=T.spaces[E]||E;return"".concat(a,": ").concat(D,";")}}},79:function(e,i){e.exports=c},8:function(e,i,n){"use strict";n.r(i),n.d(i,"Typography",function(){return k});var s,l=n(3),d=n.n(l),u=n(0),a=n.n(u),h=n(2),T=["alpha","beta","delta","epsilon","omega","pi","sigma"],E={fontSize:!0,fontWeight:!0},k=n.n(h).a.span.withConfig({shouldForwardProp:function(f,t){return!E[f]&&t(f)}})(s||(s=d()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(f){var t=f.theme,r=f.fontWeight;return t.fontWeights[r]},function(f){var t=f.theme,r=f.fontSize;return t.fontSizes[r]},function(f){var t=f.theme,r=f.lineHeight;return t.lineHeights[r]},function(f){var t=f.theme,r=f.textColor;return t.colors[r||"neutral800"]},function(f){return f.textTransform},function(f){return f.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(f){var t=f.variant,r=f.theme;switch(t){case"alpha":return`
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
      `)}});k.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},k.propTypes={fontSize:a.a.oneOfType([a.a.number,a.a.string]),fontWeight:a.a.string,lineHeight:a.a.oneOfType([a.a.number,a.a.string]),textColor:a.a.string,textTransform:a.a.string,variant:a.a.oneOf(T)}}})})},87760:function(F,$,v){(function(o,y){F.exports=y(v(53547))})(this,function(o){return function(y){var x={};function c(e){if(x[e])return x[e].exports;var i=x[e]={i:e,l:!1,exports:{}};return y[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}return c.m=y,c.c=x,c.d=function(e,i,n){c.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},c.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,i){if(1&i&&(e=c(e)),8&i||4&i&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&typeof e!="string")for(var s in e)c.d(n,s,function(l){return e[l]}.bind(null,s));return n},c.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(i,"a",i),i},c.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},c.p="",c(c.s=5)}({0:function(y,x){y.exports=o},5:function(y,x,c){"use strict";c.r(x);var e=c(0);function i(){return(i=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n}).apply(this,arguments)}x.default=function(n){return e.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},74657:function(F,$,v){(function(o,y){F.exports=y(v(53547))})(this,function(o){return function(y){var x={};function c(e){if(x[e])return x[e].exports;var i=x[e]={i:e,l:!1,exports:{}};return y[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}return c.m=y,c.c=x,c.d=function(e,i,n){c.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},c.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,i){if(1&i&&(e=c(e)),8&i||4&i&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&typeof e!="string")for(var s in e)c.d(n,s,function(l){return e[l]}.bind(null,s));return n},c.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(i,"a",i),i},c.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},c.p="",c(c.s=72)}({0:function(y,x){y.exports=o},72:function(y,x,c){"use strict";c.r(x);var e=c(0);function i(){return(i=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n}).apply(this,arguments)}x.default=function(n){return e.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",fill:"#32324D"}))}}})})},76566:(F,$,v)=>{"use strict";v.r($),v.d($,{default:()=>ue});var o=v(53547),y=v(94117),x=v(1738),c=v(43546),e=v(64459),i=v(68547),n=v(33483),s=v(19631);const l=()=>o.createElement(c.Thead,null,o.createElement(c.Tr,null,o.createElement(c.Th,null,o.createElement(s.VisuallyHidden,null,"INDEX")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"NAME")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"IN MEILISEARCH ?")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"INDEXING ?")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"INDEX NAME")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"DOCUMENTS")),o.createElement(c.Th,null,o.createElement(n.Typography,{variant:"sigma"},"HOOKS")),o.createElement(c.Th,null,o.createElement(s.VisuallyHidden,null,"Actions")))),d=(0,o.memo)(l);var u=v(46458),a=v(40264);const h=({entry:g,deleteCollection:S,addCollection:b,updateCollection:I})=>o.createElement(c.Tr,{key:g.contentType},o.createElement(c.Td,null,o.createElement(u.BaseCheckbox,{"aria-label":`Select ${g.collection}`,onValueChange:()=>{g.indexed?S({contentType:g.contentType}):b({contentType:g.contentType})},value:g.indexed})),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.collection)),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.indexed?"Yes":"No")),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.isIndexing?"Yes":"No")),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.indexUid)),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.numberOfDocuments," / ",g.numberOfEntries)),o.createElement(c.Td,null,o.createElement(n.Typography,{textColor:"neutral800"},g.reloadNeeded)),o.createElement(c.Td,null,o.createElement(a.Flex,null,o.createElement(y.Box,{paddingLeft:1},o.createElement(e.Button,{onClick:()=>I({contentType:g.contentType}),size:"S",variant:"secondary"},"Update"))))),T=(0,o.memo)(h);var E=v(80101),k=v.n(E);function f(){const g=(0,i.useNotification)();return{handleNotification:({type:b="info",message:I="Something occured in Meilisearch",link:w,blockTransition:j=!0})=>{g({type:b,message:{id:"notification.meilisearch.message",defaultMessage:I},link:w,blockTransition:j,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)})}}}const t=f;var r=(g,S,b)=>new Promise((I,w)=>{var j=m=>{try{P(b.next(m))}catch(C){w(C)}},H=m=>{try{P(b.throw(m))}catch(C){w(C)}},P=m=>m.done?I(m.value):Promise.resolve(m.value).then(j,H);P((b=b.apply(g,S)).next())});const p=({indexed:g,listened:S})=>{if(g&&!S||!g&&S)return"Reload needed";if(g&&S)return"Hooked";if(!g&&!S)return"/"};function R(){const[g,S]=(0,o.useState)([]),[b,I]=(0,o.useState)(!0),[w,j]=(0,o.useState)(!1),[H,P]=(0,o.useState)(!1),{handleNotification:m}=t(),C=()=>I(z=>!z),G=()=>r(this,null,function*(){const{data:z,error:L}=yield(0,i.request)(`/${k()}/content-type/`,{method:"GET"});if(L)m({type:"warning",message:L.message,link:L.link});else{const A=z.contentTypes.map(W=>(W.reloadNeeded=p({indexed:W.indexed,listened:W.listened}),W)),de=A.find(W=>W.reloadNeeded==="Reload needed"),fe=A.find(W=>W.isIndexing===!0);P(!!fe),j(!!de),S(A)}}),X=z=>r(this,[z],function*({contentType:L}){const{error:A}=yield(0,i.request)(`/${k()}/content-type/${L}`,{method:"DELETE"});A?m({type:"warning",message:A.message,link:A.link}):(C(),m({type:"success",message:"Request to delete content-type is succesfull",blockTransition:!1}))}),M=z=>r(this,[z],function*({contentType:L}){const{error:A}=yield(0,i.request)(`/${k()}/content-type`,{method:"POST",body:{contentType:L}});A?m({type:"warning",message:A.message,link:A.link}):(C(),m({type:"success",message:"Request to add a content-type is succesfull",blockTransition:!1}))}),B=z=>r(this,[z],function*({contentType:L}){const{error:A}=yield(0,i.request)(`/${k()}/content-type`,{method:"PUT",body:{contentType:L}});A?m({type:"warning",message:A.message,link:A.link}):(C(),m({type:"success",message:"Request to update content-type is succesfull",blockTransition:!1}))});return(0,o.useEffect)(()=>{G()},[b]),(0,o.useEffect)(()=>{let z;return H?z=setInterval(()=>{C()},1e3):clearInterval(z),()=>clearInterval(z)},[H]),{collections:g,deleteCollection:X,addCollection:M,updateCollection:B,reloadNeeded:w,refetchCollection:C,handleNotification:m}}const D=R;var _=v(25108),ee=(g,S,b)=>new Promise((I,w)=>{var j=m=>{try{P(b.next(m))}catch(C){w(C)}},H=m=>{try{P(b.throw(m))}catch(C){w(C)}},P=m=>m.done?I(m.value):Promise.resolve(m.value).then(j,H);P((b=b.apply(g,S)).next())});const te=()=>{const{collections:g,deleteCollection:S,addCollection:b,updateCollection:I,reloadNeeded:w,refetchCollection:j}=D(),{lockAppWithAutoreload:H,unlockAppWithAutoreload:P}=(0,i.useAutoReloadOverlayBlocker)(),[m,C]=(0,o.useState)(!1),G=6,X=10,M=()=>ee(void 0,null,function*(){try{H(),yield(0,i.request)(`/${k()}/reload`,{method:"GET"},!0),C(!1)}catch(B){_.error(B)}finally{P(),j()}});return(0,o.useEffect)(()=>{m&&M()},[m]),o.createElement(y.Box,{background:"neutral100"},o.createElement(c.Table,{colCount:X,rowCount:G},o.createElement(d,null),o.createElement(c.Tbody,null,g.map(B=>o.createElement(T,{key:B.collection,entry:B,deleteCollection:S,addCollection:b,updateCollection:I})))),w&&o.createElement(y.Box,{padding:5},o.createElement(e.Button,{onClick:()=>C(!0)},"Reload server")))},ne=(0,o.memo)(te);var Q=v(99136),Y=(g,S,b)=>new Promise((I,w)=>{var j=m=>{try{P(b.next(m))}catch(C){w(C)}},H=m=>{try{P(b.throw(m))}catch(C){w(C)}},P=m=>m.done?I(m.value):Promise.resolve(m.value).then(j,H);P((b=b.apply(g,S)).next())});function re(){const[g,S]=(0,o.useState)({host:"",apiKey:"",ApiKeyIsFromConfigFile:!0,HostIsFromConfigFile:!0}),[b,I]=(0,o.useState)(!0),[w,j]=(0,o.useState)(""),[H,P]=(0,o.useState)(""),{handleNotification:m}=t(),C=()=>I(M=>!M),G=()=>Y(this,null,function*(){const{error:M}=yield(0,i.request)(`/${k()}/credential`,{method:"POST",body:{apiKey:H,host:w}});M?m({type:"warning",message:M.message,link:M.link}):(C(),m({type:"success",message:"Credentials sucessfully updated!",blockTransition:!1}))}),X=()=>Y(this,null,function*(){const{data:M,error:B}=yield(0,i.request)(`/${k()}/credential`,{method:"GET"});B?m({type:"warning",message:B.message,link:B.link}):(S(M),j(M.host),P(M.apiKey))});return(0,o.useEffect)(()=>{X()},[b]),{credentials:g,updateCredentials:G,setHost:j,setApiKey:P,host:w,apiKey:H}}const J=null,V=()=>{const{host:g,apiKey:S,credentials:b,setHost:I,setApiKey:w,updateCredentials:j}=re();return o.createElement(y.Box,null,o.createElement(y.Box,{padding:2},o.createElement(Q.TextInput,{placeholder:"Host",label:"Meilisearch Host",name:"host",hint:"The host on which your Meilisearch is running",value:g,onChange:H=>I(H.target.value),disabled:b.HostIsFromConfigFile})),o.createElement(y.Box,{padding:2},o.createElement(Q.TextInput,{placeholder:"API key",label:"Meilisearch API Key",name:"apiKey",hint:"A valid API key with enough permission to create indexes (or the master key).",onChange:H=>w(H.target.value),value:S,disabled:b.ApiKeyIsFromConfigFile,"aria-label":"Password",type:"password"})),o.createElement(y.Box,{paddingTop:1,paddingLeft:2},o.createElement(n.Typography,{variant:"pi",style:{color:"red"}},"Do not use this API key on your front-end as it has too much rights. Instead, use the public key available using"," ",o.createElement("a",{href:"https://docs.meilisearch.com/reference/api/keys.html#get-keys"},"the key route"),".")),o.createElement(y.Box,{paddingTop:2,paddingLeft:2,paddingRight:2,paddingBottom:2},o.createElement(e.Button,{variant:"secondary",onClick:()=>j(),disabled:b.ApiKeyIsFromConfigFile&&b.HostIsFromConfigFile},"Save")))},O=(0,o.memo)(V),N=()=>o.createElement(y.Box,{padding:5},o.createElement(O,null)),K=(0,o.memo)(N),oe=()=>o.createElement(y.Box,{padding:8,margin:10,background:"neutral"},o.createElement(x.TabGroup,{label:"Some stuff for the label",id:"tabs"},o.createElement(x.Tabs,null,o.createElement(x.Tab,null,"Collections"),o.createElement(x.Tab,null,"Settings")),o.createElement(x.TabPanels,null,o.createElement(x.TabPanel,null,o.createElement(y.Box,{color:"neutral800",padding:4,background:"neutral0"},o.createElement(ne,null))),o.createElement(x.TabPanel,null,o.createElement(y.Box,{color:"neutral800",padding:4,background:"neutral0"},o.createElement(K,null)))))),U=(0,o.memo)(oe);var Z=v(87760),q=v.n(Z),ae=v(56156),ie=v(35395);const le=()=>o.createElement(y.Box,{background:"neutral100"},o.createElement(ie.BaseHeaderLayout,{navigationAction:o.createElement(ae.Link,{startIcon:o.createElement(q(),null),to:"/"},"Go back"),title:"Meilisearch",subtitle:"strapi-plugin-meilisearch",as:"h2"})),se=(0,o.memo)(le),ce=()=>o.createElement("div",null,o.createElement(se,null),o.createElement(U,null)),ue=(0,o.memo)(ce)}}]);
