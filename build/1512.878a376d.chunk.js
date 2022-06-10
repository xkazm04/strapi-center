(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1512],{31512:(z,L,S)=>{"use strict";z.exports=S(7189)},7189:function(z,L,S){(function(C,j){z.exports=j(S(53547),S(16384),S(39711))})(this,function(C,j,N){return function(o){var l={};function t(i){if(l[i])return l[i].exports;var a=l[i]={i,l:!1,exports:{}};return o[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=o,t.c=l,t.d=function(i,a,s){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:s})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var c in i)t.d(s,c,function(e){return i[e]}.bind(null,c));return s},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=115)}({0:function(o,l,t){o.exports=t(17)()},1:function(o,l){o.exports=C},10:function(o,l,t){var i=t(23),a=t(24),s=t(20),c=t(25);o.exports=function(e,d){return i(e)||a(e,d)||s(e,d)||c()},o.exports.default=o.exports,o.exports.__esModule=!0},115:function(o,l,t){"use strict";t.r(l),t.d(l,"LinkButton",function(){return w});var i,a=t(6),s=t.n(a),c=t(5),e=t.n(c),d=t(3),p=t.n(d),g=t(1),b=t.n(g),u=t(36),n=t(2),r=t.n(n),f=t(0),v=t.n(f),y=t(8),O=t(4),x=t(37),m=t(31),M=t(39),_=["variant","startIcon","endIcon","disabled","children","size","href","to"],B=r()(M.BaseButtonWrapper)(i||(i=p()([`
  padding: `,`;
  background: `,`;
  border: none;
  border-radius: `,`;
  `,` {
    display: flex;
    align-items: center;
  }
  `,` {
    color: `,`;
  }
  &[aria-disabled='true'] {
    `,`
    &:active {
      `,`
    }
  }
  &:hover {
    `,`
  }
  &:active {
    `,`
  }
  `,`
  /**
    Link specific properties
  */
  display: inline-flex;
  text-decoration: none;
  pointer-events: `,`;
`])),function(h){var T=h.theme,P=h.size;return"".concat(P==="S"?T.spaces[2]:"10px"," ").concat(T.spaces[4])},function(h){return h.theme.colors.primary600},function(h){return h.theme.borderRadius},O.Box,y.Typography,function(h){return h.theme.colors.buttonNeutral0},x.b,x.b,x.c,x.a,x.d,function(h){return h.disabled?"none":void 0}),w=b.a.forwardRef(function(h,T){var P=h.variant,I=h.startIcon,W=h.endIcon,k=h.disabled,E=h.children,A=h.size,R=h.href,H=h.to,F=e()(h,_),Q=R?"_blank":void 0,D=R?"noreferrer noopener":void 0;return b.a.createElement(B,s()({ref:T,"aria-disabled":k,size:A,variant:P,target:Q,rel:D,to:k?void 0:H,href:k?"#":R},F,{as:H&&!k?u.NavLink:"a"}),I&&b.a.createElement(O.Box,{"aria-hidden":!0,paddingRight:2},I),A==="S"?b.a.createElement(y.Typography,{variant:"pi",fontWeight:"bold"},E):b.a.createElement(y.Typography,{fontWeight:"bold"},E),W&&b.a.createElement(O.Box,{"aria-hidden":!0,paddingLeft:2},W))});w.displayName="LinkButton",w.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},w.propTypes={children:v.a.string.isRequired,disabled:v.a.bool,endIcon:v.a.element,href:function(h){if(!h.disabled&&!h.to&&!h.href)return new Error("href must be defined")},onClick:v.a.func,size:v.a.oneOf(m.a),startIcon:v.a.element,to:function(h){if(!h.disabled&&!h.href&&!h.to)return new Error("to must be defined")},variant:v.a.oneOf(m.c)}},13:function(o,l){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(a){return typeof a},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o.exports.default=o.exports,o.exports.__esModule=!0),t(i)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},14:function(o,l,t){"use strict";t.d(l,"b",function(){return i}),t.d(l,"c",function(){return a}),t.d(l,"a",function(){return s});var i=function(c){return function(e){var d=e.theme,p=e.size;return d.sizes[c][p]}},a=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(e){var d=e.theme,p=e.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(c,`:focus-within {
        border: 1px solid `).concat(p?d.colors.danger600:d.colors.primary600,`;
        box-shadow: `).concat(p?d.colors.danger600:d.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},s=function(c){var e=c.theme;return`
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
      border: 2px solid `.concat(e.colors.primary600,`;
    }
  }
`)}},17:function(o,l,t){"use strict";var i=t(18);function a(){}function s(){}s.resetWarningCache=a,o.exports=function(){function c(p,g,b,u,n,r){if(r!==i){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function e(){return c}c.isRequired=c;var d={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:e,element:c,elementType:c,instanceOf:e,node:c,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return d.PropTypes=d,d}},18:function(o,l,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(o,l){o.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,s=new Array(i);a<i;a++)s[a]=t[a];return s},o.exports.default=o.exports,o.exports.__esModule=!0},2:function(o,l){o.exports=j},20:function(o,l,t){var i=t(19);o.exports=function(a,s){if(a){if(typeof a=="string")return i(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);return c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set"?Array.from(a):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(a,s):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,l){o.exports=function(t,i){if(t==null)return{};var a,s,c={},e=Object.keys(t);for(s=0;s<e.length;s++)a=e[s],i.indexOf(a)>=0||(c[a]=t[a]);return c},o.exports.default=o.exports,o.exports.__esModule=!0},23:function(o,l){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,l){o.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var s,c,e=[],d=!0,p=!1;try{for(a=a.call(t);!(d=(s=a.next()).done)&&(e.push(s.value),!i||e.length!==i);d=!0);}catch(g){p=!0,c=g}finally{try{d||a.return==null||a.return()}finally{if(p)throw c}}return e}},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,l){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},28:function(o,l,t){var i=t(42),a=t(43),s=t(20),c=t(44);o.exports=function(e){return i(e)||a(e)||s(e)||c()},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,l){o.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},31:function(o,l,t){"use strict";t.d(l,"b",function(){return i}),t.d(l,"c",function(){return a}),t.d(l,"a",function(){return s});var i=["success-light","danger-light"],a=["default","tertiary","secondary","danger","success","ghost"].concat(i),s=["S","L"]},36:function(o,l){o.exports=N},37:function(o,l,t){"use strict";t.d(l,"b",function(){return d}),t.d(l,"c",function(){return p}),t.d(l,"a",function(){return g}),t.d(l,"d",function(){return b});var i=t(28),a=t.n(i),s=t(8),c=t(31),e=function(u){return c.b.includes(u)?u.substring(0,u.lastIndexOf("-")):u==="tertiary"?"neutral":["default","secondary"].includes(u)||!c.c.includes(u)?"primary":u},d=function(u){var n=u.theme;return`
    border: 1px solid `.concat(n.colors.neutral200,`;
    background: `).concat(n.colors.neutral150,`;
    `).concat(s.Typography,` {
      color: `).concat(n.colors.neutral600,`;
    }
    svg {
      > g, path {
        fill: `).concat(n.colors.neutral600,`;
      }
    }
  `)},p=function(u){var n=u.theme,r=u.variant;return[].concat(a()(c.b),["secondary"]).includes(r)?`
      background-color: `.concat(n.colors.neutral0,`;
    `):r==="tertiary"||r==="ghost"?`
      background-color: `.concat(n.colors.neutral100,`;
    `):`
    border: 1px solid `.concat(n.colors["".concat(e(r),"500")],`;
    background: `).concat(n.colors["".concat(e(r),"500")],`;
  `)},g=function(u){var n=u.theme,r=u.variant;return[].concat(a()(c.b),["secondary"]).includes(r)?`
      background-color: `.concat(n.colors.neutral0,`;
      border: 1px solid `).concat(n.colors["".concat(e(r),"600")],`;
      `).concat(s.Typography,` {
        color: `).concat(n.colors["".concat(e(r),"600")],`;
      }
      svg {
        > g, path {
          fill: `).concat(n.colors["".concat(e(r),"600")],`;
        }
      }
    `):r==="tertiary"?`
      background-color: `.concat(n.colors.neutral150,`;
    `):`
    border: 1px solid `.concat(n.colors["".concat(e(r),"600")],`;
    background: `).concat(n.colors["".concat(e(r),"600")],`;
  `)},b=function(u){var n=u.theme,r=u.variant;switch(r){case"danger-light":case"success-light":case"secondary":return`
          border: 1px solid `.concat(n.colors["".concat(e(r),"200")],`;
          background: `).concat(n.colors["".concat(e(r),"100")],`;
          `).concat(s.Typography,` {
            color: `).concat(n.colors["".concat(e(r),"700")],`;
          }
          svg {
            > g, path {
              fill: `).concat(n.colors["".concat(e(r),"700")],`;
            }
          }
        `);case"tertiary":return`
          border: 1px solid `.concat(n.colors.neutral200,`;
          background: `).concat(n.colors.neutral0,`;
          `).concat(s.Typography,` {
            color: `).concat(n.colors.neutral800,`;
          }
          svg {
            > g, path {
              fill: `).concat(n.colors.neutral800,`;
            }
          }
        `);case"ghost":return`
        border: 1px solid transparent;
        background: transparent;

        `.concat(s.Typography,` {
          color: `).concat(n.colors.neutral800,`;
        }

        svg {
          > g, path {
            fill: `).concat(n.colors.neutral500,`;
          }
        }
      `);case"success":case"danger":return`
          border: 1px solid `.concat(n.colors["".concat(e(r),"600")],`;
          background: `).concat(n.colors["".concat(e(r),"600")],`;
          `).concat(s.Typography,` {
            color: `).concat(n.colors.neutral0,`;
          }
        `);default:return`
          border: 1px solid `.concat(n.colors["".concat(e(r),"600")],`;
          background: `).concat(n.colors["".concat(e(r),"600")],`;
          svg {
            > g, path {
              fill: `).concat(n.colors.buttonNeutral0,`;
            }
          }
        `)}}},39:function(o,l,t){"use strict";t.r(l),t.d(l,"BaseButtonWrapper",function(){return O}),t.d(l,"BaseButton",function(){return x});var i,a=t(6),s=t.n(a),c=t(5),e=t.n(c),d=t(3),p=t.n(d),g=t(1),b=t.n(g),u=t(0),n=t.n(u),r=t(2),f=t.n(r),v=t(14),y=["disabled","children"],O=f.a.button(i||(i=p()([`
  display: flex;
  cursor: pointer;
  padding: `,`;
  border-radius: `,`;
  background: `,`;
  border: 1px solid `,`;
  svg {
    height: `,`;
    width: `,`;
  }
  svg {
    > g,
    path {
      fill: `,`;
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;
  }

  `,`
`])),function(m){return m.theme.spaces[2]},function(m){return m.theme.borderRadius},function(m){return m.theme.colors.neutral0},function(m){return m.theme.colors.neutral200},function(m){return m.theme.spaces[3]},function(m){return m.theme.spaces[3]},function(m){return m.theme.colors.neutral0},v.a),x=b.a.forwardRef(function(m,M){var _=m.disabled,B=m.children,w=e()(m,y);return b.a.createElement(O,s()({ref:M,"aria-disabled":_,type:"button",disabled:_},w),B)});x.displayName="BaseButton",x.defaultProps={disabled:!1},x.propTypes={children:n.a.node.isRequired,disabled:n.a.bool}},4:function(o,l,t){"use strict";t.r(l),t.d(l,"Box",function(){return u});var i,a=t(3),s=t.n(a),c=t(0),e=t.n(c),d=t(2),p=t.n(d),g=t(7),b={color:!0},u=p.a.div.withConfig({shouldForwardProp:function(n,r){return!b[n]&&r(n)}})(i||(i=s()([`
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
`])),function(n){var r=n.fontSize;return n.theme.fontSizes[r]||r},function(n){var r=n.theme,f=n.background;return r.colors[f]},function(n){var r=n.theme,f=n.color;return r.colors[f]},function(n){var r=n.theme,f=n.padding;return Object(g.a)("padding",f,r)},function(n){var r=n.theme,f=n.paddingTop;return Object(g.a)("padding-top",f,r)},function(n){var r=n.theme,f=n.paddingRight;return Object(g.a)("padding-right",f,r)},function(n){var r=n.theme,f=n.paddingBottom;return Object(g.a)("padding-bottom",f,r)},function(n){var r=n.theme,f=n.paddingLeft;return Object(g.a)("padding-left",f,r)},function(n){var r=n.theme,f=n.marginLeft;return Object(g.a)("margin-left",f,r)},function(n){var r=n.theme,f=n.marginRight;return Object(g.a)("margin-right",f,r)},function(n){var r=n.theme,f=n.marginTop;return Object(g.a)("margin-top",f,r)},function(n){var r=n.theme,f=n.marginBottom;return Object(g.a)("margin-bottom",f,r)},function(n){var r=n.theme;return n.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(n){var r=n.theme;return n.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(n){var r=n.theme,f=n.hasRadius,v=n.borderRadius;return f?r.borderRadius:v},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var r=n.borderColor;return n.theme.colors[r]},function(n){var r=n.theme,f=n.borderColor,v=n.borderStyle,y=n.borderWidth;if(f&&!v&&!y)return"1px solid ".concat(r.colors[f])},function(n){var r=n.theme,f=n.shadow;return r.shadows[f]},function(n){return n.pointerEvents},function(n){var r=n._hover,f=n.theme;return r?r(f):void 0},function(n){return n.display},function(n){return n.position},function(n){var r=n.left;return n.theme.spaces[r]||r},function(n){var r=n.right;return n.theme.spaces[r]||r},function(n){var r=n.top;return n.theme.spaces[r]||r},function(n){var r=n.bottom;return n.theme.spaces[r]||r},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var r=n.width;return n.theme.spaces[r]||r},function(n){var r=n.maxWidth;return n.theme.spaces[r]||r},function(n){var r=n.minWidth;return n.theme.spaces[r]||r},function(n){var r=n.height;return n.theme.spaces[r]||r},function(n){var r=n.maxHeight;return n.theme.spaces[r]||r},function(n){var r=n.minHeight;return n.theme.spaces[r]||r},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});u.displayName="Box",u.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},u.propTypes={_hover:e.a.func,background:e.a.string,basis:e.a.oneOfType([e.a.string,e.a.string]),borderColor:e.a.string,children:e.a.oneOfType([e.a.node,e.a.string]),color:e.a.string,flex:e.a.oneOfType([e.a.string,e.a.string]),grow:e.a.oneOfType([e.a.string,e.a.string]),hasRadius:e.a.bool,hiddenS:e.a.bool,hiddenXS:e.a.bool,padding:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingBottom:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingLeft:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingRight:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),paddingTop:e.a.oneOfType([e.a.number,e.a.arrayOf(e.a.number)]),shadow:e.a.string,shrink:e.a.oneOfType([e.a.string,e.a.string])}},42:function(o,l,t){var i=t(19);o.exports=function(a){if(Array.isArray(a))return i(a)},o.exports.default=o.exports,o.exports.__esModule=!0},43:function(o,l){o.exports=function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)},o.exports.default=o.exports,o.exports.__esModule=!0},44:function(o,l){o.exports=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},5:function(o,l,t){var i=t(22);o.exports=function(a,s){if(a==null)return{};var c,e,d=i(a,s);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(e=0;e<p.length;e++)c=p[e],s.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(d[c]=a[c])}return d},o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,l){function t(){return o.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(i[c]=s[c])}return i},o.exports.default=o.exports,o.exports.__esModule=!0,t.apply(this,arguments)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},7:function(o,l,t){"use strict";var i=t(10),a=t.n(i),s=t(13),c=t.n(s);l.a=function(e,d,p){var g=d;if(Array.isArray(d)||c()(d)!=="object"||(g=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),g!==void 0){if(Array.isArray(g)){var b=g,u=a()(b,3),n=u[0],r=u[1],f=u[2],v="".concat(e,": ").concat(p.spaces[n],";");return r!==void 0&&(v+="".concat(p.mediaQueries.tablet,`{
          `).concat(e,": ").concat(p.spaces[r],`;
        }`)),f!==void 0&&(v+="".concat(p.mediaQueries.mobile,`{
          `).concat(e,": ").concat(p.spaces[f],`;
        }`)),v}var y=p.spaces[g]||g;return"".concat(e,": ").concat(y,";")}}},8:function(o,l,t){"use strict";t.r(l),t.d(l,"Typography",function(){return b});var i,a=t(3),s=t.n(a),c=t(0),e=t.n(c),d=t(2),p=["alpha","beta","delta","epsilon","omega","pi","sigma"],g={fontSize:!0,fontWeight:!0},b=t.n(d).a.span.withConfig({shouldForwardProp:function(u,n){return!g[u]&&n(u)}})(i||(i=s()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(u){var n=u.theme,r=u.fontWeight;return n.fontWeights[r]},function(u){var n=u.theme,r=u.fontSize;return n.fontSizes[r]},function(u){var n=u.theme,r=u.lineHeight;return n.lineHeights[r]},function(u){var n=u.theme,r=u.textColor;return n.colors[r||"neutral800"]},function(u){return u.textTransform},function(u){return u.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(u){var n=u.variant,r=u.theme;switch(n){case"alpha":return`
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
      `)}});b.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},b.propTypes={fontSize:e.a.oneOfType([e.a.number,e.a.string]),fontWeight:e.a.string,lineHeight:e.a.oneOfType([e.a.number,e.a.string]),textColor:e.a.string,textTransform:e.a.string,variant:e.a.oneOf(p)}}})})}}]);
