var yr=Object.defineProperty;var Y=(t,l)=>{for(var c in l)yr(t,c,{get:l[c],enumerable:!0})};import*as Qo from"react";import"react";var kr=[["unicornScene","dynamicVisual"],["risk","status"],["asset","category"],["tracklist","itemList"],["track","guide"],["record","visual"],["scene","content"],["deal","example"],["round","stage"],["sector","category"],["valuation","metric"],["capital","resource"],["funding","metric"],["holding","row"],["portfolio","collection"],["artist","member"],["music","media"]];var wr={absolute:"絕對值",accent:"強調色",all:"全部",alternate:"交替",amount:"數值",arabic:"阿拉伯數字",area:"面積圖",arrow:"箭頭",asc:"升序",ascend:"上升",auto:"自適應",automations:"自動化",band:"色帶",bar:"柱狀",bars:"條形",below:"下方",black:"黑色",bl:"左下",blue:"藍色",bottom:"底部","bottom-left":"左下","bottom-right":"右下",both:"兩側",box:"方框",br:"右下",bubble:"氣泡",bubbles:"氣泡",bullish:"積極",burst:"爆發",cards:"卡片",category:"分類",cautions:"謹慎",cautious:"謹慎",cells:"格子",center:"居中",centered:"居中","center-left":"左中",change:"變化",chart:"圖表",circle:"圓形",cluster:"聚類",collage:"拼貼",color:"彩色",column:"列式",columns:"多列",constellation:"星群",contain:"完整顯示",cool:"冷色",corner:"角標",count:"數量",cover:"填充裁剪",dark:"深色",dashed:"虛線",data:"資料",dawn:"晨光",default:"預設",delta:"差值",desc:"降序",descend:"下降",dest:"目標",diverging:"分歧",donut:"環形圖",dot:"圓點",dots:"點陣",dumbbell:"啞鈴圖",duotone:"雙色",dusk:"暮色",ember:"暖焰",feature:"重點圖文",figure:"大數字",fill:"填充",flat:"平鋪",flow:"流程",from:"起點",full:"全幅",funnel:"漏斗",gate:"閘門",gauge:"儀表",gauges:"儀表組",glass:"玻璃",gloss:"光澤",glow:"發光",goey:"流體",gradient:"漸變",graphite:"石墨",green:"綠色",grid:"網格",group:"分組",grouped:"分組",hatched:"斜紋",heat:"熱度",heatmap:"熱力圖",hero:"主視覺","hero-left":"主視覺在左","hero-right":"主視覺在右",horizontal:"橫向",image:"圖片",ink:"墨色",justified:"兩端對齊",ladder:"階梯",landscape:"橫圖",layers:"層級",left:"左側",lens:"鏡頭",letter:"字母",level:"水平",light:"淺色",lime:"熒光綠",line:"折線",linear:"線性",lines:"線條",list:"列表",lollipop:"棒棒糖",map:"地圖",media:"媒體",mesh:"網格",meters:"儀表",midnight:"午夜",mirror:"映象",mono:"單色",month:"月度",monthly:"按月",mosaic:"馬賽克",moving:"動態",multi:"多色",muted:"柔和",nested:"巢狀",none:"無",norm:"標準化",normal:"常規",number:"數字",orbit:"環繞",outline:"描邊",overlay:"疊加",panel:"面板",paper:"紙面",pie:"餅圖",pill:"膠囊",pincer:"夾擊",pink:"粉色",plain:"純淨",portrait:"豎圖",pressure:"壓力",primary:"主色",pyramid:"金字塔",quote:"引語",radar:"雷達",radial:"放射",radius:"半徑",ratio:"比例",right:"右側",ring:"環形",roman:"羅馬數字",rounded:"圓角",row:"橫排",rows:"多行",scatter:"散點",score:"評分",segment:"分段",segments:"分段",series:"系列",side:"側邊",solid:"純色",source:"來源",spark:"亮點",spiral:"螺旋",split:"分欄","split-left":"左分欄","split-right":"右分欄",slope:"斜率",square:"正方形",stack:"堆疊",stacked:"堆疊",step:"階梯",steps:"步驟",table:"表格",tags:"標籤",tech:"科技",text:"文字",ticket:"票卡",timeline:"時間軸",tl:"左上",to:"終點",top:"頂部","top-left":"左上",total:"總計",tr:"右上",treemap:"矩形樹圖",underline:"下劃線",unicorn:"動態視覺",vapor:"霧化",vertical:"縱向",violet:"紫色",vs:"對比",waterfall:"瀑布",warm:"暖色",white:"白色",year:"年度",yearly:"按年",yellow:"黃色",zigzag:"折線"};function ii(t){return typeof t!="string"?t:t.replace(/\s+/g," ").trim()}function ni(t){return typeof t=="string"?ii(t):Array.isArray(t)?t.map(ni):!t||typeof t!="object"?t:Object.fromEntries(Object.entries(t).map(([l,c])=>[l,l==="value"||l==="image"?c:ni(c)]))}function Nr(t){return Array.isArray(t)?t.map((l,c)=>zr(l,c)):ni(t)}function zr(t,l=0){return Array.isArray(t)?Er(t)?{value:t.map(c=>c),label:`配色 ${l+1}`,color:Cr(t)}:{value:t[0],label:di(t[1]??t[0],t[0],l),image:t[2]||"",color:t[3]||""}:t&&typeof t=="object"&&"value"in t?{...ni(t),value:t.value,label:di(t.label??t.value,t.value,l)}:{value:t,label:di(t,t,l)}}function di(t,l=t,c=0){if(l==null||t==null)return"隱藏";if(Gn(l)&&(t===l||String(t).trim()===String(l).trim()))return`顏色 ${c+1}`;let k=ii(String(t)),d=Wn(k);if(d)return d;let u=Wn(l);return u&&(k===String(l)||/^[A-Za-z0-9_./ -]+$/.test(k))?u:k.replace(/\bYES\b/g,"是").replace(/\bNO\b/g,"否").replace(/\b8-bit\b/gi,"畫素")}function Wn(t){if(t==null)return"隱藏";let l=String(t).trim().toLowerCase();return wr[l]||null}function Gn(t){return/^#[0-9a-f]{3,8}$/i.test(String(t||""))}function Er(t){return t.length>1&&t.every(l=>Gn(l))}function Cr(t){let l=Math.max(1,t.length);return l===1?t[0]:`linear-gradient(135deg, ${t.map((k,d)=>{let u=d/l*100,_=(d+1)/l*100;return`${k} ${u}% ${_}%`}).join(", ")})`}function Qn(t,l={}){let c=new Map;return(t||[]).map((k,d)=>{let u=Fr(k,{...l,index:d}),_=u.publicKey||u.key,x=c.get(_)||0;return c.set(_,x+1),x?{...u,publicKey:`${_}${x+1}`}:u})}function Fr(t,l={}){let c=t.key||t.prop,k=ii(t.label||c),d=ii(t.desc||t.description||t.describe),u=Sr(c,{...t,label:k,desc:d},l),{description:_,describe:x,publicLabel:g,...h}=t;return{...h,key:c,publicKey:u,label:k,desc:d,options:Nr(t.options)}}function Sr(t,l={}){if(!t)return t;let c=Lr(t);if(c)return c;let k=t;for(let[u,_]of kr)k=Ir(k,u,_);if(k!==t)return Mr(k);let d=`${l.label||""} ${l.desc||l.description||""}`;return/(?:状态等级|狀態等級)|(?:状态强度|狀態強度)/.test(d)?t.startsWith("show")?"showStatusRating":"statusLevel":/(?:分类|分類)/.test(d)&&t.endsWith("Count")?"categoryCount":/(?:条目|條目)/.test(d)&&t.endsWith("Count")?"itemCount":/(?:数值|數值)/.test(d)&&/^show/i.test(t)?"showValueLabels":t}function Lr(t){return{dealCount:"exampleCount",showDeals:"showExamples",riskCount:"statusItemCount",showRisk:"showStatus",showRating:"showStatusRating",showLevel:"showStatusLevel",showValuation:"showMetricMarker",showTracklist:"showItemList",trackCount:"itemCount",recordSide:"visualSide",sceneCount:"contentItemCount",showScenes:"showItemTags",quarterCount:"timeColumnCount",assetCount:"categoryCount",flowStageCount:"stepCount",segmentCount:"segmentCount",tagCount:"tagCount",showShareBar:"showShareBar"}[t]||null}function Ir(t,l,c){let k=new RegExp(`(^|[_-])${l}(?=$|[_-])`,"ig"),d=new RegExp(`${Xn(l)}(?=$|[A-Z])`,"g");return t.replace(k,(u,_)=>`${_}${c}`).replace(d,Xn(c))}function Mr(t){return t&&`${t[0].toLowerCase()}${t.slice(1)}`}function Xn(t){return t&&`${t[0].toUpperCase()}${t.slice(1)}`}import{jsx as tm,jsxs as lm}from"react/jsx-runtime";function Zn(t,{themeKey:l,layoutPrefix:c,keepTextControls:k=!1}){return(t||[]).map((d,u)=>{let _=u+1,x=d.meta||{},g=d.slot||d.id||d.key||x.id||`page${_}`,h={...d.defaultProps||d.defaults||{},...d.initial||d.initialProps||{}};return{key:`${l}_page${String(_).padStart(3,"0")}`,themeKey:l,pageNumber:_,layout:`${c}-${String(_).padStart(3,"0")}`,slot:g,label:d.label||d.name||d.title||x.label||x.title||g,Component:d.Component||d.component||d.Comp||d.C,controls:Dr(d.controls||d.spec?.controls||x.controls||[],h,{keepTextControls:k}),defaultProps:h,staticHtml:d.staticHtml||!1,bgClass:d.bgClass||d.backgroundClass||"",...d.numberBounds||d.spec?.numberBounds||x.numberBounds?{numberBounds:d.numberBounds||d.spec?.numberBounds||x.numberBounds}:{}}})}var Kn=new Set(["text","string","input","url","email","textarea","multiline"]),Ar=new Set,Tr=new Set(["activeIndex","currentIndex","emphasisIndex","featureIndex","focusCol","focusIndex","highlightCol","highlightIndex","highlightRowIndex"]);function Dr(t,l={},c={}){let d=(t||[]).filter(_=>!Rr(_,c)).map(_=>({..._,min:ri(_?.min,l),max:ri(_?.max,l)})).map(_=>qr(_,l)),u=d.map(_=>Pr(_,d,l));return Qn(u)}function Rr(t,l={}){let c=String(t?.type||"").toLowerCase();return l.keepTextControls&&Kn.has(c)?!1:Kn.has(c)||Ar.has(c)}function qr(t,l){if(t?.max!=null||!Jn(t))return t;let c=ri(t?.maxFrom,l);return c==null?t:{...t,max:c}}function Pr(t,l,c){if(t?.max!=null)return t;if($r(t)){let d=Vr(l,t),u=Number(d?.max);if(Number.isFinite(u)){let _=Number(t?.min??0);return{...t,max:Br(u,_),maxFromKey:t.maxFromKey||d.key}}}let k=ri(t?.maxFrom,c);return k==null?t:{...t,max:k}}function Jn(t){return String(t?.type||"").toLowerCase()==="number"&&(String(t?.key||"").toLowerCase().includes("count")||t?.key==="columns")}function $r(t){return String(t?.type||"").toLowerCase()==="number"&&Tr.has(t?.key)}function Br(t,l){return Math.max(l,t-(l===0?1:0))}function Vr(t,l){return l?l.maxFromKey?t.find(c=>c.key===l.maxFromKey)||null:l.key==="focusCol"||l.key==="highlightCol"?t.find(c=>["colCount","columnCount","columns"].includes(c.key))||null:l.key==="featureIndex"?t.find(c=>c.key==="itemCount")||null:t.find(Jn)||null:null}function ri(t,l){return typeof t=="function"?t(l):t}import si from"react";(()=>{if(typeof HTMLElement>"u"||typeof customElements>"u")return;let t=".image-slots.state.json",l="dashi-ppt-image-slots",c=1200,k=["image/png","image/jpeg","image/webp","image/avif","video/mp4","video/webm","video/quicktime","video/x-m4v","video/ogg"],d=new Set,u={},_=new Set,x=!1,g=null;function h(){return g||(g=fetch(t).then(i=>i.ok?i.json():null).then(i=>{let a=M();if(a&&(i=Object.assign({},i||{},a)),i&&typeof i=="object"){let e=Object.assign({},i,u);for(let o in u)e[o]&&!e[o].u&&i[o]&&(e[o].u=typeof i[o]=="string"?i[o]:i[o].u);for(let o of _)delete e[o];u=e}_.clear()}).catch(()=>{}).then(()=>{x=!0,d.forEach(i=>i())}),g)}let C=!1,P=!1;function I(){if(C){P=!0;return}let i=window.omelette&&window.omelette.writeFile;if(!i){F();return}C=!0,Promise.resolve(i(t,JSON.stringify(u))).catch(()=>{}).then(()=>{C=!1,P&&(P=!1,I())})}function A(){let i=window.__deckViewModel?.model?.state?.__deckSignature||location.pathname||"deck";return l+":"+i}function M(){try{return JSON.parse(localStorage.getItem(A())||"{}")||{}}catch{return{}}}function F(){try{localStorage.setItem(A(),JSON.stringify(u||{}))}catch{}}let D=5,q=i=>Math.max(1,Math.min(D,i));function N(i){let a=u[i];return a?typeof a=="string"?{u:a,kind:a.startsWith("data:video/")?"video":"image",s:1,x:0,y:0}:{...a,kind:a.kind||(String(a.u||"").startsWith("data:video/")?"video":"image")}:null}function z(i,a){i&&(a?(u[i]=a,_.delete(i)):(delete u[i],x||_.add(i)),d.forEach(e=>e()),x?I():h().then(I))}async function L(i,a){if(i.type.startsWith("video/"))return y(i);let e=await createImageBitmap(i);try{let o=Math.min(c,Math.max(1,Math.round(a*2))||c),r=Math.min(1,o/Math.max(e.width,e.height)),b=Math.max(1,Math.round(e.width*r)),R=Math.max(1,Math.round(e.height*r)),E=document.createElement("canvas");return E.width=b,E.height=R,E.getContext("2d").drawImage(e,0,0,b,R),E.toDataURL("image/webp",.85)}finally{e.close&&e.close()}}function y(i){return new Promise((a,e)=>{let o=new FileReader;o.onload=()=>a(o.result),o.onerror=()=>e(o.error||new Error("read failed")),o.readAsDataURL(i)})}function w(i){let a=i.closest&&i.closest(".slide");return a?a.classList.contains("active")||a.hasAttribute("data-deck-active"):!0}function v(i){let a=String(i||"");return/\.(mp4|webm|mov|m4v|ogv)(?:[?#].*)?$/i.test(a)?a.replace(/\.(mp4|webm|mov|m4v|ogv)(?:[?#].*)?$/i,".poster.jpg"):""}function m(i){i&&(i.pause?.(),i.style.display="none",i.removeAttribute("src"),i.load?.())}let f=":host{display:inline-block;position:relative;vertical-align:top;  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}.frame img,.frame video{position:absolute;max-width:none;transform:translate(-50%,-50%);  -webkit-user-drag:none;user-select:none;touch-action:none}.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;  cursor:grab;touch-action:none}:host([data-panning]) .spill{cursor:grabbing}.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;  pointer-events:none;-webkit-user-drag:none;user-select:none;  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);  transform:translate(-50%,-50%)}.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}:host([data-reframe]){z-index:10}:host([data-reframe]) .spill{display:block}:host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;  cursor:pointer;user-select:none}.empty svg{opacity:.45}.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}.empty .sub{font-size:11px}.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}:host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;  background:rgba(201,100,66,.10)}.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);  transition:border-color .12s}:host([data-over]) .ring{border-color:#c96442}:host([data-filled]) .ring{display:none}.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;  white-space:nowrap}:host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl  {opacity:1;pointer-events:auto}.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;  backdrop-filter:blur(6px)}.ctl button:hover{background:rgba(0,0,0,.8)}.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}",n='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';class s extends HTMLElement{static get observedAttributes(){return["shape","radius","mask","fit","position","placeholder","src","id"]}constructor(){super();let a=this.attachShadow({mode:"open"});a.innerHTML="<style>"+f+'</style><div class="frame" part="frame">  <img class="main" part="image" alt="" draggable="false" style="display:none">  <video part="video" muted playsinline loop autoplay preload="metadata" style="display:none"></video>  <img class="poster" alt="" draggable="false" data-video-poster style="display:none">  <div class="empty" part="empty">'+n+'    <div class="cap"></div>    <div class="sub">or <u>browse files</u></div></div>  <div class="ring" part="ring"></div></div><div class="spill">  <img class="ghost" alt="" draggable="false">  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div></div><div class="ctl"><button data-act="replace" title="Replace media">Replace</button>  <button data-act="clear" title="Remove media">Remove</button></div>',this._frame=a.querySelector(".frame"),this._ring=a.querySelector(".ring"),this._img=a.querySelector(".frame img.main"),this._video=a.querySelector(".frame video"),this._poster=a.querySelector(".frame img.poster"),this._empty=a.querySelector(".empty"),this._cap=a.querySelector(".cap"),this._sub=a.querySelector(".sub"),this._spill=a.querySelector(".spill"),this._ghost=a.querySelector(".ghost"),this._err=null,this._input=null,this._depth=0,this._gen=0,this._view={s:1,x:0,y:0},this._subFn=()=>this._render(),this.addEventListener("pointerdown",e=>e.stopPropagation()),this.addEventListener("mousedown",e=>e.stopPropagation()),this._empty.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this._pickFile()}),a.addEventListener("click",e=>{e.stopPropagation();let o=e.target&&e.target.getAttribute&&e.target.getAttribute("data-act");o==="replace"&&(this._exitReframe(!0),this._pickFile()),o==="clear"&&(this._exitReframe(!1),this._gen++,this._local=null,this.id?z(this.id,null):this._render(),this._notifyHost(null)),!o&&!this._empty.contains(e.target)&&e.target!==this._input&&this._pickFile()}),this._img.addEventListener("load",()=>this._applyView()),this._video.addEventListener("loadedmetadata",()=>this._applyView()),this.addEventListener("dblclick",e=>{!this.hasAttribute("data-editable")||!this._reframes()||(e.preventDefault(),this.hasAttribute("data-reframe")?this._exitReframe(!0):this._enterReframe())}),this._spill.addEventListener("pointerdown",e=>{if(e.button!==0||!this.hasAttribute("data-reframe"))return;e.preventDefault(),e.stopPropagation(),this._spill.setPointerCapture(e.pointerId);let o=this.getBoundingClientRect(),r=o.width||1,b=o.height||1,R=e.target.getAttribute&&e.target.getAttribute("data-c"),E;if(R){let B=this._img.naturalWidth||1,S=this._img.naturalHeight||1,V=Math.max(r/B,b/S),O=R.includes("e")?1:-1,U=R.includes("s")?1:-1,K=this._view.s,sa=B*V*K,dt=S*V*K,_l=(50+this._view.x)/100*r,ai=(50+this._view.y)/100*b,ei=_l-O*sa/2,Oo=ai-U*dt/2,Xt=Math.hypot(sa,dt),Wo=O*sa/Xt,ti=U*dt/Xt;E=li=>{let pi=(li.clientX-o.left-ei)*Wo+(li.clientY-o.top-Oo)*ti,oi=q(K*pi/Xt),Xo=Xt*oi/K;this._view.s=oi,this._view.x=(ei+Wo*Xo/2)/r*100-50,this._view.y=(Oo+ti*Xo/2)/b*100-50,this._clampView(),this._applyView()}}else{this.setAttribute("data-panning","");let B={px:e.clientX,py:e.clientY,x:this._view.x,y:this._view.y};E=S=>{this._view.x=B.x+(S.clientX-B.px)/r*100,this._view.y=B.y+(S.clientY-B.py)/b*100,this._clampView(),this._applyView()}}let T=()=>{try{this._spill.releasePointerCapture(e.pointerId)}catch{}this._spill.removeEventListener("pointermove",E),this._spill.removeEventListener("pointerup",T),this._spill.removeEventListener("pointercancel",T),this.removeAttribute("data-panning"),this._dragUp=null};this._dragUp=T,this._spill.addEventListener("pointermove",E),this._spill.addEventListener("pointerup",T),this._spill.addEventListener("pointercancel",T)}),this.addEventListener("wheel",e=>{if(!this.hasAttribute("data-reframe"))return;e.preventDefault();let o=this.getBoundingClientRect(),r=(e.clientX-o.left)/o.width*100-50,b=(e.clientY-o.top)/o.height*100-50,R=this._view.s,E=q(R*Math.pow(1.0015,-e.deltaY));if(E===R)return;let T=E/R;this._view.s=E,this._view.x=r*(1-T)+this._view.x*T,this._view.y=b*(1-T)+this._view.y*T,this._clampView(),this._applyView()},{passive:!1})}connectedCallback(){!this.id&&!s._warned&&(s._warned=!0,console.warn("<image-slot> without an id will not persist its dropped image.")),this.addEventListener("dragenter",this),this.addEventListener("dragover",this),this.addEventListener("dragleave",this),this.addEventListener("drop",this),d.add(this._subFn),this._ro=new ResizeObserver(()=>this._render()),this._ro.observe(this);let a=this.closest(".slide");a&&typeof MutationObserver<"u"&&(this._activeObserver=new MutationObserver(()=>{this.isConnected&&this._render()}),this._activeObserver.observe(a,{attributes:!0,attributeFilter:["class","data-deck-active"]})),h(),this._render()}disconnectedCallback(){d.delete(this._subFn),this.removeEventListener("dragenter",this),this.removeEventListener("dragover",this),this.removeEventListener("dragleave",this),this.removeEventListener("drop",this),this._ro&&(this._ro.disconnect(),this._ro=null),this._activeObserver&&(this._activeObserver.disconnect(),this._activeObserver=null),this._dropPendingInput(),this._exitReframe(!1)}_pickFile(){this._dropPendingInput();let a=document.createElement("input");a.type="file",a.accept=k.join(","),a.hidden=!0,a.addEventListener("change",()=>{let e=a.files&&a.files[0];a.remove(),this._input===a&&(this._input=null),e&&this._ingest(e)},{once:!0}),this._input=a,this.shadowRoot.appendChild(a),a.click()}_dropPendingInput(){this._input&&(this._input.remove(),this._input=null)}_enterReframe(){this.hasAttribute("data-reframe")||(this.setAttribute("data-reframe",""),this._applyView(),this._outside=a=>{a.composedPath&&a.composedPath().includes(this)||this._exitReframe(!0)},this._esc=a=>{a.key==="Escape"&&this._exitReframe(!0)},document.addEventListener("pointerdown",this._outside,!0),document.addEventListener("keydown",this._esc,!0))}_exitReframe(a){this.hasAttribute("data-reframe")&&(this._dragUp&&this._dragUp(),this.removeAttribute("data-reframe"),this.removeAttribute("data-panning"),this._outside&&document.removeEventListener("pointerdown",this._outside,!0),this._esc&&document.removeEventListener("keydown",this._esc,!0),this._outside=this._esc=null,a&&this._commitView())}attributeChangedCallback(){this.shadowRoot&&this._render()}handleEvent(a){if(a.type==="dragenter"||a.type==="dragover")a.preventDefault(),a.stopPropagation(),a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),a.type==="dragenter"&&this._depth++,this.setAttribute("data-over","");else if(a.type==="dragleave")--this._depth<=0&&(this._depth=0,this.removeAttribute("data-over"));else if(a.type==="drop"){a.preventDefault(),a.stopPropagation(),this._depth=0,this.removeAttribute("data-over");let e=a.dataTransfer&&a.dataTransfer.files&&a.dataTransfer.files[0];e&&this._ingest(e)}}async _ingest(a){if(this._setError(null),!a||k.indexOf(a.type)<0){this._setError("Drop a PNG, JPEG, WebP, AVIF image, or MP4/WebM/MOV/M4V/OGV video.");return}let e=++this._gen;try{let o=this.clientWidth||this.offsetWidth||c,r=await L(a,o);if(e!==this._gen)return;this._exitReframe(!1);let b={u:r,kind:a.type.startsWith("video/")?"video":"image",s:1,x:0,y:0};z(this.id||"",b),this.id||(this._local=b,this._render()),this._notifyHost(b)}catch(o){if(e!==this._gen)return;this._setError("Could not read that image."),console.warn("<image-slot> ingest failed:",o)}}_notifyHost(a){this.id&&this.dispatchEvent(new CustomEvent("dashi-image-slot-change",{bubbles:!0,composed:!0,detail:{id:this.id,value:a?{src:a.u,kind:a.kind||"image"}:null}}))}_setError(a){if(this._err&&(this._err.remove(),this._err=null),!a)return;let e=document.createElement("div");e.className="err",e.textContent=a,this.shadowRoot.appendChild(e),this._err=e,setTimeout(()=>{this._err===e&&(e.remove(),this._err=null)},3e3)}_reframes(){return this.hasAttribute("data-filled")&&this._mediaKind!=="video"&&(this.getAttribute("fit")||"cover")==="cover"}_geom(){let a=this._img.naturalWidth,e=this._img.naturalHeight,o=this.clientWidth,r=this.clientHeight;return!a||!e||!o||!r?null:{iw:a,ih:e,fw:o,fh:r,base:Math.max(o/a,r/e)}}_clampView(){let a=this._geom();if(!a)return;let e=Math.max(0,(a.iw*a.base*this._view.s/a.fw-1)*50),o=Math.max(0,(a.ih*a.base*this._view.s/a.fh-1)*50);this._view.x=Math.max(-e,Math.min(e,this._view.x)),this._view.y=Math.max(-o,Math.min(o,this._view.y))}_applyView(){let a=this._geom(),e=this.getAttribute("fit")||"cover";if(e!=="cover"||!a){this._img.style.width="100%",this._img.style.height="100%",this._img.style.left="50%",this._img.style.top="50%",this._img.style.objectFit=e,this._img.style.objectPosition=this.getAttribute("position")||"50% 50%";return}let o=a.base*this._view.s,r=a.iw*o/a.fw*100+"%",b=a.ih*o/a.fh*100+"%",R=50+this._view.x+"%",E=50+this._view.y+"%";this._img.style.width=r,this._img.style.height=b,this._img.style.left=R,this._img.style.top=E,this._img.style.objectFit="",this._spill.style.width=r,this._spill.style.height=b,this._spill.style.left=R,this._spill.style.top=E}_commitView(){let a={s:this._view.s,x:this._view.x,y:this._view.y};this._userUrl&&(a.u=this._userUrl),this._mediaKind&&(a.kind=this._mediaKind),this.id?z(this.id,a):this._local=a}_render(){try{this._renderImpl()}catch(a){console.error("[image-slot] render failed",a)}}_renderImpl(){w(this)||this._dropPendingInput();let a=this.getAttribute("mask"),e=(this.getAttribute("shape")||"rounded").toLowerCase(),o="";if(e==="circle")o="50%";else if(e==="pill")o="9999px";else if(e==="rounded"){let S=parseFloat(this.getAttribute("radius"));o=(Number.isFinite(S)?S:12)+"px"}this._frame.style.borderRadius=a?"":o,this._frame.style.clipPath=a||"",this._ring.style.borderRadius=a?"":o,this._ring.style.display=a?"none":"";let r=!!(window.omelette&&window.omelette.writeFile||window.__deckViewModel);this.toggleAttribute("data-editable",r),this._sub.style.display=r?"":"none";let b=this.id?N(this.id):this._local;b&&b.u&&!/^data:(image|video)\//i.test(b.u)&&(b=null);let R=this.getAttribute("src")||"";this._userUrl=b&&b.u||null;let E=this._userUrl||R,T=b&&b.kind||(String(E).startsWith("data:video/")||/\.(mp4|webm|mov|m4v|ogv)(?:[?#].*)?$/i.test(String(E))?"video":"image");this._mediaKind=T,this.hasAttribute("data-reframe")||(this._view={s:b&&Number.isFinite(b.s)?q(b.s):1,x:b&&Number.isFinite(b.x)?b.x:0,y:b&&Number.isFinite(b.y)?b.y:0});let B=typeof window<"u"&&window.__deckI18n?.isEn;if(this._cap.textContent=B?"Upload":this.getAttribute("placeholder")||"Drop media",E){if(T==="video")if(this._exitReframe(!1),this._img.style.display="none",this._img.removeAttribute("src"),this._ghost.removeAttribute("src"),w(this))this._poster.style.display="none",this._poster.removeAttribute("src"),this._video.getAttribute("src")!==E&&(this._video.src=E),this._video.style.display="block",this._video.style.width="100%",this._video.style.height="100%",this._video.style.left="50%",this._video.style.top="50%",this._video.style.objectFit=this.getAttribute("fit")||"cover",this._video.style.objectPosition=this.getAttribute("position")||"50% 50%",this._video.readyState<2&&this._video.load(),this._video.play?.().catch(()=>{});else{m(this._video);let S=v(E);this._poster.style.width="100%",this._poster.style.height="100%",this._poster.style.left="50%",this._poster.style.top="50%",this._poster.style.objectFit=this.getAttribute("fit")||"cover",this._poster.style.objectPosition=this.getAttribute("position")||"50% 50%",S?(this._poster.src=S,this._poster.style.display="block"):(this._poster.removeAttribute("src"),this._poster.style.display="block")}else this._img.getAttribute("src")!==E&&(this._img.src=E,this._ghost.src=E),m(this._video),this._poster.style.display="none",this._poster.removeAttribute("src"),this._img.style.display="block",this._clampView(),this._applyView();this._empty.style.display="none",this.setAttribute("data-filled","")}else this._img.style.display="none",this._img.removeAttribute("src"),m(this._video),this._poster.style.display="none",this._poster.removeAttribute("src"),this._ghost.removeAttribute("src"),this._empty.style.display="flex",this.removeAttribute("data-filled")}}customElements.get("image-slot")||customElements.define("image-slot",s)})();import rl from"react";import{jsx as pa,jsxs as Bt}from"react/jsx-runtime";var ar=rl.createContext(null),Hr=`
  --acl-yellow:#ECEF35;
  --acl-lilac:#E7E6EE;
  --acl-ink:#16150F;
  --acl-pink:#FF3D97;
  --acl-red:#E83B22;
  --acl-blue:#8DBEEC;
  --acl-paper:#FBFAF4;
  --acl-font-cn:"Noto Sans TC",-apple-system,sans-serif;
  --acl-font-num:"Anton","Noto Sans TC",sans-serif;
  --acl-font-mono:"Noto Sans TC",-apple-system,sans-serif;
  --acl-font-hand:"Noto Sans TC",-apple-system,sans-serif;
`;function er(){return pa("style",{children:`
      .acl-root{ ${Hr} }
      .acl-root *{ box-sizing:border-box; }

      /* \u2500\u2500 doodles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .acl-doodle{ position:absolute; pointer-events:none; color:var(--acl-ink);
        animation:acl-wiggle 6s ease-in-out infinite; transform-origin:center; }
      .acl-doodle--spark{ color:var(--acl-ink); }
      @keyframes acl-wiggle{ 0%,100%{ transform:rotate(var(--r,0deg)); }
        50%{ transform:rotate(calc(var(--r,0deg) + 2deg)); } }
      @media (prefers-reduced-motion:reduce){ .acl-doodle{ animation:none; } }

      /* \u2500\u2500 inline marker highlight \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .acl-hl{ background:var(--acl-blue); padding:0 .14em; white-space:nowrap;
        box-decoration-break:clone; -webkit-box-decoration-break:clone; }

      /* \u2500\u2500 sticker label (one- or two-tone) \u2500\u2500\u2500\u2500\u2500\u2500 */
      .acl-sticker{ display:inline-flex; align-items:stretch; line-height:1;
        font-family:var(--acl-font-mono); font-weight:700; white-space:nowrap;
        box-shadow:2px 3px 0 rgba(22,21,15,.18); }
      .acl-sticker b, .acl-sticker span{ padding:7px 11px 6px; display:flex;
        align-items:center; font-weight:700; }
      .acl-sticker b{ color:var(--acl-ink); }
      .acl-sticker span{ font-weight:400; }

      /* \u2500\u2500 meta tag (data chip) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .acl-metatag{ display:flex; flex-direction:column; gap:3px; }
      .acl-metatag .k{ font-family:var(--acl-font-mono); font-size:15px;
        letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.5); }
      .acl-metatag .v{ font-family:var(--acl-font-cn); font-weight:700;
        font-size:26px; color:var(--acl-ink); }

      /* \u2500\u2500 adaptive image slot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .acl-slot{ position:relative; display:inline-block; transition:width .3s,height .3s; }
      .acl-slot__frame{ position:relative; width:100%; height:100%; overflow:hidden;
        background:var(--acl-paper); border:8px solid var(--acl-paper);
        box-shadow:4px 6px 0 rgba(22,21,15,.2), 0 10px 26px rgba(22,21,15,.14); }
      .acl-slot__img{ width:100%; height:100%; object-fit:cover; display:block; }
      .acl-slot__empty{ position:absolute; inset:0; display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:6px; cursor:pointer;
        background:var(--acl-paper);
        border:1.5px dashed rgba(22,21,15,.25); }
      .acl-slot__icon{ opacity:.45; color:rgba(22,21,15,.85); }
      .acl-slot__cap{ font-family:var(--acl-font-cn); font-size:13px; font-weight:500;
        letter-spacing:.01em; color:rgba(22,21,15,.85); text-align:center; padding:0 8px;
        max-width:90%; }
      .acl-slot__sub{ font-family:var(--acl-font-cn); font-size:11px;
        color:rgba(22,21,15,.62); }
      .acl-slot__sub u{ text-underline-offset:2px; text-decoration-color:rgba(22,21,15,.25); }
      .acl-slot__empty:hover .acl-slot__sub u{ color:rgba(22,21,15,.85);
        text-decoration-color:currentColor; }
      .acl-slot--drag .acl-slot__empty{ background:var(--acl-yellow);
        border-color:var(--acl-ink); }
      .acl-slot__sticker{ position:absolute; left:50%; bottom:-14px; transform:translateX(-50%);
        z-index:3; }
      .acl-slot__hint{ position:absolute; top:7px; right:7px; z-index:3; opacity:0;
        font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.04em;
        background:var(--acl-ink); color:var(--acl-paper); padding:3px 6px;
        transition:opacity .15s; }
      .acl-slot:hover .acl-slot__hint{ opacity:.9; }
    `})}function p({kind:t="spark",size:l=54,color:c,fill:k="currentColor",stroke:d,strokeWidth:u=4,rotate:_=0,style:x={},className:g=""}){let h={fill:"none",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"},C={fill:k,stroke:d||"none",strokeWidth:d?u:0,strokeLinejoin:"round"},P={arrow:Bt("g",{...h,children:[pa("path",{d:"M6 18 Q40 6 73 37"}),pa("path",{d:"M57 32 L73 37 L67 21"})]}),arrowS:Bt("g",{...h,children:[pa("path",{d:"M7 15 Q37 17 72 41"}),pa("path",{d:"M56 37 L72 41 L66 24"})]}),loop:Bt("g",{...h,children:[pa("path",{d:"M58 18 C48 8, 24 10, 20 28 C17 44, 40 52, 56 42"}),pa("path",{d:"M49 53 L56 42 L43 43"})]}),spark:pa("g",{...C,children:pa("path",{d:"M27 2 C29 18, 32 21, 52 27 C32 33, 29 36, 27 52 C25 36, 22 33, 2 27 C22 21, 25 18, 27 2 Z"})}),star:pa("g",{...C,children:pa("path",{d:"M27 3 L34 20 L52 21 L38 33 L43 51 L27 40 L11 51 L16 33 L2 21 L20 20 Z"})}),heart:pa("g",{...C,children:pa("path",{d:"M27 49 C7 35, 7 15, 21 15 C26 15, 27 21, 27 24 C27 21, 28 15, 33 15 C47 15, 47 35, 27 49 Z"})})};return pa("svg",{className:`acl-doodle ${t==="spark"||t==="star"||t==="heart"?"acl-doodle--spark":""} ${g}`,viewBox:"0 0 84 60",width:l,height:l*60/84,"aria-hidden":"true",style:{"--r":`${_}deg`,color:c,...x},children:P[t]})}function H({label:t,sub:l,color:c="var(--acl-yellow)",subColor:k,rotate:d=-3,size:u=16,style:_={}}){return Bt("span",{className:"acl-sticker",style:{transform:`rotate(${d}deg)`,fontSize:u,..._},children:[pa("b",{style:{background:c},children:t}),l&&pa("span",{style:{background:k||c,color:k?"var(--acl-paper)":"var(--acl-ink)"},children:l})]})}function kt({k:t,v:l}){return Bt("div",{className:"acl-metatag",children:[pa("div",{className:"k",children:t}),pa("div",{className:"v",children:l})]})}function mi(t){t&&(t.pause?.(),t.getAttribute("src")&&t.removeAttribute("src"),t.load?.())}function Or({src:t}){let l=rl.useRef(null);return rl.useLayoutEffect(()=>{let c=l.current;if(!c)return;let k=String(t||""),d=c.getAttribute("src")||"";return d&&d!==k&&mi(c),k&&c.getAttribute("src")!==k?c.setAttribute("src",k):!k&&c.getAttribute("src")&&mi(c),k&&(c.readyState<2&&c.load?.(),c.play?.().catch(()=>{})),()=>{c.getAttribute("src")===k&&mi(c)}},[t]),pa("video",{ref:l,className:"acl-slot__img",muted:!0,playsInline:!0,loop:!0,autoPlay:!0,preload:"metadata"})}function W({id:t,box:l=300,ratio:c=.8,placeholder:k="上傳",sticker:d,rotate:u=0,accent:_="var(--acl-paper)"}){let x=typeof window<"u"&&window.__deckI18n?.isEn,g="acl-slot-"+t,h=rl.useContext(ar),C=!!(h?.get||h?.set),P=n=>{if(!n)return null;let s=typeof n=="string"?{src:n}:n;if(!s||typeof s!="object"||!s.src)return null;let i=String(s.src),a=s.kind||(String(s.type||i).startsWith("video/")||i.startsWith("data:video/")||/\.(mp4|m4v|mov|webm|ogv)(?:[?#].*)?$/i.test(i)?"video":"image");return{...s,src:i,kind:a,w:s.w||s.width||l,h:s.h||s.height||Math.round(l/c)}},I=()=>{if(C)return P(h?.get?.(t,0));try{let n=localStorage.getItem(g);return n?JSON.parse(n):null}catch{return null}},[A,M]=rl.useState(I),[F,D]=rl.useState(!1),q=rl.useRef(null);rl.useEffect(()=>{M(I())},[g,t,C,h]);let N=n=>{if(M(n),h?.set)h.set(t,0,n);else try{n?localStorage.setItem(g,JSON.stringify(n)):localStorage.removeItem(g)}catch{}},z=n=>{if(!n||!/^(image|video)\//.test(n.type||""))return;if(C&&h?.drop){h.drop(t,0,n);return}let s=new FileReader;s.onload=()=>{if(n.type.startsWith("video/")){let a=document.createElement("video");a.preload="metadata";let e=()=>{a.onloadedmetadata=null,a.onerror=null,a.pause(),a.removeAttribute("src"),a.load()};a.onloadedmetadata=()=>{let o={w:a.videoWidth||l,h:a.videoHeight||l};e(),N({src:s.result,...o,kind:"video",type:n.type})},a.onerror=()=>{e(),N({src:s.result,w:l,h:l,kind:"video",type:n.type})},a.src=s.result;return}let i=new Image;i.onload=()=>N({src:s.result,w:i.naturalWidth,h:i.naturalHeight,kind:"image",type:n.type}),i.src=s.result},s.readAsDataURL(n)},L=n=>{n.stopPropagation()},y=n=>{n.stopPropagation(),q.current&&q.current.click()},w=A||I(),v=w?w.w/w.h:c,m,f;return v>=1?(m=l,f=Math.round(l/v)):(f=l,m=Math.round(l*v)),Bt("div",{className:"acl-slot"+(F?" acl-slot--drag":""),style:{width:m,height:f,transform:`rotate(${u}deg)`},onPointerDown:L,onMouseDown:L,onClick:y,onDragOver:n=>{n.preventDefault(),n.stopPropagation(),D(!0)},onDragLeave:n=>{n.stopPropagation(),D(!1)},onDrop:n=>{n.preventDefault(),n.stopPropagation(),D(!1),z(n.dataTransfer.files&&n.dataTransfer.files[0])},children:[Bt("div",{className:"acl-slot__frame",style:{borderColor:_},children:[w?w.kind==="video"?pa(Or,{src:w.src}):pa("img",{className:"acl-slot__img",src:w.src,alt:""}):Bt("div",{className:"acl-slot__empty",children:[Bt("svg",{className:"acl-slot__icon",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[pa("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),pa("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),pa("path",{d:"m21 15-5-5L5 21"})]}),pa("div",{className:"acl-slot__cap",children:x?"Upload":k}),Bt("div",{className:"acl-slot__sub",children:["or ",pa("u",{children:"browse files"})]})]}),w&&pa("div",{className:"acl-slot__hint",onClick:n=>{n.stopPropagation(),N(null)},children:x?"Clear \u2715":"清除 \u2715"})]}),d&&pa("div",{className:"acl-slot__sticker",children:pa(H,{...d})}),pa("input",{ref:q,type:"file",accept:"image/*,video/mp4,video/webm,video/quicktime,video/*",style:{display:"none"},onClick:n=>n.stopPropagation(),onChange:n=>{z(n.target.files&&n.target.files[0]),n.target.value=""}})]})}var fi={};Y(fi,{controls:()=>Wr,default:()=>xl,defaults:()=>Ur});import Yr from"react";import{jsx as Ea,jsxs as wt}from"react/jsx-runtime";var jr=`
  .supp-cover-root{
    --yellow:#F2E70C; --pink:#FF4D97; --red:#E63329; --lilac:#E7E6F0;
    --blue:#8FB7FF; --ink:#16150F; --paper:#FBFAF4;
  }
  .supp-cover-root *{box-sizing:border-box;margin:0;padding:0;}
  .supp-cover{position:absolute;inset:0;overflow:hidden;
    font-family:'Noto Sans TC',sans-serif;color:var(--ink);}
  .supp-h{font-family:'Noto Sans TC',sans-serif;font-weight:900;line-height:.96;letter-spacing:-.01em;}
  .supp-en{font-family:'Anton',sans-serif;letter-spacing:.02em;text-transform:uppercase;}
  .supp-hand{font-family:'Caveat',cursive;font-weight:700;}
  .supp-idx{position:absolute;bottom:46px;right:60px;font-family:'Anton',sans-serif;
    font-size:26px;letter-spacing:.12em;color:var(--ink);opacity:.5;z-index:9;}
  .supp-idx b{font-size:34px;opacity:1;}
  .supp-hl{position:relative;display:inline-block;}
  .supp-hl > span{position:relative;z-index:2;}
  .supp-hl::before{content:"";position:absolute;left:-.08em;right:-.08em;top:.1em;bottom:.04em;
    z-index:1;border-radius:5px;transform:rotate(-1.4deg);background:var(--yellow);}
  .supp-hl.supp-pink::before{background:var(--pink);}
  .supp-hl.supp-blue::before{background:var(--blue);transform:rotate(1.2deg);}
  .supp-hl.supp-red::before{background:var(--red);}
  .supp-hl.supp-red > span,.supp-hl.supp-pink > span{color:var(--paper);}
  .supp-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Noto Sans TC',sans-serif;
    font-weight:900;font-size:21px;letter-spacing:.02em;color:var(--ink);
    background:var(--yellow);padding:8px 16px;border-radius:7px;
    box-shadow:3px 4px 0 rgba(0,0,0,.16);white-space:nowrap;}
  .supp-tag.supp-pink{background:var(--pink);color:var(--paper);}
  .supp-tag.supp-red{background:var(--red);color:var(--paper);}
  .supp-tag.supp-ink{background:var(--ink);color:var(--paper);}
  .supp-tag .supp-star{color:var(--ink);}
  .supp-tag.supp-pink .supp-star,.supp-tag.supp-red .supp-star,.supp-tag.supp-ink .supp-star{color:var(--yellow);}
  .supp-photo{position:absolute;background:var(--paper);padding:12px 12px 14px;
    box-shadow:7px 9px 0 rgba(0,0,0,.14);}
  .supp-photo image-slot{display:block;}
  .supp-cap{position:absolute;left:14px;bottom:-13px;font-family:'Noto Sans TC',sans-serif;
    font-weight:900;font-size:17px;letter-spacing:.02em;color:var(--ink);white-space:nowrap;
    background:var(--yellow);padding:5px 12px;border-radius:6px;box-shadow:2px 3px 0 rgba(0,0,0,.18);}
  .supp-cap.supp-pink{background:var(--pink);color:var(--paper);}
  .supp-cap.supp-ink{background:var(--ink);color:var(--paper);}
  .supp-spark,.supp-arrow{position:absolute;}
  @media (prefers-reduced-motion:no-preference){
    [data-deck-active] .supp-anim{animation:supp-cover-rise .6s cubic-bezier(.2,.7,.2,1) both;}
    [data-deck-active] .supp-anim.supp-d1{animation-delay:.06s;}
    [data-deck-active] .supp-anim.supp-d2{animation-delay:.13s;}
    [data-deck-active] .supp-anim.supp-d3{animation-delay:.2s;}
    [data-deck-active] .supp-pop{animation:supp-cover-pop .5s cubic-bezier(.2,1.4,.4,1) both;}
    [data-deck-active] .supp-pop.supp-d2{animation-delay:.18s;}
    [data-deck-active] .supp-pop.supp-d3{animation-delay:.3s;}
    [data-deck-active] .supp-pop.supp-d4{animation-delay:.42s;}
  }
  @keyframes supp-cover-rise{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:none;}}
  @keyframes supp-cover-pop{from{opacity:0;transform:scale(.7) rotate(var(--rot,0deg));}}
`;function xl(t){let l=(z,L)=>Array.isArray(z)&&z[L]||{placeholder:"上傳",caption:"",capClass:"",tag:""},c={...xl.defaults,...t},{backgroundTheme:k,mediaCount:d,showDecor:u,showIndex:_,eyebrow:x,yearTag:g,headlineLine1:h,headlineHl:C,headlineTail:P,subtitle:I,goldenLine:A,handNote:M,indexNum:F,indexTotal:D,photos:q}=c;return wt("div",{className:"supp-cover-root",style:{position:"absolute",inset:0},children:[Ea("style",{children:jr}),wt("div",{className:"supp-cover",style:{background:k==="muted"?"var(--lilac)":"linear-gradient(157deg,var(--lilac) 46%,#EDE36B 88%,var(--yellow) 122%)"},"data-screen-label":"封面01 智聯萬物 重構體驗",children:[wt("div",{className:"supp-anim",style:{position:"absolute",left:118,top:96,display:"flex",alignItems:"center",gap:18},children:[Ea("span",{className:"supp-en",style:{fontSize:24},children:x}),Ea("span",{style:{width:48,height:3,background:"var(--ink)",display:"inline-block"}}),wt("span",{className:"supp-tag supp-ink",children:[Ea("span",{className:"supp-star",children:"\u2726"}),g]})]}),wt("h1",{className:"supp-h supp-anim supp-d1",style:{position:"absolute",left:112,top:236,fontSize:184},children:[Ea("span",{children:h}),Ea("br",{}),Ea("span",{className:"supp-hl",children:Ea("span",{children:C})}),Ea("span",{children:P})]}),Ea("p",{className:"supp-anim supp-d2",style:{position:"absolute",left:120,top:642,fontSize:37,fontWeight:700,letterSpacing:".04em"},children:I}),wt("div",{className:"supp-anim supp-d3",style:{position:"absolute",left:120,top:730,display:"flex",alignItems:"center",gap:22},children:[Ea("span",{className:"supp-hand",style:{fontSize:40,transform:"rotate(-3deg)"},children:"\u201C"}),Ea("span",{style:{fontSize:30,fontWeight:500,letterSpacing:".02em",borderBottom:"3px solid var(--pink)",paddingBottom:6},children:A})]}),d>0&&wt("div",{className:"supp-photo supp-pop supp-d2",style:{right:300,top:118,width:430,transform:"rotate(-3.5deg)","--rot":"-3.5deg"},children:[Ea("image-slot",{id:"c1-p1",style:{width:406,height:300},shape:"rect",placeholder:l(q,0).placeholder}),Ea("span",{className:"supp-cap "+l(q,0).capClass,children:l(q,0).caption})]}),d>1&&wt("div",{className:"supp-photo supp-pop supp-d3",style:{right:118,top:470,width:360,transform:"rotate(4deg)","--rot":"4deg"},children:[Ea("image-slot",{id:"c1-p2",style:{width:336,height:248},shape:"rect",placeholder:l(q,1).placeholder}),Ea("span",{className:"supp-cap "+l(q,1).capClass,children:l(q,1).caption})]}),d>2&&wt("div",{className:"supp-photo supp-pop supp-d4",style:{right:470,top:560,width:300,transform:"rotate(-6deg)","--rot":"-6deg"},children:[Ea("image-slot",{id:"c1-p3",style:{width:276,height:330},shape:"rect",placeholder:l(q,2).placeholder}),Ea("span",{className:"supp-cap "+l(q,2).capClass,children:l(q,2).caption})]}),u&&wt(Yr.Fragment,{children:[Ea("span",{className:"supp-hand supp-anim supp-d3",style:{position:"absolute",left:148,top:840,fontSize:30,color:"var(--ink)",transform:"rotate(-4deg)"},children:M}),wt("svg",{className:"supp-arrow",viewBox:"0 0 120 90",style:{left:430,top:828,width:120,height:90,transform:"rotate(6deg)"},children:[Ea("path",{d:"M8,18 C50,2 95,22 104,62",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"}),Ea("path",{d:"M104,62 L88,58 M104,62 L100,44",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"})]}),Ea("svg",{className:"supp-spark supp-pop supp-d3",viewBox:"0 0 100 100",style:{right:255,top:70,width:64,height:64,"--rot":"8deg"},children:Ea("path",{d:"M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2Z",fill:"var(--yellow)",stroke:"var(--ink)",strokeWidth:"3.4"})}),Ea("svg",{className:"supp-spark supp-pop supp-d4",viewBox:"0 0 100 100",style:{right:90,top:760,width:44,height:44,"--rot":"-10deg"},children:Ea("path",{d:"M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2Z",fill:"var(--pink)",stroke:"var(--ink)",strokeWidth:"3.4"})})]}),_&&wt("div",{className:"supp-idx",children:[F," / ",Ea("b",{children:D})]})]})]})}xl.defaults={images:[],backgroundTheme:"primary",mediaCount:3,showDecor:!0,showIndex:!0,eyebrow:"TECH KEYNOTE",yearTag:"2026",headlineLine1:"智聯萬物",headlineHl:"重構",headlineTail:"體驗",subtitle:"2026 全新產品體系釋出暨技術路演",goldenLine:"以技術突破\uFF0C定義下一代數字生活",handNote:"NEXT-GEN DIGITAL LIFE",indexNum:"01",indexTotal:"03",photos:[{placeholder:"上傳",caption:"旗艦新品",capClass:"supp-pink"},{placeholder:"上傳",caption:"技術路演",capClass:""},{placeholder:"上傳",caption:"NEXT-GEN",capClass:"supp-ink"}]};xl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(漸變) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:3,step:1,label:"圖片數量",desc:"右側拼貼照片槽數量\uFF080\u20133\uFF09"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與批註文案的顯示/隱藏"},{key:"showIndex",type:"boolean",default:!0,label:"頁碼角標",desc:"右下角 01 / 03 索引角標的顯示/隱藏"}];var Ur=xl.defaults,Wr=xl.controls;var gi={};Y(gi,{controls:()=>Qr,default:()=>bl,defaults:()=>Gr});import tr from"react";import{jsx as ne,jsxs as Rt}from"react/jsx-runtime";var Xr=`
  .supp-cover-root{
    --yellow:#F2E70C; --pink:#FF4D97; --red:#E63329; --lilac:#E7E6F0;
    --blue:#8FB7FF; --ink:#16150F; --paper:#FBFAF4;
  }
  .supp-cover-root *{box-sizing:border-box;margin:0;padding:0;}
  .supp-cover{position:absolute;inset:0;overflow:hidden;
    font-family:'Noto Sans TC',sans-serif;color:var(--ink);}
  .supp-h{font-family:'Noto Sans TC',sans-serif;font-weight:900;line-height:.96;letter-spacing:-.01em;}
  .supp-hand{font-family:'Caveat',cursive;font-weight:700;}
  .supp-kicker{font-family:'Noto Sans TC',sans-serif;font-weight:700;letter-spacing:.34em;
    font-size:22px;text-transform:none;}
  .supp-idx{position:absolute;bottom:46px;right:60px;font-family:'Anton',sans-serif;
    font-size:26px;letter-spacing:.12em;color:var(--ink);opacity:.5;z-index:9;}
  .supp-idx b{font-size:34px;opacity:1;}
  .supp-hl{position:relative;display:inline-block;}
  .supp-hl > span{position:relative;z-index:2;}
  .supp-hl::before{content:"";position:absolute;left:-.08em;right:-.08em;top:.1em;bottom:.04em;
    z-index:1;border-radius:5px;transform:rotate(-1.4deg);background:var(--yellow);}
  .supp-hl.supp-pink::before{background:var(--pink);}
  .supp-hl.supp-blue::before{background:var(--blue);transform:rotate(1.2deg);}
  .supp-hl.supp-pink > span{color:var(--paper);}
  .supp-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Noto Sans TC',sans-serif;
    font-weight:900;font-size:21px;letter-spacing:.02em;color:var(--ink);
    background:var(--yellow);padding:8px 16px;border-radius:7px;
    box-shadow:3px 4px 0 rgba(0,0,0,.16);white-space:nowrap;}
  .supp-tag.supp-ink{background:var(--ink);color:var(--paper);}
  .supp-tag .supp-star{color:var(--ink);}
  .supp-tag.supp-ink .supp-star{color:var(--yellow);}
  .supp-spark,.supp-arrow{position:absolute;}
  @media (prefers-reduced-motion:no-preference){
    [data-deck-active] .supp-anim{animation:supp-cover-rise .6s cubic-bezier(.2,.7,.2,1) both;}
    [data-deck-active] .supp-anim.supp-d1{animation-delay:.06s;}
    [data-deck-active] .supp-anim.supp-d2{animation-delay:.13s;}
    [data-deck-active] .supp-anim.supp-d3{animation-delay:.2s;}
    [data-deck-active] .supp-pop{animation:supp-cover-pop .5s cubic-bezier(.2,1.4,.4,1) both;}
    [data-deck-active] .supp-pop.supp-d2{animation-delay:.18s;}
    [data-deck-active] .supp-pop.supp-d3{animation-delay:.3s;}
  }
  @keyframes supp-cover-rise{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:none;}}
  @keyframes supp-cover-pop{from{opacity:0;transform:scale(.7) rotate(var(--rot,0deg));}}
`;function bl(t){let l={...bl.defaults,...t},{backgroundTheme:c,showDecor:k,showIndex:d,kicker:u,headlineL1Pre:_,headlineHl1:x,headlineL2Pre:g,headlineHl2:h,subtitle:C,tags:P,handNoteTL:I,handNoteTR:A,handNoteBL:M,indexNum:F,indexTotal:D}=l;return Rt("div",{className:"supp-cover-root",style:{position:"absolute",inset:0},children:[ne("style",{children:Xr}),Rt("div",{className:"supp-cover",style:{background:c==="muted"?"var(--lilac)":"var(--yellow)"},"data-screen-label":"封面02 深耕教學 聚力成長",children:[k&&Rt(tr.Fragment,{children:[ne("span",{className:"supp-hand supp-anim",style:{position:"absolute",left:150,top:120,fontSize:34,transform:"rotate(-5deg)"},children:I}),Rt("svg",{className:"supp-arrow",viewBox:"0 0 110 80",style:{left:150,top:170,width:110,height:80,transform:"rotate(-2deg)"},children:[ne("path",{d:"M12,8 C20,40 50,58 96,60",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"}),ne("path",{d:"M96,60 L80,58 M96,60 L86,46",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"})]}),ne("span",{className:"supp-hand supp-anim supp-d1",style:{position:"absolute",right:160,top:128,fontSize:34,transform:"rotate(4deg)"},children:A})]}),Rt("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[ne("span",{className:"supp-kicker supp-anim",style:{marginBottom:26},children:u}),Rt("h1",{className:"supp-h supp-anim supp-d1",style:{fontSize:206},children:[ne("span",{children:_}),ne("span",{className:"supp-hl supp-pink",children:ne("span",{children:x})}),ne("br",{}),ne("span",{children:g}),ne("span",{className:"supp-hl supp-blue",children:ne("span",{children:h})})]}),ne("p",{className:"supp-anim supp-d2",style:{marginTop:40,fontSize:36,fontWeight:700,letterSpacing:".03em"},children:C}),Rt("div",{className:"supp-anim supp-d3",style:{marginTop:34,display:"flex",gap:18},children:[Rt("span",{className:"supp-tag supp-ink",children:[ne("span",{className:"supp-star",children:"\u2726"}),P[0]]}),Rt("span",{className:"supp-tag supp-ink",children:[ne("span",{className:"supp-star",children:"\u2726"}),P[1]]})]})]}),k&&Rt(tr.Fragment,{children:[ne("svg",{className:"supp-spark supp-pop supp-d2",viewBox:"0 0 100 100",style:{left:420,top:430,width:58,height:58,"--rot":"-8deg"},children:ne("path",{d:"M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2Z",fill:"var(--pink)",stroke:"var(--ink)",strokeWidth:"3.4"})}),ne("svg",{className:"supp-spark supp-pop supp-d3",viewBox:"0 0 100 100",style:{right:430,top:600,width:50,height:50,"--rot":"10deg"},children:ne("path",{d:"M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2Z",fill:"var(--blue)",stroke:"var(--ink)",strokeWidth:"3.4"})}),ne("span",{className:"supp-hand supp-anim supp-d3",style:{position:"absolute",left:210,bottom:150,fontSize:30,transform:"rotate(-3deg)"},children:M})]}),d&&Rt("div",{className:"supp-idx",children:[F," / ",ne("b",{children:D})]})]})]})}bl.defaults={backgroundTheme:"primary",showDecor:!0,showIndex:!0,kicker:"2025\u20142026 學年工作總結",headlineL1Pre:"深耕",headlineHl1:"教學",headlineL2Pre:"聚力",headlineHl2:"成長",subtitle:"全域工作復盤 & 6 大提升行動規劃",tags:["夯實教學根基","拓寬育人邊界"],handNoteTL:"復盤 \xB7 review",handNoteTR:"規劃 2026 \u2192",handNoteBL:"GROW TOGETHER",indexNum:"02",indexTotal:"03"};bl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"四角批註\u3001手繪箭頭與火花的顯示/隱藏"},{key:"showIndex",type:"boolean",default:!0,label:"頁碼角標",desc:"右下角 02 / 03 索引角標的顯示/隱藏"}];var Gr=bl.defaults,Qr=bl.controls;var ui={};Y(ui,{controls:()=>ac,default:()=>vl,defaults:()=>Jr});import Kr from"react";import{jsx as Ca,jsxs as Nt}from"react/jsx-runtime";var Zr=`
  .supp-cover-root{
    --yellow:#F2E70C; --pink:#FF4D97; --red:#E63329; --lilac:#E7E6F0;
    --blue:#8FB7FF; --ink:#16150F; --paper:#FBFAF4;
  }
  .supp-cover-root *{box-sizing:border-box;margin:0;padding:0;}
  .supp-cover{position:absolute;inset:0;overflow:hidden;
    font-family:'Noto Sans TC',sans-serif;color:var(--ink);}
  .supp-h{font-family:'Noto Sans TC',sans-serif;font-weight:900;line-height:.96;letter-spacing:-.01em;}
  .supp-en{font-family:'Anton',sans-serif;letter-spacing:.02em;text-transform:uppercase;}
  .supp-hand{font-family:'Caveat',cursive;font-weight:700;}
  .supp-idx{position:absolute;bottom:46px;right:60px;font-family:'Anton',sans-serif;
    font-size:26px;letter-spacing:.12em;color:var(--ink);opacity:.5;z-index:9;}
  .supp-idx b{font-size:34px;opacity:1;}
  .supp-hl{position:relative;display:inline-block;}
  .supp-hl > span{position:relative;z-index:2;}
  .supp-hl::before{content:"";position:absolute;left:-.08em;right:-.08em;top:.1em;bottom:.04em;
    z-index:1;border-radius:5px;transform:rotate(-1.4deg);background:var(--yellow);}
  .supp-hl.supp-pink::before{background:var(--pink);}
  .supp-hl.supp-blue::before{background:var(--blue);transform:rotate(1.2deg);}
  .supp-hl.supp-pink > span{color:var(--paper);}
  .supp-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Noto Sans TC',sans-serif;
    font-weight:900;font-size:21px;letter-spacing:.02em;color:var(--ink);
    background:var(--yellow);padding:8px 16px;border-radius:7px;
    box-shadow:3px 4px 0 rgba(0,0,0,.16);white-space:nowrap;}
  .supp-tag.supp-pink{background:var(--pink);color:var(--paper);}
  .supp-tag .supp-star{color:var(--ink);}
  .supp-tag.supp-pink .supp-star{color:var(--paper);}
  .supp-photo{position:absolute;background:var(--paper);padding:12px 12px 14px;
    box-shadow:7px 9px 0 rgba(0,0,0,.14);}
  .supp-photo image-slot{display:block;}
  .supp-cap{position:absolute;left:14px;bottom:-13px;font-family:'Noto Sans TC',sans-serif;
    font-weight:900;font-size:17px;letter-spacing:.02em;color:var(--ink);white-space:nowrap;
    background:var(--yellow);padding:5px 12px;border-radius:6px;box-shadow:2px 3px 0 rgba(0,0,0,.18);}
  .supp-cap.supp-pink{background:var(--pink);color:var(--paper);}
  .supp-cap.supp-ink{background:var(--ink);color:var(--paper);}
  .supp-spark,.supp-arrow{position:absolute;}
  @media (prefers-reduced-motion:no-preference){
    [data-deck-active] .supp-anim{animation:supp-cover-rise .6s cubic-bezier(.2,.7,.2,1) both;}
    [data-deck-active] .supp-anim.supp-d1{animation-delay:.06s;}
    [data-deck-active] .supp-anim.supp-d2{animation-delay:.13s;}
    [data-deck-active] .supp-anim.supp-d3{animation-delay:.2s;}
    [data-deck-active] .supp-pop{animation:supp-cover-pop .5s cubic-bezier(.2,1.4,.4,1) both;}
    [data-deck-active] .supp-pop.supp-d2{animation-delay:.18s;}
    [data-deck-active] .supp-pop.supp-d3{animation-delay:.3s;}
  }
  @keyframes supp-cover-rise{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:none;}}
  @keyframes supp-cover-pop{from{opacity:0;transform:scale(.7) rotate(var(--rot,0deg));}}
`;function vl(t){let l=(N,z)=>Array.isArray(N)&&N[z]||{placeholder:"上傳",caption:"",capClass:"",tag:""},c={...vl.defaults,...t},{backgroundTheme:k,mediaCount:d,showDecor:u,showIndex:_,eyebrow:x,tag:g,terms:h,sloganLine1:C,sloganLine2:P,standoutTag:I,handNote:A,indexNum:M,indexTotal:F,photos:D}=c;return Nt("div",{className:"supp-cover-root",style:{position:"absolute",inset:0},children:[Ca("style",{children:Zr}),Nt("div",{className:"supp-cover",style:{background:k==="primary"?"var(--yellow)":"var(--lilac)"},"data-screen-label":"封面03 新機遇 新賽道 新價值",children:[Nt("div",{className:"supp-anim",style:{position:"absolute",left:120,top:92,display:"flex",alignItems:"center",gap:18},children:[Ca("span",{className:"supp-en",style:{fontSize:24},children:x}),Ca("span",{style:{width:48,height:3,background:"var(--ink)",display:"inline-block"}}),Ca("span",{className:"supp-tag",children:g})]}),Nt("div",{className:"supp-h supp-anim supp-d1",style:{position:"absolute",left:120,top:188,fontSize:62,display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:[Ca("span",{className:"supp-hl",children:Ca("span",{children:h[0]})}),Ca("span",{style:{opacity:.4},children:"\xB7"}),Ca("span",{className:"supp-hl supp-pink",children:Ca("span",{children:h[1]})}),Ca("span",{style:{opacity:.4},children:"\xB7"}),Ca("span",{className:"supp-hl supp-blue",children:Ca("span",{children:h[2]})})]}),Nt("h1",{className:"supp-h supp-anim supp-d2",style:{position:"absolute",left:114,top:330,fontSize:158},children:[Ca("span",{children:C}),Ca("br",{}),Ca("span",{children:P})]}),Nt("div",{className:"supp-anim supp-d3",style:{position:"absolute",left:122,top:728,display:"flex",alignItems:"center",gap:22},children:[Nt("span",{className:"supp-tag supp-pink",style:{fontSize:27,padding:"13px 26px"},children:[Ca("span",{className:"supp-star",children:"\u2605"}),I]}),u&&Ca("span",{className:"supp-hand",style:{fontSize:30,transform:"rotate(-3deg)"},children:A})]}),d>0&&Nt("div",{className:"supp-photo supp-pop supp-d2",style:{right:140,top:150,width:330,transform:"rotate(4deg)","--rot":"4deg"},children:[Ca("image-slot",{id:"c3-p1",style:{width:306,height:230},shape:"rect",placeholder:l(D,0).placeholder}),Ca("span",{className:"supp-cap "+l(D,0).capClass,children:l(D,0).caption})]}),d>1&&Nt("div",{className:"supp-photo supp-pop supp-d3",style:{right:108,top:470,width:280,transform:"rotate(-5deg)","--rot":"-5deg"},children:[Ca("image-slot",{id:"c3-p2",style:{width:256,height:300},shape:"rect",placeholder:l(D,1).placeholder}),Ca("span",{className:"supp-cap "+l(D,1).capClass,children:l(D,1).caption})]}),u&&Nt(Kr.Fragment,{children:[Nt("svg",{className:"supp-arrow supp-anim supp-d3",viewBox:"0 0 120 90",style:{right:430,top:690,width:120,height:90,transform:"rotate(-8deg)"},children:[Ca("path",{d:"M110,14 C70,4 18,24 12,66",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"}),Ca("path",{d:"M12,66 L26,58 M12,66 L18,50",fill:"none",stroke:"var(--ink)",strokeWidth:"3.4",strokeLinecap:"round"})]}),Ca("svg",{className:"supp-spark supp-pop supp-d3",viewBox:"0 0 100 100",style:{right:470,top:120,width:54,height:54,"--rot":"9deg"},children:Ca("path",{d:"M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2Z",fill:"var(--yellow)",stroke:"var(--ink)",strokeWidth:"3.4"})})]}),_&&Nt("div",{className:"supp-idx",children:[M," / ",Ca("b",{children:F})]})]})]})}vl.defaults={images:[],backgroundTheme:"muted",mediaCount:2,showDecor:!0,showIndex:!0,eyebrow:"BUSINESS PLAN",tag:"XX 金融專案",terms:["新機遇","新賽道","新價值"],sloganLine1:"精準佈局",sloganLine2:"與時代紅利同行",standoutTag:"面向機構投資人專屬方案",handNote:"for investors",indexNum:"03",indexTotal:"03",photos:[{placeholder:"上傳",caption:"核心團隊",capClass:"supp-pink"},{placeholder:"上傳",caption:"市場洞察",capClass:"supp-ink"}]};vl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰\uFF0C預設) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:2,step:1,label:"圖片數量",desc:"右側照片點綴數量\uFF080\u20132\uFF09"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與批註文案的顯示/隱藏"},{key:"showIndex",type:"boolean",default:!0,label:"頁碼角標",desc:"右下角 03 / 03 索引角標的顯示/隱藏"}];var Jr=vl.defaults,ac=vl.controls;var _i={};Y(_i,{controls:()=>oc,default:()=>hl,defaults:()=>lc});import ec from"react";import{jsx as qa,jsxs as zt}from"react/jsx-runtime";var tc=`
  .fmcover-root{
    --yellow:#F2EA00; --ink:#161616; --paper:#E9E7F1; --pink:#FF3D97;
    --blue:#5C7CFF; --red:#E5311D;
    --display-cn:"Noto Sans TC", sans-serif;
    --display-en:"Anton", sans-serif;
    --body:"Noto Sans TC", sans-serif;
  }
  .fmcover-root *{margin:0;padding:0;box-sizing:border-box;}
  .fmcover-root .cover{position:absolute;inset:0;overflow:hidden;text-align:center;
    font-family:var(--body);color:var(--ink);}
  .fmcover-root .grain{position:absolute;inset:0;opacity:.5;mix-blend-mode:multiply;pointer-events:none;
    background-image:radial-gradient(rgba(0,0,0,.05) 1px,transparent 1px);background-size:5px 5px;}
  .fmcover-root .eyebrow{font-family:var(--display-en);font-size:24px;letter-spacing:.16em;color:var(--ink);
    text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:14px;}
  .fmcover-root .hl{position:relative;white-space:nowrap;z-index:0;padding:0 .12em;}
  .fmcover-root .hl::before{content:"";position:absolute;inset:.04em -.18em .02em;background:var(--yellow);
    transform:rotate(-1.4deg);z-index:-1;border-radius:2px;}
  .fmcover-root .hl.pink::before{background:var(--pink);}
  .fmcover-root .hl.pink{color:#fff;}
  .fmcover-root .slogan{font-family:var(--display-cn);font-weight:900;color:var(--ink);
    line-height:1.34;font-size:116px;transform:scaleX(.95);}
  .fmcover-root .sticker{display:inline-block;font-family:var(--body);font-weight:700;font-size:24px;
    background:var(--yellow);color:var(--ink);padding:6px 14px;transform:rotate(-3deg);
    box-shadow:3px 4px 0 rgba(0,0,0,.16);line-height:1.1;}
  .fmcover-root .sticker.pink{background:var(--pink);color:#fff;}
  .fmcover-root .sticker.blue{background:var(--blue);color:#fff;}
  .fmcover-root .sticker .star{color:var(--yellow);margin-right:4px;}
  .fmcover-root .sticker.pink .star,.fmcover-root .sticker.blue .star{color:#fff;}
  .fmcover-root .photo{position:absolute;background:#fff;padding:9px 9px 10px;
    box-shadow:0 14px 30px rgba(20,20,30,.18);border:1px solid rgba(0,0,0,.05);}
  .fmcover-root .photo image-slot{display:block;width:100%;height:100%;}
  .fmcover-root .photo .tag{position:absolute;bottom:-14px;left:14px;z-index:3;}
  .fmcover-root .doodle,.fmcover-root .sparkle{position:absolute;pointer-events:none;}
  @media (prefers-reduced-motion:no-preference){
    [data-deck-active] .fmcover-root .anim{animation:fmc-rise .6s both;}
    [data-deck-active] .fmcover-root .anim.d1{animation-delay:.05s;}
    [data-deck-active] .fmcover-root .anim.d2{animation-delay:.13s;}
    [data-deck-active] .fmcover-root .anim.d3{animation-delay:.21s;}
    [data-deck-active] .fmcover-root .pop{animation:fmc-pop .5s both .2s;}
  }
  @keyframes fmc-rise{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}
  @keyframes fmc-pop{from{opacity:0;transform:scale(.7) rotate(-8deg);}to{opacity:1;}}
`;function hl(t){let l=(M,F)=>Array.isArray(M)&&M[F]||{placeholder:"上傳",caption:"",capClass:"",tag:""},c={...hl.defaults,...t},{backgroundTheme:k,mediaCount:d,showDecor:u,eyebrow:_,kickerPre:x,kickerPost:g,sloganLine1:h,sloganHl:C,sticker:P,photos:I}=c;return zt("div",{className:"fmcover-root",style:{position:"absolute",inset:0},children:[qa("style",{children:tc}),zt("div",{className:"cover",style:{background:k==="primary"?"var(--yellow)":"var(--paper)"},"data-screen-label":"封面2C 鏈通全國 高效履約",children:[qa("div",{className:"grain"}),qa("div",{className:"eyebrow anim d1",style:{position:"absolute",top:96,left:0,right:0},children:_}),zt("div",{className:"anim d2",style:{position:"absolute",top:182,left:0,right:0,fontFamily:"var(--display-cn)",fontWeight:900,fontSize:54,color:"var(--ink)"},children:[qa("span",{children:x}),qa("span",{style:{color:"var(--pink)"},children:"\u30FB"}),qa("span",{children:g})]}),zt("div",{className:"slogan anim d3",style:{position:"absolute",top:300,left:0,right:0},children:[qa("span",{children:h}),qa("br",{}),qa("span",{className:"hl pink",children:C})]}),qa("div",{className:"pop",style:{position:"absolute",top:790,left:0,right:0},children:zt("span",{className:"sticker blue",style:{fontSize:24,padding:"10px 20px",transform:"rotate(-2deg)"},children:[qa("span",{className:"star",children:"\u2605"}),P]})}),d>0&&zt("div",{className:"photo pop",style:{width:210,height:262,top:150,left:128,transform:"rotate(-5deg)"},children:[qa("image-slot",{id:"c3-a",style:{width:"100%",height:"100%"},placeholder:l(I,0).placeholder}),l(I,0).tag&&qa("span",{className:"sticker pop tag",style:{transform:"rotate(-3deg)"},children:l(I,0).tag})]}),d>1&&zt("div",{className:"photo pop",style:{width:196,height:236,top:660,left:172,transform:"rotate(4deg)"},children:[qa("image-slot",{id:"c3-b",style:{width:"100%",height:"100%"},placeholder:l(I,1).placeholder}),l(I,1).tag&&qa("span",{className:"sticker pop tag",style:{transform:"rotate(-3deg)"},children:l(I,1).tag})]}),d>2&&zt("div",{className:"photo pop",style:{width:200,height:250,top:150,right:130,transform:"rotate(5deg)"},children:[qa("image-slot",{id:"c3-c",style:{width:"100%",height:"100%"},placeholder:l(I,2).placeholder}),l(I,2).tag&&qa("span",{className:"sticker pink pop tag",style:{left:"auto",right:14,transform:"rotate(3deg)"},children:l(I,2).tag})]}),d>3&&zt("div",{className:"photo pop",style:{width:208,height:250,top:640,right:150,transform:"rotate(-4deg)"},children:[qa("image-slot",{id:"c3-d",style:{width:"100%",height:"100%"},placeholder:l(I,3).placeholder}),l(I,3).tag&&qa("span",{className:"sticker pop tag",style:{transform:"rotate(-3deg)"},children:l(I,3).tag})]}),u&&zt(ec.Fragment,{children:[zt("svg",{className:"doodle",style:{width:120,height:90,top:430,left:382,transform:"rotate(-6deg)"},viewBox:"0 0 120 90",children:[qa("path",{d:"M112 70C96 18 44 8 10 18",fill:"none",stroke:"#161616",strokeWidth:"3.5",strokeLinecap:"round"}),qa("path",{d:"M22 6l-12 12 18 6",fill:"none",stroke:"#161616",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),zt("svg",{className:"doodle",style:{width:120,height:90,top:440,right:380,transform:"rotate(6deg) scaleX(-1)"},viewBox:"0 0 120 90",children:[qa("path",{d:"M112 70C96 18 44 8 10 18",fill:"none",stroke:"#161616",strokeWidth:"3.5",strokeLinecap:"round"}),qa("path",{d:"M22 6l-12 12 18 6",fill:"none",stroke:"#161616",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),qa("svg",{className:"sparkle pop",style:{width:54,height:54,top:262,right:430},viewBox:"0 0 40 40",children:qa("path",{d:"M20 2c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18Z",fill:"var(--yellow)",stroke:"#161616",strokeWidth:"2"})})]})]})]})}hl.defaults={images:[],backgroundTheme:"muted",mediaCount:4,showDecor:!0,eyebrow:"XX 集團供應鏈 \xB7 STRATEGY 2026\u20132028",kickerPre:"鏈通全國",kickerPost:"高效履約",sloganLine1:"打通物流脈絡",sloganHl:"構築產業護城河",sticker:"集團供應鏈體系三年發展戰略",photos:[{placeholder:"上傳",tag:"全國網路"},{placeholder:"上傳",tag:""},{placeholder:"上傳",tag:"高效履約"},{placeholder:"上傳",tag:""}]};hl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(紙灰\uFF0C預設) 底色"},{key:"mediaCount",type:"number",default:4,min:0,max:4,step:1,label:"圖片數量",desc:"四周漂浮照片卡數量\uFF080\u20134\uFF09"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭與火花的顯示/隱藏"}];var lc=hl.defaults,oc=hl.controls;var xi={};Y(xi,{controls:()=>nc,default:()=>yl,defaults:()=>ic});import lr from"react";import{jsx as he,jsxs as Gt}from"react/jsx-runtime";function yl(t){let l={...yl.defaults,...t},{backgroundTheme:c,mediaCount:k,showDecor:d,showMeta:u,eyebrow:_,year:x,headlineLines:g,subheadline:h,subheadMark:C,closingLine:P,meta:I,decorTexts:A,collage:M}=l,F=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",D=M[k]||[],q=()=>{if(C&&h.indexOf(C)>=0){let N=h.split(C);return Gt(lr.Fragment,{children:[N[0],he("span",{className:"acl-hl",style:{background:"var(--acl-blue)"},children:C}),N[1]]})}return h};return Gt("div",{className:"acl-root acl-cv",style:{background:F},children:[he("style",{children:`
        .acl-cv{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); }
        .acl-cv__grain{ position:absolute; inset:0; pointer-events:none; opacity:.5;
          background:radial-gradient(circle at 80% 12%, rgba(255,255,255,.5), transparent 55%); }
        .acl-cv__eyebrow{ position:absolute; top:84px; left:100px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:24px; letter-spacing:.16em; text-transform:uppercase;
          display:flex; align-items:center; gap:14px; }
        .acl-cv__eyebrow i{ width:46px; height:7px; background:var(--acl-ink); display:inline-block; }
        .acl-cv__main{ position:absolute; left:100px; top:178px; width:1040px; }
        .acl-cv__h{ font-weight:900; font-size:112px; line-height:1.4; letter-spacing:-.01em;
          margin:0; }
        .acl-cv__h .l2{ display:inline-block; }
        .acl-cv__mark{ background:var(--acl-pink); color:var(--acl-paper); padding:0 .12em; white-space:nowrap; }
        .acl-cv__sub{ margin-top:32px; font-family:var(--acl-font-mono); font-size:25px;
          font-weight:700; letter-spacing:.02em; color:rgba(22,21,15,.78); }
        .acl-cv__year{ position:absolute; top:120px; right:104px; z-index:4;
          background:var(--acl-ink); color:var(--acl-yellow); font-family:var(--acl-font-num);
          font-size:96px; line-height:.84; padding:18px 24px 12px; transform:rotate(4deg);
          box-shadow:5px 7px 0 rgba(22,21,15,.2); letter-spacing:.02em; }
        .acl-cv--muted .acl-cv__year{ color:var(--acl-paper); }
        .acl-cv__foot{ position:absolute; left:100px; bottom:88px; width:760px;
          display:flex; align-items:flex-end; gap:30px; }
        .acl-cv__close{ font-family:var(--acl-font-cn); font-weight:700; font-size:30px;
          line-height:1.3; max-width:560px; }
        .acl-cv__meta{ position:absolute; right:104px; bottom:84px; display:flex; gap:44px;
          z-index:4; }
        .acl-cv__stage{ position:absolute; right:60px; top:150px; width:820px; height:720px; }
        .acl-cv__slot{ position:absolute; }
        .acl-cv__anno{ position:absolute; font-family:var(--acl-font-hand); font-weight:400;
          color:var(--acl-ink); line-height:1.05; z-index:5; white-space:nowrap; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cv__h{ animation:acl-cv-rise .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-cv__h .l2{ animation:acl-cv-rise .6s .08s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-cv-rise{ from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:none; } }
      `}),he("div",{className:"acl-cv__grain"}),Gt("div",{className:"acl-cv__eyebrow",children:[he("i",{}),_]}),Gt("div",{className:"acl-cv__main",children:[Gt("h1",{className:"acl-cv__h",children:[he("span",{className:"l1",children:g[0]}),he("br",{}),he("span",{className:"l2",children:he("span",{className:"acl-cv__mark",children:g[1]})})]}),he("div",{className:"acl-cv__sub",children:q()})]}),he("div",{className:"acl-cv__year",children:x}),Gt("div",{className:"acl-cv__stage",children:[D.map((N,z)=>he("div",{className:"acl-cv__slot",style:{left:N.l,top:N.t},children:he(W,{id:"cover-"+z,box:N.box,rotate:N.r,ratio:N.ratio,accent:N.accent,placeholder:"上傳",sticker:N.st})},z)),d&&Gt(lr.Fragment,{children:[he(p,{kind:"spark",size:54,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{left:-24,top:16}}),he(p,{kind:"arrow",size:94,rotate:32,color:"var(--acl-ink)",style:{left:286,top:-30}})]})]}),d&&Gt("div",{className:"acl-cv__anno",style:{left:120,top:560,fontSize:27,display:"flex",alignItems:"center",gap:16,transform:"rotate(-2deg)"},children:[he(p,{kind:"arrowS",size:60,rotate:-12,color:"var(--acl-pink)",style:{position:"static"}}),he("span",{children:A[1]})]}),Gt("div",{className:"acl-cv__foot",children:[he(p,{kind:"loop",size:74,rotate:0,color:"var(--acl-ink)",style:{position:"static",flex:"0 0 auto"}}),he("div",{className:"acl-cv__close",children:P})]}),u&&he("div",{className:"acl-cv__meta",children:I.map((N,z)=>he(kt,{k:N.k,v:N.v},z))})]})}yl.defaults={images:[],backgroundTheme:"primary",mediaCount:3,showDecor:!0,showMeta:!0,eyebrow:"AI CAPITAL LAB \xB7 2024",year:"2024",headlineLines:["美國大額融資","AI 公司調研報告"],subheadline:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u2265 1 億美元",subheadMark:"\u2265 1 億美元",closingLine:"從資本流向\uFF0C看 AI 產業下一階段的真實重心\u3002",meta:[{k:"Year",v:"2024"},{k:"Cut",v:"\u22651 億美元"},{k:"Date",v:"2026.06"}],decorTexts:["橫縱分析法","每一筆都是一次押注"],collage:{0:[],1:[{l:200,t:150,box:460,r:-3,ratio:.82,accent:"var(--acl-paper)",ph:"主圖",st:{label:"FIG.01",sub:"現場",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}}],2:[{l:70,t:70,box:360,r:-4,ratio:.8,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.01",sub:"現場",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}},{l:360,t:360,box:340,r:4,ratio:1.25,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.02",color:"var(--acl-blue)",rotate:3}}],3:[{l:330,t:40,box:350,r:3,ratio:.84,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.01",sub:"現場",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}},{l:40,t:300,box:300,r:-5,ratio:1.2,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.02",color:"var(--acl-blue)",rotate:4}},{l:420,t:430,box:250,r:6,ratio:.78,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.03",color:"var(--acl-pink)",rotate:-3}}],4:[{l:360,t:20,box:300,r:3,ratio:.82,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.01",sub:"現場",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}},{l:50,t:130,box:250,r:-5,ratio:.9,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.02",color:"var(--acl-blue)",rotate:4}},{l:140,t:430,box:270,r:4,ratio:1.15,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.03",color:"var(--acl-pink)",rotate:-3}},{l:500,t:400,box:240,r:-4,ratio:.8,accent:"var(--acl-paper)",ph:"圖片",st:{label:"FIG.04",color:"var(--acl-yellow)",rotate:5}}]}};yl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"拼貼照片槽數量\uFF1B佈局隨數量自動平衡\uFF0C每個槽按上傳圖片比例自適應"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與批註文案的顯示/隱藏"},{key:"showMeta",type:"boolean",default:!0,label:"底部資訊",desc:"底部資料標籤行的顯示/隱藏"}];var ic=yl.defaults,nc=yl.controls;var bi={};Y(bi,{controls:()=>sc,default:()=>kl,defaults:()=>cc});import"react";import{jsx as Xa,jsxs as Ze}from"react/jsx-runtime";function kl(t){let l={...kl.defaults,...t},{backgroundTheme:c,cardCount:k,focusEnabled:d,focusIndex:u,chartType:_,showDecor:x,eyebrow:g,headline:h,subheadline:C,summary:P,metrics:I,trackData:A,trackTitle:M,closingLine:F}=l,D=c==="primary"?"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)":"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)",q=I.slice(0,k),N=_!==null&&_!=="null",z=d,L=["var(--acl-ink)","var(--acl-pink)","var(--acl-blue)","var(--acl-red)","rgba(22,21,15,.35)"];return Ze("div",{className:"acl-root acl-sm",style:{background:D},children:[Xa("style",{children:`
        .acl-sm{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:84px 100px 80px; }
        .acl-sm__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-sm__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55);
          margin-bottom:10px; font-size:24px; }
        .acl-sm__h{ font-weight:900; font-size:88px; line-height:.95; margin:0; }
        .acl-sm__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow);
          transform:rotate(-2deg);  white-space:nowrap;}
        .acl-sm__body{ display:flex; gap:48px; margin-top:54px; align-items:stretch; }
        .acl-sm__left{ flex:1 1 0; display:flex; flex-direction:column; gap:30px; min-width:0; }
        .acl-sm__summary{ background:var(--acl-paper); border:3px solid var(--acl-ink);
          padding:34px 38px; box-shadow:7px 9px 0 rgba(22,21,15,.16); position:relative; }
        .acl-sm__summary p{ margin:0; font-weight:700; font-size:33px; line-height:1.42; }
        .acl-sm__summary .tag{ position:absolute; top:-18px; left:30px; }
        .acl-sm__metrics{ display:grid; gap:22px; margin-top:auto; }
        .acl-sm__card{ background:var(--acl-paper); border:3px solid var(--acl-ink);
          padding:22px 24px 20px; box-shadow:5px 6px 0 rgba(22,21,15,.14);
          display:flex; flex-direction:column; gap:6px; transition:transform .25s; position:relative; }
        .acl-sm__card .num{ font-family:var(--acl-font-num); font-size:64px; line-height:.84;
          letter-spacing:.01em; display:flex; align-items:baseline; gap:6px; }
        .acl-sm__card .num em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700;
          font-size:24px; }
        .acl-sm__card .lbl{ font-weight:700; font-size:21px; color:rgba(22,21,15,.72); }
        .acl-sm__card--focus{ background:var(--acl-ink); color:var(--acl-yellow);
          transform:scale(1.045) rotate(-1.5deg); box-shadow:8px 10px 0 rgba(22,21,15,.28); z-index:2; }
        .acl-sm__card--focus .lbl{ color:rgba(255,255,255,.8); }
        .acl-sm__card .fx{ position:absolute; top:-15px; right:-10px; }
        .acl-sm__right{ flex:0 0 600px; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:7px 9px 0 rgba(22,21,15,.16); padding:32px 36px; display:flex;
          flex-direction:column; }
        .acl-sm__right h3{ margin:0 0 24px; font-weight:900; font-size:30px;
          display:flex; align-items:center; gap:12px; }
        .acl-sm__bars{ display:flex; flex-direction:column; gap:18px; }
        .acl-sm__bar{ display:grid; grid-template-columns:170px 1fr 96px; align-items:center; gap:14px; }
        .acl-sm__bar .bl{ font-weight:700; font-size:22px; }
        .acl-sm__bar .track{ height:30px; background:rgba(22,21,15,.08); }
        .acl-sm__bar .fill{ height:100%; }
        .acl-sm__bar .pc{ font-family:var(--acl-font-num); font-size:30px; text-align:right; }
        .acl-sm__donut-wrap{ display:flex; align-items:center; gap:36px; flex:1; }
        .acl-sm__donut{ width:248px; height:248px; border-radius:50%; flex:0 0 auto;
          position:relative; }
        .acl-sm__donut::after{ content:""; position:absolute; inset:64px; border-radius:50%;
          background:var(--acl-paper); }
        .acl-sm__legend{ display:flex; flex-direction:column; gap:13px; }
        .acl-sm__legend div{ display:flex; align-items:center; gap:11px; font-weight:700; font-size:21px; }
        .acl-sm__legend i{ width:18px; height:18px; flex:0 0 auto; }
        .acl-sm__nochart{ flex:1; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-mono); color:rgba(22,21,15,.4); font-size:20px;
          border:2px dashed rgba(22,21,15,.25); }
        .acl-sm__foot{ position:absolute; left:100px; right:100px; bottom:46px;
          display:flex; align-items:center; gap:16px; font-family:var(--acl-font-hand);
          font-size:30px; }
      `}),Ze("div",{className:"acl-sm__head",children:[Ze("div",{children:[Xa("div",{className:"acl-sm__eyebrow",children:g}),Xa("h1",{className:"acl-sm__h",children:h})]}),Xa("div",{className:"acl-sm__sub",children:C}),x&&Xa(p,{kind:"spark",size:50,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})]}),Ze("div",{className:"acl-sm__body",children:[Ze("div",{className:"acl-sm__left",children:[Ze("div",{className:"acl-sm__summary",children:[x&&Xa("div",{className:"tag",children:Xa(H,{label:l.summaryTagLabel,color:"var(--acl-pink)",rotate:-4})}),Xa("p",{children:P})]}),Xa("div",{className:"acl-sm__metrics",style:{gridTemplateColumns:`repeat(${Math.min(q.length,2)}, 1fr)`},children:q.map((y,w)=>{let v=z&&w===u;return Ze("div",{className:"acl-sm__card"+(v?" acl-sm__card--focus":""),children:[v&&x&&Xa("div",{className:"fx",children:Xa(H,{label:l.focusBadgeLabel,color:"var(--acl-yellow)",rotate:6})}),Ze("div",{className:"num",children:[y.value,Xa("em",{children:y.unit})]}),Xa("div",{className:"lbl",children:y.label})]},w)})})]}),N&&Ze("div",{className:"acl-sm__right",children:[Ze("h3",{children:[M,x&&Xa(p,{kind:"arrowS",size:42,rotate:-20,style:{position:"static"}})]}),_==="bars"&&Xa("div",{className:"acl-sm__bars",children:A.map((y,w)=>Ze("div",{className:"acl-sm__bar",children:[Xa("div",{className:"bl",children:y.label}),Xa("div",{className:"track",children:Xa("div",{className:"fill",style:{width:y.pct+"%",background:L[w%L.length]}})}),Ze("div",{className:"pc",children:[y.pct,"%"]})]},w))}),_==="donut"&&Ze("div",{className:"acl-sm__donut-wrap",children:[Xa("div",{className:"acl-sm__donut",style:{background:rc(A,L)}}),Xa("div",{className:"acl-sm__legend",children:A.map((y,w)=>Ze("div",{children:[Xa("i",{style:{background:L[w%L.length]}}),y.label," \xB7 ",y.pct,"%"]},w))})]}),_==="plain"&&Xa("div",{className:"acl-sm__nochart",children:"chart hidden"})]})]}),Ze("div",{className:"acl-sm__foot",children:[x&&Xa(p,{kind:"loop",size:60,style:{position:"static"}}),Xa("span",{children:F})]})]})}function rc(t,l){let c=0,k=[];return t.forEach((d,u)=>{let _=l[u%l.length],x=c;c+=d.pct,k.push(`${_} ${x}% ${c}%`)}),`conic-gradient(${k.join(",")})`}kl.defaults={backgroundTheme:"muted",cardCount:4,focusEnabled:!0,focusIndex:3,chartType:"bars",showDecor:!0,eyebrow:"Report Overview",headline:"報告摘要",subheadline:"2024 全年 \xB7 資本大年",summary:"2024 年美國 AI 初創公司吸納約 970 億美元風險投資\uFF0C單筆 \u2265 1 億美元的大額融資事件達 97 筆\u3002",metrics:[{value:"970",unit:"億美元",label:"全年融資總額"},{value:"97",unit:"筆",label:"大額融資事件"},{value:"10",unit:"億美元",label:"平均單筆規模"},{value:"63.9",unit:"%",label:"灣區融資佔比"}],trackTitle:"賽道融資佔比",trackData:[{label:"通用大模型",pct:43.3},{label:"垂直應用",pct:25.3},{label:"基礎設施",pct:16.3},{label:"AI 晶片",pct:10},{label:"其他",pct:5.1}],closingLine:"資本仍在湧入 AI\uFF0C但下一階段會從賭敘事轉向看兌現\u3002",summaryTagLabel:"摘要",focusBadgeLabel:"重點"};kl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:4,min:2,max:4,step:1,label:"指標卡數量",desc:"底部核心指標卡的數量"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一張指標卡"},{key:"focusIndex",type:"number",default:3,min:0,max:3,maxFrom:"cardCount",step:1,label:"重點物件",desc:"被高亮的指標卡序號(從 0 起)"},{key:"chartType",type:"enum",default:"bars",options:["bars","donut",null],label:"圖表型別",desc:"佔比模組的呈現方式\uFF1A條形 / 環形 / 隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var cc=kl.defaults,sc=kl.controls;var vi={};Y(vi,{controls:()=>dc,default:()=>wl,defaults:()=>pc});import"react";import{jsx as ot,jsxs as Ko}from"react/jsx-runtime";function wl(t){let l={...wl.defaults,...t},{backgroundTheme:c,cardCount:k,focusEnabled:d,focusIndex:u,showDecor:_,eyebrow:x,headline:g,subheadline:h,chapters:C,closingLine:P}=l,I=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",A=C.slice(0,k),M=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)"];return Ko("div",{className:"acl-root acl-ch",style:{background:I},children:[ot("style",{children:`
        .acl-ch{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:84px 100px 80px; display:flex; flex-direction:column; }
        .acl-ch__head{ display:flex; align-items:flex-end; gap:30px; }
        .acl-ch__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ch__h{ font-weight:900; font-size:88px; line-height:.95; margin:0; }
        .acl-ch__sub{ font-family:var(--acl-font-hand); font-size:34px; margin-bottom:8px; }
        .acl-ch__row{ flex:1; display:flex; gap:20px; align-items:stretch; margin-top:56px;
          padding-bottom:20px; }
        .acl-ch__card{ flex:1 1 0; min-width:0; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 7px 0 rgba(22,21,15,.15); padding:26px 22px; display:flex;
          flex-direction:column; gap:16px; position:relative; transition:transform .25s;
          align-self:center; height:84%; }
        .acl-ch__card:nth-child(even){ transform:rotate(-1.4deg); }
        .acl-ch__card:nth-child(odd){ transform:rotate(1.1deg); }
        .acl-ch__num{ font-family:var(--acl-font-num); font-size:62px; line-height:.82; }
        .acl-ch__bar{ width:46px; height:7px; background:var(--acl-ink); }
        .acl-ch__name{ font-weight:900; font-size:33px; line-height:1.12; margin-top:auto; }
        .acl-ch__en{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ch__card--focus{ background:var(--acl-ink); color:var(--acl-paper);
          transform:scale(1.06) rotate(-1.5deg) !important; height:96%;
          box-shadow:8px 11px 0 rgba(22,21,15,.3); z-index:3; }
        .acl-ch__card--focus .acl-ch__bar{ background:var(--acl-yellow); }
        .acl-ch__card--focus .acl-ch__num{ color:var(--acl-yellow); }
        .acl-ch__card--focus .acl-ch__en{ color:rgba(255,255,255,.6); }
        .acl-ch__fx{ position:absolute; top:-16px; right:-12px; z-index:4; }
        .acl-ch__foot{ display:flex; align-items:center; gap:16px; font-family:var(--acl-font-hand);
          font-size:30px; margin-top:8px; }
      `}),Ko("div",{className:"acl-ch__head",children:[Ko("div",{children:[ot("div",{className:"acl-ch__eyebrow",children:x}),ot("h1",{className:"acl-ch__h",children:g})]}),ot("div",{className:"acl-ch__sub",children:h}),_&&ot(p,{kind:"arrow",size:84,rotate:6,style:{position:"static"}})]}),ot("div",{className:"acl-ch__row",children:A.map((F,D)=>{let q=d&&D===u;return Ko("div",{className:"acl-ch__card"+(q?" acl-ch__card--focus":""),children:[q&&_&&ot("div",{className:"acl-ch__fx",children:ot(H,{label:l.focusBadgeLabel,color:"var(--acl-yellow)",rotate:8})}),ot("div",{className:"acl-ch__num",style:q?null:{color:M[D%M.length]},children:String(D+1).padStart(2,"0")}),ot("div",{className:"acl-ch__bar"}),ot("div",{className:"acl-ch__name",children:F.name}),ot("div",{className:"acl-ch__en",children:F.en})]},D)})}),Ko("div",{className:"acl-ch__foot",children:[_&&ot(p,{kind:"spark",size:48,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{position:"static"}}),ot("span",{children:P})]})]})}wl.defaults={backgroundTheme:"primary",cardCount:7,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Structure",headline:"報告結構",subheadline:"從方法到結論的閱讀路徑",chapters:[{name:"研究方法",en:"Methodology"},{name:"市場全景",en:"Market Panorama"},{name:"橫向透視",en:"Cross-Section"},{name:"產業鏈",en:"Value Chain"},{name:"典型案例",en:"Case Studies"},{name:"風險展望",en:"Risk & Outlook"},{name:"結論判斷",en:"Conclusion"}],closingLine:"先建立框架\uFF0C再進入資料和判斷\u3002",focusBadgeLabel:"重點"};wl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:7,min:3,max:7,step:1,label:"章節卡數量",desc:"橫向章節卡的數量"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一張章節卡"},{key:"focusIndex",type:"number",default:1,min:0,max:6,maxFrom:"cardCount",step:1,label:"重點物件",desc:"被突出的章節序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var pc=wl.defaults,dc=wl.controls;var yi={};Y(yi,{controls:()=>fc,default:()=>Nl,defaults:()=>mc});import hi from"react";var $=(t,l=0)=>{let c=Number(t);return Number.isFinite(c)?c:l},j=t=>Array.isArray(t)?t:[],Pa=(t,l=1)=>{let c=Number(t);return Number.isFinite(c)&&c!==0?c:l},X=(t,l=1)=>{let c=-1/0;for(let k of j(t)){let d=Number(k);Number.isFinite(d)&&d>c&&(c=d)}return c===-1/0?l:c},or=(t,l=0)=>{let c=1/0;for(let k of j(t)){let d=Number(k);Number.isFinite(d)&&d<c&&(c=d)}return c===1/0?l:c},Q=(t,l,c)=>{let k=$(t,l);return Math.min(Math.max(k,l),c)},G=(t,l,c=0)=>{let k=Number(t),d=Number(l);return!Number.isFinite(k)||!Number.isFinite(d)||d===0?c:k/d};import{jsx as $a,jsxs as Oe}from"react/jsx-runtime";var ir=t=>{let l=Number.isFinite(t)&&t>0?t:1,c=Math.pow(10,Math.floor(Math.log10(l)));return Math.ceil(l/c)*c>=l*1.08?Math.ceil(l/c)*c:Math.ceil(l*1.12/c)*c};function Nl(t){let l={...Nl.defaults,...t},{backgroundTheme:c,chartType:k,focusEnabled:d,focusIndex:u,showTrendLine:_,showValueLabels:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,points:A,amountUnit:M,countUnit:F,peakNote:D,trendNote:q,closingLine:N}=l,z=j(A),L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=z.length,w=Q(u,0,Math.max(0,y-1)),v=z[w]||{},m=1500,f=360,n=m/Pa(y,1),s=Math.min(150,n*.42),i=ir(X(z.map(B=>$(B?.amount)),1)),a=ir(X(z.map(B=>$(B?.count)),1)),e=B=>n*(B+.5),o=B=>f-$(B)/i*f,r=B=>f-$(B)/a*f*.84-f*.08,b=z.map((B,S)=>`${S?"L":"M"}${e(S).toFixed(1)} ${o(B?.amount).toFixed(1)}`).join(" "),R=`${b} L${e(Math.max(0,y-1)).toFixed(1)} ${f} L${e(0).toFixed(1)} ${f} Z`,E=z.map((B,S)=>`${S?"L":"M"}${e(S).toFixed(1)} ${r(B?.count).toFixed(1)}`).join(" "),T=[.25,.5,.75,1].map(B=>f-B*f);return Oe("div",{className:"acl-root acl-tr",style:{background:L},children:[$a("style",{children:`
        .acl-tr{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-tr__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-tr__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-tr__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-tr__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-tr__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-tr__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-tr__panel{ position:relative; flex:1; margin-top:34px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:34px 46px 30px; display:flex; flex-direction:column; }
        .acl-tr__legend{ display:flex; gap:26px; align-items:center; font-family:var(--acl-font-mono);
          font-size:17px; font-weight:700; }
        .acl-tr__legend span{ display:flex; align-items:center; gap:9px; white-space:nowrap; flex:0 0 auto; }
        .acl-tr__legend i{ width:22px; height:12px; }
        .acl-tr__legend .ln{ width:26px; height:0; border-top:3px dashed var(--acl-blue); }
        .acl-tr__plot{ position:relative; flex:1; margin-top:18px; }
        .acl-tr__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.16); }
        .acl-tr__gridv{ position:absolute; font-family:var(--acl-font-mono); font-size:13px;
          color:rgba(22,21,15,.4); left:0; transform:translateY(-50%); }
        .acl-tr__bars{ position:absolute; left:0; bottom:0; width:100%; height:100%; }
        .acl-tr__bar{ position:absolute; bottom:0; background:var(--acl-ink);
          box-shadow:3px 0 0 rgba(22,21,15,.12); transition:height .4s, background .3s; }
        .acl-tr__bar--focus{ background:var(--acl-pink); box-shadow:3px 3px 0 rgba(22,21,15,.22); }
        .acl-tr__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-tr__vlabel{ position:absolute; transform:translate(-50%,-100%); font-family:var(--acl-font-num);
          font-size:34px; line-height:1; color:var(--acl-ink); white-space:nowrap;
          text-shadow:0 0 7px var(--acl-paper), 0 0 7px var(--acl-paper), 0 0 7px var(--acl-paper); }
        .acl-tr__vlabel em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; color:rgba(22,21,15,.55); }
        .acl-tr__vlabel--focus{ color:var(--acl-pink); }
        .acl-tr__dot{ position:absolute; width:15px; height:15px; border-radius:50%;
          background:var(--acl-blue); border:3px solid var(--acl-ink); transform:translate(-50%,-50%); }
        .acl-tr__xaxis{ display:flex; margin-top:14px; }
        .acl-tr__xtick{ flex:1; text-align:center; }
        .acl-tr__xtick b{ display:block; font-weight:900; font-size:30px; }
        .acl-tr__xtick span{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-tr__xtick em{ display:block; font-style:normal; font-weight:700; font-size:18px;
          color:rgba(22,21,15,.66); margin-top:2px; }
        .acl-tr__xtick--focus b, .acl-tr__xtick--focus em{ color:var(--acl-pink); }
        .acl-tr__anno{ position:absolute; font-family:var(--acl-font-hand); font-size:30px;
          color:var(--acl-ink); white-space:nowrap; z-index:5; }
        .acl-tr__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-tr__bar{ animation:acl-tr-grow .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-tr-grow{ from{ transform:scaleY(0); transform-origin:bottom; } to{ transform:none; } }
      `}),Oe("div",{className:"acl-tr__head",children:[Oe("div",{children:[$a("div",{className:"acl-tr__eyebrow",children:h}),$a("h1",{className:"acl-tr__h",children:C})]}),$a("div",{className:"acl-tr__sub",children:P}),$a("div",{className:"acl-tr__summary",dangerouslySetInnerHTML:{__html:I}})]}),Oe("div",{className:"acl-tr__panel",children:[Oe("div",{className:"acl-tr__legend",children:[Oe("span",{children:[$a("i",{style:{background:"var(--acl-ink)"}}),"融資額 \xB7 ",M]}),_&&Oe("span",{children:[$a("i",{className:"ln"}),"事件數 \xB7 ",F]}),g&&$a(p,{kind:"spark",size:38,rotate:8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto"}})]}),Oe("div",{className:"acl-tr__plot",children:[T.map((B,S)=>Oe(hi.Fragment,{children:[$a("div",{className:"acl-tr__grid",style:{top:`${B/f*100}%`}}),$a("div",{className:"acl-tr__gridv",style:{top:`${B/f*100}%`},children:Math.round(i*(1-B/f))})]},S)),k==="column"&&$a("div",{className:"acl-tr__bars",children:z.map((B,S)=>$a("div",{className:"acl-tr__bar"+(d&&S===u?" acl-tr__bar--focus":""),style:{left:`${(e(S)-s/2)/m*100}%`,width:`${s/m*100}%`,height:`${(f-o(B.amount))/f*100}%`}},S))}),Oe("svg",{className:"acl-tr__svg",viewBox:`0 0 ${m} ${f}`,preserveAspectRatio:"none",children:[k==="area"&&$a("path",{d:R,fill:"var(--acl-pink)",fillOpacity:"0.9",stroke:"none",vectorEffect:"non-scaling-stroke"}),(k==="area"||k==="line")&&$a("path",{d:b,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"4",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),_&&$a("path",{d:E,fill:"none",stroke:"var(--acl-blue)",strokeWidth:"3.5",strokeDasharray:"3 7",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),z.map((B,S)=>{let V=d&&S===u,O=o(B.amount);return Oe(hi.Fragment,{children:[_&&$a("div",{className:"acl-tr__dot",style:{left:`${e(S)/m*100}%`,top:`${r(B.count)/f*100}%`}}),x&&Oe("div",{className:"acl-tr__vlabel"+(V?" acl-tr__vlabel--focus":""),style:{left:`${e(S)/m*100}%`,top:`calc(${O/f*100}% - 22px)`,transform:"translate(-50%,-100%)"},children:[B.amount,$a("em",{children:M})]})]},S)}),g&&d&&Oe(hi.Fragment,{children:[$a("div",{className:"acl-tr__anno",style:{left:`${e(u)/m*100}%`,top:-6,transform:"translateX(-50%)"},children:D}),$a("div",{className:"fx",style:{position:"absolute",left:`${e(u)/m*100}%`,top:`${o(v.amount)/f*100}%`,transform:`translate(${s/2+16}px,-4px)`,zIndex:6},children:$a(H,{label:l.peakBadgeLabel,color:"var(--acl-yellow)",rotate:6})})]})]}),$a("div",{className:"acl-tr__xaxis",children:z.map((B,S)=>Oe("div",{className:"acl-tr__xtick"+(d&&S===u?" acl-tr__xtick--focus":""),children:[$a("b",{children:B.label}),$a("span",{children:B.sub}),Oe("em",{children:[B.count," ",F]})]},S))})]}),Oe("div",{className:"acl-tr__foot",children:[g&&$a(p,{kind:"loop",size:56,style:{position:"static"}}),$a("span",{children:N})]})]})}Nl.defaults={backgroundTheme:"primary",chartType:"column",focusEnabled:!0,focusIndex:2,showTrendLine:!0,showValueLabels:!0,showDecor:!0,eyebrow:"Market Panorama",headline:"市場全景 \xB7 縱向趨勢",subheadline:"逐季度融資額走勢",summary:"熱度在 <b>Q2 與 Q3 達峰</b>\uFF0CQ4 理性回落但仍處高位\u3002",points:[{label:"Q1",sub:"Jan\u2013Mar",amount:162,count:18},{label:"Q2",sub:"Apr\u2013Jun",amount:284,count:26},{label:"Q3",sub:"Jul\u2013Sep",amount:318,count:31},{label:"Q4",sub:"Oct\u2013Dec",amount:206,count:22}],amountUnit:"億美元",countUnit:"筆",peakNote:"全年最高點 \u2192",trendNote:"事件數同步走高",closingLine:"高峰過後不是崩塌\uFF0C而是市場開始篩選\u3002",peakBadgeLabel:"峰值"};Nl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"column",options:["column","area","line"],label:"圖表型別",desc:"主資料系列的呈現\uFF1A柱狀 / 面積 / 折線"},{key:"showTrendLine",type:"boolean",default:!0,label:"副線(事件數)",desc:"疊加第二條趨勢線及節點"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"在資料點上顯示數值"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個資料點(峰值)"},{key:"focusIndex",type:"number",default:2,min:0,max:3,step:1,label:"重點物件",desc:"被高亮的資料點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var mc=Nl.defaults,fc=Nl.controls;var ki={};Y(ki,{controls:()=>uc,default:()=>zl,defaults:()=>gc});import"react";import{jsx as Fa,jsxs as ke}from"react/jsx-runtime";var cl=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-red)","rgba(22,21,15,.32)"];function zl(t){let l={...zl.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,focusEnabled:u,focusIndex:_,showRounds:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,segments:A,shareTitle:M,rounds:F,roundsTitle:D,closingLine:q,shareTag:N,roundsTag:z,winnerStickerLabel:L}=l,y=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",w=j(A),v=w.slice(0,Math.max(0,$(d,w.length))),m=v.reduce((a,e)=>a+$(e?.pct),0),f=Q(_,0,Math.max(0,v.length-1)),n=v[f]||v[0]||{},s=0,i=v.map((a,e)=>{let o=G(s,m,0)*100;return s+=$(a?.pct),`${cl[e%cl.length]} ${o}% ${G(s,m,0)*100}%`}).join(",");return ke("div",{className:"acl-root acl-cs",style:{background:y},children:[Fa("style",{children:`
        .acl-cs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-cs__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-cs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-cs__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-cs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-cs__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-cs__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-cs__body{ flex:1; display:flex; gap:46px; margin-top:34px; align-items:stretch; }
        .acl-cs__panel{ background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:8px 10px 0 rgba(22,21,15,.16); padding:30px 36px; display:flex; flex-direction:column;
          position:relative; }
        .acl-cs__panel.left{ flex:0 0 ${x?720:1280}px; }
        .acl-cs__panel.right{ flex:1; }
        .acl-cs__ptitle{ font-weight:900; font-size:28px; margin:0 0 6px; display:flex;
          align-items:center; gap:12px; }
        .acl-cs__ptag{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:18px; }
        /* donut */
        .acl-cs__donutwrap{ flex:1; display:flex; align-items:center; gap:38px; }
        .acl-cs__donut{ position:relative; width:300px; height:300px; border-radius:50%; flex:0 0 auto;
          box-shadow:5px 7px 0 rgba(22,21,15,.16); }
        .acl-cs__donut::after{ content:""; position:absolute; inset:74px; border-radius:50%;
          background:var(--acl-paper); display:grid; }
        .acl-cs__dcenter{ position:absolute; inset:74px; border-radius:50%; z-index:2; display:flex;
          flex-direction:column; align-items:center; justify-content:center; text-align:center; }
        .acl-cs__dcenter b{ font-family:var(--acl-font-num); font-size:44px; line-height:.84;
          letter-spacing:-.01em; color:var(--acl-pink); }
        .acl-cs__dcenter span{ font-weight:700; font-size:17px; max-width:130px; line-height:1.2; margin-top:6px; }
        .acl-cs__legend{ flex:1; display:flex; flex-direction:column; gap:13px; }
        .acl-cs__lrow{ display:grid; grid-template-columns:20px 1fr auto; align-items:center; gap:12px;
          font-weight:700; font-size:21px; padding:6px 10px; }
        .acl-cs__lrow i{ width:20px; height:20px; }
        .acl-cs__lrow .pc{ font-family:var(--acl-font-num); font-size:28px; }
        .acl-cs__lrow--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:rotate(-1deg);
          box-shadow:4px 5px 0 rgba(22,21,15,.2); }
        /* bars (share) */
        .acl-cs__bars{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:20px; }
        .acl-cs__bar{ display:grid; grid-template-columns:210px 1fr 86px; align-items:center; gap:16px; }
        .acl-cs__bar .bl{ font-weight:700; font-size:23px; }
        .acl-cs__bar .track{ height:34px; background:rgba(22,21,15,.08); }
        .acl-cs__bar .fill{ height:100%; transition:width .5s; }
        .acl-cs__bar .pc{ font-family:var(--acl-font-num); font-size:32px; text-align:right; }
        .acl-cs__bar--focus .bl{ color:var(--acl-pink); }
        /* rounds */
        .acl-cs__rounds{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:22px; }
        .acl-cs__round{ position:relative; }
        .acl-cs__rtop{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:7px; }
        .acl-cs__rtop b{ font-weight:900; font-size:23px; }
        .acl-cs__rtop em{ font-style:normal; font-family:var(--acl-font-mono); font-size:15px;
          color:rgba(22,21,15,.5); }
        .acl-cs__rtrack{ height:26px; background:rgba(22,21,15,.08); position:relative; }
        .acl-cs__rfill{ height:100%; display:flex; align-items:center; justify-content:flex-end;
          padding-right:10px; font-family:var(--acl-font-num); font-size:20px; color:var(--acl-paper);
          transition:width .5s; }
        .acl-cs__round--focus .acl-cs__rfill{ background:var(--acl-ink) !important; }
        .acl-cs__rfx{ position:absolute; top:34px; right:20px; z-index:3; }
        .acl-cs__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; }
      `}),ke("div",{className:"acl-cs__head",children:[ke("div",{children:[Fa("div",{className:"acl-cs__eyebrow",children:h}),Fa("h1",{className:"acl-cs__h",children:C})]}),Fa("div",{className:"acl-cs__sub",children:P}),Fa("div",{className:"acl-cs__summary",dangerouslySetInnerHTML:{__html:I}})]}),ke("div",{className:"acl-cs__body",children:[ke("div",{className:"acl-cs__panel left",children:[ke("h3",{className:"acl-cs__ptitle",children:[M,g&&Fa(p,{kind:"arrowS",size:40,rotate:-18,style:{position:"static"}})]}),Fa("div",{className:"acl-cs__ptag",children:N}),k==="donut"&&ke("div",{className:"acl-cs__donutwrap",children:[Fa("div",{className:"acl-cs__donut",style:{background:`conic-gradient(${i})`},children:ke("div",{className:"acl-cs__dcenter",children:[ke("b",{children:[$(n.pct),"%"]}),Fa("span",{children:u?n.label:M})]})}),Fa("div",{className:"acl-cs__legend",children:v.map((a,e)=>ke("div",{className:"acl-cs__lrow"+(u&&e===f?" acl-cs__lrow--focus":""),children:[Fa("i",{style:{background:cl[e%cl.length]}}),Fa("span",{children:a.label}),ke("span",{className:"pc",children:[$(a?.pct),"%"]})]},e))})]}),k==="bars"&&Fa("div",{className:"acl-cs__bars",children:v.map((a,e)=>{let o=u&&e===f,r=G($(a?.pct),X(v.map(b=>$(b?.pct)),1))*100;return ke("div",{className:"acl-cs__bar"+(o?" acl-cs__bar--focus":""),children:[Fa("div",{className:"bl",children:a.label}),Fa("div",{className:"track",children:Fa("div",{className:"fill",style:{width:r+"%",background:cl[e%cl.length]}})}),ke("div",{className:"pc",children:[$(a?.pct),"%"]})]},e)})})]}),x&&ke("div",{className:"acl-cs__panel right",children:[ke("h3",{className:"acl-cs__ptitle",children:[D,g&&Fa(p,{kind:"spark",size:36,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})]}),Fa("div",{className:"acl-cs__ptag",children:z}),Fa("div",{className:"acl-cs__rounds",children:j(F).map((a,e)=>{let o=$(a?.pct);return ke("div",{className:"acl-cs__round"+(a?.focus?" acl-cs__round--focus":""),children:[a?.focus&&g&&Fa("div",{className:"acl-cs__rfx",children:Fa(H,{label:L,color:"var(--acl-yellow)",rotate:5})}),ke("div",{className:"acl-cs__rtop",children:[Fa("b",{children:a?.label}),Fa("em",{children:a?.note})]}),Fa("div",{className:"acl-cs__rtrack",children:ke("div",{className:"acl-cs__rfill",style:{width:o+"%",background:cl[e%cl.length]},children:[o,"%"]})})]},e)})})]})]}),ke("div",{className:"acl-cs__foot",children:[g&&Fa(p,{kind:"loop",size:56,style:{position:"static"}}),Fa("span",{children:q})]})]})}zl.defaults={backgroundTheme:"muted",chartType:"donut",segmentCount:5,focusEnabled:!0,focusIndex:0,showRounds:!0,showDecor:!0,eyebrow:"Cross-Section",headline:"橫向透視 \xB7 賽道與輪次",subheadline:"錢流向哪些賽道和階段",summary:"通用大模型仍是<b>最大吸金賽道</b>\uFF0C後期輪與未披露輪體現頭部贏家通吃\u3002",shareTitle:"賽道融資佔比",shareTag:"Share of Funding \xB7 %",segments:[{label:"通用大模型",pct:43.3},{label:"垂直應用",pct:25.3},{label:"基礎設施",pct:16.3},{label:"AI 晶片",pct:10},{label:"其他",pct:5.1}],roundsTitle:"輪次結構",roundsTag:"Stage Structure \xB7 share of amount",winnerStickerLabel:"贏家通吃",rounds:[{label:"後期輪 D+",pct:38,note:"avg 18.6 億美元",focus:!0},{label:"未披露輪",pct:26,note:"戰略 / 資源置換"},{label:"B / C 輪",pct:24,note:"加速擴張"},{label:"早期 Seed / A",pct:12,note:"新主題萌芽"}],closingLine:"融資額排名背後\uFF0C是資本對敘事與兌現的雙重押注\u3002"};zl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"donut",options:["donut","bars"],label:"圖表型別",desc:"佔比模組的呈現\uFF1A環形 / 條形"},{key:"segmentCount",type:"number",default:5,min:3,max:5,step:1,label:"分段數量",desc:"佔比分段(賽道)的數量"},{key:"showRounds",type:"boolean",default:!0,label:"副面板(輪次)",desc:"右側輪次結構面板的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個分段"},{key:"focusIndex",type:"number",default:0,min:0,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的分段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var gc=zl.defaults,uc=zl.controls;var wi={};Y(wi,{controls:()=>xc,default:()=>El,defaults:()=>_c});import"react";import{jsx as Sa,jsxs as Et}from"react/jsx-runtime";var ci=["var(--acl-blue)","var(--acl-pink)","var(--acl-red)"];function El(t){let l={...El.defaults,...t},{backgroundTheme:c,layerCount:k,focusEnabled:d,focusIndex:u,showRegion:_,regionCount:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,layers:A,regionTitle:M,regions:F,closingLine:D,focusStickerLabel:q,regionTag:N,moatStickerLabel:z}=l,L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=j(A).slice(0,$(k,A?.length)),w=Q(u,0,Math.max(0,y.length-1)),v=j(F).slice(0,$(x,F?.length)),m=X(v.map(f=>$(f?.pct)),1);return Et("div",{className:"acl-root acl-vc",style:{background:L},children:[Sa("style",{children:`
        .acl-vc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-vc__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-vc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-vc__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-vc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-vc__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-vc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-vc__body{ flex:1; display:flex; gap:46px; margin-top:32px; align-items:stretch; }
        .acl-vc__chain{ flex:1; display:flex; flex-direction:column; gap:18px; min-width:0; }
        .acl-vc__band{ flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.15); padding:22px 30px; display:flex; align-items:center;
          gap:28px; position:relative; transition:transform .25s; }
        .acl-vc__axis{ font-family:var(--acl-font-num); font-size:72px; line-height:.8; flex:0 0 auto;
          width:96px; text-align:center; }
        .acl-vc__mid{ flex:1; min-width:0; }
        .acl-vc__name{ font-weight:900; font-size:34px; line-height:1; }
        .acl-vc__en{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:4px 0 12px; }
        .acl-vc__chips{ display:flex; flex-wrap:wrap; gap:9px; }
        .acl-vc__chip{ font-weight:700; font-size:19px; padding:6px 14px; border:2px solid var(--acl-ink);
          background:var(--acl-yellow); }
        .acl-vc__note{ flex:0 0 200px; text-align:right; font-weight:700; font-size:21px;
          line-height:1.3; color:rgba(22,21,15,.7); }
        .acl-vc__band--focus{ background:var(--acl-ink); color:var(--acl-paper);
          transform:scale(1.025); z-index:3; box-shadow:9px 11px 0 rgba(22,21,15,.28); }
        .acl-vc__band--focus .acl-vc__axis{ color:var(--acl-yellow); }
        .acl-vc__band--focus .acl-vc__en{ color:rgba(255,255,255,.55); }
        .acl-vc__band--focus .acl-vc__chip{ background:transparent; border-color:var(--acl-yellow);
          color:var(--acl-yellow); }
        .acl-vc__band--focus .acl-vc__note{ color:rgba(255,255,255,.8); }
        .acl-vc__fx{ position:absolute; top:-16px; right:-12px; z-index:5; }
        .acl-vc__flow{ position:absolute; left:54px; bottom:-22px; z-index:4; }
        /* region panel */
        .acl-vc__region{ flex:0 0 540px; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:8px 10px 0 rgba(22,21,15,.16); padding:30px 36px; display:flex; flex-direction:column;
          position:relative; }
        .acl-vc__rtitle{ font-weight:900; font-size:28px; margin:0 0 4px; display:flex; align-items:center; gap:12px; }
        .acl-vc__rtag{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:22px; }
        .acl-vc__rlist{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:20px; }
        .acl-vc__rrow{ position:relative; }
        .acl-vc__rtop{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:7px; }
        .acl-vc__rtop b{ font-weight:900; font-size:22px; }
        .acl-vc__rtop .pc{ font-family:var(--acl-font-num); font-size:30px; }
        .acl-vc__rtrack{ height:22px; background:rgba(22,21,15,.08); }
        .acl-vc__rfill{ height:100%; transition:width .5s; }
        .acl-vc__rfx{ position:absolute; right:-8px; top:-22px; z-index:3; }
        .acl-vc__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; }
      `}),Et("div",{className:"acl-vc__head",children:[Et("div",{children:[Sa("div",{className:"acl-vc__eyebrow",children:h}),Sa("h1",{className:"acl-vc__h",children:C})]}),Sa("div",{className:"acl-vc__sub",children:P}),Sa("div",{className:"acl-vc__summary",dangerouslySetInnerHTML:{__html:I}})]}),Et("div",{className:"acl-vc__body",children:[Sa("div",{className:"acl-vc__chain",children:y.map((f,n)=>{let s=d&&n===w;return Et("div",{className:"acl-vc__band"+(s?" acl-vc__band--focus":""),children:[s&&g&&Sa("div",{className:"acl-vc__fx",children:Sa(H,{label:q,color:"var(--acl-yellow)",rotate:6})}),Sa("div",{className:"acl-vc__axis",style:s?null:{color:ci[n%ci.length]},children:f.axis}),Et("div",{className:"acl-vc__mid",children:[Sa("div",{className:"acl-vc__name",children:f.name}),Sa("div",{className:"acl-vc__en",children:f.en}),Sa("div",{className:"acl-vc__chips",children:f.items.map((i,a)=>Sa("span",{className:"acl-vc__chip",children:i},a))})]}),Sa("div",{className:"acl-vc__note",children:f.note}),g&&n<y.length-1&&Sa("div",{className:"acl-vc__flow",children:Sa(p,{kind:"arrow",size:54,rotate:92,color:"var(--acl-pink)",style:{position:"static"}})})]},n)})}),_&&Et("div",{className:"acl-vc__region",children:[Et("h3",{className:"acl-vc__rtitle",children:[M,g&&Sa(p,{kind:"spark",size:36,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})]}),Sa("div",{className:"acl-vc__rtag",children:N}),Sa("div",{className:"acl-vc__rlist",children:v.map((f,n)=>Et("div",{className:"acl-vc__rrow",children:[f.focus&&g&&Sa("div",{className:"acl-vc__rfx",children:Sa(H,{label:z,color:"var(--acl-pink)",rotate:4})}),Et("div",{className:"acl-vc__rtop",children:[Sa("b",{children:f.label}),Et("span",{className:"pc",children:[$(f?.pct),"%"]})]}),Sa("div",{className:"acl-vc__rtrack",children:Sa("div",{className:"acl-vc__rfill",style:{width:G($(f?.pct),m)*100+"%",background:f.focus?"var(--acl-ink)":ci[n%ci.length]}})})]},n))})]})]}),Et("div",{className:"acl-vc__foot",children:[g&&Sa(p,{kind:"loop",size:56,style:{position:"static"}}),Sa("span",{children:D})]})]})}El.defaults={backgroundTheme:"primary",layerCount:3,focusEnabled:!0,focusIndex:1,showRegion:!0,regionCount:5,showDecor:!0,eyebrow:"Value Chain",headline:"產業鏈分層透視",subheadline:"上游\u3001中游\u3001下游的資本位置",summary:"AI 融資沿基礎設施\u3001模型與應用<b>三層展開</b>\uFF0C地區上高度集中於灣區\u3002",layers:[{axis:"上",name:"上游 \xB7 基礎設施",en:"Infrastructure",items:["算力","AI 晶片","資料"],note:"資本確定性最高"},{axis:"中",name:"中游 \xB7 模型層",en:"Model Layer",items:["通用模型","專用模型"],note:"敘事與估值集中"},{axis:"下",name:"下游 \xB7 應用層",en:"Application",items:["企業應用","AI 搜尋","機器人"],note:"商業兌現待驗證"}],regionTitle:"地區分佈",focusStickerLabel:"資本焦點",regionTag:"Geographic Share \xB7 %",moatStickerLabel:"地理護城河",regions:[{label:"舊金山灣區",pct:63.9,focus:!0},{label:"紐約",pct:12.4},{label:"西雅圖",pct:9.8},{label:"波士頓",pct:7.7},{label:"其他地區",pct:6.2}],closingLine:"產業鏈分層\uFF0C決定了資本確定性與商業風險的不同位置\u3002"};El.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"layerCount",type:"number",default:3,min:2,max:3,step:1,label:"分層數量",desc:"產業鏈層數(上/中/下游)"},{key:"showRegion",type:"boolean",default:!0,label:"型別面板",desc:"右側型別分佈面板的顯示/隱藏"},{key:"regionCount",type:"number",default:5,min:3,max:5,step:1,label:"型別數量",desc:"型別分佈條的數量"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一層"},{key:"focusIndex",type:"number",default:1,min:0,max:2,step:1,label:"重點物件",desc:"被突出的分層序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var _c=El.defaults,xc=El.controls;var Ni={};Y(Ni,{controls:()=>hc,default:()=>Cl,defaults:()=>vc});import bc from"react";import{jsx as Ga,jsxs as Ct}from"react/jsx-runtime";function Cl(t){let l={...Cl.defaults,...t},{backgroundTheme:c,mediaCount:k,focusEnabled:d,focusIndex:u,showStats:_,showDecor:x,eyebrow:g,headline:h,subheadline:C,summary:P,cases:I,collage:A,closingLine:M,focusStickerLabel:F}=l,D=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",q=Math.min(u,I.length-1),N=A[k]||[],z=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"];return Ct("div",{className:"acl-root acl-ca",style:{background:D},children:[Ga("style",{children:`
        .acl-ca{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-ca__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-ca__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ca__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-ca__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ca__body{ flex:1; display:flex; gap:40px; margin-top:30px; min-height:0; }
        .acl-ca__left{ flex:0 0 640px; display:flex; flex-direction:column; }
        .acl-ca__summary{ font-weight:700; font-size:25px; line-height:1.46; margin-bottom:26px; }
        .acl-ca__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-ca__list{ flex:1; display:flex; flex-direction:column; gap:16px; }
        .acl-ca__case{ flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 7px 0 rgba(22,21,15,.14); padding:18px 24px; display:flex; align-items:center;
          gap:22px; position:relative; transition:transform .25s; }
        .acl-ca__idx{ font-family:var(--acl-font-num); font-size:50px; line-height:.8; flex:0 0 auto;
          width:60px; }
        .acl-ca__cmid{ flex:1; min-width:0; }
        .acl-ca__crow{ display:flex; align-items:baseline; gap:12px; min-width:0; }
        .acl-ca__cname{ font-weight:900; font-size:30px; line-height:1; white-space:nowrap; }
        .acl-ca__ctag{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; padding:3px 9px; background:var(--acl-ink); color:var(--acl-paper);
          white-space:nowrap; flex:0 0 auto; }
        .acl-ca__clogic{ font-weight:700; font-size:19px; color:rgba(22,21,15,.66); margin-top:6px; }
        .acl-ca__cstats{ display:flex; gap:16px; flex:0 0 auto; }
        .acl-ca__stat{ text-align:right; white-space:nowrap; }
        .acl-ca__stat .k{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); white-space:nowrap; }
        .acl-ca__stat .v{ font-family:var(--acl-font-num); font-size:25px; line-height:1; white-space:nowrap; }
        .acl-ca__case--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:scale(1.02);
          z-index:2; box-shadow:8px 10px 0 rgba(22,21,15,.26); }
        .acl-ca__case--focus .acl-ca__ctag{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-ca__case--focus .acl-ca__clogic{ color:rgba(255,255,255,.78); }
        .acl-ca__case--focus .acl-ca__stat .k{ color:rgba(255,255,255,.5); }
        .acl-ca__case--focus .acl-ca__idx{ color:var(--acl-yellow); }
        .acl-ca__cfx{ position:absolute; top:-15px; right:-12px; z-index:4; }
        /* collage stage */
        .acl-ca__stage{ flex:1; position:relative; min-width:0; }
        .acl-ca__slot{ position:absolute; }
        .acl-ca__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-ca__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; }
      `}),Ct("div",{className:"acl-ca__head",children:[Ct("div",{children:[Ga("div",{className:"acl-ca__eyebrow",children:g}),Ga("h1",{className:"acl-ca__h",children:h})]}),Ga("div",{className:"acl-ca__sub",children:C}),x&&Ga(p,{kind:"spark",size:46,rotate:8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),Ct("div",{className:"acl-ca__body",children:[Ct("div",{className:"acl-ca__left",children:[Ga("div",{className:"acl-ca__summary",dangerouslySetInnerHTML:{__html:P}}),Ga("div",{className:"acl-ca__list",children:I.map((L,y)=>{let w=d&&y===q;return Ct("div",{className:"acl-ca__case"+(w?" acl-ca__case--focus":""),children:[w&&x&&Ga("div",{className:"acl-ca__cfx",children:Ga(H,{label:F,color:"var(--acl-yellow)",rotate:6})}),Ga("div",{className:"acl-ca__idx",style:w?null:{color:z[y%z.length]},children:String(y+1).padStart(2,"0")}),Ct("div",{className:"acl-ca__cmid",children:[Ct("div",{className:"acl-ca__crow",children:[Ga("span",{className:"acl-ca__cname",children:L.company}),Ga("span",{className:"acl-ca__ctag",children:L.tag})]}),Ga("div",{className:"acl-ca__clogic",children:L.logic})]}),_&&Ga("div",{className:"acl-ca__cstats",children:L.metrics.map((v,m)=>Ct("div",{className:"acl-ca__stat",children:[Ga("div",{className:"k",children:v.k}),Ga("div",{className:"v",children:v.v})]},m))})]},y)})})]}),Ct("div",{className:"acl-ca__stage",children:[N.length===0&&Ga("div",{className:"acl-ca__empty",children:"// 圖片數量 = 0"}),N.map((L,y)=>{let w=I[y%I.length];return Ga("div",{className:"acl-ca__slot",style:{left:L.l,top:L.t},children:Ga(W,{id:"case-"+y,box:L.box,rotate:L.r,ratio:L.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:w?w.company:"FIG."+(y+1),sub:w?w.tag:null,color:L.color,subColor:"var(--acl-ink)",rotate:L.sr}})},y)}),x&&N.length>0&&Ct(bc.Fragment,{children:[Ga(p,{kind:"arrow",size:84,rotate:150,color:"var(--acl-ink)",style:{left:-10,top:-20}}),Ga(p,{kind:"heart",size:40,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:10,bottom:40}}),Ga(p,{kind:"spark",size:32,rotate:6,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:120,top:8}})]})]})]}),Ct("div",{className:"acl-ca__foot",children:[x&&Ga(p,{kind:"loop",size:56,style:{position:"static"}}),Ga("span",{children:M})]})]})}Cl.defaults={images:[],backgroundTheme:"muted",mediaCount:3,focusEnabled:!0,focusIndex:0,showStats:!0,showDecor:!0,eyebrow:"Case Studies",headline:"典型案例深度剖析",subheadline:"三類資本邏輯的代表公司",summary:"Anthropic\u3001xAI 與 CoreWeave 分別代表<b>安全模型\u3001實時資料生態與算力基礎設施</b>三類資本邏輯\u3002",focusStickerLabel:"焦點案例",cases:[{company:"Anthropic",tag:"模型公司",logic:"安全對齊 \xB7 可信企業級模型",metrics:[{k:"累計融資",v:"650億"},{k:"方向",v:"Claude"}]},{company:"xAI",tag:"生態公司",logic:"實時資料 \xB7 多模態生態",metrics:[{k:"單筆融資",v:"50億"},{k:"入口",v:"X"}]},{company:"CoreWeave",tag:"基礎設施",logic:"GPU 雲 \xB7 算力資源稀缺",metrics:[{k:"融資額",v:"110億"},{k:"GPU",v:"7.8萬"}]}],collage:{0:[],1:[{l:220,t:120,box:460,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)"}],2:[{l:70,t:60,box:380,r:-4,ratio:1.2,sr:-4,color:"var(--acl-yellow)"},{l:430,t:350,box:360,r:4,ratio:.82,sr:3,color:"var(--acl-blue)"}],3:[{l:320,t:20,box:360,r:3,ratio:.84,sr:-4,color:"var(--acl-yellow)"},{l:30,t:250,box:320,r:-5,ratio:1.22,sr:4,color:"var(--acl-blue)"},{l:470,t:400,box:280,r:5,ratio:.8,sr:-3,color:"var(--acl-pink)"}],4:[{l:360,t:0,box:300,r:3,ratio:.84,sr:-4,color:"var(--acl-yellow)"},{l:40,t:110,box:270,r:-5,ratio:.9,sr:4,color:"var(--acl-blue)"},{l:160,t:420,box:290,r:4,ratio:1.2,sr:-3,color:"var(--acl-pink)"},{l:540,t:360,box:260,r:-4,ratio:.82,sr:5,color:"var(--acl-red)"}]},closingLine:"不同案例指向同一個問題\uFF1A技術優勢能否轉成可持續收入\u3002"};Cl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showStats",type:"boolean",default:!0,label:"案例指標",desc:"案例行右側的關鍵指標顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個案例"},{key:"focusIndex",type:"number",default:0,min:0,max:2,step:1,label:"重點物件",desc:"被突出的案例序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var vc=Cl.defaults,hc=Cl.controls;var zi={};Y(zi,{controls:()=>Nc,default:()=>sl,defaults:()=>wc});import"react";import{jsx as $e,jsxs as mt}from"react/jsx-runtime";var Fl=["#E7E6EE","#8DBEEC","#ECEF35","#FF3D97","#E83B22"],yc=(t,l,c)=>{let k=[parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)],d=[parseInt(l.slice(1,3),16),parseInt(l.slice(3,5),16),parseInt(l.slice(5,7),16)],u=k.map((_,x)=>Math.round(_+(d[x]-_)*c));return`rgb(${u[0]},${u[1]},${u[2]})`},kc=t=>{let l=Math.max(0,Math.min(1,t))*(Fl.length-1),c=Math.floor(l);return c>=Fl.length-1?Fl[Fl.length-1]:yc(Fl[c],Fl[c+1],l-c)};function sl(t={}){let l={...sl.defaults,...t},{backgroundTheme:c,columnCount:k,showValueLabels:d,showScale:u,showDecor:_,eyebrow:x,headline:g,subheadline:h,summary:C,cells:P,unit:I,peakNote:A,closingLine:M,insightText:F}=l,D=t.highlightIndex??t.highlightCount??l.highlightIndex,q=Number.isFinite(Number(D))?Number(D):sl.defaults.highlightIndex,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=j(P),L=z.map(i=>i?.v),y=or(L,0),w=X(L,0),v=i=>w===y?.5:G(i-y,w-y,.5),m=z.length?Math.max(0,Math.min(z.length-1,Math.round(q)-1)):-1,f=new Set(m>=0?[m]:[]),n=Q(Math.round($(k,6)),1,12),s=z.length?Math.min(n,z.length):n;return mt("div",{className:"acl-root acl-hm",style:{background:N},children:[$e("style",{children:`
        .acl-hm{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-hm__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-hm__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-hm__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-hm__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-hm__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-hm__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-hm__panel{ position:relative; flex:1; margin-top:34px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:36px 40px 30px; display:flex; flex-direction:column; }
        .acl-hm__grid{ flex:1; display:grid; gap:16px; }
        .acl-hm__cell{ position:relative; border:3px solid var(--acl-ink); padding:18px 20px;
          display:flex; flex-direction:column; justify-content:space-between;
          box-shadow:3px 3px 0 rgba(22,21,15,.12); }
        .acl-hm__cell .m{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; display:flex; justify-content:space-between; align-items:baseline; }
        .acl-hm__cell .m b{ font-family:var(--acl-font-cn); font-weight:900; font-size:24px; letter-spacing:0; }
        .acl-hm__cell .v{ font-family:var(--acl-font-num); font-size:50px; line-height:.82; }
        .acl-hm__cell .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700;
          font-size:15px; margin-left:4px; opacity:.7; }
        .acl-hm__cell--peak{ box-shadow:5px 6px 0 rgba(22,21,15,.26); transform:translateY(-3px) scale(1.012);
          z-index:5; }
        .acl-hm__sticker{ position:absolute; top:-15px; right:10px; z-index:6; }
        .acl-hm__spark{ position:absolute; right:8px; bottom:6px; }
        .acl-hm__footrow{ display:flex; align-items:center; justify-content:space-between;
          margin-top:22px; gap:24px; }
        .acl-hm__scale{ display:flex; align-items:center; gap:12px; font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.05em; color:rgba(22,21,15,.6); }
        .acl-hm__scalebar{ width:280px; height:16px; border:2px solid var(--acl-ink);
          background:linear-gradient(90deg, ${Fl.join(",")}); }
        .acl-hm__peaknote{ font-family:var(--acl-font-hand); font-size:30px; color:var(--acl-ink);
          display:flex; align-items:center; gap:12px; }
        .acl-hm__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-hm__cell{ animation:acl-hm-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .04s); }
        }
        @keyframes acl-hm-pop{ from{ opacity:0; transform:scale(.86); } to{ opacity:1; } }
      `}),mt("div",{className:"acl-hm__head",children:[mt("div",{children:[$e("div",{className:"acl-hm__eyebrow",children:x}),$e("h1",{className:"acl-hm__h",children:g})]}),$e("div",{className:"acl-hm__sub",children:h}),$e("div",{className:"acl-hm__summary",dangerouslySetInnerHTML:{__html:C}})]}),mt("div",{className:"acl-hm__panel",children:[$e("div",{className:"acl-hm__grid",style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:z.map((i,a)=>{let e=v(i.v),o=f.has(a),r=e>.62?"var(--acl-paper)":"var(--acl-ink)";return mt("div",{className:"acl-hm__cell"+(o?" acl-hm__cell--peak":""),style:{background:kc(e),color:r,borderColor:o?"var(--acl-ink)":"rgba(22,21,15,.85)",borderWidth:o?5:3,"--i":a},children:[o&&_&&$e("div",{className:"acl-hm__sticker",children:$e(H,{label:A,color:"var(--acl-yellow)",rotate:5})}),mt("div",{className:"m",style:{color:r,opacity:.85},children:[$e("b",{style:{color:r},children:i.m}),$e("span",{children:i.en})]}),d&&mt("div",{className:"v",children:[i.v,$e("em",{children:I})]}),o&&_&&$e(p,{className:"acl-hm__spark",kind:"spark",size:30,rotate:8,fill:e>.62?"var(--acl-yellow)":"var(--acl-paper)",stroke:"var(--acl-ink)",style:{position:"absolute"}})]},a)})}),mt("div",{className:"acl-hm__footrow",children:[u?mt("div",{className:"acl-hm__scale",children:[mt("span",{children:["低 ",y]}),$e("div",{className:"acl-hm__scalebar"}),mt("span",{children:[w," 高 \xB7 ",I]})]}):$e("span",{}),_&&f.size>0&&mt("div",{className:"acl-hm__peaknote",children:[$e(p,{kind:"arrow",size:56,rotate:-6,style:{position:"static"}}),F]})]})]}),mt("div",{className:"acl-hm__foot",children:[_&&$e(p,{kind:"loop",size:56,style:{position:"static"}}),$e("span",{children:M})]})]})}sl.defaults={backgroundTheme:"primary",columnCount:6,showValueLabels:!0,highlightIndex:8,showScale:!0,showDecor:!0,eyebrow:"Monthly Heatmap",headline:"市場月度熱力",subheadline:"12 個月融資節奏",summary:"全年熱度並非均勻釋放\uFF0C而是由 <b>8 月</b> 這一峰值月份拉高\u3002",cells:[{m:"1月",en:"JAN",v:45},{m:"2月",en:"FEB",v:58},{m:"3月",en:"MAR",v:59},{m:"4月",en:"APR",v:86},{m:"5月",en:"MAY",v:105},{m:"6月",en:"JUN",v:93},{m:"7月",en:"JUL",v:92},{m:"8月",en:"AUG",v:118},{m:"9月",en:"SEP",v:108},{m:"10月",en:"OCT",v:73},{m:"11月",en:"NOV",v:81},{m:"12月",en:"DEC",v:52}],unit:"億美元",peakNote:"峰值",insightText:"全年熱度由單一峰值月份拉高",closingLine:"融資節奏的核心不是平均值\uFF0C而是峰值背後的超級交易\u3002"};sl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"columnCount",type:"enum",default:6,options:[4,6],label:"網格列數",desc:"熱力格每行單元數\uFF1A4 列(3 行) 或 6 列(2 行)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"在每個單元中顯示數值"},{key:"highlightIndex",type:"number",default:8,min:1,max:12,step:1,label:"峰值強調",desc:"選擇單個被強調熱力格\uFF08第1個至第12個\uFF09"},{key:"showScale",type:"boolean",default:!0,label:"色階圖例",desc:"底部冷\u2192熱色階圖例的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var wc=sl.defaults,Nc=sl.controls;var Ei={};Y(Ei,{controls:()=>Cc,default:()=>Sl,defaults:()=>Ec});import"react";import{jsx as we,jsxs as Vt}from"react/jsx-runtime";var zc={\u6A21\u578B:"var(--acl-yellow)",\u57FA\u7840\u8BBE\u65BD:"var(--acl-blue)",\u5E94\u7528:"var(--acl-pink)",\u5177\u8EAB:"var(--acl-red)"};function Sl(t){let l={...Sl.defaults,...t},{backgroundTheme:c,rowCount:k,showBars:d,colorByCategory:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,rows:A,unit:M,columnLabels:F,closingLine:D}=l,q=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",N=j(A).slice(0,Math.max(1,$(k,1))),z=Q(x,0,Math.max(0,N.length-1)),L=X(N.map(y=>$(y?.v)),1);return Vt("div",{className:"acl-root acl-tb",style:{background:q},children:[we("style",{children:`
        .acl-tb{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-tb__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-tb__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-tb__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-tb__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-tb__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-tb__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-tb__panel{ position:relative; flex:1; margin-top:34px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:14px 40px 22px; display:flex; flex-direction:column; }
        .acl-tb__colhead{ display:grid; grid-template-columns:96px 1fr 200px 460px; align-items:center;
          gap:24px; padding:14px 8px 12px; border-bottom:3px solid var(--acl-ink);
          font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.08em; text-transform:uppercase;
          color:rgba(22,21,15,.55); }
        .acl-tb__colhead .r{ text-align:right; }
        .acl-tb__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-tb__row{ flex:1; display:grid; grid-template-columns:96px 1fr 200px 460px; align-items:center;
          gap:24px; padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.2); position:relative;
          transition:background .25s; }
        .acl-tb__row:last-child{ border-bottom:none; }
        .acl-tb__rank{ font-family:var(--acl-font-num); font-size:46px; line-height:1; }
        .acl-tb__name{ font-weight:900; font-size:32px; line-height:1; }
        .acl-tb__cat{ justify-self:start; font-family:var(--acl-font-mono); font-size:14px; font-weight:700;
          letter-spacing:.04em; padding:5px 12px; border:2px solid var(--acl-ink); white-space:nowrap; }
        .acl-tb__valwrap{ display:flex; align-items:center; gap:16px; }
        .acl-tb__track{ flex:1; height:22px; background:rgba(22,21,15,.08);
          border:2px solid var(--acl-ink); position:relative; overflow:hidden; }
        .acl-tb__fill{ position:absolute; left:0; top:0; bottom:0; background:var(--acl-ink);
          transition:width .5s cubic-bezier(.2,.8,.2,1); }
        .acl-tb__val{ font-family:var(--acl-font-num); font-size:34px; line-height:1; min-width:118px;
          text-align:right; white-space:nowrap; }
        .acl-tb__val em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:4px; opacity:.62; }
        .acl-tb__row--focus{ background:var(--acl-ink); color:var(--acl-paper);
          box-shadow:6px 0 0 var(--acl-ink), -6px 0 0 var(--acl-ink); border-bottom-color:transparent; z-index:2; }
        .acl-tb__row--focus .acl-tb__cat{ border-color:var(--acl-paper); }
        .acl-tb__row--focus .acl-tb__track{ background:rgba(255,255,255,.16); border-color:var(--acl-paper); }
        .acl-tb__fx{ position:absolute; top:-14px; left:60px; z-index:5; }
        .acl-tb__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-tb__row{ animation:acl-tb-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .05s); }
        }
        @keyframes acl-tb-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
      `}),Vt("div",{className:"acl-tb__head",children:[Vt("div",{children:[we("div",{className:"acl-tb__eyebrow",children:h}),we("h1",{className:"acl-tb__h",children:C})]}),we("div",{className:"acl-tb__sub",children:P}),we("div",{className:"acl-tb__summary",dangerouslySetInnerHTML:{__html:I}})]}),Vt("div",{className:"acl-tb__panel",children:[Vt("div",{className:"acl-tb__colhead",children:[we("span",{children:F[0]}),we("span",{children:F[1]}),we("span",{children:F[2]}),Vt("span",{className:"r",children:[F[3]," \xB7 ",M]})]}),we("div",{className:"acl-tb__rows",children:N.map((y,w)=>{let v=_&&w===z,m=u&&zc[y.cat]||"var(--acl-ink)";return Vt("div",{className:"acl-tb__row"+(v?" acl-tb__row--focus":""),style:{"--i":w},children:[v&&g&&we("div",{className:"acl-tb__fx",children:we(H,{label:l.topBadgeLabel,color:"var(--acl-yellow)",rotate:6})}),we("div",{className:"acl-tb__rank",style:{color:v?"var(--acl-yellow)":m},children:String(w+1).padStart(2,"0")}),we("div",{className:"acl-tb__name",children:y.name}),we("div",{className:"acl-tb__cat",style:{background:v?"transparent":m,color:v?"var(--acl-paper)":(y.cat==="模型","var(--acl-ink)")},children:y.cat}),Vt("div",{className:"acl-tb__valwrap",children:[d&&we("div",{className:"acl-tb__track",children:we("div",{className:"acl-tb__fill",style:{width:`${G($(y?.v),L)*100}%`,background:v?"var(--acl-yellow)":m}})}),Vt("div",{className:"acl-tb__val",children:[$(y?.v),we("em",{children:M})]})]})]},w)})})]}),Vt("div",{className:"acl-tb__foot",children:[g&&we(p,{kind:"loop",size:56,style:{position:"static"}}),we("span",{children:D})]})]})}Sl.defaults={backgroundTheme:"muted",rowCount:8,showBars:!0,colorByCategory:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Top Funded Companies",headline:"Top 10 融資公司",subheadline:"頭部玩家資金排名",summary:"頭部公司融資額顯著領先\uFF0C<b>通用大模型</b> 佔據榜單上方位置\u3002",columnLabels:["排名","公司","賽道","最大單筆"],rows:[{name:"OpenAI",cat:"模型",v:66},{name:"Anthropic",cat:"模型",v:65},{name:"xAI",cat:"模型",v:50},{name:"CoreWeave",cat:"基礎設施",v:11},{name:"SSI",cat:"模型",v:10},{name:"Scale AI",cat:"基礎設施",v:10},{name:"Figure AI",cat:"具身",v:6.8},{name:"Perplexity",cat:"應用",v:5.2},{name:"Databricks",cat:"應用",v:5},{name:"Glean",cat:"應用",v:2.6}],unit:"億美元",closingLine:"頭部融資規模既反映技術敘事\uFF0C也反映資源繫結能力\u3002",topBadgeLabel:"榜首"};Sl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:8,min:3,max:10,step:1,label:"行數",desc:"展示的排名行數(3\u201310)"},{key:"showBars",type:"boolean",default:!0,label:"資料條",desc:"在數值列顯示橫向比例條"},{key:"colorByCategory",type:"boolean",default:!0,label:"按類別配色",desc:"按賽道為序號/標籤/資料條著色"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:9,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Ec=Sl.defaults,Cc=Sl.controls;var Ci={};Y(Ci,{controls:()=>Sc,default:()=>Ll,defaults:()=>Fc});import"react";import{jsx as me,jsxs as Ht}from"react/jsx-runtime";function Ll(t){let l={...Ll.defaults,...t},{backgroundTheme:c,focusEnabled:k,focusIndex:d,showItems:u,showAxisLabels:_,showDecor:x,eyebrow:g,headline:h,subheadline:C,summary:P,axisX:I,axisY:A,quadrants:M,closingLine:F}=l,D=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",q=Math.min(d,M.length-1);return Ht("div",{className:"acl-root acl-qd",style:{background:D},children:[me("style",{children:`
        .acl-qd{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-qd__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-qd__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-qd__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-qd__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-qd__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-qd__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-qd__body{ flex:1; margin-top:30px; display:grid;
          grid-template-columns:60px 1fr; grid-template-rows:1fr 52px; gap:14px; min-height:0; }
        .acl-qd__yaxis{ grid-column:1; grid-row:1; display:flex; align-items:center; justify-content:center; }
        .acl-qd__yaxis span{ writing-mode:vertical-rl; font-family:var(--acl-font-mono);
          font-weight:700; font-size:18px; letter-spacing:.14em; text-transform:uppercase; color:rgba(22,21,15,.6);
          display:flex; align-items:center; gap:14px; }
        .acl-qd__xaxis{ grid-column:2; grid-row:2; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.14em;
          text-transform:uppercase; color:rgba(22,21,15,.6); gap:14px; }
        .acl-qd__axend{ font-family:var(--acl-font-cn); font-weight:900; font-size:15px; opacity:.7; }
        .acl-qd__matrix{ grid-column:2; grid-row:1; position:relative; display:grid;
          grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; gap:18px; }
        .acl-qd__cross{ position:absolute; inset:0; pointer-events:none; z-index:3; }
        .acl-qd__cross::before, .acl-qd__cross::after{ content:''; position:absolute; background:none; }
        .acl-qd__cross .vx{ position:absolute; left:50%; top:-4px; bottom:-4px; width:0;
          border-left:3px dashed rgba(22,21,15,.4); transform:translateX(-50%); }
        .acl-qd__cross .hz{ position:absolute; top:50%; left:-4px; right:-4px; height:0;
          border-top:3px dashed rgba(22,21,15,.4); transform:translateY(-50%); }
        .acl-qd__cell{ position:relative; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 6px 0 rgba(22,21,15,.14); padding:30px 32px; display:flex; flex-direction:column;
          overflow:visible; border-top-width:9px; transition:transform .25s; }
        .acl-qd__cell .en{ font-family:var(--acl-font-mono); font-size:15px; font-weight:700; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-qd__cell .nm{ font-weight:900; font-size:46px; line-height:1.02; margin:6px 0 16px; }
        .acl-qd__chips{ display:flex; flex-wrap:wrap; gap:10px; margin-top:auto; }
        .acl-qd__chip{ font-family:var(--acl-font-mono); font-size:16px; font-weight:700; padding:6px 13px;
          border:2px solid var(--acl-ink); background:rgba(22,21,15,.05); white-space:nowrap; }
        .acl-qd__cell--focus{ background:var(--acl-ink); transform:scale(1.015); z-index:4;
          box-shadow:9px 11px 0 rgba(22,21,15,.28); }
        .acl-qd__cell--focus .nm{ color:var(--acl-paper); }
        .acl-qd__cell--focus .en{ color:rgba(255,255,255,.55); }
        .acl-qd__cell--focus .acl-qd__chip{ background:transparent; }
        .acl-qd__fx{ position:absolute; top:-14px; right:-10px; z-index:6; }
        .acl-qd__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-qd__cell{ animation:acl-qd-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s); }
        }
        @keyframes acl-qd-in{ from{ opacity:0; transform:scale(.9); } to{ opacity:1; } }
      `}),Ht("div",{className:"acl-qd__head",children:[Ht("div",{children:[me("div",{className:"acl-qd__eyebrow",children:g}),me("h1",{className:"acl-qd__h",children:h})]}),me("div",{className:"acl-qd__sub",children:C}),me("div",{className:"acl-qd__summary",dangerouslySetInnerHTML:{__html:P}})]}),Ht("div",{className:"acl-qd__body",children:[_&&me("div",{className:"acl-qd__yaxis",children:Ht("span",{children:[me("span",{className:"acl-qd__axend",children:l.axisYHighLabel}),A,me("span",{className:"acl-qd__axend",children:l.axisYLowLabel})]})}),Ht("div",{className:"acl-qd__matrix",children:[Ht("div",{className:"acl-qd__cross",children:[me("div",{className:"vx"}),me("div",{className:"hz"})]}),M.map((N,z)=>{let L=k&&z===q;return Ht("div",{className:"acl-qd__cell"+(L?" acl-qd__cell--focus":""),style:{borderTopColor:N.accent,"--i":z},children:[L&&x&&me("div",{className:"acl-qd__fx",children:me(H,{label:N.badge||"重點象限",color:"var(--acl-yellow)",rotate:6})}),me("div",{className:"en",children:N.en}),me("div",{className:"nm",style:L?{color:N.accent}:null,children:N.name}),u&&me("div",{className:"acl-qd__chips",children:N.items.map((y,w)=>me("span",{className:"acl-qd__chip",style:{borderColor:L?N.accent:"var(--acl-ink)",color:L?"var(--acl-paper)":"var(--acl-ink)"},children:y},w))}),x&&L&&me(p,{kind:"spark",size:30,rotate:10,fill:N.accent,stroke:"var(--acl-paper)",style:{position:"absolute",right:18,bottom:14}})]},z)})]}),_&&Ht("div",{className:"acl-qd__xaxis",children:[me("span",{className:"acl-qd__axend",children:l.axisXLowLabel}),I,me("span",{className:"acl-qd__axend",children:l.axisXHighLabel})]})]}),Ht("div",{className:"acl-qd__foot",children:[x&&me(p,{kind:"loop",size:56,style:{position:"static"}}),me("span",{children:F})]})]})}Ll.defaults={backgroundTheme:"primary",focusEnabled:!0,focusIndex:1,showItems:!0,showAxisLabels:!0,showDecor:!0,eyebrow:"Heat vs. Monetization",headline:"資本熱度 \xD7 商業兌現",subheadline:"四象限機會判斷",summary:"把資本熱度與商業兌現交叉\uFF0C可區分 <b>明星兌現\u3001敘事泡沫\u3001隱形價值與等待驗證</b> 四類機會\u3002",axisX:"商業兌現度",axisY:"資本熱度",quadrants:[{en:"Hype Bubble",name:"敘事泡沫",accent:"var(--acl-red)",items:["通用大模型","AGI 實驗室"]},{en:"Proven Stars",name:"明星兌現",accent:"var(--acl-yellow)",badge:"看好象限",items:["基礎設施","資料平臺"]},{en:"Wait & Verify",name:"等待驗證",accent:"var(--acl-blue)",items:["長尾工具","AI 安全","早期硬體"]},{en:"Hidden Value",name:"隱形價值",accent:"var(--acl-pink)",items:["垂直應用","企業搜尋"]}],closingLine:"資本正在從敘事驅動轉向兌現驅動\u3002",axisYHighLabel:"高",axisYLowLabel:"低",axisXLowLabel:"低",axisXHighLabel:"高 \u2192"};Ll.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個象限"},{key:"focusIndex",type:"number",default:1,min:0,max:3,step:1,label:"重點物件",desc:"被突出的象限序號(0=左上 1=右上 2=左下 3=右下)"},{key:"showItems",type:"boolean",default:!0,label:"代表項",desc:"象限內代表方向/公司標籤的顯示/隱藏"},{key:"showAxisLabels",type:"boolean",default:!0,label:"座標軸標籤",desc:"兩條座標軸說明文字的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Fc=Ll.defaults,Sc=Ll.controls;var Fi={};Y(Fi,{controls:()=>Ic,default:()=>Il,defaults:()=>Lc});import"react";import{jsx as La,jsxs as Ft}from"react/jsx-runtime";function Il(t){let l={...Il.defaults,...t},{backgroundTheme:c,showCompare:k,groupItemCount:d,milestoneCount:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,positive:A,negative:M,milestones:F,closingLine:D,focusStickerLabel:q,vsLabel:N}=l,z=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=A.items.slice(0,Math.max(1,d)),y=M.items.slice(0,Math.max(1,d)),w=F.slice(0,Math.max(2,u)),v=Math.min(x,w.length-1),m=({data:f,items:n,tone:s})=>Ft("div",{className:"acl-tl__col acl-tl__col--"+s,children:[Ft("div",{className:"acl-tl__colhead",children:[La("span",{className:"acl-tl__mark",children:s==="up"?"\u2191":"\u2193"}),Ft("div",{children:[La("div",{className:"acl-tl__coltitle",children:f.title}),La("div",{className:"acl-tl__colen",children:f.en})]})]}),La("div",{className:"acl-tl__items",children:n.map((i,a)=>Ft("div",{className:"acl-tl__item",children:[La("span",{className:"acl-tl__inum",children:String(a+1).padStart(2,"0")}),Ft("div",{className:"acl-tl__itxt",children:[La("b",{children:i.name}),La("span",{children:i.note})]})]},a))})]});return Ft("div",{className:"acl-root acl-tl",style:{background:z},children:[La("style",{children:`
        .acl-tl{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:76px 100px 64px; display:flex; flex-direction:column; }
        .acl-tl__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-tl__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-tl__h{ font-weight:900; font-size:76px; line-height:.95; margin:0; }
        .acl-tl__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-tl__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-tl__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        /* \u2500\u2500 compare columns \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .acl-tl__compare{ display:flex; gap:26px; align-items:stretch; margin-top:30px; position:relative; }
        .acl-tl__col{ flex:1 1 0; min-width:0; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.16); padding:22px 26px 20px; display:flex; flex-direction:column; gap:14px; }
        .acl-tl__col--up{ transform:rotate(-.6deg); }
        .acl-tl__col--down{ transform:rotate(.6deg); }
        .acl-tl__colhead{ display:flex; align-items:center; gap:14px; padding-bottom:13px;
          border-bottom:3px solid var(--acl-ink); }
        .acl-tl__mark{ width:50px; height:50px; flex:0 0 auto; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:34px; line-height:1; color:var(--acl-ink); }
        .acl-tl__col--up .acl-tl__mark{ background:var(--acl-yellow); }
        .acl-tl__col--down .acl-tl__mark{ background:var(--acl-red); color:var(--acl-paper); }
        .acl-tl__coltitle{ font-weight:900; font-size:32px; line-height:1; }
        .acl-tl__colen{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:4px; }
        .acl-tl__items{ display:flex; flex-direction:column; gap:11px; }
        .acl-tl__item{ display:flex; align-items:baseline; gap:14px; }
        .acl-tl__inum{ font-family:var(--acl-font-num); font-size:24px; line-height:1; flex:0 0 auto;
          color:rgba(22,21,15,.4); width:34px; }
        .acl-tl__col--up .acl-tl__inum{ color:var(--acl-ink); }
        .acl-tl__col--down .acl-tl__inum{ color:var(--acl-red); }
        .acl-tl__itxt{ display:flex; flex-direction:column; gap:1px; }
        .acl-tl__itxt b{ font-weight:900; font-size:25px; line-height:1.12; }
        .acl-tl__itxt span{ font-size:17px; line-height:1.25; color:rgba(22,21,15,.6); }
        .acl-tl__vs{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) rotate(-7deg);
          z-index:4; width:74px; height:74px; border-radius:50%; background:var(--acl-ink);
          color:var(--acl-yellow); display:grid; place-items:center; font-family:var(--acl-font-num);
          font-size:30px; box-shadow:3px 4px 0 rgba(22,21,15,.25); }

        /* \u2500\u2500 phase timeline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .acl-tl__time{ flex:1; margin-top:30px; position:relative; display:flex; align-items:stretch; padding-top:30px; }
        .acl-tl__axis{ position:absolute; left:0; right:46px; top:48px; height:0;
          border-top:4px dashed var(--acl-ink); }
        .acl-tl__arrow{ position:absolute; right:-2px; top:48px; transform:translateY(-50%); }
        .acl-tl__node{ flex:1 1 0; min-width:0; display:flex; flex-direction:column; align-items:center;
          text-align:center; position:relative; padding:0 12px; }
        .acl-tl__dot{ width:30px; height:30px; border-radius:50%; background:var(--acl-paper);
          border:4px solid var(--acl-ink); margin-top:4px; position:relative; z-index:2; transition:.25s; }
        .acl-tl__year{ font-family:var(--acl-font-num); font-size:64px; line-height:.9; margin-top:18px; }
        .acl-tl__ntitle{ font-weight:900; font-size:26px; line-height:1.1; margin-top:8px; }
        .acl-tl__nnote{ font-size:18px; line-height:1.3; color:rgba(22,21,15,.62); margin-top:6px; max-width:280px; }
        .acl-tl__node--focus .acl-tl__dot{ width:38px; height:38px; background:var(--acl-pink); }
        .acl-tl__node--focus .acl-tl__year{ color:var(--acl-pink); }
        .acl-tl__nfx{ position:absolute; top:-30px; z-index:5; }
        .acl-tl__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:8px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-tl__node{ animation:acl-tl-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .1s); }
          [data-deck-active] .acl-tl__col{ animation:acl-tl-rise .5s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-tl-in{ from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:none; } }
        @keyframes acl-tl-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; } }
      `}),Ft("div",{className:"acl-tl__head",children:[Ft("div",{children:[La("div",{className:"acl-tl__eyebrow",children:h}),La("h1",{className:"acl-tl__h",children:C})]}),La("div",{className:"acl-tl__sub",children:P}),La("div",{className:"acl-tl__summary",dangerouslySetInnerHTML:{__html:I}})]}),k&&Ft("div",{className:"acl-tl__compare",children:[La(m,{data:A,items:L,tone:"up"}),g&&La("div",{className:"acl-tl__vs",children:N}),La(m,{data:M,items:y,tone:"down"})]}),Ft("div",{className:"acl-tl__time",children:[La("div",{className:"acl-tl__axis"}),g&&La("div",{className:"acl-tl__arrow",children:La(p,{kind:"arrow",size:56,style:{position:"static"}})}),w.map((f,n)=>{let s=_&&n===v;return Ft("div",{className:"acl-tl__node"+(s?" acl-tl__node--focus":""),style:{"--i":n},children:[s&&g&&La("div",{className:"acl-tl__nfx",children:La(H,{label:q,color:"var(--acl-yellow)",rotate:-5})}),La("div",{className:"acl-tl__dot"}),La("div",{className:"acl-tl__year",children:f.year}),La("div",{className:"acl-tl__ntitle",children:f.title}),La("div",{className:"acl-tl__nnote",children:f.note})]},n)})]}),Ft("div",{className:"acl-tl__foot",children:[g&&La(p,{kind:"loop",size:54,style:{position:"static"}}),La("span",{children:D})]})]})}Il.defaults={backgroundTheme:"primary",showCompare:!0,groupItemCount:3,milestoneCount:3,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Investment Outlook",headline:"投資建議與階段性策略",subheadline:"看好方向與謹慎方向",summary:"觀察應圍繞 <b>收入兌現</b>\u3001基礎設施確定性與垂直應用 PMF 展開\u3002",focusStickerLabel:"觀察重點",vsLabel:"VS",positive:{title:"看好方向",en:"Conviction",items:[{name:"垂直應用",note:"嵌入剛性流程\u3001可量化 ROI"},{name:"基礎設施",note:"算力\u3001資料平臺\u3001推理最佳化"},{name:"具身智慧",note:"長週期硬科技\u3001量產兌現"}]},negative:{title:"謹慎方向",en:"Caution",items:[{name:"高估值純模型",note:"敘事強\u3001兌現弱\u3001估值承壓"},{name:"AI 包裝專案",note:"缺壁壘\u3001易被大廠擠壓"},{name:"低壁壘消費應用",note:"留存差\u3001同質化競爭"}]},milestones:[{year:"2025",title:"IPO 視窗開啟",note:"頭部公司啟動上市\uFF0C估值錨開始重定價"},{year:"2026",title:"收入曲線驗證",note:"試點轉付費率成為分水嶺"},{year:"2027",title:"兌現分化定型",note:"能形成商業閉環者跑出"},{year:"持續",title:"資源繫結深化",note:"雲資源與算力鎖定成融資能力"}],closingLine:"看融資只是起點\uFF0C看兌現才是判斷\u3002"};Il.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"showCompare",type:"boolean",default:!0,label:"對比雙欄",desc:'頂部"看好 / 謹慎"對比欄的顯示/隱藏'},{key:"groupItemCount",type:"number",default:3,min:1,max:3,step:1,label:"每欄條目數",desc:"每個對比欄展示的方向條目數(1\u20133)"},{key:"milestoneCount",type:"number",default:3,min:2,max:4,step:1,label:"時間軸節點數",desc:"底部階段時間軸的節點數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個時間軸節點"},{key:"focusIndex",type:"number",default:1,min:0,max:3,step:1,maxFrom:"milestoneCount",label:"重點物件",desc:"被高亮的時間軸節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾\u3001VS 徽標與標籤的顯示/隱藏"}];var Lc=Il.defaults,Ic=Il.controls;var Si={};Y(Si,{controls:()=>Ac,default:()=>Ml,defaults:()=>Mc});import"react";import{jsx as ft,jsxs as Zo}from"react/jsx-runtime";function Ml(t){let l={...Ml.defaults,...t},{backgroundTheme:c,showSupports:k,supportCount:d,showQuoteMark:u,showDecor:_,eyebrow:x,headline:g,quote:h,supports:C,source:P,kicker:I}=l,A=c==="ink",M=A?"radial-gradient(120% 120% at 78% 8%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",F=c==="primary"?"var(--acl-blue)":"var(--acl-yellow)",D=c==="primary"?"var(--acl-paper)":"var(--acl-ink)",q=C.slice(0,Math.max(0,d));return Zo("div",{className:"acl-root acl-qt"+(A?" acl-qt--ink":""),style:{background:M,"--acl-qt-highlight-bg":F,"--acl-qt-highlight-color":D},children:[ft("style",{children:`
        .acl-qt{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:84px 120px 76px; display:flex; flex-direction:column; }
        .acl-qt--ink{ color:var(--acl-paper); }
        .acl-qt__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-qt__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-qt--ink .acl-qt__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-qt__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.5; }
        .acl-qt__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-qt--ink .acl-qt__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-qt__body{ flex:1; display:flex; flex-direction:column; justify-content:center;
          position:relative; }
        .acl-qt__mark{ position:absolute; top:-46px; left:-30px; font-family:var(--acl-font-num);
          font-size:340px; line-height:.7; color:var(--acl-pink); opacity:.9; z-index:0;
          pointer-events:none; }
        .acl-qt--ink .acl-qt__mark{ color:var(--acl-yellow); opacity:.18; }
        .acl-qt__h{ position:relative; z-index:1; font-weight:900; font-size:112px; line-height:1.32;
          letter-spacing:-.01em; margin:0; max-width:1480px; text-wrap:balance; }
        .acl-qt__h b{ font-weight:900; background:var(--acl-qt-highlight-bg); color:var(--acl-qt-highlight-color);
          padding:.02em .1em; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
        .acl-qt--ink .acl-qt__h b{ background:var(--acl-pink); color:var(--acl-paper); }
        .acl-qt__label{ position:relative; z-index:1; font-family:var(--acl-font-mono); font-weight:700;
          font-size:22px; letter-spacing:.06em; color:rgba(22,21,15,.55); margin-bottom:26px; }
        .acl-qt--ink .acl-qt__label{ color:rgba(251,250,244,.55); }

        .acl-qt__supports{ display:flex; gap:22px; margin-top:48px; position:relative; z-index:1; }
        .acl-qt__s{ flex:1 1 0; min-width:0; border-top:5px solid var(--acl-ink); padding-top:14px;
          display:flex; flex-direction:column; gap:6px; }
        .acl-qt--ink .acl-qt__s{ border-color:var(--acl-yellow); }
        .acl-qt__sn{ font-family:var(--acl-font-num); font-size:30px; line-height:1; }
        .acl-qt--ink .acl-qt__sn{ color:var(--acl-yellow); }
        .acl-qt__st{ font-weight:700; font-size:24px; line-height:1.32; }

        .acl-qt__foot{ display:flex; align-items:center; gap:14px; flex:0 0 auto;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em;
          color:rgba(22,21,15,.55); }
        .acl-qt--ink .acl-qt__foot{ color:rgba(251,250,244,.55); }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-qt__h{ animation:acl-qt-in .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-qt__s{ animation:acl-qt-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .25s); }
        }
        @keyframes acl-qt-in{ from{ opacity:0; transform:translateY(24px); } to{ opacity:1; transform:none; } }
      `}),Zo("div",{className:"acl-qt__top",children:[ft("div",{className:"acl-qt__eyebrow",children:x}),ft("div",{className:"acl-qt__rule"}),ft("div",{className:"acl-qt__kicker",children:I})]}),Zo("div",{className:"acl-qt__body",children:[u&&ft("div",{className:"acl-qt__mark","aria-hidden":"true",children:"\u201C"}),ft("div",{className:"acl-qt__label",children:g}),ft("h1",{className:"acl-qt__h",dangerouslySetInnerHTML:{__html:h}}),k&&q.length>0&&ft("div",{className:"acl-qt__supports",children:q.map((N,z)=>Zo("div",{className:"acl-qt__s",style:{"--i":z},children:[ft("div",{className:"acl-qt__sn",children:String(z+1).padStart(2,"0")}),ft("div",{className:"acl-qt__st",children:N})]},z))})]}),Zo("div",{className:"acl-qt__foot",children:[_&&ft(p,{kind:"spark",size:40,fill:A?"var(--acl-yellow)":"var(--acl-pink)",stroke:A?"none":"var(--acl-ink)",style:{position:"static"}}),ft("span",{children:P}),_&&!A&&ft(H,{label:l.judgmentBadgeLabel,color:"var(--acl-blue)",rotate:-4,style:{marginLeft:"auto"}})]})]})}Ml.defaults={backgroundTheme:"ink",showSupports:!0,supportCount:3,showQuoteMark:!0,showDecor:!0,eyebrow:"Conclusion \xB7 結論與資料來源",kicker:"金句頁",headline:"三條核心結論 \xB7 一句話判斷",quote:"資本下一階段\uFF0C將從 <b>賭敘事</b> 轉向 <b>看兌現</b>\u3002",supports:["資本仍在湧入 AI\uFF0C但開始挑選確定性更高的標的\u3002","頭部集中度本身就是市場結構\uFF0C長尾被超級交易重新定價\u3002","兌現能力正取代敘事\uFF0C成為衡量公司價值的新標尺\u3002"],source:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u22651 億美元 \xB7 AI CAPITAL LAB",judgmentBadgeLabel:"核心判斷"};Ml.controls=[{key:"backgroundTheme",type:"enum",default:"ink",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差金句)"},{key:"showSupports",type:"boolean",default:!0,label:"支撐要點",desc:"底部要點行的顯示/隱藏"},{key:"supportCount",type:"number",default:3,min:0,max:3,step:1,showIf:"showSupports",label:"要點數量",desc:"展示的支撐要點數量(0\u20133)"},{key:"showQuoteMark",type:"boolean",default:!0,label:"大引號",desc:"背景大號引號裝飾的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪火花與貼紙標籤的顯示/隱藏"}];var Mc=Ml.defaults,Ac=Ml.controls;var Li={};Y(Li,{controls:()=>Dc,default:()=>Tl,defaults:()=>Tc});import"react";import{jsx as Ot,jsxs as Al}from"react/jsx-runtime";function Tl(t){let l={...Tl.defaults,...t},{backgroundTheme:c,showIndex:k,keywordCount:d,showDecor:u,eyebrow:_,indexLabel:x,headline:g,subheadline:h,keywords:C,closingLine:P,chapterStickerLabel:I}=l,A=c==="ink",M=A?"radial-gradient(130% 130% at 16% 12%, #2A2820 0%, #16150F 62%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",F=C.slice(0,Math.max(0,d)),D=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)","var(--acl-paper)","var(--acl-blue)"];return Al("div",{className:"acl-root acl-cp"+(A?" acl-cp--ink":""),style:{background:M},children:[Ot("style",{children:`
        .acl-cp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:92px 110px 84px; display:flex; flex-direction:column;
          justify-content:center; }
        .acl-cp--ink{ color:var(--acl-paper); }
        .acl-cp__ghost{ position:absolute; right:-30px; bottom:-160px; font-family:var(--acl-font-num);
          font-size:760px; line-height:.7; color:var(--acl-ink); opacity:.07; z-index:0;
          pointer-events:none; user-select:none; }
        .acl-cp--ink .acl-cp__ghost{ color:var(--acl-yellow); opacity:.1; }

        .acl-cp__inner{ position:relative; z-index:1; }
        .acl-cp__eyebrow{ display:inline-flex; align-items:center; gap:14px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:26px; letter-spacing:.18em;
          text-transform:uppercase; color:var(--acl-ink); background:var(--acl-yellow);
          padding:9px 18px; transform:rotate(-1.6deg); box-shadow:3px 4px 0 rgba(22,21,15,.2); }
        .acl-cp--ink .acl-cp__eyebrow{ background:var(--acl-yellow); }
        .acl-cp__numrow{ display:flex; align-items:flex-start; gap:42px; margin-top:26px; }
        .acl-cp__index{ font-family:var(--acl-font-num); font-size:300px; line-height:.74;
          flex:0 0 auto; letter-spacing:-.02em; }
        .acl-cp--ink .acl-cp__index{ color:var(--acl-yellow); }
        .acl-cp__titles{ display:flex; flex-direction:column; justify-content:center; padding-top:18px; }
        .acl-cp__h{ font-weight:900; font-size:118px; line-height:.94; margin:0; letter-spacing:-.01em; }
        .acl-cp__sub{ font-family:var(--acl-font-hand); font-size:46px; margin-top:14px;
          color:var(--acl-ink); }
        .acl-cp--ink .acl-cp__sub{ color:var(--acl-paper); }
        .acl-cp__noindex .acl-cp__h{ font-size:148px; }

        .acl-cp__chips{ display:flex; flex-wrap:wrap; gap:16px; margin-top:46px; align-items:center; }
        .acl-cp__chip{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.02em; padding:12px 22px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); color:var(--acl-ink); box-shadow:3px 4px 0 rgba(22,21,15,.18); }
        .acl-cp__chip:nth-child(3n+1){ transform:rotate(-1.8deg); }
        .acl-cp__chip:nth-child(3n+2){ transform:rotate(1.5deg); }
        .acl-cp--ink .acl-cp__chip{ border-color:var(--acl-paper); }

        .acl-cp__foot{ position:absolute; left:110px; bottom:64px; z-index:1; display:flex;
          align-items:center; gap:14px; font-family:var(--acl-font-hand); font-size:30px; }
        .acl-cp--ink .acl-cp__foot{ color:var(--acl-paper); }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cp__index{ animation:acl-cp-pop .6s cubic-bezier(.2,.9,.3,1.2) both; }
          [data-deck-active] .acl-cp__h{ animation:acl-cp-in .55s cubic-bezier(.2,.8,.2,1) both; animation-delay:.08s; }
          [data-deck-active] .acl-cp__chip{ animation:acl-cp-in .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .3s); }
        }
        @keyframes acl-cp-pop{ from{ opacity:0; transform:translateY(30px) scale(.92); } to{ opacity:1; transform:none; } }
        @keyframes acl-cp-in{ from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:none; } }
      `}),k&&Ot("div",{className:"acl-cp__ghost","aria-hidden":"true",children:x}),Al("div",{className:"acl-cp__inner"+(k?"":" acl-cp__noindex"),children:[Al("div",{className:"acl-cp__eyebrow",children:[_,u&&Ot(p,{kind:"spark",size:26,fill:"var(--acl-ink)",style:{position:"static"}})]}),Al("div",{className:"acl-cp__numrow",children:[k&&Ot("div",{className:"acl-cp__index",children:x}),Al("div",{className:"acl-cp__titles",children:[Ot("h1",{className:"acl-cp__h",children:g}),Ot("div",{className:"acl-cp__sub",children:h})]})]}),F.length>0&&Al("div",{className:"acl-cp__chips",children:[u&&Ot(p,{kind:"arrowS",size:56,rotate:4,style:{position:"static",marginRight:4}}),F.map((q,N)=>Ot("span",{className:"acl-cp__chip",style:{"--i":N,background:N===0?D[0]:void 0,color:N===0?"var(--acl-paper)":void 0,borderColor:N===0?"var(--acl-ink)":void 0},children:q},N))]})]}),Al("div",{className:"acl-cp__foot",children:[u&&Ot(H,{label:I,sub:x,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:-3}),Ot("span",{children:P})]})]})}Tl.defaults={backgroundTheme:"muted",showIndex:!0,keywordCount:4,showDecor:!0,eyebrow:"Chapter 02",indexLabel:"02",chapterStickerLabel:"CHAPTER",headline:"市場資料深拆",subheadline:"融資節奏\u3001集中度與交易規模",keywords:["集中度","季度節奏","峰谷對比","資金貢獻","金額區間","累計曲線"],closingLine:"下一組頁面進入更細的拆解\u3002"};Tl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差章節頁)"},{key:"showIndex",type:"boolean",default:!0,label:"大章節號",desc:"巨型章節編號(及背景幽靈數字)的顯示/隱藏"},{key:"keywordCount",type:"number",default:4,min:0,max:6,step:1,label:"關鍵詞數量",desc:"本章關鍵詞標籤的數量(0\u20136)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var Tc=Tl.defaults,Dc=Tl.controls;var Ii={};Y(Ii,{controls:()=>Pc,default:()=>Dl,defaults:()=>qc});import"react";import{jsx as ae,jsxs as St}from"react/jsx-runtime";var nr=[{name:"模型",color:"var(--acl-yellow)"},{name:"應用",color:"var(--acl-pink)"},{name:"基礎設施",color:"var(--acl-blue)"},{name:"晶片",color:"var(--acl-red)"},{name:"其他",color:"#BCB9C9"}];function Rc(t){let l=t>>>0||1;return()=>(l=l*1664525+1013904223>>>0,l/4294967296)}function Dl(t){let l={...Dl.defaults,...t},{backgroundTheme:c,bandCount:k,colorByCategory:d,showValueLabels:u,showLegend:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,bands:M,weights:F,countUnit:D,amountUnit:q,closingLine:N,categoryLabels:z,legendFallback:L,sizeHintCaption:y,focusBandStickerLabel:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=M.slice(0,Math.max(2,k)),f=Math.min(g,m.length-1),n=1620,s=600,i=n/m.length,a=[11,16,22,30],e=j(F).map(V=>Math.max(0,$(V,0))),o=e.reduce((V,O)=>V+O,0),r=Math.max(40,i-46),b=V=>{let O=V*2+Math.max(5,V*.42),U=Math.max(1,Math.floor(r/O)),K=Math.max(1,Math.floor((s-20-V*2)/O)+1);return{cellW:O,perRow:U,maxRows:K}},R=5,E=(V,O)=>{for(let U=O;U>R;U--){let{perRow:K,maxRows:sa}=b(U);if(Math.ceil(V/K)<=sa)return U}return R},T=m.map(V=>Math.max(0,Math.floor($(V.count,0)))),B=m.map((V,O)=>E(T[O],a[Math.min(O,a.length-1)]));for(let V=B.length-2;V>=0;V--)B[V]=Math.min(B[V],B[V+1]);let S=[];return m.forEach((V,O)=>{let U=B[O],{cellW:K,perRow:sa,maxRows:dt}=b(U),_l=K-U*2,ai=Math.min(T[O],sa*dt),ei=i*O+i/2,Oo=Rc((O+1)*9173+41);for(let Xt=0;Xt<ai;Xt++){let Wo=Math.floor(Xt/sa),ti=Xt%sa,li=Math.min(sa,ai-Wo*sa),pi=ei+(ti-(li-1)/2)*K+(Oo()-.5)*_l*.7,oi=s-14-U-Wo*K-(Oo()-.5)*_l*.5,Xo=Oo()*o,Go=0;for(;Go<e.length-1&&Xo>e[Go];)Xo-=e[Go],Go++;S.push({x:pi,y:oi,r:U,bi:O,ti:Go})}}),St("div",{className:"acl-root acl-bm",style:{background:v},children:[ae("style",{children:`
        .acl-bm{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 64px; display:flex; flex-direction:column; }
        .acl-bm__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-bm__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-bm__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-bm__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-bm__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-bm__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-bm__panel{ position:relative; flex:1; margin-top:28px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:22px 36px 18px; display:flex; flex-direction:column; }
        .acl-bm__legend{ display:flex; gap:20px; align-items:center; font-family:var(--acl-font-mono);
          font-size:16px; font-weight:700; flex-wrap:wrap; position:relative; z-index:3; }
        .acl-bm__legend span{ display:flex; align-items:center; gap:8px; white-space:nowrap; }
        .acl-bm__legend i{ width:18px; height:18px; border-radius:50%; border:2px solid var(--acl-ink); }
        .acl-bm__sizehint{ margin-left:auto; display:flex; align-items:flex-end; gap:10px; color:rgba(22,21,15,.55); }
        .acl-bm__sizehint b{ display:inline-block; border-radius:50%; border:2px solid var(--acl-ink);
          background:rgba(22,21,15,.12); }
        .acl-bm__plot{ position:relative; flex:1; margin-top:8px; }
        .acl-bm__svg{ position:absolute; inset:0; width:100%; height:100%; }
        .acl-bm__b{ stroke:var(--acl-ink); stroke-width:1.6; transition:opacity .3s; }
        .acl-bm__b--dim{ opacity:.26; }
        .acl-bm__b--focus{ stroke-width:2.6; }
        .acl-bm__bands{ display:flex; flex:0 0 auto; margin-top:6px; }
        .acl-bm__band{ flex:1 1 0; min-width:0; text-align:center; padding:0 10px; position:relative; }
        .acl-bm__bsep{ position:absolute; left:0; top:-340px; height:340px; width:0;
          border-left:1.5px dashed rgba(22,21,15,.18); }
        .acl-bm__brange{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); }
        .acl-bm__blabel{ font-weight:900; font-size:30px; line-height:1.05; margin-top:2px; }
        .acl-bm__bstats{ display:flex; justify-content:center; gap:8px; align-items:baseline; margin-top:6px; }
        .acl-bm__bcount{ font-family:var(--acl-font-num); font-size:40px; line-height:1; }
        .acl-bm__bunit{ font-family:var(--acl-font-cn); font-weight:700; font-size:15px; opacity:.6; }
        .acl-bm__bamt{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          color:rgba(22,21,15,.62); margin-left:8px; }
        .acl-bm__band--focus .acl-bm__blabel{ color:var(--acl-pink); }
        .acl-bm__band--focus .acl-bm__bcount{ color:var(--acl-pink); }
        .acl-bm__bfx{ position:absolute; top:-372px; left:50%; transform:translateX(-50%); z-index:5; }
        .acl-bm__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-bm__b{ animation:acl-bm-pop .5s cubic-bezier(.2,.9,.3,1.2) both;
            animation-delay:calc(var(--d,0) * 1ms); transform-box:fill-box; transform-origin:center; }
        }
        @keyframes acl-bm-pop{ from{ opacity:0; transform:scale(0); } to{ opacity:1; transform:scale(1); } }
      `}),St("div",{className:"acl-bm__head",children:[St("div",{children:[ae("div",{className:"acl-bm__eyebrow",children:C}),ae("h1",{className:"acl-bm__h",children:P})]}),ae("div",{className:"acl-bm__sub",children:I}),ae("div",{className:"acl-bm__summary",dangerouslySetInnerHTML:{__html:A}})]}),St("div",{className:"acl-bm__panel",children:[_&&St("div",{className:"acl-bm__legend",children:[d?nr.map((V,O)=>St("span",{children:[ae("i",{style:{background:V.color}}),z&&z[O]||V.name]},O)):St("span",{children:[ae("i",{style:{background:"var(--acl-ink)"}}),L]}),St("span",{className:"acl-bm__sizehint",children:[ae("b",{style:{width:12,height:12}}),ae("b",{style:{width:22,height:22}}),ae("b",{style:{width:34,height:34}}),y]})]}),ae("div",{className:"acl-bm__plot",children:ae("svg",{className:"acl-bm__svg",viewBox:`0 0 ${n} ${s}`,preserveAspectRatio:"xMidYMax meet",children:S.map((V,O)=>{let U=x&&V.bi!==f,K=x&&V.bi===f,sa=d?nr[V.ti].color:"var(--acl-ink)";return ae("circle",{className:"acl-bm__b"+(U?" acl-bm__b--dim":"")+(K?" acl-bm__b--focus":""),cx:V.x.toFixed(1),cy:V.y.toFixed(1),r:V.r,fill:sa,style:{"--d":V.bi*90+O%30*12}},O)})})}),ae("div",{className:"acl-bm__bands",children:m.map((V,O)=>{let U=x&&O===f;return St("div",{className:"acl-bm__band"+(U?" acl-bm__band--focus":""),children:[O>0&&ae("div",{className:"acl-bm__bsep"}),U&&h&&ae("div",{className:"acl-bm__bfx",children:ae(H,{label:w,color:"var(--acl-yellow)",rotate:-5})}),ae("div",{className:"acl-bm__brange",children:V.range}),ae("div",{className:"acl-bm__blabel",children:V.label}),u&&St("div",{className:"acl-bm__bstats",children:[ae("span",{className:"acl-bm__bcount",children:V.count}),ae("span",{className:"acl-bm__bunit",children:D}),St("span",{className:"acl-bm__bamt",children:[V.amount," ",q]})]})]},O)})})]}),St("div",{className:"acl-bm__foot",children:[h&&ae(p,{kind:"loop",size:54,style:{position:"static"}}),ae("span",{children:N})]})]})}Dl.defaults={backgroundTheme:"primary",bandCount:4,colorByCategory:!0,showValueLabels:!0,showLegend:!0,focusEnabled:!0,focusIndex:3,showDecor:!0,eyebrow:"Deal Map",headline:"融資事件規模分層",subheadline:"大額融資事件地圖",summary:"97 筆大額融資按金額分四組\uFF0C<b>少數超級交易</b> 貢獻主要融資額\u3002",bands:[{label:"1\u20132 億",range:"$100\u2013200M",count:41,amount:58},{label:"2\u20135 億",range:"$200\u2013500M",count:29,amount:91},{label:"5\u201310 億",range:"$500M\u20131B",count:15,amount:103},{label:"10 億+",range:"$1B 以上",count:12,amount:718}],weights:[34,25,16,10,15],countUnit:"筆",amountUnit:"億美元",closingLine:"數量最多的不一定最重要\uFF0C影響最大的往往是鉅額交易\u3002",categoryLabels:["模型","應用","基礎設施","晶片","其他"],legendFallback:"單筆大額融資事件",sizeHintCaption:"氣泡大小 = 單筆金額",focusBandStickerLabel:"超級交易"};Dl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"bandCount",type:"number",default:4,min:2,max:4,step:1,label:"規模分組數",desc:"金額區間分組的數量(2\u20134)"},{key:"colorByCategory",type:"boolean",default:!0,label:"按類別配色",desc:"氣泡是否按賽道著色(關閉則統一墨色)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"每組下方的筆數與金額標籤"},{key:"showLegend",type:"boolean",default:!0,label:"圖例",desc:"頂部賽道色標與氣泡大小說明"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個金額分組(其餘淡化)"},{key:"focusIndex",type:"number",default:3,min:0,max:3,step:1,maxFrom:"bandCount",label:"重點物件",desc:"被高亮的金額分組序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var qc=Dl.defaults,Pc=Dl.controls;var Mi={};Y(Mi,{controls:()=>Hc,default:()=>Rl,defaults:()=>Vc});import $c from"react";import{jsx as Ia,jsxs as Je}from"react/jsx-runtime";var Bc=t=>{let l=Number.isFinite(t)&&t>0?t:1,c=Math.pow(10,Math.floor(Math.log10(l)));return Math.ceil(l/c)*c>=l*1.08?Math.ceil(l/c)*c:Math.ceil(l*1.12/c)*c};function Rl(t){let l={...Rl.defaults,...t},{backgroundTheme:c,metricCount:k,chartType:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,badge:A,hero:M,metrics:F,series:D,seriesUnit:q,seriesNote:N,chartCaption:z,closingLine:L}=l,y=j(D),w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=j(F).slice(0,Math.max(2,$(k,2))),m=Q(_,0,Math.max(0,y.length-1)),f=y.length,n=600,s=300,i=n/Pa(f,1),a=Math.min(96,i*.46),e=Bc(X(y.map(E=>$(E?.v)),1)),o=E=>i*(E+.5),r=E=>s-$(E)/Pa(e,1)*s,b=y.map((E,T)=>`${T?"L":"M"}${o(T).toFixed(1)} ${r(E?.v).toFixed(1)}`).join(" "),R=`${b} L${o(Math.max(0,f-1)).toFixed(1)} ${s} L${o(0).toFixed(1)} ${s} Z`;return Je("div",{className:"acl-root acl-qs",style:{background:w},children:[Ia("style",{children:`
        .acl-qs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-qs__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-qs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-qs__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-qs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-qs__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-qs__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-qs__body{ flex:1; display:flex; gap:40px; margin-top:34px; min-height:0; }

        /* \u2500\u2500 hero card (ink) \u2500\u2500 */
        .acl-qs__hero{ flex:0 0 760px; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:10px 12px 0 rgba(22,21,15,.2);
          padding:38px 44px 34px; display:flex; flex-direction:column; overflow:hidden; }
        .acl-qs__ghost{ position:absolute; right:-34px; bottom:-86px; font-family:var(--acl-font-num);
          font-size:460px; line-height:.7; color:rgba(236,239,53,.16); pointer-events:none; z-index:0;
          letter-spacing:-.04em; }
        .acl-qs__badge{ display:inline-flex; align-self:flex-start; font-family:var(--acl-font-mono);
          font-weight:700; font-size:18px; letter-spacing:.06em; text-transform:uppercase;
          background:var(--acl-yellow); color:var(--acl-ink); padding:8px 16px; position:relative; z-index:1;  white-space:nowrap;}
        .acl-qs__herolabel{ position:relative; z-index:1; font-weight:700; font-size:26px;
          color:rgba(255,255,255,.66); margin-top:auto; display:flex; align-items:center; gap:14px; }
        .acl-qs__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-qs__heronum{ position:relative; z-index:1; font-family:var(--acl-font-num); font-size:212px;
          line-height:.84; color:var(--acl-yellow); margin-top:6px; }
        .acl-qs__tiles{ position:relative; z-index:1; display:grid; gap:14px; margin-top:30px;
          grid-template-columns:repeat(2, 1fr); }
        .acl-qs__tiles[data-n="2"]{ grid-template-columns:repeat(2, 1fr); }
        .acl-qs__tiles[data-n="3"]{ grid-template-columns:repeat(3, 1fr); }
        .acl-qs__tiles[data-n="4"]{ grid-template-columns:repeat(2, 1fr); }
        .acl-qs__tile{ border:2px solid rgba(255,255,255,.26); padding:14px 16px 12px; }
        .acl-qs__tile .k{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(255,255,255,.5); }
        .acl-qs__tile .v{ font-family:var(--acl-font-num); font-size:48px; line-height:.96; margin-top:4px; }
        .acl-qs__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700;
          font-size:18px; margin-left:4px; color:rgba(255,255,255,.62); }

        /* \u2500\u2500 mini chart panel \u2500\u2500 */
        .acl-qs__chart{ flex:1; min-width:0; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 40px 24px; display:flex; flex-direction:column; }
        .acl-qs__ctitle{ font-family:var(--acl-font-mono); font-size:17px; font-weight:700;
          letter-spacing:.06em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-qs__plot{ position:relative; flex:1; margin-top:18px; }
        .acl-qs__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.16); }
        .acl-qs__bars{ position:absolute; inset:0; }
        .acl-qs__bar{ position:absolute; bottom:0; background:rgba(22,21,15,.30);
          border-top:5px solid var(--acl-ink); transition:height .4s, background .3s; }
        .acl-qs__bar--focus{ background:var(--acl-pink); border-top-color:var(--acl-ink);
          box-shadow:4px 4px 0 rgba(22,21,15,.24); }
        .acl-qs__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-qs__vlabel{ position:absolute; transform:translate(-50%,-100%); font-family:var(--acl-font-num);
          font-size:30px; line-height:1; white-space:nowrap; color:rgba(22,21,15,.7);
          text-shadow:0 0 7px var(--acl-paper),0 0 7px var(--acl-paper),0 0 7px var(--acl-paper); }
        .acl-qs__vlabel--focus{ color:var(--acl-pink); }
        .acl-qs__dot{ position:absolute; width:14px; height:14px; border-radius:50%; background:var(--acl-paper);
          border:3px solid var(--acl-ink); transform:translate(-50%,-50%); }
        .acl-qs__dot--focus{ width:20px; height:20px; background:var(--acl-pink); }
        .acl-qs__xaxis{ display:flex; margin-top:12px; }
        .acl-qs__xtick{ flex:1; text-align:center; font-weight:900; font-size:26px; color:rgba(22,21,15,.55); }
        .acl-qs__xtick--focus{ color:var(--acl-pink); }
        .acl-qs__cnote{ font-family:var(--acl-font-hand); font-size:26px; margin-top:10px; }

        .acl-qs__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-qs__bar{ animation:acl-qs-grow .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-qs__hero{ animation:acl-qs-rise .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-qs-grow{ from{ transform:scaleY(0); transform-origin:bottom; } to{ transform:none; } }
        @keyframes acl-qs-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
      `}),Je("div",{className:"acl-qs__head",children:[Je("div",{children:[Ia("div",{className:"acl-qs__eyebrow",children:h}),Ia("h1",{className:"acl-qs__h",children:C})]}),Ia("div",{className:"acl-qs__sub",children:P}),Ia("div",{className:"acl-qs__summary",dangerouslySetInnerHTML:{__html:I}})]}),Je("div",{className:"acl-qs__body",children:[Je("div",{className:"acl-qs__hero",children:[Ia("div",{className:"acl-qs__ghost",children:A}),Ia("div",{className:"acl-qs__badge",children:M.tag}),g&&Ia("div",{style:{position:"absolute",right:34,top:30,zIndex:2},children:Ia(p,{kind:"spark",size:50,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})}),Je("div",{className:"acl-qs__herolabel",children:[M.label,Ia("i",{className:"acl-qs__unit",children:M.unit})]}),Ia("div",{className:"acl-qs__heronum",children:M.value}),Ia("div",{className:"acl-qs__tiles","data-n":v.length,children:v.map((E,T)=>Je("div",{className:"acl-qs__tile",children:[Ia("div",{className:"k",children:E.k}),Je("div",{className:"v",children:[E.v,Ia("em",{children:E.unit})]})]},T))})]}),Je("div",{className:"acl-qs__chart",children:[Je("div",{className:"acl-qs__ctitle",children:[N," \xB7 ",q]}),Je("div",{className:"acl-qs__plot",children:[[.33,.66,1].map((E,T)=>Ia("div",{className:"acl-qs__grid",style:{top:`${(1-E)*100}%`}},T)),d==="column"&&Ia("div",{className:"acl-qs__bars",children:y.map((E,T)=>Ia("div",{className:"acl-qs__bar"+(u&&T===m?" acl-qs__bar--focus":""),style:{left:`${(o(T)-a/2)/n*100}%`,width:`${a/n*100}%`,height:`${(s-r(E.v))/s*100}%`}},T))}),Je("svg",{className:"acl-qs__svg",viewBox:`0 0 ${n} ${s}`,preserveAspectRatio:"none",children:[d==="area"&&Ia("path",{d:R,fill:"var(--acl-pink)",fillOpacity:"0.85"}),(d==="area"||d==="line")&&Ia("path",{d:b,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"4",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),y.map((E,T)=>{let B=u&&T===m;return Je($c.Fragment,{children:[d!=="column"&&Ia("div",{className:"acl-qs__dot"+(B?" acl-qs__dot--focus":""),style:{left:`${o(T)/n*100}%`,top:`${r(E.v)/s*100}%`}}),x&&Ia("div",{className:"acl-qs__vlabel"+(B?" acl-qs__vlabel--focus":""),style:{left:`${o(T)/n*100}%`,top:`calc(${r(E.v)/s*100}% - 16px)`},children:E.v})]},T)})]}),Ia("div",{className:"acl-qs__xaxis",children:y.map((E,T)=>Ia("div",{className:"acl-qs__xtick"+(u&&T===m?" acl-qs__xtick--focus":""),children:E.label},T))}),g&&z&&Je("div",{className:"acl-qs__cnote",children:[Ia(p,{kind:"arrowS",size:44,rotate:0,style:{position:"static",verticalAlign:"middle",marginRight:8}}),z]})]})]}),Je("div",{className:"acl-qs__foot",children:[g&&Ia(p,{kind:"loop",size:56,style:{position:"static"}}),Ia("span",{children:L})]})]})}Rl.defaults={backgroundTheme:"primary",metricCount:3,chartType:"column",focusEnabled:!0,focusIndex:0,showValueLabels:!0,showDecor:!0,eyebrow:"Quarter Breakdown",headline:"冷啟動季度",subheadline:"Q1 融資拆解",summary:"Q1 交易數量穩定\uFF0C但整體金額<b>尚未進入全年高峰</b>\u3002",badge:"Q1",hero:{tag:"Q1 \xB7 Jan\u2013Mar",label:"季度融資額",value:"162",unit:"億美元"},metrics:[{k:"事件數",v:"18",unit:"筆"},{k:"平均單筆",v:"9.0",unit:"億"},{k:"最大單筆",v:"32",unit:"億"},{k:"佔全年",v:"16.7",unit:"%"}],series:[{label:"Q1",v:162},{label:"Q2",v:284},{label:"Q3",v:318},{label:"Q4",v:206}],seriesUnit:"億美元",seriesNote:"全年季度走勢",chartCaption:"起步階段\uFF0C曲線尚未抬頭",closingLine:"全年熱度從保守啟動開始\u3002"};Rl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"主卡內支撐指標格數量(2\u20134)"},{key:"chartType",type:"enum",default:"column",options:["column","area","line"],label:"圖表型別",desc:"右側序列迷你圖\uFF1A柱狀 / 面積 / 折線"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"迷你圖資料點上的數值顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否在序列中高亮某個點(本期)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,label:"重點物件",desc:"被高亮的序列點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與批註的顯示/隱藏"}];var Vc=Rl.defaults,Hc=Rl.controls;var Ai={};Y(Ai,{controls:()=>jc,default:()=>ql,defaults:()=>Yc});import"react";import{jsx as Qa,jsxs as qt}from"react/jsx-runtime";function Oc({data:t,color:l}){let c=t.length,k=200,d=56,u=Math.max(...t),_=Math.min(...t),x=u-_||1,g=I=>I/(c-1)*k,h=I=>d-6-(I-_)/x*(d-12),C=t.map((I,A)=>`${A?"L":"M"}${g(A).toFixed(1)} ${h(I).toFixed(1)}`).join(" "),P=`${C} L${k} ${d} L0 ${d} Z`;return qt("svg",{viewBox:`0 0 ${k} ${d}`,width:"100%",height:"56",preserveAspectRatio:"none",style:{display:"block"},children:[Qa("path",{d:P,fill:l,fillOpacity:"0.16"}),Qa("path",{d:C,fill:"none",stroke:l,strokeWidth:"4",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),Qa("circle",{cx:g(c-1),cy:h(t[c-1]),r:"6",fill:l})]})}function ql(t){let l={...ql.defaults,...t},{backgroundTheme:c,rowCount:k,showDelta:d,showSpark:u,colorByTrend:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,rows:M,columnLabels:F,closingLine:D,focusStickerLabel:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=M.slice(0,Math.max(2,k)),L=Math.min(g,z.length-1),y="var(--acl-blue)",w="var(--acl-red)",v=`1fr 360px${d?" 260px":""}${u?" 280px":""}`;return qt("div",{className:"acl-root acl-dl",style:{background:N},children:[Qa("style",{children:`
        .acl-dl{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-dl__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-dl__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-dl__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-dl__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-dl__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-dl__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}
        .acl-dl__panel{ position:relative; flex:1; margin-top:34px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:14px 44px 22px; display:flex; flex-direction:column; }
        .acl-dl__colhead{ display:grid; grid-template-columns:${v}; align-items:center; gap:30px;
          padding:14px 8px 12px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:15px; letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-dl__colhead .r{ text-align:right; }
        .acl-dl__colhead .c{ text-align:center; }
        .acl-dl__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-dl__row{ flex:1; display:grid; grid-template-columns:${v}; align-items:center; gap:30px;
          padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.2); position:relative; transition:background .25s; }
        .acl-dl__row:last-child{ border-bottom:none; }
        .acl-dl__dim{ display:flex; flex-direction:column; gap:2px; }
        .acl-dl__dim b{ font-weight:900; font-size:34px; line-height:1; }
        .acl-dl__dim span{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.46); }
        .acl-dl__val{ font-family:var(--acl-font-num); font-size:54px; line-height:.9; text-align:right; white-space:nowrap; }
        .acl-dl__val em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:5px; opacity:.6; }
        .acl-dl__delta{ justify-self:center; display:inline-flex; align-items:center; gap:8px;
          font-family:var(--acl-font-num); font-size:34px; line-height:1; padding:8px 16px;
          border:3px solid var(--acl-ink); white-space:nowrap; }
        .acl-dl__delta .ar{ font-size:28px; }
        .acl-dl__spark{ align-self:center; width:100%; }
        .acl-dl__row--focus{ background:var(--acl-ink); color:var(--acl-paper);
          box-shadow:6px 0 0 var(--acl-ink), -6px 0 0 var(--acl-ink); border-bottom-color:transparent; z-index:2; }
        .acl-dl__row--focus .acl-dl__dim span{ color:rgba(255,255,255,.55); }
        .acl-dl__fx{ position:absolute; top:-14px; left:120px; z-index:5; }
        .acl-dl__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-dl__row{ animation:acl-dl-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .06s); }
        }
        @keyframes acl-dl-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
      `}),qt("div",{className:"acl-dl__head",children:[qt("div",{children:[Qa("div",{className:"acl-dl__eyebrow",children:C}),Qa("h1",{className:"acl-dl__h",children:P})]}),Qa("div",{className:"acl-dl__sub",children:I}),h&&Qa(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),Qa("div",{className:"acl-dl__summary",dangerouslySetInnerHTML:{__html:A}})]}),qt("div",{className:"acl-dl__panel",children:[qt("div",{className:"acl-dl__colhead",children:[Qa("span",{children:F[0]}),Qa("span",{className:"r",children:F[1]}),d&&Qa("span",{className:"c",children:F[2]}),u&&Qa("span",{className:"c",children:F[3]})]}),Qa("div",{className:"acl-dl__rows",children:z.map((m,f)=>{let n=x&&f===L,s=m.delta>=0,i=_?s?y:w:"var(--acl-ink)";return qt("div",{className:"acl-dl__row"+(n?" acl-dl__row--focus":""),style:{"--i":f},children:[n&&h&&Qa("div",{className:"acl-dl__fx",children:Qa(H,{label:q,color:"var(--acl-yellow)",rotate:6})}),qt("div",{className:"acl-dl__dim",children:[Qa("b",{children:m.dim}),Qa("span",{children:m.en})]}),qt("div",{className:"acl-dl__val",children:[m.value,Qa("em",{children:m.unit})]}),d&&qt("div",{className:"acl-dl__delta",style:{background:n?"transparent":i,color:n?"var(--acl-paper)":s?"var(--acl-ink)":"var(--acl-paper)",borderColor:n?"var(--acl-paper)":"var(--acl-ink)"},children:[Qa("span",{className:"ar",children:s?"\u25B2":"\u25BC"}),Math.abs(m.delta),m.deltaUnit||"%"]}),u&&Qa("div",{className:"acl-dl__spark",children:Qa(Oc,{data:m.spark,color:n?"var(--acl-yellow)":i})})]},f)})})]}),qt("div",{className:"acl-dl__foot",children:[h&&Qa(p,{kind:"loop",size:56,style:{position:"static"}}),Qa("span",{children:D})]})]})}ql.defaults={backgroundTheme:"muted",rowCount:4,showDelta:!0,showSpark:!0,colorByTrend:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Quarter Breakdown",headline:"加速季度",subheadline:"Q2 融資拆解",summary:"Q2 進入明顯加速期\uFF0C模型\u3001應用與基礎設施<b>同步升溫</b>\u3002",columnLabels:["維度","本期值","環比","趨勢"],focusStickerLabel:"加速訊號",rows:[{dim:"融資額",en:"Funding",value:"284",unit:"億",delta:75.3,spark:[120,162,210,284]},{dim:"事件數",en:"Deals",value:"26",unit:"筆",delta:44.4,spark:[15,18,21,26]},{dim:"平均單筆",en:"Avg Ticket",value:"10.9",unit:"億",delta:21.1,spark:[8.4,9,9.8,10.9]},{dim:"最大單筆",en:"Max Ticket",value:"38",unit:"億",delta:18.8,spark:[26,32,34,38]},{dim:"頭部集中度",en:"Concentration",value:"58",unit:"%",delta:-4.2,spark:[64,62,60,58]}],closingLine:"Q2 是融資視窗開啟的關鍵節點\u3002"};ql.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:4,min:2,max:5,step:1,label:"行數",desc:"展示的指標行數(2\u20135)"},{key:"showDelta",type:"boolean",default:!0,label:"環比列",desc:"環比變化徽標列的顯示/隱藏"},{key:"showSpark",type:"boolean",default:!0,label:"趨勢列",desc:"每行迷你趨勢曲線列的顯示/隱藏"},{key:"colorByTrend",type:"boolean",default:!0,label:"按漲跌配色",desc:"按上升/下降為徽標與曲線著色"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:4,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Yc=ql.defaults,jc=ql.controls;var Ti={};Y(Ti,{controls:()=>Wc,default:()=>Pl,defaults:()=>Uc});import rr from"react";import{jsx as va,jsxs as at}from"react/jsx-runtime";function Pl(t){let l={...Pl.defaults,...t},{backgroundTheme:c,mediaCount:k,metricCount:d,showPeakMark:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,badge:A,hero:M,metrics:F,curve:D,curveUnit:q,peakIndex:N,peakNote:z,collage:L,closingLine:y,coverageStickerLabel:w,coverageStickerSub:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(F).slice(0,Math.max(2,$(d,2))),n=Q(x,0,Math.max(0,f.length-1)),s=L&&L[k]||[],i=j(D).map(S=>$(S)),a=i.length,e=660,o=200,r=X(i,1)*1.1||1,b=S=>S/Pa(a-1,1)*e,R=S=>o-$(S)/Pa(r,1)*o,E=i.map((S,V)=>`${V?"L":"M"}${b(V).toFixed(1)} ${R(S).toFixed(1)}`).join(" "),T=`${E} L${e} ${o} L0 ${o} Z`,B=Q(N,0,Math.max(0,a-1));return at("div",{className:"acl-root acl-pk",style:{background:m},children:[va("style",{children:`
        .acl-pk{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-pk__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-pk__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-pk__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-pk__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-pk__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pk__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-pk__body{ flex:1; display:flex; gap:40px; margin-top:30px; min-height:0; }
        .acl-pk__panel{ flex:0 0 740px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 40px 26px; display:flex; flex-direction:column; }
        .acl-pk__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-pink); color:var(--acl-paper); padding:9px 16px;  white-space:nowrap;}
        .acl-pk__herolabel{ font-weight:700; font-size:24px; color:rgba(22,21,15,.6); margin-top:24px;
          display:flex; align-items:center; gap:14px; }
        .acl-pk__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-ink); color:var(--acl-paper); }
        .acl-pk__heronum{ font-family:var(--acl-font-num); font-size:188px; line-height:.84; margin-top:4px; }
        .acl-pk__tiles{ display:flex; gap:14px; margin-top:18px; }
        .acl-pk__tile{ flex:1; border:2px solid var(--acl-ink); padding:12px 14px 10px; transition:.25s; }
        .acl-pk__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-pk__tile .v{ font-family:var(--acl-font-num); font-size:42px; line-height:.96; margin-top:3px; }
        .acl-pk__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }
        .acl-pk__tile--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-pk__tile--focus .k{ color:rgba(255,255,255,.55); }
        .acl-pk__chart{ flex:1; margin-top:22px; position:relative; min-height:120px; }
        .acl-pk__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-pk__pkdot{ position:absolute; width:22px; height:22px; border-radius:50%; background:var(--acl-pink);
          border:4px solid var(--acl-ink); transform:translate(-50%,-50%); z-index:2; }
        .acl-pk__pklab{ position:absolute; transform:translate(-50%,-100%); z-index:3; white-space:nowrap;
          font-family:var(--acl-font-num); font-size:30px; color:var(--acl-pink);
          text-shadow:0 0 7px var(--acl-paper),0 0 7px var(--acl-paper); }
        .acl-pk__pkflag{ position:absolute; transform:translate(-50%,0); z-index:4; }

        /* collage stage */
        .acl-pk__stage{ flex:1; position:relative; min-width:0; }
        .acl-pk__slot{ position:absolute; }
        .acl-pk__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-pk__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pk__panel{ animation:acl-pk-rise .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-pk-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
      `}),at("div",{className:"acl-pk__head",children:[at("div",{children:[va("div",{className:"acl-pk__eyebrow",children:h}),va("h1",{className:"acl-pk__h",children:C})]}),va("div",{className:"acl-pk__sub",children:P}),va("div",{className:"acl-pk__summary",dangerouslySetInnerHTML:{__html:I}})]}),at("div",{className:"acl-pk__body",children:[at("div",{className:"acl-pk__panel",children:[at("div",{className:"acl-pk__badge",children:["\u2605 ",A]}),g&&va("div",{style:{position:"absolute",right:30,top:26},children:va(p,{kind:"star",size:52,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})}),at("div",{className:"acl-pk__herolabel",children:[M.label,va("i",{className:"acl-pk__unit",children:M.unit})]}),va("div",{className:"acl-pk__heronum",children:M.value}),va("div",{className:"acl-pk__tiles",children:f.map((S,V)=>at("div",{className:"acl-pk__tile"+(_&&V===n?" acl-pk__tile--focus":""),children:[va("div",{className:"k",children:S.k}),at("div",{className:"v",children:[S.v,va("em",{children:S.unit})]})]},V))}),at("div",{className:"acl-pk__chart",children:[at("svg",{className:"acl-pk__svg",viewBox:`0 0 ${e} ${o}`,preserveAspectRatio:"none",children:[va("path",{d:T,fill:"var(--acl-pink)",fillOpacity:"0.18"}),va("path",{d:E,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"3.5",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),u&&at(rr.Fragment,{children:[va("div",{className:"acl-pk__pkdot",style:{left:`${b(B)/e*100}%`,top:`${R(i[B])/o*100}%`}}),va("div",{className:"acl-pk__pklab",style:{left:`${b(B)/e*100}%`,top:`calc(${R(i[B])/o*100}% - 14px)`},children:i[B]}),g&&va("div",{className:"acl-pk__pkflag",style:{left:`${b(B)/e*100}%`,top:`calc(${R(i[B])/o*100}% - 78px)`},children:va(H,{label:z,color:"var(--acl-yellow)",rotate:-5})})]})]})]}),at("div",{className:"acl-pk__stage",children:[s.length===0&&va("div",{className:"acl-pk__empty",children:"// 圖片數量 = 0"}),s.map((S,V)=>va("div",{className:"acl-pk__slot",style:{left:S.l,top:S.t},children:va(W,{id:"peak-"+V,box:S.box,rotate:S.r,ratio:S.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:S.label,sub:S.sub,color:S.color,subColor:"var(--acl-ink)",rotate:S.sr}})},V)),g&&at(rr.Fragment,{children:[va("div",{style:{position:"absolute",right:4,top:8,zIndex:4,transform:"rotate(-6deg)"},children:va(H,{label:w,sub:v,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:20})}),va(p,{kind:"spark",size:46,rotate:12,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:150,top:92}}),va(p,{kind:"spark",size:30,rotate:-6,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:28,bottom:150}}),va(p,{kind:"arrow",size:90,rotate:118,color:"var(--acl-ink)",style:{left:-6,top:"46%"}})]})]})]}),at("div",{className:"acl-pk__foot",children:[g&&va(p,{kind:"loop",size:56,style:{position:"static"}}),va("span",{children:y})]})]})}Pl.defaults={images:[],backgroundTheme:"primary",mediaCount:2,metricCount:3,showPeakMark:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Quarter Breakdown",headline:"全年峰值季度",subheadline:"Q3 融資拆解",summary:"Q3 融資額與事件數均達<b>全年最高</b>\uFF0C是市場情緒高點\u3002",badge:"Q3 \xB7 全年峰值",hero:{label:"季度融資額",value:"318",unit:"億美元"},metrics:[{k:"事件數",v:"31",unit:"筆"},{k:"平均單筆",v:"10.3",unit:"億"},{k:"峰值月份",v:"8",unit:"月"}],curve:[45,58,59,86,105,93,92,118,108,73,81,52],curveUnit:"億美元",peakIndex:7,peakNote:"8 月峰值",coverageStickerLabel:"全年最高",coverageStickerSub:"PEAK",collage:{0:[],1:[{l:200,t:70,box:540,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)",label:"峰值現場",sub:"Q3"}],2:[{l:16,t:4,box:470,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)",label:"峰值現場",sub:"Q3"},{l:440,t:286,box:452,r:4,ratio:.84,sr:3,color:"var(--acl-blue)",label:"高點交易",sub:"8月"}],3:[{l:250,t:0,box:400,r:3,ratio:.92,sr:-4,color:"var(--acl-yellow)",label:"峰值現場",sub:"Q3"},{l:0,t:244,box:366,r:-5,ratio:1.2,sr:4,color:"var(--acl-blue)",label:"高點交易",sub:"8月"},{l:470,t:400,box:348,r:5,ratio:.82,sr:-3,color:"var(--acl-pink)",label:"超級交易",sub:"Top"}]},closingLine:"高峰之後\uFF0C市場開始從熱度轉向篩選\u3002"};Pl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主卡內支撐指標格數量(2\u20133)"},{key:"showPeakMark",type:"boolean",default:!0,label:"峰值標記",desc:"面積圖上的峰值點與標籤的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個支撐指標"},{key:"focusIndex",type:"number",default:0,min:0,max:2,step:1,maxFrom:"metricCount",label:"重點物件",desc:"被高亮的指標序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Uc=Pl.defaults,Wc=Pl.controls;var Di={};Y(Di,{controls:()=>Qc,default:()=>$l,defaults:()=>Gc});import Xc from"react";import{jsx as ee,jsxs as Yt}from"react/jsx-runtime";function $l(t){let l={...$l.defaults,...t},{backgroundTheme:c,nodeCount:k,showCurve:d,showValueLabels:u,showDelta:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,nodes:M,unit:F,deckNote:D,closingLine:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=j(M).slice(0,Math.max(2,$(k,2))),L=Q(g,0,Math.max(0,z.length-1)),y=z.length,w=1e3,v=460,m=w/(y*2||1),f=X(z.map(e=>$(e?.v)),1)*1.16||1,n=e=>m+e/Math.max(1,y-1)*(w-m*2),s=e=>v-$(e)/Pa(f,1)*v,i=z.map((e,o)=>`${o?"L":"M"}${n(o).toFixed(1)} ${s(e?.v).toFixed(1)}`).join(" "),a=`${i} L${n(y-1).toFixed(1)} ${v} L${n(0).toFixed(1)} ${v} Z`;return Yt("div",{className:"acl-root acl-pl",style:{background:N},children:[ee("style",{children:`
        .acl-pl{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 64px; display:flex; flex-direction:column; }
        .acl-pl__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-pl__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-pl__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-pl__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-pl__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pl__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-pl__panel{ flex:1; margin-top:30px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:46px 56px 40px; display:flex; flex-direction:column; }
        .acl-pl__plot{ position:relative; flex:1; min-height:0; }
        .acl-pl__base{ position:absolute; left:0; right:0; bottom:0; height:0; border-top:4px dashed var(--acl-ink); }
        .acl-pl__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.14); }
        .acl-pl__gridlab{ position:absolute; right:100%; margin-right:14px; transform:translateY(-50%);
          font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.04em; color:rgba(22,21,15,.4); white-space:nowrap; }
        .acl-pl__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-pl__node{ position:absolute; transform:translateX(-50%); display:flex; flex-direction:column;
          align-items:center; bottom:0; }
        .acl-pl__stem{ width:0; border-left:3px dashed rgba(22,21,15,.3); }
        .acl-pl__dot{ width:30px; height:30px; border-radius:50%; background:var(--acl-paper);
          border:5px solid var(--acl-ink); position:absolute; transform:translate(-50%,-50%); z-index:2; transition:.25s; }
        .acl-pl__dot--focus{ width:42px; height:42px; background:var(--acl-pink); }
        .acl-pl__val{ position:absolute; transform:translate(-50%,-100%); font-family:var(--acl-font-num);
          font-size:52px; line-height:.9; white-space:nowrap; z-index:3;
          text-shadow:0 0 8px var(--acl-paper),0 0 8px var(--acl-paper),0 0 8px var(--acl-paper); }
        .acl-pl__val em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:4px; opacity:.6; }
        .acl-pl__val--focus{ color:var(--acl-pink); }
        .acl-pl__cap{ position:absolute; bottom:-66px; transform:translateX(-50%); text-align:center; white-space:nowrap; }
        .acl-pl__cap b{ display:block; font-weight:900; font-size:34px; line-height:1; }
        .acl-pl__cap span{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-pl__cap--focus b{ color:var(--acl-pink); }
        .acl-pl__delta{ position:absolute; transform:translate(-50%,-50%); z-index:5; display:inline-flex;
          align-items:center; gap:7px; font-family:var(--acl-font-num); font-size:30px; line-height:1;
          background:var(--acl-red); color:var(--acl-paper); padding:9px 15px;
          box-shadow:3px 4px 0 rgba(22,21,15,.25); white-space:nowrap; }
        .acl-pl__nfx{ position:absolute; transform:translate(-50%,-100%); z-index:6; }
        .acl-pl__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pl__node, [data-deck-active] .acl-pl__valwrap{
            animation:acl-pl-in .5s cubic-bezier(.2,.8,.2,1) both; animation-delay:calc(var(--i,0) * .1s + .1s); }
        }
        @keyframes acl-pl-in{ from{ opacity:0; transform:translate(-50%,16px); } to{ opacity:1; } }
      `}),Yt("div",{className:"acl-pl__head",children:[Yt("div",{children:[ee("div",{className:"acl-pl__eyebrow",children:C}),ee("h1",{className:"acl-pl__h",children:P})]}),ee("div",{className:"acl-pl__sub",children:I}),ee("div",{className:"acl-pl__summary",dangerouslySetInnerHTML:{__html:A}})]}),ee("div",{className:"acl-pl__panel",children:Yt("div",{className:"acl-pl__plot",children:[ee("div",{className:"acl-pl__base"}),[.25,.5,.75].map((e,o)=>ee("div",{className:"acl-pl__grid",style:{top:`${(1-e)*100}%`},children:ee("span",{className:"acl-pl__gridlab",children:Math.round(f*e/10)*10})},o)),d&&Yt("svg",{className:"acl-pl__svg",viewBox:`0 0 ${w} ${v}`,preserveAspectRatio:"none",children:[ee("path",{d:a,fill:"var(--acl-blue)",fillOpacity:"0.26"}),ee("path",{d:i,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"5",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),z.map((e,o)=>{let r=x&&o===L,b=n(o)/w*100,R=s(e?.v)/v*100;return Yt(Xc.Fragment,{children:[ee("div",{className:"acl-pl__node",style:{left:`${b}%`,"--i":o},children:ee("div",{className:"acl-pl__stem",style:{height:`calc((100% - 0px) * ${(1-s(e?.v)/v).toFixed(3)})`}})}),ee("div",{className:"acl-pl__dot"+(r?" acl-pl__dot--focus":""),style:{left:`${b}%`,top:`${R}%`}}),u&&Yt("div",{className:"acl-pl__val"+(r?" acl-pl__val--focus":""),style:{left:`${b}%`,top:`calc(${R}% - 26px)`},children:[$(e?.v),ee("em",{children:F})]}),Yt("div",{className:"acl-pl__cap"+(r?" acl-pl__cap--focus":""),style:{left:`${b}%`},children:[ee("b",{children:e.label}),ee("span",{children:e.note})]}),r&&_&&e.delta!=null&&Number.isFinite(Number(e.delta))&&Yt("div",{className:"acl-pl__delta",style:{left:`${b}%`,top:`calc(${R}% + 64px)`},children:[ee("span",{children:"\u25BC"}),Math.abs($(e.delta)),l.deltaSuffix]}),r&&h&&ee("div",{className:"acl-pl__nfx",style:{left:`${b}%`,top:`calc(${R}% - 86px)`},children:ee(H,{label:D,color:"var(--acl-yellow)",rotate:-5})})]},o)}),h&&ee(p,{kind:"arrow",size:104,rotate:148,color:"var(--acl-ink)",style:{right:"6%",top:"14%"}})]})}),Yt("div",{className:"acl-pl__foot",children:[h&&ee(p,{kind:"loop",size:56,style:{position:"static"}}),ee("span",{children:q})]})]})}$l.defaults={backgroundTheme:"muted",nodeCount:4,showCurve:!0,showValueLabels:!0,showDelta:!0,focusEnabled:!0,focusIndex:3,showDecor:!0,eyebrow:"Quarter Breakdown",headline:"理性回落季度",subheadline:"Q4 融資拆解",summary:"Q4 較 Q3 回落\uFF0C但<b>仍高於年初水平</b>\uFF0C資金並未完全撤離\u3002",nodes:[{label:"Q1",note:"冷啟動",v:162,delta:null},{label:"Q2",note:"加速",v:284,delta:75.3},{label:"Q3",note:"峰值",v:318,delta:12},{label:"Q4",note:"理性回落",v:206,delta:35.2}],unit:"億",deltaSuffix:"% vs 上期",deckNote:"仍處高位",closingLine:"回落不是終點\uFF0C而是分化的開始\u3002"};$l.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"nodeCount",type:"number",default:4,min:2,max:4,step:1,label:"節點數量",desc:"時間軸上的節點數量(2\u20134)"},{key:"showCurve",type:"boolean",default:!0,label:"趨勢曲線",desc:"連線各節點的升降曲線與面積的顯示/隱藏"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各節點上方的數值顯示/隱藏"},{key:"showDelta",type:"boolean",default:!0,label:"環比徽標",desc:"重點節點的環比變化徽標顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個節點"},{key:"focusIndex",type:"number",default:3,min:0,max:3,step:1,maxFrom:"nodeCount",label:"重點物件",desc:"被高亮的節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Gc=$l.defaults,Qc=$l.controls;var Ri={};Y(Ri,{controls:()=>Jc,default:()=>Bl,defaults:()=>Zc});import cr from"react";import{jsx as re,jsxs as et}from"react/jsx-runtime";var Kc=t=>{let l=Number.isFinite(t)&&t>0?t:1,c=Math.pow(10,Math.floor(Math.log10(l)));return Math.ceil(l*1.06/c)*c};function Bl(t){let l={...Bl.defaults,...t},{backgroundTheme:c,chartType:k,barCount:d,highlightHighCount:u,highlightLowCount:_,showBaseline:x,showValueLabels:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,unit:M,series:F,peakNote:D,troughNote:q,closingLine:N,legendHigh:z,legendLow:L,legendBase:y,insightCaption:w,footerStickerLabel:v,footerStickerSub:m}=l,f=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",n=j(F).slice(0,Math.max(4,$(d,4))),s=n.length,i=n.map(U=>$(U?.v)),a=Kc(X(i,1)),e=i.reduce((U,K)=>U+K,0)/Pa(s,1),o=n.map((U,K)=>K).sort((U,K)=>i[K]-i[U]),r=new Set(o.slice(0,Math.max(0,u))),b=new Set(o.slice(s-Math.max(0,_))),R=U=>r.has(U)?"high":b.has(U)?"low":"base",E=1e3,T=360,B=E/Pa(s,1),S=U=>B*(U+.5),V=U=>(1-U/a)*100,O=Math.min(74,B*.5);return et("div",{className:"acl-root acl-pt",style:{background:f},children:[re("style",{children:`
        .acl-pt{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-pt__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-pt__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-pt__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-pt__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-pt__summary{ margin-left:auto; max-width:560px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pt__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-pt__panel{ flex:1; min-height:0; margin-top:30px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:9px 11px 0 rgba(22,21,15,.16);
          padding:30px 46px 22px; display:flex; flex-direction:column; }
        .acl-pt__legend{ display:flex; align-items:center; gap:26px; flex:0 0 auto; }
        .acl-pt__lg{ display:flex; align-items:center; gap:9px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:16px; letter-spacing:.04em; text-transform:uppercase;
          color:rgba(22,21,15,.62); white-space:nowrap; }
        .acl-pt__sw{ width:20px; height:20px; border:2.5px solid var(--acl-ink); }
        .acl-pt__lgnote{ margin-left:auto; font-family:var(--acl-font-hand); font-size:24px;
          color:rgba(22,21,15,.7); white-space:nowrap; }
        .acl-pt__unit{ font-family:var(--acl-font-mono); font-size:15px; font-weight:700;
          letter-spacing:.05em; color:rgba(22,21,15,.5); white-space:nowrap; }

        .acl-pt__plot{ position:relative; flex:1; margin-top:18px; }
        .acl-pt__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.14); }
        .acl-pt__base{ position:absolute; left:0; right:0; height:0; border-top:3px dashed var(--acl-ink);
          z-index:4; }
        .acl-pt__baselbl{ position:absolute; left:0; transform:translateY(-50%);
          font-family:var(--acl-font-mono); font-weight:700; font-size:14px; letter-spacing:.04em;
          background:var(--acl-ink); color:var(--acl-paper); padding:3px 8px; }

        .acl-pt__col{ position:absolute; bottom:0; transform:translateX(-50%); display:flex;
          flex-direction:column; align-items:center; justify-content:flex-end; height:100%; }
        .acl-pt__bar{ width:100%; background:rgba(22,21,15,.16); border:3px solid var(--acl-ink);
          border-bottom:none; transition:height .45s cubic-bezier(.2,.8,.2,1); }
        .acl-pt__bar--high{ background:var(--acl-pink); box-shadow:4px 0 0 rgba(22,21,15,.18); }
        .acl-pt__bar--low{ background:var(--acl-blue); }
        /* lollipop variant */
        .acl-pt__stem{ width:5px; background:var(--acl-ink); }
        .acl-pt__dot{ width:30px; height:30px; border-radius:50%; border:4px solid var(--acl-ink);
          background:var(--acl-paper); margin-bottom:-15px; z-index:2; }
        .acl-pt__dot--high{ background:var(--acl-pink); width:40px; height:40px; margin-bottom:-20px; }
        .acl-pt__dot--low{ background:var(--acl-blue); }

        .acl-pt__vlabel{ position:absolute; transform:translate(-50%,-100%); white-space:nowrap;
          font-family:var(--acl-font-num); font-size:30px; line-height:1; color:rgba(22,21,15,.65);
          text-shadow:0 0 7px var(--acl-paper),0 0 7px var(--acl-paper),0 0 7px var(--acl-paper); }
        .acl-pt__vlabel--high{ color:var(--acl-pink); font-size:38px; }
        .acl-pt__vlabel--low{ color:var(--acl-ink); }
        .acl-pt__flag{ position:absolute; transform:translate(-50%,-100%); white-space:nowrap;
          font-family:var(--acl-font-mono); font-weight:700; font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; padding:3px 8px; }
        .acl-pt__flag--high{ background:var(--acl-pink); color:var(--acl-paper); }
        .acl-pt__flag--low{ background:var(--acl-blue); color:var(--acl-ink); }

        .acl-pt__xaxis{ display:flex; margin-top:14px; flex:0 0 auto; }
        .acl-pt__xt{ flex:1; text-align:center; font-weight:900; font-size:22px; color:rgba(22,21,15,.5); }
        .acl-pt__xt--high{ color:var(--acl-pink); }
        .acl-pt__xt--low{ color:var(--acl-ink); }

        .acl-pt__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pt__col{ animation:acl-pt-grow .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .035s); }
        }
        @keyframes acl-pt-grow{ from{ opacity:0; transform:translate(-50%,16px); } to{ opacity:1; transform:translateX(-50%); } }
      `}),et("div",{className:"acl-pt__head",children:[et("div",{children:[re("div",{className:"acl-pt__eyebrow",children:C}),re("h1",{className:"acl-pt__h",children:P})]}),re("div",{className:"acl-pt__sub",children:I}),re("div",{className:"acl-pt__summary",dangerouslySetInnerHTML:{__html:A}})]}),et("div",{className:"acl-pt__panel",children:[et("div",{className:"acl-pt__legend",children:[u>0&&et("div",{className:"acl-pt__lg",children:[re("span",{className:"acl-pt__sw",style:{background:"var(--acl-pink)"}}),z]}),_>0&&et("div",{className:"acl-pt__lg",children:[re("span",{className:"acl-pt__sw",style:{background:"var(--acl-blue)"}}),L]}),et("div",{className:"acl-pt__lg",children:[re("span",{className:"acl-pt__sw",style:{background:"rgba(22,21,15,.16)"}}),y]}),et("span",{className:"acl-pt__unit",children:["單位 \xB7 ",M]}),h&&re("div",{className:"acl-pt__lgnote",children:w})]}),et("div",{className:"acl-pt__plot",children:[[.25,.5,.75,1].map((U,K)=>re("div",{className:"acl-pt__grid",style:{top:`${(1-U)*100}%`}},K)),x&&et(cr.Fragment,{children:[re("div",{className:"acl-pt__base",style:{top:`${V(e)}%`}}),et("div",{className:"acl-pt__baselbl",style:{top:`${V(e)}%`},children:["均值 ",e.toFixed(0)]})]}),n.map((U,K)=>{let sa=R(K),dt=U.v/a*100,_l=k==="lollipop";return et("div",{className:"acl-pt__col",style:{left:`${S(K)/E*100}%`,width:`${O/E*100}%`,"--i":K},children:[g&&re("div",{className:"acl-pt__vlabel"+(sa!=="base"?" acl-pt__vlabel--"+sa:""),style:{position:"absolute",left:"50%",bottom:`calc(${dt}% + ${_l?26:8}px)`},children:U.v}),h&&sa==="high"&&re("div",{className:"acl-pt__flag acl-pt__flag--high",style:{position:"absolute",left:"50%",bottom:`calc(${dt}% + ${g?56:8}px)`},children:D}),h&&sa==="low"&&re("div",{className:"acl-pt__flag acl-pt__flag--low",style:{position:"absolute",left:"50%",bottom:`calc(${dt}% + ${g?44:8}px)`},children:q}),_l?et(cr.Fragment,{children:[re("div",{className:"acl-pt__stem",style:{height:`calc(${dt}% - 14px)`}}),re("div",{className:"acl-pt__dot"+(sa!=="base"?" acl-pt__dot--"+sa:"")})]}):re("div",{className:"acl-pt__bar"+(sa!=="base"?" acl-pt__bar--"+sa:""),style:{height:`${dt}%`}})]},K)})]}),re("div",{className:"acl-pt__xaxis",children:n.map((U,K)=>{let sa=R(K);return re("div",{className:"acl-pt__xt"+(sa!=="base"?" acl-pt__xt--"+sa:""),children:U.label},K)})})]}),et("div",{className:"acl-pt__foot",children:[h&&re(p,{kind:"arrowS",size:50,style:{position:"static"}}),re("span",{children:N}),h&&re(H,{label:v,sub:m,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-3,style:{marginLeft:"auto"}})]})]})}Bl.defaults={backgroundTheme:"primary",chartType:"column",barCount:12,highlightHighCount:2,highlightLowCount:2,showBaseline:!0,showValueLabels:!0,showDecor:!0,eyebrow:"Peak & Trough",headline:"峰值與低位",subheadline:"月度峰谷對比",summary:"8 月為全年峰值\uFF0C1 月為低位\uFF0C<b>峰谷差體現交易集中度</b>\u3002",unit:"億美元",series:[{label:"1月",v:45},{label:"2月",v:58},{label:"3月",v:59},{label:"4月",v:86},{label:"5月",v:105},{label:"6月",v:93},{label:"7月",v:92},{label:"8月",v:118},{label:"9月",v:108},{label:"10月",v:73},{label:"11月",v:81},{label:"12月",v:52}],peakNote:"高點",troughNote:"低點",closingLine:"月度波動背後\uFF0C是頭部交易的釋放節奏\u3002",legendHigh:"峰值 \xB7 Peak",legendLow:"低位 \xB7 Trough",legendBase:"常態",insightCaption:"峰谷差 = 交易集中度",footerStickerLabel:"MONTHLY",footerStickerSub:"峰谷"};Bl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"column",options:["column","lollipop"],label:"圖表型別",desc:"序列呈現\uFF1A柱狀 / 棒棒糖\uFF08細莖圓點\uFF09"},{key:"barCount",type:"number",default:12,min:4,max:12,step:1,label:"資料點數",desc:"展示的序列點數量(4\u201312)"},{key:"highlightHighCount",type:"number",default:2,min:0,max:4,step:1,label:"高點標註",desc:"強調為峰值的最高 N 個點(0\u20134)"},{key:"highlightLowCount",type:"number",default:2,min:0,max:4,step:1,label:"低點標註",desc:"強調為低位的最低 N 個點(0\u20134)"},{key:"showBaseline",type:"boolean",default:!0,label:"均值基線",desc:"橫跨圖表的平均值參考線 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各資料點上的數值 顯隱"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪批註\u3001貼紙與極值旗標 顯隱"}];var Zc=Bl.defaults,Jc=Bl.controls;var qi={};Y(qi,{controls:()=>ts,default:()=>Vl,defaults:()=>es});import as from"react";import{jsx as Ne,jsxs as it}from"react/jsx-runtime";function Vl(t){let l={...Vl.defaults,...t},{backgroundTheme:c,stepCount:k,showTotal:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showConnectors:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,unit:M,steps:F,totalLabel:D,closingLine:q,totalColumnLabel:N,totalColumnLabelEn:z,footerStickerLabel:L,footerStickerSub:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=j(F).slice(0,Math.max(2,$(k,2))),m=v.reduce((r,b)=>r+$(b?.v),0),f=(()=>{let r=m*1.04;if(!Number.isFinite(r)||r<=0)return 1;let b=Math.pow(10,Math.floor(Math.log10(r))-1);return Math.ceil(r/b)*b})(),n=0,s=v.map((r,b)=>{let R=$(r?.v),E=n;return n+=R,{...r,v:R,base:E,top:n,i:b,share:G(R,m,0)}}),i=["var(--acl-pink)","var(--acl-blue)","var(--acl-yellow)","#70E7D2","#B9A8E8"],a=r=>(1-$(r)/Pa(f,1))*100,o=100/(s.length+(d?1:0));return it("div",{className:"acl-root acl-wf",style:{background:w},children:[Ne("style",{children:`
        .acl-wf{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-wf__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-wf__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-wf__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-wf__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-wf__summary{ margin-left:auto; max-width:560px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-wf__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-wf__panel{ flex:1; min-height:0; margin-top:30px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:9px 11px 0 rgba(22,21,15,.16);
          padding:34px 56px 18px; display:flex; flex-direction:column; }
        .acl-wf__plot{ position:relative; flex:1; }
        .acl-wf__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.14); }
        .acl-wf__gv{ position:absolute; right:calc(100% + 10px); transform:translateY(-50%);
          font-family:var(--acl-font-mono); font-size:13px; color:rgba(22,21,15,.4); white-space:nowrap; }

        .acl-wf__col{ position:absolute; bottom:0; height:100%; display:flex; justify-content:center; }
        .acl-wf__block{ position:absolute; width:62%; left:19%; border:3px solid var(--acl-ink);
          box-shadow:5px 5px 0 rgba(22,21,15,.16); transition:top .45s, height .45s; }
        .acl-wf__block--dim{ opacity:.34; filter:saturate(.6); }
        .acl-wf__block--total{ background:var(--acl-ink); box-shadow:6px 7px 0 rgba(22,21,15,.24); }
        .acl-wf__conn{ position:absolute; height:0; border-top:2.5px dashed rgba(22,21,15,.5); z-index:1; }
        .acl-wf__vlabel{ position:absolute; left:50%; transform:translate(-50%,-100%); white-space:nowrap;
          font-family:var(--acl-font-num); font-size:34px; line-height:1; color:var(--acl-ink); }
        .acl-wf__share{ position:absolute; left:50%; transform:translateX(-50%);
          font-family:var(--acl-font-mono); font-weight:700; font-size:14px; color:var(--acl-paper);
          background:var(--acl-ink); padding:2px 7px; white-space:nowrap; }
        .acl-wf__totnum{ position:absolute; left:50%; transform:translate(-50%,-100%); white-space:nowrap;
          font-family:var(--acl-font-num); font-size:46px; line-height:.9; color:var(--acl-ink); text-align:center; }
        .acl-wf__totnum em{ display:block; font-family:var(--acl-font-mono); font-style:normal;
          font-weight:700; font-size:14px; letter-spacing:.06em; color:rgba(22,21,15,.55); }

        .acl-wf__xaxis{ display:flex; margin-top:14px; flex:0 0 auto; }
        .acl-wf__xt{ text-align:center; padding:0 6px; }
        .acl-wf__xt b{ display:block; font-weight:900; font-size:22px; line-height:1.1; }
        .acl-wf__xt span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.03em;
          color:rgba(22,21,15,.5); }
        .acl-wf__xt--total b{ color:var(--acl-ink); }
        .acl-wf__xt--focus b{ color:var(--acl-pink); }

        .acl-wf__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-wf__block{ animation:acl-wf-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s); }
        }
        @keyframes acl-wf-pop{ from{ opacity:0; transform:translateY(14px) scale(.96); } to{ opacity:1; transform:none; } }
      `}),it("div",{className:"acl-wf__head",children:[it("div",{children:[Ne("div",{className:"acl-wf__eyebrow",children:C}),Ne("h1",{className:"acl-wf__h",children:P})]}),Ne("div",{className:"acl-wf__sub",children:I}),Ne("div",{className:"acl-wf__summary",dangerouslySetInnerHTML:{__html:A}})]}),it("div",{className:"acl-wf__panel",children:[it("div",{className:"acl-wf__plot",children:[[0,.25,.5,.75,1].map((r,b)=>it(as.Fragment,{children:[Ne("div",{className:"acl-wf__grid",style:{top:`${(1-r)*100}%`}}),Ne("div",{className:"acl-wf__gv",style:{top:`${(1-r)*100}%`},children:Math.round(f*r)})]},b)),g&&s.map((r,b)=>{if(b===s.length-1&&!d)return null;let R=(b+.5)*o+o*.31,E=(b+1)*o+o*.19;return Ne("div",{className:"acl-wf__conn",style:{top:`${a(r.top)}%`,left:`${R}%`,width:`${E-R}%`}},b)}),s.map(r=>{let b=u&&r.i!==_,R=i[r.i%i.length],E=a(r.top),T=a(r.base);return it("div",{className:"acl-wf__col",style:{left:`${r.i*o}%`,width:`${o}%`,"--i":r.i},children:[x&&Ne("div",{className:"acl-wf__vlabel",style:{top:`${E}%`,marginTop:-8},children:r.v}),Ne("div",{className:"acl-wf__block"+(b?" acl-wf__block--dim":""),style:{background:R,top:`${E}%`,height:`${T-E}%`},children:it("div",{className:"acl-wf__share",style:{top:"50%",transform:"translate(-50%,-50%)"},children:[(r.share*100).toFixed(0),"%"]})})]},r.i)}),d&&it("div",{className:"acl-wf__col",style:{left:`${s.length*o}%`,width:`${o}%`,"--i":s.length},children:[it("div",{className:"acl-wf__totnum",style:{top:`${a(m)}%`,marginTop:-10},children:[m,Ne("em",{children:D})]}),Ne("div",{className:"acl-wf__block acl-wf__block--total",style:{top:`${a(m)}%`,height:`${100-a(m)}%`}})]})]}),it("div",{className:"acl-wf__xaxis",children:[s.map(r=>it("div",{className:"acl-wf__xt"+(u&&r.i===_?" acl-wf__xt--focus":""),style:{width:`${o}%`},children:[Ne("b",{children:r.label}),Ne("span",{children:r.en})]},r.i)),d&&it("div",{className:"acl-wf__xt acl-wf__xt--total",style:{width:`${o}%`},children:[Ne("b",{children:N}),Ne("span",{children:z})]})]})]}),it("div",{className:"acl-wf__foot",children:[h&&Ne(p,{kind:"loop",size:54,style:{position:"static"}}),Ne("span",{children:q}),h&&Ne(H,{label:L,sub:y,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-3,style:{marginLeft:"auto"}})]})]})}Vl.defaults={backgroundTheme:"primary",stepCount:5,showTotal:!0,focusEnabled:!0,focusIndex:0,showValueLabels:!0,showConnectors:!0,showDecor:!0,eyebrow:"Funding Waterfall",headline:"賽道貢獻拆分",subheadline:"融資額貢獻瀑布",summary:"全年 970 億美元\uFF0C由模型\u3001應用\u3001基礎設施\u3001晶片與其他<b>共同構成</b>\u3002",unit:"億美元",steps:[{label:"通用大模型",en:"Foundation",v:420},{label:"垂直應用",en:"Vertical",v:245},{label:"基礎設施",en:"Infra",v:158},{label:"AI 晶片",en:"Chips",v:97},{label:"其他",en:"Others",v:50}],totalLabel:"億美元 \xB7 全年",totalColumnLabel:"合計",totalColumnLabelEn:"TOTAL",footerStickerLabel:"WATERFALL",footerStickerSub:"貢獻",closingLine:"大模型製造熱度\uFF0C基礎設施與應用承接兌現\u3002"};Vl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"stepCount",type:"number",default:5,min:2,max:5,step:1,label:"分段數量",desc:"瀑布累計的貢獻分段數量(2\u20135)"},{key:"showTotal",type:"boolean",default:!0,label:"合計列",desc:"末尾累計合計柱 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一分段(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:4,step:1,maxFrom:"stepCount",label:"重點物件",desc:"被強調的分段序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各分段頂部數值 顯隱"},{key:"showConnectors",type:"boolean",default:!0,label:"連線線",desc:"分段之間的虛線連線 顯隱"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪批註與貼紙標籤 顯隱"}];var es=Vl.defaults,ts=Vl.controls;var Pi={};Y(Pi,{controls:()=>os,default:()=>Hl,defaults:()=>ls});import sr from"react";import{jsx as _a,jsxs as Ma}from"react/jsx-runtime";function Hl(t){let l={...Hl.defaults,...t},{backgroundTheme:c,chartType:k,bandCount:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,countLabel:A,valueLabel:M,countUnit:F,valueUnit:D,bands:q,closingLine:N,bandColumnLabel:z,footerStickerLabel:L,footerStickerSub:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=j(q).slice(0,Math.max(2,$(d,2))),m=X(v.map(a=>$(a?.count)),1),f=X(v.map(a=>$(a?.value)),1),n=v.reduce((a,e)=>a+$(e?.count),0),s=v.reduce((a,e)=>a+$(e?.value),0);return Ma("div",{className:"acl-root acl-ds",style:{background:w},children:[_a("style",{children:`
        .acl-ds{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-ds__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-ds__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ds__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-ds__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ds__summary{ margin-left:auto; max-width:560px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ds__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ds__panel{ flex:1; min-height:0; margin-top:28px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:9px 11px 0 rgba(22,21,15,.16);
          padding:24px 56px 22px; display:flex; flex-direction:column; }
        .acl-ds__colhead{ display:flex; align-items:center; flex:0 0 auto; padding-bottom:14px;
          border-bottom:3px solid var(--acl-ink); margin-bottom:6px; }
        .acl-ds__ch{ display:flex; align-items:center; gap:9px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:18px; letter-spacing:.05em; text-transform:uppercase; white-space:nowrap; }
        .acl-ds__ch .sw{ width:18px; height:18px; border:2.5px solid var(--acl-ink); }
        .acl-ds__ch small{ font-weight:400; font-size:13px; color:rgba(22,21,15,.5); white-space:nowrap; }
        .acl-ds__ch--c{ flex:1; }
        .acl-ds__ch--mid{ width:230px; justify-content:center; color:rgba(22,21,15,.45); font-size:15px; }
        .acl-ds__ch--v{ flex:1; justify-content:flex-end; }

        .acl-ds__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-ds__row{ flex:1; display:flex; align-items:center; gap:0; min-height:0;
          border-bottom:1.5px dashed rgba(22,21,15,.14); }
        .acl-ds__row:last-child{ border-bottom:none; }

        /* mirror layout */
        .acl-ds__side{ flex:1; min-width:0; display:flex; align-items:center; height:100%; }
        .acl-ds__side--c{ justify-content:flex-end; }
        .acl-ds__bar{ height:46%; border:3px solid var(--acl-ink); position:relative;
          transition:width .45s cubic-bezier(.2,.8,.2,1); }
        .acl-ds__bar--c{ background:var(--acl-blue); }
        .acl-ds__bar--v{ background:var(--acl-pink); }
        .acl-ds__bar--dim{ opacity:.32; filter:saturate(.55); }
        .acl-ds__bar--focus{ height:62%; box-shadow:4px 4px 0 rgba(22,21,15,.22); }
        .acl-ds__bval{ position:absolute; top:50%; transform:translateY(-50%);
          font-family:var(--acl-font-num); font-size:34px; line-height:1; white-space:nowrap; }
        .acl-ds__bval em{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700;
          font-size:15px; margin-left:3px; color:rgba(22,21,15,.6); }
        .acl-ds__bval--c{ right:calc(100% + 12px); }
        .acl-ds__bval--v{ left:calc(100% + 12px); }
        .acl-ds__mid{ width:230px; flex:0 0 230px; text-align:center; padding:0 8px; }
        .acl-ds__mid b{ display:block; font-weight:900; font-size:30px; line-height:1.05; }
        .acl-ds__mid span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); }
        .acl-ds__mid--focus b{ color:var(--acl-pink); }

        /* grouped layout */
        .acl-ds__grp{ flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;
          justify-content:center; height:100%; padding-right:30px; }
        .acl-ds__gbar{ height:24px; border:3px solid var(--acl-ink); position:relative;
          transition:width .45s; display:flex; align-items:center; }
        .acl-ds__glabel{ width:230px; flex:0 0 230px; text-align:left; padding-left:8px; }
        .acl-ds__glabel b{ display:block; font-weight:900; font-size:28px; line-height:1.05; }
        .acl-ds__glabel span{ font-family:var(--acl-font-mono); font-size:13px; color:rgba(22,21,15,.5); }
        .acl-ds__gv{ position:absolute; left:calc(100% + 10px); font-family:var(--acl-font-num);
          font-size:26px; white-space:nowrap; }

        .acl-ds__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ds__row{ animation:acl-ds-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s); }
        }
        @keyframes acl-ds-in{ from{ opacity:0; transform:translateY(12px); } to{ opacity:1; transform:none; } }
      `}),Ma("div",{className:"acl-ds__head",children:[Ma("div",{children:[_a("div",{className:"acl-ds__eyebrow",children:h}),_a("h1",{className:"acl-ds__h",children:C})]}),_a("div",{className:"acl-ds__sub",children:P}),_a("div",{className:"acl-ds__summary",dangerouslySetInnerHTML:{__html:I}})]}),_a("div",{className:"acl-ds__panel",children:k==="mirror"?Ma(sr.Fragment,{children:[Ma("div",{className:"acl-ds__colhead",children:[Ma("div",{className:"acl-ds__ch acl-ds__ch--c",children:[_a("span",{className:"sw",style:{background:"var(--acl-blue)"}}),A,Ma("small",{children:[F," \xB7 共 ",n]})]}),_a("div",{className:"acl-ds__ch acl-ds__ch--mid",children:z}),Ma("div",{className:"acl-ds__ch acl-ds__ch--v",children:[M,Ma("small",{children:[D," \xB7 共 ",s]}),_a("span",{className:"sw",style:{background:"var(--acl-pink)"}})]})]}),_a("div",{className:"acl-ds__rows",children:v.map((a,e)=>{let o=u&&e===_,r=u&&!o;return Ma("div",{className:"acl-ds__row",style:{"--i":e},children:[_a("div",{className:"acl-ds__side acl-ds__side--c",children:_a("div",{className:"acl-ds__bar acl-ds__bar--c"+(r?" acl-ds__bar--dim":"")+(o?" acl-ds__bar--focus":""),style:{width:`${G($(a?.count),m)*84}%`},children:x&&Ma("div",{className:"acl-ds__bval acl-ds__bval--c",children:[$(a?.count),_a("em",{children:F})]})})}),Ma("div",{className:"acl-ds__mid"+(o?" acl-ds__mid--focus":""),children:[_a("b",{children:a.label}),_a("span",{children:a.en})]}),_a("div",{className:"acl-ds__side acl-ds__side--v",children:_a("div",{className:"acl-ds__bar acl-ds__bar--v"+(r?" acl-ds__bar--dim":"")+(o?" acl-ds__bar--focus":""),style:{width:`${G($(a?.value),f)*84}%`},children:x&&Ma("div",{className:"acl-ds__bval acl-ds__bval--v",children:[$(a?.value),_a("em",{children:D})]})})})]},e)})})]}):Ma(sr.Fragment,{children:[Ma("div",{className:"acl-ds__colhead",children:[_a("div",{className:"acl-ds__ch acl-ds__ch--c",style:{width:230,flex:"0 0 230px"},children:z}),Ma("div",{className:"acl-ds__ch",style:{gap:22},children:[Ma("span",{children:[_a("span",{className:"sw",style:{background:"var(--acl-blue)"}})," ",A]}),Ma("span",{children:[_a("span",{className:"sw",style:{background:"var(--acl-pink)"}})," ",M]})]})]}),_a("div",{className:"acl-ds__rows",children:v.map((a,e)=>{let o=u&&e===_,r=u&&!o;return Ma("div",{className:"acl-ds__row",style:{"--i":e},children:[Ma("div",{className:"acl-ds__glabel"+(o?" acl-ds__mid--focus":""),children:[_a("b",{children:a.label}),_a("span",{children:a.en})]}),Ma("div",{className:"acl-ds__grp",children:[_a("div",{className:"acl-ds__gbar acl-ds__bar--c"+(r?" acl-ds__bar--dim":""),style:{width:`${G($(a?.count),m)*92}%`},children:x&&Ma("div",{className:"acl-ds__gv",children:[$(a?.count),Ma("em",{style:{fontFamily:"var(--acl-font-mono)",fontSize:13},children:[" ",F]})]})}),_a("div",{className:"acl-ds__gbar acl-ds__bar--v"+(r?" acl-ds__bar--dim":""),style:{width:`${G($(a?.value),f)*92}%`},children:x&&Ma("div",{className:"acl-ds__gv",children:[$(a?.value),Ma("em",{style:{fontFamily:"var(--acl-font-mono)",fontSize:13},children:[" ",D]})]})})]})]},e)})})]})}),Ma("div",{className:"acl-ds__foot",children:[g&&_a(p,{kind:"arrow",size:56,rotate:6,style:{position:"static"}}),_a("span",{children:N}),g&&_a(H,{label:L,sub:y,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-3,style:{marginLeft:"auto"}})]})]})}Hl.defaults={backgroundTheme:"muted",chartType:"mirror",bandCount:4,focusEnabled:!0,focusIndex:3,showValueLabels:!0,showDecor:!0,eyebrow:"Deal Size Split",headline:"金額區間結構",subheadline:"交易規模分佈",summary:"低金額段貢獻數量\uFF0C高金額段<b>貢獻市場記憶</b>\u3002",countLabel:"交易筆數",valueLabel:"融資金額",countUnit:"筆",valueUnit:"億",bandColumnLabel:"區間 \xB7 BAND",footerStickerLabel:"SIZE SPLIT",footerStickerSub:"區間",bands:[{label:"1\u20132 億",en:"$100\u2013200M",count:41,value:58},{label:"2\u20135 億",en:"$200\u2013500M",count:29,value:91},{label:"5\u201310 億",en:"$500M\u20131B",count:15,value:103},{label:"10 億 +",en:"$1B+",count:12,value:718}],closingLine:"市場\uFF0C被少數超級交易重新定價\u3002"};Hl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"mirror",options:["mirror","grouped"],label:"圖表型別",desc:"雙維呈現\uFF1A映象對比(背向) / 成組並列"},{key:"bandCount",type:"number",default:4,min:2,max:4,step:1,label:"區間數量",desc:"有序區間(行)的數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個區間(其餘淡化)"},{key:"focusIndex",type:"number",default:3,min:0,max:3,step:1,maxFrom:"bandCount",label:"重點物件",desc:"被強調的區間序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各條形上的數值 顯隱"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪批註與貼紙標籤 顯隱"}];var ls=Hl.defaults,os=Hl.controls;var $i={};Y($i,{controls:()=>rs,default:()=>Ol,defaults:()=>ns});import is from"react";import{jsx as ze,jsxs as Lt}from"react/jsx-runtime";function Ol(t){let l={...Ol.defaults,...t},{backgroundTheme:c,mediaCount:k,metricCount:d,showDecor:u,eyebrow:_,kicker:x,headline:g,bigNumber:h,bigUnit:C,caption:P,metrics:I,collage:A,closingLine:M,anchorStickerLabel:F,anchorStickerSub:D,bigNumberCaption:q}=l,N=c==="ink",z=N?"radial-gradient(120% 120% at 76% 6%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=A[k]||[],y=I.slice(0,Math.max(2,d)),w=L.length>0;return Lt("div",{className:"acl-root acl-bn"+(N?" acl-bn--ink":""),style:{background:z},children:[ze("style",{children:`
        .acl-bn{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 72px; display:flex; flex-direction:column; }
        .acl-bn--ink{ color:var(--acl-paper); }
        .acl-bn__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; z-index:3; }
        .acl-bn__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-bn--ink .acl-bn__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-bn__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-bn__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-bn--ink .acl-bn__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-bn__body{ flex:1; display:flex; gap:48px; min-height:0; align-items:center; }
        .acl-bn__left{ flex:1 1 auto; min-width:0; position:relative; display:flex;
          flex-direction:column; justify-content:center; }
        .acl-bn__label{ font-weight:700; font-size:30px; color:rgba(22,21,15,.6);
          display:flex; align-items:center; gap:14px; }
        .acl-bn--ink .acl-bn__label{ color:rgba(251,250,244,.66); }
        .acl-bn__label i{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700;
          font-size:16px; letter-spacing:.05em; text-transform:uppercase; padding:5px 11px;
          background:var(--acl-ink); color:var(--acl-paper); }
        .acl-bn--ink .acl-bn__label i{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-bn__numwrap{ position:relative; display:flex; align-items:flex-end; gap:24px; margin:6px 0 4px; }
        .acl-bn__num{ position:relative; z-index:1; font-family:var(--acl-font-num);
          font-size:clamp(300px, 30vw, 460px); line-height:.82; letter-spacing:-.03em;
          color:var(--acl-pink); text-shadow:7px 8px 0 var(--acl-ink); }
        .acl-bn--ink .acl-bn__num{ color:var(--acl-yellow); text-shadow:7px 8px 0 rgba(0,0,0,.5); }
        .acl-bn__unit{ position:relative; z-index:1; font-family:var(--acl-font-cn); font-weight:900;
          font-size:88px; line-height:1; margin-bottom:48px; }
        .acl-bn__unit b{ display:block; font-family:var(--acl-font-mono); font-weight:700; font-size:20px;
          letter-spacing:.04em; color:rgba(22,21,15,.5); margin-top:10px; text-transform:uppercase; }
        .acl-bn--ink .acl-bn__unit b{ color:rgba(251,250,244,.5); }

        .acl-bn__cap{ position:relative; z-index:1; font-weight:700; font-size:28px; line-height:1.42;
          max-width:760px; margin-top:14px; }
        .acl-bn__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-bn--ink .acl-bn__cap b{ background:var(--acl-pink); color:var(--acl-paper); }

        .acl-bn__tiles{ position:relative; z-index:1; display:flex; gap:18px; margin-top:34px; }
        .acl-bn__tile{ flex:1 1 0; min-width:0; border-top:5px solid var(--acl-ink); padding-top:13px; }
        .acl-bn--ink .acl-bn__tile{ border-color:var(--acl-yellow); }
        .acl-bn__tk{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-bn--ink .acl-bn__tk{ color:rgba(251,250,244,.55); }
        .acl-bn__tv{ font-family:var(--acl-font-num); font-size:62px; line-height:.96; margin-top:3px; }
        .acl-bn--ink .acl-bn__tv{ color:var(--acl-yellow); }
        .acl-bn__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:20px;
          margin-left:5px; color:rgba(22,21,15,.55); }
        .acl-bn--ink .acl-bn__tv em{ color:rgba(251,250,244,.55); }

        .acl-bn__stage{ flex:0 0 560px; position:relative; height:100%; }
        .acl-bn__slot{ position:absolute; }

        .acl-bn__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; flex:0 0 auto; z-index:3; }
        .acl-bn--ink .acl-bn__foot{ color:var(--acl-paper); }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-bn__num{ animation:acl-bn-pop .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-bn__tile{ animation:acl-bn-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .2s); }
        }
        @keyframes acl-bn-pop{ from{ opacity:0; transform:translateY(22px) scale(.94); } to{ opacity:1; transform:none; } }
        @keyframes acl-bn-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; transform:none; } }
      `}),Lt("div",{className:"acl-bn__top",children:[ze("div",{className:"acl-bn__eyebrow",children:_}),ze("div",{className:"acl-bn__rule"}),ze("div",{className:"acl-bn__kicker",children:x})]}),Lt("div",{className:"acl-bn__body",children:[Lt("div",{className:"acl-bn__left",children:[Lt("div",{className:"acl-bn__label",children:[g,ze("i",{children:l.subheadline}),u&&ze(H,{label:F,sub:D,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-3,size:14})]}),Lt("div",{className:"acl-bn__numwrap",children:[ze("div",{className:"acl-bn__num",children:h}),Lt("div",{className:"acl-bn__unit",children:[C,ze("b",{children:q})]}),u&&ze(p,{kind:"arrow",size:104,rotate:188,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:w?-40:120,top:-34,zIndex:2}})]}),ze("div",{className:"acl-bn__cap",dangerouslySetInnerHTML:{__html:P}}),ze("div",{className:"acl-bn__tiles",children:y.map((v,m)=>Lt("div",{className:"acl-bn__tile",style:{"--i":m},children:[ze("div",{className:"acl-bn__tk",children:v.k}),Lt("div",{className:"acl-bn__tv",children:[v.v,ze("em",{children:v.unit})]})]},m))})]}),w&&Lt("div",{className:"acl-bn__stage",children:[L.map((v,m)=>ze("div",{className:"acl-bn__slot",style:{left:v.l,top:v.t},children:ze(W,{id:"bignum-"+m,box:v.box,rotate:v.r,ratio:v.ratio,accent:v.accent,placeholder:"上傳",sticker:v.st})},m)),u&&Lt(is.Fragment,{children:[ze(p,{kind:"spark",size:56,rotate:-10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{left:-24,top:30}}),ze(p,{kind:"heart",size:42,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:6,bottom:40}})]})]})]}),Lt("div",{className:"acl-bn__foot",children:[u&&ze(p,{kind:"loop",size:56,fill:N?"var(--acl-yellow)":void 0,color:N?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}}),ze("span",{children:M})]})]})}Ol.defaults={images:[],backgroundTheme:"primary",mediaCount:2,metricCount:3,showDecor:!0,eyebrow:"Average Ticket \xB7 平均單筆",kicker:"大數字",headline:"全年平均單筆融資規模",subheadline:"Avg / Deal",bigNumber:"10",bigUnit:"億美元",anchorStickerLabel:"ANCHOR",anchorStickerSub:"記住這個數",bigNumberCaption:"Big Number",caption:"把 970 億美元攤到 97 筆大額交易上\uFF0C<b>平均每筆約 10 億美元</b>\u2014\u2014規模越大\uFF0C後續兌現壓力越高\u3002",metrics:[{k:"全年融資",v:"970",unit:"億"},{k:"大額事件",v:"97",unit:"筆"},{k:"最大單筆",v:"66",unit:"億"}],collage:{0:[],1:[{l:60,t:70,box:420,r:-3,ratio:.84,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.01",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",sub:"現場",rotate:-4}}],2:[{l:40,t:30,box:320,r:-4,ratio:.82,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.01",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",sub:"現場",rotate:-4}},{l:260,t:330,box:280,r:5,ratio:1.2,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.02",color:"var(--acl-blue)",rotate:4}}],3:[{l:30,t:0,box:280,r:-4,ratio:.82,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.01",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",sub:"現場",rotate:-4}},{l:290,t:220,box:250,r:5,ratio:1.18,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.02",color:"var(--acl-blue)",rotate:4}},{l:60,t:430,box:220,r:3,ratio:.9,accent:"var(--acl-paper)",ph:"配圖",st:{label:"FIG.03",color:"var(--acl-pink)",rotate:-3}}]},closingLine:"一個數字\uFF0C先把整頁釘在觀眾腦子裡\u3002"};Ol.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差大數字)"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"配圖槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主數字下方支撐指標格數量(2\u20133)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與貼紙標籤 顯隱"}];var ns=Ol.defaults,rs=Ol.controls;var Bi={};Y(Bi,{controls:()=>ss,default:()=>Yl,defaults:()=>cs});import pr from"react";import{jsx as ce,jsxs as Ye}from"react/jsx-runtime";function Yl(t){let l={...Yl.defaults,...t},{backgroundTheme:c,chartType:k,nodeCount:d,showBaseline:u,showValueLabels:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,nodes:M,axisXLabel:F,axisYLabel:D,valueUnit:q,focusNote:N,closingLine:z,baselineLegendLabel:L}=l,y=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",w=j(M).slice(0,Math.max(2,$(d,2))),v=w.length,m=1480,f=470,n=100,s=T=>(T+1)/Pa(v,1)*m,i=T=>f-$(T)/n*f,a=w.map((T,B)=>({x:s(B),y:i(T?.v),d:T||{}})),e=`M0 ${f.toFixed(1)} `;if(k==="step"){let T=f;a.forEach(B=>{e+=`L${B.x.toFixed(1)} ${T.toFixed(1)} L${B.x.toFixed(1)} ${B.y.toFixed(1)} `,T=B.y})}else a.forEach(T=>{e+=`L${T.x.toFixed(1)} ${T.y.toFixed(1)} `});let o=a[v-1]||{x:0},r=`${e} L${o.x.toFixed(1)} ${f} L0 ${f} Z`,b=o.x,R=[.25,.5,.75,1],E=Q(g,0,Math.max(0,v-1));return Ye("div",{className:"acl-root acl-cc",style:{background:y},children:[ce("style",{children:`
        .acl-cc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-cc__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-cc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-cc__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-cc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-cc__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-cc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-cc__panel{ position:relative; flex:1; margin-top:34px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 56px 26px 70px; display:flex; flex-direction:column; }
        .acl-cc__legend{ display:flex; gap:26px; align-items:center; font-family:var(--acl-font-mono);
          font-size:17px; font-weight:700; }
        .acl-cc__legend span{ display:flex; align-items:center; gap:9px; white-space:nowrap; }
        .acl-cc__legend i{ width:22px; height:12px; background:var(--acl-pink); }
        .acl-cc__legend .ln{ width:26px; height:0; border-top:3px dashed rgba(22,21,15,.45); }
        .acl-cc__yaxis{ position:absolute; left:18px; top:50%; transform:rotate(-90deg) translateX(50%);
          transform-origin:left center; font-family:var(--acl-font-mono); font-size:15px; font-weight:700;
          letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.5); white-space:nowrap; }
        .acl-cc__plot{ position:relative; flex:1; margin-top:14px; min-height:0; }
        .acl-cc__grid{ position:absolute; left:0; right:0; height:0; border-top:1.5px dashed rgba(22,21,15,.16); }
        .acl-cc__gridv{ position:absolute; left:-46px; transform:translateY(-50%);
          font-family:var(--acl-font-mono); font-size:14px; color:rgba(22,21,15,.42); }
        .acl-cc__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-cc__node{ position:absolute; width:17px; height:17px; border-radius:50%;
          background:var(--acl-ink); border:3px solid var(--acl-paper); transform:translate(-50%,-50%);
          box-shadow:0 0 0 2px var(--acl-ink); z-index:3; transition:.25s; }
        .acl-cc__node--focus{ width:26px; height:26px; background:var(--acl-pink); box-shadow:0 0 0 3px var(--acl-ink); z-index:5; }
        .acl-cc__vlabel{ position:absolute; transform:translate(-50%,-100%); z-index:4;
          font-family:var(--acl-font-num); font-size:30px; line-height:1; color:var(--acl-ink);
          white-space:nowrap; text-shadow:0 0 7px var(--acl-paper),0 0 7px var(--acl-paper),0 0 7px var(--acl-paper); }
        .acl-cc__vlabel em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700;
          font-size:16px; margin-left:2px; color:rgba(22,21,15,.55); }
        .acl-cc__vlabel--focus{ color:var(--acl-pink); }
        .acl-cc__flag{ position:absolute; transform:translate(-50%,-100%); z-index:6; }
        .acl-cc__xaxis{ display:flex; margin-top:12px; padding-bottom:2px; }
        .acl-cc__xtick{ position:absolute; transform:translateX(-50%); text-align:center; }
        .acl-cc__xtick b{ display:block; font-weight:900; font-size:26px; line-height:1; }
        .acl-cc__xtick span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-cc__xtick--focus b{ color:var(--acl-pink); }
        .acl-cc__xwrap{ position:relative; height:62px; margin-top:8px; }
        .acl-cc__xname{ position:absolute; right:0; bottom:-2px; font-family:var(--acl-font-mono);
          font-size:15px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-cc__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cc__draw{ stroke-dasharray:3600; stroke-dashoffset:3600;
            animation:acl-cc-draw 1.1s cubic-bezier(.3,.7,.3,1) .15s forwards; }
          [data-deck-active] .acl-cc__fill{ opacity:0; animation:acl-cc-fade .7s ease .7s forwards; }
          [data-deck-active] .acl-cc__node{ opacity:0; animation:acl-cc-pop .4s cubic-bezier(.2,.9,.3,1.3) both;
            animation-delay:calc(var(--i,0) * .12s + .55s); }
        }
        @keyframes acl-cc-draw{ to{ stroke-dashoffset:0; } }
        @keyframes acl-cc-fade{ to{ opacity:1; } }
        @keyframes acl-cc-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.4); } to{ opacity:1; } }
      `}),Ye("div",{className:"acl-cc__head",children:[Ye("div",{children:[ce("div",{className:"acl-cc__eyebrow",children:C}),ce("h1",{className:"acl-cc__h",children:P})]}),ce("div",{className:"acl-cc__sub",children:I}),ce("div",{className:"acl-cc__summary",dangerouslySetInnerHTML:{__html:A}})]}),Ye("div",{className:"acl-cc__panel",children:[Ye("div",{className:"acl-cc__legend",children:[Ye("span",{children:[ce("i",{}),"累計資金佔比 \xB7 ",q]}),u&&Ye("span",{children:[ce("i",{className:"ln"}),L]}),h&&ce(p,{kind:"spark",size:38,rotate:8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto"}})]}),ce("div",{className:"acl-cc__yaxis",children:D}),Ye("div",{className:"acl-cc__plot",children:[R.map((T,B)=>Ye(pr.Fragment,{children:[ce("div",{className:"acl-cc__grid",style:{top:`${(1-T)*100}%`}}),ce("div",{className:"acl-cc__gridv",style:{top:`${(1-T)*100}%`},children:Math.round(n*T)})]},B)),Ye("svg",{className:"acl-cc__svg",viewBox:`0 0 ${m} ${f}`,preserveAspectRatio:"none",children:[u&&ce("path",{d:`M0 ${f} L${m} 0`,fill:"none",stroke:"rgba(22,21,15,.4)",strokeWidth:"2.5",strokeDasharray:"6 8",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),k==="area"&&ce("path",{className:"acl-cc__fill",d:r,fill:"var(--acl-pink)",fillOpacity:"0.7",stroke:"none"}),ce("path",{className:"acl-cc__draw",d:e,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"5",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),a.map((T,B)=>{let S=x&&B===E;return Ye(pr.Fragment,{children:[ce("div",{className:"acl-cc__node"+(S?" acl-cc__node--focus":""),style:{"--i":B,left:`${T.x/m*100}%`,top:`${T.y/f*100}%`}}),_&&Ye("div",{className:"acl-cc__vlabel"+(S?" acl-cc__vlabel--focus":""),style:{left:`${T.x/m*100}%`,top:`calc(${T.y/f*100}% - 18px)`},children:[$(T.d.v),ce("em",{children:"%"})]}),h&&S&&ce("div",{className:"acl-cc__flag",style:{left:`${T.x/m*100}%`,top:`calc(${T.y/f*100}% - 62px)`},children:ce(H,{label:N,color:"var(--acl-yellow)",rotate:-5})})]},B)})]}),Ye("div",{className:"acl-cc__xwrap",children:[a.map((T,B)=>Ye("div",{className:"acl-cc__xtick"+(x&&B===E?" acl-cc__xtick--focus":""),style:{left:`calc(${T.x/m*100}% )`},children:[ce("b",{children:T.d.label}),ce("span",{children:T.d.sub})]},B)),Ye("div",{className:"acl-cc__xname",children:[F," \u2192"]})]})]}),Ye("div",{className:"acl-cc__foot",children:[h&&ce(p,{kind:"loop",size:56,style:{position:"static"}}),ce("span",{children:z})]})]})}Yl.defaults={backgroundTheme:"primary",chartType:"area",nodeCount:4,showBaseline:!0,showValueLabels:!0,focusEnabled:!0,focusIndex:3,showDecor:!0,eyebrow:"Capital Curve",headline:"累計資金分佈",subheadline:"資本集中曲線",summary:"資金高度向頭部集中\u2014\u2014<b>少數公司吸走大部分融資</b>\u3002",nodes:[{label:"Top 3",sub:"頭部",x:.031,v:18.7},{label:"Top 10",sub:"前十",x:.103,v:23.8},{label:"Top 25",sub:"前廿五",x:.258,v:48.5},{label:"Top 50",sub:"過半",x:.515,v:71.2},{label:"全部",sub:"97 筆",x:1,v:100}],axisXLabel:"公司數量\uFF08由多到少\uFF09",axisYLabel:"累計資金佔比 %",valueUnit:"%",focusNote:"過半公司 \u2248 七成資金",closingLine:"集中度本身就是市場結構\u3002",baselineLegendLabel:"均勻分佈參考線"};Yl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"area",options:["area","line","step"],label:"圖表型別",desc:"累計曲線的呈現\uFF1A面積 / 折線 / 階梯"},{key:"nodeCount",type:"number",default:4,min:2,max:5,step:1,label:"節點數量",desc:"累計曲線上的階段節點數量(2\u20135)"},{key:"showBaseline",type:"boolean",default:!0,label:"參考基線",desc:"均勻分佈(對角)參考線的顯示/隱藏"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"在各節點上顯示數值"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個階段節點"},{key:"focusIndex",type:"number",default:3,min:0,max:4,step:1,maxFrom:"nodeCount",label:"重點物件",desc:"被高亮的節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var cs=Yl.defaults,ss=Yl.controls;var Vi={};Y(Vi,{controls:()=>ds,default:()=>jl,defaults:()=>ps});import"react";import{jsx as nt,jsxs as Yo}from"react/jsx-runtime";function jl(t){let l={...jl.defaults,...t},{backgroundTheme:c,showIndex:k,keywordCount:d,showDecor:u,eyebrow:_,indexLabel:x,headline:g,subheadline:h,keywords:C,closingLine:P,chapterStickerLabel:I}=l,A=c==="ink",M=A?"radial-gradient(130% 130% at 82% 18%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",F=C.slice(0,Math.max(0,d)),D=A?"var(--acl-yellow)":"var(--acl-ink)",q=A?"var(--acl-ink)":"var(--acl-paper)",N=String(x??""),z=[...N].reduce((y,w)=>y+(/[^\u0020-\u04FF]/.test(w)?.96:.46),0),L=N.length>2?Math.min(560,Math.round(420/Math.max(z,.46))):560;return Yo("div",{className:"acl-root acl-cx"+(A?" acl-cx--ink":""),style:{background:M},children:[nt("style",{children:`
        .acl-cx{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); display:flex; }
        .acl-cx--ink{ color:var(--acl-paper); }

        /* \u2500\u2500 left color panel with giant vertical index \u2500\u2500 */
        .acl-cx__rail{ flex:0 0 ${k?"430px":"120px"}; position:relative; overflow:hidden;
          background:${D}; color:${q}; display:flex; flex-direction:column;
          justify-content:space-between; padding:74px 0 60px; transition:flex-basis .3s; }
        .acl-cx__railtop{ writing-mode:vertical-rl; transform:rotate(180deg); margin:0 auto;
          font-family:var(--acl-font-mono); font-weight:700; font-size:24px; letter-spacing:.34em;
          text-transform:uppercase; }
        .acl-cx__index{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          font-family:var(--acl-font-num); font-size:${L}px; line-height:.7; letter-spacing:-.04em;
          opacity:${A?"1":".96"}; }
        .acl-cx__railfoot{ position:relative; z-index:2; margin:0 auto; }

        /* \u2500\u2500 main area \u2500\u2500 */
        .acl-cx__main{ flex:1; position:relative; padding:92px 110px 84px 90px; display:flex;
          flex-direction:column; justify-content:center; min-width:0; }
        .acl-cx__eyebrow{ display:inline-flex; align-self:flex-start; align-items:center; gap:14px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:26px; letter-spacing:.18em;
          text-transform:uppercase; color:var(--acl-ink); background:var(--acl-yellow);
          padding:9px 18px; transform:rotate(-1.4deg); box-shadow:3px 4px 0 rgba(22,21,15,.2); }
        .acl-cx__h{ font-weight:900; font-size:128px; line-height:.92; margin:24px 0 0;
          letter-spacing:-.012em; }
        .acl-cx__sub{ font-family:var(--acl-font-hand); font-size:48px; margin-top:16px; }
        .acl-cx--ink .acl-cx__sub{ color:var(--acl-paper); }

        .acl-cx__list{ display:flex; flex-direction:column; margin-top:48px; max-width:1020px;
          border-top:2px solid rgba(22,21,15,.18); }
        .acl-cx--ink .acl-cx__list{ border-top-color:rgba(251,250,244,.22); }
        .acl-cx__item{ display:flex; align-items:center; gap:24px; padding:15px 4px;
          border-bottom:2px solid rgba(22,21,15,.18); }
        .acl-cx--ink .acl-cx__item{ border-bottom-color:rgba(251,250,244,.22); }
        .acl-cx__no{ font-family:var(--acl-font-num); font-size:40px; line-height:.8; flex:0 0 70px;
          color:var(--acl-ink); opacity:.32; }
        .acl-cx--ink .acl-cx__no{ color:var(--acl-yellow); opacity:.9; }
        .acl-cx__kw{ font-weight:900; font-size:38px; letter-spacing:-.01em; }
        .acl-cx__dot{ margin-left:auto; width:16px; height:16px; flex:0 0 auto; }
        .acl-cx__item:first-child .acl-cx__no{ opacity:1; color:var(--acl-pink); }
        .acl-cx__item:first-child .acl-cx__kw{ position:relative; }

        .acl-cx__foot{ position:absolute; left:90px; bottom:50px; display:flex; align-items:center;
          gap:14px; font-family:var(--acl-font-hand); font-size:30px; }
        .acl-cx--ink .acl-cx__foot{ color:var(--acl-paper); }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cx__index{ animation:acl-cx-pop .65s cubic-bezier(.2,.9,.3,1.15) both; }
          [data-deck-active] .acl-cx__h{ animation:acl-cx-in .55s cubic-bezier(.2,.8,.2,1) both; animation-delay:.1s; }
          [data-deck-active] .acl-cx__item{ animation:acl-cx-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .32s); }
        }
        @keyframes acl-cx-pop{ from{ opacity:0; transform:translate(-50%,-46%) scale(.9); } to{ opacity:.96; } }
        @keyframes acl-cx-in{ from{ opacity:0; transform:translateY(22px); } to{ opacity:1; transform:none; } }
      `}),Yo("div",{className:"acl-cx__rail",children:[nt("div",{className:"acl-cx__railtop",children:_}),k&&nt("div",{className:"acl-cx__index","aria-hidden":"true",children:x}),nt("div",{className:"acl-cx__railfoot",children:u&&nt(p,{kind:"spark",size:40,fill:A?"var(--acl-ink)":"var(--acl-yellow)",stroke:A?"none":"var(--acl-ink)",style:{position:"static"}})})]}),Yo("div",{className:"acl-cx__main",children:[Yo("div",{className:"acl-cx__eyebrow",children:[_,u&&nt(p,{kind:"spark",size:26,fill:"var(--acl-ink)",style:{position:"static"}})]}),nt("h1",{className:"acl-cx__h",children:g}),nt("div",{className:"acl-cx__sub",children:h}),F.length>0&&nt("div",{className:"acl-cx__list",children:F.map((y,w)=>Yo("div",{className:"acl-cx__item",style:{"--i":w},children:[nt("span",{className:"acl-cx__no",children:String(w+1).padStart(2,"0")}),nt("span",{className:"acl-cx__kw",children:y}),u&&nt(p,{kind:w===0?"heart":"spark",size:w===0?26:22,className:"acl-cx__dot",fill:w===0?"var(--acl-pink)":"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto"}})]},w))}),Yo("div",{className:"acl-cx__foot",children:[u&&nt(H,{label:I,sub:x,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:-3}),nt("span",{children:P})]})]})]})}jl.defaults={backgroundTheme:"primary",showIndex:!0,keywordCount:4,showDecor:!0,eyebrow:"Chapter 03",indexLabel:"03",chapterStickerLabel:"CHAPTER",headline:"賽道結構細分",subheadline:"從大模型到垂直應用",keywords:["通用模型","Agent","企業搜尋","醫療 \xB7 金融","開發者工具","安全對齊"],closingLine:"下一組頁面進入更細的拆解\u3002"};jl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差章節頁)"},{key:"showIndex",type:"boolean",default:!0,label:"大章節號",desc:"側欄巨型章節編號的顯示/隱藏"},{key:"keywordCount",type:"number",default:4,min:0,max:6,step:1,label:"關鍵詞數量",desc:"本章關鍵詞行的數量(0\u20136)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var ps=jl.defaults,ds=jl.controls;var Hi={};Y(Hi,{controls:()=>fs,default:()=>Qt,defaults:()=>ms,numberBounds:()=>gs});import"react";import{jsx as Ba,jsxs as je}from"react/jsx-runtime";function Qt(t){let l={...Qt.defaults,...t},{backgroundTheme:c,dimensionCount:k,showCompare:d,showValueLabels:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,dims:A,seriesA:M,seriesB:F,metrics:D,closingLine:q,railHeading:N,conclusionStickerLabel:z}=l,L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=A.slice(0,Math.max(4,k)),w=y.length,v=580,m=v/2,f=212,n=R=>(-90+R*360/w)*Math.PI/180,s=(R,E)=>[m+f*(E/100)*Math.cos(n(R)),m+f*(E/100)*Math.sin(n(R))],i=R=>R.map((E,T)=>{let[B,S]=s(T,E);return`${B.toFixed(1)},${S.toFixed(1)}`}).join(" "),a=[25,50,75,100],e=R=>y.map((E,T)=>{let[B,S]=s(T,R);return`${B.toFixed(1)},${S.toFixed(1)}`}).join(" "),o=y.map(R=>R.a),r=y.map(R=>R.b),b=Math.min(x,w-1);return je("div",{className:"acl-root acl-rd",style:{background:L},children:[Ba("style",{children:`
        .acl-rd{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-rd__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-rd__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-rd__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-rd__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-rd__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-rd__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-rd__body{ flex:1; display:flex; gap:48px; margin-top:26px; min-height:0; align-items:stretch; }
        .acl-rd__chart{ flex:0 0 ${v}px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16); }
        .acl-rd__inner{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:${v}px; height:${v}px; }
        .acl-rd__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-rd__axlabel{ position:absolute; transform:translate(-50%,-50%); text-align:center;
          font-weight:900; font-size:26px; line-height:1; white-space:nowrap; }
        .acl-rd__axlabel span{ display:block; font-family:var(--acl-font-mono); font-weight:700;
          font-size:13px; letter-spacing:.04em; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-rd__axlabel--focus{ color:var(--acl-pink); }
        .acl-rd__axlabel--focus span{ color:var(--acl-pink); }
        .acl-rd__vlab{ position:absolute; transform:translate(-50%,-50%); z-index:5;
          font-family:var(--acl-font-num); font-size:30px; line-height:1; color:var(--acl-ink);
          text-shadow:0 0 6px var(--acl-paper),0 0 6px var(--acl-paper),0 0 6px var(--acl-paper); }
        .acl-rd__vlab--focus{ color:var(--acl-pink); }
        .acl-rd__lgd{ position:absolute; left:24px; bottom:20px; display:flex; gap:22px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:16px; z-index:6; }
        .acl-rd__lgd span{ display:flex; align-items:center; gap:8px; white-space:nowrap; }
        .acl-rd__lgd i{ width:20px; height:12px; }

        /* \u2500\u2500 right metrics rail \u2500\u2500 */
        .acl-rd__rail{ flex:1; display:flex; flex-direction:column; gap:16px; min-width:0; }
        .acl-rd__railhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-rd__mcards{ display:flex; flex-direction:column; gap:14px; flex:1; }
        .acl-rd__mcard{ flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 6px 0 rgba(22,21,15,.14); padding:18px 26px; display:flex; align-items:center;
          gap:20px; }
        .acl-rd__mk{ font-weight:700; font-size:27px; flex:1; min-width:0; }
        .acl-rd__mk span{ display:block; font-family:var(--acl-font-mono); font-size:13px;
          letter-spacing:.05em; text-transform:uppercase; color:rgba(22,21,15,.45); margin-top:2px; }
        .acl-rd__mv{ font-family:var(--acl-font-num); font-size:60px; line-height:.85; flex:0 0 auto;
          display:flex; align-items:baseline; gap:4px; }
        .acl-rd__mv em{ font-style:normal; font-size:30px; }
        .acl-rd__mv--up{ color:var(--acl-pink); }
        .acl-rd__mv--down{ color:#1F8A5B; }
        .acl-rd__arrow{ font-family:var(--acl-font-cn); font-size:30px; }
        .acl-rd__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-rd__polyA{ opacity:0; transform-box:fill-box; transform-origin:center;
            animation:acl-rd-grow .7s cubic-bezier(.2,.8,.2,1) .2s both; }
          [data-deck-active] .acl-rd__polyB{ opacity:0; animation:acl-rd-fade .6s ease .5s both; }
          [data-deck-active] .acl-rd__mcard{ animation:acl-rd-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .35s); }
        }
        @keyframes acl-rd-grow{ from{ opacity:0; transform:scale(.4); } to{ opacity:1; transform:scale(1); } }
        @keyframes acl-rd-fade{ to{ opacity:1; } }
        @keyframes acl-rd-in{ from{ opacity:0; transform:translateX(20px); } to{ opacity:1; transform:none; } }
      `}),je("div",{className:"acl-rd__head",children:[je("div",{children:[Ba("div",{className:"acl-rd__eyebrow",children:h}),Ba("h1",{className:"acl-rd__h",children:C})]}),Ba("div",{className:"acl-rd__sub",children:P}),Ba("div",{className:"acl-rd__summary",dangerouslySetInnerHTML:{__html:I}})]}),je("div",{className:"acl-rd__body",children:[je("div",{className:"acl-rd__chart",children:[g&&Ba("div",{style:{position:"absolute",right:18,top:16,zIndex:6},children:Ba(p,{kind:"spark",size:42,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})}),je("div",{className:"acl-rd__inner",children:[je("svg",{className:"acl-rd__svg",viewBox:`0 0 ${v} ${v}`,children:[a.map((R,E)=>Ba("polygon",{points:e(R),fill:E===a.length-1?"rgba(231,230,238,.35)":"none",stroke:"rgba(22,21,15,.2)",strokeWidth:"1.5"},E)),y.map((R,E)=>{let[T,B]=s(E,100),S=_&&E===b;return Ba("line",{x1:m,y1:m,x2:T,y2:B,stroke:S?"var(--acl-pink)":"rgba(22,21,15,.28)",strokeWidth:S?3:1.5},E)}),d&&Ba("polygon",{className:"acl-rd__polyB",points:i(r),fill:"var(--acl-blue)",fillOpacity:"0.32",stroke:"var(--acl-blue)",strokeWidth:"3",strokeLinejoin:"round"}),Ba("polygon",{className:"acl-rd__polyA",points:i(o),fill:"var(--acl-pink)",fillOpacity:"0.34",stroke:"var(--acl-ink)",strokeWidth:"4",strokeLinejoin:"round"}),y.map((R,E)=>{let[T,B]=s(E,R.a),S=_&&E===b;return Ba("circle",{cx:T,cy:B,r:S?11:7,fill:S?"var(--acl-pink)":"var(--acl-ink)",stroke:"var(--acl-paper)",strokeWidth:"3"},E)})]}),y.map((R,E)=>{let[T,B]=s(E,122);return je("div",{className:"acl-rd__axlabel"+(_&&E===b?" acl-rd__axlabel--focus":""),style:{left:T,top:B},children:[R.label,Ba("span",{children:R.note})]},E)}),u&&y.map((R,E)=>{let[T,B]=s(E,R.a+9);return Ba("div",{className:"acl-rd__vlab"+(_&&E===b?" acl-rd__vlab--focus":""),style:{left:T,top:B},children:R.a},E)})]}),je("div",{className:"acl-rd__lgd",children:[je("span",{children:[Ba("i",{style:{background:"var(--acl-pink)"}}),M]}),d&&je("span",{children:[Ba("i",{style:{background:"var(--acl-blue)"}}),F]})]})]}),je("div",{className:"acl-rd__rail",children:[Ba("div",{className:"acl-rd__railhd",children:N}),Ba("div",{className:"acl-rd__mcards",children:D.map((R,E)=>{let T=R.dir!=="down";return je("div",{className:"acl-rd__mcard",style:{"--i":E},children:[je("div",{className:"acl-rd__mk",children:[R.k,Ba("span",{children:R.sub})]}),je("div",{className:"acl-rd__mv "+(T?"acl-rd__mv--up":"acl-rd__mv--down"),children:[Ba("span",{className:"acl-rd__arrow",children:T?"\u25B2":"\u25BC"}),R.v,Ba("em",{children:"%"})]})]},E)})}),g&&Ba("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:2},children:Ba(H,{label:z,color:"var(--acl-yellow)",rotate:-2,size:18})})]})]}),je("div",{className:"acl-rd__foot",children:[g&&Ba(p,{kind:"loop",size:56,style:{position:"static"}}),Ba("span",{children:q})]})]})}Qt.defaults={backgroundTheme:"primary",dimensionCount:5,showCompare:!0,showValueLabels:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Model Lab Race",headline:"算力\u3001資料\u3001人才與渠道",subheadline:"模型實驗室競爭",summary:"模型實驗室競爭不只看模型指標\uFF0C更看<b>資源整合能力</b>\u3002",railHeading:"同比變化 \xB7 Year-over-Year",conclusionStickerLabel:"資源整合 = 競爭力",dims:[{label:"算力",note:"Compute",a:92,b:58},{label:"資料",note:"Data",a:84,b:55},{label:"人才",note:"Talent",a:88,b:60},{label:"渠道",note:"Channel",a:80,b:48},{label:"模型",note:"Model",a:90,b:62},{label:"資本",note:"Capital",a:86,b:50}],seriesA:"頭部實驗室",seriesB:"行業均值",metrics:[{k:"算力預算",sub:"Compute budget",v:"64",dir:"up"},{k:"研究團隊",sub:"Research team",v:"38",dir:"up"},{k:"企業 API 客戶",sub:"Enterprise API",v:"52",dir:"up"},{k:"推理成本",sub:"Inference cost",v:"21",dir:"down"}],closingLine:"模型能力只是入口\uFF0C交付能力才是商業化\u3002"};Qt.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"dimensionCount",type:"number",default:5,min:4,max:6,step:1,label:"維度數量",desc:"雷達圖座標軸(維度)數量(4\u20136)"},{key:"showCompare",type:"boolean",default:!0,label:"對比系列",desc:"疊加第二條基準系列(行業均值)多邊形"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"在主系列各頂點顯示數值"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一條維度座標軸"},{key:"focusIndex",type:"number",default:0,min:0,max:5,step:1,maxFrom:"dimensionCount",label:"重點物件",desc:"被高亮的維度序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];Qt.numberBounds={"dims[].a":{min:0,max:100,semantics:"coordinate"},"dims[].b":{min:0,max:100,semantics:"coordinate"}};var ms=Qt.defaults,fs=Qt.controls,gs=Qt.numberBounds;var Oi={};Y(Oi,{controls:()=>xs,default:()=>Ul,defaults:()=>_s});import us from"react";import{jsx as Va,jsxs as rt}from"react/jsx-runtime";function Ul(t){let l={...Ul.defaults,...t},{backgroundTheme:c,mediaCount:k,metricCount:d,showFlow:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,badge:A,hero:M,metrics:F,flow:D,collage:q,closingLine:N,flowHeading:z,billableStickerLabel:L,billableStickerSub:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=F.slice(0,Math.max(2,d)),m=Math.min(x,v.length-1),f=q[k]||[];return rt("div",{className:"acl-root acl-sg",style:{background:w},children:[Va("style",{children:`
        .acl-sg{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 72px; display:flex; flex-direction:column; }
        .acl-sg__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-sg__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-sg__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-sg__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-sg__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-sg__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-sg__body{ flex:1; display:flex; gap:40px; margin-top:30px; min-height:0; }
        .acl-sg__panel{ flex:0 0 760px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 40px 30px; display:flex; flex-direction:column; }
        .acl-sg__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-sg__herolabel{ font-weight:700; font-size:24px; color:rgba(22,21,15,.6); margin-top:22px;
          display:flex; align-items:center; gap:14px; }
        .acl-sg__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-pink); color:var(--acl-paper); }
        .acl-sg__heronum{ font-family:var(--acl-font-num); font-size:186px; line-height:.82; margin-top:2px; }
        .acl-sg__tiles{ display:flex; gap:14px; margin-top:18px; }
        .acl-sg__tile{ flex:1; border:2px solid var(--acl-ink); padding:13px 16px 11px; transition:.25s; }
        .acl-sg__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-sg__tile .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.96; margin-top:3px; }
        .acl-sg__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }
        .acl-sg__tile--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-sg__tile--focus .k{ color:rgba(255,255,255,.55); }

        .acl-sg__flow{ margin-top:auto; padding-top:24px; }
        .acl-sg__flowhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:10px; }
        .acl-sg__steps{ display:flex; align-items:stretch; gap:0; }
        .acl-sg__step{ flex:1; position:relative; background:var(--acl-yellow); border:2px solid var(--acl-ink);
          padding:11px 8px 10px 22px; margin-left:-14px; display:flex; flex-direction:column;
          align-items:center; justify-content:center; clip-path:polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%); }
        .acl-sg__step:first-child{ margin-left:0; clip-path:polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%); padding-left:14px; }
        .acl-sg__step:last-child{ clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%, 14px 50%); }
        .acl-sg__step b{ font-weight:900; font-size:21px; line-height:1; }
        .acl-sg__step span{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.03em;
          color:rgba(22,21,15,.55); margin-top:3px; }
        .acl-sg__step:nth-child(even){ background:var(--acl-paper); }
        .acl-sg__step:last-child{ background:var(--acl-pink); color:var(--acl-paper); }
        .acl-sg__step:last-child span{ color:rgba(255,255,255,.7); }

        /* collage stage */
        .acl-sg__stage{ flex:1; position:relative; min-width:0; }
        .acl-sg__slot{ position:absolute; }
        .acl-sg__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-sg__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-sg__panel{ animation:acl-sg-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-sg__step{ animation:acl-sg-step .4s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .4s); }
        }
        @keyframes acl-sg-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-sg-step{ from{ opacity:0; transform:translateX(-12px); } to{ opacity:1; transform:none; } }
      `}),rt("div",{className:"acl-sg__head",children:[rt("div",{children:[Va("div",{className:"acl-sg__eyebrow",children:h}),Va("h1",{className:"acl-sg__h",children:C})]}),Va("div",{className:"acl-sg__sub",children:P}),Va("div",{className:"acl-sg__summary",dangerouslySetInnerHTML:{__html:I}})]}),rt("div",{className:"acl-sg__body",children:[rt("div",{className:"acl-sg__panel",children:[rt("div",{className:"acl-sg__badge",children:["\u25C6 ",A]}),g&&Va("div",{style:{position:"absolute",right:30,top:26},children:Va(p,{kind:"spark",size:50,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})}),rt("div",{className:"acl-sg__herolabel",children:[M.label,Va("i",{className:"acl-sg__unit",children:M.unit})]}),Va("div",{className:"acl-sg__heronum",children:M.value}),Va("div",{className:"acl-sg__tiles",children:v.map((n,s)=>rt("div",{className:"acl-sg__tile"+(_&&s===m?" acl-sg__tile--focus":""),children:[Va("div",{className:"k",children:n.k}),rt("div",{className:"v",children:[n.v,Va("em",{children:n.unit})]})]},s))}),u&&rt("div",{className:"acl-sg__flow",children:[Va("div",{className:"acl-sg__flowhd",children:z}),Va("div",{className:"acl-sg__steps",children:D.map((n,s)=>rt("div",{className:"acl-sg__step",style:{"--i":s},children:[Va("b",{children:n.t}),Va("span",{children:n.s})]},s))})]})]}),rt("div",{className:"acl-sg__stage",children:[f.length===0&&Va("div",{className:"acl-sg__empty",children:"// 圖片數量 = 0"}),f.map((n,s)=>Va("div",{className:"acl-sg__slot",style:{left:n.l,top:n.t},children:Va(W,{id:"agent-"+s,box:n.box,rotate:n.r,ratio:n.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:n.label,sub:n.sub,color:n.color,subColor:"var(--acl-ink)",rotate:n.sr}})},s)),g&&rt(us.Fragment,{children:[Va("div",{style:{position:"absolute",right:4,top:8,zIndex:4,transform:"rotate(-6deg)"},children:Va(H,{label:L,sub:y,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:20})}),Va(p,{kind:"arrow",size:88,rotate:118,color:"var(--acl-ink)",style:{left:-6,top:"44%"}}),Va(p,{kind:"spark",size:42,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:36,bottom:130}})]})]})]}),rt("div",{className:"acl-sg__foot",children:[g&&Va(p,{kind:"loop",size:56,style:{position:"static"}}),Va("span",{children:N})]})]})}Ul.defaults={images:[],backgroundTheme:"muted",mediaCount:2,metricCount:3,showFlow:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"AI Agents",headline:"工作流自動化機會",subheadline:"AI Agent 賽道",summary:"Agent 公司以<b>任務執行與工作流自動化</b>作為核心賣點\u3002",badge:"AI Agents \xB7 工作流自動化",flowHeading:"Agent 工作流 \xB7 Workflow",billableStickerLabel:"可計費流程",billableStickerSub:"BILLABLE",hero:{label:"賽道融資額",value:"72",unit:"億美元"},metrics:[{k:"事件數",v:"16",unit:"筆"},{k:"平均單筆",v:"4.5",unit:"億"},{k:"ARR 中位數",v:"4200",unit:"萬"}],flow:[{t:"接收任務",s:"Intake"},{t:"規劃",s:"Plan"},{t:"呼叫工具",s:"Tools"},{t:"執行交付",s:"Deliver"}],collage:{0:[],1:[{l:210,t:70,box:540,r:-3,ratio:1.25,sr:-4,color:"var(--acl-yellow)",label:"Agent 場景",sub:"DEMO"}],2:[{l:14,t:6,box:470,r:-4,ratio:1.2,sr:-4,color:"var(--acl-yellow)",label:"Agent 場景",sub:"DEMO"},{l:438,t:288,box:452,r:4,ratio:.82,sr:3,color:"var(--acl-blue)",label:"工作流",sub:"FLOW"}],3:[{l:252,t:0,box:398,r:3,ratio:.9,sr:-4,color:"var(--acl-yellow)",label:"Agent 場景",sub:"DEMO"},{l:0,t:246,box:364,r:-5,ratio:1.22,sr:4,color:"var(--acl-blue)",label:"工作流",sub:"FLOW"},{l:472,t:402,box:346,r:5,ratio:.82,sr:-3,color:"var(--acl-pink)",label:"可計費",sub:"ARR"}]},closingLine:"能進入工作流的 Agent 才有長期價值\u3002"};Ul.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主卡內支撐指標格數量(2\u20133)"},{key:"showFlow",type:"boolean",default:!0,label:"流程示意",desc:"底部工作流步驟條的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個支撐指標"},{key:"focusIndex",type:"number",default:2,min:0,max:2,step:1,maxFrom:"metricCount",label:"重點物件",desc:"被高亮的指標序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var _s=Ul.defaults,xs=Ul.controls;var Yi={};Y(Yi,{controls:()=>hs,default:()=>Wl,defaults:()=>vs});import bs from"react";import{jsx as Ha,jsxs as Ue}from"react/jsx-runtime";function Wl(t){let l={...Wl.defaults,...t},{backgroundTheme:c,mediaCount:k,metricCount:d,showMeter:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,hero:A,metrics:M,meter:F,collage:D,closingLine:q,dailyStickerLabel:N,dailyStickerSub:z,payingStickerLabel:L}=l,y=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",w=M.slice(0,Math.max(2,d)),v=Math.min(x,w.length-1),m=D[k]||[],f=Q($(F.value,0),0,100);return Ue("div",{className:"acl-root acl-kp",style:{background:y},children:[Ha("style",{children:`
        .acl-kp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 70px; display:flex; flex-direction:column; }
        .acl-kp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-kp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-kp__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-kp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-kp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-kp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-kp__body{ flex:1; display:flex; gap:54px; margin-top:30px; min-height:0; }

        /* collage stage (left) */
        .acl-kp__stage{ flex:1; position:relative; min-width:0; }
        .acl-kp__slot{ position:absolute; }
        .acl-kp__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }

        /* editorial stat rail (right) */
        .acl-kp__rail{ flex:0 0 600px; position:relative; display:flex; flex-direction:column; }
        .acl-kp__hero{ border-top:5px solid var(--acl-ink); padding-top:14px; }
        .acl-kp__herolabel{ font-weight:700; font-size:22px; color:rgba(22,21,15,.6);
          display:flex; align-items:center; gap:12px; }
        .acl-kp__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:17px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-pink); color:var(--acl-paper); }
        .acl-kp__heronum{ font-family:var(--acl-font-num); font-size:210px; line-height:.8; margin-top:4px; }
        .acl-kp__rows{ margin-top:26px; display:flex; flex-direction:column; }
        .acl-kp__row{ display:flex; align-items:baseline; gap:18px; padding:15px 4px;
          border-top:2px solid rgba(22,21,15,.3); transition:.25s; }
        .acl-kp__row .k{ flex:1; font-weight:700; font-size:24px; }
        .acl-kp__row .ken{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); display:block; margin-top:2px; }
        .acl-kp__row .v{ font-family:var(--acl-font-num); font-size:56px; line-height:.85; }
        .acl-kp__row .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; opacity:.6; }
        .acl-kp__row--focus{ margin:0 -16px; padding:15px 16px; background:var(--acl-ink); color:var(--acl-paper);
          border-top-color:transparent; }
        .acl-kp__row--focus .ken{ color:rgba(255,255,255,.5); }
        .acl-kp__fx{ position:absolute; right:-6px; z-index:5; }
        .acl-kp__meter{ margin-top:auto; padding-top:22px; }
        .acl-kp__meterhd{ display:flex; justify-content:space-between; align-items:baseline;
          font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em; text-transform:uppercase;
          color:rgba(22,21,15,.55); margin-bottom:8px; }
        .acl-kp__meterhd b{ font-family:var(--acl-font-num); font-size:36px; color:var(--acl-ink);
          letter-spacing:0; text-transform:none; }
        .acl-kp__track{ height:26px; background:var(--acl-paper); border:3px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-kp__fill{ position:absolute; inset:0 auto 0 0; background:var(--acl-blue);
          border-right:3px solid var(--acl-ink); }

        .acl-kp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-kp__heronum{ animation:acl-kp-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-kp__row{ animation:acl-kp-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .15s); }
          [data-deck-active] .acl-kp__fill{ animation:acl-kp-grow .8s cubic-bezier(.2,.8,.2,1) .4s both; }
        }
        @keyframes acl-kp-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; transform:none; } }
        @keyframes acl-kp-in{ from{ opacity:0; transform:translateX(16px); } to{ opacity:1; transform:none; } }
        @keyframes acl-kp-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:scaleX(1); } }
      `}),Ue("div",{className:"acl-kp__head",children:[Ue("div",{children:[Ha("div",{className:"acl-kp__eyebrow",children:h}),Ha("h1",{className:"acl-kp__h",children:C})]}),Ha("div",{className:"acl-kp__sub",children:P}),Ha("div",{className:"acl-kp__summary",dangerouslySetInnerHTML:{__html:I}})]}),Ue("div",{className:"acl-kp__body",children:[Ue("div",{className:"acl-kp__stage",children:[m.length===0&&Ha("div",{className:"acl-kp__empty",children:"// 圖片數量 = 0"}),m.map((n,s)=>Ha("div",{className:"acl-kp__slot",style:{left:n.l,top:n.t},children:Ha(W,{id:"portal-"+s,box:n.box,rotate:n.r,ratio:n.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:n.label,sub:n.sub,color:n.color,subColor:"var(--acl-ink)",rotate:n.sr}})},s)),g&&m.length>0&&Ue(bs.Fragment,{children:[Ha("div",{style:{position:"absolute",left:2,top:-6,zIndex:6,transform:"rotate(-5deg)"},children:Ha(H,{label:N,sub:z,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:20})}),Ha(p,{kind:"arrow",size:88,rotate:64,color:"var(--acl-ink)",style:{right:-30,top:"42%"}}),Ha(p,{kind:"spark",size:40,rotate:10,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{left:30,bottom:40}})]})]}),Ue("div",{className:"acl-kp__rail",children:[g&&Ha(p,{kind:"spark",size:48,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:0,top:-34}}),Ue("div",{className:"acl-kp__hero",children:[Ue("div",{className:"acl-kp__herolabel",children:[A.label,Ha("i",{className:"acl-kp__unit",children:A.unit})]}),Ha("div",{className:"acl-kp__heronum",children:A.value})]}),Ha("div",{className:"acl-kp__rows",children:w.map((n,s)=>{let i=_&&s===v;return Ue("div",{className:"acl-kp__row"+(i?" acl-kp__row--focus":""),style:{"--i":s,position:"relative"},children:[i&&g&&Ha("div",{className:"acl-kp__fx",style:{top:-16},children:Ha(H,{label:L,color:"var(--acl-yellow)",rotate:6})}),Ue("div",{className:"k",children:[n.k,Ha("span",{className:"ken",children:n.en})]}),Ue("div",{className:"v",children:[n.v,Ha("em",{children:n.unit})]})]},s)})}),u&&Ue("div",{className:"acl-kp__meter",children:[Ue("div",{className:"acl-kp__meterhd",children:[Ha("span",{children:F.label}),Ue("b",{children:[F.value,"%"]})]}),Ha("div",{className:"acl-kp__track",children:Ha("div",{className:"acl-kp__fill",style:{right:`${100-f}%`}})})]})]})]}),Ue("div",{className:"acl-kp__foot",children:[g&&Ha(p,{kind:"loop",size:56,style:{position:"static"}}),Ha("span",{children:q})]})]})}Wl.defaults={images:[],backgroundTheme:"primary",mediaCount:3,metricCount:3,showMeter:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Enterprise Search",headline:"知識入口機會",subheadline:"企業搜尋賽道",summary:"企業搜尋是較早形成<b>明確付費場景</b>的應用方向\u3002",hero:{label:"賽道融資額",value:"38",unit:"億美元"},dailyStickerLabel:"高頻入口",dailyStickerSub:"DAILY",payingStickerLabel:"付費場景",metrics:[{k:"事件數",en:"Deals",v:"9",unit:"筆"},{k:"平均單筆",en:"Avg Ticket",v:"4.2",unit:"億"},{k:"付費客戶中位數",en:"Median Paid",v:"620",unit:"家"}],meter:{label:"內部知識接入採用率",value:72},collage:{0:[],1:[{l:200,t:60,box:620,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)",label:"知識庫入口",sub:"SEARCH"}],2:[{l:20,t:10,box:540,r:-4,ratio:1.15,sr:-4,color:"var(--acl-yellow)",label:"知識庫入口",sub:"SEARCH"},{l:500,t:320,box:470,r:4,ratio:.82,sr:3,color:"var(--acl-blue)",label:"檢索結果",sub:"RESULT"}],3:[{l:250,t:0,box:430,r:3,ratio:.92,sr:-4,color:"var(--acl-yellow)",label:"知識庫入口",sub:"SEARCH"},{l:0,t:248,box:392,r:-5,ratio:1.2,sr:4,color:"var(--acl-blue)",label:"檢索結果",sub:"RESULT"},{l:470,t:372,box:372,r:5,ratio:.84,sr:-3,color:"var(--acl-pink)",label:"採用率",sub:"ADOPT"}],4:[{l:6,t:8,box:380,r:-4,ratio:.96,sr:-4,color:"var(--acl-yellow)",label:"知識庫入口",sub:"SEARCH"},{l:412,t:30,box:340,r:4,ratio:1.15,sr:3,color:"var(--acl-blue)",label:"檢索結果",sub:"RESULT"},{l:110,t:380,box:352,r:4,ratio:1.1,sr:-3,color:"var(--acl-pink)",label:"採用率",sub:"ADOPT"},{l:540,t:388,box:336,r:-4,ratio:.82,sr:4,color:"var(--acl-paper)",label:"企業部署",sub:"DEPLOY"}]},closingLine:"企業知識入口是 AI 應用的重要落地點\u3002"};Wl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"右側編輯式指標行數量(2\u20134)"},{key:"showMeter",type:"boolean",default:!0,label:"比例條",desc:"底部比例/採用率進度條的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一條指標行"},{key:"focusIndex",type:"number",default:2,min:0,max:3,step:1,maxFrom:"metricCount",label:"重點物件",desc:"被高亮的指標行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var vs=Wl.defaults,hs=Wl.controls;var ji={};Y(ji,{controls:()=>ks,default:()=>Xl,defaults:()=>ys});import"react";import{jsx as wa,jsxs as ct}from"react/jsx-runtime";function Xl(t){let l={...Xl.defaults,...t},{backgroundTheme:c,rowCount:k,showBars:d,showRepCol:u,showRating:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,kpis:M,columnLabels:F,rows:D,closingLine:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=j(D).slice(0,Math.max(2,$(k,2))),L=Q(g,0,Math.max(0,z.length-1)),y=X(z.map(v=>$(v?.share)),1),w=`1.05fr 380px${u?" 1fr":""}${_?" 300px":""}`;return ct("div",{className:"acl-root acl-mx",style:{background:N},children:[wa("style",{children:`
        .acl-mx{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-mx__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-mx__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-mx__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-mx__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-mx__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-mx__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-mx__kpis{ display:flex; gap:0; margin-top:24px; border:3px solid var(--acl-ink);
          background:var(--acl-ink); }
        .acl-mx__kpi{ flex:1; background:var(--acl-paper); padding:13px 22px; display:flex;
          flex-direction:column; gap:2px; }
        .acl-mx__kpi + .acl-mx__kpi{ border-left:3px solid var(--acl-ink); }
        .acl-mx__kpi .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-mx__kpi .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.95; }
        .acl-mx__kpi .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:4px; opacity:.6; }
        .acl-mx__kpi--accent{ background:var(--acl-yellow); }

        .acl-mx__panel{ position:relative; flex:1; margin-top:22px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:8px 40px 18px; display:flex; flex-direction:column; min-height:0; }
        .acl-mx__colhead{ display:grid; grid-template-columns:${w}; align-items:end; gap:28px;
          padding:16px 8px 12px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:15px; letter-spacing:.07em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-mx__colhead .c{ text-align:center; }
        .acl-mx__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-mx__row{ flex:1; display:grid; grid-template-columns:${w}; align-items:center; gap:28px;
          padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.22); position:relative; transition:background .25s; }
        .acl-mx__row:last-child{ border-bottom:none; }
        .acl-mx__scn{ display:flex; flex-direction:column; gap:3px; }
        .acl-mx__scn b{ font-weight:900; font-size:36px; line-height:1; }
        .acl-mx__scn span{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.46); }
        .acl-mx__share{ display:flex; align-items:center; gap:16px; }
        .acl-mx__sharev{ font-family:var(--acl-font-num); font-size:50px; line-height:.85; white-space:nowrap; }
        .acl-mx__sharev em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:3px; opacity:.6; }
        .acl-mx__bar{ flex:1; height:20px; background:rgba(22,21,15,.1); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-mx__barfill{ position:absolute; inset:0 auto 0 0; background:var(--acl-blue);
          border-right:2px solid var(--acl-ink); }
        .acl-mx__rep{ font-weight:700; font-size:23px; line-height:1.3; }
        .acl-mx__rep small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:13px;
          letter-spacing:.03em; color:rgba(22,21,15,.5); margin-top:3px; text-transform:uppercase; }
        .acl-mx__verdict{ justify-self:center; display:flex; flex-direction:column; align-items:center; gap:7px; }
        .acl-mx__dots{ display:flex; gap:5px; }
        .acl-mx__dot{ width:15px; height:15px; border:2.5px solid var(--acl-ink); border-radius:50%;
          background:transparent; }
        .acl-mx__dot--on{ background:var(--acl-pink); }
        .acl-mx__vtag{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px; letter-spacing:.03em;
          padding:4px 10px; background:var(--acl-ink); color:var(--acl-paper); white-space:nowrap; }
        .acl-mx__row--focus{ background:var(--acl-yellow);
          box-shadow:6px 0 0 var(--acl-yellow), -6px 0 0 var(--acl-yellow); border-bottom-color:transparent; z-index:2; }
        .acl-mx__row--focus .acl-mx__bar{ background:rgba(22,21,15,.16); }
        .acl-mx__fx{ position:absolute; top:-14px; right:30px; z-index:5; }
        .acl-mx__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-mx__row{ animation:acl-mx-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .1s); }
          [data-deck-active] .acl-mx__barfill{ animation:acl-mx-grow .7s cubic-bezier(.2,.8,.2,1) .35s both; }
        }
        @keyframes acl-mx-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
        @keyframes acl-mx-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:scaleX(1); } }
      `}),ct("div",{className:"acl-mx__head",children:[ct("div",{children:[wa("div",{className:"acl-mx__eyebrow",children:C}),wa("h1",{className:"acl-mx__h",children:P})]}),wa("div",{className:"acl-mx__sub",children:I}),h&&wa(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),wa("div",{className:"acl-mx__summary",dangerouslySetInnerHTML:{__html:A}})]}),wa("div",{className:"acl-mx__kpis",children:M.map((v,m)=>ct("div",{className:"acl-mx__kpi"+(m===0?" acl-mx__kpi--accent":""),children:[wa("div",{className:"k",children:v.k}),ct("div",{className:"v",children:[v.v,wa("em",{children:v.unit})]})]},m))}),ct("div",{className:"acl-mx__panel",children:[ct("div",{className:"acl-mx__colhead",children:[wa("span",{children:F[0]}),wa("span",{children:F[1]}),u&&wa("span",{children:F[2]}),_&&wa("span",{className:"c",children:F[3]})]}),wa("div",{className:"acl-mx__rows",children:z.map((v,m)=>{let f=x&&m===L;return ct("div",{className:"acl-mx__row"+(f?" acl-mx__row--focus":""),style:{"--i":m},children:[f&&h&&wa("div",{className:"acl-mx__fx",children:wa(H,{label:"高客單價",color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6})}),ct("div",{className:"acl-mx__scn",children:[wa("b",{children:v.scn}),wa("span",{children:v.en})]}),ct("div",{className:"acl-mx__share",children:[ct("div",{className:"acl-mx__sharev",children:[$(v?.share),wa("em",{children:"%"})]}),d&&wa("div",{className:"acl-mx__bar",children:wa("div",{className:"acl-mx__barfill",style:{right:`${100-G($(v?.share),y)*100}%`,background:f?"var(--acl-ink)":"var(--acl-blue)"}})})]}),u&&ct("div",{className:"acl-mx__rep",children:[v.rep,wa("small",{children:v.repEn})]}),_&&ct("div",{className:"acl-mx__verdict",children:[wa("div",{className:"acl-mx__dots",children:[0,1,2,3].map(n=>wa("span",{className:"acl-mx__dot"+(n<v.rating?" acl-mx__dot--on":"")},n))}),wa("div",{className:"acl-mx__vtag",children:v.verdict})]})]},m)})})]}),ct("div",{className:"acl-mx__foot",children:[h&&wa(p,{kind:"loop",size:56,style:{position:"static"}}),wa("span",{children:q})]})]})}Xl.defaults={backgroundTheme:"muted",rowCount:4,showBars:!0,showRepCol:!0,showRating:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Legal AI",headline:"專業服務高客單價",subheadline:"法律 AI 賽道",summary:"法律 AI 具備<b>高客單價\u3001強專業壁壘</b>和明確效率提升空間\u3002",kpis:[{k:"賽道融資額",v:"26",unit:"億"},{k:"事件數",v:"6",unit:"筆"},{k:"平均單筆",v:"4.3",unit:"億"},{k:"合同審查佔比",v:"46",unit:"%"}],columnLabels:["場景","場景佔比","代表能力","判斷"],rows:[{scn:"合同審查",en:"Contract Review",share:46,rep:"審查 / 比對引擎",repEn:"Review Engine",rating:4,verdict:"高頻剛需"},{scn:"法務檢索",en:"Legal Research",share:22,rep:"案例 / 法規檢索",repEn:"Case Search",rating:3,verdict:"專業壁壘"},{scn:"合規監控",en:"Compliance",share:18,rep:"實時風險監控",repEn:"Monitoring",rating:3,verdict:"監管驅動"},{scn:"文書起草",en:"Drafting",share:14,rep:"模板智慧生成",repEn:"Drafting",rating:2,verdict:"效率提升"}],closingLine:"法律 AI 是垂直應用商業化樣本\u3002"};Xl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:4,min:2,max:4,step:1,label:"行數",desc:"展示的場景行數(2\u20134)"},{key:"showBars",type:"boolean",default:!0,label:"佔比條",desc:"佔比列橫向比例條的顯示/隱藏"},{key:"showRepCol",type:"boolean",default:!0,label:"能力列",desc:"\u300C代表能力\u300D列的顯示/隱藏"},{key:"showRating",type:"boolean",default:!0,label:"判斷列",desc:"\u300C判斷\u300D評級圓點與標籤列的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var ys=Xl.defaults,ks=Xl.controls;var Ui={};Y(Ui,{controls:()=>Ns,default:()=>Gl,defaults:()=>ws});import"react";import{jsx as fe,jsxs as pl}from"react/jsx-runtime";function Gl(t){let l={...Gl.defaults,...t},{backgroundTheme:c,cardCount:k,showValue:d,showStrip:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,branches:A,strip:M,closingLine:F,moatStickerLabel:D,moatStickerSub:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=A.slice(0,Math.max(0,k)),L=z.length===0,y=z.length===1,w=Math.min(x,Math.max(0,z.length-1)),v=["var(--acl-yellow)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)"],m=y?520:z.length===2?460:z.length===3?392:300,f=["acl-root","acl-tp",L?"acl-tp--empty":"",y?"acl-tp--single":"",u?"":"acl-tp--no-strip"].filter(Boolean).join(" ");return pl("div",{className:f,style:{background:N},children:[fe("style",{children:`
        .acl-tp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-tp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-tp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-tp__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-tp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-tp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-tp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-tp__body{ flex:1; display:flex; gap:34px; margin-top:28px; min-height:0; }
        .acl-tp__card{ flex:1; position:relative; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:8px 10px 0 rgba(22,21,15,.16); padding:22px 22px 24px; display:flex; flex-direction:column;
          align-items:center; min-width:0; }
        .acl-tp__rank{ position:absolute; top:-22px; left:-14px; z-index:6; width:54px; height:54px;
          border-radius:50%; background:var(--acl-ink); color:var(--acl-paper); display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:32px; transform:rotate(-6deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); }
        .acl-tp__imgzone{ flex:1; width:100%; display:flex; align-items:center; justify-content:center;
          min-height:0; }
        .acl-tp__meta{ width:100%; flex:0 0 auto; text-align:center; margin-top:18px; }
        .acl-tp__name{ font-weight:900; font-size:40px; line-height:1; }
        .acl-tp__en{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:6px; }
        .acl-tp__val{ font-family:var(--acl-font-num); font-size:84px; line-height:.82; margin-top:12px; }
        .acl-tp__val em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:22px;
          margin-left:5px; opacity:.62; }
        .acl-tp__note{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.02em;
          color:rgba(22,21,15,.55); margin-top:8px; }
        .acl-tp__card--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateY(-10px); }
        .acl-tp__card--focus .acl-tp__en, .acl-tp__card--focus .acl-tp__note{ color:rgba(255,255,255,.55); }
        .acl-tp__card--focus .acl-tp__rank{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-tp__fx{ position:absolute; top:-20px; right:-12px; z-index:7; }

        .acl-tp--single .acl-tp__body{ margin-top:34px; }
        .acl-tp--single .acl-tp__card{ flex-direction:row; align-items:stretch; gap:44px; padding:34px 42px; }
        .acl-tp--single .acl-tp__imgzone{ flex:0 1 54%; width:auto; }
        .acl-tp--single .acl-tp__meta{ flex:1; min-width:0; margin-top:0; text-align:left; display:flex;
          flex-direction:column; justify-content:center; }
        .acl-tp--single .acl-tp__name{ font-size:72px; line-height:.95; overflow-wrap:anywhere; }
        .acl-tp--single .acl-tp__en{ font-size:20px; margin-top:12px; }
        .acl-tp--single .acl-tp__val{ font-size:128px; margin-top:28px; }
        .acl-tp--single .acl-tp__note{ font-family:var(--acl-font-cn); font-size:22px; font-weight:700;
          line-height:1.35; letter-spacing:0; max-width:520px; overflow-wrap:anywhere; }
        .acl-tp--single .acl-tp__rank{ width:66px; height:66px; top:-24px; left:-18px; font-size:40px; }
        .acl-tp--single .acl-tp__fx{ top:24px; right:28px; }

        .acl-tp__strip{ flex:0 0 auto; margin-top:22px; display:flex; align-items:center; gap:0;
          border:3px solid var(--acl-ink); }
        .acl-tp__stripcell{ flex:1; padding:13px 24px; display:flex; align-items:baseline; gap:12px;
          background:var(--acl-paper); }
        .acl-tp__stripcell + .acl-tp__stripcell{ border-left:3px solid var(--acl-ink); }
        .acl-tp__stripcell .sk{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-tp__stripcell .sv{ font-weight:900; font-size:24px; }
        .acl-tp__stripcell:last-child{ background:var(--acl-yellow); }

        .acl-tp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        .acl-tp--empty .acl-tp__strip{ flex:1; margin-top:42px; display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr)); grid-auto-rows:1fr; align-items:stretch; }
        .acl-tp--empty .acl-tp__stripcell{ flex:none; min-height:0; padding:38px 44px;
          flex-direction:column; align-items:flex-start; justify-content:center; gap:12px; }
        .acl-tp--empty .acl-tp__stripcell + .acl-tp__stripcell{ border-left:0; }
        .acl-tp--empty .acl-tp__stripcell:nth-child(2n){ border-left:3px solid var(--acl-ink); }
        .acl-tp--empty .acl-tp__stripcell:nth-child(n+3){ border-top:3px solid var(--acl-ink); }
        .acl-tp--empty .acl-tp__stripcell .sk{ font-size:20px; }
        .acl-tp--empty .acl-tp__stripcell .sv{ font-size:54px; line-height:1; }
        .acl-tp--empty .acl-tp__foot{ margin-top:24px; font-size:38px; }
        .acl-tp--empty.acl-tp--no-strip .acl-tp__foot{ flex:1; justify-content:center; font-size:54px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-tp__card{ animation:acl-tp-rise .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s); }
        }
        @keyframes acl-tp-rise{ from{ opacity:0; transform:translateY(22px); } to{ opacity:1; } }
      `}),pl("div",{className:"acl-tp__head",children:[pl("div",{children:[fe("div",{className:"acl-tp__eyebrow",children:h}),fe("h1",{className:"acl-tp__h",children:C})]}),fe("div",{className:"acl-tp__sub",children:P}),fe("div",{className:"acl-tp__summary",dangerouslySetInnerHTML:{__html:I}})]}),!L&&fe("div",{className:"acl-tp__body",children:z.map((n,s)=>{let i=_&&s===w,a=v[s%v.length];return pl("div",{className:"acl-tp__card"+(i?" acl-tp__card--focus":""),style:{"--i":s},children:[fe("div",{className:"acl-tp__rank",children:s+1}),i&&g&&fe("div",{className:"acl-tp__fx",children:fe(H,{label:D,sub:q,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:6,size:17})}),fe("div",{className:"acl-tp__imgzone",children:fe(W,{id:"triptych-"+s,box:m,rotate:s%2?2:-2,ratio:.82,accent:i?"var(--acl-yellow)":"var(--acl-paper)",placeholder:"上傳",sticker:{label:n.tag,color:a,subColor:"var(--acl-ink)",rotate:s%2?3:-3}})}),pl("div",{className:"acl-tp__meta",children:[fe("div",{className:"acl-tp__name",children:n.name}),fe("div",{className:"acl-tp__en",children:n.en}),d&&pl("div",{className:"acl-tp__val",children:[n.value,fe("em",{children:n.unit})]}),fe("div",{className:"acl-tp__note",children:n.note})]})]},s)})}),u&&fe("div",{className:"acl-tp__strip",children:M.map((n,s)=>pl("div",{className:"acl-tp__stripcell",children:[fe("span",{className:"sk",children:n.k}),fe("span",{className:"sv",children:n.v})]},s))}),pl("div",{className:"acl-tp__foot",children:[g&&fe(p,{kind:"loop",size:56,style:{position:"static"}}),fe("span",{children:F}),g&&fe(p,{kind:"spark",size:40,rotate:10,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{position:"static"}})]})]})}Gl.defaults={images:[],backgroundTheme:"muted",cardCount:3,showValue:!0,showStrip:!0,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Healthcare AI",headline:"慢變數高壁壘",subheadline:"醫療 AI 賽道",summary:"醫療 AI 集中在<b>影像\u3001藥物發現和臨床文書</b>自動化\u3002",moatStickerLabel:"高壁壘",moatStickerSub:"MOAT",branches:[{name:"影像診斷",en:"Imaging",value:"11",unit:"億",tag:"診斷",note:"FDA 審批 \xB7 高門檻"},{name:"藥物發現",en:"Drug Discovery",value:"14",unit:"億",tag:"研發",note:"驗證週期長 \xB7 強壁壘"},{name:"臨床文書",en:"Clinical Notes",value:"9",unit:"億",tag:"文書",note:"高頻剛需 \xB7 快落地"},{name:"遠端監護",en:"Remote Care",value:"6",unit:"億",tag:"監護",note:"裝置繫結 \xB7 資料沉澱"}],strip:[{k:"賽道融資額",v:"34 億美元"},{k:"事件數",v:"8 筆"},{k:"驗證週期",v:"長"},{k:"進入壁壘",v:"高"}],closingLine:"慢場景不代表低價值\u3002"};Gl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:3,min:0,max:4,step:1,label:"分支數量",desc:"分支卡數量(0\u20134)\uFF1B每卡含一個圖片槽\uFF0C佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showValue",type:"boolean",default:!0,label:"數值",desc:"每張分支卡的大號數值的顯示/隱藏"},{key:"showStrip",type:"boolean",default:!0,label:"資訊條",desc:"底部賽道彙總資訊條的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某張分支卡"},{key:"focusIndex",type:"number",default:1,min:0,max:3,step:1,maxFrom:"cardCount",label:"重點物件",desc:"被突出的分支卡序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var ws=Gl.defaults,Ns=Gl.controls;var Wi={};Y(Wi,{controls:()=>Es,default:()=>Ql,defaults:()=>zs});import dr from"react";import{jsx as ia,jsxs as Ie}from"react/jsx-runtime";function Ql(t){let l={...Ql.defaults,...t},{backgroundTheme:c,mediaCount:k,chartType:d,segmentCount:u,showValueLabels:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,hero:M,segments:F,collage:D,closingLine:q,regulatedStickerLabel:N,regulatedStickerSub:z}=l,L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=F.slice(0,Math.max(3,u)),w=Math.min(g,y.length-1),v=D[k]||[],m=["var(--acl-ink)","var(--acl-blue)","var(--acl-pink)","var(--acl-yellow)"],f=38,n=2*Math.PI*f,s=0,i=y.map((e,o)=>{let r=e.v/100,b={dash:r*n,gap:n-r*n,offset:-s*n,color:m[o%m.length]};return s+=r,b}),a=Math.max(...y.map(e=>e.v));return Ie("div",{className:"acl-root acl-mxs",style:{background:L},children:[ia("style",{children:`
        .acl-mxs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-mxs__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-mxs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-mxs__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-mxs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-mxs__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-mxs__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-mxs__body{ flex:1; display:flex; gap:40px; margin-top:28px; min-height:0; }
        .acl-mxs__panel{ flex:0 0 760px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:28px 38px 26px; display:flex; flex-direction:column; }
        .acl-mxs__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-mxs__chartrow{ flex:1; display:flex; align-items:center; gap:34px; margin-top:18px; min-height:0; }

        /* donut */
        .acl-mxs__donut{ flex:0 0 320px; position:relative; }
        .acl-mxs__donutsvg{ width:320px; height:320px; display:block; }
        .acl-mxs__center{ position:absolute; inset:0; display:flex; flex-direction:column;
          align-items:center; justify-content:center; text-align:center; }
        .acl-mxs__center .cl{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-mxs__center .cv{ font-family:var(--acl-font-num); font-size:88px; line-height:.82; }
        .acl-mxs__center .cu{ font-family:var(--acl-font-cn); font-weight:700; font-size:18px; opacity:.62; }

        /* legend / bars */
        .acl-mxs__legend{ flex:1; display:flex; flex-direction:column; gap:0; min-width:0; }
        .acl-mxs__leg{ display:flex; align-items:center; gap:14px; padding:14px 4px;
          border-bottom:1.5px dashed rgba(22,21,15,.22); transition:.25s; }
        .acl-mxs__leg:last-child{ border-bottom:none; }
        .acl-mxs__swatch{ width:22px; height:22px; border:2.5px solid var(--acl-ink); flex:0 0 auto; }
        .acl-mxs__legname{ flex:1; font-weight:700; font-size:25px; }
        .acl-mxs__legname small{ display:block; font-family:var(--acl-font-mono); font-weight:400;
          font-size:12px; letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.46); margin-top:1px; }
        .acl-mxs__legval{ align-self:stretch; display:inline-flex; align-items:center; justify-content:flex-end;
          font-family:var(--acl-font-num); font-size:46px; line-height:1; }
        .acl-mxs__legval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px; opacity:.55; }
        .acl-mxs__leg--focus{ background:var(--acl-ink); color:var(--acl-paper); margin:0 -12px; padding:14px 12px; border-bottom-color:transparent; }
        .acl-mxs__leg--focus .acl-mxs__legname small{ color:rgba(255,255,255,.5); }
        .acl-mxs__leg--dim{ opacity:.42; }

        /* horizontal bars variant */
        .acl-mxs__bars{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:20px; min-width:0; }
        .acl-mxs__brow{ display:flex; align-items:center; gap:16px; transition:.25s; }
        .acl-mxs__brow .bn{ flex:0 0 132px; font-weight:700; font-size:24px; }
        .acl-mxs__btrack{ flex:1; height:36px; background:rgba(22,21,15,.1); border:2.5px solid var(--acl-ink); position:relative; }
        .acl-mxs__bfill{ position:absolute; inset:0 auto 0 0; border-right:2.5px solid var(--acl-ink); }
        .acl-mxs__bval{ flex:0 0 auto; font-family:var(--acl-font-num); font-size:40px; line-height:.85; }
        .acl-mxs__bval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px; opacity:.55; }
        .acl-mxs__brow--dim{ opacity:.42; }

        /* collage stage */
        .acl-mxs__stage{ flex:1; position:relative; min-width:0; }
        .acl-mxs__slot{ position:absolute; }
        .acl-mxs__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-mxs__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-mxs__panel{ animation:acl-mxs-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-mxs__arc{ animation:acl-mxs-draw 1s ease both; }
          [data-deck-active] .acl-mxs__bfill{ animation:acl-mxs-grow .7s cubic-bezier(.2,.8,.2,1) .3s both; }
        }
        @keyframes acl-mxs-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-mxs-draw{ from{ stroke-dashoffset:var(--c); } }
        @keyframes acl-mxs-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:scaleX(1); } }
      `}),Ie("div",{className:"acl-mxs__head",children:[Ie("div",{children:[ia("div",{className:"acl-mxs__eyebrow",children:C}),ia("h1",{className:"acl-mxs__h",children:P})]}),ia("div",{className:"acl-mxs__sub",children:I}),ia("div",{className:"acl-mxs__summary",dangerouslySetInnerHTML:{__html:A}})]}),Ie("div",{className:"acl-mxs__body",children:[Ie("div",{className:"acl-mxs__panel",children:[Ie("div",{className:"acl-mxs__badge",children:["\u25F7 ",M.badge]}),h&&ia(p,{kind:"spark",size:48,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:26,top:24}}),ia("div",{className:"acl-mxs__chartrow",children:d==="donut"?Ie(dr.Fragment,{children:[Ie("div",{className:"acl-mxs__donut",children:[ia("svg",{className:"acl-mxs__donutsvg",viewBox:"0 0 100 100",children:Ie("g",{transform:"rotate(-90 50 50)",children:[i.map((e,o)=>{let r=x&&o===w,b=x&&!r;return ia("circle",{className:"acl-mxs__arc",cx:"50",cy:"50",r:f,fill:"none",stroke:e.color,strokeWidth:r?20:15,strokeDasharray:`${e.dash} ${e.gap}`,strokeDashoffset:e.offset,opacity:b?.4:1,style:{"--c":e.dash}},o)}),ia("circle",{cx:"50",cy:"50",r:f,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"0.8",opacity:"0.25"})]})}),Ie("div",{className:"acl-mxs__center",children:[ia("div",{className:"cl",children:M.label}),ia("div",{className:"cv",children:M.value}),ia("div",{className:"cu",children:M.unit})]})]}),ia("div",{className:"acl-mxs__legend",children:y.map((e,o)=>{let r=x&&o===w,b=x&&!r;return Ie("div",{className:"acl-mxs__leg"+(r?" acl-mxs__leg--focus":"")+(b?" acl-mxs__leg--dim":""),children:[ia("span",{className:"acl-mxs__swatch",style:{background:m[o%m.length]}}),Ie("div",{className:"acl-mxs__legname",children:[e.k,ia("small",{children:e.en})]}),_&&Ie("div",{className:"acl-mxs__legval",children:[e.v,ia("em",{children:"%"})]})]},o)})})]}):ia("div",{className:"acl-mxs__bars",children:y.map((e,o)=>{let r=x&&o===w;return Ie("div",{className:"acl-mxs__brow"+(x&&!r?" acl-mxs__brow--dim":""),children:[ia("div",{className:"bn",children:e.k}),ia("div",{className:"acl-mxs__btrack",children:ia("div",{className:"acl-mxs__bfill",style:{right:`${100-e.v/a*100}%`,background:r?"var(--acl-pink)":m[o%m.length]}})}),_&&Ie("div",{className:"acl-mxs__bval",children:[e.v,ia("em",{children:"%"})]})]},o)})})})]}),Ie("div",{className:"acl-mxs__stage",children:[v.length===0&&ia("div",{className:"acl-mxs__empty",children:"// 圖片數量 = 0"}),v.map((e,o)=>ia("div",{className:"acl-mxs__slot",style:{left:e.l,top:e.t},children:ia(W,{id:"finance-"+o,box:e.box,rotate:e.r,ratio:e.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:e.label,sub:e.sub,color:e.color,subColor:"var(--acl-ink)",rotate:e.sr}})},o)),h&&v.length>0&&Ie(dr.Fragment,{children:[ia("div",{style:{position:"absolute",right:4,top:8,zIndex:4,transform:"rotate(-6deg)"},children:ia(H,{label:N,sub:z,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:20})}),ia(p,{kind:"arrow",size:88,rotate:118,color:"var(--acl-ink)",style:{left:-6,top:"44%"}}),ia(p,{kind:"spark",size:42,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:36,bottom:130}})]})]})]}),Ie("div",{className:"acl-mxs__foot",children:[h&&ia(p,{kind:"loop",size:56,style:{position:"static"}}),ia("span",{children:q})]})]})}Ql.defaults={images:[],backgroundTheme:"primary",mediaCount:2,chartType:"donut",segmentCount:4,showValueLabels:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Finance AI",headline:"投研\u3001風控與合規",subheadline:"金融 AI 賽道",summary:"金融 AI 聚焦<b>投研\u3001風控\u3001合規</b>和客戶服務\u3002",hero:{badge:"場景佔比 \xB7 Scene Split",label:"賽道融資額",value:"22",unit:"億美元"},regulatedStickerLabel:"強監管",regulatedStickerSub:"REGULATED",segments:[{k:"投研",en:"Research",v:31},{k:"合規",en:"Compliance",v:28},{k:"風控",en:"Risk Control",v:24},{k:"客戶服務",en:"Service",v:17}],collage:{0:[],1:[{l:200,t:70,box:540,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)",label:"金融場景",sub:"DESK"}],2:[{l:16,t:6,box:470,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)",label:"投研場景",sub:"DESK"},{l:440,t:288,box:452,r:4,ratio:.84,sr:3,color:"var(--acl-blue)",label:"風控看板",sub:"RISK"}],3:[{l:250,t:0,box:400,r:3,ratio:.92,sr:-4,color:"var(--acl-yellow)",label:"投研場景",sub:"DESK"},{l:0,t:244,box:366,r:-5,ratio:1.2,sr:4,color:"var(--acl-blue)",label:"風控看板",sub:"RISK"},{l:470,t:400,box:348,r:5,ratio:.82,sr:-3,color:"var(--acl-pink)",label:"合規流程",sub:"COMPLY"}]},closingLine:"高價值行業需要更強可信度\u3002"};Ql.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"chartType",type:"enum",default:"donut",options:["donut","bars"],label:"圖表型別",desc:"佔比圖\uFF1A環形 / 條形"},{key:"segmentCount",type:"number",default:4,min:3,max:4,step:1,label:"分段數量",desc:"場景佔比分段數量(3\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各分段百分比標籤的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個分段(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的分段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var zs=Ql.defaults,Es=Ql.controls;var Xi={};Y(Xi,{controls:()=>Fs,default:()=>Zl,defaults:()=>Cs});import"react";import{jsx as gt,jsxs as Kl}from"react/jsx-runtime";function Zl(t){let l={...Zl.defaults,...t},{backgroundTheme:c,showSupports:k,supportCount:d,showBackdrop:u,showDecor:_,eyebrow:x,kicker:g,label:h,statement:C,backdrop:P,supports:I,source:A,verdictStickerLabel:M}=l,F=c==="ink",D=F?"radial-gradient(120% 130% at 18% 12%, #2A2820 0%, #16150F 62%, #100F0A 100%)":c==="muted"?"linear-gradient(155deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(160deg, #F4F66C 0%, #ECEF35 46%, #E2E62A 100%)",q=I.slice(0,Math.max(0,d));return Kl("div",{className:"acl-root acl-q2"+(F?" acl-q2--ink":""),style:{background:D},children:[gt("style",{children:`
        .acl-q2{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:84px 110px 76px; display:flex; flex-direction:column; }
        .acl-q2--ink{ color:var(--acl-paper); }

        .acl-q2__backdrop{ position:absolute; right:-40px; top:74px; font-family:var(--acl-font-num);
          font-size:330px; line-height:.72; letter-spacing:-.02em; color:var(--acl-ink); opacity:.07;
          transform:rotate(-7deg); pointer-events:none; white-space:nowrap; z-index:0; }
        .acl-q2--ink .acl-q2__backdrop{ color:var(--acl-yellow); opacity:.1; }

        .acl-q2__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; position:relative; z-index:2; }
        .acl-q2__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-q2--ink .acl-q2__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-q2__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-q2__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-q2--ink .acl-q2__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-q2__body{ flex:1; display:flex; gap:56px; align-items:center; position:relative; z-index:1;
          min-height:0; }
        .acl-q2__main{ flex:1; min-width:0; display:flex; flex-direction:column; justify-content:center; }
        .acl-q2__label{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.05em; color:rgba(22,21,15,.55); margin-bottom:26px; display:flex; align-items:center; gap:14px; }
        .acl-q2--ink .acl-q2__label{ color:rgba(251,250,244,.55); }
        .acl-q2__label::before{ content:""; width:52px; height:0; border-top:5px solid var(--acl-pink); }
        .acl-q2__h{ font-weight:900; font-size:100px; line-height:1.28; letter-spacing:-.015em; margin:0;
          max-width:1180px; text-wrap:balance; }
        .acl-q2__h b{ font-weight:900; background:var(--acl-pink); color:var(--acl-paper); padding:0 .08em;
          white-space:nowrap; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
        .acl-q2--ink .acl-q2__h b{ background:var(--acl-pink); color:var(--acl-paper); }
        .acl-q2__h u{ text-decoration:none; background:var(--acl-blue); color:var(--acl-ink); padding:0 .08em;
          white-space:nowrap; box-decoration-break:clone; -webkit-box-decoration-break:clone; }

        .acl-q2__rail{ flex:0 0 412px; display:flex; flex-direction:column; gap:0; align-self:stretch;
          justify-content:center; border-left:4px solid var(--acl-ink); padding-left:34px; }
        .acl-q2--ink .acl-q2__rail{ border-color:var(--acl-yellow); }
        .acl-q2__s{ padding:22px 0; border-bottom:1.5px dashed rgba(22,21,15,.26); display:flex; gap:18px;
          align-items:flex-start; }
        .acl-q2__s:last-child{ border-bottom:none; }
        .acl-q2--ink .acl-q2__s{ border-color:rgba(251,250,244,.22); }
        .acl-q2__sn{ font-family:var(--acl-font-num); font-size:50px; line-height:.8; flex:0 0 auto;
          color:var(--acl-ink); }
        .acl-q2--ink .acl-q2__sn{ color:var(--acl-yellow); }
        .acl-q2__st{ font-weight:700; font-size:24px; line-height:1.4; padding-top:5px; }

        .acl-q2__foot{ display:flex; align-items:center; gap:14px; flex:0 0 auto; position:relative; z-index:2;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em; color:rgba(22,21,15,.55); }
        .acl-q2--ink .acl-q2__foot{ color:rgba(251,250,244,.55); }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-q2__h{ animation:acl-q2-in .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-q2__s{ animation:acl-q2-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .28s); }
        }
        @keyframes acl-q2-in{ from{ opacity:0; transform:translateY(24px); } to{ opacity:1; transform:none; } }
      `}),u&&gt("div",{className:"acl-q2__backdrop","aria-hidden":"true",children:P}),Kl("div",{className:"acl-q2__top",children:[gt("div",{className:"acl-q2__eyebrow",children:x}),gt("div",{className:"acl-q2__rule"}),gt("div",{className:"acl-q2__kicker",children:g})]}),Kl("div",{className:"acl-q2__body",children:[Kl("div",{className:"acl-q2__main",children:[Kl("div",{className:"acl-q2__label",children:[h,_&&gt(p,{kind:"spark",size:34,fill:F?"var(--acl-yellow)":"var(--acl-pink)",stroke:F?"none":"var(--acl-ink)",style:{position:"static"}})]}),gt("h1",{className:"acl-q2__h",dangerouslySetInnerHTML:{__html:C}})]}),k&&q.length>0&&gt("div",{className:"acl-q2__rail",children:q.map((N,z)=>Kl("div",{className:"acl-q2__s",style:{"--i":z},children:[gt("div",{className:"acl-q2__sn",children:String(z+1).padStart(2,"0")}),gt("div",{className:"acl-q2__st",children:N})]},z))})]}),Kl("div",{className:"acl-q2__foot",children:[_&&gt(p,{kind:"loop",size:48,style:{position:"static"}}),gt("span",{children:A}),_&&!F&&gt(H,{label:M,color:"var(--acl-blue)",rotate:-4,style:{marginLeft:"auto"}})]})]})}Zl.defaults={backgroundTheme:"primary",showSupports:!0,supportCount:3,showBackdrop:!0,showDecor:!0,eyebrow:"Developer Tools \xB7 開發者工具賽道",kicker:"金句頁",label:"一句話判斷",statement:"研發效率\uFF0C是企業最直接的 <b>AI 預算入口</b> 之一\u3002",backdrop:"DEV",verdictStickerLabel:"核心判斷",supports:["程式碼補全與評審已成為團隊級剛需\uFF0C付費意願明確\u3002","價值不在炫技 Demo\uFF0C而在嵌入真實研發流水線\u3002","能被工程團隊日常使用的工具\uFF0C才有複利式留存\u3002"],source:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u22651 億美元 \xB7 AI CAPITAL LAB"};Zl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差金句)"},{key:"showSupports",type:"boolean",default:!0,label:"支撐要點",desc:"右側要點列的顯示/隱藏"},{key:"supportCount",type:"number",default:3,min:0,max:3,step:1,showIf:"showSupports",label:"要點數量",desc:"展示的支撐要點數量(0\u20133)"},{key:"showBackdrop",type:"boolean",default:!0,label:"背景大字",desc:"傾斜大號背景裝飾字的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪火花與貼紙標籤的顯示/隱藏"}];var Cs=Zl.defaults,Fs=Zl.controls;var Gi={};Y(Gi,{controls:()=>Is,default:()=>Jl,defaults:()=>Ls});import"react";import{jsx as Na,jsxs as Me}from"react/jsx-runtime";var Ss=t=>{let l=Number.isFinite(t)&&t>0?t:1,c=Math.pow(10,Math.floor(Math.log10(l)));return Math.ceil(l/c)*c>=l*1.08?Math.ceil(l/c)*c:Math.ceil(l*1.12/c)*c};function Jl(t){let l={...Jl.defaults,...t},{backgroundTheme:c,stageCount:k,chartType:d,showValueLabels:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,stages:F,growth:D,growthTitle:q,growthUnit:N,hero:z,metrics:L,closingLine:y,pipelineHeading:w}=l,v=j(D),m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(F).slice(0,Math.max(3,$(k,3))),n=Q(g,0,Math.max(0,f.length-1)),s=j(L).slice(0,Math.max(2,$(_,2))),i=560,a=220,e=v.length,o=i/Pa(e,1),r=Ss(X(v.map(S=>$(S?.v)),1)),b=S=>o*(S+.5),R=S=>a-$(S)/Pa(r,1)*a*.86-a*.06,E=v.map((S,V)=>`${V?"L":"M"}${b(V).toFixed(1)} ${R(S?.v).toFixed(1)}`).join(" "),T=`${E} L${b(Math.max(0,e-1)).toFixed(1)} ${a} L${b(0).toFixed(1)} ${a} Z`,B=Math.min(64,o*.5);return Me("div",{className:"acl-root acl-pp",style:{background:m},children:[Na("style",{children:`
        .acl-pp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-pp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-pp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-pp__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-pp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-pp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-pp__panel{ position:relative; flex:1; margin-top:28px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 40px 30px; display:flex; flex-direction:column; min-height:0; }
        .acl-pp__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}

        /* \u2500\u2500 pipeline \u2500\u2500 */
        .acl-pp__flowhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:20px 0 12px; }
        .acl-pp__pipe{ display:flex; align-items:stretch; }
        .acl-pp__stage{ flex:1; position:relative; background:var(--acl-yellow); border:2.5px solid var(--acl-ink);
          padding:16px 12px 15px 30px; margin-left:-18px; display:flex; flex-direction:column; justify-content:center;
          transition:.25s; clip-path:polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%); }
        .acl-pp__stage:first-child{ margin-left:0; padding-left:18px;
          clip-path:polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%); }
        .acl-pp__stage:last-child{ clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%, 18px 50%); }
        .acl-pp__stage:nth-child(even){ background:var(--acl-paper); }
        .acl-pp__stage .si{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.06em;
          color:rgba(22,21,15,.5); }
        .acl-pp__stage .sn{ font-weight:900; font-size:26px; line-height:1.06; margin-top:3px; }
        .acl-pp__stage .se{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.03em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-pp__stage--focus{ background:var(--acl-pink); color:var(--acl-paper); z-index:3;
          box-shadow:0 8px 20px rgba(22,21,15,.2); }
        .acl-pp__stage--focus .si, .acl-pp__stage--focus .se{ color:rgba(255,255,255,.72); }
        .acl-pp__stage--dim{ opacity:.5; }

        /* \u2500\u2500 lower split: growth chart + metric tiles \u2500\u2500 */
        .acl-pp__lower{ flex:1; display:flex; gap:40px; margin-top:24px; min-height:0; }
        .acl-pp__chart{ flex:1; display:flex; flex-direction:column; min-width:0;
          border-right:2px dashed rgba(22,21,15,.2); padding-right:38px; }
        .acl-pp__chlabel{ display:flex; align-items:baseline; gap:12px; }
        .acl-pp__chlabel .t{ font-weight:700; font-size:24px; }
        .acl-pp__chlabel .d{ font-family:var(--acl-font-num); font-size:46px; line-height:.8; color:var(--acl-ink); }
        .acl-pp__chlabel .d em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:3px; opacity:.6; }
        .acl-pp__plot{ position:relative; flex:1; margin-top:14px; min-height:0; }
        .acl-pp__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-pp__gbar{ position:absolute; bottom:0; background:var(--acl-ink); transition:height .4s; }
        .acl-pp__vlab{ position:absolute; transform:translate(-50%,-100%); font-family:var(--acl-font-num);
          font-size:26px; line-height:1; white-space:nowrap;
          text-shadow:0 0 6px var(--acl-paper),0 0 6px var(--acl-paper),0 0 6px var(--acl-paper); }
        .acl-pp__xax{ display:flex; margin-top:8px; }
        .acl-pp__xt{ flex:1; text-align:center; font-family:var(--acl-font-mono); font-size:14px;
          letter-spacing:.04em; color:rgba(22,21,15,.55); }

        .acl-pp__tiles{ flex:0 0 430px; display:flex; flex-direction:column; gap:14px; }
        .acl-pp__hero{ border:2.5px solid var(--acl-ink); background:var(--acl-ink); color:var(--acl-paper);
          padding:14px 20px 16px; }
        .acl-pp__hero .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(255,255,255,.6); }
        .acl-pp__hero .v{ font-family:var(--acl-font-num); font-size:84px; line-height:.84; margin-top:2px; white-space:nowrap; }
        .acl-pp__hero .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:22px;
          margin-left:6px; opacity:.7; }
        .acl-pp__trow{ display:flex; gap:14px; flex:1; }
        .acl-pp__tile{ flex:1; border:2px solid var(--acl-ink); padding:13px 16px 11px; display:flex;
          flex-direction:column; justify-content:center; }
        .acl-pp__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-pp__tile .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.94; margin-top:3px; }
        .acl-pp__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }

        .acl-pp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pp__panel{ animation:acl-pp-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-pp__stage{ animation:acl-pp-step .4s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .12s); }
          [data-deck-active] .acl-pp__gbar{ animation:acl-pp-grow .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-pp-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-pp-step{ from{ opacity:0; transform:translateX(-14px); } to{ opacity:1; transform:none; } }
        @keyframes acl-pp-grow{ from{ transform:scaleY(0); transform-origin:bottom; } to{ transform:none; } }
      `}),Me("div",{className:"acl-pp__head",children:[Me("div",{children:[Na("div",{className:"acl-pp__eyebrow",children:C}),Na("h1",{className:"acl-pp__h",children:P})]}),Na("div",{className:"acl-pp__sub",children:I}),Na("div",{className:"acl-pp__summary",dangerouslySetInnerHTML:{__html:A}})]}),Me("div",{className:"acl-pp__panel",children:[Me("div",{className:"acl-pp__badge",children:["\u25A4 ",M]}),h&&Na(p,{kind:"spark",size:46,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:28,top:24}}),Na("div",{className:"acl-pp__flowhd",children:w}),Na("div",{className:"acl-pp__pipe",children:f.map((S,V)=>{let O=x&&V===n,U=x&&!O;return Me("div",{className:"acl-pp__stage"+(O?" acl-pp__stage--focus":"")+(U?" acl-pp__stage--dim":""),style:{"--i":V},children:[Na("div",{className:"si",children:String(V+1).padStart(2,"0")}),Na("div",{className:"sn",children:S.t}),Na("div",{className:"se",children:S.s})]},V)})}),Me("div",{className:"acl-pp__lower",children:[Me("div",{className:"acl-pp__chart",children:[Me("div",{className:"acl-pp__chlabel",children:[Na("span",{className:"t",children:q}),Me("span",{className:"d",children:[z.growth,Na("em",{children:N})]})]}),Me("div",{className:"acl-pp__plot",children:[d==="column"&&v.map((S,V)=>Na("div",{className:"acl-pp__gbar",style:{left:`${(b(V)-B/2)/i*100}%`,width:`${B/i*100}%`,height:`${(a-R(S.v))/a*100}%`,background:V===e-1?"var(--acl-pink)":"var(--acl-ink)"}},V)),Me("svg",{className:"acl-pp__svg",viewBox:`0 0 ${i} ${a}`,preserveAspectRatio:"none",children:[d==="area"&&Na("path",{d:T,fill:"var(--acl-pink)",fillOpacity:"0.85"}),(d==="area"||d==="line")&&Na("path",{d:E,fill:"none",stroke:"var(--acl-ink)",strokeWidth:"4",strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"})]}),(d==="line"||d==="area")&&v.map((S,V)=>Na("div",{style:{position:"absolute",left:`${b(V)/i*100}%`,top:`${R(S.v)/a*100}%`,width:13,height:13,borderRadius:"50%",background:"var(--acl-blue)",border:"3px solid var(--acl-ink)",transform:"translate(-50%,-50%)"}},V)),u&&v.map((S,V)=>Na("div",{className:"acl-pp__vlab",style:{left:`${b(V)/i*100}%`,top:`calc(${R(S.v)/a*100}% - 12px)`,color:V===e-1?"var(--acl-pink)":"var(--acl-ink)"},children:S.v},V))]}),Na("div",{className:"acl-pp__xax",children:v.map((S,V)=>Na("div",{className:"acl-pp__xt",children:S.label},V))})]}),Me("div",{className:"acl-pp__tiles",children:[Me("div",{className:"acl-pp__hero",children:[Na("div",{className:"k",children:z.label}),Me("div",{className:"v",children:[z.value,Na("em",{children:z.unit})]})]}),Na("div",{className:"acl-pp__trow",children:s.map((S,V)=>Me("div",{className:"acl-pp__tile",children:[Na("div",{className:"k",children:S.k}),Me("div",{className:"v",children:[S.v,Na("em",{children:S.unit})]})]},V))})]})]})]}),Me("div",{className:"acl-pp__foot",children:[h&&Na(p,{kind:"loop",size:56,style:{position:"static"}}),Na("span",{children:y})]})]})}Jl.defaults={backgroundTheme:"primary",stageCount:5,chartType:"area",showValueLabels:!0,metricCount:3,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Data Infrastructure",headline:"企業 AI 底座",subheadline:"資料基礎設施",summary:"資料基礎設施承接<b>模型訓練\u3001RAG 與知識管理</b>需求\u3002",badge:"Data Infra \xB7 企業 AI 底座",pipelineHeading:"資料流水線 \xB7 Data Pipeline",stages:[{t:"資料接入",s:"Ingest"},{t:"清洗治理",s:"Govern"},{t:"向量索引",s:"Index"},{t:"檢索增強",s:"Retrieve"},{t:"應用交付",s:"Serve"}],growthTitle:"企業客戶增長",growth:[{label:"Q1",v:100},{label:"Q2",v:118},{label:"Q3",v:132},{label:"Q4",v:147}],growthUnit:"指數",hero:{label:"賽道融資額",value:"61",unit:"億美元",growth:"+47"},metrics:[{k:"事件數",v:"12",unit:"筆"},{k:"平均單筆",v:"5.1",unit:"億"},{k:"客戶增長",v:"+47",unit:"%"}],closingLine:"沒有資料底座\uFF0CAI 應用很難穩定落地\u3002"};Jl.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"stageCount",type:"number",default:5,min:3,max:5,step:1,label:"流程階段",desc:"資料流水線的階段數量(3\u20135)"},{key:"chartType",type:"enum",default:"area",options:["column","area","line"],label:"圖表型別",desc:"增長趨勢迷你圖\uFF1A柱狀 / 面積 / 折線"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"增長趨勢圖數值標籤的顯示/隱藏"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主數字旁的支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個流程階段(其餘淡化)"},{key:"focusIndex",type:"number",default:2,min:0,max:4,step:1,maxFrom:"stageCount",label:"重點物件",desc:"被高亮的流程階段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Ls=Jl.defaults,Is=Jl.controls;var Qi={};Y(Qi,{controls:()=>As,default:()=>ao,defaults:()=>Ms});import mr from"react";import{jsx as Ka,jsxs as Ae}from"react/jsx-runtime";function ao(t){let l={...ao.defaults,...t},{backgroundTheme:c,mediaCount:k,layerCount:d,metricCount:u,showArch:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,hero:F,layers:D,metrics:q,collage:N,closingLine:z,reliableStickerLabel:L,reliableStickerSub:y,archHeading:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=D.slice(0,Math.max(3,d)),f=Math.min(g,m.length-1),n=q.slice(0,Math.max(2,u)),s=N[k]||[];return Ae("div",{className:"acl-root acl-ar",style:{background:v},children:[Ka("style",{children:`
        .acl-ar{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-ar__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-ar__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ar__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-ar__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ar__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ar__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ar__body{ flex:1; display:flex; gap:40px; margin-top:28px; min-height:0; }

        /* collage stage (left) */
        .acl-ar__stage{ flex:1; position:relative; min-width:0; }
        .acl-ar__slot{ position:absolute; }
        .acl-ar__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }

        /* spec panel (right) */
        .acl-ar__panel{ flex:0 0 720px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:28px 36px 28px; display:flex; flex-direction:column; }
        .acl-ar__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-ar__herorow{ display:flex; align-items:flex-end; gap:18px; margin-top:18px; }
        .acl-ar__herorow .k{ font-weight:700; font-size:22px; color:rgba(22,21,15,.6); padding-bottom:14px; }
        .acl-ar__herorow .v{ font-family:var(--acl-font-num); font-size:120px; line-height:.78; white-space:nowrap; }
        .acl-ar__herorow .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:24px;
          margin-left:6px; opacity:.62; }

        .acl-ar__archhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:22px 0 10px; }
        .acl-ar__stack{ display:flex; flex-direction:column; gap:8px; flex:1; min-height:0; justify-content:center; }
        .acl-ar__layer{ display:flex; align-items:center; gap:16px; border:2.5px solid var(--acl-ink);
          background:var(--acl-yellow); padding:12px 18px; transition:.25s; position:relative; }
        .acl-ar__layer:nth-child(even){ background:var(--acl-paper); }
        .acl-ar__lidx{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); flex:0 0 auto; }
        .acl-ar__lname{ flex:1; font-weight:900; font-size:27px; line-height:1; }
        .acl-ar__lname small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:11px;
          letter-spacing:.05em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:4px; }
        .acl-ar__lmeta{ font-family:var(--acl-font-num); font-size:34px; line-height:.8; flex:0 0 auto; }
        .acl-ar__lmeta em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:2px; opacity:.55; }
        .acl-ar__layer--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateX(6px);
          box-shadow:-6px 6px 0 rgba(22,21,15,.18); }
        .acl-ar__layer--focus .acl-ar__lidx, .acl-ar__layer--focus .acl-ar__lname small{ color:rgba(255,255,255,.55); }

        .acl-ar__tiles{ display:flex; gap:12px; margin-top:18px; }
        .acl-ar__tile{ flex:1; border:2px solid var(--acl-ink); padding:11px 14px 9px; }
        .acl-ar__tile .k{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-ar__tile .v{ font-family:var(--acl-font-num); font-size:40px; line-height:.96; margin-top:2px; }
        .acl-ar__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:2px; opacity:.6; }

        .acl-ar__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ar__panel{ animation:acl-ar-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-ar__layer{ animation:acl-ar-slide .42s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .12s); }
        }
        @keyframes acl-ar-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-ar-slide{ from{ opacity:0; transform:translateX(16px); } to{ opacity:1; transform:none; } }
      `}),Ae("div",{className:"acl-ar__head",children:[Ae("div",{children:[Ka("div",{className:"acl-ar__eyebrow",children:C}),Ka("h1",{className:"acl-ar__h",children:P})]}),Ka("div",{className:"acl-ar__sub",children:I}),Ka("div",{className:"acl-ar__summary",dangerouslySetInnerHTML:{__html:A}})]}),Ae("div",{className:"acl-ar__body",children:[Ae("div",{className:"acl-ar__stage",children:[s.length===0&&Ka("div",{className:"acl-ar__empty",children:"// 圖片數量 = 0"}),s.map((i,a)=>Ka("div",{className:"acl-ar__slot",style:{left:i.l,top:i.t},children:Ka(W,{id:"arch-"+a,box:i.box,rotate:i.r,ratio:i.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:i.label,sub:i.sub,color:i.color,subColor:"var(--acl-ink)",rotate:i.sr}})},a)),h&&s.length>0&&Ae(mr.Fragment,{children:[Ka("div",{style:{position:"absolute",left:6,top:4,zIndex:4,transform:"rotate(-5deg)"},children:Ka(H,{label:L,sub:y,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:19})}),Ka(p,{kind:"arrow",size:84,rotate:64,color:"var(--acl-ink)",style:{right:-10,top:"46%"}}),Ka(p,{kind:"spark",size:40,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{left:24,bottom:120}})]})]}),Ae("div",{className:"acl-ar__panel",children:[Ae("div",{className:"acl-ar__badge",children:["\u25F0 ",M]}),h&&Ka(p,{kind:"spark",size:44,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:26,top:22}}),Ae("div",{className:"acl-ar__herorow",children:[Ae("span",{className:"v",children:[F.value,Ka("em",{children:F.unit})]}),Ka("span",{className:"k",children:F.label})]}),_&&Ae(mr.Fragment,{children:[Ka("div",{className:"acl-ar__archhd",children:w}),Ka("div",{className:"acl-ar__stack",children:m.map((i,a)=>Ae("div",{className:"acl-ar__layer"+(x&&a===f?" acl-ar__layer--focus":""),style:{"--i":a},children:[Ae("span",{className:"acl-ar__lidx",children:["L",m.length-a]}),Ae("div",{className:"acl-ar__lname",children:[i.t,Ka("small",{children:i.s})]}),Ae("div",{className:"acl-ar__lmeta",children:[i.v,Ka("em",{children:i.unit})]})]},a))})]}),Ka("div",{className:"acl-ar__tiles",children:n.map((i,a)=>Ae("div",{className:"acl-ar__tile",children:[Ka("div",{className:"k",children:i.k}),Ae("div",{className:"v",children:[i.v,Ka("em",{children:i.unit})]})]},a))})]})]}),Ae("div",{className:"acl-ar__foot",children:[h&&Ka(p,{kind:"loop",size:56,style:{position:"static"}}),Ka("span",{children:z})]})]})}ao.defaults={images:[],backgroundTheme:"muted",mediaCount:3,layerCount:5,metricCount:3,showArch:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Vector Database",headline:"RAG 基礎元件",subheadline:"向量資料庫",summary:"向量資料庫從概念熱度進入<b>企業部署競爭</b>階段\u3002",badge:"Vector DB \xB7 RAG 基礎元件",reliableStickerLabel:"企業級可靠性",reliableStickerSub:"RELIABLE",archHeading:"RAG 元件棧 \xB7 Architecture",hero:{label:"賽道融資額",value:"18",unit:"億美元"},layers:[{t:"應用查詢",s:"Query",v:"高頻",unit:""},{t:"嵌入編碼",s:"Embedding",v:"多模",unit:"態"},{t:"向量庫",s:"Vector Store",v:"億級",unit:"維"},{t:"檢索召回",s:"Retrieval",v:"低延",unit:"遲"},{t:"生成增強",s:"Generation",v:"可溯",unit:"源"}],metrics:[{k:"事件數",v:"5",unit:"筆"},{k:"平均單筆",v:"3.6",unit:"億"},{k:"付費客戶",v:"620",unit:"家"}],collage:{0:[],1:[{l:150,t:70,box:540,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)",label:"架構示意",sub:"RAG"}],2:[{l:6,t:8,box:462,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)",label:"檢索流程",sub:"RAG"},{l:400,t:290,box:444,r:4,ratio:.82,sr:3,color:"var(--acl-blue)",label:"向量庫",sub:"STORE"}],3:[{l:226,t:0,box:392,r:3,ratio:.9,sr:-4,color:"var(--acl-yellow)",label:"檢索流程",sub:"RAG"},{l:0,t:240,box:356,r:-5,ratio:1.2,sr:4,color:"var(--acl-blue)",label:"向量庫",sub:"STORE"},{l:430,t:392,box:338,r:5,ratio:.82,sr:-3,color:"var(--acl-pink)",label:"部署看板",sub:"DEPLOY"}],4:[{l:8,t:0,box:332,r:-4,ratio:.92,sr:-4,color:"var(--acl-yellow)",label:"檢索流程",sub:"RAG"},{l:372,t:30,box:314,r:4,ratio:1.2,sr:3,color:"var(--acl-blue)",label:"向量庫",sub:"STORE"},{l:40,t:360,box:320,r:5,ratio:1.16,sr:4,color:"var(--acl-pink)",label:"部署看板",sub:"DEPLOY"},{l:410,t:396,box:318,r:-4,ratio:.82,sr:-3,color:"var(--acl-paper)",label:"整合生態",sub:"INTEG"}]},closingLine:"基礎元件的勝負取決於企業級可靠性\u3002"};ao.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"layerCount",type:"number",default:5,min:3,max:5,step:1,label:"架構層數",desc:"架構棧的層數(3\u20135)"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主數字下方支撐指標格數量(2\u20133)"},{key:"showArch",type:"boolean",default:!0,label:"架構棧",desc:"右側元件架構棧的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一架構層"},{key:"focusIndex",type:"number",default:2,min:0,max:4,step:1,maxFrom:"layerCount",label:"重點物件",desc:"被高亮的架構層序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Ms=ao.defaults,As=ao.controls;var Ki={};Y(Ki,{controls:()=>Rs,default:()=>eo,defaults:()=>Ds});import Ts from"react";import{jsx as Oa,jsxs as ut}from"react/jsx-runtime";function eo(t){let l={...eo.defaults,...t},{backgroundTheme:c,mediaCount:k,chainCount:d,shareCount:u,showChain:_,showValueLabels:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,chain:F,shares:D,collage:q,closingLine:N,scarceStickerLabel:z,scarceStickerSub:L}=l,y=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",w=F.slice(0,Math.max(3,d)),v=Math.min(h,w.length-1),m=D.slice(0,Math.max(2,u)),f=q[k]||[],n=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)"];return ut("div",{className:"acl-root acl-sp",style:{background:y},children:[Oa("style",{children:`
        .acl-sp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-sp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-sp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-sp__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-sp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-sp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-sp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        /* \u2500\u2500 supply-chain ribbon \u2500\u2500 */
        .acl-sp__chain{ display:flex; align-items:stretch; gap:0; margin-top:26px; flex:0 0 auto; }
        .acl-sp__node{ flex:1; position:relative; display:flex; flex-direction:column; justify-content:center;
          background:var(--acl-paper); border:3px solid var(--acl-ink); padding:18px 22px 17px; transition:.25s; }
        .acl-sp__node:not(:last-child){ margin-right:34px; }
        .acl-sp__node:not(:last-child)::after{ content:""; position:absolute; right:-34px; top:50%;
          width:34px; height:0; border-top:3px dashed var(--acl-ink); transform:translateY(-50%); }
        .acl-sp__node:not(:last-child)::before{ content:""; position:absolute; right:-13px; top:50%;
          width:0; height:0; border-left:13px solid var(--acl-ink);
          border-top:9px solid transparent; border-bottom:9px solid transparent; transform:translateY(-50%); z-index:2; }
        .acl-sp__node .ni{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          color:rgba(22,21,15,.5); }
        .acl-sp__node .nn{ font-weight:900; font-size:30px; line-height:1.04; margin-top:4px; }
        .acl-sp__node .ne{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.03em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:4px; }
        .acl-sp__node--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateY(-6px);
          box-shadow:6px 10px 0 rgba(22,21,15,.18); }
        .acl-sp__node--focus .ni, .acl-sp__node--focus .ne{ color:rgba(255,255,255,.6); }
        .acl-sp__node--dim{ opacity:.5; }

        .acl-sp__body{ flex:1; display:flex; gap:34px; margin-top:30px; min-height:0; }

        /* share ring cards (left) */
        .acl-sp__shares{ flex:0 0 520px; display:flex; flex-direction:column; gap:18px; }
        .acl-sp__card{ flex:1; display:flex; align-items:center; gap:26px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:6px 8px 0 rgba(22,21,15,.14); padding:18px 28px; }
        .acl-sp__ring{ flex:0 0 132px; position:relative; }
        .acl-sp__ringsvg{ width:132px; height:132px; display:block; }
        .acl-sp__ringval{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-num); font-size:42px; }
        .acl-sp__ringval em{ font-style:normal; font-size:20px; margin-left:1px; opacity:.6; }
        .acl-sp__cardtxt .cn{ font-weight:900; font-size:34px; line-height:1.04; }
        .acl-sp__cardtxt .ce{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:5px; }
        .acl-sp__cardtxt .cd{ font-weight:700; font-size:18px; line-height:1.35; color:rgba(22,21,15,.62);
          margin-top:8px; max-width:300px; }

        /* collage stage (right) */
        .acl-sp__stage{ flex:1; position:relative; min-width:0; }
        .acl-sp__slot{ position:absolute; }
        .acl-sp__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }

        .acl-sp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-sp__node{ animation:acl-sp-pop .42s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .15s); }
          [data-deck-active] .acl-sp__card{ animation:acl-sp-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--j,0) * .1s + .4s); }
          [data-deck-active] .acl-sp__arc{ animation:acl-sp-draw 1s ease both; }
        }
        @keyframes acl-sp-pop{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
        @keyframes acl-sp-rise{ from{ opacity:0; transform:translateX(-16px); } to{ opacity:1; transform:none; } }
        @keyframes acl-sp-draw{ from{ stroke-dashoffset:var(--c); } }
      `}),ut("div",{className:"acl-sp__head",children:[ut("div",{children:[Oa("div",{className:"acl-sp__eyebrow",children:P}),Oa("h1",{className:"acl-sp__h",children:I})]}),Oa("div",{className:"acl-sp__sub",children:A}),Oa("div",{className:"acl-sp__summary",dangerouslySetInnerHTML:{__html:M}})]}),_&&Oa("div",{className:"acl-sp__chain",children:w.map((s,i)=>{let a=g&&i===v,e=g&&!a;return ut("div",{className:"acl-sp__node"+(a?" acl-sp__node--focus":"")+(e?" acl-sp__node--dim":""),style:{"--i":i},children:[Oa("div",{className:"ni",children:String(i+1).padStart(2,"0")}),Oa("div",{className:"nn",children:s.t}),Oa("div",{className:"ne",children:s.s})]},i)})}),ut("div",{className:"acl-sp__body",children:[Oa("div",{className:"acl-sp__shares",children:m.map((s,i)=>{let e=2*Math.PI*56,o=s.v/100*e,r=n[i%n.length];return ut("div",{className:"acl-sp__card",style:{"--j":i},children:[ut("div",{className:"acl-sp__ring",children:[ut("svg",{className:"acl-sp__ringsvg",viewBox:"0 0 132 132",children:[Oa("circle",{cx:"66",cy:"66",r:56,fill:"none",stroke:"rgba(22,21,15,.12)",strokeWidth:"15"}),Oa("circle",{className:"acl-sp__arc",cx:"66",cy:"66",r:56,fill:"none",stroke:r,strokeWidth:"15",strokeDasharray:`${o} ${e-o}`,strokeDashoffset:"0",strokeLinecap:"butt",transform:"rotate(-90 66 66)",style:{"--c":o}})]}),x&&ut("div",{className:"acl-sp__ringval",children:[s.v,Oa("em",{children:"%"})]})]}),ut("div",{className:"acl-sp__cardtxt",children:[Oa("div",{className:"cn",children:s.k}),Oa("div",{className:"ce",children:s.en}),Oa("div",{className:"cd",children:s.desc})]})]},i)})}),ut("div",{className:"acl-sp__stage",children:[f.length===0&&Oa("div",{className:"acl-sp__empty",children:"// 圖片數量 = 0"}),f.map((s,i)=>Oa("div",{className:"acl-sp__slot",style:{left:s.l,top:s.t},children:Oa(W,{id:"supply-"+i,box:s.box,rotate:s.r,ratio:s.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:s.label,sub:s.sub,color:s.color,subColor:"var(--acl-ink)",rotate:s.sr}})},i)),C&&f.length>0&&ut(Ts.Fragment,{children:[Oa("div",{style:{position:"absolute",right:4,top:0,zIndex:4,transform:"rotate(-6deg)"},children:Oa(H,{label:z,sub:L,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:19})}),Oa(p,{kind:"arrow",size:80,rotate:118,color:"var(--acl-ink)",style:{left:-8,top:"42%"}}),Oa(p,{kind:"spark",size:40,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:30,bottom:110}})]})]})]}),ut("div",{className:"acl-sp__foot",children:[C&&Oa(p,{kind:"loop",size:56,style:{position:"static"}}),Oa("span",{children:N})]})]})}eo.defaults={images:[],backgroundTheme:"primary",mediaCount:2,chainCount:5,shareCount:2,showChain:!0,showValueLabels:!0,focusEnabled:!0,focusIndex:3,showDecor:!0,eyebrow:"Data Labeling",headline:"高品質資料供給",subheadline:"資料標註與合成資料",summary:"高品質訓練與反饋資料\uFF0C仍是模型能力提升的<b>關鍵瓶頸</b>\u3002",scarceStickerLabel:"稀缺資源",scarceStickerSub:"SCARCE",chain:[{t:"資料採集",s:"Collect"},{t:"清洗治理",s:"Clean"},{t:"人工標註",s:"Label"},{t:"合成資料",s:"Synthetic"},{t:"反饋迴流",s:"Feedback"}],shares:[{k:"合成資料",en:"Synthetic Data",v:42,desc:"規模化\u3001低成本擴充訓練樣本\u3002"},{k:"人類反饋資料",en:"Human Feedback",v:35,desc:"RLHF 對齊與品質校準的核心來源\u3002"},{k:"第三方採購",en:"Third-party",v:23,desc:"行業語料與許可資料補充\u3002"}],collage:{0:[],1:[{l:270,t:24,box:440,r:-3,ratio:1.3,sr:-4,color:"var(--acl-yellow)",label:"標註場景",sub:"LABEL"}],2:[{l:24,t:0,box:386,r:-4,ratio:1.22,sr:-4,color:"var(--acl-yellow)",label:"標註場景",sub:"LABEL"},{l:520,t:128,box:380,r:4,ratio:.86,sr:3,color:"var(--acl-blue)",label:"合成流水",sub:"SYNTH"}],3:[{l:270,t:0,box:338,r:3,ratio:.94,sr:-4,color:"var(--acl-yellow)",label:"標註場景",sub:"LABEL"},{l:0,t:164,box:306,r:-5,ratio:1.22,sr:4,color:"var(--acl-blue)",label:"合成流水",sub:"SYNTH"},{l:610,t:182,box:306,r:5,ratio:.84,sr:-3,color:"var(--acl-pink)",label:"反饋迴流",sub:"RLHF"}]},closingLine:"資料越稀缺\uFF0C資料基礎設施越有價值\u3002"};eo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"chainCount",type:"number",default:5,min:3,max:5,step:1,label:"供應鏈節點",desc:"資料供應鏈的節點數量(3\u20135)"},{key:"shareCount",type:"number",default:2,min:2,max:3,step:1,label:"佔比卡數量",desc:"佔比環卡數量(2\u20133)"},{key:"showChain",type:"boolean",default:!0,label:"供應鏈",desc:"頂部資料供應鏈的顯示/隱藏"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"佔比環卡中心百分比的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個供應鏈節點(其餘淡化)"},{key:"focusIndex",type:"number",default:3,min:0,max:4,step:1,maxFrom:"chainCount",label:"重點物件",desc:"被高亮的供應鏈節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Ds=eo.defaults,Rs=eo.controls;var Zi={};Y(Zi,{controls:()=>Ps,default:()=>to,defaults:()=>qs});import"react";import{jsx as da,jsxs as se}from"react/jsx-runtime";function to(t){let l={...to.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,showValueLabels:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,hero:F,metrics:D,utilization:q,gridCols:N,gridRows:z,segments:L,closingLine:y,capacityHeading:w,utilizationHeading:v,gridLegendLabels:m}=l,f=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",n=j(L),s=Math.max(3,Math.min(n.length,Number(d)||3)),i=n.slice(0,s),a=Math.max(0,Math.min(Number(g)||0,i.length-1)),e=j(D).slice(0,Math.max(2,$(_,2))),o=X(i.map(R=>$(R?.v)),1),r=N*z,b=Math.round(q/100*r);return se("div",{className:"acl-root acl-gp",style:{background:f},children:[da("style",{children:`
        .acl-gp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-gp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-gp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-gp__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-gp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-gp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-gp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-gp__body{ flex:1; display:flex; gap:44px; margin-top:30px; min-height:0; }

        /* \u2500\u2500 left: segment stat panel \u2500\u2500 */
        .acl-gp__panel{ flex:0 0 700px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:28px 38px 30px; display:flex; flex-direction:column; }
        .acl-gp__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-gp__herolabel{ font-weight:700; font-size:22px; color:rgba(22,21,15,.6); margin-top:18px;
          display:flex; align-items:center; gap:14px; }
        .acl-gp__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-pink); color:var(--acl-paper); }
        .acl-gp__heronum{ font-family:var(--acl-font-num); font-size:150px; line-height:.82; margin-top:2px; }
        .acl-gp__tiles{ display:flex; gap:14px; margin-top:16px; }
        .acl-gp__tile{ flex:1; border:2px solid var(--acl-ink); padding:12px 16px 10px; }
        .acl-gp__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gp__tile .v{ font-family:var(--acl-font-num); font-size:42px; line-height:.96; margin-top:3px; }
        .acl-gp__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        .acl-gp__caphd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:22px 0 12px; }
        .acl-gp__caps{ display:flex; flex-direction:column; gap:10px; flex:1; justify-content:center; min-height:0; }
        .acl-gp__cap{ display:grid; grid-template-columns:minmax(128px, 172px) minmax(150px, 1fr) minmax(72px, auto);
          align-items:center; gap:13px; min-height:56px; padding:8px 10px; border:2px solid transparent;
          transition:.25s; }
        .acl-gp__cap .cn{ min-width:0; font-weight:900; font-size:22px;
          line-height:1.08; overflow-wrap:anywhere; word-break:break-word; }
        .acl-gp__cap .cn small{ display:block; font-family:var(--acl-font-mono); font-weight:400;
          font-size:11px; letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-gp__track{ height:26px; background:rgba(22,21,15,.1); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-gp__fill{ position:absolute; inset:0 auto 0 0; background:var(--acl-blue);
          border-right:2px solid var(--acl-ink); }
        .acl-gp__cap .cv{ font-family:var(--acl-font-num); font-size:34px; line-height:.8; white-space:nowrap;
          min-width:96px; text-align:right; }
        .acl-gp__cap .cv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; opacity:.6; }
        .acl-gp__cap--focus{ background:var(--acl-ink); color:var(--acl-paper); border-color:var(--acl-ink);
          box-shadow:4px 5px 0 rgba(22,21,15,.14); }
        .acl-gp__cap--focus .cn{ color:var(--acl-paper); }
        .acl-gp__cap--focus .cn small{ color:rgba(255,255,255,.58); }
        .acl-gp__cap--focus .acl-gp__track{ background:rgba(255,255,255,.14); border-color:rgba(255,255,255,.55); }
        .acl-gp__cap--focus .acl-gp__fill{ background:var(--acl-pink); border-right-color:var(--acl-paper); }
        .acl-gp__cap--focus .cv em{ color:rgba(255,255,255,.64); opacity:1; }
        .acl-gp__cap--dim{ opacity:.48; }

        /* \u2500\u2500 right: occupancy grid card \u2500\u2500 */
        .acl-gp__chart{ flex:1; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 38px 30px; display:flex; flex-direction:column; min-width:0; }
        .acl-gp__charthd{ display:flex; align-items:baseline; justify-content:space-between; gap:16px; }
        .acl-gp__chartt{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.55); }
        .acl-gp__util{ font-family:var(--acl-font-num); font-size:78px; line-height:.8; color:var(--acl-yellow); }
        .acl-gp__util em{ font-style:normal; font-size:34px; margin-left:2px; }
        .acl-gp__grid{ flex:1; margin-top:22px; display:grid; gap:9px; min-height:0;
          grid-template-columns:repeat(${N}, 1fr); grid-template-rows:repeat(${z}, 1fr); }
        .acl-gp__cell{ border:2px solid rgba(255,255,255,.22); background:rgba(255,255,255,.06);
          position:relative; }
        .acl-gp__cell--on{ background:var(--acl-yellow); border-color:var(--acl-yellow); }
        .acl-gp__cell--edge{ background:var(--acl-pink); border-color:var(--acl-pink); }
        .acl-gp__barwrap{ flex:1; margin-top:22px; display:flex; flex-direction:column; justify-content:center;
          gap:16px; min-height:0; }
        .acl-gp__brow{ display:flex; align-items:center; gap:16px; }
        .acl-gp__brow .bn{ flex:0 0 150px; font-weight:900; font-size:22px; }
        .acl-gp__btrack{ flex:1; height:32px; background:rgba(255,255,255,.1);
          border:2px solid rgba(255,255,255,.4); position:relative; }
        .acl-gp__bfill{ position:absolute; inset:0 auto 0 0; background:var(--acl-yellow); }
        .acl-gp__legend{ display:flex; gap:24px; margin-top:18px; font-family:var(--acl-font-mono);
          font-size:13px; letter-spacing:.05em; text-transform:uppercase; color:rgba(255,255,255,.6); }
        .acl-gp__lg{ display:flex; align-items:center; gap:8px; }
        .acl-gp__sw{ width:16px; height:16px; border:2px solid rgba(255,255,255,.6); }

        .acl-gp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gp__panel,[data-deck-active] .acl-gp__chart{
            animation:acl-gp-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-gp__chart{ animation-delay:.08s; }
          [data-deck-active] .acl-gp__cell{ animation:acl-gp-pop .4s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .012s + .25s); }
          [data-deck-active] .acl-gp__fill,[data-deck-active] .acl-gp__bfill{
            animation:acl-gp-grow .7s cubic-bezier(.2,.8,.2,1) .35s both; }
        }
        @keyframes acl-gp-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-gp-pop{ from{ opacity:0; transform:scale(.5); } to{ opacity:1; transform:none; } }
        @keyframes acl-gp-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:none; } }
      `}),se("div",{className:"acl-gp__head",children:[se("div",{children:[da("div",{className:"acl-gp__eyebrow",children:C}),da("h1",{className:"acl-gp__h",children:P})]}),da("div",{className:"acl-gp__sub",children:I}),da("div",{className:"acl-gp__summary",dangerouslySetInnerHTML:{__html:A}})]}),se("div",{className:"acl-gp__body",children:[se("div",{className:"acl-gp__panel",children:[se("div",{className:"acl-gp__badge",children:["\u25A6 ",M]}),h&&da(p,{kind:"spark",size:48,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:28,top:22}}),se("div",{className:"acl-gp__herolabel",children:[F.label,da("i",{className:"acl-gp__unit",children:F.unit})]}),da("div",{className:"acl-gp__heronum",children:F.value}),da("div",{className:"acl-gp__tiles",children:e.map((R,E)=>se("div",{className:"acl-gp__tile",children:[da("div",{className:"k",children:R.k}),se("div",{className:"v",children:[R.v,da("em",{children:R.unit})]})]},E))}),da("div",{className:"acl-gp__caphd",children:w}),da("div",{className:"acl-gp__caps",children:i.map((R,E)=>{let T=x&&E===a,B=x&&!T;return se("div",{className:"acl-gp__cap"+(T?" acl-gp__cap--focus":"")+(B?" acl-gp__cap--dim":""),children:[se("div",{className:"cn",children:[R.k,da("small",{children:R.en})]}),da("div",{className:"acl-gp__track",children:da("div",{className:"acl-gp__fill",style:{right:`${100-G($(R?.v),o)*100}%`}})}),u&&se("div",{className:"cv",children:[$(R?.v),da("em",{children:"%"})]})]},E)})})]}),se("div",{className:"acl-gp__chart",children:[se("div",{className:"acl-gp__charthd",children:[da("div",{className:"acl-gp__chartt",children:v}),se("div",{className:"acl-gp__util",children:[q,da("em",{children:"%"})]})]}),k==="grid"?da("div",{className:"acl-gp__grid",children:Array.from({length:r}).map((R,E)=>{let T=E<b,B=T&&E>=b-N;return da("div",{style:{"--i":E},className:"acl-gp__cell"+(T?B?" acl-gp__cell--edge":" acl-gp__cell--on":"")},E)})}):da("div",{className:"acl-gp__barwrap",children:i.map((R,E)=>{let T=x&&E===a;return se("div",{className:"acl-gp__brow",style:{opacity:x&&!T?.5:1},children:[da("div",{className:"bn",children:R.k}),da("div",{className:"acl-gp__btrack",children:da("div",{className:"acl-gp__bfill",style:{width:`${G($(R?.v),o)*100}%`,background:T?"var(--acl-pink)":"var(--acl-yellow)"}})}),u&&se("div",{style:{fontFamily:"var(--acl-font-num)",fontSize:34,minWidth:70},children:[$(R?.v),"%"]})]},E)})}),k==="grid"&&se("div",{className:"acl-gp__legend",children:[se("div",{className:"acl-gp__lg",children:[da("span",{className:"acl-gp__sw",style:{background:"var(--acl-yellow)",borderColor:"var(--acl-yellow)"}}),m?.[0]]}),se("div",{className:"acl-gp__lg",children:[da("span",{className:"acl-gp__sw",style:{background:"var(--acl-pink)",borderColor:"var(--acl-pink)"}}),m?.[1]]}),se("div",{className:"acl-gp__lg",children:[da("span",{className:"acl-gp__sw"}),m?.[2]]})]})]})]}),se("div",{className:"acl-gp__foot",children:[h&&da(p,{kind:"loop",size:56,style:{position:"static"}}),da("span",{children:y})]})]})}to.defaults={backgroundTheme:"primary",chartType:"grid",segmentCount:4,showValueLabels:!0,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"GPU Cloud",headline:"算力供給稀缺",subheadline:"GPU 雲與算力租賃",summary:"GPU 雲公司受益於<b>訓練與推理雙重需求</b>\uFF0C供給持續偏緊\u3002",badge:"GPU Cloud \xB7 算力租賃",capacityHeading:"資源佔比 \xB7 Capacity Split",utilizationHeading:"叢集佔用 \xB7 Cluster Utilization",gridLegendLabels:["已分配算力","新增需求","閒置 / 待擴容"],hero:{label:"賽道融資額",value:"64",unit:"億美元"},metrics:[{k:"事件數",v:"9",unit:"筆"},{k:"平均單筆",v:"7.1",unit:"億"},{k:"資源佔比",v:"58",unit:"%"}],utilization:58,gridCols:12,gridRows:7,segments:[{k:"H100 / H200",en:"Hopper",v:58},{k:"A100 叢集",en:"Ampere",v:24},{k:"推理加速卡",en:"Inference",v:12},{k:"其他 / 自研",en:"Others",v:6},{k:"邊緣算力",en:"Edge",v:4}],closingLine:"算力是 AI 時代最直接的硬資源\u3002"};to.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"grid",options:["grid","bars"],label:"圖表型別",desc:"佔用呈現\uFF1A算力網格 / 資源條形"},{key:"segmentCount",type:"number",default:4,min:3,max:5,step:1,label:"資源分組",desc:"資源佔比分段數量(3\u20135)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"資源佔比百分比標籤的顯示/隱藏"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主數字旁的支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個資源分組(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:4,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的資源分組序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var qs=to.defaults,Ps=to.controls;var Ji={};Y(Ji,{controls:()=>Bs,default:()=>lo,defaults:()=>$s});import"react";import{jsx as Aa,jsxs as It}from"react/jsx-runtime";function lo(t){let l={...lo.defaults,...t},{backgroundTheme:c,rowCount:k,showBars:d,showRepCol:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,kpis:A,columnLabels:M,rows:F,valueUnit:D,closingLine:q,focusStickerLabel:N}=l,z=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=j(F).slice(0,Math.max(2,$(k,2))),y=Q(x,0,Math.max(0,L.length-1)),w=X(L.map(m=>$(m?.v)),1),v=`78px 1.2fr 360px${d?" 1.1fr":""}${u?" 1fr":""}`;return It("div",{className:"acl-root acl-ct",style:{background:z},children:[Aa("style",{children:`
        .acl-ct{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 70px; display:flex; flex-direction:column; }
        .acl-ct__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-ct__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ct__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-ct__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ct__summary{ margin-left:auto; max-width:520px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ct__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ct__kpis{ display:flex; gap:0; margin-top:24px; border:3px solid var(--acl-ink);
          background:var(--acl-ink); }
        .acl-ct__kpi{ flex:1; background:var(--acl-paper); padding:13px 22px; display:flex;
          flex-direction:column; gap:2px; }
        .acl-ct__kpi + .acl-ct__kpi{ border-left:3px solid var(--acl-ink); }
        .acl-ct__kpi .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-ct__kpi .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.95; }
        .acl-ct__kpi .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:4px; opacity:.6; }
        .acl-ct__kpi--accent{ background:var(--acl-yellow); }

        .acl-ct__panel{ position:relative; flex:1; margin-top:22px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:8px 40px 16px; display:flex; flex-direction:column; min-height:0; }
        .acl-ct__colhead{ display:grid; grid-template-columns:${v}; align-items:end; gap:26px;
          padding:16px 8px 12px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:15px; letter-spacing:.07em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ct__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-ct__row{ flex:1; display:grid; grid-template-columns:${v}; align-items:center; gap:26px;
          padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.22); position:relative; transition:background .25s; }
        .acl-ct__row:last-child{ border-bottom:none; }
        .acl-ct__idx{ font-family:var(--acl-font-num); font-size:58px; line-height:.8; color:rgba(22,21,15,.26); }
        .acl-ct__tier{ display:flex; flex-direction:column; gap:3px; }
        .acl-ct__tier b{ font-weight:900; font-size:38px; line-height:1; }
        .acl-ct__tier span{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.46); }
        .acl-ct__amt{ font-family:var(--acl-font-num); font-size:62px; line-height:.78; white-space:nowrap; }
        .acl-ct__amt em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:19px;
          margin-left:5px; opacity:.6; }
        .acl-ct__bar{ height:24px; background:rgba(22,21,15,.1); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-ct__barfill{ position:absolute; inset:0 auto 0 0; background:var(--acl-blue);
          border-right:2px solid var(--acl-ink); }
        .acl-ct__rep{ font-weight:700; font-size:22px; line-height:1.3; }
        .acl-ct__rep small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:13px;
          letter-spacing:.03em; color:rgba(22,21,15,.5); margin-top:3px; text-transform:uppercase; }
        .acl-ct__row--focus{ background:var(--acl-yellow);
          box-shadow:6px 0 0 var(--acl-yellow), -6px 0 0 var(--acl-yellow); border-bottom-color:transparent; z-index:2; }
        .acl-ct__row--focus .acl-ct__idx{ color:var(--acl-ink); }
        .acl-ct__row--focus .acl-ct__bar{ background:rgba(22,21,15,.16); }
        .acl-ct__row--focus .acl-ct__barfill{ background:var(--acl-pink); }
        .acl-ct__fx{ position:absolute; top:-14px; right:30px; z-index:5; }
        .acl-ct__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ct__row{ animation:acl-ct-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .1s); }
          [data-deck-active] .acl-ct__barfill{ animation:acl-ct-grow .7s cubic-bezier(.2,.8,.2,1) .4s both; }
        }
        @keyframes acl-ct-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
        @keyframes acl-ct-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:scaleX(1); } }
      `}),It("div",{className:"acl-ct__head",children:[It("div",{children:[Aa("div",{className:"acl-ct__eyebrow",children:h}),Aa("h1",{className:"acl-ct__h",children:C})]}),Aa("div",{className:"acl-ct__sub",children:P}),g&&Aa(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),Aa("div",{className:"acl-ct__summary",dangerouslySetInnerHTML:{__html:I}})]}),Aa("div",{className:"acl-ct__kpis",children:A.map((m,f)=>It("div",{className:"acl-ct__kpi"+(f===0?" acl-ct__kpi--accent":""),children:[Aa("div",{className:"k",children:m.k}),It("div",{className:"v",children:[m.v,Aa("em",{children:m.unit})]})]},f))}),It("div",{className:"acl-ct__panel",children:[It("div",{className:"acl-ct__colhead",children:[Aa("span",{children:"#"}),Aa("span",{children:M[0]}),Aa("span",{children:M[1]}),d&&Aa("span",{children:M[2]}),u&&Aa("span",{children:M[3]})]}),Aa("div",{className:"acl-ct__rows",children:L.map((m,f)=>{let n=_&&f===y;return It("div",{className:"acl-ct__row"+(n?" acl-ct__row--focus":""),style:{"--i":f},children:[n&&g&&Aa("div",{className:"acl-ct__fx",children:Aa(H,{label:N,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6})}),Aa("div",{className:"acl-ct__idx",children:String(f+1).padStart(2,"0")}),It("div",{className:"acl-ct__tier",children:[Aa("b",{children:m.tier}),Aa("span",{children:m.en})]}),It("div",{className:"acl-ct__amt",children:[$(m?.v),Aa("em",{children:D})]}),d&&Aa("div",{className:"acl-ct__bar",children:Aa("div",{className:"acl-ct__barfill",style:{right:`${100-G($(m?.v),w)*100}%`,background:n?"var(--acl-pink)":"var(--acl-blue)"}})}),u&&It("div",{className:"acl-ct__rep",children:[m.rep,Aa("small",{children:m.repEn})]})]},f)})})]}),It("div",{className:"acl-ct__foot",children:[g&&Aa(p,{kind:"loop",size:56,style:{position:"static"}}),Aa("span",{children:q})]})]})}lo.defaults={backgroundTheme:"muted",rowCount:3,showBars:!0,showRepCol:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"AI Chips",headline:"訓練與推理硬體",subheadline:"AI 晶片賽道",summary:"AI 晶片融資集中在<b>訓練加速器\u3001推理晶片與邊緣 AI</b>\u3002",kpis:[{k:"賽道融資額",v:"97",unit:"億"},{k:"事件數",v:"13",unit:"筆"},{k:"平均單筆",v:"7.5",unit:"億"},{k:"訓練晶片佔比",v:"47",unit:"%"}],columnLabels:["晶片層級","融資額","資金佔比","代表方向"],valueUnit:"億",rows:[{tier:"訓練晶片",en:"Training Accelerator",v:46,rep:"大規模訓練加速器",repEn:"Accelerator"},{tier:"推理晶片",en:"Inference Chip",v:32,rep:"低延遲推理 / 能效",repEn:"Inference"},{tier:"邊緣 AI",en:"Edge AI",v:19,rep:"端側 / 嵌入式算力",repEn:"Edge"},{tier:"晶片互聯",en:"Interconnect",v:11,rep:"高速互聯 / 封裝",repEn:"Interconnect"}],closingLine:"硬體方向看長期確定性\u3002",focusStickerLabel:"長期確定性"};lo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:3,min:2,max:4,step:1,label:"行數",desc:"展示的晶片層級行數(2\u20134)"},{key:"showBars",type:"boolean",default:!0,label:"佔比條",desc:"資金佔比列橫向比例條的顯示/隱藏"},{key:"showRepCol",type:"boolean",default:!0,label:"方向列",desc:"\u300C代表方向\u300D列的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var $s=lo.defaults,Bs=lo.controls;var an={};Y(an,{controls:()=>Hs,default:()=>oo,defaults:()=>Vs});import fr from"react";import{jsx as ta,jsxs as pe}from"react/jsx-runtime";function oo(t){let l={...oo.defaults,...t},{backgroundTheme:c,mediaCount:k,splitStyle:d,segmentCount:u,showValueLabels:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,badge:F,hero:D,metrics:q,splitTitle:N,segments:z,valueUnit:L,collage:y,closingLine:w,embodiedStickerLabel:v,embodiedStickerSub:m,splitSuffix:f}=l,n=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",s=j(q).slice(0,Math.max(2,$(x,2))),i=j(z).slice(0,Math.max(2,$(u,2))),a=Math.max(0,Math.min(Number(h)||0,i.length-1)),e=y&&y[k]||[],o=i.reduce((E,T)=>E+$(T?.v),0),r=X(i.map(E=>$(E?.v)),1),b=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-yellow)"],R=(E,T)=>T?"var(--acl-pink)":b[(E+1)%b.length];return pe("div",{className:"acl-root acl-em",style:{background:n},children:[ta("style",{children:`
        .acl-em{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 64px; display:flex; flex-direction:column; }
        .acl-em__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-em__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-em__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-em__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-em__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-em__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-em__body{ flex:1; display:flex; gap:40px; margin-top:26px; min-height:0; }
        .acl-em__panel{ flex:0 0 640px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 38px 28px; display:flex; flex-direction:column; }
        .acl-em__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-em__herolabel{ font-weight:700; font-size:22px; color:rgba(22,21,15,.6); margin-top:18px;
          display:flex; align-items:center; gap:14px; }
        .acl-em__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-pink); color:var(--acl-paper); }
        .acl-em__heronum{ font-family:var(--acl-font-num); font-size:172px; line-height:.8; margin-top:2px; }
        .acl-em__tiles{ display:flex; gap:14px; margin-top:auto; }
        .acl-em__tile{ flex:1; border:2px solid var(--acl-ink); padding:13px 16px 11px; }
        .acl-em__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-em__tile .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.96; margin-top:3px; }
        .acl-em__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }

        /* collage stage */
        .acl-em__stage{ flex:1; position:relative; min-width:0; }
        .acl-em__slot{ position:absolute; }
        .acl-em__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }

        /* \u2500\u2500 application-split strip \u2500\u2500 */
        .acl-em__split{ flex:0 0 auto; margin-top:22px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:6px 8px 0 rgba(22,21,15,.14); padding:16px 30px 18px; }
        .acl-em__splithd{ display:flex; align-items:baseline; justify-content:space-between; gap:14px; }
        .acl-em__splitt{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); }
        .acl-em__splittot{ font-family:var(--acl-font-num); font-size:30px; }
        .acl-em__splittot em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }
        /* stacked variant */
        .acl-em__stack{ display:flex; height:54px; border:2px solid var(--acl-ink); margin-top:12px; overflow:hidden; }
        .acl-em__seg{ display:flex; align-items:center; justify-content:center; border-right:2px solid var(--acl-ink);
          font-weight:900; font-size:22px; color:var(--acl-paper); transition:.25s; min-width:0; }
        .acl-em__seg:last-child{ border-right:none; }
        .acl-em__keys{ display:flex; gap:24px; margin-top:12px; flex-wrap:wrap; }
        .acl-em__key{ display:flex; align-items:center; gap:9px; transition:.25s; }
        .acl-em__sw{ width:18px; height:18px; border:2px solid var(--acl-ink); flex:0 0 auto; }
        .acl-em__key .kn{ font-weight:900; font-size:21px; }
        .acl-em__key .kv{ font-family:var(--acl-font-num); font-size:24px; margin-left:2px; }
        .acl-em__key .kv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:13px;
          margin-left:2px; opacity:.6; }
        .acl-em__key--dim{ opacity:.4; }
        /* horizontal bars variant */
        .acl-em__bars{ display:flex; flex-direction:column; gap:12px; margin-top:12px; height:126px;
          justify-content:center; }
        .acl-em__bcol{ display:grid; grid-template-columns:minmax(126px, 174px) minmax(0,1fr) minmax(62px,auto);
          align-items:center; gap:14px; min-height:30px; transition:.25s; }
        .acl-em__btrack{ height:28px; background:rgba(22,21,15,.1); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-em__bbar{ position:absolute; inset:0 auto 0 0; border-right:2px solid var(--acl-ink); }
        .acl-em__bval{ font-family:var(--acl-font-num); font-size:28px; line-height:1; text-align:right; }
        .acl-em__bname{ min-width:0; font-weight:900; font-size:19px; text-align:left; line-height:1.05; }
        .acl-em__bname small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:11px;
          letter-spacing:.03em; text-transform:uppercase; color:rgba(22,21,15,.5); }

        .acl-em__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-em__panel{ animation:acl-em-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-em__split{ animation:acl-em-rise .55s cubic-bezier(.2,.8,.2,1) .15s both; }
          [data-deck-active] .acl-em__seg{ animation:acl-em-wipe .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); transform-origin:left; }
          [data-deck-active] .acl-em__bbar{ animation:acl-em-grow .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); transform-origin:left; }
        }
        @keyframes acl-em-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-em-wipe{ from{ transform:scaleX(0); } to{ transform:none; } }
        @keyframes acl-em-grow{ from{ transform:scaleX(0); } to{ transform:none; } }
      `}),pe("div",{className:"acl-em__head",children:[pe("div",{children:[ta("div",{className:"acl-em__eyebrow",children:P}),ta("h1",{className:"acl-em__h",children:I})]}),ta("div",{className:"acl-em__sub",children:A}),ta("div",{className:"acl-em__summary",dangerouslySetInnerHTML:{__html:M}})]}),pe("div",{className:"acl-em__body",children:[pe("div",{className:"acl-em__panel",children:[pe("div",{className:"acl-em__badge",children:["\u2B21 ",F]}),C&&ta(p,{kind:"spark",size:48,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:26,top:22}}),pe("div",{className:"acl-em__herolabel",children:[D.label,ta("i",{className:"acl-em__unit",children:D.unit})]}),ta("div",{className:"acl-em__heronum",children:D.value}),ta("div",{className:"acl-em__tiles",children:s.map((E,T)=>pe("div",{className:"acl-em__tile",children:[ta("div",{className:"k",children:E.k}),pe("div",{className:"v",children:[E.v,ta("em",{children:E.unit})]})]},T))})]}),pe("div",{className:"acl-em__stage",children:[e.length===0&&ta("div",{className:"acl-em__empty",children:"// 圖片數量 = 0"}),e.map((E,T)=>ta("div",{className:"acl-em__slot",style:{left:E.l,top:E.t},children:ta(W,{id:"embodied-"+T,box:E.box,rotate:E.r,ratio:E.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:E.label,sub:E.sub,color:E.color,subColor:"var(--acl-ink)",rotate:E.sr}})},T)),C&&pe(fr.Fragment,{children:[ta("div",{style:{position:"absolute",right:4,top:4,zIndex:4,transform:"rotate(-6deg)"},children:ta(H,{label:v,sub:m,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:0,size:19})}),ta(p,{kind:"arrow",size:82,rotate:118,color:"var(--acl-ink)",style:{left:-8,top:"40%"}}),ta(p,{kind:"spark",size:40,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:24,bottom:40}})]})]})]}),pe("div",{className:"acl-em__split",children:[pe("div",{className:"acl-em__splithd",children:[pe("div",{className:"acl-em__splitt",children:[N," ",f]}),pe("div",{className:"acl-em__splittot",children:[o,ta("em",{children:L})]})]}),d==="stack"?pe(fr.Fragment,{children:[ta("div",{className:"acl-em__stack",children:i.map((E,T)=>{let B=g&&T===a;return ta("div",{className:"acl-em__seg",style:{"--i":T,flex:$(E?.v),background:R(T,B),color:R(T,B)==="var(--acl-yellow)"?"var(--acl-ink)":"var(--acl-paper)",opacity:g&&!B?.55:1},children:_&&Math.round(G($(E?.v),o)*100)+"%"},T)})}),ta("div",{className:"acl-em__keys",children:i.map((E,T)=>{let B=g&&T===a;return pe("div",{className:"acl-em__key"+(g&&!B?" acl-em__key--dim":""),children:[ta("span",{className:"acl-em__sw",style:{background:R(T,B)}}),ta("span",{className:"kn",children:E.k}),_&&pe("span",{className:"kv",children:[$(E?.v),ta("em",{children:L})]})]},T)})})]}):ta("div",{className:"acl-em__bars",children:i.map((E,T)=>{let B=g&&T===a;return pe("div",{className:"acl-em__bcol",style:{opacity:g&&!B?.5:1},children:[pe("div",{className:"acl-em__bname",children:[E.k,ta("small",{children:E.en})]}),ta("div",{className:"acl-em__btrack",children:ta("div",{className:"acl-em__bbar",style:{"--i":T,width:`${G($(E?.v),r)*100}%`,background:R(T,B)}})}),_&&pe("div",{className:"acl-em__bval",children:[$(E?.v),ta("span",{style:{fontSize:14},children:L})]})]},T)})})]}),pe("div",{className:"acl-em__foot",children:[C&&ta(p,{kind:"loop",size:56,style:{position:"static"}}),ta("span",{children:w})]})]})}oo.defaults={images:[],backgroundTheme:"muted",mediaCount:2,splitStyle:"stack",segmentCount:3,showValueLabels:!0,metricCount:2,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Embodied AI",headline:"從軟體走向物理世界",subheadline:"機器人與具身智慧",summary:"具身智慧是 AI 從軟體能力延伸到<b>物理場景</b>的重要方向\u3002",badge:"Embodied \xB7 具身智慧",hero:{label:"賽道融資額",value:"41",unit:"億美元"},metrics:[{k:"事件數",v:"7",unit:"筆"},{k:"平均單筆",v:"5.9",unit:"億"},{k:"人形佔比",v:"51",unit:"%"}],splitTitle:"應用分佈",embodiedStickerLabel:"物理世界",embodiedStickerSub:"EMBODIED",splitSuffix:"\xB7 Application Split",valueUnit:"億",segments:[{k:"人形機器人",en:"Humanoid",v:21},{k:"工業自動化",en:"Industrial",v:11},{k:"倉儲機器人",en:"Warehouse",v:9},{k:"服務機器人",en:"Service",v:5}],collage:{0:[],1:[{l:240,t:16,box:470,r:-3,ratio:1.4,sr:-4,color:"var(--acl-yellow)",label:"機器人場景",sub:"ROBOT"}],2:[{l:20,t:0,box:432,r:-4,ratio:1.3,sr:-4,color:"var(--acl-yellow)",label:"人形場景",sub:"HUMANOID"},{l:470,t:130,box:408,r:4,ratio:.86,sr:3,color:"var(--acl-blue)",label:"工業場景",sub:"INDUSTRY"}],3:[{l:250,t:0,box:348,r:3,ratio:.96,sr:-4,color:"var(--acl-yellow)",label:"人形場景",sub:"HUMANOID"},{l:0,t:150,box:322,r:-5,ratio:1.3,sr:4,color:"var(--acl-blue)",label:"工業場景",sub:"INDUSTRY"},{l:562,t:178,box:330,r:5,ratio:.86,sr:-3,color:"var(--acl-pink)",label:"倉儲場景",sub:"WAREHOUSE"}]},closingLine:"長週期賽道需要看供應鏈和量產能力\u3002"};oo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"splitStyle",type:"enum",default:"stack",options:["stack","bars"],label:"分佈樣式",desc:"應用分佈呈現\uFF1A堆疊條 / 橫向條形"},{key:"segmentCount",type:"number",default:3,min:2,max:4,step:1,label:"應用方向",desc:"應用分佈的方向數量(2\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"應用分佈數值標籤的顯示/隱藏"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"主卡內支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個應用方向(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的應用方向序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Vs=oo.defaults,Hs=oo.controls;var en={};Y(en,{controls:()=>Ys,default:()=>io,defaults:()=>Os});import"react";import{jsx as ma,jsxs as te}from"react/jsx-runtime";function io(t){let l={...io.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,showValueLabels:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,hero:F,metrics:D,segments:q,valueUnit:N,closingLine:z,perimeterHeading:L,mustHaveStickerLabel:y,mustHaveStickerSub:w,modulesHeading:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(q).slice(0,Math.max(3,$(d,3))),n=Math.max(0,Math.min(Number(g)||0,f.length-1)),s=j(D).slice(0,Math.max(2,$(_,2))),i=X(f.map(S=>$(S?.v)),1),a=["var(--acl-yellow)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)","var(--acl-red)"],e=["rgba(251,250,244,.42)","rgba(251,250,244,.31)","rgba(251,250,244,.22)","rgba(251,250,244,.15)","rgba(251,250,244,.1)"],o=!x||n===0,r=(S,V)=>o||V?a[S%a.length]:e[S%e.length],b=470,R=f.length,E=f.reduce((S,V)=>S+V.v,0)||1,T=0,B=f.map((S,V)=>{let O=T/E*100;T+=S.v;let U=T/E*100;return`${r(V,x&&V===n)} ${O}% ${U}%`}).join(",");return te("div",{className:"acl-root acl-sf",style:{background:m},children:[ma("style",{children:`
        .acl-sf{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 68px; display:flex; flex-direction:column; }
        .acl-sf__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-sf__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-sf__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-sf__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-sf__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-sf__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-sf__body{ flex:1; display:flex; gap:44px; margin-top:30px; min-height:0; }

        /* \u2500\u2500 left: perimeter chart card (dark) \u2500\u2500 */
        .acl-sf__chart{ flex:0 0 730px; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 34px 28px; display:flex; flex-direction:column; min-width:0; }
        .acl-sf__chartt{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.55); }
        .acl-sf__stage{ flex:1; display:flex; align-items:center; justify-content:center; min-height:0;
          position:relative; }

        /* rings variant */
        .acl-sf__rings{ position:relative; width:${b}px; height:${b}px; }
        .acl-sf__ring{ position:absolute; left:50%; top:50%; border-radius:50%;
          transform:translate(-50%,-50%); display:flex; align-items:flex-start; justify-content:center; }
        .acl-sf__rlabel{ transform:translateY(-52%); font-family:var(--acl-font-mono); font-weight:700;
          font-size:14px; letter-spacing:.04em; text-transform:uppercase; color:var(--acl-ink);
          padding:4px 10px; white-space:nowrap; line-height:1; box-shadow:2px 2px 0 rgba(0,0,0,.3); }
        .acl-sf__rval{ font-family:var(--acl-font-cn); font-weight:400; margin-left:7px; opacity:.7; }
        .acl-sf__core{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          text-align:center; }
        .acl-sf__corelabel{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(255,255,255,.55); }
        .acl-sf__corenum{ font-family:var(--acl-font-num); font-size:104px; line-height:.82; color:var(--acl-yellow); }
        .acl-sf__corenum em{ font-style:normal; font-size:30px; margin-left:3px; color:var(--acl-paper); }

        /* gate (funnel) variant */
        .acl-sf__gate{ width:100%; display:flex; flex-direction:column; align-items:center; gap:12px;
          padding:6px 0; }
        .acl-sf__band{ height:62px; display:flex; align-items:center; justify-content:space-between;
          padding:0 26px; border:3px solid var(--acl-ink); color:var(--acl-ink); visibility:visible;
          transition:opacity .25s, background .25s; }
        .acl-sf__band .bn{ font-weight:900; font-size:26px; }
        .acl-sf__band .bn small{ font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; opacity:.6; margin-left:9px; }
        .acl-sf__band .bv{ font-family:var(--acl-font-num); font-size:38px; line-height:.8; }
        .acl-sf__band .bv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }
        .acl-sf__gatecore{ margin-top:6px; font-family:var(--acl-font-num); font-size:30px;
          color:var(--acl-yellow); letter-spacing:.02em; }
        .acl-sf__pie{ width:360px; height:360px; border-radius:50%; position:relative;
          box-shadow:6px 8px 0 rgba(0,0,0,.32); }
        .acl-sf__piehole{ position:absolute; inset:104px; border-radius:50%; background:var(--acl-ink);
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
          box-shadow:0 0 0 5px rgba(251,250,244,.14); }
        .acl-sf__pie .acl-sf__corenum{ font-size:74px; }
        .acl-sf__rlegend{ display:grid; grid-template-columns:1fr 1fr; gap:10px 24px; margin-top:16px;
          border-top:2px dashed rgba(255,255,255,.18); padding-top:16px; flex:0 0 auto; }
        .acl-sf__rlrow{ display:flex; align-items:center; gap:11px; font-weight:900; font-size:21px; }
        .acl-sf__rlrow i{ width:18px; height:18px; border-radius:50%; flex:0 0 auto;
          box-shadow:0 0 0 2px rgba(255,255,255,.25); }
        .acl-sf__rlrow em{ font-style:normal; font-family:var(--acl-font-num); font-size:26px;
          color:var(--acl-yellow); margin-left:auto; }
        .acl-sf__rlrow--dim{ opacity:.5; }

        /* \u2500\u2500 right: module panel \u2500\u2500 */
        .acl-sf__panel{ flex:1; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 38px 28px; display:flex; flex-direction:column; min-width:0; }
        .acl-sf__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-sf__modhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:22px 0 12px; }
        .acl-sf__mods{ display:flex; flex-direction:column; flex:1; }
        .acl-sf__mod{ flex:1; display:grid; grid-template-columns:30px 1fr auto; align-items:center; gap:15px;
          padding:6px 0; border-bottom:1.5px dashed rgba(22,21,15,.2); visibility:visible;
          transition:opacity .25s, background .25s; }
        .acl-sf__mod:last-child{ border-bottom:none; }
        .acl-sf__mdot{ width:22px; height:22px; border:3px solid var(--acl-ink); border-radius:50%; }
        .acl-sf__mbody{ min-width:0; }
        .acl-sf__mname{ font-weight:900; font-size:25px; line-height:1.05; }
        .acl-sf__mname small{ font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-left:9px; }
        .acl-sf__mtrack{ height:14px; margin-top:7px; background:rgba(22,21,15,.1);
          border:2px solid var(--acl-ink); position:relative; overflow:hidden; }
        .acl-sf__mfill{ position:absolute; inset:0 auto 0 0; }
        .acl-sf__mval{ font-family:var(--acl-font-num); font-size:42px; line-height:.8; white-space:nowrap;
          min-width:96px; text-align:right; }
        .acl-sf__mval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; opacity:.6; }
        .acl-sf__mod--dim{ opacity:.42; }
        .acl-sf__mod--focus .acl-sf__mname{ color:var(--acl-ink); }

        .acl-sf__tiles{ display:flex; gap:14px; margin-top:18px; border-top:2px dashed rgba(22,21,15,.2);
          padding-top:18px; }
        .acl-sf__tile{ flex:1; }
        .acl-sf__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-sf__tile .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.96; margin-top:2px; }
        .acl-sf__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        .acl-sf__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-sf__chart,[data-deck-active] .acl-sf__panel{
            animation:acl-sf-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-sf__panel{ animation-delay:.08s; }
          [data-deck-active] .acl-sf__ring{ animation:acl-sf-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .2s); }
          [data-deck-active] .acl-sf__band{ animation:acl-sf-wipe .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .2s); transform-origin:center; }
          [data-deck-active] .acl-sf__mfill{ animation:acl-sf-grow .7s cubic-bezier(.2,.8,.2,1) .35s both; }
        }
        @keyframes acl-sf-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-sf-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.6); }
          to{ opacity:1; transform:translate(-50%,-50%) scale(1); } }
        @keyframes acl-sf-wipe{ from{ opacity:0; transform:scaleX(.4); } to{ opacity:1; transform:none; } }
        @keyframes acl-sf-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:none; } }
      `}),te("div",{className:"acl-sf__head",children:[te("div",{children:[ma("div",{className:"acl-sf__eyebrow",children:C}),ma("h1",{className:"acl-sf__h",children:P})]}),ma("div",{className:"acl-sf__sub",children:I}),ma("div",{className:"acl-sf__summary",dangerouslySetInnerHTML:{__html:A}})]}),te("div",{className:"acl-sf__body",children:[te("div",{className:"acl-sf__chart",children:[ma("div",{className:"acl-sf__chartt",children:L}),h&&ma(p,{kind:"spark",size:44,rotate:-10,fill:"var(--acl-yellow)",stroke:"var(--acl-paper)",style:{right:26,top:20}}),ma("div",{className:"acl-sf__stage",children:k==="pie"?ma("div",{className:"acl-sf__pie",style:{background:`conic-gradient(${B})`},children:te("div",{className:"acl-sf__piehole",children:[ma("div",{className:"acl-sf__corelabel",children:F.label}),te("div",{className:"acl-sf__corenum",children:[F.value,ma("em",{children:F.unit})]})]})}):te("div",{className:"acl-sf__gate",children:[f.map((S,V)=>{let O=x&&V===n,U=r(V,O),K=96-V*(54/Math.max(1,R));return te("div",{className:"acl-sf__band",style:{"--i":V,width:`${K}%`,background:U,color:U==="var(--acl-ink)"?"var(--acl-paper)":"var(--acl-ink)",opacity:x&&!O?.5:1},children:[te("span",{className:"bn",children:[S.k,ma("small",{children:S.en})]}),u&&te("span",{className:"bv",children:[S.v,ma("em",{children:N})]})]},V)}),te("div",{className:"acl-sf__gatecore",children:["\u2192 ",F.label," ",F.value,F.unit]})]})}),k==="pie"&&ma("div",{className:"acl-sf__rlegend",children:f.map((S,V)=>{let O=x&&V===n,U=r(V,O);return te("div",{className:"acl-sf__rlrow"+(x&&n>0&&!O?" acl-sf__rlrow--dim":""),children:[ma("i",{style:{background:U}}),ma("b",{children:S.k}),u&&te("em",{children:[S.v,N]})]},V)})})]}),te("div",{className:"acl-sf__panel",children:[te("div",{className:"acl-sf__badge",children:["\u26E8 ",M]}),h&&ma("div",{style:{position:"absolute",right:26,top:22},children:ma(H,{label:y,sub:w,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:5,size:15})}),ma("div",{className:"acl-sf__modhd",children:v}),ma("div",{className:"acl-sf__mods",children:f.map((S,V)=>{let O=x&&V===n,U=x&&!O,K=r(V,O);return te("div",{className:"acl-sf__mod"+(O?" acl-sf__mod--focus":"")+(U?" acl-sf__mod--dim":""),children:[ma("div",{className:"acl-sf__mdot",style:{background:K}}),te("div",{className:"acl-sf__mbody",children:[te("div",{className:"acl-sf__mname",children:[S.k,ma("small",{children:S.en})]}),ma("div",{className:"acl-sf__mtrack",children:ma("div",{className:"acl-sf__mfill",style:{right:`${100-G($(S?.v),i)*100}%`,background:K}})})]}),u&&te("div",{className:"acl-sf__mval",children:[$(S?.v),ma("em",{children:N})]})]},V)})}),ma("div",{className:"acl-sf__tiles",children:s.map((S,V)=>te("div",{className:"acl-sf__tile",children:[ma("div",{className:"k",children:S.k}),te("div",{className:"v",children:[S.v,ma("em",{children:S.unit})]})]},V))})]})]}),te("div",{className:"acl-sf__foot",children:[h&&ma(p,{kind:"loop",size:56,style:{position:"static"}}),ma("span",{children:z})]})]})}io.defaults={backgroundTheme:"primary",chartType:"pie",segmentCount:4,showValueLabels:!0,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"AI Safety",headline:"評測\u3001紅隊與合規",subheadline:"AI 安全賽道",summary:"AI 安全覆蓋<b>模型評測\u3001紅隊測試\u3001內容安全與合規監測</b>\u3002",badge:"AI Safety \xB7 安全防線",perimeterHeading:"安全防線 \xB7 Defense Perimeter",mustHaveStickerLabel:"剛性預算",mustHaveStickerSub:"MUST-HAVE",modulesHeading:"安全模組 \xB7 Safety Modules",hero:{label:"賽道融資額",value:"16",unit:"億"},metrics:[{k:"事件數",v:"8",unit:"筆"},{k:"平均單筆",v:"2.0",unit:"億"},{k:"評測佔比",v:"38",unit:"%"}],segments:[{k:"模型評測",en:"Evaluation",v:6},{k:"內容安全",en:"Content Safety",v:5},{k:"合規監測",en:"Compliance",v:5},{k:"紅隊測試",en:"Red Teaming",v:4},{k:"審計追溯",en:"Audit Trail",v:3}],valueUnit:"億",closingLine:"安全能力會成為企業採購門檻\u3002"};io.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"pie",options:["pie","gate"],label:"圖表型別",desc:"安全模組佔比\uFF1A飽圖(pie) / 關卡漏斗(gate)"},{key:"segmentCount",type:"number",default:4,min:3,max:5,step:1,label:"模組數量",desc:"安全模組 / 防線層數(3\u20135)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各模組融資額數值的顯示/隱藏"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"面板內支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個安全模組(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:4,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的安全模組序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Os=io.defaults,Ys=io.controls;var tn={};Y(tn,{controls:()=>Us,default:()=>no,defaults:()=>js});import"react";import{jsx as aa,jsxs as le}from"react/jsx-runtime";function no(t){let l={...no.defaults,...t},{backgroundTheme:c,mediaCount:k,chartType:d,segmentCount:u,showValueLabels:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,hero:F,metrics:D,splitTitle:q,segments:N,valueUnit:z,frames:L,closingLine:y,filmTag:w,splitSuffix:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(D).slice(0,Math.max(2,$(x,2))),n=j(N).slice(0,Math.max(2,$(u,2))),s=Math.max(0,Math.min(Number(h)||0,n.length-1)),i=n.reduce((S,V)=>S+$(V?.v),0),a=X(n.map(S=>$(S?.v)),1),e=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-yellow)"],o=(S,V)=>V?"var(--acl-pink)":e[(S+1)%e.length],r=Math.max(0,Math.min(4,k)),b=j(L).slice(0,r),R=r<=2?380:r===3?312:256,E=16,T=0,B=n.map((S,V)=>{let O=g&&V===s,U=G(T,i,0)*360;T+=$(S?.v);let K=G(T,i,0)*360;return`${o(V,O)} ${U}deg ${K}deg`}).join(", ");return le("div",{className:"acl-root acl-gc",style:{background:m},children:[aa("style",{children:`
        .acl-gc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 60px; display:flex; flex-direction:column; }
        .acl-gc__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-gc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-gc__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-gc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-gc__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-gc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        /* \u2500\u2500 filmstrip \u2500\u2500 */
        .acl-gc__film{ flex:1; margin-top:26px; min-height:0; position:relative; background:var(--acl-ink);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 26px; display:flex; align-items:center; }
        .acl-gc__perf{ position:absolute; left:14px; right:14px; height:14px; display:flex; gap:14px;
          justify-content:space-between; }
        .acl-gc__perf--t{ top:8px; }
        .acl-gc__perf--b{ bottom:8px; }
        .acl-gc__hole{ flex:1; max-width:30px; background:var(--acl-paper); border-radius:3px; }
        .acl-gc__reel{ flex:1; display:flex; align-items:center; justify-content:center; gap:24px; min-height:0; }
        .acl-gc__frame{ flex:0 0 auto; }
        .acl-gc__tag{ position:absolute; left:24px; top:50%; transform:translateY(-50%) rotate(-90deg);
          transform-origin:left center; font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.18em;
          text-transform:uppercase; color:rgba(255,255,255,.4); }
        .acl-gc__empty{ flex:1; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(255,255,255,.4); transform:rotate(-3deg); }

        /* \u2500\u2500 bottom row \u2500\u2500 */
        .acl-gc__row{ flex:0 0 auto; margin-top:22px; display:flex; gap:32px; align-items:stretch; }
        .acl-gc__hero{ flex:0 0 470px; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.14); padding:18px 32px 20px; display:flex; align-items:center; gap:28px; }
        .acl-gc__herobox{ flex:0 0 auto; }
        .acl-gc__herolabel{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gc__heronum{ font-family:var(--acl-font-num); font-size:118px; line-height:.78; }
        .acl-gc__heronum em{ font-style:normal; font-size:34px; margin-left:3px; }
        .acl-gc__tiles{ flex:1; display:flex; flex-direction:column; gap:12px; }
        .acl-gc__tile{ border-left:5px solid var(--acl-ink); padding-left:13px; }
        .acl-gc__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gc__tile .v{ font-family:var(--acl-font-num); font-size:40px; line-height:.9; }
        .acl-gc__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; opacity:.6; }

        .acl-gc__split{ flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.14); padding:18px 34px 18px; display:flex; flex-direction:column; min-width:0; }
        .acl-gc__splithd{ display:flex; align-items:baseline; justify-content:space-between; gap:14px; }
        .acl-gc__splitt{ font-family:var(--acl-font-mono); font-weight:700; font-size:16px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); }
        .acl-gc__splittot{ font-family:var(--acl-font-num); font-size:42px; }
        .acl-gc__splittot em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:3px; opacity:.6; }
        /* bars */
        .acl-gc__bars{ flex:1; display:flex; gap:24px; align-items:flex-end; margin-top:8px; }
        .acl-gc__bcol{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;
          height:100%; gap:6px; }
        .acl-gc__bval{ font-family:var(--acl-font-num); font-size:40px; line-height:.8; }
        .acl-gc__bbar{ width:100%; border:2px solid var(--acl-ink); }
        .acl-gc__bname{ font-weight:900; font-size:26px; text-align:center; }
        .acl-gc__bname small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:13px;
          letter-spacing:.03em; text-transform:uppercase; color:rgba(22,21,15,.5); }
        /* donut */
        .acl-gc__donutwrap{ flex:1; display:flex; align-items:center; justify-content:center; gap:42px;
          margin-top:6px; padding:4px 34px 0; min-height:178px; }
        .acl-gc__donut{ flex:0 0 auto; width:178px; height:178px; border-radius:50%; position:relative;
          border:3px solid var(--acl-ink); }
        .acl-gc__donut::after{ content:''; position:absolute; inset:31%; background:var(--acl-paper);
          border:3px solid var(--acl-ink); border-radius:50%; }
        .acl-gc__dcenter{ position:absolute; inset:0; display:flex; flex-direction:column; align-items:center;
          justify-content:center; z-index:2; }
        .acl-gc__dcenter .dn{ font-family:var(--acl-font-num); font-size:34px; line-height:.8; }
        .acl-gc__dcenter .dl{ font-family:var(--acl-font-mono); font-size:10px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gc__keys{ flex:0 1 360px; display:flex; flex-direction:column; gap:10px; }
        .acl-gc__key{ display:grid; grid-template-columns:18px minmax(0,1fr) auto; align-items:center; gap:10px; transition:.25s; }
        .acl-gc__sw{ width:18px; height:18px; border:2px solid var(--acl-ink); flex:0 0 auto; }
        .acl-gc__key .kn{ font-weight:900; font-size:20px; }
        .acl-gc__key .kv{ font-family:var(--acl-font-num); font-size:23px; margin-left:auto; }
        .acl-gc__key .kv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:12px;
          margin-left:2px; opacity:.6; }
        .acl-gc__key--dim{ opacity:.42; }

        .acl-gc__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gc__film,[data-deck-active] .acl-gc__hero,[data-deck-active] .acl-gc__split{
            animation:acl-gc-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-gc__hero{ animation-delay:.1s; }
          [data-deck-active] .acl-gc__split{ animation-delay:.18s; }
          [data-deck-active] .acl-gc__bbar{ animation:acl-gc-grow .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); transform-origin:bottom; }
        }
        @keyframes acl-gc-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-gc-grow{ from{ transform:scaleY(0); } to{ transform:none; } }
      `}),le("div",{className:"acl-gc__head",children:[le("div",{children:[aa("div",{className:"acl-gc__eyebrow",children:P}),aa("h1",{className:"acl-gc__h",children:I})]}),aa("div",{className:"acl-gc__sub",children:A}),aa("div",{className:"acl-gc__summary",dangerouslySetInnerHTML:{__html:M}})]}),le("div",{className:"acl-gc__film",children:[aa("div",{className:"acl-gc__perf acl-gc__perf--t",children:Array.from({length:E}).map((S,V)=>aa("div",{className:"acl-gc__hole"},V))}),aa("div",{className:"acl-gc__perf acl-gc__perf--b",children:Array.from({length:E}).map((S,V)=>aa("div",{className:"acl-gc__hole"},V))}),aa("div",{className:"acl-gc__tag",children:w}),le("div",{className:"acl-gc__reel",children:[r===0&&aa("div",{className:"acl-gc__empty",children:"// 圖片數量 = 0"}),b.map((S,V)=>aa("div",{className:"acl-gc__frame",children:aa(W,{id:"generative-"+V,box:R,rotate:S.r,ratio:S.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:S.tag,sub:S.sub,color:S.color,subColor:"var(--acl-ink)",rotate:S.sr}})},V))]}),C&&r>0&&aa(p,{kind:"arrowS",size:70,rotate:6,color:"var(--acl-yellow)",style:{right:30,top:14,zIndex:4}})]}),le("div",{className:"acl-gc__row",children:[le("div",{className:"acl-gc__hero",children:[le("div",{className:"acl-gc__herobox",children:[aa("div",{className:"acl-gc__herolabel",children:F.label}),le("div",{className:"acl-gc__heronum",children:[F.value,aa("em",{children:F.unit})]})]}),aa("div",{className:"acl-gc__tiles",children:f.map((S,V)=>le("div",{className:"acl-gc__tile",children:[aa("div",{className:"k",children:S.k}),le("div",{className:"v",children:[S.v,aa("em",{children:S.unit})]})]},V))})]}),le("div",{className:"acl-gc__split",children:[le("div",{className:"acl-gc__splithd",children:[le("div",{className:"acl-gc__splitt",children:[q," ",v]}),le("div",{className:"acl-gc__splittot",children:[i,aa("em",{children:z})]})]}),d==="bars"?aa("div",{className:"acl-gc__bars",children:n.map((S,V)=>{let O=g&&V===s;return le("div",{className:"acl-gc__bcol",style:{opacity:g&&!O?.5:1},children:[_&&le("div",{className:"acl-gc__bval",children:[$(S?.v),aa("span",{style:{fontSize:13},children:z})]}),aa("div",{className:"acl-gc__bbar",style:{"--i":V,height:`${G($(S?.v),a)*100}%`,background:o(V,O)}}),le("div",{className:"acl-gc__bname",children:[S.k,aa("small",{children:S.en})]})]},V)})}):le("div",{className:"acl-gc__donutwrap",children:[aa("div",{className:"acl-gc__donut",style:{background:`conic-gradient(${B})`},children:le("div",{className:"acl-gc__dcenter",children:[aa("div",{className:"dn",children:i}),aa("div",{className:"dl",children:z})]})}),aa("div",{className:"acl-gc__keys",children:n.map((S,V)=>{let O=g&&V===s;return le("div",{className:"acl-gc__key"+(g&&!O?" acl-gc__key--dim":""),children:[aa("span",{className:"acl-gc__sw",style:{background:o(V,O)}}),aa("span",{className:"kn",children:S.k}),_&&le("span",{className:"kv",children:[$(S?.v),aa("em",{children:z})]})]},V)})})]})]})]}),le("div",{className:"acl-gc__foot",children:[C&&aa(p,{kind:"loop",size:54,style:{position:"static"}}),aa("span",{children:y})]})]})}no.defaults={images:[],backgroundTheme:"muted",mediaCount:3,chartType:"bars",segmentCount:3,showValueLabels:!0,metricCount:2,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Generative Content",headline:"影象\u3001影片與創意",subheadline:"內容生成賽道",summary:"內容生成繼續保持融資熱度\uFF0C但也面臨<b>版權與留存</b>問題\u3002",hero:{label:"賽道融資額",value:"31",unit:"億"},metrics:[{k:"事件數",v:"11",unit:"筆"},{k:"平均單筆",v:"2.8",unit:"億"},{k:"影片佔比",v:"45",unit:"%"}],splitTitle:"資金分佈",filmTag:"REEL \xB7 內容生成",splitSuffix:"\xB7 Content Split",valueUnit:"億",segments:[{k:"影片生成",en:"Video",v:14},{k:"廣告創意",en:"Ad Creative",v:8},{k:"音樂音訊",en:"Audio",v:4},{k:"影象生成",en:"Image",v:5}],frames:[{name:"影片片段",tag:"影片",sub:"VIDEO",color:"var(--acl-pink)",r:-2,sr:-3,ratio:1.4},{name:"廣告創意",tag:"創意",sub:"AD",color:"var(--acl-blue)",r:2,sr:3,ratio:.9},{name:"音樂音訊",tag:"音訊",sub:"AUDIO",color:"var(--acl-yellow)",r:-2,sr:-3,ratio:1},{name:"影象生成",tag:"影象",sub:"IMAGE",color:"var(--acl-paper)",r:2,sr:3,ratio:1.2}],closingLine:"流量熱度不等於商業壁壘\u3002"};no.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"膠片圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"chartType",type:"enum",default:"bars",options:["bars","donut"],label:"圖表型別",desc:"資金分佈呈現\uFF1A條形 / 環形"},{key:"segmentCount",type:"number",default:3,min:2,max:4,step:1,label:"型別數量",desc:"內容型別分段數量(2\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"資金分佈數值標籤的顯示/隱藏"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"主數字旁支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個內容型別(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的內容型別序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var js=no.defaults,Us=no.controls;var ln={};Y(ln,{controls:()=>Gs,default:()=>ro,defaults:()=>Xs});import Ws from"react";import{jsx as Ya,jsxs as tt}from"react/jsx-runtime";function ro(t){let l={...ro.defaults,...t},{backgroundTheme:c,cardCount:k,showPath:d,showValue:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,hero:F,metrics:D,scenes:q,valueUnit:N,closingLine:z,adaptiveStickerLabel:L,adaptiveStickerSub:y,focusStickerLabel:w,focusStickerSub:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=q.slice(0,Math.max(1,Math.min(4,Number(k)||1))),n=f.length===1,s=Math.max(0,Math.min(Number(g)||0,f.length-1)),i=D.slice(0,Math.max(2,_)),a=["var(--acl-yellow)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)"],e=f.length<=2?320:f.length===3?268:222,o=f.length>1?116/(f.length-1):0,r=["acl-root","acl-ed",n?"acl-ed--single":""].filter(Boolean).join(" ");return tt("div",{className:r,style:{background:m},children:[Ya("style",{children:`
        .acl-ed{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 64px; display:flex; flex-direction:column; }
        .acl-ed__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-ed__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ed__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-ed__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ed__summary{ margin-left:auto; max-width:470px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ed__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ed__body{ flex:1; display:flex; gap:40px; margin-top:26px; min-height:0; }

        /* \u2500\u2500 left hero panel \u2500\u2500 */
        .acl-ed__panel{ flex:0 0 470px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:28px 36px 30px; display:flex; flex-direction:column; justify-content:space-between; gap:18px; }
        .acl-ed__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-ed__herolabel{ font-weight:700; font-size:22px; color:rgba(22,21,15,.6); margin-top:4px;
          display:flex; align-items:center; gap:14px; }
        .acl-ed__unit{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          letter-spacing:.04em; padding:5px 11px; background:var(--acl-pink); color:var(--acl-paper); }
        .acl-ed__heronum{ font-family:var(--acl-font-num); font-size:176px; line-height:.82; margin-top:2px; }
        .acl-ed__tiles{ display:flex; gap:14px; margin-top:0; }
        .acl-ed__tile{ flex:1; border:2px solid var(--acl-ink); padding:13px 16px 11px; }
        .acl-ed__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-ed__tile .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.96; margin-top:3px; }
        .acl-ed__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }

        /* \u2500\u2500 path stage \u2500\u2500 */
        .acl-ed__stage{ flex:1; position:relative; min-width:0; display:flex; align-items:flex-end;
          justify-content:space-between; gap:18px; padding-top:30px; }
        .acl-ed__empty{ flex:1; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-3deg); }
        .acl-ed__card{ flex:1; position:relative; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.16); padding:16px 14px 16px; display:flex; flex-direction:column;
          align-items:center; min-width:0; }
        .acl-ed__step{ position:absolute; top:-22px; left:-12px; z-index:6; width:50px; height:50px;
          border-radius:50%; background:var(--acl-ink); color:var(--acl-paper); display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:28px; transform:rotate(-6deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); }
        .acl-ed__imgzone{ width:100%; display:flex; align-items:center; justify-content:center; }
        .acl-ed__cmeta{ width:100%; text-align:center; margin-top:14px; }
        .acl-ed__cname{ font-weight:900; font-size:30px; line-height:1; }
        .acl-ed__cen{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:5px; }
        .acl-ed__cval{ font-family:var(--acl-font-num); font-size:60px; line-height:.82; margin-top:9px; }
        .acl-ed__cval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; opacity:.62; }
        .acl-ed__card--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-ed__card--focus .acl-ed__cen{ color:rgba(255,255,255,.55); }
        .acl-ed__card--focus .acl-ed__step{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-ed__fx{ position:absolute; top:-20px; right:-10px; z-index:7; }
        .acl-ed__arrow{ position:absolute; z-index:5; }
        .acl-ed--single .acl-ed__stage{ align-items:center; justify-content:center; padding-top:0; }
        .acl-ed--single .acl-ed__card{ flex:0 1 520px; min-height:440px; justify-content:center;
          padding:28px 26px 26px; }
        .acl-ed--single .acl-ed__cmeta{ margin-top:22px; }
        .acl-ed--single .acl-ed__cname{ font-size:42px; }
        .acl-ed--single .acl-ed__cen{ font-size:14px; margin-top:7px; }
        .acl-ed--single .acl-ed__cval{ font-size:82px; margin-top:14px; }

        .acl-ed__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ed__panel{ animation:acl-ed-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-ed__card{ animation:acl-ed-rise .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .12s + .15s); }
        }
        @keyframes acl-ed-rise{ from{ opacity:0; transform:translateY(24px); } to{ opacity:1; } }
      `}),tt("div",{className:"acl-ed__head",children:[tt("div",{children:[Ya("div",{className:"acl-ed__eyebrow",children:C}),Ya("h1",{className:"acl-ed__h",children:P})]}),Ya("div",{className:"acl-ed__sub",children:I}),Ya("div",{className:"acl-ed__summary",dangerouslySetInnerHTML:{__html:A}})]}),tt("div",{className:"acl-ed__body",children:[tt("div",{className:"acl-ed__panel",children:[tt("div",{className:"acl-ed__badge",children:["\u270E ",M]}),h&&Ya("div",{style:{position:"absolute",right:28,top:22},children:Ya(H,{label:L,sub:y,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:5,size:15})}),tt("div",{className:"acl-ed__herolabel",children:[F.label,Ya("i",{className:"acl-ed__unit",children:F.unit})]}),Ya("div",{className:"acl-ed__heronum",children:F.value}),Ya("div",{className:"acl-ed__tiles",children:i.map((b,R)=>tt("div",{className:"acl-ed__tile",children:[Ya("div",{className:"k",children:b.k}),tt("div",{className:"v",children:[b.v,Ya("em",{children:b.unit})]})]},R))})]}),tt("div",{className:"acl-ed__stage",children:[f.length===0&&Ya("div",{className:"acl-ed__empty",children:"// 場景數量 = 0"}),f.map((b,R)=>{let E=x&&R===s,T=a[R%a.length],B=(f.length-1-R)*o;return tt("div",{className:"acl-ed__card"+(E?" acl-ed__card--focus":""),style:{"--i":R,marginBottom:`${B}px`},children:[Ya("div",{className:"acl-ed__step",children:R+1}),E&&h&&Ya("div",{className:"acl-ed__fx",children:Ya(H,{label:w,sub:v,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6,size:14})}),Ya("div",{className:"acl-ed__imgzone",children:Ya(W,{id:"education-"+R,box:e,rotate:R%2?2:-2,ratio:b.ratio||1.05,accent:E?"var(--acl-yellow)":"var(--acl-paper)",placeholder:"上傳",sticker:{label:b.tag,color:T,subColor:"var(--acl-ink)",rotate:R%2?3:-3}})}),tt("div",{className:"acl-ed__cmeta",children:[Ya("div",{className:"acl-ed__cname",children:b.name}),Ya("div",{className:"acl-ed__cen",children:b.en}),u&&tt("div",{className:"acl-ed__cval",children:[b.value,Ya("em",{children:N})]})]})]},R)}),d&&h&&f.length>1&&tt(Ws.Fragment,{children:[Ya(p,{kind:"arrow",size:64,rotate:-18,color:"var(--acl-ink)",className:"acl-ed__arrow",style:{left:"30%",top:0}}),f.length>2&&Ya(p,{kind:"arrowS",size:56,rotate:-8,color:"var(--acl-ink)",className:"acl-ed__arrow",style:{right:"30%",top:"8%"}})]})]})]}),tt("div",{className:"acl-ed__foot",children:[h&&Ya(p,{kind:"loop",size:56,style:{position:"static"}}),Ya("span",{children:z})]})]})}ro.defaults={images:[],backgroundTheme:"muted",cardCount:3,showPath:!0,showValue:!0,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Education AI",headline:"個性化學習與教師工具",subheadline:"教育 AI 賽道",summary:"教育 AI 從通用答疑轉向<b>個性化輔導與教師工作臺</b>\u3002",badge:"Education \xB7 教育 AI",adaptiveStickerLabel:"個性化",adaptiveStickerSub:"ADAPTIVE",focusStickerLabel:"重點",focusStickerSub:"FOCUS",hero:{label:"賽道融資額",value:"14",unit:"億"},metrics:[{k:"事件數",v:"5",unit:"筆"},{k:"平均單筆",v:"2.8",unit:"億"},{k:"K12 佔比",v:"43",unit:"%"}],scenes:[{name:"K12 輔導",en:"K12 Tutoring",tag:"輔導",value:"6",ratio:.95},{name:"企業培訓",en:"Corporate Training",tag:"培訓",value:"5",ratio:1.2},{name:"教師工具",en:"Teacher Tools",tag:"工具",value:"3",ratio:.9},{name:"備考提分",en:"Test Prep",tag:"備考",value:"2",ratio:1.05}],valueUnit:"億",closingLine:"教育 AI 需要用結果證明價值\u3002"};ro.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:3,min:1,max:4,step:1,label:"場景數量",desc:"學習路徑場景卡數量(1\u20134)\uFF1B每卡含一個圖片槽\uFF0C佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showPath",type:"boolean",default:!0,label:"路徑連線",desc:"場景之間手繪路徑箭頭的顯示/隱藏"},{key:"showValue",type:"boolean",default:!0,label:"數值",desc:"每張場景卡的大號融資額的顯示/隱藏"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"主卡內支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某張場景卡"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"cardCount",label:"重點物件",desc:"被突出的場景卡序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Xs=ro.defaults,Gs=ro.controls;var on={};Y(on,{controls:()=>Zs,default:()=>Kt,defaults:()=>Ks,numberBounds:()=>Js});import Qs from"react";import{jsx as ea,jsxs as Te}from"react/jsx-runtime";function Kt(t){let l={...Kt.defaults,...t},{backgroundTheme:c,showFunnel:k,funnelStageCount:d,rowCount:u,showBars:_,showRating:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,kpis:F,funnelTitle:D,funnel:q,columnLabels:N,rows:z,closingLine:L,roiStickerLabel:y,ticketFlowSuffix:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=j(q).slice(0,Math.max(3,$(d,3))),f=j(z).slice(0,Math.max(2,$(u,2))),n=Q(h,0,Math.max(0,f.length-1)),s=X(f.map(a=>$(a?.share)),1),i=`64px 1.25fr 360px${_?" 1fr":""}${x?" 200px":""}`;return Te("div",{className:"acl-root acl-su",style:{background:v},children:[ea("style",{children:`
        .acl-su{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 62px; display:flex; flex-direction:column; }
        .acl-su__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-su__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-su__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-su__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-su__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-su__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-su__kpis{ display:flex; gap:0; margin-top:22px; border:3px solid var(--acl-ink);
          background:var(--acl-ink); }
        .acl-su__kpi{ flex:1; background:var(--acl-paper); padding:12px 22px; display:flex;
          flex-direction:column; gap:2px; }
        .acl-su__kpi + .acl-su__kpi{ border-left:3px solid var(--acl-ink); }
        .acl-su__kpi .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-su__kpi .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.95; }
        .acl-su__kpi .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:4px; opacity:.6; }
        .acl-su__kpi--accent{ background:var(--acl-yellow); }

        /* \u2500\u2500 ticket funnel band \u2500\u2500 */
        .acl-su__funnel{ margin-top:18px; position:relative; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:6px 8px 0 rgba(22,21,15,.14); padding:13px 26px 16px; }
        .acl-su__funnelhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:10px; }
        .acl-su__flow{ display:flex; align-items:center; gap:0; }
        .acl-su__stage{ flex:1; display:flex; flex-direction:column; gap:5px; }
        .acl-su__sbar{ height:42px; border:2px solid var(--acl-ink); display:flex; align-items:center;
          justify-content:center; font-family:var(--acl-font-num); font-size:26px; color:var(--acl-ink); }
        .acl-su__sname{ font-weight:900; font-size:18px; }
        .acl-su__sname small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:10px;
          letter-spacing:.03em; text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-su__arrow{ flex:0 0 38px; display:grid; place-items:center; }

        /* \u2500\u2500 ROI ledger \u2500\u2500 */
        .acl-su__panel{ position:relative; flex:1; margin-top:18px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:6px 38px 12px; display:flex; flex-direction:column; min-height:0; }
        .acl-su__colhead{ display:grid; grid-template-columns:${i}; align-items:end; gap:24px;
          padding:14px 8px 11px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.07em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-su__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-su__row{ flex:1; display:grid; grid-template-columns:${i}; align-items:center; gap:24px;
          padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.22); position:relative; transition:background .25s; }
        .acl-su__row:last-child{ border-bottom:none; }
        .acl-su__idx{ font-family:var(--acl-font-num); font-size:50px; line-height:.8; color:rgba(22,21,15,.26); }
        .acl-su__scn{ display:flex; flex-direction:column; gap:3px; }
        .acl-su__scn b{ font-weight:900; font-size:32px; line-height:1; }
        .acl-su__scn span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.46); }
        .acl-su__fig{ font-family:var(--acl-font-num); font-size:56px; line-height:.78; white-space:nowrap; }
        .acl-su__fig em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; opacity:.6; }
        .acl-su__fig small{ display:block; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          color:rgba(22,21,15,.55); margin-top:2px; }
        .acl-su__bar{ height:22px; background:rgba(22,21,15,.1); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-su__barfill{ position:absolute; inset:0 auto 0 0; background:var(--acl-blue);
          border-right:2px solid var(--acl-ink); }
        .acl-su__rate{ display:flex; align-items:center; gap:10px; }
        .acl-su__dots{ display:flex; gap:5px; }
        .acl-su__dot{ width:17px; height:17px; border-radius:50%; border:2px solid var(--acl-ink); }
        .acl-su__ratelabel{ font-weight:900; font-size:19px; }
        .acl-su__row--focus{ background:var(--acl-yellow);
          box-shadow:6px 0 0 var(--acl-yellow), -6px 0 0 var(--acl-yellow); border-bottom-color:transparent; z-index:2; }
        .acl-su__row--focus .acl-su__idx{ color:var(--acl-ink); }
        .acl-su__row--focus .acl-su__bar{ background:rgba(22,21,15,.16); }
        .acl-su__row--focus .acl-su__barfill{ background:var(--acl-pink); }
        .acl-su__fx{ position:absolute; top:-14px; right:30px; z-index:5; }

        .acl-su__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-su__funnel{ animation:acl-su-rise .5s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-su__sbar{ animation:acl-su-grow .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .15s); transform-origin:left; }
          [data-deck-active] .acl-su__row{ animation:acl-su-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .25s); }
          [data-deck-active] .acl-su__barfill{ animation:acl-su-bgrow .7s cubic-bezier(.2,.8,.2,1) .5s both; }
        }
        @keyframes acl-su-rise{ from{ opacity:0; transform:translateY(-14px); } to{ opacity:1; transform:none; } }
        @keyframes acl-su-grow{ from{ transform:scaleX(0); } to{ transform:none; } }
        @keyframes acl-su-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
        @keyframes acl-su-bgrow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:scaleX(1); } }
      `}),Te("div",{className:"acl-su__head",children:[Te("div",{children:[ea("div",{className:"acl-su__eyebrow",children:P}),ea("h1",{className:"acl-su__h",children:I})]}),ea("div",{className:"acl-su__sub",children:A}),C&&ea(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),ea("div",{className:"acl-su__summary",dangerouslySetInnerHTML:{__html:M}})]}),ea("div",{className:"acl-su__kpis",children:F.map((a,e)=>Te("div",{className:"acl-su__kpi"+(e===0?" acl-su__kpi--accent":""),children:[ea("div",{className:"k",children:a.k}),Te("div",{className:"v",children:[a.v,ea("em",{children:a.unit})]})]},e))}),k&&Te("div",{className:"acl-su__funnel",children:[Te("div",{className:"acl-su__funnelhd",children:[D," ",w]}),ea("div",{className:"acl-su__flow",children:m.map((a,e)=>{let o=e===m.length-1,r=["var(--acl-yellow)","var(--acl-blue)","var(--acl-paper)","var(--acl-pink)","var(--acl-paper)"];return Te(Qs.Fragment,{children:[Te("div",{className:"acl-su__stage",children:[Te("div",{className:"acl-su__sbar",style:{"--i":e,width:`${a.pct}%`,background:r[e%r.length]},children:[a.pct,"%"]}),Te("div",{className:"acl-su__sname",children:[a.k,ea("small",{children:a.en})]})]}),!o&&ea("div",{className:"acl-su__arrow",children:ea(p,{kind:"arrow",size:40,rotate:0,color:"var(--acl-ink)",style:{position:"static"}})})]},e)})})]}),Te("div",{className:"acl-su__panel",children:[Te("div",{className:"acl-su__colhead",children:[ea("span",{children:"#"}),ea("span",{children:N[0]}),ea("span",{children:N[1]}),_&&ea("span",{children:N[2]}),x&&ea("span",{children:N[3]})]}),ea("div",{className:"acl-su__rows",children:f.map((a,e)=>{let o=g&&e===n;return Te("div",{className:"acl-su__row"+(o?" acl-su__row--focus":""),style:{"--i":e},children:[o&&C&&ea("div",{className:"acl-su__fx",children:ea(H,{label:y,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6})}),ea("div",{className:"acl-su__idx",children:String(e+1).padStart(2,"0")}),Te("div",{className:"acl-su__scn",children:[ea("b",{children:a.scn}),ea("span",{children:a.en})]}),Te("div",{className:"acl-su__fig",children:[a.fig,ea("em",{children:a.unit}),ea("small",{children:a.figNote})]}),_&&ea("div",{className:"acl-su__bar",children:ea("div",{className:"acl-su__barfill",style:{right:`${100-G($(a?.share),s)*100}%`,background:o?"var(--acl-pink)":"var(--acl-blue)"}})}),x&&Te("div",{className:"acl-su__rate",children:[ea("div",{className:"acl-su__dots",children:[0,1,2].map(r=>ea("span",{className:"acl-su__dot",style:{background:r<a.rate?o?"var(--acl-pink)":"var(--acl-ink)":"transparent"}},r))}),ea("span",{className:"acl-su__ratelabel",children:a.rateLabel})]})]},e)})})]}),Te("div",{className:"acl-su__foot",children:[C&&ea(p,{kind:"loop",size:56,style:{position:"static"}}),ea("span",{children:L})]})]})}Kt.defaults={backgroundTheme:"muted",showFunnel:!0,funnelStageCount:4,rowCount:4,showBars:!0,showRating:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Customer Support AI",headline:"可量化降本場景",subheadline:"客服 AI 賽道",summary:"客服 AI 是最容易<b>量化 ROI</b> 的垂直應用之一\u3002",kpis:[{k:"賽道融資額",v:"27",unit:"億"},{k:"事件數",v:"9",unit:"筆"},{k:"平均替代率",v:"32",unit:"%"},{k:"工單時長下降",v:"41",unit:"%"}],funnelTitle:"工單流程",ticketFlowSuffix:"\xB7 Ticket Flow",roiStickerLabel:"可量化 ROI",funnel:[{k:"工單接入",en:"Intake",pct:100},{k:"智慧分類",en:"Triage",pct:78},{k:"自動解決",en:"Auto-Resolve",pct:54},{k:"人工升級",en:"Escalation",pct:18},{k:"滿意回收",en:"CSAT",pct:11}],columnLabels:["降本場景","關鍵指標","採用佔比","ROI 判斷"],rows:[{scn:"自動應答",en:"Auto Reply",fig:"32",unit:"%",figNote:"工單替代率",share:38,rate:3,rateLabel:"高"},{scn:"智慧分流",en:"Smart Routing",fig:"41",unit:"%",figNote:"工單時長下降",share:26,rate:3,rateLabel:"高"},{scn:"知識庫自助",en:"Self-Service",fig:"28",unit:"%",figNote:"自助解決率",share:21,rate:2,rateLabel:"中"},{scn:"坐席輔助",en:"Agent Assist",fig:"19",unit:"%",figNote:"坐席提效",share:15,rate:2,rateLabel:"中"}],closingLine:"能量化 ROI 的場景更容易獲得預算\u3002"};Kt.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"showFunnel",type:"boolean",default:!0,label:"流程漏斗",desc:"頂部工單流程漏斗帶的顯示/隱藏"},{key:"funnelStageCount",type:"number",default:4,min:3,max:5,step:1,showIf:"showFunnel",label:"流程階段",desc:"工單流程漏斗的階段數量(3\u20135)"},{key:"rowCount",type:"number",default:4,min:2,max:4,step:1,label:"行數",desc:"展示的降本場景行數(2\u20134)"},{key:"showBars",type:"boolean",default:!0,label:"佔比條",desc:"採用佔比列橫向比例條的顯示/隱藏"},{key:"showRating",type:"boolean",default:!0,label:"判斷列",desc:"\u300CROI 判斷\u300D評級圓點列的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];Kt.numberBounds={"funnel[].pct":{min:0,max:100,semantics:"percent"}};var Ks=Kt.defaults,Zs=Kt.controls,Js=Kt.numberBounds;var nn={};Y(nn,{controls:()=>ep,default:()=>co,defaults:()=>ap});import"react";import{jsx as ja,jsxs as Ee}from"react/jsx-runtime";function co(t){let l={...co.defaults,...t},{backgroundTheme:c,layerCount:k,mediaCount:d,showIndent:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,badge:M,hero:F,retention:D,metrics:q,strataTitle:N,layers:z,closingLine:L,orchestrationSuffix:y,governedStickerLabel:w,governedStickerSub:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=z.slice(0,Math.max(2,k)),n=Math.max(0,Math.min(Number(g)||0,f.length-1)),s=q.slice(0,Math.max(2,_)),i=Math.max(0,Math.min(f.length,d)),a=["var(--acl-yellow)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)"];return Ee("div",{className:"acl-root acl-lc",style:{background:m},children:[ja("style",{children:`
        .acl-lc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 58px; display:flex; flex-direction:column; }
        .acl-lc__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-lc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-lc__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-lc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-lc__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-lc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-lc__body{ flex:1; display:flex; gap:40px; margin-top:26px; min-height:0; }

        /* strata stack (left) */
        .acl-lc__stack{ flex:1; min-width:0; display:flex; flex-direction:column; }
        .acl-lc__stacktitle{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:12px; }
        .acl-lc__bands{ flex:1; display:flex; flex-direction:column; gap:14px; }
        .acl-lc__band{ flex:1; display:grid; grid-template-columns:auto 1fr auto; align-items:center;
          gap:24px; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 7px 0 rgba(22,21,15,.14); padding:12px 24px 12px 14px; position:relative;
          transition:background .25s, opacity .25s, transform .25s; }
        .acl-lc__thumb{ flex:0 0 auto; display:flex; align-items:center; }
        .acl-lc__numtile{ width:118px; height:118px; display:grid; place-items:center;
          border:3px solid var(--acl-ink); font-family:var(--acl-font-num); font-size:62px; color:var(--acl-ink); }
        .acl-lc__bmeta{ min-width:0; }
        .acl-lc__step{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-lc__bname{ font-weight:900; font-size:34px; line-height:1.02; margin-top:2px; }
        .acl-lc__bdesc{ font-weight:700; font-size:19px; color:rgba(22,21,15,.62); margin-top:5px; line-height:1.3; }
        .acl-lc__bnext{ flex:0 0 auto; }
        .acl-lc__band--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-lc__band--focus .acl-lc__step{ color:rgba(255,255,255,.55); }
        .acl-lc__band--focus .acl-lc__bdesc{ color:rgba(255,255,255,.72); }
        .acl-lc__band--focus .acl-lc__numtile{ border-color:var(--acl-yellow); color:var(--acl-yellow); }
        .acl-lc__band--dim{ opacity:.5; }
        .acl-lc__fx{ position:absolute; top:-15px; right:24px; z-index:5; }

        /* stat rail (right) */
        .acl-lc__rail{ flex:0 0 520px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:28px 36px 30px; display:flex; flex-direction:column; gap:18px; }
        .acl-lc__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-lc__hero{ margin-top:2px; }
        .acl-lc__herolabel{ font-weight:700; font-size:20px; color:rgba(22,21,15,.6); }
        .acl-lc__heronum{ font-family:var(--acl-font-num); font-size:144px; line-height:.82; margin-top:2px; }
        .acl-lc__heronum em{ font-style:normal; font-size:38px; margin-left:3px; }
        .acl-lc__ret{ min-height:132px; border:3px solid var(--acl-ink); background:var(--acl-yellow);
          padding:20px 24px; display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:18px; }
        .acl-lc__retk{ min-width:0; font-weight:900; font-size:24px; line-height:1.12; max-width:none; }
        .acl-lc__retk small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.6); margin-top:4px; }
        .acl-lc__retv{ display:flex; align-items:baseline; font-family:var(--acl-font-num); font-size:78px; line-height:1; }
        .acl-lc__retv em{ font-style:normal; font-size:28px; }
        .acl-lc__tiles{ display:flex; gap:13px; margin-top:auto; padding-top:18px; }
        .acl-lc__tile{ flex:1; border-left:5px solid var(--acl-ink); padding-left:13px; }
        .acl-lc__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-lc__tile .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.92; }
        .acl-lc__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        .acl-lc__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-lc__band{ animation:acl-lc-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .15s); }
          [data-deck-active] .acl-lc__rail{ animation:acl-lc-rise .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-lc-in{ from{ opacity:0; transform:translateX(-26px); } }
        @keyframes acl-lc-rise{ from{ opacity:0; transform:translateY(18px); } }
      `}),Ee("div",{className:"acl-lc__head",children:[Ee("div",{children:[ja("div",{className:"acl-lc__eyebrow",children:C}),ja("h1",{className:"acl-lc__h",children:P})]}),ja("div",{className:"acl-lc__sub",children:I}),ja("div",{className:"acl-lc__summary",dangerouslySetInnerHTML:{__html:A}})]}),Ee("div",{className:"acl-lc__body",children:[Ee("div",{className:"acl-lc__stack",children:[Ee("div",{className:"acl-lc__stacktitle",children:[N," ",y]}),ja("div",{className:"acl-lc__bands",children:f.map((e,o)=>{let r=x&&o===n,b=x&&!r,R=u?o*38:0,E=a[o%a.length];return Ee("div",{className:"acl-lc__band"+(r?" acl-lc__band--focus":b?" acl-lc__band--dim":""),style:{"--i":o,marginLeft:R},children:[r&&h&&ja("div",{className:"acl-lc__fx",children:ja(H,{label:w,sub:v,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:5,size:13})}),ja("div",{className:"acl-lc__thumb",children:o<i?ja(W,{id:"lowcode-"+o,box:118,rotate:o%2?2:-2,ratio:e.ratio||1,accent:r?"var(--acl-yellow)":"var(--acl-paper)",placeholder:"上傳"}):ja("div",{className:"acl-lc__numtile",style:{background:r?"transparent":E},children:o+1})}),Ee("div",{className:"acl-lc__bmeta",children:[Ee("div",{className:"acl-lc__step",children:["Layer ",String(o+1).padStart(2,"0")," \xB7 ",e.en]}),ja("div",{className:"acl-lc__bname",children:e.k}),ja("div",{className:"acl-lc__bdesc",children:e.desc})]}),o<f.length-1&&h&&ja("div",{className:"acl-lc__bnext",children:ja(p,{kind:"arrow",size:48,rotate:58,color:r?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}})})]},o)})})]}),Ee("div",{className:"acl-lc__rail",children:[Ee("div",{className:"acl-lc__badge",children:["\u25A4 ",M]}),h&&ja(p,{kind:"spark",size:44,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:26,top:22}}),Ee("div",{className:"acl-lc__hero",children:[ja("div",{className:"acl-lc__herolabel",children:F.label}),Ee("div",{className:"acl-lc__heronum",children:[F.value,ja("em",{children:F.unit})]})]}),Ee("div",{className:"acl-lc__ret",children:[Ee("div",{className:"acl-lc__retk",children:[D.label,ja("small",{children:D.en})]}),Ee("div",{className:"acl-lc__retv",children:[D.value,ja("em",{children:D.unit})]})]}),ja("div",{className:"acl-lc__tiles",children:s.map((e,o)=>Ee("div",{className:"acl-lc__tile",children:[ja("div",{className:"k",children:e.k}),Ee("div",{className:"v",children:[e.v,ja("em",{children:e.unit})]})]},o))})]})]}),Ee("div",{className:"acl-lc__foot",children:[h&&ja(p,{kind:"loop",size:56,style:{position:"static"}}),ja("span",{children:L})]})]})}co.defaults={images:[],backgroundTheme:"muted",layerCount:4,mediaCount:2,showIndent:!0,metricCount:2,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Low Code AI",headline:"企業流程嵌入",subheadline:"低程式碼 AI 平臺",summary:"低程式碼平臺把模型能力<b>嵌入企業內部流程</b>\u3002",badge:"Low Code \xB7 流程編排",hero:{label:"賽道融資額",value:"19",unit:"億"},retention:{label:"淨收入留存",en:"Net Revenue Retention",value:"118",unit:"%"},metrics:[{k:"事件數",v:"6",unit:"筆"},{k:"企業客戶中位數",v:"430",unit:"家"},{k:"平均單筆",v:"3.2",unit:"億"}],strataTitle:"流程編排",orchestrationSuffix:"\xB7 Orchestration Layers",governedStickerLabel:"治理就緒",governedStickerSub:"GOVERNED",layers:[{k:"資料接入",en:"Data Connect",desc:"統一接入企業資料來源與許可權",ratio:1.2},{k:"流程編排",en:"Orchestration",desc:"視覺化拖曳編排模型與規則",ratio:.95},{k:"模型嵌入",en:"Model Embed",desc:"把模型能力嵌入業務節點",ratio:1.1},{k:"治理監測",en:"Governance",desc:"審計\u3001留存與合規監測",ratio:1}],closingLine:"能被業務團隊使用的平臺更容易擴散\u3002"};co.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"layerCount",type:"number",default:4,min:2,max:4,step:1,label:"層級數量",desc:"流程編排的層級帶數量(2\u20134)"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"帶圖片縮圖的層級數(0\u20134\uFF0C超出層數自動按層數封頂)\uFF1B每槽按上傳圖片比例自適應\uFF0C無圖層顯示序號塊"},{key:"showIndent",type:"boolean",default:!0,label:"層級縮排",desc:"逐層遞進縮排(嵌入深度感) 顯隱"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"右欄支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一層級(其餘淡化)"},{key:"focusIndex",type:"number",default:1,min:0,max:3,step:1,maxFrom:"layerCount",label:"重點物件",desc:"被突出的層級序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var ap=co.defaults,ep=co.controls;var rn={};Y(rn,{controls:()=>op,default:()=>so,defaults:()=>lp});import tp from"react";import{jsx as oe,jsxs as Be}from"react/jsx-runtime";function so(t){let l={...so.defaults,...t},{backgroundTheme:c,mediaCount:k,showChain:d,segmentCount:u,showValueLabels:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,badge:F,bigStat:D,chainTitle:q,stages:N,metrics:z,cluster:L,closingLine:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=N.slice(0,Math.max(2,u)),m=Math.min(h,v.length-1),f=z.slice(0,Math.max(2,x)),n=Math.max(0,Math.min(4,k)),s=L[n]||[],i=["var(--acl-yellow)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)"],a=(e,o)=>o?"var(--acl-pink)":i[e%i.length];return Be("div",{className:"acl-root acl-os",style:{background:w},children:[oe("style",{children:`
        .acl-os{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 58px; display:flex; flex-direction:column; }
        .acl-os__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-os__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-os__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-os__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-os__summary{ margin-left:auto; max-width:470px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-os__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-os__body{ flex:1; display:flex; gap:30px; margin-top:18px; min-height:0; }

        /* big stat + conversion (left) */
        .acl-os__left{ flex:0 0 760px; display:flex; flex-direction:column; min-width:0; }
        .acl-os__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;
          white-space:nowrap; }
        .acl-os__biglabel{ font-weight:700; font-size:24px; color:rgba(22,21,15,.6); margin-top:22px; }
        .acl-os__big{ font-family:var(--acl-font-num); font-size:228px; line-height:.86; letter-spacing:-.01em; }
        .acl-os__big em{ font-style:normal; font-size:64px; margin-left:4px; }
        .acl-os__bigsub{ font-weight:700; font-size:21px; color:rgba(22,21,15,.62); max-width:600px;
          line-height:1.35; margin-top:6px; }

        .acl-os__chainhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:auto 0 12px; }
        .acl-os__chain{ display:flex; align-items:stretch; gap:0; }
        .acl-os__node{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:4px;
          border:3px solid var(--acl-ink); padding:14px 16px; transition:.25s; }
        .acl-os__node .nn{ font-weight:900; font-size:23px; line-height:1.05; }
        .acl-os__node .nn small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:11px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-top:3px; }
        .acl-os__node .nv{ font-family:var(--acl-font-num); font-size:42px; line-height:.8; margin-top:7px; }
        .acl-os__node .nv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:2px; opacity:.6; }
        .acl-os__node--dim{ opacity:.45; }
        .acl-os__conn{ flex:0 0 40px; display:grid; place-items:center; }
        .acl-os__tiles{ display:flex; gap:14px; margin-top:16px; }
        .acl-os__tile{ flex:1; border-left:5px solid var(--acl-ink); padding-left:13px; }
        .acl-os__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-os__tile .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.92; }
        .acl-os__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        /* member cluster (right) */
        .acl-os__cluster{ flex:1; position:relative; min-width:0; }
        .acl-os__card{ position:absolute; z-index:2; }
        .acl-os__empty{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) rotate(-4deg);
          font-family:var(--acl-font-hand); font-size:32px; color:rgba(22,21,15,.4); text-align:center; }

        .acl-os__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:10px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-os__big{ animation:acl-os-rise .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-os__card{ animation:acl-os-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .11s + .2s); }
          [data-deck-active] .acl-os__node{ animation:acl-os-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .3s); }
        }
        @keyframes acl-os-rise{ from{ opacity:0; transform:translateY(20px); } }
        @keyframes acl-os-pop{ from{ opacity:0; transform:scale(.8); } }
        @keyframes acl-os-in{ from{ opacity:0; transform:translateY(14px); } }
      `}),Be("div",{className:"acl-os__head",children:[Be("div",{children:[oe("div",{className:"acl-os__eyebrow",children:P}),oe("h1",{className:"acl-os__h",children:I})]}),oe("div",{className:"acl-os__sub",children:A}),oe("div",{className:"acl-os__summary",dangerouslySetInnerHTML:{__html:M}})]}),Be("div",{className:"acl-os__body",children:[Be("div",{className:"acl-os__left",children:[Be("div",{className:"acl-os__badge",children:["\u25CE ",F]}),oe("div",{className:"acl-os__biglabel",children:D.label}),Be("div",{className:"acl-os__big",children:[D.value,oe("em",{children:D.unit})]}),oe("div",{className:"acl-os__bigsub",children:D.note}),Be("div",{className:"acl-os__chainhd",children:[q," \xB7 Community \u2192 Enterprise"]}),oe("div",{className:"acl-os__chain",children:v.map((e,o)=>{let r=g&&o===m,b=o===v.length-1;return Be(tp.Fragment,{children:[Be("div",{className:"acl-os__node"+(g&&!r?" acl-os__node--dim":""),style:{"--i":o,background:a(o,r),color:a(o,r)==="var(--acl-ink)"?"var(--acl-paper)":"var(--acl-ink)"},children:[Be("div",{className:"nn",children:[e.k,oe("small",{children:e.en})]}),_&&Be("div",{className:"nv",children:[e.v,oe("em",{children:e.unit})]})]}),!b&&oe("div",{className:"acl-os__conn",children:oe(p,{kind:"arrow",size:40,rotate:0,color:"var(--acl-ink)",style:{position:"static"}})})]},o)})}),oe("div",{className:"acl-os__tiles",children:f.map((e,o)=>Be("div",{className:"acl-os__tile",children:[oe("div",{className:"k",children:e.k}),Be("div",{className:"v",children:[e.v,oe("em",{children:e.unit})]})]},o))})]}),Be("div",{className:"acl-os__cluster",children:[n===0&&Be("div",{className:"acl-os__empty",children:["// 圖片數量 = 0",oe("br",{}),"僅展示社群資料"]}),s.map((e,o)=>oe("div",{className:"acl-os__card",style:{left:e.l,top:e.t,"--i":o},children:oe(W,{id:"opensource-"+o,box:e.box,rotate:e.r,ratio:e.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:e.label,sub:e.sub,color:i[o%i.length],subColor:"var(--acl-ink)",rotate:e.sr}})},o)),d&&C&&n>0&&oe(p,{kind:"arrowS",size:84,rotate:-150,color:"var(--acl-ink)",style:{left:-34,top:"46%"}}),C&&n>1&&oe(p,{kind:"spark",size:40,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:30,top:18}})]})]}),Be("div",{className:"acl-os__foot",children:[C&&oe(p,{kind:"loop",size:56,style:{position:"static"}}),oe("span",{children:y})]})]})}so.defaults={images:[],backgroundTheme:"muted",mediaCount:3,showChain:!0,segmentCount:3,showValueLabels:!0,metricCount:2,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Open Source Models",headline:"社群影響力變現",subheadline:"開源模型公司",summary:"開源公司靠<b>社群影響力\u3001託管服務與企業支援</b>變現\u3002",badge:"Open Source \xB7 變現路徑",bigStat:{label:"社群下載量",value:"2.8",unit:"億次",note:"透過社群影響力沉澱開發者\uFF0C再向託管服務與企業支援轉化\u3002"},chainTitle:"變現路徑",stages:[{k:"社群影響力",en:"Community",v:"2.8",unit:"億"},{k:"託管服務",en:"Hosting",v:"40",unit:"%"},{k:"企業支援",en:"Enterprise",v:"37",unit:"%"}],metrics:[{k:"賽道融資額",v:"28",unit:"億"},{k:"事件數",v:"7",unit:"筆"},{k:"企業服務佔比",v:"37",unit:"%"}],cluster:{0:[],1:[{l:240,t:120,box:440,r:-3,ratio:1.2,sr:4,label:"社群成員",sub:"DEV"}],2:[{l:60,t:40,box:360,r:-4,ratio:1,sr:-4,label:"開發者",sub:"DEV"},{l:430,t:320,box:360,r:4,ratio:1.1,sr:4,label:"企業使用者",sub:"ENT"}],3:[{l:40,t:16,box:320,r:-5,ratio:.95,sr:-4,label:"開發者",sub:"DEV"},{l:470,t:60,box:300,r:5,ratio:1.05,sr:4,label:"貢獻者",sub:"OSS"},{l:220,t:400,box:320,r:-3,ratio:1.25,sr:3,label:"企業使用者",sub:"ENT"}],4:[{l:30,t:6,box:280,r:-5,ratio:.92,sr:-4,label:"開發者",sub:"DEV"},{l:510,t:24,box:270,r:5,ratio:1,sr:4,label:"貢獻者",sub:"OSS"},{l:70,t:380,box:280,r:4,ratio:1.15,sr:3,label:"企業使用者",sub:"ENT"},{l:530,t:410,box:270,r:-4,ratio:.95,sr:-3,label:"合作伙伴",sub:"PARTNER"}]},closingLine:"開源是入口\uFF0C不是完整商業模式\u3002"};so.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"散落的社群成員圖片卡數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showChain",type:"boolean",default:!0,label:"指向連線",desc:"由圖片群指向資料的手繪箭頭 顯隱"},{key:"segmentCount",type:"number",default:3,min:2,max:3,step:1,label:"環節數量",desc:"變現路徑的環節數量(2\u20133)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"變現路徑環節上的數值 顯隱"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"左側支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個變現環節(其餘淡化)"},{key:"focusIndex",type:"number",default:2,min:0,max:2,step:1,maxFrom:"segmentCount",label:"重點物件",desc:"被高亮的變現環節序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var lp=so.defaults,op=so.controls;var cn={};Y(cn,{controls:()=>np,default:()=>po,defaults:()=>ip});import"react";import{jsx as fa,jsxs as We}from"react/jsx-runtime";function po(t){let l={...po.defaults,...t},{backgroundTheme:c,mediaCount:k,posterStamp:d,rowCount:u,showRating:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,badge:F,posterWord:D,hero:q,ledgerTitle:N,rows:z,valueUnit:L,metrics:y,feature:w,closingLine:v,posterTag:m,trustStickerLabel:f,trustStickerSub:n,longTermStickerLabel:s,longTermStickerSub:i,ledgerSuffix:a,ledgerRatingSuffix:e,trustEntryStickerLabel:o}=l,r=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",b=Math.max(0,Math.min(3,k)),R=w&&w[b]||[],E=j(z).slice(0,Math.max(2,$(u,2))),T=Q(h,0,Math.max(0,E.length-1)),B=j(y).slice(0,Math.max(2,$(x,2))),S=X(E.map(V=>$(V?.v)),1);return We("div",{className:"acl-root acl-ma",style:{background:r},children:[fa("style",{children:`
        .acl-ma{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 58px; display:flex; flex-direction:column; }
        .acl-ma__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-ma__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ma__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-ma__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ma__summary{ margin-left:auto; max-width:470px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ma__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ma__body{ flex:1; display:flex; gap:40px; margin-top:26px; min-height:0; }

        /* feature poster (left) */
        .acl-ma__poster{ flex:1; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:9px 11px 0 rgba(22,21,15,.2); overflow:hidden;
          display:flex; align-items:center; justify-content:center; min-width:0; }
        .acl-ma__word{ position:absolute; left:-2px; bottom:-26px; z-index:1; font-family:var(--acl-font-num);
          font-size:230px; line-height:.7; color:rgba(255,255,255,.07); letter-spacing:-.02em;
          white-space:nowrap; pointer-events:none; }
        .acl-ma__featmain{ position:relative; z-index:3; }
        .acl-ma__inset{ position:absolute; z-index:4; }
        .acl-ma__ptag{ position:absolute; left:24px; top:22px; z-index:5; font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.16em; text-transform:uppercase; color:rgba(255,255,255,.6); }
        .acl-ma__stamp{ position:absolute; right:26px; top:26px; z-index:6; }
        .acl-ma__posteremptyt{ position:relative; z-index:3; text-align:center; }
        .acl-ma__posteremptyt .pe1{ font-family:var(--acl-font-hand); font-size:38px; color:rgba(255,255,255,.55); }

        /* safety ledger (right) */
        .acl-ma__ledger{ flex:0 0 600px; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 38px 28px; display:flex; flex-direction:column; }
        .acl-ma__badge{ display:inline-flex; align-self:flex-start; align-items:center; gap:9px;
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.05em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-yellow); padding:9px 16px;  white-space:nowrap;}
        .acl-ma__hero{ display:flex; align-items:flex-end; gap:18px; margin-top:16px; }
        .acl-ma__heronum{ font-family:var(--acl-font-num); font-size:140px; line-height:.74; }
        .acl-ma__heronum em{ font-style:normal; font-size:36px; margin-left:2px; }
        .acl-ma__herolabel{ font-weight:700; font-size:20px; color:rgba(22,21,15,.6); padding-bottom:16px; }
        .acl-ma__ledgerhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin:22px 0 4px;
          border-bottom:3px solid var(--acl-ink); padding-bottom:11px; }
        .acl-ma__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-ma__row{ flex:1; display:grid; grid-template-columns:1fr auto auto; align-items:center; gap:22px;
          border-bottom:1.5px dashed rgba(22,21,15,.22); position:relative; transition:background .25s, opacity .25s; }
        .acl-ma__row:last-child{ border-bottom:none; }
        .acl-ma__rname{ font-weight:900; font-size:30px; line-height:1.02; }
        .acl-ma__rname small{ display:block; font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-ma__rval{ font-family:var(--acl-font-num); font-size:50px; line-height:.78; text-align:right; }
        .acl-ma__rval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }
        .acl-ma__dots{ display:flex; gap:5px; min-width:74px; justify-content:flex-end; }
        .acl-ma__dot{ width:17px; height:17px; border-radius:50%; border:2px solid var(--acl-ink); }
        .acl-ma__row--focus{ background:var(--acl-yellow);
          box-shadow:6px 0 0 var(--acl-yellow), -6px 0 0 var(--acl-yellow); border-bottom-color:transparent; z-index:2; }
        .acl-ma__row--dim{ opacity:.5; }
        .acl-ma__fx{ position:absolute; top:-13px; right:0; z-index:6; }
        .acl-ma__tiles{ display:flex; gap:14px; margin-top:16px; border-top:2px dashed rgba(22,21,15,.2); padding-top:16px; }
        .acl-ma__tile{ flex:1; }
        .acl-ma__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-ma__tile .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.96; margin-top:2px; }
        .acl-ma__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        .acl-ma__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ma__poster{ animation:acl-ma-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-ma__ledger{ animation:acl-ma-rise .55s cubic-bezier(.2,.8,.2,1) .08s both; }
          [data-deck-active] .acl-ma__inset{ animation:acl-ma-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .3s); }
          [data-deck-active] .acl-ma__row{ animation:acl-ma-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); }
        }
        @keyframes acl-ma-rise{ from{ opacity:0; transform:translateY(18px); } }
        @keyframes acl-ma-pop{ from{ opacity:0; transform:scale(.8); } }
        @keyframes acl-ma-in{ from{ opacity:0; transform:translateX(18px); } }
      `}),We("div",{className:"acl-ma__head",children:[We("div",{children:[fa("div",{className:"acl-ma__eyebrow",children:P}),fa("h1",{className:"acl-ma__h",children:I})]}),fa("div",{className:"acl-ma__sub",children:A}),fa("div",{className:"acl-ma__summary",dangerouslySetInnerHTML:{__html:M}})]}),We("div",{className:"acl-ma__body",children:[We("div",{className:"acl-ma__poster",children:[fa("div",{className:"acl-ma__word",children:D}),fa("div",{className:"acl-ma__ptag",children:m}),R.length===0?fa("div",{className:"acl-ma__posteremptyt",children:fa("div",{className:"pe1",children:"// 圖片數量 = 0"})}):fa("div",{className:"acl-ma__featmain",children:fa(W,{id:"alignment-0",box:R[0].box,rotate:R[0].r,ratio:R[0].ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:f,sub:n,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:-3}})}),R.slice(1).map((V,O)=>fa("div",{className:"acl-ma__inset",style:{left:V.l,top:V.t,"--i":O+1},children:fa(W,{id:"alignment-"+(O+1),box:V.box,rotate:V.r,ratio:V.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:V.label,color:V.color,subColor:"var(--acl-ink)",rotate:V.sr}})},O)),d&&C&&b>0&&fa("div",{className:"acl-ma__stamp",children:fa(H,{label:s,sub:i,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6,size:15})}),C&&fa(p,{kind:"spark",size:46,rotate:-10,fill:"var(--acl-yellow)",stroke:"var(--acl-paper)",style:{left:30,bottom:90,zIndex:5}})]}),We("div",{className:"acl-ma__ledger",children:[We("div",{className:"acl-ma__badge",children:["\u25A3 ",F]}),We("div",{className:"acl-ma__hero",children:[We("div",{className:"acl-ma__heronum",children:[q.value,fa("em",{children:q.unit})]}),fa("div",{className:"acl-ma__herolabel",children:q.label})]}),We("div",{className:"acl-ma__ledgerhd",children:[N," ",a,_?e:""]}),fa("div",{className:"acl-ma__rows",children:E.map((V,O)=>{let U=g&&O===T;return We("div",{className:"acl-ma__row"+(U?" acl-ma__row--focus":g&&!U?" acl-ma__row--dim":""),style:{"--i":O},children:[U&&C&&fa("div",{className:"acl-ma__fx",children:fa(H,{label:o,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:5,size:13})}),We("div",{className:"acl-ma__rname",children:[V.k,fa("small",{children:V.en})]}),We("div",{className:"acl-ma__rval",children:[V.v,fa("em",{children:L})]}),_&&fa("div",{className:"acl-ma__dots",children:[0,1,2].map(sa=>fa("span",{className:"acl-ma__dot",style:{background:sa<V.rate?U?"var(--acl-pink)":"var(--acl-ink)":"transparent"}},sa))})]},O)})}),fa("div",{className:"acl-ma__tiles",children:B.map((V,O)=>We("div",{className:"acl-ma__tile",children:[fa("div",{className:"k",children:V.k}),We("div",{className:"v",children:[V.v,fa("em",{children:V.unit})]})]},O))})]})]}),We("div",{className:"acl-ma__foot",children:[C&&fa(p,{kind:"loop",size:56,style:{position:"static"}}),fa("span",{children:v})]})]})}po.defaults={images:[],backgroundTheme:"muted",mediaCount:2,posterStamp:!0,rowCount:3,showRating:!0,metricCount:2,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Model Alignment",headline:"安全與對齊工具",subheadline:"模型安全公司",summary:"模型安全與對齊公司吸引<b>長期資本</b>關注\u3002",badge:"Alignment \xB7 安全臺賬",posterWord:"SAFE",hero:{label:"賽道融資額",value:"21",unit:"億"},ledgerTitle:"安全能力",posterTag:"Feature \xB7 安全評測",trustStickerLabel:"可信 AI",trustStickerSub:"TRUST",longTermStickerLabel:"長期資本",longTermStickerSub:"LONG-TERM",ledgerSuffix:"\xB7 Safety Ledger",ledgerRatingSuffix:" \xB7 能力強度",trustEntryStickerLabel:"信任入口",valueUnit:"億",rows:[{k:"評測平臺",en:"Evaluation",v:8,rate:3},{k:"對齊工具",en:"Alignment",v:7,rate:3},{k:"紅隊服務",en:"Red Teaming",v:6,rate:2},{k:"審計追溯",en:"Audit Trail",v:3,rate:2}],metrics:[{k:"事件數",v:"5",unit:"筆"},{k:"平均單筆",v:"4.2",unit:"億"},{k:"評測佔比",v:"38",unit:"%"}],feature:{0:[],1:[{box:600,r:-2,ratio:1.1}],2:[{box:560,r:-2,ratio:1.05},{l:600,t:430,box:240,r:5,ratio:.85,sr:4,color:"var(--acl-blue)",label:"對齊"}],3:[{box:520,r:-2,ratio:1},{l:30,t:30,box:220,r:-5,ratio:.82,sr:-4,color:"var(--acl-blue)",label:"對齊"},{l:600,t:450,box:220,r:5,ratio:1,sr:4,color:"var(--acl-pink)",label:"紅隊"}]},closingLine:"可信 AI 會成為企業級 AI 的基礎設施\u3002"};po.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"特寫圖片數量(0\u20133\uFF0C1 主圖 + 至多 2 張巢狀圖)\uFF1B每張按上傳圖片比例自適應"},{key:"posterStamp",type:"boolean",default:!0,label:"海報印章",desc:"海報上\u300C長期資本\u300D印章貼紙 顯隱"},{key:"rowCount",type:"number",default:3,min:2,max:4,step:1,label:"行數",desc:"安全能力臺賬行數(2\u20134)"},{key:"showRating",type:"boolean",default:!0,label:"強度列",desc:"能力強度評級圓點列 顯隱"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"臺賬底部支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var ip=po.defaults,np=po.controls;var sn={};Y(sn,{controls:()=>cp,default:()=>fo,defaults:()=>rp});import"react";import{jsx as st,jsxs as mo}from"react/jsx-runtime";function fo(t){let l={...fo.defaults,...t},{backgroundTheme:c,showIndex:k,keywordCount:d,focusEnabled:u,focusIndex:_,showDecor:x,eyebrow:g,indexLabel:h,headlineLines:C,subheadline:P,keywords:I,kicker:A,closingLine:M,chapterFocusStickerLabel:F}=l,D=c==="ink",q=D?"radial-gradient(130% 130% at 84% 16%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",N=I.slice(0,Math.max(0,d)),z=Math.min(_,Math.max(0,N.length-1)),L=D?"rgba(236,239,53,.12)":"rgba(22,21,15,.07)";return mo("div",{className:"acl-root acl-c4"+(D?" acl-c4--ink":""),style:{background:q},children:[st("style",{children:`
        .acl-c4{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:88px 100px 80px; display:flex; flex-direction:column; }
        .acl-c4--ink{ color:var(--acl-paper); }

        /* giant solid-tint stencil index, bleeding off the right edge */
        .acl-c4__ghost{ position:absolute; right:-36px; top:50%; transform:translateY(-52%);
          font-family:var(--acl-font-num); font-size:660px; line-height:.62; letter-spacing:-.04em;
          color:${L}; z-index:0; pointer-events:none; }

        .acl-c4__head{ position:relative; z-index:2; display:flex; align-items:center; gap:20px; }
        .acl-c4__eyebrow{ display:inline-flex; align-items:center; gap:14px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:25px; letter-spacing:.18em; text-transform:uppercase;
          color:var(--acl-ink); background:var(--acl-yellow); padding:10px 18px; transform:rotate(-1.4deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); }
        .acl-c4__kicker{ font-family:var(--acl-font-cn); font-weight:700; font-size:30px; line-height:1.1;
          opacity:.9; color:rgba(22,21,15,.72); }
        .acl-c4--ink .acl-c4__kicker{ color:rgba(251,250,244,.7); }

        .acl-c4__mid{ position:relative; z-index:2; flex:1; display:flex; flex-direction:column;
          justify-content:center; }
        .acl-c4__h{ font-weight:900; font-size:120px; line-height:1.42; letter-spacing:-.018em; margin:0; }
        .acl-c4__h .mk{ display:inline-block; line-height:1; background:var(--acl-pink); color:var(--acl-ink);
          padding:.04em .1em; transform:rotate(-1deg); margin-top:.12em; }
        .acl-c4__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:26px; letter-spacing:.04em;
          text-transform:uppercase; margin-top:24px; color:rgba(22,21,15,.6); }
        .acl-c4--ink .acl-c4__sub{ color:var(--acl-yellow); }

        /* keyword filmstrip */
        .acl-c4__strip{ position:relative; z-index:2; display:flex; gap:18px; flex-wrap:wrap; margin-top:6px; }
        .acl-c4__tile{ position:relative; display:flex; align-items:center; gap:16px; padding:16px 26px 16px 20px;
          background:var(--acl-paper); border:3px solid var(--acl-ink); box-shadow:5px 6px 0 rgba(22,21,15,.18);
          transition:transform .25s, background .25s, color .25s; }
        .acl-c4__tile .no{ font-family:var(--acl-font-num); font-size:42px; line-height:.8; color:var(--acl-pink); }
        .acl-c4__tile .kw{ font-weight:900; font-size:34px; line-height:1; letter-spacing:-.01em; color:var(--acl-ink); }
        .acl-c4__tile--focus{ background:var(--acl-ink); transform:rotate(-2deg) translateY(-4px); }
        .acl-c4__tile--focus .kw{ color:var(--acl-paper); }
        .acl-c4__tile--focus .no{ color:var(--acl-yellow); }
        .acl-c4--ink .acl-c4__tile--focus{ background:var(--acl-yellow); }
        .acl-c4--ink .acl-c4__tile--focus .kw{ color:var(--acl-ink); }
        .acl-c4--ink .acl-c4__tile--focus .no{ color:var(--acl-pink); }
        .acl-c4__tfx{ position:absolute; right:-16px; top:-22px; z-index:4; }

        .acl-c4__foot{ position:relative; z-index:2; display:flex; align-items:center; gap:16px;
          font-family:var(--acl-font-cn); font-weight:600; font-size:26px; margin-top:42px; color:rgba(22,21,15,.7); }
        .acl-c4--ink .acl-c4__foot{ color:var(--acl-paper); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-c4__ghost{ animation:acl-c4-ghost .7s cubic-bezier(.2,.9,.3,1.1) both; }
          [data-deck-active] .acl-c4__h{ animation:acl-c4-in .55s cubic-bezier(.2,.8,.2,1) both; animation-delay:.08s; }
          [data-deck-active] .acl-c4__tile{ animation:acl-c4-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .3s); }
        }
        @keyframes acl-c4-ghost{ from{ opacity:0; transform:translate(40px,-52%); } to{ opacity:1; } }
        @keyframes acl-c4-in{ from{ opacity:0; transform:translateY(24px); } to{ opacity:1; transform:none; } }
      `}),k&&st("div",{className:"acl-c4__ghost","aria-hidden":"true",children:h}),mo("div",{className:"acl-c4__head",children:[mo("div",{className:"acl-c4__eyebrow",children:[g,x&&st(p,{kind:"spark",size:24,fill:"var(--acl-ink)",style:{position:"static"}})]}),st("span",{className:"acl-c4__kicker",children:A})]}),mo("div",{className:"acl-c4__mid",children:[mo("h1",{className:"acl-c4__h",children:[C[0],st("br",{}),st("span",{className:"mk",children:C[1]})]}),st("div",{className:"acl-c4__sub",children:P})]}),N.length>0&&st("div",{className:"acl-c4__strip",children:N.map((y,w)=>{let v=u&&w===z;return mo("div",{className:"acl-c4__tile"+(v?" acl-c4__tile--focus":""),style:{"--i":w},children:[v&&x&&st("div",{className:"acl-c4__tfx",children:st(H,{label:F,color:"var(--acl-yellow)",rotate:6})}),st("span",{className:"no",children:String(w+1).padStart(2,"0")}),st("span",{className:"kw",children:y})]},w)})}),mo("div",{className:"acl-c4__foot",children:[x&&st(p,{kind:"loop",size:58,color:D?"var(--acl-yellow)":"var(--acl-ink)",style:{position:"static"}}),st("span",{children:M})]})]})}fo.defaults={backgroundTheme:"ink",showIndex:!0,keywordCount:6,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Chapter 04",indexLabel:"04",headlineLines:["資本與","地區結構"],subheadline:"輪次\u3001投資人和地理叢集",kicker:"錢從哪來\uFF0C又流向哪裡",keywords:["後期輪","戰略投資","雲資源","灣區","紐約","西雅圖"],closingLine:"下一組頁面進入更細的拆解\u3002",chapterFocusStickerLabel:"本章重點"};fo.controls=[{key:"backgroundTheme",type:"enum",default:"ink",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差章節頁)"},{key:"showIndex",type:"boolean",default:!0,label:"大章節號",desc:"右側巨型描邊章節編號的顯示/隱藏"},{key:"keywordCount",type:"number",default:6,min:0,max:6,step:1,label:"關鍵詞數量",desc:"本章關鍵詞膠片格的數量(0\u20136)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個關鍵詞格"},{key:"focusIndex",type:"number",default:0,min:0,maxFrom:"keywordCount",step:1,label:"重點物件",desc:"被高亮的關鍵詞序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var rp=fo.defaults,cp=fo.controls;var pn={};Y(pn,{controls:()=>pp,default:()=>go,defaults:()=>sp});import"react";import{jsx as xa,jsxs as Xe}from"react/jsx-runtime";function go(t){let l={...go.defaults,...t},{backgroundTheme:c,rowCount:k,showCountDots:d,showBars:u,showRating:_,focusEnabled:x,focusIndex:g,showStat:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,columnLabels:F,rows:D,amountUnit:q,stat:N,closingLine:z}=l,L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=j(D).slice(0,Math.max(2,$(k,2))),w=Math.max(0,Math.min(Number(g)||0,y.length-1)),v=X(y.map(m=>$(m?.amount)),1);return Xe("div",{className:"acl-root acl-es",style:{background:L},children:[xa("style",{children:`
        .acl-es{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 70px; display:flex; flex-direction:column; }
        .acl-es__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-es__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:26px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:12px; }
        .acl-es__h{ font-weight:900; font-size:92px; line-height:.95; margin:0; }
        .acl-es__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:25px;
          padding:10px 17px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-es__summary{ margin-left:auto; max-width:560px; font-weight:700; font-size:27px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-es__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-es__panel{ position:relative; flex:1; margin-top:30px; background:var(--acl-paper);
          border:4px solid var(--acl-ink); box-shadow:10px 12px 0 rgba(22,21,15,.16);
          padding:16px 48px 22px; display:flex; flex-direction:column; }
        .acl-es__colhead{ display:grid; grid-template-columns:340px 340px 380px 1fr 250px; align-items:center;
          gap:30px; padding:16px 6px 14px; border-bottom:4px solid var(--acl-ink);
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.07em; text-transform:uppercase;
          color:rgba(22,21,15,.55); }
        .acl-es__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-es__row{ flex:1; display:grid; grid-template-columns:340px 340px 380px 1fr 250px; align-items:center;
          gap:30px; padding:0 6px; border-bottom:2px dashed rgba(22,21,15,.2); position:relative;
          transition:background .25s, color .25s; }
        .acl-es__row:last-child{ border-bottom:none; }

        .acl-es__stage{ display:flex; flex-direction:column; gap:6px; }
        .acl-es__stage b{ font-weight:900; font-size:44px; line-height:1; }
        .acl-es__stage span{ font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); }

        /* count dot array */
        .acl-es__count{ display:flex; align-items:center; gap:18px; }
        .acl-es__dots{ display:grid; grid-template-columns:repeat(6, 22px); gap:9px; }
        .acl-es__dots i{ width:22px; height:22px; border-radius:50%; background:var(--acl-pink);
          border:2.5px solid var(--acl-ink); }
        .acl-es__cval{ font-family:var(--acl-font-num); font-size:50px; line-height:.9; }
        .acl-es__cval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:4px; opacity:.6; }

        /* amount bar */
        .acl-es__amt{ display:flex; align-items:center; gap:18px; }
        .acl-es__track{ flex:1; height:32px; background:rgba(22,21,15,.08); border:2.5px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-es__fill{ position:absolute; left:0; top:0; bottom:0; background:var(--acl-ink);
          transition:width .5s cubic-bezier(.2,.8,.2,1); }
        .acl-es__aval{ font-family:var(--acl-font-num); font-size:46px; line-height:.9; min-width:150px;
          text-align:right; white-space:nowrap; }
        .acl-es__aval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:4px; opacity:.6; }

        /* theme tags */
        .acl-es__tags{ display:flex; flex-wrap:wrap; gap:10px; }
        .acl-es__tag{ font-family:var(--acl-font-mono); font-size:19px; font-weight:700; letter-spacing:.02em;
          padding:8px 16px; border:2.5px solid var(--acl-ink); background:var(--acl-yellow); white-space:nowrap; }

        /* signal rating */
        .acl-es__sig{ display:flex; flex-direction:column; gap:10px; }
        .acl-es__pips{ display:flex; gap:10px; }
        .acl-es__pips i{ width:26px; height:26px; border:3px solid var(--acl-ink); transform:rotate(45deg); }
        .acl-es__pips i.on{ background:var(--acl-pink); }
        .acl-es__sig span{ font-weight:700; font-size:22px; }

        .acl-es__row--focus{ background:var(--acl-ink); color:var(--acl-paper);
          box-shadow:8px 0 0 var(--acl-ink), -8px 0 0 var(--acl-ink); border-bottom-color:transparent; z-index:2; }
        .acl-es__row--focus .acl-es__stage span{ color:rgba(251,250,244,.6); }
        .acl-es__row--focus .acl-es__dots i{ border-color:var(--acl-paper); }
        .acl-es__row--focus .acl-es__track{ background:rgba(255,255,255,.16); border-color:var(--acl-paper); }
        .acl-es__row--focus .acl-es__fill{ background:var(--acl-yellow); }
        .acl-es__row--focus .acl-es__tag{ border-color:var(--acl-paper); background:transparent; color:var(--acl-paper); }
        .acl-es__row--focus .acl-es__pips i{ border-color:var(--acl-paper); }
        .acl-es__fx{ position:absolute; top:-16px; left:140px; z-index:5; }

        .acl-es__foot{ display:flex; align-items:center; gap:22px; margin-top:20px; }
        .acl-es__note{ display:flex; align-items:center; gap:16px; font-family:var(--acl-font-hand);
          font-size:32px; }
        .acl-es__stat{ margin-left:auto; display:flex; align-items:center; gap:18px;
          background:var(--acl-ink); color:var(--acl-paper); padding:14px 28px; transform:rotate(-1deg);
          box-shadow:5px 6px 0 rgba(22,21,15,.2); }
        .acl-es__stat b{ font-family:var(--acl-font-num); font-size:60px; line-height:.8; color:var(--acl-yellow); }
        .acl-es__stat span{ font-weight:700; font-size:22px; line-height:1.2; max-width:230px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-es__row{ animation:acl-es-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .06s); }
        }
        @keyframes acl-es-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
      `}),Xe("div",{className:"acl-es__head",children:[Xe("div",{children:[xa("div",{className:"acl-es__eyebrow",children:P}),xa("h1",{className:"acl-es__h",children:I})]}),xa("div",{className:"acl-es__sub",children:A}),xa("div",{className:"acl-es__summary",dangerouslySetInnerHTML:{__html:M}})]}),Xe("div",{className:"acl-es__panel",children:[Xe("div",{className:"acl-es__colhead",children:[xa("span",{children:F[0]}),xa("span",{children:F[1]}),Xe("span",{children:[F[2]," \xB7 ",q]}),xa("span",{children:F[3]}),xa("span",{children:F[4]})]}),xa("div",{className:"acl-es__rows",children:y.map((m,f)=>{let n=x&&f===w,s=Math.min(m.count,12);return Xe("div",{className:"acl-es__row"+(n?" acl-es__row--focus":""),style:{"--i":f},children:[n&&C&&xa("div",{className:"acl-es__fx",children:xa(H,{label:l.focusBadgeLabel,color:"var(--acl-yellow)",rotate:6})}),Xe("div",{className:"acl-es__stage",children:[xa("b",{children:m.round}),xa("span",{children:m.tag})]}),Xe("div",{className:"acl-es__count",children:[d&&xa("div",{className:"acl-es__dots",children:Array.from({length:s}).map((i,a)=>xa("i",{},a))}),Xe("div",{className:"acl-es__cval",children:[m.count,xa("em",{children:l.countUnit})]})]}),Xe("div",{className:"acl-es__amt",children:[u&&xa("div",{className:"acl-es__track",children:xa("div",{className:"acl-es__fill",style:{width:`${G($(m?.amount),v)*100}%`}})}),Xe("div",{className:"acl-es__aval",children:[$(m?.amount),xa("em",{children:q})]})]}),xa("div",{className:"acl-es__tags",children:m.themes.map((i,a)=>xa("span",{className:"acl-es__tag",children:i},a))}),Xe("div",{className:"acl-es__sig",children:[_&&xa("div",{className:"acl-es__pips",children:[0,1,2].map(i=>xa("i",{className:i<m.signal?"on":""},i))}),xa("span",{children:m.note})]})]},f)})})]}),Xe("div",{className:"acl-es__foot",children:[Xe("div",{className:"acl-es__note",children:[C&&xa(p,{kind:"loop",size:54,style:{position:"static"}}),xa("span",{children:z})]}),h&&Xe("div",{className:"acl-es__stat",children:[xa("b",{children:N.value}),xa("span",{children:N.label})]})]})]})}go.defaults={backgroundTheme:"muted",rowCount:3,showCountDots:!0,showBars:!0,showRating:!0,focusEnabled:!0,focusIndex:1,showStat:!0,showDecor:!0,eyebrow:"Early Stage Signal",headline:"新主題萌芽",subheadline:"早期輪訊號",summary:"Seed 與 A 輪金額雖小\uFF0C卻<b>藏著下一輪主題</b>的方向\u3002",columnLabels:["輪次","事件數","平均金額","代表主題","訊號強度"],amountUnit:"億美元",countUnit:"筆",focusBadgeLabel:"新主題",rows:[{round:"種子輪 Seed",tag:"Seed",count:8,amount:1.2,themes:["Agent","安全"],signal:1,note:"主題萌芽"},{round:"A 輪",tag:"Series A",count:12,amount:1.8,themes:["具身智慧","行業模型"],signal:2,note:"快速形成"},{round:"A+ / 擴充套件",tag:"Series A+",count:6,amount:1.4,themes:["企業搜尋"],signal:2,note:"初步驗證"},{round:"天使 / Pre-Seed",tag:"Pre-Seed",count:5,amount:.6,themes:["工具鏈"],signal:1,note:"極早期"}],stat:{value:"20.6%",label:"早期輪佔全年事件數"},closingLine:"小金額交易往往藏著下一輪主題\u3002"};go.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:3,min:2,max:4,step:1,label:"行數",desc:"展示的輪次行數(2\u20134)"},{key:"showCountDots",type:"boolean",default:!0,label:"數量點陣",desc:"事件數的氣泡點陣顯示/隱藏"},{key:"showBars",type:"boolean",default:!0,label:"資料條",desc:"金額列的橫向比例條顯示/隱藏"},{key:"showRating",type:"boolean",default:!0,label:"訊號評級",desc:"訊號強度的菱形評級顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:1,min:0,max:3,maxFrom:"rowCount",step:1,label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showStat",type:"boolean",default:!0,label:"底部統計",desc:"右下角統計徽標的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var sp=go.defaults,pp=go.controls;var dn={};Y(dn,{controls:()=>mp,default:()=>uo,defaults:()=>dp});import"react";import{jsx as za,jsxs as De}from"react/jsx-runtime";var jo=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-red)"];function uo(t){let l={...uo.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showTimeline:g,stageCount:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,shareTitle:F,segments:D,timelineTitle:q,stages:N,closingLine:z,shareTag:L,timelineTag:y,mixedStickerLabel:w,mixedStickerSub:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(D).slice(0,Math.max(3,$(d,3))),n=f.reduce((r,b)=>r+$(b?.pct),0),s=Q(_,0,Math.max(0,f.length-1)),i=f[s]||f[0]||{},a=j(N).slice(0,Math.max(2,$(h,2))),e=0,o=f.map((r,b)=>{let R=G(e,n,0)*100;return e+=$(r?.pct),`${jo[b%jo.length]} ${R}% ${G(e,n,0)*100}%`}).join(",");return De("div",{className:"acl-root acl-im",style:{background:m},children:[za("style",{children:`
        .acl-im{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 100px 70px; display:flex; flex-direction:column; }
        .acl-im__head{ display:flex; align-items:flex-end; gap:26px; }
        .acl-im__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-im__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-im__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-im__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-im__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-im__body{ flex:1; display:flex; gap:46px; margin-top:32px; align-items:stretch; min-height:0; }
        .acl-im__panel{ background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:8px 10px 0 rgba(22,21,15,.16); padding:30px 36px; display:flex; flex-direction:column;
          position:relative; }
        .acl-im__panel.left{ flex:0 0 ${g?880:1640}px; }
        .acl-im__panel.right{ flex:1; }
        .acl-im__ptitle{ font-weight:900; font-size:28px; margin:0 0 4px; display:flex; align-items:center; gap:12px; }
        .acl-im__ptag{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:18px; }

        /* donut */
        .acl-im__donutwrap{ flex:1; display:flex; align-items:center; gap:38px; }
        .acl-im__donut{ position:relative; width:320px; height:320px; border-radius:50%; flex:0 0 auto;
          box-shadow:5px 7px 0 rgba(22,21,15,.16); }
        .acl-im__dcenter{ position:absolute; inset:80px; border-radius:50%; z-index:2; background:var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
        .acl-im__dcenter b{ font-family:var(--acl-font-num); font-size:54px; line-height:.82; color:var(--acl-pink); }
        .acl-im__dcenter span{ font-weight:700; font-size:18px; max-width:140px; line-height:1.2; margin-top:6px; }
        .acl-im__legend{ flex:1; display:flex; flex-direction:column; gap:12px; }
        .acl-im__lrow{ display:grid; grid-template-columns:20px 1fr auto; align-items:center; gap:12px;
          font-weight:700; font-size:22px; padding:7px 10px; transition:opacity .25s; }
        .acl-im__lrow i{ width:20px; height:20px; }
        .acl-im__lrow .pc{ font-family:var(--acl-font-num); font-size:30px; }
        .acl-im__lrow--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:rotate(-1deg);
          box-shadow:4px 5px 0 rgba(22,21,15,.2); }
        .acl-im__lrow--dim{ opacity:.4; }

        /* bars */
        .acl-im__bars{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:22px; }
        .acl-im__bar{ display:grid; grid-template-columns:230px 1fr 92px; align-items:center; gap:16px;
          transition:opacity .25s; }
        .acl-im__bar .bl{ font-weight:700; font-size:24px; }
        .acl-im__bar .track{ height:36px; background:rgba(22,21,15,.08); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-im__bar .fill{ position:absolute; inset:0 auto 0 0; transition:width .5s; }
        .acl-im__bar .pc{ font-family:var(--acl-font-num); font-size:34px; text-align:right; }
        .acl-im__bar--focus .bl{ color:var(--acl-pink); }
        .acl-im__bar--dim{ opacity:.42; }

        /* evolution timeline */
        .acl-im__evo{ flex:1; display:flex; flex-direction:column; justify-content:space-between;
          position:relative; padding-left:36px; }
        .acl-im__evoline{ position:absolute; left:13px; top:14px; bottom:14px; width:0;
          border-left:4px dashed var(--acl-ink); }
        .acl-im__step{ position:relative; display:flex; flex-direction:column; gap:5px; padding:4px 0; }
        .acl-im__stepdot{ position:absolute; left:-36px; top:4px; width:28px; height:28px; border-radius:50%;
          background:var(--acl-yellow); border:4px solid var(--acl-ink); }
        .acl-im__step:last-child .acl-im__stepdot{ background:var(--acl-pink); }
        .acl-im__phase{ font-family:var(--acl-font-mono); font-size:15px; font-weight:700; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-im__stitle{ font-weight:900; font-size:34px; line-height:1.04; }
        .acl-im__snote{ font-size:19px; line-height:1.35; color:rgba(22,21,15,.72); max-width:440px; }

        .acl-im__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-im__step{ animation:acl-im-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .25s); }
        }
        @keyframes acl-im-in{ from{ opacity:0; transform:translateX(20px); } to{ opacity:1; transform:none; } }
      `}),De("div",{className:"acl-im__head",children:[De("div",{children:[za("div",{className:"acl-im__eyebrow",children:P}),za("h1",{className:"acl-im__h",children:I})]}),za("div",{className:"acl-im__sub",children:A}),za("div",{className:"acl-im__summary",dangerouslySetInnerHTML:{__html:M}})]}),De("div",{className:"acl-im__body",children:[De("div",{className:"acl-im__panel left",children:[De("h3",{className:"acl-im__ptitle",children:[F,C&&za(p,{kind:"spark",size:34,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})]}),za("div",{className:"acl-im__ptag",children:L}),k==="donut"&&De("div",{className:"acl-im__donutwrap",children:[za("div",{className:"acl-im__donut",style:{background:`conic-gradient(${o})`},children:De("div",{className:"acl-im__dcenter",children:[De("b",{children:[$(i.pct),"%"]}),za("span",{children:u?i.label:F})]})}),za("div",{className:"acl-im__legend",children:f.map((r,b)=>{let R=u&&b===s,E=u&&!R;return De("div",{className:"acl-im__lrow"+(R?" acl-im__lrow--focus":"")+(E?" acl-im__lrow--dim":""),children:[za("i",{style:{background:jo[b%jo.length]}}),za("span",{children:r.label}),x&&De("span",{className:"pc",children:[$(r?.pct),"%"]})]},b)})})]}),k==="bars"&&za("div",{className:"acl-im__bars",children:f.map((r,b)=>{let R=u&&b===s,E=u&&!R,T=G($(r?.pct),X(f.map(B=>$(B?.pct)),1))*100;return De("div",{className:"acl-im__bar"+(R?" acl-im__bar--focus":"")+(E?" acl-im__bar--dim":""),children:[za("div",{className:"bl",children:r.label}),za("div",{className:"track",children:za("div",{className:"fill",style:{width:T+"%",background:jo[b%jo.length]}})}),x&&De("div",{className:"pc",children:[$(r?.pct),"%"]})]},b)})})]}),g&&De("div",{className:"acl-im__panel right",children:[De("h3",{className:"acl-im__ptitle",children:[q,C&&za(p,{kind:"arrowS",size:36,rotate:-16,style:{position:"static"}})]}),za("div",{className:"acl-im__ptag",children:y}),De("div",{className:"acl-im__evo",children:[za("div",{className:"acl-im__evoline"}),a.map((r,b)=>De("div",{className:"acl-im__step",style:{"--i":b},children:[za("div",{className:"acl-im__stepdot"}),za("div",{className:"acl-im__phase",children:r.phase}),za("div",{className:"acl-im__stitle",children:r.title}),za("div",{className:"acl-im__snote",children:r.note})]},b)),C&&za("div",{style:{position:"absolute",right:6,bottom:18},children:za(H,{label:w,sub:v,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4})})]})]})]}),De("div",{className:"acl-im__foot",children:[C&&za(p,{kind:"loop",size:56,style:{position:"static"}}),za("span",{children:z})]})]})}uo.defaults={backgroundTheme:"primary",chartType:"donut",segmentCount:4,focusEnabled:!0,focusIndex:1,showValueLabels:!0,showTimeline:!0,stageCount:3,showDecor:!0,eyebrow:"Investor Mix",headline:"資本來源結構",subheadline:"投資人型別分佈",summary:"AI 融資已從純 VC 交易\uFF0C轉向<b>產業資本混合</b>交易\u3002",shareTitle:"投資人型別佔比",segments:[{label:"傳統 VC",pct:42},{label:"企業戰略",pct:27},{label:"成長基金",pct:18},{label:"雲廠商相關",pct:13}],timelineTitle:"資本來源的演進",shareTag:"Investor type \xB7 share of capital",timelineTag:"From pure VC to industry capital",mixedStickerLabel:"產業資本",mixedStickerSub:"混合",stages:[{phase:"Phase 01 \xB7 早期",title:"純 VC 主導",note:"財務投資人主導\uFF0C關注估值與回報倍數\u3002"},{phase:"Phase 02 \xB7 當下",title:"產業資本入場",note:"企業戰略與成長基金加入\uFF0C繫結業務與資源\u3002"},{phase:"Phase 03 \xB7 趨勢",title:"雲廠商深度繫結",note:"算力與渠道成為出資籌碼\uFF0C資本即資源\u3002"}],closingLine:"錢的來源本身\uFF0C也是產業結構訊號\u3002"};uo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"donut",options:["donut","bars"],label:"圖表型別",desc:"佔比模組的呈現\uFF1A環形 / 條形"},{key:"segmentCount",type:"number",default:4,min:3,max:4,step:1,label:"分段數量",desc:"投資人型別分段的數量(3\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個分段"},{key:"focusIndex",type:"number",default:1,min:0,max:3,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的分段序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各分段百分比標籤的顯示/隱藏"},{key:"showTimeline",type:"boolean",default:!0,label:"演進時間軸",desc:"右側資本來源演進軸的顯示/隱藏"},{key:"stageCount",type:"number",default:3,min:2,max:3,step:1,showIf:"showTimeline",label:"階段數量",desc:"演進時間軸的階段數量(2\u20133)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var dp=uo.defaults,mp=uo.controls;var mn={};Y(mn,{controls:()=>up,default:()=>Zt,defaults:()=>gp,numberBounds:()=>_p});import fp from"react";import{jsx as ge,jsxs as Mt}from"react/jsx-runtime";var gr=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-red)"];function Zt(t){let l={...Zt.defaults,...t},{backgroundTheme:c,mediaCount:k,cardCount:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,cardsTitle:A,cards:M,collage:F,closingLine:D,stageTag:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=F[k]||[],L=M.slice(0,Math.max(2,d)),y=Math.max(0,Math.min(Number(_)||0,L.length-1));return Mt("div",{className:"acl-root acl-rs",style:{background:N},children:[ge("style",{children:`
        .acl-rs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 66px; display:flex; flex-direction:column; }
        .acl-rs__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-rs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-rs__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-rs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-rs__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-rs__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-rs__body{ flex:1; display:flex; gap:50px; margin-top:30px; min-height:0; }

        /* left: photo collage stage */
        .acl-rs__stage{ position:relative; flex:1 1 auto; min-width:0; }
        .acl-rs__slot{ position:absolute; }
        .acl-rs__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); }
        .acl-rs__stagetag{ position:absolute; left:0; bottom:6px; font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.5);
          display:flex; align-items:center; gap:8px; }
        .acl-rs__stagetag i{ width:34px; height:3px; background:var(--acl-ink); display:block; }

        /* right: resource binding cards */
        .acl-rs__cards{ flex:0 0 760px; display:flex; flex-direction:column; gap:16px; min-height:0;
          justify-content:center; }
        .acl-rs__cardsT{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); display:flex; align-items:center; gap:10px; }
        .acl-rs__cardsT b{ font-family:var(--acl-font-cn); font-weight:900; font-size:26px;
          letter-spacing:0; text-transform:none; color:var(--acl-ink); }
        .acl-rs__card{ background:var(--acl-paper); border:3px solid var(--acl-ink); padding:16px 22px 14px;
          box-shadow:6px 7px 0 rgba(22,21,15,.16); display:grid;
          grid-template-columns:54px 1fr auto; grid-template-rows:auto auto; column-gap:18px;
          align-items:center; transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-rs__idx{ grid-row:1 / span 2; width:54px; height:54px; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:30px; color:var(--acl-paper); }
        .acl-rs__cl{ font-weight:900; font-size:30px; line-height:1.02; }
        .acl-rs__cn{ grid-column:2; font-size:18px; line-height:1.3; color:rgba(22,21,15,.62); margin-top:2px; }
        .acl-rs__cv{ grid-row:1 / span 2; grid-column:3; text-align:right; font-family:var(--acl-font-num);
          font-size:58px; line-height:.86; }
        .acl-rs__cv em{ display:block; font-style:normal; font-family:var(--acl-font-mono); font-weight:700;
          font-size:15px; letter-spacing:.04em; color:rgba(22,21,15,.5); margin-top:4px; text-transform:uppercase; }
        .acl-rs__bar{ grid-column:1 / -1; grid-row:3; height:10px; margin-top:13px; background:rgba(22,21,15,.1);
          border:2px solid var(--acl-ink); position:relative; overflow:hidden; }
        .acl-rs__fill{ position:absolute; inset:0 auto 0 0; transition:width .55s cubic-bezier(.2,.8,.2,1); }
        .acl-rs__card{ grid-template-rows:auto auto auto; }
        .acl-rs__card--focus{ transform:rotate(-.6deg); box-shadow:9px 11px 0 rgba(22,21,15,.22);
          border-color:var(--acl-pink); }
        .acl-rs__card--dim{ opacity:.5; }

        .acl-rs__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-rs__card{ animation:acl-rs-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .25s); }
        }
        @keyframes acl-rs-in{ from{ opacity:0; transform:translateX(22px); } to{ opacity:1; transform:none; } }
      `}),Mt("div",{className:"acl-rs__head",children:[Mt("div",{children:[ge("div",{className:"acl-rs__eyebrow",children:h}),ge("h1",{className:"acl-rs__h",children:C})]}),ge("div",{className:"acl-rs__sub",children:P}),ge("div",{className:"acl-rs__summary",dangerouslySetInnerHTML:{__html:I}})]}),Mt("div",{className:"acl-rs__body",children:[Mt("div",{className:"acl-rs__stage",children:[z.length===0&&ge("div",{className:"acl-rs__empty",children:"\uFF08圖片可選 \xB7 0\uFF09"}),z.map((w,v)=>ge("div",{className:"acl-rs__slot",style:{left:w.l,top:w.t},children:ge(W,{id:"resource-"+v,box:w.box,rotate:w.r,ratio:w.ratio,accent:w.accent,placeholder:"上傳",sticker:w.st})},v)),z.length>0&&Mt("div",{className:"acl-rs__stagetag",children:[ge("i",{}),q]}),g&&z.length>0&&Mt(fp.Fragment,{children:[ge(p,{kind:"arrow",size:100,rotate:4,color:"var(--acl-ink)",style:{right:-46,top:96}}),ge(p,{kind:"spark",size:44,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{left:-12,bottom:60}})]})]}),Mt("div",{className:"acl-rs__cards",children:[Mt("div",{className:"acl-rs__cardsT",children:[ge("b",{children:A}),g&&ge(p,{kind:"arrowS",size:34,rotate:-16,style:{position:"static"}})]}),L.map((w,v)=>{let m=u&&v===y,f=u&&!m,n=gr[v%gr.length];return Mt("div",{className:"acl-rs__card"+(m?" acl-rs__card--focus":"")+(f?" acl-rs__card--dim":""),style:{"--i":v},children:[ge("div",{className:"acl-rs__idx",style:{background:n},children:String(v+1).padStart(2,"0")}),ge("div",{className:"acl-rs__cl",children:w.label}),ge("div",{className:"acl-rs__cn",children:w.note}),Mt("div",{className:"acl-rs__cv",children:[x?w.value:"\xB7",ge("em",{children:w.unit})]}),ge("div",{className:"acl-rs__bar",children:ge("div",{className:"acl-rs__fill",style:{width:w.w+"%",background:n}})})]},v)})]})]}),Mt("div",{className:"acl-rs__foot",children:[g&&ge(p,{kind:"loop",size:56,style:{position:"static"}}),ge("span",{children:D})]})]})}Zt.defaults={images:[],backgroundTheme:"muted",mediaCount:2,cardCount:4,focusEnabled:!0,focusIndex:0,showValueLabels:!0,showDecor:!0,eyebrow:"Strategic Investors",headline:"錢以外的資源",subheadline:"戰略投資者角色",summary:"戰略投資者帶來渠道\u3001雲資源\u3001晶片供應和客戶入口\u2014\u2014<b>錢只是其中一部分</b>\u3002",cardsTitle:"被繫結的關鍵資源",stageTag:"Resource map \xB7 資源繫結現場",cards:[{label:"雲資源授信",value:"118",unit:"億美元",note:"GPU / 算力額度換取股權與優先權",w:100},{label:"聯合銷售",value:"36",unit:"起",note:"產業方渠道直達企業客戶",w:64},{label:"晶片供應承諾",value:"22",unit:"起",note:"鎖定先進製程與交付優先順序",w:46},{label:"資料合作",value:"17",unit:"起",note:"行業資料迴流強化模型壁壘",w:34}],collage:{0:[],1:[{l:120,t:60,box:560,r:-3,ratio:.95,accent:"var(--acl-paper)",ph:"資源現場",st:{label:"RES.01",sub:"資源",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}}],2:[{l:30,t:24,box:420,r:-4,ratio:.86,accent:"var(--acl-paper)",ph:"資源現場",st:{label:"RES.01",sub:"資源",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}},{l:360,t:340,box:360,r:4,ratio:1.18,accent:"var(--acl-paper)",ph:"資源現場",st:{label:"RES.02",color:"var(--acl-blue)",rotate:3}}],3:[{l:40,t:0,box:360,r:3,ratio:.9,accent:"var(--acl-paper)",ph:"圖片",st:{label:"RES.01",sub:"資源",color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-4}},{l:10,t:360,box:300,r:-5,ratio:1.2,accent:"var(--acl-paper)",ph:"圖片",st:{label:"RES.02",color:"var(--acl-blue)",rotate:4}},{l:360,t:270,box:340,r:5,ratio:.84,accent:"var(--acl-paper)",ph:"圖片",st:{label:"RES.03",color:"var(--acl-pink)",rotate:-3}}]},closingLine:"AI 公司融資\uFF0C是在鎖定未來資源\u3002"};Zt.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"拼貼照片槽數量\uFF1B佈局隨數量自動平衡\uFF0C每個槽按上傳圖片比例自適應"},{key:"cardCount",type:"number",default:4,min:2,max:4,step:1,label:"卡片數量",desc:"資源繫結卡的數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一張資源卡"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"cardCount",step:1,label:"重點物件",desc:"被高亮的資源卡序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各資源卡的數量數值 顯隱"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];Zt.numberBounds={"cards[].w":{min:0,max:100,semantics:"percent"}};var gp=Zt.defaults,up=Zt.controls,_p=Zt.numberBounds;var fn={};Y(fn,{controls:()=>vp,default:()=>_o,defaults:()=>bp});import xp from"react";import{jsx as la,jsxs as Ce}from"react/jsx-runtime";var dl=["var(--acl-pink)","var(--acl-blue)","var(--acl-ink)","var(--acl-red)"];function _o(t){let l={..._o.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,stageCount:u,focusEnabled:_,focusIndex:x,showValueLabels:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,loopTitle:M,hubLabel:F,hubSub:D,stages:q,shareTitle:N,segments:z,closingLine:L,loopTag:y,shareTag:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=j(q).slice(0,Math.max(2,$(u,2))),f=j(z).slice(0,Math.max(3,$(d,3))),n=f.reduce((E,T)=>E+$(T?.val),0),s=X(f.map(E=>$(E?.val)),1),i=Q(x,0,Math.max(0,f.length-1)),a=f[i]||f[0]||{},e=38,o=m.map((E,T)=>{let B=(-90+T*360/Pa(m.length,1))*Math.PI/180;return{...E,x:50+e*Math.cos(B),y:50+e*Math.sin(B)}}),r=0,b=f.map((E,T)=>{let B=G(r,n,0)*100;return r+=$(E?.val),`${dl[T%dl.length]} ${B}% ${G(r,n,0)*100}%`}).join(","),R=E=>Math.round(G($(E),n,0)*100);return Ce("div",{className:"acl-root acl-lp",style:{background:v},children:[la("style",{children:`
        .acl-lp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 66px; display:flex; flex-direction:column; }
        .acl-lp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-lp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-lp__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-lp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-lp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-lp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-lp__body{ flex:1; display:flex; gap:46px; margin-top:28px; min-height:0; align-items:stretch; }
        .acl-lp__panel{ background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:8px 10px 0 rgba(22,21,15,.16); padding:26px 34px 24px; display:flex; flex-direction:column;
          position:relative; }
        .acl-lp__panel.left{ flex:1; min-width:0; }
        .acl-lp__panel.right{ flex:0 0 640px; }
        .acl-lp__ptitle{ font-weight:900; font-size:27px; margin:0 0 2px; display:flex; align-items:center; gap:12px; }
        .acl-lp__ptag{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:8px; }

        /* loop ring */
        .acl-lp__ringwrap{ flex:1; position:relative; min-height:0; }
        .acl-lp__ring{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:min(100%, 580px); aspect-ratio:1; }
        .acl-lp__track{ position:absolute; inset:11%; border-radius:50%; border:4px dashed rgba(22,21,15,.5); }
        .acl-lp__hub{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:40%; aspect-ratio:1; border-radius:50%; background:var(--acl-ink); color:var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
          box-shadow:5px 7px 0 rgba(22,21,15,.2); padding:8px; }
        .acl-lp__hub b{ font-family:var(--acl-font-cn); font-weight:900; font-size:34px; line-height:1.02; }
        .acl-lp__hub span{ font-family:var(--acl-font-mono); font-size:12.5px; letter-spacing:.08em;
          text-transform:uppercase; color:var(--acl-yellow); margin-top:6px; }
        .acl-lp__node{ position:absolute; transform:translate(-50%,-50%); width:176px; text-align:center;
          display:flex; flex-direction:column; align-items:center; gap:6px; }
        .acl-lp__ndot{ width:56px; height:56px; border-radius:50%; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:28px; color:var(--acl-paper);
          border:4px solid var(--acl-paper); box-shadow:0 0 0 3px var(--acl-ink); }
        .acl-lp__nl{ font-weight:900; font-size:23px; line-height:1.04; }
        .acl-lp__nn{ font-size:15px; line-height:1.25; color:rgba(22,21,15,.62); }

        /* share chart */
        .acl-lp__donutwrap{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px; }
        .acl-lp__donut{ position:relative; width:300px; height:300px; border-radius:50%; flex:0 0 auto;
          box-shadow:5px 7px 0 rgba(22,21,15,.16); }
        .acl-lp__dcenter{ position:absolute; inset:76px; border-radius:50%; z-index:2; background:var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
        .acl-lp__dcenter b{ font-family:var(--acl-font-num); font-size:58px; line-height:.82; color:var(--acl-pink); }
        .acl-lp__dcenter span{ font-weight:700; font-size:16px; max-width:130px; line-height:1.2; margin-top:5px; }
        .acl-lp__legend{ width:100%; display:flex; flex-direction:column; gap:9px; }
        .acl-lp__lrow{ display:grid; grid-template-columns:18px 1fr auto; align-items:center; gap:12px;
          font-weight:700; font-size:20px; padding:5px 8px; transition:opacity .25s, background .25s; }
        .acl-lp__lrow i{ width:18px; height:18px; }
        .acl-lp__lrow .pc{ font-family:var(--acl-font-num); font-size:26px; }
        .acl-lp__lrow .pc em{ font-style:normal; font-family:var(--acl-font-mono); font-size:13px;
          color:rgba(22,21,15,.5); margin-left:4px; }
        .acl-lp__lrow--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-lp__lrow--focus .pc em{ color:rgba(251,250,244,.6); }
        .acl-lp__lrow--dim{ opacity:.42; }

        .acl-lp__bars{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:18px; }
        .acl-lp__bar{ display:grid; grid-template-columns:160px 1fr 96px; align-items:center; gap:14px;
          transition:opacity .25s; }
        .acl-lp__bar .bl{ font-weight:700; font-size:20px; }
        .acl-lp__bar .track{ height:32px; background:rgba(22,21,15,.08); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-lp__bar .fill{ position:absolute; inset:0 auto 0 0; transition:width .55s cubic-bezier(.2,.8,.2,1); }
        .acl-lp__bar .pc{ font-family:var(--acl-font-num); font-size:30px; text-align:right; }
        .acl-lp__bar .pc em{ font-style:normal; font-family:var(--acl-font-mono); font-size:12px;
          color:rgba(22,21,15,.5); margin-left:3px; }
        .acl-lp__bar--focus .bl{ color:var(--acl-pink); }
        .acl-lp__bar--dim{ opacity:.42; }

        .acl-lp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:18px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-lp__node{ animation:acl-lp-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .25s); }
          [data-deck-active] .acl-lp__lrow, [data-deck-active] .acl-lp__bar{
            animation:acl-lp-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); }
        }
        @keyframes acl-lp-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.8); } to{ opacity:1; } }
        @keyframes acl-lp-in{ from{ opacity:0; transform:translateX(16px); } to{ opacity:1; transform:none; } }
      `}),Ce("div",{className:"acl-lp__head",children:[Ce("div",{children:[la("div",{className:"acl-lp__eyebrow",children:C}),la("h1",{className:"acl-lp__h",children:P})]}),la("div",{className:"acl-lp__sub",children:I}),la("div",{className:"acl-lp__summary",dangerouslySetInnerHTML:{__html:A}})]}),Ce("div",{className:"acl-lp__body",children:[Ce("div",{className:"acl-lp__panel left",children:[Ce("h3",{className:"acl-lp__ptitle",children:[M,h&&la(p,{kind:"loop",size:34,style:{position:"static"}})]}),la("div",{className:"acl-lp__ptag",children:y}),la("div",{className:"acl-lp__ringwrap",children:Ce("div",{className:"acl-lp__ring",children:[la("div",{className:"acl-lp__track"}),Ce("div",{className:"acl-lp__hub",children:[la("b",{children:F}),la("span",{children:D})]}),o.map((E,T)=>Ce("div",{className:"acl-lp__node",style:{left:E.x+"%",top:E.y+"%","--i":T},children:[la("div",{className:"acl-lp__ndot",style:{background:dl[T%dl.length]},children:String(T+1).padStart(2,"0")}),la("div",{className:"acl-lp__nl",children:E.label}),la("div",{className:"acl-lp__nn",children:E.note})]},T)),h&&Ce(xp.Fragment,{children:[la(p,{kind:"arrow",size:70,rotate:36,color:"var(--acl-ink)",style:{right:-18,top:"24%"}}),la(p,{kind:"arrow",size:70,rotate:216,color:"var(--acl-ink)",style:{left:-18,bottom:"24%"}})]})]})})]}),Ce("div",{className:"acl-lp__panel right",children:[Ce("h3",{className:"acl-lp__ptitle",children:[N,h&&la(p,{kind:"spark",size:32,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static"}})]}),la("div",{className:"acl-lp__ptag",children:w}),k==="donut"&&Ce("div",{className:"acl-lp__donutwrap",children:[la("div",{className:"acl-lp__donut",style:{background:`conic-gradient(${b})`},children:Ce("div",{className:"acl-lp__dcenter",children:[la("b",{children:_?R(a.val)+"%":f.length}),la("span",{children:_?a.label:N})]})}),la("div",{className:"acl-lp__legend",children:f.map((E,T)=>{let B=_&&T===i,S=_&&!B;return Ce("div",{className:"acl-lp__lrow"+(B?" acl-lp__lrow--focus":"")+(S?" acl-lp__lrow--dim":""),style:{"--i":T},children:[la("i",{style:{background:dl[T%dl.length]}}),la("span",{children:E.label}),g&&Ce("span",{className:"pc",children:[$(E?.val),la("em",{children:l.segmentUnit})]})]},T)})})]}),k==="bars"&&la("div",{className:"acl-lp__bars",children:f.map((E,T)=>{let B=_&&T===i,S=_&&!B,V=G($(E?.val),s)*100;return Ce("div",{className:"acl-lp__bar"+(B?" acl-lp__bar--focus":"")+(S?" acl-lp__bar--dim":""),style:{"--i":T},children:[la("div",{className:"bl",children:E.label}),la("div",{className:"track",children:la("div",{className:"fill",style:{width:V+"%",background:dl[T%dl.length]}})}),g&&Ce("div",{className:"pc",children:[$(E?.val),la("em",{children:l.segmentUnit})]})]},T)})})]})]}),Ce("div",{className:"acl-lp__foot",children:[h&&la(p,{kind:"loop",size:56,style:{position:"static"}}),la("span",{children:L})]})]})}_o.defaults={backgroundTheme:"primary",chartType:"donut",segmentCount:4,stageCount:4,focusEnabled:!0,focusIndex:2,showValueLabels:!0,showDecor:!0,eyebrow:"Cloud Alliances",headline:"投資與算力消費閉環",subheadline:"雲廠商聯盟",summary:"雲廠商投資 AI 公司\uFF0C再透過算力消費<b>把價值收回來</b>\u3002",loopTitle:"資本\u2014算力閉環",loopTag:"Capital \u2192 Compute \u2192 Value \xB7 recirculating",hubLabel:"閉環",hubSub:"Closed Loop",stages:[{label:"雲廠商出資",note:"入股 / 授信模型公司"},{label:"資金轉算力",note:"融資變成 GPU 訂單"},{label:"算力消費",note:"回購雲廠商算力時長"},{label:"價值回收",note:"收入迴流\uFF0C再投資"}],shareTitle:"雲廠商相關融資",shareTag:"Related funding by cloud vendor \xB7 億美元",segments:[{label:"AWS 相關",val:74},{label:"Google Cloud",val:69},{label:"Azure 相關",val:88},{label:"Oracle Cloud",val:21}],closingLine:"雲資源\uFF0C正在成為融資交易的一部分\u3002",segmentUnit:"億"};_o.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"donut",options:["donut","bars"],label:"圖表型別",desc:"佔比模組的呈現\uFF1A環形 / 條形"},{key:"segmentCount",type:"number",default:4,min:3,max:4,step:1,label:"分段數量",desc:"佔比分段(廠商)的數量(3\u20134)"},{key:"stageCount",type:"number",default:4,min:2,max:4,step:1,label:"環節數量",desc:"閉環上的節點數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個佔比分段"},{key:"focusIndex",type:"number",default:2,min:0,max:3,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的分段序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各分段數值標籤的顯示/隱藏"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var bp=_o.defaults,vp=_o.controls;var gn={};Y(gn,{controls:()=>yp,default:()=>xo,defaults:()=>hp});import ur from"react";import{jsx as ue,jsxs as At}from"react/jsx-runtime";var _r=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)"];function xo(t){let l={...xo.defaults,...t},{backgroundTheme:c,segmentCount:k,mediaCount:d,focusEnabled:u,focusIndex:_,showValueLabels:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,hubLabel:A,hubSub:M,hubValue:F,segments:D,closingLine:q,nodeUnit:N,cardUnit:z}=l,L=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=D.slice(0,Math.max(2,k)),w=Math.min(d,y.length),v=Math.max(0,Math.min(Number(_)||0,y.length-1)),m=47,f=38,n=y.length%2===0?-45:-90,s=y.length===2?y.map((i,a)=>({...i,x:a===0?24:76,y:50})):y.map((i,a)=>{let e=(n+a*360/y.length)*Math.PI/180;return{...i,x:50+m*Math.cos(e),y:50+f*Math.sin(e)}});return At("div",{className:"acl-root acl-ec",style:{background:L},children:[ue("style",{children:`
        .acl-ec{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 60px; display:flex; flex-direction:column; }
        .acl-ec__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-ec__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-ec__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-ec__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ec__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-ec__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-ec__stage{ flex:1; position:relative; margin-top:2px; min-height:0; }
        .acl-ec__ring{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          height:100%; aspect-ratio:1.62; max-width:100%; }
        .acl-ec__spokes{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-ec__orbit{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:92%; height:90%; border:3px dashed rgba(22,21,15,.4); border-radius:50%; }

        .acl-ec__hub{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); z-index:3;
          width:402px; height:402px; border-radius:50%; background:var(--acl-ink); color:var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
          box-shadow:6px 9px 0 rgba(22,21,15,.22); }
        .acl-ec__hub b{ font-family:var(--acl-font-num); font-size:126px; line-height:.78; color:var(--acl-yellow); }
        .acl-ec__hub span{ font-family:var(--acl-font-mono); font-size:20px; letter-spacing:.1em;
          text-transform:uppercase; margin-top:12px; color:rgba(251,250,244,.72); }
        .acl-ec__hub u{ text-decoration:none; font-weight:900; font-size:28px; margin-top:9px; }

        .acl-ec__node{ position:absolute; transform:translate(-50%,-50%); z-index:2;
          display:flex; flex-direction:column; align-items:center; gap:12px; width:375px;
          transition:opacity .25s; }
        .acl-ec__node--dim{ opacity:.46; }
        .acl-ec__card{ background:var(--acl-paper); border:4px solid var(--acl-ink); padding:22px 30px 21px;
          box-shadow:8px 9px 0 rgba(22,21,15,.16); text-align:center; min-width:318px; }
        .acl-ec__node--focus .acl-ec__card{ border-color:var(--acl-pink); transform:rotate(-1.2deg);
          box-shadow:7px 9px 0 rgba(22,21,15,.22); }
        .acl-ec__cl{ font-weight:900; font-size:36px; line-height:1.02; display:flex; align-items:center;
          justify-content:center; gap:13px; }
        .acl-ec__cl i{ width:21px; height:21px; flex:0 0 auto; }
        .acl-ec__cv{ font-family:var(--acl-font-num); font-size:75px; line-height:.9; margin-top:5px; }
        .acl-ec__cv em{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          letter-spacing:.04em; color:rgba(22,21,15,.5); margin-left:5px; text-transform:uppercase; }
        .acl-ec__vtag{ font-family:var(--acl-font-num); font-size:51px; line-height:1;
          background:var(--acl-ink); color:var(--acl-yellow); padding:8px 18px; transform:rotate(-2deg); }
        .acl-ec__vtag em{ font-style:normal; font-family:var(--acl-font-mono); font-size:18px; margin-left:6px;
          color:rgba(251,250,244,.7); }
        .acl-ec__nlabel{ font-weight:900; font-size:31px; text-align:center; }

        .acl-ec__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:8px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ec__node{ animation:acl-ec-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .25s); }
          [data-deck-active] .acl-ec__hub{ animation:acl-ec-hub .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-ec-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.82); } to{ opacity:1; } }
        @keyframes acl-ec-hub{ from{ opacity:0; transform:translate(-50%,-50%) scale(.7); } to{ opacity:1; } }
      `}),At("div",{className:"acl-ec__head",children:[At("div",{children:[ue("div",{className:"acl-ec__eyebrow",children:h}),ue("h1",{className:"acl-ec__h",children:C})]}),ue("div",{className:"acl-ec__sub",children:P}),ue("div",{className:"acl-ec__summary",dangerouslySetInnerHTML:{__html:I}})]}),ue("div",{className:"acl-ec__stage",children:At("div",{className:"acl-ec__ring",children:[ue("div",{className:"acl-ec__orbit"}),ue("svg",{className:"acl-ec__spokes",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:s.map((i,a)=>ue("line",{x1:"50",y1:"50",x2:i.x,y2:i.y,stroke:"rgba(22,21,15,.42)",strokeWidth:"0.5",strokeDasharray:"1.6 1.4",strokeLinecap:"round"},a))}),At("div",{className:"acl-ec__hub",children:[ue("b",{children:A}),ue("u",{children:F}),ue("span",{children:M})]}),s.map((i,a)=>{let e=u&&a===v,o=u&&!e,r=_r[a%_r.length],b=a<w;return ue("div",{className:"acl-ec__node"+(e?" acl-ec__node--focus":"")+(o?" acl-ec__node--dim":""),style:{left:i.x+"%",top:i.y+"%","--i":a},children:b?At(ur.Fragment,{children:[ue(W,{id:"eco-"+a,box:294,rotate:a%2?3:-3,ratio:1,accent:e?"var(--acl-pink)":"var(--acl-paper)",placeholder:"上傳",sticker:{label:i.label,color:e?"var(--acl-pink)":r,rotate:-3,subColor:void 0,size:19}}),x&&At("div",{className:"acl-ec__vtag",children:[i.value,ue("em",{children:N})]})]}):At("div",{className:"acl-ec__card",children:[At("div",{className:"acl-ec__cl",children:[ue("i",{style:{background:r}}),i.label]}),x&&At("div",{className:"acl-ec__cv",children:[i.value,ue("em",{children:z})]})]})},a)}),g&&At(ur.Fragment,{children:[ue(p,{kind:"spark",size:48,rotate:-10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{left:"46%",top:"20%"}}),ue(p,{kind:"loop",size:50,color:"var(--acl-ink)",style:{right:"40%",bottom:"16%"}})]})]})}),At("div",{className:"acl-ec__foot",children:[g&&ue(p,{kind:"arrow",size:52,rotate:6,style:{position:"static"}}),ue("span",{children:q})]})]})}xo.defaults={images:[],backgroundTheme:"primary",segmentCount:4,mediaCount:2,focusEnabled:!0,focusIndex:0,showValueLabels:!0,showDecor:!0,eyebrow:"NVIDIA Ecosystem",headline:"GPU 資源鏈條",subheadline:"NVIDIA 生態",summary:"NVIDIA 生態內的融資\uFF0C圍繞 GPU\u3001網路\u3001叢集與推理<b>層層展開</b>\u3002",nodeUnit:"億",cardUnit:"億美元",hubLabel:"GPU",hubValue:"92 億",hubSub:"Ecosystem core \xB7 生態核心",segments:[{label:"GPU 雲",value:"64"},{label:"叢集管理",value:"12"},{label:"推理最佳化",value:"9"},{label:"晶片互聯",value:"7"}],closingLine:"算力供給能力\uFF0C正在變成融資能力\u3002"};xo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"segmentCount",type:"number",default:4,min:2,max:4,step:1,label:"節點數量",desc:"生態環上的節點數量(2\u20134)\uFF1B2 個時一左一右"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"前 N 個節點改為承載圖片(0\u20134\uFF0C超過節點數自動封頂)\uFF1B每張按上傳圖片比例自適應"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個生態節點"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的節點序號(從 0 起)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各節點融資額數值 顯隱"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var hp=xo.defaults,yp=xo.controls;var un={};Y(un,{controls:()=>wp,default:()=>bo,defaults:()=>kp});import"react";import{jsx as Fe,jsxs as _t}from"react/jsx-runtime";function bo(t){let l={...bo.defaults,...t},{backgroundTheme:c,factorCount:k,metricCount:d,focusEnabled:u,focusIndex:_,showDecor:x,eyebrow:g,kicker:h,headline:C,subheadline:P,bigNumber:I,bigUnit:A,caption:M,factorsTitle:F,factors:D,metrics:q,closingLine:N,regionStickerLabel:z,regionStickerSub:L}=l,y=c==="ink",w=y?"radial-gradient(120% 120% at 78% 8%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=D.slice(0,Math.max(2,k)),m=q.slice(0,Math.max(2,d)),f=Math.max(0,Math.min(Number(_)||0,v.length-1));return _t("div",{className:"acl-root acl-ga"+(y?" acl-ga--ink":""),style:{background:w},children:[Fe("style",{children:`
        .acl-ga{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 64px; display:flex; flex-direction:column; }
        .acl-ga--ink{ color:var(--acl-paper); }
        .acl-ga__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; z-index:3; }
        .acl-ga__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ga--ink .acl-ga__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-ga__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-ga__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-ga--ink .acl-ga__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-ga__body{ flex:1; display:flex; gap:56px; min-height:0; align-items:stretch; margin-top:8px; }

        /* left: narrative column */
        .acl-ga__left{ flex:1 1 0; min-width:0; display:flex; flex-direction:column; justify-content:center; }
        .acl-ga__label{ font-weight:900; font-size:46px; line-height:1.0; display:flex; align-items:center;
          gap:16px; flex-wrap:wrap; }
        .acl-ga__label i{ font-style:normal; font-family:var(--acl-font-mono); font-weight:700; font-size:16px;
          letter-spacing:.05em; text-transform:uppercase; padding:6px 12px; background:var(--acl-ink);
          color:var(--acl-paper); transform:rotate(-2deg); }
        .acl-ga--ink .acl-ga__label i{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-ga__cap{ font-weight:700; font-size:25px; line-height:1.44; max-width:680px; margin:18px 0 4px; }
        .acl-ga__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-ga--ink .acl-ga__cap b{ background:var(--acl-pink); color:var(--acl-paper); }

        .acl-ga__ftitle{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:26px 0 12px; display:flex; align-items:center; gap:10px; }
        .acl-ga--ink .acl-ga__ftitle{ color:rgba(251,250,244,.55); }
        .acl-ga__factors{ display:flex; flex-direction:column; gap:11px; }
        .acl-ga__f{ display:grid; grid-template-columns:44px 1fr; align-items:center; gap:16px;
          padding:10px 16px 10px 10px; border:3px solid var(--acl-ink); background:var(--acl-paper);
          box-shadow:5px 6px 0 rgba(22,21,15,.14); transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-ga--ink .acl-ga__f{ background:#221F18; border-color:rgba(251,250,244,.5); }
        .acl-ga__fn{ width:44px; height:44px; border-radius:50%; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:24px; background:var(--acl-ink); color:var(--acl-yellow); }
        .acl-ga--ink .acl-ga__fn{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-ga__ft{ font-weight:900; font-size:25px; line-height:1.05; }
        .acl-ga__fnote{ font-style:normal; display:block; font-weight:400; font-size:16px;
          color:rgba(22,21,15,.6); margin-top:1px; }
        .acl-ga--ink .acl-ga__fnote{ color:rgba(251,250,244,.6); }
        .acl-ga__f--focus{ border-color:var(--acl-pink); transform:rotate(-.7deg);
          box-shadow:8px 9px 0 rgba(22,21,15,.2); }
        .acl-ga__f--dim{ opacity:.5; }

        /* right: giant number */
        .acl-ga__right{ flex:0 0 820px; position:relative; display:flex; flex-direction:column;
          justify-content:center; }
        .acl-ga__numwrap{ position:relative; display:flex; align-items:flex-start; justify-content:flex-end; gap:6px; }
        .acl-ga__num{ position:relative; z-index:1; font-family:var(--acl-font-num);
          font-size:clamp(230px, 23vw, 332px); line-height:.82; letter-spacing:-.03em;
          color:var(--acl-pink); text-shadow:7px 8px 0 var(--acl-ink); }
        .acl-ga--ink .acl-ga__num{ color:var(--acl-yellow); text-shadow:7px 8px 0 rgba(0,0,0,.5); }
        .acl-ga__unit{ position:relative; z-index:1; font-family:var(--acl-font-num);
          font-size:120px; line-height:1; margin-top:28px; color:var(--acl-ink); }
        .acl-ga--ink .acl-ga__unit{ color:var(--acl-paper); }

        .acl-ga__tiles{ position:relative; z-index:1; display:flex; gap:18px; margin-top:48px;
          justify-content:flex-end; }
        .acl-ga__tile{ flex:0 1 200px; border-top:5px solid var(--acl-ink); padding-top:11px; text-align:right; }
        .acl-ga--ink .acl-ga__tile{ border-color:var(--acl-yellow); }
        .acl-ga__tk{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ga--ink .acl-ga__tk{ color:rgba(251,250,244,.55); }
        .acl-ga__tv{ font-family:var(--acl-font-num); font-size:54px; line-height:.96; margin-top:2px; }
        .acl-ga--ink .acl-ga__tv{ color:var(--acl-yellow); }
        .acl-ga__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:5px; color:rgba(22,21,15,.55); }
        .acl-ga--ink .acl-ga__tv em{ color:rgba(251,250,244,.55); }

        .acl-ga__pin{ position:absolute; right:2px; top:-30px; z-index:2; }

        .acl-ga__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; flex:0 0 auto; z-index:3; margin-top:4px; }
        .acl-ga--ink .acl-ga__foot{ color:var(--acl-paper); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ga__num{ animation:acl-ga-pop .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-ga__f{ animation:acl-ga-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .25s); }
        }
        @keyframes acl-ga-pop{ from{ opacity:0; transform:translateY(24px) scale(.93); } to{ opacity:1; transform:none; } }
        @keyframes acl-ga-rise{ from{ opacity:0; transform:translateX(-18px); } to{ opacity:1; transform:none; } }
      `}),_t("div",{className:"acl-ga__top",children:[Fe("div",{className:"acl-ga__eyebrow",children:g}),Fe("div",{className:"acl-ga__rule"}),Fe("div",{className:"acl-ga__kicker",children:h})]}),_t("div",{className:"acl-ga__body",children:[_t("div",{className:"acl-ga__left",children:[_t("div",{className:"acl-ga__label",children:[C,Fe("i",{children:P})]}),Fe("div",{className:"acl-ga__cap",dangerouslySetInnerHTML:{__html:M}}),_t("div",{className:"acl-ga__ftitle",children:[F,x&&Fe(p,{kind:"arrowS",size:32,rotate:-14,style:{position:"static"}})]}),Fe("div",{className:"acl-ga__factors",children:v.map((n,s)=>{let i=u&&s===f,a=u&&!i;return _t("div",{className:"acl-ga__f"+(i?" acl-ga__f--focus":"")+(a?" acl-ga__f--dim":""),style:{"--i":s},children:[Fe("div",{className:"acl-ga__fn",children:String(s+1).padStart(2,"0")}),_t("div",{className:"acl-ga__ft",children:[n.label,Fe("em",{className:"acl-ga__fnote",children:n.note})]})]},s)})})]}),_t("div",{className:"acl-ga__right",children:[_t("div",{className:"acl-ga__numwrap",children:[x&&Fe("div",{className:"acl-ga__pin",children:Fe(H,{label:z,sub:L,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-5,size:15})}),Fe("div",{className:"acl-ga__num",children:I}),Fe("div",{className:"acl-ga__unit",children:A})]}),Fe("div",{className:"acl-ga__tiles",children:m.map((n,s)=>_t("div",{className:"acl-ga__tile",children:[Fe("div",{className:"acl-ga__tk",children:n.k}),_t("div",{className:"acl-ga__tv",children:[n.v,Fe("em",{children:n.unit})]})]},s))})]})]}),_t("div",{className:"acl-ga__foot",children:[x&&Fe(p,{kind:"loop",size:56,fill:y?"var(--acl-yellow)":void 0,color:y?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}}),Fe("span",{children:N})]})]})}bo.defaults={backgroundTheme:"primary",factorCount:4,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Bay Area Cluster",kicker:"大數字",headline:"最大地理中心",subheadline:"SF Bay Area",bigNumber:"63.9",bigUnit:"%",caption:"舊金山灣區吃下全美 <b>63.9% 的 AI 融資額</b>\u2014\u2014資本\u3001人才與算力在同一片街區裡彼此迴圈\u3002",factorsTitle:"為什麼仍是灣區",regionStickerLabel:"灣區",regionStickerSub:"GRAVITY",factors:[{label:"人才密度",note:"頂尖研究者與工程師高度聚集"},{label:"資本網路",note:"頭部基金與天使就在隔壁街區"},{label:"雲廠商鄰近",note:"算力與基礎設施觸手可及"},{label:"模型實驗室",note:"前沿實驗室扎堆\uFF0C外溢效應強"}],metrics:[{k:"第二大中心",v:"11.2",unit:"%"},{k:"頭部實驗室",v:"8/10",unit:"在灣區"},{k:"平均單筆",v:"14",unit:"億"}],closingLine:"灣區\uFF0C仍是 AI 資本的重力中心\u3002"};bo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差大數字)"},{key:"factorCount",type:"number",default:4,min:2,max:4,step:1,label:"要素數量",desc:"左側優勢要素行數量(2\u20134)"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"大數字下方支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一條優勢要素"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"factorCount",step:1,label:"重點物件",desc:"被高亮的優勢要素序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與貼紙標籤 顯隱"}];var kp=bo.defaults,wp=bo.controls;var _n={};Y(_n,{controls:()=>zp,default:()=>vo,defaults:()=>Np});import xr from"react";import{jsx as Ta,jsxs as xt}from"react/jsx-runtime";function vo(t){let l={...vo.defaults,...t},{backgroundTheme:c,mediaCount:k,tagCount:d,metricCount:u,showShare:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,place:A,caption:M,tagsTitle:F,tags:D,shareValue:q,shareLabel:N,metrics:z,collage:L,sharePos:y,closingLine:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=D.slice(0,Math.max(2,d)),f=z.slice(0,Math.max(2,u)),n=Math.max(0,Math.min(Number(g)||0,m.length-1)),s=L[k]||[],i=y[k]||{l:"50%",t:"6%"},a=["var(--acl-pink)","var(--acl-blue)","var(--acl-yellow)","var(--acl-red)"];return xt("div",{className:"acl-root acl-gh",style:{background:v},children:[Ta("style",{children:`
        .acl-gh{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-gh__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-gh__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gh__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-gh__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-gh__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-gh__h{ font-weight:900; font-size:78px; line-height:.92; margin:0; }
        .acl-gh__place{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-gh__body{ flex:1; display:flex; gap:46px; margin-top:26px; min-height:0; }
        .acl-gh__left{ flex:0 0 700px; display:flex; flex-direction:column; min-width:0; }
        .acl-gh__cap{ font-weight:700; font-size:26px; line-height:1.46; }
        .acl-gh__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-gh__tagttl{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:30px 0 14px; display:flex;
          align-items:center; gap:10px; }
        .acl-gh__chips{ display:flex; flex-wrap:wrap; gap:13px; }
        .acl-gh__chip{ display:flex; align-items:center; gap:11px; padding:12px 20px 12px 13px;
          border:3px solid var(--acl-ink); background:var(--acl-paper); box-shadow:4px 5px 0 rgba(22,21,15,.14);
          font-weight:900; font-size:25px; line-height:1; transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-gh__dot{ width:18px; height:18px; border-radius:50%; flex:0 0 auto; }
        .acl-gh__chip--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:rotate(-1.5deg) scale(1.04);
          box-shadow:6px 8px 0 rgba(22,21,15,.24); }
        .acl-gh__chip--dim{ opacity:.46; }
        .acl-gh__chipwrap{ position:relative; }
        .acl-gh__chipfx{ position:absolute; top:-18px; right:-10px; z-index:4; }

        .acl-gh__tiles{ display:flex; gap:30px; margin-top:auto; padding-top:26px; }
        .acl-gh__tile{ position:relative; }
        .acl-gh__tile .acl-metatag .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.9; }
        .acl-gh__tile .acl-metatag .v em{ font-style:normal; font-size:18px; font-family:var(--acl-font-cn);
          font-weight:700; margin-left:4px; color:rgba(22,21,15,.5); }

        /* right: collage stage */
        .acl-gh__stage{ flex:1; position:relative; min-width:0; }
        .acl-gh__slot{ position:absolute; }
        .acl-gh__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-gh__share{ position:absolute; z-index:5; background:var(--acl-ink); color:var(--acl-paper);
          padding:18px 26px 16px; transform:rotate(3deg); box-shadow:6px 8px 0 rgba(22,21,15,.28);
          text-align:center; }
        .acl-gh__sharev{ font-family:var(--acl-font-num); font-size:96px; line-height:.82; color:var(--acl-yellow); }
        .acl-gh__sharek{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(251,250,244,.7); margin-top:6px; }

        .acl-gh__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gh__chip{ animation:acl-gh-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .2s); }
          [data-deck-active] .acl-gh__share{ animation:acl-gh-pop .55s cubic-bezier(.2,.8,.2,1) .3s both; }
        }
        @keyframes acl-gh-rise{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; } }
        @keyframes acl-gh-pop{ from{ opacity:0; transform:rotate(3deg) scale(.8); } to{ opacity:1; transform:rotate(3deg) scale(1); } }
      `}),xt("div",{className:"acl-gh__top",children:[Ta("div",{className:"acl-gh__eyebrow",children:C}),Ta("div",{className:"acl-gh__rule"}),Ta("div",{className:"acl-gh__kicker",children:P})]}),xt("div",{className:"acl-gh__head",children:[Ta("h1",{className:"acl-gh__h",children:I}),Ta("div",{className:"acl-gh__place",children:A}),h&&Ta(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),xt("div",{className:"acl-gh__body",children:[xt("div",{className:"acl-gh__left",children:[Ta("div",{className:"acl-gh__cap",dangerouslySetInnerHTML:{__html:M}}),xt("div",{className:"acl-gh__tagttl",children:[F,h&&Ta(p,{kind:"arrowS",size:30,rotate:-12,style:{position:"static"}})]}),Ta("div",{className:"acl-gh__chips",children:m.map((e,o)=>{let r=x&&o===n,b=x&&!r;return xt("div",{className:"acl-gh__chipwrap",children:[r&&h&&Ta("div",{className:"acl-gh__chipfx",children:Ta(H,{label:l.focusBadgeLabel,color:"var(--acl-yellow)",rotate:7,size:13})}),xt("div",{className:"acl-gh__chip"+(r?" acl-gh__chip--focus":"")+(b?" acl-gh__chip--dim":""),style:{"--i":o},children:[Ta("span",{className:"acl-gh__dot",style:{background:a[o%a.length]}}),e]})]},o)})}),Ta("div",{className:"acl-gh__tiles",children:f.map((e,o)=>Ta("div",{className:"acl-gh__tile",children:Ta(kt,{k:e.k,v:xt(xr.Fragment,{children:[e.v,e.unit&&Ta("em",{children:e.unit})]})})},o))})]}),xt("div",{className:"acl-gh__stage",children:[s.length===0&&Ta("div",{className:"acl-gh__empty",children:"// 圖片數量 = 0"}),s.map((e,o)=>Ta("div",{className:"acl-gh__slot",style:{left:e.l,top:e.t},children:Ta(W,{id:"ny-"+o,box:e.box,rotate:e.r,ratio:e.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:m[o%m.length]||"FIG."+(o+1),color:e.color,rotate:e.sr}})},o)),_&&xt("div",{className:"acl-gh__share",style:{left:i.l,top:i.t},children:[Ta("div",{className:"acl-gh__sharev",children:q}),Ta("div",{className:"acl-gh__sharek",children:N})]}),h&&s.length>0&&xt(xr.Fragment,{children:[Ta(p,{kind:"arrow",size:78,rotate:158,color:"var(--acl-ink)",style:{left:-6,bottom:30}}),Ta(p,{kind:"heart",size:36,rotate:12,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:12,bottom:70}})]})]})]}),xt("div",{className:"acl-gh__foot",children:[h&&Ta(p,{kind:"loop",size:52,style:{position:"static"}}),Ta("span",{children:w})]})]})}vo.defaults={images:[],backgroundTheme:"muted",mediaCount:3,tagCount:4,metricCount:4,showShare:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"New York Cluster",kicker:"城市卡",headline:"行業客戶優勢",place:"紐約叢集 \xB7 NEW YORK",caption:"紐約的 AI 融資以 <b>金融\u3001媒體\u3001企業服務與法律 AI</b> 為主\u2014\u2014它的護城河不在基礎模型\uFF0C而在高價值行業客戶的密度\u3002",tagsTitle:"主要行業方向",tags:["金融科技","媒體內容","企業服務","法律 AI","廣告行銷"],shareValue:"12.4%",shareLabel:"Share of US",metrics:[{k:"融資額",v:"120",unit:"億"},{k:"佔比",v:"12.4",unit:"%"},{k:"事件數",v:"14",unit:"筆"},{k:"平均單筆",v:"8.6",unit:"億"}],collage:{0:[],1:[{l:150,t:150,box:470,r:-3,ratio:1.25,sr:-4,color:"var(--acl-yellow)"}],2:[{l:40,t:70,box:400,r:-4,ratio:1.2,sr:-4,color:"var(--acl-yellow)"},{l:420,t:360,box:380,r:4,ratio:.82,sr:4,color:"var(--acl-blue)"}],3:[{l:20,t:30,box:360,r:-4,ratio:1.2,sr:-4,color:"var(--acl-yellow)"},{l:470,t:230,box:320,r:4,ratio:.84,sr:4,color:"var(--acl-blue)"},{l:120,t:470,box:300,r:3,ratio:1.1,sr:-3,color:"var(--acl-pink)"}],4:[{l:20,t:30,box:320,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)"},{l:410,t:220,box:290,r:4,ratio:.84,sr:4,color:"var(--acl-blue)"},{l:150,t:420,box:280,r:3,ratio:1.12,sr:-3,color:"var(--acl-pink)"},{l:540,t:480,box:240,r:-3,ratio:.86,sr:5,color:"var(--acl-red)"}]},sharePos:{0:{l:"32%",t:"34%"},1:{l:"50%",t:"2%"},2:{l:"4%",t:"60%"},3:{l:"62%",t:"2%"},4:{l:"60%",t:"4%"}},closingLine:"行業客戶密度\uFF0C決定垂直應用的落地機會\u3002",focusBadgeLabel:"重點"};vo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"tagCount",type:"number",default:4,min:2,max:5,step:1,label:"標籤數量",desc:"行業方向標籤數量(2\u20135)"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20134)"},{key:"showShare",type:"boolean",default:!0,label:"佔比徽標",desc:"拼貼中的大號佔比徽標 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個行業標籤"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"tagCount",step:1,label:"重點物件",desc:"被突出的標籤序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var Np=vo.defaults,zp=vo.controls;var xn={};Y(xn,{controls:()=>Cp,default:()=>ho,defaults:()=>Ep});import"react";import{jsx as Za,jsxs as ml}from"react/jsx-runtime";function ho(t){let l={...ho.defaults,...t},{backgroundTheme:c,mediaCount:k,tagCount:d,metricCount:u,showShare:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,place:A,caption:M,tagsTitle:F,tags:D,shareValue:q,shareUnit:N,shareLabel:z,metrics:L,rail:y,closingLine:w}=l,v=c==="muted"?"linear-gradient(160deg, #EFEFF6 0%, #E7E6EE 56%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=D.slice(0,Math.max(2,d)),f=L.slice(0,Math.max(2,u)),n=Math.max(0,Math.min(Number(g)||0,m.length-1)),s=y[k]||[];return ml("div",{className:"acl-root acl-gs",style:{background:v},children:[Za("style",{children:`
        .acl-gs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); display:flex; }

        /* \u2500\u2500 left: stacked photo rail \u2500\u2500 */
        .acl-gs__rail{ flex:0 0 760px; position:relative; background:
          repeating-linear-gradient(135deg, rgba(22,21,15,.04) 0 12px, transparent 12px 24px),
          rgba(22,21,15,.05); border-right:5px solid var(--acl-ink); }
        .acl-gs__slot{ position:absolute; }
        .acl-gs__railempty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:36px; color:rgba(22,21,15,.4); transform:rotate(-5deg); }
        .acl-gs__railtag{ position:absolute; left:40px; top:44px; z-index:6; font-family:var(--acl-font-mono);
          font-weight:700; font-size:18px; letter-spacing:.14em; text-transform:uppercase;
          background:var(--acl-ink); color:var(--acl-yellow); padding:9px 15px; transform:rotate(-2deg); }

        /* \u2500\u2500 right: data panel \u2500\u2500 */
        .acl-gs__panel{ flex:1; min-width:0; padding:74px 92px 60px; display:flex; flex-direction:column; }
        .acl-gs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gs__h{ font-weight:900; font-size:72px; line-height:.92; margin:8px 0 0; }
        .acl-gs__place{ display:inline-flex; align-self:flex-start; font-family:var(--acl-font-mono);
          font-weight:700; font-size:19px; padding:8px 14px; background:var(--acl-blue); color:var(--acl-ink);
          transform:rotate(-1.5deg); box-shadow:3px 4px 0 rgba(22,21,15,.18); margin-top:14px; }

        .acl-gs__share{ display:flex; align-items:flex-end; gap:22px; margin:42px 0 14px; }
        .acl-gs__sharev{ font-family:var(--acl-font-num); font-size:150px; line-height:.74;
          color:var(--acl-pink); text-shadow:6px 7px 0 var(--acl-ink); }
        .acl-gs__shareu{ font-family:var(--acl-font-num); font-size:74px; line-height:1; }
        .acl-gs__sharek{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(22,21,15,.5); padding-bottom:18px; max-width:160px; }

        .acl-gs__cap{ font-weight:700; font-size:24px; line-height:1.58; max-width:640px; margin-top:14px; }
        .acl-gs__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }

        .acl-gs__tagttl{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:36px 0 12px; }
        .acl-gs__rows{ display:flex; flex-direction:column; gap:9px; }
        .acl-gs__row{ display:flex; align-items:center; gap:14px; padding:11px 16px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:4px 5px 0 rgba(22,21,15,.12);
          transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-gs__rn{ font-family:var(--acl-font-num); font-size:30px; line-height:.8; width:40px; flex:0 0 auto;
          color:var(--acl-pink); }
        .acl-gs__rt{ font-weight:900; font-size:25px; line-height:1; }
        .acl-gs__rnote{ font-family:var(--acl-font-cn); font-weight:400; font-size:16px;
          color:rgba(22,21,15,.55); margin-left:auto; white-space:nowrap; }
        .acl-gs__row--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateX(6px);
          box-shadow:7px 7px 0 rgba(22,21,15,.22); }
        .acl-gs__row--focus .acl-gs__rn{ color:var(--acl-yellow); }
        .acl-gs__row--focus .acl-gs__rnote{ color:rgba(251,250,244,.6); }
        .acl-gs__row--dim{ opacity:.5; }

        .acl-gs__tiles{ display:flex; gap:34px; margin-top:auto; padding-top:24px; }
        .acl-gs__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gs__tile .v{ font-family:var(--acl-font-num); font-size:50px; line-height:.92; margin-top:3px; }
        .acl-gs__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:4px; color:rgba(22,21,15,.5); }

        .acl-gs__foot{ display:flex; align-items:center; gap:13px; font-family:var(--acl-font-hand);
          font-size:27px; margin-top:18px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gs__row{ animation:acl-gs-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .25s); }
          [data-deck-active] .acl-gs__sharev{ animation:acl-gs-pop .6s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-gs-rise{ from{ opacity:0; transform:translateX(-16px); } to{ opacity:1; } }
        @keyframes acl-gs-pop{ from{ opacity:0; transform:translateY(20px) scale(.92); } to{ opacity:1; transform:none; } }
      `}),ml("div",{className:"acl-gs__rail",children:[Za("div",{className:"acl-gs__railtag",children:A}),s.length===0&&Za("div",{className:"acl-gs__railempty",children:"// 圖片數量 = 0"}),s.map((i,a)=>Za("div",{className:"acl-gs__slot",style:{left:i.l,top:i.t,zIndex:a+1},children:Za(W,{id:"se-"+a,box:i.box,rotate:i.r,ratio:i.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:m[a%m.length]&&m[a%m.length].label||"FIG."+(a+1),color:i.color,rotate:i.sr}})},a)),h&&s.length>0&&Za(p,{kind:"arrow",size:76,rotate:20,color:"var(--acl-ink)",style:{right:-28,top:"46%",zIndex:7}})]}),ml("div",{className:"acl-gs__panel",children:[Za("div",{className:"acl-gs__eyebrow",children:C}),Za("h1",{className:"acl-gs__h",children:I}),Za("div",{className:"acl-gs__place",children:A}),_&&ml("div",{className:"acl-gs__share",children:[Za("div",{className:"acl-gs__sharev",children:q}),Za("div",{className:"acl-gs__shareu",children:N}),Za("div",{className:"acl-gs__sharek",children:z}),h&&Za(p,{kind:"spark",size:40,rotate:12,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginBottom:28}})]}),Za("div",{className:"acl-gs__cap",dangerouslySetInnerHTML:{__html:M}}),Za("div",{className:"acl-gs__tagttl",children:F}),Za("div",{className:"acl-gs__rows",children:m.map((i,a)=>{let e=x&&a===n,o=x&&!e;return ml("div",{className:"acl-gs__row"+(e?" acl-gs__row--focus":"")+(o?" acl-gs__row--dim":""),style:{"--i":a},children:[Za("span",{className:"acl-gs__rn",children:String(a+1).padStart(2,"0")}),Za("span",{className:"acl-gs__rt",children:i.label}),Za("span",{className:"acl-gs__rnote",children:i.note})]},a)})}),Za("div",{className:"acl-gs__tiles",children:f.map((i,a)=>ml("div",{className:"acl-gs__tile",children:[Za("div",{className:"k",children:i.k}),ml("div",{className:"v",children:[i.v,i.unit&&Za("em",{children:i.unit})]})]},a))}),ml("div",{className:"acl-gs__foot",children:[h&&Za(p,{kind:"loop",size:50,style:{position:"static"}}),Za("span",{children:w})]})]})]})}ho.defaults={images:[],backgroundTheme:"primary",mediaCount:2,tagCount:4,metricCount:4,showShare:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Seattle Cluster",kicker:"城市卡",headline:"雲端計算人才外溢",place:"西雅圖叢集 \xB7 SEATTLE",caption:"西雅圖受益於 <b>雲端計算生態與大廠工程人才外溢</b>\uFF0C更適合孕育基礎設施\u3001開發者工具與企業 AI\u3002",tagsTitle:"主要雲生態方向",tags:[{label:"雲基礎設施",note:"算力 \xB7 儲存 \xB7 網路"},{label:"開發者工具",note:"研發效率提升"},{label:"企業 AI",note:"內部流程嵌入"},{label:"資料平臺",note:"RAG \xB7 知識管理"},{label:"推理最佳化",note:"成本與時延"}],shareValue:"9.8",shareUnit:"%",shareLabel:"全美融資額佔比",metrics:[{k:"融資額",v:"95",unit:"億"},{k:"佔比",v:"9.8",unit:"%"},{k:"事件數",v:"10",unit:"筆"},{k:"平均單筆",v:"9.5",unit:"億"}],rail:{0:[],1:[{l:150,t:300,box:470,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)"}],2:[{l:90,t:150,box:400,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)"},{l:300,t:560,box:360,r:4,ratio:.84,sr:4,color:"var(--acl-blue)"}],3:[{l:70,t:110,box:330,r:-5,ratio:1.16,sr:-4,color:"var(--acl-yellow)"},{l:360,t:400,box:320,r:4,ratio:.85,sr:4,color:"var(--acl-blue)"},{l:120,t:700,box:300,r:-3,ratio:1.3,sr:-3,color:"var(--acl-pink)"}]},closingLine:"雲端計算底座\uFF0C帶來 AI 基礎設施機會\u3002"};ho.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"左側堆疊圖片槽數量(0\u20133)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"tagCount",type:"number",default:4,min:2,max:5,step:1,label:"標籤數量",desc:"雲生態方向行數量(2\u20135)"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20134)"},{key:"showShare",type:"boolean",default:!0,label:"佔比大數字",desc:"右側大號佔比數字 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個方向行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"tagCount",step:1,label:"重點物件",desc:"被突出的方向行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var Ep=ho.defaults,Cp=ho.controls;var bn={};Y(bn,{controls:()=>Sp,default:()=>yo,defaults:()=>Fp});import"react";import{jsx as Ja,jsxs as Pt}from"react/jsx-runtime";function yo(t){let l={...yo.defaults,...t},{backgroundTheme:c,mediaCount:k,tagCount:d,metricCount:u,showStamp:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,place:A,caption:M,tagsTitle:F,tags:D,shareValue:q,shareLabel:N,metrics:z,hero:L,closingLine:y}=l,w=c==="ink",v=w?"radial-gradient(120% 120% at 80% 6%, #2A2820 0%, #16150F 62%, #100F0A 100%)":c==="muted"?"linear-gradient(162deg, #EFEFF6 0%, #E7E6EE 56%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=D.slice(0,Math.max(2,d)),f=z.slice(0,Math.max(2,u)),n=Math.max(0,Math.min(Number(g)||0,m.length-1)),s=L[k]||[];return Pt("div",{className:"acl-root acl-gf"+(w?" acl-gf--ink":""),style:{background:v},children:[Ja("style",{children:`
        .acl-gf{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:70px 92px 58px; display:flex; flex-direction:column; }
        .acl-gf--ink{ color:var(--acl-paper); }
        .acl-gf__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-gf__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gf--ink .acl-gf__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-gf__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.4; }
        .acl-gf__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-gf--ink .acl-gf__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-gf__head{ display:flex; align-items:flex-end; gap:22px; margin-top:12px; flex:0 0 auto; }
        .acl-gf__h{ font-weight:900; font-size:74px; line-height:.92; margin:0; }
        .acl-gf__place{ font-family:var(--acl-font-mono); font-weight:700; font-size:20px;
          padding:8px 14px; background:var(--acl-red); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-gf__body{ flex:1; display:flex; gap:50px; margin-top:24px; min-height:0; }
        .acl-gf__left{ flex:0 0 600px; display:flex; flex-direction:column; min-width:0; }
        .acl-gf__cap{ font-weight:700; font-size:25px; line-height:1.46; }
        .acl-gf__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-gf--ink .acl-gf__cap b{ background:var(--acl-pink); color:var(--acl-paper); }

        .acl-gf__tagttl{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:26px 0 12px; }
        .acl-gf--ink .acl-gf__tagttl{ color:rgba(251,250,244,.55); }
        .acl-gf__stubs{ display:flex; flex-direction:column; gap:10px; }
        .acl-gf__stub{ display:flex; align-items:center; gap:0; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:4px 5px 0 rgba(22,21,15,.13);
          transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-gf--ink .acl-gf__stub{ background:#221F18; border-color:rgba(251,250,244,.5); color:var(--acl-paper); }
        .acl-gf__sn{ font-family:var(--acl-font-num); font-size:30px; line-height:1; padding:12px 16px;
          background:var(--acl-ink); color:var(--acl-yellow); align-self:stretch; display:flex; align-items:center;
          border-right:3px dashed rgba(236,239,53,.5); }
        .acl-gf--ink .acl-gf__sn{ background:var(--acl-yellow); color:var(--acl-ink); border-right-color:rgba(22,21,15,.4); }
        .acl-gf__st{ font-weight:900; font-size:25px; line-height:1; padding:0 16px; white-space:nowrap; }
        .acl-gf__snote{ font-weight:400; font-size:15px; color:rgba(22,21,15,.55); margin-left:auto;
          padding:0 16px; white-space:nowrap; }
        .acl-gf--ink .acl-gf__snote{ color:rgba(251,250,244,.55); }
        .acl-gf__stub--focus{ transform:rotate(-1deg) scale(1.03); box-shadow:7px 8px 0 rgba(22,21,15,.22);
          border-color:var(--acl-pink); }
        .acl-gf__stub--dim{ opacity:.48; }

        .acl-gf__tiles{ display:flex; gap:30px; margin-top:auto; padding-top:24px; }
        .acl-gf__tile .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gf--ink .acl-gf__tile .k{ color:rgba(251,250,244,.5); }
        .acl-gf__tile .v{ font-family:var(--acl-font-num); font-size:48px; line-height:.92; margin-top:3px; }
        .acl-gf--ink .acl-gf__tile .v{ color:var(--acl-yellow); }
        .acl-gf__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; color:rgba(22,21,15,.5); }
        .acl-gf--ink .acl-gf__tile .v em{ color:rgba(251,250,244,.5); }

        /* right: featured hero + stamp */
        .acl-gf__stage{ flex:1; position:relative; min-width:0; }
        .acl-gf__slot{ position:absolute; }
        .acl-gf__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-gf--ink .acl-gf__empty{ color:rgba(251,250,244,.4); }
        .acl-gf__stamp{ position:absolute; right:6px; top:8px; z-index:8; width:188px; height:188px; border-radius:50%;
          background:var(--acl-pink); color:var(--acl-paper); border:6px double var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center; transform:rotate(-13deg);
          box-shadow:5px 7px 0 rgba(22,21,15,.3); }
        .acl-gf__stampv{ font-family:var(--acl-font-num); font-size:74px; line-height:.8; }
        .acl-gf__stampk{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.14em;
          text-transform:uppercase; margin-top:4px; }

        .acl-gf__foot{ display:flex; align-items:center; gap:13px; font-family:var(--acl-font-hand);
          font-size:27px; margin-top:16px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gf__stub{ animation:acl-gf-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .25s); }
          [data-deck-active] .acl-gf__stamp{ animation:acl-gf-stamp .5s cubic-bezier(.3,1.4,.4,1) .35s both; }
        }
        @keyframes acl-gf-rise{ from{ opacity:0; transform:translateX(-16px); } to{ opacity:1; } }
        @keyframes acl-gf-stamp{ from{ opacity:0; transform:rotate(-13deg) scale(1.6); } to{ opacity:1; transform:rotate(-13deg) scale(1); } }
      `}),Pt("div",{className:"acl-gf__top",children:[Ja("div",{className:"acl-gf__eyebrow",children:C}),Ja("div",{className:"acl-gf__rule"}),Ja("div",{className:"acl-gf__kicker",children:P})]}),Pt("div",{className:"acl-gf__head",children:[Ja("h1",{className:"acl-gf__h",children:I}),Ja("div",{className:"acl-gf__place",children:A}),h&&Ja(p,{kind:"spark",size:42,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),Pt("div",{className:"acl-gf__body",children:[Pt("div",{className:"acl-gf__left",children:[Ja("div",{className:"acl-gf__cap",dangerouslySetInnerHTML:{__html:M}}),Ja("div",{className:"acl-gf__tagttl",children:F}),Ja("div",{className:"acl-gf__stubs",children:m.map((i,a)=>{let e=x&&a===n,o=x&&!e;return Pt("div",{className:"acl-gf__stub"+(e?" acl-gf__stub--focus":"")+(o?" acl-gf__stub--dim":""),style:{"--i":a},children:[Ja("span",{className:"acl-gf__sn",children:String(a+1).padStart(2,"0")}),Ja("span",{className:"acl-gf__st",children:i.label}),Ja("span",{className:"acl-gf__snote",children:i.note})]},a)})}),Ja("div",{className:"acl-gf__tiles",children:f.map((i,a)=>Pt("div",{className:"acl-gf__tile",children:[Ja("div",{className:"k",children:i.k}),Pt("div",{className:"v",children:[i.v,i.unit&&Ja("em",{children:i.unit})]})]},a))})]}),Pt("div",{className:"acl-gf__stage",children:[s.length===0&&Ja("div",{className:"acl-gf__empty",children:"// 圖片數量 = 0"}),s.map((i,a)=>Ja("div",{className:"acl-gf__slot",style:{left:i.l,top:i.t,zIndex:a+1},children:Ja(W,{id:"bo-"+a,box:i.box,rotate:i.r,ratio:i.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:a===0?{label:A.split(" ")[0],color:"var(--acl-yellow)",rotate:i.sr}:null})},a)),_&&Pt("div",{className:"acl-gf__stamp",children:[Ja("div",{className:"acl-gf__stampv",children:q}),Ja("div",{className:"acl-gf__stampk",children:N})]}),h&&s.length>0&&Ja(p,{kind:"arrow",size:74,rotate:150,color:w?"var(--acl-paper)":"var(--acl-ink)",style:{left:-8,bottom:24}})]})]}),Pt("div",{className:"acl-gf__foot",children:[h&&Ja(p,{kind:"loop",size:50,color:w?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}}),Ja("span",{children:y})]})]})}yo.defaults={images:[],backgroundTheme:"muted",mediaCount:2,tagCount:4,metricCount:4,showStamp:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Boston Cluster",kicker:"城市卡",headline:"科研與硬科技",place:"波士頓叢集 \xB7 BOSTON",caption:"波士頓集中在 <b>醫療 AI\u3001機器人與硬科技</b> 方向\u2014\u2014高校科研與硬科技轉化\uFF0C構成它獨特的長週期資產優勢\u3002",tagsTitle:"主要科研方向",tags:[{label:"醫療 AI",note:"影像 \xB7 診斷"},{label:"機器人",note:"具身 \xB7 工業"},{label:"藥物發現",note:"生物計算"},{label:"硬科技",note:"材料 \xB7 量子"}],shareValue:"7.7%",shareLabel:"Share of US",metrics:[{k:"融資額",v:"75",unit:"億"},{k:"佔比",v:"7.7",unit:"%"},{k:"事件數",v:"8",unit:"筆"},{k:"平均單筆",v:"9.4",unit:"億"}],hero:{0:[],1:[{l:100,t:90,box:540,r:-2,ratio:1.18,sr:-3,color:"var(--acl-yellow)"}],2:[{l:70,t:70,box:520,r:-2,ratio:1.2,sr:-3,color:"var(--acl-yellow)"},{l:470,t:420,box:250,r:5,ratio:.82,sr:5,color:"var(--acl-blue)"}],3:[{l:50,t:50,box:480,r:-2,ratio:1.2,sr:-3,color:"var(--acl-yellow)"},{l:440,t:400,box:240,r:5,ratio:.82,sr:5,color:"var(--acl-blue)"},{l:100,t:470,box:210,r:-5,ratio:1.05,sr:-4,color:"var(--acl-pink)"}]},closingLine:"科研城市\uFF0C更適合長週期技術資產\u3002"};yo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(雜誌海報)"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"特寫圖片數量(0\u20133\uFF1A1 主視覺 + 至多 2 張巢狀)\uFF1B每張按上傳圖片比例自適應"},{key:"tagCount",type:"number",default:4,min:2,max:4,step:1,label:"標籤數量",desc:"科研方向票根數量(2\u20134)"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20134)"},{key:"showStamp",type:"boolean",default:!0,label:"佔比印章",desc:"特寫上的圓形佔比印章 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個方向票根"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"tagCount",step:1,label:"重點物件",desc:"被突出的票根序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var Fp=yo.defaults,Sp=yo.controls;var vn={};Y(vn,{controls:()=>Mp,default:()=>ko,defaults:()=>Ip});import Lp from"react";import{jsx as ha,jsxs as bt}from"react/jsx-runtime";function ko(t){let l={...ko.defaults,...t},{backgroundTheme:c,nodeCount:k,mediaCount:d,tagCount:u,metricCount:_,showValueLabels:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,kicker:I,headline:A,place:M,caption:F,hubValue:D,hubLabel:q,tagsTitle:N,tags:z,metrics:L,nodes:y,closingLine:w}=l,v=c==="muted"?"linear-gradient(160deg, #EFEFF6 0%, #E7E6EE 56%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=y.slice(0,Math.max(3,k)),f=z.slice(0,Math.max(2,u)),n=L.slice(0,Math.max(2,_)),s=Math.max(0,Math.min(Number(h)||0,m.length-1)),i=Math.min(d,m.length),a={l:50,t:46},e=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)"];return bt("div",{className:"acl-root acl-gd",style:{background:v},children:[ha("style",{children:`
        .acl-gd{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:66px 92px 56px; display:flex; flex-direction:column; }
        .acl-gd__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-gd__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gd__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-gd__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-gd__head{ display:flex; align-items:flex-end; gap:22px; margin-top:10px; flex:0 0 auto; }
        .acl-gd__h{ font-weight:900; font-size:72px; line-height:.92; margin:0; }
        .acl-gd__place{ display:inline-flex; align-self:flex-start; font-family:var(--acl-font-mono); font-weight:700; font-size:19px;
          padding:8px 14px; background:var(--acl-blue); color:var(--acl-ink); transform:rotate(-1.5deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.18); white-space:nowrap; margin-top:14px; }
        .acl-gd__cap{ font-weight:700; font-size:24px; line-height:1.58; max-width:760px; margin:14px 0 0; }
        .acl-gd__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }

        /* scatter map stage */
        .acl-gd__stage{ flex:1; position:relative; margin:10px 0 6px; min-height:0; }
        .acl-gd__links{ position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:0; }
        .acl-gd__node{ position:absolute; transform:translate(-50%,-50%); z-index:2;
          display:flex; flex-direction:column; align-items:center; gap:7px;
          transition:opacity .25s, transform .25s; }
        .acl-gd__dot{ border-radius:50%; border:4px solid var(--acl-ink); background:var(--acl-paper);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          box-shadow:4px 5px 0 rgba(22,21,15,.16); }
        .acl-gd__dotv{ font-family:var(--acl-font-num); line-height:.82; }
        .acl-gd__dotu{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); margin-top:1px; }
        .acl-gd__nlabel{ font-family:var(--acl-font-cn); font-weight:900; font-size:21px; line-height:1;
          background:var(--acl-ink); color:var(--acl-paper); padding:5px 11px; white-space:nowrap; }
        .acl-gd__node--focus{ z-index:5; transform:translate(-50%,-50%) scale(1.12); }
        .acl-gd__node--focus .acl-gd__dot{ background:var(--acl-pink); color:var(--acl-paper);
          box-shadow:6px 8px 0 rgba(22,21,15,.26); }
        .acl-gd__node--focus .acl-gd__dotu{ color:rgba(251,250,244,.7); }
        .acl-gd__node--focus .acl-gd__nlabel{ background:var(--acl-pink); }
        .acl-gd__node--dim{ opacity:.5; }
        .acl-gd__nfx{ position:absolute; top:-26px; right:-28px; z-index:6; }

        .acl-gd__pnode{ position:absolute; transform:translate(-50%,-50%); z-index:3; }

        .acl-gd__hub{ position:absolute; left:50%; top:46%; transform:translate(-50%,-50%); z-index:4;
          width:230px; height:230px; border-radius:50%; background:var(--acl-ink); color:var(--acl-paper);
          border:6px solid var(--acl-yellow); display:flex; flex-direction:column; align-items:center;
          justify-content:center; box-shadow:7px 9px 0 rgba(22,21,15,.3); }
        .acl-gd__hubv{ font-family:var(--acl-font-num); font-size:88px; line-height:.78; color:var(--acl-yellow); }
        .acl-gd__hubk{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(251,250,244,.72); margin-top:6px; }

        /* bottom bar */
        .acl-gd__bar{ display:flex; align-items:flex-end; gap:40px; flex:0 0 auto; padding-top:12px;
          border-top:4px solid var(--acl-ink); }
        .acl-gd__tags{ flex:1; min-width:0; }
        .acl-gd__tagttl{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-bottom:9px; }
        .acl-gd__chips{ display:flex; flex-wrap:wrap; gap:10px; }
        .acl-gd__chip{ display:flex; align-items:center; gap:9px; padding:8px 15px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); font-weight:900; font-size:20px; line-height:1;
          box-shadow:3px 4px 0 rgba(22,21,15,.12); }
        .acl-gd__cdot{ width:13px; height:13px; border-radius:50%; flex:0 0 auto; }
        .acl-gd__tiles{ display:flex; gap:28px; flex:0 0 auto; }
        .acl-gd__tile{ text-align:right; }
        .acl-gd__tile .k{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-gd__tile .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.92; margin-top:2px; }
        .acl-gd__tile .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; color:rgba(22,21,15,.5); }

        .acl-gd__foot{ display:flex; align-items:center; gap:13px; font-family:var(--acl-font-hand);
          font-size:26px; margin-top:12px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gd__node, [data-deck-active] .acl-gd__pnode{
            animation:acl-gd-pop .5s cubic-bezier(.2,.8,.2,1) both; animation-delay:calc(var(--i,0) * .06s + .2s); }
          [data-deck-active] .acl-gd__hub{ animation:acl-gd-hub .6s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-gd-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.5); } to{ opacity:1; } }
        @keyframes acl-gd-hub{ from{ opacity:0; transform:translate(-50%,-50%) scale(.7); } to{ opacity:1; } }
      `}),bt("div",{className:"acl-gd__top",children:[ha("div",{className:"acl-gd__eyebrow",children:P}),ha("div",{className:"acl-gd__rule"}),ha("div",{className:"acl-gd__kicker",children:I})]}),bt("div",{className:"acl-gd__head",children:[ha("h1",{className:"acl-gd__h",children:A}),C&&ha(p,{kind:"spark",size:40,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),ha("div",{className:"acl-gd__place",children:M}),ha("div",{className:"acl-gd__cap",dangerouslySetInnerHTML:{__html:F}}),bt("div",{className:"acl-gd__stage",children:[ha("svg",{className:"acl-gd__links",preserveAspectRatio:"none",children:m.map((o,r)=>{let b=g&&r!==s;return ha("line",{x1:a.l+"%",y1:a.t+"%",x2:o.l,y2:o.t,stroke:"var(--acl-ink)",strokeWidth:"2.5",strokeDasharray:"3 7",strokeLinecap:"round",opacity:b?.2:.55},r)})}),m.map((o,r)=>{if(r<i){let T=130+(o.size-64)*.7;return ha("div",{className:"acl-gd__pnode",style:{left:o.l,top:o.t,"--i":r},children:ha(W,{id:"ot-"+r,box:T,ratio:1,rotate:r%2?4:-4,accent:"var(--acl-paper)",placeholder:"上傳",sticker:{label:o.region,sub:x?o.value+l.nodeUnit:null,color:e[r%e.length]==="var(--acl-ink)"?"var(--acl-yellow)":e[r%e.length],subColor:"var(--acl-ink)",rotate:r%2?4:-5}})},r)}let b=g&&r===s,R=g&&!b,E=o.size;return bt("div",{className:"acl-gd__node"+(b?" acl-gd__node--focus":"")+(R?" acl-gd__node--dim":""),style:{left:o.l,top:o.t,"--i":r},children:[b&&C&&ha("div",{className:"acl-gd__nfx",children:ha(H,{label:l.focusBadgeLabel,color:"var(--acl-yellow)",rotate:8,size:12})}),ha("div",{className:"acl-gd__dot",style:{width:E,height:E},children:x&&bt(Lp.Fragment,{children:[ha("span",{className:"acl-gd__dotv",style:{fontSize:Math.round(E*.34)},children:o.value}),ha("span",{className:"acl-gd__dotu",children:l.nodeUnit})]})}),ha("span",{className:"acl-gd__nlabel",children:o.region})]},r)}),bt("div",{className:"acl-gd__hub",children:[ha("div",{className:"acl-gd__hubv",children:D}),ha("div",{className:"acl-gd__hubk",children:q})]})]}),bt("div",{className:"acl-gd__bar",children:[bt("div",{className:"acl-gd__tags",children:[ha("div",{className:"acl-gd__tagttl",children:N}),ha("div",{className:"acl-gd__chips",children:f.map((o,r)=>bt("div",{className:"acl-gd__chip",children:[ha("span",{className:"acl-gd__cdot",style:{background:e[r%e.length]}}),o]},r))})]}),ha("div",{className:"acl-gd__tiles",children:n.map((o,r)=>bt("div",{className:"acl-gd__tile",children:[ha("div",{className:"k",children:o.k}),bt("div",{className:"v",children:[o.v,o.unit&&ha("em",{children:o.unit})]})]},r))})]}),bt("div",{className:"acl-gd__foot",children:[C&&ha(p,{kind:"loop",size:48,style:{position:"static"}}),ha("span",{children:w})]})]})}ko.defaults={images:[],backgroundTheme:"primary",nodeCount:6,mediaCount:2,tagCount:4,metricCount:4,showValueLabels:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Other Regions",kicker:"區域點陣",headline:"分散型應用落地",place:"其他地區 \xB7 DISPERSED",caption:"其他地區融資規模較小\uFF0C但出現 <b>行業專用模型與本地化應用</b> 機會\u2014\u2014非核心區域更適合做行業落地\uFF0C而非爭奪通用模型\u3002",hubValue:"6.2%",hubLabel:"其他地區合計",tagsTitle:"主要落地方向",tags:["行業專用模型","本地化應用","製造 AI","政企服務","農業科技"],metrics:[{k:"融資額",v:"60",unit:"億"},{k:"佔比",v:"6.2",unit:"%"},{k:"事件數",v:"11",unit:"筆"},{k:"平均單筆",v:"5.5",unit:"億"}],nodes:[{region:"奧斯汀",value:14,l:"17%",t:"24%",size:128},{region:"丹佛",value:11,l:"79%",t:"22%",size:116},{region:"亞特蘭大",value:9,l:"30%",t:"74%",size:106},{region:"芝加哥",value:8,l:"70%",t:"76%",size:100},{region:"聖地亞哥",value:7,l:"9%",t:"58%",size:92},{region:"邁阿密",value:5,l:"90%",t:"56%",size:82},{region:"匹茲堡",value:4,l:"46%",t:"11%",size:74},{region:"納什維爾",value:2,l:"55%",t:"90%",size:64}],closingLine:"本地行業資源\uFF0C也能形成應用機會\u3002",focusBadgeLabel:"重點",nodeUnit:"億"};ko.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"nodeCount",type:"number",default:6,min:3,max:8,step:1,label:"節點數量",desc:"散點地圖上的區域節點數量(3\u20138)"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"前 N 個節點改為承載圖片(0\u20134\uFF0C超過節點數自動封頂)\uFF1B每張按上傳圖片比例自適應"},{key:"tagCount",type:"number",default:4,min:2,max:5,step:1,label:"標籤數量",desc:"落地方向標籤數量(2\u20135)"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各節點的融資額數值 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個區域節點"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"nodeCount",step:1,label:"重點物件",desc:"被突出的節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var Ip=ko.defaults,Mp=ko.controls;var hn={};Y(hn,{controls:()=>Tp,default:()=>wo,defaults:()=>Ap});import"react";import{jsx as Re,jsxs as Uo}from"react/jsx-runtime";function wo(t){let l={...wo.defaults,...t},{backgroundTheme:c,showPillars:k,pillarCount:d,showBackdrop:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,kicker:C,headline:P,quote:I,backdropWord:A,pillars:M,source:F,battlegroundStickerLabel:D,verdictStickerLabel:q}=l,N=c==="ink",z=N?"radial-gradient(120% 120% at 22% 6%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=M.slice(0,Math.max(2,d)),y=Math.max(0,Math.min(Number(x)||0,L.length-1)),w=["heart","star","spark"],v=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)"];return Uo("div",{className:"acl-root acl-q3"+(N?" acl-q3--ink":""),style:{background:z},children:[Re("style",{children:`
        .acl-q3{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:84px 120px 70px; display:flex; flex-direction:column; }
        .acl-q3--ink{ color:var(--acl-paper); }
        .acl-q3__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; position:relative; z-index:2; }
        .acl-q3__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-q3--ink .acl-q3__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-q3__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-q3__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-q3--ink .acl-q3__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-q3__backdrop{ position:absolute; right:-30px; top:120px; font-family:var(--acl-font-num);
          font-size:430px; line-height:.74; letter-spacing:-.02em; color:var(--acl-ink); opacity:.05;
          z-index:0; pointer-events:none; white-space:nowrap; transform:rotate(-6deg); }
        .acl-q3--ink .acl-q3__backdrop{ color:var(--acl-yellow); opacity:.06; }

        .acl-q3__body{ flex:1; display:flex; flex-direction:column; justify-content:center;
          position:relative; z-index:1; }
        .acl-q3__label{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.06em; color:rgba(22,21,15,.55); margin-bottom:22px; }
        .acl-q3--ink .acl-q3__label{ color:rgba(251,250,244,.55); }
        .acl-q3__h{ font-weight:900; font-size:116px; line-height:1.2; letter-spacing:-.012em;
          margin:0; max-width:1500px; text-wrap:balance; }
        .acl-q3__h b{ font-weight:900; background:var(--acl-blue); color:var(--acl-ink);
          padding:0 .1em; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
        .acl-q3--ink .acl-q3__h b{ background:var(--acl-pink); color:var(--acl-paper); }

        .acl-q3__pillars{ display:flex; gap:26px; margin-top:54px; }
        .acl-q3__p{ flex:1 1 0; min-width:0; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:6px 8px 0 rgba(22,21,15,.16);
          padding:24px 26px 26px; display:flex; flex-direction:column; gap:12px;
          transition:opacity .25s, transform .25s, box-shadow .25s, background .25s; }
        .acl-q3--ink .acl-q3__p{ background:#211F18; border-color:var(--acl-paper); }
        .acl-q3__prow{ display:flex; align-items:center; gap:14px; }
        .acl-q3__pn{ font-family:var(--acl-font-num); font-size:42px; line-height:.8; }
        .acl-q3--ink .acl-q3__pn{ color:var(--acl-yellow); }
        .acl-q3__pmark{ margin-left:auto; }
        .acl-q3__pt{ font-weight:900; font-size:38px; line-height:1; }
        .acl-q3__pd{ font-weight:700; font-size:21px; line-height:1.42; color:rgba(22,21,15,.62); }
        .acl-q3--ink .acl-q3__pd{ color:rgba(251,250,244,.66); }
        .acl-q3__p--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateY(-8px) scale(1.015);
          box-shadow:9px 12px 0 rgba(22,21,15,.28); z-index:2; }
        .acl-q3--ink .acl-q3__p--focus{ background:var(--acl-yellow); color:var(--acl-ink); border-color:var(--acl-ink); }
        .acl-q3__p--focus .acl-q3__pd{ color:rgba(255,255,255,.8); }
        .acl-q3--ink .acl-q3__p--focus .acl-q3__pd{ color:rgba(22,21,15,.66); }
        .acl-q3__p--focus .acl-q3__pn{ color:var(--acl-yellow); }
        .acl-q3--ink .acl-q3__p--focus .acl-q3__pn{ color:var(--acl-ink); }
        .acl-q3__p--dim{ opacity:.5; }
        .acl-q3__pfx{ position:absolute; top:-17px; right:-12px; z-index:4; }

        .acl-q3__foot{ display:flex; align-items:center; gap:14px; flex:0 0 auto; position:relative; z-index:2;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em; color:rgba(22,21,15,.55); }
        .acl-q3--ink .acl-q3__foot{ color:rgba(251,250,244,.55); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-q3__h{ animation:acl-q3-in .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-q3__p{ animation:acl-q3-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .26s); }
        }
        @keyframes acl-q3-in{ from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:none; } }
      `}),u&&Re("div",{className:"acl-q3__backdrop","aria-hidden":"true",children:A}),Uo("div",{className:"acl-q3__top",children:[Re("div",{className:"acl-q3__eyebrow",children:h}),Re("div",{className:"acl-q3__rule"}),Re("div",{className:"acl-q3__kicker",children:C})]}),Uo("div",{className:"acl-q3__body",children:[Re("div",{className:"acl-q3__label",children:P}),Re("h1",{className:"acl-q3__h",dangerouslySetInnerHTML:{__html:I}}),k&&Re("div",{className:"acl-q3__pillars",children:L.map((m,f)=>{let n=_&&f===y,s=_&&!n;return Uo("div",{className:"acl-q3__p"+(n?" acl-q3__p--focus":"")+(s?" acl-q3__p--dim":""),style:{"--i":f},children:[n&&g&&Re("div",{className:"acl-q3__pfx",children:Re(H,{label:D,color:"var(--acl-yellow)",rotate:7,size:13})}),Uo("div",{className:"acl-q3__prow",children:[Re("span",{className:"acl-q3__pn",children:String(f+1).padStart(2,"0")}),g&&Re("span",{className:"acl-q3__pmark",children:Re(p,{kind:w[f%w.length],size:42,rotate:f%2?8:-8,fill:n?"var(--acl-yellow)":v[f%v.length],stroke:"var(--acl-ink)",style:{position:"static"}})})]}),Re("div",{className:"acl-q3__pt",children:m.title}),Re("div",{className:"acl-q3__pd",children:m.note})]},f)})})]}),Uo("div",{className:"acl-q3__foot",children:[g&&Re(p,{kind:"loop",size:50,style:{position:"static"}}),Re("span",{children:F}),g&&!N&&Re(H,{label:q,color:"var(--acl-blue)",rotate:-4,style:{marginLeft:"auto"}})]})]})}wo.defaults={backgroundTheme:"ink",showPillars:!0,pillarCount:3,showBackdrop:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Talent \xB7 Capital \xB7 Compute",kicker:"金句頁",headline:"三類關鍵資源 \xB7 人才 / 資本 / 算力",quote:"AI 競爭\uFF0C首先是一場 <b>資源組織能力</b> 的競爭\u3002",backdropWord:"RESOURCE",battlegroundStickerLabel:"主戰場",verdictStickerLabel:"核心判斷",pillars:[{title:"人才",note:"頂級研究員與工程團隊\uFF0C決定模型上限與迭代速度\u3002"},{title:"資本",note:"長期\u3001深口袋的資金\uFF0C支撐漫長的訓練與商業化週期\u3002"},{title:"算力",note:"GPU 與雲資源的穩定供給\uFF0C是一切訓練與推理的底座\u3002"}],source:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u22651 億美元 \xB7 AI CAPITAL LAB"};wo.controls=[{key:"backgroundTheme",type:"enum",default:"ink",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差金句)"},{key:"showPillars",type:"boolean",default:!0,label:"要素卡",desc:"底部資源要素卡的顯示/隱藏"},{key:"pillarCount",type:"number",default:3,min:2,max:3,step:1,showIf:"showPillars",label:"要素數量",desc:"資源要素卡數量(2\u20133)"},{key:"showBackdrop",type:"boolean",default:!0,label:"背景大字",desc:"傾斜大號背景裝飾字的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一張要素卡"},{key:"focusIndex",type:"number",default:2,min:0,max:2,maxFrom:"pillarCount",step:1,label:"重點物件",desc:"被突出的要素卡序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪火花與貼紙標籤的顯示/隱藏"}];var Ap=wo.defaults,Tp=wo.controls;var kn={};Y(kn,{controls:()=>Rp,default:()=>No,defaults:()=>Dp});import yn from"react";import{jsx as Da,jsxs as pt}from"react/jsx-runtime";var br=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-yellow)"];function No(t){let l={...No.defaults,...t},{backgroundTheme:c,nodeCount:k,mediaCount:d,metricCount:u,showValueLabels:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,company:A,caption:M,hubLabel:F,hubSub:D,nodes:q,layout:N,metrics:z,closingLine:L}=l,y=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",w=q.slice(0,Math.max(3,k)),v=N[w.length]||N[4],m=Math.min(d,w.length),f=Math.max(0,Math.min(Number(g)||0,w.length-1)),n=z.slice(0,Math.max(2,u)),s={x:12,y:50};return pt("div",{className:"acl-root acl-cn",style:{background:y},children:[Da("style",{children:`
        .acl-cn{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-cn__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-cn__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-cn__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-cn__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-cn__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-cn__h{ font-weight:900; font-size:94px; line-height:.9; margin:0; }
        .acl-cn__plate{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          padding:11px 17px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-cn__body{ flex:1; display:flex; gap:44px; margin-top:24px; min-height:0; }
        .acl-cn__left{ flex:0 0 600px; display:flex; flex-direction:column; min-width:0; }
        .acl-cn__cap{ font-weight:700; font-size:28px; line-height:1.5; }
        .acl-cn__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-cn__tiles{ display:flex; flex-wrap:wrap; gap:30px 56px; margin-top:auto; padding-top:26px; }
        .acl-cn__tile .acl-metatag .k{ font-size:17px; }
        .acl-cn__tile .acl-metatag .v{ font-family:var(--acl-font-num); font-size:96px; line-height:.84; }
        .acl-cn__tile .acl-metatag .v em{ font-style:normal; font-size:26px; font-family:var(--acl-font-cn);
          font-weight:700; margin-left:5px; color:rgba(22,21,15,.5); }

        /* right: constellation stage */
        .acl-cn__stage{ flex:1; position:relative; min-width:0; }
        .acl-cn__spokes{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; z-index:0; }
        .acl-cn__hub{ position:absolute; transform:translate(-50%,-50%); z-index:3; width:262px; height:262px;
          border-radius:50%; background:var(--acl-ink); color:var(--acl-paper); display:flex; flex-direction:column;
          align-items:center; justify-content:center; text-align:center; box-shadow:6px 9px 0 rgba(22,21,15,.24); }
        .acl-cn__hub b{ font-family:var(--acl-font-num); font-size:72px; line-height:.82; color:var(--acl-yellow);
          letter-spacing:.01em; }
        .acl-cn__hub span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.1em;
          text-transform:uppercase; margin-top:9px; color:rgba(251,250,244,.72); padding:0 16px; }

        .acl-cn__node{ position:absolute; transform:translate(-50%,-50%); z-index:2;
          display:flex; flex-direction:column; align-items:center; gap:7px; transition:opacity .25s; }
        .acl-cn__node--dim{ opacity:.45; }
        .acl-cn__card{ background:var(--acl-paper); border:3px solid var(--acl-ink); padding:16px 24px 15px;
          box-shadow:5px 6px 0 rgba(22,21,15,.16); text-align:center; min-width:206px; }
        .acl-cn__node--focus .acl-cn__card{ border-color:var(--acl-pink); transform:rotate(-1.4deg);
          box-shadow:7px 9px 0 rgba(22,21,15,.22); }
        .acl-cn__cl{ font-weight:900; font-size:28px; line-height:1.04; display:flex; align-items:center;
          justify-content:center; gap:10px; white-space:nowrap; }
        .acl-cn__cl i{ width:16px; height:16px; border-radius:50%; flex:0 0 auto; }
        .acl-cn__cnote{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:6px; }
        .acl-cn__ntag{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; background:var(--acl-ink); color:var(--acl-paper); padding:4px 10px;
          transform:rotate(-2deg); }
        .acl-cn__node--focus .acl-cn__ntag{ background:var(--acl-pink); }
        .acl-cn__nfx{ position:absolute; top:-20px; right:-14px; z-index:5; }

        .acl-cn__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:10px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cn__node{ animation:acl-cn-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .28s); }
          [data-deck-active] .acl-cn__hub{ animation:acl-cn-hub .55s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-cn-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.82); } to{ opacity:1; } }
        @keyframes acl-cn-hub{ from{ opacity:0; transform:translate(-50%,-50%) scale(.7); } to{ opacity:1; } }
      `}),pt("div",{className:"acl-cn__top",children:[Da("div",{className:"acl-cn__eyebrow",children:C}),Da("div",{className:"acl-cn__rule"}),Da("div",{className:"acl-cn__kicker",children:P})]}),pt("div",{className:"acl-cn__head",children:[Da("h1",{className:"acl-cn__h",children:I}),Da("div",{className:"acl-cn__plate",children:A}),h&&Da(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),pt("div",{className:"acl-cn__body",children:[pt("div",{className:"acl-cn__left",children:[Da("div",{className:"acl-cn__cap",dangerouslySetInnerHTML:{__html:M}}),Da("div",{className:"acl-cn__tiles",children:n.map((i,a)=>Da("div",{className:"acl-cn__tile",children:Da(kt,{k:i.k,v:pt(yn.Fragment,{children:[i.v,i.unit&&Da("em",{children:i.unit})]})})},a))})]}),pt("div",{className:"acl-cn__stage",children:[Da("svg",{className:"acl-cn__spokes",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:v.map((i,a)=>{let e=x&&a===f;return Da("line",{x1:s.x,y1:s.y,x2:i.x,y2:i.y,stroke:e?"var(--acl-pink)":"rgba(22,21,15,.4)",strokeWidth:e?.7:.5,strokeDasharray:"1.7 1.5",strokeLinecap:"round"},a)})}),pt("div",{className:"acl-cn__hub",style:{left:s.x+"%",top:s.y+"%"},children:[Da("b",{children:F}),Da("span",{children:D})]}),w.map((i,a)=>{let e=x&&a===f,o=x&&!e,r=br[a%br.length],b=a<m,R=v[a]||{x:60,y:50};return pt("div",{className:"acl-cn__node"+(e?" acl-cn__node--focus":"")+(o?" acl-cn__node--dim":""),style:{left:R.x+"%",top:R.y+"%","--i":a},children:[e&&h&&Da("div",{className:"acl-cn__nfx",children:Da(H,{label:l.coreAssetBadgeLabel,color:"var(--acl-yellow)",rotate:7,size:12})}),b?pt(yn.Fragment,{children:[Da(W,{id:"cn-"+a,box:196,rotate:a%2?3:-3,ratio:1,accent:e?"var(--acl-pink)":"var(--acl-paper)",placeholder:"上傳",sticker:{label:i.label,color:e?"var(--acl-pink)":r,rotate:-3,size:13}}),_&&Da("div",{className:"acl-cn__ntag",children:i.note})]}):pt("div",{className:"acl-cn__card",children:[pt("div",{className:"acl-cn__cl",children:[Da("i",{style:{background:r}}),i.label]}),_&&Da("div",{className:"acl-cn__cnote",children:i.note})]})]},a)}),h&&pt(yn.Fragment,{children:[Da(p,{kind:"arrow",size:62,rotate:4,color:"var(--acl-ink)",style:{left:"20%",top:"14%"}}),Da(p,{kind:"loop",size:48,color:"var(--acl-ink)",style:{left:"24%",bottom:"12%"}})]})]})]}),pt("div",{className:"acl-cn__foot",children:[h&&Da(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{position:"static"}}),Da("span",{children:L})]})]})}No.defaults={images:[],backgroundTheme:"primary",nodeCount:4,mediaCount:2,metricCount:2,showValueLabels:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"xAI Case",kicker:"案例卡",headline:"實時資料生態",company:"xAI",caption:"xAI 以 <b>實時資料與馬斯克生態</b> 作為差異化\u2014\u2014核心資產不是模型本身\uFF0C而是實時資料與生態流量\u3002",hubLabel:"xAI",hubSub:"Ecosystem hub \xB7 生態中樞",nodes:[{label:"X 平臺",note:"實時資料入口"},{label:"特斯拉",note:"算力與場景"},{label:"多模態",note:"模型能力"},{label:"實時搜尋",note:"檢索與分發"},{label:"開發者",note:"API 生態"}],layout:{3:[{x:58,y:16},{x:74,y:52},{x:56,y:86}],4:[{x:54,y:14},{x:80,y:38},{x:74,y:74},{x:50,y:88}],5:[{x:50,y:10},{x:76,y:26},{x:84,y:56},{x:70,y:84},{x:48,y:92}]},metrics:[{k:"單筆融資",v:"50",unit:"億"},{k:"估值",v:"500",unit:"億"},{k:"資料入口",v:"X 平臺"}],closingLine:"獨特的資料入口\uFF0C可以成為模型的差異化\u3002",coreAssetBadgeLabel:"核心資產"};No.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"nodeCount",type:"number",default:4,min:3,max:5,step:1,label:"節點數量",desc:"生態連線節點數量(3\u20135)"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"前 N 個節點改為承載圖片(0\u20134\uFF0C超過節點數自動封頂)\uFF1B每張按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"左側大號支撐指標格數量(2\u20133)"},{key:"showValueLabels",type:"boolean",default:!0,label:"節點標註",desc:"各節點的角色標註 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個生態節點"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"nodeCount",step:1,label:"重點物件",desc:"被高亮的節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var Dp=No.defaults,Rp=No.controls;var wn={};Y(wn,{controls:()=>$p,default:()=>zo,defaults:()=>Pp});import"react";import{jsx as na,jsxs as Ge}from"react/jsx-runtime";function zo(t){let l={...zo.defaults,...t},{backgroundTheme:c,mediaCount:k,metricCount:d,tagCount:u,showMeter:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,company:A,tag:M,caption:F,meterLabel:D,meterValue:q,meterUnit:N,meterFill:z,meterUnits:L,metrics:y,clientsTitle:w,clients:v,closingLine:m,rackPrefix:f,capacityStickerLabel:n,capacityStickerSub:s,highlightStickerLabel:i}=l,a=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",e=y.slice(0,Math.max(2,d)),o=Math.max(0,Math.min(Number(g)||0,e.length-1)),r=v.slice(0,Math.max(2,u)),b=qp[k]||[],R=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"],E=Math.round(L*Math.min(1,Math.max(0,z)));return Ge("div",{className:"acl-root acl-cr",style:{background:a},children:[na("style",{children:`
        .acl-cr{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-cr__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-cr__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-cr__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-cr__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-cr__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-cr__h{ font-weight:900; font-size:74px; line-height:.92; margin:0; }
        .acl-cr__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);
          white-space:nowrap; }

        .acl-cr__body{ flex:1; display:flex; gap:52px; margin-top:24px; min-height:0; }

        /* left: vertical rack stack of photos */
        .acl-cr__stack{ flex:0 0 620px; position:relative; min-width:0; }
        .acl-cr__slot{ position:absolute; }
        .acl-cr__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }

        /* right: data column */
        .acl-cr__right{ flex:1; display:flex; flex-direction:column; min-width:0; }
        .acl-cr__plate{ display:flex; align-items:baseline; gap:16px; }
        .acl-cr__co{ font-weight:900; font-size:62px; line-height:.9; letter-spacing:-.01em; }
        .acl-cr__cotag{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px;
          letter-spacing:.05em; text-transform:uppercase; padding:6px 12px; background:var(--acl-pink);
          color:var(--acl-paper); transform:rotate(-2deg); box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }
        .acl-cr__cap{ font-weight:700; font-size:24px; line-height:1.46; margin:16px 0 0; }
        .acl-cr__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }

        /* capacity meter */
        .acl-cr__meter{ margin-top:22px; background:var(--acl-ink); color:var(--acl-paper);
          padding:20px 26px 22px; box-shadow:6px 8px 0 rgba(22,21,15,.22); position:relative; }
        .acl-cr__mhead{ display:flex; align-items:flex-end; justify-content:space-between; gap:18px; }
        .acl-cr__mk{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(251,250,244,.65); }
        .acl-cr__mv{ font-family:var(--acl-font-num); font-size:78px; line-height:.78; color:var(--acl-yellow); }
        .acl-cr__mv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:24px;
          margin-left:6px; color:rgba(251,250,244,.7); }
        .acl-cr__units{ display:grid; grid-template-columns:repeat(24, 1fr); gap:5px; margin-top:16px; }
        .acl-cr__units i{ height:18px; background:rgba(251,250,244,.16); }
        .acl-cr__units i.on{ background:var(--acl-yellow); }
        .acl-cr__mtag{ position:absolute; top:-16px; right:-12px; z-index:3; }

        /* metric ladder */
        .acl-cr__rows{ display:flex; flex-direction:column; gap:12px; margin-top:20px; }
        .acl-cr__r{ display:flex; align-items:center; gap:18px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:5px 6px 0 rgba(22,21,15,.13); padding:12px 20px;
          position:relative; transition:opacity .25s, transform .25s, box-shadow .25s, background .25s; }
        .acl-cr__rbar{ width:9px; align-self:stretch; flex:0 0 auto; }
        .acl-cr__rk{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); flex:1; min-width:0; }
        .acl-cr__rv{ font-family:var(--acl-font-num); font-size:42px; line-height:.84; white-space:nowrap; }
        .acl-cr__rv em{ font-style:normal; font-size:19px; font-family:var(--acl-font-cn); font-weight:700;
          margin-left:4px; color:rgba(22,21,15,.5); }
        .acl-cr__r--focus{ background:var(--acl-ink); transform:scale(1.02); z-index:2;
          box-shadow:8px 10px 0 rgba(22,21,15,.26); }
        .acl-cr__r--focus .acl-cr__rk{ color:rgba(255,255,255,.6); }
        .acl-cr__r--focus .acl-cr__rv{ color:var(--acl-yellow); }
        .acl-cr__r--focus .acl-cr__rv em{ color:rgba(255,255,255,.55); }
        .acl-cr__r--dim{ opacity:.5; }
        .acl-cr__rfx{ position:absolute; top:-15px; right:-8px; z-index:4; }

        /* client tag strip */
        .acl-cr__clients{ margin-top:auto; padding-top:22px; }
        .acl-cr__ctitle{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-bottom:11px; display:flex; align-items:center; gap:10px; }
        .acl-cr__chips{ display:flex; flex-wrap:wrap; gap:11px; }
        .acl-cr__chip{ font-family:var(--acl-font-cn); font-weight:900; font-size:22px; line-height:1;
          padding:11px 18px; border:3px solid var(--acl-ink); background:var(--acl-paper);
          box-shadow:4px 5px 0 rgba(22,21,15,.14); display:flex; align-items:center; gap:10px; }
        .acl-cr__chip i{ width:14px; height:14px; border-radius:50%; flex:0 0 auto; }

        .acl-cr__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cr__r{ animation:acl-cr-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); }
          [data-deck-active] .acl-cr__meter{ animation:acl-cr-pop .55s cubic-bezier(.2,.8,.2,1) .2s both; }
          [data-deck-active] .acl-cr__units i.on{ animation:acl-cr-lit .4s ease both;
            animation-delay:calc(var(--u,0) * .012s + .4s); }
        }
        @keyframes acl-cr-rise{ from{ opacity:0; transform:translateX(16px); } to{ opacity:1; } }
        @keyframes acl-cr-pop{ from{ opacity:0; transform:translateY(16px) scale(.97); } to{ opacity:1; transform:none; } }
        @keyframes acl-cr-lit{ from{ opacity:.2; } to{ opacity:1; } }
      `}),Ge("div",{className:"acl-cr__top",children:[na("div",{className:"acl-cr__eyebrow",children:C}),na("div",{className:"acl-cr__rule"}),na("div",{className:"acl-cr__kicker",children:P})]}),Ge("div",{className:"acl-cr__head",children:[na("h1",{className:"acl-cr__h",children:I}),na("div",{className:"acl-cr__sub",children:M}),h&&na(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),Ge("div",{className:"acl-cr__body",children:[Ge("div",{className:"acl-cr__stack",children:[b.length===0&&na("div",{className:"acl-cr__empty",children:"// 圖片數量 = 0"}),b.map((T,B)=>na("div",{className:"acl-cr__slot",style:{left:T.l,top:T.t,zIndex:B+1},children:na(W,{id:"cr-"+B,box:T.box,rotate:T.r,ratio:T.ratio,placeholder:"上傳",sticker:{label:A,sub:f+" "+String(B+1).padStart(2,"0"),color:T.color,subColor:"var(--acl-ink)",rotate:T.sr}})},B)),h&&b.length>0&&na(p,{kind:"arrow",size:78,rotate:20,color:"var(--acl-ink)",style:{right:-18,top:"42%"}})]}),Ge("div",{className:"acl-cr__right",children:[Ge("div",{className:"acl-cr__plate",children:[na("span",{className:"acl-cr__co",children:A}),na("span",{className:"acl-cr__cotag",children:M})]}),na("div",{className:"acl-cr__cap",dangerouslySetInnerHTML:{__html:F}}),_&&Ge("div",{className:"acl-cr__meter",children:[h&&na("div",{className:"acl-cr__mtag",children:na(H,{label:n,sub:s,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:5,size:13})}),Ge("div",{className:"acl-cr__mhead",children:[na("div",{className:"acl-cr__mk",children:D}),Ge("div",{className:"acl-cr__mv",children:[q,na("em",{children:N})]})]}),na("div",{className:"acl-cr__units",children:Array.from({length:L}).map((T,B)=>na("i",{className:B<E?"on":"",style:{"--u":B}},B))})]}),na("div",{className:"acl-cr__rows",children:e.map((T,B)=>{let S=x&&B===o,V=x&&!S;return Ge("div",{className:"acl-cr__r"+(S?" acl-cr__r--focus":"")+(V?" acl-cr__r--dim":""),style:{"--i":B},children:[S&&h&&na("div",{className:"acl-cr__rfx",children:na(H,{label:i,color:"var(--acl-yellow)",rotate:6,size:13})}),na("span",{className:"acl-cr__rbar",style:{background:S?"var(--acl-yellow)":R[B%R.length]}}),na("span",{className:"acl-cr__rk",children:T.k}),Ge("span",{className:"acl-cr__rv",children:[T.v,T.unit&&na("em",{children:T.unit})]})]},B)})}),Ge("div",{className:"acl-cr__clients",children:[Ge("div",{className:"acl-cr__ctitle",children:[w,h&&na(p,{kind:"arrowS",size:28,rotate:-12,style:{position:"static"}})]}),na("div",{className:"acl-cr__chips",children:r.map((T,B)=>Ge("span",{className:"acl-cr__chip",children:[na("i",{style:{background:R[B%R.length]}}),T]},B))})]})]})]}),Ge("div",{className:"acl-cr__foot",children:[h&&na(p,{kind:"loop",size:52,style:{position:"static"}}),na("span",{children:m})]})]})}var qp={0:[],1:[{l:70,t:70,box:470,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)"}],2:[{l:14,t:20,box:360,r:-3,ratio:1.18,sr:-4,color:"var(--acl-yellow)"},{l:250,t:380,box:350,r:4,ratio:.86,sr:4,color:"var(--acl-blue)"}],3:[{l:8,t:4,box:320,r:-3,ratio:1.2,sr:-4,color:"var(--acl-yellow)"},{l:300,t:220,box:290,r:4,ratio:.82,sr:4,color:"var(--acl-blue)"},{l:56,t:460,box:320,r:3,ratio:1.12,sr:-3,color:"var(--acl-pink)"}],4:[{l:0,t:0,box:290,r:-4,ratio:1.18,sr:-4,color:"var(--acl-yellow)"},{l:300,t:150,box:270,r:4,ratio:.82,sr:4,color:"var(--acl-blue)"},{l:30,t:380,box:280,r:3,ratio:1.12,sr:-3,color:"var(--acl-pink)"},{l:318,t:470,box:260,r:-3,ratio:.86,sr:5,color:"var(--acl-red)"}]};zo.defaults={images:[],backgroundTheme:"primary",mediaCount:3,metricCount:2,tagCount:3,showMeter:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"CoreWeave Case",kicker:"案例卡",headline:"算力基礎設施",company:"CoreWeave",tag:"GPU 雲",caption:"CoreWeave 代表算力基礎設施的 <b>確定性機會</b>\u2014\u2014當模型公司都在搶 GPU\uFF0C算力供應商獲得資本溢價\u3002",rackPrefix:"RACK",capacityStickerLabel:"算力",capacityStickerSub:"CAPACITY",highlightStickerLabel:"看點",meterLabel:"GPU 資源儲備",meterValue:"7.8",meterUnit:"萬張",meterFill:.78,meterUnits:48,metrics:[{k:"最大單筆融資",v:"110",unit:"億"},{k:"估值",v:"190",unit:"億"},{k:"在管叢集",v:"32",unit:"座"}],clientsTitle:"主要客戶",clients:["模型公司","生成式內容","企業推理","研究機構"],closingLine:"賣鏟子的人\uFF0C也能成為核心資產\u3002"};zo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"左側豎向堆疊圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"metricCount",type:"number",default:2,min:2,max:4,step:1,label:"指標數量",desc:"右側指標階梯行數量(2\u20134)"},{key:"tagCount",type:"number",default:3,min:2,max:4,step:1,label:"標籤數量",desc:"底部客戶標籤數量(2\u20134)"},{key:"showMeter",type:"boolean",default:!0,label:"容量計量",desc:"資源容量計量條(單元格 + 大數字) 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一條指標行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"metricCount",step:1,label:"重點物件",desc:"被突出的指標行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var Pp=zo.defaults,$p=zo.controls;var Nn={};Y(Nn,{controls:()=>Vp,default:()=>Eo,defaults:()=>Bp});import"react";import{jsx as ra,jsxs as Ve}from"react/jsx-runtime";function Eo(t){let l={...Eo.defaults,...t},{backgroundTheme:c,rowCount:k,metricCount:d,showBars:u,showRepCol:_,showRating:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,kicker:I,headline:A,company:M,tag:F,summary:D,metrics:q,columnLabels:N,shareUnit:z,rows:L,closingLine:y,caseStickerLabel:w,coreVariableStickerLabel:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=j(q).slice(0,Math.max(2,$(d,2))),n=j(L).slice(0,Math.max(2,$(k,2))),s=Math.max(0,Math.min(Number(h)||0,n.length-1)),i=X(n.map(r=>$(r?.share)),1),a=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"],e=["380px","1fr"];_&&e.push("300px"),x&&e.push("250px");let o=e.join(" ");return Ve("div",{className:"acl-root acl-ce",style:{background:m},children:[ra("style",{children:`
        .acl-ce{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:70px 96px 58px; display:flex; flex-direction:column; }
        .acl-ce__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-ce__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ce__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-ce__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-ce__head{ display:flex; align-items:flex-end; gap:22px; margin-top:12px; flex:0 0 auto; }
        .acl-ce__h{ font-weight:900; font-size:66px; line-height:.92; margin:0; }
        .acl-ce__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:20px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg); white-space:nowrap; }
        .acl-ce__summary{ margin-left:auto; max-width:560px; font-weight:700; font-size:22px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-ce__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        /* nameplate metric strip */
        .acl-ce__band{ display:flex; align-items:stretch; margin-top:20px; background:var(--acl-ink);
          color:var(--acl-paper); box-shadow:6px 8px 0 rgba(22,21,15,.2); flex:0 0 auto; position:relative; }
        .acl-ce__co{ flex:0 0 auto; display:flex; align-items:center; gap:14px; padding:18px 30px;
          border-right:3px solid rgba(251,250,244,.2); }
        .acl-ce__coname{ font-weight:900; font-size:46px; line-height:.9; color:var(--acl-paper); }
        .acl-ce__cotag{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.05em; text-transform:uppercase; padding:5px 11px; background:var(--acl-pink);
          color:var(--acl-paper); transform:rotate(-2deg); white-space:nowrap; }
        .acl-ce__mtiles{ flex:1; display:flex; }
        .acl-ce__mt{ flex:1; padding:16px 26px; border-right:1.5px dashed rgba(251,250,244,.22);
          display:flex; flex-direction:column; justify-content:center; gap:4px; }
        .acl-ce__mt:last-child{ border-right:none; }
        .acl-ce__mtk{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.07em;
          text-transform:uppercase; color:rgba(251,250,244,.55); }
        .acl-ce__mtv{ font-family:var(--acl-font-num); font-size:46px; line-height:.86; color:var(--acl-yellow); }
        .acl-ce__mtv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; color:rgba(251,250,244,.6); }
        .acl-ce__bandfx{ position:absolute; top:-16px; right:-12px; z-index:3; }

        /* ledger table panel */
        .acl-ce__panel{ position:relative; flex:1; margin-top:22px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:10px 36px 14px; display:flex; flex-direction:column; min-height:0; }
        .acl-ce__colhead{ display:grid; grid-template-columns:${o}; align-items:center; gap:28px;
          padding:13px 6px 11px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.07em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ce__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-ce__row{ flex:1; display:grid; grid-template-columns:${o}; align-items:center; gap:28px;
          padding:0 6px; border-bottom:1.5px dashed rgba(22,21,15,.2); position:relative;
          transition:background .25s, color .25s; }
        .acl-ce__row:last-child{ border-bottom:none; }

        .acl-ce__line{ display:flex; flex-direction:column; gap:3px; }
        .acl-ce__line b{ font-weight:900; font-size:32px; line-height:1.04; }
        .acl-ce__line span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }

        .acl-ce__share{ display:flex; align-items:center; gap:16px; }
        .acl-ce__track{ flex:1; height:24px; background:rgba(22,21,15,.08); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-ce__fill{ position:absolute; left:0; top:0; bottom:0;
          transition:width .5s cubic-bezier(.2,.8,.2,1); }
        .acl-ce__sval{ font-family:var(--acl-font-num); font-size:36px; line-height:.9; min-width:96px;
          text-align:right; white-space:nowrap; }
        .acl-ce__sval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:2px; opacity:.6; }

        .acl-ce__rep{ font-weight:700; font-size:21px; line-height:1.2; }
        .acl-ce__rep em{ font-style:normal; display:block; font-family:var(--acl-font-mono); font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }

        .acl-ce__verdict{ display:flex; flex-direction:column; gap:7px; }
        .acl-ce__pips{ display:flex; gap:7px; }
        .acl-ce__pips i{ width:17px; height:17px; border:2.5px solid var(--acl-ink); border-radius:50%; }
        .acl-ce__pips i.on{ background:var(--acl-pink); }
        .acl-ce__verdict span{ font-weight:700; font-size:17px; }

        .acl-ce__row--focus{ background:var(--acl-ink); color:var(--acl-paper);
          box-shadow:6px 0 0 var(--acl-ink), -6px 0 0 var(--acl-ink); border-bottom-color:transparent; z-index:2; }
        .acl-ce__row--focus .acl-ce__line span{ color:rgba(251,250,244,.6); }
        .acl-ce__row--focus .acl-ce__track{ background:rgba(255,255,255,.16); border-color:var(--acl-paper); }
        .acl-ce__row--focus .acl-ce__fill{ background:var(--acl-yellow) !important; }
        .acl-ce__row--focus .acl-ce__rep em{ color:rgba(251,250,244,.6); }
        .acl-ce__row--focus .acl-ce__pips i{ border-color:var(--acl-paper); }
        .acl-ce__row--focus .acl-ce__pips i.on{ background:var(--acl-yellow); }
        .acl-ce__fx{ position:absolute; top:-13px; left:128px; z-index:5; }

        .acl-ce__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ce__row{ animation:acl-ce-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .15s); }
          [data-deck-active] .acl-ce__band{ animation:acl-ce-band .5s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-ce-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
        @keyframes acl-ce-band{ from{ opacity:0; transform:translateY(-12px); } to{ opacity:1; transform:none; } }
      `}),Ve("div",{className:"acl-ce__top",children:[ra("div",{className:"acl-ce__eyebrow",children:P}),ra("div",{className:"acl-ce__rule"}),ra("div",{className:"acl-ce__kicker",children:I})]}),Ve("div",{className:"acl-ce__head",children:[ra("h1",{className:"acl-ce__h",children:A}),ra("div",{className:"acl-ce__sub",children:F}),ra("div",{className:"acl-ce__summary",dangerouslySetInnerHTML:{__html:D}})]}),Ve("div",{className:"acl-ce__band",children:[C&&ra("div",{className:"acl-ce__bandfx",children:ra(H,{label:w,sub:M.toUpperCase(),color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:5,size:12})}),Ve("div",{className:"acl-ce__co",children:[ra("span",{className:"acl-ce__coname",children:M}),ra("span",{className:"acl-ce__cotag",children:F})]}),ra("div",{className:"acl-ce__mtiles",children:f.map((r,b)=>Ve("div",{className:"acl-ce__mt",children:[ra("div",{className:"acl-ce__mtk",children:r.k}),Ve("div",{className:"acl-ce__mtv",children:[r.v,r.unit&&ra("em",{children:r.unit})]})]},b))})]}),Ve("div",{className:"acl-ce__panel",children:[Ve("div",{className:"acl-ce__colhead",children:[ra("span",{children:N[0]}),Ve("span",{children:[N[1]," \xB7 ",z]}),_&&ra("span",{children:N[2]}),x&&ra("span",{children:N[3]})]}),ra("div",{className:"acl-ce__rows",children:n.map((r,b)=>{let R=g&&b===s;return Ve("div",{className:"acl-ce__row"+(R?" acl-ce__row--focus":""),style:{"--i":b},children:[R&&C&&ra("div",{className:"acl-ce__fx",children:ra(H,{label:v,color:"var(--acl-yellow)",rotate:6,size:13})}),Ve("div",{className:"acl-ce__line",children:[ra("b",{children:r.line}),ra("span",{children:r.en})]}),Ve("div",{className:"acl-ce__share",children:[u&&ra("div",{className:"acl-ce__track",children:ra("div",{className:"acl-ce__fill",style:{width:`${G($(r?.share),i)*100}%`,background:a[b%a.length]}})}),Ve("div",{className:"acl-ce__sval",children:[$(r?.share),ra("em",{children:z})]})]}),_&&Ve("div",{className:"acl-ce__rep",children:[r.rep,ra("em",{children:r.repEn})]}),x&&Ve("div",{className:"acl-ce__verdict",children:[ra("div",{className:"acl-ce__pips",children:[0,1,2].map(E=>ra("i",{className:E<r.rating?"on":""},E))}),ra("span",{children:r.verdict})]})]},b)})})]}),Ve("div",{className:"acl-ce__foot",children:[C&&ra(p,{kind:"loop",size:52,style:{position:"static"}}),ra("span",{children:y})]})]})}Eo.defaults={backgroundTheme:"muted",rowCount:4,metricCount:3,showBars:!0,showRepCol:!0,showRating:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Scale AI Case",kicker:"案例卡",headline:"資料基礎設施",company:"Scale AI",tag:"資料標註",summary:"Scale AI 代表標註\u3001RLHF 與評測資料需求\u2014\u2014<b>資料品質是模型競爭的底層變數</b>\u3002",caseStickerLabel:"案例",coreVariableStickerLabel:"底層變數",metrics:[{k:"最大單筆融資",v:"10",unit:"億"},{k:"企業客戶",v:"1200",unit:"家"},{k:"政府客戶佔比",v:"18",unit:"%"}],columnLabels:["業務線","營收佔比","代表客戶","判斷"],shareUnit:"%",rows:[{line:"資料標註",en:"Data Labeling",share:38,rep:"模型實驗室",repEn:"Model Labs",rating:3,verdict:"剛性需求"},{line:"人類反饋",en:"RLHF",share:27,rep:"頭部大模型",repEn:"Frontier Labs",rating:3,verdict:"核心壁壘"},{line:"模型評測",en:"Evaluation",share:20,rep:"企業 / 政府",repEn:"Enterprise / Gov",rating:2,verdict:"快速增長"},{line:"合成資料",en:"Synthetic",share:15,rep:"研究機構",repEn:"Research",rating:2,verdict:"新興方向"}],closingLine:"資料品質\uFF0C是模型競爭的底層變數\u3002"};Eo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"rowCount",type:"number",default:4,min:2,max:4,step:1,label:"行數",desc:"展示的業務線行數(2\u20134)"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"頂部銘牌帶的指標格數量(2\u20134)"},{key:"showBars",type:"boolean",default:!0,label:"資料條",desc:"佔比列的橫向比例條 顯隱"},{key:"showRepCol",type:"boolean",default:!0,label:"代表列",desc:"\u300C代表客戶\u300D列 顯隱"},{key:"showRating",type:"boolean",default:!0,label:"判斷評級",desc:"\u300C判斷\u300D評級圓點列 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"rowCount",step:1,label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];var Bp=Eo.defaults,Vp=Eo.controls;var zn={};Y(zn,{controls:()=>Yp,default:()=>Jt,defaults:()=>Op,numberBounds:()=>jp});import Hp from"react";import{jsx as ya,jsxs as vt}from"react/jsx-runtime";function Jt(t){let l={...Jt.defaults,...t},{backgroundTheme:c,mediaCount:k,stageCount:d,metricCount:u,showValueLabels:_,showBadge:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,kicker:I,headline:A,company:M,tag:F,caption:D,funnelTitle:q,badgeValue:N,badgeLabel:z,stages:L,hero:y,metrics:w,closingLine:v,conversionStickerLabel:m}=l,f=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",n=j(L).slice(0,Math.max(2,$(d,2))),s=Q(h,0,Math.max(0,n.length-1)),i=j(w).slice(0,Math.max(2,$(u,2))),a=y&&y[k]||[],e=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)"];return vt("div",{className:"acl-root acl-cf",style:{background:f},children:[ya("style",{children:`
        .acl-cf{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-cf__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-cf__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-cf__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-cf__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-cf__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-cf__h{ font-weight:900; font-size:74px; line-height:.92; margin:0; }
        .acl-cf__plate{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-cf__body{ flex:1; display:flex; gap:52px; margin-top:24px; min-height:0; }

        /* left: dominant hero (1 main + nested) */
        .acl-cf__stage{ flex:0 0 760px; position:relative; min-width:0; }
        .acl-cf__slot{ position:absolute; }
        .acl-cf__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-3deg); }
        .acl-cf__badge{ position:absolute; z-index:6; left:6px; bottom:18px; background:var(--acl-ink);
          color:var(--acl-paper); padding:16px 24px 14px; transform:rotate(-3deg);
          box-shadow:6px 8px 0 rgba(22,21,15,.28); text-align:center;  white-space:nowrap;}
        .acl-cf__badgev{ font-family:var(--acl-font-num); font-size:74px; line-height:.82; color:var(--acl-yellow); }
        .acl-cf__badgek{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(251,250,244,.7); margin-top:5px; }

        /* right: conversion funnel + tiles */
        .acl-cf__right{ flex:1; display:flex; flex-direction:column; min-width:0; }
        .acl-cf__cap{ font-weight:700; font-size:24px; line-height:1.46; }
        .acl-cf__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-cf__ftitle{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:24px 0 14px; display:flex;
          align-items:center; gap:10px; }
        .acl-cf__funnel{ display:flex; flex-direction:column; gap:10px; }
        .acl-cf__stagewrap{ display:flex; flex-direction:column; align-items:center; gap:10px; }
        .acl-cf__connector{ width:0; height:0; border-left:13px solid transparent;
          border-right:13px solid transparent; border-top:12px solid rgba(22,21,15,.32); }
        .acl-cf__bar{ position:relative; height:74px; border:3px solid var(--acl-ink);
          box-shadow:5px 6px 0 rgba(22,21,15,.14); display:flex; align-items:center; gap:16px;
          padding:0 24px; color:var(--acl-paper); overflow:hidden;
          transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-cf__bk{ font-weight:900; font-size:27px; line-height:1; z-index:1; white-space:nowrap; }
        .acl-cf__bnote{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; opacity:.8; z-index:1; white-space:nowrap; }
        .acl-cf__bv{ margin-left:auto; font-family:var(--acl-font-num); font-size:44px; line-height:.84;
          z-index:1; white-space:nowrap; color:var(--acl-paper); }
        .acl-cf__bv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:3px; opacity:.7; }
        .acl-cf__bar--focus{ transform:scale(1.025); z-index:2; box-shadow:8px 10px 0 rgba(22,21,15,.26);
          outline:4px solid var(--acl-yellow); outline-offset:-3px; }
        .acl-cf__bar--dim{ opacity:.52; }
        .acl-cf__bfx{ position:absolute; top:-14px; right:-8px; z-index:5; }

        .acl-cf__tiles{ display:flex; gap:34px; margin-top:auto; padding-top:24px; }
        .acl-cf__tile .acl-metatag .v{ font-family:var(--acl-font-num); font-size:48px; line-height:.9; }
        .acl-cf__tile .acl-metatag .v em{ font-style:normal; font-size:18px; font-family:var(--acl-font-cn);
          font-weight:700; margin-left:4px; color:rgba(22,21,15,.5); }

        .acl-cf__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cf__stagewrap{ animation:acl-cf-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .25s); }
          [data-deck-active] .acl-cf__badge{ animation:acl-cf-pop .55s cubic-bezier(.2,.8,.2,1) .3s both; }
        }
        @keyframes acl-cf-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; } }
        @keyframes acl-cf-pop{ from{ opacity:0; transform:rotate(-3deg) scale(.8); } to{ opacity:1; transform:rotate(-3deg) scale(1); } }
      `}),vt("div",{className:"acl-cf__top",children:[ya("div",{className:"acl-cf__eyebrow",children:P}),ya("div",{className:"acl-cf__rule"}),ya("div",{className:"acl-cf__kicker",children:I})]}),vt("div",{className:"acl-cf__head",children:[ya("h1",{className:"acl-cf__h",children:A}),ya("div",{className:"acl-cf__plate",children:M}),C&&ya(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),vt("div",{className:"acl-cf__body",children:[vt("div",{className:"acl-cf__stage",children:[a.length===0&&ya("div",{className:"acl-cf__empty",children:"// 圖片數量 = 0"}),a.map((o,r)=>ya("div",{className:"acl-cf__slot",style:{left:o.l,top:o.t,zIndex:o.z||r+1},children:ya(W,{id:"cf-"+r,box:o.box,rotate:o.r,ratio:o.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:r===0?{label:M,sub:F,color:o.color,subColor:"var(--acl-ink)",rotate:o.sr}:null})},r)),x&&a.length>0&&vt("div",{className:"acl-cf__badge",children:[ya("div",{className:"acl-cf__badgev",children:N}),ya("div",{className:"acl-cf__badgek",children:z})]}),C&&a.length>0&&ya(p,{kind:"arrow",size:76,rotate:6,color:"var(--acl-ink)",style:{right:-22,top:"38%"}})]}),vt("div",{className:"acl-cf__right",children:[ya("div",{className:"acl-cf__cap",dangerouslySetInnerHTML:{__html:D}}),vt("div",{className:"acl-cf__ftitle",children:[q,C&&ya(p,{kind:"arrowS",size:28,rotate:-12,style:{position:"static"}})]}),ya("div",{className:"acl-cf__funnel",children:n.map((o,r)=>{let b=g&&r===s,R=g&&!b,E=e[r%e.length];return vt("div",{className:"acl-cf__stagewrap",style:{"--i":r},children:[r>0&&ya("div",{className:"acl-cf__connector"}),vt("div",{className:"acl-cf__bar"+(b?" acl-cf__bar--focus":"")+(R?" acl-cf__bar--dim":""),style:{width:o.w+"%",background:E},children:[b&&C&&ya("div",{className:"acl-cf__bfx",children:ya(H,{label:m,color:"var(--acl-yellow)",rotate:6,size:12})}),ya("span",{className:"acl-cf__bk",children:o.k}),ya("span",{className:"acl-cf__bnote",children:o.note}),_&&vt("span",{className:"acl-cf__bv",children:[o.v,o.unit&&ya("em",{children:o.unit})]})]})]},r)})}),ya("div",{className:"acl-cf__tiles",children:i.map((o,r)=>ya("div",{className:"acl-cf__tile",children:ya(kt,{k:o.k,v:vt(Hp.Fragment,{children:[o.v,o.unit&&ya("em",{children:o.unit})]})})},r))})]})]}),vt("div",{className:"acl-cf__foot",children:[C&&ya(p,{kind:"loop",size:52,style:{position:"static"}}),ya("span",{children:v})]})]})}Jt.defaults={images:[],backgroundTheme:"primary",mediaCount:2,stageCount:3,metricCount:2,showValueLabels:!0,showBadge:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Perplexity Case",kicker:"案例卡",headline:"AI 搜尋入口",company:"Perplexity",tag:"AI 搜尋",caption:"Perplexity 代表 AI 搜尋與答案引擎方向\u2014\u2014機會在於 <b>重構資訊入口</b>\uFF0C挑戰是內容版權與使用者留存\u3002",funnelTitle:"從流量到訂閱的轉化漏斗",conversionStickerLabel:"轉化",badgeValue:"4800萬",badgeLabel:"Monthly Active Users",stages:[{k:"月活使用者",note:"Monthly Active",v:"4800",unit:"萬",w:100},{k:"高頻提問",note:"High-intent",v:"58",unit:"%",w:64},{k:"訂閱轉化",note:"Paid Conversion",v:"5.8",unit:"%",w:34},{k:"年度續訂",note:"Renewal",v:"74",unit:"%",w:22}],hero:{0:[],1:[{l:90,t:50,box:540,r:-2,ratio:1.2,sr:-4,z:1,color:"var(--acl-yellow)"}],2:[{l:40,t:20,box:500,r:-3,ratio:1.12,sr:-4,z:1,color:"var(--acl-yellow)"},{l:410,t:380,box:300,r:5,ratio:.82,sr:4,z:2,color:"var(--acl-blue)"}],3:[{l:30,t:0,box:470,r:-3,ratio:1.08,sr:-4,z:1,color:"var(--acl-yellow)"},{l:430,t:50,box:250,r:5,ratio:.8,sr:4,z:2,color:"var(--acl-blue)"},{l:400,t:400,box:280,r:4,ratio:1.05,sr:-3,z:3,color:"var(--acl-pink)"}]},metrics:[{k:"最大單筆融資",v:"5.2",unit:"億"},{k:"賽道",v:"AI 搜尋"},{k:"訂閱轉化率",v:"5.8",unit:"%"}],closingLine:"新入口\uFF0C要用留存證明價值\u3002"};Jt.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"特寫圖片數量(0\u20133)\uFF1A1 主視覺 + 至多 2 張巢狀\uFF1B每張按上傳圖片比例自適應"},{key:"stageCount",type:"number",default:3,min:2,max:4,step:1,label:"漏斗階段",desc:"轉化漏斗的階段數量(2\u20134)"},{key:"metricCount",type:"number",default:2,min:2,max:3,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20133)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"漏斗各階段的數值標籤 顯隱"},{key:"showBadge",type:"boolean",default:!0,label:"高亮徽標",desc:"主視覺上的大號高亮數字徽標 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個漏斗階段"},{key:"focusIndex",type:"number",default:2,min:0,max:3,maxFrom:"stageCount",step:1,label:"重點物件",desc:"被突出的漏斗階段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];Jt.numberBounds={"stages[].w":{min:0,max:100,semantics:"percent"}};var Op=Jt.defaults,Yp=Jt.controls,jp=Jt.numberBounds;var En={};Y(En,{controls:()=>Wp,default:()=>al,defaults:()=>Up,numberBounds:()=>Xp});import"react";import{jsx as ga,jsxs as lt}from"react/jsx-runtime";function al(t){let l={...al.defaults,...t},{backgroundTheme:c,layerCount:k,mediaCount:d,showMeter:u,metricCount:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,company:A,tag:M,caption:F,bigLabel:D,bigNumber:q,bigUnit:N,metrics:z,layersTitle:L,layers:y,closingLine:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=y.slice(0,Math.max(2,k)),f=Math.max(0,Math.min(Number(g)||0,m.length-1)),n=Math.min(d,m.length),s=z.slice(0,Math.max(2,_)),i=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-yellow)"];return lt("div",{className:"acl-root acl-pf",style:{background:v},children:[ga("style",{children:`
        .acl-pf{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 58px; display:flex; flex-direction:column; }
        .acl-pf__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-pf__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-pf__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-pf__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-pf__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-pf__h{ font-weight:900; font-size:70px; line-height:.92; margin:0; }
        .acl-pf__plate{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-pf__body{ flex:1; display:flex; gap:56px; margin-top:24px; min-height:0; }

        /* left: big retention number + caption + tiles */
        .acl-pf__left{ flex:0 0 600px; display:flex; flex-direction:column; min-width:0; }
        .acl-pf__cap{ font-weight:700; font-size:24px; line-height:1.46; }
        .acl-pf__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-pf__big{ position:relative; margin-top:30px; }
        .acl-pf__biglabel{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-pf__bignum{ font-family:var(--acl-font-num); font-size:230px; line-height:.82; margin-top:20px;
          letter-spacing:-.02em; color:var(--acl-pink); text-shadow:7px 8px 0 var(--acl-ink); }
        .acl-pf__bignum em{ font-style:normal; font-size:88px; color:var(--acl-ink); text-shadow:none; margin-left:4px; }
        .acl-pf__bigpin{ position:absolute; right:8px; top:-2px; z-index:3; }
        .acl-pf__tiles{ display:flex; gap:30px; margin-top:auto; padding-top:22px; }
        .acl-pf__tile{ border-top:5px solid var(--acl-ink); padding-top:11px; }
        .acl-pf__tk{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-pf__tv{ font-family:var(--acl-font-num); font-size:48px; line-height:.92; margin-top:2px; }
        .acl-pf__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:4px; color:rgba(22,21,15,.55); }

        /* right: platform layer bands */
        .acl-pf__layers{ flex:1; display:flex; flex-direction:column; min-width:0; }
        .acl-pf__ltitle{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-bottom:13px; display:flex;
          align-items:center; gap:10px; flex:0 0 auto; }
        .acl-pf__stack{ flex:1; display:flex; flex-direction:column; gap:12px; min-height:0; }
        .acl-pf__band{ flex:1; display:flex; align-items:center; gap:20px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:5px 6px 0 rgba(22,21,15,.13); padding:12px 22px;
          position:relative; min-height:0; transition:opacity .25s, transform .25s, box-shadow .25s, background .25s; }
        .acl-pf__bn{ flex:0 0 auto; width:48px; height:48px; border-radius:50%; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:25px; background:var(--acl-ink); color:var(--acl-yellow); }
        .acl-pf__bthumb{ flex:0 0 auto; }
        .acl-pf__binfo{ flex:0 0 282px; min-width:0; }
        .acl-pf__bl{ font-weight:900; font-size:29px; line-height:1.04; }
        .acl-pf__bsub{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-pf__meter{ flex:1; min-width:0; }
        .acl-pf__track{ height:22px; background:rgba(22,21,15,.08); border:2px solid var(--acl-ink);
          position:relative; overflow:hidden; }
        .acl-pf__fill{ position:absolute; left:0; top:0; bottom:0; transition:width .55s cubic-bezier(.2,.8,.2,1); }
        .acl-pf__bv{ flex:0 0 auto; font-family:var(--acl-font-num); font-size:38px; line-height:.84;
          min-width:118px; text-align:right; white-space:nowrap; }
        .acl-pf__bv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; color:rgba(22,21,15,.5); }
        .acl-pf__band--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:scale(1.015); z-index:2;
          box-shadow:8px 10px 0 rgba(22,21,15,.26); }
        .acl-pf__band--focus .acl-pf__bsub{ color:rgba(251,250,244,.6); }
        .acl-pf__band--focus .acl-pf__track{ background:rgba(255,255,255,.16); border-color:var(--acl-paper); }
        .acl-pf__band--focus .acl-pf__fill{ background:var(--acl-yellow) !important; }
        .acl-pf__band--focus .acl-pf__bv{ color:var(--acl-yellow); }
        .acl-pf__band--focus .acl-pf__bv em{ color:rgba(251,250,244,.55); }
        .acl-pf__band--dim{ opacity:.55; }
        .acl-pf__bfx{ position:absolute; top:-15px; right:-8px; z-index:5; }

        .acl-pf__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pf__band{ animation:acl-pf-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .25s); }
          [data-deck-active] .acl-pf__bignum{ animation:acl-pf-pop .6s cubic-bezier(.2,.8,.2,1) both; }
        }
        @keyframes acl-pf-rise{ from{ opacity:0; transform:translateX(18px); } to{ opacity:1; } }
        @keyframes acl-pf-pop{ from{ opacity:0; transform:translateY(20px) scale(.93); } to{ opacity:1; transform:none; } }
      `}),lt("div",{className:"acl-pf__top",children:[ga("div",{className:"acl-pf__eyebrow",children:C}),ga("div",{className:"acl-pf__rule"}),ga("div",{className:"acl-pf__kicker",children:P})]}),lt("div",{className:"acl-pf__head",children:[ga("h1",{className:"acl-pf__h",children:I}),ga("div",{className:"acl-pf__plate",children:A}),h&&ga(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),lt("div",{className:"acl-pf__body",children:[lt("div",{className:"acl-pf__left",children:[ga("div",{className:"acl-pf__cap",dangerouslySetInnerHTML:{__html:F}}),lt("div",{className:"acl-pf__big",children:[h&&ga("div",{className:"acl-pf__bigpin",children:ga(H,{label:A,sub:l.retentionStickerSub,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-5,size:14})}),ga("div",{className:"acl-pf__biglabel",children:D}),lt("div",{className:"acl-pf__bignum",children:[q,ga("em",{children:N})]})]}),ga("div",{className:"acl-pf__tiles",children:s.map((a,e)=>lt("div",{className:"acl-pf__tile",children:[ga("div",{className:"acl-pf__tk",children:a.k}),lt("div",{className:"acl-pf__tv",children:[a.v,a.unit&&ga("em",{children:a.unit})]})]},e))})]}),lt("div",{className:"acl-pf__layers",children:[lt("div",{className:"acl-pf__ltitle",children:[L,h&&ga(p,{kind:"arrowS",size:28,rotate:-12,style:{position:"static"}})]}),ga("div",{className:"acl-pf__stack",children:m.map((a,e)=>{let o=x&&e===f,r=x&&!o,b=i[e%i.length],R=e<n;return lt("div",{className:"acl-pf__band"+(o?" acl-pf__band--focus":"")+(r?" acl-pf__band--dim":""),style:{"--i":e},children:[o&&h&&ga("div",{className:"acl-pf__bfx",children:ga(H,{label:l.expansionBadgeLabel,color:"var(--acl-yellow)",rotate:6,size:13})}),R?ga("div",{className:"acl-pf__bthumb",children:ga(W,{id:"pf-"+e,box:84,rotate:e%2?3:-3,ratio:1,accent:o?"var(--acl-yellow)":"var(--acl-paper)",placeholder:"上傳"})}):ga("div",{className:"acl-pf__bn",children:String(e+1).padStart(2,"0")}),lt("div",{className:"acl-pf__binfo",children:[ga("div",{className:"acl-pf__bl",children:a.label}),ga("div",{className:"acl-pf__bsub",children:a.en})]}),u&&ga("div",{className:"acl-pf__meter",children:ga("div",{className:"acl-pf__track",children:ga("div",{className:"acl-pf__fill",style:{width:a.meter+"%",background:o?"var(--acl-yellow)":b}})})}),lt("div",{className:"acl-pf__bv",children:[a.value,a.unit&&ga("em",{children:a.unit})]})]},e)})})]})]}),lt("div",{className:"acl-pf__foot",children:[h&&ga(p,{kind:"loop",size:52,style:{position:"static"}}),ga("span",{children:w})]})]})}al.defaults={images:[],backgroundTheme:"primary",layerCount:4,mediaCount:2,showMeter:!0,metricCount:3,focusEnabled:!0,focusIndex:3,showDecor:!0,eyebrow:"Databricks Case",kicker:"案例卡",headline:"資料平臺延展",company:"Databricks",tag:"資料平臺",caption:"Databricks 是資料平臺向 AI 平臺延展的典型\u2014\u2014<b>存量客戶基礎</b>是 AI 商業化的捷徑\u3002",bigLabel:"淨收入留存 NRR",bigNumber:"132",bigUnit:"%",metrics:[{k:"最大單筆融資",v:"5.0",unit:"億"},{k:"企業客戶",v:"1.1",unit:"萬家"},{k:"賽道",v:"資料平臺"}],layersTitle:"從資料平臺到 AI 平臺",layers:[{label:"資料湖倉",en:"Lakehouse",meter:96,value:"底座",unit:""},{label:"資料治理",en:"Governance",meter:82,value:"82",unit:"%"},{label:"機器學習平臺",en:"ML Platform",meter:68,value:"68",unit:"%"},{label:"生成式 AI",en:"Mosaic AI",meter:54,value:"54",unit:"%"},{label:"應用與智慧體",en:"Apps & Agents",meter:31,value:"31",unit:"%"}],closingLine:"存量客戶基礎\uFF0C是 AI 商業化的捷徑\u3002",expansionBadgeLabel:"延展",retentionStickerSub:"NRR"};al.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"layerCount",type:"number",default:4,min:2,max:5,step:1,label:"層級數量",desc:"平臺層帶數量(2\u20135)"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"前 N 個層帶改為承載圖片縮圖(0\u20134\uFF0C超過層數自動封頂)\uFF1B每張按上傳圖片比例自適應"},{key:"showMeter",type:"boolean",default:!0,label:"佔用計量",desc:"各層帶的採用率/佔用比例條 顯隱"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"左側大數字下方支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個平臺層帶"},{key:"focusIndex",type:"number",default:3,min:0,max:4,maxFrom:"layerCount",step:1,label:"重點物件",desc:"被突出的層帶序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];al.numberBounds={"layers[].meter":{min:0,max:100,semantics:"percent"}};var Up=al.defaults,Wp=al.controls,Xp=al.numberBounds;var Cn={};Y(Cn,{controls:()=>Kp,default:()=>el,defaults:()=>Qp,numberBounds:()=>Zp});import Gp from"react";import{jsx as ca,jsxs as Qe}from"react/jsx-runtime";function el(t){let l={...el.defaults,...t},{backgroundTheme:c,mediaCount:k,sourceCount:d,metricCount:u,showValueLabels:_,showBadge:x,showConverge:g,focusEnabled:h,focusIndex:C,showDecor:P,eyebrow:I,kicker:A,headline:M,company:F,tag:D,caption:q,sourcesTitle:N,badgeValue:z,badgeUnit:L,badgeLabel:y,sources:w,hero:v,metrics:m,closingLine:f,dailyEntryStickerLabel:n}=l,s=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",i=w.slice(0,Math.max(2,Math.min(10,Number(d)||2))),a=Math.max(0,Math.min(Number(C)||0,i.length-1)),e=m.slice(0,Math.max(2,u)),o=v[k]||[],r=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-yellow)"];return Qe("div",{className:"acl-root acl-ag",style:{background:s},children:[ca("style",{children:`
        .acl-ag{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-ag__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-ag__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-ag__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-ag__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-ag__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-ag__h{ font-weight:900; font-size:74px; line-height:.92; margin:0; }
        .acl-ag__plate{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-ag__body{ flex:1; display:flex; gap:46px; margin-top:24px; min-height:0; }

        /* left: caption + converging source grid */
        .acl-ag__left{ flex:1 1 0; min-width:0; display:flex; flex-direction:column; }
        .acl-ag__cap{ font-weight:700; font-size:24px; line-height:1.46; }
        .acl-ag__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-ag__stitle{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:22px 0 14px; display:flex;
          align-items:center; gap:10px; }
        .acl-ag__grid{ display:grid; grid-template-columns:1fr 1fr; gap:13px; align-content:start; }
        .acl-ag__src{ position:relative; display:grid; grid-template-columns:38px 1fr; gap:13px;
          align-items:center; padding:12px 15px 12px 11px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:4px 5px 0 rgba(22,21,15,.14);
          transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-ag__sn{ width:38px; height:38px; border-radius:50%; display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:21px; background:var(--acl-ink); color:var(--acl-yellow); }
        .acl-ag__st{ min-width:0; }
        .acl-ag__sk{ font-weight:900; font-size:22px; line-height:1.04; }
        .acl-ag__snote{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:2px; }
        .acl-ag__sbarwrap{ display:flex; align-items:center; gap:9px; margin-top:7px; }
        .acl-ag__sbar{ flex:1; height:8px; background:rgba(22,21,15,.12); position:relative; overflow:hidden; }
        .acl-ag__sbar i{ position:absolute; inset:0 auto 0 0; background:var(--acl-ink); }
        .acl-ag__sv{ font-family:var(--acl-font-num); font-size:21px; line-height:1; white-space:nowrap; }
        .acl-ag__src--focus{ border-color:var(--acl-pink); transform:rotate(-1deg) scale(1.02);
          box-shadow:7px 8px 0 rgba(22,21,15,.2); z-index:2; }
        .acl-ag__src--focus .acl-ag__sbar i{ background:var(--acl-pink); }
        .acl-ag__src--dim{ opacity:.5; }
        .acl-ag__sfx{ position:absolute; right:-14px; top:-18px; z-index:4; }

        /* right: dominant hero + badge + tiles */
        .acl-ag__right{ flex:0 0 700px; display:flex; flex-direction:column; min-width:0; }
        .acl-ag__stage{ position:relative; flex:1; min-height:0; }
        .acl-ag__slot{ position:absolute; }
        .acl-ag__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-3deg); }
        .acl-ag__badge{ position:absolute; z-index:6; right:4px; top:14px; background:var(--acl-ink);
          color:var(--acl-paper); padding:15px 22px 13px; transform:rotate(3deg);
          box-shadow:6px 8px 0 rgba(22,21,15,.28); text-align:center;  white-space:nowrap;}
        .acl-ag__badgev{ font-family:var(--acl-font-num); font-size:66px; line-height:.82; color:var(--acl-yellow); }
        .acl-ag__badgev em{ font-style:normal; font-size:26px; margin-left:2px; }
        .acl-ag__badgek{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(251,250,244,.7); margin-top:5px; }
        .acl-ag__conv{ position:absolute; left:-44px; top:46%; z-index:5; }

        .acl-ag__tiles{ display:flex; gap:30px; padding-top:20px; }
        .acl-ag__tile .acl-metatag .v{ font-family:var(--acl-font-num); font-size:46px; line-height:.9; }
        .acl-ag__tile .acl-metatag .v em{ font-style:normal; font-size:18px; font-family:var(--acl-font-cn);
          font-weight:700; margin-left:4px; color:rgba(22,21,15,.5); }

        .acl-ag__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ag__src{ animation:acl-ag-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .2s); }
          [data-deck-active] .acl-ag__slot{ animation:acl-ag-pop .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--j,0) * .1s + .3s); }
          [data-deck-active] .acl-ag__badge{ animation:acl-ag-pop .55s cubic-bezier(.2,.8,.2,1) .42s both; }
        }
        @keyframes acl-ag-rise{ from{ opacity:0; transform:translateX(-16px); } to{ opacity:1; } }
        @keyframes acl-ag-pop{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; } }
      `}),Qe("div",{className:"acl-ag__top",children:[ca("div",{className:"acl-ag__eyebrow",children:I}),ca("div",{className:"acl-ag__rule"}),ca("div",{className:"acl-ag__kicker",children:A})]}),Qe("div",{className:"acl-ag__head",children:[ca("h1",{className:"acl-ag__h",children:M}),ca("div",{className:"acl-ag__plate",children:F}),P&&ca(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),Qe("div",{className:"acl-ag__body",children:[Qe("div",{className:"acl-ag__left",children:[ca("div",{className:"acl-ag__cap",dangerouslySetInnerHTML:{__html:q}}),Qe("div",{className:"acl-ag__stitle",children:[N,P&&ca(p,{kind:"arrowS",size:28,rotate:-12,style:{position:"static"}})]}),ca("div",{className:"acl-ag__grid",children:i.map((b,R)=>{let E=h&&R===a,T=h&&!E;return Qe("div",{className:"acl-ag__src"+(E?" acl-ag__src--focus":"")+(T?" acl-ag__src--dim":""),style:{"--i":R},children:[E&&P&&ca("div",{className:"acl-ag__sfx",children:ca(H,{label:n,color:"var(--acl-yellow)",rotate:6,size:12})}),ca("div",{className:"acl-ag__sn",children:String(R+1).padStart(2,"0")}),Qe("div",{className:"acl-ag__st",children:[ca("div",{className:"acl-ag__sk",children:b.label}),ca("div",{className:"acl-ag__snote",children:b.note}),Qe("div",{className:"acl-ag__sbarwrap",children:[ca("div",{className:"acl-ag__sbar",children:ca("i",{style:{width:b.v+"%"}})}),_&&Qe("span",{className:"acl-ag__sv",children:[b.v,ca("em",{style:{fontStyle:"normal",fontSize:15},children:b.unit})]})]})]})]},R)})})]}),Qe("div",{className:"acl-ag__right",children:[Qe("div",{className:"acl-ag__stage",children:[g&&o.length>0&&ca("div",{className:"acl-ag__conv",children:ca(p,{kind:"arrow",size:88,rotate:-4,color:"var(--acl-ink)",style:{position:"static"}})}),o.length===0&&ca("div",{className:"acl-ag__empty",children:"// 圖片數量 = 0"}),o.map((b,R)=>ca("div",{className:"acl-ag__slot",style:{left:b.l,top:b.t,zIndex:b.z||R+1,"--j":R},children:ca(W,{id:"ag-"+R,box:b.box,rotate:b.r,ratio:b.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:R===0?{label:F,sub:D,color:b.color,subColor:"var(--acl-ink)",rotate:b.sr}:null})},R)),x&&o.length>0&&Qe("div",{className:"acl-ag__badge",children:[Qe("div",{className:"acl-ag__badgev",children:[z,ca("em",{children:L})]}),ca("div",{className:"acl-ag__badgek",children:y})]})]}),ca("div",{className:"acl-ag__tiles",children:e.map((b,R)=>ca("div",{className:"acl-ag__tile",children:ca(kt,{k:b.k,v:Qe(Gp.Fragment,{children:[b.v,b.unit&&ca("em",{children:b.unit})]})})},R))})]})]}),Qe("div",{className:"acl-ag__foot",children:[P&&ca(p,{kind:"loop",size:52,style:{position:"static"}}),ca("span",{children:f})]})]})}el.defaults={images:[],backgroundTheme:"primary",mediaCount:2,sourceCount:5,metricCount:3,showValueLabels:!0,showBadge:!0,showConverge:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Glean Case",kicker:"案例卡",headline:"企業知識入口",company:"Glean",tag:"企業搜尋",caption:"Glean 把散落在各系統裡的知識\uFF0C<b>匯聚成一個統一入口</b>\u2014\u2014接入知識庫後\uFF0C企業搜尋會成為高頻工作入口\u3002",sourcesTitle:"被匯聚的知識來源",dailyEntryStickerLabel:"高頻入口",badgeValue:"780",badgeUnit:"家",badgeLabel:"Paying Customers",sources:[{label:"檔案與雲盤",note:"Docs & Drive",v:34,unit:"%"},{label:"郵件與日曆",note:"Mail & Calendar",v:22,unit:"%"},{label:"IM 與會議",note:"Chat & Meetings",v:19,unit:"%"},{label:"工單與專案",note:"Tickets & Tasks",v:15,unit:"%"},{label:"程式碼與知識庫",note:"Code & Wiki",v:10,unit:"%"},{label:"CRM 客戶庫",note:"CRM",v:8,unit:"%"},{label:"資料看板",note:"Dashboards",v:7,unit:"%"},{label:"合同檔案",note:"Contracts",v:6,unit:"%"},{label:"研發檔案",note:"R&D Docs",v:5,unit:"%"},{label:"培訓資料",note:"Training",v:4,unit:"%"}],hero:{0:[],1:[{l:70,t:30,box:520,r:-2,ratio:1.18,sr:-4,z:1,color:"var(--acl-yellow)"}],2:[{l:24,t:0,box:450,r:-3,ratio:1.12,sr:-4,z:1,color:"var(--acl-yellow)"},{l:360,t:290,box:280,r:5,ratio:.85,sr:4,z:2,color:"var(--acl-blue)"}],3:[{l:18,t:0,box:410,r:-3,ratio:1.06,sr:-4,z:1,color:"var(--acl-yellow)"},{l:388,t:16,box:230,r:5,ratio:.8,sr:4,z:2,color:"var(--acl-blue)"},{l:350,t:300,box:270,r:4,ratio:1.02,sr:-3,z:3,color:"var(--acl-pink)"}]},metrics:[{k:"最大單筆融資",v:"2.6",unit:"億"},{k:"續約率",v:"91",unit:"%"},{k:"賽道",v:"企業搜尋"}],closingLine:"窄場景也能產生高價值\u3002"};el.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:3,step:1,label:"圖片數量",desc:"特寫圖片數量(0\u20133)\uFF1A1 主視覺 + 至多 2 張巢狀\uFF1B每張按上傳圖片比例自適應"},{key:"sourceCount",type:"number",default:5,min:2,max:10,step:1,label:"來源數量",desc:"左側被匯聚的來源卡數量(2\u201310)"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20133)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"來源卡佔比數值與比例條 顯隱"},{key:"showBadge",type:"boolean",default:!0,label:"高亮徽標",desc:"主視覺上的大號高亮數字徽標 顯隱"},{key:"showConverge",type:"boolean",default:!0,label:"匯聚箭頭",desc:"由來源指向主視覺的手繪匯聚箭頭 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一張來源卡"},{key:"focusIndex",type:"number",default:0,min:0,max:9,maxFrom:"sourceCount",step:1,label:"來源物件",desc:"被突出的來源卡序號(0\u20139)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];el.numberBounds={"sources[].v":{min:0,max:100,semantics:"percent"}};var Qp=el.defaults,Kp=el.controls,Zp=el.numberBounds;var Sn={};Y(Sn,{controls:()=>ed,default:()=>tl,defaults:()=>ad,numberBounds:()=>td});import Jp from"react";import{jsx as ka,jsxs as Tt}from"react/jsx-runtime";var Fn=10;function tl(t){let l={...tl.defaults,...t},{backgroundTheme:c,mediaCount:k,gaugeCount:d,metricCount:u,showValueLabels:_,focusEnabled:x,focusIndex:g,showDecor:h,eyebrow:C,kicker:P,headline:I,company:A,tag:M,caption:F,gaugesTitle:D,gauges:q,hero:N,metrics:z,closingLine:L,unrealizedStickerLabel:y}=l,w=c==="primary"?"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)":"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)",v=q.slice(0,Math.max(2,d)),m=Math.min(g,v.length-1),f=z.slice(0,Math.max(2,u)),n=N[k]||[];return Tt("div",{className:"acl-root acl-nv",style:{background:w},children:[ka("style",{children:`
        .acl-nv{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 96px 60px; display:flex; flex-direction:column; }
        .acl-nv__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; }
        .acl-nv__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-nv__rule{ flex:1; height:0; border-top:3px solid var(--acl-ink); opacity:.4; }
        .acl-nv__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}

        .acl-nv__head{ display:flex; align-items:flex-end; gap:24px; margin-top:14px; flex:0 0 auto; }
        .acl-nv__h{ font-weight:900; font-size:66px; line-height:.94; margin:0; }
        .acl-nv__plate{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:9px 15px; background:var(--acl-pink); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2); white-space:nowrap; }

        .acl-nv__body{ flex:1; display:flex; gap:52px; margin-top:24px; min-height:0; }

        /* left: abstract hero */
        .acl-nv__stage{ flex:0 0 620px; position:relative; min-width:0; }
        .acl-nv__slot{ position:absolute; }
        .acl-nv__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:34px; color:rgba(22,21,15,.4); transform:rotate(-3deg); }
        .acl-nv__abstract{ position:absolute; left:40px; top:30px; right:60px; bottom:40px; z-index:0;
          background:
            repeating-linear-gradient(135deg, rgba(22,21,15,.05) 0 14px, transparent 14px 30px),
            radial-gradient(circle at 40% 35%, rgba(255,61,151,.16), transparent 60%),
            var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:6px 8px 0 rgba(22,21,15,.16); }
        .acl-nv__abstxt{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) rotate(-4deg);
          font-family:var(--acl-font-hand); font-size:30px; color:rgba(22,21,15,.4); text-align:center; }

        /* right: narrative gauges */
        .acl-nv__right{ flex:1; display:flex; flex-direction:column; min-width:0; }
        .acl-nv__cap{ font-weight:700; font-size:24px; line-height:1.46; }
        .acl-nv__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-nv__gtitle{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.1em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin:22px 0 14px; display:flex;
          align-items:center; gap:10px; }
        .acl-nv__gauges{ display:flex; flex-direction:column; gap:15px; }
        .acl-nv__g{ position:relative; padding:13px 18px 14px; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:5px 6px 0 rgba(22,21,15,.14);
          transition:opacity .25s, transform .25s, box-shadow .25s; }
        .acl-nv__grow{ display:flex; align-items:baseline; gap:12px; }
        .acl-nv__gk{ font-weight:900; font-size:25px; line-height:1; }
        .acl-nv__gnote{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-nv__gv{ margin-left:auto; font-family:var(--acl-font-num); font-size:38px; line-height:.8; }
        .acl-nv__gv em{ font-style:normal; font-size:17px; margin-left:2px; color:rgba(22,21,15,.5); }
        .acl-nv__cells{ display:flex; gap:5px; margin-top:11px; height:22px; }
        .acl-nv__cell{ flex:1; border:2px solid var(--acl-ink); background:transparent; }
        .acl-nv__cell--on{ background:var(--acl-ink); }
        .acl-nv__g--low .acl-nv__cell--on{ background:var(--acl-red); border-color:var(--acl-red); }
        .acl-nv__g--low .acl-nv__gv{ color:var(--acl-red); }
        .acl-nv__g--focus{ border-color:var(--acl-pink); transform:rotate(-.6deg) scale(1.015);
          box-shadow:8px 9px 0 rgba(22,21,15,.2); z-index:2; }
        .acl-nv__g--focus .acl-nv__cell--on{ background:var(--acl-pink); border-color:var(--acl-pink); }
        .acl-nv__g--focus .acl-nv__gv{ color:var(--acl-pink); }
        .acl-nv__g--dim{ opacity:.5; }
        .acl-nv__gfx{ position:absolute; right:-14px; top:-20px; z-index:4; }

        .acl-nv__tiles{ display:flex; gap:28px; margin-top:auto; padding-top:22px; }
        .acl-nv__tile .acl-metatag .v{ font-family:var(--acl-font-num); font-size:44px; line-height:.9; }
        .acl-nv__tile .acl-metatag .v em{ font-style:normal; font-size:17px; font-family:var(--acl-font-cn);
          font-weight:700; margin-left:4px; color:rgba(22,21,15,.5); }

        .acl-nv__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-nv__g{ animation:acl-nv-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .25s); }
          [data-deck-active] .acl-nv__slot, [data-deck-active] .acl-nv__abstract{
            animation:acl-nv-pop .55s cubic-bezier(.2,.8,.2,1) .2s both; }
        }
        @keyframes acl-nv-rise{ from{ opacity:0; transform:translateX(16px); } to{ opacity:1; } }
        @keyframes acl-nv-pop{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; } }
      `}),Tt("div",{className:"acl-nv__top",children:[ka("div",{className:"acl-nv__eyebrow",children:C}),ka("div",{className:"acl-nv__rule"}),ka("div",{className:"acl-nv__kicker",children:P})]}),Tt("div",{className:"acl-nv__head",children:[ka("h1",{className:"acl-nv__h",children:I}),ka("div",{className:"acl-nv__plate",children:A}),h&&ka(p,{kind:"spark",size:44,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:"auto",alignSelf:"center"}})]}),Tt("div",{className:"acl-nv__body",children:[Tt("div",{className:"acl-nv__stage",children:[ka("div",{className:"acl-nv__abstract",children:ka("div",{className:"acl-nv__abstxt",children:"// 抽象技術意象"})}),n.length===0&&ka("div",{className:"acl-nv__empty",style:{zIndex:1},children:"// 圖片數量 = 0"}),n.map((s,i)=>ka("div",{className:"acl-nv__slot",style:{left:s.l,top:s.t,zIndex:s.z||i+2},children:ka(W,{id:"nv-"+i,box:s.box,rotate:s.r,ratio:s.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:i===0?{label:A,sub:M,color:s.color,subColor:"var(--acl-ink)",rotate:s.sr}:null})},i))]}),Tt("div",{className:"acl-nv__right",children:[ka("div",{className:"acl-nv__cap",dangerouslySetInnerHTML:{__html:F}}),Tt("div",{className:"acl-nv__gtitle",children:[D,h&&ka(p,{kind:"arrowS",size:28,rotate:-12,style:{position:"static"}})]}),ka("div",{className:"acl-nv__gauges",children:v.map((s,i)=>{let a=x&&i===m,e=x&&!a,o=Math.max(0,Math.min(Fn,Math.round(s.fill/100*Fn)));return Tt("div",{style:{"--i":i},className:"acl-nv__g"+(s.tone==="low"?" acl-nv__g--low":"")+(a?" acl-nv__g--focus":"")+(e?" acl-nv__g--dim":""),children:[a&&h&&ka("div",{className:"acl-nv__gfx",children:ka(H,{label:y,color:"var(--acl-yellow)",rotate:6,size:12})}),Tt("div",{className:"acl-nv__grow",children:[ka("span",{className:"acl-nv__gk",children:s.label}),ka("span",{className:"acl-nv__gnote",children:s.note}),_&&Tt("span",{className:"acl-nv__gv",children:[s.fill,ka("em",{children:"%"})]})]}),ka("div",{className:"acl-nv__cells",children:Array.from({length:Fn}).map((r,b)=>ka("div",{className:"acl-nv__cell"+(b<o?" acl-nv__cell--on":"")},b))})]},i)})}),ka("div",{className:"acl-nv__tiles",children:f.map((s,i)=>ka("div",{className:"acl-nv__tile",children:ka(kt,{k:s.k,v:Tt(Jp.Fragment,{children:[s.v,s.unit&&ka("em",{children:s.unit})]})})},i))})]})]}),Tt("div",{className:"acl-nv__foot",children:[h&&ka(p,{kind:"loop",size:52,style:{position:"static"}}),ka("span",{children:L})]})]})}tl.defaults={images:[],backgroundTheme:"muted",mediaCount:2,gaugeCount:4,metricCount:3,showValueLabels:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"SSI Case",kicker:"案例卡",headline:"強敘事模型實驗室",company:"SSI",tag:"安全智慧",caption:"SSI 代表強團隊\u3001強敘事\u3001弱商業化驗證的模型實驗室\u2014\u2014短期難以用收入評價\uFF0C價值建立在 <b>長期技術想象</b> 上\u3002",gaugesTitle:"強在哪裡 \xB7 缺在哪裡",unrealizedStickerLabel:"待兌現",gauges:[{label:"團隊與人才",note:"Team & Talent",fill:92,tone:"high"},{label:"技術敘事",note:"Narrative",fill:88,tone:"high"},{label:"商業化兌現",note:"Revenue Proof",fill:6,tone:"low"},{label:"產品落地",note:"Product Shipped",fill:14,tone:"low"}],hero:{0:[],1:[{l:60,t:40,box:480,r:-2,ratio:1.08,sr:-4,z:2,color:"var(--acl-yellow)"}],2:[{l:20,t:10,box:420,r:-3,ratio:1,sr:-4,z:2,color:"var(--acl-yellow)"},{l:330,t:300,box:260,r:5,ratio:.86,sr:4,z:3,color:"var(--acl-pink)"}]},metrics:[{k:"最大單筆融資",v:"10",unit:"億"},{k:"產品收入",v:"0"},{k:"團隊規模",v:"85",unit:"人"},{k:"賽道",v:"安全智慧"}],closingLine:"強敘事\uFF0C需要更長時間兌現\u3002"};tl.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:2,min:0,max:2,step:1,label:"圖片數量",desc:"特寫圖片數量(0\u20132)\uFF1A1 主視覺 + 至多 1 張巢狀\uFF1B為 0 時顯示抽象意象佔位\uFF0C每張按上傳圖片比例自適應"},{key:"gaugeCount",type:"number",default:4,min:2,max:4,step:1,label:"量表數量",desc:"右側強弱量表數量(2\u20134)"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"量表右側百分比數值 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一條量表"},{key:"focusIndex",type:"number",default:2,min:0,maxFrom:"gaugeCount",step:1,label:"重點物件",desc:"被突出的量表序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤的顯示/隱藏"}];tl.numberBounds={"gauges[].fill":{min:0,max:100,semantics:"percent"}};var ad=tl.defaults,ed=tl.controls,td=tl.numberBounds;var Ln={};Y(Ln,{controls:()=>id,default:()=>Co,defaults:()=>od});import ld from"react";import{jsx as ua,jsxs as Se}from"react/jsx-runtime";function Co(t){let l={...Co.defaults,...t},{backgroundTheme:c,chartType:k,stageCount:d,mediaCount:u,showValueLabels:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,ladderTitle:F,stages:D,marginTitle:q,marginHero:N,costBar:z,metrics:L,mediaRail:y,closingLine:w,pilotStickerLabel:v,pilotStickerSub:m,keyConversionStickerLabel:f,ladderSuffix:n,marginSuffix:s}=l,i=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",a=D.slice(0,Math.max(3,d)),e=Math.max(0,Math.min(Number(h)||0,a.length-1)),o=L.slice(0,Math.max(2,x)),r=y[u]||[],b=r.length>0,R=k==="bars",E=["acl-root","acl-rv",R?"acl-rv--bars":"acl-rv--funnel",b?"":"acl-rv--no-media"].filter(Boolean).join(" "),T=["var(--acl-ink)","var(--acl-blue)","var(--acl-pink)","var(--acl-yellow)","var(--acl-paper)"];return Se("div",{className:E,style:{background:i},children:[ua("style",{children:`
        .acl-rv{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 60px; display:flex; flex-direction:column; }
        .acl-rv__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-rv__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-rv__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-rv__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-red); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-rv__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-rv__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-rv__body{ flex:1; display:flex; gap:40px; margin-top:28px; min-height:0; }
        .acl-rv--no-media .acl-rv__body{ gap:34px; }

        /* \u2500\u2500 media rail (collapses when empty) \u2500\u2500 */
        .acl-rv__rail{ flex:0 0 auto; display:flex; flex-direction:column; align-items:center;
          justify-content:center; gap:26px; }
        .acl-rv__slot{ position:relative; }

        /* \u2500\u2500 conversion ladder card \u2500\u2500 */
        .acl-rv__ladder{ flex:1 1 0; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:24px 38px 26px; display:flex; flex-direction:column; min-width:0; }
        .acl-rv--no-media .acl-rv__ladder{ flex:1 1 0; padding-left:46px; padding-right:46px; }
        .acl-rv__cardt{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); flex:0 0 auto; }
        .acl-rv__stages{ flex:1; display:flex; flex-direction:column; justify-content:center;
          gap:10px; margin-top:16px; min-height:0; }
        .acl-rv__stage{ position:relative; flex:1 1 0; min-height:0; display:flex; }
        .acl-rv--funnel .acl-rv__stage{ justify-content:center; }
        .acl-rv__bar{ position:relative; min-height:58px; border:3px solid var(--acl-ink); display:flex; align-items:center;
          justify-content:space-between; padding:0 22px; transition:opacity .25s, background .25s, width .3s;
          box-shadow:4px 5px 0 rgba(22,21,15,.16); }
        .acl-rv--funnel .acl-rv__bar{ justify-content:center; gap:24px; text-align:center; }
        .acl-rv__bname{ font-weight:900; font-size:30px; line-height:1; white-space:nowrap; }
        .acl-rv__bname small{ font-family:var(--acl-font-mono); font-weight:400; font-size:11px;
          letter-spacing:.04em; text-transform:uppercase; opacity:.6; margin-left:9px; }
        .acl-rv__bval{ font-family:var(--acl-font-num); font-size:48px; line-height:.8; white-space:nowrap; }
        .acl-rv__bar--dim{ opacity:.4; }
        .acl-rv__drop{ display:flex; align-items:center; gap:8px; padding:1px 0 1px 30px; height:30px; flex:0 0 auto; }
        .acl-rv--funnel .acl-rv__drop{ justify-content:center; padding-left:0; }
        .acl-rv__droptag{ font-family:var(--acl-font-hand); font-size:25px; line-height:1;
          color:var(--acl-red); white-space:nowrap; }
        .acl-rv__fx{ position:absolute; top:-15px; right:-10px; z-index:5; }

        /* \u2500\u2500 margin check panel \u2500\u2500 */
        .acl-rv__margin{ flex:0 0 440px; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 34px 28px; display:flex; flex-direction:column; min-width:0; }
        .acl-rv--no-media .acl-rv__margin{ flex-basis:500px; }
        .acl-rv__margint{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.5); }
        .acl-rv__herolab{ font-weight:700; font-size:22px; margin-top:16px; color:rgba(255,255,255,.85); }
        .acl-rv__heronum{ font-family:var(--acl-font-num); font-size:120px; line-height:.82; margin-top:12px;
          color:var(--acl-yellow); }
        .acl-rv__heronum em{ font-style:normal; font-size:42px; margin-left:4px; color:var(--acl-paper); }
        .acl-rv__costwrap{ margin-top:14px; }
        .acl-rv__costhd{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(255,255,255,.5); margin-bottom:8px; }
        .acl-rv__cost{ display:flex; height:40px; border:3px solid var(--acl-paper); overflow:hidden; }
        .acl-rv__seg{ display:flex; align-items:center; justify-content:center; font-family:var(--acl-font-num);
          font-size:22px; color:var(--acl-ink); border-right:2px solid var(--acl-ink); }
        .acl-rv__seg:last-child{ border-right:none; }
        .acl-rv__legend{ display:flex; gap:18px; margin-top:9px; flex-wrap:wrap; }
        .acl-rv__leg{ display:flex; align-items:center; gap:6px; font-family:var(--acl-font-mono);
          font-size:12px; letter-spacing:.03em; text-transform:uppercase; color:rgba(255,255,255,.72); }
        .acl-rv__legdot{ width:13px; height:13px; border:2px solid var(--acl-paper); }
        .acl-rv__tiles{ display:flex; gap:0; margin-top:auto; border-top:2px dashed rgba(255,255,255,.25);
          padding-top:16px; }
        .acl-rv__tile{ flex:1; padding:0 14px; border-right:2px solid rgba(255,255,255,.2); }
        .acl-rv__tile:first-child{ padding-left:0; }
        .acl-rv__tile:last-child{ border-right:none; }
        .acl-rv__tk{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(255,255,255,.55); }
        .acl-rv__tv{ font-family:var(--acl-font-num); font-size:40px; line-height:.95; margin-top:3px;
          color:var(--acl-yellow); }
        .acl-rv__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; color:rgba(255,255,255,.6); }

        .acl-rv__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-rv__ladder,[data-deck-active] .acl-rv__margin{
            animation:acl-rv-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-rv__margin{ animation-delay:.08s; }
          [data-deck-active] .acl-rv__bar{ animation:acl-rv-wipe .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .2s); transform-origin:left; }
          [data-deck-active] .acl-rv__slot{ animation:acl-rv-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--j,0) * .12s + .25s); }
          [data-deck-active] .acl-rv__heronum{ animation:acl-rv-pop .6s cubic-bezier(.2,.8,.2,1) .3s both; }
        }
        @keyframes acl-rv-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-rv-wipe{ from{ opacity:0; transform:scaleX(.5); } to{ opacity:1; transform:none; } }
        @keyframes acl-rv-in{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
        @keyframes acl-rv-pop{ from{ opacity:0; transform:translateY(20px) scale(.92); } to{ opacity:1; transform:none; } }
      `}),Se("div",{className:"acl-rv__head",children:[Se("div",{children:[ua("div",{className:"acl-rv__eyebrow",children:P}),ua("h1",{className:"acl-rv__h",children:I})]}),ua("div",{className:"acl-rv__sub",children:A}),C&&ua(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),ua("div",{className:"acl-rv__summary",dangerouslySetInnerHTML:{__html:M}})]}),Se("div",{className:"acl-rv__body",children:[b&&ua("div",{className:"acl-rv__rail",children:r.map((B,S)=>ua("div",{className:"acl-rv__slot",style:{"--j":S},children:ua(W,{id:"rv-"+S,box:B.box,rotate:B.r,ratio:B.ratio,accent:"var(--acl-paper)",placeholder:"上傳",sticker:S===0?{label:v,sub:m,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:B.sr}:null})},S))}),Se("div",{className:"acl-rv__ladder",children:[Se("div",{className:"acl-rv__cardt",children:[F," ",n]}),C&&ua(p,{kind:"arrowS",size:46,rotate:92,color:"var(--acl-ink)",style:{right:28,top:18}}),ua("div",{className:"acl-rv__stages",children:a.map((B,S)=>{let V=g&&S===e,O=g&&!V,U=V?"var(--acl-pink)":T[S%T.length],K=U==="var(--acl-ink)"||U==="var(--acl-pink)"||U==="var(--acl-red)",sa=R?`${Math.max(28,Math.min(100,B.pct))}%`:`${100-S*(52/Math.max(1,a.length))}%`,dt=S===a.length-1;return Se(ld.Fragment,{children:[ua("div",{className:"acl-rv__stage",children:Se("div",{className:"acl-rv__bar"+(O?" acl-rv__bar--dim":""),style:{width:sa,background:U,color:K?"var(--acl-paper)":"var(--acl-ink)","--i":S},children:[V&&C&&ua("div",{className:"acl-rv__fx",children:ua(H,{label:f,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:6,size:14})}),Se("span",{className:"acl-rv__bname",children:[B.k,ua("small",{children:B.en})]}),_&&Se("span",{className:"acl-rv__bval",children:[B.pct,"%"]})]})}),!dt&&B.drop&&Se("div",{className:"acl-rv__drop",children:[C&&ua(p,{kind:"arrow",size:30,rotate:64,color:"var(--acl-red)",style:{position:"static"}}),ua("span",{className:"acl-rv__droptag",children:B.drop})]})]},S)})})]}),Se("div",{className:"acl-rv__margin",children:[Se("div",{className:"acl-rv__margint",children:[q," ",s]}),C&&ua(p,{kind:"spark",size:40,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-paper)",style:{right:26,top:20}}),ua("div",{className:"acl-rv__herolab",children:N.label}),Se("div",{className:"acl-rv__heronum",children:[N.value,ua("em",{children:N.unit})]}),Se("div",{className:"acl-rv__costwrap",children:[ua("div",{className:"acl-rv__costhd",children:z.title}),ua("div",{className:"acl-rv__cost",children:z.segments.map((B,S)=>ua("div",{className:"acl-rv__seg",style:{width:`${B.v}%`,background:B.color},children:_&&B.v>=14?`${B.v}%`:""},S))}),ua("div",{className:"acl-rv__legend",children:z.segments.map((B,S)=>Se("span",{className:"acl-rv__leg",children:[ua("span",{className:"acl-rv__legdot",style:{background:B.color}}),B.k]},S))})]}),ua("div",{className:"acl-rv__tiles",children:o.map((B,S)=>Se("div",{className:"acl-rv__tile",children:[ua("div",{className:"acl-rv__tk",children:B.k}),Se("div",{className:"acl-rv__tv",children:[B.v,ua("em",{children:B.unit})]})]},S))})]})]}),Se("div",{className:"acl-rv__foot",children:[C&&ua(p,{kind:"loop",size:56,style:{position:"static"}}),ua("span",{children:w})]})]})}Co.defaults={images:[],backgroundTheme:"primary",chartType:"funnel",stageCount:4,mediaCount:1,showValueLabels:!0,metricCount:3,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Revenue Risk",headline:"從試點到穩定收入",subheadline:"風險\uFF1A收入驗證",summary:"多數 AI 公司需要證明能從試點專案<b>轉向穩定訂閱收入</b>\u3002",ladderTitle:"收入兌現路徑",pilotStickerLabel:"試點現場",pilotStickerSub:"PILOT",keyConversionStickerLabel:"關鍵轉化",ladderSuffix:"\xB7 Conversion Ladder",marginSuffix:"\xB7 Margin Check",stages:[{k:"試點接入",en:"Pilot",pct:100,drop:"POC 啟動"},{k:"完成驗證",en:"Validated",pct:62,drop:"驗證流失 38%"},{k:"付費轉化",en:"Paid",pct:28,drop:"僅 28% 轉付費"},{k:"年度留存",en:"Retention",pct:83,drop:"年流失 17%"},{k:"席位擴張",en:"Expansion",pct:112,drop:""}],marginTitle:"毛利體檢",marginHero:{label:"毛利率中位數",value:"54",unit:"%"},costBar:{title:"收入結構拆解 \xB7 推理成本侵蝕",segments:[{k:"毛利",v:54,color:"var(--acl-yellow)"},{k:"推理成本",v:31,color:"var(--acl-pink)"},{k:"其他成本",v:15,color:"var(--acl-blue)"}]},metrics:[{k:"試點轉付費率",v:"28",unit:"%"},{k:"企業年流失率",v:"17",unit:"%"},{k:"推理成本佔收入",v:"31",unit:"%"},{k:"毛利率中位數",v:"54",unit:"%"}],mediaRail:{0:[],1:[{box:320,r:-3,ratio:.82,sr:-4}],2:[{box:250,r:-3,ratio:.82,sr:-4},{box:220,r:4,ratio:1.18,sr:4}]},closingLine:"客戶試點不等於商業化成功\u3002"};Co.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"funnel",options:["funnel","bars"],label:"圖表型別",desc:"階梯呈現\uFF1A幾何收窄漏斗(funnel) / 按數值縮放條(bars)"},{key:"stageCount",type:"number",default:4,min:3,max:5,step:1,label:"階段數量",desc:"收入兌現路徑的階段數量(3\u20135)"},{key:"mediaCount",type:"number",default:1,min:0,max:2,step:1,label:"圖片數量",desc:"左側配圖槽數量(0\u20132)\uFF1B為 0 時收起媒體欄\uFF0C主體內容自適應擴充套件\uFF1B每張按上傳圖片比例自適應"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"階段轉化率與成本結構百分比的顯示/隱藏"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"面板底部支撐指標格數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個轉化階段(其餘淡化)"},{key:"focusIndex",type:"number",default:2,min:0,max:4,step:1,maxFrom:"stageCount",label:"重點物件",desc:"被高亮的階段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與貼紙標籤 顯隱"}];var od=Co.defaults,id=Co.controls;var In={};Y(In,{controls:()=>cd,default:()=>Fo,defaults:()=>rd});import nd from"react";import{jsx as Z,jsxs as qe}from"react/jsx-runtime";function Fo(t){let l={...Fo.defaults,...t},{backgroundTheme:c,showFlow:k,flowStageCount:d,rowCount:u,showDelta:_,showRating:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,kpis:F,flowTitle:D,flow:q,tags:N,columnLabels:z,rows:L,closingLine:y,pipelineSuffix:w,rigidCostStickerLabel:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=q.slice(0,Math.max(3,d)),n=L.slice(0,Math.max(2,u)),s=Math.min(h,n.length-1),i=`60px 1.3fr 320px${_?" 200px":""}${x?" 210px":""}`;return qe("div",{className:"acl-root acl-rg",style:{background:m},children:[Z("style",{children:`
        .acl-rg{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 58px; display:flex; flex-direction:column; }
        .acl-rg__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-rg__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-rg__h{ font-weight:900; font-size:74px; line-height:.95; margin:0; }
        .acl-rg__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-red); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-rg__summary{ margin-left:auto; max-width:470px; font-weight:700; font-size:23px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-rg__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-rg__kpis{ display:flex; gap:0; margin-top:18px; border:3px solid var(--acl-ink);
          background:var(--acl-ink); flex:0 0 auto; }
        .acl-rg__kpi{ flex:1; background:var(--acl-paper); padding:11px 22px; display:flex;
          flex-direction:column; gap:2px; }
        .acl-rg__kpi + .acl-rg__kpi{ border-left:3px solid var(--acl-ink); }
        .acl-rg__kpi .k{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-rg__kpi .v{ font-family:var(--acl-font-num); font-size:42px; line-height:.95; }
        .acl-rg__kpi .v em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }
        .acl-rg__kpi--accent{ background:var(--acl-yellow); }

        /* \u2500\u2500 compliance pipeline strip \u2500\u2500 */
        .acl-rg__flow{ margin-top:16px; position:relative; border:3px solid var(--acl-ink);
          background:var(--acl-paper); box-shadow:5px 7px 0 rgba(22,21,15,.14); padding:12px 26px 14px;
          flex:0 0 auto; }
        .acl-rg__flowhd{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); margin-bottom:10px; }
        .acl-rg__pipe{ display:flex; align-items:stretch; gap:0; }
        .acl-rg__node{ flex:1; display:flex; flex-direction:column; gap:3px; padding:7px 14px;
          border:2px solid var(--acl-ink); }
        .acl-rg__node b{ font-weight:900; font-size:21px; line-height:1.05; }
        .acl-rg__node span{ font-family:var(--acl-font-mono); font-weight:400; font-size:10px;
          letter-spacing:.03em; text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-rg__conn{ flex:0 0 34px; display:grid; place-items:center; }

        /* \u2500\u2500 risk ledger \u2500\u2500 */
        .acl-rg__panel{ position:relative; flex:1; margin-top:14px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:4px 38px 8px; display:flex; flex-direction:column; min-height:0; }
        .acl-rg__colhead{ display:grid; grid-template-columns:${i}; align-items:end; gap:22px;
          padding:13px 8px 10px; border-bottom:3px solid var(--acl-ink); font-family:var(--acl-font-mono);
          font-size:14px; letter-spacing:.07em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-rg__rows{ flex:1; display:flex; flex-direction:column; }
        .acl-rg__row{ flex:1; display:grid; grid-template-columns:${i}; align-items:center; gap:22px;
          padding:0 8px; border-bottom:1.5px dashed rgba(22,21,15,.22); position:relative;
          transition:opacity .25s, background .25s; }
        .acl-rg__row:last-child{ border-bottom:none; }
        .acl-rg__idx{ font-family:var(--acl-font-num); font-size:48px; line-height:.8; color:rgba(22,21,15,.26); }
        .acl-rg__dim{ display:flex; flex-direction:column; gap:3px; }
        .acl-rg__dim b{ font-weight:900; font-size:31px; line-height:1; }
        .acl-rg__dim span{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.46); }
        .acl-rg__fig{ font-family:var(--acl-font-num); font-size:54px; line-height:.78; white-space:nowrap; }
        .acl-rg__fig em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:16px;
          margin-left:3px; opacity:.6; }
        .acl-rg__delta{ display:inline-flex; align-items:center; gap:6px; font-family:var(--acl-font-num);
          font-size:30px; padding:5px 12px; border:2.5px solid var(--acl-ink); background:var(--acl-red);
          color:var(--acl-paper); align-self:center; justify-self:start; line-height:1; white-space:nowrap; }
        .acl-rg__delta svg{ display:block; }
        .acl-rg__rate{ display:flex; align-items:center; gap:10px; }
        .acl-rg__dots{ display:flex; gap:5px; }
        .acl-rg__dot{ width:17px; height:17px; transform:rotate(45deg); border:2px solid var(--acl-ink); }
        .acl-rg__ratelabel{ font-weight:900; font-size:19px; }
        .acl-rg__row--focus{ background:var(--acl-yellow);
          box-shadow:6px 0 0 var(--acl-yellow), -6px 0 0 var(--acl-yellow); border-bottom-color:transparent; z-index:2; }
        .acl-rg__row--focus .acl-rg__idx{ color:var(--acl-ink); }
        .acl-rg__fx{ position:absolute; top:-14px; right:28px; z-index:5; }

        .acl-rg__foot{ display:flex; align-items:center; gap:18px; margin-top:12px; flex:0 0 auto; }
        .acl-rg__tags{ display:flex; gap:9px; flex-wrap:wrap; }
        .acl-rg__tag{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px; letter-spacing:.04em;
          text-transform:uppercase; padding:6px 12px; border:2px solid var(--acl-ink); background:var(--acl-paper); }
        .acl-rg__close{ margin-left:auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-hand); font-size:28px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-rg__flow{ animation:acl-rg-rise .5s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-rg__node{ animation:acl-rg-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .15s); }
          [data-deck-active] .acl-rg__row{ animation:acl-rg-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .3s); }
        }
        @keyframes acl-rg-rise{ from{ opacity:0; transform:translateY(-12px); } to{ opacity:1; transform:none; } }
        @keyframes acl-rg-pop{ from{ opacity:0; transform:scale(.9); } to{ opacity:1; transform:none; } }
        @keyframes acl-rg-in{ from{ opacity:0; transform:translateX(-22px); } to{ opacity:1; transform:none; } }
      `}),qe("div",{className:"acl-rg__head",children:[qe("div",{children:[Z("div",{className:"acl-rg__eyebrow",children:P}),Z("h1",{className:"acl-rg__h",children:I})]}),Z("div",{className:"acl-rg__sub",children:A}),C&&Z(p,{kind:"spark",size:42,rotate:-8,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",alignSelf:"center",marginBottom:8}}),Z("div",{className:"acl-rg__summary",dangerouslySetInnerHTML:{__html:M}})]}),Z("div",{className:"acl-rg__kpis",children:F.map((a,e)=>qe("div",{className:"acl-rg__kpi"+(e===0?" acl-rg__kpi--accent":""),children:[Z("div",{className:"k",children:a.k}),qe("div",{className:"v",children:[a.v,Z("em",{children:a.unit})]})]},e))}),k&&qe("div",{className:"acl-rg__flow",children:[qe("div",{className:"acl-rg__flowhd",children:[D," ",w]}),Z("div",{className:"acl-rg__pipe",children:f.map((a,e)=>{let o=e===f.length-1,r=["var(--acl-yellow)","var(--acl-paper)","var(--acl-blue)","var(--acl-paper)","var(--acl-pink)"];return qe(nd.Fragment,{children:[qe("div",{className:"acl-rg__node",style:{"--i":e,background:r[e%r.length]},children:[Z("b",{children:a.k}),Z("span",{children:a.en})]}),!o&&Z("div",{className:"acl-rg__conn",children:Z(p,{kind:"arrow",size:36,rotate:0,color:"var(--acl-ink)",style:{position:"static"}})})]},e)})})]}),qe("div",{className:"acl-rg__panel",children:[qe("div",{className:"acl-rg__colhead",children:[Z("span",{children:"#"}),Z("span",{children:z[0]}),Z("span",{children:z[1]}),_&&Z("span",{children:z[2]}),x&&Z("span",{children:z[3]})]}),Z("div",{className:"acl-rg__rows",children:n.map((a,e)=>{let o=g&&e===s;return qe("div",{className:"acl-rg__row"+(o?" acl-rg__row--focus":""),style:{"--i":e},children:[o&&C&&Z("div",{className:"acl-rg__fx",children:Z(H,{label:v,color:"var(--acl-pink)",subColor:"var(--acl-ink)",rotate:6})}),Z("div",{className:"acl-rg__idx",children:String(e+1).padStart(2,"0")}),qe("div",{className:"acl-rg__dim",children:[Z("b",{children:a.dim}),Z("span",{children:a.en})]}),qe("div",{className:"acl-rg__fig",children:[a.fig,Z("em",{children:a.unit})]}),_&&qe("div",{className:"acl-rg__delta",style:{background:a.up===!1?"var(--acl-blue)":"var(--acl-red)",color:a.up===!1?"var(--acl-ink)":"var(--acl-paper)"},children:[Z("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:Z("path",{d:a.up===!1?"M8 14 L2 5 L14 5 Z":"M8 2 L14 11 L2 11 Z",fill:"currentColor"})}),a.delta]}),x&&qe("div",{className:"acl-rg__rate",children:[Z("div",{className:"acl-rg__dots",children:[0,1,2].map(r=>Z("span",{className:"acl-rg__dot",style:{background:r<a.rate?o?"var(--acl-pink)":"var(--acl-red)":"transparent"}},r))}),Z("span",{className:"acl-rg__ratelabel",children:a.rateLabel})]})]},e)})})]}),qe("div",{className:"acl-rg__foot",children:[Z("div",{className:"acl-rg__tags",children:N.map((a,e)=>Z("span",{className:"acl-rg__tag",style:e===0?{background:"var(--acl-ink)",color:"var(--acl-paper)"}:null,children:a},e))}),qe("div",{className:"acl-rg__close",children:[C&&Z(p,{kind:"loop",size:54,style:{position:"static"}}),Z("span",{children:y})]})]})]})}Fo.defaults={backgroundTheme:"muted",showFlow:!0,flowStageCount:5,rowCount:4,showDelta:!0,showRating:!0,focusEnabled:!0,focusIndex:2,showDecor:!0,eyebrow:"Regulation Risk",headline:"隱私\u3001版權與安全",subheadline:"風險\uFF1A監管合規",summary:"隱私\u3001版權\u3001安全與行業監管會<b>增加交付成本</b>\u3002",kpis:[{k:"合規團隊增長",v:"+42",unit:"%"},{k:"採購審查週期",v:"+36",unit:"%"},{k:"資料隔離需求",v:"58",unit:"%"},{k:"版權風險事件",v:"19",unit:"起"}],flowTitle:"合規交付鏈",pipelineSuffix:"\xB7 Compliance Pipeline",rigidCostStickerLabel:"剛性成本",flow:[{k:"資料採集",en:"Ingest"},{k:"隱私隔離",en:"Isolation"},{k:"版權審查",en:"IP Review"},{k:"安全合規",en:"Compliance"},{k:"審計追溯",en:"Audit"}],tags:["隱私","版權","內容安全","行業監管","資料駐留"],columnLabels:["風險維度","模擬資料","趨勢","風險等級"],rows:[{dim:"合規團隊",en:"Compliance Team",fig:"42",unit:"%",up:!0,delta:"+42%",rate:3,rateLabel:"高"},{dim:"採購審查",en:"Procurement",fig:"36",unit:"%",up:!0,delta:"+36%",rate:3,rateLabel:"高"},{dim:"資料隔離需求",en:"Data Isolation",fig:"58",unit:"%",up:!0,delta:"+58%",rate:3,rateLabel:"高"},{dim:"版權風險事件",en:"IP Incidents",fig:"19",unit:"起",up:!0,delta:"\u2191 同比",rate:2,rateLabel:"中"}],closingLine:"合規能力會成為企業採購門檻\u3002"};Fo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"showFlow",type:"boolean",default:!0,label:"流程鏈",desc:"頂部合規交付鏈流程帶的顯示/隱藏"},{key:"flowStageCount",type:"number",default:5,min:3,max:5,step:1,showIf:"showFlow",label:"流程階段",desc:"合規交付鏈的階段數量(3\u20135)"},{key:"rowCount",type:"number",default:4,min:2,max:4,step:1,label:"行數",desc:"展示的風險維度行數(2\u20134)"},{key:"showDelta",type:"boolean",default:!0,label:"趨勢列",desc:"上升/下降趨勢徽標列的顯示/隱藏"},{key:"showRating",type:"boolean",default:!0,label:"風險等級",desc:"風險等級菱形評級列的顯示/隱藏"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行"},{key:"focusIndex",type:"number",default:2,min:0,max:3,step:1,maxFrom:"rowCount",label:"重點物件",desc:"被高亮的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var rd=Fo.defaults,cd=Fo.controls;var Mn={};Y(Mn,{controls:()=>pd,default:()=>ll,defaults:()=>sd,numberBounds:()=>dd});import"react";import{jsx as J,jsxs as de}from"react/jsx-runtime";function ll(t){let l={...ll.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,showThreshold:u,showValueLabels:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,threshold:F,pressures:D,metrics:q,strategyKicker:N,strategyTitle:z,strategyLead:L,signals:y,actions:w,closingLine:v,chartHeadingPincer:m,chartHeadingGauge:f,defenseStickerLabel:n,defenseStickerSub:s,briefTag:i}=l,a=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",e=D.slice(0,Math.max(2,d)),o=Math.max(0,Math.min(Number(h)||0,e.length-1)),r=q.slice(0,Math.max(2,x)),b=k==="pincer",R=["acl-root","acl-cz",b?"acl-cz--pincer":"acl-cz--bars"].join(" "),E=["var(--acl-pink)","var(--acl-red)","var(--acl-blue)","var(--acl-ink)"],T=(S,V)=>V?"var(--acl-yellow)":E[S%E.length],B=S=>S==="var(--acl-ink)"||S==="var(--acl-pink)"||S==="var(--acl-red)"?"var(--acl-paper)":"var(--acl-ink)";return de("div",{className:R,style:{background:a},children:[J("style",{children:`
        .acl-cz{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 64px; display:flex; flex-direction:column; }
        .acl-cz__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-cz__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-cz__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-cz__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-red); color:var(--acl-paper); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-cz__summary{ margin-left:auto; max-width:490px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-cz__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-cz__body{ flex:1; display:flex; gap:44px; margin-top:28px; min-height:0; }

        /* \u2500\u2500 pincer diagram card (dark) \u2500\u2500 */
        .acl-cz__chart{ flex:0 0 760px; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 34px 30px; display:flex; flex-direction:column; min-width:0; }
        .acl-cz__chartt{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.55); flex:0 0 auto; }
        .acl-cz__stage{ flex:1; display:flex; align-items:center; justify-content:center; min-height:0;
          position:relative; margin-top:8px; }

        /* pincer variant */
        .acl-cz__pincer{ width:100%; height:100%; display:flex; align-items:center; justify-content:center;
          gap:8px; padding:20px 4px; }
        .acl-cz__pnode{ flex:1 1 0; min-width:0; height:78%; position:relative; display:flex;
          flex-direction:column; align-items:center; justify-content:center; gap:8px; text-align:center;
          border:3px solid var(--acl-paper); box-shadow:4px 5px 0 rgba(0,0,0,.2);
          transition:transform .25s, opacity .25s; }
        .acl-cz__pnode--l{ clip-path:polygon(0 0, 100% 14%, 100% 86%, 0 100%); }
        .acl-cz__pnode--m{ clip-path:polygon(0 14%, 100% 6%, 100% 94%, 0 86%); }
        .acl-cz__pnode--r{ clip-path:polygon(0 14%, 100% 0, 100% 100%, 0 86%); }
        .acl-cz__pnode--focus{ transform:translateY(-6px); box-shadow:6px 8px 0 rgba(0,0,0,.26); }
        .acl-cz__pidx{ position:absolute; left:14px; top:12px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:12px; letter-spacing:.08em; opacity:.62; }
        .acl-cz__pname{ font-weight:900; font-size:25px; line-height:1.06; padding:0 14px; }
        .acl-cz__ptag{ font-family:var(--acl-font-mono); font-weight:700; font-size:11px;
          letter-spacing:.05em; text-transform:uppercase; opacity:.62; padding:0 12px; }
        .acl-cz__pval{ font-family:var(--acl-font-num); font-size:54px; line-height:.82; }
        .acl-cz__wall{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
          color:var(--acl-ink); position:relative; }
        .acl-cz__wall--l{ clip-path:polygon(0 0, 100% 18%, 100% 82%, 0 100%); background:var(--acl-blue); }
        .acl-cz__wall--r{ clip-path:polygon(0 18%, 100% 0, 100% 100%, 0 82%); background:var(--acl-yellow); }
        .acl-cz__walltag{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.08em; text-transform:uppercase; opacity:.7; }
        .acl-cz__wallname{ font-weight:900; font-size:30px; line-height:1.04; text-align:center; padding:0 16px;
          margin-top:4px; }
        .acl-cz__wallv{ font-family:var(--acl-font-num); font-size:64px; line-height:.82; margin-top:6px; }
        .acl-cz__core{ flex:0 0 230px; align-self:center; height:64%; background:var(--acl-paper);
          color:var(--acl-ink); border:4px dashed var(--acl-ink); display:flex; flex-direction:column;
          align-items:center; justify-content:center; gap:6px; z-index:3; box-shadow:0 0 0 6px var(--acl-ink); }
        .acl-cz__corelab{ font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.06em; text-transform:uppercase; color:rgba(22,21,15,.55); text-align:center; padding:0 8px; }
        .acl-cz__corename{ font-weight:900; font-size:27px; line-height:1.05; text-align:center; padding:0 8px; }
        .acl-cz__corev{ font-family:var(--acl-font-num); font-size:62px; line-height:.8; color:var(--acl-pink); }
        .acl-cz__sq{ position:absolute; z-index:5; }
        .acl-cz__sq--l{ left:34%; top:50%; transform:translateY(-50%); }
        .acl-cz__sq--r{ right:34%; top:50%; transform:translateY(-50%) scaleX(-1); }

        /* bars variant */
        .acl-cz__bars{ width:100%; display:flex; flex-direction:column; justify-content:center; gap:22px; padding:6px 4px; }
        .acl-cz__brow{ display:flex; flex-direction:column; gap:7px; }
        .acl-cz__btop{ display:flex; align-items:baseline; justify-content:space-between; }
        .acl-cz__bname{ font-weight:900; font-size:25px; }
        .acl-cz__bname small{ font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; opacity:.55; margin-left:9px; }
        .acl-cz__bval{ font-family:var(--acl-font-num); font-size:44px; line-height:.8; color:var(--acl-yellow); }
        .acl-cz__btrack{ position:relative; height:30px; background:rgba(255,255,255,.12);
          border:3px solid var(--acl-paper); overflow:hidden; }
        .acl-cz__bfill{ position:absolute; inset:0 auto 0 0; border-right:3px solid var(--acl-paper); }

        /* shared threshold line */
        .acl-cz__thr{ position:absolute; top:-7px; bottom:-7px; width:0; border-left:3px dashed var(--acl-yellow); z-index:4; }
        .acl-cz__thrlab{ position:absolute; top:-26px; transform:translateX(-50%); font-family:var(--acl-font-mono);
          font-weight:700; font-size:11px; letter-spacing:.05em; text-transform:uppercase; color:var(--acl-yellow);
          white-space:nowrap; }

        /* \u2500\u2500 right: pressure panel \u2500\u2500 */
        .acl-cz__panel{ flex:1; position:relative; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:26px 38px 28px; display:flex; flex-direction:column; min-width:0; }
        .acl-cz__panelt{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.45); flex:0 0 auto; }
        .acl-cz__gauges{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:0; }
        .acl-cz__gauge{ flex:0 0 auto; position:relative; display:flex; flex-direction:column; gap:8px; padding:16px 0;
          border-bottom:1.5px dashed rgba(22,21,15,.2); transition:opacity .25s; }
        .acl-cz__gauge:last-child{ border-bottom:none; }
        .acl-cz__gtop{ display:flex; align-items:baseline; justify-content:space-between; }
        .acl-cz__gname{ font-weight:900; font-size:26px; line-height:1.05; }
        .acl-cz__gname small{ font-family:var(--acl-font-mono); font-weight:400; font-size:12px;
          letter-spacing:.04em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-left:9px; }
        .acl-cz__gval{ font-family:var(--acl-font-num); font-size:48px; line-height:.78; white-space:nowrap; }
        .acl-cz__gtrack{ position:relative; height:24px; background:rgba(22,21,15,.1);
          border:3px solid var(--acl-ink); overflow:hidden; }
        .acl-cz__gfill{ position:absolute; inset:0 auto 0 0; border-right:3px solid var(--acl-ink); }
        .acl-cz__gauge--dim{ opacity:.42; }
        .acl-cz__fx{ position:absolute; right:30px; z-index:5; transform:translateY(-50%); }
        .acl-cz__brief{ flex:1; min-height:0; margin-top:18px; display:flex; flex-direction:column; gap:14px; }
        .acl-cz__briefhero{ background:var(--acl-ink); color:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 6px 0 rgba(22,21,15,.16); padding:18px 22px 20px; }
        .acl-cz__brieftag{ font-family:var(--acl-font-mono); font-weight:700; font-size:12px;
          letter-spacing:.12em; color:var(--acl-yellow); }
        .acl-cz__brieftitle{ font-weight:900; font-size:34px; line-height:1.08; margin-top:7px; }
        .acl-cz__briefhero p{ margin:10px 0 0; font-weight:700; font-size:18px; line-height:1.42;
          color:rgba(255,255,255,.82); }
        .acl-cz__signals{ display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:10px; }
        .acl-cz__signal{ min-width:0; border:3px solid var(--acl-ink); background:#fff;
          padding:12px 12px 14px; box-shadow:3px 4px 0 rgba(22,21,15,.12); }
        .acl-cz__sighead{ display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .acl-cz__sigdot{ width:16px; height:16px; border:2px solid var(--acl-ink); flex:0 0 auto; }
        .acl-cz__sigv{ font-family:var(--acl-font-num); font-size:28px; line-height:.9; }
        .acl-cz__signame{ font-weight:900; font-size:20px; line-height:1.08; margin-top:8px; }
        .acl-cz__sigtext{ font-weight:700; font-size:14px; line-height:1.35; margin-top:7px;
          color:rgba(22,21,15,.62); }
        .acl-cz__actions{ display:flex; flex-direction:column; gap:8px; }
        .acl-cz__action{ display:grid; grid-template-columns:50px 1fr; gap:12px; align-items:center;
          border:2.5px solid var(--acl-ink); background:rgba(22,21,15,.035); padding:10px 12px; }
        .acl-cz__actno{ font-family:var(--acl-font-num); font-size:36px; line-height:.9; color:var(--acl-pink); }
        .acl-cz__actk{ font-weight:900; font-size:20px; line-height:1.08; }
        .acl-cz__acttext{ font-weight:700; font-size:15px; line-height:1.34; margin-top:3px;
          color:rgba(22,21,15,.62); }

        .acl-cz__tiles{ flex:0 0 auto; display:flex; gap:14px; margin-top:18px;
          border-top:2px dashed rgba(22,21,15,.2); padding-top:16px; }
        .acl-cz__tile{ flex:1; }
        .acl-cz__tk{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-cz__tv{ font-family:var(--acl-font-num); font-size:44px; line-height:.96; margin-top:2px; }
        .acl-cz__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; opacity:.6; }

        .acl-cz__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:14px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-cz__chart,[data-deck-active] .acl-cz__panel{
            animation:acl-cz-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-cz__panel{ animation-delay:.08s; }
          [data-deck-active] .acl-cz__wall--l{ animation:acl-cz-sl .6s cubic-bezier(.2,.8,.2,1) .2s both; }
          [data-deck-active] .acl-cz__wall--r{ animation:acl-cz-sr .6s cubic-bezier(.2,.8,.2,1) .2s both; }
          [data-deck-active] .acl-cz__gfill,[data-deck-active] .acl-cz__bfill{
            animation:acl-cz-grow .7s cubic-bezier(.2,.8,.2,1) .4s both; }
          [data-deck-active] .acl-cz__gauge{ animation:acl-cz-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .3s); }
        }
        @keyframes acl-cz-rise{ from{ opacity:0; transform:translateY(18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-cz-sl{ from{ opacity:0; transform:translateX(-30px); } to{ opacity:1; transform:none; } }
        @keyframes acl-cz-sr{ from{ opacity:0; transform:translateX(30px); } to{ opacity:1; transform:none; } }
        @keyframes acl-cz-grow{ from{ transform:scaleX(0); transform-origin:left; } to{ transform:none; } }
        @keyframes acl-cz-in{ from{ opacity:0; transform:translateX(18px); } to{ opacity:1; transform:none; } }
      `}),de("div",{className:"acl-cz__head",children:[de("div",{children:[J("div",{className:"acl-cz__eyebrow",children:P}),J("h1",{className:"acl-cz__h",children:I})]}),J("div",{className:"acl-cz__sub",children:A}),J("div",{className:"acl-cz__summary",dangerouslySetInnerHTML:{__html:M}})]}),de("div",{className:"acl-cz__body",children:[de("div",{className:"acl-cz__chart",children:[J("div",{className:"acl-cz__chartt",children:b?m:f}),J("div",{className:"acl-cz__stage",children:b?J("div",{className:"acl-cz__pincer",children:e.map((S,V)=>{let O=g&&V===o,U=T(V,O),K=V===0?"l":V===e.length-1?"r":"m";return de("div",{className:"acl-cz__pnode acl-cz__pnode--"+K+(O?" acl-cz__pnode--focus":""),style:{background:U,color:B(U),opacity:g&&!O?.72:1},children:[J("span",{className:"acl-cz__pidx",children:String(V+1).padStart(2,"0")}),J("span",{className:"acl-cz__pname",children:S.k}),J("span",{className:"acl-cz__ptag",children:S.en}),_&&de("span",{className:"acl-cz__pval",children:[S.v,"%"]})]},V)})}):J("div",{className:"acl-cz__bars",children:e.map((S,V)=>{let O=g&&V===o,U=T(V,O);return de("div",{className:"acl-cz__brow",style:{opacity:g&&!O?.5:1},children:[de("div",{className:"acl-cz__btop",children:[de("span",{className:"acl-cz__bname",children:[S.k,J("small",{children:S.en})]}),_&&de("span",{className:"acl-cz__bval",children:[S.v,"%"]})]}),de("div",{className:"acl-cz__btrack",children:[J("div",{className:"acl-cz__bfill",style:{width:`${Math.min(100,S.v)}%`,background:U}}),u&&J("div",{className:"acl-cz__thr",style:{left:`${F}%`}})]})]},V)})})})]}),de("div",{className:"acl-cz__panel",children:[J("div",{className:"acl-cz__panelt",children:N}),C&&J("div",{style:{position:"absolute",right:26,top:22},children:J(H,{label:n,sub:s,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",rotate:5,size:14})}),de("div",{className:"acl-cz__brief",children:[de("div",{className:"acl-cz__briefhero",children:[J("div",{className:"acl-cz__brieftag",children:i}),J("div",{className:"acl-cz__brieftitle",children:z}),J("p",{children:L})]}),J("div",{className:"acl-cz__signals",children:y.slice(0,3).map((S,V)=>de("div",{className:"acl-cz__signal",children:[de("div",{className:"acl-cz__sighead",children:[J("span",{className:"acl-cz__sigdot",style:{background:S.color||E[V%E.length]}}),J("span",{className:"acl-cz__sigv",children:S.v})]}),J("div",{className:"acl-cz__signame",children:S.k}),J("div",{className:"acl-cz__sigtext",children:S.text})]},V))}),J("div",{className:"acl-cz__actions",children:w.slice(0,3).map((S,V)=>de("div",{className:"acl-cz__action",children:[J("div",{className:"acl-cz__actno",children:S.no||String(V+1).padStart(2,"0")}),de("div",{children:[J("div",{className:"acl-cz__actk",children:S.k}),J("div",{className:"acl-cz__acttext",children:S.text})]})]},V))})]}),J("div",{className:"acl-cz__tiles",children:r.map((S,V)=>de("div",{className:"acl-cz__tile",children:[J("div",{className:"acl-cz__tk",children:S.k}),de("div",{className:"acl-cz__tv",children:[S.v,J("em",{children:S.unit})]})]},V))})]})]}),de("div",{className:"acl-cz__foot",children:[C&&J(p,{kind:"loop",size:56,style:{position:"static"}}),J("span",{children:v})]})]})}ll.defaults={backgroundTheme:"primary",chartType:"pincer",segmentCount:3,showThreshold:!0,showValueLabels:!0,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Open Source Risk",headline:"壁壘被壓縮",subheadline:"風險\uFF1A開源與大廠競爭",summary:"開源模型降低能力門檻\uFF0C大廠生態<b>壓縮初創獨立空間</b>\u3002",strategyKicker:"防守判斷 \xB7 觀察訊號",chartHeadingPincer:"壁壘夾擊 \xB7 Moat Compression",chartHeadingGauge:"壓力指標 \xB7 Pressure Gauges",defenseStickerLabel:"防守策略",defenseStickerSub:"優先順序",briefTag:"判斷口徑",strategyTitle:"不是守模型\uFF0C而是守住業務閉環",strategyLead:"當能力差距被快速抹平\uFF0C真正可防守的部分會轉向客戶資料\u3001交付路徑和渠道繫結\u3002",threshold:75,pressures:[{k:"開源效能逼近",en:"OSS Parity",v:86},{k:"大廠產品覆蓋",en:"Incumbent Coverage",v:72},{k:"企業自建意願",en:"Build In-House",v:34},{k:"價格戰壓力",en:"Price Pressure",v:58}],signals:[{k:"客戶遷移成本",v:"高",color:"var(--acl-yellow)",text:"流程\u3001許可權和歷史資料一旦繫結\uFF0C替換成本會重新形成壁壘\u3002"},{k:"專有資料迴流",v:"中",color:"var(--acl-blue)",text:"能持續拿到業務反饋的產品\uFF0C更不容易被通用模型平替\u3002"},{k:"渠道控制力",v:"弱",color:"var(--acl-pink)",text:"若獲客依賴平臺分發\uFF0C價格戰會更快傳導到收入端\u3002"}],actions:[{no:"01",k:"先守場景",text:"優先選擇交付鏈條長\u3001流程複雜\u3001替換成本高的企業場景\u3002"},{no:"02",k:"繫結資料",text:"把使用資料\u3001審批記錄和運營反饋沉澱成產品迴圈\u3002"},{no:"03",k:"後擴品類",text:"等閉環跑通後\uFF0C再橫向複製到相鄰部門或相鄰行業\u3002"}],metrics:[{k:"可防守視窗",v:"12",unit:"月"},{k:"優先驗證場景",v:"3",unit:"類"},{k:"復購觸發點",v:"2",unit:"個"}],closingLine:"沒有壁壘的模型能力會迅速商品化\u3002"};ll.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"pincer",options:["pincer","bars"],label:"圖表型別",desc:"競爭格局\uFF1A夾擊壓縮(pincer) / 壓力指標條(bars)"},{key:"segmentCount",type:"number",default:3,min:2,max:4,step:1,countArrays:["pressures"],label:"指標數量",desc:"壓力指標數量(2\u20134)"},{key:"showThreshold",type:"boolean",default:!0,label:"臨界線",desc:"壓力條上的臨界閾值虛線 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"各壓力指標百分比標籤 顯隱"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"面板底部支撐指標格數量(2\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某個壓力指標(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:t=>Math.max(0,(t.segmentCount||1)-1),step:1,maxFromKey:"segmentCount",maxFromKeyOffset:-1,label:"重點物件",desc:"被高亮的壓力指標序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];ll.numberBounds={"pressures[].v":{min:0,max:100,semantics:"percent"}};var sd=ll.defaults,pd=ll.controls,dd=ll.numberBounds;var An={};Y(An,{controls:()=>fd,default:()=>So,defaults:()=>md});import"react";import{jsx as Ua,jsxs as jt}from"react/jsx-runtime";function So(t){let l={...So.defaults,...t},{backgroundTheme:c,cardCount:k,criteriaCount:d,showChecklist:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,checklistTitle:A,criteria:M,directions:F,closingLine:D,checklistStickerLabel:q,priorityStickerLabel:N}=l,z=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=F.slice(0,Math.max(2,k)),y=Math.min(x,L.length-1),w=M.slice(0,Math.max(2,d)),v=L.length<=2?L.length:L.length===3?3:2,m=["spark","star","heart","spark"],f=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)"];return jt("div",{className:"acl-root acl-is",style:{background:z},children:[Ua("style",{children:`
        .acl-is{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 64px; display:flex; flex-direction:column; }
        .acl-is__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-is__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-is__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-is__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-is__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-is__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-is__body{ flex:1; display:flex; gap:46px; margin-top:30px; min-height:0; }

        /* \u2500\u2500 left: screening checklist (ink panel) \u2500\u2500 */
        .acl-is__check{ flex:0 0 600px; position:relative; background:var(--acl-ink); color:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 38px 30px; display:flex; flex-direction:column; min-width:0; }
        .acl-is__checkt{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.5); flex:0 0 auto;
          display:flex; align-items:center; gap:12px; }
        .acl-is__checkt::after{ content:""; flex:1; height:0; border-top:2px solid rgba(255,255,255,.22); }
        .acl-is__crows{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:0; }
        .acl-is__crow{ display:flex; align-items:center; gap:20px; padding:18px 0;
          border-bottom:1.5px dashed rgba(255,255,255,.2); }
        .acl-is__crow:last-child{ border-bottom:none; }
        .acl-is__tick{ flex:0 0 auto; width:42px; height:42px; background:var(--acl-yellow);
          color:var(--acl-ink); display:grid; place-items:center; transform:rotate(45deg);
          box-shadow:3px 3px 0 rgba(0,0,0,.3); }
        .acl-is__tick span{ transform:rotate(-45deg); font-family:var(--acl-font-num); font-size:24px; line-height:1; }
        .acl-is__ctxt{ display:flex; flex-direction:column; gap:2px; min-width:0; }
        .acl-is__ctxt b{ font-weight:900; font-size:34px; line-height:1.04; }
        .acl-is__ctxt span{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(255,255,255,.5); }
        .acl-is__checkfx{ position:absolute; right:24px; top:22px; z-index:4; }

        /* \u2500\u2500 right: direction cards grid \u2500\u2500 */
        .acl-is__grid{ flex:1; min-width:0; display:grid; gap:24px; align-content:stretch;
          grid-template-columns:repeat(${v}, 1fr); }
        .acl-is__card{ position:relative; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.16); padding:26px 28px 24px; display:flex; flex-direction:column;
          gap:10px; min-width:0; overflow:hidden;
          transition:opacity .25s, transform .25s, box-shadow .25s, background .25s; }
        .acl-is__corner{ position:absolute; top:0; right:0; width:74px; height:74px;
          clip-path:polygon(100% 0, 0 0, 100% 100%); }
        .acl-is__crow2{ display:flex; align-items:center; gap:14px; }
        .acl-is__cn{ font-family:var(--acl-font-num); font-size:46px; line-height:.8; }
        .acl-is__cmark{ margin-left:auto; }
        .acl-is__ct{ font-weight:900; font-size:38px; line-height:1; }
        .acl-is__cen{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-is__cd{ font-weight:700; font-size:21px; line-height:1.42; color:rgba(22,21,15,.64);
          margin-top:auto; }
        .acl-is__card--focus{ background:var(--acl-ink); color:var(--acl-paper);
          transform:translateY(-8px) scale(1.015); box-shadow:9px 12px 0 rgba(22,21,15,.3); z-index:3; }
        .acl-is__card--focus .acl-is__cen{ color:rgba(255,255,255,.55); }
        .acl-is__card--focus .acl-is__cd{ color:rgba(255,255,255,.8); }
        .acl-is__card--focus .acl-is__cn{ color:var(--acl-yellow); }
        .acl-is__card--dim{ opacity:.5; }
        .acl-is__cfx{ position:absolute; top:-15px; left:-10px; z-index:5; }

        .acl-is__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:16px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-is__check{ animation:acl-is-rise .55s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-is__crow{ animation:acl-is-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .2s); }
          [data-deck-active] .acl-is__card{ animation:acl-is-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .26s); }
        }
        @keyframes acl-is-rise{ from{ opacity:0; transform:translateX(-26px); } to{ opacity:1; transform:none; } }
        @keyframes acl-is-in{ from{ opacity:0; transform:translateX(-14px); } to{ opacity:1; transform:none; } }
        @keyframes acl-is-pop{ from{ opacity:0; transform:translateY(22px); } to{ opacity:1; transform:none; } }
      `}),jt("div",{className:"acl-is__head",children:[jt("div",{children:[Ua("div",{className:"acl-is__eyebrow",children:h}),Ua("h1",{className:"acl-is__h",children:C})]}),Ua("div",{className:"acl-is__sub",children:P}),Ua("div",{className:"acl-is__summary",dangerouslySetInnerHTML:{__html:I}})]}),jt("div",{className:"acl-is__body",children:[u&&jt("div",{className:"acl-is__check",children:[Ua("div",{className:"acl-is__checkt",children:A}),g&&Ua("div",{className:"acl-is__checkfx",children:Ua(H,{label:q,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:5,size:13})}),Ua("div",{className:"acl-is__crows",children:w.map((n,s)=>jt("div",{className:"acl-is__crow",style:{"--i":s},children:[Ua("span",{className:"acl-is__tick",children:Ua("span",{children:String(s+1).padStart(2,"0")})}),jt("div",{className:"acl-is__ctxt",children:[Ua("b",{children:n.name}),Ua("span",{children:n.en})]})]},s))})]}),Ua("div",{className:"acl-is__grid",children:L.map((n,s)=>{let i=_&&s===y,a=_&&!i,e=f[s%f.length];return jt("div",{className:"acl-is__card"+(i?" acl-is__card--focus":"")+(a?" acl-is__card--dim":""),style:{"--i":s},children:[Ua("div",{className:"acl-is__corner",style:{background:i?"var(--acl-yellow)":e}}),i&&g&&Ua("div",{className:"acl-is__cfx",children:Ua(H,{label:N,color:"var(--acl-yellow)",rotate:-7,size:13})}),jt("div",{className:"acl-is__crow2",children:[Ua("span",{className:"acl-is__cn",children:String(s+1).padStart(2,"0")}),g&&Ua("span",{className:"acl-is__cmark",children:Ua(p,{kind:m[s%m.length],size:42,rotate:s%2?8:-8,fill:i?"var(--acl-yellow)":e,stroke:"var(--acl-ink)",style:{position:"static"}})})]}),Ua("div",{className:"acl-is__ct",children:n.title}),Ua("div",{className:"acl-is__cen",children:n.en}),Ua("div",{className:"acl-is__cd",children:n.note})]},s)})})]}),jt("div",{className:"acl-is__foot",children:[g&&Ua(p,{kind:"loop",size:56,style:{position:"static"}}),Ua("span",{children:D})]})]})}So.defaults={backgroundTheme:"primary",cardCount:4,criteriaCount:4,showChecklist:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Infrastructure Strategy",headline:"確定性預算",subheadline:"策略 \xB7 優先基礎設施",summary:"基礎設施更接近 <b>剛性預算</b>\uFF0C收入確定性相對更強\u3002",checklistTitle:"篩選指標 \xB7 Screening",checklistStickerLabel:"篩選清單",priorityStickerLabel:"優先",criteria:[{name:"收入增速",en:"Revenue Growth"},{name:"毛利率",en:"Gross Margin"},{name:"客戶集中度",en:"Concentration"},{name:"資源鎖定",en:"Resource Lock-in"}],directions:[{title:"GPU 雲",en:"GPU Cloud",note:"訓練與推理雙重需求\uFF0C資源鎖定即護城河\u3002"},{title:"資料平臺",en:"Data Platform",note:"最接近企業剛性預算\uFF0C存量客戶可複用\u3002"},{title:"評測工具",en:"Eval & Trust",note:"監管收緊把安全從可選預算變成剛需\u3002"},{title:"推理最佳化",en:"Inference",note:"抬高毛利天花板\uFF0C決定單位經濟模型\u3002"}],closingLine:"優先看能支撐全行業增長的基礎設施\u3002"};So.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:4,min:2,max:4,step:1,label:"方向卡數量",desc:"推薦方向卡數量(2\u20134)\uFF0C網格隨數量自動佈局"},{key:"showChecklist",type:"boolean",default:!0,label:"篩選面板",desc:"左側篩選指標清單面板 顯隱"},{key:"criteriaCount",type:"number",default:4,min:2,max:4,step:1,showIf:"showChecklist",label:"篩選指標數",desc:"篩選清單行數(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一張方向卡(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"cardCount",label:"重點物件",desc:"被突出的方向卡序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var md=So.defaults,fd=So.controls;var Tn={};Y(Tn,{controls:()=>ud,default:()=>Lo,defaults:()=>gd});import"react";import{jsx as Ra,jsxs as ht}from"react/jsx-runtime";function Lo(t){let l={...Lo.defaults,...t},{backgroundTheme:c,stageCount:k,mediaCount:d,sceneCount:u,metricCount:_,showScenes:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,railTitle:F,stages:D,scenes:q,metrics:N,collage:z,closingLine:L,embedBadgeLabel:y,scenesLabel:w}=l,v=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",m=j(D).slice(0,Math.max(3,$(k,3))),f=Q(h,0,Math.max(0,m.length-1)),n=j(q).slice(0,Math.max(2,$(u,2))),s=j(N).slice(0,Math.max(2,$(_,2))),i=z&&z[d]||[],a=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"];return ht("div",{className:"acl-root acl-vs",style:{background:v},children:[Ra("style",{children:`
        .acl-vs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 60px; display:flex; flex-direction:column; }
        .acl-vs__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-vs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-vs__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-vs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-vs__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-vs__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-vs__body{ flex:1; display:flex; gap:48px; margin-top:28px; min-height:0; }

        /* \u2500\u2500 left: vertical workflow rail \u2500\u2500 */
        .acl-vs__rail{ flex:0 0 600px; position:relative; padding-left:44px; display:flex;
          flex-direction:column; justify-content:center; gap:0; min-width:0; }
        .acl-vs__railt{ position:absolute; top:0; left:44px; font-family:var(--acl-font-mono);
          font-weight:700; font-size:14px; letter-spacing:.1em; text-transform:uppercase;
          color:rgba(22,21,15,.5); }
        .acl-vs__spine{ position:absolute; left:19px; top:54px; bottom:14px; width:4px;
          background:repeating-linear-gradient(var(--acl-ink) 0 12px, transparent 12px 22px); }
        .acl-vs__stage{ position:relative; display:flex; align-items:center; gap:22px;
          padding:13px 0; transition:transform .25s; }
        .acl-vs__node{ position:absolute; left:-44px; width:38px; height:38px; border-radius:50%;
          background:var(--acl-paper); border:4px solid var(--acl-ink); display:grid; place-items:center;
          font-family:var(--acl-font-num); font-size:18px; line-height:1; z-index:2; }
        .acl-vs__slab{ flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:5px 6px 0 rgba(22,21,15,.14); padding:16px 24px; display:flex; align-items:center;
          gap:18px; min-width:0; transition:background .25s, transform .25s, box-shadow .25s; }
        .acl-vs__sname{ font-weight:900; font-size:32px; line-height:1; }
        .acl-vs__sen{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-left:auto; }
        .acl-vs__stage--embed .acl-vs__slab{ background:var(--acl-ink); color:var(--acl-paper);
          transform:translateX(26px) scale(1.02); box-shadow:8px 10px 0 rgba(22,21,15,.28); }
        .acl-vs__stage--embed .acl-vs__sen{ color:rgba(255,255,255,.55); }
        .acl-vs__stage--embed .acl-vs__node{ background:var(--acl-pink); border-color:var(--acl-ink); color:var(--acl-paper); }
        .acl-vs__embed{ flex:0 0 auto; font-family:var(--acl-font-mono); font-weight:700; font-size:13px;
          letter-spacing:.06em; text-transform:uppercase; background:var(--acl-yellow); color:var(--acl-ink);
          padding:5px 10px; }
        .acl-vs__efx{ position:absolute; right:-8px; top:-14px; z-index:5; }

        /* \u2500\u2500 right: scenes + collage + metrics \u2500\u2500 */
        .acl-vs__right{ flex:1; min-width:0; display:flex; flex-direction:column; }
        .acl-vs__scenes{ flex:0 0 auto; display:flex; align-items:center; flex-wrap:wrap; gap:11px;
          margin-bottom:6px; }
        .acl-vs__sclab{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.5); margin-right:4px; }
        .acl-vs__chip{ font-family:var(--acl-font-cn); font-weight:700; font-size:21px;
          padding:6px 15px; background:var(--acl-paper); border:2.5px solid var(--acl-ink);
          box-shadow:2px 3px 0 rgba(22,21,15,.18); }
        .acl-vs__stage2{ flex:1; position:relative; min-height:0; }
        .acl-vs__slot{ position:absolute; }
        .acl-vs__noimg{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:30px; color:rgba(22,21,15,.4); }
        .acl-vs__metrics{ flex:0 0 auto; display:flex; gap:14px; border-top:2px dashed rgba(22,21,15,.25);
          padding-top:16px; margin-top:8px; }
        .acl-vs__tile{ flex:1; display:flex; align-items:center; gap:12px; min-width:0; }
        .acl-vs__tick{ flex:0 0 auto; width:30px; height:30px; background:var(--acl-ink);
          color:var(--acl-yellow); display:grid; place-items:center; font-family:var(--acl-font-num);
          font-size:17px; transform:rotate(45deg); }
        .acl-vs__tick span{ transform:rotate(-45deg); }
        .acl-vs__ttxt{ display:flex; flex-direction:column; gap:0; min-width:0; }
        .acl-vs__ttxt b{ font-weight:900; font-size:23px; line-height:1.04; }
        .acl-vs__ttxt span{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }

        .acl-vs__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-vs__stage{ animation:acl-vs-in .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .15s); }
          [data-deck-active] .acl-vs__chip{ animation:acl-vs-pop .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .05s + .3s); }
          [data-deck-active] .acl-vs__tile{ animation:acl-vs-pop .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .4s); }
        }
        @keyframes acl-vs-in{ from{ opacity:0; transform:translateX(-18px); } to{ opacity:1; transform:none; } }
        @keyframes acl-vs-pop{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
      `}),ht("div",{className:"acl-vs__head",children:[ht("div",{children:[Ra("div",{className:"acl-vs__eyebrow",children:P}),Ra("h1",{className:"acl-vs__h",children:I})]}),Ra("div",{className:"acl-vs__sub",children:A}),Ra("div",{className:"acl-vs__summary",dangerouslySetInnerHTML:{__html:M}})]}),ht("div",{className:"acl-vs__body",children:[ht("div",{className:"acl-vs__rail",children:[Ra("div",{className:"acl-vs__railt",children:F}),Ra("div",{className:"acl-vs__spine"}),m.map((e,o)=>{let r=g&&o===f;return ht("div",{className:"acl-vs__stage"+(r?" acl-vs__stage--embed":""),style:{"--i":o},children:[Ra("span",{className:"acl-vs__node",children:String(o+1).padStart(2,"0")}),r&&C&&Ra("div",{className:"acl-vs__efx",children:Ra(p,{kind:"arrowS",size:52,rotate:-20,color:"var(--acl-ink)",style:{position:"static"}})}),ht("div",{className:"acl-vs__slab",children:[Ra("span",{className:"acl-vs__sname",children:e.name}),r&&Ra("span",{className:"acl-vs__embed",children:y}),Ra("span",{className:"acl-vs__sen",children:e.en})]})]},o)})]}),ht("div",{className:"acl-vs__right",children:[x&&ht("div",{className:"acl-vs__scenes",children:[Ra("span",{className:"acl-vs__sclab",children:w}),n.map((e,o)=>Ra("span",{className:"acl-vs__chip",style:{"--i":o},children:e},o))]}),ht("div",{className:"acl-vs__stage2",children:[i.length===0&&Ra("div",{className:"acl-vs__noimg",children:"\u2014 無圖片 \xB7 mediaCount 0 \u2014"}),i.map((e,o)=>Ra("div",{className:"acl-vs__slot",style:{left:e.l,top:e.t},children:Ra(W,{id:"wf-"+o,box:e.box,rotate:e.r,ratio:e.ratio,accent:e.accent,placeholder:"上傳",sticker:{label:n[o]||e.ph,color:a[o%a.length],rotate:o%2?3:-4}})},o)),C&&i.length>0&&Ra(p,{kind:"spark",size:44,rotate:-10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:10,top:-6}})]}),Ra("div",{className:"acl-vs__metrics",children:s.map((e,o)=>ht("div",{className:"acl-vs__tile",style:{"--i":o},children:[Ra("span",{className:"acl-vs__tick",children:Ra("span",{children:"\u2713"})}),ht("div",{className:"acl-vs__ttxt",children:[Ra("b",{children:e.name}),Ra("span",{children:e.en})]})]},o))})]})]}),ht("div",{className:"acl-vs__foot",children:[C&&Ra(p,{kind:"loop",size:56,style:{position:"static"}}),Ra("span",{children:L})]})]})}Lo.defaults={images:[],backgroundTheme:"muted",stageCount:4,mediaCount:2,sceneCount:5,metricCount:4,showScenes:!0,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Vertical Strategy",headline:"嵌入工作流",subheadline:"策略 \xB7 篩選垂直應用",summary:"應用要看是否嵌入 <b>剛性流程</b>\uFF0C而非只看生成效果\u3002",railTitle:"剛性流程 \xB7 Workflow",embedBadgeLabel:"AI 嵌入",scenesLabel:"落地場景",stages:[{name:"資料接入",en:"Intake"},{name:"流程處理",en:"Process"},{name:"結果交付",en:"Deliver"},{name:"計費結算",en:"Billing"},{name:"復盤最佳化",en:"Review"}],scenes:["法律","醫療","客服","企業搜尋","開發者工具"],metrics:[{name:"付費留存",en:"Retention"},{name:"使用頻次",en:"Frequency"},{name:"席位擴張",en:"Seat Expansion"},{name:"淨收入留存",en:"NRR"}],collage:{0:[],1:[{l:250,t:30,box:400,r:-3,ratio:1.35,accent:"var(--acl-paper)",ph:"場景圖"}],2:[{l:40,t:20,box:380,r:-4,ratio:1.3,accent:"var(--acl-paper)",ph:"場景圖"},{l:470,t:130,box:340,r:4,ratio:.92,accent:"var(--acl-paper)",ph:"場景圖"}],3:[{l:20,t:10,box:320,r:-4,ratio:1.2,accent:"var(--acl-paper)",ph:"場景圖"},{l:380,t:90,box:280,r:4,ratio:.92,accent:"var(--acl-paper)",ph:"場景圖"},{l:660,t:30,box:270,r:-3,ratio:1.1,accent:"var(--acl-paper)",ph:"場景圖"}],4:[{l:10,t:4,box:280,r:-4,ratio:1.18,accent:"var(--acl-paper)",ph:"場景圖"},{l:320,t:96,box:250,r:4,ratio:.92,accent:"var(--acl-paper)",ph:"場景圖"},{l:590,t:18,box:250,r:-3,ratio:1.12,accent:"var(--acl-paper)",ph:"場景圖"},{l:700,t:220,box:220,r:5,ratio:.86,accent:"var(--acl-paper)",ph:"場景圖"}]},closingLine:"應用價值來自它在流程裡的位置\u3002"};Lo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"stageCount",type:"number",default:4,min:3,max:5,step:1,label:"流程階段數",desc:"左側剛性流程的階段數量(3\u20135)"},{key:"mediaCount",type:"number",default:2,min:0,max:4,step:1,label:"圖片數量",desc:"場景拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showScenes",type:"boolean",default:!0,label:"場景標籤",desc:"右上方落地場景標籤行 顯隱"},{key:"sceneCount",type:"number",default:5,min:2,max:5,step:1,showIf:"showScenes",label:"場景數量",desc:"落地場景標籤數量(2\u20135)"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,label:"關注指標數",desc:"底部關注指標清單數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一流程階段為 AI 嵌入點"},{key:"focusIndex",type:"number",default:1,min:0,max:4,step:1,maxFrom:"stageCount",label:"重點物件",desc:"被標記為 AI 嵌入點的階段序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var gd=Lo.defaults,ud=Lo.controls;var Dn={};Y(Dn,{controls:()=>bd,default:()=>Io,defaults:()=>xd});import _d from"react";import{jsx as Wa,jsxs as $t}from"react/jsx-runtime";function Io(t){let l={...Io.defaults,...t},{backgroundTheme:c,nodeCount:k,showBaseline:d,showValueLabels:u,showMetrics:_,metricCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,axisStart:F,axisEnd:D,baseLabel:q,watchlist:N,metrics:z,closingLine:L,repricingStickerLabel:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=N.slice(0,Math.max(2,k)),m=Math.min(h,v.length-1),f=z.slice(0,Math.max(2,x));return $t("div",{className:"acl-root acl-iw",style:{background:w},children:[Wa("style",{children:`
        .acl-iw{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 100px 60px; display:flex; flex-direction:column; }
        .acl-iw__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-iw__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-iw__h{ font-weight:900; font-size:80px; line-height:.95; margin:0; }
        .acl-iw__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);
          box-shadow:3px 4px 0 rgba(22,21,15,.2);  white-space:nowrap;}
        .acl-iw__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:24px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-iw__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        /* \u2500\u2500 plot: anchor baseline + zig-zag watch nodes \u2500\u2500 */
        .acl-iw__plot{ flex:1; position:relative; margin-top:18px; min-height:0; }
        .acl-iw__base{ position:absolute; left:0; right:54px; top:50%; height:0;
          border-top:4px dashed var(--acl-ink); z-index:1; }
        .acl-iw__arrow{ position:absolute; right:-6px; top:50%; transform:translateY(-50%); z-index:2; }
        .acl-iw__baselab{ position:absolute; left:2px; top:calc(50% + 12px); font-family:var(--acl-font-mono);
          font-weight:700; font-size:14px; letter-spacing:.08em; text-transform:uppercase;
          color:rgba(22,21,15,.5); z-index:2; }
        .acl-iw__edge{ position:absolute; top:calc(50% - 44px); font-family:var(--acl-font-num);
          font-size:30px; line-height:1; color:rgba(22,21,15,.4); z-index:2; }
        .acl-iw__edge--s{ left:0; }
        .acl-iw__edge--e{ right:54px; }

        .acl-iw__col{ position:absolute; top:0; bottom:0; transform:translateX(-50%); width:312px; z-index:3; }
        .acl-iw__dot{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          width:26px; height:26px; border-radius:50%; background:var(--acl-paper);
          border:4px solid var(--acl-ink); z-index:4; transition:background .25s, transform .25s; }
        .acl-iw__stem{ position:absolute; left:50%; width:0; border-left:3px dashed var(--acl-ink);
          transform:translateX(-50%); z-index:2; }
        .acl-iw__stem--up{ bottom:50%; height:66px; }
        .acl-iw__stem--dn{ top:50%; height:66px; }
        .acl-iw__card{ position:absolute; left:50%; transform:translateX(-50%); width:300px;
          background:var(--acl-paper); border:3px solid var(--acl-ink); box-shadow:6px 8px 0 rgba(22,21,15,.16);
          padding:22px 24px 20px; display:flex; flex-direction:column; gap:9px;
          transition:opacity .25s, transform .25s, box-shadow .25s, background .25s; }
        .acl-iw__card--up{ bottom:calc(50% + 66px); }
        .acl-iw__card--dn{ top:calc(50% + 66px); }
        .acl-iw__cname{ font-weight:900; font-size:38px; line-height:1; }
        .acl-iw__crole{ font-family:var(--acl-font-mono); font-size:15px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-iw__cnote{ font-weight:700; font-size:21px; line-height:1.34; color:rgba(22,21,15,.66); }
        .acl-iw__badge{ display:inline-flex; align-items:center; gap:8px; align-self:flex-start;
          font-family:var(--acl-font-mono); font-weight:700; font-size:16px; letter-spacing:.04em;
          padding:6px 13px; margin-top:3px; }
        .acl-iw__badge--up{ background:var(--acl-blue); color:var(--acl-ink); }
        .acl-iw__badge--dn{ background:var(--acl-red); color:var(--acl-paper); }
        .acl-iw__badge i{ font-style:normal; font-family:var(--acl-font-num); font-size:20px; line-height:1; }

        .acl-iw__col--focus .acl-iw__dot{ background:var(--acl-pink); transform:translate(-50%,-50%) scale(1.25); }
        .acl-iw__col--focus .acl-iw__card{ background:var(--acl-ink); color:var(--acl-paper);
          box-shadow:9px 12px 0 rgba(22,21,15,.3); }
        .acl-iw__col--focus .acl-iw__crole{ color:rgba(255,255,255,.55); }
        .acl-iw__col--focus .acl-iw__cnote{ color:rgba(255,255,255,.78); }
        .acl-iw__col--dim{ opacity:.5; }
        .acl-iw__cfx{ position:absolute; left:50%; transform:translateX(-50%); z-index:6; }
        .acl-iw__cfx--up{ top:-30px; }
        .acl-iw__cfx--dn{ bottom:-30px; }

        .acl-iw__metrics{ flex:0 0 auto; display:flex; gap:14px; border-top:2px dashed rgba(22,21,15,.25);
          padding-top:16px; margin-top:8px; }
        .acl-iw__tile{ flex:1; display:flex; align-items:center; gap:12px; min-width:0; }
        .acl-iw__tnum{ font-family:var(--acl-font-num); font-size:34px; line-height:.8; color:rgba(22,21,15,.4); flex:0 0 auto; }
        .acl-iw__ttxt{ display:flex; flex-direction:column; }
        .acl-iw__ttxt b{ font-weight:900; font-size:23px; line-height:1.04; }
        .acl-iw__ttxt span{ font-family:var(--acl-font-mono); font-size:11px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }

        .acl-iw__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:28px; margin-top:12px; flex:0 0 auto; }
        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-iw__col{ animation:acl-iw-in .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .15s); }
          [data-deck-active] .acl-iw__tile{ animation:acl-iw-pop .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .45s); }
        }
        @keyframes acl-iw-in{ from{ opacity:0; transform:translateX(-50%) translateY(16px); }
          to{ opacity:1; transform:translateX(-50%) translateY(0); } }
        @keyframes acl-iw-pop{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
      `}),$t("div",{className:"acl-iw__head",children:[$t("div",{children:[Wa("div",{className:"acl-iw__eyebrow",children:P}),Wa("h1",{className:"acl-iw__h",children:I})]}),Wa("div",{className:"acl-iw__sub",children:A}),Wa("div",{className:"acl-iw__summary",dangerouslySetInnerHTML:{__html:M}})]}),$t("div",{className:"acl-iw__plot",children:[d&&$t(_d.Fragment,{children:[Wa("div",{className:"acl-iw__base"}),Wa("div",{className:"acl-iw__baselab",children:q}),Wa("div",{className:"acl-iw__edge acl-iw__edge--s",children:F}),Wa("div",{className:"acl-iw__edge acl-iw__edge--e",children:D}),C&&Wa("div",{className:"acl-iw__arrow",children:Wa(p,{kind:"arrow",size:58,style:{position:"static"}})})]}),v.map((n,s)=>{let i=s%2===0,a=g&&s===m,e=g&&!a,o=n.dir==="down",b=`${(.5+((s+.5)/v.length-.5)*.72)*100}%`;return $t("div",{className:"acl-iw__col"+(a?" acl-iw__col--focus":"")+(e?" acl-iw__col--dim":""),style:{left:b,"--i":s},children:[Wa("div",{className:"acl-iw__stem "+(i?"acl-iw__stem--up":"acl-iw__stem--dn")}),Wa("div",{className:"acl-iw__dot"}),a&&C&&Wa("div",{className:"acl-iw__cfx "+(i?"acl-iw__cfx--up":"acl-iw__cfx--dn"),children:Wa(H,{label:y,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:-5,size:12})}),$t("div",{className:"acl-iw__card "+(i?"acl-iw__card--up":"acl-iw__card--dn"),children:[Wa("div",{className:"acl-iw__cname",children:n.name}),Wa("div",{className:"acl-iw__crole",children:n.role}),Wa("div",{className:"acl-iw__cnote",children:n.note}),u&&$t("span",{className:"acl-iw__badge "+(o?"acl-iw__badge--dn":"acl-iw__badge--up"),children:[Wa("i",{children:o?"\u2193":"\u2191"}),n.tag]})]})]},s)})]}),_&&Wa("div",{className:"acl-iw__metrics",children:f.map((n,s)=>$t("div",{className:"acl-iw__tile",style:{"--i":s},children:[Wa("span",{className:"acl-iw__tnum",children:String(s+1).padStart(2,"0")}),$t("div",{className:"acl-iw__ttxt",children:[Wa("b",{children:n.name}),Wa("span",{children:n.en})]})]},s))}),$t("div",{className:"acl-iw__foot",children:[C&&Wa(p,{kind:"loop",size:56,style:{position:"static"}}),Wa("span",{children:L})]})]})}Io.defaults={backgroundTheme:"primary",nodeCount:4,showBaseline:!0,showValueLabels:!0,showMetrics:!0,metricCount:4,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"IPO Watch",headline:"估值錨重定價",subheadline:"策略 \xB7 觀察 IPO 視窗",summary:"頭部 IPO 表現會重定價整個 <b>一級市場估值錨</b>\u3002",axisStart:"視窗開啟",axisEnd:"重定價",baseLabel:"估值錨基線 \xB7 Valuation Anchor",repricingStickerLabel:"重定價錨",watchlist:[{name:"OpenAI",role:"通用大模型",note:"估值錨頂端\uFF0C收入增速定全行業基調\u3002",dir:"up",tag:"收入定基調"},{name:"Anthropic",role:"安全可靠模型",note:"企業採用兌現\uFF0C估值待公開市場驗證\u3002",dir:"up",tag:"採用兌現"},{name:"Databricks",role:"資料平臺",note:"存量客戶複用\uFF0C毛利結構相對更穩\u3002",dir:"up",tag:"毛利更穩"},{name:"CoreWeave",role:"算力基礎設施",note:"雲成本佔比高\uFF0C毛利彈性持續承壓\u3002",dir:"down",tag:"彈性承壓"}],metrics:[{name:"上市表現",en:"IPO Print"},{name:"收入增速",en:"Rev. Growth"},{name:"毛利率",en:"Gross Margin"},{name:"雲成本佔比",en:"Cloud Cost"}],closingLine:"公開市場會重新定價 AI 敘事\u3002"};Io.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"nodeCount",type:"number",default:4,min:2,max:4,step:1,label:"觀察物件數",desc:"時間軸上的觀察物件節點數量(2\u20134)\uFF0C沿軸上下交錯排布"},{key:"showBaseline",type:"boolean",default:!0,label:"估值錨基線",desc:"中央虛線基線 + 兩端視窗標註 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"重定價徽標",desc:"各節點上的 \u2191/\u2193 重定價方向徽標 顯隱"},{key:"showMetrics",type:"boolean",default:!0,label:"觀察指標",desc:"底部觀察指標行 顯隱"},{key:"metricCount",type:"number",default:4,min:2,max:4,step:1,showIf:"showMetrics",label:"指標數量",desc:"底部觀察指標數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個觀察物件(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"nodeCount",label:"重點物件",desc:"被高亮的觀察物件序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var xd=Io.defaults,bd=Io.controls;var Rn={};Y(Rn,{controls:()=>hd,default:()=>Mo,defaults:()=>vd});import"react";import{jsx as ie,jsxs as Ut}from"react/jsx-runtime";function Mo(t){let l={...Mo.defaults,...t},{backgroundTheme:c,emphasisStyle:k,showSeal:d,showQuoteMark:u,showSupports:_,supportCount:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,kicker:I,label:A,lines:M,supports:F,sealTop:D,sealBottom:q,source:N}=l,z=c==="ink",L=z?"radial-gradient(125% 125% at 80% 6%, #2A2820 0%, #16150F 62%, #0E0D08 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",y=F.slice(0,Math.max(0,x)),w=Math.min(h,M.length-1);return Ut("div",{className:"acl-root acl-vd"+(z?" acl-vd--ink":""),style:{background:L},children:[ie("style",{children:`
        .acl-vd{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:80px 110px 72px; display:flex; flex-direction:column; }
        .acl-vd--ink{ color:var(--acl-paper); }

        /* \u2500\u2500 header rail \u2500\u2500 */
        .acl-vd__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; z-index:2; }
        .acl-vd__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.2em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-vd--ink .acl-vd__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-vd__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-vd__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow);
          transform:rotate(-2deg); white-space:nowrap; }
        .acl-vd--ink .acl-vd__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        /* \u2500\u2500 giant ghost closing-mark behind \u2500\u2500 */
        .acl-vd__ghost{ position:absolute; right:60px; bottom:-120px; font-family:var(--acl-font-num);
          font-size:560px; line-height:.62; color:var(--acl-pink); opacity:.14; z-index:0;
          pointer-events:none; user-select:none; }
        .acl-vd--ink .acl-vd__ghost{ color:var(--acl-yellow); opacity:.12; }

        /* \u2500\u2500 body: stacked clause lines \u2500\u2500 */
        .acl-vd__body{ flex:1; display:flex; flex-direction:column; justify-content:center;
          position:relative; z-index:1; gap:6px; }
        .acl-vd__label{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.08em; text-transform:uppercase; color:rgba(22,21,15,.5);
          display:flex; align-items:center; gap:14px; margin-bottom:24px; }
        .acl-vd--ink .acl-vd__label{ color:rgba(251,250,244,.55); }
        .acl-vd__label::before{ content:""; width:54px; height:7px; background:var(--acl-pink);
          display:inline-block; }
        .acl-vd--ink .acl-vd__label::before{ background:var(--acl-yellow); }

        .acl-vd__line{ position:relative; font-weight:900; line-height:1.02; letter-spacing:-.01em;
          margin:0; width:max-content; max-width:100%; }
        .acl-vd__line--set{ font-size:92px; color:rgba(22,21,15,.78); }
        .acl-vd--ink .acl-vd__line--set{ color:rgba(251,250,244,.82); }
        .acl-vd__line--punch{ font-size:150px; }

        /* emphasis \xB7 band (skewed fill that reads like a stamped marker swipe) */
        .acl-vd__band{ position:relative; display:inline-block; padding:.04em .22em .08em .14em;
          color:var(--acl-paper); background:var(--acl-ink); transform:rotate(-1.4deg);
          box-shadow:10px 12px 0 rgba(22,21,15,.18);
          clip-path:polygon(0 6%, 100% 0, 99% 92%, 1% 100%); }
        .acl-vd--ink .acl-vd__band{ background:var(--acl-yellow); color:var(--acl-ink);
          box-shadow:10px 12px 0 rgba(0,0,0,.4); }
        .acl-vd__band--alt{ background:var(--acl-pink); color:var(--acl-paper); }

        /* emphasis \xB7 underline (hand-drawn double stroke) */
        .acl-vd__under{ position:relative; display:inline-block; padding:0 .06em .12em; }
        .acl-vd__under::after{ content:""; position:absolute; left:-.04em; right:-.08em; bottom:.02em;
          height:.16em; background:var(--acl-pink);
          clip-path:polygon(0 22%,100% 0,100% 78%,0 100%); }
        .acl-vd--ink .acl-vd__under::after{ background:var(--acl-yellow); }

        .acl-vd__linefx{ position:absolute; top:-34px; right:-58px; z-index:3; }

        /* \u2500\u2500 verdict seal stamp \u2500\u2500 */
        .acl-vd__seal{ position:absolute; top:128px; right:96px; width:230px; height:230px;
          border-radius:50%; border:5px solid var(--acl-ink); display:grid; place-items:center;
          text-align:center; transform:rotate(-13deg); z-index:2;
          box-shadow:0 0 0 9px rgba(22,21,15,.08); background:transparent; }
        .acl-vd--ink .acl-vd__seal{ border-color:var(--acl-yellow); box-shadow:0 0 0 9px rgba(236,239,53,.08); }
        .acl-vd__sealring{ position:absolute; inset:14px; border-radius:50%;
          border:2px dashed rgba(22,21,15,.4); }
        .acl-vd--ink .acl-vd__sealring{ border-color:rgba(251,250,244,.4); }
        .acl-vd__sealwrap{ display:flex; flex-direction:column; align-items:center; gap:7px;
          padding:0 18px; }
        .acl-vd__sealtop{ font-weight:900; font-size:46px; line-height:.94; white-space:pre-line; }
        .acl-vd__sealdiv{ width:64px; height:3px; background:currentColor; opacity:.55; }
        .acl-vd__sealbot{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.16em; text-transform:uppercase; }
        .acl-vd__sealfx{ position:absolute; top:-22px; left:-26px; z-index:4; }

        /* \u2500\u2500 foot: supports + signature \u2500\u2500 */
        .acl-vd__foot{ flex:0 0 auto; display:flex; align-items:flex-end; gap:30px; z-index:2;
          padding-top:22px; border-top:3px solid rgba(22,21,15,.22); }
        .acl-vd--ink .acl-vd__foot{ border-color:rgba(251,250,244,.28); }
        .acl-vd__supports{ display:flex; gap:16px; flex:1; min-width:0; }
        .acl-vd__chip{ display:flex; align-items:center; gap:13px; min-width:0; }
        .acl-vd__chipn{ flex:0 0 auto; width:40px; height:40px; transform:rotate(45deg);
          background:var(--acl-ink); display:grid; place-items:center; }
        .acl-vd--ink .acl-vd__chipn{ background:var(--acl-yellow); }
        .acl-vd__chipn span{ transform:rotate(-45deg); font-family:var(--acl-font-num); font-size:20px;
          line-height:1; color:var(--acl-yellow); }
        .acl-vd--ink .acl-vd__chipn span{ color:var(--acl-ink); }
        .acl-vd__chiptxt{ display:flex; flex-direction:column; min-width:0; }
        .acl-vd__chiptxt b{ font-weight:900; font-size:25px; line-height:1.04; }
        .acl-vd__chiptxt span{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-vd--ink .acl-vd__chiptxt span{ color:rgba(251,250,244,.5); }
        .acl-vd__sign{ flex:0 0 auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em;
          color:rgba(22,21,15,.58); }
        .acl-vd--ink .acl-vd__sign{ color:rgba(251,250,244,.58); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-vd__line{ animation:acl-vd-in .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .12s + .08s); }
          [data-deck-active] .acl-vd__seal{ animation:acl-vd-stamp .5s cubic-bezier(.3,1.5,.5,1) both;
            animation-delay:.5s; }
          [data-deck-active] .acl-vd__chip{ animation:acl-vd-in .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .5s); }
        }
        @keyframes acl-vd-in{ from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:none; } }
        @keyframes acl-vd-stamp{ from{ opacity:0; transform:rotate(-13deg) scale(1.5); }
          to{ opacity:1; transform:rotate(-13deg) scale(1); } }
      `}),u&&ie("div",{className:"acl-vd__ghost","aria-hidden":"true",children:"\u201D"}),Ut("div",{className:"acl-vd__top",children:[ie("div",{className:"acl-vd__eyebrow",children:P}),ie("div",{className:"acl-vd__rule"}),ie("div",{className:"acl-vd__kicker",children:I})]}),d&&Ut("div",{className:"acl-vd__seal",children:[ie("div",{className:"acl-vd__sealring"}),C&&ie("div",{className:"acl-vd__sealfx",children:ie(p,{kind:"star",size:48,fill:z?"var(--acl-yellow)":"var(--acl-pink)",stroke:"var(--acl-ink)",rotate:-12,style:{position:"static"}})}),Ut("div",{className:"acl-vd__sealwrap",children:[ie("div",{className:"acl-vd__sealtop",children:D}),ie("div",{className:"acl-vd__sealdiv"}),ie("div",{className:"acl-vd__sealbot",children:q})]})]}),Ut("div",{className:"acl-vd__body",children:[ie("div",{className:"acl-vd__label",children:A}),M.map((v,m)=>{let f=g&&m===w;return Ut("h2",{className:"acl-vd__line "+(f?"acl-vd__line--punch":"acl-vd__line--set"),style:{"--i":m},children:[f?k==="underline"?ie("span",{className:"acl-vd__under",children:v}):ie("span",{className:"acl-vd__band"+(z?"":" acl-vd__band--alt"),children:v}):v,f&&C&&ie("span",{className:"acl-vd__linefx",children:ie(p,{kind:"spark",size:70,fill:z?"var(--acl-yellow)":"var(--acl-pink)",stroke:"var(--acl-ink)",rotate:10,style:{position:"static"}})})]},m)})]}),Ut("div",{className:"acl-vd__foot",children:[_&&y.length>0&&ie("div",{className:"acl-vd__supports",children:y.map((v,m)=>Ut("div",{className:"acl-vd__chip",style:{"--i":m},children:[ie("span",{className:"acl-vd__chipn",children:ie("span",{children:String(m+1).padStart(2,"0")})}),Ut("div",{className:"acl-vd__chiptxt",children:[ie("b",{children:v.name}),ie("span",{children:v.en})]})]},m))}),Ut("div",{className:"acl-vd__sign",children:[C&&ie(p,{kind:"loop",size:50,style:{position:"static"}}),ie("span",{children:N})]})]})]})}Mo.defaults={backgroundTheme:"ink",emphasisStyle:"band",showSeal:!0,showQuoteMark:!0,showSupports:!0,supportCount:3,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Closing",kicker:"收尾頁",label:"最終判斷 \xB7 Final Call",lines:["融資盛宴之後\uFF0C","真正的競爭才剛開始\u3002"],supports:[{name:"一句話判斷",en:"One-line Verdict"},{name:"低資訊密度",en:"Low Density"},{name:"階段性收束",en:"Section Closer"}],sealTop:`最終
判斷`,sealBottom:"Final Call \xB7 2024",source:"AI CAPITAL LAB \xB7 全年調研收束"};Mo.controls=[{key:"backgroundTheme",type:"enum",default:"ink",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差金句)"},{key:"emphasisStyle",type:"enum",default:"band",options:["band","underline"],label:"強調樣式",desc:"重點句強調方式\uFF1A傾斜填充色塊 / 手繪下劃線"},{key:"showSeal",type:"boolean",default:!0,label:"判定印章",desc:"右上角旋轉的圓形判定印章 顯隱"},{key:"showQuoteMark",type:"boolean",default:!0,label:"大引號",desc:"背景大號收尾引號裝飾 顯隱"},{key:"showSupports",type:"boolean",default:!0,label:"支撐要點",desc:"底部支撐要點條 顯隱"},{key:"supportCount",type:"number",default:3,min:0,max:3,step:1,showIf:"showSupports",label:"要點數量",desc:"展示的支撐要點數量(0\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一行金句\uFF08作為重點句加強調樣式\uFF09"},{key:"focusIndex",type:"number",default:1,min:0,max:1,step:1,maxFrom:"lines",label:"重點行",desc:"被強調為重點句的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪火花\u3001星標與貼紙標籤 顯隱"}];var vd=Mo.defaults,hd=Mo.controls;var qn={};Y(qn,{controls:()=>kd,default:()=>Ao,defaults:()=>yd});import"react";import{jsx as _e,jsxs as fl}from"react/jsx-runtime";function Ao(t){let l={...Ao.defaults,...t},{backgroundTheme:c,mediaCount:k,lineCount:d,showValueLabels:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,tiles:A,lines:M,closingLine:F}=l,D=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",q=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"],N=A.slice(0,Math.max(0,k)),z=N.length,L=z<=1?560:z===2?470:z===3?400:350,y=[-3,2.4,-1.8,2.6],w=["var(--acl-paper)","var(--acl-blue)","var(--acl-pink)","var(--acl-paper)"],v=M.slice(0,Math.max(1,d)),m=v.length,f=Math.min(x,m-1);return fl("div",{className:"acl-root acl-ho",style:{background:D},children:[_e("style",{children:`
        .acl-ho{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:56px 92px 50px; display:flex; flex-direction:column; }

        /* \u2500\u2500 banner: photos behind a tilted oversized headline \u2500\u2500 */
        .acl-ho__banner{ position:relative; flex:0 0 auto; }
        .acl-ho__band{ position:relative; background:var(--acl-ink); transform:rotate(-1deg);
          padding:26px 40px; box-shadow:8px 11px 0 rgba(22,21,15,.18);
          display:flex; align-items:center; justify-content:center; gap:30px; min-height:300px; }
        .acl-ho__band::before, .acl-ho__band::after{ content:''; position:absolute; left:0; right:0; height:11px;
          background:repeating-linear-gradient(90deg, var(--acl-ink) 0 16px, transparent 16px 30px); }
        .acl-ho__band::before{ top:-11px; } .acl-ho__band::after{ bottom:-11px; transform:scaleY(-1); }
        .acl-ho__pempty{ font-family:var(--acl-font-hand); font-size:34px; color:rgba(251,250,244,.55);
          padding:40px 0; }
        .acl-ho__pcell{ position:relative; transition:transform .28s; }
        .acl-ho__pidx{ position:absolute; top:-16px; left:-13px; z-index:5; font-family:var(--acl-font-num);
          width:46px; height:46px; border-radius:50%; background:var(--acl-yellow); color:var(--acl-ink);
          display:flex; align-items:center; justify-content:center; font-size:24px;
          border:3px solid var(--acl-ink); }

        .acl-ho__title{ position:absolute; left:18px; bottom:-30px; z-index:6; pointer-events:none; }
        .acl-ho__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.16em; text-transform:uppercase; color:var(--acl-ink); margin-bottom:8px;
          background:var(--acl-yellow); display:inline-block; padding:4px 12px; transform:rotate(-1.5deg);
          white-space:nowrap; }
        .acl-ho__h{ font-weight:900; font-size:108px; line-height:1; margin:0; transform:rotate(-2deg);
          display:inline-block; background:var(--acl-yellow); color:var(--acl-ink);
          padding:8px 30px 16px; box-shadow:9px 10px 0 rgba(22,21,15,.85); letter-spacing:-.01em; }
        .acl-ho__sub{ position:absolute; right:0; top:-6px; font-family:var(--acl-font-mono); font-weight:700;
          font-size:21px; padding:8px 14px; background:var(--acl-pink); color:var(--acl-paper);
          transform:rotate(2.5deg); box-shadow:3px 4px 0 rgba(22,21,15,.25); white-space:nowrap; z-index:7; }

        /* \u2500\u2500 summary band \u2500\u2500 */
        .acl-ho__summary{ flex:0 0 auto; margin:54px 0 6px auto; max-width:760px; font-weight:700;
          font-size:24px; line-height:1.42; text-align:right; text-wrap:balance; }
        .acl-ho__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; white-space:nowrap; }

        /* \u2500\u2500 mainline cards \u2500\u2500 */
        .acl-ho__cards{ flex:1; display:flex; align-items:stretch; gap:24px; margin-top:14px; min-height:0; }
        .acl-ho__card{ position:relative; flex:1; background:var(--acl-paper); border:3px solid var(--acl-ink);
          box-shadow:6px 8px 0 rgba(22,21,15,.16); padding:26px 26px 22px; display:flex; flex-direction:column;
          transition:transform .26s; overflow:hidden; }
        .acl-ho__cidx{ font-family:var(--acl-font-num); font-size:64px; line-height:.78;
          color:rgba(22,21,15,.16); }
        .acl-ho__cname{ font-weight:900; font-size:34px; line-height:1.02; margin-top:6px; }
        .acl-ho__ctag{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.55); margin-top:8px; }
        .acl-ho__cdesc{ font-weight:500; font-size:19px; line-height:1.42; color:rgba(22,21,15,.78);
          margin-top:12px; }
        .acl-ho__cval{ font-family:var(--acl-font-num); font-size:62px; line-height:.82; margin-top:auto;
          padding-top:16px; }
        .acl-ho__cval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:6px; color:rgba(22,21,15,.55); }
        .acl-ho__cbar{ position:absolute; left:0; top:0; bottom:0; width:10px; }
        .acl-ho__card--focus{ transform:translateY(-12px); background:var(--acl-ink); color:var(--acl-paper);
          z-index:4; }
        .acl-ho__card--focus .acl-ho__cidx{ color:rgba(251,250,244,.22); }
        .acl-ho__card--focus .acl-ho__ctag{ color:var(--acl-yellow); }
        .acl-ho__card--focus .acl-ho__cdesc{ color:rgba(251,250,244,.82); }
        .acl-ho__card--focus .acl-ho__cval{ color:var(--acl-yellow); }
        .acl-ho__card--focus .acl-ho__cval em{ color:rgba(251,250,244,.6); }
        .acl-ho__cfx{ position:absolute; top:-12px; right:-8px; z-index:6; }

        .acl-ho__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px; margin-top:14px;
          font-family:var(--acl-font-hand); font-size:27px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-ho__pcell{ animation:acl-ho-in .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s); }
          [data-deck-active] .acl-ho__h{ animation:acl-ho-pop .6s cubic-bezier(.3,1.2,.5,1) both .25s; }
          [data-deck-active] .acl-ho__card{ animation:acl-ho-rise .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s + .35s); }
        }
        @keyframes acl-ho-in{ from{ opacity:0; transform:translateY(26px) scale(.95); } to{ opacity:1; } }
        @keyframes acl-ho-pop{ from{ opacity:0; transform:rotate(-2deg) scale(.8); } to{ opacity:1; transform:rotate(-2deg) scale(1); } }
        @keyframes acl-ho-rise{ from{ opacity:0; transform:translateY(30px); } to{ opacity:1; } }
      `}),fl("div",{className:"acl-ho__banner",children:[fl("div",{className:"acl-ho__band",children:[z===0&&_e("div",{className:"acl-ho__pempty",children:"// 圖片數量 = 0"}),N.map((n,s)=>fl("div",{className:"acl-ho__pcell",style:{transform:`rotate(${y[s%y.length]}deg)`,"--i":s},children:[_e("div",{className:"acl-ho__pidx",children:String(s+1).padStart(2,"0")}),_e(W,{id:"ho-"+s,box:L,ratio:n.ratio||1.3,accent:w[s%w.length],placeholder:"上傳",sticker:null})]},s)),_e("div",{className:"acl-ho__sub",children:P})]}),fl("div",{className:"acl-ho__title",children:[_e("div",{className:"acl-ho__eyebrow",children:h}),_e("h1",{className:"acl-ho__h",children:C})]}),g&&_e(p,{kind:"arrowS",size:86,rotate:6,style:{right:200,bottom:-24,color:"var(--acl-ink)"}})]}),_e("div",{className:"acl-ho__summary",dangerouslySetInnerHTML:{__html:I}}),_e("div",{className:"acl-ho__cards",children:v.map((n,s)=>{let i=_&&s===f,a=q[s%q.length];return fl("div",{className:"acl-ho__card"+(i?" acl-ho__card--focus":""),style:{"--i":s},children:[_e("span",{className:"acl-ho__cbar",style:{background:a}}),i&&g&&_e("div",{className:"acl-ho__cfx",children:_e(H,{label:l.mainlineBadgeLabel,color:"var(--acl-yellow)",rotate:8})}),_e("div",{className:"acl-ho__cidx",children:String(s+1).padStart(2,"0")}),_e("div",{className:"acl-ho__cname",children:n.name}),_e("div",{className:"acl-ho__ctag",children:n.tag}),_e("div",{className:"acl-ho__cdesc",children:n.desc}),u&&fl("div",{className:"acl-ho__cval",children:[n.value,_e("em",{children:n.unit})]})]},s)})}),fl("div",{className:"acl-ho__foot",children:[g&&_e(p,{kind:"loop",size:50,style:{position:"static"}}),_e("span",{children:F}),g&&_e(p,{kind:"spark",size:34,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:6}})]})]})}Ao.defaults={images:[],backgroundTheme:"primary",mediaCount:3,lineCount:3,showValueLabels:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"2025 Outlook \xB7 Mainlines",headline:"明年的三條主線",subheadline:"展望主線",summary:"明年的資金不會平均下注\uFF0C而會沿 <b>少數幾條主線</b> 集中加註\u3002",tiles:[{name:"基礎設施現場",ratio:1.4},{name:"應用落地場景",ratio:1.2},{name:"團隊與釋出",ratio:1.5},{name:"硬體與算力",ratio:1.3}],lines:[{name:"基礎設施兌現",tag:"Infrastructure",desc:"算力\u3001資料與平臺從燒錢轉向計費交付\u3002",value:"1240",unit:"億投入"},{name:"應用層收斂",tag:"Applications",desc:"能接管可計費流程的垂直應用勝出\u3002",value:"38",unit:"% 淨留存"},{name:"具身與物理 AI",tag:"Embodied",desc:"從軟體走向硬體\uFF0C機器人與車載提速\u3002",value:"3.4",unit:"\xD7 增速"},{name:"安全與合規",tag:"Safety",desc:"評測\u3001對齊與合規成為交付前置條件\u3002",value:"92",unit:"億新增"}],closingLine:"看清主線\uFF0C比押中單點更重要\u3002",mainlineBadgeLabel:"主線"};Ao.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:4,step:1,label:"圖片數量",desc:"頂部橫幅拼貼圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"lineCount",type:"number",default:3,min:1,max:4,step:1,label:"主線數量",desc:"底部主線卡數量(1\u20134)"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"主線卡的大號數值 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一條主線"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"lineCount",step:1,label:"重點物件",desc:"被突出的主線序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var yd=Ao.defaults,kd=Ao.controls;var Pn={};Y(Pn,{controls:()=>Nd,default:()=>To,defaults:()=>wd});import vr from"react";import{jsx as ba,jsxs as xe}from"react/jsx-runtime";function To(t){let l={...To.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,focusEnabled:u,focusIndex:_,showDelta:x,showValueLabels:g,showDecor:h,eyebrow:C,headline:P,subheadline:I,summary:A,colA:M,colB:F,valueUnit:D,items:q,closingLine:N}=l,z=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-yellow)","var(--acl-pink)"],y=j(q).slice(0,Math.max(3,$(d,3))).map((r,b)=>({...r||{},name:r&&r.name||`#${b+1}`,rankA:$(r?.rankA,b),rankB:$(r?.rankB,b),valA:$(r?.valA),valB:$(r?.valB),color:L[b%L.length]})),w=y.length,v=Q(_,0,Math.max(0,w-1)),m=[...y].sort((r,b)=>r.rankA-b.rankA),f=[...y].sort((r,b)=>r.rankB-b.rankB),n={};m.forEach((r,b)=>{n[r.name]=b});let s={};f.forEach((r,b)=>{s[r.name]=b});let i=r=>($(r)+.5)/Pa(w,1)*100,a=30,e=70,o=Pa(X(y.map(r=>Math.max(r.valA,r.valB)),1),1);return xe("div",{className:"acl-root acl-bp",style:{background:z},children:[ba("style",{children:`
        .acl-bp{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 64px; display:flex; flex-direction:column; }
        .acl-bp__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-bp__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-bp__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-bp__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-bp__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-bp__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-bp__panel{ position:relative; flex:1; margin-top:30px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:30px 56px 30px; display:flex; flex-direction:column; min-height:0; }
        .acl-bp__cols{ display:flex; justify-content:space-between; font-family:var(--acl-font-mono);
          font-weight:700; font-size:20px; letter-spacing:.04em; flex:0 0 auto; }
        .acl-bp__col{ display:flex; align-items:center; gap:10px; }
        .acl-bp__col i{ font-family:var(--acl-font-num); font-size:30px; }
        .acl-bp__plot{ position:relative; flex:1; margin-top:14px; min-height:0; }
        .acl-bp__svg{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .acl-bp__node{ position:absolute; transform:translate(-50%,-50%); display:flex; align-items:center;
          z-index:2; }
        .acl-bp__dot{ width:20px; height:20px; border-radius:50%; border:3px solid var(--acl-ink);
          flex:0 0 auto; }
        .acl-bp__lab{ position:absolute; transform:translateY(-50%); z-index:3; white-space:nowrap;
          display:flex; align-items:baseline; gap:10px; transition:opacity .25s; }
        .acl-bp__lab--l{ right:71%; text-align:right; flex-direction:row-reverse; }
        .acl-bp__lab--r{ left:71%; }
        .acl-bp__rk{ font-family:var(--acl-font-num); font-size:34px; line-height:.8; color:rgba(22,21,15,.4); }
        .acl-bp__nm{ font-weight:900; font-size:27px; line-height:1; }
        .acl-bp__vl{ font-family:var(--acl-font-num); font-size:26px; line-height:.8; }
        .acl-bp__vl em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; color:rgba(22,21,15,.5); }
        .acl-bp__delta{ font-family:var(--acl-font-mono); font-weight:700; font-size:15px; padding:3px 8px;
          color:var(--acl-paper); white-space:nowrap; }
        .acl-bp__dim{ opacity:.32; }

        /* bars mode */
        .acl-bp__bars{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:16px;
          margin-top:18px; min-height:0; }
        .acl-bp__brow{ display:flex; align-items:center; gap:18px; transition:opacity .25s; }
        .acl-bp__bname{ flex:0 0 220px; font-weight:900; font-size:26px; text-align:right;
          display:flex; align-items:center; justify-content:flex-end; gap:10px; }
        .acl-bp__brk{ font-family:var(--acl-font-num); font-size:30px; color:rgba(22,21,15,.4); }
        .acl-bp__btrack{ flex:1; display:flex; flex-direction:column; gap:7px; min-width:0; }
        .acl-bp__bpair{ display:flex; align-items:center; gap:12px; }
        .acl-bp__btag{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.04em;
          color:rgba(22,21,15,.5); flex:0 0 54px; }
        .acl-bp__bbar{ height:20px; border:2.5px solid var(--acl-ink); position:relative; }
        .acl-bp__bbar.b2{ opacity:.5; }
        .acl-bp__bv{ font-family:var(--acl-font-num); font-size:22px; margin-left:9px; }
        .acl-bp__bv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:13px;
          margin-left:2px; color:rgba(22,21,15,.5); }

        .acl-bp__anno{ position:absolute; font-family:var(--acl-font-hand); font-size:27px;
          color:var(--acl-ink); z-index:5; white-space:nowrap; }
        .acl-bp__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:27px; margin-top:16px; flex:0 0 auto; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-bp__path{ stroke-dasharray:1400; stroke-dashoffset:1400;
            animation:acl-bp-draw .9s ease .15s forwards; }
          [data-deck-active] .acl-bp__node{ animation:acl-bp-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .35s); }
          [data-deck-active] .acl-bp__brow{ animation:acl-bp-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s); }
        }
        @keyframes acl-bp-draw{ to{ stroke-dashoffset:0; } }
        @keyframes acl-bp-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.5); } to{ opacity:1; } }
        @keyframes acl-bp-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; transform:none; } }
      `}),xe("div",{className:"acl-bp__head",children:[xe("div",{children:[ba("div",{className:"acl-bp__eyebrow",children:C}),ba("h1",{className:"acl-bp__h",children:P})]}),ba("div",{className:"acl-bp__sub",children:I}),ba("div",{className:"acl-bp__summary",dangerouslySetInnerHTML:{__html:A}})]}),xe("div",{className:"acl-bp__panel",children:[xe("div",{className:"acl-bp__cols",children:[xe("span",{className:"acl-bp__col",children:[ba("i",{children:M.num}),M.label]}),xe("span",{className:"acl-bp__col",children:[F.label,ba("i",{children:F.num})]})]}),k==="slope"?xe("div",{className:"acl-bp__plot",children:[ba("svg",{className:"acl-bp__svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:y.map((r,b)=>{let R=u&&b===v;return ba("path",{className:"acl-bp__path",d:`M ${a} ${i(n[r.name])} C 50 ${i(n[r.name])}, 50 ${i(s[r.name])}, ${e} ${i(s[r.name])}`,fill:"none",stroke:r.color,strokeWidth:R?6:3.5,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",opacity:u&&!R?.3:1},b)})}),m.map((r,b)=>{let R=y.findIndex(T=>T.name===r.name),E=u&&R===v;return xe(vr.Fragment,{children:[xe("div",{className:"acl-bp__lab acl-bp__lab--l"+(u&&!E?" acl-bp__dim":""),style:{top:`${i(b)}%`},children:[ba("span",{className:"acl-bp__rk",children:String(r.rankA).padStart(2,"0")}),ba("span",{className:"acl-bp__nm",children:r.name}),g&&xe("span",{className:"acl-bp__vl",children:[r.valA,ba("em",{children:D})]})]}),ba("div",{className:"acl-bp__node",style:{left:`${a}%`,top:`${i(b)}%`,"--i":b},children:ba("span",{className:"acl-bp__dot",style:{background:y[R].color}})})]},"a"+b)}),f.map((r,b)=>{let R=y.findIndex(B=>B.name===r.name),E=u&&R===v,T=r.rankA-r.rankB;return xe(vr.Fragment,{children:[ba("div",{className:"acl-bp__node",style:{left:`${e}%`,top:`${i(b)}%`,"--i":b},children:ba("span",{className:"acl-bp__dot",style:{background:y[R].color}})}),xe("div",{className:"acl-bp__lab acl-bp__lab--r"+(u&&!E?" acl-bp__dim":""),style:{top:`${i(b)}%`},children:[ba("span",{className:"acl-bp__nm",children:r.name}),g&&xe("span",{className:"acl-bp__vl",children:[r.valB,ba("em",{children:D})]}),x&&ba("span",{className:"acl-bp__delta",style:{background:T>0?"var(--acl-red)":T<0?"var(--acl-blue)":"rgba(22,21,15,.5)"},children:T>0?"\u25B2"+T:T<0?"\u25BC"+-T:"\u2014"})]})]},"b"+b)})]}):ba("div",{className:"acl-bp__bars",children:f.map((r,b)=>{let R=y.findIndex(T=>T.name===r.name);return xe("div",{className:"acl-bp__brow"+(u&&!(u&&R===v)?" acl-bp__dim":""),style:{"--i":b},children:[xe("div",{className:"acl-bp__bname",children:[ba("span",{className:"acl-bp__brk",children:String(b+1).padStart(2,"0")}),r.name]}),xe("div",{className:"acl-bp__btrack",children:[xe("div",{className:"acl-bp__bpair",children:[ba("span",{className:"acl-bp__btag",children:M.num}),ba("div",{className:"acl-bp__bbar b2",style:{width:`${r.valA/o*100}%`,background:"rgba(22,21,15,.35)"}}),g&&ba("span",{className:"acl-bp__bv",style:{opacity:.6},children:r.valA})]}),xe("div",{className:"acl-bp__bpair",children:[ba("span",{className:"acl-bp__btag",children:F.num}),ba("div",{className:"acl-bp__bbar",style:{width:`${r.valB/o*100}%`,background:y[R].color}}),g&&xe("span",{className:"acl-bp__bv",children:[r.valB,ba("em",{children:D})]})]})]})]},b)})})]}),xe("div",{className:"acl-bp__foot",children:[h&&ba(p,{kind:"loop",size:52,style:{position:"static"}}),ba("span",{children:N})]})]})}To.defaults={backgroundTheme:"muted",chartType:"slope",segmentCount:5,focusEnabled:!0,focusIndex:0,showDelta:!0,showValueLabels:!0,showDecor:!0,eyebrow:"Heat Migration",headline:"賽道熱度遷移",subheadline:"2024 \u2192 2025E 關注度排名",summary:"資金關注度從 <b>純敘事</b> 向 <b>能兌現的基礎設施與應用</b> 遷移\u3002",colA:{num:"2024",label:"實際排名"},colB:{num:"2025E",label:"預期排名"},valueUnit:"分",items:[{name:"通用大模型",rankA:1,rankB:3,valA:95,valB:78},{name:"基礎設施",rankA:3,rankB:1,valA:74,valB:91},{name:"垂直應用",rankA:4,rankB:2,valA:66,valB:85},{name:"AI 晶片",rankA:2,rankB:4,valA:80,valB:70},{name:"具身智慧",rankA:6,rankB:5,valA:41,valB:58},{name:"內容生成",rankA:5,rankB:6,valA:52,valB:44}],closingLine:"排名的交叉點\uFF0C就是資本敘事換擋的位置\u3002"};To.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"slope",options:["slope","bars"],label:"圖表型別",desc:"遷移呈現\uFF1A斜率連線(排名遷移) / 成對條形(兩期對比)"},{key:"segmentCount",type:"number",default:5,min:3,max:6,step:1,label:"條目數量",desc:"參與排名遷移的賽道數量(3\u20136)"},{key:"showDelta",type:"boolean",default:!0,label:"變化徽標",desc:"右側排名升降徽標 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"兩端的熱度分值 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一條遷移軌跡(其餘淡化)"},{key:"focusIndex",type:"number",default:0,min:0,max:5,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的條目序號(從 0 起\uFF0C按內容順序)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var wd=To.defaults,Nd=To.controls;var $n={};Y($n,{controls:()=>Ed,default:()=>Do,defaults:()=>zd});import"react";import{jsx as Pe,jsxs as gl}from"react/jsx-runtime";function Do(t){let l={...Do.defaults,...t},{backgroundTheme:c,cardCount:k,focusEnabled:d,focusIndex:u,showValue:_,showTag:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,cards:A,closingLine:M}=l,F=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",D=Math.min(A.length,Math.max(1,Number(k)||1)),q=A.slice(0,D),N=q.length,z=Math.min(u,Math.max(0,N-1)),L=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"],y=N<=1?720:N===2?560:N===3?472:384,w=Math.min(y,470),v=[-2.5,1.8,-1.6,2.2];return gl("div",{className:"acl-root acl-pc",style:{background:F},children:[Pe("style",{children:`
        .acl-pc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:66px 100px 54px; display:flex; flex-direction:column; }
        .acl-pc__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-pc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:8px; }
        .acl-pc__h{ font-weight:900; font-size:76px; line-height:.94; margin:0; }
        .acl-pc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-pc__summary{ margin-left:auto; max-width:470px; font-weight:700; font-size:23px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-pc__row{ flex:1; display:flex; align-items:center; justify-content:center; gap:36px;
          margin-top:18px; min-height:0; }
        .acl-pc__col{ position:relative; display:flex; flex-direction:column; align-items:center;
          transition:transform .28s; }
        .acl-pc__imgwrap{ display:flex; align-items:flex-end; justify-content:center; }
        .acl-pc__idx{ position:absolute; top:-22px; left:-14px; z-index:5; font-family:var(--acl-font-num);
          width:64px; height:64px; border-radius:50%; background:var(--acl-ink); color:var(--acl-paper);
          display:flex; align-items:center; justify-content:center; font-size:34px;
          border:3px solid var(--acl-paper); box-shadow:3px 4px 0 rgba(22,21,15,.25); }
        .acl-pc__plate{ position:relative; margin-top:-2px; background:var(--acl-ink); color:var(--acl-paper);
          padding:16px 22px 18px; box-shadow:5px 7px 0 rgba(22,21,15,.2); z-index:3; }
        .acl-pc__ptop{ display:flex; align-items:baseline; gap:12px; }
        .acl-pc__pname{ font-weight:900; font-size:30px; line-height:1; }
        .acl-pc__ptag{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; padding:3px 8px; background:var(--acl-yellow); color:var(--acl-ink);
          white-space:nowrap; margin-left:auto; }
        .acl-pc__pdesc{ font-weight:500; font-size:18px; line-height:1.4; color:rgba(255,255,255,.78);
          margin-top:8px; }
        .acl-pc__pval{ font-family:var(--acl-font-num); font-size:50px; line-height:.82; margin-top:10px;
          color:var(--acl-yellow); }
        .acl-pc__pval em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:5px; color:rgba(255,255,255,.6); }
        .acl-pc__col--focus{ transform:translateY(-14px) scale(1.035); z-index:6; }
        .acl-pc__col--focus .acl-pc__plate{ background:var(--acl-pink); }
        .acl-pc__col--focus .acl-pc__ptag{ background:var(--acl-ink); color:var(--acl-yellow); }
        .acl-pc__col--focus .acl-pc__pval{ color:var(--acl-paper); }
        .acl-pc__cfx{ position:absolute; top:-26px; right:-16px; z-index:7; }

        .acl-pc__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-hand); font-size:27px; margin-top:12px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pc__col{ animation:acl-pc-rise .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .1s); }
        }
        @keyframes acl-pc-rise{ from{ opacity:0; transform:translateY(34px); } to{ opacity:1; } }
      `}),gl("div",{className:"acl-pc__head",children:[gl("div",{children:[Pe("div",{className:"acl-pc__eyebrow",children:h}),Pe("h1",{className:"acl-pc__h",children:C})]}),Pe("div",{className:"acl-pc__sub",children:P}),Pe("div",{className:"acl-pc__summary",dangerouslySetInnerHTML:{__html:I}})]}),Pe("div",{className:"acl-pc__row",children:q.map((m,f)=>{let n=d&&f===z;return gl("div",{className:"acl-pc__col"+(n?" acl-pc__col--focus":""),style:{width:y,transform:n?void 0:`rotate(${v[f%v.length]}deg)`,"--i":f},children:[Pe("div",{className:"acl-pc__idx",children:String(f+1).padStart(2,"0")}),n&&g&&Pe("div",{className:"acl-pc__cfx",children:Pe(H,{label:l.templateBadgeLabel,color:"var(--acl-yellow)",rotate:8})}),Pe("div",{className:"acl-pc__imgwrap",style:{width:w,height:w},children:Pe(W,{id:"pc-"+f,box:w,ratio:.72,accent:n?"var(--acl-pink)":"var(--acl-paper)",placeholder:"上傳",sticker:null})}),gl("div",{className:"acl-pc__plate",style:{width:y},children:[gl("div",{className:"acl-pc__ptop",children:[Pe("span",{className:"acl-pc__pname",children:m.name}),x&&Pe("span",{className:"acl-pc__ptag",children:m.tag})]}),Pe("div",{className:"acl-pc__pdesc",children:m.desc}),_&&gl("div",{className:"acl-pc__pval",children:[m.value,Pe("em",{children:m.unit})]})]})]},f)})}),gl("div",{className:"acl-pc__foot",children:[g&&Pe(p,{kind:"loop",size:52,style:{position:"static"}}),Pe("span",{children:M}),g&&N>0&&Pe(p,{kind:"spark",size:36,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:8}})]})]})}Do.defaults={images:[],backgroundTheme:"muted",cardCount:3,focusEnabled:!0,focusIndex:1,showValue:!0,showTag:!0,showDecor:!0,eyebrow:"2025 Playbooks \xB7 How It Lands",headline:"落地樣板間",subheadline:"三類可複製路徑",summary:"能被複制的不是敘事\uFF0C而是 <b>可交付\u3001可計費\u3001可留存</b> 的落地路徑\u3002",cards:[{name:"嵌入工作流",tag:"Workflow",desc:"接管可計費流程\uFF0C而不是停在對話方塊\u3002",value:"118",unit:"% 淨留存"},{name:"量化降本",tag:"ROI",desc:"工單時長與人力成本可被直接量化\u3002",value:"41",unit:"% 時長\u2193"},{name:"資源繫結",tag:"Resource",desc:"雲額度\u3001晶片與渠道一併鎖定\u3002",value:"118",unit:"億授信"},{name:"存量延展",tag:"Expansion",desc:"把 AI 能力賣給已有企業客戶\u3002",value:"132",unit:"% 淨留存"}],closingLine:"可複製的路徑\uFF0C才是模板的價值所在\u3002",templateBadgeLabel:"樣板"};Do.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"cardCount",type:"number",default:3,min:1,max:4,step:1,label:"海報數量",desc:"豎向海報列數量(1\u20134)\uFF1B每列含一個圖片槽\uFF0C列寬隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showValue",type:"boolean",default:!0,label:"數值標籤",desc:"每張海報底牌的大號數值 顯隱"},{key:"showTag",type:"boolean",default:!0,label:"型別標籤",desc:"每張海報的型別標籤 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一張海報"},{key:"focusIndex",type:"number",default:1,min:0,max:3,maxFrom:"cardCount",step:1,label:"重點物件",desc:"被突出的海報序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var zd=Do.defaults,Ed=Do.controls;var Bn={};Y(Bn,{controls:()=>Fd,default:()=>ol,defaults:()=>Cd});import Jo from"react";import{jsx as be,jsxs as Wt}from"react/jsx-runtime";function ol(t){let l={...ol.defaults,...t},{backgroundTheme:c,numberStyle:k,showRing:d,gaugePct:u,metricCount:_,showDecor:x,eyebrow:g,kicker:h,label:C,bigNumber:P,bigUnit:I,caption:A,metrics:M,source:F,yearStickerValue:D,yearStickerSub:q}=l,N=c==="ink",z=N?"radial-gradient(125% 125% at 50% 8%, #2A2820 0%, #16150F 60%, #100F0A 100%)":c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",L=k==="outline",y=M.slice(0,Math.max(2,_)),w=parseFloat(P),v=Number(u),m=I==="%"&&Number.isFinite(w),f=parseFloat(ol.defaults.bigNumber),n=Number(ol.defaults.gaugePct),s=m&&w!==f&&v===n?"number":"gauge",[i,a]=Jo.useState(s),e=Jo.useRef({bigNumber:P,bigUnit:I,gaugePct:u});Jo.useEffect(()=>{let V=e.current,O=String(V.bigNumber)!==String(P)||V.bigUnit!==I,U=Number(V.gaugePct)!==Number(u);O&&!U&&m?a("number"):U&&a("gauge"),e.current={bigNumber:P,bigUnit:I,gaugePct:u}},[P,I,u,m]);let o=m&&i==="number",r=o?w:Number.isFinite(v)?v:w,b=Math.max(0,Math.min(100,Number.isFinite(r)?r:0)),R=m?o?P:String(Math.round(b)):P,E=360,T=30,B=2*Math.PI*E,S=N?"var(--acl-yellow)":"var(--acl-pink)";return Wt("div",{className:"acl-root acl-gg"+(N?" acl-gg--ink":""),style:{background:z},children:[be("style",{children:`
        .acl-gg{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 110px 64px; display:flex; flex-direction:column; }
        .acl-gg--ink{ color:var(--acl-paper); }
        .acl-gg__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; z-index:3; }
        .acl-gg__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-gg--ink .acl-gg__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-gg__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-gg__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg); white-space:nowrap; }
        .acl-gg--ink .acl-gg__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-gg__body{ flex:1; display:flex; align-items:center; justify-content:center; min-height:0;
          position:relative; }
        .acl-gg__stage{ position:relative; width:760px; height:760px; display:grid; place-items:center;
          flex:0 0 auto; }
        .acl-gg__svg{ position:absolute; inset:0; transform:rotate(-90deg); }
        .acl-gg__track{ fill:none; stroke:rgba(22,21,15,.14); stroke-width:${T}; }
        .acl-gg--ink .acl-gg__track{ stroke:rgba(251,250,244,.16); }
        .acl-gg__prog{ fill:none; stroke:${S}; stroke-width:${T}; stroke-linecap:round;
          stroke-dasharray:${B}; stroke-dashoffset:${B*(1-b/100)}; filter:drop-shadow(4px 5px 0 rgba(22,21,15,.18)); }
        .acl-gg__tick{ position:absolute; top:18px; left:50%; transform:translateX(-50%);
          font-family:var(--acl-font-mono); font-weight:700; font-size:18px; letter-spacing:.12em;
          background:var(--acl-ink); color:var(--acl-yellow); padding:5px 12px; }
        .acl-gg--ink .acl-gg__tick{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-gg__center{ position:relative; z-index:2; display:flex; flex-direction:column;
          align-items:center; text-align:center; }
        .acl-gg__label{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          letter-spacing:.1em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:14px; }
        .acl-gg--ink .acl-gg__label{ color:rgba(251,250,244,.55); }
        .acl-gg__numrow{ display:flex; align-items:flex-start; gap:14px; }
        .acl-gg__num{ font-family:var(--acl-font-num); font-size:248px; line-height:.78; letter-spacing:-.03em;
          color:${S}; text-shadow:6px 7px 0 var(--acl-ink); }
        .acl-gg--ink .acl-gg__num{ text-shadow:6px 7px 0 rgba(0,0,0,.5); }
        .acl-gg__num--outline{ color:transparent; -webkit-text-stroke:5px ${N?"var(--acl-yellow)":"var(--acl-ink)"};
          text-shadow:none; }
        .acl-gg__unit{ font-family:var(--acl-font-cn); font-weight:900; font-size:60px; line-height:1; margin-top:22px; }
        .acl-gg__cap{ font-weight:700; font-size:24px; line-height:1.45; max-width:460px; margin-top:14px;
          text-wrap:balance; }
        .acl-gg__cap b{ background:var(--acl-blue); padding:0 .12em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-gg--ink .acl-gg__cap b{ background:var(--acl-pink); color:var(--acl-paper); }
        .acl-gg__sidefx{ position:absolute; z-index:3; }

        .acl-gg__tiles{ flex:0 0 auto; display:flex; gap:20px; z-index:3; margin-top:8px; }
        .acl-gg__tile{ flex:1 1 0; border-top:5px solid var(--acl-ink); padding-top:14px;
          display:flex; align-items:baseline; justify-content:space-between; gap:18px; }
        .acl-gg--ink .acl-gg__tile{ border-color:var(--acl-yellow); }
        .acl-gg__tk{ font-family:var(--acl-font-cn); font-weight:900; font-size:27px; line-height:1;
          color:rgba(22,21,15,.62); }
        .acl-gg--ink .acl-gg__tk{ color:rgba(251,250,244,.72); }
        .acl-gg__tv{ font-family:var(--acl-font-num); font-size:64px; line-height:.9; white-space:nowrap; }
        .acl-gg--ink .acl-gg__tv{ color:var(--acl-yellow); }
        .acl-gg__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:20px;
          margin-left:5px; color:rgba(22,21,15,.55); }
        .acl-gg--ink .acl-gg__tv em{ color:rgba(251,250,244,.55); }

        .acl-gg__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px; margin-top:20px; z-index:3;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em; color:rgba(22,21,15,.55); }
        .acl-gg--ink .acl-gg__foot{ color:rgba(251,250,244,.55); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-gg__prog{ animation:acl-gg-sweep 1.1s cubic-bezier(.3,.9,.3,1) both .2s; }
          [data-deck-active] .acl-gg__num{ animation:acl-gg-pop .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-gg__tile{ animation:acl-gg-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .35s); }
        }
        @keyframes acl-gg-sweep{ from{ stroke-dashoffset:${B}; } to{ stroke-dashoffset:${B*(1-b/100)}; } }
        @keyframes acl-gg-pop{ from{ opacity:0; transform:translateY(20px) scale(.94); } to{ opacity:1; transform:none; } }
        @keyframes acl-gg-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; transform:none; } }
      `}),Wt("div",{className:"acl-gg__top",children:[be("div",{className:"acl-gg__eyebrow",children:g}),be("div",{className:"acl-gg__rule"}),be("div",{className:"acl-gg__kicker",children:h})]}),be("div",{className:"acl-gg__body",children:Wt("div",{className:"acl-gg__stage",children:[d&&be(Jo.Fragment,{children:Wt("svg",{className:"acl-gg__svg",viewBox:"0 0 800 800","aria-hidden":"true",children:[be("circle",{className:"acl-gg__track",cx:"400",cy:"400",r:E}),be("circle",{className:"acl-gg__prog",cx:"400",cy:"400",r:E})]})}),x&&Wt(Jo.Fragment,{children:[be(p,{kind:"spark",size:64,rotate:-12,fill:N?"var(--acl-yellow)":"var(--acl-pink)",stroke:"var(--acl-ink)",style:{left:-10,top:120,zIndex:3}}),be(p,{kind:"star",size:48,rotate:10,fill:"var(--acl-blue)",stroke:"var(--acl-ink)",style:{right:0,bottom:150,zIndex:3}})]}),Wt("div",{className:"acl-gg__center",children:[be("div",{className:"acl-gg__label",children:C}),Wt("div",{className:"acl-gg__numrow",children:[be("span",{className:"acl-gg__num"+(L?" acl-gg__num--outline":""),children:R}),be("span",{className:"acl-gg__unit",children:I})]}),be("div",{className:"acl-gg__cap",dangerouslySetInnerHTML:{__html:A}})]}),x&&be("div",{className:"acl-gg__sidefx",style:{right:-34,top:40},children:be(H,{label:D,sub:q,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",rotate:6})})]})}),be("div",{className:"acl-gg__tiles",children:y.map((V,O)=>Wt("div",{className:"acl-gg__tile",style:{"--i":O},children:[be("div",{className:"acl-gg__tk",children:V.k}),Wt("div",{className:"acl-gg__tv",children:[V.v,be("em",{children:V.unit})]})]},O))}),Wt("div",{className:"acl-gg__foot",children:[x&&be(p,{kind:"loop",size:46,color:N?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}}),be("span",{children:F})]})]})}ol.defaults={backgroundTheme:"ink",numberStyle:"solid",showRing:!0,gaugePct:67,metricCount:3,showDecor:!0,eyebrow:"One Number \xB7 2025 展望",kicker:"大數字",yearStickerValue:"2025",yearStickerSub:"一個數字",label:"資本嚮應用層遷移的比例",bigNumber:"67",bigUnit:"%",caption:"2025 年新增 AI 資本預計有 <b>三分之二</b> 流向能直接計費的應用與垂直層\u3002",metrics:[{k:"應用層佔比",v:"67",unit:"%"},{k:"基礎設施",v:"24",unit:"%"},{k:"模型層",v:"9",unit:"%"}],source:"資料口徑\uFF1A2025 資本流向模擬 \xB7 AI CAPITAL LAB"};ol.controls=[{key:"backgroundTheme",type:"enum",default:"ink",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差大數字)"},{key:"numberStyle",type:"enum",default:"solid",options:["solid","outline"],label:"數字樣式",desc:"巨型數字\uFF1A實心(帶投影) / 描邊(空心輪廓)"},{key:"showRing",type:"boolean",default:!0,label:"環形儀表",desc:"數字外圈的環形進度儀表 顯隱"},{key:"gaugePct",type:"number",default:67,min:0,max:100,step:1,showIf:"showRing",label:"儀表百分比",desc:"中心數字與環形儀表共用的百分比\uFF1B拖曳會同步中心數字\uFF0C編輯中心百分比也會帶動圓環"},{key:"metricCount",type:"number",default:3,min:2,max:3,step:1,label:"指標數量",desc:"底部支撐指標格數量(2\u20133)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪箭頭\u3001火花與貼紙標籤 顯隱"}];var Cd=ol.defaults,Fd=ol.controls;var Vn={};Y(Vn,{controls:()=>Id,default:()=>Ro,defaults:()=>Ld});import Sd from"react";import{jsx as He,jsxs as il}from"react/jsx-runtime";function Ro(t){let l={...Ro.defaults,...t},{backgroundTheme:c,mediaCount:k,tagCount:d,metricCount:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,lead:I,tags:A,metrics:M,collage:F,closingLine:D}=l,q=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",N=A.slice(0,Math.max(2,d)),z=M.slice(0,Math.max(2,u)),L=Math.max(0,Math.min(Number(x)||0,N.length-1)),y=F[k]||[],w=y.length>0,v=["acl-root","acl-hs",w?"":"acl-hs--no-media"].filter(Boolean).join(" ");return il("div",{className:v,style:{background:q},children:[He("style",{children:`
        .acl-hs{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 96px 58px; display:flex; gap:56px; }
        .acl-hs__left{ flex:0 0 44%; display:flex; flex-direction:column; min-width:0; z-index:3;
          padding-bottom:58px; }
        .acl-hs__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55);
          display:flex; align-items:center; gap:14px; }
        .acl-hs__eyebrow .acl-hs__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:16px;
          letter-spacing:.04em; padding:6px 12px; background:var(--acl-ink); color:var(--acl-yellow);
          transform:rotate(-2deg); text-transform:uppercase;  white-space:nowrap;}
        .acl-hs__h{ font-weight:900; font-size:104px; line-height:.9; margin:18px 0 0; letter-spacing:-.01em;
          text-wrap:balance; }
        .acl-hs__lead{ font-weight:700; font-size:26px; line-height:1.46; margin-top:26px; max-width:760px;
          text-wrap:pretty; }
        .acl-hs__lead b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; }
        .acl-hs__chips{ display:flex; flex-wrap:wrap; gap:12px; margin-top:30px; }
        .acl-hs__chip{ font-family:var(--acl-font-mono); font-weight:700; font-size:17px; letter-spacing:.03em;
          padding:9px 16px; background:var(--acl-paper); border:2.5px solid var(--acl-ink);
          box-shadow:3px 4px 0 rgba(22,21,15,.16); display:flex; align-items:baseline; gap:8px;
          transition:transform .25s, background .25s; }
        .acl-hs__chip i{ font-family:var(--acl-font-num); font-style:normal; font-size:15px;
          color:rgba(22,21,15,.5); }
        .acl-hs__chip--focus{ background:var(--acl-pink); color:var(--acl-paper); transform:translateY(-3px) rotate(-2deg); }
        .acl-hs__chip--focus i{ color:rgba(255,255,255,.7); }
        .acl-hs__tiles{ display:grid; grid-template-columns:repeat(auto-fit,minmax(148px,1fr));
          gap:10px; margin-top:auto; padding-top:22px; max-width:690px; }
        .acl-hs__tile{ min-height:86px; padding:13px 16px 12px; border:2.5px solid var(--acl-ink);
          background:rgba(251,250,244,.82); box-shadow:3px 4px 0 rgba(22,21,15,.14);
          display:flex; flex-direction:column; justify-content:center; min-width:0; }
        .acl-hs__tk{ font-family:var(--acl-font-mono); font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-hs__tv{ font-family:var(--acl-font-num); font-size:50px; line-height:.9; margin-top:4px;
          display:flex; align-items:flex-end; gap:4px; white-space:nowrap; }
        .acl-hs__tv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:18px;
          margin-left:0; line-height:1.1; color:rgba(22,21,15,.55); }

        .acl-hs__stage{ flex:1; position:relative; min-width:0; }
        .acl-hs__slot{ position:absolute; }
        .acl-hs__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          font-family:var(--acl-font-hand); font-size:40px; color:rgba(22,21,15,.4); transform:rotate(-4deg); }
        .acl-hs--no-media .acl-hs__left{ flex:1 1 auto; max-width:none; padding-right:72px; }
        .acl-hs--no-media .acl-hs__h{ max-width:1180px; font-size:112px; }
        .acl-hs--no-media .acl-hs__lead{ max-width:1120px; font-size:29px; }
        .acl-hs--no-media .acl-hs__chips{ max-width:1120px; }
        .acl-hs--no-media .acl-hs__tiles{ max-width:860px; }

        .acl-hs__foot{ position:absolute; left:96px; bottom:24px; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-hand); font-size:27px; z-index:4; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-hs__h{ animation:acl-hs-rise .6s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-hs__chip{ animation:acl-hs-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .07s + .2s); }
          [data-deck-active] .acl-hs__slot{ animation:acl-hs-pop .6s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--s,0) * .1s + .15s); }
        }
        @keyframes acl-hs-rise{ from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:none; } }
        @keyframes acl-hs-pop{ from{ opacity:0; transform:scale(.92); } to{ opacity:1; transform:none; } }
      `}),il("div",{className:"acl-hs__left",children:[il("div",{className:"acl-hs__eyebrow",children:[He("span",{children:h}),He("span",{className:"acl-hs__sub",children:P})]}),He("h1",{className:"acl-hs__h",children:C}),He("div",{className:"acl-hs__lead",dangerouslySetInnerHTML:{__html:I}}),He("div",{className:"acl-hs__chips",children:N.map((m,f)=>il("span",{className:"acl-hs__chip"+(_&&f===L?" acl-hs__chip--focus":""),style:{"--i":f},children:[He("i",{children:String(f+1).padStart(2,"0")}),m]},f))}),He("div",{className:"acl-hs__tiles",children:z.map((m,f)=>il("div",{className:"acl-hs__tile",children:[He("div",{className:"acl-hs__tk",children:m.k}),il("div",{className:"acl-hs__tv",children:[m.v,m.unit&&He("em",{children:m.unit})]})]},f))})]}),w&&il("div",{className:"acl-hs__stage",children:[y.map((m,f)=>He("div",{className:"acl-hs__slot",style:{left:m.l,top:m.t,"--s":f,zIndex:m.z||1},children:He(W,{id:"hs-"+f,box:m.box,rotate:m.r,ratio:m.ratio,accent:f===0?"var(--acl-paper)":m.color,placeholder:"上傳",sticker:f===0?{label:m.cap,color:"var(--acl-yellow)",subColor:"var(--acl-ink)",sub:"A",rotate:-4}:null})},f)),g&&il(Sd.Fragment,{children:[He(p,{kind:"arrow",size:90,rotate:158,color:"var(--acl-ink)",style:{left:-28,top:30}}),He(p,{kind:"spark",size:40,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{right:6,top:-6}}),He(p,{kind:"heart",size:38,rotate:-8,fill:"var(--acl-pink)",stroke:"var(--acl-ink)",style:{right:60,bottom:24}})]})]}),il("div",{className:"acl-hs__foot",children:[g&&He(p,{kind:"loop",size:52,style:{position:"static"}}),He("span",{children:D})]})]})}Ro.defaults={images:[],backgroundTheme:"muted",mediaCount:3,tagCount:4,metricCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Field Guide \xB7 2025",subheadline:"How to Enter",headline:"進入 AI 資本市場",lead:"不再是\u300C投不投\u300D\uFF0C而是<b>怎麼進\u3001何時進\u3001繫結什麼資源</b>\u2014\u2014入場方式比方向更決定回報\u3002",tags:["看兌現而非敘事","繫結算力與渠道","階段錯位佈局","盯緊毛利結構","關注退出路徑"],metrics:[{k:"可入場視窗",v:"18",unit:"個月"},{k:"建議配置",v:"60",unit:"% 兌現"},{k:"觀察賽道",v:"12",unit:"類"}],collage:{0:[],1:[{l:60,t:70,box:600,r:-2,ratio:.92,z:2,cap:"主視覺",color:"var(--acl-yellow)"}],2:[{l:210,t:20,box:460,r:-2,ratio:.96,z:2,cap:"主視覺",color:"var(--acl-yellow)"},{l:10,t:390,box:380,r:4,ratio:1.18,z:3,cap:"場景",color:"var(--acl-blue)"}],3:[{l:235,t:20,box:410,r:-2,ratio:.96,z:2,cap:"主視覺",color:"var(--acl-yellow)"},{l:0,t:300,box:350,r:4,ratio:1.18,z:3,cap:"場景",color:"var(--acl-blue)"},{l:365,t:430,box:340,r:-5,ratio:.9,z:3,cap:"團隊",color:"var(--acl-pink)"}]},closingLine:"入場方式\uFF0C本身就是一種判斷\u3002"};Ro.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:3,min:0,max:3,step:1,label:"圖片數量",desc:"主視覺+裁切配圖槽數量(0\u20133)\uFF1B為 0 時收起圖片區\uFF0C文字內容全寬自適應\uFF1B每槽按上傳圖片比例自適應"},{key:"tagCount",type:"number",default:4,min:2,max:5,step:1,label:"要點標籤數量",desc:"左欄要點標籤數量(2\u20135)"},{key:"metricCount",type:"number",default:3,min:2,max:4,step:1,label:"指標數量",desc:"左欄底部支撐指標格數量(2\u20134)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一個要點標籤"},{key:"focusIndex",type:"number",default:0,min:0,max:4,maxFrom:"tagCount",step:1,label:"重點物件",desc:"被突出的標籤序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Ld=Ro.defaults,Id=Ro.controls;var Hn={};Y(Hn,{controls:()=>Ad,default:()=>qo,defaults:()=>Md});import"react";import{jsx as oa,jsxs as Le}from"react/jsx-runtime";function qo(t){let l={...qo.defaults,...t},{backgroundTheme:c,chartType:k,segmentCount:d,showBaseline:u,showValueLabels:_,showDelta:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,lowLabel:F,highLabel:D,valueUnit:q,refValue:N,refLabel:z,items:L,closingLine:y,spreadLegendLabel:w,insightStickerLabel:v}=l,m=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",f=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-pink)","var(--acl-blue)"],n=j(L).slice(0,Math.max(3,$(d,3))).map((o,r)=>({...o||{},low:$(o?.low),high:$(o?.high),color:f[r%f.length]})),s=n.length,i=Q(h,0,Math.max(0,s-1)),a=X([...n.map(o=>o.high),$(N)],1)*1.06||1,e=o=>G($(o),a)*100;return Le("div",{className:"acl-root acl-db",style:{background:m},children:[oa("style",{children:`
        .acl-db{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:74px 100px 60px; display:flex; flex-direction:column; }
        .acl-db__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-db__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-db__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-db__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-db__summary{ margin-left:auto; max-width:500px; font-weight:700; font-size:23px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-db__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-db__panel{ position:relative; flex:1; margin-top:28px; background:var(--acl-paper);
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16);
          padding:24px 60px 22px 44px; display:flex; flex-direction:column; min-height:0; }
        .acl-db__legend{ display:flex; align-items:center; gap:26px; flex:0 0 auto;
          font-family:var(--acl-font-mono); font-weight:700; font-size:15px; letter-spacing:.04em;
          text-transform:uppercase; color:rgba(22,21,15,.6); padding-left:240px; }
        .acl-db__lg{ display:flex; align-items:center; gap:9px; }
        .acl-db__lgdot{ width:18px; height:18px; border-radius:50%; border:3px solid var(--acl-ink); }
        .acl-db__lgbar{ width:36px; height:9px; background:var(--acl-ink); }

        .acl-db__rows{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:14px;
          margin-top:8px; min-height:0; }
        .acl-db__row{ display:flex; align-items:center; gap:44px; transition:opacity .25s; }
        .acl-db__dim{ opacity:.34; }
        .acl-db__name{ flex:0 0 196px; text-align:right; display:flex; flex-direction:column; align-items:flex-end; }
        .acl-db__nm{ font-weight:900; font-size:30px; line-height:1.04; }
        .acl-db__nt{ font-family:var(--acl-font-mono); font-size:13px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:3px; }
        .acl-db__track{ flex:1; position:relative; height:54px; }
        .acl-db__axis{ position:absolute; left:0; right:0; top:50%; height:3px;
          background:rgba(22,21,15,.12); transform:translateY(-50%); }
        .acl-db__ref{ position:absolute; top:-4px; bottom:-4px; width:0; border-left:3px dashed rgba(22,21,15,.4);
          z-index:1; }
        .acl-db__reflab{ position:absolute; top:-30px; transform:translateX(-50%); white-space:nowrap;
          font-family:var(--acl-font-mono); font-weight:700; font-size:12px; letter-spacing:.04em;
          color:rgba(22,21,15,.55); }
        .acl-db__bar{ position:absolute; top:50%; height:14px; transform:translateY(-50%);
          background:var(--acl-ink); border-radius:7px; z-index:2; transition:filter .25s; }
        .acl-db__dot{ position:absolute; top:50%; width:30px; height:30px; border-radius:50%;
          border:4px solid var(--acl-ink); transform:translate(-50%,-50%); z-index:3; }
        .acl-db__dot--lo{ background:var(--acl-paper); }
        .acl-db__vl{ position:absolute; top:50%; transform:translateY(-50%); z-index:4;
          font-family:var(--acl-font-num); font-size:31px; white-space:nowrap; }
        .acl-db__vl--lo{ text-align:right; transform:translate(-100%,-50%); padding-right:24px;
          color:rgba(22,21,15,.6); }
        .acl-db__vl--hi{ padding-left:24px; }
        .acl-db__vl em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:17px;
          margin-left:3px; color:rgba(22,21,15,.5); }
        .acl-db__delta{ flex:0 0 auto; font-family:var(--acl-font-num); font-size:40px; line-height:.9;
          min-width:150px; display:flex; align-items:baseline; justify-content:flex-end; gap:10px; }
        .acl-db__delta span{ font-family:var(--acl-font-cn); font-weight:900; font-size:22px;
          letter-spacing:.02em; color:rgba(22,21,15,.5); }
        .acl-db__row--focus .acl-db__nm{ color:var(--acl-pink); }

        /* paired-bars mode */
        .acl-db__pair{ flex:1; position:relative; display:flex; flex-direction:column; gap:6px; }
        .acl-db__pbar{ height:18px; border:2.5px solid var(--acl-ink); position:relative; }
        .acl-db__pbar.lo{ opacity:.45; }
        .acl-db__pv{ position:absolute; left:calc(100% + 10px); top:50%; transform:translateY(-50%);
          font-family:var(--acl-font-num); font-size:18px; white-space:nowrap; }

        .acl-db__foot{ display:flex; align-items:center; gap:14px; font-family:var(--acl-font-hand);
          font-size:27px; margin-top:14px; flex:0 0 auto; }
        .acl-db__anno{ position:absolute; font-family:var(--acl-font-hand); font-size:25px; z-index:6;
          white-space:nowrap; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-db__row, [data-deck-active] .acl-db__prow{
            animation:acl-db-rise .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s + .1s); }
        }
        @keyframes acl-db-rise{ from{ opacity:0; transform:translateX(-18px); } to{ opacity:1; transform:none; } }
      `}),Le("div",{className:"acl-db__head",children:[Le("div",{children:[oa("div",{className:"acl-db__eyebrow",children:P}),oa("h1",{className:"acl-db__h",children:I})]}),oa("div",{className:"acl-db__sub",children:A}),oa("div",{className:"acl-db__summary",dangerouslySetInnerHTML:{__html:M}})]}),Le("div",{className:"acl-db__panel",children:[Le("div",{className:"acl-db__legend",children:[Le("span",{className:"acl-db__lg",children:[oa("span",{className:"acl-db__lgdot",style:{background:"var(--acl-paper)"}}),F]}),Le("span",{className:"acl-db__lg",children:[oa("span",{className:"acl-db__lgdot",style:{background:"var(--acl-pink)"}}),D]}),Le("span",{className:"acl-db__lg",children:[oa("span",{className:"acl-db__lgbar"}),w]})]}),k==="dumbbell"?oa("div",{className:"acl-db__rows",children:n.map((o,r)=>{let b=g&&r===i,R=e(o.low),E=e(o.high);return Le("div",{className:"acl-db__row"+(b?" acl-db__row--focus":"")+(g&&!b?" acl-db__dim":""),style:{"--i":r},children:[Le("div",{className:"acl-db__name",children:[oa("span",{className:"acl-db__nm",children:o.name}),oa("span",{className:"acl-db__nt",children:o.note})]}),Le("div",{className:"acl-db__track",children:[oa("div",{className:"acl-db__axis"}),u&&oa("div",{className:"acl-db__ref",style:{left:e(N)+"%"},children:r===0&&oa("span",{className:"acl-db__reflab",style:{left:0},children:z})}),oa("div",{className:"acl-db__bar",style:{left:R+"%",width:E-R+"%",background:b?o.color:"var(--acl-ink)"}}),oa("div",{className:"acl-db__dot acl-db__dot--lo",style:{left:R+"%"}}),oa("div",{className:"acl-db__dot",style:{left:E+"%",background:o.color}}),_&&oa("span",{className:"acl-db__vl acl-db__vl--lo",style:{left:R+"%"},children:o.low}),_&&Le("span",{className:"acl-db__vl acl-db__vl--hi",style:{left:E+"%"},children:[o.high,oa("em",{children:q})]})]}),x&&Le("div",{className:"acl-db__delta",style:b?{color:o.color}:null,children:[oa("span",{children:l.spreadBadgeLabel}),"\xD7",G(o.high,o.low,0).toFixed(1)]})]},r)})}):oa("div",{className:"acl-db__rows",children:n.map((o,r)=>{let b=g&&r===i;return Le("div",{className:"acl-db__row"+(g&&!b?" acl-db__dim":""),style:{"--i":r},children:[Le("div",{className:"acl-db__name",children:[oa("span",{className:"acl-db__nm",children:o.name}),oa("span",{className:"acl-db__nt",children:o.note})]}),Le("div",{className:"acl-db__pair",children:[oa("div",{className:"acl-db__pbar lo",style:{width:e(o.low)+"%",background:"rgba(22,21,15,.3)"},children:_&&oa("span",{className:"acl-db__pv",style:{opacity:.6},children:o.low})}),oa("div",{className:"acl-db__pbar",style:{width:e(o.high)+"%",background:o.color},children:_&&Le("span",{className:"acl-db__pv",children:[o.high,oa("em",{children:q})]})})]}),x&&Le("div",{className:"acl-db__delta",style:b?{color:o.color}:null,children:[oa("span",{children:l.spreadBadgeLabel}),"\xD7",G(o.high,o.low,0).toFixed(1)]})]},r)})}),C&&oa("div",{className:"acl-db__anno",style:{right:60,top:14},children:oa(H,{label:v,color:"var(--acl-yellow)",rotate:-4})})]}),Le("div",{className:"acl-db__foot",children:[C&&oa(p,{kind:"loop",size:52,style:{position:"static"}}),oa("span",{children:y})]})]})}qo.defaults={backgroundTheme:"primary",chartType:"dumbbell",segmentCount:5,showBaseline:!0,showValueLabels:!0,showDelta:!0,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Deal Size Range",headline:"單筆融資區間分化",subheadline:"2024 \xB7 各賽道下限 \u2192 上限",summary:"同一賽道里\uFF0C<b>頭部與長尾的單筆規模差距</b>正在被持續拉大\u3002",lowLabel:"區間下限",highLabel:"區間上限",valueUnit:"億",refValue:30,refLabel:"全市場中位",spreadLegendLabel:"區間跨度",spreadBadgeLabel:"跨度",insightStickerLabel:"區間越寬 越分化",items:[{name:"通用大模型",note:"Foundation",low:20,high:95},{name:"算力基礎設施",note:"Compute",low:15,high:78},{name:"垂直應用",note:"Vertical Apps",low:5,high:42},{name:"AI 晶片",note:"Silicon",low:12,high:60},{name:"具身智慧",note:"Embodied",low:4,high:28},{name:"內容生成",note:"Generative",low:3,high:22}],closingLine:"區間的寬度\uFF0C決定了你在這條賽道里能站到哪一段\u3002"};qo.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"chartType",type:"enum",default:"dumbbell",options:["dumbbell","bars"],label:"圖表型別",desc:"區間呈現\uFF1A啞鈴(下限\u2192上限連點) / 成對條形"},{key:"segmentCount",type:"number",default:5,min:3,max:6,step:1,label:"條目數量",desc:"參與對比的賽道(行)數量(3\u20136)"},{key:"showBaseline",type:"boolean",default:!0,label:"參考線",desc:"橫跨圖表的中位/參考豎線 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"區間兩端數值 顯隱"},{key:"showDelta",type:"boolean",default:!0,label:"跨度徽標",desc:"每行右側區間跨度倍數 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一行(其餘淡化)"},{key:"focusIndex",type:"number",default:1,min:0,max:5,maxFrom:"segmentCount",step:1,label:"重點物件",desc:"被高亮的條目序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Md=qo.defaults,Ad=qo.controls;var On={};Y(On,{controls:()=>Rd,default:()=>Po,defaults:()=>Dd});import Td from"react";import{jsx as ye,jsxs as nl}from"react/jsx-runtime";function Po(t){let l={...Po.defaults,...t},{backgroundTheme:c,nodeCount:k,showConnector:d,showValueLabels:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,nodes:A,closingLine:M}=l,F=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",D=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-ink)","var(--acl-pink)"],q=A.slice(0,Math.max(2,k)).map((y,w)=>({...y,color:D[w%D.length]})),N=q.length,z=Math.min(x,N-1),L=y=>(y+.5)/N*100;return nl("div",{className:"acl-root acl-rm",style:{background:F},children:[ye("style",{children:`
        .acl-rm{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:66px 110px 52px; display:flex; flex-direction:column; }
        .acl-rm__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-rm__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:23px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:9px; }
        .acl-rm__h{ font-weight:900; font-size:74px; line-height:.95; margin:0; }
        .acl-rm__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-rm__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:22px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-rm__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-rm__stage{ flex:1; position:relative; margin-top:20px; min-height:0; }
        .acl-rm__spine{ position:absolute; left:50%; top:0; bottom:0; width:5px; transform:translateX(-50%);
          background:repeating-linear-gradient(var(--acl-ink) 0 16px, transparent 16px 28px); }
        .acl-rm__spinecap{ position:absolute; left:50%; transform:translate(-50%,-50%); width:22px; height:22px;
          border-radius:50%; background:var(--acl-ink); }

        .acl-rm__node{ position:absolute; left:50%; transform:translate(-50%,-50%); z-index:4;
          width:84px; height:84px; border-radius:50%; background:var(--acl-paper); border:5px solid var(--acl-ink);
          display:flex; align-items:center; justify-content:center; font-family:var(--acl-font-num);
          font-size:42px; box-shadow:4px 5px 0 rgba(22,21,15,.2); transition:transform .25s; }
        .acl-rm__node--focus{ background:var(--acl-pink); color:var(--acl-paper); transform:translate(-50%,-50%) scale(1.14); z-index:6; }

        .acl-rm__arm{ position:absolute; top:50%; height:4px; background:var(--acl-ink); z-index:2; }
        .acl-rm__card{ position:absolute; top:50%; transform:translateY(-50%); width:44%;
          background:var(--acl-paper); border:3px solid var(--acl-ink); box-shadow:6px 8px 0 rgba(22,21,15,.16);
          padding:20px 30px; z-index:3; transition:transform .25s, background .25s; }
        .acl-rm__card--l{ right:calc(50% + 86px); text-align:right; }
        .acl-rm__card--r{ left:calc(50% + 86px); }
        .acl-rm__ghost{ position:absolute; top:50%; transform:translateY(-50%); z-index:1; pointer-events:none;
          font-family:var(--acl-font-num); font-size:230px; line-height:.7; letter-spacing:-.03em;
          color:rgba(22,21,15,.07); }
        .acl-rm--ink .acl-rm__ghost{ color:rgba(251,250,244,.07); }
        .acl-rm__phase{ display:inline-block; font-family:var(--acl-font-mono); font-weight:700; font-size:14px;
          letter-spacing:.06em; text-transform:uppercase; padding:5px 11px; background:var(--acl-ink);
          color:var(--acl-yellow); margin-bottom:8px; }
        .acl-rm__row{ display:flex; align-items:baseline; gap:14px; }
        .acl-rm__title{ font-weight:900; font-size:31px; line-height:1.05; }
        .acl-rm__val{ font-family:var(--acl-font-num); font-size:42px; line-height:.8; margin-left:auto;
          color:var(--acl-pink); white-space:nowrap; }
        .acl-rm__val em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:15px;
          margin-left:3px; color:rgba(22,21,15,.5); }
        .acl-rm__desc{ font-weight:600; font-size:18px; line-height:1.4; color:rgba(22,21,15,.7); margin-top:7px; }
        .acl-rm__card--l .acl-rm__phase, .acl-rm__card--l .acl-rm__row, .acl-rm__card--l .acl-rm__desc{ text-align:right; }
        .acl-rm__card--l .acl-rm__row{ flex-direction:row-reverse; }
        .acl-rm__card--l .acl-rm__val{ margin-left:0; margin-right:auto; }
        .acl-rm__card--focus{ background:var(--acl-ink); color:var(--acl-paper); transform:translateY(-50%) scale(1.025); }
        .acl-rm__card--focus .acl-rm__phase{ background:var(--acl-yellow); color:var(--acl-ink); }
        .acl-rm__card--focus .acl-rm__val{ color:var(--acl-yellow); }
        .acl-rm__card--focus .acl-rm__desc{ color:rgba(255,255,255,.78); }
        .acl-rm__cfx{ position:absolute; top:-22px; z-index:7; }
        .acl-rm__card--l .acl-rm__cfx{ left:-18px; }
        .acl-rm__card--r .acl-rm__cfx{ right:-18px; }

        .acl-rm__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-hand); font-size:27px; margin-top:12px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-rm__node{ animation:acl-rm-pop .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .12s + .15s); }
          [data-deck-active] .acl-rm__card{ animation:acl-rm-in .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .12s + .25s); }
        }
        @keyframes acl-rm-pop{ from{ opacity:0; transform:translate(-50%,-50%) scale(.4); } to{ opacity:1; } }
        @keyframes acl-rm-in{ from{ opacity:0; transform:translateY(-50%) translateX(var(--dx,0)); } to{ opacity:1; } }
      `}),nl("div",{className:"acl-rm__head",children:[nl("div",{children:[ye("div",{className:"acl-rm__eyebrow",children:h}),ye("h1",{className:"acl-rm__h",children:C})]}),ye("div",{className:"acl-rm__sub",children:P}),ye("div",{className:"acl-rm__summary",dangerouslySetInnerHTML:{__html:I}})]}),nl("div",{className:"acl-rm__stage",children:[d&&ye("div",{className:"acl-rm__spine"}),d&&ye("div",{className:"acl-rm__spinecap",style:{top:0}}),d&&ye("div",{className:"acl-rm__spinecap",style:{bottom:0,top:"auto"}}),q.map((y,w)=>{let v=w%2===0,m=_&&w===z;return nl(Td.Fragment,{children:[d&&ye("div",{className:"acl-rm__arm",style:{top:L(w)+"%",width:86,[v?"right":"left"]:"50%",background:m?y.color:"var(--acl-ink)"}}),ye("div",{className:"acl-rm__ghost","aria-hidden":"true",style:{top:L(w)+"%",[v?"left":"right"]:"calc(50% + 130px)"},children:String(w+1).padStart(2,"0")}),ye("div",{className:"acl-rm__node"+(m?" acl-rm__node--focus":""),style:{top:L(w)+"%","--i":w},children:String(w+1).padStart(2,"0")}),nl("div",{className:"acl-rm__card acl-rm__card--"+(v?"l":"r")+(m?" acl-rm__card--focus":""),style:{top:L(w)+"%","--i":w,"--dx":v?"20px":"-20px"},children:[m&&g&&ye("div",{className:"acl-rm__cfx",children:ye(H,{label:l.keyNodeBadgeLabel,color:"var(--acl-yellow)",rotate:v?-8:8})}),ye("span",{className:"acl-rm__phase",children:y.phase}),nl("div",{className:"acl-rm__row",children:[ye("span",{className:"acl-rm__title",children:y.title}),u&&nl("span",{className:"acl-rm__val",children:[y.value,ye("em",{children:y.unit})]})]}),ye("div",{className:"acl-rm__desc",children:y.desc})]})]},w)}),g&&ye(p,{kind:"arrowS",size:70,rotate:92,color:"var(--acl-ink)",style:{left:"calc(50% + 30px)",bottom:-6}})]}),nl("div",{className:"acl-rm__foot",children:[g&&ye(p,{kind:"loop",size:52,style:{position:"static"}}),ye("span",{children:M})]})]})}Po.defaults={backgroundTheme:"muted",nodeCount:4,showConnector:!0,showValueLabels:!0,focusEnabled:!0,focusIndex:1,showDecor:!0,eyebrow:"Roadmap \xB7 Next 18 Months",headline:"未來 18 個月路線圖",subheadline:"資本節奏 4 個關鍵節點",summary:"從\u300C拼算力\u300D到\u300C拼兌現\u300D\uFF0C每個節點都是一次<b>資金重新定價</b>的機會\u3002",nodes:[{phase:"Q1\u2013Q2 2025",title:"收入驗證視窗",desc:"頭部公司披露首批可計費收入\uFF0C敘事估值開始分層\u3002",value:"40",unit:"% 兌現"},{phase:"Q3 2025",title:"算力成本拐點",desc:"推理成本下行\uFF0C毛利結構首次成為定價主線\u3002",value:"\u221218",unit:"pt 成本"},{phase:"Q4 2025",title:"併購與整合",desc:"長尾專案被基礎設施方與大廠吸收整合\u3002",value:"2.3",unit:"x 集中"},{phase:"2026E",title:"退出通道重開",desc:"少數已兌現公司率先開啟 IPO 與二級流動性\u3002",value:"6",unit:"家候選"},{phase:"2026H2",title:"新主題萌芽",desc:"具身與科學計算接棒成為下一輪敘事入口\u3002",value:"+12",unit:"類"}],closingLine:"路線圖不是預測\uFF0C而是提前站位的座標\u3002",keyNodeBadgeLabel:"關鍵節點"};Po.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"nodeCount",type:"number",default:4,min:2,max:5,step:1,label:"節點數量",desc:"路線圖裡程碑數量(2\u20135)\uFF1B卡片左右交替排布"},{key:"showConnector",type:"boolean",default:!0,label:"連線軸線",desc:"中央時間軸脊線與連線臂 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"每張卡片的大號數值 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否高亮某一個節點"},{key:"focusIndex",type:"number",default:1,min:0,max:4,maxFrom:"nodeCount",step:1,label:"重點物件",desc:"被高亮的節點序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var Dd=Po.defaults,Rd=Po.controls;var Yn={};Y(Yn,{controls:()=>Pd,default:()=>$o,defaults:()=>qd});import"react";import{jsx as Ke,jsxs as ul}from"react/jsx-runtime";function $o(t){let l={...$o.defaults,...t},{backgroundTheme:c,mediaCount:k,showCaptions:d,showStat:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,headline:C,subheadline:P,summary:I,tiles:A,stat:M,closingLine:F,focusStickerLabel:D,focusStickerSub:q}=l,N=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",z=A.slice(0,Math.max(0,k)),L=z.length,y=Math.max(0,Math.min(Number(x)||0,Math.max(0,L-1),3)),w=L<=2?430:L<=3?376:L<=4?330:L<=5?300:272,v=[-3,2.2,-1.6,3,-2.4,1.6],m=["var(--acl-pink)","var(--acl-blue)","var(--acl-paper)","var(--acl-red)","var(--acl-yellow)","var(--acl-blue)"];return ul("div",{className:"acl-root acl-pw",style:{background:N},children:[Ke("style",{children:`
        .acl-pw{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:62px 92px 54px; display:flex; flex-direction:column; }
        .acl-pw__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; z-index:3; }
        .acl-pw__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:8px; }
        .acl-pw__h{ font-weight:900; font-size:74px; line-height:.94; margin:0; }
        .acl-pw__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:21px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg); white-space:nowrap; }
        .acl-pw__summary{ margin-left:auto; max-width:440px; font-weight:700; font-size:22px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-pw__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone; white-space:nowrap; }

        .acl-pw__wall{ flex:1; position:relative; display:flex; flex-wrap:wrap; align-items:center;
          justify-content:center; gap:30px 34px; padding:14px 8px; min-height:0; }
        .acl-pw__empty{ font-family:var(--acl-font-hand); font-size:38px; color:rgba(22,21,15,.4); }
        .acl-pw__cell{ position:relative; transition:transform .28s; }
        .acl-pw__idx{ position:absolute; top:-20px; left:-16px; z-index:6; font-family:var(--acl-font-num);
          width:54px; height:54px; border-radius:50%; background:var(--acl-ink); color:var(--acl-paper);
          display:flex; align-items:center; justify-content:center; font-size:28px;
          border:3px solid var(--acl-paper); box-shadow:3px 4px 0 rgba(22,21,15,.25); }
        .acl-pw__cap{ position:absolute; left:50%; bottom:-16px; transform:translateX(-50%); z-index:6; }
        .acl-pw__cell--focus{ z-index:7; }
        .acl-pw__cfx{ position:absolute; top:-26px; right:-18px; z-index:8; }

        .acl-pw__stat{ position:absolute; right:14px; bottom:6px; z-index:7; display:flex; align-items:center;
          gap:14px; background:var(--acl-ink); color:var(--acl-paper); padding:14px 22px;
          transform:rotate(-2deg); box-shadow:5px 7px 0 rgba(22,21,15,.22); }
        .acl-pw__statn{ font-family:var(--acl-font-num); font-size:64px; line-height:.8; color:var(--acl-yellow); }
        .acl-pw__statt{ display:flex; flex-direction:column; }
        .acl-pw__statt b{ font-weight:900; font-size:22px; line-height:1.1; }
        .acl-pw__statt span{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(255,255,255,.6); }

        .acl-pw__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px; margin-top:8px; z-index:3;
          font-family:var(--acl-font-hand); font-size:27px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-pw__cell{ animation:acl-pw-in .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .09s); }
          [data-deck-active] .acl-pw__stat{ animation:acl-pw-pop .5s cubic-bezier(.3,1.3,.5,1) both .5s; }
        }
        @keyframes acl-pw-in{ from{ opacity:0; transform:translateY(30px) scale(.94); } to{ opacity:1; } }
        @keyframes acl-pw-pop{ from{ opacity:0; transform:rotate(-2deg) scale(.6); } to{ opacity:1; transform:rotate(-2deg) scale(1); } }
      `}),ul("div",{className:"acl-pw__head",children:[ul("div",{children:[Ke("div",{className:"acl-pw__eyebrow",children:h}),Ke("h1",{className:"acl-pw__h",children:C})]}),Ke("div",{className:"acl-pw__sub",children:P}),Ke("div",{className:"acl-pw__summary",dangerouslySetInnerHTML:{__html:I}})]}),ul("div",{className:"acl-pw__wall",children:[L===0&&Ke("div",{className:"acl-pw__empty",children:"// 圖片數量 = 0"}),z.map((f,n)=>{let s=_&&n===y,i=Math.round(w*(s?1.34:1));return ul("div",{className:"acl-pw__cell"+(s?" acl-pw__cell--focus":""),style:{transform:`rotate(${s?0:v[n%v.length]}deg)`,"--i":n},children:[Ke("div",{className:"acl-pw__idx",children:String(n+1).padStart(2,"0")}),s&&g&&Ke("div",{className:"acl-pw__cfx",children:Ke(H,{label:D,color:"var(--acl-yellow)",subColor:"var(--acl-pink)",sub:q,rotate:8})}),Ke(W,{id:"pw-"+n,box:i,ratio:f.ratio||.82,accent:s?"var(--acl-pink)":m[n%m.length],placeholder:"上傳",sticker:d?{label:f.name,sub:f.tag,color:m[n%m.length],subColor:"var(--acl-ink)",rotate:n%2?3:-3}:null})]},n)}),u&&L>0&&ul("div",{className:"acl-pw__stat",children:[Ke("span",{className:"acl-pw__statn",children:M.value}),ul("span",{className:"acl-pw__statt",children:[Ke("b",{children:M.label}),Ke("span",{children:M.en})]})]})]}),ul("div",{className:"acl-pw__foot",children:[g&&Ke(p,{kind:"loop",size:50,style:{position:"static"}}),Ke("span",{children:F}),g&&L>0&&Ke(p,{kind:"spark",size:34,rotate:10,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",style:{position:"static",marginLeft:6}})]})]})}$o.defaults={images:[],backgroundTheme:"primary",mediaCount:4,showCaptions:!0,showStat:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Coverage \xB7 覆蓋群像",headline:"一年內的高光現場",subheadline:"照片牆",summary:"把分散的現場拼成一面牆\uFF0C<b>密度本身</b>就是敘事\u3002",focusStickerLabel:"焦點",focusStickerSub:"FOCUS",tiles:[{name:"釋出現場",tag:"Launch",ratio:.82},{name:"團隊群像",tag:"Team",ratio:1.2},{name:"資料中心",tag:"Infra",ratio:1.34},{name:"路演瞬間",tag:"Pitch",ratio:.78},{name:"簽約時刻",tag:"Deal",ratio:1.1},{name:"產品特寫",tag:"Product",ratio:.9}],stat:{value:"97",label:"高光事件",en:"Highlight Events"},closingLine:"把一年的現場\uFF0C釘成一面可記憶的牆\u3002"};$o.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"mediaCount",type:"number",default:4,min:0,max:4,step:1,label:"圖片數量",desc:"照片牆圖片槽數量(0\u20134)\uFF1B佈局隨數量自動平衡\uFF0C每槽按上傳圖片比例自適應"},{key:"showCaptions",type:"boolean",default:!0,label:"照片標籤",desc:"每張照片的貼紙標籤 顯隱"},{key:"showStat",type:"boolean",default:!0,label:"統計徽標",desc:"右下角統計數字徽標 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否放大突出某一張照片"},{key:"focusIndex",type:"number",default:0,min:0,max:3,step:1,maxFrom:"mediaCount",label:"重點物件",desc:"被放大突出的照片序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與貼紙標籤 顯隱"}];var qd=$o.defaults,Pd=$o.controls;var jn={};Y(jn,{controls:()=>Bd,default:()=>Bo,defaults:()=>$d});import hr from"react";import{jsx as ve,jsxs as Dt}from"react/jsx-runtime";function Bo(t){let l={...Bo.defaults,...t},{backgroundTheme:c,columnCount:k,rowCount:d,showRating:u,showValueLabels:_,showVerdict:x,focusEnabled:g,focusIndex:h,showDecor:C,eyebrow:P,headline:I,subheadline:A,summary:M,options:F,criteria:D,ratingMax:q,closingLine:N,preferredStickerLabel:z,verdictRowLabel:L,verdictRowLabelEn:y}=l,w=c==="muted"?"linear-gradient(165deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(168deg, #F4F66C 0%, #ECEF35 44%, #E2E62A 100%)",v=["var(--acl-pink)","var(--acl-blue)","var(--acl-red)","var(--acl-yellow)"],m=Math.min(4,Math.max(2,Number(k)||2)),f=F.slice(0,m).map((r,b)=>({...r,accent:v[b%v.length]})),n=f.length,s=D.slice(0,Math.max(3,d)),i=Math.min(h,n-1),a=Q(Math.round($(q,5)),1,10),e=Math.max($(q,a),a),o=Array.from({length:a});return Dt("div",{className:"acl-root acl-sc",style:{background:w},children:[ve("style",{children:`
        .acl-sc{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:72px 100px 60px; display:flex; flex-direction:column; }
        .acl-sc__head{ display:flex; align-items:flex-end; gap:26px; flex:0 0 auto; }
        .acl-sc__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.16em; text-transform:uppercase; color:rgba(22,21,15,.55); margin-bottom:10px; }
        .acl-sc__h{ font-weight:900; font-size:78px; line-height:.95; margin:0; }
        .acl-sc__sub{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px;
          padding:8px 14px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg);  white-space:nowrap;}
        .acl-sc__summary{ margin-left:auto; max-width:480px; font-weight:700; font-size:23px;
          line-height:1.4; text-align:right; text-wrap:balance; }
        .acl-sc__summary b{ background:var(--acl-blue); padding:0 .14em; box-decoration-break:clone;
          -webkit-box-decoration-break:clone;  white-space:nowrap;}

        .acl-sc__table{ flex:1; margin-top:30px; display:grid; gap:0; min-height:0;
          grid-template-columns:300px repeat(var(--nc), 1fr); grid-auto-rows:1fr;
          border:3px solid var(--acl-ink); box-shadow:8px 10px 0 rgba(22,21,15,.16); }
        .acl-sc__cell{ border-right:3px solid var(--acl-ink); border-bottom:3px solid var(--acl-ink);
          padding:18px 24px; display:flex; flex-direction:column; justify-content:center; min-width:0; }
        .acl-sc__cell--rt{ border-right:0; }
        .acl-sc__corner{ border-bottom:3px solid var(--acl-ink); }

        /* header row */
        .acl-sc__ohead{ background:var(--acl-ink); color:var(--acl-paper); border-bottom:3px solid var(--acl-ink);
          border-right:3px solid var(--acl-paper); padding:18px 22px; position:relative; transition:background .25s; }
        .acl-sc__ohead:last-child{ border-right:0; }
        .acl-sc__oname{ font-weight:900; font-size:33px; line-height:1; }
        .acl-sc__otag{ display:inline-block; font-family:var(--acl-font-mono); font-weight:700; font-size:12px;
          letter-spacing:.05em; text-transform:uppercase; padding:4px 9px; background:var(--acl-yellow);
          color:var(--acl-ink); margin-top:10px; }
        .acl-sc__ohead--focus{ background:var(--acl-pink); }
        .acl-sc__ofx{ position:absolute; top:-16px; right:-10px; z-index:5; }

        /* criteria label column */
        .acl-sc__crit{ background:var(--acl-paper); }
        .acl-sc__cname{ font-weight:900; font-size:26px; line-height:1.08; }
        .acl-sc__cnote{ font-family:var(--acl-font-mono); font-size:12px; letter-spacing:.05em;
          text-transform:uppercase; color:rgba(22,21,15,.5); margin-top:5px; }

        /* body cells */
        .acl-sc__bc{ background:var(--acl-paper); transition:background .25s; }
        .acl-sc__bc--focus{ background:rgba(255,61,151,.12); }
        .acl-sc__dots{ display:flex; gap:6px; }
        .acl-sc__dot{ width:18px; height:18px; border-radius:50%; border:2.5px solid var(--acl-ink);
          background:var(--acl-paper); }
        .acl-sc__dot--on{ background:var(--acl-ink); }
        .acl-sc__bc--focus .acl-sc__dot--on{ background:var(--acl-pink); border-color:var(--acl-pink); }
        .acl-sc__bv{ font-family:var(--acl-font-num); font-size:26px; line-height:1; margin-top:9px; }
        .acl-sc__bv em{ font-style:normal; font-family:var(--acl-font-cn); font-weight:700; font-size:14px;
          margin-left:3px; color:rgba(22,21,15,.55); }

        /* verdict row */
        .acl-sc__vc{ background:var(--acl-paper); border-bottom:0; }
        .acl-sc__vlabel{ font-family:var(--acl-font-mono); font-weight:700; font-size:14px; letter-spacing:.06em;
          text-transform:uppercase; color:rgba(22,21,15,.5); }
        .acl-sc__verdict{ font-weight:900; font-size:24px; line-height:1.1; margin-top:4px; }
        .acl-sc__vc--focus{ background:var(--acl-ink); color:var(--acl-paper); }
        .acl-sc__vc--focus .acl-sc__vlabel{ color:var(--acl-yellow); }

        .acl-sc__foot{ flex:0 0 auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-hand); font-size:27px; margin-top:14px; }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-sc__ohead{ animation:acl-sc-rise .5s cubic-bezier(.2,.8,.2,1) both; }
          [data-deck-active] .acl-sc__crit{ animation:acl-sc-rise .5s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--r,0) * .08s + .1s); }
        }
        @keyframes acl-sc-rise{ from{ opacity:0; transform:translateY(16px); } to{ opacity:1; transform:none; } }
      `}),Dt("div",{className:"acl-sc__head",children:[Dt("div",{children:[ve("div",{className:"acl-sc__eyebrow",children:P}),ve("h1",{className:"acl-sc__h",children:I})]}),ve("div",{className:"acl-sc__sub",children:A}),ve("div",{className:"acl-sc__summary",dangerouslySetInnerHTML:{__html:M}})]}),Dt("div",{className:"acl-sc__table",style:{"--nc":n},children:[ve("div",{className:"acl-sc__corner acl-sc__crit"}),f.map((r,b)=>{let R=g&&b===i;return Dt("div",{className:"acl-sc__ohead"+(R?" acl-sc__ohead--focus":""),children:[R&&C&&ve("div",{className:"acl-sc__ofx",children:ve(H,{label:z,color:"var(--acl-yellow)",rotate:8})}),ve("div",{className:"acl-sc__oname",children:r.name}),ve("span",{className:"acl-sc__otag",children:r.tag})]},b)}),s.map((r,b)=>Dt(hr.Fragment,{children:[Dt("div",{className:"acl-sc__cell acl-sc__crit",style:{"--r":b},children:[ve("div",{className:"acl-sc__cname",children:r.name}),ve("div",{className:"acl-sc__cnote",children:r.note})]}),f.map((R,E)=>{let T=g&&E===i,B=r.cells[E]||{},S=Math.round(Q($(B.rating,0),0,e)/e*a);return Dt("div",{className:"acl-sc__cell acl-sc__bc"+(E===n-1?" acl-sc__cell--rt":"")+(T?" acl-sc__bc--focus":""),children:[u&&ve("div",{className:"acl-sc__dots",children:o.map((V,O)=>ve("span",{className:"acl-sc__dot"+(O<S?" acl-sc__dot--on":"")},O))}),_&&B.value!=null&&Dt("div",{className:"acl-sc__bv",children:[B.value,ve("em",{children:B.unit})]})]},E)})]},b)),x&&Dt(hr.Fragment,{children:[ve("div",{className:"acl-sc__cell acl-sc__vc acl-sc__crit",style:{borderBottom:0},children:ve("div",{className:"acl-sc__vlabel",children:L})}),f.map((r,b)=>{let R=g&&b===i;return Dt("div",{className:"acl-sc__cell acl-sc__vc"+(b===n-1?" acl-sc__cell--rt":"")+(R?" acl-sc__vc--focus":""),children:[ve("div",{className:"acl-sc__vlabel",children:y}),ve("div",{className:"acl-sc__verdict",children:r.verdict})]},b)})]})]}),Dt("div",{className:"acl-sc__foot",children:[C&&ve(p,{kind:"loop",size:52,style:{position:"static"}}),ve("span",{children:N})]})]})}Bo.defaults={backgroundTheme:"muted",columnCount:4,rowCount:4,showRating:!0,showValueLabels:!0,showVerdict:!0,focusEnabled:!0,focusIndex:0,showDecor:!0,ratingMax:5,eyebrow:"橫向記分卡",headline:"四條路徑對比",subheadline:"同一張記分卡",summary:"把不同落地路徑放進<b>同一套標準</b>\uFF0C差距才看得清\u3002",preferredStickerLabel:"首選",verdictRowLabel:"綜合判斷",verdictRowLabelEn:"Verdict",options:[{name:"嵌入工作流",tag:"場景滲透",verdict:"可計費 \xB7 高留存"},{name:"量化降本",tag:"成本回收",verdict:"易驗證 \xB7 中壁壘"},{name:"資源繫結",tag:"資源護城河",verdict:"高門檻 \xB7 難複製"},{name:"合規託管",tag:"信任入口",verdict:"慢啟動 \xB7 長週期"}],criteria:[{name:"可計費性",note:"收入轉化",cells:[{rating:5,value:"86",unit:"%"},{rating:3,value:"63",unit:"%"},{rating:4,value:"78",unit:"%"},{rating:4,value:"74",unit:"%"}]},{name:"淨留存",note:"續費表現",cells:[{rating:5,value:"132",unit:"%"},{rating:3,value:"108",unit:"%"},{rating:4,value:"121",unit:"%"},{rating:4,value:"126",unit:"%"}]},{name:"壁壘強度",note:"護城河",cells:[{rating:3,value:"3.6",unit:"分"},{rating:2,value:"2.4",unit:"分"},{rating:5,value:"4.7",unit:"分"},{rating:4,value:"4.1",unit:"分"}]},{name:"複製成本",note:"擴張難度",cells:[{rating:4,value:"低"},{rating:5,value:"很低"},{rating:2,value:"高"},{rating:3,value:"中"}]},{name:"回報週期",note:"資金回籠",cells:[{rating:4,value:"12",unit:"月"},{rating:5,value:"8",unit:"月"},{rating:2,value:"24",unit:"月"},{rating:3,value:"18",unit:"月"}]}],closingLine:"沒有最好的路徑\uFF0C只有最適用你資源的那一條\u3002"};Bo.controls=[{key:"backgroundTheme",type:"enum",default:"muted",options:["primary","muted"],label:"背景主題",desc:"主色(電光黃) 或 次色(淡紫灰) 底色"},{key:"columnCount",type:"number",default:4,min:2,max:4,step:1,label:"對比項數量",desc:"參與對比的選項(列)數量(2\u20134)"},{key:"rowCount",type:"number",default:4,min:3,max:5,step:1,label:"評估維度數量",desc:"評估維度(行)數量(3\u20135)"},{key:"showRating",type:"boolean",default:!0,label:"評級圓點",desc:"每格的評級圓點計量 顯隱"},{key:"showValueLabels",type:"boolean",default:!0,label:"數值標籤",desc:"評級下方的簡短數值 顯隱"},{key:"showVerdict",type:"boolean",default:!0,label:"綜合判斷行",desc:"底部綜合判斷行 顯隱"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否整列高亮某一個對比項"},{key:"focusIndex",type:"number",default:0,min:0,max:3,maxFrom:"columnCount",step:1,label:"重點物件",desc:"被高亮的對比項序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪裝飾與標籤的顯示/隱藏"}];var $d=Bo.defaults,Bd=Bo.controls;var Un={};Y(Un,{controls:()=>Hd,default:()=>Ho,defaults:()=>Vd});import"react";import{jsx as yt,jsxs as Vo}from"react/jsx-runtime";function Ho(t){let l={...Ho.defaults,...t},{backgroundTheme:c,showQuoteMark:k,showSupports:d,supportCount:u,focusEnabled:_,focusIndex:x,showDecor:g,eyebrow:h,kicker:C,label:P,lines:I,supports:A,source:M}=l,F=c==="ink",D=F?"radial-gradient(125% 125% at 14% 8%, #2A2820 0%, #16150F 62%, #100F0A 100%)":c==="muted"?"linear-gradient(160deg, #EFEFF6 0%, #E7E6EE 58%, #DEDCEA 100%)":"linear-gradient(165deg, #F4F66C 0%, #ECEF35 46%, #E2E62A 100%)",q=A.slice(0,Math.max(0,u)),N=Math.min(x,Math.max(0,I.length-1));return Vo("div",{className:"acl-root acl-q5"+(F?" acl-q5--ink":""),style:{background:D},children:[yt("style",{children:`
        .acl-q5{ position:absolute; inset:0; overflow:hidden; font-family:var(--acl-font-cn);
          color:var(--acl-ink); padding:78px 110px 70px; display:flex; flex-direction:column; }
        .acl-q5--ink{ color:var(--acl-paper); }

        .acl-q5__mark{ position:absolute; left:36px; top:-130px; font-family:var(--acl-font-num);
          font-size:540px; line-height:.7; color:var(--acl-pink); opacity:.16; z-index:0;
          pointer-events:none; user-select:none; }
        .acl-q5--ink .acl-q5__mark{ color:var(--acl-yellow); opacity:.13; }

        .acl-q5__top{ display:flex; align-items:center; gap:18px; flex:0 0 auto; z-index:2; }
        .acl-q5__eyebrow{ font-family:var(--acl-font-mono); font-weight:700; font-size:24px;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(22,21,15,.55); }
        .acl-q5--ink .acl-q5__eyebrow{ color:rgba(251,250,244,.6); }
        .acl-q5__rule{ flex:1; height:0; border-top:3px solid currentColor; opacity:.45; }
        .acl-q5__kicker{ font-family:var(--acl-font-mono); font-weight:700; font-size:18px;
          padding:7px 13px; background:var(--acl-ink); color:var(--acl-yellow); transform:rotate(-2deg); white-space:nowrap; }
        .acl-q5--ink .acl-q5__kicker{ background:var(--acl-yellow); color:var(--acl-ink); }

        .acl-q5__body{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:10px;
          position:relative; z-index:1; }
        .acl-q5__label{ font-family:var(--acl-font-mono); font-weight:700; font-size:22px; letter-spacing:.08em;
          text-transform:uppercase; color:rgba(22,21,15,.5); display:flex; align-items:center; gap:14px;
          margin-bottom:18px; }
        .acl-q5--ink .acl-q5__label{ color:rgba(251,250,244,.55); }
        .acl-q5__label::before{ content:""; width:54px; height:7px; background:var(--acl-pink); }
        .acl-q5--ink .acl-q5__label::before{ background:var(--acl-yellow); }

        /* alternating highlight bands -> two colour fields */
        .acl-q5__line{ display:inline-block; width:max-content; max-width:100%; font-weight:900;
          line-height:1.18; letter-spacing:-.01em; font-size:96px; padding:.02em .2em; margin:0;
          box-decoration-break:clone; -webkit-box-decoration-break:clone; }
        .acl-q5__line--a{ background:var(--acl-ink); color:var(--acl-paper); transform:rotate(-.6deg); }
        .acl-q5--ink .acl-q5__line--a{ background:rgba(251,250,244,.1); color:var(--acl-paper); }
        .acl-q5__line--b{ background:var(--acl-blue); color:var(--acl-ink); transform:rotate(.5deg); }
        .acl-q5__line--focus{ background:var(--acl-pink); color:var(--acl-paper); font-size:118px;
          box-shadow:9px 11px 0 rgba(22,21,15,.18); transform:rotate(-1deg); position:relative; }
        .acl-q5__linefx{ position:absolute; top:-30px; right:-54px; z-index:3; }

        .acl-q5__foot{ flex:0 0 auto; display:flex; align-items:flex-end; gap:30px; z-index:2;
          padding-top:22px; margin-top:8px; border-top:3px solid rgba(22,21,15,.22); }
        .acl-q5--ink .acl-q5__foot{ border-color:rgba(251,250,244,.28); }
        .acl-q5__supports{ display:flex; gap:30px; flex:1; min-width:0; }
        .acl-q5__s{ display:flex; gap:14px; align-items:flex-start; min-width:0; flex:1; }
        .acl-q5__sn{ font-family:var(--acl-font-num); font-size:48px; line-height:.8; flex:0 0 auto;
          color:var(--acl-pink); }
        .acl-q5--ink .acl-q5__sn{ color:var(--acl-yellow); }
        .acl-q5__st{ font-weight:700; font-size:21px; line-height:1.36; padding-top:5px; }
        .acl-q5__s--focus .acl-q5__sn{ color:var(--acl-ink); background:var(--acl-yellow); padding:0 .12em; }
        .acl-q5--ink .acl-q5__s--focus .acl-q5__sn{ color:var(--acl-ink); }
        .acl-q5__sign{ flex:0 0 auto; display:flex; align-items:center; gap:14px;
          font-family:var(--acl-font-mono); font-size:18px; letter-spacing:.04em; color:rgba(22,21,15,.55); }
        .acl-q5--ink .acl-q5__sign{ color:rgba(251,250,244,.55); }

        @media (prefers-reduced-motion:no-preference){
          [data-deck-active] .acl-q5__line{ animation:acl-q5-in .55s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .12s + .08s); }
          [data-deck-active] .acl-q5__s{ animation:acl-q5-in .45s cubic-bezier(.2,.8,.2,1) both;
            animation-delay:calc(var(--i,0) * .08s + .5s); }
        }
        @keyframes acl-q5-in{ from{ opacity:0; transform:translateY(24px); } to{ opacity:1; } }
      `}),k&&yt("div",{className:"acl-q5__mark","aria-hidden":"true",children:"\u201C"}),Vo("div",{className:"acl-q5__top",children:[yt("div",{className:"acl-q5__eyebrow",children:h}),yt("div",{className:"acl-q5__rule"}),yt("div",{className:"acl-q5__kicker",children:C})]}),Vo("div",{className:"acl-q5__body",children:[yt("div",{className:"acl-q5__label",children:P}),I.map((z,L)=>{let y=_&&L===N,w=L%2===0?"acl-q5__line--a":"acl-q5__line--b";return Vo("h2",{className:"acl-q5__line "+(y?"acl-q5__line--focus":w),style:{"--i":L},children:[z,y&&g&&yt("span",{className:"acl-q5__linefx",children:yt(p,{kind:"spark",size:66,fill:"var(--acl-yellow)",stroke:"var(--acl-ink)",rotate:10,style:{position:"static"}})})]},L)})]}),Vo("div",{className:"acl-q5__foot",children:[d&&q.length>0&&yt("div",{className:"acl-q5__supports",children:q.map((z,L)=>{let y=_&&L===Math.min(N,q.length-1);return Vo("div",{className:"acl-q5__s"+(y?" acl-q5__s--focus":""),style:{"--i":L},children:[yt("div",{className:"acl-q5__sn",children:String(L+1).padStart(2,"0")}),yt("div",{className:"acl-q5__st",children:z})]},L)})}),Vo("div",{className:"acl-q5__sign",children:[g&&yt(p,{kind:"loop",size:48,color:F?"var(--acl-paper)":"var(--acl-ink)",style:{position:"static"}}),yt("span",{children:M})]})]})]})}Ho.defaults={backgroundTheme:"primary",showQuoteMark:!0,showSupports:!0,supportCount:3,focusEnabled:!0,focusIndex:0,showDecor:!0,eyebrow:"Summary \xB7 總結一句",kicker:"金句頁",label:"一句話收束",lines:["資本可以催熟賽道\uFF0C","但只有現金流","能決定誰活到最後\u3002"],supports:["敘事負責融資\uFF0C留存負責生存\u3002","可計費的價值\uFF0C勝過漂亮的展示\u3002","穿越週期的\uFF0C從來是現金流而非估值\u3002"],source:"AI CAPITAL LAB \xB7 全年調研總結"};Ho.controls=[{key:"backgroundTheme",type:"enum",default:"primary",options:["primary","muted","ink"],label:"背景主題",desc:"主色(電光黃) / 次色(淡紫灰) / 深色(高反差金句)"},{key:"showQuoteMark",type:"boolean",default:!0,label:"大引號",desc:"背景大號引號 顯隱"},{key:"showSupports",type:"boolean",default:!0,label:"支撐要點",desc:"底部支撐要點 顯隱"},{key:"supportCount",type:"number",default:3,min:0,max:3,step:1,showIf:"showSupports",label:"要點數量",desc:"展示的支撐要點數量(0\u20133)"},{key:"focusEnabled",type:"boolean",default:!0,label:"重點強調",desc:"是否突出某一行金句\uFF08及對應支撐要點\uFF09"},{key:"focusIndex",type:"number",default:0,min:0,max:2,step:1,maxFrom:"lines",label:"重點行",desc:"作為重點強調場的行序號(從 0 起)"},{key:"showDecor",type:"boolean",default:!0,label:"裝飾元素",desc:"手繪火花與貼紙標籤 顯隱"}];var Vd=Ho.defaults,Hd=Ho.controls;var Od=[{id:"sup1",label:"補充封面-\u2460 智聯萬物",module:fi},{id:"sup2",label:"補充封面-\u2461 深耕教學",module:gi},{id:"sup3",label:"補充封面-\u2462 新機遇新賽道",module:ui},{id:"cv2c",label:"封面2-\u2462 鏈通全國",module:_i},{id:"p1",label:"\u2460 封面 \xB7 Cover",module:xi},{id:"p2",label:"\u2461 摘要 \xB7 Overview",module:bi},{id:"p3",label:"\u2462 結構 \xB7 Contents",module:vi},{id:"p5",label:"\u2464 趨勢 \xB7 Trend",module:yi},{id:"p6",label:"\u2465 透視 \xB7 Cross",module:ki},{id:"p7",label:"\u2466 產業鏈 \xB7 Chain",module:wi},{id:"p8",label:"\u2467 案例 \xB7 Cases",module:Ni},{id:"p9",label:"\u2468 熱力 \xB7 Heatmap",module:zi},{id:"p10",label:"\u2469 排名 \xB7 Ranking",module:Ei},{id:"p11",label:"\u246A 象限 \xB7 Quadrant",module:Ci},{id:"p13",label:"\u246C 策略 \xB7 Strategy",module:Fi},{id:"p14",label:"\u246D 金句 \xB7 Quote",module:Si},{id:"p15",label:"\u246E 章節 \xB7 Chapter",module:Li},{id:"p16",label:"\u246F 氣泡圖 \xB7 Deal Map",module:Ii},{id:"p17",label:"\u2470 季度聚焦 \xB7 Spotlight",module:Mi},{id:"p18",label:"\u2471 指標對比 \xB7 Delta",module:Ai},{id:"p19",label:"\u2472 峰值聚焦 \xB7 Peak",module:Ti},{id:"p20",label:"\u2473 回落時間軸 \xB7 Pullback",module:Di},{id:"p21",label:"\u3251 峰谷對比 \xB7 Peak/Trough",module:Ri},{id:"p22",label:"\u3252 貢獻瀑布 \xB7 Waterfall",module:qi},{id:"p23",label:"\u3253 區間結構 \xB7 Size Split",module:Pi},{id:"p24",label:"\u3254 大數字 \xB7 Big Number",module:$i},{id:"p25",label:"\u3255 累計曲線 \xB7 Capital Curve",module:Bi},{id:"p26",label:"\u3256 章節 \xB7 Chapter",module:Vi},{id:"p27",label:"\u3257 雷達圖 \xB7 Radar",module:Hi},{id:"p28",label:"\u3258 賽道卡 \xB7 Segment",module:Oi},{id:"p29",label:"\u3259 知識入口 \xB7 Portal",module:Yi},{id:"p30",label:"\u325A 場景矩陣 \xB7 Matrix",module:ji},{id:"p31",label:"\u325B 分支三聯 \xB7 Triptych",module:Ui},{id:"p32",label:"\u325C 場景佔比 \xB7 Scene Split",module:Wi},{id:"p33",label:"\u325D 金句 \xB7 Statement",module:Xi},{id:"p34",label:"\u325E 資料底座 \xB7 Pipeline",module:Gi},{id:"p35",label:"\u325F 架構 \xB7 Architecture",module:Qi},{id:"p36",label:"\u32B1 供應鏈 \xB7 Supply",module:Ki},{id:"p37",label:"\u32B2 算力網格 \xB7 Compute",module:Zi},{id:"p38",label:"\u32B3 晶片層級 \xB7 Chip Tiers",module:Ji},{id:"p39",label:"\u32B4 具身智慧 \xB7 Embodied",module:an},{id:"p41",label:"\u32B6 安全防線 \xB7 Safety",module:en},{id:"p42",label:"\u32B7 內容生成 \xB7 Generative",module:tn},{id:"p43",label:"\u32B8 學習路徑 \xB7 Education",module:ln},{id:"p44",label:"\u32B9 降本場景 \xB7 Support",module:on},{id:"p46",label:"\u32BB 流程嵌入 \xB7 Low Code",module:nn},{id:"p47",label:"\u32BC 社群變現 \xB7 Open Source",module:rn},{id:"p48",label:"\u32BD 安全對齊 \xB7 Alignment",module:cn},{id:"p49",label:"\u32BE 章節 \xB7 Chapter",module:sn},{id:"p50",label:"\u32BF 早期輪 \xB7 Early Stage",module:pn},{id:"p52",label:"(52) 資本來源 \xB7 Investor Mix",module:dn},{id:"p53",label:"(53) 資源繫結 \xB7 Resource Map",module:mn},{id:"p54",label:"(54) 算力閉環 \xB7 Closed Loop",module:fn},{id:"p55",label:"(55) GPU 生態 \xB7 Ecosystem",module:gn},{id:"p56",label:"(56) 大數字 \xB7 Geo Anchor",module:un},{id:"p57",label:"(57) 地理卡 \xB7 New York",module:_n},{id:"p58",label:"(58) 地理卡 \xB7 Seattle",module:xn},{id:"p59",label:"(59) 地理卡 \xB7 Boston",module:bn},{id:"p60",label:"(60) 點陣圖 \xB7 Other Regions",module:vn},{id:"p61",label:"(61) 金句 \xB7 Resources",module:hn},{id:"p64",label:"(64) 案例卡 \xB7 xAI",module:kn},{id:"p65",label:"(65) 案例卡 \xB7 CoreWeave",module:wn},{id:"p66",label:"(66) 案例表 \xB7 Scale AI",module:Nn},{id:"p67",label:"(67) 案例卡 \xB7 Perplexity",module:zn},{id:"p68",label:"(68) 案例卡 \xB7 Databricks",module:En},{id:"p69",label:"(69) 案例卡 \xB7 Glean",module:Cn},{id:"p71",label:"(71) 案例卡 \xB7 SSI",module:Sn},{id:"p73",label:"(73) 收入兌現 \xB7 Revenue",module:Ln},{id:"p74",label:"(74) 合規臺賬 \xB7 Regulation",module:In},{id:"p76",label:"(76) 壁壘壓縮 \xB7 Squeeze",module:Mn},{id:"p77",label:"(77) 策略卡 \xB7 Budget",module:An},{id:"p78",label:"(78) 嵌入流程 \xB7 Workflow",module:Tn},{id:"p79",label:"(79) 時間軸 \xB7 Repricing",module:Dn},{id:"p80",label:"(80) 金句 \xB7 Verdict",module:Rn},{id:"p81",label:"(81) 展望主線 \xB7 Mainlines",module:qn},{id:"p82",label:"(82) 遷移圖 \xB7 Migration",module:Pn},{id:"p83",label:"(83) 樣板 \xB7 Playbooks",module:$n},{id:"p84",label:"(84) 大數字 \xB7 Gauge",module:Bn},{id:"p85",label:"(85) 跨頁 \xB7 Hero Split",module:Vn},{id:"p86",label:"(86) 啞鈴圖 \xB7 Range",module:Hn},{id:"p87",label:"(87) 路線圖 \xB7 Roadmap",module:On},{id:"p88",label:"(88) 照片牆 \xB7 Photo Wall",module:Yn},{id:"p90",label:"(90) 記分卡 \xB7 Scorecard",module:jn},{id:"p91",label:"(91) 金句 \xB7 Two-Field",module:Un}],Yd=Od.map(t=>({id:t.id,label:t.label,Component:Ud(t.module.default),controls:t.module.controls||t.module.default?.controls||[],defaultProps:t.module.defaults||t.module.defaultProps||t.module.default?.defaults||{},...t.module.numberBounds?{numberBounds:t.module.numberBounds}:{}})),jd=Zn(Yd,{themeKey:"theme08",layoutPrefix:"THEME08"});function Ud(t){return function(c){return si.createElement(si.Fragment,null,si.createElement(er),si.createElement(t,c))}}export{ar as AdaptiveImageSlotMediaContext,jd as runtimePages};
