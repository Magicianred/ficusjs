function toKebabCase(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function isPromise(e){return("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function createComponent(e,t){const s=function(e){if(!e)return[];const t=[];return Object.keys(e).forEach((s=>{(null==e[s].observed||e[s].observed)&&t.push(toKebabCase(s))})),t}(t.props);window.customElements.get(e)||window.customElements.define(e,class extends HTMLElement{static get observedAttributes(){return s}get componentTagName(){return e}connectedCallback(){this._checkInit(),this._preprocess()}disconnectedCallback(){"function"==typeof this.removed&&(this.removed(),this.isRemovedCalled=!0)}attributeChangedCallback(){this._checkInit(),this._preprocess()}get initialised(){return this._props&&this._state&&this._computed&&this.templateRenderer}_checkInit(){this.initialised||this._init(t)}_init(e){if(this._props=e.props||{},this._computed=e.computed||{},e.state&&"function"!=typeof e.state)throw new Error("State must be a function!");this._state=e.state||{},this.computedCache={},this.status="render",this.props=this._processProps(),"function"==typeof this._state&&(this._state=this._state.bind(this)()),this.state=this._monitorState(this._state),this._processMethodsAndComputedProps(e),this.root=this._processRoot(e.root),this.slots=this._processSlots(),this.render=e.render||null,this.templateRenderer=e.renderer,this.template=null,this.created=e.created||null,this.mounted=e.mounted||null,this.updated=e.updated||null,this.removed=e.removed||null,this.isCreatedCalled=!1,this.isMountedCalled=!1,this.isRemovedCalled=!1,this.emit=(e,t)=>{!function(e,t,s={}){const o=Object.assign({},{bubbles:!0,cancelable:!0,composed:!1},s);let r;"composed"in CustomEvent.prototype?r=new CustomEvent(t,o):(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),Object.defineProperty(r,"composed",{value:o.composed})),e.dispatchEvent(r)}(this,e,{detail:t})},this.setState=(e,t)=>{const setter=e=>{if(!e||"object"!=typeof e)return;const s=this.updated;t&&(this.updated=()=>{setTimeout(t),this.updated=s||void 0}),this.status="transaction";for(const t in e)this.state[t]&&this.state[t]===e[t]||(this.state[t]=e[t]);this.status="render",this._processRender()},s=e(this.state);isPromise(s)?s.then(setter):setter(s)},this._processInstanceProps(this._props),"function"!=typeof this.created||this.isCreatedCalled||(this.created(),this.isCreatedCalled=!0)}_processProps(){const e={};return Object.keys(this._props).forEach((t=>{const s={},o=this._props[t],r=this._getAttribute(t);let n=null;if(null!=o.default&&(n=o.default),o.required&&null==r)null!=n?(console.info(`No biggie, the required prop '${t}' has no value set, so the default has been set`),s[t]=n):(s[t]=null,console.error(`The required prop '${t}' has no value set`));else switch(o.type){case String:default:s[t]=r||n;break;case Number:s[t]=null!=r?parseFloat(r):null!=n?n:0;break;case Boolean:s[t]=null!=r?"true"===r.toString():null!=n&&n;break;case Object:try{s[t]=null!=r?JSON.parse(r):null!=n?n:void 0}catch(e){s[t]=null!=n?n:void 0,console.error("An object parse issue occurred",e)}}e[t]=s[t],this._instanceProps&&this._instanceProps[t]&&(e[t]=this._instanceProps[t])})),e}_processMethodsAndComputedProps(e){const t=this,s=["state","created","mounted","updated","removed","render","renderer"],o=Object.keys(e);o.length&&o.forEach((o=>{t[o]||s.includes(o)||"function"!=typeof e[o]||(t[o]=e[o].bind(t)),"computed"===o&&this._processComputed(e[o])}))}_processRoot(e){switch(e){case"standard":default:return this;case"shadow":return this.attachShadow({mode:"open"});case"shadow:closed":return this.attachShadow({mode:"closed"})}}_processComputed(e){const t=this,s=Object.keys(e);s.length&&s.forEach((s=>{t[s]?console.warn(`Computed property '${s}' already exists on the component instance`):Object.defineProperty(t,s,{get:()=>(t.computedCache[s]||(t.computedCache[s]=e[s].bind(t)()),t.computedCache[s])})}))}_processRender(){const e=this.render?this.render():void 0;e&&(this.template=e,this._updateRender())}_monitorState(e){const t=this;return new Proxy(e,{set:(e,s,o)=>(e[s]===o||(e[s]=o,t.computedCache={},"render"===t.status&&t._processRender()),!0)})}_processSlots(){const e=this.childNodes,t={default:[]};return e.length>0&&[...e].forEach((e=>{const s=e.getAttribute?e.getAttribute("slot"):null;s?t[s]=e:t.default.push(e)})),t}_getAttribute(e){try{return this.getAttribute(toKebabCase(e))}catch(e){return console.error("A get prop error occurred",e),""}}_processInstanceProps(e){const t=this,s=Object.keys(e);e&&s.forEach((e=>{let s;t[e]&&(s=t[e],delete t[e]),Object.defineProperty(t,e,{get(){return this._instanceProps&&this._instanceProps[e]?this._instanceProps[e]:this.getAttribute(toKebabCase(e))},set(t){return this._instanceProps||(this._instanceProps={}),this._instanceProps[e]=t,this.setAttribute(toKebabCase(e),"object"==typeof t?JSON.stringify(t):t.toString()),this.attributeChangedCallback(),!0},enumerable:!0}),s&&(t[e]=s)}))}_preprocess(){this.computedCache={},this.props=this._processProps(),this._processRender()}_updateRender(){this.template&&(isPromise(this.template)?this.template.then((e=>{this.templateRenderer(e,this.root),this._callLifecycleMethods()})).catch((e=>console.error("A component render error occurred",e))):(this.templateRenderer(this.template,this.root),this._callLifecycleMethods()))}_callLifecycleMethods(){"function"!=typeof this.mounted||this.isMountedCalled||this.mounted(),this.isMountedCalled=!0,"function"==typeof this.updated&&this.isMountedCalled&&this.updated()}})}function use(e,{renderer:t,...s}){if(e.create&&"function"==typeof e.create)return e.create({createComponent:createComponent,renderer:t,...s,use:use})}export{createComponent,use};
