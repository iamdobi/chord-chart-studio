!function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push(["NjgO",1]),n()}({"+c1D":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="app-header">\n    <div class="h2-like">Chord+</div>\n    <div>Universal chord charts</div>\n</div>\n'},useData:!0})},"0max":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<span class="cp2-bar-separator">|</span>'},useData:!0})},"2fwM":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="editor-area">\n    <section class="left">\n        <div id="source"></div>\n    </section>\n\n    <section class="right">\n        <div id="preview"><div></div></div>\n    </section>\n</div>'},useData:!0})},"7FWp":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<span class="cp2-chord-symbol">'+e.escapeExpression(e.lambda(null!=t?t.chordSymbol:t,t))+"</span>"},useData:!0})},B4kk:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o;return'<p class="cp2-chord-line">'+(null!=(o=e.lambda(null!=t?t.chordLine:t,t))?o:"")+"</p>"},useData:!0})},JsK9:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o;return'<span class="cp2-bar-content">'+(null!=(o=e.lambda(null!=t?t.barContent:t,t))?o:"")+"</span>"},useData:!0})},NjgO:function(e,t,n){"use strict";n.r(t);n("u0UJ");var r=n("LvDl"),a=n.n(r);var o=n("cjKa"),i=n.n(o);function s(e){const t=new i.a;let n;return Object.assign(t,e,{getHost(){if(!n)throw new Error("Plugin's host has not been setup, cannot retrieve it");return n},setHost(e){if(n)throw new Error("Cannot override Plugin's host");n=e}})}function c(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}var l=n("+c1D"),d=n.n(l);var u=s({render(){const e=this.getHost().getAreaBroker().getHeader(),t=c(d()());e.appendChild(t)}}),p=n("k+xG"),h=n.n(p);var f=s({render(){const e=this.getHost().getAreaBroker().getFooter(),t=c(h()());e.appendChild(t)}}),g=n("b/sn"),m=n("cD+i"),y=n("byeC"),v=n("VuzU"),b=n("++pP"),w=n("Mhoe");function C(e){return new g.Plugin({key:"onStateChange",view:()=>({update(t){e.emit("statechange",t.state)}})})}var E=n("n5wB");var S=new y.Schema({nodes:E.nodes,marks:E.marks});function x(e){return e.toJSON().doc.content.map(e=>e.content?e.content.reduce((e,t)=>e+=t.text,""):"")}n("Qe33");function k(e){const t=new o.EventEmitter2,n=function(e){return[Object(w.history)(),Object(v.keymap)({"Mod-z":w.undo,"Mod-y":w.redo}),Object(v.keymap)(b.baseKeymap),C(e)]}(t);let r;return t.on("statechange",e=>{t.emit("change",x(e))}),Object.assign(t,{load(a){const o=g.EditorState.create({doc:y.DOMParser.fromSchema(S).parse(a),plugins:n});r?r.updateState(o):r=new m.EditorView(e,{state:o}),t.emit("statechange",o)},getContent:()=>x(r.state)})}var O=n("PIqb");const B=new O.Chords;function A(e=""){return e.replace(/\t+/g," ").replace(/  +/g," ").trim().split(" ").map(e=>e.replace(/\.*$/g,"")).every(e=>(function(e){return a.a.isString(e)&&B.isChord(e)})(e))}const D=["2/2","3/2","3/4","4/4","5/4","3/8","6/8","9/8","12/8"];function N(e){return D.includes(e)}function L(e){if(!N(e))throw new TypeError("Expected time signature string, received: "+e);const t=e.split("/"),n=Number.parseInt(t[0],10),r=Number.parseInt(t[1],10);let a=n;return 2===r?a=2*n:8===r&&(a=n/3),{string:e,count:n,value:r,beatCount:a}}const T=new O.Chords;class j extends Error{constructor({string:e,duration:t,currentBeatCount:n,beatCount:r}={}){if(!e||!a.a.isString(e))throw new TypeError("IncorrectBeatCountException cannot be created without chord string, received: "+e);if(!t||!a.a.isFinite(t))throw new TypeError("IncorrectBeatCountException cannot be created without chord duration, received: "+t);if(!n||!a.a.isFinite(n))throw new TypeError("IncorrectBeatCountException cannot be created without currentBeatCount, received: "+n);if(!r||!a.a.isFinite(r))throw new TypeError("IncorrectBeatCountException cannot be created without beatCount, received: "+r);super(),this.name="IncorrectBeatCountException",this.string=e,this.duration=t,this.currentBeatCount=n,this.beatCount=r}}class q extends Error{constructor({string:e}={}){if(!e||!a.a.isString(e))throw new TypeError("InvalidChordRepetitionException cannot be created without chord string, received: "+e);super(),this.name="InvalidChordRepetitionException",this.string=e}}function P(e,{timeSignature:t=L("4/4")}={}){const{beatCount:n}=t,r=e.replace(/  +/g," ").trim().split(" "),o=[];let i={allChords:[]},s={},c={},l=0,d=0,u={};if(r.forEach(e=>{if(c=function(e){return T.parse(e)}(e.replace(/\./g,"")),(s={string:e,duration:(e.match(/\./g)||[]).length||n,model:c}).beat=l+1,l+=s.duration,i.allChords.length>0&&(u=i.allChords[i.allChords.length-1],a.a.isEqual(u.model,s.model)))throw new q({string:s.string});if(i.allChords.push(s),d++,l===n)i.timeSignature=t,o.push(a.a.cloneDeep(i)),i={allChords:[]},l=0,u={};else if(l>n)throw new j({message:"",string:s.string,duration:s.duration,currentBeatCount:l,beatCount:n})}),l>0&&l<n)throw new j({message:"",string:s.string,duration:s.duration,currentBeatCount:l,beatCount:n});return{chordCount:d,allBars:o}}function M(e,t){const n=a.a.cloneDeep(e);return n.forEach(e=>{"chord"===e.type&&e.model.allBars.forEach(e=>{e.allChords.forEach(e=>{t(e)})})}),n}const I="4/4";function F(e){let t=L(I);const n=(a.a.isArray(e)?e:e.split("\n")).map(e=>({string:e})).map(e=>{if(N(e.string))t=L(e.string),e.type="time-signature",e.model=t;else if(A(e.string))try{e.type="chord",e.model=P(e.string,{timeSignature:t})}catch(t){e.type="text"}else e.type="text";return e});return{allLines:n,allChords:function(e){const t=[];let n;return M(e,e=>{-1===(n=a.a.findIndex(t,t=>a.a.isEqual(t.model,e.model)))?t.push({model:a.a.cloneDeep(e.model),occurrences:1}):t[n].occurrences++}),t}(n)}}const z={0:{"":[]},2:{2:[3],11:[3,2]},3:{3:[3],12:[2,4],21:[6,0],111:[2,2,0]},4:{4:[3],13:[1,4],22:[3,2],31:[5,0],112:[1,1,3],121:[1,4,0],211:[4,1,0],1111:[2,2,2]}};const K=2,R=1;const H=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],J={"C#":"Db","D#":"Eb","F#":"Gb","G#":"Ab","A#":"Bb"},U=a.a.invert(J);function V(e){return U[e]||e}function G(e,t,n){const r=H.indexOf(e)+t,a=Math.floor(r/12),o=H[r-12*a];return n&&J[o]||o}function _(e,t,{transposeValue:n=0,accidentalsType:r="auto",harmonizeAccidentals:o=!0}={}){let i=a.a.cloneDeep(e),s="auto"===r?function(e){let t="",n=0,r=0;return e.forEach(e=>{2===(t=e.model.symbol.rootNote).length&&("b"===t[1]?n+=e.occurrences:r+=e.occurrences)}),n>r?"flat":"sharp"}(t):r;return(o||0!==n)&&(i=M(i,e=>{e.transposedModel=function(e,t,n){const r=a.a.cloneDeep(e),o=r.symbol.rootNote,i=r.symbol.bassNote,s=V(o);if(r.symbol.rootNote=G(s,t,n),i){const e=V(i);r.symbol.bassNote=G(e,t,n)}return r}(e.model,n,"flat"===s)})),i}function W(e){return a.a.isObject(e)&&a.a.isFunction(e.render)}var Y=n("JsK9"),$=n.n(Y);var Z={render(e,{chordRenderer:t}={}){let n=0,r=0;if(!W(t))throw new TypeError("chordRenderer is not a valid renderer");const o=e.allChords.reduce((e,o)=>(n=a.a.isFinite(o.spacesWithin)?o.spacesWithin:0,r=a.a.isFinite(o.spacesAfter)?o.spacesAfter:2,e+=t.render(o.symbol)+" ".repeat(n)+" ".repeat(r)),"");return $()({barContent:o})}},Q=n("B4kk"),X=n.n(Q),ee=n("0max"),te=n.n(ee),ne={render(e,{barContentRenderer:t,chordRenderer:n}={}){if(!W(t))throw new TypeError("barContentRenderer is not a valid renderer");const r=e.allBars.map(e=>t.render(e,{chordRenderer:n})),a=te()(),o=a+r.join(a)+a;return X()({chordLine:o})}},re=n("7FWp"),ae=n.n(re),oe={render:e=>ae()({chordSymbol:e})},ie=n("YPa8"),se=n.n(ie),ce={render:e=>se()({textLine:e})},le=n("U5+Y"),de=n.n(le);const ue=new O.Chords;var pe=function(e){return ue.print(e.symbol)},he={render(e,{alignBars:t=!1,transposeValue:n=0,accidentalsType:r="auto",harmonizeAccidentals:o=!0}){const i=F(e);let{allLines:s,allChords:c}=i;const l=function(e){const t=[];return e.filter(e=>"chord"===e.type).forEach(e=>{e.model.allBars.forEach((e,n)=>{if(!t[n]){t[n]={};for(let r=1;r<=e.timeSignature.beatCount;r++)t[n][r]=0}e.allChords.forEach(e=>{t[n][e.beat]=Math.max(t[n][e.beat],e.symbol.length)})})}),t}(s=M(s=_(s,c,{transposeValue:n,accidentalsType:r,harmonizeAccidentals:o}),e=>{e.symbol=e.transposedModel?pe(e.transposedModel):pe(e.model)})),d=s.map(e=>{if("chord"===e.type){const n=t?function(e,t){const n=a.a.cloneDeep(e);let r;return n.allBars.forEach((e,n)=>{e.allChords.forEach(a=>{if(a.spacesWithin=t[n][a.beat]-a.symbol.length,a.spacesAfter=0,a.beat!==e.timeSignature.beatCount){a.spacesAfter=K;for(let o=a.beat+1;o<a.beat+a.duration;o++)r=t[n][o],a.spacesAfter+=r||R,o!==e.timeSignature.beatCount&&r&&(a.spacesAfter+=K)}})}),n}(e.model,l):function(e){const t=a.a.cloneDeep(e);let n=0,r="",o=[];return t.allBars.forEach(e=>{n=0,r="",e.allChords.forEach(e=>{r+=e.duration.toString(),n+=e.duration}),o=z[n][r];for(let t=0;t<r.length;t++)e.allChords[t].spacesAfter=o[t]}),t}(e.model);e.rendered=ne.render(n,{barContentRenderer:Z,chordRenderer:oe})}else"text"===e.type&&(e.rendered=ce.render(e.string));return e}).filter(e=>e.rendered).map(e=>e.rendered).join("\n");return de()({song:d})}},fe=n("2fwM"),ge=n.n(fe);var me=s({render(){const e=this.getHost(),t=e.getAreaBroker().getContent(),n=c(ge()());t.appendChild(n);const r={alignBars:!0,transposeValue:0},o=k(document.querySelector("#source")),i=document.querySelector("#preview");function s(e){const t=c(he.render(e,r));i.childNodes.length?i.replaceChild(t,i.firstChild):i.appendChild(t)}o.on("change",t=>{s(t),e.emit("editorchange",t.join("\n"))}),e.on("optionchange",e=>{a.a.assign(r,e),s(o.getContent())}),e.on("activatefile",e=>o.load(function(e){const t=document.createElement("div");return t.innerHTML=e.split("\n").map(e=>`<p>${e}</p>`).join(""),t}(e.content)))}}),ye=n("4b23"),ve=n.n(ye);var be={create(e,t){if(localStorage.getItem(e))throw new Error("Already exists key: "+e);if(!e)throw new Error("Cannot create localstorage entry with empty key");localStorage.setItem(e,JSON.stringify(t))},getOneByKey(e){const t=localStorage.getItem(e);return t?JSON.parse(t):t},getAllByKeyPrefix(e){const t={};let n;for(let r=0;r<localStorage.length;r++)0===(n=localStorage.key(r)).indexOf(e)&&(t[n]=this.getOneByKey(n));return t},update(e,t){if(!localStorage.getItem(e))throw new Error("Cannot find and update key: "+e);localStorage.setItem(e,JSON.stringify(t))},delete(e){localStorage.removeItem(e)}};const we="song:";function Ce(){const e=new i.a;return Object.assign(e,{create(){const e={key:we+ve()(20),title:"untitled",content:""};return be.create(e.key,e),e},getAll:()=>be.getAllByKeyPrefix(we),getOneByKey:e=>be.getOneByKey(e),updateContent(e,t){const n=be.getOneByKey(e);n.content=t,be.update(e,n)},updateTitle(e,t){const n=be.getOneByKey(e);n.title=t,be.update(e,n)},deleteOne(e){be.delete(e)}})}var Ee=n("xSQz"),Se=n.n(Ee),xe=n("vfrT"),ke=n.n(xe);var Oe=s({render(){const e=this.getHost(),t=e.getAreaBroker().getSideBar(),n=new DocumentFragment;let r;n.appendChild(c(Se()()));const o=n.querySelector('[data-action="new-file"]'),i=n.querySelector('[data-action="delete-file"]'),s=n.querySelector(".entry-list");function l(e){const t=c(ke()(e)),n=s.querySelector(`[data-key="${r}"`);return n&&n.nextSibling?s.insertBefore(t,n.nextSibling):s.appendChild(t),t}const d=t=>{r=t,s.querySelectorAll(".active").forEach(e=>e.classList.remove("active"));const n=s.querySelector(`[data-key="${t}"`);n&&n.classList.add("active");const a=this.fm.getOneByKey(r);e.emit("activatefile",a)},u=this.fm.getAll(),p=a.a.sortBy(u,e=>e.title);p.length&&(p.forEach(e=>{l(e)}),d(p[0].key));const h=e=>{const t=e.querySelector(".entry-title");t.contentEditable=!0,t.focus();const n=new Range;n.selectNodeContents(t);const r=window.getSelection();r.removeAllRanges(),r.addRange(n)};window.addEventListener("click",e=>{s.querySelectorAll('[contenteditable="true"]').forEach(t=>{t.isSameNode(e.target)||(t.contentEditable=!1)})}),o.addEventListener("click",()=>{const e=this.fm.create(),t=l(e);d(e.key),a.a.defer(()=>h(t))}),i.addEventListener("click",()=>{this.fm.deleteOne(r);const e=s.querySelector(`[data-key="${r}"]`);if(e){const t=e.previousSibling?e.previousSibling:e.nextSibling;s.removeChild(e),t?d(t.dataset.key):r=null}}),s.addEventListener("keypress",e=>{13===e.which&&(e.preventDefault(),e.stopPropagation())}),s.addEventListener("keypress",e=>{13===e.which&&e.target.contentEditable&&(e.target.blur(),e.target.contentEditable=!1)}),s.addEventListener("input",a.a.throttle(e=>{const t=e.target.closest("[data-key]");this.fm.updateTitle(t.dataset.key,e.target.innerText)},1e3)),s.addEventListener("click",e=>{if(1===e.detail){const t=e.target.closest("[data-key]");d(t.dataset.key)}}),s.addEventListener("dblclick",e=>h(e.target.parentElement)),e.on("editorchange",e=>{this.fm.updateContent(r,e)}),t.appendChild(n)},init(){this.fm=Ce()}}),Be=n("e8ZZ"),Ae=n.n(Be);var De=s({render(){const e=this.getHost(),t=e.getAreaBroker().getHeader(),n=new DocumentFragment;n.appendChild(c(Ae()())),n.querySelector('[data-option="align-bars"]').addEventListener("change",t=>{e.emit("optionchange",{alignBars:t.target.checked})});const r=n.querySelector('[data-option="transpose-down"]'),a=n.querySelector('[data-option="transpose-up"]'),o=n.querySelector('[data-option="transpose-value"]');function i(t){const n=Number.parseInt(o.innerText)+t;e.emit("optionchange",{transposeValue:n}),o.innerText=n>0?"+"+n:n}r.addEventListener("click",()=>i(-1)),a.addEventListener("click",()=>i(1));const s=n.querySelector('[data-option="harmonize-accidentals"]');s.addEventListener("change",()=>{const t=s.querySelector('input[name="ha"]:checked');e.emit("optionchange",{harmonizeAccidentals:"true"===t.value})});const l=n.querySelector('[data-option="accidentals-type"]');l.addEventListener("change",()=>{const t=l.querySelector('input[name="ht"]:checked');e.emit("optionchange",{accidentalsType:t.value})}),t.appendChild(n)}});const Ne=function(e){const t=[],n=new i.a;async function r(e){let n;for(let r=0;r<t.length;r++)n=t[r],a.a.isFunction(n[e])&&await n[e]();this.emit(e)}return Object.assign(n,{getAreaBroker:()=>e,registerPlugin(e){e.setHost(this),t.push(e)},init(){return r.call(this,"init")},render(){return r.call(this,"render")}})}(function(e){const t={};let n;return a.a.forEach(e,(e,r)=>{n="get"+r.charAt(0).toUpperCase()+r.slice(1),t[n]=(()=>{const t=document.querySelectorAll(e);if(0===t.length)throw new Error("Cannot find area: "+r+" with selector: "+e);if(t.length>1)throw new Error("Multiple areas: "+r+" found with selector: "+e);return t.item(0)})}),t}({header:'[data-area="app-header"]',footer:'[data-area="app-footer"]',sideBar:'[data-area="app-side-bar"]',content:'[data-area="app-content"]'}));var Le;(Le=Ne).registerPlugin(u),Le.registerPlugin(f),Le.registerPlugin(me),Le.registerPlugin(Oe),Le.registerPlugin(De),Ne.init().then(()=>Ne.render())},"U5+Y":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o;return'<div class="cp2-song">'+(null!=(o=e.lambda(null!=t?t.song:t,t))?o:"")+"</div>"},useData:!0})},YPa8:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o;return'<p class="cp2-text-line">'+(null!=(o=e.lambda(null!=t?t.textLine:t,t))?o:"")+"</p>"},useData:!0})},e8ZZ:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="rendering-options">\n    <div class="panel">\n        <input type="checkbox" id="align-bars" data-option="align-bars" checked><label for="align-bars">Align bars</label><br />\n    </div>\n    <div class="panel">\n        Transpose: <button data-option="transpose-down">-1</button> <span data-option="transpose-value">0</span> <button data-option="transpose-up">+1</button><br />\n        <div data-option="harmonize-accidentals">\n            Unify flats / sharps\n            <input type="radio" id="harmonize-accidentals-false" name="ha" value="false"><label for="harmonize-accidentals-false">No</label>\n            <input type="radio" id="harmonize-accidentals-true" name="ha" value="true" checked><label for="harmonize-accidentals-true">Yes</label><br/>\n        </div>\n        <div data-option="accidentals-type">\n            Accidentals\n            <input type="radio" id="accidentals-type-auto" name="ht" value="auto" checked><label for="accidentals-type-auto">Auto</label>\n            <input type="radio" id="accidentals-type-flat" name="ht" value="flat"><label for="accidentals-type-flat">Flat</label>\n            <input type="radio" id="accidentals-type-sharp" name="ht" value="sharp"><label for="accidentals-type-sharp">Sharp</label>\n        </div>\n    </div>\n</div>'},useData:!0})},"k+xG":function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="app-footer">\n    Chord+ v0.3.0\n</div>\n'},useData:!0})},u0UJ:function(e,t,n){},vfrT:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var o,i=null!=t?t:e.nullContext||{},s=n.helperMissing,c=e.escapeExpression;return'<li class="entry" data-key="'+c("function"==typeof(o=null!=(o=n.key||(null!=t?t.key:t))?o:s)?o.call(i,{name:"key",hash:{},data:a}):o)+'">\n    <div class="entry-title">'+c("function"==typeof(o=null!=(o=n.title||(null!=t?t.title:t))?o:s)?o.call(i,{name:"title",hash:{},data:a}):o)+"</div>\n</li>"},useData:!0})},xSQz:function(e,t,n){var r=n("3O+N");e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="file-explorer">\n    <div class="file-explorer-actions">\n        <button data-action="new-file">New file</button>\n        <button data-action="delete-file">Delete</button>\n    </div>\n    <hr />\n    <ul class="entry-list"></ul>\n</div>'},useData:!0})}});
//# sourceMappingURL=main.67ca4c603a33775a6531.js.map