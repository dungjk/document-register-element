/*! (C) WebReflection Mit Style License */
define(function(){function I(e,t){for(var n=0,r=e.length;n<r;n++)J(e[n],t)}function q(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],F(r,f[U(r)])}function R(e){return function(t){v.call(N,t)&&(J(t,e),I(t.querySelectorAll(l),e))}}function U(e){var t=e.getAttribute("is"),n=e.nodeName,r=h.call(a,t?s+t.toUpperCase():i+n);return t&&-1<r&&!z(n,t)?-1:r}function z(e,t){return-1<l.indexOf(e+'[is="'+t+'"]')}function W(e){var t=e.currentTarget,n=e.attrChange,r=e.prevValue,i=e.newValue;t.attributeChangedCallback&&e.attrName!=="style"&&t.attributeChangedCallback(e.attrName,n===e.ADDITION?null:r,n===e.REMOVAL?null:i)}function X(e){var t=R(e);return function(e){t(e.target)}}function V(e,t){var n=this;k.call(n,e,t),D.call(n,{target:n})}function $(t,i){x(t,i),B?B.observe(t,A):(_&&(t.setAttribute=V,t[e]=H(t),t.addEventListener(r,D)),t.addEventListener(n,W)),t.createdCallback&&(t.created=!0,t.createdCallback(),t.created=!1)}function J(e,t){var n,r=U(e),i="attached",s="detached";-1<r&&(j(e,f[r]),r=0,t===i&&!e[i]?(e[s]=!1,e[i]=!0,r=1):t===s&&!e[s]&&(e[i]=!1,e[s]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}var e="__"+REGISTER_ELEMENT+(Math.random()*1e5>>0),t="extends",n="DOMAttrModified",r="DOMSubtreeModified",i="<",s="=",o=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,u=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],a=[],f=[],l="",c=document.documentElement,h=a.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},p=Object.prototype,d=p.hasOwnProperty,v=p.isPrototypeOf,m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,b=Object.getPrototypeOf,w=Object.setPrototypeOf,E=!!Object.__proto__,S=Object.create||function K(e){return e?(K.prototype=e,new K):this},x=w||(E?function(e,t){return e.__proto__=t,e}:y&&g?function(){function e(e,t){for(var n,r=y(t),i=0,s=r.length;i<s;i++)n=r[i],d.call(e,n)||m(e,n,g(t,n))}return function(t,n){do e(t,n);while(n=b(n));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),T=window.MutationObserver||window.WebKitMutationObserver,N=(window.HTMLElement||window.Element||window.Node).prototype,C=N.cloneNode,k=N.setAttribute,L=document.createElement,A=T&&{attributes:!0,characterData:!0,attributeOldValue:!0},O=T||function(e){_=!1,c.removeEventListener(n,O)},M=!1,_=!0,D,P,H,B,j,F;w||E?(j=function(e,t){v.call(t,e)||$(e,t)},F=$):(j=function(t,n){t[e]||(t[e]=Object(!0),$(t,n))},F=j),T||(c.addEventListener(n,O),c.setAttribute(e,1),c.removeAttribute(e),_&&(D=function(t){var n=this,r,i,s;if(n===t.target){r=n[e],n[e]=i=H(n);for(s in i){if(!(s in r))return P(0,n,s,r[s],i[s],"ADDITION");if(i[s]!==r[s])return P(1,n,s,r[s],i[s],"MODIFICATION")}for(s in r)if(!(s in i))return P(2,n,s,r[s],i[s],"REMOVAL")}},P=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,W(o)},H=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),document[REGISTER_ELEMENT]=function(n,r){b=n.toUpperCase(),M||(M=!0,T?(B=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new T(function(r){for(var i,s,o=0,u=r.length;o<u;o++)i=r[o],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,s.attributeChangedCallback&&i.attributeName!=="style"&&s.attributeChangedCallback(i.attributeName,i.oldValue,s.getAttribute(i.attributeName)))})}(R("attached"),R("detached")),B.observe(document,{childList:!0,subtree:!0})):(document.addEventListener("DOMNodeInserted",X("attached")),document.addEventListener("DOMNodeRemoved",X("detached"))),document.addEventListener("readystatechange",function(e){I((e.target||document).querySelectorAll(l),"attached")}),document.createElement=function(e,t){var n=L.apply(document,arguments),r=h.call(a,(t?s:i)+(t||e).toUpperCase()),o=-1<r;return t&&(n.setAttribute("is",t=t.toLowerCase()),o&&(o=z(e.toUpperCase(),t))),o&&F(n,f[r]),n},N.cloneNode=function(e){var t=C.call(this,!!e),n=U(t);return-1<n&&F(t,f[n]),e&&q(t.querySelectorAll(l)),t});if(-2<h.call(a,s+b)+h.call(a,i+b))throw new Error("A "+n+" type is already registered");if(!o.test(b)||-1<h.call(u,b))throw new Error("The type "+n+" is invalid");var c=function(){return document.createElement(g,m&&b)},v=r||p,m=d.call(v,t),g=m?r[t].toUpperCase():b,y=a.push((m?s:i)+b)-1,b;return l=l.concat(l.length?",":"",m?g+'[is="'+n.toLowerCase()+'"]':g),c.prototype=f[y]=d.call(v,"prototype")?v.prototype:S(N),I(document.querySelectorAll(l),"attached"),c}});