var zs=Object.defineProperty;var S=(t,a)=>{for(var e in a)zs(t,e,{get:a[e],enumerable:!0})};import*as Kt from"react";import ri from"react";import"react";var Cs=[["unicornScene","dynamicVisual"],["risk","status"],["asset","category"],["tracklist","itemList"],["track","guide"],["record","visual"],["scene","content"],["deal","example"],["round","stage"],["sector","category"],["valuation","metric"],["capital","resource"],["funding","metric"],["holding","row"],["portfolio","collection"],["artist","member"],["music","media"]];var Ss={absolute:"絕對值",accent:"強調色",all:"全部",alternate:"交替",amount:"數值",arabic:"阿拉伯數字",area:"面積圖",arrow:"箭頭",asc:"升序",ascend:"上升",auto:"自適應",automations:"自動化",band:"色帶",bar:"柱狀",bars:"條形",below:"下方",black:"黑色",bl:"左下",blue:"藍色",bottom:"底部","bottom-left":"左下","bottom-right":"右下",both:"兩側",box:"方框",br:"右下",bubble:"氣泡",bubbles:"氣泡",bullish:"積極",burst:"爆發",cards:"卡片",category:"分類",cautions:"謹慎",cautious:"謹慎",cells:"格子",center:"居中",centered:"居中","center-left":"左中",change:"變化",chart:"圖表",circle:"圓形",cluster:"聚類",collage:"拼貼",color:"彩色",column:"列式",columns:"多列",constellation:"星群",contain:"完整顯示",cool:"冷色",corner:"角標",count:"數量",cover:"填充裁剪",dark:"深色",dashed:"虛線",data:"資料",dawn:"晨光",default:"預設",delta:"差值",desc:"降序",descend:"下降",dest:"目標",diverging:"分歧",donut:"環形圖",dot:"圓點",dots:"點陣",dumbbell:"啞鈴圖",duotone:"雙色",dusk:"暮色",ember:"暖焰",feature:"重點圖文",figure:"大數字",fill:"填充",flat:"平鋪",flow:"流程",from:"起點",full:"全幅",funnel:"漏斗",gate:"閘門",gauge:"儀表",gauges:"儀表組",glass:"玻璃",gloss:"光澤",glow:"發光",goey:"流體",gradient:"漸變",graphite:"石墨",green:"綠色",grid:"網格",group:"分組",grouped:"分組",hatched:"斜紋",heat:"熱度",heatmap:"熱力圖",hero:"主視覺","hero-left":"主視覺在左","hero-right":"主視覺在右",horizontal:"橫向",image:"圖片",ink:"墨色",justified:"兩端對齊",ladder:"階梯",landscape:"橫圖",layers:"層級",left:"左側",lens:"鏡頭",letter:"字母",level:"水平",light:"淺色",lime:"熒光綠",line:"折線",linear:"線性",lines:"線條",list:"列表",lollipop:"棒棒糖",map:"地圖",media:"媒體",mesh:"網格",meters:"儀表",midnight:"午夜",mirror:"映象",mono:"單色",month:"月度",monthly:"按月",mosaic:"馬賽克",moving:"動態",multi:"多色",muted:"柔和",nested:"巢狀",none:"無",norm:"標準化",normal:"常規",number:"數字",orbit:"環繞",outline:"描邊",overlay:"疊加",panel:"面板",paper:"紙面",pie:"餅圖",pill:"膠囊",pincer:"夾擊",pink:"粉色",plain:"純淨",portrait:"豎圖",pressure:"壓力",primary:"主色",pyramid:"金字塔",quote:"引語",radar:"雷達",radial:"放射",radius:"半徑",ratio:"比例",right:"右側",ring:"環形",roman:"羅馬數字",rounded:"圓角",row:"橫排",rows:"多行",scatter:"散點",score:"評分",segment:"分段",segments:"分段",series:"系列",side:"側邊",solid:"純色",source:"來源",spark:"亮點",spiral:"螺旋",split:"分欄","split-left":"左分欄","split-right":"右分欄",slope:"斜率",square:"正方形",stack:"堆疊",stacked:"堆疊",step:"階梯",steps:"步驟",table:"表格",tags:"標籤",tech:"科技",text:"文字",ticket:"票卡",timeline:"時間軸",tl:"左上",to:"終點",top:"頂部","top-left":"左上",total:"總計",tr:"右上",treemap:"矩形樹圖",underline:"下劃線",unicorn:"動態視覺",vapor:"霧化",vertical:"縱向",violet:"紫色",vs:"對比",waterfall:"瀑布",warm:"暖色",white:"白色",year:"年度",yearly:"按年",yellow:"黃色",zigzag:"折線"};function Jt(t){return typeof t!="string"?t:t.replace(/\s+/g," ").trim()}function Zt(t){return typeof t=="string"?Jt(t):Array.isArray(t)?t.map(Zt):!t||typeof t!="object"?t:Object.fromEntries(Object.entries(t).map(([a,e])=>[a,a==="value"||a==="image"?e:Zt(e)]))}function As(t){return Array.isArray(t)?t.map((a,e)=>Es(a,e)):Zt(t)}function Es(t,a=0){return Array.isArray(t)?Ts(t)?{value:t.map(e=>e),label:`配色 ${a+1}`,color:Ms(t)}:{value:t[0],label:si(t[1]??t[0],t[0],a),image:t[2]||"",color:t[3]||""}:t&&typeof t=="object"&&"value"in t?{...Zt(t),value:t.value,label:si(t.label??t.value,t.value,a)}:{value:t,label:si(t,t,a)}}function si(t,a=t,e=0){if(a==null||t==null)return"隱藏";if(Ho(a)&&(t===a||String(t).trim()===String(a).trim()))return`顏色 ${e+1}`;let m=Jt(String(t)),i=Po(m);if(i)return i;let s=Po(a);return s&&(m===String(a)||/^[A-Za-z0-9_./ -]+$/.test(m))?s:m.replace(/\bYES\b/g,"是").replace(/\bNO\b/g,"否").replace(/\b8-bit\b/gi,"像素")}function Po(t){if(t==null)return"隱藏";let a=String(t).trim().toLowerCase();return Ss[a]||null}function Ho(t){return/^#[0-9a-f]{3,8}$/i.test(String(t||""))}function Ts(t){return t.length>1&&t.every(a=>Ho(a))}function Ms(t){let a=Math.max(1,t.length);return a===1?t[0]:`linear-gradient(135deg, ${t.map((m,i)=>{let s=i/a*100,l=(i+1)/a*100;return`${m} ${s}% ${l}%`}).join(", ")})`}function Vo(t,a={}){let e=new Map;return(t||[]).map((m,i)=>{let s=Ls(m,{...a,index:i}),l=s.publicKey||s.key,f=e.get(l)||0;return e.set(l,f+1),f?{...s,publicKey:`${l}${f+1}`}:s})}function Ls(t,a={}){let e=t.key||t.prop,m=Jt(t.label||e),i=Jt(t.desc||t.description||t.describe),s=Fs(e,{...t,label:m,desc:i},a),{description:l,describe:f,publicLabel:p,...d}=t;return{...d,key:e,publicKey:s,label:m,desc:i,options:As(t.options)}}function Fs(t,a={}){if(!t)return t;let e=Is(t);if(e)return e;let m=t;for(let[s,l]of Cs)m=Rs(m,s,l);if(m!==t)return Ds(m);let i=`${a.label||""} ${a.desc||a.description||""}`;return/(?:状态等级|狀態等級)|(?:状态强度|狀態強度)/.test(i)?t.startsWith("show")?"showStatusRating":"statusLevel":/(?:分类|分類)/.test(i)&&t.endsWith("Count")?"categoryCount":/(?:条目|條目)/.test(i)&&t.endsWith("Count")?"itemCount":/(?:数值|數值)/.test(i)&&/^show/i.test(t)?"showValueLabels":t}function Is(t){return{dealCount:"exampleCount",showDeals:"showExamples",riskCount:"statusItemCount",showRisk:"showStatus",showRating:"showStatusRating",showLevel:"showStatusLevel",showValuation:"showMetricMarker",showTracklist:"showItemList",trackCount:"itemCount",recordSide:"visualSide",sceneCount:"contentItemCount",showScenes:"showItemTags",quarterCount:"timeColumnCount",assetCount:"categoryCount",flowStageCount:"stepCount",segmentCount:"segmentCount",tagCount:"tagCount",showShareBar:"showShareBar"}[t]||null}function Rs(t,a,e){let m=new RegExp(`(^|[_-])${a}(?=$|[_-])`,"ig"),i=new RegExp(`${Oo(a)}(?=$|[A-Z])`,"g");return t.replace(m,(s,l)=>`${l}${e}`).replace(i,Oo(e))}function Ds(t){return t&&`${t[0].toLowerCase()}${t.slice(1)}`}function Oo(t){return t&&`${t[0].toUpperCase()}${t.slice(1)}`}import{jsx as du,jsxs as fu}from"react/jsx-runtime";function qo(t,{themeKey:a,layoutPrefix:e,keepTextControls:m=!1}){return(t||[]).map((i,s)=>{let l=s+1,f=i.meta||{},p=i.slot||i.id||i.key||f.id||`page${l}`,d={...i.defaultProps||i.defaults||{},...i.initial||i.initialProps||{}};return{key:`${a}_page${String(l).padStart(3,"0")}`,themeKey:a,pageNumber:l,layout:`${e}-${String(l).padStart(3,"0")}`,slot:p,label:i.label||i.name||i.title||f.label||f.title||p,Component:i.Component||i.component||i.Comp||i.C,controls:Ps(i.controls||i.spec?.controls||f.controls||[],d,{keepTextControls:m}),defaultProps:d,staticHtml:i.staticHtml||!1,bgClass:i.bgClass||i.backgroundClass||"",...i.numberBounds||i.spec?.numberBounds||f.numberBounds?{numberBounds:i.numberBounds||i.spec?.numberBounds||f.numberBounds}:{}}})}var Wo=new Set(["text","string","input","url","email","textarea","multiline"]),Bs=new Set,js=new Set(["activeIndex","currentIndex","emphasisIndex","featureIndex","focusCol","focusIndex","highlightCol","highlightIndex","highlightRowIndex"]);function Ps(t,a={},e={}){let i=(t||[]).filter(l=>!Os(l,e)).map(l=>({...l,min:ai(l?.min,a),max:ai(l?.max,a)})).map(l=>Hs(l,a)),s=i.map(l=>Vs(l,i,a));return Vo(s)}function Os(t,a={}){let e=String(t?.type||"").toLowerCase();return a.keepTextControls&&Wo.has(e)?!1:Wo.has(e)||Bs.has(e)}function Hs(t,a){if(t?.max!=null||!$o(t))return t;let e=ai(t?.maxFrom,a);return e==null?t:{...t,max:e}}function Vs(t,a,e){if(t?.max!=null)return t;if(Ws(t)){let i=$s(a,t),s=Number(i?.max);if(Number.isFinite(s)){let l=Number(t?.min??0);return{...t,max:qs(s,l),maxFromKey:t.maxFromKey||i.key}}}let m=ai(t?.maxFrom,e);return m==null?t:{...t,max:m}}function $o(t){return String(t?.type||"").toLowerCase()==="number"&&(String(t?.key||"").toLowerCase().includes("count")||t?.key==="columns")}function Ws(t){return String(t?.type||"").toLowerCase()==="number"&&js.has(t?.key)}function qs(t,a){return Math.max(a,t-(a===0?1:0))}function $s(t,a){return a?a.maxFromKey?t.find(e=>e.key===a.maxFromKey)||null:a.key==="focusCol"||a.key==="highlightCol"?t.find(e=>["colCount","columnCount","columns"].includes(e.key))||null:a.key==="featureIndex"?t.find(e=>e.key==="itemCount")||null:t.find($o)||null:null}function ai(t,a){return typeof t=="function"?t(a):t}var pi={};S(pi,{controls:()=>Us,default:()=>Xo,defaultProps:()=>_o});import"react";var c={accent:"#86D62B",accentBright:"#AEEA46",accentDeep:"#5FA01A",accentSoft:"#E9FBC6",ink:"#0E110B",inkDim:"#3D413A",paper:"#FAFAF6",card:"#FFFFFF",muted:"#83877C",faint:"#B7BBB0",hair:"rgba(14,17,11,0.10)",hairStrong:"rgba(14,17,11,0.16)",pos:"#34B24A",neg:"#E8443B",warn:"#EFA63A",fontDisplay:"'Space Grotesk','Noto Sans TC',system-ui,sans-serif",fontText:"'Noto Sans TC','Space Grotesk',system-ui,sans-serif"},Uo=!1;function y(){Uo||typeof document>"u"||(Uo=!0)}var Yo=new Set;function h(t,a){if(typeof document>"u"||Yo.has(t))return;Yo.add(t);let e=document.createElement("style");e.setAttribute("data-aic-style",t),e.textContent=a,document.head.appendChild(e)}function w(t){return{"--aic-accent":t||c.accent,"--aic-accent-bright":c.accentBright,"--aic-accent-deep":c.accentDeep,"--aic-accent-soft":c.accentSoft,"--aic-ink":c.ink,"--aic-ink-dim":c.inkDim,"--aic-paper":c.paper,"--aic-card":c.card,"--aic-muted":c.muted,"--aic-faint":c.faint,"--aic-hair":c.hair,"--aic-hair-strong":c.hairStrong,"--aic-pos":c.pos,"--aic-neg":c.neg,"--aic-warn":c.warn,"--aic-font-display":c.fontDisplay,"--aic-font-text":c.fontText}}import{jsx as ne,jsxs as Nt}from"react/jsx-runtime";var mt={logo:"智 造 集 團",phase:"實施方案 \xB7 IMPLEMENTATION",kicker:"SMART \xB7 MANUFACTURING",titleL1:"精益智造",titleL2:"提質增效",year:"2026",sub:"生產基地智慧化改造實施方案",tags:["降本","提效","革新","突圍"]},_o={...mt,showSweep:!0,showBars:!0,showTags:!0,accentColor:"#8FD400"},Us=[{key:"logo",label:"機構名",type:"text",default:mt.logo},{key:"phase",label:"右上標籤",type:"text",default:mt.phase},{key:"kicker",label:"眉標",type:"text",default:mt.kicker},{key:"titleL1",label:"標題行1",type:"text",default:mt.titleL1},{key:"titleL2",label:"標題行2",type:"text",default:mt.titleL2},{key:"year",label:"年份",type:"text",default:mt.year},{key:"sub",label:"副標題",type:"text",default:mt.sub},{key:"showSweep",label:"光暈掃光",type:"toggle",default:!0,description:"右上角放射光暈與透鏡光斑裝飾的顯隱\u3002"},{key:"showTags",label:"關鍵詞標籤",type:"toggle",default:!0,description:"底部關鍵詞標籤行\uFF08降本 / 提效 \u2026\uFF09的顯隱\u3002"},{key:"showBars",label:"條碼圖形",type:"toggle",default:!0,description:"底部綠 / 琥珀 / 紅條碼圖形的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:"#8FD400",options:["#8FD400","#23C76A","#2F7BFF","#F2A93B","#0D100A"],description:"品牌強調色\uFF08作用於 Logo\u3001條碼與高亮\uFF09\u3002"}],Ys=`
.cvpack2{position:absolute;inset:0;overflow:hidden}
.cvpack2{--lime-1:#C2EE3A;--lime-2:#8FD400;--lime-3:#5BB000;--lime-deep:#3C8A00;--paper:#F4F5F0;--paper-2:#ECEEE6;--ink:#0D100A;--ink-2:#5A5F52;--red:#E2362A;--amber:#F2A413;--grad-green:linear-gradient(135deg,#CDF24E 0%,#8FD400 46%,#54AA00 100%);--grad-green-soft:radial-gradient(120% 120% at 12% 88%, #B6E62E 0%, #8FD400 34%, #E9F2D6 78%, var(--paper) 100%);--type-hero:158px;--type-title:132px;--type-sub:40px;--type-kicker:25px;--type-small:23px;--type-bignum:300px;--font-cjk:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;--font-lat:"Archivo","Noto Sans TC",sans-serif;}
.cvpack2 *{box-sizing:border-box; margin:0; padding:0;}
.cvpack2 .slide{width:100%; height:100%; position:relative; overflow:hidden; background:var(--paper); color:var(--ink); font-family:var(--font-cjk); -webkit-font-smoothing:antialiased;}
.cvpack2 .num{font-family:var(--font-lat); font-weight:800; display:inline-block; transform:skewX(-9deg); letter-spacing:-0.01em;}
.cvpack2 .lat{font-family:var(--font-lat);}
.cvpack2 .lens{position:absolute; border-radius:50%; background:radial-gradient(130% 130% at 30% 25%, rgba(255,255,255,.55) 0%, rgba(180,230,40,.18) 26%, rgba(120,200,0,.42) 60%, rgba(70,150,0,.55) 100%); box-shadow: inset 0 0 60px rgba(255,255,255,.35), inset 0 -18px 50px rgba(40,90,0,.35), 0 30px 70px rgba(60,120,0,.25); border:1px solid rgba(255,255,255,.35); mix-blend-mode:multiply;}
.cvpack2 .lens.flat{mix-blend-mode:normal;}
.cvpack2 .bars{display:flex; align-items:flex-end; gap:0; height:160px;}
.cvpack2 .bars .band{flex:1;}
.cvpack2 .band.g{background:repeating-linear-gradient(90deg,var(--lime-2) 0 5px, transparent 5px 11px);}
.cvpack2 .band.a{background:repeating-linear-gradient(90deg,var(--amber) 0 5px, transparent 5px 11px);}
.cvpack2 .band.r{background:repeating-linear-gradient(90deg,var(--red) 0 5px, transparent 5px 11px);}
.cvpack2 .kicker{font-family:var(--font-lat); font-weight:600; font-size:var(--type-kicker); letter-spacing:.42em; text-transform:uppercase;}
.cvpack2 .tag{font-size:var(--type-small); font-weight:500; letter-spacing:.14em;}
.cvpack2 .logo{display:flex; align-items:center; gap:13px; font-family:var(--font-lat); font-weight:700; font-size:23px; letter-spacing:.02em;}
.cvpack2 .logo .mk{width:34px; height:34px; border-radius:9px; background:var(--grad-green); position:relative;}
.cvpack2 .logo .mk::after{content:""; position:absolute; inset:8px 9px; border:3px solid var(--ink); border-radius:50%; border-right-color:transparent; transform:rotate(-30deg);}
.cvpack2 .s1{padding:88px 110px; display:flex; flex-direction:column;}
.cvpack2 .s1 .top{display:flex; justify-content:space-between; align-items:center;}
.cvpack2 .s1 .top .ph{font-family:var(--font-lat); font-size:var(--type-small); font-weight:600; letter-spacing:.2em; color:var(--ink-2); text-transform:uppercase;}
.cvpack2 .s1 .sweep{position:absolute; right:-220px; top:-360px; width:1040px; height:1040px; background:radial-gradient(circle at 50% 50%, #8FD400 0%, rgba(143,212,0,.78) 34%, rgba(170,222,60,.22) 58%, rgba(143,212,0,0) 72%); opacity:.95;}
.cvpack2 .s1 .sweep-lens{right:150px; top:118px; width:248px; height:248px; mix-blend-mode:normal;}
.cvpack2 .s1 .body{flex:1; display:flex; flex-direction:column; justify-content:center; position:relative; z-index:2;}
.cvpack2 .s1 .kick{color:var(--ink-2); margin-bottom:30px;}
.cvpack2 .s1 h1{font-weight:900; font-size:var(--type-hero); line-height:.96; letter-spacing:.01em;}
.cvpack2 .s1 h1 .l2{display:block;}
.cvpack2 .s1 .rule{width:96px; height:7px; background:var(--ink); margin:48px 0 34px;}
.cvpack2 .s1 .sub{font-size:var(--type-sub); font-weight:500; color:var(--ink); letter-spacing:.02em;}
.cvpack2 .s1 .sub .num{font-weight:800;}
.cvpack2 .s1 .foot{display:flex; justify-content:space-between; align-items:flex-end;}
.cvpack2 .s1 .foot .tags{display:flex; gap:0;}
.cvpack2 .s1 .foot .tags .tag{padding:0 28px; border-left:1.5px solid rgba(13,16,10,.22);}
.cvpack2 .s1 .foot .tags .tag:first-child{padding-left:0; border-left:none;}
.cvpack2 .s1 .barfield{width:340px; height:96px;}
`;function Xo(t){let a={..._o,...t};h("cvpack2-cover-lean",Ys);let e={"--lime-2":a.accentColor},m=Array.isArray(a.tags)?a.tags:mt.tags;return ne("div",{className:"cvpack2",style:e,children:Nt("div",{className:"slide s1",children:[a.showSweep&&ne("div",{className:"sweep"}),a.showSweep&&ne("div",{className:"lens sweep-lens"}),Nt("div",{className:"top",children:[Nt("div",{className:"logo",children:[ne("span",{className:"mk"}),ne("span",{children:a.logo})]}),ne("div",{className:"ph",children:a.phase})]}),Nt("div",{className:"body",children:[ne("div",{className:"kicker kick cvanim",children:a.kicker}),Nt("h1",{className:"cvanim d1",children:[ne("span",{className:"l1",children:a.titleL1}),ne("span",{className:"l2",children:a.titleL2})]}),ne("div",{className:"rule cvanim d2"}),Nt("div",{className:"sub cvanim d2",children:[ne("span",{className:"num",children:a.year})," ",a.sub]})]}),Nt("div",{className:"foot",children:[a.showTags?ne("div",{className:"tags cvanim d3",children:m.map((i,s)=>ne("span",{className:"tag",children:i},s))}):ne("span",{}),a.showBars&&Nt("div",{className:"bars barfield cvanim d3",children:[ne("div",{className:"band g",style:{height:"100%"}}),ne("div",{className:"band a",style:{height:"62%"}}),ne("div",{className:"band r",style:{height:"38%"}})]})]})]})})}var di={};S(di,{controls:()=>Xs,default:()=>Qo,defaultProps:()=>Go});import _s from"react";import{jsx as Fa,jsxs as rt}from"react/jsx-runtime";var st={phaseLeft:"Supply Chain Strategy",phaseRight:"2026\u20142028",kicker:"THREE-YEAR \xB7 STRATEGY",titleL1:"鏈通全國",titleL2:"高效履約",subPre:"集團供應鏈體系三年\uFF08",years:"2026-2028",subPost:"\uFF09發展戰略",summary:"打通物流脈絡\uFF0C構築產業護城河",logo:"集 團 供 應 鏈",photoLabel:"[ 物流網路 / 配送圖景 ]",timeline:["2026","2027","2028"]},Go={...st,imageCount:1,images:[],showTimeline:!0,showLenses:!0,accentColor:"#8FD400",renderSlot:null},Xs=[{key:"phaseLeft",label:"左上標籤",type:"text",default:st.phaseLeft},{key:"phaseRight",label:"右上標籤",type:"text",default:st.phaseRight},{key:"kicker",label:"眉標",type:"text",default:st.kicker},{key:"titleL1",label:"標題行1",type:"text",default:st.titleL1},{key:"titleL2",label:"標題行2",type:"text",default:st.titleL2},{key:"summary",label:"底部結語",type:"text",default:st.summary},{key:"logo",label:"機構名",type:"text",default:st.logo},{key:"photoLabel",label:"圖片佔位文案",type:"text",default:st.photoLabel},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:1,step:1,description:"右側主視覺圖片槽數量\uFF080\u20131\uFF09\u3002"},{key:"images",label:"圖片",type:"images",countKey:"imageCount",description:"右側主視覺可替換圖片\u3002"},{key:"showTimeline",label:"年份時間軸",type:"toggle",default:!0,description:"正文下方 2026\u20142028 三年時間軸的顯隱\u3002"},{key:"showLenses",label:"透鏡光斑",type:"toggle",default:!0,description:"右側綠色面板上的透鏡光斑裝飾顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:"#8FD400",options:["#8FD400","#23C76A","#2F7BFF","#F2A93B","#0D100A"],description:"品牌強調色\uFF08作用於結語短條與高亮\uFF09\u3002"}],Gs=`
.cvpack2{position:absolute;inset:0;overflow:hidden}
.cvpack2{--lime-1:#C2EE3A;--lime-2:#8FD400;--lime-3:#5BB000;--lime-deep:#3C8A00;--paper:#F4F5F0;--paper-2:#ECEEE6;--ink:#0D100A;--ink-2:#5A5F52;--red:#E2362A;--amber:#F2A413;--grad-green:linear-gradient(135deg,#CDF24E 0%,#8FD400 46%,#54AA00 100%);--grad-green-soft:radial-gradient(120% 120% at 12% 88%, #B6E62E 0%, #8FD400 34%, #E9F2D6 78%, var(--paper) 100%);--type-hero:158px;--type-title:132px;--type-sub:40px;--type-kicker:25px;--type-small:23px;--type-bignum:300px;--font-cjk:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;--font-lat:"Archivo","Noto Sans TC",sans-serif;}
.cvpack2 *{box-sizing:border-box; margin:0; padding:0;}
.cvpack2 .slide{width:100%; height:100%; position:relative; overflow:hidden; background:var(--paper); color:var(--ink); font-family:var(--font-cjk); -webkit-font-smoothing:antialiased; pointer-events:auto;}
.cvpack2 .num{font-family:var(--font-lat); font-weight:800; display:inline-block; transform:skewX(-9deg); letter-spacing:-0.01em;}
.cvpack2 .lat{font-family:var(--font-lat);}
.cvpack2 .lens{position:absolute; border-radius:50%; background:radial-gradient(130% 130% at 30% 25%, rgba(255,255,255,.55) 0%, rgba(180,230,40,.18) 26%, rgba(120,200,0,.42) 60%, rgba(70,150,0,.55) 100%); box-shadow: inset 0 0 60px rgba(255,255,255,.35), inset 0 -18px 50px rgba(40,90,0,.35), 0 30px 70px rgba(60,120,0,.25); border:1px solid rgba(255,255,255,.35); mix-blend-mode:multiply;}
.cvpack2 .lens.flat{mix-blend-mode:normal;}
.cvpack2 .logo{display:flex; align-items:center; gap:13px; font-family:var(--font-lat); font-weight:700; font-size:23px; letter-spacing:.02em;}
.cvpack2 .logo .mk{width:34px; height:34px; border-radius:9px; background:var(--grad-green); position:relative;}
.cvpack2 .logo .mk::after{content:""; position:absolute; inset:8px 9px; border:3px solid var(--ink); border-radius:50%; border-right-color:transparent; transform:rotate(-30deg);}
.cvpack2 .kicker{font-family:var(--font-lat); font-weight:600; font-size:var(--type-kicker); letter-spacing:.42em; text-transform:uppercase;}
.cvpack2 .s3{display:flex;}
.cvpack2 .s3 .left{width:60%; padding:90px 90px 80px; display:flex; flex-direction:column;}
.cvpack2 .s3 .right{width:40%; position:relative; overflow:hidden; background:var(--grad-green); color:var(--ink);}
.cvpack2 .s3 .left .top{display:flex; align-items:center; gap:22px;}
.cvpack2 .s3 .left .top .span{flex:1; height:1.5px; background:rgba(13,16,10,.18);}
.cvpack2 .s3 .left .top .ph{font-family:var(--font-lat); font-size:var(--type-small); font-weight:600; letter-spacing:.2em; color:var(--ink-2); text-transform:uppercase;}
.cvpack2 .s3 .left .body{flex:1; display:flex; flex-direction:column; justify-content:center;}
.cvpack2 .s3 .kick{color:var(--ink-2); margin-bottom:28px;}
.cvpack2 .s3 h1{font-weight:900; font-size:138px; line-height:.98; letter-spacing:.01em;}
.cvpack2 .s3 h1 .l2{display:block;}
.cvpack2 .s3 .sub{font-size:36px; font-weight:500; margin-top:40px; max-width:760px; line-height:1.4;}
.cvpack2 .s3 .sub .num{font-weight:800;}
.cvpack2 .s3 .timeline{display:flex; align-items:center; gap:0; margin-top:64px;}
.cvpack2 .s3 .timeline .yr{font-family:var(--font-lat); font-weight:800; font-size:30px; transform:skewX(-9deg);}
.cvpack2 .s3 .timeline .seg{flex:1; height:2px; background:var(--ink); margin:0 18px; position:relative;}
.cvpack2 .s3 .timeline .seg::before,.cvpack2 .s3 .timeline .seg::after{content:""; position:absolute; width:11px; height:11px; border-radius:50%; background:var(--ink); top:-4.5px;}
.cvpack2 .s3 .timeline .seg::before{left:-5px;}
.cvpack2 .s3 .timeline .seg::after{right:-5px;}
.cvpack2 .s3 .foot{display:flex; align-items:center; gap:18px;}
.cvpack2 .s3 .foot .summary{font-size:27px; font-weight:700; letter-spacing:.04em;}
.cvpack2 .s3 .foot .bar{width:54px; height:7px; background:var(--lime-2);}
.cvpack2 .s3 .right .photo{position:absolute; inset:0; background:repeating-linear-gradient(45deg, rgba(13,16,10,.05) 0 2px, transparent 2px 16px);}
.cvpack2 .s3 .right .ph-label{position:absolute; left:46px; bottom:44px; z-index:4; font-family:var(--font-lat); font-weight:600; font-size:18px; letter-spacing:.16em; text-transform:uppercase; color:rgba(13,16,10,.5);}
.cvpack2 .s3 .right .lens{mix-blend-mode:normal;}
.cvpack2 .s3 .right .logo,.cvpack2 .s3 .right .ph-label,.cvpack2 .s3 .right .lens{pointer-events:none;}
.cvpack2 .s3 .r-a{width:330px; height:330px; right:-70px; top:120px;}
.cvpack2 .s3 .r-b{width:210px; height:210px; left:60px; top:380px;}
.cvpack2 .s3 .r-c{width:150px; height:150px; right:120px; top:470px;}
.cvpack2 .s3 .right .logo{position:absolute; top:60px; left:46px; z-index:4;}
.cvpack2 .s3 .right .hostslot{position:absolute; inset:0; z-index:2;}
`;function Qo(t){let a={...Go,...t};h("cvpack2-cover-supplychain",Gs);let e={"--lime-2":a.accentColor},m=Array.isArray(a.timeline)?a.timeline:st.timeline;return Fa("div",{className:"cvpack2",style:e,children:rt("div",{className:"slide s3",children:[rt("div",{className:"left",children:[rt("div",{className:"top",children:[Fa("span",{className:"ph",children:a.phaseLeft}),Fa("span",{className:"span"}),Fa("span",{className:"ph num",children:a.phaseRight})]}),rt("div",{className:"body",children:[Fa("div",{className:"kicker kick",children:a.kicker}),rt("h1",{className:"cvanim",children:[Fa("span",{className:"l1",children:a.titleL1}),Fa("span",{className:"l2",children:a.titleL2})]}),rt("div",{className:"sub cvanim d1",children:[a.subPre,Fa("span",{className:"num",children:a.years}),a.subPost]}),a.showTimeline&&Fa("div",{className:"timeline cvanim d2",children:m.map((i,s)=>rt(_s.Fragment,{children:[Fa("span",{className:"yr",children:i}),s<m.length-1&&Fa("span",{className:"seg"})]},s))})]}),rt("div",{className:"foot cvanim d3",children:[Fa("span",{className:"bar"}),Fa("span",{className:"summary",children:a.summary})]})]}),rt("div",{className:"right",children:[a.imageCount>0&&a.renderSlot?Fa("div",{className:"hostslot",children:a.renderSlot(0,{ratio:"auto"})}):Fa("div",{className:"photo"}),rt("div",{className:"logo",children:[Fa("span",{className:"mk"}),Fa("span",{children:a.logo})]}),a.showLenses&&Fa("div",{className:"lens r-a"}),a.showLenses&&Fa("div",{className:"lens r-b"}),a.showLenses&&Fa("div",{className:"lens r-c"}),Fa("div",{className:"ph-label",children:a.photoLabel})]})]})})}var fi={};S(fi,{controls:()=>Ks,default:()=>Jo,defaultProps:()=>Ko});import Qs from"react";import{jsx as ve,jsxs as gt}from"react/jsx-runtime";var zt={logo:"零 售 運 營 學 院",phase:"實戰培訓 \xB7 TRAINING",crumbs:["RETAIL","OPERATION","GROWTH"],titleL1:"把握消費趨勢",titleL2:"啟用終端潛力",sub:"全國零售門店運營管理暨行銷實戰培訓",slogan:"用心服務客戶\uFF0C實幹創造業績"},Ko={...zt,showCrumbs:!0,showSlogan:!0,showBase:!0,accentColor:"#8FD400"},Ks=[{key:"logo",label:"機構名",type:"text",default:zt.logo},{key:"phase",label:"右上標籤",type:"text",default:zt.phase},{key:"titleL1",label:"標題行1",type:"text",default:zt.titleL1},{key:"titleL2",label:"標題行2",type:"text",default:zt.titleL2},{key:"sub",label:"副標題",type:"text",default:zt.sub},{key:"slogan",label:"口號",type:"text",default:zt.slogan},{key:"showCrumbs",label:"麵包屑標籤",type:"toggle",default:!0,description:"標題上方 RETAIL \xB7 OPERATION \xB7 GROWTH 麵包屑顯隱\u3002"},{key:"showSlogan",label:"口號膠囊",type:"toggle",default:!0,description:"深色口號膠囊條的顯隱\u3002"},{key:"showBase",label:"底部弧形",type:"toggle",default:!0,description:"底部綠色弧形臺座\uFF08含透鏡與條碼\uFF09的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:"#8FD400",options:["#8FD400","#23C76A","#2F7BFF","#F2A93B","#0D100A"],description:"品牌強調色\uFF08作用於分隔點與底部臺座\uFF09\u3002"}],Js=`
.cvpack2{position:absolute;inset:0;overflow:hidden}
.cvpack2{--lime-1:#C2EE3A;--lime-2:#8FD400;--lime-3:#5BB000;--lime-deep:#3C8A00;--paper:#F4F5F0;--paper-2:#ECEEE6;--ink:#0D100A;--ink-2:#5A5F52;--red:#E2362A;--amber:#F2A413;--grad-green:linear-gradient(135deg,#CDF24E 0%,#8FD400 46%,#54AA00 100%);--grad-green-soft:radial-gradient(120% 120% at 12% 88%, #B6E62E 0%, #8FD400 34%, #E9F2D6 78%, var(--paper) 100%);--type-hero:158px;--type-title:132px;--type-sub:40px;--type-kicker:25px;--type-small:23px;--type-bignum:300px;--font-cjk:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;--font-lat:"Archivo","Noto Sans TC",sans-serif;}
.cvpack2 *{box-sizing:border-box; margin:0; padding:0;}
.cvpack2 .slide{width:100%; height:100%; position:relative; overflow:hidden; background:var(--paper); color:var(--ink); font-family:var(--font-cjk); -webkit-font-smoothing:antialiased;}
.cvpack2 .num{font-family:var(--font-lat); font-weight:800; display:inline-block; transform:skewX(-9deg); letter-spacing:-0.01em;}
.cvpack2 .lat{font-family:var(--font-lat);}
.cvpack2 .lens{position:absolute; border-radius:50%; background:radial-gradient(130% 130% at 30% 25%, rgba(255,255,255,.55) 0%, rgba(180,230,40,.18) 26%, rgba(120,200,0,.42) 60%, rgba(70,150,0,.55) 100%); box-shadow: inset 0 0 60px rgba(255,255,255,.35), inset 0 -18px 50px rgba(40,90,0,.35), 0 30px 70px rgba(60,120,0,.25); border:1px solid rgba(255,255,255,.35); mix-blend-mode:multiply;}
.cvpack2 .lens.flat{mix-blend-mode:normal;}
.cvpack2 .bars{display:flex; align-items:flex-end; gap:0; height:160px;}
.cvpack2 .bars .band{flex:1;}
.cvpack2 .band.g{background:repeating-linear-gradient(90deg,var(--lime-2) 0 5px, transparent 5px 11px);}
.cvpack2 .band.a{background:repeating-linear-gradient(90deg,var(--amber) 0 5px, transparent 5px 11px);}
.cvpack2 .band.r{background:repeating-linear-gradient(90deg,var(--red) 0 5px, transparent 5px 11px);}
.cvpack2 .logo{display:flex; align-items:center; gap:13px; font-family:var(--font-lat); font-weight:700; font-size:23px; letter-spacing:.02em;}
.cvpack2 .logo .mk{width:34px; height:34px; border-radius:9px; background:var(--grad-green); position:relative;}
.cvpack2 .logo .mk::after{content:""; position:absolute; inset:8px 9px; border:3px solid var(--ink); border-radius:50%; border-right-color:transparent; transform:rotate(-30deg);}
.cvpack2 .s4{display:flex; flex-direction:column; align-items:center; text-align:center; padding:74px 110px 0;}
.cvpack2 .s4 .top{width:100%; display:flex; justify-content:space-between; align-items:center;}
.cvpack2 .s4 .top .ph{font-family:var(--font-lat); font-size:var(--type-small); font-weight:600; letter-spacing:.2em; color:var(--ink-2); text-transform:uppercase;}
.cvpack2 .s4 .body{flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; z-index:3;}
.cvpack2 .s4 .kick{color:var(--lime-3); margin-bottom:30px;}
.cvpack2 .s4 .crumb{display:inline-flex; align-items:center; gap:14px; margin-bottom:38px;}
.cvpack2 .s4 .crumb .c{font-family:var(--font-lat); font-weight:600; font-size:var(--type-small); letter-spacing:.18em; text-transform:uppercase; color:var(--ink-2);}
.cvpack2 .s4 .crumb .sep{width:5px; height:5px; border-radius:50%; background:var(--lime-2);}
.cvpack2 .s4 h1{font-weight:900; font-size:128px; line-height:1.0; letter-spacing:.02em;}
.cvpack2 .s4 h1 .l2{display:block;}
.cvpack2 .s4 .sub{font-size:var(--type-sub); font-weight:500; margin-top:40px;}
.cvpack2 .s4 .sub .num{font-weight:800;}
.cvpack2 .s4 .slogan{display:inline-flex; align-items:center; gap:16px; margin-top:54px; background:var(--ink); color:var(--paper); border-radius:100px; padding:20px 40px; font-size:30px; font-weight:700; letter-spacing:.05em;}
.cvpack2 .s4 .slogan .dotmk{width:11px; height:11px; border-radius:50%; background:var(--lime-1);}
.cvpack2 .s4 .base{width:100%; height:200px; flex:none; background:var(--grad-green); border-radius:340px 340px 0 0; position:relative; margin-top:30px;}
.cvpack2 .s4 .base .lens{mix-blend-mode:normal;}
.cvpack2 .s4 .b-a{width:150px; height:150px; left:13%; top:54px;}
.cvpack2 .s4 .b-b{width:104px; height:104px; right:17%; top:84px;}
.cvpack2 .s4 .base .barfield{position:absolute; left:50%; bottom:0; transform:translateX(-50%); width:520px; height:78px; opacity:.85;}
.cvpack2 .s4 .base .barfield .band.g{background:repeating-linear-gradient(90deg,rgba(13,16,10,.55) 0 5px, transparent 5px 12px);}
.cvpack2 .s4 .base .barfield .band.a{background:repeating-linear-gradient(90deg,rgba(13,16,10,.4) 0 5px, transparent 5px 12px);}
.cvpack2 .s4 .base .barfield .band.r{background:repeating-linear-gradient(90deg,rgba(13,16,10,.28) 0 5px, transparent 5px 12px);}
`;function Jo(t){let a={...Ko,...t};h("cvpack2-cover-retailtrend",Js);let e={"--lime-2":a.accentColor},m=Array.isArray(a.crumbs)?a.crumbs:zt.crumbs;return ve("div",{className:"cvpack2",style:e,children:gt("div",{className:"slide s4",children:[gt("div",{className:"top",children:[gt("div",{className:"logo",children:[ve("span",{className:"mk"}),ve("span",{children:a.logo})]}),ve("div",{className:"ph",children:a.phase})]}),gt("div",{className:"body",children:[a.showCrumbs&&ve("div",{className:"crumb cvanim",children:m.map((i,s)=>gt(Qs.Fragment,{children:[ve("span",{className:"c",children:i}),s<m.length-1&&ve("span",{className:"sep"})]},s))}),gt("h1",{className:"cvanim d1",children:[ve("span",{className:"l1",children:a.titleL1}),ve("span",{className:"l2",children:a.titleL2})]}),ve("div",{className:"sub cvanim d2",children:a.sub}),a.showSlogan&&gt("div",{className:"slogan cvanim d3",children:[ve("span",{className:"dotmk"}),a.slogan]})]}),a.showBase&&gt("div",{className:"base",children:[ve("div",{className:"lens b-a"}),ve("div",{className:"lens b-b"}),gt("div",{className:"bars barfield",children:[ve("div",{className:"band g",style:{height:"100%"}}),ve("div",{className:"band a",style:{height:"66%"}}),ve("div",{className:"band r",style:{height:"44%"}})]})]})]})})}var mi={};S(mi,{controls:()=>Zs,default:()=>an,defaultProps:()=>Zo});import"react";import{jsx as fa,jsxs as pt}from"react/jsx-runtime";var dt={markCn:"鏈通集團",markEn:"LIANTONG GROUP",pageno:"03 / 04",pill:"集團供應鏈體系 \xB7 三年發展戰略",eyebrow:"2026 \u2013 2028 Supply Chain Strategy",titleL1:"鏈通全國",titleL2:"高效履約",summary:"打通物流脈絡\uFF0C構築產業護城河",footEn:"3-Year Roadmap"},Zo={...dt,showNetwork:!0,showFrame:!0,accentColor:"#8FE327"},Zs=[{key:"markCn",label:"機構名",type:"text",default:dt.markCn},{key:"markEn",label:"機構英文名",type:"text",default:dt.markEn},{key:"pageno",label:"頁碼",type:"text",default:dt.pageno},{key:"pill",label:"標籤膠囊",type:"text",default:dt.pill},{key:"eyebrow",label:"眉標",type:"text",default:dt.eyebrow},{key:"titleL1",label:"標題行1",type:"text",default:dt.titleL1},{key:"titleL2",label:"標題行2",type:"text",default:dt.titleL2},{key:"summary",label:"底部結語",type:"text",default:dt.summary},{key:"footEn",label:"底部英文",type:"text",default:dt.footEn},{key:"showNetwork",label:"供應鏈網路圖",type:"toggle",default:!0,description:"右側供應鏈節點網路 SVG 裝飾的顯隱\u3002"},{key:"showFrame",label:"內描邊框",type:"toggle",default:!0,description:"高階感內描邊框的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:"#8FE327",options:["#8FE327","#23C76A","#2F7BFF","#F5A623","#FFFFFF"],description:"品牌強調色\uFF08作用於網路節點\u3001高亮詞與短條\uFF09\u3002"}],ap=`
.cvpack{
  --lime:#8FE327;--lime-bright:#B6F24A;--lime-deep:#5FA814;--ink:#0B0F08;--ink-2:#11150D;
  --paper:#FAFAF7;--paper-2:#F1F2EC;--red:#E5484D;--orange:#F5A623;--mut:#6E746A;--line:#E3E4DD;
  --en:'Archivo',sans-serif;--cn:'Noto Sans TC','Archivo',sans-serif;
  position:absolute;inset:0;overflow:hidden;background:var(--paper);color:var(--ink);
  font-family:var(--cn);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
}
.cvpack *{box-sizing:border-box;margin:0;padding:0}
.cvpack .num{font-family:var(--en);font-style:italic;font-weight:800;letter-spacing:-.02em;font-feature-settings:"tnum" 1}
.cvpack .en{font-family:var(--en)}
.cvpack .eyebrow{font-family:var(--en);font-weight:600;font-size:17px;letter-spacing:.32em;text-transform:uppercase;color:var(--mut);white-space:nowrap}
.cvpack .glyph{width:42px;height:42px;border-radius:11px;background:var(--lime);position:relative;flex:none;box-shadow:0 2px 10px rgba(95,168,20,.35)}
.cvpack .glyph::before{content:"";position:absolute;inset:9px;border-radius:50%;border:3.5px solid var(--ink);box-sizing:border-box}
.cvpack .glyph::after{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;border-radius:50%;background:var(--ink);transform:translate(-50%,-50%)}
.cvpack .mark{display:flex;align-items:center;gap:14px}
.cvpack .mark .m-cn{font-family:var(--cn);font-weight:900;font-size:23px;letter-spacing:.04em;line-height:1}
.cvpack .mark .m-en{font-family:var(--en);font-weight:700;font-size:12px;letter-spacing:.22em;color:var(--mut);margin-top:5px;text-transform:uppercase}
.cvpack .mark.on-dark .m-cn{color:#fff}
.cvpack .mark.on-dark .m-en{color:rgba(255,255,255,.6)}
.cvpack .pill{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;font-family:var(--en);font-weight:700;font-size:15px;letter-spacing:.01em}
.cvpack .pill.up{background:var(--lime);color:var(--ink)}
.cvpack .pill.down{background:var(--red);color:#fff}
.cvpack .pill.ghost{background:transparent;border:1.5px solid var(--line);color:var(--mut)}
.cvpack .pill.ghost-d{background:transparent;border:1.5px solid rgba(255,255,255,.22);color:rgba(255,255,255,.78)}
.cvpack .pill .tri{font-size:11px;line-height:1}
.cvpack .cascade{position:absolute;pointer-events:none;transform-style:preserve-3d}
.cvpack .lens{position:absolute;border-radius:50%;transform:rotateX(60deg) rotateZ(-34deg);background:radial-gradient(130% 120% at 32% 22%, rgba(255,255,255,.92), rgba(214,247,140,.6) 34%, rgba(143,227,39,.78) 66%, rgba(95,168,20,.85) 100%);box-shadow:inset 0 0 0 4px rgba(255,255,255,.45),inset 0 14px 40px rgba(255,255,255,.55),inset 0 -18px 38px rgba(70,130,15,.55),0 34px 60px rgba(80,150,20,.30)}
.cvpack .lens::after{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(60% 50% at 64% 70%, rgba(255,255,255,.7), transparent 60%);mix-blend-mode:screen}
.cvpack .chartline{position:absolute;pointer-events:none}
.cvpack .chartline path{fill:none;stroke-linejoin:round;stroke-linecap:round}
.cvpack .pageno{font-family:var(--en);font-weight:600;font-size:16px;letter-spacing:.14em;color:var(--mut)}
.cvpack .hl{position:relative;display:inline-block}
.cvpack .hl::after{content:"";position:absolute;left:-2px;right:-2px;bottom:.12em;height:.20em;background:var(--lime);z-index:-1;border-radius:2px}
`;function an(t){let a={...Zo,...t};h("cvpack-cover-supplystrategy",ap);let e={"--lime":a.accentColor};return pt("div",{className:"cvpack",style:e,children:[fa("div",{style:{position:"absolute",inset:0,background:"radial-gradient(64% 58% at 78% 30%, rgba(143,227,39,.20), transparent 62%),radial-gradient(70% 60% at 8% 100%, rgba(143,227,39,.14), transparent 60%),var(--ink)"}}),a.showFrame&&fa("div",{style:{position:"absolute",inset:"44px",border:"1px solid rgba(255,255,255,.13)",borderRadius:"6px",pointerEvents:"none"}}),a.showNetwork&&pt("svg",{style:{position:"absolute",right:0,top:0,width:"900px",height:"1080px",opacity:.95},viewBox:"0 0 900 1080",preserveAspectRatio:"xMidYMid meet",children:[fa("g",{stroke:"rgba(143,227,39,.42)",strokeWidth:"2",fill:"none",children:fa("path",{d:"M250,520 L470,250 M250,520 L520,470 M250,520 L430,720 M470,250 L700,330 M520,470 L760,560 M430,720 L660,820 M520,470 L470,250 M660,820 L760,560 M700,330 L760,560"})}),fa("g",{stroke:"rgba(143,227,39,.16)",strokeWidth:"1.5",fill:"none",children:fa("path",{d:"M250,520 L150,300 M430,720 L300,920 M700,330 L820,180 M760,560 L860,640"})}),pt("g",{fill:"#0B0F08",stroke:"var(--lime)",children:[fa("circle",{cx:"470",cy:"250",r:"9",strokeWidth:"3"}),fa("circle",{cx:"520",cy:"470",r:"13",strokeWidth:"3.5"}),fa("circle",{cx:"430",cy:"720",r:"9",strokeWidth:"3"}),fa("circle",{cx:"700",cy:"330",r:"8",strokeWidth:"3"}),fa("circle",{cx:"760",cy:"560",r:"10",strokeWidth:"3"}),fa("circle",{cx:"660",cy:"820",r:"8",strokeWidth:"3"})]}),fa("circle",{cx:"250",cy:"520",r:"20",fill:"var(--lime)"}),fa("circle",{cx:"250",cy:"520",r:"34",fill:"none",stroke:"rgba(143,227,39,.4)",strokeWidth:"2"}),fa("circle",{cx:"250",cy:"520",r:"50",fill:"none",stroke:"rgba(143,227,39,.18)",strokeWidth:"1.5"})]}),pt("header",{style:{position:"absolute",left:"90px",top:"82px",right:"90px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[pt("div",{className:"mark on-dark",children:[fa("div",{className:"glyph"}),pt("div",{children:[fa("div",{className:"m-cn",children:a.markCn}),fa("div",{className:"m-en",children:a.markEn})]})]}),fa("span",{className:"pageno","data-dashi-page-number":"fraction","data-dashi-page-separator":" / ","data-editable-skip":"true",style:{color:"rgba(255,255,255,.45)",paddingTop:"6px"},children:a.pageno})]}),pt("div",{style:{position:"absolute",left:"90px",top:"382px",maxWidth:"1040px"},children:[fa("span",{className:"pill ghost-d",style:{fontFamily:"var(--cn)",fontWeight:500,fontSize:"17px",marginBottom:"38px"},children:a.pill}),fa("div",{className:"eyebrow",style:{color:"rgba(255,255,255,.55)",marginBottom:"30px"},children:a.eyebrow}),pt("h1",{style:{fontFamily:"var(--cn)",fontWeight:900,fontSize:"150px",lineHeight:.96,letterSpacing:".02em",color:"#fff"},children:[a.titleL1,fa("br",{}),fa("span",{style:{color:"var(--lime)"},children:a.titleL2})]})]}),pt("footer",{style:{position:"absolute",left:"90px",right:"90px",bottom:"84px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[pt("div",{style:{display:"flex",alignItems:"center",gap:"18px"},children:[fa("span",{style:{width:"4px",height:"46px",background:"var(--lime)",borderRadius:"2px",flex:"none"}}),fa("p",{style:{fontFamily:"var(--cn)",fontWeight:700,fontSize:"28px",color:"#fff",lineHeight:1.35},children:a.summary})]}),fa("p",{style:{fontFamily:"var(--en)",fontWeight:600,fontSize:"19px",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(255,255,255,.5)"},children:a.footEn})]})]})}var gi={};S(gi,{controls:()=>op,default:()=>on,defaultProps:()=>tn});import"react";import"react";import{jsx as Ca,jsxs as At}from"react/jsx-runtime";var ep=`
.aic-viz, .aic-viz * { box-sizing: border-box; }

/* \u2500\u2500 Barcode / heatmap: a row of thin vertical bars \u2500\u2500 */
.aic-viz-bars { display: flex; align-items: flex-end; gap: var(--bc-gap, 3px);
  width: 100%; height: 100%; }
.aic-viz-bars > i { flex: 1 1 0; border-radius: 2px; display: block;
  transform-origin: bottom; transition: height .4s cubic-bezier(.3,.7,.4,1); }

/* \u2500\u2500 Donut \u2500\u2500 */
.aic-viz-donut { display: block; }
.aic-viz-donut text { font-family: var(--aic-font-display); }

/* \u2500\u2500 Horizontal bar row \u2500\u2500 */
.aic-viz-row { display: grid; grid-template-columns: 1fr auto; align-items: baseline;
  gap: 10px 16px; }
.aic-viz-row + .aic-viz-row { margin-top: var(--row-gap, 20px); }
.aic-viz-row-lbl { font-family: var(--aic-font-text); font-weight: 500; }
.aic-viz-row-val { font-family: var(--aic-font-display); font-weight: 600;
  font-variant-numeric: tabular-nums; }
.aic-viz-row-track { grid-column: 1 / -1; height: 10px; border-radius: 999px;
  background: var(--aic-hair); overflow: hidden; }
.aic-viz-row-fill { height: 100%; border-radius: 999px;
  transition: width .5s cubic-bezier(.3,.7,.4,1); }

/* \u2500\u2500 Change badge \u2500\u2500 */
.aic-viz-badge { display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; border-radius: 999px; font-family: var(--aic-font-display);
  font-weight: 600; font-variant-numeric: tabular-nums; line-height: 1;
  white-space: nowrap; }
.aic-viz-badge[data-dir="up"]   { background: color-mix(in srgb, var(--aic-pos) 16%, transparent); color: var(--aic-pos); }
.aic-viz-badge[data-dir="down"] { background: color-mix(in srgb, var(--aic-neg) 14%, transparent); color: var(--aic-neg); }
.aic-viz-badge svg { width: .7em; height: .7em; }

/* \u2500\u2500 Logo mark \u2500\u2500 */
.aic-viz-brand { display: inline-flex; align-items: center; gap: 14px; }
.aic-viz-brand-mark { display: grid; place-items: center; background: var(--aic-ink);
  border-radius: 28%; flex: none; }
.aic-viz-brand-name { display: flex; flex-direction: column; line-height: 1.05; }
.aic-viz-brand-name b { font-family: var(--aic-font-display); font-weight: 700;
  letter-spacing: .14em; }
.aic-viz-brand-name span { font-family: var(--aic-font-display); font-weight: 500;
  letter-spacing: .26em; color: var(--aic-muted); }

/* \u2500\u2500 Big number: significant ink + trailing gray (signature) \u2500\u2500 */
.aic-viz-bignum { font-family: var(--aic-font-display); font-weight: 700; line-height: .82;
  display: inline-flex; align-items: baseline; color: var(--aic-ink);
  font-variant-numeric: lining-nums; white-space: nowrap; }
.aic-viz-bignum .pre { font-weight: 600; margin-right: .04em; }
.aic-viz-bignum .lead { }
.aic-viz-bignum .tail { color: var(--aic-faint); }
.aic-viz-bignum .unit { font-family: var(--aic-font-text); font-weight: 600;
  color: var(--aic-ink-dim); margin-left: .28em; align-self: flex-end; }
.aic-viz-bignum.slant .pre, .aic-viz-bignum.slant .lead, .aic-viz-bignum.slant .tail {
  display: inline-block; transform: skewX(-9deg); transform-origin: bottom; }

/* \u2500\u2500 Lens cluster: overlapping translucent green discs (brand motif) \u2500\u2500 */
.aic-viz-lens { position: relative; pointer-events: none; }
.aic-viz-lens > i { position: absolute; border-radius: 50%; mix-blend-mode: multiply;
  box-shadow: inset 6% 8% 18% rgba(255,255,255,.55), inset -8% -10% 22% rgba(60,110,10,.45); }
.aic-viz-lens > i::after { content: ''; position: absolute; inset: 14%; border-radius: 50%;
  border: 2px solid rgba(255,255,255,.34); }

/* \u2500\u2500 Heat strip: dense market barcode \u2500\u2500 */
.aic-viz-heat { display: flex; align-items: stretch; gap: var(--ht-gap, 4px);
  width: 100%; height: 100%; }
.aic-viz-heat > i { flex: 1 1 0; border-radius: 2px; align-self: stretch; }
`;function Et(){h("aic-viz",ep)}var tp=t=>({pos:"var(--aic-pos)",neg:"var(--aic-neg)",warn:"var(--aic-warn)",accent:"var(--aic-accent)",ink:"var(--aic-ink)",faint:"var(--aic-hair-strong)"})[t]||t||"var(--aic-accent)";function et({segments:t=[],size:a=320,thickness:e=46,focusIndex:m=-1,centerTop:i,centerBottom:s,style:l}){Et();let f=t.reduce((o,r)=>o+r.value,0)||1,p=(a-e)/2,d=2*Math.PI*p,n=0;return At("svg",{className:"aic-viz aic-viz-donut",width:a,height:a,viewBox:`0 0 ${a} ${a}`,style:l,children:[Ca("g",{transform:`rotate(-90 ${a/2} ${a/2})`,children:t.map((o,r)=>{let g=o.value/f,u=g*d,v=m>=0&&m!==r,z=Ca("circle",{cx:a/2,cy:a/2,r:p,fill:"none",stroke:o.color,strokeWidth:e,strokeDasharray:`${u} ${d-u}`,strokeDashoffset:-n*d,opacity:v?.28:1,style:{transition:"opacity .35s, stroke-width .35s"}},r);return n+=g,z})}),i!=null&&Ca("text",{x:"50%",y:"48%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:a*.16,fontWeight:700,fill:"var(--aic-ink)"},children:i}),s!=null&&Ca("text",{x:"50%",y:"62%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:a*.052,fontWeight:500,fill:"var(--aic-muted)",letterSpacing:".04em"},children:s})]})}function he({label:t,display:a,value:e=0,color:m,focus:i=!1,dim:s=!1}){return Et(),At("div",{className:"aic-viz-row",style:{opacity:s?.42:1,transition:"opacity .3s"},children:[Ca("div",{className:"aic-viz-row-lbl",style:{fontSize:i?26:24,color:i?"var(--aic-ink)":"var(--aic-ink-dim)",fontWeight:i?700:500},children:t}),Ca("div",{className:"aic-viz-row-val",style:{fontSize:i?30:26,color:"var(--aic-ink)"},children:a}),Ca("div",{className:"aic-viz-row-track",children:Ca("div",{className:"aic-viz-row-fill",style:{width:e+"%",background:m||(i?"var(--aic-accent)":"var(--aic-ink)")}})})]})}function Tt({value:t,dir:a,style:e}){Et();let m=a||(String(t).trim().startsWith("-")?"down":"up");return At("span",{className:"aic-viz-badge","data-dir":m,style:e,children:[Ca("svg",{viewBox:"0 0 10 10","aria-hidden":"true",children:Ca("path",{d:m==="up"?"M5 1 9 8H1z":"M5 9 1 2h8z",fill:"currentColor"})}),t]})}function ei({size:t=44,label:a="AI CAPITAL LAB",sub:e="FUNDING INTELLIGENCE",showWord:m=!0,style:i}){Et();let s=t*.27;return At("div",{className:"aic-viz aic-viz-brand",style:i,children:[Ca("div",{className:"aic-viz-brand-mark",style:{width:t,height:t},children:At("svg",{width:t*.6,height:t*.6,viewBox:"0 0 24 24","aria-hidden":"true",children:[Ca("circle",{cx:"9",cy:"12",r:"6.4",fill:"none",stroke:"var(--aic-accent)",strokeWidth:"2.4"}),Ca("circle",{cx:"15",cy:"12",r:"6.4",fill:"none",stroke:"#fff",strokeWidth:"2.4",opacity:"0.92"})]})}),m&&At("div",{className:"aic-viz-brand-name",children:[Ca("b",{style:{fontSize:t*.34,color:"var(--aic-ink)"},children:a}),e?Ca("span",{style:{fontSize:t*.2},children:e}):null]})]})}function ha({prefix:t,lead:a,tail:e,unit:m,slant:i=!0,size:s=88,color:l,style:f}){return Et(),At("span",{className:"aic-viz aic-viz-bignum"+(i?" slant":""),style:{fontSize:s,color:l||"var(--aic-ink)",...f},children:[t!=null&&Ca("span",{className:"pre",children:t}),Ca("span",{className:"lead",children:a}),e!=null&&e!==""&&Ca("span",{className:"tail",children:e}),m!=null&&m!==""&&Ca("span",{className:"unit",style:{fontSize:s*.3},children:m})]})}var ip=[{x:30,y:38,d:52},{x:58,y:30,d:40},{x:52,y:64,d:46},{x:76,y:58,d:30}];function A({discs:t=ip,style:a}){return Et(),Ca("div",{className:"aic-viz aic-viz-lens",style:{width:"100%",height:"100%",...a},children:t.map((e,m)=>Ca("i",{style:{left:e.x-e.d/2+"%",top:e.y-e.d/2+"%",width:e.d+"%",height:e.d+"%",background:"radial-gradient(circle at 36% 30%, var(--aic-accent-bright), var(--aic-accent) 52%, var(--aic-accent-deep) 96%)",opacity:.86}},m))})}function k({data:t=[],gap:a=4,style:e}){return Et(),Ca("div",{className:"aic-viz aic-viz-heat",style:{"--ht-gap":a+"px",...e},children:t.map((m,i)=>Ca("i",{style:{background:tp(m.tone||m)}},i))})}import{Fragment as sp,jsx as Wa,jsxs as ut}from"react/jsx-runtime";var en={eyebrow:"AI CAPITAL LAB \xB7 2024",reportTag:"2024 \xB7 調研報告",titleL1:"美國大額融資",titleL2Em:"AI",titleL2Rest:" 公司調研報告",brandLabel:"AI CAPITAL LAB",brandSub:"FUNDING INTELLIGENCE",sub:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u2265 1 億美元",thesis:"在資本與算力的浪潮裡\uFF0C每一筆融資都是一次方向的押注\u3002",closing:"從資本流向\uFF0C看 AI 產業下一階段的真實重心\u3002",featureNumber:"2024",featureLabel:"DATA YEAR",specs:[["年份","2024"],["口徑","\u2265 1 億美元"],["日期","2026.06"],["主題","美國 AI 大額融資"]]},tn={...en,backgroundVariant:"gradient",heroMotif:"both",numberSlant:!0,showDecorations:!0,accentColor:c.accent},op=[{key:"eyebrow",label:"眉標",type:"text",default:"AI CAPITAL LAB \xB7 2024"},{key:"reportTag",label:"標籤",type:"text",default:"2024 \xB7 調研報告"},{key:"titleL1",label:"標題行1",type:"text",default:"美國大額融資"},{key:"sub",label:"次標題",type:"text",default:"資料口徑\uFF1A2024 全年 \xB7 單筆 \u2265 1 億美元"},{key:"thesis",label:"論點",type:"text",default:"在資本與算力的浪潮裡\uFF0C每一筆融資都是一次方向的押注\u3002"},{key:"closing",label:"結語",type:"text",default:"從資本流向\uFF0C看 AI 產業下一階段的真實重心\u3002"},{key:"featureNumber",label:"特徵數字",type:"text",default:"2024"},{key:"featureLabel",label:"特徵標籤",type:"text",default:"DATA YEAR"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"gradient",options:[{value:"gradient",label:"光暈"},{value:"solid",label:"純色"},{value:"dark",label:"深色"}],description:"封面底色與氛圍\uFF1A淺色 + 漸變光暈 / 純淨淺色 / 深色反白\u3002"},{key:"heroMotif",label:"主視覺",type:"radio",default:"both",options:[{value:"lens",label:"透鏡"},{value:"number",label:"數字"},{value:"both",label:"組合"}],description:"右側主視覺\uFF1A品牌透鏡光斑 / 大號焦點數字 / 兩者組合\u3002"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"大號數字採用品牌標誌性的傾斜處理\u3002"},{key:"showDecorations",label:"裝飾元素",type:"toggle",default:!0,description:"頂部標籤\u3001底部熱力條與角落光暈等裝飾細節的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於漸變\u3001透鏡\u3001數字與高亮\u3002"}],np=`
.aic-cover { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink);
  font-family: var(--aic-font-text); --pad: 104px; }
.aic-cover, .aic-cover * { box-sizing: border-box; }
.aic-cover .cvr-glow { position: absolute; inset: 0; pointer-events: none; }

.aic-cover .cvr-header { position: absolute; top: 78px; left: var(--pad);
  right: var(--pad); display: flex; align-items: center; justify-content: space-between; z-index: 3; }
.aic-cover .cvr-tag { font-family: var(--aic-font-display); font-weight: 600;
  font-size: 22px; letter-spacing: .04em; color: var(--aic-ink);
  padding: 11px 22px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong);
  display: inline-flex; align-items: center; gap: 10px; background: color-mix(in srgb, var(--aic-paper) 70%, transparent); }
.aic-cover .cvr-tag b { width: 9px; height: 9px; border-radius: 50%;
  background: var(--aic-accent); display: inline-block; }

/* right hero motif zone */
.aic-cover .cvr-motif { position: absolute; right: -10px; top: 286px;
  width: 560px; height: 560px; z-index: 1; }
.aic-cover .cvr-num { position: absolute; right: 150px; top: 318px; z-index: 2;
  line-height: .8; user-select: none; }
.aic-cover .cvr-num-lbl { position: absolute; right: 156px; top: 280px; z-index: 2;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .34em; color: var(--aic-muted); text-transform: uppercase; }

.aic-cover .cvr-hero { position: absolute; left: var(--pad); top: 286px;
  width: 1080px; z-index: 2; }
.aic-cover .cvr-eyebrow { font-family: var(--aic-font-display); font-weight: 600;
  font-size: 26px; letter-spacing: .22em; color: var(--aic-muted);
  text-transform: uppercase; margin: 0 0 36px; }
.aic-cover .cvr-title { margin: 0; font-family: var(--aic-font-text); font-weight: 900;
  font-size: 130px; line-height: 1.0; letter-spacing: -0.015em; color: var(--aic-ink); }
.aic-cover .cvr-title span { display: block; }
.aic-cover .cvr-title .l2 em { font-style: normal; color: var(--aic-accent-deep); }
.aic-cover .cvr-sub { margin: 38px 0 0; font-size: 30px; color: var(--aic-ink-dim);
  font-weight: 500; letter-spacing: .01em; }

.aic-cover .cvr-thesis { position: absolute; left: var(--pad); bottom: 232px; z-index: 2;
  max-width: 1040px; font-family: var(--aic-font-text); font-weight: 500;
  font-size: 34px; line-height: 1.5; color: var(--aic-ink);
  padding-left: 26px; border-left: 4px solid var(--aic-accent); }

.aic-cover .cvr-deco { position: absolute; left: var(--pad); right: var(--pad);
  bottom: 168px; height: 60px; z-index: 2; }

.aic-cover .cvr-footer { position: absolute; left: var(--pad); right: var(--pad);
  bottom: 74px; display: flex; align-items: flex-end; justify-content: space-between;
  gap: 60px; z-index: 2; }
.aic-cover .cvr-closing { font-family: var(--aic-font-text); font-weight: 500;
  font-size: 27px; color: var(--aic-ink-dim); max-width: 720px; }
.aic-cover .cvr-specs { display: flex; gap: 56px; }
.aic-cover .cvr-spec { display: flex; flex-direction: column; gap: 8px; text-align: right; }
.aic-cover .cvr-spec u { text-decoration: none; font-family: var(--aic-font-display);
  font-weight: 500; font-size: 20px; letter-spacing: .14em; color: var(--aic-faint);
  text-transform: uppercase; }
.aic-cover .cvr-spec b { font-family: var(--aic-font-text); font-weight: 700;
  font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
`;function cp(t){return t==="solid"?{background:"none"}:t==="dark"?{background:"radial-gradient(900px 760px at 88% 64%, color-mix(in srgb, var(--aic-accent) 42%, transparent), transparent 64%),radial-gradient(1100px 820px at -10% 6%, color-mix(in srgb, var(--aic-accent) 16%, transparent), transparent 70%)"}:{background:"radial-gradient(1180px 940px at 122% 4%, color-mix(in srgb, var(--aic-accent-bright) 46%, transparent), transparent 56%),radial-gradient(1080px 940px at -10% 116%, color-mix(in srgb, var(--aic-accent) 62%, transparent), transparent 60%),radial-gradient(720px 600px at 102% 104%, color-mix(in srgb, var(--aic-accent-bright) 54%, transparent), transparent 64%)"}}var lp=["pos","pos","accent","pos","warn","pos","accent","neg","pos","warn","accent","pos","neg","pos","warn","accent","pos","pos","neg","warn","accent","pos","warn","pos","accent","neg","pos","warn","pos","accent","pos","neg","warn","pos","accent","pos","warn","neg","pos","accent","pos","pos","warn","accent","neg","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","warn"].map(t=>({tone:t})),rp=[{x:40,y:34,d:50},{x:64,y:26,d:36},{x:56,y:60,d:46},{x:80,y:54,d:28},{x:34,y:64,d:26}];function on(t){let a={...tn,...t},e={...en,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-cover",np);let m=w(a.accentColor);a.backgroundVariant==="dark"&&Object.assign(m,{"--aic-paper":"#0C0E09","--aic-ink":"#F5F7F0","--aic-ink-dim":"#C8CBC0","--aic-card":"#15180F","--aic-muted":"#8E9286","--aic-faint":"#5E6258","--aic-hair":"rgba(255,255,255,0.12)","--aic-hair-strong":"rgba(255,255,255,0.22)"});let i=a.heroMotif==="lens"||a.heroMotif==="both",s=a.heroMotif==="number"||a.heroMotif==="both";return ut("div",{className:"aic-cover",style:m,children:[Wa("div",{className:"cvr-glow",style:cp(a.backgroundVariant)}),ut("div",{className:"cvr-header",children:[Wa(ei,{size:62,label:e.brandLabel,sub:e.brandSub}),a.showDecorations&&ut("div",{className:"cvr-tag",children:[Wa("b",{}),e.reportTag]})]}),i&&Wa("div",{className:"cvr-motif",children:Wa(A,{discs:rp})}),s&&ut(sp,{children:[a.showDecorations&&Wa("div",{className:"cvr-num-lbl",children:e.featureLabel}),Wa("div",{className:"cvr-num",children:Wa(ha,{lead:e.featureNumber,slant:a.numberSlant,size:158,color:"var(--aic-ink)"})})]}),ut("div",{className:"cvr-hero",children:[Wa("p",{className:"cvr-eyebrow",children:e.eyebrow}),ut("h1",{className:"cvr-title",children:[Wa("span",{className:"l1",children:e.titleL1}),ut("span",{className:"l2",children:[Wa("em",{children:e.titleL2Em}),e.titleL2Rest]})]}),Wa("p",{className:"cvr-sub",children:e.sub})]}),Wa("p",{className:"cvr-thesis",children:e.thesis}),a.showDecorations&&Wa("div",{className:"cvr-deco",children:Wa(k,{data:lp,gap:5})}),ut("div",{className:"cvr-footer",children:[Wa("div",{className:"cvr-closing",children:e.closing}),Wa("div",{className:"cvr-specs",children:e.specs.map(([l,f])=>ut("div",{className:"cvr-spec",children:[Wa("u",{children:l}),Wa("b",{children:f})]},l))})]})]})}var vi={};S(vi,{controls:()=>pp,default:()=>rn,defaultProps:()=>ln});import"react";var Ta=(t,a=0)=>{let e=Number(t);return Number.isFinite(e)?e:a},E=t=>Array.isArray(t)?t:[],Vt=(t,a=1)=>{let e=Number(t);return Number.isFinite(e)&&e!==0?e:a},L=(t,a=1)=>{let e=-1/0;for(let m of E(t)){let i=Number(m);Number.isFinite(i)&&i>e&&(e=i)}return e===-1/0?a:e},ti=(t,a=0)=>{let e=1/0;for(let m of E(t)){let i=Number(m);Number.isFinite(i)&&i<e&&(e=i)}return e===1/0?a:e},ui=(t,a,e)=>{let m=Ta(t,a);return Math.min(Math.max(m,a),e)},M=(t,a,e=0)=>{let m=Number(t),i=Number(a);return!Number.isFinite(m)||!Number.isFinite(i)||i===0?e:m/i};import{jsx as Sa,jsxs as tt}from"react/jsx-runtime";var cn={eyebrow:"Report Overview",title:"報告摘要",sub:"2024 全年 \xB7 資本大年",lead:["2024 年美國 AI 初創公司吸納約 ","970 億美元"," 風險投資\uFF0C單筆 \u2265 1 億美元的大額融資事件達 ","97 筆","\u3002"],keywords:["贏家通吃","AGI 敘事","地理護城河","估值泡沫","退潮看兌現"],closing:"資本仍在湧入 AI\uFF0C但下一階段會從賭敘事轉向看兌現\u3002",chartTitle:"賽道融資佔比",shareLabel:"SHARE",donutCenterLabel:"億美元 \xB7 全年",tracks:[{label:"通用大模型",pct:43.3},{label:"垂直應用",pct:25.3},{label:"基礎設施",pct:16.3},{label:"AI 晶片",pct:10},{label:"其他",pct:5.1}],metrics:[{label:"全年融資",lead:"970",tail:"",unit:"億美元"},{label:"大額事件",lead:"97",tail:"",unit:"筆"},{label:"平均單筆",lead:"10",tail:"",unit:"億美元"},{label:"灣區佔比",lead:"63",tail:".9",unit:"%"}]},xi=["var(--aic-accent)","var(--aic-ink)","#9AA08F","var(--aic-warn)","var(--aic-faint)"],nn=[["pos","pos","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","pos","neg","pos","accent"],["pos","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos"],["warn","pos","accent","pos","neg","pos","warn","accent","pos","pos","accent","pos","warn","pos","accent","neg"],["accent","pos","pos","accent","pos","warn","pos","accent","pos","neg","pos","accent","pos","pos","warn","accent"]].map(t=>t.map(a=>({tone:a}))),ln={...cn,cardCount:4,focusEnabled:!0,focusIndex:0,chartType:"bars",showDecorations:!0,accentColor:c.accent},pp=[{key:"eyebrow",label:"眉標",type:"text",default:"Report Overview"},{key:"title",label:"標題",type:"text",default:"報告摘要"},{key:"sub",label:"次標題",type:"text",default:"2024 全年 \xB7 資本大年"},{key:"closing",label:"結語",type:"text",default:"資本仍在湧入 AI\uFF0C但下一階段會從賭敘事轉向看兌現\u3002"},{key:"chartTitle",label:"chartTitle",type:"text",default:"賽道融資佔比"},{key:"donutCenterLabel",label:"donutCenterLabel",type:"text",default:"億美元 \xB7 全年"},{key:"cardCount",label:"指標卡數量",type:"slider",default:4,min:2,max:4,step:1,description:"底部核心指標卡的數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮其中一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"佔比條"},{value:"donut",label:"環形圖"}],description:"右側賽道佔比的呈現方式\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"關鍵詞標籤與背景光暈等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],dp=`
.aic-sum { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink);
  font-family: var(--aic-font-text); --pad: 96px; }
.aic-sum, .aic-sum * { box-sizing: border-box; }
.aic-sum .sum-glow { position: absolute; right: -6%; top: -10%; width: 60%; height: 60%;
  pointer-events: none; background:
    radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 26%, transparent), transparent 70%); }

.aic-sum .sum-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 30px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-sum .sum-head-l { display: flex; align-items: flex-end; gap: 28px; }
.aic-sum .sum-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 26px; }
.aic-sum .sum-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px;
  line-height: .96; margin: 0; }
.aic-sum .sum-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); letter-spacing: .02em; padding-bottom: 10px; }

.aic-sum .sum-left { position: absolute; left: var(--pad); top: 300px; width: 940px; }
.aic-sum .sum-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 44px;
  line-height: 1.46; margin: 0; letter-spacing: .005em; }
.aic-sum .sum-lead em { font-style: normal; font-weight: 900; color: var(--aic-ink);
  background: linear-gradient(transparent 62%, color-mix(in srgb, var(--aic-accent) 55%, transparent) 0); }
.aic-sum .sum-chips { display: flex; flex-wrap: wrap; gap: 14px; margin: 46px 0 0; }
.aic-sum .sum-chip { font-family: var(--aic-font-text); font-weight: 600; font-size: 23px;
  color: var(--aic-ink-dim); padding: 10px 20px; border-radius: 999px;
  border: 1.5px solid var(--aic-hair-strong); }
.aic-sum .sum-closing { display: flex; align-items: center; gap: 16px; margin: 52px 0 0;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-sum .sum-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-sum .sum-right { position: absolute; right: var(--pad); top: 296px; width: 720px; }
.aic-sum .sum-chart-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 36px;
  display: flex; align-items: center; justify-content: space-between; }
.aic-sum .sum-chart-t span:last-child { color: var(--aic-faint); letter-spacing: .04em; }
.aic-sum .sum-donut-wrap { display: flex; align-items: center; gap: 48px; }
.aic-sum .sum-legend { display: flex; flex-direction: column; gap: 18px; }
.aic-sum .sum-leg { display: flex; align-items: center; gap: 14px; font-family: var(--aic-font-text);
  font-size: 24px; color: var(--aic-ink-dim); }
.aic-sum .sum-leg i { width: 16px; height: 16px; border-radius: 4px; flex: none; }
.aic-sum .sum-leg b { font-family: var(--aic-font-display); font-weight: 600; margin-left: auto;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }

.aic-sum .sum-metrics { position: absolute; left: var(--pad); right: var(--pad); bottom: 80px;
  display: grid; gap: 22px; }
.aic-sum .sum-card { position: relative; border-radius: 20px; padding: 28px 32px 26px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); min-height: 210px; display: flex; flex-direction: column;
  justify-content: space-between; gap: 14px; transition: background .3s, border-color .3s, transform .3s; }
.aic-sum .sum-card[data-focus="1"] { background: var(--aic-accent); border-color: var(--aic-accent);
  transform: translateY(-6px); }
.aic-sum .sum-card-lbl { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .1em; text-transform: uppercase; color: var(--aic-muted); }
.aic-sum .sum-card[data-focus="1"] .sum-card-lbl { color: rgba(14,17,11,.62); }
.aic-sum .sum-card-num { display: flex; align-items: baseline; }
.aic-sum .sum-card[data-focus="1"] .aic-viz-bignum { color: var(--aic-ink) !important; }
.aic-sum .sum-card[data-focus="1"] .aic-viz-bignum .tail { color: rgba(14,17,11,.45); }
.aic-sum .sum-card[data-focus="1"] .aic-viz-bignum .unit { color: rgba(14,17,11,.66); }
.aic-sum .sum-card-heat { height: 14px; }
`;function rn(t){let a={...ln,...t},e={...cn,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-sum",dp);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.cardCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(e.tracks.map(p=>p.pct),1);return tt("div",{className:"aic-sum",style:m,children:[a.showDecorations&&Sa("div",{className:"sum-glow"}),tt("div",{className:"sum-head",children:[Sa("div",{className:"sum-head-l",children:tt("div",{children:[Sa("p",{className:"sum-eyebrow",children:e.eyebrow}),Sa("h2",{className:"sum-title",children:e.title})]})}),Sa("div",{className:"sum-sub",children:e.sub})]}),tt("div",{className:"sum-left",children:[tt("p",{className:"sum-lead",children:[e.lead[0],Sa("em",{children:e.lead[1]}),e.lead[2],Sa("em",{children:e.lead[3]}),e.lead[4]]}),a.showDecorations&&Sa("div",{className:"sum-chips",children:e.keywords.map(p=>Sa("span",{className:"sum-chip",children:p},p))}),tt("div",{className:"sum-closing",children:[Sa("b",{}),e.closing]})]}),tt("div",{className:"sum-right",children:[tt("p",{className:"sum-chart-t",children:[Sa("span",{children:e.chartTitle}),Sa("span",{children:e.shareLabel})]}),a.chartType==="donut"?tt("div",{className:"sum-donut-wrap",children:[Sa(et,{size:300,thickness:44,segments:e.tracks.map((p,d)=>({value:p.pct,color:xi[d]})),centerTop:"970",centerBottom:e.donutCenterLabel}),Sa("div",{className:"sum-legend",children:e.tracks.map((p,d)=>tt("div",{className:"sum-leg",children:[Sa("i",{style:{background:xi[d]}}),p.label,tt("b",{children:[p.pct,"%"]})]},p.label))})]}):Sa("div",{children:e.tracks.map((p,d)=>Sa(he,{label:p.label,display:p.pct+"%",value:M(p.pct,f)*100,color:xi[d],focus:d===0,dim:d!==0&&p.pct<8},p.label))})]}),Sa("div",{className:"sum-metrics",style:{gridTemplateColumns:`repeat(${i}, 1fr)`},children:s.map((p,d)=>{let n=a.focusEnabled&&d===l;return tt("div",{className:"sum-card","data-focus":n?"1":"0",children:[Sa("div",{className:"sum-card-lbl",children:p.label}),Sa("div",{className:"sum-card-num",children:Sa(ha,{lead:p.lead,tail:p.tail,unit:p.unit,size:84})}),a.showDecorations&&Sa("div",{className:"sum-card-heat",children:Sa(k,{gap:3,data:nn[d%nn.length]})})]},p.label)})})]})}var hi={};S(hi,{controls:()=>fp,default:()=>dn,defaultProps:()=>pn});import"react";import{jsx as _e,jsxs as Mt}from"react/jsx-runtime";var sn={eyebrow:"Structure",title:"報告結構",sub:"從方法到結論的閱讀路徑",lead:"整份報告按研究方法\u3001市場全景\u3001橫向透視\u3001產業鏈\u3001典型案例\u3001風險展望\u3001結論和資料來源展開\u3002",closing:"先建立框架\uFF0C再進入資料和判斷\u3002",chapters:[{no:"01",zh:"研究方法",en:"Methodology"},{no:"02",zh:"市場全景",en:"Market Panorama"},{no:"03",zh:"橫向透視",en:"Cross Section"},{no:"04",zh:"產業鏈條",en:"Value Chain"},{no:"05",zh:"典型案例",en:"Case Studies"},{no:"06",zh:"風險展望",en:"Risk & Outlook"},{no:"07",zh:"結論判斷",en:"Conclusion"},{no:"08",zh:"資料來源",en:"Data Sources"}]},pn={...sn,cardCount:8,focusEnabled:!0,focusIndex:1,columns:4,showDecorations:!0,accentColor:c.accent},fp=[{key:"eyebrow",label:"眉標",type:"text",default:"Structure"},{key:"title",label:"標題",type:"text",default:"報告結構"},{key:"sub",label:"次標題",type:"text",default:"從方法到結論的閱讀路徑"},{key:"lead",label:"導言",type:"text",default:"整份報告按研究方法\u3001市場全景\u3001橫向透視\u3001產業鏈\u3001典型案例\u3001風險展望\u3001結論和資料來源展開\u3002"},{key:"closing",label:"結語",type:"text",default:"先建立框架\uFF0C再進入資料和判斷\u3002"},{key:"cardCount",label:"章節卡數量",type:"slider",default:8,min:3,max:8,step:1,description:"展示的章節卡數量\uFF083\u20138\uFF09\u3002"},{key:"columns",label:"每行列數",type:"radio",default:4,options:[{value:3,label:"3 列"},{value:4,label:"4 列"}],description:"章節卡的網格列數\uFF1B3 列僅用於 6 張以內\u3002",dependsOn:"cardCount",dependsOnValues:[3,4,5,6]},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一章節卡作為閱讀重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:1,options:[0,1,2,3,4,5,6,7].map(t=>({value:t,label:"第 "+(t+1)+" 個"})),description:"選擇被高亮的章節卡\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"序號水印與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],mp=`
.aic-toc { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-toc, .aic-toc * { box-sizing: border-box; }
.aic-toc .toc-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-toc .toc-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-toc .toc-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-toc .toc-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; }
.aic-toc .toc-lead { position: absolute; left: var(--pad); top: 272px; width: 1180px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.5;
  color: var(--aic-ink-dim); margin: 0; }

.aic-toc .toc-grid { position: absolute; left: var(--pad); right: var(--pad); top: 430px;
  display: grid; gap: 22px; }
.aic-toc .toc-card { position: relative; overflow: hidden; border-radius: 20px; padding: 30px 30px 34px;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair); min-height: 234px;
  display: flex; flex-direction: column; justify-content: space-between;
  transition: background .3s, border-color .3s, transform .3s; }
.aic-toc .toc-card[data-focus="1"] { background: var(--aic-ink); border-color: var(--aic-ink); transform: translateY(-6px); }
.aic-toc .toc-card-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px;
  color: var(--aic-accent); font-variant-numeric: lining-nums; transform: skewX(-9deg); transform-origin: left bottom; }
.aic-toc .toc-card-watermark { position: absolute; right: -10px; bottom: -42px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 150px; line-height: 1; color: var(--aic-ink); opacity: .05;
  transform: skewX(-9deg); pointer-events: none; }
.aic-toc .toc-card[data-focus="1"] .toc-card-watermark { color: var(--aic-accent); opacity: .16; }
.aic-toc .toc-card-zh { font-family: var(--aic-font-text); font-weight: 700; font-size: 36px; color: var(--aic-ink); margin: 0; }
.aic-toc .toc-card[data-focus="1"] .toc-card-zh { color: #fff; }
.aic-toc .toc-card-en { font-family: var(--aic-font-display); font-weight: 500; font-size: 20px;
  letter-spacing: .14em; text-transform: uppercase; color: var(--aic-muted); margin: 10px 0 0; }
.aic-toc .toc-card[data-focus="1"] .toc-card-en { color: rgba(255,255,255,.6); }
.aic-toc .toc-card-tag { position: absolute; top: 30px; right: 30px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 12px; border-radius: 999px; }

.aic-toc .toc-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-toc .toc-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-toc .toc-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-toc .toc-deco { width: 280px; height: 38px; }
`,gp=["pos","accent","pos","warn","pos","accent","neg","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent"].map(t=>({tone:t}));function dn(t){let a={...pn,...t},e={...sn,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-toc",mp);let m=w(a.accentColor),i=Math.max(3,Math.min(8,a.cardCount)),s=e.chapters.slice(0,i),l=i<=6&&a.columns===3?3:4,f=Math.max(0,Math.min(i-1,a.focusIndex));return Mt("div",{className:"aic-toc",style:m,children:[Mt("div",{className:"toc-head",children:[Mt("div",{children:[_e("p",{className:"toc-eyebrow",children:e.eyebrow}),_e("h2",{className:"toc-title",children:e.title})]}),_e("div",{className:"toc-sub",children:e.sub})]}),_e("p",{className:"toc-lead",children:e.lead}),_e("div",{className:"toc-grid",style:{gridTemplateColumns:`repeat(${l}, 1fr)`},children:s.map((p,d)=>{let n=a.focusEnabled&&d===f;return Mt("div",{className:"toc-card","data-focus":n?"1":"0",children:[a.showDecorations&&_e("span",{className:"toc-card-watermark",children:p.no}),n&&_e("span",{className:"toc-card-tag",children:"重點"}),_e("div",{className:"toc-card-no",children:p.no}),Mt("div",{children:[_e("p",{className:"toc-card-zh",children:p.zh}),_e("p",{className:"toc-card-en",children:p.en})]})]},p.no)})}),Mt("div",{className:"toc-foot",children:[Mt("div",{className:"toc-closing",children:[_e("b",{}),e.closing]}),a.showDecorations&&_e("div",{className:"toc-deco",children:_e(k,{data:gp,gap:4})})]})]})}var bi={};S(bi,{controls:()=>up,default:()=>gn,defaultProps:()=>mn});import"react";import{jsx as _a,jsxs as Ct}from"react/jsx-runtime";var fn={eyebrow:"Methodology",title:"研究方法",sub:"橫縱分析法",lead:"橫向看同一時間截面的公司\u3001賽道\u3001輪次和地區\uFF1B縱向看融資額\u3001事件數和市場節奏的變化\u3002",closing:"不是羅列融資新聞\uFF0C而是把融資資料變成結構化判斷\u3002",layers:[{no:"H",zh:"橫向分析",en:"Horizontal",desc:"同一時間截面下\uFF0C對比公司\u3001賽道\u3001輪次與地區的資本分佈\u3002",q:"錢流向了哪裡\uFF1F"},{no:"V",zh:"縱向分析",en:"Vertical",desc:"沿時間軸觀察融資額\u3001事件數與市場節奏的演化\u3002",q:"熱度如何變化\uFF1F"},{no:"X",zh:"交叉判斷",en:"Cross",desc:"橫縱交叉\u3001產業分層\uFF0C判斷哪些方向真正能夠兌現\u3002",q:"哪些方向能兌現\uFF1F"}],steps:[{label:"空間對比",detail:"橫向"},{label:"時間演化",detail:"縱向"},{label:"產業分層",detail:"交叉"},{label:"資本流向",detail:"目標"}]},mn={...fn,cardCount:3,focusEnabled:!0,focusIndex:2,layout:"stack",showDecorations:!0,accentColor:c.accent},up=[{key:"eyebrow",label:"眉標",type:"text",default:"Methodology"},{key:"title",label:"標題",type:"text",default:"研究方法"},{key:"sub",label:"次標題",type:"text",default:"橫縱分析法"},{key:"lead",label:"導言",type:"text",default:"橫向看同一時間截面的公司\u3001賽道\u3001輪次和地區\uFF1B縱向看融資額\u3001事件數和市場節奏的變化\u3002"},{key:"closing",label:"結語",type:"text",default:"不是羅列融資新聞\uFF0C而是把融資資料變成結構化判斷\u3002"},{key:"cardCount",label:"方法卡數量",type:"slider",default:3,min:1,max:3,step:1,description:"展示的方法層數量\uFF081\u20133\uFF09\u3002"},{key:"layout",label:"排布方式",type:"radio",default:"stack",options:[{value:"stack",label:"堆疊"},{value:"row",label:"並排"}],description:"方法卡的排布\uFF1A縱向堆疊或橫向並排\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一方法層作為重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:2,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的方法卡\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"底部方法鏈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],xp=`
.aic-mth { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-mth, .aic-mth * { box-sizing: border-box; }
.aic-mth .mth-glow { position: absolute; left: -8%; bottom: -14%; width: 56%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }
.aic-mth .mth-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-mth .mth-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-mth .mth-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-mth .mth-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-mth .mth-lead { position: absolute; left: var(--pad); top: 280px; width: 880px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 34px; line-height: 1.5; color: var(--aic-ink); margin: 0; }
.aic-mth .mth-steps { position: absolute; left: var(--pad); top: 540px; display: flex; align-items: stretch; gap: 0; }
.aic-mth .mth-step { display: flex; flex-direction: column; gap: 8px; padding: 0 30px; position: relative; }
.aic-mth .mth-step:first-child { padding-left: 0; }
.aic-mth .mth-step + .mth-step::before { content: ''; position: absolute; left: 0; top: 6px; bottom: 6px;
  width: 1.5px; background: var(--aic-hair-strong); }
.aic-mth .mth-step u { text-decoration: none; font-family: var(--aic-font-display); font-weight: 600; font-size: 17px;
  letter-spacing: .14em; text-transform: uppercase; color: var(--aic-faint); }
.aic-mth .mth-step b { font-family: var(--aic-font-text); font-weight: 700; font-size: 30px; color: var(--aic-ink); }
.aic-mth .mth-closing { position: absolute; left: var(--pad); bottom: 84px; display: flex; align-items: center; gap: 16px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); max-width: 820px; }
.aic-mth .mth-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-mth .mth-cards { position: absolute; right: var(--pad); top: 282px; bottom: 84px; width: 760px; display: flex; }
.aic-mth .mth-cards[data-layout="stack"] { flex-direction: column; gap: 20px; }
.aic-mth .mth-cards[data-layout="row"] { flex-direction: row; gap: 18px; }
.aic-mth .mth-card { position: relative; overflow: hidden; flex: 1; border-radius: 20px; padding: 30px 34px;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair); display: flex; align-items: center; gap: 26px;
  transition: background .3s, border-color .3s, transform .3s; }
.aic-mth .mth-cards[data-layout="row"] .mth-card { flex-direction: column; align-items: flex-start; justify-content: space-between; padding: 30px 26px; }
.aic-mth .mth-card[data-focus="1"] { background: var(--aic-accent); border-color: var(--aic-accent); transform: translateX(-8px); }
.aic-mth .mth-cards[data-layout="row"] .mth-card[data-focus="1"] { transform: translateY(-8px); }
.aic-mth .mth-badge { flex: none; width: 84px; height: 84px; border-radius: 18px; display: grid; place-items: center;
  background: var(--aic-ink); color: var(--aic-accent); font-family: var(--aic-font-display); font-weight: 700;
  font-size: 40px; transform: skewX(-8deg); }
.aic-mth .mth-card[data-focus="1"] .mth-badge { background: var(--aic-ink); color: var(--aic-accent); }
.aic-mth .mth-badge span { transform: skewX(8deg); }
.aic-mth .mth-card-body { display: flex; flex-direction: column; gap: 7px; }
.aic-mth .mth-card-zh { font-family: var(--aic-font-text); font-weight: 700; font-size: 32px; color: var(--aic-ink); margin: 0;
  display: flex; align-items: baseline; gap: 14px; }
.aic-mth .mth-cards[data-layout="row"] .mth-card-zh { flex-direction: column; align-items: flex-start; gap: 10px; line-height: 1.08; }
.aic-mth .mth-card-zh em { font-style: normal; font-family: var(--aic-font-display); font-weight: 500; font-size: 18px;
  letter-spacing: .12em; text-transform: uppercase; color: var(--aic-muted); }
.aic-mth .mth-card[data-focus="1"] .mth-card-zh, .aic-mth .mth-card[data-focus="1"] .mth-card-zh em { color: var(--aic-ink); }
.aic-mth .mth-card[data-focus="1"] .mth-card-zh em { color: rgba(14,17,11,.6); }
.aic-mth .mth-card-desc { font-family: var(--aic-font-text); font-weight: 500; font-size: 22px; line-height: 1.45;
  color: var(--aic-ink-dim); margin: 0; }
.aic-mth .mth-card[data-focus="1"] .mth-card-desc { color: rgba(14,17,11,.74); }
.aic-mth .mth-card-q { font-family: var(--aic-font-text); font-weight: 700; font-size: 22px; color: var(--aic-ink);
  margin: 8px 0 0; opacity: .0; height: 0; transition: opacity .3s; }
.aic-mth .mth-card[data-focus="1"] .mth-card-q { opacity: 1; height: auto; }
.aic-mth .mth-deco { position: absolute; right: var(--pad); bottom: 30px; width: 320px; height: 34px; z-index: 2; }
`,vp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function gn(t){let a={...mn,...t},e={...fn,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-mth",xp);let m=w(a.accentColor),i=Math.max(1,Math.min(3,a.cardCount)),s=e.layers.slice(0,i),l=a.layout==="row"?"row":"stack",f=Math.max(0,Math.min(i-1,a.focusIndex));return Ct("div",{className:"aic-mth",style:m,children:[a.showDecorations&&_a("div",{className:"mth-glow"}),Ct("div",{className:"mth-head",children:[Ct("div",{children:[_a("p",{className:"mth-eyebrow",children:e.eyebrow}),_a("h2",{className:"mth-title",children:e.title})]}),_a("div",{className:"mth-sub",children:e.sub})]}),_a("p",{className:"mth-lead",children:e.lead}),_a("div",{className:"mth-steps",children:e.steps.map(({label:p,detail:d})=>Ct("div",{className:"mth-step",children:[_a("u",{children:d}),_a("b",{children:p})]},p))}),Ct("div",{className:"mth-closing",children:[_a("b",{}),e.closing]}),_a("div",{className:"mth-cards","data-layout":l,children:s.map((p,d)=>Ct("div",{className:"mth-card","data-focus":a.focusEnabled&&d===f?"1":"0",children:[_a("div",{className:"mth-badge",children:_a("span",{children:p.no})}),Ct("div",{className:"mth-card-body",children:[Ct("p",{className:"mth-card-zh",children:[_a("span",{children:p.zh}),_a("em",{children:p.en})]}),_a("p",{className:"mth-card-desc",children:p.desc}),_a("p",{className:"mth-card-q",children:p.q})]})]},p.no))}),a.showDecorations&&_a("div",{className:"mth-deco",children:_a(k,{data:vp,gap:4})})]})}var yi={};S(yi,{controls:()=>hp,default:()=>vn,defaultProps:()=>xn});import"react";import{jsx as xa,jsxs as Xe}from"react/jsx-runtime";var un={eyebrow:"Case Studies",title:"典型案例",titleTail:"深度剖析",sub:"三類資本邏輯的代表公司",lead:"Anthropic\u3001xAI 和 CoreWeave 分別代表安全模型\u3001實時資料生態和算力基礎設施三類資本邏輯\u3002",closing:"不同案例共同指向同一個問題\uFF1A技術優勢能否轉成可持續收入\u3002",cases:[{logic:"安全模型邏輯",en:"Anthropic",zh:"安全可靠模型",chips:["安全對齊","Claude"],lead:"650",plus:!0,unit:"億美元",metricLabel:"累計融資"},{logic:"實時資料邏輯",en:"xAI",zh:"實時資料生態",chips:["實時資料","多模態"],lead:"50",unit:"億美元",metricLabel:"單筆融資"},{logic:"算力設施邏輯",en:"CoreWeave",zh:"算力基礎設施",chips:["GPU 雲","算力資源"],lead:"110",unit:"億美元",metricLabel:"融資額"}]},xn={...un,cardCount:3,imageCount:3,images:[],focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent,renderSlot:null},hp=[{key:"eyebrow",label:"眉標",type:"text",default:"Case Studies"},{key:"title",label:"標題",type:"text",default:"典型案例"},{key:"titleTail",label:"副標題",type:"text",default:"深度剖析"},{key:"sub",label:"次標題",type:"text",default:"三類資本邏輯的代表公司"},{key:"lead",label:"導言",type:"text",default:"Anthropic\u3001xAI 和 CoreWeave 分別代表安全模型\u3001實時資料生態和算力基礎設施三類資本邏輯\u3002"},{key:"closing",label:"結語",type:"text",default:"不同案例共同指向同一個問題\uFF1A技術優勢能否轉成可持續收入\u3002"},{key:"cardCount",label:"卡片數量",type:"slider",default:3,min:1,max:3,step:1,description:"展示的案例卡數量\uFF081\u20133\uFF09\u3002"},{key:"imageCount",label:"圖片呈現",type:"radio",default:3,options:[{value:0,label:"純色紋理"},{value:3,label:"全部圖片"}],description:"僅支援兩種模式\uFF1A所有卡片使用綠色紋理\uFF0C或所有卡片使用圖片\u3002"},{key:"images",label:"圖片",type:"images",countKey:"imageCount",description:"案例卡片可替換圖片\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張案例卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的案例卡\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"重點標籤\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],bp=`
.aic-case { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-case, .aic-case * { box-sizing: border-box; }
.aic-case .cs-glow { position: absolute; right: -6%; top: -10%; width: 54%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-case .cs-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-case .cs-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-case .cs-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-case .cs-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-case .cs-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-case .cs-lead { position: absolute; left: var(--pad); right: var(--pad); top: 280px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.24; color: var(--aic-ink-dim);
  margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

.aic-case .cs-grid { position: absolute; left: var(--pad); right: var(--pad); top: 374px; bottom: 126px;
  display: grid; gap: 28px; align-items: start; }
.aic-case .cs-card { position: relative; display: flex; flex-direction: column; height: 100%;
  border-radius: 24px; overflow: hidden; background: var(--aic-card); border: 1.5px solid var(--aic-hair);
  transition: border-color .3s, transform .3s, box-shadow .3s; }
.aic-case .cs-card[data-focus="1"] { border-color: var(--aic-accent); transform: translateY(-8px);
  box-shadow: 0 24px 60px -28px color-mix(in srgb, var(--aic-accent) 60%, transparent); }
.aic-case .cs-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; }

.aic-case .cs-imgbox { position: relative; width: 100%; height: 210px; flex: 0 0 210px;
  overflow: hidden; background: var(--aic-accent-soft); }
.aic-case .cs-imgbox > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-case .cs-ph { width: 100%; height: 100%; display: grid; place-items: center; }
.aic-case .cs-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em;
  color: var(--aic-ink-dim); }
.aic-case .cs-deco-fill { width: 100%; height: 100%; position: relative; overflow: hidden;
  background:
    radial-gradient(circle at 20% 22%, rgba(255,255,255,.34) 0 9%, transparent 10% 29%),
    radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--aic-accent) 46%, transparent) 0 12%, transparent 13% 34%),
    repeating-linear-gradient(135deg,
      color-mix(in srgb, var(--aic-accent-bright) 70%, white) 0 12px,
      color-mix(in srgb, var(--aic-accent) 88%, white) 12px 24px),
    linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 76%, white), var(--aic-accent) 92%); }
.aic-case .cs-deco-fill::before { content: ""; position: absolute; inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(14,17,11,.08) 0 1px, transparent 1px 18px),
    repeating-linear-gradient(0deg, rgba(14,17,11,.08) 0 1px, transparent 1px 18px);
  mix-blend-mode: multiply; opacity: .58; }
.aic-case .cs-deco-fill::after { content: ""; position: absolute; inset: 18px; border: 1.5px solid rgba(14,17,11,.16);
  border-radius: 18px; pointer-events: none; }
.aic-case .cs-deco-fill .aic-viz-lens { position: absolute; inset: 18px; opacity: .62; }

.aic-case .cs-meta { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 10px; padding: 20px 26px 22px; }
.aic-case .cs-logic { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px;
  letter-spacing: .1em; text-transform: uppercase; color: var(--aic-muted); }
.aic-case .cs-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; line-height: 1;
  color: var(--aic-ink); margin: 0; transform: skewX(-7deg); transform-origin: left bottom; }
.aic-case .cs-zh { font-family: var(--aic-font-text); font-weight: 700; font-size: 23px; color: var(--aic-ink-dim); margin: -2px 0 0; }
.aic-case .cs-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0; }
.aic-case .cs-tag { font-family: var(--aic-font-text); font-weight: 600; font-size: 17px; color: var(--aic-ink-dim);
  padding: 6px 13px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); }
.aic-case .cs-metric { margin-top: auto; padding-top: 14px; border-top: 1.5px solid var(--aic-hair);
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.aic-case .cs-metric .lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted); }

.aic-case .cs-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-case .cs-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-case .cs-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-case .cs-deco { width: 300px; height: 32px; }
`,yp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function wp({i:t}){let a="csph-"+t;return Xe("div",{className:"cs-ph",children:[Xe("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[xa("defs",{children:Xe("pattern",{id:a,width:"14",height:"14",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[xa("rect",{width:"14",height:"14",fill:"var(--aic-accent-soft)"}),xa("line",{x1:"0",y1:"0",x2:"0",y2:"14",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"7"})]})}),xa("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),xa("span",{className:"cs-ph-cap",children:`image_slot_${t+1}`})]})}function vn(t){let a={...xn,...t},e={...un,...Object.fromEntries(Object.entries(a).filter(([,d])=>d!==void 0))};y(),h("aic-case",bp);let m=w(a.accentColor),i=Math.max(1,Math.min(3,a.cardCount)),s=e.cases.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Number(a.imageCount),p=Number.isFinite(f)&&f>=i;return Xe("div",{className:"aic-case",style:m,children:[a.showDecorations&&xa("div",{className:"cs-glow"}),Xe("div",{className:"cs-head",children:[Xe("div",{children:[xa("p",{className:"cs-eyebrow",children:e.eyebrow}),Xe("h2",{className:"cs-title",children:[e.title,Xe("em",{children:["\xB7 ",e.titleTail]})]})]}),xa("div",{className:"cs-sub",children:e.sub})]}),xa("p",{className:"cs-lead",children:e.lead}),xa("div",{className:"cs-grid",style:{gridTemplateColumns:`repeat(${i}, 1fr)`},children:s.map((d,n)=>Xe("div",{className:"cs-card","data-focus":a.focusEnabled&&n===l?"1":"0",children:[a.showDecorations&&a.focusEnabled&&n===l&&xa("span",{className:"cs-badge",children:"重點"}),xa("div",{className:"cs-imgbox",children:p?a.renderSlot?a.renderSlot(n,{fixed:!0}):xa(wp,{i:n}):xa("div",{className:"cs-deco-fill",children:xa(A,{})})}),Xe("div",{className:"cs-meta",children:[xa("div",{className:"cs-logic",children:d.logic}),xa("p",{className:"cs-name",children:d.en}),xa("p",{className:"cs-zh",children:d.zh}),xa("div",{className:"cs-tags",children:d.chips.map(o=>xa("span",{className:"cs-tag",children:o},o))}),Xe("div",{className:"cs-metric",children:[xa(ha,{lead:d.lead+(d.plus?"+":""),unit:d.unit,size:48,slant:!1}),xa("span",{className:"lbl",children:d.metricLabel})]})]})]},d.en))}),Xe("div",{className:"cs-foot",children:[Xe("div",{className:"cs-closing",children:[xa("b",{}),e.closing]}),a.showDecorations&&xa("div",{className:"cs-deco",children:xa(k,{data:yp,gap:4})})]})]})}var wi={};S(wi,{controls:()=>kp,default:()=>yn,defaultProps:()=>bn});import"react";import{jsx as qa,jsxs as Xa}from"react/jsx-runtime";var hn={eyebrow:"Monthly Heatmap",title:"市場月度熱力",sub:"12 個月融資節奏",lead:"月度資料展示全年熱度並非均勻釋放\uFF0C而是由 5 月\u30018 月\u30019 月等峰值月份拉高\u3002",anchorLead:"118",anchorUnit:"億美元",anchorNote:"全年峰值 \xB7 8 月單月最高\uFF0C9 月\u30015 月緊隨其後",closing:"融資節奏的核心不是平均值\uFF0C而是峰值背後的超級交易\u3002",axisLabel:"月度融資額 / 億美元",months:[45,58,59,86,105,93,92,118,108,73,81,52],peaks:[4,7,8],avg:80.8},bn={...hn,chartType:"bars",focusEnabled:!0,focusIndex:7,showSecondary:!0,showDecorations:!0,accentColor:c.accent},kp=[{key:"eyebrow",label:"眉標",type:"text",default:"Monthly Heatmap"},{key:"title",label:"標題",type:"text",default:"市場月度熱力"},{key:"sub",label:"次標題",type:"text",default:"12 個月融資節奏"},{key:"lead",label:"導言",type:"text",default:"月度資料展示全年熱度並非均勻釋放\uFF0C而是由 5 月\u30018 月\u30019 月等峰值月份拉高\u3002"},{key:"anchorLead",label:"錨點數字",type:"text",default:"118"},{key:"anchorUnit",label:"錨點單位",type:"text",default:"億美元"},{key:"anchorNote",label:"錨點註釋",type:"text",default:"全年峰值 \xB7 8 月單月最高\uFF0C9 月\u30015 月緊隨其後"},{key:"closing",label:"結語",type:"text",default:"融資節奏的核心不是平均值\uFF0C而是峰值背後的超級交易\u3002"},{key:"axisLabel",label:"座標標籤",type:"text",default:"月度融資額 / 億美元"},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"熱力柱"},{value:"grid",label:"熱力格"}],description:"月度熱度的呈現方式\uFF1A豎向熱力柱 / 方格熱力圖\u3002"},{key:"showSecondary",label:"輔助序列",type:"toggle",default:!0,description:"疊加月度均值參考線\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個月作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:7,options:Array.from({length:12},(t,a)=>({value:a,label:a+1+" 月"})),description:"選擇被高亮的月份\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"峰值標記\u3001背景光暈與底部條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於熱度配色與高亮\u3002"}],Np=`
.aic-month { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-month, .aic-month * { box-sizing: border-box; }
.aic-month .mo-glow { position: absolute; right: -4%; top: -8%; width: 54%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-month .mo-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-month .mo-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-month .mo-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-month .mo-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-month .mo-rail { position: absolute; left: var(--pad); top: 300px; width: 520px; display: flex; flex-direction: column; }
.aic-month .mo-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 34px; line-height: 1.5; color: var(--aic-ink); margin: 0; }
.aic-month .mo-anchor { margin-top: 56px; }
.aic-month .mo-anchor-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 22px;
  color: var(--aic-muted); margin: 16px 0 0; max-width: 470px; line-height: 1.45; }
.aic-month .mo-closing { display: flex; align-items: center; gap: 16px; margin-top: 60px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-month .mo-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-month .mo-chart { position: absolute; right: var(--pad); top: 300px; width: 1108px; }
.aic-month .mo-chart-t { display: flex; align-items: center; justify-content: space-between; margin: 0 0 20px; }
.aic-month .mo-chart-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); }
.aic-month .mo-leg { display: flex; gap: 22px; }
.aic-month .mo-leg .it { display: flex; align-items: center; gap: 9px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 19px; color: var(--aic-ink-dim); text-transform: none; letter-spacing: 0; }
.aic-month .mo-leg .it i { width: 16px; height: 16px; border-radius: 4px; flex: none; }
.aic-month .mo-leg .it i.dash { height: 0; width: 22px; border-top: 2.5px dashed var(--aic-ink-dim); border-radius: 0; }
.aic-month .mo-svg { display: block; width: 100%; height: auto; }

.aic-month .mo-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-template-rows: repeat(3, 1fr);
  gap: 18px; height: 612px; }
.aic-month .mo-cell { position: relative; min-height: 0; border-radius: 18px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 8px; border: 2px solid transparent; transition: transform .3s, border-color .3s; }
.aic-month .mo-cell[data-peak="1"] { border-color: var(--aic-ink); }
.aic-month .mo-cell[data-focus="1"] { transform: translateY(-8px); border-color: var(--aic-ink); }
.aic-month .mo-cell .v { font-family: var(--aic-font-display); font-weight: 700; font-size: 42px;
  font-variant-numeric: tabular-nums; }
.aic-month .mo-cell .m { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; }
.aic-month .mo-cells-x { display: none; }
`,zp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t})),Wt=1108,It=470,Ae={l:56,r:24,t:44,b:52},Cp=132;function yn(t){let a={...bn,...t},e={...hn,...Object.fromEntries(Object.entries(a).filter(([,N])=>N!==void 0))};y(),h("aic-month",Np);let m=w(a.accentColor),i=E(e.months),s=i.length,l=ti(i,0),f=L(i,1),p=Math.max(0,Math.min(s-1,a.focusIndex)),d=new Set(E(e.peaks)),n=N=>30+(N-l)/(f-l||1)*64,o=(N,x)=>x?"var(--aic-accent)":`color-mix(in srgb, var(--aic-accent) ${n(N)}%, var(--aic-accent-soft))`,r=Wt-Ae.l-Ae.r,g=It-Ae.t-Ae.b,u=N=>Ae.l+r*(N+.5)/s,v=N=>Ae.t+g*(1-N/Cp),z=r/s*.62;return Xa("div",{className:"aic-month",style:m,children:[a.showDecorations&&qa("div",{className:"mo-glow"}),Xa("div",{className:"mo-head",children:[Xa("div",{children:[qa("p",{className:"mo-eyebrow",children:e.eyebrow}),qa("h2",{className:"mo-title",children:e.title})]}),qa("div",{className:"mo-sub",children:e.sub})]}),Xa("div",{className:"mo-rail",children:[qa("p",{className:"mo-lead",children:e.lead}),Xa("div",{className:"mo-anchor",children:[qa(ha,{lead:e.anchorLead,unit:e.anchorUnit,size:132}),qa("p",{className:"mo-anchor-note",children:e.anchorNote})]}),Xa("div",{className:"mo-closing",children:[qa("b",{}),e.closing]})]}),Xa("div",{className:"mo-chart",children:[Xa("div",{className:"mo-chart-t",children:[qa("span",{children:e.axisLabel}),Xa("div",{className:"mo-leg",children:[Xa("div",{className:"it",children:[qa("i",{style:{background:"var(--aic-accent)"}}),"峰值月"]}),a.showSecondary&&Xa("div",{className:"it",children:[qa("i",{className:"dash"}),"月度均值 ",e.avg]})]})]}),a.chartType==="grid"?qa("div",{className:"mo-grid",children:i.map((N,x)=>{let b=d.has(x),C=a.focusEnabled&&x===p;return Xa("div",{className:"mo-cell","data-peak":b?"1":"0","data-focus":C?"1":"0",style:{background:o(N,b)},children:[qa("span",{className:"v",style:{color:"var(--aic-ink)"},children:N}),Xa("span",{className:"m",children:[x+1," 月"]})]},x)})}):Xa("svg",{className:"mo-svg",viewBox:`0 0 ${Wt} ${It}`,preserveAspectRatio:"xMidYMid meet",children:[qa("line",{x1:Ae.l,y1:It-Ae.b,x2:Wt-Ae.r,y2:It-Ae.b,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.showSecondary&&Xa("g",{children:[qa("line",{x1:Ae.l,y1:v(e.avg),x2:Wt-Ae.r,y2:v(e.avg),stroke:"var(--aic-ink-dim)",strokeWidth:"2",strokeDasharray:"4 8",opacity:"0.6"}),Xa("text",{x:Wt-Ae.r,y:v(e.avg)-10,textAnchor:"end",style:{fontFamily:"var(--aic-font-display)",fontSize:17,fontWeight:600,fill:"var(--aic-muted)"},children:["均值 ",e.avg]})]}),i.map((N,x)=>{let b=d.has(x),C=a.focusEnabled&&x===p,T=v(N);return Xa("g",{children:[qa("rect",{x:u(x)-z/2,y:T,width:z,height:It-Ae.b-T,rx:"7",fill:o(N,b),stroke:a.showDecorations&&b||C?"var(--aic-ink)":"none",strokeWidth:C?3:2}),qa("text",{x:u(x),y:T-14,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:b||C?27:21,fill:"var(--aic-ink)"},children:N}),Xa("text",{x:u(x),y:It-Ae.b+32,textAnchor:"middle",style:{fontFamily:"var(--aic-font-text)",fontWeight:600,fontSize:20,fill:b||C?"var(--aic-ink)":"var(--aic-muted)"},children:[x+1," 月"]})]},x)})]})]}),a.showDecorations&&qa("div",{style:{position:"absolute",left:"var(--pad)",bottom:70,width:360,height:30},children:qa(k,{data:zp,gap:4})})]})}var ki={};S(ki,{controls:()=>Ap,default:()=>zn,defaultProps:()=>Nn});import"react";import{jsx as ce,jsxs as ft}from"react/jsx-runtime";var kn={eyebrow:"Top Funded Companies",title:"Top 10 融資公司",sub:"頭部玩家資金排名",lead:"頭部公司融資額顯著領先\uFF0C通用大模型佔據榜單上方位置\u3002",note:"口徑\uFF1A以最大單筆融資計 \xB7 單位 億美元",closing:"頭部融資規模既反映技術敘事\uFF0C也反映資源繫結能力\u3002",companies:[{name:"OpenAI",amount:66,track:"通用大模型"},{name:"Anthropic",amount:65,track:"通用大模型"},{name:"xAI",amount:50,track:"通用大模型"},{name:"CoreWeave",amount:11,track:"基礎設施"},{name:"SSI",amount:10,track:"通用大模型"},{name:"Scale AI",amount:10,track:"基礎設施"},{name:"Figure AI",amount:6.8,track:"具身智慧"},{name:"Perplexity",amount:5.2,track:"垂直應用"},{name:"Databricks",amount:5,track:"基礎設施"},{name:"Glean",amount:2.6,track:"垂直應用"}]},wn={\u901A\u7528\u5927\u6A21\u578B:"var(--aic-accent)",\u57FA\u7840\u8BBE\u65BD:"var(--aic-ink)",\u5177\u8EAB\u667A\u80FD:"var(--aic-warn)",\u5782\u76F4\u5E94\u7528:"#9AA08F"},Sp=["通用大模型","基礎設施","具身智慧","垂直應用"],Nn={...kn,rowCount:10,focusEnabled:!0,focusCount:3,showSecondary:!0,showDecorations:!0,accentColor:c.accent},Ap=[{key:"eyebrow",label:"眉標",type:"text",default:"Top Funded Companies"},{key:"title",label:"標題",type:"text",default:"Top 10 融資公司"},{key:"sub",label:"次標題",type:"text",default:"頭部玩家資金排名"},{key:"lead",label:"導言",type:"text",default:"頭部公司融資額顯著領先\uFF0C通用大模型佔據榜單上方位置\u3002"},{key:"note",label:"note",type:"text",default:"口徑\uFF1A以最大單筆融資計 \xB7 單位 億美元"},{key:"closing",label:"結語",type:"text",default:"頭部融資規模既反映技術敘事\uFF0C也反映資源繫結能力\u3002"},{key:"rowCount",label:"公司數量",type:"slider",default:10,min:5,max:10,step:1,description:"榜單展示的公司數量\uFF085\u201310\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮榜單前列作為視覺重點\u3002"},{key:"focusCount",label:"重點數量",type:"slider",default:3,min:1,max:3,step:1,description:"高亮的前列條目數量\uFF08前 N 名\uFF09\u3002",showWhen:t=>t.focusEnabled},{key:"showSecondary",label:"分類配色",type:"toggle",default:!0,description:"按賽道為條形與圓點配色\uFF1B關閉後為單色\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"賽道圖例\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Ep=`
.aic-rank { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-rank, .aic-rank * { box-sizing: border-box; }
.aic-rank .rk-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 54%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-rank .rk-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-rank .rk-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-rank .rk-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-rank .rk-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-rank .rk-meta { position: absolute; left: var(--pad); right: var(--pad); top: 290px;
  display: flex; align-items: baseline; justify-content: space-between; }
.aic-rank .rk-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.45;
  color: var(--aic-ink); margin: 0; max-width: 1000px; }
.aic-rank .rk-note { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px;
  letter-spacing: .04em; color: var(--aic-faint); white-space: nowrap; }

.aic-rank .rk-list { position: absolute; left: var(--pad); right: var(--pad); top: 392px; bottom: 144px;
  display: flex; flex-direction: column; }
.aic-rank .rk-row { flex: 1; display: grid; grid-template-columns: 64px 340px 1fr 140px; align-items: center;
  gap: 0 26px; border-bottom: 1.5px solid var(--aic-hair); transition: opacity .3s; }
.aic-rank .rk-row:last-child { border-bottom: none; }
.aic-rank .rk-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-faint);
  font-variant-numeric: lining-nums; transform: skewX(-9deg); transform-origin: left center; }
.aic-rank .rk-row[data-focus="1"] .rk-no { color: var(--aic-accent); }
.aic-rank .rk-name { display: flex; align-items: center; gap: 14px; }
.aic-rank .rk-name .dot { width: 14px; height: 14px; border-radius: 4px; flex: none; }
.aic-rank .rk-name b { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink); }
.aic-rank .rk-name em { font-style: normal; font-family: var(--aic-font-text); font-weight: 600; font-size: 18px; color: var(--aic-muted); white-space: nowrap; }
.aic-rank .rk-track { height: 18px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-rank .rk-fill { height: 100%; border-radius: 999px; transition: width .55s cubic-bezier(.3,.7,.4,1); }
.aic-rank .rk-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 38px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-rank .rk-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

.aic-rank .rk-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-rank .rk-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-rank .rk-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-rank .rk-legend { display: flex; gap: 24px; }
.aic-rank .rk-leg { display: flex; align-items: center; gap: 9px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 19px; color: var(--aic-ink-dim); white-space: nowrap; }
.aic-rank .rk-leg i { width: 14px; height: 14px; border-radius: 4px; flex: none; }
`;function zn(t){let a={...Nn,...t},e={...kn,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-rank",Ep);let m=w(a.accentColor),i=e.companies,s=Math.max(5,Math.min(i.length,a.rowCount)),l=i.slice(0,s),f=Math.max(1,Math.min(3,a.focusCount)),p=L(i.map(n=>n.amount),1),d=Sp.filter(n=>l.some(o=>o.track===n));return ft("div",{className:"aic-rank",style:m,children:[a.showDecorations&&ce("div",{className:"rk-glow"}),ft("div",{className:"rk-head",children:[ft("div",{children:[ce("p",{className:"rk-eyebrow",children:e.eyebrow}),ce("h2",{className:"rk-title",children:e.title})]}),ce("div",{className:"rk-sub",children:e.sub})]}),ft("div",{className:"rk-meta",children:[ce("p",{className:"rk-lead",children:e.lead}),ce("div",{className:"rk-note",children:e.note})]}),ce("div",{className:"rk-list",children:l.map((n,o)=>{let r=a.focusEnabled&&o<f,g=a.showSecondary&&wn[n.track]||"var(--aic-ink)",u=r||a.showSecondary?g:"var(--aic-ink-dim)";return ft("div",{className:"rk-row","data-focus":r?"1":"0",style:{opacity:r||!a.focusEnabled?1:.7},children:[ce("div",{className:"rk-no",children:String(o+1).padStart(2,"0")}),ft("div",{className:"rk-name",children:[a.showSecondary&&ce("span",{className:"dot",style:{background:g}}),ce("b",{children:n.name}),ce("em",{children:n.track})]}),ce("div",{className:"rk-track",children:ce("div",{className:"rk-fill",style:{width:M(n.amount,p)*100+"%",background:u,opacity:r?1:.55}})}),ft("div",{className:"rk-val",children:[n.amount,ce("u",{children:"億美元"})]})]},n.name)})}),ft("div",{className:"rk-foot",children:[ft("div",{className:"rk-closing",children:[ce("b",{}),e.closing]}),a.showDecorations&&a.showSecondary&&ce("div",{className:"rk-legend",children:d.map(n=>ft("div",{className:"rk-leg",children:[ce("i",{style:{background:wn[n]}}),n]},n))})]})]})}var zi={};S(zi,{controls:()=>Mp,default:()=>Sn,defaultProps:()=>Cn});import"react";import{Fragment as Ip,jsx as Ga,jsxs as Ge}from"react/jsx-runtime";var Ni={eyebrow:"Heat vs. Monetization",title:"資本熱度 \xD7 商業兌現",sub:"四象限機會判斷",lead:"把資本熱度和商業兌現度交叉\uFF0C可以區分明星兌現\u3001敘事泡沫\u3001隱形價值和等待驗證四類機會\u3002",closing:"資本正在從敘事驅動轉向兌現驅動\u3002",axisX:"商業兌現度",axisY:"資本熱度",axisYNote:"\uFF08融資額與輪次\uFF09",axisXNote:"\uFF08收入確定性\uFF09",quadrants:[{name:"明星兌現",pos:"高熱度 \xB7 高兌現",dirs:["基礎設施","資料平台"],tone:"accent",col:2,row:1},{name:"敘事泡沫",pos:"高熱度 \xB7 低兌現",dirs:["通用模型","AGI 實驗室"],tone:"warn",col:1,row:1},{name:"隱形價值",pos:"低熱度 \xB7 高兌現",dirs:["垂直應用","企業搜尋"],tone:"ink",col:2,row:2},{name:"等待驗證",pos:"低熱度 \xB7 低兌現",dirs:["長尾工具","安全","早期硬體"],tone:"faint",col:1,row:2}]},Tp={accent:"var(--aic-accent)",warn:"var(--aic-warn)",ink:"var(--aic-ink)",faint:"var(--aic-faint)"},Cn={...Ni,focusEnabled:!0,focusIndex:0,showSecondary:!0,showDecorations:!0,accentColor:c.accent},Mp=[{key:"eyebrow",label:"眉標",type:"text",default:"Heat vs. Monetization"},{key:"title",label:"標題",type:"text",default:"資本熱度 \xD7 商業兌現"},{key:"sub",label:"次標題",type:"text",default:"四象限機會判斷"},{key:"lead",label:"導言",type:"text",default:"把資本熱度和商業兌現度交叉\uFF0C可以區分明星兌現\u3001敘事泡沫\u3001隱形價值和等待驗證四類機會\u3002"},{key:"closing",label:"結語",type:"text",default:"資本正在從敘事驅動轉向兌現驅動\u3002"},{key:"axisX",label:"axisX",type:"text",default:"商業兌現度"},{key:"axisY",label:"axisY",type:"text",default:"資本熱度"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一象限作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:Ni.quadrants.map((t,a)=>({value:a,label:t.name})),description:"選擇被高亮的象限\u3002",showWhen:t=>t.focusEnabled},{key:"showSecondary",label:"輔助資訊",type:"toggle",default:!0,description:"各象限代表方向標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"座標軸標籤\u3001箭頭與背景光暈等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Lp=`
.aic-matrix { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-matrix, .aic-matrix * { box-sizing: border-box; }
.aic-matrix .mx-glow { position: absolute; right: 4%; top: 24%; width: 46%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-matrix .mx-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-matrix .mx-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-matrix .mx-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 74px; line-height: .96; margin: 0; white-space: nowrap; }
.aic-matrix .mx-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-matrix .mx-rail { position: absolute; left: var(--pad); top: 320px; width: 560px; display: flex; flex-direction: column; }
.aic-matrix .mx-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 34px; line-height: 1.5; color: var(--aic-ink); margin: 0; }
.aic-matrix .mx-axis-key { margin-top: 52px; display: flex; flex-direction: column; gap: 18px; }
.aic-matrix .mx-axis-key .row { display: flex; align-items: center; gap: 14px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 23px; color: var(--aic-ink-dim); }
.aic-matrix .mx-axis-key .row u { text-decoration: none; font-family: var(--aic-font-display); font-weight: 700; font-size: 20px;
  color: var(--aic-ink); width: 26px; text-align: center; }
.aic-matrix .mx-closing { display: flex; align-items: center; gap: 16px; margin-top: 56px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-matrix .mx-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-matrix .mx-plot { position: absolute; right: var(--pad); top: 300px; width: 980px; height: 690px;
  padding-left: 56px; padding-bottom: 52px; }
.aic-matrix .mx-grid { position: relative; width: 100%; height: 100%; display: grid;
  grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; }
.aic-matrix .mx-cell { position: relative; border-radius: 22px; padding: 30px 32px; overflow: hidden;
  border: 1.5px solid var(--aic-hair); display: flex; flex-direction: column; gap: 12px;
  transition: transform .3s, box-shadow .3s, border-color .3s; }
.aic-matrix .mx-cell[data-focus="1"] { transform: scale(1.03); border-color: transparent;
  box-shadow: 0 24px 60px -28px rgba(14,17,11,.4); }
.aic-matrix .mx-pos { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px;
  letter-spacing: .08em; text-transform: uppercase; }
.aic-matrix .mx-name { font-family: var(--aic-font-text); font-weight: 900; font-size: 44px; line-height: 1; margin: 0; }
.aic-matrix .mx-dirs { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; }
.aic-matrix .mx-dir { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px;
  padding: 8px 16px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); color: var(--aic-ink-dim); }

.aic-matrix .mx-ylab { position: absolute; left: 0; top: 0; bottom: 52px; width: 56px; display: flex;
  align-items: center; justify-content: center; }
.aic-matrix .mx-ylab span { transform: rotate(-90deg); white-space: nowrap; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 20px; letter-spacing: .2em; text-transform: uppercase; color: var(--aic-muted);
  background: var(--aic-paper); padding: 6px 18px; }
.aic-matrix .mx-xlab { position: absolute; left: 56px; right: 0; bottom: 0; height: 52px; display: flex;
  align-items: center; justify-content: center; font-family: var(--aic-font-display); font-weight: 600; font-size: 20px;
  letter-spacing: .2em; text-transform: uppercase; color: var(--aic-muted); }
.aic-matrix .mx-arrow { position: absolute; background: var(--aic-hair-strong); }
.aic-matrix .mx-arrow.y { left: 27px; top: 0; bottom: 52px; width: 2px; }
.aic-matrix .mx-arrow.x { left: 56px; right: 0; bottom: 50px; height: 2px; }

.aic-matrix .mx-deco { position: absolute; left: var(--pad); bottom: 70px; width: 360px; height: 30px; }
`,Fp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function Sn(t){let a={...Cn,...t},e={...Ni,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-matrix",Lp);let m=w(a.accentColor),i=E(e.quadrants),s=Math.max(0,Math.min(i.length-1,a.focusIndex));return Ge("div",{className:"aic-matrix",style:m,children:[a.showDecorations&&Ga("div",{className:"mx-glow"}),Ge("div",{className:"mx-head",children:[Ge("div",{children:[Ga("p",{className:"mx-eyebrow",children:e.eyebrow}),Ga("h2",{className:"mx-title",children:e.title})]}),Ga("div",{className:"mx-sub",children:e.sub})]}),Ge("div",{className:"mx-rail",children:[Ga("p",{className:"mx-lead",children:e.lead}),Ge("div",{className:"mx-axis-key",children:[Ge("div",{className:"row",children:[Ga("u",{children:"\u2195"}),"縱軸 \xB7 ",e.axisY,e.axisYNote]}),Ge("div",{className:"row",children:[Ga("u",{children:"\u2194"}),"橫軸 \xB7 ",e.axisX,e.axisXNote]})]}),Ge("div",{className:"mx-closing",children:[Ga("b",{}),e.closing]})]}),Ge("div",{className:"mx-plot",children:[a.showDecorations&&Ge(Ip,{children:[Ga("div",{className:"mx-arrow y"}),Ga("div",{className:"mx-arrow x"}),Ga("div",{className:"mx-ylab",children:Ge("span",{children:[e.axisY," 低 \u2192 高"]})}),Ge("div",{className:"mx-xlab",children:[e.axisX," 低 \u2192 高"]})]}),Ga("div",{className:"mx-grid",children:i.map((l,f)=>{let p=a.focusEnabled&&f===s,d=Tp[l.tone],n=`color-mix(in srgb, ${d} 9%, var(--aic-card))`,o=l.tone==="ink",r=p&&o?"#fff":"var(--aic-ink)";return Ge("div",{className:"mx-cell",style:{gridColumn:l.col,gridRow:l.row,background:p?d:n,color:r},children:[Ga("span",{className:"mx-pos",style:{color:p?o?"rgba(255,255,255,.6)":"rgba(14,17,11,.55)":d},children:l.pos}),Ga("h3",{className:"mx-name",style:{color:r},children:l.name}),a.showSecondary&&Ga("div",{className:"mx-dirs",children:l.dirs.map(g=>Ga("span",{className:"mx-dir",style:p?{color:o?"#fff":"var(--aic-ink)",borderColor:o?"rgba(255,255,255,.35)":"rgba(14,17,11,.3)"}:void 0,children:g},g))})]},l.name)})})]}),a.showDecorations&&Ga("div",{className:"mx-deco",children:Ga(k,{data:Fp,gap:4})})]})}var Ci={};S(Ci,{controls:()=>Rp,default:()=>Mn,defaultProps:()=>Tn});import"react";import{jsx as la,jsxs as Pe}from"react/jsx-runtime";var En={eyebrow:"Risk Assessment",title:"風險研判",sub:"資本大年背後的下行因素",lead:"高估值\u3001盈利驗證\u3001監管壓力\u3001大廠競爭和算力成本共同構成風險鏈條\u3002",chainTitle:"風險傳導鏈",closing:"下一階段會淘汰只會講故事的公司\u3002",risks:[{node:"高估值",title:"估值泡沫",desc:"一級估值透支遠期增長預期"},{node:"盈利驗證",title:"盈利模式未驗證",desc:"試點難以轉化為穩定訂閱收入"},{node:"監管壓力",title:"監管成本上升",desc:"隱私\u3001版權與合規推高交付成本"},{node:"大廠競爭",title:"開源與大廠擠壓",desc:"開源逼近能力\uFF0C大廠壓縮獨立空間"},{node:"算力成本",title:"算力供應鏈卡脖子",desc:"推理成本居高不下\uFF0C吞噬毛利"}]},An={portrait:3/4,landscape:4/3,square:1,auto:null},Tn={...En,cardCount:5,images:[],imageCount:1,imageRatio:"portrait",focusEnabled:!0,focusIndex:0,showSecondary:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Rp=[{key:"eyebrow",label:"眉標",type:"text",default:"Risk Assessment"},{key:"title",label:"標題",type:"text",default:"風險研判"},{key:"sub",label:"次標題",type:"text",default:"資本大年背後的下行因素"},{key:"lead",label:"導言",type:"text",default:"高估值\u3001盈利驗證\u3001監管壓力\u3001大廠競爭和算力成本共同構成風險鏈條\u3002"},{key:"chainTitle",label:"chainTitle",type:"text",default:"風險傳導鏈"},{key:"closing",label:"結語",type:"text",default:"下一階段會淘汰只會講故事的公司\u3002"},{key:"cardCount",label:"卡片數量",type:"slider",default:5,min:2,max:5,step:1,description:"展示的風險卡數量\uFF082\u20135\uFF09\u3002"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:1,step:1,description:"主視覺圖片槽數量\uFF080\u20131\uFF09\uFF1B為 0 時風險卡佔據整頁寬度\u3002圖片以裁切填充側欄\uFF0C可按兩下重新取景\u3002"},{key:"showSecondary",label:"輔助資訊",type:"toggle",default:!0,description:"頂部風險傳導鏈的顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一項風險作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[0,1,2,3,4].map(t=>({value:t,label:"第 "+(t+1)+" 個"})),description:"選擇被高亮的風險卡\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"警示標記\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Dp=`
.aic-risk { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-risk, .aic-risk * { box-sizing: border-box; }
.aic-risk .rs-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-neg) 14%, transparent), transparent 70%); }

.aic-risk .rs-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-risk .rs-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-risk .rs-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-risk .rs-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-risk .rs-lead { position: absolute; left: var(--pad); top: 286px; width: 1320px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.5; color: var(--aic-ink-dim); margin: 0; }

.aic-risk .rs-body { position: absolute; left: var(--pad); right: var(--pad); top: 392px; bottom: 130px;
  display: grid; gap: 48px; align-items: stretch; }
.aic-risk .rs-imgbox { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 24px;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); }
.aic-risk .rs-imgbox > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-risk .rs-ph { width: 100%; height: 100%; display: grid; place-items: center; }
.aic-risk .rs-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 18px; letter-spacing: .06em; color: var(--aic-ink-dim); }

.aic-risk .rs-right { display: flex; flex-direction: column; min-width: 0; min-height: 0; }
.aic-risk .rs-chain { flex: none; display: flex; align-items: stretch; gap: 0; margin-bottom: 22px; }
.aic-risk .rs-chain-node { position: relative; flex: 1; display: flex; flex-direction: column; align-items: center; gap: 7px;
  padding: 8px 6px; }
.aic-risk .rs-chain-node .dot { width: 14px; height: 14px; border-radius: 50%; background: var(--aic-neg); }
.aic-risk .rs-chain-node .lbl { font-family: var(--aic-font-text); font-weight: 700; font-size: 20px; color: var(--aic-ink); white-space: nowrap; }
.aic-risk .rs-chain-node + .rs-chain-node::before { content: '\u2192'; position: absolute; left: -8px; top: 14px;
  font-size: 22px; color: var(--aic-faint); }

.aic-risk .rs-cards { flex: 1 1 0%; min-height: 0; display: grid; gap: 13px; grid-auto-rows: 1fr; align-content: stretch; }
.aic-risk .rs-card { position: relative; overflow: hidden; border-radius: 18px; padding: 14px 26px; min-height: 0;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair); display: flex; align-items: center; gap: 22px;
  transition: background .3s, border-color .3s, transform .3s; }
.aic-risk .rs-card[data-focus="1"] { background: var(--aic-ink); border-color: var(--aic-ink); transform: translateX(8px); }
.aic-risk .rs-warn { flex: none; width: 46px; height: 46px; display: grid; place-items: center; }
.aic-risk .rs-warn svg { width: 46px; height: 46px; }
.aic-risk .rs-card-body { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.aic-risk .rs-card-t { font-family: var(--aic-font-text); font-weight: 700; font-size: 26px; color: var(--aic-ink); margin: 0; }
.aic-risk .rs-card[data-focus="1"] .rs-card-t { color: #fff; }
.aic-risk .rs-card-d { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; color: var(--aic-muted); margin: 0; }
.aic-risk .rs-card[data-focus="1"] .rs-card-d { color: rgba(255,255,255,.7); }
.aic-risk .rs-card-no { flex: none; font-family: var(--aic-font-display); font-weight: 700; font-size: 24px;
  color: var(--aic-faint); transform: skewX(-9deg); font-variant-numeric: lining-nums; }
.aic-risk .rs-card[data-focus="1"] .rs-card-no { color: var(--aic-neg); }

.aic-risk .rs-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-risk .rs-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-risk .rs-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-risk .rs-deco { width: 300px; height: 30px; }
`,Bp=["neg","warn","neg","neg","warn","neg","warn","neg","neg","warn","neg","neg","warn","neg","neg","warn","neg","neg","warn","neg","neg","warn","neg","warn","neg","neg","warn","neg","neg","warn","neg","neg","warn","neg","neg","warn"].map(t=>({tone:t}));function jp({color:t}){return Pe("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[la("path",{d:"M12 3 L22 20 H2 Z",fill:"none",stroke:t,strokeWidth:"2",strokeLinejoin:"round"}),la("line",{x1:"12",y1:"9.5",x2:"12",y2:"14.5",stroke:t,strokeWidth:"2.2",strokeLinecap:"round"}),la("circle",{cx:"12",cy:"17.4",r:"1.25",fill:t})]})}function Pp(){return Pe("div",{className:"rs-ph",children:[Pe("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[la("defs",{children:Pe("pattern",{id:"rsph",width:"14",height:"14",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[la("rect",{width:"14",height:"14",fill:"var(--aic-accent-soft)"}),la("line",{x1:"0",y1:"0",x2:"0",y2:"14",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"7"})]})}),la("rect",{width:"100%",height:"100%",fill:"url(#rsph)"})]}),la("span",{className:"rs-ph-cap",children:"image_slot_1"})]})}function Mn(t){let a={...Tn,...t},e={...En,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-risk",Dp);let m=w(a.accentColor),i=Math.max(2,Math.min(5,a.cardCount)),s=e.risks.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(0,Math.min(1,a.imageCount))>0,p=An.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",d=An[p];return Pe("div",{className:"aic-risk",style:m,children:[a.showDecorations&&la("div",{className:"rs-glow"}),Pe("div",{className:"rs-head",children:[Pe("div",{children:[la("p",{className:"rs-eyebrow",children:e.eyebrow}),la("h2",{className:"rs-title",children:e.title})]}),la("div",{className:"rs-sub",children:e.sub})]}),la("p",{className:"rs-lead",children:e.lead}),Pe("div",{className:"rs-body",style:{gridTemplateColumns:f?"640px 1fr":"1fr"},children:[f&&la("div",{className:"rs-imgbox",children:a.renderSlot?a.renderSlot(0,{ratio:p,ratioAR:d}):la(Pp,{})}),Pe("div",{className:"rs-right",children:[a.showSecondary&&la("div",{className:"rs-chain",children:s.map(n=>Pe("div",{className:"rs-chain-node",children:[la("span",{className:"dot"}),la("span",{className:"lbl",children:n.node})]},n.node))}),la("div",{className:"rs-cards",style:{gridTemplateColumns:f?"1fr":"repeat(2, 1fr)"},children:s.map((n,o)=>{let r=a.focusEnabled&&o===l;return Pe("div",{className:"rs-card","data-focus":r?"1":"0",children:[la("span",{className:"rs-card-no",children:String(o+1).padStart(2,"0")}),a.showDecorations&&la("span",{className:"rs-warn",children:la(jp,{color:r?"var(--aic-warn)":"var(--aic-neg)"})}),Pe("div",{className:"rs-card-body",children:[la("p",{className:"rs-card-t",children:n.title}),la("p",{className:"rs-card-d",children:n.desc})]})]},n.title)})})]})]}),Pe("div",{className:"rs-foot",children:[Pe("div",{className:"rs-closing",children:[la("b",{}),e.closing]}),a.showDecorations&&la("div",{className:"rs-deco",children:la(k,{data:Bp,gap:4})})]})]})}var Si={};S(Si,{controls:()=>Op,default:()=>Rn,defaultProps:()=>In});import"react";import{jsx as Ia,jsxs as ct}from"react/jsx-runtime";var Fn={eyebrow:"Investment Outlook",title:"投資建議與階段性策略",sub:"看好方向與謹慎方向",lead:"後續觀察應圍繞收入兌現\u3001基礎設施確定性和垂直應用 PMF 展開\u3002",closing:"看融資只是起點\uFF0C看兌現才是判斷\u3002",timelineLabel:"階段性觀察 \xB7 2025 \u2014 2027",columns:[{kind:"看好方向",en:"Conviction",tone:"accent",items:[{name:"垂直應用",note:"嵌入剛性工作流\uFF0C驗證 PMF"},{name:"基礎設施",note:"GPU 雲與資料平台\uFF0C剛性預算"},{name:"具身智慧",note:"軟體能力延伸到物理場景"}]},{kind:"謹慎方向",en:"Caution",tone:"neg",items:[{name:"高估值純模型",note:"敘事透支遠期增長預期"},{name:"AI 包裝專案",note:"缺乏壁壘\uFF0C易被快速替代"},{name:"低壁壘消費應用",note:"留存與付費意願不足"}]}],nodes:[{year:"2025",title:"收入兌現",note:"看試點能否轉為穩定訂閱"},{year:"2026",title:"IPO 視窗",note:"頭部上市重定價估值錨"},{year:"2027",title:"商業閉環",note:"能形成閉環的方向勝出"}]},Ln={accent:"var(--aic-accent)",neg:"var(--aic-neg)",warn:"var(--aic-warn)",ink:"var(--aic-ink)"},In={...Fn,columnCount:2,itemCount:3,focusEnabled:!0,focusIndex:0,showTimeline:!0,nodeCount:3,showDecorations:!0,accentColor:c.accent},Op=[{key:"eyebrow",label:"眉標",type:"text",default:"Investment Outlook"},{key:"title",label:"標題",type:"text",default:"投資建議與階段性策略"},{key:"sub",label:"次標題",type:"text",default:"看好方向與謹慎方向"},{key:"lead",label:"導言",type:"text",default:"後續觀察應圍繞收入兌現\u3001基礎設施確定性和垂直應用 PMF 展開\u3002"},{key:"closing",label:"結語",type:"text",default:"看融資只是起點\uFF0C看兌現才是判斷\u3002"},{key:"timelineLabel",label:"timelineLabel",type:"text",default:"階段性觀察 \xB7 2025 \u2014 2027"},{key:"kind",label:"kind",type:"text",default:"看好方向', en: 'Conviction', tone: 'accent"},{key:"kind",label:"kind",type:"text",default:"謹慎方向', en: 'Caution', tone: 'neg"},{key:"columnCount",label:"對比欄數量",type:"slider",default:2,min:1,max:2,step:1,description:"並排對比欄數量\uFF081\u20132\uFF09\uFF1B為 1 時單欄佔據整行\u3002"},{key:"itemCount",label:"條目數量",type:"slider",default:3,min:1,max:3,step:1,description:"每個對比欄內的方向條目數量\uFF081\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個對比欄作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 欄"},{value:1,label:"第 2 欄"}],description:"選擇被高亮的對比欄\u3002",showWhen:t=>t.focusEnabled},{key:"showTimeline",label:"階段時間軸",type:"toggle",default:!0,description:"底部階段性時間軸的顯隱\u3002"},{key:"nodeCount",label:"節點數量",type:"slider",default:3,min:2,max:3,step:1,description:"時間軸上的階段節點數量\uFF082\u20133\uFF09\u3002",showWhen:t=>t.showTimeline},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Hp=`
.aic-out { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-out, .aic-out * { box-sizing: border-box; }
.aic-out .ou-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-out .ou-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-out .ou-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-out .ou-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 74px; line-height: .96; margin: 0; white-space: nowrap; }
.aic-out .ou-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-out .ou-lead { position: absolute; left: var(--pad); top: 252px; width: 1320px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.5; color: var(--aic-ink-dim); margin: 0; }

.aic-out .ou-cols { position: absolute; left: var(--pad); right: var(--pad); top: 356px;
  display: grid; gap: 30px; }
.aic-out .ou-col { position: relative; border-radius: 26px; padding: 28px 38px 20px;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair); display: flex; flex-direction: column;
  transition: border-color .3s, box-shadow .3s, transform .3s; }
.aic-out .ou-col[data-focus="1"] { transform: translateY(-6px);
  box-shadow: 0 26px 64px -30px color-mix(in srgb, var(--col-tone) 60%, transparent); border-color: var(--col-tone); }
.aic-out .ou-col-hd { display: flex; align-items: baseline; gap: 18px; padding-bottom: 18px;
  border-bottom: 1.5px solid var(--aic-hair); margin-bottom: 4px; }
.aic-out .ou-col-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--col-tone); flex: none; align-self: center; }
.aic-out .ou-col-kind { font-family: var(--aic-font-text); font-weight: 900; font-size: 40px; line-height: 1; color: var(--aic-ink); }
.aic-out .ou-col-en { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .2em;
  text-transform: uppercase; color: var(--aic-muted); margin-left: auto; }
.aic-out .ou-item { display: flex; align-items: baseline; gap: 20px; padding: 15px 0;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-out .ou-item:last-child { border-bottom: 0; }
.aic-out .ou-item-idx { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--col-tone);
  width: 40px; flex: none; font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; }
.aic-out .ou-item-main { display: flex; flex-direction: column; gap: 4px; }
.aic-out .ou-item-name { font-family: var(--aic-font-text); font-weight: 700; font-size: 30px; color: var(--aic-ink); line-height: 1.1; }
.aic-out .ou-item-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 21px; color: var(--aic-muted); line-height: 1.35; }

.aic-out .ou-tl { position: absolute; left: var(--pad); right: var(--pad); bottom: 128px; }
.aic-out .ou-tl-cap { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 26px; }
.aic-out .ou-tl-track { position: relative; height: 2px; background: var(--aic-hair-strong); }
.aic-out .ou-tl-track::after { content: ''; position: absolute; right: -2px; top: -5px; border: 6px solid transparent;
  border-left-color: var(--aic-ink); }
.aic-out .ou-tl-nodes { display: grid; }
.aic-out .ou-tl-node { position: relative; padding-top: 30px; }
.aic-out .ou-tl-node::before { content: ''; position: absolute; top: -7px; left: 0; width: 16px; height: 16px;
  border-radius: 50%; background: var(--aic-paper); border: 4px solid var(--aic-accent); }
.aic-out .ou-tl-year { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-out .ou-tl-ttl { font-family: var(--aic-font-text); font-weight: 700; font-size: 24px; color: var(--aic-ink); margin: 8px 0 4px; }
.aic-out .ou-tl-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; color: var(--aic-muted); line-height: 1.35; max-width: 360px; }

.aic-out .ou-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-out .ou-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-out .ou-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-out .ou-deco { width: 300px; height: 30px; }
`,Vp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function Rn(t){let a={...In,...t},e={...Fn,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-out",Hp);let m=w(a.accentColor),i=Math.max(1,Math.min(2,a.columnCount)),s=e.columns.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(1,Math.min(3,a.itemCount)),p=Math.max(2,Math.min(E(e.nodes).length,Ta(a.nodeCount,3))),d=E(e.nodes).slice(0,p);return ct("div",{className:"aic-out",style:m,children:[a.showDecorations&&Ia("div",{className:"ou-glow"}),ct("div",{className:"ou-head",children:[ct("div",{children:[Ia("p",{className:"ou-eyebrow",children:e.eyebrow}),Ia("h2",{className:"ou-title",children:e.title})]}),Ia("div",{className:"ou-sub",children:e.sub})]}),Ia("p",{className:"ou-lead",children:e.lead}),Ia("div",{className:"ou-cols",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,bottom:a.showTimeline?326:150},children:s.map((n,o)=>{let r=a.focusEnabled&&o===l;return ct("div",{className:"ou-col","data-focus":r?"1":"0",style:{"--col-tone":Ln[n.tone],background:r?`color-mix(in srgb, ${Ln[n.tone]} 7%, var(--aic-card))`:"var(--aic-card)"},children:[ct("div",{className:"ou-col-hd",children:[Ia("span",{className:"ou-col-dot"}),Ia("span",{className:"ou-col-kind",children:n.kind}),Ia("span",{className:"ou-col-en",children:n.en})]}),n.items.slice(0,f).map((g,u)=>ct("div",{className:"ou-item",children:[Ia("span",{className:"ou-item-idx",children:String(u+1).padStart(2,"0")}),ct("div",{className:"ou-item-main",children:[Ia("span",{className:"ou-item-name",children:g.name}),Ia("span",{className:"ou-item-note",children:g.note})]})]},g.name))]},n.en)})}),a.showTimeline&&ct("div",{className:"ou-tl",children:[Ia("p",{className:"ou-tl-cap",children:e.timelineLabel}),Ia("div",{className:"ou-tl-track"}),Ia("div",{className:"ou-tl-nodes",style:{gridTemplateColumns:`repeat(${p}, 1fr)`},children:d.map(n=>ct("div",{className:"ou-tl-node",children:[Ia("span",{className:"ou-tl-year",children:n.year}),Ia("div",{className:"ou-tl-ttl",children:n.title}),Ia("div",{className:"ou-tl-note",children:n.note})]},n.year))})]}),ct("div",{className:"ou-foot",children:[ct("div",{className:"ou-closing",children:[Ia("b",{}),e.closing]}),a.showDecorations&&Ia("div",{className:"ou-deco",children:Ia(k,{data:Vp,gap:4})})]})]})}var Ai={};S(Ai,{controls:()=>Wp,default:()=>jn,defaultProps:()=>Bn});import"react";import{jsx as Qa,jsxs as Rt}from"react/jsx-runtime";var Dn={eyebrow:"Conclusion",kicker:"結論與資料來源",quoteLead:"資本下一階段\uFF0C將從",quoteEm1:"賭敘事",quoteMid:"轉向",quoteEm2:"看兌現",quoteTail:"\u3002",conclusions:[{idx:"01",title:"頭部集中",note:"少數超級交易決定年度曲線與市場情緒"},{idx:"02",title:"地理護城河",note:"灣區集聚人才\u3001資本與算力\uFF0C短期難以撼動"},{idx:"03",title:"兌現為王",note:"能形成商業閉環的方向才會穿越退潮"}],source:"資料來源 \xB7 AI Capital Lab 自建資料庫 / 公開融資披露 \xB7 2024 全年口徑 \u22651 億美元"},Bn={...Dn,align:"center",showConclusions:!0,conclusionCount:3,showQuoteMark:!0,showSource:!0,showDecorations:!0,accentColor:c.accent},Wp=[{key:"eyebrow",label:"眉標",type:"text",default:"Conclusion"},{key:"kicker",label:"kicker",type:"text",default:"結論與資料來源"},{key:"quoteLead",label:"quoteLead",type:"text",default:"資本下一階段\uFF0C將從"},{key:"quoteEm1",label:"quoteEm1",type:"text",default:"賭敘事"},{key:"quoteMid",label:"quoteMid",type:"text",default:"轉向"},{key:"quoteEm2",label:"quoteEm2",type:"text",default:"看兌現"},{key:"quoteTail",label:"quoteTail",type:"text",default:"\u3002"},{key:"source",label:"來源",type:"text",default:"資料來源 \xB7 AI Capital Lab 自建資料庫 / 公開融資披露 \xB7 2024 全年口徑 \u22651 億美元"},{key:"align",label:"對齊方式",type:"radio",default:"center",options:[{value:"center",label:"居中"},{value:"left",label:"左對齊"}],description:"金句與輔助資訊的整體對齊方式\u3002"},{key:"showConclusions",label:"輔助資訊",type:"toggle",default:!0,description:"底部核心結論行的顯隱\u3002"},{key:"conclusionCount",label:"結論數量",type:"slider",default:3,min:0,max:3,step:1,description:"展示的核心結論條目數量\uFF080\u20133\uFF09\u3002",showWhen:t=>t.showConclusions},{key:"showQuoteMark",label:"引號裝飾",type:"toggle",default:!0,description:"超大引號裝飾符號的顯隱\u3002"},{key:"showSource",label:"資料來源",type:"toggle",default:!0,description:"底部資料來源說明行的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001鏡頭光斑與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於金句重點詞與裝飾\u3002"}],qp=`
.aic-quote { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 120px; }
.aic-quote, .aic-quote * { box-sizing: border-box; }
.aic-quote .qt-glow { position: absolute; left: 50%; top: 40%; width: 70%; height: 80%; transform: translate(-50%,-50%);
  pointer-events: none; background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 18%, transparent), transparent 70%); }
.aic-quote .qt-lens { position: absolute; right: 96px; bottom: 150px; width: 260px; height: 260px; opacity: .9; }

.aic-quote .qt-eyebrow { position: absolute; top: 96px; left: var(--pad); right: var(--pad);
  display: flex; align-items: center; gap: 22px; font-family: var(--aic-font-display); font-weight: 600;
  font-size: 22px; letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); }
.aic-quote .qt-eyebrow i { flex: none; width: 11px; height: 11px; border-radius: 50%; background: var(--aic-accent); }
.aic-quote .qt-eyebrow s { flex: 1; height: 1.5px; background: var(--aic-hair); text-decoration: none; }
.aic-quote .qt-eyebrow b { font-family: var(--aic-font-text); font-weight: 700; letter-spacing: .04em;
  text-transform: none; font-size: 22px; color: var(--aic-ink-dim); }

.aic-quote .qt-body { position: absolute; left: var(--pad); right: var(--pad); top: 50%; transform: translateY(-54%);
  display: flex; flex-direction: column; }
.aic-quote.is-center .qt-body { align-items: center; text-align: center; }
.aic-quote.is-left .qt-body { align-items: flex-start; text-align: left; }

.aic-quote .qt-mark { font-family: var(--aic-font-display); font-weight: 700; font-size: 200px; line-height: .6;
  color: var(--aic-accent); height: 110px; }
.aic-quote .qt-text { font-family: var(--aic-font-text); font-weight: 900; font-size: 104px; line-height: 1.12;
  letter-spacing: -.01em; margin: 0; max-width: 1500px; text-wrap: balance; }
.aic-quote .qt-text em { font-style: normal; color: var(--aic-accent);
  background: linear-gradient(180deg, transparent 64%, color-mix(in srgb, var(--aic-accent) 30%, transparent) 64%); }

.aic-quote .qt-rule { width: 120px; height: 5px; border-radius: 999px; background: var(--aic-ink); margin: 52px 0 0; }
.aic-quote.is-center .qt-rule { align-self: center; }

.aic-quote .qt-concl { position: absolute; left: var(--pad); right: var(--pad); bottom: 188px;
  display: grid; gap: 40px; }
.aic-quote .qt-c { display: flex; flex-direction: column; gap: 8px; padding-top: 22px;
  border-top: 2px solid var(--aic-ink); }
.aic-quote .qt-c-idx { font-family: var(--aic-font-display); font-weight: 700; font-size: 20px;
  letter-spacing: .12em; color: var(--aic-accent-deep); }
.aic-quote .qt-c-ttl { font-family: var(--aic-font-text); font-weight: 800; font-size: 30px; color: var(--aic-ink); line-height: 1; }
.aic-quote .qt-c-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; color: var(--aic-muted); line-height: 1.4; }

.aic-quote .qt-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 90px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-quote .qt-src { font-family: var(--aic-font-display); font-weight: 500; font-size: 20px;
  letter-spacing: .04em; color: var(--aic-faint); }
.aic-quote .qt-deco { width: 300px; height: 28px; flex: none; }
`,$p=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function jn(t){let a={...Bn,...t},e={...Dn,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-quote",qp);let m=w(a.accentColor),i=a.align==="left"?"left":"center",s=Math.max(0,Math.min(3,a.conclusionCount)),l=e.conclusions.slice(0,s),f=a.showConclusions&&s>0;return Rt("div",{className:"aic-quote is-"+i,style:m,children:[a.showDecorations&&Qa("div",{className:"qt-glow"}),a.showDecorations&&Qa("div",{className:"qt-lens",children:Qa(A,{})}),Rt("div",{className:"qt-eyebrow",children:[Qa("i",{}),e.eyebrow,Qa("s",{}),Qa("b",{children:e.kicker})]}),Rt("div",{className:"qt-body",style:{top:f?"44%":"50%"},children:[a.showQuoteMark&&Qa("div",{className:"qt-mark",children:"\u201C"}),Rt("h2",{className:"qt-text",children:[e.quoteLead,Qa("em",{children:e.quoteEm1}),e.quoteMid,Qa("em",{children:e.quoteEm2}),e.quoteTail]}),Qa("div",{className:"qt-rule"})]}),f&&Qa("div",{className:"qt-concl",style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:l.map(p=>Rt("div",{className:"qt-c",children:[Qa("span",{className:"qt-c-idx",children:p.idx}),Qa("span",{className:"qt-c-ttl",children:p.title}),Qa("span",{className:"qt-c-note",children:p.note})]},p.idx))}),Rt("div",{className:"qt-foot",children:[a.showSource?Qa("div",{className:"qt-src",children:e.source}):Qa("span",{}),a.showDecorations&&Qa("div",{className:"qt-deco",children:Qa(k,{data:$p,gap:4})})]})]})}var Ei={};S(Ei,{controls:()=>Up,default:()=>Hn,defaultProps:()=>On});import"react";import{jsx as Oe,jsxs as qt}from"react/jsx-runtime";var Pn={eyebrow:"Chapter",index:"02",title:"市場資料深拆",sub:"融資節奏\u3001集中度與交易規模",lead:"從本章開始進入市場資料擴充套件部分\uFF0C圍繞融資集中度\u3001季度節奏和金額區間展開\u3002",closing:"下一組頁面進入更細的拆解\u3002",keywords:["集中度","季度節奏","峰谷對比","資金貢獻"]},On={...Pn,backgroundVariant:"dark",layout:"left",showIndex:!0,showKeywords:!0,keywordCount:4,showDecorations:!0,accentColor:c.accent},Up=[{key:"eyebrow",label:"眉標",type:"text",default:"Chapter"},{key:"index",label:"index",type:"text",default:"02"},{key:"title",label:"標題",type:"text",default:"市場資料深拆"},{key:"sub",label:"次標題",type:"text",default:"融資節奏\u3001集中度與交易規模"},{key:"lead",label:"導言",type:"text",default:"從本章開始進入市場資料擴充套件部分\uFF0C圍繞融資集中度\u3001季度節奏和金額區間展開\u3002"},{key:"closing",label:"結語",type:"text",default:"下一組頁面進入更細的拆解\u3002"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"dark",options:[{value:"dark",label:"深色"},{value:"paper",label:"淺色"}],description:"章節頁背景\uFF1A深色\uFF08強換氣節奏\uFF09/ 淺色\uFF08與正文統一\uFF09\u3002"},{key:"layout",label:"排版",type:"radio",default:"left",options:[{value:"left",label:"左對齊"},{value:"center",label:"居中"}],description:"標題與關鍵詞的整體排布方式\u3002"},{key:"showIndex",label:"章節序號",type:"toggle",default:!0,description:"超大章節編號水印的顯隱\u3002"},{key:"showKeywords",label:"關鍵詞",type:"toggle",default:!0,description:"本章關鍵詞標籤行的顯隱\u3002"},{key:"keywordCount",label:"關鍵詞數量",type:"slider",default:4,min:2,max:4,step:1,description:"展示的關鍵詞數量\uFF082\u20134\uFF09\u3002",showWhen:t=>t.showKeywords},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"鏡頭光斑\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Yp=`
.aic-ch { position: relative; width: 100%; height: 100%; overflow: hidden;
  font-family: var(--aic-font-text); --pad: 120px; }
.aic-ch, .aic-ch * { box-sizing: border-box; }
.aic-ch[data-bg="dark"]  { background: var(--aic-ink); color: var(--aic-paper); --ch-dim: rgba(250,250,246,.62); --ch-faint: rgba(250,250,246,.34); --ch-hair: rgba(250,250,246,.16); }
.aic-ch[data-bg="paper"] { background: var(--aic-paper); color: var(--aic-ink); --ch-dim: var(--aic-ink-dim); --ch-faint: var(--aic-faint); --ch-hair: var(--aic-hair); }

.aic-ch .ch-glow { position: absolute; right: -6%; top: 8%; width: 56%; height: 70%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 30%, transparent), transparent 70%); }
.aic-ch .ch-lens { position: absolute; right: 110px; top: 50%; transform: translateY(-50%); width: 520px; height: 520px; opacity: .92; }

/* giant index watermark */
.aic-ch .ch-index { position: absolute; right: 60px; bottom: -120px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 760px; line-height: .7; color: transparent;
  -webkit-text-stroke: 3px var(--ch-hair); letter-spacing: -.04em; pointer-events: none; user-select: none;
  font-variant-numeric: lining-nums; }

.aic-ch .ch-body { position: absolute; left: var(--pad); right: var(--pad); top: 50%; transform: translateY(-52%);
  display: flex; flex-direction: column; }
.aic-ch.is-center .ch-body { align-items: center; text-align: center; }

.aic-ch .ch-eyebrow { display: flex; align-items: center; gap: 18px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 24px; letter-spacing: .28em; text-transform: uppercase; color: var(--aic-accent); margin: 0 0 30px; }
.aic-ch .ch-eyebrow b { font-variant-numeric: tabular-nums; }
.aic-ch .ch-eyebrow s { display: inline-block; width: 64px; height: 2px; background: var(--aic-accent); text-decoration: none; }
.aic-ch.is-center .ch-eyebrow { justify-content: center; }

.aic-ch .ch-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 148px; line-height: .94;
  letter-spacing: -.01em; margin: 0; }
.aic-ch .ch-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 38px; color: var(--ch-dim);
  margin: 28px 0 0; }
.aic-ch .ch-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--ch-dim); margin: 32px 0 0; max-width: 1000px; }
.aic-ch.is-center .ch-lead { margin-left: auto; margin-right: auto; }

.aic-ch .ch-kw { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 52px; }
.aic-ch.is-center .ch-kw { justify-content: center; }
.aic-ch .ch-kw span { font-family: var(--aic-font-text); font-weight: 600; font-size: 26px;
  padding: 14px 28px; border-radius: 999px; border: 1.5px solid var(--ch-hair); color: var(--ch-dim);
  display: inline-flex; align-items: center; gap: 12px; }
.aic-ch .ch-kw span::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-ch .ch-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 84px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-ch .ch-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 26px; color: var(--ch-dim); }
.aic-ch .ch-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-ch .ch-deco { width: 300px; height: 28px; flex: none; }
`,_p=["accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","accent","warn","pos","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos"].map(t=>({tone:t}));function Hn(t){let a={...On,...t},e={...Pn,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-ch",Yp);let m=w(a.accentColor),i=a.backgroundVariant==="paper"?"paper":"dark",s=a.layout==="center"?"center":"left",l=Math.max(2,Math.min(e.keywords.length,a.keywordCount)),f=e.keywords.slice(0,l);return qt("div",{className:"aic-ch is-"+s,"data-bg":i,style:m,children:[a.showDecorations&&Oe("div",{className:"ch-glow"}),a.showDecorations&&s==="left"&&Oe("div",{className:"ch-lens",children:Oe(A,{})}),a.showIndex&&Oe("div",{className:"ch-index",children:e.index}),qt("div",{className:"ch-body",children:[qt("p",{className:"ch-eyebrow",children:[Oe("s",{}),e.eyebrow,"\xA0",Oe("b",{children:e.index})]}),Oe("h2",{className:"ch-title",children:e.title}),Oe("div",{className:"ch-sub",children:e.sub}),Oe("p",{className:"ch-lead",children:e.lead}),a.showKeywords&&Oe("div",{className:"ch-kw",children:f.map(p=>Oe("span",{children:p},p))})]}),qt("div",{className:"ch-foot",children:[qt("div",{className:"ch-closing",children:[Oe("b",{}),e.closing]}),a.showDecorations&&Oe("div",{className:"ch-deco",children:Oe(k,{data:_p,gap:4})})]})]})}var Li={};S(Li,{controls:()=>Xp,default:()=>qn,defaultProps:()=>Wn});import"react";import{jsx as Aa,jsxs as Ee}from"react/jsx-runtime";var Vn={eyebrow:"Deal Map",title:"融資事件規模分層",sub:"大額融資事件地圖",lead:"97 筆大額融資可以按金額區間拆成四組\uFF0C少數超級交易貢獻主要融資額\u3002",anchorLead:"97",anchorUnit:"筆",anchorNote:"全年大額事件 \xB7 單筆 \u22651 億美元",closing:"數量最多的不一定最重要\uFF0C影響最大的往往是鉅額交易\u3002",legendLabel:"氣泡大小 = 單筆金額 \xB7 顏色 = 賽道",bands:[{range:"1\u20132 億",count:41,mid:1.5,total:58},{range:"2\u20135 億",count:29,mid:3.5,total:91},{range:"5\u201310 億",count:15,mid:7.5,total:103},{range:"\u226510 億",count:12,mid:18,total:718}],tracks:[{name:"通用大模型",tone:"accent"},{name:"垂直應用",tone:"ink"},{name:"基礎設施",tone:"pos"},{name:"AI 晶片",tone:"warn"}]};var Wn={...Vn,viewMode:"scatter",bandCount:4,bubbleScale:1,focusEnabled:!0,focusIndex:3,showLegend:!0,showDecorations:!0,accentColor:c.accent},Xp=[{key:"eyebrow",label:"眉標",type:"text",default:"Deal Map"},{key:"title",label:"標題",type:"text",default:"融資事件規模分層"},{key:"sub",label:"次標題",type:"text",default:"大額融資事件地圖"},{key:"lead",label:"導言",type:"text",default:"97 筆大額融資可以按金額區間拆成四組\uFF0C少數超級交易貢獻主要融資額\u3002"},{key:"anchorLead",label:"錨點數字",type:"text",default:"97"},{key:"anchorUnit",label:"錨點單位",type:"text",default:"筆"},{key:"anchorNote",label:"錨點註釋",type:"text",default:"全年大額事件 \xB7 單筆 \u22651 億美元"},{key:"closing",label:"結語",type:"text",default:"數量最多的不一定最重要\uFF0C影響最大的往往是鉅額交易\u3002"},{key:"legendLabel",label:"legendLabel",type:"text",default:"氣泡大小 = 單筆金額 \xB7 顏色 = 賽道"},{key:"viewMode",label:"圖表型別",type:"radio",default:"scatter",options:[{value:"scatter",label:"散點"},{value:"cluster",label:"聚合氣泡"}],description:"散點\uFF1A逐筆交易點陣\uFF1B聚合氣泡\uFF1A每個區間彙總為一個氣泡\u3002"},{key:"bandCount",label:"分組數量",type:"slider",default:4,min:2,max:4,step:1,description:"金額區間分組數量\uFF082\u20134\uFF09\u3002"},{key:"bubbleScale",label:"氣泡大小",type:"slider",default:1,min:.6,max:1.4,step:.1,description:"氣泡整體大小比例\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一金額區間作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:3,options:[{value:0,label:"第 1 組"},{value:1,label:"第 2 組"},{value:2,label:"第 3 組"},{value:3,label:"第 4 組"}],description:"選擇被高亮的金額區間\u3002",showWhen:t=>t.focusEnabled},{key:"showLegend",label:"圖例",type:"toggle",default:!0,description:"賽道顏色圖例的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Gp=`
.aic-deal { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-deal, .aic-deal * { box-sizing: border-box; }
.aic-deal .dl-glow { position: absolute; right: -4%; top: -8%; width: 54%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-deal .dl-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-deal .dl-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-deal .dl-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 78px; line-height: .96; margin: 0; white-space: nowrap; }
.aic-deal .dl-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; }

.aic-deal .dl-rail { position: absolute; left: var(--pad); top: 300px; width: 520px; display: flex; flex-direction: column; }
.aic-deal .dl-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 34px; line-height: 1.5; color: var(--aic-ink); margin: 0; }
.aic-deal .dl-anchor { margin-top: 40px; }
.aic-deal .dl-anchor-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 22px; color: var(--aic-muted);
  margin: 16px 0 0; max-width: 460px; line-height: 1.45; }
.aic-deal .dl-legend { margin-top: 36px; display: flex; flex-direction: column; gap: 13px; }
.aic-deal .dl-legend-cap { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px;
  letter-spacing: .12em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 4px; }
.aic-deal .dl-leg { display: flex; align-items: center; gap: 12px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 22px; color: var(--aic-ink-dim); }
.aic-deal .dl-leg i { width: 16px; height: 16px; border-radius: 50%; flex: none; }
.aic-deal .dl-closing { display: flex; align-items: center; gap: 16px; margin-top: 36px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 26px; color: var(--aic-ink); }
.aic-deal .dl-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-deal .dl-chart { position: absolute; right: var(--pad); top: 286px; width: 1108px; }
.aic-deal .dl-svg { display: block; width: 100%; height: auto; }
.aic-deal .dl-cells { display: grid; gap: 18px; margin-top: 24px; }
.aic-deal .dl-cell { border-radius: 18px; padding: 20px 22px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); transition: background .3s, border-color .3s, transform .3s; }
.aic-deal .dl-cell[data-focus="1"] { background: var(--aic-accent); border-color: var(--aic-accent); transform: translateY(-6px); }
.aic-deal .dl-cell-rng { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-muted);
  transform: skewX(-9deg); transform-origin: left bottom; }
.aic-deal .dl-cell[data-focus="1"] .dl-cell-rng { color: rgba(14,17,11,.6); }
.aic-deal .dl-cell-cnt { font-family: var(--aic-font-display); font-weight: 700; font-size: 38px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; margin-top: 8px; }
.aic-deal .dl-cell-cnt u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }
.aic-deal .dl-cell[data-focus="1"] .dl-cell-cnt u { color: rgba(14,17,11,.6); }
.aic-deal .dl-cell-tot { font-family: var(--aic-font-text); font-weight: 600; font-size: 18px; color: var(--aic-muted); margin-top: 6px; }
.aic-deal .dl-cell[data-focus="1"] .dl-cell-tot { color: rgba(14,17,11,.7); }

.aic-deal .dl-deco { position: absolute; right: var(--pad); bottom: 26px; width: 280px; height: 26px; }
`,Qp=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t})),Ti=1108,ii=540,He={l:10,r:10,t:16,b:44};function Kp(t){return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}var Mi=["#86D62B","#0E110B","#34B24A","#EFA63A"];function qn(t){let a={...Wn,...t},e={...Vn,...Object.fromEntries(Object.entries(a).filter(([,N])=>N!==void 0))};y(),h("aic-deal",Gp);let m=w(a.accentColor),i=Math.max(2,Math.min(e.bands.length,a.bandCount)),s=e.bands.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=a.bubbleScale,p=e.tracks,d=N=>Mi[N]==="#86D62B"?"var(--aic-accent)":Mi[N%Mi.length],n=Ti-He.l-He.r,o=ii-He.t-He.b,r=n/i,g=ii-He.b,u=N=>(3.4+Math.sqrt(N)*2.6)*f,v=N=>Math.min(r*.48,(26+Math.sqrt(N)*3.1)*f),z=s.map((N,x)=>{let b=Kp(x*9973+17),C=r-40,T=o-18,ja=u(N.mid),F=Math.max(1,Math.ceil(Math.sqrt(N.count*C/T))),q=Math.ceil(N.count/F),lt=C/F,Xt=T/q,Gt=He.l+x*r+20,Qt=[];for(let Ht=0;Ht<N.count;Ht++){let hs=Ht%F,bs=Math.floor(Ht/F),ys=(b()-.5)*lt*.5,ws=(b()-.5)*Xt*.5,ks=Gt+lt*(hs+.5)+ys,Ns=g-6-Xt*(bs+.5)+ws;Qt.push({cx:ks,cy:Ns,r:ja,track:Math.floor(b()*p.length)})}return{band:N,bi:x,pts:Qt,cx:Gt+C/2}});return Ee("div",{className:"aic-deal",style:m,children:[a.showDecorations&&Aa("div",{className:"dl-glow"}),Ee("div",{className:"dl-head",children:[Ee("div",{children:[Aa("p",{className:"dl-eyebrow",children:e.eyebrow}),Aa("h2",{className:"dl-title",children:e.title})]}),Aa("div",{className:"dl-sub",children:e.sub})]}),Ee("div",{className:"dl-rail",children:[Aa("p",{className:"dl-lead",children:e.lead}),Ee("div",{className:"dl-anchor",children:[Aa(ha,{lead:e.anchorLead,unit:e.anchorUnit,size:132}),Aa("p",{className:"dl-anchor-note",children:e.anchorNote})]}),a.showLegend&&Ee("div",{className:"dl-legend",children:[Aa("p",{className:"dl-legend-cap",children:e.legendLabel}),p.map((N,x)=>Ee("div",{className:"dl-leg",children:[Aa("i",{style:{background:d(x)}}),N.name]},N.name))]}),Ee("div",{className:"dl-closing",children:[Aa("b",{}),e.closing]})]}),Ee("div",{className:"dl-chart",children:[Ee("svg",{className:"dl-svg",viewBox:`0 0 ${Ti} ${ii}`,preserveAspectRatio:"xMidYMid meet",children:[Aa("line",{x1:He.l,y1:g,x2:Ti-He.r,y2:g,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.focusEnabled&&Aa("rect",{x:He.l+l*r+6,y:He.t,width:r-12,height:o+8,rx:"18",fill:"color-mix(in srgb, var(--aic-accent) 12%, transparent)"}),s.map((N,x)=>Ee("g",{children:[x>0&&Aa("line",{x1:He.l+x*r,y1:He.t,x2:He.l+x*r,y2:g,stroke:"var(--aic-hair)",strokeWidth:"1.5",strokeDasharray:"3 8"}),Aa("text",{x:He.l+x*r+r/2,y:ii-14,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:22,fill:a.focusEnabled&&x===l?"var(--aic-ink)":"var(--aic-muted)"},children:N.range})]},N.range)),a.viewMode==="cluster"?z.map(({band:N,bi:x,cx:b})=>{let C=a.focusEnabled&&x===l,T=v(N.total),ja=g-T-8;return Ee("g",{opacity:a.focusEnabled&&!C?.42:1,children:[Aa("circle",{cx:b,cy:ja,r:T,fill:"var(--aic-accent)",opacity:C?.92:.7}),Aa("text",{x:b,y:ja+4,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:Math.min(T*.62,46),fill:"var(--aic-ink)"},children:N.count})]},N.range)}):z.map(({band:N,bi:x,pts:b})=>{let C=a.focusEnabled&&x!==l;return Aa("g",{opacity:C?.4:1,children:b.map((T,ja)=>Aa("circle",{cx:T.cx,cy:T.cy,r:T.r,fill:d(T.track),opacity:.82,stroke:"var(--aic-paper)",strokeWidth:"1.5"},ja))},N.range)})]}),Aa("div",{className:"dl-cells",style:{gridTemplateColumns:`repeat(${i}, 1fr)`},children:s.map((N,x)=>Ee("div",{className:"dl-cell","data-focus":a.focusEnabled&&x===l?"1":"0",children:[Aa("div",{className:"dl-cell-rng",children:N.range}),Ee("div",{className:"dl-cell-cnt",children:[N.count,Aa("u",{children:"筆"})]}),Ee("div",{className:"dl-cell-tot",children:[N.total," 億美元"]})]},N.range))})]}),a.showDecorations&&Aa("div",{className:"dl-deco",children:Aa(k,{data:Qp,gap:4})})]})}var Fi={};S(Fi,{controls:()=>Jp,default:()=>Yn,defaultProps:()=>Un});import"react";import{Fragment as ed,jsx as ra,jsxs as re}from"react/jsx-runtime";var $n={eyebrow:"Quarter Breakdown",marker:"Q1",season:"2024 第一季度 \xB7 起步",title:"冷啟動季度",titleTail:"Q1 融資拆解",lead:"Q1 交易數量穩定\uFF0C但整體金額尚未進入全年高峰\uFF0C更像上一年度專案延續\uFF0C市場仍在等待新一輪驗證\u3002",closing:"全年熱度從保守啟動開始\u3002",chartLabel:"月度融資額 / 億美元",monthRangeLabel:"1 \u2014 3 月",months:[{m:"1月",amount:45},{m:"2月",amount:58},{m:"3月",amount:59}],context:[{q:"Q1",amount:162},{q:"Q2",amount:284},{q:"Q3",amount:318},{q:"Q4",amount:206}],contextActive:0,contextLabel:"全年季度對比",metrics:[{label:"融資額",value:"162",unit:"億美元"},{label:"事件數",value:"18",unit:"筆"},{label:"平均單筆",value:"9.0",unit:"億美元"},{label:"最大單筆",value:"32",unit:"億美元"}]},Un={...$n,chartType:"bars",metricCount:4,focusEnabled:!0,focusIndex:0,showContext:!0,showDecorations:!0,accentColor:c.accent},Jp=[{key:"eyebrow",label:"眉標",type:"text",default:"Quarter Breakdown"},{key:"marker",label:"marker",type:"text",default:"Q1"},{key:"season",label:"season",type:"text",default:"2024 第一季度 \xB7 起步"},{key:"title",label:"標題",type:"text",default:"冷啟動季度"},{key:"titleTail",label:"副標題",type:"text",default:"Q1 融資拆解"},{key:"lead",label:"導言",type:"text",default:"Q1 交易數量穩定\uFF0C但整體金額尚未進入全年高峰\uFF0C更像上一年度專案延續\uFF0C市場仍在等待新一輪驗證\u3002"},{key:"closing",label:"結語",type:"text",default:"全年熱度從保守啟動開始\u3002"},{key:"chartLabel",label:"chartLabel",type:"text",default:"月度融資額 / 億美元"},{key:"monthRangeLabel",label:"monthRangeLabel",type:"text",default:"1 \u2014 3 月"},{key:"contextLabel",label:"contextLabel",type:"text",default:"全年季度對比"},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"柱狀"},{value:"line",label:"折線"},{value:"area",label:"面積"}],description:"主圖表\uFF08月度序列\uFF09的呈現方式\uFF1A柱狀 / 折線 / 面積\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"指標卡數量\uFF082\u20134\uFF09\uFF1B自動重排為完整網格\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showContext",label:"背景對比",type:"toggle",default:!0,description:"全年季度對比條的顯隱\uFF0C用於交代當前季度在全年中的位置\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於圖表\u3001季度標記與高亮卡\u3002"}],Zp=`
.aic-cold { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cold, .aic-cold * { box-sizing: border-box; }
.aic-cold .cd-glow { position: absolute; right: -4%; top: -8%; width: 54%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-cold .cd-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cold .cd-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cold .cd-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-cold .cd-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-cold .cd-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left rail */
.aic-cold .cd-rail { position: absolute; left: var(--pad); top: 300px; bottom: 70px; width: 620px;
  display: flex; flex-direction: column; }
.aic-cold .cd-marker { display: flex; align-items: baseline; gap: 22px; }
.aic-cold .cd-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 150px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-cold .cd-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--aic-muted); max-width: 200px; line-height: 1.4; }
.aic-cold .cd-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.55;
  color: var(--aic-ink); margin: 34px 0 0; }
.aic-cold .cd-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 38px; }
.aic-cold .cd-card { border-radius: 18px; padding: 22px 26px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); box-shadow: none; transition: background .3s, border-color .3s, transform .3s; }
.aic-cold .cd-card[data-focus="1"] { background: var(--aic-accent); border-color: var(--aic-accent);
  transform: translateY(-2px); box-shadow: none; }
.aic-cold .cd-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-muted); }
.aic-cold .cd-card[data-focus="1"] .cd-card-lbl { color: rgba(14,17,11,.62); }
.aic-cold .cd-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 46px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; margin-top: 6px; line-height: 1; }
.aic-cold .cd-card-val u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }
.aic-cold .cd-card[data-focus="1"] .cd-card-val u { color: rgba(14,17,11,.62); }
.aic-cold .cd-closing { display: flex; align-items: center; gap: 16px; margin-top: auto; padding-top: 34px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cold .cd-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* right chart */
.aic-cold .cd-chart { position: absolute; left: 780px; right: var(--pad); top: 300px; }
.aic-cold .cd-chart-t { display: flex; align-items: center; justify-content: space-between; margin: 0 0 18px; }
.aic-cold .cd-chart-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-cold .cd-chart-t em { font-style: normal; font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-ink-dim); }
.aic-cold .cd-svg { display: block; width: 100%; height: auto; }

/* full-year context strip */
.aic-cold .cd-ctx { position: absolute; left: 780px; right: var(--pad); bottom: 70px; }
.aic-cold .cd-ctx-cap { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-faint); margin: 0 0 18px; }
.aic-cold .cd-ctx-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: end; }
.aic-cold .cd-ctx-bar { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
.aic-cold .cd-ctx-track { height: 64px; display: flex; align-items: flex-end; }
.aic-cold .cd-ctx-fill { width: 100%; border-radius: 8px 8px 0 0; background: var(--aic-hair-strong); transition: height .5s; }
.aic-cold .cd-ctx-bar[data-active="1"] .cd-ctx-fill { background: var(--aic-accent); }
.aic-cold .cd-ctx-meta { display: flex; align-items: baseline; justify-content: space-between; }
.aic-cold .cd-ctx-q { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-muted);
  transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-cold .cd-ctx-bar[data-active="1"] .cd-ctx-q { color: var(--aic-ink); }
.aic-cold .cd-ctx-v { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; color: var(--aic-faint);
  font-variant-numeric: tabular-nums; }
.aic-cold .cd-ctx-bar[data-active="1"] .cd-ctx-v { color: var(--aic-ink-dim); }
`,oi=1e3,St=470,le={l:56,r:24,t:48,b:56},ad=72;function Yn(t){let a={...Un,...t},e={...$n,...Object.fromEntries(Object.entries(a).filter(([,x])=>x!==void 0))};y(),h("aic-cold",Zp);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=E(e.months),p=f.length,d=oi-le.l-le.r,n=St-le.t-le.b,o=x=>le.l+d*(x+.5)/(p||1),r=x=>le.t+n*(1-x/ad),g=[20,40,60],u=f.map((x,b)=>[o(b),r(x.amount)]),v=u.map(([x,b],C)=>(C?"L":"M")+x.toFixed(1)+" "+b.toFixed(1)).join(" "),z=`M ${o(0).toFixed(1)} ${(St-le.b).toFixed(1)} `+u.map(([x,b])=>`L ${x.toFixed(1)} ${b.toFixed(1)}`).join(" ")+` L ${o(p-1).toFixed(1)} ${(St-le.b).toFixed(1)} Z`,N=L(e.context.map(x=>x.amount),1);return re("div",{className:"aic-cold",style:m,children:[a.showDecorations&&ra("div",{className:"cd-glow"}),re("div",{className:"cd-head",children:[re("div",{children:[ra("p",{className:"cd-eyebrow",children:e.eyebrow}),ra("h2",{className:"cd-title",children:e.title})]}),ra("div",{className:"cd-sub",children:e.titleTail})]}),re("div",{className:"cd-rail",children:[re("div",{className:"cd-marker",children:[ra("b",{children:e.marker}),ra("span",{className:"cd-season",children:e.season})]}),ra("p",{className:"cd-lead",children:e.lead}),ra("div",{className:"cd-cards",style:{gridTemplateColumns:(i<=2,"1fr 1fr")},children:s.map((x,b)=>re("div",{className:"cd-card","data-focus":a.focusEnabled&&b===l?"1":"0",children:[ra("div",{className:"cd-card-lbl",children:x.label}),re("div",{className:"cd-card-val",children:[x.value,ra("u",{children:x.unit})]})]},x.label))}),re("div",{className:"cd-closing",children:[ra("b",{}),e.closing]})]}),re("div",{className:"cd-chart",children:[re("div",{className:"cd-chart-t",children:[ra("span",{children:e.chartLabel}),re("em",{children:[e.marker," \xB7 ",e.monthRangeLabel]})]}),re("svg",{className:"cd-svg",viewBox:`0 0 ${oi} ${St}`,preserveAspectRatio:"xMidYMid meet",children:[a.showDecorations&&g.map(x=>re("g",{children:[ra("line",{x1:le.l,y1:r(x),x2:oi-le.r,y2:r(x),stroke:"var(--aic-hair)",strokeWidth:"1.5"}),ra("text",{x:le.l-14,y:r(x)+6,textAnchor:"end",style:{fontFamily:"var(--aic-font-display)",fontSize:18,fontWeight:600,fill:"var(--aic-faint)"},children:x})]},x)),ra("line",{x1:le.l,y1:St-le.b,x2:oi-le.r,y2:St-le.b,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.chartType==="bars"?f.map((x,b)=>{let C=d/p*.46;return ra("rect",{x:o(b)-C/2,y:r(x.amount),width:C,height:St-le.b-r(x.amount),rx:"8",fill:"var(--aic-accent)"},b)}):re(ed,{children:[a.chartType==="area"&&ra("path",{d:z,fill:"var(--aic-accent)",opacity:"0.18"}),ra("path",{d:v,fill:"none",stroke:"var(--aic-accent)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),f.map((x,b)=>ra("circle",{cx:o(b),cy:r(x.amount),r:"8",fill:"var(--aic-paper)",stroke:"var(--aic-accent)",strokeWidth:"4"},b))]}),f.map((x,b)=>ra("text",{x:o(b),y:r(x.amount)-20,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:28,fill:"var(--aic-ink)"},children:x.amount},b)),f.map((x,b)=>ra("text",{x:o(b),y:St-le.b+34,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:24,fill:"var(--aic-muted)"},children:x.m},b))]})]}),a.showContext&&re("div",{className:"cd-ctx",children:[ra("p",{className:"cd-ctx-cap",children:e.contextLabel}),ra("div",{className:"cd-ctx-row",children:e.context.map((x,b)=>re("div",{className:"cd-ctx-bar","data-active":b===e.contextActive?"1":"0",children:[ra("div",{className:"cd-ctx-track",children:ra("div",{className:"cd-ctx-fill",style:{height:M(x.amount,N)*100+"%"}})}),re("div",{className:"cd-ctx-meta",children:[ra("span",{className:"cd-ctx-q",children:x.q}),ra("span",{className:"cd-ctx-v",children:x.amount})]})]},x.q))})]})]})}var Ii={};S(Ii,{controls:()=>td,default:()=>Gn,defaultProps:()=>Xn});import"react";import{jsx as ba,jsxs as Ve}from"react/jsx-runtime";var _n={eyebrow:"Quarter Breakdown",marker:"Q2",season:"2024 第二季度 \xB7 加速",title:"加速季度",titleTail:"Q2 融資拆解",lead:"Q2 進入明顯加速期\uFF0C模型\u3001應用和基礎設施同步升溫\uFF0C資本從模型敘事擴散到應用和基礎設施\u3002",statLine:"Q2 融資額 284 億美元 \xB7 26 筆事件 \xB7 平均單筆 10.9 億美元",anchorValue:"+75.3%",anchorLabel:"季度融資額環比增長",closing:"Q2 是融資視窗開啟的關鍵節點\u3002",colHeads:{dim:"賽道方向",val:"Q2 融資額",chg:"環比",note:"加速訊號"},rows:[{dim:"通用大模型",val:"120",unit:"億美元",chg:"+66.0%",note:"頭部融資集中釋放"},{dim:"垂直應用",val:"74",unit:"億美元",chg:"+88.0%",note:"應用側需求加速"},{dim:"基礎設施",val:"54",unit:"億美元",chg:"+69.0%",note:"算力需求拉動"},{dim:"AI 晶片",val:"22",unit:"億美元",chg:"+41.0%",note:"硬體穩步跟進"},{dim:"安全與資料",val:"14",unit:"億美元",chg:"+33.0%",note:"配套設施補位"}]},Xn={..._n,rowCount:4,showChange:!0,showJudgment:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},td=[{key:"eyebrow",label:"眉標",type:"text",default:"Quarter Breakdown"},{key:"marker",label:"marker",type:"text",default:"Q2"},{key:"season",label:"season",type:"text",default:"2024 第二季度 \xB7 加速"},{key:"title",label:"標題",type:"text",default:"加速季度"},{key:"titleTail",label:"副標題",type:"text",default:"Q2 融資拆解"},{key:"lead",label:"導言",type:"text",default:"Q2 進入明顯加速期\uFF0C模型\u3001應用和基礎設施同步升溫\uFF0C資本從模型敘事擴散到應用和基礎設施\u3002"},{key:"statLine",label:"statLine",type:"text",default:"Q2 融資額 284 億美元 \xB7 26 筆事件 \xB7 平均單筆 10.9 億美元"},{key:"anchorValue",label:"anchorValue",type:"text",default:"+75.3%"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"季度融資額環比增長"},{key:"closing",label:"結語",type:"text",default:"Q2 是融資視窗開啟的關鍵節點\u3002"},{key:"rowCount",label:"行數量",type:"slider",default:4,min:3,max:5,step:1,description:"表格展示的行數量\uFF083\u20135\uFF09\u3002"},{key:"showChange",label:"環比列",type:"toggle",default:!0,description:"環比變化列\uFF08漲跌徽標\uFF09的顯隱\u3002"},{key:"showJudgment",label:"判斷列",type:"toggle",default:!0,description:"訊號判斷列的顯隱\uFF1B關閉後表格更緊湊\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於季度標記\u3001高亮行與錨點數字\u3002"}],id=`
.aic-acc { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-acc, .aic-acc * { box-sizing: border-box; }
.aic-acc .ac-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-acc .ac-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-acc .ac-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-acc .ac-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-acc .ac-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-acc .ac-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 anchor QoQ (right) */
.aic-acc .ac-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-acc .ac-meta-l { max-width: 1180px; }
.aic-acc .ac-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-acc .ac-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 82px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-acc .ac-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-acc .ac-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 28px 0 14px; }
.aic-acc .ac-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-acc .ac-anchor { flex: none; text-align: right; }
.aic-acc .ac-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 96px; line-height: .82;
  color: var(--aic-accent); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-acc .ac-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* table */
.aic-acc .ac-table { position: absolute; left: var(--pad); right: var(--pad); top: 520px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-acc .ac-thead { display: grid; align-items: center; gap: 0 32px; padding: 0 28px 16px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-acc .ac-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-acc .ac-th.r { text-align: right; }
.aic-acc .ac-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-acc .ac-row { flex: 1; display: grid; align-items: center; gap: 0 32px; padding: 0 28px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-acc .ac-row:last-child { border-bottom: none; }
.aic-acc .ac-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-acc .ac-dim { display: flex; align-items: center; gap: 16px; }
.aic-acc .ac-dim .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-hair-strong); flex: none; }
.aic-acc .ac-row[data-focus="1"] .ac-dim .dot { background: var(--aic-accent); }
.aic-acc .ac-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 33px; color: var(--aic-ink); white-space: nowrap; }
.aic-acc .ac-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 38px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-acc .ac-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-acc .ac-chg { display: flex; justify-content: flex-start; }
.aic-acc .ac-chg .aic-viz-badge { font-size: 26px; padding: 7px 15px; }
.aic-acc .ac-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 24px; color: var(--aic-ink-dim); }

.aic-acc .ac-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-acc .ac-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-acc .ac-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-acc .ac-deco { width: 300px; height: 30px; }
`,od=["pos","accent","pos","warn","pos","accent","pos","neg","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","neg","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","neg","accent","pos","warn","pos","accent"].map(t=>({tone:t}));function Gn(t){let a={...Xn,...t},e={..._n,...Object.fromEntries(Object.entries(a).filter(([,d])=>d!==void 0))};y(),h("aic-acc",id);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=["minmax(280px, 1.4fr)","200px"];a.showChange&&f.push("150px"),a.showJudgment&&f.push("1.2fr");let p=f.join(" ");return Ve("div",{className:"aic-acc",style:m,children:[a.showDecorations&&ba("div",{className:"ac-glow"}),Ve("div",{className:"ac-head",children:[Ve("div",{children:[ba("p",{className:"ac-eyebrow",children:e.eyebrow}),ba("h2",{className:"ac-title",children:e.title})]}),ba("div",{className:"ac-sub",children:e.titleTail})]}),Ve("div",{className:"ac-meta",children:[Ve("div",{className:"ac-meta-l",children:[Ve("div",{className:"ac-marker",children:[ba("b",{children:e.marker}),ba("span",{className:"ac-season",children:e.season})]}),ba("p",{className:"ac-lead",children:e.lead}),ba("div",{className:"ac-statline",children:e.statLine})]}),Ve("div",{className:"ac-anchor",children:[ba("div",{className:"ac-anchor-v",children:e.anchorValue}),ba("div",{className:"ac-anchor-l",children:e.anchorLabel})]})]}),Ve("div",{className:"ac-table",children:[Ve("div",{className:"ac-thead",style:{gridTemplateColumns:p},children:[ba("div",{className:"ac-th",children:e.colHeads.dim}),ba("div",{className:"ac-th r",children:e.colHeads.val}),a.showChange&&ba("div",{className:"ac-th",children:e.colHeads.chg}),a.showJudgment&&ba("div",{className:"ac-th",children:e.colHeads.note})]}),ba("div",{className:"ac-tbody",children:s.map((d,n)=>Ve("div",{className:"ac-row","data-focus":a.focusEnabled&&n===l?"1":"0",style:{gridTemplateColumns:p},children:[Ve("div",{className:"ac-dim",children:[ba("span",{className:"dot"}),ba("b",{children:d.dim})]}),Ve("div",{className:"ac-val",children:[d.val,ba("u",{children:d.unit})]}),a.showChange&&ba("div",{className:"ac-chg",children:ba(Tt,{value:d.chg})}),a.showJudgment&&ba("div",{className:"ac-note",children:d.note})]},d.dim))})]}),Ve("div",{className:"ac-foot",children:[Ve("div",{className:"ac-closing",children:[ba("b",{}),e.closing]}),a.showDecorations&&ba("div",{className:"ac-deco",children:ba(k,{data:od,gap:4})})]})]})}var Ri={};S(Ri,{controls:()=>nd,default:()=>Jn,defaultProps:()=>Kn});import"react";import{jsx as Y,jsxs as Ja}from"react/jsx-runtime";var Qn={eyebrow:"Quarter Breakdown",marker:"Q3",season:"2024 第三季度 \xB7 峰值",title:"全年峰值季度",titleTail:"Q3 融資拆解",lead:"Q3 融資額和事件數均達到全年最高\uFF0C是市場情緒高點\uFF0C強度來自頭部公司融資和多賽道同時活躍\u3002",closing:"高峰之後\uFF0C市場開始從熱度轉向篩選\u3002",chartLabel:"全年月度融資額 / 億美元",seriesLabelBars:"月度融資額",seriesLabelArea:"融資額",peakTag:"全年峰值",avgLabel:"月度均值 80.8",metrics:[{label:"融資額",value:"318",unit:"億美元"},{label:"事件數",value:"31",unit:"筆"},{label:"平均單筆",value:"10.3",unit:"億美元"},{label:"峰值月份",value:"8",unit:"月"}],months:[45,58,59,86,105,93,92,118,108,73,81,52],monthLabels:["1","2","3","4","5","6","7","8","9","10","11","12"],peakIndex:7,avg:80.8,q3Range:[6,8]},Kn={...Qn,chartType:"area",metricCount:4,focusEnabled:!0,focusIndex:0,showPeakMarker:!0,showAverage:!0,showQuarterBand:!0,showDecorations:!0,accentColor:c.accent},nd=[{key:"eyebrow",label:"眉標",type:"text",default:"Quarter Breakdown"},{key:"marker",label:"marker",type:"text",default:"Q3"},{key:"season",label:"season",type:"text",default:"2024 第三季度 \xB7 峰值"},{key:"title",label:"標題",type:"text",default:"全年峰值季度"},{key:"titleTail",label:"副標題",type:"text",default:"Q3 融資拆解"},{key:"lead",label:"導言",type:"text",default:"Q3 融資額和事件數均達到全年最高\uFF0C是市場情緒高點\uFF0C強度來自頭部公司融資和多賽道同時活躍\u3002"},{key:"closing",label:"結語",type:"text",default:"高峰之後\uFF0C市場開始從熱度轉向篩選\u3002"},{key:"chartLabel",label:"chartLabel",type:"text",default:"全年月度融資額 / 億美元"},{key:"seriesLabelBars",label:"seriesLabelBars",type:"text",default:"月度融資額"},{key:"seriesLabelArea",label:"seriesLabelArea",type:"text",default:"融資額"},{key:"peakTag",label:"peakTag",type:"text",default:"全年峰值"},{key:"avgLabel",label:"avgLabel",type:"text",default:"月度均值 80.8"},{key:"chartType",label:"圖表型別",type:"radio",default:"area",options:[{value:"area",label:"面積圖"},{value:"bars",label:"柱狀圖"}],description:"主視覺資訊圖表樣式\uFF1A高亮面積圖 / 月度柱狀圖\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"峰值指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showPeakMarker",label:"峰值標記",type:"toggle",default:!0,description:"圖表上峰值月份的標記與數值氣泡的顯隱\u3002"},{key:"showAverage",label:"均值線",type:"toggle",default:!0,description:"全年月度均值參考線的顯隱\u3002"},{key:"showQuarterBand",label:"區間高亮",type:"toggle",default:!0,description:"當前季度\uFF08Q3 \xB7 7\u20149 月\uFF09高亮背景帶的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於季度標記\u3001圖表與高亮卡\u3002"}],cd=`
.aic-peak { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-peak, .aic-peak * { box-sizing: border-box; }
.aic-peak .pk-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-peak .pk-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-peak .pk-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-peak .pk-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-peak .pk-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* hero chart (left) */
.aic-peak .pk-chart { position: absolute; left: var(--pad); top: 300px; bottom: 150px; width: 1000px;
  display: flex; flex-direction: column; }
.aic-peak .pk-chart-t { display: flex; align-items: center; justify-content: space-between; margin: 0 0 14px; }
.aic-peak .pk-chart-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-peak .pk-leg { display: flex; align-items: center; gap: 20px; }
.aic-peak .pk-leg i { display: inline-flex; align-items: center; gap: 8px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 18px; color: var(--aic-muted); font-style: normal; }
.aic-peak .pk-leg i::before { content: ''; width: 22px; height: 4px; border-radius: 2px; background: var(--aic-accent); }
.aic-peak .pk-leg i.avg::before { background: none; border-top: 2px dashed var(--aic-ink-dim); height: 0; }
.aic-peak .pk-svg { display: block; width: 100%; flex: 1; min-height: 0; }

/* content column (right) */
.aic-peak .pk-side { position: absolute; left: 1156px; right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-peak .pk-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-peak .pk-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 104px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-peak .pk-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--aic-muted); max-width: 180px; line-height: 1.4; }
.aic-peak .pk-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--aic-ink); margin: 26px 0 0; text-wrap: pretty; }
.aic-peak .pk-cards { margin-top: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.aic-peak .pk-card { position: relative; border-radius: 18px; padding: 22px 26px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); overflow: hidden; transition: background .3s, border-color .3s, transform .3s; }
.aic-peak .pk-card[data-focus="1"] { background: var(--aic-accent); border-color: var(--aic-accent); transform: translateY(-4px); }
.aic-peak .pk-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted); }
.aic-peak .pk-card[data-focus="1"] .pk-card-lbl { color: rgba(14,17,11,.62); }
.aic-peak .pk-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 48px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; margin-top: 6px; line-height: 1; }
.aic-peak .pk-card-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-peak .pk-card[data-focus="1"] .pk-card-val u { color: rgba(14,17,11,.62); }

.aic-peak .pk-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-peak .pk-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-peak .pk-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-peak .pk-deco { width: 300px; height: 30px; }
`,ld=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","neg","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t})),ni=1e3,Lt=520,Ka={l:58,r:28,t:64,b:46};function Jn(t){let a={...Kn,...t},e={...Qn,...Object.fromEntries(Object.entries(a).filter(([,F])=>F!==void 0))};y(),h("aic-peak",cd);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=E(e.months),p=f.length,d=L(f,1)*1.16,n=ni-Ka.l-Ka.r,o=Lt-Ka.t-Ka.b,r=F=>Ka.l+n*F/Vt(p-1,1),g=F=>Ka.t+o*(1-ui(M(F,d,0),0,1)),u=n/Vt(p,1)*.56,v=f.map((F,q)=>[r(q),g(F)]),z=v.map(([F,q],lt)=>(lt?"L":"M")+F.toFixed(1)+" "+q.toFixed(1)).join(" "),N=`M ${r(0).toFixed(1)} ${(Lt-Ka.b).toFixed(1)} `+v.map(([F,q])=>`L ${F.toFixed(1)} ${q.toFixed(1)}`).join(" ")+` L ${r(p-1).toFixed(1)} ${(Lt-Ka.b).toFixed(1)} Z`,x=F=>ui(Math.round(Ta(F,0)),0,Math.max(0,p-1)),b=x(e.peakIndex),C=x(e.q3Range?.[0]??0),T=x(e.q3Range?.[1]??0),ja=[0,30,60,90,120].filter(F=>F<=d);return Ja("div",{className:"aic-peak",style:m,children:[a.showDecorations&&Y("div",{className:"pk-glow"}),Ja("div",{className:"pk-head",children:[Ja("div",{children:[Y("p",{className:"pk-eyebrow",children:e.eyebrow}),Y("h2",{className:"pk-title",children:e.title})]}),Y("div",{className:"pk-sub",children:e.titleTail})]}),Ja("div",{className:"pk-chart",children:[Ja("div",{className:"pk-chart-t",children:[Y("span",{children:e.chartLabel}),Ja("div",{className:"pk-leg",children:[Y("i",{children:e.chartType==="bars"?e.seriesLabelBars:e.seriesLabelArea}),a.showAverage&&Y("i",{className:"avg",children:e.avgLabel})]})]}),Ja("svg",{className:"pk-svg",viewBox:`0 0 ${ni} ${Lt}`,preserveAspectRatio:"none",children:[a.showQuarterBand&&Y("rect",{x:r(Math.min(C,T))-u,y:Ka.t-8,width:Math.abs(r(T)-r(C))+u*2,height:o+8,fill:"color-mix(in srgb, var(--aic-accent) 12%, transparent)",rx:"10"}),ja.map(F=>Ja("g",{children:[Y("line",{x1:Ka.l,y1:g(F),x2:ni-Ka.r,y2:g(F),stroke:"var(--aic-hair)",strokeWidth:"1.5"}),Y("text",{x:Ka.l-12,y:g(F)+6,textAnchor:"end",style:{fontFamily:"var(--aic-font-display)",fontWeight:600,fontSize:17,fill:"var(--aic-faint)"},children:F})]},F)),a.showAverage&&Y("line",{x1:Ka.l,y1:g(e.avg),x2:ni-Ka.r,y2:g(e.avg),stroke:"var(--aic-ink-dim)",strokeWidth:"2",strokeDasharray:"4 8",opacity:"0.7"}),a.chartType==="bars"?f.map((F,q)=>Y("rect",{x:r(q)-u/2,y:g(F),width:u,height:Lt-Ka.b-g(F),rx:"6",fill:q===b?"var(--aic-accent)":"color-mix(in srgb, var(--aic-accent) 34%, white)"},q)):Ja("g",{children:[Y("path",{d:N,fill:"var(--aic-accent)",opacity:"0.16"}),Y("path",{d:z,fill:"none",stroke:"var(--aic-accent)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),f.map((F,q)=>Y("circle",{cx:r(q),cy:g(F),r:q===b?0:4.5,fill:"var(--aic-paper)",stroke:"var(--aic-accent)",strokeWidth:"3"},q))]}),a.showPeakMarker&&Ja("g",{children:[Y("line",{x1:r(b),y1:Ka.t-8,x2:r(b),y2:Lt-Ka.b,stroke:"var(--aic-accent)",strokeWidth:"2.5",strokeDasharray:"3 7",opacity:"0.8"}),Y("circle",{cx:r(b),cy:g(f[b]),r:"10",fill:"var(--aic-accent)",stroke:"var(--aic-paper)",strokeWidth:"4"}),Ja("g",{transform:`translate(${r(b)}, ${g(f[b])-52})`,children:[Y("rect",{x:"-66",y:"-2",width:"132",height:"46",rx:"12",fill:"var(--aic-ink)"}),Ja("text",{x:"0",y:"20",textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:24,fill:"var(--aic-paper)"},children:[f[b],Y("tspan",{style:{fontSize:15,fill:"var(--aic-faint)"},children:" 億"})]}),Y("text",{x:"0",y:"37",textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:600,fontSize:12,letterSpacing:".12em",fill:"var(--aic-accent-bright)"},children:e.peakTag}),Y("path",{d:"M -8 44 L 0 54 L 8 44 Z",fill:"var(--aic-ink)"})]})]}),e.monthLabels.map((F,q)=>Y("text",{x:r(q),y:Lt-Ka.b+26,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:q===b?700:600,fontSize:16,fill:q===b?"var(--aic-ink)":"var(--aic-faint)"},children:F},q))]})]}),Ja("div",{className:"pk-side",children:[Ja("div",{className:"pk-marker",children:[Y("b",{children:e.marker}),Y("span",{className:"pk-season",children:e.season})]}),Y("p",{className:"pk-lead",children:e.lead}),Y("div",{className:"pk-cards",children:s.map((F,q)=>Ja("div",{className:"pk-card","data-focus":a.focusEnabled&&q===l?"1":"0",children:[Y("div",{className:"pk-card-lbl",children:F.label}),Ja("div",{className:"pk-card-val",children:[F.value,Y("u",{children:F.unit})]})]},F.label))})]}),Ja("div",{className:"pk-foot",children:[Ja("div",{className:"pk-closing",children:[Y("b",{}),e.closing]}),a.showDecorations&&Y("div",{className:"pk-deco",children:Y(k,{data:ld,gap:4})})]})]})}var Di={};S(Di,{controls:()=>rd,default:()=>ec,defaultProps:()=>ac});import"react";import{Fragment as dd,jsx as na,jsxs as pe}from"react/jsx-runtime";var Zn={eyebrow:"Quarter Breakdown",marker:"Q4",season:"2024 第四季度 \xB7 回落",title:"理性回落季度",titleTail:"Q4 融資拆解",lead:"Q4 較 Q3 回落\uFF0C但仍高於年初水平\uFF0C說明資金並未完全撤離\uFF0C資本開始挑選確定性更高的標的\u3002",closing:"回落不是終點\uFF0C而是分化的開始\u3002",baselineLabel:"年初水平 \xB7 162",chartLabel:"全年季度融資額 / 億美元",declineLabel:"較 Q3",declineValue:"-35.2%",nodes:[{q:"Q1",amount:162,phase:"起步",note:"保守啟動"},{q:"Q2",amount:284,phase:"加速",note:"視窗開啟"},{q:"Q3",amount:318,phase:"峰值",note:"情緒高點"},{q:"Q4",amount:206,phase:"回落",note:"理性篩選"}],activeIndex:3,metrics:[{label:"融資額",value:"206",unit:"億美元"},{label:"事件數",value:"22",unit:"筆"},{label:"平均單筆",value:"9.4",unit:"億美元"},{label:"較 Q3",value:"-35.2%",unit:"",badge:!0}]},ac={...Zn,nodeCount:4,metricCount:4,focusEnabled:!0,focusIndex:3,showCurve:!0,showBaseline:!0,showDecorations:!0,accentColor:c.accent},rd=[{key:"eyebrow",label:"眉標",type:"text",default:"Quarter Breakdown"},{key:"marker",label:"marker",type:"text",default:"Q4"},{key:"season",label:"season",type:"text",default:"2024 第四季度 \xB7 回落"},{key:"title",label:"標題",type:"text",default:"理性回落季度"},{key:"titleTail",label:"副標題",type:"text",default:"Q4 融資拆解"},{key:"lead",label:"導言",type:"text",default:"Q4 較 Q3 回落\uFF0C但仍高於年初水平\uFF0C說明資金並未完全撤離\uFF0C資本開始挑選確定性更高的標的\u3002"},{key:"closing",label:"結語",type:"text",default:"回落不是終點\uFF0C而是分化的開始\u3002"},{key:"baselineLabel",label:"baselineLabel",type:"text",default:"年初水平 \xB7 162"},{key:"chartLabel",label:"chartLabel",type:"text",default:"全年季度融資額 / 億美元"},{key:"declineLabel",label:"declineLabel",type:"text",default:"較 Q3"},{key:"declineValue",label:"declineValue",type:"text",default:"-35.2%"},{key:"nodeCount",label:"節點數量",type:"slider",default:4,min:2,max:4,step:1,description:"時間軸 / 曲線上的階段節點數量\uFF082\u20134\uFF09\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個時間軸節點作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:3,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的節點\u3002",showWhen:t=>t.focusEnabled},{key:"showCurve",label:"趨勢曲線",type:"toggle",default:!0,description:"年度回落曲線\uFF08面積 + 折線\uFF09的顯隱\u3002"},{key:"showBaseline",label:"基準參考線",type:"toggle",default:!0,description:"年初水平虛線參考線的顯隱\uFF0C用於交代\u201C仍處高位\u201D\u3002",showWhen:t=>t.showCurve},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於曲線\u3001高亮節點與指標卡\u3002"}],sd=`
.aic-cool { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cool, .aic-cool * { box-sizing: border-box; }
.aic-cool .cl-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 54%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-cool .cl-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cool .cl-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cool .cl-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-cool .cl-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-cool .cl-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-cool .cl-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-cool .cl-marker { display: flex; align-items: baseline; gap: 16px; flex: none; }
.aic-cool .cl-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 74px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-cool .cl-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); max-width: 150px; line-height: 1.4; }
.aic-cool .cl-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 0; max-width: 1160px; }

/* chart + timeline */
.aic-cool .cl-chart { position: absolute; left: var(--pad); right: var(--pad); top: 452px; }
.aic-cool .cl-chart-t { display: flex; align-items: center; justify-content: space-between; margin: 0 0 8px; }
.aic-cool .cl-chart-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-cool .cl-chart-t .chg { display: flex; align-items: center; gap: 12px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 21px; color: var(--aic-ink-dim); }
.aic-cool .cl-svg { display: block; width: 100%; height: auto; }
.aic-cool .cl-nodes { display: grid; margin-top: 18px; }
.aic-cool .cl-node { position: relative; padding: 18px 0 0; text-align: center; }
.aic-cool .cl-node-q { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-muted);
  transform: skewX(-9deg); display: inline-block; }
.aic-cool .cl-node[data-focus="1"] .cl-node-q { color: var(--aic-ink); }
.aic-cool .cl-node-phase { font-family: var(--aic-font-text); font-weight: 700; font-size: 24px; color: var(--aic-ink-dim); margin-top: 6px; }
.aic-cool .cl-node[data-focus="1"] .cl-node-phase { color: var(--aic-ink); }
.aic-cool .cl-node-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; color: var(--aic-faint); margin-top: 2px; }
.aic-cool .cl-node[data-focus="1"] .cl-node-note { color: var(--aic-muted); }

/* metric callouts */
.aic-cool .cl-cards { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  display: grid; gap: 18px; }
.aic-cool .cl-card { border-radius: 18px; padding: 22px 28px; background: var(--aic-card); border: 1.5px solid var(--aic-hair);
  display: flex; flex-direction: column; gap: 8px; }
.aic-cool .cl-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-muted); }
.aic-cool .cl-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 46px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-cool .cl-card-val u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }
.aic-cool .cl-card .aic-viz-badge { font-size: 34px; padding: 8px 16px; align-self: flex-start; }

.aic-cool .cl-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-cool .cl-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cool .cl-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cool .cl-deco { width: 300px; height: 30px; }
`,pd=["pos","accent","pos","warn","accent","pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","neg","pos","accent","warn","pos","accent","pos","pos","warn","neg","accent","pos","warn","pos","accent","pos","neg","warn","pos","accent"].map(t=>({tone:t})),$t=1728,Ft=300,se={l:40,r:40,t:40,b:18};function ec(t){let a={...ac,...t},e={...Zn,...Object.fromEntries(Object.entries(a).filter(([,b])=>b!==void 0))};y(),h("aic-cool",sd);let m=w(a.accentColor),i=Math.max(2,Math.min(E(e.nodes).length,Ta(a.nodeCount,4))),s=E(e.nodes).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.min(i-1,e.activeIndex),p=Math.max(2,Math.min(4,Ta(a.metricCount,4))),d=e.metrics.slice(0,p),n=L(s.map(b=>b.amount),1)*1.16,o=$t-se.l-se.r,r=Ft-se.t-se.b,g=b=>se.l+o*(b+.5)/i,u=b=>se.t+r*(1-M(b,n,0)),v=s.map((b,C)=>[g(C),u(b.amount)]),z=v.map(([b,C],T)=>(T?"L":"M")+b.toFixed(1)+" "+C.toFixed(1)).join(" "),N=`M ${g(0).toFixed(1)} ${(Ft-se.b).toFixed(1)} `+v.map(([b,C])=>`L ${b.toFixed(1)} ${C.toFixed(1)}`).join(" ")+` L ${g(i-1).toFixed(1)} ${(Ft-se.b).toFixed(1)} Z`,x=u(s[0]?.amount);return pe("div",{className:"aic-cool",style:m,children:[a.showDecorations&&na("div",{className:"cl-glow"}),pe("div",{className:"cl-head",children:[pe("div",{children:[na("p",{className:"cl-eyebrow",children:e.eyebrow}),na("h2",{className:"cl-title",children:e.title})]}),na("div",{className:"cl-sub",children:e.titleTail})]}),pe("div",{className:"cl-meta",children:[pe("div",{className:"cl-marker",children:[na("b",{children:e.marker}),na("span",{className:"cl-season",children:e.season})]}),na("p",{className:"cl-lead",children:e.lead})]}),pe("div",{className:"cl-chart",children:[pe("div",{className:"cl-chart-t",children:[na("span",{children:e.chartLabel}),pe("div",{className:"chg",children:[e.declineLabel,na(Tt,{value:e.declineValue})]})]}),pe("svg",{className:"cl-svg",viewBox:`0 0 ${$t} ${Ft}`,preserveAspectRatio:"none",style:{height:300},children:[a.showCurve&&a.showBaseline&&pe("g",{children:[na("line",{x1:se.l,y1:x,x2:$t-se.r,y2:x,stroke:"var(--aic-ink)",strokeWidth:"1.6",strokeDasharray:"4 8",opacity:"0.5"}),na("text",{x:$t-se.r,y:x-12,textAnchor:"end",style:{fontFamily:"var(--aic-font-display)",fontWeight:600,fontSize:18,fill:"var(--aic-muted)"},children:e.baselineLabel})]}),na("line",{x1:se.l,y1:Ft-se.b,x2:$t-se.r,y2:Ft-se.b,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.showCurve&&pe(dd,{children:[na("path",{d:N,fill:"var(--aic-accent)",opacity:"0.16"}),na("path",{d:z,fill:"none",stroke:"var(--aic-accent)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.focusEnabled&&na("line",{x1:g(l),y1:se.t-8,x2:g(l),y2:Ft-se.b,stroke:"var(--aic-accent)",strokeWidth:"2",strokeDasharray:"3 7",opacity:"0.55"}),s.map((b,C)=>{let T=a.focusEnabled&&C===l;return pe("g",{children:[na("circle",{cx:g(C),cy:u(b.amount),r:T?11:7,fill:"var(--aic-paper)",stroke:"var(--aic-accent)",strokeWidth:T?5:4}),na("text",{x:g(C),y:u(b.amount)-(T?24:18),textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:T?30:24,fill:"var(--aic-ink)"},children:b.amount})]},b.q)})]}),na("div",{className:"cl-nodes",style:{gridTemplateColumns:`repeat(${i}, 1fr)`},children:s.map((b,C)=>pe("div",{className:"cl-node","data-focus":a.focusEnabled&&C===l?"1":"0",children:[na("span",{className:"cl-node-q",children:b.q}),na("div",{className:"cl-node-phase",children:b.phase}),na("div",{className:"cl-node-note",children:b.note})]},b.q))})]}),na("div",{className:"cl-cards",style:{gridTemplateColumns:`repeat(${p}, 1fr)`},children:d.map(b=>pe("div",{className:"cl-card",children:[na("div",{className:"cl-card-lbl",children:b.label}),b.badge?na(Tt,{value:b.value}):pe("div",{className:"cl-card-val",children:[b.value,b.unit?na("u",{children:b.unit}):null]})]},b.label))}),pe("div",{className:"cl-foot",children:[pe("div",{className:"cl-closing",children:[na("b",{}),e.closing]}),a.showDecorations&&na("div",{className:"cl-deco",children:na(k,{data:pd,gap:4})})]})]})}var ji={};S(ji,{controls:()=>fd,default:()=>oc,defaultProps:()=>ic});import"react";import{jsx as Ma,jsxs as $a}from"react/jsx-runtime";var tc={eyebrow:"Peak and Trough",title:"峰值與低位",sub:"月度峰谷對比",lead:"8 月為全年峰值\uFF0C1 月為低位\uFF0C峰谷差體現交易集中度\u3002",closing:"月度波動背後是頭部交易節奏\u3002",chartLabel:"月度融資額 / 億美元",avgLabel:"全年均值",peakLegend:"峰值",troughLegend:"低位",months:[{m:"1",amount:45,kind:"trough"},{m:"2",amount:58,kind:"normal"},{m:"3",amount:59,kind:"normal"},{m:"4",amount:86,kind:"normal"},{m:"5",amount:105,kind:"peak"},{m:"6",amount:93,kind:"normal"},{m:"7",amount:92,kind:"normal"},{m:"8",amount:118,kind:"peak"},{m:"9",amount:108,kind:"peak"},{m:"10",amount:73,kind:"normal"},{m:"11",amount:81,kind:"normal"},{m:"12",amount:52,kind:"trough"}],extremes:[{tag:"峰值",m:"8 月",value:"118",unit:"億美元",dir:"peak"},{tag:"次高",m:"9 月",value:"108",unit:"億美元",dir:"peak"},{tag:"低位",m:"1 月",value:"45",unit:"億美元",dir:"trough"},{tag:"年末",m:"12 月",value:"52",unit:"億美元",dir:"trough"}]},ic={...tc,chartType:"bars",barCount:12,highlightExtremes:!0,showAverage:!0,calloutCount:3,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},fd=[{key:"eyebrow",label:"眉標",type:"text",default:"Peak and Trough"},{key:"title",label:"標題",type:"text",default:"峰值與低位"},{key:"sub",label:"次標題",type:"text",default:"月度峰谷對比"},{key:"lead",label:"導言",type:"text",default:"8 月為全年峰值\uFF0C1 月為低位\uFF0C峰谷差體現交易集中度\u3002"},{key:"closing",label:"結語",type:"text",default:"月度波動背後是頭部交易節奏\u3002"},{key:"chartLabel",label:"chartLabel",type:"text",default:"月度融資額 / 億美元"},{key:"avgLabel",label:"avgLabel",type:"text",default:"全年均值"},{key:"peakLegend",label:"peakLegend",type:"text",default:"峰值"},{key:"troughLegend",label:"troughLegend",type:"text",default:"低位"},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"柱狀"},{value:"lollipop",label:"棒點"}],description:"主圖表樣式\uFF1A實心柱狀 / 棒棒糖\uFF08細杆 + 圓點\uFF09\u3002"},{key:"barCount",label:"柱子數量",type:"slider",default:12,min:6,max:12,step:1,description:"展示的月份數量\uFF086\u201312\uFF09\uFF0C自右向左裁剪\u3002"},{key:"highlightExtremes",label:"峰谷高亮",type:"toggle",default:!0,description:"是否用強調色 / 警示色區分峰值與低位月份\u3002"},{key:"showAverage",label:"均值參考線",type:"toggle",default:!0,description:"全年平均水平虛線參考線的顯隱\u3002"},{key:"calloutCount",label:"卡片數量",type:"slider",default:3,min:0,max:4,step:1,description:"峰谷資訊卡數量\uFF080\u20134\uFF09\uFF1B為 0 時僅保留圖表\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張峰谷資訊卡\u3002",showWhen:t=>t.calloutCount>0},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的資訊卡\u3002",showWhen:t=>t.calloutCount>0&&t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於峰值柱\u3001均值線與高亮卡\u3002"}],md=`
.aic-pt { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-pt, .aic-pt * { box-sizing: border-box; }
.aic-pt .pt-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 54%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-pt .pt-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-pt .pt-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-pt .pt-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-pt .pt-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-pt .pt-lead { position: absolute; left: var(--pad); right: var(--pad); top: 300px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.45; color: var(--aic-ink);
  max-width: 1300px; margin: 0; }
.aic-pt .pt-lead b { color: var(--aic-accent-deep); font-weight: 700; }

/* chart */
.aic-pt .pt-chart { position: absolute; left: var(--pad); right: var(--pad); top: 408px; bottom: 326px; }
.aic-pt .pt-chart-t { display: flex; align-items: center; justify-content: space-between; margin: 0 0 4px; }
.aic-pt .pt-chart-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-pt .pt-legend { display: flex; align-items: center; gap: 26px; }
.aic-pt .pt-leg { display: flex; align-items: center; gap: 9px; font-family: var(--aic-font-text); font-weight: 600;
  font-size: 18px; color: var(--aic-muted); }
.aic-pt .pt-leg i { width: 16px; height: 16px; border-radius: 4px; }
.aic-pt .pt-svg { display: block; width: 100%; height: 100%; }

/* callouts */
.aic-pt .pt-cards { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  display: grid; gap: 18px; }
.aic-pt .pt-card { border-radius: 18px; padding: 22px 26px; background: var(--aic-card); border: 1.5px solid var(--aic-hair);
  display: flex; flex-direction: column; gap: 4px; position: relative; overflow: hidden;
  transition: background .3s, border-color .3s, transform .3s; }
.aic-pt .pt-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
  background: var(--aic-hair-strong); }
.aic-pt .pt-card[data-dir="peak"]::before { background: var(--aic-accent); }
.aic-pt .pt-card[data-dir="trough"]::before { background: var(--aic-neg); }
.aic-pt .pt-card[data-focus="1"] { transform: translateY(-5px); border-color: var(--aic-ink); }
.aic-pt .pt-card-tag { display: flex; align-items: baseline; gap: 10px; }
.aic-pt .pt-card-tag b { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-ink); }
.aic-pt .pt-card-tag span { font-family: var(--aic-font-text); font-weight: 600; font-size: 18px; color: var(--aic-muted); }
.aic-pt .pt-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 46px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; margin-top: 4px; }
.aic-pt .pt-card-val u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-pt .pt-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-pt .pt-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-pt .pt-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-pt .pt-deco { width: 300px; height: 30px; }
`,gd=["trough","normal","normal","normal","peak","normal","normal","peak","peak","normal","normal","trough"].map(t=>({tone:t==="peak"?"accent":t==="trough"?"neg":"faint"})),Ut=1728,Bi=360,it={l:8,r:8,t:46,b:38};function ud(t,a){return a?t==="peak"?"var(--aic-accent)":t==="trough"?"var(--aic-neg)":"var(--aic-hair-strong)":"var(--aic-ink)"}function oc(t){let a={...ic,...t},e={...tc,...Object.fromEntries(Object.entries(a).filter(([,x])=>x!==void 0))};y(),h("aic-pt",md);let m=w(a.accentColor),i=Math.max(6,Math.min(E(e.months).length,a.barCount)),s=E(e.months).slice(E(e.months).length-i),l=s.length,f=Math.max(0,Math.min(e.extremes.length,a.calloutCount)),p=e.extremes.slice(0,f),d=Math.max(0,Math.min(f-1,a.focusIndex)),n=L(s.map(x=>x.amount),1)*1.16,o=s.reduce((x,b)=>x+b.amount,0)/Vt(l,1),r=Ut-it.l-it.r,g=Bi-it.t-it.b,u=r/l,v=x=>it.l+u*(x+.5),z=x=>it.t+g*(1-M(x,n,0)),N=Bi-it.b;return $a("div",{className:"aic-pt",style:m,children:[a.showDecorations&&Ma("div",{className:"pt-glow"}),$a("div",{className:"pt-head",children:[$a("div",{children:[Ma("p",{className:"pt-eyebrow",children:e.eyebrow}),Ma("h2",{className:"pt-title",children:e.title})]}),Ma("div",{className:"pt-sub",children:e.sub})]}),Ma("p",{className:"pt-lead",children:e.lead}),$a("div",{className:"pt-chart",children:[$a("div",{className:"pt-chart-t",children:[Ma("span",{children:e.chartLabel}),a.highlightExtremes&&$a("div",{className:"pt-legend",children:[$a("span",{className:"pt-leg",children:[Ma("i",{style:{background:"var(--aic-accent)"}}),e.peakLegend]}),$a("span",{className:"pt-leg",children:[Ma("i",{style:{background:"var(--aic-neg)"}}),e.troughLegend]}),$a("span",{className:"pt-leg",children:[Ma("i",{style:{background:"var(--aic-hair-strong)"}}),"常規"]})]})]}),$a("svg",{className:"pt-svg",viewBox:`0 0 ${Ut} ${Bi}`,preserveAspectRatio:"none",children:[a.showAverage&&$a("g",{children:[Ma("line",{x1:it.l,y1:z(o),x2:Ut-it.r,y2:z(o),stroke:"var(--aic-ink)",strokeWidth:"1.6",strokeDasharray:"4 8",opacity:"0.45"}),$a("text",{x:Ut-it.r,y:z(o)-10,textAnchor:"end",style:{fontFamily:"var(--aic-font-display)",fontWeight:600,fontSize:18,fill:"var(--aic-muted)"},children:[e.avgLabel," \xB7 ",o.toFixed(0)]})]}),Ma("line",{x1:it.l,y1:N,x2:Ut-it.r,y2:N,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),s.map((x,b)=>{let C=ud(x.kind,a.highlightExtremes),T=x.kind!=="normal";if(a.chartType==="lollipop")return $a("g",{children:[Ma("line",{x1:v(b),y1:N,x2:v(b),y2:z(x.amount),stroke:C,strokeWidth:"4"}),Ma("circle",{cx:v(b),cy:z(x.amount),r:T&&a.highlightExtremes?13:9,fill:C})]},b);let ja=Math.min(u*.56,86);return Ma("rect",{x:v(b)-ja/2,y:z(x.amount),width:ja,height:N-z(x.amount),rx:"8",fill:C},b)}),s.map((x,b)=>x.kind!=="normal"&&a.highlightExtremes?Ma("text",{x:v(b),y:z(x.amount)-16,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:26,fill:"var(--aic-ink)"},children:x.amount},b):null),s.map((x,b)=>$a("text",{x:v(b),y:N+26,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:600,fontSize:18,fill:x.kind!=="normal"&&a.highlightExtremes?"var(--aic-ink)":"var(--aic-faint)"},children:[x.m,"月"]},b))]})]}),f>0&&Ma("div",{className:"pt-cards",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:p.map((x,b)=>$a("div",{className:"pt-card","data-dir":x.dir,"data-focus":a.focusEnabled&&b===d?"1":"0",children:[$a("div",{className:"pt-card-tag",children:[Ma("b",{children:x.tag}),Ma("span",{children:x.m})]}),$a("div",{className:"pt-card-val",children:[x.value,Ma("u",{children:x.unit})]})]},x.tag))}),$a("div",{className:"pt-foot",children:[$a("div",{className:"pt-closing",children:[Ma("b",{}),e.closing]}),a.showDecorations&&Ma("div",{className:"pt-deco",children:Ma(k,{data:gd,gap:4})})]})]})}var Hi={};S(Hi,{controls:()=>xd,default:()=>lc,defaultProps:()=>cc});import"react";import{jsx as Za,jsxs as Qe}from"react/jsx-runtime";var nc={eyebrow:"Funding Waterfall",title:"賽道貢獻拆分",sub:"融資額貢獻瀑布",lead:"全年 970 億美元由模型\u3001應用\u3001基礎設施\u3001晶片和其他方向共同構成\u3002",closing:"大模型製造熱度\uFF0C基礎設施和應用承接兌現\u3002",chartLabel:"各賽道累計貢獻 / 億美元",totalLabel:"全年合計",totalUnit:"億美元",steps:[{name:"通用大模型",value:420,note:"模型層"},{name:"垂直應用",value:245,note:"應用層"},{name:"基礎設施",value:158,note:"基建層"},{name:"AI 晶片",value:97,note:"硬體層"},{name:"其他",value:50,note:"其他"}]},cc={...nc,stepCount:5,showTotal:!0,showConnectors:!0,showValues:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},xd=[{key:"eyebrow",label:"眉標",type:"text",default:"Funding Waterfall"},{key:"title",label:"標題",type:"text",default:"賽道貢獻拆分"},{key:"sub",label:"次標題",type:"text",default:"融資額貢獻瀑布"},{key:"lead",label:"導言",type:"text",default:"全年 970 億美元由模型\u3001應用\u3001基礎設施\u3001晶片和其他方向共同構成\u3002"},{key:"closing",label:"結語",type:"text",default:"大模型製造熱度\uFF0C基礎設施和應用承接兌現\u3002"},{key:"chartLabel",label:"chartLabel",type:"text",default:"各賽道累計貢獻 / 億美元"},{key:"totalLabel",label:"totalLabel",type:"text",default:"全年合計"},{key:"totalUnit",label:"totalUnit",type:"text",default:"億美元"},{key:"stepCount",label:"臺階數量",type:"slider",default:5,min:3,max:5,step:1,description:"瀑布圖的貢獻臺階數量\uFF083\u20135\uFF09\uFF1B合計自動重算\u3002"},{key:"showTotal",label:"合計列",type:"toggle",default:!0,description:"末尾全年合計落地柱的顯隱\u3002"},{key:"showConnectors",label:"連線線",type:"toggle",default:!0,description:"臺階之間的虛線連線線的顯隱\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"每個臺階上方增量數值的顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個貢獻臺階作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"},{value:4,label:"第 5 個"}],description:"選擇被高亮的臺階\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於高亮臺階\u3001合計柱與連線線\u3002"}],vd=`
.aic-wf { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-wf, .aic-wf * { box-sizing: border-box; }
.aic-wf .wf-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 54%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-wf .wf-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-wf .wf-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-wf .wf-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-wf .wf-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-wf .wf-meta { position: absolute; left: var(--pad); right: var(--pad); top: 300px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-wf .wf-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.45;
  color: var(--aic-ink); max-width: 1180px; margin: 0; }
.aic-wf .wf-lead b { color: var(--aic-accent-deep); font-weight: 700; }
.aic-wf .wf-total { flex: none; text-align: right; }
.aic-wf .wf-total-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 92px; line-height: .82;
  color: var(--aic-accent); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-wf .wf-total-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* chart */
.aic-wf .wf-chart { position: absolute; left: var(--pad); right: var(--pad); top: 486px; bottom: 150px; }
.aic-wf .wf-chart-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 6px; }
.aic-wf .wf-svg { display: block; width: 100%; height: calc(100% - 30px); }

.aic-wf .wf-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-wf .wf-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-wf .wf-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-wf .wf-deco { width: 300px; height: 30px; }
`,hd=["accent","accent","pos","pos","warn","pos","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos"].map(t=>({tone:t})),Pi=1728,Oi=470,xt={l:8,r:8,t:56,b:64};function lc(t){let a={...cc,...t},e={...nc,...Object.fromEntries(Object.entries(a).filter(([,b])=>b!==void 0))};y(),h("aic-wf",vd);let m=w(a.accentColor),i=Math.max(3,Math.min(e.steps.length,a.stepCount)),s=e.steps.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=s.reduce((b,C)=>b+C.value,0),p=0,d=s.map(b=>{let C=p;return p+=b.value,{...b,from:C,to:p}}),n=f*1.12,o=i+(a.showTotal?1:0),r=Pi-xt.l-xt.r,g=Oi-xt.t-xt.b,u=r/o,v=Math.min(u*.6,170),z=b=>xt.l+u*(b+.5),N=b=>xt.t+g*(1-M(b,n,0)),x=Oi-xt.b;return Qe("div",{className:"aic-wf",style:m,children:[a.showDecorations&&Za("div",{className:"wf-glow"}),Qe("div",{className:"wf-head",children:[Qe("div",{children:[Za("p",{className:"wf-eyebrow",children:e.eyebrow}),Za("h2",{className:"wf-title",children:e.title})]}),Za("div",{className:"wf-sub",children:e.sub})]}),Qe("div",{className:"wf-meta",children:[Za("p",{className:"wf-lead",children:e.lead}),a.showTotal&&Qe("div",{className:"wf-total",children:[Za("div",{className:"wf-total-v",children:f}),Qe("div",{className:"wf-total-l",children:[e.totalLabel," \xB7 ",e.totalUnit]})]})]}),Qe("div",{className:"wf-chart",children:[Za("p",{className:"wf-chart-t",children:e.chartLabel}),Qe("svg",{className:"wf-svg",viewBox:`0 0 ${Pi} ${Oi}`,preserveAspectRatio:"none",children:[Za("line",{x1:xt.l,y1:x,x2:Pi-xt.r,y2:x,stroke:"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.showConnectors&&d.map((b,C)=>{if(C===d.length-1&&!a.showTotal)return null;let T=z(C)+v/2,ja=(C===d.length-1,z(C+1)-v/2);return Za("line",{x1:T,y1:N(b.to),x2:ja,y2:N(b.to),stroke:"var(--aic-ink)",strokeWidth:"1.6",strokeDasharray:"3 6",opacity:"0.4"},"c"+C)}),d.map((b,C)=>{let T=a.focusEnabled&&C===l,ja=T?"var(--aic-accent)":"color-mix(in srgb, var(--aic-accent) 38%, var(--aic-card))";return Qe("g",{children:[Za("rect",{x:z(C)-v/2,y:N(b.to),width:v,height:N(b.from)-N(b.to),rx:"8",fill:ja,stroke:T?"var(--aic-accent-deep)":"var(--aic-hair-strong)",strokeWidth:"1.5"}),a.showValues&&Qe("text",{x:z(C),y:N(b.to)-16,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:30,fill:"var(--aic-ink)"},children:["+",b.value]}),Za("text",{x:z(C),y:x+30,textAnchor:"middle",style:{fontFamily:"var(--aic-font-text)",fontWeight:T?700:600,fontSize:24,fill:T?"var(--aic-ink)":"var(--aic-ink-dim)"},children:b.name}),Za("text",{x:z(C),y:x+56,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:500,fontSize:17,fill:"var(--aic-faint)"},children:b.note})]},C)}),a.showTotal&&Qe("g",{children:[Za("rect",{x:z(i)-v/2,y:N(f),width:v,height:x-N(f),rx:"8",fill:"var(--aic-accent)"}),Za("text",{x:z(i),y:N(f)-16,textAnchor:"middle",style:{fontFamily:"var(--aic-font-display)",fontWeight:700,fontSize:34,fill:"var(--aic-ink)"},children:f}),Za("text",{x:z(i),y:x+30,textAnchor:"middle",style:{fontFamily:"var(--aic-font-text)",fontWeight:700,fontSize:24,fill:"var(--aic-ink)"},children:e.totalLabel})]})]})]}),Qe("div",{className:"wf-foot",children:[Qe("div",{className:"wf-closing",children:[Za("b",{}),e.closing]}),a.showDecorations&&Za("div",{className:"wf-deco",children:Za(k,{data:hd,gap:4})})]})]})}var Vi={};S(Vi,{controls:()=>bd,default:()=>pc,defaultProps:()=>sc});import"react";import{jsx as Ra,jsxs as Te}from"react/jsx-runtime";var rc={eyebrow:"Deal Size Split",title:"金額區間結構",sub:"交易規模分佈",lead:"大額融資內部仍有層級\uFF0C低金額段貢獻數量\uFF0C高金額段貢獻市場記憶\u3002",closing:"市場被少數超級交易重新定價\u3002",countLabel:"交易數量 / 筆",amountLabel:"融資金額 / 億美元",rows:[{band:"1 \u2014 2 億美元",count:41,amount:58},{band:"2 \u2014 5 億美元",count:29,amount:91},{band:"5 \u2014 10 億美元",count:15,amount:103},{band:"10 億美元以上",count:12,amount:718}]},sc={...rc,rowCount:4,metricMode:"both",showValues:!0,focusEnabled:!0,focusIndex:3,showDecorations:!0,accentColor:c.accent},bd=[{key:"eyebrow",label:"眉標",type:"text",default:"Deal Size Split"},{key:"title",label:"標題",type:"text",default:"金額區間結構"},{key:"sub",label:"次標題",type:"text",default:"交易規模分佈"},{key:"lead",label:"導言",type:"text",default:"大額融資內部仍有層級\uFF0C低金額段貢獻數量\uFF0C高金額段貢獻市場記憶\u3002"},{key:"closing",label:"結語",type:"text",default:"市場被少數超級交易重新定價\u3002"},{key:"countLabel",label:"countLabel",type:"text",default:"交易數量 / 筆"},{key:"amountLabel",label:"amountLabel",type:"text",default:"融資金額 / 億美元"},{key:"rowCount",label:"行數量",type:"slider",default:4,min:1,max:4,step:1,description:"金額區間分組數量\uFF081\u20134\uFF09\u3002"},{key:"metricMode",label:"圖表型別",type:"radio",default:"both",options:[{value:"both",label:"雙維"},{value:"count",label:"僅數量"},{value:"amount",label:"僅金額"}],description:"展示維度\uFF1A數量 + 金額對照 / 僅數量 / 僅金額\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"條形末端數值標籤的顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個金額區間作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:3,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的區間\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於金額條與高亮區間\u3002"}],yd=`
.aic-dz { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-dz, .aic-dz * { box-sizing: border-box; }
.aic-dz .dz-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 54%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-dz .dz-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-dz .dz-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-dz .dz-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-dz .dz-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-dz .dz-lead { position: absolute; left: var(--pad); right: var(--pad); top: 300px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.45; color: var(--aic-ink);
  max-width: 1300px; margin: 0; }
.aic-dz .dz-lead b { color: var(--aic-accent-deep); font-weight: 700; }

/* dual-axis legend */
.aic-dz .dz-legend { position: absolute; left: var(--pad); right: var(--pad); top: 412px;
  display: flex; align-items: center; gap: 38px; }
.aic-dz .dz-leg { display: flex; align-items: center; gap: 11px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 20px; color: var(--aic-muted); }
.aic-dz .dz-leg i { width: 18px; height: 18px; border-radius: 5px; }

/* rows */
.aic-dz .dz-rows { position: absolute; left: var(--pad); right: var(--pad); top: 470px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-dz .dz-row { flex: 1; display: grid; grid-template-columns: 320px 1fr; align-items: center; gap: 40px;
  border-top: 1.5px solid var(--aic-hair); }
.aic-dz .dz-row:last-child { border-bottom: 1.5px solid var(--aic-hair); }
.aic-dz .dz-band { display: flex; align-items: center; gap: 16px; }
.aic-dz .dz-band .dot { width: 13px; height: 13px; border-radius: 4px; background: var(--aic-hair-strong); flex: none; }
.aic-dz .dz-row[data-focus="1"] .dz-band .dot { background: var(--aic-accent); }
.aic-dz .dz-band b { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); white-space: nowrap; }
.aic-dz .dz-bars { display: flex; flex-direction: column; gap: 14px; }
.aic-dz .dz-bar { display: grid; grid-template-columns: 86px 1fr auto; align-items: center; gap: 18px; }
.aic-dz .dz-bar-cap { font-family: var(--aic-font-text); font-weight: 600; font-size: 17px; color: var(--aic-faint);
  text-align: right; letter-spacing: .04em; }
.aic-dz .dz-bar-track { height: 26px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-dz .dz-bar-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-dz .dz-bar-fill.count { background: var(--aic-ink); }
.aic-dz .dz-bar-fill.amount { background: color-mix(in srgb, var(--aic-accent) 55%, var(--aic-card)); }
.aic-dz .dz-row[data-focus="1"] .dz-bar-fill.amount { background: var(--aic-accent); }
.aic-dz .dz-bar-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; min-width: 76px; }
.aic-dz .dz-bar-val u { text-decoration: none; font-size: 16px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }

.aic-dz .dz-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-dz .dz-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-dz .dz-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-dz .dz-deco { width: 300px; height: 30px; }
`,wd=["pos","accent","pos","warn","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function pc(t){let a={...sc,...t},e={...rc,...Object.fromEntries(Object.entries(a).filter(([,o])=>o!==void 0))};y(),h("aic-dz",yd);let m=w(a.accentColor),i=Math.max(1,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(o=>o.count),1),p=L(s.map(o=>o.amount),1),d=a.metricMode==="both"||a.metricMode==="count",n=a.metricMode==="both"||a.metricMode==="amount";return Te("div",{className:"aic-dz",style:m,children:[a.showDecorations&&Ra("div",{className:"dz-glow"}),Te("div",{className:"dz-head",children:[Te("div",{children:[Ra("p",{className:"dz-eyebrow",children:e.eyebrow}),Ra("h2",{className:"dz-title",children:e.title})]}),Ra("div",{className:"dz-sub",children:e.sub})]}),Ra("p",{className:"dz-lead",children:e.lead}),Te("div",{className:"dz-legend",children:[d&&Te("span",{className:"dz-leg",children:[Ra("i",{style:{background:"var(--aic-ink)"}}),e.countLabel]}),n&&Te("span",{className:"dz-leg",children:[Ra("i",{style:{background:"var(--aic-accent)"}}),e.amountLabel]})]}),Ra("div",{className:"dz-rows",children:s.map((o,r)=>Te("div",{className:"dz-row","data-focus":a.focusEnabled&&r===l?"1":"0",children:[Te("div",{className:"dz-band",children:[Ra("span",{className:"dot"}),Ra("b",{children:o.band})]}),Te("div",{className:"dz-bars",children:[d&&Te("div",{className:"dz-bar",children:[Ra("div",{className:"dz-bar-cap",children:"數量"}),Ra("div",{className:"dz-bar-track",children:Ra("div",{className:"dz-bar-fill count",style:{width:M(o.count,f)*100+"%"}})}),a.showValues&&Te("div",{className:"dz-bar-val",children:[o.count,Ra("u",{children:"筆"})]})]}),n&&Te("div",{className:"dz-bar",children:[Ra("div",{className:"dz-bar-cap",children:"金額"}),Ra("div",{className:"dz-bar-track",children:Ra("div",{className:"dz-bar-fill amount",style:{width:M(o.amount,p)*100+"%"}})}),a.showValues&&Te("div",{className:"dz-bar-val",children:[o.amount,Ra("u",{children:"億"})]})]})]})]},o.band))}),Te("div",{className:"dz-foot",children:[Te("div",{className:"dz-closing",children:[Ra("b",{}),e.closing]}),a.showDecorations&&Ra("div",{className:"dz-deco",children:Ra(k,{data:wd,gap:4})})]})]})}var Wi={};S(Wi,{controls:()=>kd,default:()=>mc,defaultProps:()=>fc});import"react";import{jsx as de,jsxs as vt}from"react/jsx-runtime";var dc={eyebrow:"Average Ticket",title:"賽道平均融資額",sub:"平均單筆規模",numLead:"10",numTail:"",numUnit:"億美元",numCaption:"全年平均單筆融資規模",note:"垂直應用不應只用融資規模評價\uFF0C更要看收入效率\u3002",closing:"融資規模越大\uFF0C後續兌現壓力越高\u3002",aux:[{label:"總事件數",value:"97",unit:"筆"},{label:"全年融資額",value:"970",unit:"億美元"},{label:"最高單筆",value:"64",unit:"億美元"}]},fc={...dc,numberSlant:!0,auxCount:3,showCaption:!0,showNote:!0,showLens:!0,showDecorations:!0,accentColor:c.accent},kd=[{key:"eyebrow",label:"眉標",type:"text",default:"Average Ticket"},{key:"title",label:"標題",type:"text",default:"賽道平均融資額"},{key:"sub",label:"次標題",type:"text",default:"平均單筆規模"},{key:"numLead",label:"numLead",type:"text",default:"10"},{key:"numUnit",label:"numUnit",type:"text",default:"億美元"},{key:"numCaption",label:"numCaption",type:"text",default:"全年平均單筆融資規模"},{key:"note",label:"note",type:"text",default:"垂直應用不應只用融資規模評價\uFF0C更要看收入效率\u3002"},{key:"closing",label:"結語",type:"text",default:"融資規模越大\uFF0C後續兌現壓力越高\u3002"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"主數字是否應用品牌斜切\uFF08italic-slant\uFF09效果\u3002"},{key:"auxCount",label:"卡片數量",type:"slider",default:3,min:0,max:3,step:1,description:"輔助指標數量\uFF080\u20133\uFF09\uFF1B為 0 時只保留主數字\u3002"},{key:"showCaption",label:"說明文案",type:"toggle",default:!0,description:"主數字下方解釋性說明的顯隱\u3002"},{key:"showNote",label:"輔助註釋",type:"toggle",default:!0,description:"底部補充註釋的顯隱\u3002"},{key:"showLens",label:"品牌圖形",type:"toggle",default:!0,description:"品牌透鏡圖形\uFF08焦點圓盤\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於主數字下劃線\u3001品牌圖形與點綴\u3002"}],Nd=`
.aic-at { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-at, .aic-at * { box-sizing: border-box; }
.aic-at .at-glow { position: absolute; left: 38%; top: 26%; width: 56%; height: 64%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 26%, transparent), transparent 72%); }
.aic-at .at-lens { position: absolute; right: -90px; top: 200px; width: 760px; height: 760px; opacity: .9; pointer-events: none; }

.aic-at .at-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-at .at-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-at .at-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 60px; line-height: .96; margin: 0; }
.aic-at .at-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* hero number block */
.aic-at .at-hero { position: absolute; left: var(--pad); top: 330px; right: var(--pad); }
.aic-at .at-kicker { display: flex; align-items: center; gap: 16px; margin: 0 0 8px; }
.aic-at .at-kicker b { width: 64px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-at .at-kicker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-at .at-bignum { line-height: .8; }
.aic-at .at-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 38px; color: var(--aic-ink-dim);
  margin: 28px 0 0; max-width: 1000px; }

/* supporting metrics */
.aic-at .at-aux { position: absolute; left: var(--pad); right: var(--pad); bottom: 232px;
  display: flex; gap: 56px; }
.aic-at .at-aux-item { display: flex; flex-direction: column; gap: 8px; padding-left: 24px;
  border-left: 3px solid var(--aic-hair-strong); }
.aic-at .at-aux-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); }
.aic-at .at-aux-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 52px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-at .at-aux-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-at .at-note { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 26px; color: var(--aic-muted);
  display: flex; align-items: center; gap: 14px; }
.aic-at .at-note::before { content: ''; width: 26px; height: 2px; background: var(--aic-hair-strong); flex: none; }

.aic-at .at-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-at .at-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-at .at-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-at .at-deco { width: 300px; height: 30px; }
`,zd=["pos","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t})),Cd=[{x:42,y:36,d:56},{x:66,y:30,d:38},{x:58,y:64,d:48},{x:80,y:58,d:28}];function mc(t){let a={...fc,...t},e={...dc,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-at",Nd);let m=w(a.accentColor),i=Math.max(0,Math.min(e.aux.length,a.auxCount)),s=e.aux.slice(0,i);return vt("div",{className:"aic-at",style:m,children:[a.showDecorations&&de("div",{className:"at-glow"}),a.showLens&&de("div",{className:"at-lens",children:de(A,{discs:Cd})}),vt("div",{className:"at-head",children:[vt("div",{children:[de("p",{className:"at-eyebrow",children:e.eyebrow}),de("h2",{className:"at-title",children:e.title})]}),de("div",{className:"at-sub",children:e.sub})]}),vt("div",{className:"at-hero",children:[vt("div",{className:"at-kicker",children:[de("b",{}),e.sub]}),de("div",{className:"at-bignum",children:de(ha,{lead:e.numLead,tail:e.numTail,unit:e.numUnit,slant:a.numberSlant,size:380})}),a.showCaption&&de("p",{className:"at-caption",children:e.numCaption})]}),i>0&&de("div",{className:"at-aux",children:s.map(l=>vt("div",{className:"at-aux-item",children:[de("div",{className:"at-aux-lbl",children:l.label}),vt("div",{className:"at-aux-val",children:[l.value,de("u",{children:l.unit})]})]},l.label))}),a.showNote&&de("div",{className:"at-note",children:e.note}),vt("div",{className:"at-foot",children:[vt("div",{className:"at-closing",children:[de("b",{}),e.closing]}),a.showDecorations&&de("div",{className:"at-deco",children:de(k,{data:zd,gap:4})})]})]})}var qi={};S(qi,{controls:()=>Sd,default:()=>vc,defaultProps:()=>xc});import"react";import{jsx as ya,jsxs as ot}from"react/jsx-runtime";var uc={eyebrow:"Capital Lens",title:"活躍資本圖譜",titleTail:"頭部投資機構",lead:"大額融資背後是一批高頻出手的頭部機構\uFF0C資本正從廣撒網轉向對頭部資產的集中下注\u3002",anchorLead:"48",anchorUnit:"家",anchorNote:"全年參與大額輪次的活躍機構",closing:"錢多不稀缺\uFF0C稀缺的是願意下重注的確定性\u3002",slots:[{name:"Aperture Ventures",role:"領投 9 筆 \xB7 偏好通用大模型"},{name:"Northgate Capital",role:"參投 14 筆 \xB7 全賽道佈局"},{name:"Vertex Growth",role:"領投 7 筆 \xB7 押注基礎設施"},{name:"Lumen Partners",role:"參投 11 筆 \xB7 應用層為主"}]},gc={portrait:3/4,landscape:4/3,square:1,auto:null},xc={...uc,images:[],imageCount:3,imageRatio:"portrait",showLabels:!0,focusEnabled:!0,focusIndex:0,showAnchor:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Sd=[{key:"eyebrow",label:"眉標",type:"text",default:"Capital Lens"},{key:"title",label:"標題",type:"text",default:"活躍資本圖譜"},{key:"titleTail",label:"副標題",type:"text",default:"頭部投資機構"},{key:"lead",label:"導言",type:"text",default:"大額融資背後是一批高頻出手的頭部機構\uFF0C資本正從廣撒網轉向對頭部資產的集中下注\u3002"},{key:"anchorLead",label:"錨點數字",type:"text",default:"48"},{key:"anchorUnit",label:"錨點單位",type:"text",default:"家"},{key:"anchorNote",label:"錨點註釋",type:"text",default:"全年參與大額輪次的活躍機構"},{key:"closing",label:"結語",type:"text",default:"錢多不稀缺\uFF0C稀缺的是願意下重注的確定性\u3002"},{key:"imageCount",label:"圖片數量",type:"slider",default:3,min:0,max:4,step:1,description:"圖片牆的圖片槽數量\uFF080\u20134\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"showLabels",label:"說明文案",type:"toggle",default:!0,description:"每張圖片上疊加的機構名稱 / 角色標籤的顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張圖片作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的圖片\u3002",showWhen:t=>t.focusEnabled&&t.imageCount>0},{key:"showAnchor",label:"重點數字",type:"toggle",default:!0,description:"右上錨點數字\uFF08活躍機構數量\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於高亮圖片框\u3001機構標籤與錨點數字\u3002"}],Ad=`
.aic-inv { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-inv, .aic-inv * { box-sizing: border-box; }
.aic-inv .iv-glow { position: absolute; left: -4%; top: -10%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-inv .iv-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-inv .iv-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-inv .iv-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-inv .iv-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-inv .iv-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: lead (left) \xB7 anchor (right) */
.aic-inv .iv-meta { position: absolute; left: var(--pad); right: var(--pad); top: 268px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 64px; }
.aic-inv .iv-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 0; max-width: 1150px; }
.aic-inv .iv-anchor { flex: none; text-align: right; }
.aic-inv .iv-anchor-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px;
  color: var(--aic-muted); margin: 10px 0 0; max-width: 320px; line-height: 1.4; text-align: right; }

/* image wall */
.aic-inv .iv-wall { position: absolute; left: var(--pad); right: var(--pad); top: 408px; bottom: 156px;
  display: flex; align-items: center; justify-content: center; gap: 24px; }
.aic-inv .iv-cell { position: relative; overflow: hidden; border-radius: 22px;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair);
  transition: transform .35s, border-color .35s, box-shadow .35s; }
.aic-inv .iv-cell.fixed { height: 100%; aspect-ratio: var(--ar); max-width: 100%; }
.aic-inv .iv-cell.auto { flex: 1 1 0; height: auto; max-height: 100%; }
.aic-inv .iv-cell.brand { height: 100%; aspect-ratio: var(--ar); max-width: 100%; }
.aic-inv .iv-cell[data-focus="1"] { border-color: var(--aic-accent); transform: translateY(-8px);
  box-shadow: 0 22px 48px -22px color-mix(in srgb, var(--aic-accent) 70%, transparent); }
.aic-inv .iv-slot { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.aic-inv .iv-slot > * { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.aic-inv .iv-cell.auto .iv-slot { position: relative; inset: auto; }
.aic-inv .iv-cell.auto .iv-slot > * { position: relative; inset: auto; width: 100%; height: auto; }
.aic-inv .iv-slot > [data-dashi-video-native="true"] { position: relative; inset: auto; width: auto; height: auto; max-width: 100%; max-height: 100%; }
.aic-inv .iv-deco-fill { width: 100%; height: 100%; position: relative; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

/* striped placeholder */
.aic-inv .iv-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-inv .iv-cell.auto .iv-ph { position: relative; min-height: 380px; }
.aic-inv .iv-ph-cap { position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%); text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 16px; letter-spacing: .06em; color: var(--aic-ink-dim); }

/* institution chip */
.aic-inv .iv-chip { position: absolute; left: 0; right: 0; bottom: 0; z-index: 3; padding: 26px 22px 18px;
  background: linear-gradient(to top, rgba(14,17,11,.86), rgba(14,17,11,.32) 64%, transparent);
  display: flex; flex-direction: column; gap: 4px; }
.aic-inv .iv-chip b { font-family: var(--aic-font-display); font-weight: 700; font-size: 24px; color: #fff;
  line-height: 1.1; }
.aic-inv .iv-chip span { font-family: var(--aic-font-text); font-weight: 500; font-size: 16px;
  color: rgba(255,255,255,.78); line-height: 1.35; }
.aic-inv .iv-cell[data-focus="1"] .iv-chip { background: linear-gradient(to top,
  color-mix(in srgb, var(--aic-accent) 90%, #0a0d06), color-mix(in srgb, var(--aic-accent) 30%, transparent) 64%, transparent); }
.aic-inv .iv-cell[data-focus="1"] .iv-chip b { color: var(--aic-ink); }
.aic-inv .iv-cell[data-focus="1"] .iv-chip span { color: rgba(14,17,11,.7); }
.aic-inv .iv-rank { position: absolute; top: 16px; left: 16px; z-index: 3; width: 40px; height: 40px;
  border-radius: 50%; background: rgba(255,255,255,.9); display: grid; place-items: center;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 20px; color: var(--aic-ink);
  transform: skewX(-9deg); }
.aic-inv .iv-cell[data-focus="1"] .iv-rank { background: var(--aic-ink); color: var(--aic-accent); }

.aic-inv .iv-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-inv .iv-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-inv .iv-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-inv .iv-deco { width: 300px; height: 30px; }
`,Ed=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","neg","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Td({i:t,auto:a}){let e="ivph-"+t;return ot("div",{className:"iv-ph"+(a?" auto":""),children:[ot("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[ya("defs",{children:ot("pattern",{id:e,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[ya("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),ya("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),ya("rect",{width:"100%",height:"100%",fill:`url(#${e})`})]}),ya("span",{className:"iv-ph-cap",children:`image_slot_${t+1}`})]})}function vc(t){let a={...xc,...t},e={...uc,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-inv",Ad);let m=w(a.accentColor),i=Math.max(0,Math.min(4,a.imageCount)),s=gc.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",l=gc[s],f=l==null,p=f?3/4:l,d=Math.max(0,Math.min(Math.max(0,i-1),a.focusIndex));return ot("div",{className:"aic-inv",style:m,children:[a.showDecorations&&ya("div",{className:"iv-glow"}),ot("div",{className:"iv-head",children:[ot("div",{children:[ya("p",{className:"iv-eyebrow",children:e.eyebrow}),ya("h2",{className:"iv-title",children:e.title})]}),ya("div",{className:"iv-sub",children:e.titleTail})]}),ot("div",{className:"iv-meta",children:[ya("p",{className:"iv-lead",children:e.lead}),a.showAnchor&&ot("div",{className:"iv-anchor",children:[ya(ha,{lead:e.anchorLead,unit:e.anchorUnit,size:108}),ya("p",{className:"iv-anchor-note",children:e.anchorNote})]})]}),ya("div",{className:"iv-wall",children:i===0?ya("div",{className:"iv-cell brand",style:{"--ar":String(p)},children:ya("div",{className:"iv-deco-fill",children:ya(A,{})})}):Array.from({length:i}).map((n,o)=>{let r=e.slots[o%e.slots.length]||{},g=a.focusEnabled&&o===d;return ot("div",{className:"iv-cell "+(f?"auto":"fixed"),"data-focus":g?"1":"0",style:f?null:{"--ar":String(l)},children:[ya("div",{className:"iv-slot",children:a.renderSlot?a.renderSlot(o,{ratio:s,ratioAR:l,preserveVideoSize:!0,adaptiveMedia:f}):ya(Td,{i:o,auto:f})}),ya("span",{className:"iv-rank",children:o+1}),a.showLabels&&ot("div",{className:"iv-chip",children:[ya("b",{children:r.name}),ya("span",{children:r.role})]})]},o)})}),ot("div",{className:"iv-foot",children:[ot("div",{className:"iv-closing",children:[ya("b",{}),e.closing]}),a.showDecorations&&ya("div",{className:"iv-deco",children:ya(k,{data:Ed,gap:4})})]})]})}var $i={};S($i,{controls:()=>Md,default:()=>yc,defaultProps:()=>bc});import"react";import{jsx as Pa,jsxs as Ke}from"react/jsx-runtime";var hc={eyebrow:"Active Capital",title:"最活躍投資機構",titleTail:"出手次數 Top",lead:"頭部機構的出手頻次遠高於市場平均\uFF0C少數幾家幾乎參與了全年所有標誌性輪次\u3002",anchorLead:"38%",anchorNote:"前 6 家機構覆蓋的大額輪次佔比",closing:"出手越密集\uFF0C越能定義下一輪敘事\u3002",axisLabel:"參與大額輪次 / 筆",rows:[{name:"Northgate Capital",tag:"全賽道佈局",val:14},{name:"Lumen Partners",tag:"應用層為主",val:11},{name:"Aperture Ventures",tag:"通用大模型",val:9},{name:"Vertex Growth",tag:"基礎設施",val:7},{name:"Meridian Fund",tag:"安全與資料",val:6},{name:"Cobalt Equity",tag:"AI 晶片",val:5},{name:"Harbor Lane",tag:"早期種子",val:4}]},bc={...hc,rowCount:6,chartType:"bars",showValues:!0,showTags:!0,focusEnabled:!0,focusIndex:0,showAnchor:!0,showDecorations:!0,accentColor:c.accent},Md=[{key:"eyebrow",label:"眉標",type:"text",default:"Active Capital"},{key:"title",label:"標題",type:"text",default:"最活躍投資機構"},{key:"titleTail",label:"副標題",type:"text",default:"出手次數 Top"},{key:"lead",label:"導言",type:"text",default:"頭部機構的出手頻次遠高於市場平均\uFF0C少數幾家幾乎參與了全年所有標誌性輪次\u3002"},{key:"anchorLead",label:"錨點數字",type:"text",default:"38%"},{key:"anchorNote",label:"錨點註釋",type:"text",default:"前 6 家機構覆蓋的大額輪次佔比"},{key:"closing",label:"結語",type:"text",default:"出手越密集\uFF0C越能定義下一輪敘事\u3002"},{key:"axisLabel",label:"座標標籤",type:"text",default:"參與大額輪次 / 筆"},{key:"rowCount",label:"卡片數量",type:"slider",default:6,min:4,max:7,step:1,description:"排行榜展示的機構行數量\uFF084\u20137\uFF09\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"條形"},{value:"lollipop",label:"棒點"}],description:"排名條的呈現方式\uFF1A實心條形 / 棒點\uFF08lollipop\uFF09\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"每條排名條末端的數值標籤顯隱\u3002"},{key:"showTags",label:"說明文案",type:"toggle",default:!0,description:"每家機構的偏好賽道標籤顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 名"},{value:1,label:"第 2 名"},{value:2,label:"第 3 名"},{value:3,label:"第 4 名"},{value:4,label:"第 5 名"},{value:5,label:"第 6 名"},{value:6,label:"第 7 名"}],description:"選擇被高亮的機構行\u3002",showWhen:t=>t.focusEnabled},{key:"showAnchor",label:"重點數字",type:"toggle",default:!0,description:"左側錨點數字\uFF08頭部機構覆蓋佔比\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於高亮行\u3001排名條與錨點數字\u3002"}],Ld=`
.aic-act { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-act, .aic-act * { box-sizing: border-box; }
.aic-act .at-glow { position: absolute; right: -4%; top: -8%; width: 54%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-act .at-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-act .at-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-act .at-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-act .at-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left rail */
.aic-act .at-rail { position: absolute; left: var(--pad); top: 304px; width: 470px;
  display: flex; flex-direction: column; }
.aic-act .at-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 31px; line-height: 1.5;
  color: var(--aic-ink); margin: 0; }
.aic-act .at-anchor { margin-top: 52px; }
.aic-act .at-anchor-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 21px;
  color: var(--aic-muted); margin: 14px 0 0; max-width: 420px; line-height: 1.45; }
.aic-act .at-closing { display: flex; align-items: center; gap: 16px; margin-top: 56px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-act .at-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* leaderboard */
.aic-act .at-board { position: absolute; right: var(--pad); top: 300px; bottom: 150px; width: 1150px;
  display: flex; flex-direction: column; }
.aic-act .at-axis { display: flex; align-items: center; justify-content: flex-end; margin-bottom: 14px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-act .at-rows { flex: 1; display: flex; flex-direction: column; }
.aic-act .at-row { flex: 1; display: grid; grid-template-columns: 60px minmax(280px, 360px) 1fr;
  align-items: center; gap: 0 26px; padding: 0 18px; border-radius: 16px;
  border-bottom: 1.5px solid var(--aic-hair); transition: background .3s, transform .3s; }
.aic-act .at-row:last-child { border-bottom: none; }
.aic-act .at-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 12%, var(--aic-card)); transform: translateX(6px); }
.aic-act .at-rk { font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; line-height: 1;
  color: var(--aic-faint); transform: skewX(-9deg); transform-origin: left bottom; font-variant-numeric: tabular-nums; }
.aic-act .at-row[data-focus="1"] .at-rk { color: var(--aic-accent); }
.aic-act .at-name { display: flex; flex-direction: column; gap: 4px; }
.aic-act .at-name b { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink);
  line-height: 1.1; white-space: nowrap; }
.aic-act .at-name span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); }
.aic-act .at-bar { display: flex; align-items: center; gap: 16px; }
.aic-act .at-track { flex: 1; height: 22px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-act .at-fill { height: 100%; border-radius: 999px; background: var(--aic-ink);
  transition: width .55s cubic-bezier(.3,.7,.4,1); }
.aic-act .at-row[data-focus="1"] .at-fill { background: var(--aic-accent); }
/* lollipop variant */
.aic-act .at-lolli { flex: 1; position: relative; height: 22px; }
.aic-act .at-lolli-line { position: absolute; left: 0; top: 50%; height: 4px; border-radius: 999px;
  background: var(--aic-hair-strong); transform: translateY(-50%); transition: width .55s cubic-bezier(.3,.7,.4,1); }
.aic-act .at-lolli-dot { position: absolute; top: 50%; width: 26px; height: 26px; border-radius: 50%;
  background: var(--aic-ink); transform: translate(-50%, -50%); transition: left .55s cubic-bezier(.3,.7,.4,1);
  border: 4px solid var(--aic-paper); box-shadow: 0 0 0 1.5px var(--aic-hair-strong); }
.aic-act .at-row[data-focus="1"] .at-lolli-dot { background: var(--aic-accent); box-shadow: 0 0 0 1.5px var(--aic-accent); }
.aic-act .at-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; white-space: nowrap; min-width: 96px; text-align: right; }
.aic-act .at-val u { text-decoration: none; font-size: 16px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

.aic-act .at-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: flex-end; }
.aic-act .at-deco { width: 300px; height: 30px; }
`,Fd=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","neg","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function yc(t){let a={...bc,...t},e={...hc,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-act",Ld);let m=w(a.accentColor),i=Math.max(4,Math.min(E(e.rows).length,Ta(a.rowCount,6))),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(p=>p.val),1)*1.04;return Ke("div",{className:"aic-act",style:m,children:[a.showDecorations&&Pa("div",{className:"at-glow"}),Ke("div",{className:"at-head",children:[Ke("div",{children:[Pa("p",{className:"at-eyebrow",children:e.eyebrow}),Pa("h2",{className:"at-title",children:e.title})]}),Ke("div",{className:"at-sub",children:[e.titleTail," ",i]})]}),Ke("div",{className:"at-rail",children:[Pa("p",{className:"at-lead",children:e.lead}),a.showAnchor&&Ke("div",{className:"at-anchor",children:[Pa(ha,{lead:e.anchorLead,size:120}),Pa("p",{className:"at-anchor-note",children:e.anchorNote})]}),Ke("div",{className:"at-closing",children:[Pa("b",{}),e.closing]})]}),Ke("div",{className:"at-board",children:[Pa("div",{className:"at-axis",children:e.axisLabel}),Pa("div",{className:"at-rows",children:s.map((p,d)=>{let n=a.focusEnabled&&d===l,o=M(p.val,f)*100;return Ke("div",{className:"at-row","data-focus":n?"1":"0",children:[Pa("div",{className:"at-rk",children:d+1}),Ke("div",{className:"at-name",children:[Pa("b",{children:p.name}),a.showTags&&Pa("span",{children:p.tag})]}),Ke("div",{className:"at-bar",children:[a.chartType==="lollipop"?Ke("div",{className:"at-lolli",children:[Pa("div",{className:"at-lolli-line",style:{width:o+"%"}}),Pa("div",{className:"at-lolli-dot",style:{left:o+"%"}})]}):Pa("div",{className:"at-track",children:Pa("div",{className:"at-fill",style:{width:o+"%"}})}),a.showValues&&Ke("div",{className:"at-val",children:[p.val,Pa("u",{children:"筆"})]})]})]},p.name)})})]}),a.showDecorations&&Pa("div",{className:"at-foot",children:Pa("div",{className:"at-deco",children:Pa(k,{data:Fd,gap:4})})})]})}var Ui={};S(Ui,{controls:()=>Id,default:()=>Nc,defaultProps:()=>kc});import"react";import{jsx as Da,jsxs as ae}from"react/jsx-runtime";var wc={eyebrow:"Capital Concentration",title:"資本集中度",sub:"頭部集中",numLead:"42",numTail:"%",numCaption:"全年大額融資中\uFF0C由 Top 10 機構主導輪次貢獻的比例",note:"集中不是終點\uFF0C而是下一輪分化的起點\u3002",closing:"當資本向頭部聚攏\uFF0C中長尾的視窗正在收窄\u3002",barTitle:"融資額份額 \xB7 按機構排名分層",tiers:[{label:"Top 3 機構",v:22},{label:"第 4\u20136 名",v:11},{label:"第 7\u201310 名",v:9}],remainderLabel:"其他機構",aux:[{label:"活躍機構",value:"48",unit:"家"},{label:"Top10 覆蓋輪次",value:"37",unit:"筆"},{label:"平均領投規模",value:"14",unit:"億美元"}]},kc={...wc,numberSlant:!0,tierCount:3,showRemainder:!0,showShareBar:!0,auxCount:3,showNote:!0,showLens:!0,showDecorations:!0,accentColor:c.accent},Id=[{key:"eyebrow",label:"眉標",type:"text",default:"Capital Concentration"},{key:"title",label:"標題",type:"text",default:"資本集中度"},{key:"sub",label:"次標題",type:"text",default:"頭部集中"},{key:"numLead",label:"numLead",type:"text",default:"42"},{key:"numTail",label:"numTail",type:"text",default:"%"},{key:"numCaption",label:"numCaption",type:"text",default:"全年大額融資中\uFF0C由 Top 10 機構主導輪次貢獻的比例"},{key:"note",label:"note",type:"text",default:"集中不是終點\uFF0C而是下一輪分化的起點\u3002"},{key:"closing",label:"結語",type:"text",default:"當資本向頭部聚攏\uFF0C中長尾的視窗正在收窄\u3002"},{key:"barTitle",label:"barTitle",type:"text",default:"融資額份額 \xB7 按機構排名分層"},{key:"remainderLabel",label:"remainderLabel",type:"text",default:"其他機構"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"主數字是否應用品牌斜切\uFF08italic-slant\uFF09效果\u3002"},{key:"tierCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"份額條中顯式展示的頭部分層數量\uFF082\u20133\uFF09\uFF1B剩餘自動併入\u300C其他\u300D\u3002"},{key:"showRemainder",label:"其他分段",type:"toggle",default:!0,description:"是否在份額條末尾補上\u300C其他機構\u300D剩餘分段\u3002"},{key:"showShareBar",label:"份額圖表",type:"toggle",default:!0,description:"堆疊份額條\uFF08按機構排名分層\uFF09的顯隱\u3002"},{key:"auxCount",label:"輔助數量",type:"slider",default:3,min:0,max:3,step:1,description:"輔助指標數量\uFF080\u20133\uFF09\uFF1B為 0 時只保留主數字\u3002"},{key:"showNote",label:"輔助註釋",type:"toggle",default:!0,description:"底部補充註釋的顯隱\u3002"},{key:"showLens",label:"品牌圖形",type:"toggle",default:!0,description:"品牌透鏡圖形\uFF08焦點圓盤\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於主數字下劃線\u3001份額條與品牌圖形\u3002"}],Rd=`
.aic-con { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-con, .aic-con * { box-sizing: border-box; }
.aic-con .cn-glow { position: absolute; left: 30%; top: 24%; width: 56%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 72%); }
.aic-con .cn-lens { position: absolute; right: -70px; top: 150px; width: 560px; height: 560px; opacity: .9; pointer-events: none; }

.aic-con .cn-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-con .cn-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-con .cn-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 60px; line-height: .96; margin: 0; }
.aic-con .cn-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* hero number (left) + aux (right) */
.aic-con .cn-hero { position: absolute; left: var(--pad); top: 312px; width: 980px; }
.aic-con .cn-kicker { display: flex; align-items: center; gap: 16px; margin: 0 0 4px; }
.aic-con .cn-kicker b { width: 64px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-con .cn-kicker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-con .cn-bignum { line-height: .8; }
.aic-con .cn-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim);
  margin: 24px 0 0; max-width: 880px; line-height: 1.4; }

.aic-con .cn-aux { position: absolute; right: var(--pad); top: 320px; width: 420px;
  display: flex; flex-direction: column; gap: 26px; }
.aic-con .cn-aux-item { display: flex; flex-direction: column; gap: 6px; padding-left: 22px;
  border-left: 3px solid var(--aic-hair-strong); }
.aic-con .cn-aux-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-muted); }
.aic-con .cn-aux-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 46px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-con .cn-aux-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

/* concentration share bar */
.aic-con .cn-share { position: absolute; left: var(--pad); right: var(--pad); top: 690px; }
.aic-con .cn-share-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 16px; }
.aic-con .cn-bar { display: flex; width: 100%; height: 64px; border-radius: 14px; overflow: hidden; gap: 4px; }
.aic-con .cn-seg { position: relative; display: flex; align-items: center; justify-content: center;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transition: flex-basis .55s cubic-bezier(.3,.7,.4,1); min-width: 0; }
.aic-con .cn-seg.rest { background: var(--aic-hair); color: var(--aic-ink-dim); }
.aic-con .cn-legend { display: flex; flex-wrap: wrap; gap: 14px 36px; margin-top: 18px; }
.aic-con .cn-leg { display: flex; align-items: center; gap: 10px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 21px; color: var(--aic-ink-dim); }
.aic-con .cn-leg i { width: 16px; height: 16px; border-radius: 5px; flex: none; }
.aic-con .cn-leg b { font-family: var(--aic-font-display); font-weight: 700; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }

.aic-con .cn-note { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 26px; color: var(--aic-muted);
  display: flex; align-items: center; gap: 14px; }
.aic-con .cn-note::before { content: ''; width: 26px; height: 2px; background: var(--aic-hair-strong); flex: none; }

.aic-con .cn-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-con .cn-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-con .cn-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-con .cn-deco { width: 300px; height: 30px; }
`,Dd=["pos","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t})),Bd=[{x:40,y:36,d:56},{x:66,y:30,d:38},{x:56,y:64,d:48},{x:80,y:58,d:28}],ci=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 64%, white)","color-mix(in srgb, var(--aic-accent) 38%, white)"];function Nc(t){let a={...kc,...t},e={...wc,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-con",Rd);let m=w(a.accentColor),i=Math.max(0,Math.min(e.aux.length,a.auxCount)),s=e.aux.slice(0,i),l=Math.max(2,Math.min(e.tiers.length,a.tierCount)),f=e.tiers.slice(0,l),p=f.reduce((n,o)=>n+o.v,0),d=Math.max(0,100-p);return ae("div",{className:"aic-con",style:m,children:[a.showDecorations&&Da("div",{className:"cn-glow"}),a.showLens&&Da("div",{className:"cn-lens",children:Da(A,{discs:Bd})}),ae("div",{className:"cn-head",children:[ae("div",{children:[Da("p",{className:"cn-eyebrow",children:e.eyebrow}),Da("h2",{className:"cn-title",children:e.title})]}),Da("div",{className:"cn-sub",children:e.sub})]}),ae("div",{className:"cn-hero",children:[ae("div",{className:"cn-kicker",children:[Da("b",{}),Da("span",{children:e.sub})]}),Da("div",{className:"cn-bignum",children:Da(ha,{lead:e.numLead,tail:e.numTail,slant:a.numberSlant,size:320})}),Da("p",{className:"cn-caption",children:e.numCaption})]}),i>0&&Da("div",{className:"cn-aux",children:s.map(n=>ae("div",{className:"cn-aux-item",children:[Da("div",{className:"cn-aux-lbl",children:n.label}),ae("div",{className:"cn-aux-val",children:[n.value,Da("u",{children:n.unit})]})]},n.label))}),a.showShareBar&&ae("div",{className:"cn-share",children:[Da("p",{className:"cn-share-t",children:e.barTitle}),ae("div",{className:"cn-bar",children:[f.map((n,o)=>ae("div",{className:"cn-seg",style:{flex:`${n.v} 1 0`,background:ci[o%ci.length]},children:[n.v,"%"]},n.label)),a.showRemainder&&d>0&&ae("div",{className:"cn-seg rest",style:{flex:`${d} 1 0`},children:[d,"%"]})]}),ae("div",{className:"cn-legend",children:[f.map((n,o)=>ae("div",{className:"cn-leg",children:[Da("i",{style:{background:ci[o%ci.length]}}),n.label," ",ae("b",{children:[n.v,"%"]})]},n.label)),a.showRemainder&&d>0&&ae("div",{className:"cn-leg",children:[Da("i",{style:{background:"var(--aic-hair)"}}),e.remainderLabel," ",ae("b",{children:[d,"%"]})]})]})]}),a.showNote&&Da("div",{className:"cn-note",children:e.note}),ae("div",{className:"cn-foot",children:[ae("div",{className:"cn-closing",children:[Da("b",{}),e.closing]}),a.showDecorations&&Da("div",{className:"cn-deco",children:Da(k,{data:Dd,gap:4})})]})]})}var Yi={};S(Yi,{controls:()=>jd,default:()=>Sc,defaultProps:()=>Cc});import"react";import{jsx as wa,jsxs as ht}from"react/jsx-runtime";var zc={eyebrow:"Notable Deals",title:"代表性交易",titleTail:"領投陣容",lead:"少數幾筆超大額輪次幾乎定義了全年節奏\uFF0C背後是穩定復現的領投與跟投組合\u3002",statLine:"Top 6 交易合計 412 億美元 \xB7 佔全年大額融資的 42%",colHeads:{co:"公司",dim:"賽道",val:"融資額",round:"輪次",syn:"領投 / 跟投陣容"},rows:[{co:"Helix AI",dim:"通用大模型",val:"64",unit:"億美元",round:"F 輪",syn:["NG","AP","VG"]},{co:"Cortex Labs",dim:"基礎設施",val:"58",unit:"億美元",round:"E 輪",syn:["VG","NG","CO"]},{co:"Lumina",dim:"垂直應用",val:"47",unit:"億美元",round:"D 輪",syn:["LP","NG","ME"]},{co:"Synapse",dim:"AI 晶片",val:"36",unit:"億美元",round:"D 輪",syn:["CO","VG","AP"]},{co:"Verda",dim:"安全與資料",val:"24",unit:"億美元",round:"C 輪",syn:["ME","LP","HL"]},{co:"Atlas Mind",dim:"通用大模型",val:"18",unit:"億美元",round:"C 輪",syn:["AP","NG","HL"]}]},Cc={...zc,rowCount:5,showRound:!0,showSyndicate:!0,focusEnabled:!0,focusIndex:0,showStatLine:!0,showDecorations:!0,accentColor:c.accent},jd=[{key:"eyebrow",label:"眉標",type:"text",default:"Notable Deals"},{key:"title",label:"標題",type:"text",default:"代表性交易"},{key:"titleTail",label:"副標題",type:"text",default:"領投陣容"},{key:"lead",label:"導言",type:"text",default:"少數幾筆超大額輪次幾乎定義了全年節奏\uFF0C背後是穩定復現的領投與跟投組合\u3002"},{key:"statLine",label:"statLine",type:"text",default:"Top 6 交易合計 412 億美元 \xB7 佔全年大額融資的 42%"},{key:"rowCount",label:"行數量",type:"slider",default:5,min:3,max:6,step:1,description:"表格展示的行數量\uFF083\u20136\uFF09\u3002"},{key:"showRound",label:"輪次列",type:"toggle",default:!0,description:"融資輪次列的顯隱\u3002"},{key:"showSyndicate",label:"陣容列",type:"toggle",default:!0,description:"領投 / 跟投陣容列\uFF08機構縮寫徽標\uFF09的顯隱\uFF1B關閉後表格更緊湊\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"},{value:5,label:"第 6 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showStatLine",label:"說明文案",type:"toggle",default:!0,description:"標題下方彙總統計行的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於高亮行\u3001陣容徽標與點綴\u3002"}],Pd=`
.aic-syn { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-syn, .aic-syn * { box-sizing: border-box; }
.aic-syn .sy-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-syn .sy-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-syn .sy-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-syn .sy-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-syn .sy-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-syn .sy-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px; }
.aic-syn .sy-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 31px; line-height: 1.5;
  color: var(--aic-ink); margin: 0; max-width: 1320px; }
.aic-syn .sy-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); margin-top: 16px; display: flex; align-items: center; gap: 14px; }
.aic-syn .sy-statline::before { content: ''; width: 26px; height: 2px; background: var(--aic-accent); flex: none; }

/* table */
.aic-syn .sy-table { position: absolute; left: var(--pad); right: var(--pad); top: 470px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-syn .sy-thead { display: grid; align-items: center; gap: 0 30px; padding: 0 26px 16px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-syn .sy-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-syn .sy-th.r { text-align: right; }
.aic-syn .sy-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-syn .sy-row { flex: 1; display: grid; align-items: center; gap: 0 30px; padding: 0 26px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-syn .sy-row:last-child { border-bottom: none; }
.aic-syn .sy-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-syn .sy-co { display: flex; align-items: center; gap: 16px; }
.aic-syn .sy-co .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-hair-strong); flex: none; }
.aic-syn .sy-row[data-focus="1"] .sy-co .dot { background: var(--aic-accent); }
.aic-syn .sy-co b { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-ink); white-space: nowrap; }
.aic-syn .sy-dim { font-family: var(--aic-font-text); font-weight: 500; font-size: 24px; color: var(--aic-ink-dim); }
.aic-syn .sy-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 38px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-syn .sy-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-syn .sy-round { display: flex; }
.aic-syn .sy-round span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; color: var(--aic-ink-dim);
  border: 1.5px solid var(--aic-hair-strong); border-radius: 999px; padding: 5px 16px; white-space: nowrap; }
.aic-syn .sy-row[data-focus="1"] .sy-round span { border-color: var(--aic-accent); color: var(--aic-ink); }
.aic-syn .sy-syn { display: flex; align-items: center; }
.aic-syn .sy-chips { display: flex; }
.aic-syn .sy-chips i { width: 48px; height: 48px; border-radius: 50%; margin-left: -12px;
  display: grid; place-items: center; font-family: var(--aic-font-display); font-weight: 700; font-size: 17px;
  font-style: normal; color: var(--aic-ink); background: var(--aic-accent-soft);
  border: 2.5px solid var(--aic-paper); box-shadow: 0 0 0 1px var(--aic-hair-strong); }
.aic-syn .sy-chips i:first-child { margin-left: 0; }
.aic-syn .sy-chips i:nth-child(1) { background: var(--aic-accent); }
.aic-syn .sy-row[data-focus="1"] .sy-chips i:first-child { box-shadow: 0 0 0 1px var(--aic-accent); }

.aic-syn .sy-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: flex-end; }
.aic-syn .sy-deco { width: 300px; height: 30px; }
`,Od=["pos","accent","pos","warn","pos","accent","pos","neg","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","neg","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","neg","accent","pos","warn","pos","accent"].map(t=>({tone:t}));function Sc(t){let a={...Cc,...t},e={...zc,...Object.fromEntries(Object.entries(a).filter(([,d])=>d!==void 0))};y(),h("aic-syn",Pd);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=["minmax(260px, 1.2fr)","minmax(160px, 1fr)","210px"];a.showRound&&f.push("140px"),a.showSyndicate&&f.push("minmax(200px, 1fr)");let p=f.join(" ");return ht("div",{className:"aic-syn",style:m,children:[a.showDecorations&&wa("div",{className:"sy-glow"}),ht("div",{className:"sy-head",children:[ht("div",{children:[wa("p",{className:"sy-eyebrow",children:e.eyebrow}),wa("h2",{className:"sy-title",children:e.title})]}),wa("div",{className:"sy-sub",children:e.titleTail})]}),ht("div",{className:"sy-meta",children:[wa("p",{className:"sy-lead",children:e.lead}),a.showStatLine&&wa("div",{className:"sy-statline",children:e.statLine})]}),ht("div",{className:"sy-table",children:[ht("div",{className:"sy-thead",style:{gridTemplateColumns:p},children:[wa("div",{className:"sy-th",children:e.colHeads.co}),wa("div",{className:"sy-th",children:e.colHeads.dim}),wa("div",{className:"sy-th r",children:e.colHeads.val}),a.showRound&&wa("div",{className:"sy-th",children:e.colHeads.round}),a.showSyndicate&&wa("div",{className:"sy-th",children:e.colHeads.syn})]}),wa("div",{className:"sy-tbody",children:s.map((d,n)=>ht("div",{className:"sy-row","data-focus":a.focusEnabled&&n===l?"1":"0",style:{gridTemplateColumns:p},children:[ht("div",{className:"sy-co",children:[wa("span",{className:"dot"}),wa("b",{children:d.co})]}),wa("div",{className:"sy-dim",children:d.dim}),ht("div",{className:"sy-val",children:[d.val,wa("u",{children:d.unit})]}),a.showRound&&wa("div",{className:"sy-round",children:wa("span",{children:d.round})}),a.showSyndicate&&wa("div",{className:"sy-syn",children:wa("div",{className:"sy-chips",children:d.syn.map((o,r)=>wa("i",{children:o},r))})})]},d.co))})]}),a.showDecorations&&wa("div",{className:"sy-foot",children:wa("div",{className:"sy-deco",children:wa(k,{data:Od,gap:4})})})]})}var _i={};S(_i,{controls:()=>Hd,default:()=>Mc,defaultProps:()=>Tc});import"react";import{jsx as K,jsxs as Me}from"react/jsx-runtime";var Ec={eyebrow:"Enterprise Search",segment:"企業搜尋賽道",title:"知識入口機會",titleTail:"企業搜尋賽道",lead:"企業搜尋是較早形成明確付費場景的應用方向\uFF1B接入內部知識後\uFF0C企業搜尋具備高頻使用場景\uFF0C成為 AI 應用的重要落地點\u3002",closing:"企業知識入口是 AI 應用的重要落地點\u3002",badge:"企業搜尋",metrics:[{label:"融資額",value:"38",unit:"億美元"},{label:"事件數",value:"9",unit:"筆"},{label:"平均單筆",value:"4.2",unit:"億美元"},{label:"付費客戶中位數",value:"620",unit:"家"}],progress:{label:"接入內部知識庫後的高頻檢索滲透",value:58,display:"58%"}},Ac={portrait:3/4,landscape:4/3,square:1,auto:null},Tc={...Ec,images:[],imageCount:1,imageRatio:"portrait",metricCount:4,focusEnabled:!0,focusIndex:0,showProgress:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Hd=[{key:"eyebrow",label:"眉標",type:"text",default:"Enterprise Search"},{key:"segment",label:"segment",type:"text",default:"企業搜尋賽道"},{key:"title",label:"標題",type:"text",default:"知識入口機會"},{key:"titleTail",label:"副標題",type:"text",default:"企業搜尋賽道"},{key:"lead",label:"導言",type:"text",default:"企業搜尋是較早形成明確付費場景的應用方向\uFF1B接入內部知識後\uFF0C企業搜尋具備高頻使用場景\uFF0C成為 AI 應用的重要落地點\u3002"},{key:"closing",label:"結語",type:"text",default:"企業知識入口是 AI 應用的重要落地點\u3002"},{key:"badge",label:"badge",type:"text",default:"企業搜尋"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"指標欄條目數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一條指標作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的指標\u3002",showWhen:t=>t.focusEnabled},{key:"showProgress",label:"進度指標",type:"toggle",default:!0,description:"底部滲透 / 採用率進度條的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮指標與進度條\u3002"}],Vd=`
.aic-know { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-know, .aic-know * { box-sizing: border-box; }
.aic-know .kw-glow { position: absolute; right: 24%; top: -10%; width: 46%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-know .kw-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-know .kw-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-know .kw-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-know .kw-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* content column (left) */
.aic-know .kw-side { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 940px;
  display: flex; flex-direction: column; }
.aic-know .kw-marker { display: flex; align-items: center; gap: 16px; }
.aic-know .kw-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-know .kw-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-know .kw-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 31px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 0; max-width: 900px; text-wrap: pretty; }

.aic-know .kw-rail { margin-top: 38px; display: flex; flex-direction: column; }
.aic-know .kw-item { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 20px;
  padding: 22px 6px 22px 24px; border-top: 1.5px solid var(--aic-hair); border-left: 4px solid transparent;
  transition: border-color .3s, background .3s, padding-left .3s; }
.aic-know .kw-item:last-child { border-bottom: 1.5px solid var(--aic-hair); }
.aic-know .kw-item[data-focus="1"] { border-left-color: var(--aic-accent);
  background: color-mix(in srgb, var(--aic-accent) 9%, transparent); padding-left: 30px; }
.aic-know .kw-item-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 24px; color: var(--aic-ink-dim); }
.aic-know .kw-item[data-focus="1"] .kw-item-lbl { color: var(--aic-ink); }
.aic-know .kw-item-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 50px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: .9; white-space: nowrap; }
.aic-know .kw-item[data-focus="1"] .kw-item-val { color: var(--aic-accent-deep); }
.aic-know .kw-item-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-know .kw-prog { margin-top: auto; padding-top: 26px; }
.aic-know .kw-prog-t { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; margin-bottom: 12px; }
.aic-know .kw-prog-t span { font-family: var(--aic-font-text); font-weight: 600; font-size: 22px; color: var(--aic-muted); }
.aic-know .kw-prog-t b { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-know .kw-prog-track { height: 14px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-know .kw-prog-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1);
  background: linear-gradient(90deg, var(--aic-accent-deep), var(--aic-accent)); }

/* hero image area (right) */
.aic-know .kw-hero { position: absolute; left: 1116px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; align-items: stretch; gap: 20px; }
.aic-know .kw-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid; }
.aic-know .kw-cell.fixed { align-items: center; justify-items: center; }
.aic-know .kw-cell.fixed .kw-frame { position: relative; width: 100%; max-height: 100%; aspect-ratio: var(--ar); overflow: hidden; }
.aic-know .kw-cell.fixed .kw-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-know .kw-cell.auto .kw-frame { width: 100%; }
.aic-know .kw-cell.auto .kw-frame > * { width: 100%; display: block; }
.aic-know .kw-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-know .kw-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-know .kw-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-know .kw-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-know .kw-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-know .kw-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-know .kw-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-know .kw-deco { width: 300px; height: 30px; }
`,Wd=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function qd({i:t}){let a="kwph-"+t;return Me("div",{className:"kw-ph",children:[Me("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[K("defs",{children:Me("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[K("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),K("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),K("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),K("span",{className:"kw-ph-cap",children:`image_slot_${t+1}`})]})}function Mc(t){let a={...Tc,...t},e={...Ec,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-know",Vd);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(0,Math.min(2,a.imageCount)),p=Ac.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",d=Ac[p],n=d==null,o=n?3/4:d;return Me("div",{className:"aic-know",style:m,children:[a.showDecorations&&K("div",{className:"kw-glow"}),Me("div",{className:"kw-head",children:[Me("div",{children:[K("p",{className:"kw-eyebrow",children:e.eyebrow}),K("h2",{className:"kw-title",children:e.title})]}),K("div",{className:"kw-sub",children:e.titleTail})]}),Me("div",{className:"kw-side",children:[Me("div",{className:"kw-marker",children:[K("b",{}),K("span",{children:e.segment})]}),K("p",{className:"kw-lead",children:e.lead}),K("div",{className:"kw-rail",children:s.map((r,g)=>Me("div",{className:"kw-item","data-focus":a.focusEnabled&&g===l?"1":"0",children:[K("div",{className:"kw-item-lbl",children:r.label}),Me("div",{className:"kw-item-val",children:[r.value,K("u",{children:r.unit})]})]},r.label))}),a.showProgress&&Me("div",{className:"kw-prog",children:[Me("div",{className:"kw-prog-t",children:[K("span",{children:e.progress.label}),K("b",{children:e.progress.display})]}),K("div",{className:"kw-prog-track",children:K("div",{className:"kw-prog-fill",style:{width:e.progress.value+"%"}})})]})]}),K("div",{className:"kw-hero",children:f===0?K("div",{className:"kw-cell fixed",children:K("div",{className:"kw-frame",style:{"--ar":String(o)},children:K("div",{className:"kw-deco-fill",children:K(A,{})})})}):Array.from({length:f}).map((r,g)=>Me("div",{className:"kw-cell "+(n?"auto":"fixed"),children:[a.showDecorations&&g===0&&K("span",{className:"kw-badge",children:e.badge}),K("div",{className:"kw-frame",style:n?null:{"--ar":String(d)},children:a.renderSlot?a.renderSlot(g,{ratio:p,ratioAR:d,preserveVideoRatio:!0}):K(qd,{i:g})})]},g))}),Me("div",{className:"kw-foot",children:[Me("div",{className:"kw-closing",children:[K("b",{}),e.closing]}),a.showDecorations&&K("div",{className:"kw-deco",children:K(k,{data:Wd,gap:4})})]})]})}var Xi={};S(Xi,{controls:()=>$d,default:()=>Ic,defaultProps:()=>Fc});import"react";import{jsx as ea,jsxs as ee}from"react/jsx-runtime";var Lc={eyebrow:"Legal AI",marker:"法律 AI",segment:"專業服務 \xB7 法律",title:"專業服務高客單價",titleTail:"法律 AI 賽道",lead:"法律 AI 具備高客單價\u3001強專業壁壘和明確效率提升空間\uFF1B專業服務行業願意為準確性和審計鏈路付費\u3002",statLine:"融資額 26 億美元 \xB7 6 筆事件 \xB7 平均單筆 4.3 億美元",anchorValue:"46%",anchorLabel:"合同審查佔場景比例",closing:"法律 AI 是垂直應用商業化樣本\u3002",colHeads:{dim:"場景方向",share:"場景佔比",note:"能力說明"},rows:[{dim:"合同審查",share:46,note:"條款抽取\u3001風險標註與版本比對"},{dim:"法律檢索",share:22,note:"判例\u3001法規與內部知識檢索"},{dim:"盡職調查",share:14,note:"資料室檔案批次解析與摘要"},{dim:"合規審查",share:11,note:"政策對照\u3001留痕與審計鏈路"},{dim:"文書起草",share:7,note:"模板生成與草擬輔助"}],flowTitle:"法律工作流",flow:["檔案攝入","條款抽取","風險標註","審查輸出","交付歸檔"]},Fc={...Lc,rowCount:5,showShare:!0,showFlow:!0,flowStepCount:4,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},$d=[{key:"eyebrow",label:"眉標",type:"text",default:"Legal AI"},{key:"marker",label:"marker",type:"text",default:"法律 AI"},{key:"segment",label:"segment",type:"text",default:"專業服務 \xB7 法律"},{key:"title",label:"標題",type:"text",default:"專業服務高客單價"},{key:"titleTail",label:"副標題",type:"text",default:"法律 AI 賽道"},{key:"lead",label:"導言",type:"text",default:"法律 AI 具備高客單價\u3001強專業壁壘和明確效率提升空間\uFF1B專業服務行業願意為準確性和審計鏈路付費\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 26 億美元 \xB7 6 筆事件 \xB7 平均單筆 4.3 億美元"},{key:"anchorValue",label:"anchorValue",type:"text",default:"46%"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"合同審查佔場景比例"},{key:"closing",label:"結語",type:"text",default:"法律 AI 是垂直應用商業化樣本\u3002"},{key:"flowTitle",label:"flowTitle",type:"text",default:"法律工作流"},{key:"rowCount",label:"行數量",type:"slider",default:5,min:3,max:5,step:1,description:"場景表格展示的行數量\uFF083\u20135\uFF09\u3002"},{key:"showShare",label:"佔比列",type:"toggle",default:!0,description:"場景佔比列\uFF08迷你條 + 數值\uFF09的顯隱\u3002"},{key:"showFlow",label:"流程圖",type:"toggle",default:!0,description:"底部橫向工作流程條的顯隱\u3002"},{key:"flowStepCount",label:"流程數量",type:"slider",default:4,min:3,max:5,step:1,description:"流程節點數量\uFF083\u20135\uFF09\u3002",showWhen:t=>t.showFlow},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001佔比條\u3001高亮行與流程節點\u3002"}],Ud=`
.aic-legal { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-legal, .aic-legal * { box-sizing: border-box; }
.aic-legal .lg-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-legal .lg-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-legal .lg-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-legal .lg-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-legal .lg-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 anchor share (right) */
.aic-legal .lg-meta { position: absolute; left: var(--pad); right: var(--pad); top: 288px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-legal .lg-meta-l { max-width: 1180px; }
.aic-legal .lg-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-legal .lg-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 56px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; white-space: nowrap; }
.aic-legal .lg-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-legal .lg-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 12px; }
.aic-legal .lg-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-legal .lg-anchor { flex: none; text-align: right; }
.aic-legal .lg-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 92px; line-height: .82;
  color: var(--aic-accent); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-legal .lg-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* table */
.aic-legal .lg-table { position: absolute; left: var(--pad); right: var(--pad); top: 506px; bottom: 320px;
  display: flex; flex-direction: column; }
.aic-legal[data-flow="0"] .lg-table { bottom: 150px; }
.aic-legal .lg-thead { display: grid; align-items: center; gap: 0 36px; padding: 0 26px 14px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-legal .lg-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-legal .lg-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-legal .lg-row { flex: 1; display: grid; align-items: center; gap: 0 36px; padding: 0 26px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-legal .lg-row:last-child { border-bottom: none; }
.aic-legal .lg-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-legal .lg-dim { display: flex; align-items: center; gap: 16px; }
.aic-legal .lg-dim .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-hair-strong); flex: none; }
.aic-legal .lg-row[data-focus="1"] .lg-dim .dot { background: var(--aic-accent); }
.aic-legal .lg-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
.aic-legal .lg-share { display: flex; align-items: center; gap: 18px; }
.aic-legal .lg-share-track { flex: 1; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; min-width: 80px; }
.aic-legal .lg-share-fill { height: 100%; border-radius: 999px;
  background: color-mix(in srgb, var(--aic-accent) 46%, white);
  transition: width .55s cubic-bezier(.3,.7,.4,1), background .3s; }
.aic-legal .lg-row[data-focus="1"] .lg-share-fill { background: var(--aic-accent); }
.aic-legal .lg-share-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; min-width: 78px; text-align: right; }
.aic-legal .lg-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 24px; color: var(--aic-ink-dim); }

/* process-flow ribbon */
.aic-legal .lg-flow { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px; }
.aic-legal .lg-flow-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-legal .lg-flow-row { display: flex; align-items: stretch; }
.aic-legal .lg-node { flex: 1 1 0; display: flex; align-items: center; gap: 16px; }
.aic-legal .lg-node-box { flex: 1; display: flex; align-items: center; gap: 14px; padding: 18px 22px;
  border-radius: 14px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-legal .lg-node-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-accent-deep);
  width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; flex: none;
  background: color-mix(in srgb, var(--aic-accent) 18%, transparent); }
.aic-legal .lg-node-x { font-family: var(--aic-font-text); font-weight: 700; font-size: 24px; color: var(--aic-ink); white-space: nowrap; }
.aic-legal .lg-arrow { flex: none; width: 36px; display: grid; place-items: center; color: var(--aic-hair-strong); }
.aic-legal .lg-arrow svg { width: 22px; height: 22px; }

.aic-legal .lg-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-legal .lg-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-legal .lg-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-legal .lg-deco { width: 300px; height: 30px; }
`,Yd=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t}));function Ic(t){let a={...Fc,...t},e={...Lc,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-legal",Ud);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(r=>r.share),1),p=Math.max(3,Math.min(e.flow.length,a.flowStepCount)),d=e.flow.slice(0,p),n=["minmax(280px, 1.1fr)"];a.showShare&&n.push("minmax(300px, 1.2fr)"),n.push("1.5fr");let o=n.join(" ");return ee("div",{className:"aic-legal",style:m,"data-flow":a.showFlow?"1":"0",children:[a.showDecorations&&ea("div",{className:"lg-glow"}),ee("div",{className:"lg-head",children:[ee("div",{children:[ea("p",{className:"lg-eyebrow",children:e.eyebrow}),ea("h2",{className:"lg-title",children:e.title})]}),ea("div",{className:"lg-sub",children:e.titleTail})]}),ee("div",{className:"lg-meta",children:[ee("div",{className:"lg-meta-l",children:[ee("div",{className:"lg-marker",children:[ea("b",{children:e.marker}),ea("span",{className:"lg-season",children:e.segment})]}),ea("p",{className:"lg-lead",children:e.lead}),ea("div",{className:"lg-statline",children:e.statLine})]}),ee("div",{className:"lg-anchor",children:[ea("div",{className:"lg-anchor-v",children:e.anchorValue}),ea("div",{className:"lg-anchor-l",children:e.anchorLabel})]})]}),ee("div",{className:"lg-table",children:[ee("div",{className:"lg-thead",style:{gridTemplateColumns:o},children:[ea("div",{className:"lg-th",children:e.colHeads.dim}),a.showShare&&ea("div",{className:"lg-th",children:e.colHeads.share}),ea("div",{className:"lg-th",children:e.colHeads.note})]}),ea("div",{className:"lg-tbody",children:s.map((r,g)=>ee("div",{className:"lg-row","data-focus":a.focusEnabled&&g===l?"1":"0",style:{gridTemplateColumns:o},children:[ee("div",{className:"lg-dim",children:[ea("span",{className:"dot"}),ea("b",{children:r.dim})]}),a.showShare&&ee("div",{className:"lg-share",children:[ea("div",{className:"lg-share-track",children:ea("div",{className:"lg-share-fill",style:{width:M(r.share,f)*100+"%"}})}),ee("div",{className:"lg-share-v",children:[r.share,"%"]})]}),ea("div",{className:"lg-note",children:r.note})]},r.dim))})]}),a.showFlow&&ee("div",{className:"lg-flow",children:[ea("p",{className:"lg-flow-t",children:e.flowTitle}),ea("div",{className:"lg-flow-row",children:d.map((r,g)=>ee("div",{className:"lg-node",style:{flexGrow:g===d.length-1?0:1},children:[ee("div",{className:"lg-node-box",children:[ea("span",{className:"lg-node-n",children:g+1}),ea("span",{className:"lg-node-x",children:r})]}),g<d.length-1&&ea("span",{className:"lg-arrow",children:ea("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:ea("path",{d:"M4 12h14M13 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]},r))})]}),ee("div",{className:"lg-foot",children:[ee("div",{className:"lg-closing",children:[ea("b",{}),e.closing]}),a.showDecorations&&ea("div",{className:"lg-deco",children:ea(k,{data:Yd,gap:4})})]})]})}var Gi={};S(Gi,{controls:()=>_d,default:()=>jc,defaultProps:()=>Bc});import"react";import{jsx as J,jsxs as Le}from"react/jsx-runtime";var Dc={eyebrow:"Healthcare AI",segment:"醫療 AI 賽道",title:"慢變數高壁壘",titleTail:"醫療 AI 賽道",lead:"醫療 AI 集中在影像\u3001藥物發現和臨床文書自動化\uFF1B驗證週期長\uFF0C但進入流程後的壁壘更強\u3002",statLine:"融資額 34 億美元 \xB7 8 筆事件",closing:"慢場景不代表低價值\u3002",badge:"醫療 AI",panelTitle:"三大方向 \xB7 融資分佈 / 億美元",branches:[{name:"影像診斷",value:11,note:"放射影像識別與分診"},{name:"藥物發現",value:14,note:"靶點發現與分子生成"},{name:"臨床文書",value:9,note:"病歷與文書自動化"}]},Rc={portrait:3/4,landscape:4/3,square:1,auto:null},Bc={...Dc,images:[],imageCount:1,imageRatio:"landscape",branchCount:3,focusEnabled:!0,focusIndex:1,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},_d=[{key:"eyebrow",label:"眉標",type:"text",default:"Healthcare AI"},{key:"segment",label:"segment",type:"text",default:"醫療 AI 賽道"},{key:"title",label:"標題",type:"text",default:"慢變數高壁壘"},{key:"titleTail",label:"副標題",type:"text",default:"醫療 AI 賽道"},{key:"lead",label:"導言",type:"text",default:"醫療 AI 集中在影像\u3001藥物發現和臨床文書自動化\uFF1B驗證週期長\uFF0C但進入流程後的壁壘更強\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 34 億美元 \xB7 8 筆事件"},{key:"closing",label:"結語",type:"text",default:"慢場景不代表低價值\u3002"},{key:"badge",label:"badge",type:"text",default:"醫療 AI"},{key:"panelTitle",label:"panelTitle",type:"text",default:"三大方向 \xB7 融資分佈 / 億美元"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"landscape",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"branchCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"融資分佈分支數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個分支作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:1,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的分支\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"分支柱頂部融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮分支與柱形\u3002"}],Xd=`
.aic-health { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-health, .aic-health * { box-sizing: border-box; }
.aic-health .hl-glow { position: absolute; right: -4%; top: -8%; width: 48%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-health .hl-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-health .hl-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-health .hl-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-health .hl-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* content + hero column (left) */
.aic-health .hl-side { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 720px;
  display: flex; flex-direction: column; }
.aic-health .hl-marker { display: flex; align-items: center; gap: 16px; }
.aic-health .hl-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-health .hl-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-health .hl-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 14px; text-wrap: pretty; }
.aic-health .hl-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-health .hl-hero { margin-top: 26px; flex: 1; display: flex; gap: 18px; min-height: 0; }
.aic-health .hl-cell { position: relative; overflow: hidden; border-radius: 24px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-health .hl-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-health .hl-cell.fixed .hl-frame { height: 100%; }
.aic-health .hl-cell.fixed .hl-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-health .hl-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-health .hl-cell.auto .hl-frame { height: auto; }
.aic-health .hl-cell.auto .hl-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-health .hl-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-health .hl-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-health .hl-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-health .hl-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

/* branch breakdown column chart (right) */
.aic-health .hl-panel { position: absolute; left: 876px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-health .hl-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-health .hl-bars { flex: 1; display: grid; gap: 26px; align-items: stretch; }
.aic-health .hl-col { display: flex; flex-direction: column; min-height: 0; }
.aic-health .hl-col-zone { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; min-height: 0; }
.aic-health .hl-col-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 38px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 12px; transition: color .3s; }
.aic-health .hl-col-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-health .hl-col[data-focus="1"] .hl-col-val { color: var(--aic-accent-deep); }
.aic-health .hl-col-fill { border-radius: 16px 16px 6px 6px;
  background: color-mix(in srgb, var(--aic-accent) 44%, white);
  transition: height .6s cubic-bezier(.3,.7,.4,1), background .3s; min-height: 16px; }
.aic-health .hl-col[data-focus="1"] .hl-col-fill {
  background: linear-gradient(180deg, var(--aic-accent-bright), var(--aic-accent) 70%); }
.aic-health .hl-col-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 27px; color: var(--aic-ink);
  margin-top: 18px; }
.aic-health .hl-col-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; color: var(--aic-muted);
  margin-top: 6px; line-height: 1.35; }

.aic-health .hl-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-health .hl-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-health .hl-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-health .hl-deco { width: 300px; height: 30px; }
`,Gd=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Qd({i:t}){let a="hlph-"+t;return Le("div",{className:"hl-ph",children:[Le("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[J("defs",{children:Le("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[J("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),J("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),J("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),J("span",{className:"hl-ph-cap",children:`image_slot_${t+1}`})]})}function jc(t){let a={...Bc,...t},e={...Dc,...Object.fromEntries(Object.entries(a).filter(([,g])=>g!==void 0))};y(),h("aic-health",Xd);let m=w(a.accentColor),i=Math.max(2,Math.min(3,a.branchCount)),s=e.branches.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(g=>g.value),1),p=Math.max(0,Math.min(2,a.imageCount)),d=Rc.hasOwnProperty(a.imageRatio)?a.imageRatio:"landscape",n=Rc[d],o=n==null,r=o?4/3:n;return Le("div",{className:"aic-health",style:m,children:[a.showDecorations&&J("div",{className:"hl-glow"}),Le("div",{className:"hl-head",children:[Le("div",{children:[J("p",{className:"hl-eyebrow",children:e.eyebrow}),J("h2",{className:"hl-title",children:e.title})]}),J("div",{className:"hl-sub",children:e.titleTail})]}),Le("div",{className:"hl-side",children:[Le("div",{className:"hl-marker",children:[J("b",{}),J("span",{children:e.segment})]}),J("p",{className:"hl-lead",children:e.lead}),J("div",{className:"hl-statline",children:e.statLine}),J("div",{className:"hl-hero",children:p===0?J("div",{className:"hl-cell fixed",children:J("div",{className:"hl-frame cap",style:{"--ar":String(r)},children:J("div",{className:"hl-deco-fill",children:J(A,{})})})}):Array.from({length:p}).map((g,u)=>Le("div",{className:"hl-cell "+(o?"auto":"fixed"),children:[a.showDecorations&&u===0&&J("span",{className:"hl-badge",children:e.badge}),J("div",{className:"hl-frame"+(o?"":" cap"),style:o?null:{"--ar":String(n)},children:a.renderSlot?a.renderSlot(u,{ratio:d,ratioAR:n}):J(Qd,{i:u})})]},u))})]}),Le("div",{className:"hl-panel",children:[J("p",{className:"hl-panel-t",children:e.panelTitle}),J("div",{className:"hl-bars",style:{gridTemplateColumns:`repeat(${i}, 1fr)`},children:s.map((g,u)=>Le("div",{className:"hl-col","data-focus":a.focusEnabled&&u===l?"1":"0",children:[Le("div",{className:"hl-col-zone",children:[a.showValues&&Le("div",{className:"hl-col-val",children:[g.value,J("u",{children:"億"})]}),J("div",{className:"hl-col-fill",style:{height:M(g.value,f)*72+"%"}})]}),J("div",{className:"hl-col-name",children:g.name}),J("div",{className:"hl-col-note",children:g.note})]},g.name))})]}),Le("div",{className:"hl-foot",children:[Le("div",{className:"hl-closing",children:[J("b",{}),e.closing]}),a.showDecorations&&J("div",{className:"hl-deco",children:J(k,{data:Gd,gap:4})})]})]})}var Qi={};S(Qi,{controls:()=>Kd,default:()=>Vc,defaultProps:()=>Hc});import"react";import{jsx as V,jsxs as be}from"react/jsx-runtime";var Oc={eyebrow:"Finance AI",segment:"金融 AI 賽道",title:"投研\u3001風控與合規",titleTail:"金融 AI 賽道",lead:"金融 AI 聚焦投研\u3001風控\u3001合規和客戶服務\uFF1B金融行業付費能力強\uFF0C但監管和準確率門檻更高\u3002",statLine:"融資額 22 億美元 \xB7 7 筆事件",closing:"高價值行業需要更強可信度\u3002",badge:"金融 AI",panelTitle:"場景佔比",segments:[{label:"投研",value:31,note:"研報與因子挖掘"},{label:"合規",value:28,note:"政策對照與留痕"},{label:"風控",value:24,note:"反欺詐與信用評估"},{label:"客戶服務",value:17,note:"智慧投顧與問答"}]},Pc={portrait:3/4,landscape:4/3,square:1,auto:null},Dt=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 62%, white)","color-mix(in srgb, var(--aic-accent) 40%, white)","var(--aic-hair-strong)"],Hc={...Oc,images:[],imageCount:1,imageRatio:"portrait",chartType:"donut",segmentCount:4,focusEnabled:!0,focusIndex:0,showLegend:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Kd=[{key:"eyebrow",label:"眉標",type:"text",default:"Finance AI"},{key:"segment",label:"segment",type:"text",default:"金融 AI 賽道"},{key:"title",label:"標題",type:"text",default:"投研\u3001風控與合規"},{key:"titleTail",label:"副標題",type:"text",default:"金融 AI 賽道"},{key:"lead",label:"導言",type:"text",default:"金融 AI 聚焦投研\u3001風控\u3001合規和客戶服務\uFF1B金融行業付費能力強\uFF0C但監管和準確率門檻更高\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 22 億美元 \xB7 7 筆事件"},{key:"closing",label:"結語",type:"text",default:"高價值行業需要更強可信度\u3002"},{key:"badge",label:"badge",type:"text",default:"金融 AI"},{key:"panelTitle",label:"panelTitle",type:"text",default:"場景佔比"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"donut",options:[{value:"donut",label:"環形圖"},{value:"bars",label:"佔比條"}],description:"場景佔比圖表樣式\uFF1A環形圖 / 佔比條\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"場景佔比分段數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個場景作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的場景\u3002",showWhen:t=>t.focusEnabled},{key:"showLegend",label:"圖例",type:"toggle",default:!0,description:"環形圖右側圖例列表的顯隱\u3002",showWhen:t=>t.chartType==="donut"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001圖表與高亮場景\u3002"}],Jd=`
.aic-fin { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-fin, .aic-fin * { box-sizing: border-box; }
.aic-fin .fn-glow { position: absolute; left: 20%; top: -8%; width: 46%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-fin .fn-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-fin .fn-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-fin .fn-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-fin .fn-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* scenario chart (left) */
.aic-fin .fn-chartwrap { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 880px;
  display: flex; flex-direction: column; }
.aic-fin .fn-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 8px; }
.aic-fin .fn-chart { flex: 1; display: flex; align-items: center; gap: 56px; min-height: 0; }
.aic-fin .fn-donut { flex: none; position: relative; }
.aic-fin .fn-legend { flex: 1; display: flex; flex-direction: column; gap: 22px; }
.aic-fin .fn-leg { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px;
  padding-bottom: 18px; border-bottom: 1.5px solid var(--aic-hair); transition: opacity .3s; }
.aic-fin .fn-leg:last-child { border-bottom: none; }
.aic-fin .fn-leg i { width: 18px; height: 18px; border-radius: 5px; flex: none; }
.aic-fin .fn-leg-lbl { display: flex; flex-direction: column; gap: 2px; }
.aic-fin .fn-leg-lbl b { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); }
.aic-fin .fn-leg-lbl span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); }
.aic-fin .fn-leg-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-fin .fn-leg[data-focus="1"] .fn-leg-v { color: var(--aic-accent-deep); }

/* bars mode */
.aic-fin .fn-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 30px; padding-right: 20px; }

/* content + hero column (right) */
.aic-fin .fn-side { position: absolute; left: 1052px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-fin .fn-marker { display: flex; align-items: center; gap: 16px; }
.aic-fin .fn-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-fin .fn-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-fin .fn-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 12px; text-wrap: pretty; }
.aic-fin .fn-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-fin .fn-hero { margin-top: 24px; flex: 1; display: flex; gap: 16px; min-height: 0; }
.aic-fin .fn-cell { position: relative; overflow: hidden; border-radius: 24px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-fin .fn-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-fin .fn-cell.fixed .fn-frame { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-fin .fn-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-fin .fn-cell.auto .fn-frame { height: auto; }
.aic-fin .fn-cell.auto .fn-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-fin .fn-badge { position: absolute; top: 16px; left: 16px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-fin .fn-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-fin .fn-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-fin .fn-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-fin .fn-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-fin .fn-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-fin .fn-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-fin .fn-deco { width: 300px; height: 30px; }
`,Zd=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function af({i:t}){let a="fnph-"+t;return be("div",{className:"fn-ph",children:[be("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[V("defs",{children:be("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[V("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),V("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),V("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),V("span",{className:"fn-ph-cap",children:`image_slot_${t+1}`})]})}function Vc(t){let a={...Hc,...t},e={...Oc,...Object.fromEntries(Object.entries(a).filter(([,v])=>v!==void 0))};y(),h("aic-fin",Jd);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(...s.map(v=>v.value)),p=s.map((v,z)=>({value:v.value,color:Dt[z%Dt.length],label:v.label})),d=s[l],n=Math.max(0,Math.min(2,a.imageCount)),o=Pc.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",r=Pc[o],g=r==null,u=g?3/4:r;return be("div",{className:"aic-fin",style:m,children:[a.showDecorations&&V("div",{className:"fn-glow"}),be("div",{className:"fn-head",children:[be("div",{children:[V("p",{className:"fn-eyebrow",children:e.eyebrow}),V("h2",{className:"fn-title",children:e.title})]}),V("div",{className:"fn-sub",children:e.titleTail})]}),be("div",{className:"fn-chartwrap",children:[V("p",{className:"fn-panel-t",children:e.panelTitle}),a.chartType==="donut"?be("div",{className:"fn-chart",children:[V("div",{className:"fn-donut",children:V(et,{segments:p,size:392,thickness:62,focusIndex:a.focusEnabled?l:-1,centerTop:a.focusEnabled?(d?.value??0)+"%":i,centerBottom:a.focusEnabled?d?.label??"":"核心場景"})}),a.showLegend&&V("div",{className:"fn-legend",children:s.map((v,z)=>be("div",{className:"fn-leg","data-focus":a.focusEnabled&&z===l?"1":"0",style:{opacity:a.focusEnabled&&z!==l?.55:1},children:[V("i",{style:{background:Dt[z%Dt.length]}}),be("div",{className:"fn-leg-lbl",children:[V("b",{children:v.label}),V("span",{children:v.note})]}),be("div",{className:"fn-leg-v",children:[v.value,"%"]})]},v.label))})]}):V("div",{className:"fn-bars",children:s.map((v,z)=>V(he,{label:v.label,display:v.value+"%",value:v.value/f*100,color:Dt[z%Dt.length],focus:a.focusEnabled&&z===l,dim:a.focusEnabled&&z!==l},v.label))})]}),be("div",{className:"fn-side",children:[be("div",{className:"fn-marker",children:[V("b",{}),V("span",{children:e.segment})]}),V("p",{className:"fn-lead",children:e.lead}),V("div",{className:"fn-statline",children:e.statLine}),V("div",{className:"fn-hero",children:n===0?V("div",{className:"fn-cell fixed",children:V("div",{className:"fn-frame",style:{"--ar":String(u)},children:V("div",{className:"fn-deco-fill",children:V(A,{})})})}):Array.from({length:n}).map((v,z)=>be("div",{className:"fn-cell "+(g?"auto":"fixed"),children:[a.showDecorations&&z===0&&V("span",{className:"fn-badge",children:e.badge}),V("div",{className:"fn-frame",style:g?null:{"--ar":String(r)},children:a.renderSlot?a.renderSlot(z,{ratio:o,ratioAR:r}):V(af,{i:z})})]},z))})]}),be("div",{className:"fn-foot",children:[be("div",{className:"fn-closing",children:[V("b",{}),e.closing]}),a.showDecorations&&V("div",{className:"fn-deco",children:V(k,{data:Zd,gap:4})})]})]})}var Ki={};S(Ki,{controls:()=>ef,default:()=>Uc,defaultProps:()=>$c});import Wc from"react";import{jsx as ta,jsxs as fe}from"react/jsx-runtime";var qc={eyebrow:"GPU Cloud",segment:"GPU 雲與算力租賃",title:"算力供給稀缺",titleTail:"GPU 雲與算力租賃",lead:"GPU 雲公司受益於訓練和推理雙重需求\uFF1B壁壘來自供給鎖定\u3001客戶繫結和資本開支效率\u3002",closing:"算力是 AI 時代最直接的硬資源\u3002",chartTitle:"算力叢集 \xB7 資源利用",splitTitle:"資源構成 / 佔比",clusterLegend:"單元 = 算力節點 \xB7 填充 = 利用率",clusterScaleLabel:"低 \u2192 滿載",splitShareLabel:"SHARE",metrics:[{lbl:"融資額",val:"64",unit:"億美元"},{lbl:"事件數",val:"9",unit:"筆"},{lbl:"平均單筆",val:"7.1",unit:"億美元"},{lbl:"H100/H200 佔比",val:"58",unit:"%"}],split:[{label:"H100 / H200",value:58,note:"新一代訓練算力"},{label:"A100 及以下",value:30,note:"存量推理算力"},{label:"彈性 / 其他",value:12,note:"按需與異構資源"}]},$c={...qc,chartType:"cluster",gridDensity:12,metricCount:4,focusEnabled:!0,focusIndex:0,showSplit:!0,showDecorations:!0,accentColor:c.accent},ef=[{key:"eyebrow",label:"眉標",type:"text",default:"GPU Cloud"},{key:"segment",label:"segment",type:"text",default:"GPU 雲與算力租賃"},{key:"title",label:"標題",type:"text",default:"算力供給稀缺"},{key:"titleTail",label:"副標題",type:"text",default:"GPU 雲與算力租賃"},{key:"lead",label:"導言",type:"text",default:"GPU 雲公司受益於訓練和推理雙重需求\uFF1B壁壘來自供給鎖定\u3001客戶繫結和資本開支效率\u3002"},{key:"closing",label:"結語",type:"text",default:"算力是 AI 時代最直接的硬資源\u3002"},{key:"chartTitle",label:"chartTitle",type:"text",default:"算力叢集 \xB7 資源利用"},{key:"splitTitle",label:"splitTitle",type:"text",default:"資源構成 / 佔比"},{key:"chartType",label:"圖表型別",type:"radio",default:"cluster",options:[{value:"cluster",label:"叢集網格"},{value:"bars",label:"佔比條"}],description:"主圖表樣式\uFF1A算力叢集熱力網格 / 資源佔比條\u3002"},{key:"gridDensity",label:"圖表密度",type:"slider",default:12,min:8,max:16,step:1,description:"叢集網格的列密度\uFF088\u201316\uFF09\uFF1B行數自動推導\u3002",showWhen:t=>t.chartType==="cluster"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"左側指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showSplit",label:"佔比圖",type:"toggle",default:!0,description:"資源構成佔比\uFF08網格上方條帶 / 佔比條\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001叢集高負載單元與高亮卡\u3002"}],tf=`
.aic-cmp { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cmp, .aic-cmp * { box-sizing: border-box; }
.aic-cmp .cm-glow { position: absolute; right: -4%; top: -10%; width: 54%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-cmp .cm-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cmp .cm-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cmp .cm-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-cmp .cm-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left rail */
.aic-cmp .cm-rail { position: absolute; left: var(--pad); top: 312px; bottom: 150px; width: 700px;
  display: flex; flex-direction: column; }
.aic-cmp .cm-marker { display: flex; align-items: center; gap: 16px; }
.aic-cmp .cm-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-cmp .cm-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-cmp .cm-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 0; text-wrap: pretty; }
.aic-cmp .cm-cards { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.aic-cmp .cm-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 20px;
  background: var(--aic-card); padding: 24px 26px 22px; overflow: hidden; transition: border-color .3s, background .3s; }
.aic-cmp .cm-card[data-focus="1"] { border-color: transparent;
  background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 18%, var(--aic-card)), var(--aic-card) 78%); }
.aic-cmp .cm-card[data-focus="1"]::after { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
  background: var(--aic-accent); }
.aic-cmp .cm-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted); }
.aic-cmp .cm-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 52px; line-height: 1;
  color: var(--aic-ink); margin-top: 12px; font-variant-numeric: tabular-nums; }
.aic-cmp .cm-card[data-focus="1"] .cm-card-val { color: var(--aic-accent-deep); }
.aic-cmp .cm-card-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-cmp .cm-closing { margin-top: auto; display: flex; align-items: center; gap: 16px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cmp .cm-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* right chart panel */
.aic-cmp .cm-panel { position: absolute; left: 832px; right: var(--pad); top: 312px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-cmp .cm-panel-t { display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 20px; white-space: nowrap; }
.aic-cmp .cm-panel-t > span { white-space: nowrap; }
.aic-cmp .cm-panel-t em { font-style: normal; font-size: 16px; letter-spacing: .08em; color: var(--aic-faint); }

/* resource split strip (cluster mode top) */
.aic-cmp .cm-strip { display: flex; height: 56px; border-radius: 12px; overflow: hidden;
  border: 1.5px solid var(--aic-hair); margin-bottom: 22px; }
.aic-cmp .cm-strip-seg { position: relative; display: flex; flex-direction: column; justify-content: center;
  padding: 0 18px; min-width: 0; transition: flex-grow .5s; }
.aic-cmp .cm-strip-seg b { font-family: var(--aic-font-display); font-weight: 700; font-size: 24px;
  line-height: 1; font-variant-numeric: tabular-nums; }
.aic-cmp .cm-strip-seg span { font-family: var(--aic-font-text); font-weight: 600; font-size: 15px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 3px; }

/* cluster heat grid */
.aic-cmp .cm-cluster { flex: 1; display: grid; gap: 7px; min-height: 0; align-content: stretch; }
.aic-cmp .cm-node { border-radius: 5px; position: relative; background: var(--aic-hair);
  transition: background .4s, transform .3s; }
.aic-cmp .cm-node.on { background: color-mix(in srgb, var(--aic-accent) calc(var(--u) * 1%), var(--aic-accent-soft)); }
.aic-cmp .cm-node.hot { background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 72%);
  box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--aic-accent) 50%, white); }
.aic-cmp .cm-cluster-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 18px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; color: var(--aic-muted); }
.aic-cmp .cm-scale { display: flex; align-items: center; gap: 10px; }
.aic-cmp .cm-scale i { width: 26px; height: 12px; border-radius: 3px; }

/* bars mode */
.aic-cmp .cm-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 38px; }

.aic-cmp .cm-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: flex-end; }
.aic-cmp .cm-deco { width: 300px; height: 30px; }
`,of=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t})),li=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 46%, white)","var(--aic-hair-strong)"];function nf(t,a){let e=Math.sin(t*12.9898+4.13)*43758.5453,m=e-Math.floor(e);return Math.round((.22+m*.78)*100)}function Uc(t){let a={...$c,...t},e={...qc,...Object.fromEntries(Object.entries(a).filter(([,o])=>o!==void 0))};y(),h("aic-cmp",tf);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(8,Math.min(16,a.gridDensity)),p=6,d=Array.from({length:f*p},(o,r)=>{let g=nf(r,f*p);return{u:g,on:g>=36,hot:g>=82}}),n=Math.max(...e.split.map(o=>o.value));return fe("div",{className:"aic-cmp",style:m,children:[a.showDecorations&&ta("div",{className:"cm-glow"}),fe("div",{className:"cm-head",children:[fe("div",{children:[ta("p",{className:"cm-eyebrow",children:e.eyebrow}),ta("h2",{className:"cm-title",children:e.title})]}),ta("div",{className:"cm-sub",children:e.titleTail})]}),fe("div",{className:"cm-rail",children:[fe("div",{className:"cm-marker",children:[ta("b",{}),ta("span",{children:e.segment})]}),ta("p",{className:"cm-lead",children:e.lead}),ta("div",{className:"cm-cards",children:s.map((o,r)=>fe("div",{className:"cm-card","data-focus":a.focusEnabled&&r===l?"1":"0",children:[ta("div",{className:"cm-card-lbl",children:o.lbl}),fe("div",{className:"cm-card-val",children:[o.val,ta("u",{children:o.unit})]})]},o.lbl))}),fe("div",{className:"cm-closing",children:[ta("b",{}),e.closing]})]}),ta("div",{className:"cm-panel",children:a.chartType==="cluster"?fe(Wc.Fragment,{children:[fe("p",{className:"cm-panel-t",children:[ta("span",{children:e.chartTitle}),fe("em",{children:["NODES ",f*p]})]}),a.showSplit&&ta("div",{className:"cm-strip",children:e.split.map((o,r)=>fe("div",{className:"cm-strip-seg",style:{flex:o.value,background:li[r%li.length],color:"var(--aic-ink)"},children:[fe("b",{children:[o.value,"%"]}),ta("span",{children:o.label})]},o.label))}),ta("div",{className:"cm-cluster",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:d.map((o,r)=>ta("div",{className:"cm-node"+(o.hot?" hot":o.on?" on":""),style:{"--u":o.u}},r))}),fe("div",{className:"cm-cluster-foot",children:[ta("span",{children:e.clusterLegend}),fe("div",{className:"cm-scale",children:[ta("i",{style:{background:"var(--aic-accent-soft)"}}),ta("i",{style:{background:"color-mix(in srgb, var(--aic-accent) 55%, white)"}}),ta("i",{style:{background:"var(--aic-accent)"}}),ta("span",{style:{marginLeft:4},children:e.clusterScaleLabel})]})]})]}):fe(Wc.Fragment,{children:[fe("p",{className:"cm-panel-t",children:[ta("span",{children:e.splitTitle}),ta("em",{children:e.splitShareLabel})]}),ta("div",{className:"cm-bars",children:e.split.map((o,r)=>ta(he,{label:o.label,display:o.value+"%",value:o.value/n*100,color:li[r%li.length],focus:r===0},o.label))})]})}),ta("div",{className:"cm-foot",children:a.showDecorations&&ta("div",{className:"cm-deco",children:ta(k,{data:of,gap:4})})})]})}var Ji={};S(Ji,{controls:()=>cf,default:()=>Gc,defaultProps:()=>Xc});import"react";import{jsx as sa,jsxs as ye}from"react/jsx-runtime";var _c={eyebrow:"AI Chips",marker:"硬體",segment:"AI 晶片賽道",title:"訓練與推理硬體",titleTail:"AI 晶片賽道",lead:"AI 晶片融資集中在訓練加速器\u3001推理晶片和邊緣 AI\uFF1B晶片週期長\uFF0C但一旦形成供應鏈優勢\uFF0C壁壘極高\u3002",statLine:"主力三大方向合計 \xB7 訓練 46 \xB7 推理 32 \xB7 邊緣 19\uFF08億美元\uFF09",anchorValue:"97",anchorUnit:"億美元",anchorLabel:"全年融資額 \xB7 13 筆事件",closing:"硬體方向看長期確定性\u3002",colHeads:{dim:"晶片方向",val:"融資額",share:"資金拆分",note:"判斷"},rows:[{dim:"訓練加速器",tier:"訓練",val:"46",note:"大模型訓練算力\uFF0C供給緊俏"},{dim:"推理晶片",tier:"推理",val:"32",note:"推理成本與能效最佳化"},{dim:"邊緣 AI 晶片",tier:"邊緣",val:"19",note:"端側與裝置端智慧"},{dim:"互聯與先進封裝",tier:"孵化",val:"8",note:"Chiplet 與高頻寬互聯"},{dim:"光子 / 前沿架構",tier:"孵化",val:"5",note:"存算一體與光計算探索"}]},Yc={\u8BAD\u7EC3:"var(--aic-accent)",\u63A8\u7406:"color-mix(in srgb, var(--aic-accent) 52%, white)",\u8FB9\u7F18:"color-mix(in srgb, var(--aic-accent) 30%, white)",\u5B75\u5316:"var(--aic-hair-strong)"},Xc={..._c,rowCount:4,showShare:!0,showJudgment:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},cf=[{key:"eyebrow",label:"眉標",type:"text",default:"AI Chips"},{key:"marker",label:"marker",type:"text",default:"硬體"},{key:"segment",label:"segment",type:"text",default:"AI 晶片賽道"},{key:"title",label:"標題",type:"text",default:"訓練與推理硬體"},{key:"titleTail",label:"副標題",type:"text",default:"AI 晶片賽道"},{key:"lead",label:"導言",type:"text",default:"AI 晶片融資集中在訓練加速器\u3001推理晶片和邊緣 AI\uFF1B晶片週期長\uFF0C但一旦形成供應鏈優勢\uFF0C壁壘極高\u3002"},{key:"statLine",label:"statLine",type:"text",default:"主力三大方向合計 \xB7 訓練 46 \xB7 推理 32 \xB7 邊緣 19\uFF08億美元\uFF09"},{key:"anchorValue",label:"anchorValue",type:"text",default:"97"},{key:"anchorUnit",label:"錨點單位",type:"text",default:"億美元"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"全年融資額 \xB7 13 筆事件"},{key:"closing",label:"結語",type:"text",default:"硬體方向看長期確定性\u3002"},{key:"rowCount",label:"行數量",type:"slider",default:4,min:3,max:5,step:1,description:"表格展示的行數量\uFF083\u20135\uFF09\u3002"},{key:"showShare",label:"佔比列",type:"toggle",default:!0,description:"資金拆分列\uFF08迷你佔比條\uFF09的顯隱\u3002"},{key:"showJudgment",label:"判斷列",type:"toggle",default:!0,description:"判斷列的顯隱\uFF1B關閉後表格更緊湊\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於層級標記\u3001高亮行與總額數字\u3002"}],lf=`
.aic-chip { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-chip, .aic-chip * { box-sizing: border-box; }
.aic-chip .cp-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-chip .cp-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-chip .cp-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-chip .cp-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-chip .cp-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 total anchor (right) */
.aic-chip .cp-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-chip .cp-meta-l { max-width: 1140px; }
.aic-chip .cp-marker { display: flex; align-items: center; gap: 18px; }
.aic-chip .cp-stack { display: flex; flex-direction: column; gap: 4px; }
.aic-chip .cp-stack i { display: block; height: 9px; border-radius: 2px; }
.aic-chip .cp-stack i:nth-child(1) { width: 56px; background: var(--aic-accent); }
.aic-chip .cp-stack i:nth-child(2) { width: 42px; background: color-mix(in srgb, var(--aic-accent) 52%, white); }
.aic-chip .cp-stack i:nth-child(3) { width: 30px; background: color-mix(in srgb, var(--aic-accent) 30%, white); }
.aic-chip .cp-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-chip .cp-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 26px 0 14px; text-wrap: pretty; }
.aic-chip .cp-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-chip .cp-anchor { flex: none; text-align: right; }
.aic-chip .cp-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 116px; line-height: .82;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom;
  display: inline-flex; align-items: baseline; }
.aic-chip .cp-anchor-v u { text-decoration: none; font-family: var(--aic-font-text); font-size: 30px; font-weight: 600;
  color: var(--aic-ink-dim); margin-left: 12px; transform: skewX(9deg); }
.aic-chip .cp-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 14px; }

/* table */
.aic-chip .cp-table { position: absolute; left: var(--pad); right: var(--pad); top: 524px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-chip .cp-thead { display: grid; align-items: center; gap: 0 32px; padding: 0 28px 16px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-chip .cp-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-chip .cp-th.r { text-align: right; }
.aic-chip .cp-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-chip .cp-row { flex: 1; display: grid; align-items: center; gap: 0 32px; padding: 0 28px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-chip .cp-row:last-child { border-bottom: none; }
.aic-chip .cp-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-chip .cp-dim { display: flex; align-items: center; gap: 16px; min-width: 0; }
.aic-chip .cp-tier { font-family: var(--aic-font-display); font-weight: 700; font-size: 15px; letter-spacing: .08em;
  color: var(--aic-ink); padding: 5px 12px; border-radius: 999px; flex: none; }
.aic-chip .cp-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink); white-space: nowrap; }
.aic-chip .cp-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 38px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-chip .cp-row[data-focus="1"] .cp-val { color: var(--aic-accent-deep); }
.aic-chip .cp-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-chip .cp-share { display: flex; align-items: center; }
.aic-chip .cp-share-track { flex: 1; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-chip .cp-share-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-chip .cp-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 23px; color: var(--aic-ink-dim); }

.aic-chip .cp-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-chip .cp-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-chip .cp-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-chip .cp-deco { width: 300px; height: 30px; }
`,rf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Gc(t){let a={...Xc,...t},e={..._c,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-chip",lf);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(...s.map(n=>Number(n.val))),p=["minmax(300px, 1.5fr)","180px"];a.showShare&&p.push("220px"),a.showJudgment&&p.push("1.3fr");let d=p.join(" ");return ye("div",{className:"aic-chip",style:m,children:[a.showDecorations&&sa("div",{className:"cp-glow"}),ye("div",{className:"cp-head",children:[ye("div",{children:[sa("p",{className:"cp-eyebrow",children:e.eyebrow}),sa("h2",{className:"cp-title",children:e.title})]}),sa("div",{className:"cp-sub",children:e.titleTail})]}),ye("div",{className:"cp-meta",children:[ye("div",{className:"cp-meta-l",children:[ye("div",{className:"cp-marker",children:[ye("span",{className:"cp-stack",children:[sa("i",{}),sa("i",{}),sa("i",{})]}),sa("span",{className:"cp-season",children:e.segment})]}),sa("p",{className:"cp-lead",children:e.lead}),sa("div",{className:"cp-statline",children:e.statLine})]}),ye("div",{className:"cp-anchor",children:[ye("div",{className:"cp-anchor-v",children:[e.anchorValue,sa("u",{children:e.anchorUnit})]}),sa("div",{className:"cp-anchor-l",children:e.anchorLabel})]})]}),ye("div",{className:"cp-table",children:[ye("div",{className:"cp-thead",style:{gridTemplateColumns:d},children:[sa("div",{className:"cp-th",children:e.colHeads.dim}),sa("div",{className:"cp-th r",children:e.colHeads.val}),a.showShare&&sa("div",{className:"cp-th",children:e.colHeads.share}),a.showJudgment&&sa("div",{className:"cp-th",children:e.colHeads.note})]}),sa("div",{className:"cp-tbody",children:s.map((n,o)=>ye("div",{className:"cp-row","data-focus":a.focusEnabled&&o===l?"1":"0",style:{gridTemplateColumns:d},children:[ye("div",{className:"cp-dim",children:[sa("span",{className:"cp-tier",style:{background:Yc[n.tier]||"var(--aic-hair-strong)"},children:n.tier}),sa("b",{children:n.dim})]}),ye("div",{className:"cp-val",children:[n.val,sa("u",{children:"億"})]}),a.showShare&&sa("div",{className:"cp-share",children:sa("div",{className:"cp-share-track",children:sa("div",{className:"cp-share-fill",style:{width:Number(n.val)/f*100+"%",background:a.focusEnabled&&o===l?"var(--aic-accent)":Yc[n.tier]||"var(--aic-hair-strong)"}})})}),a.showJudgment&&sa("div",{className:"cp-note",children:n.note})]},n.dim))})]}),ye("div",{className:"cp-foot",children:[ye("div",{className:"cp-closing",children:[sa("b",{}),e.closing]}),a.showDecorations&&sa("div",{className:"cp-deco",children:sa(k,{data:rf,gap:4})})]})]})}var Zi={};S(Zi,{controls:()=>sf,default:()=>Zc,defaultProps:()=>Jc});import"react";import{jsx as $,jsxs as Fe}from"react/jsx-runtime";var Kc={eyebrow:"Embodied AI",segment:"機器人與具身智慧",title:"從軟體走向物理世界",titleTail:"機器人與具身智慧",lead:"具身智慧成為 AI 從軟體能力延伸到物理場景的重要方向\uFF1B它更像硬科技投資\uFF0C驗證週期更長\u3002",statLine:"融資額 41 億美元 \xB7 7 筆事件",closing:"長週期賽道需要看供應鏈和量產能力\u3002",badge:"具身智慧",panelTitle:"應用分佈 \xB7 融資 / 億美元",segments:[{name:"人形機器人",value:21,note:"通用操作與服務場景"},{name:"工業自動化",value:11,note:"柔性產線與質檢"},{name:"倉儲機器人",value:9,note:"揀選與物流搬運"}]},Qc={portrait:3/4,landscape:4/3,square:1,auto:null},Jc={...Kc,images:[],imageCount:1,imageRatio:"landscape",segmentCount:3,focusEnabled:!0,focusIndex:0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},sf=[{key:"eyebrow",label:"眉標",type:"text",default:"Embodied AI"},{key:"segment",label:"segment",type:"text",default:"機器人與具身智慧"},{key:"title",label:"標題",type:"text",default:"從軟體走向物理世界"},{key:"titleTail",label:"副標題",type:"text",default:"機器人與具身智慧"},{key:"lead",label:"導言",type:"text",default:"具身智慧成為 AI 從軟體能力延伸到物理場景的重要方向\uFF1B它更像硬科技投資\uFF0C驗證週期更長\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 41 億美元 \xB7 7 筆事件"},{key:"closing",label:"結語",type:"text",default:"長週期賽道需要看供應鏈和量產能力\u3002"},{key:"badge",label:"badge",type:"text",default:"具身智慧"},{key:"panelTitle",label:"panelTitle",type:"text",default:"應用分佈 \xB7 融資 / 億美元"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"landscape",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"應用方向分佈數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個應用方向作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的應用方向\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"應用柱頂部融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮應用與柱形\u3002"}],pf=`
.aic-rob { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-rob, .aic-rob * { box-sizing: border-box; }
.aic-rob .rb-glow { position: absolute; left: 26%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-rob .rb-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-rob .rb-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-rob .rb-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-rob .rb-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: editorial (top) + grounded distribution (bottom) */
.aic-rob .rb-left { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 940px;
  display: flex; flex-direction: column; }
.aic-rob .rb-marker { display: flex; align-items: center; gap: 16px; }
.aic-rob .rb-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-rob .rb-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-rob .rb-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 12px; text-wrap: pretty; max-width: 880px; }
.aic-rob .rb-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-rob .rb-dist { margin-top: auto; }
.aic-rob .rb-dist-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 20px; }
.aic-rob .rb-cols { display: grid; gap: 30px; align-items: end; height: 300px; }
.aic-rob .rb-col { display: flex; flex-direction: column; height: 100%; justify-content: flex-end; }
.aic-rob .rb-col-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; margin-bottom: 12px; transition: color .3s; }
.aic-rob .rb-col[data-focus="1"] .rb-col-val { color: var(--aic-accent-deep); }
.aic-rob .rb-col-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-rob .rb-col-fill { border-radius: 16px 16px 0 0;
  background: color-mix(in srgb, var(--aic-accent) 40%, white);
  transition: height .6s cubic-bezier(.3,.7,.4,1), background .3s; min-height: 14px; }
.aic-rob .rb-col[data-focus="1"] .rb-col-fill {
  background: linear-gradient(180deg, var(--aic-accent-bright), var(--aic-accent) 72%); }
.aic-rob .rb-ground { height: 4px; border-radius: 3px; background: var(--aic-ink); margin-top: 0; }
.aic-rob .rb-names { display: grid; gap: 30px; margin-top: 16px; }
.aic-rob .rb-name b { font-family: var(--aic-font-display); font-weight: 700; font-size: 25px; color: var(--aic-ink);
  display: block; }
.aic-rob .rb-name span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted);
  display: block; margin-top: 4px; line-height: 1.3; }

/* right: dominant hero */
.aic-rob .rb-hero { position: absolute; left: 1080px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; gap: 16px; }
.aic-rob .rb-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-rob .rb-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-rob .rb-cell.fixed .rb-frame { height: 100%; }
.aic-rob .rb-cell.fixed .rb-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-rob .rb-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-rob .rb-cell.auto .rb-frame { height: auto; }
.aic-rob .rb-cell.auto .rb-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-rob .rb-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-rob .rb-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-rob .rb-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-rob .rb-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-rob .rb-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-rob .rb-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-rob .rb-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-rob .rb-deco { width: 300px; height: 30px; }
`,df=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function ff({i:t}){let a="rbph-"+t;return Fe("div",{className:"rb-ph",children:[Fe("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[$("defs",{children:Fe("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[$("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),$("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),$("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),$("span",{className:"rb-ph-cap",children:`image_slot_${t+1}`})]})}function Zc(t){let a={...Jc,...t},e={...Kc,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-rob",pf);let m=w(a.accentColor),i=Math.max(2,Math.min(3,Ta(a.segmentCount,3))),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(u=>u.value),1),p=Math.max(0,Math.min(2,a.imageCount)),d=Qc.hasOwnProperty(a.imageRatio)?a.imageRatio:"landscape",n=Qc[d],o=n==null,r=o?4/3:n,g=`repeat(${i}, 1fr)`;return Fe("div",{className:"aic-rob",style:m,children:[a.showDecorations&&$("div",{className:"rb-glow"}),Fe("div",{className:"rb-head",children:[Fe("div",{children:[$("p",{className:"rb-eyebrow",children:e.eyebrow}),$("h2",{className:"rb-title",children:e.title})]}),$("div",{className:"rb-sub",children:e.titleTail})]}),Fe("div",{className:"rb-left",children:[Fe("div",{className:"rb-marker",children:[$("b",{}),$("span",{children:e.segment})]}),$("p",{className:"rb-lead",children:e.lead}),$("div",{className:"rb-statline",children:e.statLine}),Fe("div",{className:"rb-dist",children:[$("p",{className:"rb-dist-t",children:e.panelTitle}),$("div",{className:"rb-cols",style:{gridTemplateColumns:g},children:s.map((u,v)=>Fe("div",{className:"rb-col","data-focus":a.focusEnabled&&v===l?"1":"0",children:[a.showValues&&Fe("div",{className:"rb-col-val",children:[u.value,$("u",{children:"億"})]}),$("div",{className:"rb-col-fill",style:{height:M(u.value,f)*78+"%"}})]},u.name))}),$("div",{className:"rb-ground"}),$("div",{className:"rb-names",style:{gridTemplateColumns:g},children:s.map(u=>Fe("div",{className:"rb-name",children:[$("b",{children:u.name}),$("span",{children:u.note})]},u.name))})]})]}),$("div",{className:"rb-hero",children:p===0?$("div",{className:"rb-cell fixed",children:$("div",{className:"rb-frame cap",style:{"--ar":String(r)},children:$("div",{className:"rb-deco-fill",children:$(A,{})})})}):Array.from({length:p}).map((u,v)=>Fe("div",{className:"rb-cell "+(o?"auto":"fixed"),children:[a.showDecorations&&v===0&&$("span",{className:"rb-badge",children:e.badge}),$("div",{className:"rb-frame"+(o?"":" cap"),style:o?null:{"--ar":String(n)},children:a.renderSlot?a.renderSlot(v,{ratio:d,ratioAR:n}):$(ff,{i:v})})]},v))}),Fe("div",{className:"rb-foot",children:[Fe("div",{className:"rb-closing",children:[$("b",{}),e.closing]}),a.showDecorations&&$("div",{className:"rb-deco",children:$(k,{data:df,gap:4})})]})]})}var ao={};S(ao,{controls:()=>gf,default:()=>il,defaultProps:()=>tl});import mf from"react";import{jsx as B,jsxs as Ua}from"react/jsx-runtime";var el={eyebrow:"Autonomous AI",segment:"自動駕駛與車載 AI",title:"車載模型升級",titleTail:"自動駕駛與車載 AI",lead:"車載 AI 從感知模組轉向端到端模型和座艙智慧\uFF1B資本更關注資料閉環和量產路徑\u3002",statLine:"融資額 29 億美元 \xB7 6 筆事件",closing:"自動駕駛回暖\uFF0C但更看重工程兌現\u3002",badge:"車載 AI",panelTitle:"場景拆分 / 億美元",archTitle:"車載 AI 架構",arch:["環境感知","決策規劃","執行控制","座艙互動"],segments:[{label:"端到端駕駛",value:13,note:"感知到控制一體化"},{label:"模擬平台",value:9,note:"資料閉環與虛擬測試"},{label:"車載助手",value:7,note:"座艙互動與語音"}]},al={portrait:3/4,landscape:4/3,square:1,auto:null},Bt=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 52%, white)","var(--aic-hair-strong)"],tl={...el,images:[],imageCount:1,imageRatio:"portrait",chartType:"bars",segmentCount:3,focusEnabled:!0,focusIndex:0,showArch:!0,showLegend:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},gf=[{key:"eyebrow",label:"眉標",type:"text",default:"Autonomous AI"},{key:"segment",label:"segment",type:"text",default:"自動駕駛與車載 AI"},{key:"title",label:"標題",type:"text",default:"車載模型升級"},{key:"titleTail",label:"副標題",type:"text",default:"自動駕駛與車載 AI"},{key:"lead",label:"導言",type:"text",default:"車載 AI 從感知模組轉向端到端模型和座艙智慧\uFF1B資本更關注資料閉環和量產路徑\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 29 億美元 \xB7 6 筆事件"},{key:"closing",label:"結語",type:"text",default:"自動駕駛回暖\uFF0C但更看重工程兌現\u3002"},{key:"badge",label:"badge",type:"text",default:"車載 AI"},{key:"panelTitle",label:"panelTitle",type:"text",default:"場景拆分 / 億美元"},{key:"archTitle",label:"archTitle",type:"text",default:"車載 AI 架構"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"bars",options:[{value:"bars",label:"佔比條"},{value:"donut",label:"環形圖"}],description:"場景拆分圖表樣式\uFF1A佔比條 / 環形圖\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"場景拆分分段數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個場景作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的場景\u3002",showWhen:t=>t.focusEnabled},{key:"showArch",label:"裝飾圖示",type:"toggle",default:!0,description:"車載 AI 架構層級條\uFF08感知 \u2192 決策 \u2192 控制 \u2192 座艙\uFF09的顯隱\u3002"},{key:"showLegend",label:"圖例",type:"toggle",default:!0,description:"環形圖右側圖例列表的顯隱\u3002",showWhen:t=>t.chartType==="donut"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001架構條\u3001圖表與高亮場景\u3002"}],uf=`
.aic-auto { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-auto, .aic-auto * { box-sizing: border-box; }
.aic-auto .au-glow { position: absolute; left: 18%; top: -8%; width: 46%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-auto .au-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-auto .au-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-auto .au-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-auto .au-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: arch strip + scenario chart */
.aic-auto .au-main { position: absolute; left: var(--pad); top: 300px; bottom: 150px; width: 900px;
  display: flex; flex-direction: column; }
.aic-auto .au-arch-t, .aic-auto .au-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px;
  letter-spacing: .12em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-auto .au-arch { display: flex; align-items: stretch; gap: 0; margin-bottom: 34px; }
.aic-auto .au-arch-node { flex: 1; position: relative; display: flex; align-items: center; justify-content: center;
  height: 64px; background: var(--aic-card); border: 1.5px solid var(--aic-hair); font-family: var(--aic-font-display);
  font-weight: 700; font-size: 22px; color: var(--aic-ink); }
.aic-auto .au-arch-node:first-child { border-radius: 14px 0 0 14px; }
.aic-auto .au-arch-node:last-child { border-radius: 0 14px 14px 0; }
.aic-auto .au-arch-node:not(:last-child) { border-right: none; }
.aic-auto .au-arch-node:first-child { background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent) 22%, var(--aic-card)), var(--aic-card) 80%); }
.aic-auto .au-arch-sep { width: 0; align-self: center; border-top: 10px solid transparent; border-bottom: 10px solid transparent;
  border-left: 12px solid var(--aic-accent); position: relative; z-index: 2; margin: 0 -6px; flex: none; }
.aic-auto .au-panel { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.aic-auto .au-chart { flex: 1; display: flex; align-items: center; gap: 52px; min-height: 0; }
.aic-auto .au-donut { flex: none; position: relative; }
.aic-auto .au-legend { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.aic-auto .au-leg { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px;
  padding-bottom: 16px; border-bottom: 1.5px solid var(--aic-hair); transition: opacity .3s; }
.aic-auto .au-leg:last-child { border-bottom: none; }
.aic-auto .au-leg i { width: 18px; height: 18px; border-radius: 5px; flex: none; }
.aic-auto .au-leg-lbl { display: flex; flex-direction: column; gap: 2px; }
.aic-auto .au-leg-lbl b { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); }
.aic-auto .au-leg-lbl span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); }
.aic-auto .au-leg-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-auto .au-leg-v u { text-decoration: none; font-size: 17px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-auto .au-leg[data-focus="1"] .au-leg-v { color: var(--aic-accent-deep); }
.aic-auto .au-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 30px; padding-right: 16px; }

/* right: editorial + portrait hero */
.aic-auto .au-side { position: absolute; left: 1052px; right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-auto .au-marker { display: flex; align-items: center; gap: 16px; }
.aic-auto .au-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-auto .au-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-auto .au-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 12px; text-wrap: pretty; }
.aic-auto .au-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-auto .au-hero { margin-top: 24px; flex: 1; display: flex; gap: 16px; min-height: 0; }
.aic-auto .au-cell { position: relative; overflow: hidden; border-radius: 24px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-auto .au-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-auto .au-cell.fixed .au-frame { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-auto .au-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-auto .au-cell.auto .au-frame { height: auto; }
.aic-auto .au-cell.auto .au-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-auto .au-badge { position: absolute; top: 16px; left: 16px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-auto .au-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-auto .au-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-auto .au-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-auto .au-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-auto .au-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-auto .au-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-auto .au-deco { width: 300px; height: 30px; }
`,xf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function vf({i:t}){let a="auph-"+t;return Ua("div",{className:"au-ph",children:[Ua("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[B("defs",{children:Ua("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[B("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),B("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),B("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),B("span",{className:"au-ph-cap",children:`image_slot_${t+1}`})]})}function il(t){let a={...tl,...t},e={...el,...Object.fromEntries(Object.entries(a).filter(([,z])=>z!==void 0))};y(),h("aic-auto",uf);let m=w(a.accentColor),i=Math.max(2,Math.min(3,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(z=>z.value),1),p=s.reduce((z,N)=>z+N.value,0),d=s.map((z,N)=>({value:z.value,color:Bt[N%Bt.length],label:z.label})),n=s[l],o=Math.max(0,Math.min(2,a.imageCount)),r=al.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",g=al[r],u=g==null,v=u?3/4:g;return Ua("div",{className:"aic-auto",style:m,children:[a.showDecorations&&B("div",{className:"au-glow"}),Ua("div",{className:"au-head",children:[Ua("div",{children:[B("p",{className:"au-eyebrow",children:e.eyebrow}),B("h2",{className:"au-title",children:e.title})]}),B("div",{className:"au-sub",children:e.titleTail})]}),Ua("div",{className:"au-main",children:[a.showArch&&Ua("div",{children:[B("p",{className:"au-arch-t",children:e.archTitle}),B("div",{className:"au-arch",children:e.arch.map((z,N)=>Ua(mf.Fragment,{children:[B("div",{className:"au-arch-node",children:z}),N<e.arch.length-1&&B("span",{className:"au-arch-sep"})]},z))})]}),Ua("div",{className:"au-panel",children:[B("p",{className:"au-panel-t",children:e.panelTitle}),a.chartType==="donut"?Ua("div",{className:"au-chart",children:[B("div",{className:"au-donut",children:B(et,{segments:d,size:356,thickness:58,focusIndex:a.focusEnabled?l:-1,centerTop:a.focusEnabled?n.value:p,centerBottom:a.focusEnabled?n.label:"億美元"})}),a.showLegend&&B("div",{className:"au-legend",children:s.map((z,N)=>Ua("div",{className:"au-leg","data-focus":a.focusEnabled&&N===l?"1":"0",style:{opacity:a.focusEnabled&&N!==l?.55:1},children:[B("i",{style:{background:Bt[N%Bt.length]}}),Ua("div",{className:"au-leg-lbl",children:[B("b",{children:z.label}),B("span",{children:z.note})]}),Ua("div",{className:"au-leg-v",children:[z.value,B("u",{children:"億"})]})]},z.label))})]}):B("div",{className:"au-bars",children:s.map((z,N)=>B(he,{label:z.label,display:z.value+" 億",value:M(z.value,f)*100,color:Bt[N%Bt.length],focus:a.focusEnabled&&N===l,dim:a.focusEnabled&&N!==l},z.label))})]})]}),Ua("div",{className:"au-side",children:[Ua("div",{className:"au-marker",children:[B("b",{}),B("span",{children:e.segment})]}),B("p",{className:"au-lead",children:e.lead}),B("div",{className:"au-statline",children:e.statLine}),B("div",{className:"au-hero",children:o===0?B("div",{className:"au-cell fixed",children:B("div",{className:"au-frame",style:{"--ar":String(v)},children:B("div",{className:"au-deco-fill",children:B(A,{})})})}):Array.from({length:o}).map((z,N)=>Ua("div",{className:"au-cell "+(u?"auto":"fixed"),children:[a.showDecorations&&N===0&&B("span",{className:"au-badge",children:e.badge}),B("div",{className:"au-frame",style:u?null:{"--ar":String(g)},children:a.renderSlot?a.renderSlot(N,{ratio:r,ratioAR:g}):B(vf,{i:N})})]},N))})]}),Ua("div",{className:"au-foot",children:[Ua("div",{className:"au-closing",children:[B("b",{}),e.closing]}),a.showDecorations&&B("div",{className:"au-deco",children:B(k,{data:xf,gap:4})})]})]})}var eo={};S(eo,{controls:()=>hf,default:()=>sl,defaultProps:()=>rl});import ol from"react";import{jsx as ca,jsxs as te}from"react/jsx-runtime";var ll={eyebrow:"AI Safety",segment:"AI 安全賽道",title:"評測\u3001紅隊與合規",titleTail:"AI 安全賽道",lead:"AI 安全覆蓋模型評測\u3001紅隊測試\u3001內容安全和合規監測\uFF1B監管收緊會把它從可選預算變成剛性預算\u3002",closing:"安全能力會成為企業採購門檻\u3002",chartTitle:"安全防線 \xB7 資金 / 億美元",splitTitle:"防線資金佔比",stripTitle:"風險攔截示意",stripLeftLabel:"風險輸入",stripRightLabel:"已攔截 / 合規",splitShareLabel:"SHARE",metrics:[{lbl:"融資額",val:"16",unit:"億美元"},{lbl:"事件數",val:"8",unit:"筆"},{lbl:"模型評測",val:"6",unit:"億美元"},{lbl:"合規監測",val:"5",unit:"億美元"}],layers:[{tier:"L1",name:"模型評測",value:6,note:"能力與風險基準測試"},{tier:"L2",name:"內容安全",value:5,note:"有害內容識別與過濾"},{tier:"L3",name:"合規監測",value:5,note:"審計鏈路與監管對齊"},{tier:"L4",name:"紅隊測試",value:4,note:"對抗攻擊與越獄探測"}]},nl=["linear-gradient(150deg, var(--aic-accent-bright), var(--aic-accent) 74%)","color-mix(in srgb, var(--aic-accent) 56%, white)","color-mix(in srgb, var(--aic-accent) 38%, white)","color-mix(in srgb, var(--aic-accent) 24%, white)"],rl={...ll,chartType:"layers",layerCount:3,metricCount:4,focusEnabled:!0,focusIndex:0,showStrip:!0,showDecorations:!0,accentColor:c.accent},hf=[{key:"eyebrow",label:"眉標",type:"text",default:"AI Safety"},{key:"segment",label:"segment",type:"text",default:"AI 安全賽道"},{key:"title",label:"標題",type:"text",default:"評測\u3001紅隊與合規"},{key:"titleTail",label:"副標題",type:"text",default:"AI 安全賽道"},{key:"lead",label:"導言",type:"text",default:"AI 安全覆蓋模型評測\u3001紅隊測試\u3001內容安全和合規監測\uFF1B監管收緊會把它從可選預算變成剛性預算\u3002"},{key:"closing",label:"結語",type:"text",default:"安全能力會成為企業採購門檻\u3002"},{key:"chartTitle",label:"chartTitle",type:"text",default:"安全防線 \xB7 資金 / 億美元"},{key:"splitTitle",label:"splitTitle",type:"text",default:"防線資金佔比"},{key:"stripTitle",label:"stripTitle",type:"text",default:"風險攔截示意"},{key:"chartType",label:"圖表型別",type:"radio",default:"layers",options:[{value:"layers",label:"防線分層"},{value:"bars",label:"佔比條"}],description:"主圖表樣式\uFF1A分層防線堆疊 / 資金佔比條\u3002"},{key:"layerCount",label:"分項數量",type:"slider",default:3,min:2,max:4,step:1,description:"安全防線分層 / 佔比條的數量\uFF082\u20134\uFF09\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"左側指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showStrip",label:"示意條帶",type:"toggle",default:!0,description:"防線上方風險攔截示意條帶的顯隱\u3002",showWhen:t=>t.chartType==="layers"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001防線層級與高亮卡\u3002"}],bf=`
.aic-saf { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-saf, .aic-saf * { box-sizing: border-box; }
.aic-saf .sf-glow { position: absolute; right: -4%; top: -10%; width: 54%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-saf .sf-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-saf .sf-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-saf .sf-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-saf .sf-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left rail */
.aic-saf .sf-rail { position: absolute; left: var(--pad); top: 312px; bottom: 150px; width: 700px;
  display: flex; flex-direction: column; }
.aic-saf .sf-marker { display: flex; align-items: center; gap: 16px; }
.aic-saf .sf-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-saf .sf-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-saf .sf-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 0; text-wrap: pretty; }
.aic-saf .sf-cards { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.aic-saf .sf-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 20px;
  background: var(--aic-card); padding: 24px 26px 22px; overflow: hidden; transition: border-color .3s, background .3s; }
.aic-saf .sf-card[data-focus="1"] { border-color: transparent;
  background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 18%, var(--aic-card)), var(--aic-card) 78%); }
.aic-saf .sf-card[data-focus="1"]::after { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
  background: var(--aic-accent); }
.aic-saf .sf-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted); }
.aic-saf .sf-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 52px; line-height: 1;
  color: var(--aic-ink); margin-top: 12px; font-variant-numeric: tabular-nums; }
.aic-saf .sf-card[data-focus="1"] .sf-card-val { color: var(--aic-accent-deep); }
.aic-saf .sf-card-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-saf .sf-closing { margin-top: auto; display: flex; align-items: center; gap: 16px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-saf .sf-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* right chart panel */
.aic-saf .sf-panel { position: absolute; left: 832px; right: var(--pad); top: 312px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-saf .sf-panel-t { display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 20px; white-space: nowrap; }
.aic-saf .sf-panel-t > span { white-space: nowrap; }
.aic-saf .sf-panel-t em { font-style: normal; font-size: 16px; letter-spacing: .08em; color: var(--aic-faint); }

/* threat-intercept strip */
.aic-saf .sf-strip { position: relative; height: 52px; border-radius: 12px; overflow: hidden;
  border: 1.5px solid var(--aic-hair); margin-bottom: 22px; }
.aic-saf .sf-strip .aic-viz-heat { padding: 8px 10px; }
.aic-saf .sf-strip-cap { position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px; font-family: var(--aic-font-display); font-weight: 700; font-size: 14px; letter-spacing: .12em;
  text-transform: uppercase; pointer-events: none; }
.aic-saf .sf-strip-cap u { text-decoration: none; color: var(--aic-neg);
  background: var(--aic-paper); padding: 5px 12px; border-radius: 999px; box-shadow: 0 0 0 1.5px var(--aic-hair); }
.aic-saf .sf-strip-cap s { text-decoration: none; color: var(--aic-accent-deep);
  background: var(--aic-paper); padding: 5px 12px; border-radius: 999px; box-shadow: 0 0 0 1.5px var(--aic-hair); }

/* defense layer stack */
.aic-saf .sf-stack { flex: 1; display: flex; flex-direction: column; gap: 14px; min-height: 0; }
.aic-saf .sf-layer { flex: 1; position: relative; display: grid; align-items: center;
  grid-template-columns: 70px 1fr auto; gap: 0 22px; padding: 0 26px; border-radius: 18px;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair); overflow: hidden;
  transition: transform .3s, box-shadow .3s; }
.aic-saf .sf-layer::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: var(--cov, 60%);
  background: var(--tone); opacity: .5; transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-saf .sf-layer > * { position: relative; }
.aic-saf .sf-layer[data-focus="1"] { transform: translateX(8px); box-shadow: 0 18px 40px -22px color-mix(in srgb, var(--aic-accent) 70%, transparent);
  border-color: transparent; }
.aic-saf .sf-layer[data-focus="1"]::before { opacity: 1; }
.aic-saf .sf-tier { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; letter-spacing: .06em;
  color: var(--aic-ink); opacity: .55; }
.aic-saf .sf-layer[data-focus="1"] .sf-tier { opacity: .85; }
.aic-saf .sf-lname { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); }
.aic-saf .sf-lnote { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-ink-dim); margin-top: 4px; }
.aic-saf .sf-lval { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 40px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; line-height: 1; }
.aic-saf .sf-lval u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

/* bars mode */
.aic-saf .sf-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 38px; }

.aic-saf .sf-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: flex-end; }
.aic-saf .sf-deco { width: 300px; height: 30px; }
`,yf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t})),wf=["neg","neg","warn","neg","warn","neg","warn","warn","neg","warn","warn","accent","warn","accent","warn","accent","accent","warn","accent","accent","pos","accent","accent","pos","accent","pos","accent","pos","pos","accent","pos","pos"].map(t=>({tone:t})),cl=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 52%, white)","color-mix(in srgb, var(--aic-accent) 34%, white)","var(--aic-hair-strong)"];function sl(t){let a={...rl,...t},e={...ll,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-saf",bf);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(2,Math.min(4,a.layerCount)),p=e.layers.slice(0,f),d=L(p.map(n=>n.value),1);return te("div",{className:"aic-saf",style:m,children:[a.showDecorations&&ca("div",{className:"sf-glow"}),te("div",{className:"sf-head",children:[te("div",{children:[ca("p",{className:"sf-eyebrow",children:e.eyebrow}),ca("h2",{className:"sf-title",children:e.title})]}),ca("div",{className:"sf-sub",children:e.titleTail})]}),te("div",{className:"sf-rail",children:[te("div",{className:"sf-marker",children:[ca("b",{}),ca("span",{children:e.segment})]}),ca("p",{className:"sf-lead",children:e.lead}),ca("div",{className:"sf-cards",children:s.map((n,o)=>te("div",{className:"sf-card","data-focus":a.focusEnabled&&o===l?"1":"0",children:[ca("div",{className:"sf-card-lbl",children:n.lbl}),te("div",{className:"sf-card-val",children:[n.val,ca("u",{children:n.unit})]})]},n.lbl))}),te("div",{className:"sf-closing",children:[ca("b",{}),e.closing]})]}),ca("div",{className:"sf-panel",children:a.chartType==="layers"?te(ol.Fragment,{children:[te("p",{className:"sf-panel-t",children:[ca("span",{children:e.chartTitle}),te("em",{children:[f," LAYERS"]})]}),a.showStrip&&te("div",{className:"sf-strip",children:[ca(k,{data:wf,gap:4}),te("div",{className:"sf-strip-cap",children:[ca("u",{children:e.stripLeftLabel}),ca("s",{children:e.stripRightLabel})]})]}),ca("div",{className:"sf-stack",children:p.map((n,o)=>te("div",{className:"sf-layer","data-focus":a.focusEnabled&&o===l?"1":"0",style:{"--tone":nl[o%nl.length],"--cov":M(n.value,d)*100+"%"},children:[ca("span",{className:"sf-tier",children:n.tier}),te("div",{children:[ca("div",{className:"sf-lname",children:n.name}),ca("div",{className:"sf-lnote",children:n.note})]}),te("div",{className:"sf-lval",children:[n.value,ca("u",{children:"億"})]})]},n.name))})]}):te(ol.Fragment,{children:[te("p",{className:"sf-panel-t",children:[ca("span",{children:e.splitTitle}),ca("em",{children:e.splitShareLabel})]}),ca("div",{className:"sf-bars",children:p.map((n,o)=>ca(he,{label:n.name,display:n.value+" 億",value:M(n.value,d)*100,color:cl[o%cl.length],focus:a.focusEnabled&&o===l},n.name))})]})}),ca("div",{className:"sf-foot",children:a.showDecorations&&ca("div",{className:"sf-deco",children:ca(k,{data:yf,gap:4})})})]})}var to={};S(to,{controls:()=>kf,default:()=>ml,defaultProps:()=>fl});import"react";import{jsx as U,jsxs as we}from"react/jsx-runtime";var dl={eyebrow:"Generative Content",segment:"內容生成賽道",title:"影象\u3001影片與創意",titleTail:"內容生成賽道",lead:"內容生成繼續保持融資熱度\uFF0C但也面臨版權和留存問題\uFF1B長期價值取決於付費意願與版權處理\u3002",statLine:"融資額 31 億美元 \xB7 11 筆事件",closing:"流量熱度不等於商業壁壘\u3002",badge:"內容生成",panelTitle:"媒介分佈 \xB7 融資 / 億美元",segments:[{name:"影片生成",value:14,note:"文生影片與鏡頭控制"},{name:"廣告創意",value:8,note:"行銷素材批次生成"},{name:"影象生成",value:5,note:"品牌視覺與設計輔助"},{name:"音樂音訊",value:4,note:"配樂與語音合成"}]},pl={portrait:3/4,landscape:4/3,square:1,auto:null},fl={...dl,images:[],imageCount:1,imageRatio:"landscape",segmentCount:3,focusEnabled:!0,focusIndex:0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},kf=[{key:"eyebrow",label:"眉標",type:"text",default:"Generative Content"},{key:"segment",label:"segment",type:"text",default:"內容生成賽道"},{key:"title",label:"標題",type:"text",default:"影象\u3001影片與創意"},{key:"titleTail",label:"副標題",type:"text",default:"內容生成賽道"},{key:"lead",label:"導言",type:"text",default:"內容生成繼續保持融資熱度\uFF0C但也面臨版權和留存問題\uFF1B長期價值取決於付費意願與版權處理\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 31 億美元 \xB7 11 筆事件"},{key:"closing",label:"結語",type:"text",default:"流量熱度不等於商業壁壘\u3002"},{key:"badge",label:"badge",type:"text",default:"內容生成"},{key:"panelTitle",label:"panelTitle",type:"text",default:"媒介分佈 \xB7 融資 / 億美元"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"landscape",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:4,step:1,description:"媒介方向分佈數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個媒介方向作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的媒介方向\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"分佈行末端融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮媒介與分佈條\u3002"}],Nf=`
.aic-cgn { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cgn, .aic-cgn * { box-sizing: border-box; }
.aic-cgn .cg-glow { position: absolute; right: -6%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-cgn .cg-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cgn .cg-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cgn .cg-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-cgn .cg-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: dominant hero */
.aic-cgn .cg-hero { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 744px;
  display: flex; gap: 16px; }
.aic-cgn .cg-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-cgn .cg-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-cgn .cg-cell.fixed .cg-frame { height: 100%; }
.aic-cgn .cg-cell.fixed .cg-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-cgn .cg-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-cgn .cg-cell.auto .cg-frame { height: auto; }
.aic-cgn .cg-cell.auto .cg-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-cgn .cg-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-cgn .cg-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-cgn .cg-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-cgn .cg-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

/* right: editorial + media-share rows */
.aic-cgn .cg-right { position: absolute; left: 888px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-cgn .cg-marker { display: flex; align-items: center; gap: 16px; }
.aic-cgn .cg-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-cgn .cg-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-cgn .cg-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 10px; text-wrap: pretty; }
.aic-cgn .cg-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-cgn .cg-dist { margin-top: auto; }
.aic-cgn .cg-dist-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-cgn .cg-rows { display: flex; flex-direction: column; gap: 22px; }
.aic-cgn .cg-row { display: grid; grid-template-columns: 52px 1fr; align-items: baseline; gap: 6px 18px;
  transition: opacity .3s; }
.aic-cgn .cg-rank { grid-row: span 2; align-self: center; font-family: var(--aic-font-display); font-weight: 700;
  font-size: 28px; color: var(--aic-faint); font-variant-numeric: tabular-nums; }
.aic-cgn .cg-row[data-focus="1"] .cg-rank { color: var(--aic-accent-deep); }
.aic-cgn .cg-row-top { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
.aic-cgn .cg-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); }
.aic-cgn .cg-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 17px; color: var(--aic-muted); margin-left: 14px; }
.aic-cgn .cg-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; white-space: nowrap; }
.aic-cgn .cg-row[data-focus="1"] .cg-val { color: var(--aic-accent-deep); }
.aic-cgn .cg-val u { text-decoration: none; font-size: 17px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-cgn .cg-track { grid-column: 2; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; margin-top: 10px; }
.aic-cgn .cg-fill { height: 100%; border-radius: 999px; background: color-mix(in srgb, var(--aic-accent) 42%, white);
  transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-cgn .cg-row[data-focus="1"] .cg-fill { background: linear-gradient(90deg, var(--aic-accent-bright), var(--aic-accent) 80%); }

.aic-cgn .cg-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-cgn .cg-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cgn .cg-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cgn .cg-deco { width: 300px; height: 30px; }
`,zf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Cf({i:t}){let a="cgph-"+t;return we("div",{className:"cg-ph",children:[we("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[U("defs",{children:we("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[U("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),U("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),U("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),U("span",{className:"cg-ph-cap",children:`image_slot_${t+1}`})]})}function ml(t){let a={...fl,...t},e={...dl,...Object.fromEntries(Object.entries(a).filter(([,g])=>g!==void 0))};y(),h("aic-cgn",Nf);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(g=>g.value),1),p=Math.max(0,Math.min(2,a.imageCount)),d=pl.hasOwnProperty(a.imageRatio)?a.imageRatio:"landscape",n=pl[d],o=n==null,r=o?4/3:n;return we("div",{className:"aic-cgn",style:m,children:[a.showDecorations&&U("div",{className:"cg-glow"}),we("div",{className:"cg-head",children:[we("div",{children:[U("p",{className:"cg-eyebrow",children:e.eyebrow}),U("h2",{className:"cg-title",children:e.title})]}),U("div",{className:"cg-sub",children:e.titleTail})]}),U("div",{className:"cg-hero",children:p===0?U("div",{className:"cg-cell fixed",children:U("div",{className:"cg-frame cap",style:{"--ar":String(r)},children:U("div",{className:"cg-deco-fill",children:U(A,{})})})}):Array.from({length:p}).map((g,u)=>we("div",{className:"cg-cell "+(o?"auto":"fixed"),children:[a.showDecorations&&u===0&&U("span",{className:"cg-badge",children:e.badge}),U("div",{className:"cg-frame"+(o?"":" cap"),style:o?null:{"--ar":String(n)},children:a.renderSlot?a.renderSlot(u,{ratio:d,ratioAR:n}):U(Cf,{i:u})})]},u))}),we("div",{className:"cg-right",children:[we("div",{className:"cg-marker",children:[U("b",{}),U("span",{children:e.segment})]}),U("p",{className:"cg-lead",children:e.lead}),U("div",{className:"cg-statline",children:e.statLine}),we("div",{className:"cg-dist",children:[U("p",{className:"cg-dist-t",children:e.panelTitle}),U("div",{className:"cg-rows",children:s.map((g,u)=>we("div",{className:"cg-row","data-focus":a.focusEnabled&&u===l?"1":"0",children:[U("span",{className:"cg-rank",children:String(u+1).padStart(2,"0")}),we("div",{className:"cg-row-top",children:[we("span",{children:[U("span",{className:"cg-name",children:g.name}),U("span",{className:"cg-note",children:g.note})]}),a.showValues&&we("span",{className:"cg-val",children:[g.value,U("u",{children:"億"})]})]}),U("div",{className:"cg-track",children:U("div",{className:"cg-fill",style:{width:M(g.value,f)*100+"%"}})})]},g.name))})]})]}),we("div",{className:"cg-foot",children:[we("div",{className:"cg-closing",children:[U("b",{}),e.closing]}),a.showDecorations&&U("div",{className:"cg-deco",children:U(k,{data:zf,gap:4})})]})]})}var io={};S(io,{controls:()=>Sf,default:()=>vl,defaultProps:()=>xl});import"react";import{jsx as _,jsxs as We}from"react/jsx-runtime";var ul={eyebrow:"Education AI",segment:"教育 AI 賽道",title:"個性化學習與教師工具",titleTail:"教育 AI 賽道",lead:"教育 AI 從通用答疑轉向個性化輔導和教師工作臺\uFF1B難點不是生成答案\uFF0C而是證明學習效果和付費意願\u3002",statLine:"融資額 14 億美元 \xB7 5 筆事件",closing:"教育 AI 需要用結果證明價值\u3002",badge:"教育 AI",panelTitle:"學習路徑 \xB7 融資 / 億美元",stageWord:"Stage",segments:[{name:"K12 輔導",value:6,note:"個性化習題與答疑"},{name:"企業培訓",value:5,note:"崗位技能與上崗考核"},{name:"教師工具",value:3,note:"備課\u3001批改與學情分析"}]},gl={portrait:3/4,landscape:4/3,square:1,auto:null},xl={...ul,images:[],imageCount:1,imageRatio:"portrait",segmentCount:3,focusEnabled:!0,focusIndex:0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Sf=[{key:"eyebrow",label:"眉標",type:"text",default:"Education AI"},{key:"segment",label:"segment",type:"text",default:"教育 AI 賽道"},{key:"title",label:"標題",type:"text",default:"個性化學習與教師工具"},{key:"titleTail",label:"副標題",type:"text",default:"教育 AI 賽道"},{key:"lead",label:"導言",type:"text",default:"教育 AI 從通用答疑轉向個性化輔導和教師工作臺\uFF1B難點不是生成答案\uFF0C而是證明學習效果和付費意願\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 14 億美元 \xB7 5 筆事件"},{key:"closing",label:"結語",type:"text",default:"教育 AI 需要用結果證明價值\u3002"},{key:"badge",label:"badge",type:"text",default:"教育 AI"},{key:"panelTitle",label:"panelTitle",type:"text",default:"學習路徑 \xB7 融資 / 億美元"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"學習路徑階段數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個學習階段作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的學習階段\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"階段節點內融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮階段與路徑節點\u3002"}],Af=`
.aic-edu { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-edu, .aic-edu * { box-sizing: border-box; }
.aic-edu .ed-glow { position: absolute; left: 26%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-edu .ed-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-edu .ed-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-edu .ed-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 76px; line-height: .96; margin: 0; }
.aic-edu .ed-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: editorial (top) + learning path (bottom) */
.aic-edu .ed-left { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 940px;
  display: flex; flex-direction: column; }
.aic-edu .ed-marker { display: flex; align-items: center; gap: 16px; }
.aic-edu .ed-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-edu .ed-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-edu .ed-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 12px; text-wrap: pretty; max-width: 880px; }
.aic-edu .ed-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-edu .ed-path { margin-top: auto; }
.aic-edu .ed-path-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-edu .ed-track { position: relative; display: flex; align-items: flex-start; justify-content: space-between; }
.aic-edu .ed-track::before { content: ''; position: absolute; left: 6%; right: 6%; top: 80px; height: 0;
  border-top: 3px dashed var(--aic-hair-strong); z-index: 0; }
.aic-edu .ed-node { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center;
  width: 0; flex: 1 1 0; text-align: center; }
.aic-edu .ed-disc { width: var(--d, 130px); height: var(--d, 130px); border-radius: 50%; display: grid;
  place-items: center; background: var(--aic-card); border: 2px solid var(--aic-hair-strong);
  transition: transform .35s, box-shadow .35s, background .35s; }
.aic-edu .ed-node[data-focus="1"] .ed-disc { background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 74%);
  border-color: transparent; box-shadow: 0 22px 46px -22px color-mix(in srgb, var(--aic-accent) 75%, transparent);
  transform: scale(1.06); }
.aic-edu .ed-disc-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 44px; line-height: 1;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-edu .ed-disc-v u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 3px; }
.aic-edu .ed-node[data-focus="1"] .ed-disc-v { color: var(--aic-ink); }
.aic-edu .ed-node[data-focus="1"] .ed-disc-v u { color: color-mix(in srgb, var(--aic-ink) 60%, white); }
.aic-edu .ed-step { font-family: var(--aic-font-display); font-weight: 600; font-size: 15px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-faint); margin-top: 20px; }
.aic-edu .ed-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 27px; color: var(--aic-ink); margin-top: 6px; }
.aic-edu .ed-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted);
  margin-top: 6px; line-height: 1.35; max-width: 240px; }

/* right: dominant hero */
.aic-edu .ed-hero { position: absolute; left: 1080px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; gap: 16px; }
.aic-edu .ed-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-edu .ed-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-edu .ed-cell.fixed .ed-frame { height: 100%; }
.aic-edu .ed-cell.fixed .ed-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-edu .ed-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-edu .ed-cell.auto .ed-frame { height: auto; }
.aic-edu .ed-cell.auto .ed-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-edu .ed-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-edu .ed-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-edu .ed-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-edu .ed-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-edu .ed-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-edu .ed-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-edu .ed-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-edu .ed-deco { width: 300px; height: 30px; }
`,Ef=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Tf({i:t}){let a="edph-"+t;return We("div",{className:"ed-ph",children:[We("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[_("defs",{children:We("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[_("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),_("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),_("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),_("span",{className:"ed-ph-cap",children:`image_slot_${t+1}`})]})}function vl(t){let a={...xl,...t},e={...ul,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-edu",Af);let m=w(a.accentColor),i=Math.max(2,Math.min(3,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(u=>u.value),1),p=u=>110+M(u,f)*50,d=Math.max(0,Math.min(2,a.imageCount)),n=gl.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",o=gl[n],r=o==null,g=r?3/4:o;return We("div",{className:"aic-edu",style:m,children:[a.showDecorations&&_("div",{className:"ed-glow"}),We("div",{className:"ed-head",children:[We("div",{children:[_("p",{className:"ed-eyebrow",children:e.eyebrow}),_("h2",{className:"ed-title",children:e.title})]}),_("div",{className:"ed-sub",children:e.titleTail})]}),We("div",{className:"ed-left",children:[We("div",{className:"ed-marker",children:[_("b",{}),_("span",{children:e.segment})]}),_("p",{className:"ed-lead",children:e.lead}),_("div",{className:"ed-statline",children:e.statLine}),We("div",{className:"ed-path",children:[_("p",{className:"ed-path-t",children:e.panelTitle}),_("div",{className:"ed-track",children:s.map((u,v)=>We("div",{className:"ed-node","data-focus":a.focusEnabled&&v===l?"1":"0",children:[_("div",{className:"ed-disc",style:{"--d":p(u.value)+"px"},children:a.showValues&&We("span",{className:"ed-disc-v",children:[u.value,_("u",{children:"億"})]})}),_("div",{className:"ed-step",children:`${e.stageWord} ${v+1}`}),_("div",{className:"ed-name",children:u.name}),_("div",{className:"ed-note",children:u.note})]},u.name))})]})]}),_("div",{className:"ed-hero",children:d===0?_("div",{className:"ed-cell fixed",children:_("div",{className:"ed-frame cap",style:{"--ar":String(g)},children:_("div",{className:"ed-deco-fill",children:_(A,{})})})}):Array.from({length:d}).map((u,v)=>We("div",{className:"ed-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&_("span",{className:"ed-badge",children:e.badge}),_("div",{className:"ed-frame"+(r?"":" cap"),style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):_(Tf,{i:v})})]},v))}),We("div",{className:"ed-foot",children:[We("div",{className:"ed-closing",children:[_("b",{}),e.closing]}),a.showDecorations&&_("div",{className:"ed-deco",children:_(k,{data:Ef,gap:4})})]})]})}var oo={};S(oo,{controls:()=>Mf,default:()=>wl,defaultProps:()=>yl});import"react";import{jsx as pa,jsxs as ke}from"react/jsx-runtime";var bl={eyebrow:"Customer Support AI",segment:"客服 AI 賽道",title:"可量化降本場景",titleTail:"客服 AI 賽道",lead:"客服 AI 是最容易量化 ROI 的垂直應用之一\uFF1B商業化看降本效果\u3001接入成本和複雜問題升級率\u3002",statLine:"平均替代率 32% \xB7 工單時長下降 41% \xB7 9 筆事件",anchorValue:"27",anchorUnit:"億美元",anchorLabel:"全年融資額 \xB7 9 筆事件",closing:"能量化 ROI 的場景更容易獲得預算\u3002",colHeads:{dim:"降本場景",val:"自動化率",share:"降本貢獻",note:"判斷"},rows:[{dim:"工單自動應答",tier:"替代",val:"48",note:"高頻簡單問題直接閉環"},{dim:"知識庫檢索",tier:"輔助",val:"31",note:"坐席實時調取標準答案"},{dim:"情緒與升級",tier:"輔助",val:"22",note:"識別複雜問題轉人工"},{dim:"多語言支援",tier:"擴充套件",val:"18",note:"跨區域統一服務覆蓋"},{dim:"質檢與培訓",tier:"擴充套件",val:"15",note:"全量對話質檢與復盤"}]},hl={\u66FF\u4EE3:"var(--aic-accent)",\u8F85\u52A9:"color-mix(in srgb, var(--aic-accent) 50%, white)",\u6269\u5C55:"color-mix(in srgb, var(--aic-accent) 30%, white)",\u5B75\u5316:"var(--aic-hair-strong)"},yl={...bl,rowCount:4,showShare:!0,showJudgment:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},Mf=[{key:"eyebrow",label:"眉標",type:"text",default:"Customer Support AI"},{key:"segment",label:"segment",type:"text",default:"客服 AI 賽道"},{key:"title",label:"標題",type:"text",default:"可量化降本場景"},{key:"titleTail",label:"副標題",type:"text",default:"客服 AI 賽道"},{key:"lead",label:"導言",type:"text",default:"客服 AI 是最容易量化 ROI 的垂直應用之一\uFF1B商業化看降本效果\u3001接入成本和複雜問題升級率\u3002"},{key:"statLine",label:"statLine",type:"text",default:"平均替代率 32% \xB7 工單時長下降 41% \xB7 9 筆事件"},{key:"anchorValue",label:"anchorValue",type:"text",default:"27"},{key:"anchorUnit",label:"錨點單位",type:"text",default:"億美元"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"全年融資額 \xB7 9 筆事件"},{key:"closing",label:"結語",type:"text",default:"能量化 ROI 的場景更容易獲得預算\u3002"},{key:"rowCount",label:"行數量",type:"slider",default:4,min:3,max:5,step:1,description:"表格展示的行數量\uFF083\u20135\uFF09\u3002"},{key:"showShare",label:"佔比列",type:"toggle",default:!0,description:"降本貢獻列\uFF08迷你佔比條\uFF09的顯隱\u3002"},{key:"showJudgment",label:"判斷列",type:"toggle",default:!0,description:"判斷列的顯隱\uFF1B關閉後表格更緊湊\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於角色標記\u3001高亮行與總額數字\u3002"}],Lf=`
.aic-sup { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-sup, .aic-sup * { box-sizing: border-box; }
.aic-sup .sp-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-sup .sp-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-sup .sp-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-sup .sp-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-sup .sp-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 total anchor (right) */
.aic-sup .sp-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-sup .sp-meta-l { max-width: 1140px; }
.aic-sup .sp-marker { display: flex; align-items: center; gap: 18px; }
.aic-sup .sp-stack { display: flex; flex-direction: column; gap: 4px; }
.aic-sup .sp-stack i { display: block; height: 9px; border-radius: 2px; }
.aic-sup .sp-stack i:nth-child(1) { width: 56px; background: var(--aic-accent); }
.aic-sup .sp-stack i:nth-child(2) { width: 42px; background: color-mix(in srgb, var(--aic-accent) 50%, white); }
.aic-sup .sp-stack i:nth-child(3) { width: 30px; background: color-mix(in srgb, var(--aic-accent) 30%, white); }
.aic-sup .sp-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-sup .sp-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 26px 0 14px; text-wrap: pretty; }
.aic-sup .sp-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-sup .sp-anchor { flex: none; text-align: right; }
.aic-sup .sp-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 116px; line-height: .82;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom;
  display: inline-flex; align-items: baseline; }
.aic-sup .sp-anchor-v u { text-decoration: none; font-family: var(--aic-font-text); font-size: 30px; font-weight: 600;
  color: var(--aic-ink-dim); margin-left: 12px; transform: skewX(9deg); }
.aic-sup .sp-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 14px; }

/* table */
.aic-sup .sp-table { position: absolute; left: var(--pad); right: var(--pad); top: 524px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-sup .sp-thead { display: grid; align-items: center; gap: 0 32px; padding: 0 28px 16px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-sup .sp-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-sup .sp-th.r { text-align: right; }
.aic-sup .sp-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-sup .sp-row { flex: 1; display: grid; align-items: center; gap: 0 32px; padding: 0 28px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-sup .sp-row:last-child { border-bottom: none; }
.aic-sup .sp-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-sup .sp-dim { display: flex; align-items: center; gap: 16px; min-width: 0; }
.aic-sup .sp-tier { font-family: var(--aic-font-display); font-weight: 700; font-size: 15px; letter-spacing: .08em;
  color: var(--aic-ink); padding: 5px 12px; border-radius: 999px; flex: none; }
.aic-sup .sp-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink); white-space: nowrap; }
.aic-sup .sp-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 38px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-sup .sp-row[data-focus="1"] .sp-val { color: var(--aic-accent-deep); }
.aic-sup .sp-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-sup .sp-share { display: flex; align-items: center; }
.aic-sup .sp-share-track { flex: 1; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-sup .sp-share-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-sup .sp-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 23px; color: var(--aic-ink-dim); }

.aic-sup .sp-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-sup .sp-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-sup .sp-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-sup .sp-deco { width: 300px; height: 30px; }
`,Ff=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function wl(t){let a={...yl,...t},e={...bl,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-sup",Lf);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(...s.map(n=>Number(n.val))),p=["minmax(300px, 1.5fr)","200px"];a.showShare&&p.push("220px"),a.showJudgment&&p.push("1.3fr");let d=p.join(" ");return ke("div",{className:"aic-sup",style:m,children:[a.showDecorations&&pa("div",{className:"sp-glow"}),ke("div",{className:"sp-head",children:[ke("div",{children:[pa("p",{className:"sp-eyebrow",children:e.eyebrow}),pa("h2",{className:"sp-title",children:e.title})]}),pa("div",{className:"sp-sub",children:e.titleTail})]}),ke("div",{className:"sp-meta",children:[ke("div",{className:"sp-meta-l",children:[ke("div",{className:"sp-marker",children:[ke("span",{className:"sp-stack",children:[pa("i",{}),pa("i",{}),pa("i",{})]}),pa("span",{className:"sp-season",children:e.segment})]}),pa("p",{className:"sp-lead",children:e.lead}),pa("div",{className:"sp-statline",children:e.statLine})]}),ke("div",{className:"sp-anchor",children:[ke("div",{className:"sp-anchor-v",children:[e.anchorValue,pa("u",{children:e.anchorUnit})]}),pa("div",{className:"sp-anchor-l",children:e.anchorLabel})]})]}),ke("div",{className:"sp-table",children:[ke("div",{className:"sp-thead",style:{gridTemplateColumns:d},children:[pa("div",{className:"sp-th",children:e.colHeads.dim}),pa("div",{className:"sp-th r",children:e.colHeads.val}),a.showShare&&pa("div",{className:"sp-th",children:e.colHeads.share}),a.showJudgment&&pa("div",{className:"sp-th",children:e.colHeads.note})]}),pa("div",{className:"sp-tbody",children:s.map((n,o)=>ke("div",{className:"sp-row","data-focus":a.focusEnabled&&o===l?"1":"0",style:{gridTemplateColumns:d},children:[ke("div",{className:"sp-dim",children:[pa("span",{className:"sp-tier",style:{background:hl[n.tier]||"var(--aic-hair-strong)"},children:n.tier}),pa("b",{children:n.dim})]}),ke("div",{className:"sp-val",children:[n.val,pa("u",{children:"%"})]}),a.showShare&&pa("div",{className:"sp-share",children:pa("div",{className:"sp-share-track",children:pa("div",{className:"sp-share-fill",style:{width:Number(n.val)/f*100+"%",background:a.focusEnabled&&o===l?"var(--aic-accent)":hl[n.tier]||"var(--aic-hair-strong)"}})})}),a.showJudgment&&pa("div",{className:"sp-note",children:n.note})]},n.dim))})]}),ke("div",{className:"sp-foot",children:[ke("div",{className:"sp-closing",children:[pa("b",{}),e.closing]}),a.showDecorations&&pa("div",{className:"sp-deco",children:pa(k,{data:Ff,gap:4})})]})]})}var no={};S(no,{controls:()=>If,default:()=>Cl,defaultProps:()=>zl});import"react";import{jsx as X,jsxs as Ie}from"react/jsx-runtime";var Nl={eyebrow:"Sales & Marketing AI",segment:"銷售與行銷 AI",title:"增長效率工具",titleTail:"銷售與行銷 AI",lead:"銷售與行銷 AI 集中線上索評分\u3001自動外呼\u3001郵件和廣告創意\uFF1B短期轉化快\uFF0C但同質化競爭也更明顯\u3002",statLine:"融資額 24 億美元 \xB7 10 筆事件",closing:"行銷 AI 要用轉化率證明自己\u3002",badge:"銷售行銷",panelTitle:"增長漏斗 \xB7 融資 / 億美元",segments:[{name:"廣告創意",value:8,note:"獲客 \xB7 行銷素材批次生成"},{name:"線索評分",value:7,note:"篩選 \xB7 意向預測與排序"},{name:"自動外呼",value:6,note:"轉化 \xB7 郵件與語音觸達"}]},kl={portrait:3/4,landscape:4/3,square:1,auto:null},zl={...Nl,images:[],imageCount:1,imageRatio:"landscape",segmentCount:3,focusEnabled:!0,focusIndex:0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},If=[{key:"eyebrow",label:"眉標",type:"text",default:"Sales & Marketing AI"},{key:"segment",label:"segment",type:"text",default:"銷售與行銷 AI"},{key:"title",label:"標題",type:"text",default:"增長效率工具"},{key:"titleTail",label:"副標題",type:"text",default:"銷售與行銷 AI"},{key:"lead",label:"導言",type:"text",default:"銷售與行銷 AI 集中線上索評分\u3001自動外呼\u3001郵件和廣告創意\uFF1B短期轉化快\uFF0C但同質化競爭也更明顯\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 24 億美元 \xB7 10 筆事件"},{key:"closing",label:"結語",type:"text",default:"行銷 AI 要用轉化率證明自己\u3002"},{key:"badge",label:"badge",type:"text",default:"銷售行銷"},{key:"panelTitle",label:"panelTitle",type:"text",default:"增長漏斗 \xB7 融資 / 億美元"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"landscape",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"漏斗階段數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個漏斗階段作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的漏斗階段\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"漏斗階段內融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮階段與漏斗\u3002"}],Rf=`
.aic-sl { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-sl, .aic-sl * { box-sizing: border-box; }
.aic-sl .sl-glow { position: absolute; left: -6%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-sl .sl-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-sl .sl-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-sl .sl-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-sl .sl-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: dominant hero */
.aic-sl .sl-hero { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 744px;
  display: flex; gap: 16px; }
.aic-sl .sl-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-sl .sl-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-sl .sl-cell.fixed .sl-frame { height: 100%; }
.aic-sl .sl-cell.fixed .sl-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-sl .sl-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-sl .sl-cell.auto .sl-frame { height: auto; }
.aic-sl .sl-cell.auto .sl-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-sl .sl-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-sl .sl-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-sl .sl-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-sl .sl-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

/* right: editorial + growth funnel */
.aic-sl .sl-right { position: absolute; left: 888px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-sl .sl-marker { display: flex; align-items: center; gap: 16px; }
.aic-sl .sl-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-sl .sl-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-sl .sl-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 10px; text-wrap: pretty; }
.aic-sl .sl-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-sl .sl-funnel { margin-top: auto; }
.aic-sl .sl-funnel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-sl .sl-stages { display: flex; flex-direction: column; gap: 16px; }
.aic-sl .sl-stage { display: grid; grid-template-columns: 1fr var(--barcol, 360px); align-items: center; gap: 28px;
  transition: opacity .3s; }
.aic-sl .sl-info { text-align: right; }
.aic-sl .sl-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); line-height: 1.1; }
.aic-sl .sl-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 17px; color: var(--aic-muted); margin-top: 4px; }
.aic-sl .sl-barwrap { display: flex; justify-content: center; }
.aic-sl .sl-bar { height: 84px; border-radius: 18px; width: var(--w); min-width: 120px;
  background: color-mix(in srgb, var(--aic-accent) 30%, white); border: 1.5px solid color-mix(in srgb, var(--aic-accent) 45%, white);
  display: flex; align-items: center; justify-content: center; gap: 4px;
  transition: width .6s cubic-bezier(.3,.7,.4,1), background .35s, box-shadow .35s, transform .35s; }
.aic-sl .sl-stage[data-focus="1"] .sl-bar { background: linear-gradient(135deg, var(--aic-accent-bright), var(--aic-accent) 82%);
  border-color: transparent; box-shadow: 0 22px 46px -22px color-mix(in srgb, var(--aic-accent) 75%, transparent); transform: scale(1.03); }
.aic-sl .sl-stage[data-focus="1"] .sl-info .sl-name { color: var(--aic-accent-deep); }
.aic-sl .sl-bar-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 38px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-sl .sl-bar-v u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 3px; }

.aic-sl .sl-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-sl .sl-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
.aic-sl .sl-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-sl .sl-deco { width: 300px; height: 30px; }
`,Df=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Bf({i:t}){let a="slph-"+t;return Ie("div",{className:"sl-ph",children:[Ie("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[X("defs",{children:Ie("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[X("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),X("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),X("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),X("span",{className:"sl-ph-cap",children:`image_slot_${t+1}`})]})}function Cl(t){let a={...zl,...t},e={...Nl,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-sl",Rf);let m=w(a.accentColor),i=Math.max(2,Math.min(3,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(u=>u.value),1),p=u=>58+M(u,f)*42+"%",d=Math.max(0,Math.min(2,a.imageCount)),n=kl.hasOwnProperty(a.imageRatio)?a.imageRatio:"landscape",o=kl[n],r=o==null,g=r?4/3:o;return Ie("div",{className:"aic-sl",style:m,children:[a.showDecorations&&X("div",{className:"sl-glow"}),Ie("div",{className:"sl-head",children:[Ie("div",{children:[X("p",{className:"sl-eyebrow",children:e.eyebrow}),X("h2",{className:"sl-title",children:e.title})]}),X("div",{className:"sl-sub",children:e.titleTail})]}),X("div",{className:"sl-hero",children:d===0?X("div",{className:"sl-cell fixed",children:X("div",{className:"sl-frame cap",style:{"--ar":String(g)},children:X("div",{className:"sl-deco-fill",children:X(A,{})})})}):Array.from({length:d}).map((u,v)=>Ie("div",{className:"sl-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&X("span",{className:"sl-badge",children:e.badge}),X("div",{className:"sl-frame"+(r?"":" cap"),style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):X(Bf,{i:v})})]},v))}),Ie("div",{className:"sl-right",children:[Ie("div",{className:"sl-marker",children:[X("b",{}),X("span",{children:e.segment})]}),X("p",{className:"sl-lead",children:e.lead}),X("div",{className:"sl-statline",children:e.statLine}),Ie("div",{className:"sl-funnel",children:[X("p",{className:"sl-funnel-t",children:e.panelTitle}),X("div",{className:"sl-stages",children:s.map((u,v)=>Ie("div",{className:"sl-stage","data-focus":a.focusEnabled&&v===l?"1":"0",children:[Ie("div",{className:"sl-info",children:[X("div",{className:"sl-name",children:u.name}),X("div",{className:"sl-note",children:u.note})]}),X("div",{className:"sl-barwrap",children:X("div",{className:"sl-bar",style:{"--w":p(u.value)},children:a.showValues&&Ie("span",{className:"sl-bar-v",children:[u.value,X("u",{children:"億"})]})})})]},u.name))})]})]}),Ie("div",{className:"sl-foot",children:[Ie("div",{className:"sl-closing",children:[X("b",{}),e.closing]}),a.showDecorations&&X("div",{className:"sl-deco",children:X(k,{data:Df,gap:4})})]})]})}var co={};S(co,{controls:()=>Pf,default:()=>Tl,defaultProps:()=>El});import jf from"react";import{jsx as D,jsxs as Oa}from"react/jsx-runtime";var Al={eyebrow:"Low-Code AI",segment:"低程式碼 AI 平台",title:"企業流程嵌入",titleTail:"低程式碼 AI 平台",lead:"低程式碼 AI 平台幫助企業把模型能力嵌入內部流程\uFF1B關鍵不是模型能力\uFF0C而是交付速度和治理能力\u3002",statLine:"融資額 19 億美元 \xB7 6 筆事件",closing:"能被業務團隊使用的平台更容易擴散\u3002",badge:"低程式碼",flowTitle:"流程編排 \xB7 Orchestration",metricTitle:"客戶與留存 \xB7 Retention",steps:[{name:"連線資料",note:"系統與知識源"},{name:"編排流程",note:"視覺化拖曳"},{name:"嵌入業務",note:"觸點與審批"},{name:"治理監控",note:"許可權與審計"},{name:"複用沉澱",note:"模板與資產"}],metrics:[{label:"淨收入留存",value:"118",unit:"%",pct:.88,note:"席位擴張驅動"},{label:"企業客戶中位數",value:"430",unit:"家",pct:.62,note:"部門級滲透"}]},Sl={portrait:3/4,landscape:4/3,square:1,auto:null},El={...Al,images:[],imageCount:1,imageRatio:"portrait",stepCount:4,metricCount:2,focusEnabled:!0,focusIndex:2,showMetrics:!0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Pf=[{key:"eyebrow",label:"眉標",type:"text",default:"Low-Code AI"},{key:"segment",label:"segment",type:"text",default:"低程式碼 AI 平台"},{key:"title",label:"標題",type:"text",default:"企業流程嵌入"},{key:"titleTail",label:"副標題",type:"text",default:"低程式碼 AI 平台"},{key:"lead",label:"導言",type:"text",default:"低程式碼 AI 平台幫助企業把模型能力嵌入內部流程\uFF1B關鍵不是模型能力\uFF0C而是交付速度和治理能力\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 19 億美元 \xB7 6 筆事件"},{key:"closing",label:"結語",type:"text",default:"能被業務團隊使用的平台更容易擴散\u3002"},{key:"badge",label:"badge",type:"text",default:"低程式碼"},{key:"flowTitle",label:"flowTitle",type:"text",default:"流程編排 \xB7 Orchestration"},{key:"metricTitle",label:"metricTitle",type:"text",default:"客戶與留存 \xB7 Retention"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"stepCount",label:"卡片數量",type:"slider",default:4,min:3,max:5,step:1,description:"流程編排節點數量\uFF083\u20135\uFF09\u3002"},{key:"metricCount",label:"指標數量",type:"slider",default:2,min:1,max:2,step:1,description:"客戶與留存指標盤數量\uFF081\u20132\uFF09\u3002",showWhen:t=>t.showMetrics},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個流程節點作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:2,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"},{value:4,label:"第 5 個"}],description:"選擇被高亮的流程節點\u3002",showWhen:t=>t.focusEnabled},{key:"showMetrics",label:"留存面板",type:"toggle",default:!0,description:"底部客戶與留存指標盤的顯隱\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"指標盤內數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮節點與指標盤\u3002"}],Of=`
.aic-lc { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-lc, .aic-lc * { box-sizing: border-box; }
.aic-lc .lc-glow { position: absolute; left: 26%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-lc .lc-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-lc .lc-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-lc .lc-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 76px; line-height: .96; margin: 0; }
.aic-lc .lc-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: editorial + pipeline + retention dials */
.aic-lc .lc-left { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 1100px;
  display: flex; flex-direction: column; }
.aic-lc .lc-marker { display: flex; align-items: center; gap: 16px; }
.aic-lc .lc-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-lc .lc-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-lc .lc-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 10px; text-wrap: pretty; max-width: 1040px; }
.aic-lc .lc-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-lc .lc-flow { margin-top: 44px; }
.aic-lc .lc-block-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-lc .lc-pipe { display: flex; align-items: stretch; }
.aic-lc .lc-node { position: relative; flex: 1 1 0; background: var(--aic-card); border: 1.5px solid var(--aic-hair-strong);
  border-radius: 20px; padding: 22px 20px 24px; transition: background .35s, border-color .35s, box-shadow .35s, transform .35s; }
.aic-lc .lc-node[data-focus="1"] { background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 78%);
  border-color: transparent; box-shadow: 0 22px 46px -22px color-mix(in srgb, var(--aic-accent) 75%, transparent); transform: translateY(-4px); }
.aic-lc .lc-node-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 18px; color: var(--aic-faint);
  font-variant-numeric: tabular-nums; }
.aic-lc .lc-node[data-focus="1"] .lc-node-no { color: color-mix(in srgb, var(--aic-ink) 55%, white); }
.aic-lc .lc-node-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 27px; color: var(--aic-ink); margin-top: 8px; }
.aic-lc .lc-node-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 17px; color: var(--aic-muted); margin-top: 6px; }
.aic-lc .lc-node[data-focus="1"] .lc-node-note { color: color-mix(in srgb, var(--aic-ink) 62%, white); }
.aic-lc .lc-arrow { flex: 0 0 36px; display: grid; place-items: center; color: var(--aic-hair-strong); }
.aic-lc .lc-arrow svg { width: 22px; height: 22px; }

.aic-lc .lc-dials { margin-top: auto; }
.aic-lc .lc-dial-row { display: flex; gap: 26px; }
.aic-lc .lc-dial { display: flex; align-items: center; gap: 22px; flex: 1 1 0; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); border-radius: 22px; padding: 22px 28px; }
.aic-lc .lc-ring { position: relative; width: 116px; height: 116px; flex: none; }
.aic-lc .lc-ring svg { transform: rotate(-90deg); }
.aic-lc .lc-ring-v { position: absolute; inset: 0; display: flex; align-items: baseline; justify-content: center; align-content: center; flex-wrap: wrap; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 30px; color: var(--aic-ink); font-variant-numeric: tabular-nums; line-height: 116px; }
.aic-lc .lc-ring-v u { text-decoration: none; font-size: 15px; font-weight: 600; color: var(--aic-muted); margin-left: 1px; line-height: 1; }
.aic-lc .lc-dial-meta { display: flex; flex-direction: column; gap: 6px; }
.aic-lc .lc-dial-lbl { font-family: var(--aic-font-display); font-weight: 700; font-size: 23px; color: var(--aic-ink); }
.aic-lc .lc-dial-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 17px; color: var(--aic-muted); }

.aic-lc .lc-hero { position: absolute; left: 1244px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; gap: 16px; }
.aic-lc .lc-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-lc .lc-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-lc .lc-cell.fixed .lc-frame { height: 100%; }
.aic-lc .lc-cell.fixed .lc-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-lc .lc-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-lc .lc-cell.auto .lc-frame { height: auto; }
.aic-lc .lc-cell.auto .lc-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-lc .lc-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-lc .lc-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-lc .lc-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-lc .lc-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-lc .lc-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-lc .lc-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
.aic-lc .lc-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-lc .lc-deco { width: 300px; height: 30px; }
`,Hf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Vf({pct:t,focus:a}){let m=2*Math.PI*50,i=Math.max(0,Math.min(1,t))*m;return Oa("svg",{width:"116",height:"116",viewBox:"0 0 116 116","aria-hidden":"true",children:[D("circle",{cx:"58",cy:"58",r:50,fill:"none",stroke:"var(--aic-hair)",strokeWidth:"11"}),D("circle",{cx:"58",cy:"58",r:50,fill:"none",strokeWidth:"11",strokeLinecap:"round",stroke:a?"var(--aic-accent)":"var(--aic-ink)",strokeDasharray:`${i} ${m-i}`,style:{transition:"stroke-dasharray .6s cubic-bezier(.3,.7,.4,1)"}})]})}function Wf({i:t}){let a="lcph-"+t;return Oa("div",{className:"lc-ph",children:[Oa("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[D("defs",{children:Oa("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[D("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),D("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),D("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),D("span",{className:"lc-ph-cap",children:`image_slot_${t+1}`})]})}function Tl(t){let a={...El,...t},e={...Al,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-lc",Of);let m=w(a.accentColor),i=Math.max(3,Math.min(5,a.stepCount)),s=e.steps.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(1,Math.min(2,a.metricCount)),p=e.metrics.slice(0,f),d=Math.max(0,Math.min(2,a.imageCount)),n=Sl.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",o=Sl[n],r=o==null,g=r?3/4:o;return Oa("div",{className:"aic-lc",style:m,children:[a.showDecorations&&D("div",{className:"lc-glow"}),Oa("div",{className:"lc-head",children:[Oa("div",{children:[D("p",{className:"lc-eyebrow",children:e.eyebrow}),D("h2",{className:"lc-title",children:e.title})]}),D("div",{className:"lc-sub",children:e.titleTail})]}),Oa("div",{className:"lc-left",children:[Oa("div",{className:"lc-marker",children:[D("b",{}),D("span",{children:e.segment})]}),D("p",{className:"lc-lead",children:e.lead}),D("div",{className:"lc-statline",children:e.statLine}),Oa("div",{className:"lc-flow",children:[D("p",{className:"lc-block-t",children:e.flowTitle}),D("div",{className:"lc-pipe",children:s.map((u,v)=>Oa(jf.Fragment,{children:[Oa("div",{className:"lc-node","data-focus":a.focusEnabled&&v===l?"1":"0",children:[D("div",{className:"lc-node-no",children:String(v+1).padStart(2,"0")}),D("div",{className:"lc-node-name",children:u.name}),D("div",{className:"lc-node-note",children:u.note})]}),v<s.length-1&&D("div",{className:"lc-arrow",children:D("svg",{viewBox:"0 0 24 24",fill:"none",children:D("path",{d:"M5 12h13M13 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]},u.name))})]}),a.showMetrics&&Oa("div",{className:"lc-dials",children:[D("p",{className:"lc-block-t",children:e.metricTitle}),D("div",{className:"lc-dial-row",children:p.map((u,v)=>Oa("div",{className:"lc-dial",children:[Oa("div",{className:"lc-ring",children:[D(Vf,{pct:u.pct,focus:v===0}),a.showValues&&Oa("div",{className:"lc-ring-v",children:[u.value,D("u",{children:u.unit})]})]}),Oa("div",{className:"lc-dial-meta",children:[D("div",{className:"lc-dial-lbl",children:u.label}),D("div",{className:"lc-dial-note",children:u.note})]})]},u.label))})]})]}),D("div",{className:"lc-hero",children:d===0?D("div",{className:"lc-cell fixed",children:D("div",{className:"lc-frame cap",style:{"--ar":String(g)},children:D("div",{className:"lc-deco-fill",children:D(A,{})})})}):Array.from({length:d}).map((u,v)=>Oa("div",{className:"lc-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&D("span",{className:"lc-badge",children:e.badge}),D("div",{className:"lc-frame"+(r?"":" cap"),style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):D(Wf,{i:v})})]},v))}),Oa("div",{className:"lc-foot",children:[Oa("div",{className:"lc-closing",children:[D("b",{}),e.closing]}),a.showDecorations&&D("div",{className:"lc-deco",children:D(k,{data:Hf,gap:4})})]})]})}var lo={};S(lo,{controls:()=>qf,default:()=>Il,defaultProps:()=>Fl});import"react";import{jsx as I,jsxs as ma}from"react/jsx-runtime";var Ll={eyebrow:"Open-Source Models",segment:"開源模型公司",title:"社群影響力變現",titleTail:"開源模型公司",lead:"開源模型公司透過社群影響力\u3001託管服務和企業支援變現\uFF1B開源能快速獲得開發者\uFF0C但商業化仍需要企業級能力\u3002",statLine:"融資額 28 億美元 \xB7 7 筆事件",closing:"開源是入口\uFF0C不是完整商業模式\u3002",badge:"開源模型",bridgeTitle:"影響力到收入 \xB7 轉化路徑",source:{kicker:"社群影響力",value:"2.8",unit:"億次",caption:"累計模型下載量",tag:"開發者入口"},target:{kicker:"企業服務",pct:37,display:"37",unit:"%",caption:"企業服務收入佔比",tag:"商業化兌現"},ribbonLabel:"影響力 \u2192 收入"},Ml={portrait:3/4,landscape:4/3,square:1,auto:null},Fl={...Ll,images:[],imageCount:1,imageRatio:"landscape",chartType:"ring",focusEnabled:!0,focusIndex:1,showBridge:!0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},qf=[{key:"eyebrow",label:"眉標",type:"text",default:"Open-Source Models"},{key:"segment",label:"segment",type:"text",default:"開源模型公司"},{key:"title",label:"標題",type:"text",default:"社群影響力變現"},{key:"titleTail",label:"副標題",type:"text",default:"開源模型公司"},{key:"lead",label:"導言",type:"text",default:"開源模型公司透過社群影響力\u3001託管服務和企業支援變現\uFF1B開源能快速獲得開發者\uFF0C但商業化仍需要企業級能力\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 28 億美元 \xB7 7 筆事件"},{key:"closing",label:"結語",type:"text",default:"開源是入口\uFF0C不是完整商業模式\u3002"},{key:"badge",label:"badge",type:"text",default:"開源模型"},{key:"bridgeTitle",label:"bridgeTitle",type:"text",default:"影響力到收入 \xB7 轉化路徑"},{key:"ribbonLabel",label:"ribbonLabel",type:"text",default:"影響力 \u2192 收入"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"landscape",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"ring",options:[{value:"ring",label:"環形"},{value:"bar",label:"佔比條"}],description:"企業服務收入佔比的呈現方式\uFF1A環形圖 / 佔比條\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮轉化路徑的某一端作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:1,options:[{value:0,label:"社群影響力"},{value:1,label:"企業服務"}],description:"選擇被高亮的轉化節點\u3002",showWhen:t=>t.focusEnabled},{key:"showBridge",label:"轉化連線",type:"toggle",default:!0,description:"兩節點之間的漸縮轉化連線帶的顯隱\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"轉化節點內數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮節點與轉化連線帶\u3002"}],$f=`
.aic-os { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-os, .aic-os * { box-sizing: border-box; }
.aic-os .os-glow { position: absolute; left: -6%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-os .os-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-os .os-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-os .os-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-os .os-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: dominant hero */
.aic-os .os-hero { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 744px;
  display: flex; gap: 16px; }
.aic-os .os-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-os .os-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-os .os-cell.fixed .os-frame { height: 100%; }
.aic-os .os-cell.fixed .os-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-os .os-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-os .os-cell.auto .os-frame { height: auto; }
.aic-os .os-cell.auto .os-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-os .os-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-os .os-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-os .os-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-os .os-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

/* right: editorial + conversion bridge */
.aic-os .os-right { position: absolute; left: 888px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-os .os-marker { display: flex; align-items: center; gap: 16px; }
.aic-os .os-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-os .os-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-os .os-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 10px; text-wrap: pretty; }
.aic-os .os-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-os .os-bridge-wrap { margin-top: auto; }
.aic-os .os-bridge-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-os .os-bridge { display: grid; grid-template-columns: 1fr 116px 1fr; align-items: stretch; }
.aic-os .os-node { border-radius: 24px; padding: 30px 32px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair-strong); display: flex; flex-direction: column; justify-content: space-between;
  transition: background .35s, border-color .35s, box-shadow .35s; min-height: 248px; }
.aic-os .os-node[data-focus="1"] { box-shadow: 0 24px 50px -26px color-mix(in srgb, var(--aic-accent) 70%, transparent);
  border-color: color-mix(in srgb, var(--aic-accent) 50%, white); }
.aic-os .os-node.target[data-focus="1"] { background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 14%, white), var(--aic-card)); }
.aic-os .os-kicker { display: flex; align-items: center; gap: 10px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 21px; color: var(--aic-ink); }
.aic-os .os-kicker i { width: 11px; height: 11px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-os .os-node.source .os-kicker i { background: var(--aic-ink); }
.aic-os .os-bignum { font-family: var(--aic-font-display); font-weight: 700; font-size: 86px; line-height: .9;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; display: flex; align-items: baseline; }
.aic-os .os-bignum u { text-decoration: none; font-size: 28px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 6px; }
.aic-os .os-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-ink); }
.aic-os .os-tag { font-family: var(--aic-font-display); font-weight: 600; font-size: 15px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--aic-muted); }
/* ring inside target node */
.aic-os .os-ring { position: relative; width: 150px; height: 150px; }
.aic-os .os-ring svg { transform: rotate(-90deg); }
.aic-os .os-ring-v { position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 46px; color: var(--aic-ink); font-variant-numeric: tabular-nums; line-height: 1; }
.aic-os .os-ring-v span { display: inline-flex; align-items: baseline; justify-content: center; white-space: nowrap; line-height: 1; }
.aic-os .os-ring-v u { display: inline-block; text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 1px; line-height: 1; }
.aic-os .os-target-body { display: flex; align-items: center; gap: 22px; }
/* bar variant */
.aic-os .os-barbox { display: flex; flex-direction: column; gap: 12px; }
.aic-os .os-bar-track { height: 22px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-os .os-bar-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--aic-accent-bright), var(--aic-accent) 85%);
  transition: width .6s cubic-bezier(.3,.7,.4,1); }
.aic-os .os-bar-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 70px; line-height: .9; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; display: flex; align-items: baseline; }
.aic-os .os-bar-v u { text-decoration: none; font-size: 26px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 4px; }
/* tapering ribbon connector */
.aic-os .os-ribbon { position: relative; display: grid; place-items: center; }
.aic-os .os-ribbon svg { width: 100%; height: 130px; display: block; }
.aic-os .os-ribbon-lbl { position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%);
  font-family: var(--aic-font-display); font-weight: 600; font-size: 14px; letter-spacing: .08em;
  white-space: nowrap; color: var(--aic-muted); }

.aic-os .os-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-os .os-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
.aic-os .os-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-os .os-deco { width: 300px; height: 30px; }
`,Uf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Yf({pct:t,focus:a,showValue:e,display:m,unit:i}){let l=2*Math.PI*64,f=Math.max(0,Math.min(1,t/100))*l;return ma("div",{className:"os-ring",children:[ma("svg",{width:"150",height:"150",viewBox:"0 0 150 150","aria-hidden":"true",children:[I("circle",{cx:"75",cy:"75",r:64,fill:"none",stroke:"var(--aic-hair)",strokeWidth:"14"}),I("circle",{cx:"75",cy:"75",r:64,fill:"none",strokeWidth:"14",strokeLinecap:"round",stroke:a?"var(--aic-accent)":"var(--aic-ink)",strokeDasharray:`${f} ${l-f}`,style:{transition:"stroke-dasharray .6s cubic-bezier(.3,.7,.4,1)"}})]}),e&&I("div",{className:"os-ring-v",children:ma("span",{children:[m,I("u",{children:i})]})})]})}function _f({i:t}){let a="osph-"+t;return ma("div",{className:"os-ph",children:[ma("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[I("defs",{children:ma("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[I("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),I("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),I("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),I("span",{className:"os-ph-cap",children:`image_slot_${t+1}`})]})}function Il(t){let a={...Fl,...t},e={...Ll,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-os",$f);let m=w(a.accentColor),i=a.focusEnabled&&a.focusIndex===0,s=a.focusEnabled&&a.focusIndex===1,l=e.target,f=Math.max(0,Math.min(2,a.imageCount)),p=Ml.hasOwnProperty(a.imageRatio)?a.imageRatio:"landscape",d=Ml[p],n=d==null,o=n?4/3:d;return ma("div",{className:"aic-os",style:m,children:[a.showDecorations&&I("div",{className:"os-glow"}),ma("div",{className:"os-head",children:[ma("div",{children:[I("p",{className:"os-eyebrow",children:e.eyebrow}),I("h2",{className:"os-title",children:e.title})]}),I("div",{className:"os-sub",children:e.titleTail})]}),I("div",{className:"os-hero",children:f===0?I("div",{className:"os-cell fixed",children:I("div",{className:"os-frame cap",style:{"--ar":String(o)},children:I("div",{className:"os-deco-fill",children:I(A,{})})})}):Array.from({length:f}).map((r,g)=>ma("div",{className:"os-cell "+(n?"auto":"fixed"),children:[a.showDecorations&&g===0&&I("span",{className:"os-badge",children:e.badge}),I("div",{className:"os-frame"+(n?"":" cap"),style:n?null:{"--ar":String(d)},children:a.renderSlot?a.renderSlot(g,{ratio:p,ratioAR:d}):I(_f,{i:g})})]},g))}),ma("div",{className:"os-right",children:[ma("div",{className:"os-marker",children:[I("b",{}),I("span",{children:e.segment})]}),I("p",{className:"os-lead",children:e.lead}),I("div",{className:"os-statline",children:e.statLine}),ma("div",{className:"os-bridge-wrap",children:[I("p",{className:"os-bridge-t",children:e.bridgeTitle}),ma("div",{className:"os-bridge",children:[ma("div",{className:"os-node source","data-focus":i?"1":"0",children:[ma("div",{className:"os-kicker",children:[I("i",{}),e.source.kicker]}),a.showValues&&ma("div",{className:"os-bignum",children:[e.source.value,I("u",{children:e.source.unit})]}),I("div",{className:"os-caption",children:e.source.caption}),I("div",{className:"os-tag",children:e.source.tag})]}),ma("div",{className:"os-ribbon",children:[a.showBridge&&ma("svg",{viewBox:"0 0 116 130",preserveAspectRatio:"none","aria-hidden":"true",children:[I("path",{d:"M0 16 L116 50 L116 80 L0 114 Z",fill:"var(--aic-accent-soft)"}),I("path",{d:"M0 38 L116 56 L116 74 L0 92 Z",fill:"var(--aic-accent)",opacity:"0.85"}),I("path",{d:"M70 56 L98 65 L70 74 Z",fill:"var(--aic-accent-deep)"})]}),a.showBridge&&I("span",{className:"os-ribbon-lbl",children:e.ribbonLabel})]}),ma("div",{className:"os-node target","data-focus":s?"1":"0",children:[ma("div",{className:"os-kicker",children:[I("i",{}),l.kicker]}),a.chartType==="ring"?ma("div",{className:"os-target-body",children:[I(Yf,{pct:l.pct,focus:s,showValue:a.showValues,display:l.display,unit:l.unit}),I("div",{className:"os-caption",style:{flex:1},children:l.caption})]}):ma("div",{className:"os-barbox",children:[a.showValues&&ma("div",{className:"os-bar-v",children:[l.display,I("u",{children:l.unit})]}),I("div",{className:"os-bar-track",children:I("div",{className:"os-bar-fill",style:{width:l.pct+"%"}})}),I("div",{className:"os-caption",children:l.caption})]}),a.chartType==="ring"&&I("div",{className:"os-tag",children:l.tag})]})]})]})]}),ma("div",{className:"os-foot",children:[ma("div",{className:"os-closing",children:[I("b",{}),e.closing]}),a.showDecorations&&I("div",{className:"os-deco",children:I(k,{data:Uf,gap:4})})]})]})}var ro={};S(ro,{controls:()=>Xf,default:()=>jl,defaultProps:()=>Bl});import"react";import{jsx as H,jsxs as Re}from"react/jsx-runtime";var Dl={eyebrow:"Model Alignment",segment:"模型安全公司",title:"安全與對齊工具",titleTail:"模型安全公司",lead:"模型安全和對齊公司吸引長期資本關注\uFF1B安全對齊既是技術壁壘\uFF0C也是大客戶信任入口\u3002",statLine:"融資額 21 億美元 \xB7 5 筆事件",closing:"可信 AI 會成為企業級 AI 的基礎設施\u3002",badge:"安全對齊",panelTitle:"安全防線 \xB7 融資 / 億美元",shieldLabel:"可信 AI 防線",segments:[{name:"評測平台",value:8,note:"能力與風險基準"},{name:"對齊工具",value:7,note:"價值對齊與約束"},{name:"紅隊服務",value:6,note:"攻擊與漏洞挖掘"}]},Rl={portrait:3/4,landscape:4/3,square:1,auto:null},Bl={...Dl,images:[],imageCount:1,imageRatio:"portrait",segmentCount:3,focusEnabled:!0,focusIndex:0,showShield:!0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Xf=[{key:"eyebrow",label:"眉標",type:"text",default:"Model Alignment"},{key:"segment",label:"segment",type:"text",default:"模型安全公司"},{key:"title",label:"標題",type:"text",default:"安全與對齊工具"},{key:"titleTail",label:"副標題",type:"text",default:"模型安全公司"},{key:"lead",label:"導言",type:"text",default:"模型安全和對齊公司吸引長期資本關注\uFF1B安全對齊既是技術壁壘\uFF0C也是大客戶信任入口\u3002"},{key:"statLine",label:"statLine",type:"text",default:"融資額 21 億美元 \xB7 5 筆事件"},{key:"closing",label:"結語",type:"text",default:"可信 AI 會成為企業級 AI 的基礎設施\u3002"},{key:"badge",label:"badge",type:"text",default:"安全對齊"},{key:"panelTitle",label:"panelTitle",type:"text",default:"安全防線 \xB7 融資 / 億美元"},{key:"shieldLabel",label:"shieldLabel",type:"text",default:"可信 AI 防線"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"安全防線分項數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個防線分項作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的防線分項\u3002",showWhen:t=>t.focusEnabled},{key:"showShield",label:"防線裝飾",type:"toggle",default:!0,description:"防線上方的防護弧線裝飾的顯隱\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"防線柱內融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮防線與防護弧線\u3002"}],Gf=`
.aic-al { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-al, .aic-al * { box-sizing: border-box; }
.aic-al .al-glow { position: absolute; left: 26%; top: -10%; width: 50%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-al .al-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-al .al-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-al .al-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 76px; line-height: .96; margin: 0; }
.aic-al .al-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left: editorial + defense pillars */
.aic-al .al-left { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 920px;
  display: flex; flex-direction: column; }
.aic-al .al-marker { display: flex; align-items: center; gap: 16px; }
.aic-al .al-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-al .al-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-al .al-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 10px; text-wrap: pretty; max-width: 880px; }
.aic-al .al-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }

.aic-al .al-panel { margin-top: auto; }
.aic-al .al-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 18px; }
.aic-al .al-shield { position: relative; height: 56px; margin-bottom: 6px; }
.aic-al .al-shield svg { width: 100%; height: 100%; display: block; overflow: visible; }
.aic-al .al-shield-lbl { position: absolute; top: 2px; left: 50%; transform: translateX(-50%);
  font-family: var(--aic-font-display); font-weight: 600; font-size: 16px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--aic-accent-deep); background: var(--aic-paper); padding: 0 14px; white-space: nowrap; }
.aic-al .al-pillars { display: flex; align-items: flex-end; gap: 30px; }
.aic-al .al-col { flex: 1 1 0; display: flex; flex-direction: column; align-items: center; }
.aic-al .al-track { position: relative; width: 100%; height: 280px; border-radius: 22px;
  background: color-mix(in srgb, var(--aic-ink) 4%, var(--aic-card)); border: 1.5px solid var(--aic-hair);
  display: flex; align-items: flex-end; overflow: hidden; }
.aic-al .al-fill { width: 100%; border-radius: 18px; background: color-mix(in srgb, var(--aic-accent) 30%, white);
  display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: 22px;
  transition: height .6s cubic-bezier(.3,.7,.4,1), background .35s; }
.aic-al .al-col[data-focus="1"] .al-fill { background: linear-gradient(180deg, var(--aic-accent-bright), var(--aic-accent) 88%); }
.aic-al .al-col[data-focus="1"] .al-track { border-color: transparent;
  box-shadow: 0 24px 50px -26px color-mix(in srgb, var(--aic-accent) 75%, transparent); }
.aic-al .al-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 42px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-al .al-val u { text-decoration: none; font-size: 18px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 3px; }
.aic-al .al-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 27px; color: var(--aic-ink); margin-top: 18px; }
.aic-al .al-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 17px; color: var(--aic-muted); margin-top: 5px;
  text-align: center; line-height: 1.35; }

/* right: dominant hero */
.aic-al .al-hero { position: absolute; left: 1080px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; gap: 16px; }
.aic-al .al-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-al .al-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-al .al-cell.fixed .al-frame { height: 100%; }
.aic-al .al-cell.fixed .al-frame.cap { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-al .al-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-al .al-cell.auto .al-frame { height: auto; }
.aic-al .al-cell.auto .al-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-al .al-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-al .al-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-al .al-ph-cap { position: absolute; left: 0; right: 0; bottom: 22px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-al .al-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-al .al-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-al .al-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); white-space: nowrap; }
.aic-al .al-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-al .al-deco { width: 300px; height: 30px; }
`,Qf=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Kf({i:t}){let a="alph-"+t;return Re("div",{className:"al-ph",children:[Re("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[H("defs",{children:Re("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[H("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),H("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),H("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),H("span",{className:"al-ph-cap",children:`image_slot_${t+1}`})]})}function jl(t){let a={...Bl,...t},e={...Dl,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-al",Gf);let m=w(a.accentColor),i=Math.max(2,Math.min(3,a.segmentCount)),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(u=>u.value),1),p=u=>56+M(u,f)*44+"%",d=Math.max(0,Math.min(2,a.imageCount)),n=Rl.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",o=Rl[n],r=o==null,g=r?3/4:o;return Re("div",{className:"aic-al",style:m,children:[a.showDecorations&&H("div",{className:"al-glow"}),Re("div",{className:"al-head",children:[Re("div",{children:[H("p",{className:"al-eyebrow",children:e.eyebrow}),H("h2",{className:"al-title",children:e.title})]}),H("div",{className:"al-sub",children:e.titleTail})]}),Re("div",{className:"al-left",children:[Re("div",{className:"al-marker",children:[H("b",{}),H("span",{children:e.segment})]}),H("p",{className:"al-lead",children:e.lead}),H("div",{className:"al-statline",children:e.statLine}),Re("div",{className:"al-panel",children:[H("p",{className:"al-panel-t",children:e.panelTitle}),a.showShield&&Re("div",{className:"al-shield",children:[H("svg",{viewBox:"0 0 920 56",preserveAspectRatio:"none","aria-hidden":"true",children:H("path",{d:"M8 50 Q460 -18 912 50",fill:"none",stroke:"var(--aic-accent)",strokeWidth:"2.5",strokeDasharray:"2 10",strokeLinecap:"round"})}),H("span",{className:"al-shield-lbl",children:e.shieldLabel})]}),H("div",{className:"al-pillars",children:s.map((u,v)=>Re("div",{className:"al-col","data-focus":a.focusEnabled&&v===l?"1":"0",children:[H("div",{className:"al-track",children:H("div",{className:"al-fill",style:{height:p(u.value)},children:a.showValues&&Re("span",{className:"al-val",children:[u.value,H("u",{children:"億"})]})})}),H("div",{className:"al-name",children:u.name}),H("div",{className:"al-note",children:u.note})]},u.name))})]})]}),H("div",{className:"al-hero",children:d===0?H("div",{className:"al-cell fixed",children:H("div",{className:"al-frame cap",style:{"--ar":String(g)},children:H("div",{className:"al-deco-fill",children:H(A,{})})})}):Array.from({length:d}).map((u,v)=>Re("div",{className:"al-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&H("span",{className:"al-badge",children:e.badge}),H("div",{className:"al-frame"+(r?"":" cap"),style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):H(Kf,{i:v})})]},v))}),Re("div",{className:"al-foot",children:[Re("div",{className:"al-closing",children:[H("b",{}),e.closing]}),a.showDecorations&&H("div",{className:"al-deco",children:H(k,{data:Qf,gap:4})})]})]})}var so={};S(so,{controls:()=>Zf,default:()=>Hl,defaultProps:()=>Ol,numberBounds:()=>Jf});import"react";import{jsx as me,jsxs as bt}from"react/jsx-runtime";var Pl={eyebrow:"Chapter",index:"04",title:"資本與地區結構",sub:"輪次\u3001投資人和地理叢集",lead:"本章進入資本結構部分\uFF0C拆解輪次\u3001投資人\u3001雲廠商\u3001NVIDIA 生態和地理分佈\u3002",closing:"下一組頁面進入更細的拆解\u3002",keywords:["後期輪","戰略投資","雲資源","灣區","紐約","西雅圖"],clusterTitle:"地理叢集 \xB7 資本份額",hubs:[{label:"舊金山灣區",en:"Bay Area",pct:63.9,x:36,y:46,d:60},{label:"紐約",en:"New York",pct:12.4,x:74,y:30,d:31},{label:"西雅圖",en:"Seattle",pct:9.8,x:78,y:70,d:27},{label:"波士頓",en:"Boston",pct:7.7,x:24,y:82,d:23},{label:"其他地區",en:"Others",pct:6.2,x:56,y:84,d:19}]},Ol={...Pl,backgroundVariant:"dark",layout:"left",showIndex:!0,showKeywords:!0,keywordCount:6,showCluster:!0,hubCount:5,showDecorations:!0,accentColor:c.accent},Jf={"hubs[].d":{min:0,max:100,semantics:"percent"}},Zf=[{key:"eyebrow",label:"眉標",type:"text",default:"Chapter"},{key:"index",label:"index",type:"text",default:"04"},{key:"title",label:"標題",type:"text",default:"資本與地區結構"},{key:"sub",label:"次標題",type:"text",default:"輪次\u3001投資人和地理叢集"},{key:"lead",label:"導言",type:"text",default:"本章進入資本結構部分\uFF0C拆解輪次\u3001投資人\u3001雲廠商\u3001NVIDIA 生態和地理分佈\u3002"},{key:"closing",label:"結語",type:"text",default:"下一組頁面進入更細的拆解\u3002"},{key:"clusterTitle",label:"clusterTitle",type:"text",default:"地理叢集 \xB7 資本份額"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"dark",options:[{value:"dark",label:"深色"},{value:"paper",label:"淺色"}],description:"章節頁背景\uFF1A深色\uFF08強換氣節奏\uFF09/ 淺色\uFF08與正文統一\uFF09\u3002"},{key:"layout",label:"排版",type:"radio",default:"left",options:[{value:"left",label:"左對齊"},{value:"center",label:"居中"}],description:"標題與關鍵詞的整體排布方式\uFF1B居中時隱藏右側叢集圖\u3002"},{key:"showIndex",label:"章節序號",type:"toggle",default:!0,description:"超大章節編號水印的顯隱\u3002"},{key:"showKeywords",label:"關鍵詞",type:"toggle",default:!0,description:"本章關鍵詞標籤行的顯隱\u3002"},{key:"keywordCount",label:"關鍵詞數量",type:"slider",default:6,min:3,max:6,step:1,description:"展示的關鍵詞數量\uFF083\u20136\uFF09\u3002",showWhen:t=>t.showKeywords},{key:"showCluster",label:"地理叢集圖",type:"toggle",default:!0,description:"右側地理叢集氣泡圖的顯隱\uFF08僅左對齊排版生效\uFF09\u3002",showWhen:t=>t.layout==="left"},{key:"hubCount",label:"叢集節點數量",type:"slider",default:5,min:3,max:5,step:1,description:"地理叢集展示的城市節點數量\uFF083\u20135\uFF09\u3002",showWhen:t=>t.layout==="left"&&t.showCluster},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],am=`
.aic-c4 { position: relative; width: 100%; height: 100%; overflow: hidden;
  font-family: var(--aic-font-text); --pad: 120px; }
.aic-c4, .aic-c4 * { box-sizing: border-box; }
.aic-c4[data-bg="dark"]  { background: var(--aic-ink); color: var(--aic-paper); --c4-dim: rgba(250,250,246,.62); --c4-faint: rgba(250,250,246,.34); --c4-hair: rgba(250,250,246,.16); --c4-card: rgba(250,250,246,.05); }
.aic-c4[data-bg="paper"] { background: var(--aic-paper); color: var(--aic-ink); --c4-dim: var(--aic-ink-dim); --c4-faint: var(--aic-faint); --c4-hair: var(--aic-hair); --c4-card: var(--aic-card); }

.aic-c4 .c4-glow { position: absolute; right: -8%; top: 4%; width: 60%; height: 78%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 32%, transparent), transparent 70%); }

/* giant index watermark */
.aic-c4 .c4-index { position: absolute; left: -30px; bottom: -180px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 560px; line-height: .7; color: transparent;
  -webkit-text-stroke: 3px var(--c4-hair); letter-spacing: -.04em; pointer-events: none; user-select: none;
  font-variant-numeric: lining-nums; }

.aic-c4 .c4-body { position: absolute; left: var(--pad); top: 50%; transform: translateY(-52%);
  width: 1180px; display: flex; flex-direction: column; }
.aic-c4.is-center .c4-body { left: var(--pad); right: var(--pad); width: auto; align-items: center; text-align: center; }

.aic-c4 .c4-eyebrow { display: flex; align-items: center; gap: 18px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 24px; letter-spacing: .28em; text-transform: uppercase; color: var(--aic-accent); margin: 0 0 30px; }
.aic-c4 .c4-eyebrow b { font-variant-numeric: tabular-nums; }
.aic-c4 .c4-eyebrow s { display: inline-block; width: 64px; height: 2px; background: var(--aic-accent); text-decoration: none; }
.aic-c4.is-center .c4-eyebrow { justify-content: center; }

.aic-c4 .c4-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 142px; line-height: .94;
  letter-spacing: -.01em; margin: 0; }
.aic-c4 .c4-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 38px; color: var(--c4-dim); margin: 28px 0 0; }
.aic-c4 .c4-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--c4-dim); margin: 32px 0 0; width: 665px; }
.aic-c4.is-center .c4-lead { margin-left: auto; margin-right: auto; }

.aic-c4 .c4-kw { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 52px; max-width: 1040px; }
.aic-c4.is-center .c4-kw { justify-content: center; }
.aic-c4 .c4-kw span { font-family: var(--aic-font-text); font-weight: 600; font-size: 25px;
  padding: 13px 26px; border-radius: 999px; border: 1.5px solid var(--c4-hair); color: var(--c4-dim);
  display: inline-flex; align-items: center; gap: 12px; }
.aic-c4 .c4-kw span::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* geographic cluster (right) */
.aic-c4 .c4-cluster { position: absolute; right: 96px; top: 50%; transform: translateY(-50%);
  width: 600px; height: 600px; }
.aic-c4 .c4-cluster-t { position: absolute; top: -18px; left: 0; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 19px; letter-spacing: .16em; text-transform: uppercase; color: var(--c4-faint); }
.aic-c4 .c4-ring { position: absolute; inset: 8% 8% 8% 8%; border-radius: 50%; border: 1.5px dashed var(--c4-hair); }
.aic-c4 .c4-ring.r2 { inset: 24% 24% 24% 24%; }
.aic-c4 .c4-hub { position: absolute; transform: translate(-50%, -50%); display: grid; place-items: center;
  border-radius: 50%; text-align: center; }
.aic-c4 .c4-hub-disc { position: relative; width: 100%; height: 100%; border-radius: 50%;
  background: radial-gradient(circle at 36% 30%, var(--aic-accent-bright), var(--aic-accent) 56%, var(--aic-accent-deep) 98%);
  box-shadow: inset 6% 8% 18% rgba(255,255,255,.5), inset -8% -10% 22% rgba(60,110,10,.45);
  display: grid; place-items: center; }
.aic-c4 .c4-hub.lead .c4-hub-disc { box-shadow: inset 6% 8% 18% rgba(255,255,255,.5), inset -8% -10% 22% rgba(60,110,10,.45),
  0 0 0 8px color-mix(in srgb, var(--aic-accent) 22%, transparent); }
.aic-c4 .c4-hub-pct { font-family: var(--aic-font-display); font-weight: 700; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); line-height: 1; }
.aic-c4 .c4-hub-lbl { position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); white-space: nowrap;
  font-family: var(--aic-font-text); font-weight: 700; font-size: 19px; color: var(--c4-dim); }
.aic-c4 .c4-hub-lbl em { font-style: normal; font-family: var(--aic-font-display); font-weight: 500; font-size: 13px;
  letter-spacing: .14em; text-transform: uppercase; color: var(--c4-faint); margin-left: 8px; }

.aic-c4 .c4-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 84px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-c4 .c4-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 26px; color: var(--c4-dim); }
.aic-c4 .c4-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-c4 .c4-deco { width: 300px; height: 28px; flex: none; }
`,em=["accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","accent","warn","pos","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos"].map(t=>({tone:t}));function Hl(t){let a={...Ol,...t},e={...Pl,...Object.fromEntries(Object.entries(a).filter(([,o])=>o!==void 0))};y(),h("aic-c4",am);let m=w(a.accentColor),i=a.backgroundVariant==="paper"?"paper":"dark",s=a.layout==="center"?"center":"left",l=Math.max(3,Math.min(e.keywords.length,a.keywordCount)),f=e.keywords.slice(0,l),p=s==="left"&&a.showCluster,d=Math.max(3,Math.min(e.hubs.length,a.hubCount)),n=e.hubs.slice(0,d);return bt("div",{className:"aic-c4 is-"+s,"data-bg":i,style:m,children:[a.showDecorations&&me("div",{className:"c4-glow"}),a.showIndex&&me("div",{className:"c4-index",children:e.index}),bt("div",{className:"c4-body",children:[bt("p",{className:"c4-eyebrow",children:[me("s",{}),e.eyebrow,"\xA0",me("b",{children:e.index})]}),me("h2",{className:"c4-title",children:e.title}),me("div",{className:"c4-sub",children:e.sub}),me("p",{className:"c4-lead",children:e.lead}),a.showKeywords&&me("div",{className:"c4-kw",children:f.map(o=>me("span",{children:o},o))})]}),p&&bt("div",{className:"c4-cluster",children:[me("div",{className:"c4-cluster-t",children:e.clusterTitle}),me("div",{className:"c4-ring"}),me("div",{className:"c4-ring r2"}),n.map((o,r)=>{let g=80+o.d/100*320;return bt("div",{className:"c4-hub"+(r===0?" lead":""),style:{left:o.x+"%",top:o.y+"%",width:g,height:g},children:[me("div",{className:"c4-hub-disc",children:bt("span",{className:"c4-hub-pct",style:{fontSize:Math.max(16,g*.26)},children:[o.pct,"%"]})}),bt("span",{className:"c4-hub-lbl",children:[o.label,me("em",{children:o.en})]})]},o.label)})]}),bt("div",{className:"c4-foot",children:[bt("div",{className:"c4-closing",children:[me("b",{}),e.closing]}),a.showDecorations&&me("div",{className:"c4-deco",children:me(k,{data:em,gap:4})})]})]})}var po={};S(po,{controls:()=>tm,default:()=>ql,defaultProps:()=>Wl});import"react";import{jsx as G,jsxs as Ne}from"react/jsx-runtime";var Vl={eyebrow:"Early Stage Signal",marker:"Seed \u2192 B",season:"早期輪 \xB7 主題萌芽",title:"新主題萌芽",titleTail:"早期輪訊號",lead:"Seed 和 A 輪金額較小\uFF0C但代表新主題正在形成\uFF1B早期機會集中在 Agent\u3001安全\u3001具身智慧和行業專用模型\u3002",statLine:"種子輪 8 筆 / 1.2 億美元 \xB7 A 輪 12 筆 / 1.8 億美元",anchorValue:"20.6%",anchorLabel:"早期輪佔全年事件數",closing:"小金額交易往往藏著下一輪主題\u3002",colHeads:{dim:"輪次",events:"事件數",amount:"融資額",bubble:"平均單筆",themes:"萌芽主題",note:"訊號"},rows:[{dim:"種子輪",en:"Seed",events:"8",amount:"1.2",avg:.15,themes:["Agent","安全"],note:"主題驗證期"},{dim:"A 輪",en:"Series A",events:"12",amount:"1.8",avg:.15,themes:["具身智慧","行業模型"],note:"場景打磨期"},{dim:"B 輪",en:"Series B",events:"6",amount:"3.4",avg:.57,themes:["企業應用","資料閉環"],note:"規模化前夜"},{dim:"早期戰略",en:"Strategic",events:"4",amount:"2.1",avg:.53,themes:["雲資源","平台卡位"],note:"生態繫結"}]},Wl={...Vl,rowCount:4,showBubble:!0,showThemes:!0,showSignal:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},tm=[{key:"eyebrow",label:"眉標",type:"text",default:"Early Stage Signal"},{key:"marker",label:"marker",type:"text",default:"Seed \u2192 B"},{key:"season",label:"season",type:"text",default:"早期輪 \xB7 主題萌芽"},{key:"title",label:"標題",type:"text",default:"新主題萌芽"},{key:"titleTail",label:"副標題",type:"text",default:"早期輪訊號"},{key:"lead",label:"導言",type:"text",default:"Seed 和 A 輪金額較小\uFF0C但代表新主題正在形成\uFF1B早期機會集中在 Agent\u3001安全\u3001具身智慧和行業專用模型\u3002"},{key:"statLine",label:"statLine",type:"text",default:"種子輪 8 筆 / 1.2 億美元 \xB7 A 輪 12 筆 / 1.8 億美元"},{key:"anchorValue",label:"anchorValue",type:"text",default:"20.6%"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"早期輪佔全年事件數"},{key:"closing",label:"結語",type:"text",default:"小金額交易往往藏著下一輪主題\u3002"},{key:"rowCount",label:"行數量",type:"slider",default:4,min:2,max:4,step:1,description:"表格展示的輪次行數量\uFF082\u20134\uFF09\u3002"},{key:"showBubble",label:"氣泡列",type:"toggle",default:!0,description:"平均單筆氣泡列\uFF08氣泡大小=平均單筆規模\uFF09的顯隱\u3002"},{key:"showThemes",label:"主題標籤列",type:"toggle",default:!0,description:"萌芽主題標籤列的顯隱\u3002"},{key:"showSignal",label:"訊號列",type:"toggle",default:!0,description:"訊號判斷列的顯隱\uFF1B關閉後表格更緊湊\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於輪次標記\u3001氣泡\u3001高亮行與錨點數字\u3002"}],im=`
.aic-es { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-es, .aic-es * { box-sizing: border-box; }
.aic-es .es-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-es .es-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-es .es-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-es .es-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-es .es-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-es .es-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 anchor share (right) */
.aic-es .es-meta { position: absolute; left: var(--pad); right: var(--pad); top: 296px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-es .es-meta-l { max-width: 1200px; }
.aic-es .es-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-es .es-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 60px; line-height: .8;
  color: var(--aic-accent); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-es .es-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-es .es-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 26px 0 14px; width: 1395px; }
.aic-es .es-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-es .es-anchor { flex: none; text-align: right; }
.aic-es .es-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 96px; line-height: .82;
  color: var(--aic-accent); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-es .es-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* table */
.aic-es .es-table { position: absolute; left: var(--pad); right: var(--pad); top: 532px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-es .es-thead { display: grid; align-items: center; gap: 0 28px; padding: 0 28px 16px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-es .es-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-es .es-th.r { text-align: right; }
.aic-es .es-th.c { text-align: center; }
.aic-es .es-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-es .es-row { flex: 1; display: grid; align-items: center; gap: 0 28px; padding: 0 28px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-es .es-row:last-child { border-bottom: none; }
.aic-es .es-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-es .es-dim { display: flex; align-items: baseline; gap: 16px; }
.aic-es .es-dim .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-hair-strong); flex: none; align-self: center; }
.aic-es .es-row[data-focus="1"] .es-dim .dot { background: var(--aic-accent); }
.aic-es .es-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 33px; color: var(--aic-ink); white-space: nowrap; }
.aic-es .es-dim em { font-style: normal; font-family: var(--aic-font-display); font-weight: 500; font-size: 16px;
  letter-spacing: .14em; text-transform: uppercase; color: var(--aic-faint); }
.aic-es .es-val { text-align: right; font-family: var(--aic-font-display); font-weight: 700; font-size: 36px;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-es .es-val u { text-decoration: none; font-size: 17px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }
.aic-es .es-bubble { display: flex; align-items: center; justify-content: center; }
.aic-es .es-disc { border-radius: 50%; background: color-mix(in srgb, var(--aic-accent) 30%, var(--aic-card));
  border: 2px solid color-mix(in srgb, var(--aic-accent) 55%, var(--aic-card)); display: grid; place-items: center; }
.aic-es .es-row[data-focus="1"] .es-disc { background: var(--aic-accent); border-color: var(--aic-accent-deep); }
.aic-es .es-disc span { font-family: var(--aic-font-display); font-weight: 700; font-size: 18px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-es .es-themes { display: flex; flex-wrap: wrap; gap: 10px; }
.aic-es .es-chip { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-ink-dim);
  padding: 7px 17px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); white-space: nowrap; }
.aic-es .es-row[data-focus="1"] .es-chip { border-color: var(--aic-accent-deep); color: var(--aic-ink); }
.aic-es .es-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 23px; color: var(--aic-ink-dim); }

.aic-es .es-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 70px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-es .es-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-es .es-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-es .es-deco { width: 300px; height: 30px; }
`,om=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function ql(t){let a={...Wl,...t},e={...Vl,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-es",im);let m=w(a.accentColor),i=Math.max(2,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(n=>n.avg),1),p=["minmax(280px, 1.1fr)","150px","180px"];a.showBubble&&p.push("150px"),a.showThemes&&p.push("1.5fr"),a.showSignal&&p.push("minmax(220px, 1fr)");let d=p.join(" ");return Ne("div",{className:"aic-es",style:m,children:[a.showDecorations&&G("div",{className:"es-glow"}),Ne("div",{className:"es-head",children:[Ne("div",{children:[G("p",{className:"es-eyebrow",children:e.eyebrow}),Ne("h2",{className:"es-title",children:[e.title,G("em",{children:e.titleTail})]})]}),G("div",{className:"es-sub",children:e.season})]}),Ne("div",{className:"es-meta",children:[Ne("div",{className:"es-meta-l",children:[Ne("div",{className:"es-marker",children:[G("b",{children:e.marker}),G("span",{className:"es-season",children:e.season})]}),G("p",{className:"es-lead",children:e.lead}),G("div",{className:"es-statline",children:e.statLine})]}),Ne("div",{className:"es-anchor",children:[G("div",{className:"es-anchor-v",children:e.anchorValue}),G("div",{className:"es-anchor-l",children:e.anchorLabel})]})]}),Ne("div",{className:"es-table",children:[Ne("div",{className:"es-thead",style:{gridTemplateColumns:d},children:[G("div",{className:"es-th",children:e.colHeads.dim}),G("div",{className:"es-th r",children:e.colHeads.events}),G("div",{className:"es-th r",children:e.colHeads.amount}),a.showBubble&&G("div",{className:"es-th c",children:e.colHeads.bubble}),a.showThemes&&G("div",{className:"es-th",children:e.colHeads.themes}),a.showSignal&&G("div",{className:"es-th",children:e.colHeads.note})]}),G("div",{className:"es-tbody",children:s.map((n,o)=>{let r=36+M(n.avg,f)*38;return Ne("div",{className:"es-row","data-focus":a.focusEnabled&&o===l?"1":"0",style:{gridTemplateColumns:d},children:[Ne("div",{className:"es-dim",children:[G("span",{className:"dot"}),G("b",{children:n.dim}),G("em",{children:n.en})]}),Ne("div",{className:"es-val",children:[n.events,G("u",{children:"筆"})]}),Ne("div",{className:"es-val",children:[n.amount,G("u",{children:"億"})]}),a.showBubble&&G("div",{className:"es-bubble",children:G("div",{className:"es-disc",style:{width:r,height:r},children:G("span",{children:n.avg})})}),a.showThemes&&G("div",{className:"es-themes",children:n.themes.map(g=>G("span",{className:"es-chip",children:g},g))}),a.showSignal&&G("div",{className:"es-note",children:n.note})]},n.dim)})})]}),Ne("div",{className:"es-foot",children:[Ne("div",{className:"es-closing",children:[G("b",{}),e.closing]}),a.showDecorations&&G("div",{className:"es-deco",children:G(k,{data:om,gap:4})})]})]})}var fo={};S(fo,{controls:()=>nm,default:()=>Yl,defaultProps:()=>Ul});import"react";import{jsx as La,jsxs as ge}from"react/jsx-runtime";var $l={eyebrow:"Undisclosed Mega Rounds",title:"複雜交易結構",titleTail:"未披露鉅額輪次",sub:"未披露鉅額輪次",lead:"未披露輪次常對應戰略投資\u3001債務組合或雲資源置換\uFF1B不披露不代表資訊不足\uFF0C而是交易結構更復雜\u3002",closing:"AI 融資越來越像資源組合交易\u3002",panelTitle:"單筆交易結構拆解 \xB7 構成佔比",stats:[{value:"22",unit:"筆",label:"未披露鉅額輪次"},{value:"18.6",unit:"億美元",label:"平均單筆規模"}],components:[{name:"雲資源置換",en:"Cloud Credits",pct:39,note:"以算力額度換取股權或優先供給"},{name:"戰略投資",en:"Strategic",pct:31,note:"產業方與大廠的戰略持股"},{name:"債務組合",en:"Debt / Convertible",pct:18,note:"債務與可轉債等結構化融資"},{name:"純股權",en:"Pure Equity",pct:12,note:"傳統現金對價的股權部分"}]},jt=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 60%, white)","color-mix(in srgb, var(--aic-accent) 38%, white)","var(--aic-hair-strong)"],Ul={...$l,componentCount:4,chartType:"stack",showStats:!0,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},nm=[{key:"eyebrow",label:"眉標",type:"text",default:"Undisclosed Mega Rounds"},{key:"title",label:"標題",type:"text",default:"複雜交易結構"},{key:"titleTail",label:"副標題",type:"text",default:"未披露鉅額輪次"},{key:"sub",label:"次標題",type:"text",default:"未披露鉅額輪次"},{key:"lead",label:"導言",type:"text",default:"未披露輪次常對應戰略投資\u3001債務組合或雲資源置換\uFF1B不披露不代表資訊不足\uFF0C而是交易結構更復雜\u3002"},{key:"closing",label:"結語",type:"text",default:"AI 融資越來越像資源組合交易\u3002"},{key:"panelTitle",label:"panelTitle",type:"text",default:"單筆交易結構拆解 \xB7 構成佔比"},{key:"componentCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"交易結構構成項數量\uFF082\u20134\uFF09\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"stack",options:[{value:"stack",label:"堆疊條"},{value:"donut",label:"環形圖"}],description:"構成佔比圖表樣式\uFF1A堆疊條 / 環形圖\u3002"},{key:"showStats",label:"錨點指標",type:"toggle",default:!0,description:"左側事件數與平均單筆錨點指標的顯隱\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個構成項作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的構成項\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於圖表\u3001錨點數字與高亮構成項\u3002"}],cm=`
.aic-ds { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-ds, .aic-ds * { box-sizing: border-box; }
.aic-ds .ds-glow { position: absolute; right: -6%; top: -8%; width: 52%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-ds .ds-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-ds .ds-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-ds .ds-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-ds .ds-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-ds .ds-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-ds .ds-lead { position: absolute; left: var(--pad); top: 290px; width: 1500px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 32px; line-height: 1.5; color: var(--aic-ink); margin: 0; }

.aic-ds .ds-body { position: absolute; left: var(--pad); right: var(--pad); top: 432px; bottom: 150px;
  display: grid; gap: 72px; align-items: stretch; }

/* left anchor rail */
.aic-ds .ds-rail { display: flex; flex-direction: column; justify-content: center; gap: 36px; }
.aic-ds .ds-stat { display: flex; flex-direction: column; gap: 8px; }
.aic-ds .ds-stat-v { font-family: var(--aic-font-display); font-weight: 700; line-height: .82; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; display: inline-flex; align-items: baseline; }
.aic-ds .ds-stat-v b { font-size: 120px; }
.aic-ds .ds-stat-v u { text-decoration: none; font-family: var(--aic-font-text); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); margin-left: 12px; transform: skewX(9deg); }
.aic-ds .ds-stat-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 23px; color: var(--aic-muted); }
.aic-ds .ds-stat + .ds-stat { padding-top: 34px; border-top: 1.5px solid var(--aic-hair); }

/* right decomposition */
.aic-ds .ds-decomp { display: flex; flex-direction: column; min-width: 0; }
.aic-ds .ds-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }

/* stacked composition bar */
.aic-ds .ds-stack { display: flex; width: 100%; height: 116px; border-radius: 18px; overflow: hidden; gap: 4px; }
.aic-ds .ds-seg { position: relative; display: flex; flex-direction: column; justify-content: center; padding: 0 24px;
  min-width: 0; transition: opacity .3s, flex-basis .4s cubic-bezier(.3,.7,.4,1); }
.aic-ds .ds-seg:first-child { border-radius: 18px 6px 6px 18px; }
.aic-ds .ds-seg:last-child { border-radius: 6px 18px 18px 6px; }
.aic-ds .ds-seg-pct { font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; line-height: 1;
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; }
.aic-ds .ds-seg-nm { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; margin-top: 6px; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; }

/* donut mode */
.aic-ds .ds-donutwrap { display: flex; align-items: center; justify-content: center; gap: 48px; }
.aic-ds .ds-donut { flex: none; }
.aic-ds .ds-decomp.donut .ds-panel-t { margin-bottom: 14px; }
.aic-ds .ds-decomp.donut .ds-donutwrap { height: 244px; }
.aic-ds .ds-decomp.donut .ds-cards { margin-top: 24px; gap: 16px; }
.aic-ds .ds-decomp.donut .ds-card { padding: 20px 22px; gap: 10px; }
.aic-ds .ds-decomp.donut .ds-card-nm { font-size: 24px; }
.aic-ds .ds-decomp.donut .ds-card-pct { font-size: 50px; }
.aic-ds .ds-decomp.donut .ds-card-note { font-size: 18px; line-height: 1.34; }

/* component cards */
.aic-ds .ds-cards { margin-top: 40px; display: grid; gap: 20px; flex: 1; min-height: 0; }
.aic-ds .ds-card { position: relative; border-radius: 20px; padding: 26px 28px; background: var(--aic-card);
  border: 1.5px solid var(--aic-hair); display: flex; flex-direction: column; justify-content: space-between; gap: 14px;
  transition: border-color .3s, box-shadow .3s, transform .3s; overflow: hidden; }
.aic-ds .ds-card[data-focus="1"] { transform: translateY(-6px); border-color: var(--aic-accent);
  box-shadow: 0 24px 56px -30px color-mix(in srgb, var(--aic-accent) 60%, transparent); }
.aic-ds .ds-card-top { display: grid; grid-template-columns: 18px minmax(0, 1fr); align-items: start; gap: 14px; }
.aic-ds .ds-card-swatch { width: 18px; height: 18px; border-radius: 6px; flex: none; }
.aic-ds .ds-card-title { min-width: 0; display: flex; flex-direction: column; gap: 6px; }
.aic-ds .ds-card-nm { font-family: var(--aic-font-text); font-weight: 700; font-size: 27px; line-height: 1.08;
  color: var(--aic-ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.aic-ds .ds-card-en { font-family: var(--aic-font-display); font-weight: 500; font-size: 13px; letter-spacing: .08em;
  text-transform: uppercase; color: var(--aic-faint); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.1; }
.aic-ds .ds-card-pct { font-family: var(--aic-font-display); font-weight: 700; font-size: 58px; line-height: .85; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-ds .ds-card[data-focus="1"] .ds-card-pct { color: var(--aic-accent-deep); }
.aic-ds .ds-card-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; line-height: 1.4; color: var(--aic-muted); }

.aic-ds .ds-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-ds .ds-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-ds .ds-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-ds .ds-deco { width: 300px; height: 30px; }
`,lm=["accent","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Yl(t){let a={...Ul,...t},e={...$l,...Object.fromEntries(Object.entries(a).filter(([,g])=>g!==void 0))};y(),h("aic-ds",cm);let m=w(a.accentColor),i=Math.max(2,Math.min(e.components.length,a.componentCount)),s=e.components.slice(0,i),l=s.reduce((g,u)=>g+u.pct,0)||1,f=Math.max(0,Math.min(i-1,a.focusIndex)),p=a.chartType==="donut",d=a.showStats?"0.74fr 1.26fr":"1fr",n=`repeat(${Math.min(i,4)}, 1fr)`,o=s.map((g,u)=>({value:g.pct,color:jt[u%jt.length],label:g.name})),r=s[f];return ge("div",{className:"aic-ds",style:m,children:[a.showDecorations&&La("div",{className:"ds-glow"}),ge("div",{className:"ds-head",children:[ge("div",{children:[La("p",{className:"ds-eyebrow",children:e.eyebrow}),ge("h2",{className:"ds-title",children:[e.title,ge("em",{children:["\xB7 ",e.titleTail]})]})]}),La("div",{className:"ds-sub",children:e.sub})]}),La("p",{className:"ds-lead",children:e.lead}),ge("div",{className:"ds-body",style:{gridTemplateColumns:d},children:[a.showStats&&La("div",{className:"ds-rail",children:e.stats.map(g=>ge("div",{className:"ds-stat",children:[ge("span",{className:"ds-stat-v",children:[La("b",{children:g.value}),La("u",{children:g.unit})]}),La("span",{className:"ds-stat-l",children:g.label})]},g.label))}),ge("div",{className:"ds-decomp "+(p?"donut":"stack"),children:[La("p",{className:"ds-panel-t",children:e.panelTitle}),p?La("div",{className:"ds-donutwrap",children:La("div",{className:"ds-donut",children:La(et,{segments:o,size:240,thickness:42,focusIndex:a.focusEnabled?f:-1,centerTop:a.focusEnabled?r.pct+"%":i,centerBottom:a.focusEnabled?r.name:"構成項"})})}):La("div",{className:"ds-stack",children:s.map((g,u)=>{let v=a.focusEnabled&&u!==f,z=u===0;return ge("div",{className:"ds-seg",style:{flex:`${g.pct/l*100} 1 0`,background:jt[u%jt.length],opacity:v?.5:1,color:u<2?"var(--aic-ink)":"var(--aic-ink-dim)"},children:[ge("span",{className:"ds-seg-pct",children:[g.pct,"%"]}),La("span",{className:"ds-seg-nm",children:g.name})]},g.name)})}),La("div",{className:"ds-cards",style:{gridTemplateColumns:n},children:s.map((g,u)=>ge("div",{className:"ds-card","data-focus":a.focusEnabled&&u===f?"1":"0",children:[ge("div",{className:"ds-card-top",children:[La("span",{className:"ds-card-swatch",style:{background:jt[u%jt.length]}}),ge("span",{className:"ds-card-title",children:[La("span",{className:"ds-card-nm",children:g.name}),La("span",{className:"ds-card-en",children:g.en})]})]}),ge("span",{className:"ds-card-pct",children:[g.pct,"%"]}),La("p",{className:"ds-card-note",children:g.note})]},g.name))})]})]}),ge("div",{className:"ds-foot",children:[ge("div",{className:"ds-closing",children:[La("b",{}),e.closing]}),a.showDecorations&&La("div",{className:"ds-deco",children:La(k,{data:lm,gap:4})})]})]})}var mo={};S(mo,{controls:()=>rm,default:()=>Gl,defaultProps:()=>Xl});import"react";import{jsx as ka,jsxs as ue}from"react/jsx-runtime";var _l={eyebrow:"Investor Mix",title:"資本來源結構",titleTail:"投資人型別分佈",sub:"投資人型別分佈",marker:"投資人型別",lead:"傳統 VC\u3001企業戰略投資者\u3001成長基金和雲廠商共同推動 AI 大額融資\uFF1BAI 融資已經從純 VC 交易轉向產業資本混合交易\u3002",closing:"錢的來源本身也是產業結構訊號\u3002",panelTitle:"投資人型別佔比",timelineLabel:"資本來源演進 \xB7 2020 \u2014 2024",segments:[{label:"傳統 VC",value:42,note:"經典風險投資基金"},{label:"企業戰略",value:27,note:"產業方戰略投資者"},{label:"成長基金",value:18,note:"後期成長與跨界基金"},{label:"雲廠商相關",value:13,note:"雲廠商及關聯資本"}],nodes:[{year:"2020",title:"VC 主導",note:"經典風險投資定義估值錨"},{year:"2021 \u2014 22",title:"成長基金跟進",note:"後期資金開始放大單筆規模"},{year:"2023",title:"戰略資本進入",note:"大廠與產業方開始戰略持股"},{year:"2024 H1",title:"雲資源入局",note:"算力額度成為交易條件"},{year:"2024 H2",title:"產業資本混合",note:"VC 與產業資本共同主導大額輪"}]},Pt=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 60%, white)","color-mix(in srgb, var(--aic-accent) 38%, white)","var(--aic-hair-strong)"],Xl={..._l,chartType:"donut",segmentCount:4,focusEnabled:!0,focusIndex:0,showLegend:!0,showTimeline:!0,nodeCount:3,showDecorations:!0,accentColor:c.accent},rm=[{key:"eyebrow",label:"眉標",type:"text",default:"Investor Mix"},{key:"title",label:"標題",type:"text",default:"資本來源結構"},{key:"titleTail",label:"副標題",type:"text",default:"投資人型別分佈"},{key:"sub",label:"次標題",type:"text",default:"投資人型別分佈"},{key:"marker",label:"marker",type:"text",default:"投資人型別"},{key:"lead",label:"導言",type:"text",default:"傳統 VC\u3001企業戰略投資者\u3001成長基金和雲廠商共同推動 AI 大額融資\uFF1BAI 融資已經從純 VC 交易轉向產業資本混合交易\u3002"},{key:"closing",label:"結語",type:"text",default:"錢的來源本身也是產業結構訊號\u3002"},{key:"panelTitle",label:"panelTitle",type:"text",default:"投資人型別佔比"},{key:"timelineLabel",label:"timelineLabel",type:"text",default:"資本來源演進 \xB7 2020 \u2014 2024"},{key:"chartType",label:"圖表型別",type:"radio",default:"donut",options:[{value:"donut",label:"環形圖"},{value:"bars",label:"佔比條"}],description:"投資人型別佔比圖表樣式\uFF1A環形圖 / 佔比條\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"投資人型別分段數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一類投資人作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的投資人型別\u3002",showWhen:t=>t.focusEnabled},{key:"showLegend",label:"圖例",type:"toggle",default:!0,description:"環形圖右側圖例列表的顯隱\u3002",showWhen:t=>t.chartType==="donut"},{key:"showTimeline",label:"階段時間軸",type:"toggle",default:!0,description:"底部資本來源演進時間軸的顯隱\u3002"},{key:"nodeCount",label:"節點數量",type:"slider",default:3,min:2,max:5,step:1,description:"時間軸上的階段節點數量\uFF082\u20135\uFF09\u3002",showWhen:t=>t.showTimeline},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於圖表\u3001高亮投資人型別與時間軸節點\u3002"}],sm=`
.aic-imx { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-imx, .aic-imx * { box-sizing: border-box; }
.aic-imx .im-glow { position: absolute; left: 12%; top: -8%; width: 48%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-imx .im-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-imx .im-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-imx .im-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0;
  display: flex; align-items: baseline; gap: 22px; }
.aic-imx .im-title em { font-style: normal; font-weight: 500; font-size: 34px; color: var(--aic-ink-dim); letter-spacing: .02em; }
.aic-imx .im-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

.aic-imx .im-main { position: absolute; left: var(--pad); right: var(--pad); top: 304px;
  display: grid; grid-template-columns: 1.16fr 0.84fr; gap: 64px; }

/* chart (left) */
.aic-imx .im-chartwrap { display: flex; flex-direction: column; min-width: 0; }
.aic-imx .im-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 22px; }
.aic-imx .im-chart { display: flex; align-items: center; gap: 52px; min-height: 0; }
.aic-imx .im-donut { flex: none; }
.aic-imx .im-legend { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.aic-imx .im-leg { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px;
  padding-bottom: 16px; border-bottom: 1.5px solid var(--aic-hair); transition: opacity .3s; }
.aic-imx .im-leg:last-child { border-bottom: none; }
.aic-imx .im-leg i { width: 18px; height: 18px; border-radius: 5px; flex: none; }
.aic-imx .im-leg-lbl { display: flex; flex-direction: column; gap: 2px; }
.aic-imx .im-leg-lbl b { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); }
.aic-imx .im-leg-lbl span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); }
.aic-imx .im-leg-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 34px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-imx .im-leg[data-focus="1"] .im-leg-v { color: var(--aic-accent-deep); }
.aic-imx .im-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 28px; padding-right: 12px; }

/* content (right) */
.aic-imx .im-side { display: flex; flex-direction: column; padding-top: 6px; }
.aic-imx .im-marker { display: flex; align-items: center; gap: 16px; }
.aic-imx .im-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-imx .im-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-imx .im-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 20px 0 0; text-wrap: pretty; }

/* evolution timeline (bottom, full width) */
.aic-imx .im-tl { position: absolute; left: var(--pad); right: var(--pad); bottom: 124px; }
.aic-imx .im-tl-cap { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 26px; }
.aic-imx .im-tl-track { position: relative; height: 2px; background: var(--aic-hair-strong); }
.aic-imx .im-tl-track::after { content: ''; position: absolute; right: -2px; top: -5px; border: 6px solid transparent;
  border-left-color: var(--aic-ink); }
.aic-imx .im-tl-nodes { display: grid; }
.aic-imx .im-tl-node { position: relative; padding-top: 30px; }
.aic-imx .im-tl-node::before { content: ''; position: absolute; top: -7px; left: 0; width: 16px; height: 16px;
  border-radius: 50%; background: var(--aic-paper); border: 4px solid var(--aic-accent); }
.aic-imx .im-tl-year { font-family: var(--aic-font-display); font-weight: 700; font-size: 28px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-imx .im-tl-ttl { font-family: var(--aic-font-text); font-weight: 700; font-size: 25px; color: var(--aic-ink); margin: 8px 0 4px; }
.aic-imx .im-tl-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; color: var(--aic-muted); line-height: 1.35; max-width: 300px; }

.aic-imx .im-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-imx .im-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-imx .im-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-imx .im-deco { width: 300px; height: 30px; }
`,pm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Gl(t){let a={...Xl,...t},e={..._l,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-imx",sm);let m=w(a.accentColor),i=Math.max(2,Math.min(e.segments.length,Ta(a.segmentCount,4))),s=e.segments.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(...s.map(r=>r.value)),p=s.map((r,g)=>({value:r.value,color:Pt[g%Pt.length],label:r.label})),d=s[l],n=Math.max(2,Math.min(E(e.nodes).length,Ta(a.nodeCount,3))),o=E(e.nodes).slice(0,n);return ue("div",{className:"aic-imx",style:m,children:[a.showDecorations&&ka("div",{className:"im-glow"}),ue("div",{className:"im-head",children:[ue("div",{children:[ka("p",{className:"im-eyebrow",children:e.eyebrow}),ue("h2",{className:"im-title",children:[e.title,ue("em",{children:["\xB7 ",e.titleTail]})]})]}),ka("div",{className:"im-sub",children:e.sub})]}),ue("div",{className:"im-main",style:{bottom:a.showTimeline?326:150},children:[ue("div",{className:"im-chartwrap",children:[ka("p",{className:"im-panel-t",children:e.panelTitle}),a.chartType==="donut"?ue("div",{className:"im-chart",children:[ka("div",{className:"im-donut",children:ka(et,{segments:p,size:300,thickness:50,focusIndex:a.focusEnabled?l:-1,centerTop:a.focusEnabled?(d?.value??0)+"%":i,centerBottom:a.focusEnabled?d?.label??"":"投資人型別"})}),a.showLegend&&ka("div",{className:"im-legend",children:s.map((r,g)=>ue("div",{className:"im-leg","data-focus":a.focusEnabled&&g===l?"1":"0",style:{opacity:a.focusEnabled&&g!==l?.55:1},children:[ka("i",{style:{background:Pt[g%Pt.length]}}),ue("div",{className:"im-leg-lbl",children:[ka("b",{children:r.label}),ka("span",{children:r.note})]}),ue("div",{className:"im-leg-v",children:[r.value,"%"]})]},r.label))})]}):ka("div",{className:"im-bars",children:s.map((r,g)=>ka(he,{label:r.label,display:r.value+"%",value:r.value/f*100,color:Pt[g%Pt.length],focus:a.focusEnabled&&g===l,dim:a.focusEnabled&&g!==l},r.label))})]}),ue("div",{className:"im-side",children:[ue("div",{className:"im-marker",children:[ka("b",{}),ka("span",{children:e.marker})]}),ka("p",{className:"im-lead",children:e.lead})]})]}),a.showTimeline&&ue("div",{className:"im-tl",children:[ka("p",{className:"im-tl-cap",children:e.timelineLabel}),ka("div",{className:"im-tl-track"}),ka("div",{className:"im-tl-nodes",style:{gridTemplateColumns:`repeat(${n}, 1fr)`},children:o.map(r=>ue("div",{className:"im-tl-node",children:[ka("span",{className:"im-tl-year",children:r.year}),ka("div",{className:"im-tl-ttl",children:r.title}),ka("div",{className:"im-tl-note",children:r.note})]},r.year))})]}),ue("div",{className:"im-foot",children:[ue("div",{className:"im-closing",children:[ka("b",{}),e.closing]}),a.showDecorations&&ka("div",{className:"im-deco",children:ka(k,{data:pm,gap:4})})]})]})}var go={};S(go,{controls:()=>dm,default:()=>Zl,defaultProps:()=>Jl});import"react";import{jsx as W,jsxs as De}from"react/jsx-runtime";var Kl={eyebrow:"Strategic Investors",segment:"戰略投資者角色",title:"錢以外的資源",titleTail:"戰略投資者角色",lead:"戰略投資者提供渠道\u3001雲資源\u3001晶片供應和客戶入口\uFF1B交易真正價值經常不只在現金\uFF0C而在關鍵資源繫結\u3002",statLine:"資源繫結是大額融資的隱性條款",closing:"AI 公司融資是在鎖定未來資源\u3002",badge:"戰略資源",panelTitle:"戰略資源構成",cards:[{glyph:"雲",label:"雲資源授信",value:"118",unit:"億美元",note:"雲算力額度與折扣承諾",w:1},{glyph:"銷",label:"聯合銷售",value:"36",unit:"起",note:"戰略客戶渠道與轉介",w:.62},{glyph:"芯",label:"晶片供應承諾",value:"22",unit:"起",note:"GPU / 加速卡優先供給",w:.46},{glyph:"數",label:"資料合作",value:"17",unit:"起",note:"訓練與評測資料互通",w:.38}]},Ql={portrait:3/4,landscape:4/3,square:1,auto:null},Jl={...Kl,imageCount:1,images:[],imageRatio:"auto",cardCount:4,focusEnabled:!0,focusIndex:0,showMeter:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},dm=[{key:"eyebrow",label:"眉標",type:"text",default:"Strategic Investors"},{key:"segment",label:"segment",type:"text",default:"戰略投資者角色"},{key:"title",label:"標題",type:"text",default:"錢以外的資源"},{key:"titleTail",label:"副標題",type:"text",default:"戰略投資者角色"},{key:"lead",label:"導言",type:"text",default:"戰略投資者提供渠道\u3001雲資源\u3001晶片供應和客戶入口\uFF1B交易真正價值經常不只在現金\uFF0C而在關鍵資源繫結\u3002"},{key:"statLine",label:"statLine",type:"text",default:"資源繫結是大額融資的隱性條款"},{key:"closing",label:"結語",type:"text",default:"AI 公司融資是在鎖定未來資源\u3002"},{key:"badge",label:"badge",type:"text",default:"戰略資源"},{key:"panelTitle",label:"panelTitle",type:"text",default:"戰略資源構成"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"images",label:"圖片",type:"images",countKey:"imageCount",description:"主視覺區可替換圖片\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"auto",options:[{value:"landscape",label:"橫圖"},{value:"portrait",label:"豎圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"cardCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"資源型別卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張資源卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的資源卡\u3002",showWhen:t=>t.focusEnabled},{key:"showMeter",label:"強度條",type:"toggle",default:!0,description:"資源卡底部資源強度示意條的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於資源標記\u3001強度條與高亮卡\u3002"}],fm=`
.aic-res { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-res, .aic-res * { box-sizing: border-box; }
.aic-res .rs-glow { position: absolute; left: 18%; top: -8%; width: 46%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-res .rs-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-res .rs-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-res .rs-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-res .rs-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* resource card grid (left) */
.aic-res .rs-panel { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 880px;
  display: flex; flex-direction: column; }
.aic-res .rs-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 20px; }
.aic-res .rs-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 22px; min-height: 0; }
.aic-res .rs-grid[data-single="1"] { grid-template-columns: 1fr; }
.aic-res .rs-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 22px;
  background: var(--aic-card); padding: 28px 30px; overflow: hidden; display: flex; flex-direction: column;
  transition: border-color .3s, background .3s, box-shadow .3s; }
.aic-res .rs-card[data-focus="1"] { border-color: transparent;
  background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 16%, var(--aic-card)), var(--aic-card) 76%);
  box-shadow: 0 24px 50px -30px color-mix(in srgb, var(--aic-accent) 70%, transparent); }
.aic-res .rs-card[data-focus="1"]::after { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
  background: var(--aic-accent); }
.aic-res .rs-card-top { display: flex; align-items: center; gap: 14px; }
.aic-res .rs-glyph { width: 46px; height: 46px; border-radius: 13px; flex: none; display: grid; place-items: center;
  background: var(--aic-accent-soft); color: var(--aic-accent-deep); font-family: var(--aic-font-text);
  font-weight: 900; font-size: 22px; }
.aic-res .rs-card[data-focus="1"] .rs-glyph { background: var(--aic-accent); color: var(--aic-ink); }
.aic-res .rs-card-lbl { font-family: var(--aic-font-text); font-weight: 700; font-size: 25px; color: var(--aic-ink); }
.aic-res .rs-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 56px; line-height: 1;
  color: var(--aic-ink); margin-top: 16px; font-variant-numeric: tabular-nums; }
.aic-res .rs-card[data-focus="1"] .rs-card-val { color: var(--aic-accent-deep); }
.aic-res .rs-card-val u { text-decoration: none; font-size: 21px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }
.aic-res .rs-card-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted);
  margin-top: 8px; }
.aic-res .rs-meter { margin-top: auto; padding-top: 18px; }
.aic-res .rs-meter-track { height: 8px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-res .rs-meter-fill { height: 100%; border-radius: 999px; background: var(--aic-accent);
  transition: width .5s cubic-bezier(.3,.7,.4,1); }
.aic-res .rs-card[data-focus="0"] .rs-meter-fill { background: var(--aic-hair-strong); }

/* content + hero column (right) */
.aic-res .rs-side { position: absolute; left: 1052px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-res .rs-marker { display: flex; align-items: center; gap: 16px; }
.aic-res .rs-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-res .rs-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-res .rs-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 12px; text-wrap: pretty; }
.aic-res .rs-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-res .rs-hero { margin-top: 24px; flex: 1; display: flex; gap: 16px; min-height: 0; }
.aic-res .rs-cell { position: relative; overflow: hidden; border-radius: 24px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-res .rs-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-res .rs-cell.fixed .rs-frame { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-res .rs-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-res .rs-cell.auto { align-items: center; justify-items: stretch; }
.aic-res .rs-cell.auto .rs-frame { height: auto; width: 100%; }
.aic-res .rs-cell.auto .rs-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-res .rs-badge { position: absolute; top: 16px; left: 16px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-res .rs-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-res .rs-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-res .rs-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-res .rs-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-res .rs-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-res .rs-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-res .rs-deco { width: 300px; height: 30px; }
`,mm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function gm({i:t}){let a="rsph-"+t;return De("div",{className:"rs-ph",children:[De("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[W("defs",{children:De("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[W("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),W("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),W("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),W("span",{className:"rs-ph-cap",children:`image_slot_${t+1}`})]})}function Zl(t){let a={...Jl,...t},e={...Kl,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-res",fm);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.cardCount)),s=e.cards.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(0,Math.min(2,a.imageCount)),p=Ql.hasOwnProperty(a.imageRatio)?a.imageRatio:"auto",d=Ql[p],n=d==null,o=n?4/3:d;return De("div",{className:"aic-res",style:m,children:[a.showDecorations&&W("div",{className:"rs-glow"}),De("div",{className:"rs-head",children:[De("div",{children:[W("p",{className:"rs-eyebrow",children:e.eyebrow}),W("h2",{className:"rs-title",children:e.title})]}),W("div",{className:"rs-sub",children:e.titleTail})]}),De("div",{className:"rs-panel",children:[W("p",{className:"rs-panel-t",children:e.panelTitle}),W("div",{className:"rs-grid","data-single":i<=2?"1":"0",children:s.map((r,g)=>De("div",{className:"rs-card","data-focus":a.focusEnabled&&g===l?"1":"0",children:[De("div",{className:"rs-card-top",children:[W("span",{className:"rs-glyph",children:r.glyph}),W("span",{className:"rs-card-lbl",children:r.label})]}),De("div",{className:"rs-card-val",children:[r.value,W("u",{children:r.unit})]}),W("div",{className:"rs-card-note",children:r.note}),a.showMeter&&W("div",{className:"rs-meter",children:W("div",{className:"rs-meter-track",children:W("div",{className:"rs-meter-fill",style:{width:Math.round(r.w*100)+"%"}})})})]},r.label))})]}),De("div",{className:"rs-side",children:[De("div",{className:"rs-marker",children:[W("b",{}),W("span",{children:e.segment})]}),W("p",{className:"rs-lead",children:e.lead}),W("div",{className:"rs-statline",children:e.statLine}),W("div",{className:"rs-hero",children:f===0?W("div",{className:"rs-cell fixed",children:W("div",{className:"rs-frame",style:{"--ar":String(o)},children:W("div",{className:"rs-deco-fill",children:W(A,{})})})}):Array.from({length:f}).map((r,g)=>De("div",{className:"rs-cell "+(n?"auto":"fixed"),children:[a.showDecorations&&g===0&&W("span",{className:"rs-badge",children:e.badge}),W("div",{className:"rs-frame",style:n?null:{"--ar":String(d)},children:a.renderSlot?a.renderSlot(g,{ratio:p,ratioAR:d,adaptiveMedia:n,fallbackRatio:o}):W(gm,{i:g})})]},g))})]}),De("div",{className:"rs-foot",children:[De("div",{className:"rs-closing",children:[W("b",{}),e.closing]}),a.showDecorations&&W("div",{className:"rs-deco",children:W(k,{data:mm,gap:4})})]})]})}var xo={};S(xo,{controls:()=>um,default:()=>ir,defaultProps:()=>tr});import uo from"react";import{jsx as R,jsxs as Ha}from"react/jsx-runtime";var er={eyebrow:"Cloud Alliances",segment:"雲廠商聯盟",title:"投資與算力消費閉環",titleTail:"雲廠商聯盟",lead:"雲廠商投資 AI 公司\uFF0C並透過算力消費回收價值\uFF1B雲投資本質上是在鎖定未來算力需求\u3002",closing:"雲資源正在成為融資交易的一部分\u3002",chartTitle:"雲廠商 \xB7 模型公司聯盟",barsTitle:"雲廠商相關投資 / 佔比",totalVal:"252",totalUnit:"億美元",totalLbl:"雲廠商相關投資合計",hub:{lead:"AI 模型公司",sub:"算力需求方"},cycle:["資本投資","算力授信","消費回收"],legendInvest:"資本投資",legendReturn:"算力消費回收",providers:[{label:"Azure",value:88,note:"Microsoft 雲"},{label:"AWS",value:74,note:"Amazon 雲"},{label:"Google Cloud",value:69,note:"Google 雲"},{label:"Oracle Cloud",value:21,note:"Oracle 雲"}]},tr={...er,providerCount:4,chartType:"map",focusEnabled:!0,focusIndex:0,showLoop:!0,showValues:!0,showDecorations:!0,accentColor:c.accent},um=[{key:"eyebrow",label:"眉標",type:"text",default:"Cloud Alliances"},{key:"segment",label:"segment",type:"text",default:"雲廠商聯盟"},{key:"title",label:"標題",type:"text",default:"投資與算力消費閉環"},{key:"titleTail",label:"副標題",type:"text",default:"雲廠商聯盟"},{key:"lead",label:"導言",type:"text",default:"雲廠商投資 AI 公司\uFF0C並透過算力消費回收價值\uFF1B雲投資本質上是在鎖定未來算力需求\u3002"},{key:"closing",label:"結語",type:"text",default:"雲資源正在成為融資交易的一部分\u3002"},{key:"chartTitle",label:"chartTitle",type:"text",default:"雲廠商 \xB7 模型公司聯盟"},{key:"barsTitle",label:"barsTitle",type:"text",default:"雲廠商相關投資 / 佔比"},{key:"totalVal",label:"totalVal",type:"text",default:"252"},{key:"totalUnit",label:"totalUnit",type:"text",default:"億美元"},{key:"totalLbl",label:"totalLbl",type:"text",default:"雲廠商相關投資合計"},{key:"legendInvest",label:"legendInvest",type:"text",default:"資本投資"},{key:"legendReturn",label:"legendReturn",type:"text",default:"算力消費回收"},{key:"providerCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"雲廠商節點數量\uFF082\u20134\uFF09\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"map",options:[{value:"map",label:"關係圖"},{value:"bars",label:"佔比條"}],description:"主圖表樣式\uFF1A聯盟關係圖 / 投資佔比條\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個雲廠商作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的雲廠商\u3002",showWhen:t=>t.focusEnabled},{key:"showLoop",label:"迴路標識",type:"toggle",default:!0,description:"算力消費回收的迴路連線與閉環說明顯隱\u3002",showWhen:t=>t.chartType==="map"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"節點 / 連線上的投資數值標籤顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於廠商節點\u3001投資連線與高亮節點\u3002"}],xm=`
.aic-ally { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-ally, .aic-ally * { box-sizing: border-box; }
.aic-ally .al-glow { position: absolute; right: -4%; top: -10%; width: 54%; height: 60%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-ally .al-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-ally .al-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-ally .al-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-ally .al-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left rail */
.aic-ally .al-rail { position: absolute; left: var(--pad); top: 312px; bottom: 150px; width: 660px;
  display: flex; flex-direction: column; }
.aic-ally .al-marker { display: flex; align-items: center; gap: 16px; }
.aic-ally .al-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-ally .al-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-ally .al-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 0; text-wrap: pretty; }
.aic-ally .al-anchor { margin-top: 40px; }
.aic-ally .al-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 116px; line-height: .82;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; display: flex; align-items: baseline; }
.aic-ally .al-anchor-v u { text-decoration: none; font-size: 34px; font-weight: 600; color: var(--aic-ink-dim); margin-left: 10px; }
.aic-ally .al-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 22px; color: var(--aic-muted); margin-top: 10px; }
.aic-ally .al-cycle { margin-top: 34px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.aic-ally .al-cycle-step { display: flex; align-items: center; gap: 10px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 19px; color: var(--aic-ink); padding: 9px 16px; border-radius: 999px;
  background: var(--aic-card); border: 1.5px solid var(--aic-hair-strong); white-space: nowrap; }
.aic-ally .al-cycle-step i { width: 9px; height: 9px; border-radius: 50%; background: var(--aic-accent); }
.aic-ally .al-cycle-arrow { color: var(--aic-faint); font-weight: 700; font-size: 20px; }
.aic-ally .al-closing { margin-top: auto; display: flex; align-items: center; gap: 16px;
  font-family: var(--aic-font-text); font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-ally .al-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }

/* right chart panel */
.aic-ally .al-panel { position: absolute; left: 800px; right: var(--pad); top: 312px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-ally .al-panel-t { display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-ally .al-legend { display: flex; align-items: center; gap: 22px; }
.aic-ally .al-leg { display: flex; align-items: center; gap: 8px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 16px; letter-spacing: 0; text-transform: none; color: var(--aic-muted); }
.aic-ally .al-leg i { width: 26px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-ally .al-leg i.ret { height: 0; border-top: 3px dashed var(--aic-ink-dim); border-radius: 0; background: none; }
.aic-ally .al-map { flex: 1; min-height: 0; display: grid; place-items: center; }
.aic-ally .al-map svg { width: 100%; height: 100%; display: block; }
.aic-ally .al-pname { font-family: var(--aic-font-text); font-weight: 700; fill: var(--aic-ink); }
.aic-ally .al-pname.dim { fill: var(--aic-muted); }
.aic-ally .al-pnote { font-family: var(--aic-font-text); font-weight: 500; fill: var(--aic-muted); }
.aic-ally .al-pval { font-family: var(--aic-font-display); font-weight: 700; fill: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-ally .al-hubt { font-family: var(--aic-font-display); font-weight: 700; fill: #fff; }
.aic-ally .al-hubs { font-family: var(--aic-font-display); font-weight: 600; fill: rgba(255,255,255,.72); letter-spacing: .1em; }
.aic-ally .al-retlbl { font-family: var(--aic-font-display); font-weight: 600; fill: var(--aic-ink-dim); }

/* bars mode */
.aic-ally .al-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 34px; padding-right: 10px; }

.aic-ally .al-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: flex-end; }
.aic-ally .al-deco { width: 300px; height: 30px; }
`,vm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t})),ar=["var(--aic-accent)","color-mix(in srgb, var(--aic-accent) 64%, white)","color-mix(in srgb, var(--aic-accent) 44%, white)","var(--aic-hair-strong)"];function hm({copy:t,providers:a,focus:e,focusEnabled:m,showLoop:i,showValues:s}){let o=L(a.map(x=>x.value),1),r=16,g=250,u=96,v=40,z=450-v,N=a.map((x,b)=>{let C=a.length===1?v+z/2:v+z/(a.length-1)*b+u/2,T=r+g,ja=C,F=T-752,q=ja-296,lt=Math.hypot(F,q)||1,Xt=752+118*F/lt,Gt=296+118*q/lt,Qt=5+M(x.value,o)*22;return{...x,py:C,sx:T,sy:ja,tx:Xt,ty:Gt,w:Qt,on:m&&b===e}});return Ha("svg",{viewBox:"0 0 980 600",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",children:[i&&Ha("g",{children:[R("path",{d:`M 752 414 C 712 574, ${r+120} 582, ${r+70} 544`,fill:"none",stroke:"var(--aic-ink-dim)",strokeWidth:"2.5",strokeDasharray:"3 9",markerEnd:"url(#al-arrow)"}),R("text",{className:"al-retlbl",x:(752+r)/2,y:592,textAnchor:"middle",style:{fontSize:18},children:"\u2190 "+t.legendReturn})]}),R("defs",{children:R("marker",{id:"al-arrow",markerWidth:"10",markerHeight:"10",refX:"6",refY:"3",orient:"auto",markerUnits:"strokeWidth",children:R("path",{d:"M0 0 L6 3 L0 6 Z",fill:"var(--aic-ink-dim)"})})}),N.map((x,b)=>R("path",{d:`M ${x.sx} ${x.sy} C ${(x.sx+x.tx)/2} ${x.sy}, ${(x.sx+x.tx)/2} ${x.ty}, ${x.tx} ${x.ty}`,fill:"none",strokeLinecap:"round",strokeWidth:x.w,stroke:x.on?"var(--aic-accent)":"color-mix(in srgb, var(--aic-accent) 30%, white)",opacity:m&&!x.on?.7:1},"c"+b)),N.map((x,b)=>Ha("g",{children:[R("rect",{x:r,y:x.py-u/2,width:g,height:u,rx:"20",fill:"var(--aic-card)",stroke:x.on?"var(--aic-accent)":"var(--aic-hair-strong)",strokeWidth:x.on?3:1.5}),R("circle",{cx:r+34,cy:x.py,r:"11",fill:x.on?"var(--aic-accent)":"var(--aic-ink)"}),R("text",{className:"al-pname"+(m&&!x.on?" dim":""),x:r+56,y:x.py-8,style:{fontSize:25},children:x.label}),R("text",{className:"al-pnote",x:r+56,y:x.py+20,style:{fontSize:16},children:x.note}),s&&R("text",{className:"al-pval",x:r+g-18,y:x.py+6,textAnchor:"end",style:{fontSize:30},children:x.value})]},"p"+b)),R("circle",{cx:752,cy:296,r:118,fill:"var(--aic-ink)"}),R("circle",{cx:752,cy:296,r:109,fill:"none",stroke:"var(--aic-accent)",strokeWidth:"2.5",opacity:"0.9"}),R("text",{className:"al-hubt",x:752,y:288,textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:30},children:t.hub.lead}),R("text",{className:"al-hubs",x:752,y:324,textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:17},children:t.hub.sub})]})}function ir(t){let a={...tr,...t},e={...er,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-ally",xm);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.providerCount)),s=e.providers.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(p=>p.value),1);return Ha("div",{className:"aic-ally",style:m,children:[a.showDecorations&&R("div",{className:"al-glow"}),Ha("div",{className:"al-head",children:[Ha("div",{children:[R("p",{className:"al-eyebrow",children:e.eyebrow}),R("h2",{className:"al-title",children:e.title})]}),R("div",{className:"al-sub",children:e.titleTail})]}),Ha("div",{className:"al-rail",children:[Ha("div",{className:"al-marker",children:[R("b",{}),R("span",{children:e.segment})]}),R("p",{className:"al-lead",children:e.lead}),Ha("div",{className:"al-anchor",children:[Ha("div",{className:"al-anchor-v",children:[e.totalVal,R("u",{children:e.totalUnit})]}),R("div",{className:"al-anchor-l",children:e.totalLbl})]}),R("div",{className:"al-cycle",children:e.cycle.map((p,d)=>Ha(uo.Fragment,{children:[Ha("span",{className:"al-cycle-step",children:[R("i",{}),p]}),d<e.cycle.length-1&&R("span",{className:"al-cycle-arrow",children:"\u2192"})]},p))}),Ha("div",{className:"al-closing",children:[R("b",{}),e.closing]})]}),R("div",{className:"al-panel",children:a.chartType==="map"?Ha(uo.Fragment,{children:[Ha("div",{className:"al-panel-t",children:[R("span",{children:e.chartTitle}),Ha("div",{className:"al-legend",children:[Ha("span",{className:"al-leg",children:[R("i",{}),e.legendInvest]}),a.showLoop&&Ha("span",{className:"al-leg",children:[R("i",{className:"ret"}),e.legendReturn]})]})]}),R("div",{className:"al-map",children:R(hm,{copy:e,providers:s,focus:l,focusEnabled:a.focusEnabled,showLoop:a.showLoop,showValues:a.showValues})})]}):Ha(uo.Fragment,{children:[Ha("div",{className:"al-panel-t",children:[R("span",{children:e.barsTitle}),R("span",{style:{letterSpacing:".06em"},children:"億美元"})]}),R("div",{className:"al-bars",children:s.map((p,d)=>R(he,{label:p.label,display:a.showValues?p.value+" 億":"",value:M(p.value,f)*100,color:ar[d%ar.length],focus:a.focusEnabled&&d===l,dim:a.focusEnabled&&d!==l},p.label))})]})}),R("div",{className:"al-foot",children:a.showDecorations&&R("div",{className:"al-deco",children:R(k,{data:vm,gap:4})})})]})}var vo={};S(vo,{controls:()=>bm,default:()=>lr,defaultProps:()=>cr});import"react";import{jsx as P,jsxs as Be}from"react/jsx-runtime";var nr={eyebrow:"NVIDIA Ecosystem",segment:"NVIDIA 生態",title:"GPU 資源鏈條",titleTail:"NVIDIA 生態",lead:"NVIDIA 生態內融資圍繞 GPU\u3001網路\u3001叢集運維和推理最佳化展開\uFF1B誰能穩定拿到算力\uFF0C誰就更容易獲得下一輪資本\u3002",statLine:"以 GPU 為中心的資源鏈條",closing:"算力供給能力正在變成融資能力\u3002",badge:"GPU 生態",panelTitle:"生態融資分佈",hub:{lead:"GPU",sub:"NVIDIA 生態"},legend:"節點大小 \xB7 數值 = 融資額\uFF08億美元\uFF09",nodes:[{label:"GPU 雲",value:64},{label:"叢集管理",value:12},{label:"推理最佳化",value:9},{label:"晶片互聯",value:7}]},or={portrait:3/4,landscape:4/3,square:1,auto:null,normal:null},cr={...nr,imageCount:1,imageRatio:"auto",images:[],segmentCount:4,focusEnabled:!0,focusIndex:0,showSpokes:!0,showValues:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},bm=[{key:"eyebrow",label:"眉標",type:"text",default:"NVIDIA Ecosystem"},{key:"segment",label:"segment",type:"text",default:"NVIDIA 生態"},{key:"title",label:"標題",type:"text",default:"GPU 資源鏈條"},{key:"titleTail",label:"副標題",type:"text",default:"NVIDIA 生態"},{key:"lead",label:"導言",type:"text",default:"NVIDIA 生態內融資圍繞 GPU\u3001網路\u3001叢集運維和推理最佳化展開\uFF1B誰能穩定拿到算力\uFF0C誰就更容易獲得下一輪資本\u3002"},{key:"statLine",label:"statLine",type:"text",default:"以 GPU 為中心的資源鏈條"},{key:"closing",label:"結語",type:"text",default:"算力供給能力正在變成融資能力\u3002"},{key:"badge",label:"badge",type:"text",default:"GPU 生態"},{key:"panelTitle",label:"panelTitle",type:"text",default:"生態融資分佈"},{key:"legend",label:"legend",type:"text",default:"節點大小 \xB7 數值 = 融資額\uFF08億美元\uFF09"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"auto",options:[{value:"auto",label:"自適應"},{value:"normal",label:"正常比例"},{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"}],description:"圖片槽比例\uFF1B自適應裁剪填滿版面\uFF0C正常比例按上傳媒體原始比例顯示\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"生態環上的節點數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個生態節點作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的生態節點\u3002",showWhen:t=>t.focusEnabled},{key:"showSpokes",label:"連線線",type:"toggle",default:!0,description:"中心 GPU 節點到各生態節點的連線線顯隱\u3002"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"節點內融資數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於生態節點\u3001連線線與高亮節點\u3002"}],ym=`
.aic-eco { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-eco, .aic-eco * { box-sizing: border-box; }
.aic-eco .ec-glow { position: absolute; left: 16%; top: -8%; width: 48%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-eco .ec-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-eco .ec-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-eco .ec-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-eco .ec-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* ecosystem ring (left) */
.aic-eco .ec-panel { position: absolute; left: var(--pad); top: 304px; bottom: 150px; width: 880px;
  display: flex; flex-direction: column; }
.aic-eco .ec-panel-t { display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 8px; }
.aic-eco .ec-panel-t em { font-style: normal; font-size: 15px; letter-spacing: .06em; color: var(--aic-faint);
  text-transform: none; }
.aic-eco .ec-ring { flex: 1; min-height: 0; display: grid; place-items: center; }
.aic-eco .ec-ring svg { width: auto; height: 100%; max-width: 100%; display: block; }
.aic-eco .ec-nlabel { font-family: var(--aic-font-text); font-weight: 700; font-size: 22px; fill: var(--aic-ink); }
.aic-eco .ec-nlabel.dim { fill: var(--aic-muted); }
.aic-eco .ec-nval { font-family: var(--aic-font-display); font-weight: 700; fill: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-eco .ec-nval.on { fill: var(--aic-ink); }
.aic-eco .ec-hubt { font-family: var(--aic-font-display); font-weight: 700; fill: #fff; }
.aic-eco .ec-hubs { font-family: var(--aic-font-display); font-weight: 600; fill: rgba(255,255,255,.72);
  letter-spacing: .12em; }

/* content + hero column (right) */
.aic-eco .ec-side { position: absolute; left: 1052px; right: var(--pad); top: 304px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-eco .ec-marker { display: flex; align-items: center; gap: 16px; }
.aic-eco .ec-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-eco .ec-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-eco .ec-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 12px; text-wrap: pretty; }
.aic-eco .ec-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-eco .ec-hero { margin-top: 24px; flex: 1; display: flex; gap: 16px; min-height: 0; }
.aic-eco .ec-cell { position: relative; overflow: hidden; border-radius: 24px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: grid;
  align-items: center; justify-items: center; }
.aic-eco .ec-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-eco .ec-cell.fixed .ec-frame { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-eco .ec-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-eco .ec-cell.normal .ec-frame { height: auto; }
.aic-eco .ec-cell.normal .ec-frame > * {
  position: static; width: 100%; height: auto; display: block;
}
.aic-eco .ec-badge { position: absolute; top: 16px; left: 16px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-eco .ec-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-eco .ec-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-eco .ec-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-eco .ec-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-eco .ec-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-eco .ec-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-eco .ec-deco { width: 300px; height: 30px; }
`,wm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function km({i:t}){let a="ecph-"+t;return Be("div",{className:"ec-ph",children:[Be("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[P("defs",{children:Be("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[P("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),P("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),P("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),P("span",{className:"ec-ph-cap",children:`image_slot_${t+1}`})]})}function Nm({nodes:t,focus:a,focusEnabled:e,showSpokes:m,showValues:i,hub:s}){let d=L(t.map(o=>o.value),1),n=t.map((o,r)=>{let g=(90+r*(360/t.length))*Math.PI/180,u=Math.cos(g),v=Math.sin(g),z=300+184*u,N=300+184*v,x=34+Math.sqrt(M(o.value,d,0))*34;return{...o,x:z,y:N,nr:x,on:e&&r===a,cos:u,sin:v}});return Be("svg",{viewBox:"0 0 600 600","aria-hidden":"true",children:[P("circle",{cx:300,cy:300,r:184,fill:"none",stroke:"var(--aic-hair)",strokeWidth:"1.5",strokeDasharray:"2 9"}),m&&n.map((o,r)=>P("line",{x1:300+80*o.cos,y1:300+80*o.sin,x2:o.x-o.nr*o.cos,y2:o.y-o.nr*o.sin,stroke:o.on?"var(--aic-accent)":"var(--aic-hair-strong)",strokeWidth:o.on?3:2},"s"+r)),n.map((o,r)=>Be("g",{children:[P("circle",{cx:o.x,cy:o.y,r:o.nr,fill:o.on?"var(--aic-accent)":"var(--aic-accent-soft)",stroke:o.on?"var(--aic-accent-deep)":"color-mix(in srgb, var(--aic-accent) 30%, white)",strokeWidth:o.on?3:1.5,opacity:e&&!o.on?.92:1}),i&&P("text",{className:"ec-nval",x:o.x,y:o.y,textAnchor:"middle",dominantBaseline:"central",style:{fontSize:Math.max(22,o.nr*.62)},children:o.value}),P("text",{className:"ec-nlabel"+(e&&!o.on?" dim":""),x:o.x,y:o.y+o.nr+26,textAnchor:"middle",children:o.label})]},"n"+r)),P("circle",{cx:300,cy:300,r:80,fill:"var(--aic-ink)"}),P("circle",{cx:300,cy:300,r:72,fill:"none",stroke:"var(--aic-accent)",strokeWidth:"2.5",opacity:"0.9"}),P("text",{className:"ec-hubt",x:300,y:294,textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:46},children:s.lead}),P("text",{className:"ec-hubs",x:300,y:330,textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:16},children:s.sub})]})}function lr(t){let a={...cr,...t},e={...nr,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-eco",ym);let m=w(a.accentColor),i=Math.max(2,Math.min(4,a.segmentCount)),s=E(e.nodes).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(0,Math.min(2,a.imageCount)),p=or.hasOwnProperty(a.imageRatio)?a.imageRatio:"auto",d=or[p],n=p==="normal",o=d!=null,r=o?d:3/4,g=n?"normal":o?"fixed":"fill";return Be("div",{className:"aic-eco",style:m,children:[a.showDecorations&&P("div",{className:"ec-glow"}),Be("div",{className:"ec-head",children:[Be("div",{children:[P("p",{className:"ec-eyebrow",children:e.eyebrow}),P("h2",{className:"ec-title",children:e.title})]}),P("div",{className:"ec-sub",children:e.titleTail})]}),Be("div",{className:"ec-panel",children:[Be("p",{className:"ec-panel-t",children:[P("span",{children:e.panelTitle}),P("em",{children:e.legend})]}),P("div",{className:"ec-ring",children:P(Nm,{nodes:s,focus:l,focusEnabled:a.focusEnabled,showSpokes:a.showSpokes,showValues:a.showValues,hub:e.hub})})]}),Be("div",{className:"ec-side",children:[Be("div",{className:"ec-marker",children:[P("b",{}),P("span",{children:e.segment})]}),P("p",{className:"ec-lead",children:e.lead}),P("div",{className:"ec-statline",children:e.statLine}),P("div",{className:"ec-hero",children:f===0?P("div",{className:"ec-cell fixed",children:P("div",{className:"ec-frame",style:{"--ar":String(r)},children:P("div",{className:"ec-deco-fill",children:P(A,{})})})}):Array.from({length:f}).map((u,v)=>Be("div",{className:"ec-cell "+g,children:[a.showDecorations&&v===0&&P("span",{className:"ec-badge",children:e.badge}),P("div",{className:"ec-frame",style:o?{"--ar":String(d)}:null,children:a.renderSlot?a.renderSlot(v,{ratio:n?"auto":p,ratioAR:d,adaptiveMedia:n,preserveVideoRatio:n,fallbackRatio:r}):P(km,{i:v})})]},v))})]}),Be("div",{className:"ec-foot",children:[Be("div",{className:"ec-closing",children:[P("b",{}),e.closing]}),a.showDecorations&&P("div",{className:"ec-deco",children:P(k,{data:wm,gap:4})})]})]})}var ho={};S(ho,{controls:()=>zm,default:()=>pr,defaultProps:()=>sr});import"react";import{jsx as xe,jsxs as yt}from"react/jsx-runtime";var rr={eyebrow:"Bay Area Cluster",title:"最大地理中心",sub:"舊金山灣區叢集",numLead:"63",numTail:".9",numUnit:"%",numCaption:"舊金山灣區融資額佔比",note:"優勢來自人才密度\u3001資本網路\u3001雲廠商和模型實驗室鄰近\u3002",closing:"灣區仍是 AI 資本重力中心\u3002",aux:[{label:"區域融資額",value:"620",unit:"億美元"},{label:"區域事件數",value:"62",unit:"筆"},{label:"平均單筆",value:"10.0",unit:"億美元"}]},sr={...rr,numberSlant:!0,auxCount:3,showCaption:!0,showNote:!0,showLens:!0,showDecorations:!0,accentColor:c.accent},zm=[{key:"eyebrow",label:"眉標",type:"text",default:"Bay Area Cluster"},{key:"title",label:"標題",type:"text",default:"最大地理中心"},{key:"sub",label:"次標題",type:"text",default:"舊金山灣區叢集"},{key:"numLead",label:"numLead",type:"text",default:"63"},{key:"numTail",label:"numTail",type:"text",default:".9"},{key:"numUnit",label:"numUnit",type:"text",default:"%"},{key:"numCaption",label:"numCaption",type:"text",default:"舊金山灣區融資額佔比"},{key:"note",label:"note",type:"text",default:"優勢來自人才密度\u3001資本網路\u3001雲廠商和模型實驗室鄰近\u3002"},{key:"closing",label:"結語",type:"text",default:"灣區仍是 AI 資本重力中心\u3002"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"主數字是否應用品牌斜切\uFF08italic-slant\uFF09效果\u3002"},{key:"auxCount",label:"卡片數量",type:"slider",default:3,min:0,max:3,step:1,description:"輔助指標數量\uFF080\u20133\uFF09\uFF1B為 0 時只保留主數字\u3002"},{key:"showCaption",label:"說明文案",type:"toggle",default:!0,description:"主數字下方解釋性說明的顯隱\u3002"},{key:"showNote",label:"輔助註釋",type:"toggle",default:!0,description:"底部補充註釋的顯隱\u3002"},{key:"showLens",label:"品牌圖形",type:"toggle",default:!0,description:"品牌透鏡圖形\uFF08焦點圓盤\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於主數字點綴\u3001品牌圖形與高亮\u3002"}],Cm=`
.aic-geo { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-geo, .aic-geo * { box-sizing: border-box; }
.aic-geo .ge-glow { position: absolute; left: 38%; top: 26%; width: 56%; height: 64%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 26%, transparent), transparent 72%); }
.aic-geo .ge-lens { position: absolute; right: -90px; top: 200px; width: 760px; height: 760px; opacity: .9; pointer-events: none; }

.aic-geo .ge-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-geo .ge-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-geo .ge-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 60px; line-height: .96; margin: 0; }
.aic-geo .ge-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* hero number block */
.aic-geo .ge-hero { position: absolute; left: var(--pad); top: 330px; right: var(--pad); }
.aic-geo .ge-kicker { display: flex; align-items: center; gap: 16px; margin: 0 0 8px; }
.aic-geo .ge-kicker b { width: 64px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-geo .ge-kicker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-geo .ge-bignum { line-height: .8; }
.aic-geo .ge-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 38px; color: var(--aic-ink-dim);
  margin: 28px 0 0; max-width: 1000px; }

/* supporting metrics */
.aic-geo .ge-aux { position: absolute; left: var(--pad); right: var(--pad); bottom: 232px;
  display: flex; gap: 56px; }
.aic-geo .ge-aux-item { display: flex; flex-direction: column; gap: 8px; padding-left: 24px;
  border-left: 3px solid var(--aic-hair-strong); }
.aic-geo .ge-aux-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); }
.aic-geo .ge-aux-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 52px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-geo .ge-aux-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-geo .ge-note { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 26px; color: var(--aic-muted);
  display: flex; align-items: center; gap: 14px; }
.aic-geo .ge-note::before { content: ''; width: 26px; height: 2px; background: var(--aic-hair-strong); flex: none; }

.aic-geo .ge-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-geo .ge-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-geo .ge-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-geo .ge-deco { width: 300px; height: 30px; }
`,Sm=["pos","accent","pos","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t})),Am=[{x:42,y:36,d:56},{x:66,y:30,d:38},{x:58,y:64,d:48},{x:80,y:58,d:28}];function pr(t){let a={...sr,...t},e={...rr,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-geo",Cm);let m=w(a.accentColor),i=Math.max(0,Math.min(e.aux.length,a.auxCount)),s=e.aux.slice(0,i);return yt("div",{className:"aic-geo",style:m,children:[a.showDecorations&&xe("div",{className:"ge-glow"}),a.showLens&&xe("div",{className:"ge-lens",children:xe(A,{discs:Am})}),yt("div",{className:"ge-head",children:[yt("div",{children:[xe("p",{className:"ge-eyebrow",children:e.eyebrow}),xe("h2",{className:"ge-title",children:e.title})]}),xe("div",{className:"ge-sub",children:e.sub})]}),yt("div",{className:"ge-hero",children:[yt("div",{className:"ge-kicker",children:[xe("b",{}),e.sub]}),xe("div",{className:"ge-bignum",children:xe(ha,{lead:e.numLead,tail:e.numTail,unit:e.numUnit,slant:a.numberSlant,size:380})}),a.showCaption&&xe("p",{className:"ge-caption",children:e.numCaption})]}),i>0&&xe("div",{className:"ge-aux",children:s.map(l=>yt("div",{className:"ge-aux-item",children:[xe("div",{className:"ge-aux-lbl",children:l.label}),yt("div",{className:"ge-aux-val",children:[l.value,xe("u",{children:l.unit})]})]},l.label))}),a.showNote&&xe("div",{className:"ge-note",children:e.note}),yt("div",{className:"ge-foot",children:[yt("div",{className:"ge-closing",children:[xe("b",{}),e.closing]}),a.showDecorations&&xe("div",{className:"ge-deco",children:xe(k,{data:Sm,gap:4})})]})]})}var yo={};S(yo,{controls:()=>Mm,default:()=>ur,defaultProps:()=>gr});import"react";import{jsx as j,jsxs as Ba}from"react/jsx-runtime";var fr=[{k:"灣區",v:63.9},{k:"紐約",v:12.4},{k:"西雅圖",v:9.8},{k:"波士頓",v:7.7},{k:"其他",v:6.2}],bo=[{eyebrow:"New York Cluster",enName:"NEW YORK",segment:"紐約叢集",badge:"紐約叢集",shareIdx:1,rank:2,title:"行業客戶優勢",titleTail:"紐約叢集",lead:"紐約 AI 融資以金融\u3001媒體\u3001企業服務和法律 AI 為主\uFF1B優勢不在基礎模型\uFF0C而在高價值行業客戶\u3002",closing:"行業客戶密度決定垂直應用機會\u3002",tags:["金融","媒體","企業服務","法律 AI","投研"],metrics:[{label:"區域融資額",value:"120",unit:"億美元"},{label:"全美佔比",value:"12.4",unit:"%"},{label:"區域事件數",value:"14",unit:"筆"},{label:"平均單筆",value:"8.6",unit:"億美元"}]},{eyebrow:"Seattle Cluster",enName:"SEATTLE",segment:"西雅圖叢集",badge:"西雅圖叢集",shareIdx:2,rank:3,title:"雲端計算人才外溢",titleTail:"西雅圖叢集",lead:"西雅圖受益於雲端計算生態和大廠工程人才外溢\uFF1B更適合孕育基礎設施\u3001開發者工具和企業 AI\u3002",closing:"雲端計算底座帶來 AI 基礎設施機會\u3002",tags:["基礎設施","開發者工具","企業 AI","雲服務","資料平台"],metrics:[{label:"區域融資額",value:"95",unit:"億美元"},{label:"全美佔比",value:"9.8",unit:"%"},{label:"區域事件數",value:"10",unit:"筆"},{label:"平均單筆",value:"9.5",unit:"億美元"}]},{eyebrow:"Boston Cluster",enName:"BOSTON",segment:"波士頓叢集",badge:"波士頓叢集",shareIdx:3,rank:4,title:"科研與硬科技",titleTail:"波士頓叢集",lead:"波士頓集中在醫療 AI\u3001機器人和硬科技方向\uFF1B高校科研和硬科技轉化構成其長期優勢\u3002",closing:"科研城市更適合長週期技術資產\u3002",tags:["醫療 AI","機器人","硬科技","生物科技","科研轉化"],metrics:[{label:"區域融資額",value:"75",unit:"億美元"},{label:"全美佔比",value:"7.7",unit:"%"},{label:"區域事件數",value:"8",unit:"筆"},{label:"平均單筆",value:"9.4",unit:"億美元"}]},{eyebrow:"Other Regions",enName:"OTHER REGIONS",segment:"其他地區",badge:"其他地區",shareIdx:4,rank:5,title:"分散型應用落地",titleTail:"其他地區",lead:"其他地區融資規模較小\uFF0C但出現行業專用模型和本地化應用機會\uFF1B更適合做行業落地而非通用模型\u3002",closing:"本地行業資源也能形成應用機會\u3002",tags:["行業模型","本地化應用","垂直 SaaS","製造 AI","政企服務"],metrics:[{label:"區域融資額",value:"60",unit:"億美元"},{label:"全美佔比",value:"6.2",unit:"%"},{label:"區域事件數",value:"11",unit:"筆"},{label:"平均單筆",value:"5.5",unit:"億美元"}]}],Em=5,Tm="全美融資額佔比",mr={share:fr,regions:bo,rankTotal:Em,shareTitle:Tm,rankLabel:"區域排名",shareCaption:"NATIONAL SPLIT \xB7 100%"},dr={portrait:3/4,landscape:4/3,square:1,auto:null},gr={...mr,region:0,imageCount:1,imageRatio:"portrait",images:[],showShare:!0,chartType:"bar",tagCount:4,metricCount:4,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Mm=[{key:"shareTitle",label:"佔比標題",type:"text",default:"全美融資額佔比"},{key:"region",label:"類別",type:"select",default:0,options:[{value:0,label:"紐約"},{value:1,label:"西雅圖"},{value:2,label:"波士頓"},{value:3,label:"其他地區"}],description:"切換展示的類別叢集\uFF08紐約 / 西雅圖 / 波士頓 / 其他地區\uFF09\uFF0C整頁內容隨之更新\u3002"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"showShare",label:"佔比圖表",type:"toggle",default:!0,description:"區域全美佔比圖表模組的顯隱\u3002"},{key:"chartType",label:"圖表型別",type:"radio",default:"bar",options:[{value:"bar",label:"佔比條"},{value:"donut",label:"環形圖"}],description:"佔比圖表樣式\uFF1A百分百堆疊佔比條 / 環形圖\u3002",showWhen:t=>t.showShare},{key:"tagCount",label:"標籤數量",type:"slider",default:4,min:2,max:5,step:1,description:"行業標籤數量\uFF082\u20135\uFF09\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標\u3001排名標記與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於佔比高亮\u3001標籤\u3001強調卡與圖形\u3002"}],Lm=`
.aic-rgn { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-rgn, .aic-rgn * { box-sizing: border-box; }
.aic-rgn .rgn-glow { position: absolute; left: 14%; top: -10%; width: 48%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-rgn .rgn-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-rgn .rgn-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-rgn .rgn-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-rgn .rgn-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* editorial column (left) */
.aic-rgn .rgn-col { position: absolute; left: var(--pad); top: 300px; bottom: 150px; width: 940px;
  display: flex; flex-direction: column; }
.aic-rgn .rgn-rank { display: inline-flex; align-self: flex-start; align-items: center; gap: 12px;
  padding: 9px 18px; border-radius: 999px; background: var(--aic-ink); color: #fff;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .04em; }
.aic-rgn .rgn-rank b { font-size: 22px; color: var(--aic-accent-bright); }
.aic-rgn .rgn-rank u { text-decoration: none; opacity: .6; }
.aic-rgn .rgn-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 0; max-width: 900px; text-wrap: pretty; }
.aic-rgn .rgn-lead em { font-style: normal; color: var(--aic-accent-deep); font-weight: 700; }

/* national share chart */
.aic-rgn .rgn-share { margin-top: 30px; }
.aic-rgn .rgn-share-t { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin: 0 0 14px; }
.aic-rgn .rgn-share-t span { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-rgn .rgn-share-t b { font-family: var(--aic-font-display); font-weight: 700; font-size: 17px; color: var(--aic-faint);
  letter-spacing: .04em; }
.aic-rgn .rgn-stack { display: flex; height: 56px; border-radius: 14px; overflow: hidden; gap: 3px; }
.aic-rgn .rgn-seg { position: relative; display: flex; align-items: center; justify-content: center;
  background: var(--aic-hair); min-width: 8px; transition: flex-grow .5s; }
.aic-rgn .rgn-seg:first-child { border-top-left-radius: 11px; border-bottom-left-radius: 11px; }
.aic-rgn .rgn-seg:last-child { border-top-right-radius: 11px; border-bottom-right-radius: 11px; }
.aic-rgn .rgn-seg.on { background: var(--aic-accent); }
.aic-rgn .rgn-seg-k { font-family: var(--aic-font-text); font-weight: 700; font-size: 17px; color: var(--aic-muted);
  white-space: nowrap; }
.aic-rgn .rgn-seg.on .rgn-seg-k { color: var(--aic-ink); }
.aic-rgn .rgn-seg.lead .rgn-seg-k { color: var(--aic-ink-dim); }
.aic-rgn .rgn-seg-tip { position: absolute; top: -34px; left: 50%; transform: translateX(-50%);
  font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); white-space: nowrap; }
.aic-rgn .rgn-seg-tip u { text-decoration: none; font-size: 15px; color: var(--aic-muted); margin-left: 3px; }

.aic-rgn .rgn-share[data-mode="donut"] { display: flex; align-items: center; gap: 32px; }
.aic-rgn .rgn-donut-legend { display: flex; flex-direction: column; gap: 11px; }
.aic-rgn .rgn-leg { display: flex; align-items: center; gap: 12px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 21px; color: var(--aic-ink-dim); min-width: 240px; }
.aic-rgn .rgn-leg i { width: 14px; height: 14px; border-radius: 4px; flex: none; }
.aic-rgn .rgn-leg.on { color: var(--aic-ink); font-weight: 800; }
.aic-rgn .rgn-leg u { text-decoration: none; margin-left: auto; font-family: var(--aic-font-display);
  font-variant-numeric: tabular-nums; color: var(--aic-muted); }
.aic-rgn .rgn-leg.on u { color: var(--aic-accent-deep); }

/* metric strip */
.aic-rgn .rgn-metrics { margin-top: auto; display: grid; gap: 18px; padding-top: 26px; }
.aic-rgn .rgn-mcell { position: relative; padding-left: 22px; border-left: 3px solid var(--aic-hair-strong);
  transition: border-color .3s; }
.aic-rgn .rgn-mcell[data-focus="1"] { border-left-color: var(--aic-accent); }
.aic-rgn .rgn-mlbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted);
  margin-bottom: 7px; }
.aic-rgn .rgn-mval { font-family: var(--aic-font-display); font-weight: 700; font-size: 50px; line-height: 1;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-rgn .rgn-mcell[data-focus="1"] .rgn-mval { color: var(--aic-accent-deep); }
.aic-rgn .rgn-mval u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

/* industry tags */
.aic-rgn .rgn-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
.aic-rgn .rgn-tag { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-ink-dim);
  padding: 10px 20px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-rgn .rgn-tag.lead { background: var(--aic-accent-soft); color: var(--aic-accent-deep);
  border-color: color-mix(in srgb, var(--aic-accent) 40%, white); }

/* hero image (right) */
.aic-rgn .rgn-hero { position: absolute; left: 1100px; right: var(--pad); top: 300px; bottom: 150px;
  display: flex; gap: 16px; }
.aic-rgn .rgn-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: flex;
  align-items: center; justify-content: center; }
.aic-rgn .rgn-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-rgn .rgn-cell.fixed .rgn-frame { aspect-ratio: var(--ar); height: 100%; max-height: 100%; width: auto; max-width: 100%; }
.aic-rgn .rgn-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-rgn .rgn-cell.auto .rgn-frame { height: auto; width: 100%; }
.aic-rgn .rgn-cell.auto .rgn-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-rgn .rgn-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 7px 14px; border-radius: 999px; white-space: nowrap; }
.aic-rgn .rgn-cityname { position: absolute; left: 0; right: 0; bottom: 0; z-index: 4; padding: 60px 26px 24px;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; letter-spacing: .06em; color: #fff;
  background: linear-gradient(to top, rgba(8,10,6,.78), transparent); pointer-events: none; }
.aic-rgn .rgn-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-rgn .rgn-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-rgn .rgn-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-rgn .rgn-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-rgn .rgn-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-rgn .rgn-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-rgn .rgn-deco { width: 300px; height: 30px; }
`,Fm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Im({i:t}){let a="rgnph-"+t;return Ba("div",{className:"rgn-ph",children:[Ba("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[j("defs",{children:Ba("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[j("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),j("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),j("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),j("span",{className:"rgn-ph-cap",children:`image_slot_${t+1}`})]})}function Rm({split:t}){return j("div",{className:"rgn-stack",children:t.map(a=>Ba("div",{className:"rgn-seg"+(a.on?" on":a.v>40?" lead":""),style:{flexGrow:a.v},children:[a.on&&Ba("span",{className:"rgn-seg-tip",children:[a.v,j("u",{children:"%"})]}),(a.on||a.v>8)&&j("span",{className:"rgn-seg-k",children:a.k})]},a.k))})}function Dm({split:t}){let a=t.findIndex(l=>l.on),e=["var(--aic-hair-strong)","var(--aic-faint)","#C9CCC2","#DBDED4","#E7EAE0"],m=0,i=t.map(l=>({value:l.v,label:l.k,color:l.on?"var(--aic-accent)":e[m++%e.length]})),s=t[a];return Ba("div",{className:"rgn-share","data-mode":"donut",children:[j(et,{segments:i,size:210,thickness:36,focusIndex:a,centerTop:s.v+"%",centerBottom:s.k}),j("div",{className:"rgn-donut-legend",children:t.map((l,f)=>Ba("div",{className:"rgn-leg"+(l.on?" on":""),children:[j("i",{style:{background:i[f].color}}),l.k,Ba("u",{children:[l.v,"%"]})]},l.k))})]})}function ur(t){let a={...gr,...t},e={...mr,...Object.fromEntries(Object.entries(a).filter(([,C])=>C!==void 0))};y(),h("aic-rgn",Lm);let m=w(a.accentColor),i=e.regions||bo,s=e.share||fr,l=Math.max(0,Math.min(i.length-1,a.region)),f=i[l]||bo[0]||{},p=s.map((C,T)=>T===f.shareIdx?{...C,on:!0}:C),d=Math.max(2,Math.min(f.tags.length,a.tagCount)),n=f.tags.slice(0,d),o=Math.max(2,Math.min(4,Ta(a.metricCount,4))),r=f.metrics.slice(0,o),g=Math.max(0,Math.min(o-1,a.focusIndex)),u=Math.max(0,Math.min(2,a.imageCount)),v=dr.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",z=dr[v],N=z==null,x=N?3/4:z,b=C=>l*4+C;return Ba("div",{className:"aic-rgn",style:m,children:[a.showDecorations&&j("div",{className:"rgn-glow"}),Ba("div",{className:"rgn-head",children:[Ba("div",{children:[j("p",{className:"rgn-eyebrow",children:f.eyebrow}),j("h2",{className:"rgn-title",children:f.title})]}),j("div",{className:"rgn-sub",children:f.titleTail})]}),Ba("div",{className:"rgn-col",children:[a.showDecorations&&Ba("span",{className:"rgn-rank",children:[e.rankLabel,j("b",{children:String(f.rank).padStart(2,"0")}),Ba("u",{children:["/ ",String(e.rankTotal).padStart(2,"0")]})]}),j("p",{className:"rgn-lead",children:f.lead}),a.showShare&&(a.chartType==="donut"?j(Dm,{split:p}):Ba("div",{className:"rgn-share",children:[Ba("div",{className:"rgn-share-t",children:[j("span",{children:e.shareTitle}),j("b",{children:e.shareCaption})]}),j(Rm,{split:p})]})),j("div",{className:"rgn-metrics",style:{gridTemplateColumns:`repeat(${Math.min(o,2)}, 1fr)`},children:r.map((C,T)=>Ba("div",{className:"rgn-mcell","data-focus":a.focusEnabled&&T===g?"1":"0",children:[j("div",{className:"rgn-mlbl",children:C.label}),Ba("div",{className:"rgn-mval",children:[C.value,j("u",{children:C.unit})]})]},C.label))}),j("div",{className:"rgn-tags",children:n.map((C,T)=>j("span",{className:"rgn-tag"+(T===0?" lead":""),children:C},C))})]}),j("div",{className:"rgn-hero",children:u===0?j("div",{className:"rgn-cell fixed",children:j("div",{className:"rgn-frame",style:{"--ar":String(x)},children:j("div",{className:"rgn-deco-fill",children:j(A,{})})})}):Array.from({length:u}).map((C,T)=>Ba("div",{className:"rgn-cell "+(N?"auto":"fixed"),children:[a.showDecorations&&T===0&&j("span",{className:"rgn-badge",children:f.badge}),T===0&&j("span",{className:"rgn-cityname",children:f.enName}),j("div",{className:"rgn-frame",style:N?null:{"--ar":String(z)},children:a.renderSlot?a.renderSlot(b(T),{ratio:v,ratioAR:z}):j(Im,{i:T})})]},T))}),Ba("div",{className:"rgn-foot",children:[Ba("div",{className:"rgn-closing",children:[j("b",{}),f.closing]}),a.showDecorations&&j("div",{className:"rgn-deco",children:j(k,{data:Fm,gap:4})})]})]})}var wo={};S(wo,{controls:()=>Bm,default:()=>hr,defaultProps:()=>vr});import"react";import{jsx as da,jsxs as wt}from"react/jsx-runtime";var xr={eyebrow:"Talent \xB7 Capital \xB7 Compute",kicker:"人才 \xB7 資本 \xB7 算力三角",quoteLead:"AI 競爭\uFF0C首先是",quoteEm:"資源組織能力",quoteTail:"的競爭\u3002",pillars:[{glyph:"circle",zh:"人才",en:"Talent",note:"頂尖研究員與工程團隊的密度"},{glyph:"diamond",zh:"資本",en:"Capital",note:"持續的大額融資與戰略資金"},{glyph:"square",zh:"算力",en:"Compute",note:"GPU 叢集與雲資源的穩定供給"}],source:"資料來源 \xB7 AI Capital Lab 自建資料庫 / 公開融資披露 \xB7 2024 全年口徑 \u22651 億美元"},vr={...xr,align:"center",showPillars:!0,pillarCount:3,focusEnabled:!0,focusIndex:0,showQuoteMark:!0,showSource:!0,showDecorations:!0,accentColor:c.accent},Bm=[{key:"eyebrow",label:"眉標",type:"text",default:"Talent \xB7 Capital \xB7 Compute"},{key:"kicker",label:"kicker",type:"text",default:"人才 \xB7 資本 \xB7 算力三角"},{key:"quoteLead",label:"quoteLead",type:"text",default:"AI 競爭\uFF0C首先是"},{key:"quoteEm",label:"quoteEm",type:"text",default:"資源組織能力"},{key:"quoteTail",label:"quoteTail",type:"text",default:"的競爭\u3002"},{key:"source",label:"來源",type:"text",default:"資料來源 \xB7 AI Capital Lab 自建資料庫 / 公開融資披露 \xB7 2024 全年口徑 \u22651 億美元"},{key:"align",label:"對齊方式",type:"radio",default:"center",options:[{value:"center",label:"居中"},{value:"left",label:"左對齊"}],description:"金句與三角資源的整體對齊方式\u3002"},{key:"showPillars",label:"輔助資訊",type:"toggle",default:!0,description:"底部三類關鍵資源支柱行的顯隱\u3002"},{key:"pillarCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"展示的資源支柱數量\uFF082\u20133\uFF09\u3002",showWhen:t=>t.showPillars},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一類資源支柱作為視覺重點\u3002",showWhen:t=>t.showPillars},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的資源支柱\u3002",showWhen:t=>t.showPillars&&t.focusEnabled},{key:"showQuoteMark",label:"引號裝飾",type:"toggle",default:!0,description:"超大引號裝飾符號的顯隱\u3002"},{key:"showSource",label:"資料來源",type:"toggle",default:!0,description:"底部資料來源說明行的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001鏡頭光斑與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於金句重點詞與支柱高亮\u3002"}],jm=`
.aic-tri { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 120px; }
.aic-tri, .aic-tri * { box-sizing: border-box; }
.aic-tri .tri-glow { position: absolute; left: 50%; top: 36%; width: 72%; height: 76%; transform: translate(-50%,-50%);
  pointer-events: none; background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 18%, transparent), transparent 70%); }
.aic-tri .tri-lens { position: absolute; right: 92px; top: 120px; width: 230px; height: 230px; opacity: .9; }

.aic-tri .tri-eyebrow { position: absolute; top: 96px; left: var(--pad); right: var(--pad);
  display: flex; align-items: center; gap: 22px; font-family: var(--aic-font-display); font-weight: 600;
  font-size: 22px; letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); }
.aic-tri .tri-eyebrow i { flex: none; width: 11px; height: 11px; border-radius: 50%; background: var(--aic-accent); }
.aic-tri .tri-eyebrow s { flex: 1; height: 1.5px; background: var(--aic-hair); text-decoration: none; }
.aic-tri .tri-eyebrow b { font-family: var(--aic-font-text); font-weight: 700; letter-spacing: .04em;
  text-transform: none; font-size: 22px; color: var(--aic-ink-dim); }

.aic-tri .tri-body { position: absolute; left: var(--pad); right: var(--pad); top: 290px;
  display: flex; flex-direction: column; }
.aic-tri.is-center .tri-body { align-items: center; text-align: center; }
.aic-tri.is-left .tri-body { align-items: flex-start; text-align: left; }

.aic-tri .tri-kicker { display: inline-flex; align-items: center; gap: 12px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 21px; letter-spacing: .12em; color: var(--aic-accent-deep);
  padding: 9px 18px; border-radius: 999px; background: var(--aic-accent-soft); margin-bottom: 26px; }
.aic-tri .tri-mark { font-family: var(--aic-font-display); font-weight: 700; font-size: 170px; line-height: .6;
  color: var(--aic-accent); height: 92px; }
.aic-tri .tri-text { font-family: var(--aic-font-text); font-weight: 900; font-size: 96px; line-height: 1.12;
  letter-spacing: -.01em; margin: 0; max-width: 1560px; text-wrap: balance; }
.aic-tri .tri-text em { font-style: normal; color: var(--aic-accent);
  background: linear-gradient(180deg, transparent 64%, color-mix(in srgb, var(--aic-accent) 30%, transparent) 64%); }
.aic-tri .tri-rule { width: 120px; height: 5px; border-radius: 999px; background: var(--aic-ink); margin: 48px 0 0; }
.aic-tri.is-center .tri-rule { align-self: center; }

.aic-tri .tri-pillars { position: absolute; left: var(--pad); right: var(--pad); bottom: 172px;
  display: grid; gap: 40px; }
.aic-tri .tri-p { display: flex; flex-direction: column; gap: 14px; padding-top: 26px;
  border-top: 2.5px solid var(--aic-hair-strong); transition: border-color .3s; }
.aic-tri .tri-p[data-focus="1"] { border-top-color: var(--aic-accent); }
.aic-tri .tri-glyph { width: 50px; height: 50px; color: var(--aic-ink); }
.aic-tri .tri-p[data-focus="1"] .tri-glyph { color: var(--aic-accent-deep); }
.aic-tri .tri-row { display: flex; align-items: baseline; gap: 16px; }
.aic-tri .tri-zh { font-family: var(--aic-font-text); font-weight: 900; font-size: 46px; line-height: 1; color: var(--aic-ink); }
.aic-tri .tri-p[data-focus="1"] .tri-zh { color: var(--aic-accent-deep); }
.aic-tri .tri-en { font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .2em;
  text-transform: uppercase; color: var(--aic-muted); transform: skewX(-8deg); transform-origin: left bottom; }
.aic-tri .tri-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 23px; line-height: 1.45; color: var(--aic-ink-dim); }

.aic-tri .tri-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 90px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-tri .tri-src { font-family: var(--aic-font-display); font-weight: 500; font-size: 20px;
  letter-spacing: .04em; color: var(--aic-faint); }
.aic-tri .tri-deco { width: 300px; height: 28px; flex: none; }
`,Pm=["pos","accent","pos","warn","neg","pos","accent","pos","warn","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent","pos","neg","pos","accent","pos","warn","pos","accent","pos","pos","neg","warn","accent","pos","pos","warn","accent"].map(t=>({tone:t}));function Om({type:t}){return t==="circle"?wt("svg",{className:"tri-glyph",viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:[da("circle",{cx:"18",cy:"24",r:"13",stroke:"currentColor",strokeWidth:"3"}),da("circle",{cx:"30",cy:"24",r:"13",stroke:"var(--aic-accent)",strokeWidth:"3"})]}):t==="diamond"?da("svg",{className:"tri-glyph",viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:da("rect",{x:"24",y:"6",width:"25.5",height:"25.5",rx:"3",transform:"rotate(45 24 6)",stroke:"currentColor",strokeWidth:"3"})}):wt("svg",{className:"tri-glyph",viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:[da("rect",{x:"7",y:"7",width:"16",height:"16",rx:"2",stroke:"currentColor",strokeWidth:"3"}),da("rect",{x:"25",y:"7",width:"16",height:"16",rx:"2",stroke:"currentColor",strokeWidth:"3"}),da("rect",{x:"7",y:"25",width:"16",height:"16",rx:"2",stroke:"currentColor",strokeWidth:"3"}),da("rect",{x:"25",y:"25",width:"16",height:"16",rx:"2",fill:"var(--aic-accent)"})]})}function hr(t){let a={...vr,...t},e={...xr,...Object.fromEntries(Object.entries(a).filter(([,d])=>d!==void 0))};y(),h("aic-tri",jm);let m=w(a.accentColor),i=a.align==="left"?"left":"center",s=Math.max(2,Math.min(3,a.pillarCount)),l=e.pillars.slice(0,s),f=a.showPillars,p=Math.max(0,Math.min(s-1,a.focusIndex));return wt("div",{className:"aic-tri is-"+i,style:m,children:[a.showDecorations&&da("div",{className:"tri-glow"}),a.showDecorations&&da("div",{className:"tri-lens",children:da(A,{})}),wt("div",{className:"tri-eyebrow",children:[da("i",{}),e.eyebrow,da("s",{}),da("b",{children:e.kicker})]}),wt("div",{className:"tri-body",style:{top:f?"274px":"330px"},children:[da("span",{className:"tri-kicker",children:e.kicker}),a.showQuoteMark&&da("div",{className:"tri-mark",children:"\u201C"}),wt("h2",{className:"tri-text",children:[e.quoteLead,da("em",{children:e.quoteEm}),e.quoteTail]}),da("div",{className:"tri-rule"})]}),f&&da("div",{className:"tri-pillars",style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:l.map((d,n)=>wt("div",{className:"tri-p","data-focus":a.focusEnabled&&n===p?"1":"0",children:[da(Om,{type:d.glyph}),wt("div",{className:"tri-row",children:[da("span",{className:"tri-zh",children:d.zh}),da("span",{className:"tri-en",children:d.en})]}),da("span",{className:"tri-note",children:d.note})]},d.en))}),wt("div",{className:"tri-foot",children:[a.showSource?da("div",{className:"tri-src",children:e.source}):da("span",{}),a.showDecorations&&da("div",{className:"tri-deco",children:da(k,{data:Pm,gap:4})})]})]})}var ko={};S(ko,{controls:()=>Hm,default:()=>kr,defaultProps:()=>wr});import"react";import{jsx as ia,jsxs as Je}from"react/jsx-runtime";var yr={eyebrow:"OpenAI Case",title:"商業化標杆",titleTail:"OpenAI 案例頁",logic:"通用大模型邏輯",company:"OpenAI",enName:"OPENAI",badge:"商業化標杆",lead:"OpenAI 仍是通用大模型商業化的標杆樣本\uFF1B看點是模型能力\u3001生態入口與企業商業化能否同時領先\u3002",closing:"模型能力必須轉成生態和收入\u3002",metrics:[{label:"最大單筆融資",value:"66",unit:"億美元",num:!0},{label:"企業客戶",value:"9.4",unit:"萬家",num:!0},{label:"年度化收入",value:"38",unit:"億美元",num:!0},{label:"核心賽道",value:"通用大模型",num:!1}],tags:["通用大模型","生態入口","企業商業化"]},br={portrait:3/4,landscape:4/3,square:1,auto:null},wr={...yr,imageCount:1,imageRatio:"portrait",images:[],metricCount:3,focusEnabled:!0,focusIndex:0,showTags:!0,tagCount:3,showDecorations:!0,accentColor:c.accent,renderSlot:null},Hm=[{key:"eyebrow",label:"眉標",type:"text",default:"OpenAI Case"},{key:"title",label:"標題",type:"text",default:"商業化標杆"},{key:"titleTail",label:"副標題",type:"text",default:"OpenAI 案例頁"},{key:"logic",label:"logic",type:"text",default:"通用大模型邏輯"},{key:"company",label:"company",type:"text",default:"OpenAI"},{key:"enName",label:"enName",type:"text",default:"OPENAI"},{key:"badge",label:"badge",type:"text",default:"商業化標杆"},{key:"lead",label:"導言",type:"text",default:"OpenAI 仍是通用大模型商業化的標杆樣本\uFF1B看點是模型能力\u3001生態入口與企業商業化能否同時領先\u3002"},{key:"closing",label:"結語",type:"text",default:"模型能力必須轉成生態和收入\u3002"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:3,min:2,max:4,step:1,description:"展示的指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showTags",label:"標籤文案",type:"toggle",default:!0,description:"定位標籤行的顯隱\u3002"},{key:"tagCount",label:"標籤數量",type:"slider",default:3,min:2,max:3,step:1,description:"定位標籤數量\uFF082\u20133\uFF09\u3002",showWhen:t=>t.showTags},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標\u3001公司名壓底與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於強調卡\u3001標籤與圖形\u3002"}],Vm=`
.aic-cc { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cc, .aic-cc * { box-sizing: border-box; }
.aic-cc .cc-glow { position: absolute; left: 4%; top: -12%; width: 52%; height: 62%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-cc .cc-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cc .cc-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cc .cc-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-cc .cc-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* editorial column (left) */
.aic-cc .cc-col { position: absolute; left: var(--pad); top: 296px; bottom: 138px; width: 980px;
  display: flex; flex-direction: column; }
.aic-cc .cc-logic { display: inline-flex; align-self: flex-start; align-items: center; gap: 11px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-cc .cc-logic i { width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cc .cc-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 104px; line-height: .92;
  letter-spacing: -.012em; color: var(--aic-ink); margin: 14px 0 0; transform: skewX(-8deg);
  transform-origin: left bottom; white-space: nowrap; }
.aic-cc .cc-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink-dim); margin: 30px 0 0; max-width: 900px; text-wrap: pretty; }
.aic-cc .cc-lead em { font-style: normal; color: var(--aic-accent-deep); font-weight: 700; }
.aic-cc .cc-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.aic-cc .cc-tag { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-ink-dim);
  padding: 10px 20px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-cc .cc-tag.lead { background: var(--aic-accent-soft); color: var(--aic-accent-deep);
  border-color: color-mix(in srgb, var(--aic-accent) 40%, white); }

/* headline metric strip */
.aic-cc .cc-metrics { margin-top: auto; display: flex; gap: 36px; padding-top: 30px; }
.aic-cc .cc-mcell { flex: 1 1 0; position: relative; padding-top: 18px;
  border-top: 2.5px solid var(--aic-hair-strong); transition: border-color .3s; }
.aic-cc .cc-mcell[data-focus="1"] { border-top-color: var(--aic-accent); }
.aic-cc .cc-mlbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted);
  margin-bottom: 12px; }
.aic-cc .cc-mval { font-family: var(--aic-font-display); font-weight: 700; line-height: 1; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-cc .cc-mval.num { font-size: 56px; }
.aic-cc .cc-mval.txt { font-size: 34px; }
.aic-cc .cc-mcell[data-focus="1"] .cc-mval { color: var(--aic-accent-deep); }
.aic-cc .cc-mval u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

/* hero image (right) */
.aic-cc .cc-hero { position: absolute; left: 1116px; right: var(--pad); top: 296px; bottom: 138px;
  display: flex; gap: 16px; }
.aic-cc .cc-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: flex;
  align-items: center; justify-content: center; }
.aic-cc .cc-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-cc .cc-cell.fixed .cc-frame { aspect-ratio: var(--ar); height: 100%; max-height: 100%; width: auto; max-width: 100%; }
.aic-cc .cc-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-cc .cc-cell.auto .cc-frame { height: auto; width: 100%; }
.aic-cc .cc-cell.auto .cc-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-cc .cc-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 7px 14px; border-radius: 999px; white-space: nowrap; }
.aic-cc .cc-cname { position: absolute; left: 0; right: 0; bottom: 0; z-index: 4; padding: 60px 26px 24px;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 38px; letter-spacing: .04em; color: #fff;
  background: linear-gradient(to top, rgba(8,10,6,.78), transparent); pointer-events: none; }
.aic-cc .cc-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-cc .cc-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-cc .cc-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-cc .cc-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 60px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-cc .cc-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cc .cc-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cc .cc-deco { width: 300px; height: 30px; }
`,Wm=["pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function qm({i:t}){let a="ccph-"+t;return Je("div",{className:"cc-ph",children:[Je("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[ia("defs",{children:Je("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[ia("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),ia("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),ia("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),ia("span",{className:"cc-ph-cap",children:`image_slot_${t+1}`})]})}function kr(t){let a={...wr,...t},e={...yr,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-cc",Vm);let m=w(a.accentColor),i=Math.max(2,Math.min(e.metrics.length,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(2,Math.min(e.tags.length,a.tagCount)),p=e.tags.slice(0,f),d=Math.max(0,Math.min(2,a.imageCount)),n=br.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",o=br[n],r=o==null,g=r?3/4:o;return Je("div",{className:"aic-cc",style:m,children:[a.showDecorations&&ia("div",{className:"cc-glow"}),Je("div",{className:"cc-head",children:[Je("div",{children:[ia("p",{className:"cc-eyebrow",children:e.eyebrow}),ia("h2",{className:"cc-title",children:e.title})]}),ia("div",{className:"cc-sub",children:e.titleTail})]}),Je("div",{className:"cc-col",children:[Je("span",{className:"cc-logic",children:[ia("i",{}),e.logic]}),ia("p",{className:"cc-name",children:e.company}),ia("p",{className:"cc-lead",children:e.lead}),a.showTags&&ia("div",{className:"cc-tags",children:p.map((u,v)=>ia("span",{className:"cc-tag"+(v===0?" lead":""),children:u},u))}),ia("div",{className:"cc-metrics",children:s.map((u,v)=>Je("div",{className:"cc-mcell","data-focus":a.focusEnabled&&v===l?"1":"0",children:[ia("div",{className:"cc-mlbl",children:u.label}),Je("div",{className:"cc-mval "+(u.num?"num":"txt"),children:[u.value,u.num&&u.unit?ia("u",{children:u.unit}):null]})]},u.label))})]}),ia("div",{className:"cc-hero",children:d===0?ia("div",{className:"cc-cell fixed",children:ia("div",{className:"cc-frame",style:{"--ar":String(g)},children:ia("div",{className:"cc-deco-fill",children:ia(A,{})})})}):Array.from({length:d}).map((u,v)=>Je("div",{className:"cc-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&ia("span",{className:"cc-badge",children:e.badge}),a.showDecorations&&v===0&&ia("span",{className:"cc-cname",children:e.enName}),ia("div",{className:"cc-frame",style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):ia(qm,{i:v})})]},v))}),Je("div",{className:"cc-foot",children:[Je("div",{className:"cc-closing",children:[ia("b",{}),e.closing]}),a.showDecorations&&ia("div",{className:"cc-deco",children:ia(k,{data:Wm,gap:4})})]})]})}var No={};S(No,{controls:()=>$m,default:()=>Cr,defaultProps:()=>zr});import"react";import{jsx as Ya,jsxs as kt}from"react/jsx-runtime";var Nr={eyebrow:"Figure AI Case",title:"人形機器人",sub:"Figure AI 案例頁",kicker:"最大單筆融資",numLead:"6",numTail:".8",numUnit:"億美元",ghost:"6.8",numCaption:"Figure AI 最大單筆融資",note:"關鍵不只是 demo\uFF0C而是供應鏈\u3001可靠性和量產成本\u3002",closing:"硬體 AI 要用量產證明自己\u3002",aux:[{label:"投後估值",value:"26",unit:"億美元"},{label:"融資輪次",value:"B 輪",unit:""},{label:"賽道方向",value:"人形機器人",unit:""}]},zr={...Nr,numberSlant:!0,auxCount:3,showCaption:!0,showNote:!0,showGhost:!0,showLens:!0,showDecorations:!0,accentColor:c.accent},$m=[{key:"eyebrow",label:"眉標",type:"text",default:"Figure AI Case"},{key:"title",label:"標題",type:"text",default:"人形機器人"},{key:"sub",label:"次標題",type:"text",default:"Figure AI 案例頁"},{key:"kicker",label:"kicker",type:"text",default:"最大單筆融資"},{key:"numLead",label:"numLead",type:"text",default:"6"},{key:"numTail",label:"numTail",type:"text",default:".8"},{key:"numUnit",label:"numUnit",type:"text",default:"億美元"},{key:"ghost",label:"ghost",type:"text",default:"6.8"},{key:"numCaption",label:"numCaption",type:"text",default:"Figure AI 最大單筆融資"},{key:"note",label:"note",type:"text",default:"關鍵不只是 demo\uFF0C而是供應鏈\u3001可靠性和量產成本\u3002"},{key:"closing",label:"結語",type:"text",default:"硬體 AI 要用量產證明自己\u3002"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"主數字是否應用品牌斜切\uFF08italic-slant\uFF09效果\u3002"},{key:"auxCount",label:"卡片數量",type:"slider",default:3,min:0,max:3,step:1,description:"輔助指標數量\uFF080\u20133\uFF09\uFF1B為 0 時只保留主數字\u3002"},{key:"showCaption",label:"說明文案",type:"toggle",default:!0,description:"主數字下方解釋性說明的顯隱\u3002"},{key:"showNote",label:"輔助註釋",type:"toggle",default:!0,description:"底部補充註釋的顯隱\u3002"},{key:"showGhost",label:"背景大字",type:"toggle",default:!0,description:"主數字背後的超大描邊數字水印的顯隱\u3002"},{key:"showLens",label:"品牌圖形",type:"toggle",default:!0,description:"品牌透鏡圖形\uFF08焦點圓盤\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於主數字點綴\u3001品牌圖形與高亮\u3002"}],Um=`
.aic-fig { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-fig, .aic-fig * { box-sizing: border-box; }
.aic-fig .fg-glow { position: absolute; left: 30%; top: 22%; width: 60%; height: 70%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 26%, transparent), transparent 72%); }
.aic-fig .fg-lens { position: absolute; right: -70px; top: 168px; width: 720px; height: 720px; opacity: .9; pointer-events: none; }
.aic-fig .fg-ghost { position: absolute; right: 40px; bottom: -190px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 660px; line-height: .7; color: transparent;
  -webkit-text-stroke: 3px var(--aic-hair-strong); letter-spacing: -.04em; pointer-events: none; user-select: none;
  font-variant-numeric: lining-nums; transform: skewX(-9deg); }

.aic-fig .fg-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-fig .fg-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-fig .fg-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 64px; line-height: .96; margin: 0; }
.aic-fig .fg-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* hero number block */
.aic-fig .fg-hero { position: absolute; left: var(--pad); top: 322px; right: var(--pad); }
.aic-fig .fg-kicker { display: flex; align-items: center; gap: 16px; margin: 0 0 12px; }
.aic-fig .fg-kicker b { width: 64px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-fig .fg-kicker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-fig .fg-bignum { line-height: .8; }
.aic-fig .fg-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 38px; color: var(--aic-ink-dim);
  margin: 30px 0 0; max-width: 1000px; }

/* supporting metrics */
.aic-fig .fg-aux { position: absolute; left: var(--pad); right: var(--pad); bottom: 234px;
  display: flex; gap: 56px; }
.aic-fig .fg-aux-item { display: flex; flex-direction: column; gap: 10px; padding-left: 24px;
  border-left: 3px solid var(--aic-hair-strong); }
.aic-fig .fg-aux-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); }
.aic-fig .fg-aux-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 52px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-fig .fg-aux-val u { text-decoration: none; font-size: 20px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-fig .fg-note { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 26px; color: var(--aic-muted);
  display: flex; align-items: center; gap: 14px; }
.aic-fig .fg-note::before { content: ''; width: 26px; height: 2px; background: var(--aic-hair-strong); flex: none; }

.aic-fig .fg-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-fig .fg-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-fig .fg-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-fig .fg-deco { width: 300px; height: 30px; }
`,Ym=["accent","pos","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent"].map(t=>({tone:t})),_m=[{x:40,y:34,d:54},{x:66,y:30,d:36},{x:56,y:64,d:46},{x:80,y:58,d:28}];function Cr(t){let a={...zr,...t},e={...Nr,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-fig",Um);let m=w(a.accentColor),i=Math.max(0,Math.min(e.aux.length,a.auxCount)),s=e.aux.slice(0,i);return kt("div",{className:"aic-fig",style:m,children:[a.showDecorations&&Ya("div",{className:"fg-glow"}),a.showGhost&&Ya("div",{className:"fg-ghost",children:e.ghost}),a.showLens&&Ya("div",{className:"fg-lens",children:Ya(A,{discs:_m})}),kt("div",{className:"fg-head",children:[kt("div",{children:[Ya("p",{className:"fg-eyebrow",children:e.eyebrow}),Ya("h2",{className:"fg-title",children:e.title})]}),Ya("div",{className:"fg-sub",children:e.sub})]}),kt("div",{className:"fg-hero",children:[kt("div",{className:"fg-kicker",children:[Ya("b",{}),Ya("span",{children:e.kicker})]}),Ya("div",{className:"fg-bignum",children:Ya(ha,{lead:e.numLead,tail:e.numTail,unit:e.numUnit,slant:a.numberSlant,size:360})}),a.showCaption&&Ya("p",{className:"fg-caption",children:e.numCaption})]}),i>0&&Ya("div",{className:"fg-aux",children:s.map(l=>kt("div",{className:"fg-aux-item",children:[Ya("div",{className:"fg-aux-lbl",children:l.label}),kt("div",{className:"fg-aux-val",children:[l.value,l.unit?Ya("u",{children:l.unit}):null]})]},l.label))}),a.showNote&&Ya("div",{className:"fg-note",children:e.note}),kt("div",{className:"fg-foot",children:[kt("div",{className:"fg-closing",children:[Ya("b",{}),e.closing]}),a.showDecorations&&Ya("div",{className:"fg-deco",children:Ya(k,{data:Ym,gap:4})})]})]})}var zo={};S(zo,{controls:()=>Xm,default:()=>Tr,defaultProps:()=>Er});import"react";import{jsx as oa,jsxs as Ze}from"react/jsx-runtime";var Ar={eyebrow:"SSI Case",title:"強敘事模型實驗室",titleTail:"SSI 案例頁",logic:"強敘事邏輯",company:"SSI",enName:"SAFE SUPERINTELLIGENCE",badge:"安全智慧",lead:"SSI 代表強團隊\u3001強敘事\u3001弱商業化驗證的模型實驗室\uFF1B短期難以用收入評價\uFF0C價值建立在長期技術想象上\u3002",closing:"強敘事需要更長時間兌現\u3002",metrics:[{label:"最大單筆融資",value:"10",unit:"億美元",num:!0},{label:"產品收入",value:"0",unit:"",num:!0},{label:"團隊規模",value:"85",unit:"人",num:!0},{label:"賽道方向",value:"安全智慧",num:!1}],tags:["強團隊","強敘事","長期技術"]},Sr={portrait:3/4,landscape:4/3,square:1,auto:null},Er={...Ar,imageCount:1,imageRatio:"portrait",images:[],metricCount:4,focusEnabled:!0,focusIndex:0,showTags:!0,tagCount:3,showDecorations:!0,accentColor:c.accent,renderSlot:null},Xm=[{key:"eyebrow",label:"眉標",type:"text",default:"SSI Case"},{key:"title",label:"標題",type:"text",default:"強敘事模型實驗室"},{key:"titleTail",label:"副標題",type:"text",default:"SSI 案例頁"},{key:"logic",label:"logic",type:"text",default:"強敘事邏輯"},{key:"company",label:"company",type:"text",default:"SSI"},{key:"enName",label:"enName",type:"text",default:"SAFE SUPERINTELLIGENCE"},{key:"badge",label:"badge",type:"text",default:"安全智慧"},{key:"lead",label:"導言",type:"text",default:"SSI 代表強團隊\u3001強敘事\u3001弱商業化驗證的模型實驗室\uFF1B短期難以用收入評價\uFF0C價值建立在長期技術想象上\u3002"},{key:"closing",label:"結語",type:"text",default:"強敘事需要更長時間兌現\u3002"},{key:"imageCount",label:"圖片數量",type:"slider",default:1,min:0,max:2,step:1,description:"主視覺區圖片槽數量\uFF080\u20132\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C構圖保持完整\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"portrait",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例並自動居中排布\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"展示的指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showTags",label:"標籤文案",type:"toggle",default:!0,description:"定位標籤行的顯隱\u3002"},{key:"tagCount",label:"標籤數量",type:"slider",default:3,min:2,max:3,step:1,description:"定位標籤數量\uFF082\u20133\uFF09\u3002",showWhen:t=>t.showTags},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標\u3001公司名壓底與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於強調卡\u3001標籤與圖形\u3002"}],Gm=`
.aic-cc { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cc, .aic-cc * { box-sizing: border-box; }
.aic-cc .cc-glow { position: absolute; left: 4%; top: -12%; width: 52%; height: 62%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-cc .cc-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cc .cc-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cc .cc-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-cc .cc-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px;
  color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* editorial column (left) */
.aic-cc .cc-col { position: absolute; left: var(--pad); top: 296px; bottom: 138px; width: 980px;
  display: flex; flex-direction: column; }
.aic-cc .cc-logic { display: inline-flex; align-self: flex-start; align-items: center; gap: 11px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-cc .cc-logic i { width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cc .cc-name { font-family: var(--aic-font-display); font-weight: 700; font-size: 96px; line-height: .92;
  letter-spacing: -.012em; color: var(--aic-ink); margin: 14px 0 0; transform: skewX(-8deg);
  transform-origin: left bottom; white-space: nowrap; }
.aic-cc .cc-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 30px; line-height: 1.5;
  color: var(--aic-ink-dim); margin: 30px 0 0; max-width: 900px; text-wrap: pretty; }
.aic-cc .cc-lead em { font-style: normal; color: var(--aic-accent-deep); font-weight: 700; }
.aic-cc .cc-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.aic-cc .cc-tag { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-ink-dim);
  padding: 10px 20px; border-radius: 999px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-cc .cc-tag.lead { background: var(--aic-accent-soft); color: var(--aic-accent-deep);
  border-color: color-mix(in srgb, var(--aic-accent) 40%, white); }

/* headline metric strip */
.aic-cc .cc-metrics { margin-top: auto; display: flex; gap: 36px; padding-top: 30px; }
.aic-cc .cc-mcell { flex: 1 1 0; position: relative; padding-top: 18px;
  border-top: 2.5px solid var(--aic-hair-strong); transition: border-color .3s; }
.aic-cc .cc-mcell[data-focus="1"] { border-top-color: var(--aic-accent); }
.aic-cc .cc-mlbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 19px; color: var(--aic-muted);
  margin-bottom: 12px; }
.aic-cc .cc-mval { font-family: var(--aic-font-display); font-weight: 700; line-height: 1; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-cc .cc-mval.num { font-size: 56px; }
.aic-cc .cc-mval.txt { font-size: 34px; }
.aic-cc .cc-mcell[data-focus="1"] .cc-mval { color: var(--aic-accent-deep); }
.aic-cc .cc-mval u { text-decoration: none; font-size: 19px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

/* hero image (right) */
.aic-cc .cc-hero { position: absolute; left: 1116px; right: var(--pad); top: 296px; bottom: 138px;
  display: flex; gap: 16px; }
.aic-cc .cc-cell { position: relative; overflow: hidden; border-radius: 26px; flex: 1 1 0;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); display: flex;
  align-items: center; justify-content: center; }
.aic-cc .cc-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-cc .cc-cell.fixed .cc-frame { aspect-ratio: var(--ar); height: 100%; max-height: 100%; width: auto; max-width: 100%; }
.aic-cc .cc-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-cc .cc-cell.auto .cc-frame { height: auto; width: 100%; }
.aic-cc .cc-cell.auto .cc-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-cc .cc-badge { position: absolute; top: 18px; left: 18px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 7px 14px; border-radius: 999px; white-space: nowrap; }
.aic-cc .cc-cname { position: absolute; left: 0; right: 0; bottom: 0; z-index: 4; padding: 60px 26px 24px;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; letter-spacing: .04em; color: #fff;
  background: linear-gradient(to top, rgba(8,10,6,.78), transparent); pointer-events: none; }
.aic-cc .cc-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-cc .cc-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }
.aic-cc .cc-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }

.aic-cc .cc-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 60px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-cc .cc-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cc .cc-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cc .cc-deco { width: 300px; height: 30px; }
`,Qm=["accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","accent","pos","warn","accent"].map(t=>({tone:t}));function Km({i:t}){let a="ccph-ssi-"+t;return Ze("div",{className:"cc-ph",children:[Ze("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[oa("defs",{children:Ze("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[oa("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),oa("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),oa("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),oa("span",{className:"cc-ph-cap",children:`image_slot_${t+1}`})]})}function Tr(t){let a={...Er,...t},e={...Ar,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-cc",Gm);let m=w(a.accentColor),i=Math.max(2,Math.min(e.metrics.length,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(2,Math.min(e.tags.length,a.tagCount)),p=e.tags.slice(0,f),d=Math.max(0,Math.min(2,a.imageCount)),n=Sr.hasOwnProperty(a.imageRatio)?a.imageRatio:"portrait",o=Sr[n],r=o==null,g=r?3/4:o;return Ze("div",{className:"aic-cc",style:m,children:[a.showDecorations&&oa("div",{className:"cc-glow"}),Ze("div",{className:"cc-head",children:[Ze("div",{children:[oa("p",{className:"cc-eyebrow",children:e.eyebrow}),oa("h2",{className:"cc-title",children:e.title})]}),oa("div",{className:"cc-sub",children:e.titleTail})]}),Ze("div",{className:"cc-col",children:[Ze("span",{className:"cc-logic",children:[oa("i",{}),e.logic]}),oa("p",{className:"cc-name",children:e.company}),oa("p",{className:"cc-lead",children:e.lead}),a.showTags&&oa("div",{className:"cc-tags",children:p.map((u,v)=>oa("span",{className:"cc-tag"+(v===0?" lead":""),children:u},u))}),oa("div",{className:"cc-metrics",children:s.map((u,v)=>Ze("div",{className:"cc-mcell","data-focus":a.focusEnabled&&v===l?"1":"0",children:[oa("div",{className:"cc-mlbl",children:u.label}),Ze("div",{className:"cc-mval "+(u.num?"num":"txt"),children:[u.value,u.num&&u.unit?oa("u",{children:u.unit}):null]})]},u.label))})]}),oa("div",{className:"cc-hero",children:d===0?oa("div",{className:"cc-cell fixed",children:oa("div",{className:"cc-frame",style:{"--ar":String(g)},children:oa("div",{className:"cc-deco-fill",children:oa(A,{})})})}):Array.from({length:d}).map((u,v)=>Ze("div",{className:"cc-cell "+(r?"auto":"fixed"),children:[a.showDecorations&&v===0&&oa("span",{className:"cc-badge",children:e.badge}),a.showDecorations&&v===0&&oa("span",{className:"cc-cname",children:e.enName}),oa("div",{className:"cc-frame",style:r?null:{"--ar":String(o)},children:a.renderSlot?a.renderSlot(v,{ratio:n,ratioAR:o}):oa(Km,{i:v})})]},v))}),Ze("div",{className:"cc-foot",children:[Ze("div",{className:"cc-closing",children:[oa("b",{}),e.closing]}),a.showDecorations&&oa("div",{className:"cc-deco",children:oa(k,{data:Qm,gap:4})})]})]})}var Co={};S(Co,{controls:()=>Jm,default:()=>Fr,defaultProps:()=>Lr});import"react";import{jsx as qe,jsxs as Yt}from"react/jsx-runtime";var Mr={eyebrow:"Chapter",index:"05",title:"風險與策略",sub:"從估值壓力到投資篩選",lead:"從本章開始進入風險與策略部分\uFF0C集中呈現估值\u3001收入\u3001監管\u3001算力和競爭壓力\u3002",closing:"下一組頁面進入更細的拆解\u3002",keywords:["估值泡沫","收入驗證","合規","算力成本","垂直應用篩選"]},Lr={...Mr,backgroundVariant:"dark",layout:"left",showIndex:!0,showKeywords:!0,keywordCount:5,showDecorations:!0,accentColor:c.accent},Jm=[{key:"eyebrow",label:"眉標",type:"text",default:"Chapter"},{key:"index",label:"index",type:"text",default:"05"},{key:"title",label:"標題",type:"text",default:"風險與策略"},{key:"sub",label:"次標題",type:"text",default:"從估值壓力到投資篩選"},{key:"lead",label:"導言",type:"text",default:"從本章開始進入風險與策略部分\uFF0C集中呈現估值\u3001收入\u3001監管\u3001算力和競爭壓力\u3002"},{key:"closing",label:"結語",type:"text",default:"下一組頁面進入更細的拆解\u3002"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"dark",options:[{value:"dark",label:"深色"},{value:"paper",label:"淺色"}],description:"章節頁背景\uFF1A深色\uFF08強換氣節奏\uFF09/ 淺色\uFF08與正文統一\uFF09\u3002"},{key:"layout",label:"排版",type:"radio",default:"left",options:[{value:"left",label:"左對齊"},{value:"center",label:"居中"}],description:"標題與關鍵詞的整體排布方式\u3002"},{key:"showIndex",label:"章節序號",type:"toggle",default:!0,description:"超大章節編號水印的顯隱\u3002"},{key:"showKeywords",label:"關鍵詞",type:"toggle",default:!0,description:"本章關鍵詞標籤行的顯隱\u3002"},{key:"keywordCount",label:"關鍵詞數量",type:"slider",default:5,min:3,max:5,step:1,description:"展示的關鍵詞數量\uFF083\u20135\uFF09\u3002",showWhen:t=>t.showKeywords},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"鏡頭光斑\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Zm=`
.aic-ch { position: relative; width: 100%; height: 100%; overflow: hidden;
  font-family: var(--aic-font-text); --pad: 120px; }
.aic-ch, .aic-ch * { box-sizing: border-box; }
.aic-ch[data-bg="dark"]  { background: var(--aic-ink); color: var(--aic-paper); --ch-dim: rgba(250,250,246,.62); --ch-faint: rgba(250,250,246,.34); --ch-hair: rgba(250,250,246,.16); }
.aic-ch[data-bg="paper"] { background: var(--aic-paper); color: var(--aic-ink); --ch-dim: var(--aic-ink-dim); --ch-faint: var(--aic-faint); --ch-hair: var(--aic-hair); }

.aic-ch .ch-glow { position: absolute; right: -6%; top: 8%; width: 56%; height: 70%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 30%, transparent), transparent 70%); }
.aic-ch .ch-lens { position: absolute; right: 110px; top: 50%; transform: translateY(-50%); width: 520px; height: 520px; opacity: .92; }

/* giant index watermark */
.aic-ch .ch-index { position: absolute; right: 60px; bottom: -120px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 760px; line-height: .7; color: transparent;
  -webkit-text-stroke: 3px var(--ch-hair); letter-spacing: -.04em; pointer-events: none; user-select: none;
  font-variant-numeric: lining-nums; }

.aic-ch .ch-body { position: absolute; left: var(--pad); right: var(--pad); top: 50%; transform: translateY(-52%);
  display: flex; flex-direction: column; }
.aic-ch.is-center .ch-body { align-items: center; text-align: center; }

.aic-ch .ch-eyebrow { display: flex; align-items: center; gap: 18px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 24px; letter-spacing: .28em; text-transform: uppercase; color: var(--aic-accent); margin: 0 0 30px; }
.aic-ch .ch-eyebrow b { font-variant-numeric: tabular-nums; }
.aic-ch .ch-eyebrow s { display: inline-block; width: 64px; height: 2px; background: var(--aic-accent); text-decoration: none; }
.aic-ch.is-center .ch-eyebrow { justify-content: center; }

.aic-ch .ch-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 148px; line-height: .94;
  letter-spacing: -.01em; margin: 0; }
.aic-ch .ch-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 38px; color: var(--ch-dim);
  margin: 28px 0 0; }
.aic-ch .ch-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--ch-dim); margin: 32px 0 0; max-width: 1000px; }
.aic-ch.is-center .ch-lead { margin-left: auto; margin-right: auto; }

.aic-ch .ch-kw { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 52px; }
.aic-ch.is-center .ch-kw { justify-content: center; }
.aic-ch .ch-kw span { font-family: var(--aic-font-text); font-weight: 600; font-size: 26px;
  padding: 14px 28px; border-radius: 999px; border: 1.5px solid var(--ch-hair); color: var(--ch-dim);
  display: inline-flex; align-items: center; gap: 12px; }
.aic-ch .ch-kw span::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-ch .ch-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 84px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-ch .ch-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 26px; color: var(--ch-dim); }
.aic-ch .ch-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-ch .ch-deco { width: 300px; height: 28px; flex: none; }
`,ag=["warn","accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent"].map(t=>({tone:t}));function Fr(t){let a={...Lr,...t},e={...Mr,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-ch",Zm);let m=w(a.accentColor),i=a.backgroundVariant==="paper"?"paper":"dark",s=a.layout==="center"?"center":"left",l=Math.max(3,Math.min(e.keywords.length,a.keywordCount)),f=e.keywords.slice(0,l);return Yt("div",{className:"aic-ch is-"+s,"data-bg":i,style:m,children:[a.showDecorations&&qe("div",{className:"ch-glow"}),a.showDecorations&&s==="left"&&qe("div",{className:"ch-lens",children:qe(A,{})}),a.showIndex&&qe("div",{className:"ch-index",children:e.index}),Yt("div",{className:"ch-body",children:[Yt("p",{className:"ch-eyebrow",children:[qe("s",{}),e.eyebrow,"\xA0",qe("b",{children:e.index})]}),qe("h2",{className:"ch-title",children:e.title}),qe("div",{className:"ch-sub",children:e.sub}),qe("p",{className:"ch-lead",children:e.lead}),a.showKeywords&&qe("div",{className:"ch-kw",children:f.map(p=>qe("span",{children:p},p))})]}),Yt("div",{className:"ch-foot",children:[Yt("div",{className:"ch-closing",children:[qe("b",{}),e.closing]}),a.showDecorations&&qe("div",{className:"ch-deco",children:qe(k,{data:ag,gap:4})})]})]})}var So={};S(So,{controls:()=>tg,default:()=>Dr,defaultProps:()=>Rr});import eg from"react";import{jsx as Ea,jsxs as ze}from"react/jsx-runtime";var Ir={eyebrow:"Revenue Risk",marker:"收入驗證",segment:"風險 \xB7 收入驗證",title:"從試點到穩定收入",titleTail:"風險 \xB7 收入驗證",lead:"多數 AI 公司需要證明自己能從試點專案轉向穩定訂閱收入\uFF1B收入驗證要看留存\u3001毛利和客戶擴張\uFF0C而不是隻看 Logo\u3002",statLine:"試點轉付費率 28% \xB7 企業年流失率 17%",closing:"客戶試點不等於商業化成功\u3002",funnelTitle:"試點 \u2192 付費 \u2192 穩定收入 \xB7 轉化漏斗",stages:[{name:"試點專案",value:100,note:"免費 / 低價試用",conv:null},{name:"付費轉化",value:28,note:"簽約進入付費",conv:"28% 轉付費"},{name:"穩定訂閱",value:23,note:"續約留存收入",conv:"83% 留存"}],metrics:[{lbl:"試點轉付費率",val:"28",unit:"%"},{lbl:"企業年流失率",val:"17",unit:"%"},{lbl:"毛利率中位數",val:"54",unit:"%"},{lbl:"推理成本佔收入",val:"31",unit:"%"}]},Rr={...Ir,stageCount:3,metricCount:4,focusEnabled:!0,focusIndex:0,showValues:!0,showDecorations:!0,accentColor:c.accent},tg=[{key:"eyebrow",label:"眉標",type:"text",default:"Revenue Risk"},{key:"marker",label:"marker",type:"text",default:"收入驗證"},{key:"segment",label:"segment",type:"text",default:"風險 \xB7 收入驗證"},{key:"title",label:"標題",type:"text",default:"從試點到穩定收入"},{key:"titleTail",label:"副標題",type:"text",default:"風險 \xB7 收入驗證"},{key:"lead",label:"導言",type:"text",default:"多數 AI 公司需要證明自己能從試點專案轉向穩定訂閱收入\uFF1B收入驗證要看留存\u3001毛利和客戶擴張\uFF0C而不是隻看 Logo\u3002"},{key:"statLine",label:"statLine",type:"text",default:"試點轉付費率 28% \xB7 企業年流失率 17%"},{key:"closing",label:"結語",type:"text",default:"客戶試點不等於商業化成功\u3002"},{key:"funnelTitle",label:"funnelTitle",type:"text",default:"試點 \u2192 付費 \u2192 穩定收入 \xB7 轉化漏斗"},{key:"stageCount",label:"階段數量",type:"slider",default:3,min:2,max:3,step:1,description:"轉化漏斗的階段數量\uFF082\u20133\uFF09\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"底部指標卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張指標卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的指標卡\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"漏斗階段數值與轉化率標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於漏斗\u3001轉化率與高亮卡\u3002"}],ig=`
.aic-rv { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-rv, .aic-rv * { box-sizing: border-box; }
.aic-rv .rv-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-rv .rv-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-rv .rv-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-rv .rv-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-rv .rv-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body container \u2014 flex column distributes lead / funnel / cards cleanly */
.aic-rv .rv-body { position: absolute; left: var(--pad); right: var(--pad); top: 296px; bottom: 150px;
  display: flex; flex-direction: column; }

/* lead band */
.aic-rv .rv-marker { display: flex; align-items: center; gap: 16px; }
.aic-rv .rv-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-rv .rv-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-rv .rv-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 0; max-width: 1480px; text-wrap: pretty; }

/* funnel */
.aic-rv .rv-funnel { flex: 1; min-height: 0; margin: 34px 0 0; display: flex; flex-direction: column; }
.aic-rv .rv-funnel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 18px; }
.aic-rv .rv-track { flex: 1; min-height: 0; display: flex; align-items: stretch; }
.aic-rv .rv-col { flex: 1 1 0; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; }
.aic-rv .rv-plot { position: relative; width: 100%; flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }
.aic-rv .rv-ghost { position: absolute; left: 50%; transform: translateX(-50%); width: 74%; height: 100%;
  border-radius: 20px; border: 2px dashed var(--aic-hair-strong); background: color-mix(in srgb, var(--aic-ink) 3%, transparent); }
.aic-rv .rv-block { position: relative; width: 74%; border-radius: 20px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 6px; overflow: hidden; z-index: 1;
  background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 84%);
  box-shadow: 0 22px 46px -26px color-mix(in srgb, var(--aic-accent) 72%, transparent);
  transition: height .6s cubic-bezier(.3,.7,.4,1); }
.aic-rv .rv-col[data-tier="1"] .rv-block { background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 64%, white), var(--aic-accent) 92%); }
.aic-rv .rv-col[data-tier="2"] .rv-block { background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 42%, white), color-mix(in srgb, var(--aic-accent) 78%, white) 96%); }
.aic-rv .rv-block-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 64px; line-height: .9;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; }
.aic-rv .rv-block-v u { text-decoration: none; font-size: 26px; font-weight: 600; margin-left: 2px; }
.aic-rv .rv-cap { margin-top: 18px; text-align: center; width: 100%; }
.aic-rv .rv-cap-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); }
.aic-rv .rv-cap-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; color: var(--aic-muted); margin-top: 4px; }
/* connector with conversion pill */
.aic-rv .rv-link { flex: none; width: 168px; position: relative; display: flex; align-items: center; justify-content: center; }
.aic-rv .rv-link::before { content: ''; position: absolute; left: 8px; right: 8px; top: 50%; height: 0;
  border-top: 2px dashed var(--aic-hair-strong); }
.aic-rv .rv-pill { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; border-radius: 999px; background: var(--aic-ink); color: var(--aic-paper);
  font-family: var(--aic-font-display); font-weight: 700; font-size: 21px; white-space: nowrap;
  font-variant-numeric: tabular-nums; }
.aic-rv .rv-pill svg { width: 16px; height: 16px; }

/* metric cards */
.aic-rv .rv-cards { flex: none; margin-top: 30px; display: grid; gap: 22px; }
.aic-rv .rv-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 20px;
  background: var(--aic-card); padding: 26px 28px 24px; overflow: hidden; transition: border-color .3s, background .3s; }
.aic-rv .rv-card[data-focus="1"] { border-color: transparent;
  background: linear-gradient(160deg, color-mix(in srgb, var(--aic-accent) 18%, var(--aic-card)), var(--aic-card) 80%); }
.aic-rv .rv-card[data-focus="1"]::after { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: var(--aic-accent); }
.aic-rv .rv-card-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 20px; color: var(--aic-muted); }
.aic-rv .rv-card-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 54px; line-height: 1;
  color: var(--aic-ink); margin-top: 12px; font-variant-numeric: tabular-nums; }
.aic-rv .rv-card[data-focus="1"] .rv-card-val { color: var(--aic-accent-deep); }
.aic-rv .rv-card-val u { text-decoration: none; font-size: 22px; font-weight: 600; color: var(--aic-muted); margin-left: 5px; }

.aic-rv .rv-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-rv .rv-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-rv .rv-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-rv .rv-deco { width: 300px; height: 30px; }
`,og=["neg","warn","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t}));function Dr(t){let a={...Rr,...t},e={...Ir,...Object.fromEntries(Object.entries(a).filter(([,o])=>o!==void 0))};y(),h("aic-rv",ig);let m=w(a.accentColor),i=Math.max(2,Math.min(e.stages.length,a.stageCount)),s=e.stages.slice(0,i),l=L(s.map(o=>o.value),1),f=Math.max(2,Math.min(e.metrics.length,Ta(a.metricCount,4))),p=e.metrics.slice(0,f),d=Math.max(0,Math.min(f-1,a.focusIndex)),n=o=>Math.max(20,M(o,l)*100)+"%";return ze("div",{className:"aic-rv",style:m,children:[a.showDecorations&&Ea("div",{className:"rv-glow"}),ze("div",{className:"rv-head",children:[ze("div",{children:[Ea("p",{className:"rv-eyebrow",children:e.eyebrow}),Ea("h2",{className:"rv-title",children:e.title})]}),Ea("div",{className:"rv-sub",children:e.titleTail})]}),ze("div",{className:"rv-body",children:[ze("div",{className:"rv-marker",children:[Ea("b",{}),Ea("span",{children:e.segment})]}),Ea("p",{className:"rv-lead",children:e.lead}),ze("div",{className:"rv-funnel",children:[Ea("p",{className:"rv-funnel-t",children:e.funnelTitle}),Ea("div",{className:"rv-track",children:s.map((o,r)=>ze(eg.Fragment,{children:[r>0&&Ea("div",{className:"rv-link",children:a.showValues&&o.conv&&ze("span",{className:"rv-pill",children:[Ea("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:Ea("path",{d:"M4 12h13M12 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round"})}),o.conv]})}),ze("div",{className:"rv-col","data-tier":r,children:[ze("div",{className:"rv-plot",children:[Ea("div",{className:"rv-ghost"}),Ea("div",{className:"rv-block",style:{height:n(o.value)},children:a.showValues&&ze("div",{className:"rv-block-v",children:[o.value,Ea("u",{children:"%"})]})})]}),ze("div",{className:"rv-cap",children:[Ea("div",{className:"rv-cap-n",children:o.name}),Ea("div",{className:"rv-cap-s",children:o.note})]})]})]},o.name))})]}),Ea("div",{className:"rv-cards",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:p.map((o,r)=>ze("div",{className:"rv-card","data-focus":a.focusEnabled&&r===d?"1":"0",children:[Ea("div",{className:"rv-card-lbl",children:o.lbl}),ze("div",{className:"rv-card-val",children:[o.val,Ea("u",{children:o.unit})]})]},o.lbl))})]}),ze("div",{className:"rv-foot",children:[ze("div",{className:"rv-closing",children:[Ea("b",{}),e.closing]}),a.showDecorations&&Ea("div",{className:"rv-deco",children:Ea(k,{data:og,gap:4})})]})]})}var Ao={};S(Ao,{controls:()=>cg,default:()=>Pr,defaultProps:()=>jr,numberBounds:()=>ng});import"react";import{jsx as Z,jsxs as ie}from"react/jsx-runtime";var Br={eyebrow:"Regulation Risk",marker:"監管合規",segment:"風險 \xB7 監管合規",title:"隱私\u3001版權與安全",titleTail:"風險 \xB7 監管合規",lead:"隱私\u3001版權\u3001安全和行業監管會增加交付成本\uFF1B監管會擠出缺乏治理能力的公司\u3002",statLine:"合規團隊增長 +42% \xB7 採購審查週期 +36% \xB7 版權風險事件 19 起",anchorValue:"58%",anchorLabel:"客戶要求資料隔離佔比",closing:"合規能力會成為企業採購門檻\u3002",colHeads:{dim:"風險維度",level:"風險強度",note:"成本與影響"},rows:[{dim:"隱私合規",level:88,note:"GDPR / CCPA\u3001資料最小化與脫敏要求"},{dim:"版權風險",level:76,note:"訓練語料與生成內容的版權追溯"},{dim:"資料安全",level:70,note:"資料隔離\u3001加密與訪問許可權控制"},{dim:"行業監管",level:58,note:"金融\u3001醫療等行業的准入與審計"},{dim:"內容安全",level:44,note:"有害內容過濾與生成留痕"}],flowTitle:"合規交付流程",flow:["資料接入","隱私脫敏","合規審查","審計留痕","安全交付"]},jr={...Br,rowCount:5,showLevel:!0,showFlow:!0,flowStepCount:5,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},ng={"rows[].level":{min:0,max:100,semantics:"percent"}},cg=[{key:"eyebrow",label:"眉標",type:"text",default:"Regulation Risk"},{key:"marker",label:"marker",type:"text",default:"監管合規"},{key:"segment",label:"segment",type:"text",default:"風險 \xB7 監管合規"},{key:"title",label:"標題",type:"text",default:"隱私\u3001版權與安全"},{key:"titleTail",label:"副標題",type:"text",default:"風險 \xB7 監管合規"},{key:"lead",label:"導言",type:"text",default:"隱私\u3001版權\u3001安全和行業監管會增加交付成本\uFF1B監管會擠出缺乏治理能力的公司\u3002"},{key:"statLine",label:"statLine",type:"text",default:"合規團隊增長 +42% \xB7 採購審查週期 +36% \xB7 版權風險事件 19 起"},{key:"anchorValue",label:"anchorValue",type:"text",default:"58%"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"客戶要求資料隔離佔比"},{key:"closing",label:"結語",type:"text",default:"合規能力會成為企業採購門檻\u3002"},{key:"flowTitle",label:"flowTitle",type:"text",default:"合規交付流程"},{key:"rowCount",label:"行數量",type:"slider",default:5,min:3,max:5,step:1,description:"風險表格展示的行數量\uFF083\u20135\uFF09\u3002"},{key:"showLevel",label:"強度列",type:"toggle",default:!0,description:"風險強度列\uFF08強度條 + 數值\uFF09的顯隱\u3002"},{key:"showFlow",label:"流程圖",type:"toggle",default:!0,description:"底部橫向合規流程條的顯隱\u3002"},{key:"flowStepCount",label:"流程數量",type:"slider",default:5,min:3,max:5,step:1,description:"流程節點數量\uFF083\u20135\uFF09\u3002",showWhen:t=>t.showFlow},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001高亮行與流程節點\u3002"}],lg=`
.aic-cmpl { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-cmpl, .aic-cmpl * { box-sizing: border-box; }
.aic-cmpl .cpl-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-warn) 20%, transparent), transparent 70%); }

.aic-cmpl .cpl-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-cmpl .cpl-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-cmpl .cpl-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-cmpl .cpl-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 anchor figure (right) */
.aic-cmpl .cpl-meta { position: absolute; left: var(--pad); right: var(--pad); top: 288px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-cmpl .cpl-meta-l { max-width: 1180px; }
.aic-cmpl .cpl-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-cmpl .cpl-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 56px; line-height: .8;
  color: var(--aic-warn); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; white-space: nowrap; }
.aic-cmpl .cpl-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-cmpl .cpl-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 12px; }
.aic-cmpl .cpl-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-cmpl .cpl-anchor { flex: none; text-align: right; }
.aic-cmpl .cpl-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 92px; line-height: .82;
  color: var(--aic-warn); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-cmpl .cpl-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* table */
.aic-cmpl .cpl-table { position: absolute; left: var(--pad); right: var(--pad); top: 506px; bottom: 320px;
  display: flex; flex-direction: column; }
.aic-cmpl[data-flow="0"] .cpl-table { bottom: 150px; }
.aic-cmpl .cpl-thead { display: grid; align-items: center; gap: 0 36px; padding: 0 26px 14px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-cmpl .cpl-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-cmpl .cpl-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-cmpl .cpl-row { flex: 1; display: grid; align-items: center; gap: 0 36px; padding: 0 26px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-cmpl .cpl-row:last-child { border-bottom: none; }
.aic-cmpl .cpl-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-cmpl .cpl-dim { display: flex; align-items: center; gap: 16px; }
.aic-cmpl .cpl-dim .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-warn); flex: none; opacity: .55; }
.aic-cmpl .cpl-row[data-focus="1"] .cpl-dim .dot { background: var(--aic-accent); opacity: 1; }
.aic-cmpl .cpl-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink); white-space: nowrap; }
.aic-cmpl .cpl-level { display: flex; align-items: center; gap: 18px; }
.aic-cmpl .cpl-level-track { flex: 1; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; min-width: 80px; }
.aic-cmpl .cpl-level-fill { height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--aic-warn) 70%, white), var(--aic-neg));
  transition: width .55s cubic-bezier(.3,.7,.4,1); }
.aic-cmpl .cpl-level-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 28px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; min-width: 96px; text-align: right; }
.aic-cmpl .cpl-level-v u { text-decoration: none; font-size: 17px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-cmpl .cpl-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 24px; color: var(--aic-ink-dim); }

/* compliance-flow ribbon */
.aic-cmpl .cpl-flow { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px; }
.aic-cmpl .cpl-flow-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-cmpl .cpl-flow-row { display: flex; align-items: stretch; }
.aic-cmpl .cpl-node { flex: 1 1 0; display: flex; align-items: center; gap: 14px; }
.aic-cmpl .cpl-node-box { flex: 1; display: flex; align-items: center; gap: 14px; padding: 18px 22px;
  border-radius: 14px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-cmpl .cpl-node-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-accent-deep);
  width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; flex: none;
  background: color-mix(in srgb, var(--aic-accent) 18%, transparent); }
.aic-cmpl .cpl-node-x { font-family: var(--aic-font-text); font-weight: 700; font-size: 23px; color: var(--aic-ink); white-space: nowrap; }
.aic-cmpl .cpl-arrow { flex: none; width: 32px; display: grid; place-items: center; color: var(--aic-hair-strong); }
.aic-cmpl .cpl-arrow svg { width: 20px; height: 20px; }

.aic-cmpl .cpl-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-cmpl .cpl-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-cmpl .cpl-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-cmpl .cpl-deco { width: 300px; height: 30px; }
`,rg=["neg","warn","neg","warn","accent","warn","pos","accent","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t}));function Pr(t){let a={...jr,...t},e={...Br,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-cmpl",lg);let m=w(a.accentColor),i=Math.max(3,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(r=>r.level),1),p=Math.max(3,Math.min(e.flow.length,a.flowStepCount)),d=e.flow.slice(0,p),n=["minmax(260px, 1fr)"];a.showLevel&&n.push("minmax(320px, 1.2fr)"),n.push("1.6fr");let o=n.join(" ");return ie("div",{className:"aic-cmpl",style:m,"data-flow":a.showFlow?"1":"0",children:[a.showDecorations&&Z("div",{className:"cpl-glow"}),ie("div",{className:"cpl-head",children:[ie("div",{children:[Z("p",{className:"cpl-eyebrow",children:e.eyebrow}),Z("h2",{className:"cpl-title",children:e.title})]}),Z("div",{className:"cpl-sub",children:e.titleTail})]}),ie("div",{className:"cpl-meta",children:[ie("div",{className:"cpl-meta-l",children:[ie("div",{className:"cpl-marker",children:[Z("b",{children:e.marker}),Z("span",{className:"cpl-season",children:e.segment})]}),Z("p",{className:"cpl-lead",children:e.lead}),Z("div",{className:"cpl-statline",children:e.statLine})]}),ie("div",{className:"cpl-anchor",children:[Z("div",{className:"cpl-anchor-v",children:e.anchorValue}),Z("div",{className:"cpl-anchor-l",children:e.anchorLabel})]})]}),ie("div",{className:"cpl-table",children:[ie("div",{className:"cpl-thead",style:{gridTemplateColumns:o},children:[Z("div",{className:"cpl-th",children:e.colHeads.dim}),a.showLevel&&Z("div",{className:"cpl-th",children:e.colHeads.level}),Z("div",{className:"cpl-th",children:e.colHeads.note})]}),Z("div",{className:"cpl-tbody",children:s.map((r,g)=>ie("div",{className:"cpl-row","data-focus":a.focusEnabled&&g===l?"1":"0",style:{gridTemplateColumns:o},children:[ie("div",{className:"cpl-dim",children:[Z("span",{className:"dot"}),Z("b",{children:r.dim})]}),a.showLevel&&ie("div",{className:"cpl-level",children:[Z("div",{className:"cpl-level-track",children:Z("div",{className:"cpl-level-fill",style:{width:M(r.level,f)*100+"%"}})}),ie("div",{className:"cpl-level-v",children:[r.level,Z("u",{children:"/100"})]})]}),Z("div",{className:"cpl-note",children:r.note})]},r.dim))})]}),a.showFlow&&ie("div",{className:"cpl-flow",children:[Z("p",{className:"cpl-flow-t",children:e.flowTitle}),Z("div",{className:"cpl-flow-row",children:d.map((r,g)=>ie("div",{className:"cpl-node",style:{flexGrow:g===d.length-1?0:1},children:[ie("div",{className:"cpl-node-box",children:[Z("span",{className:"cpl-node-n",children:g+1}),Z("span",{className:"cpl-node-x",children:r})]}),g<d.length-1&&Z("span",{className:"cpl-arrow",children:Z("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:Z("path",{d:"M4 12h14M13 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]},r))})]}),ie("div",{className:"cpl-foot",children:[ie("div",{className:"cpl-closing",children:[Z("b",{}),e.closing]}),a.showDecorations&&Z("div",{className:"cpl-deco",children:Z(k,{data:rg,gap:4})})]})]})}var Eo={};S(Eo,{controls:()=>sg,default:()=>Vr,defaultProps:()=>Hr});import"react";import{jsx as Na,jsxs as $e}from"react/jsx-runtime";var Or={eyebrow:"Compute Cost Risk",title:"毛利天花板",sub:"風險 \xB7 算力成本",kicker:"訓練預算壓力",numLead:"61",numTail:"",numUnit:"%",numCaption:"訓練預算模擬增長幅度",ceilingLabel:"毛利天花板",gaugeCap:"每 1 元收入的成本構成",gaugeAnnotation:"成本侵蝕",gauge:[{label:"算力成本",value:31,tone:"neg"},{label:"其他成本",value:15,tone:"faint"},{label:"可分配毛利",value:54,tone:"accent"}],note:"如果推理成本降不下來\uFF0C收入增長會被毛利吞掉\u3002",closing:"算力成本是模型商業化的硬約束\u3002",aux:[{label:"推理成本佔收入",value:"31",unit:"%"},{label:"毛利率中位數",value:"54",unit:"%"},{label:"單位推理成本",value:"-19",unit:"%"}]},Hr={...Or,numberSlant:!0,auxCount:3,showCaption:!0,showGauge:!0,showNote:!0,showLens:!0,showDecorations:!0,accentColor:c.accent},sg=[{key:"eyebrow",label:"眉標",type:"text",default:"Compute Cost Risk"},{key:"title",label:"標題",type:"text",default:"毛利天花板"},{key:"sub",label:"次標題",type:"text",default:"風險 \xB7 算力成本"},{key:"kicker",label:"kicker",type:"text",default:"訓練預算壓力"},{key:"numLead",label:"numLead",type:"text",default:"61"},{key:"numUnit",label:"numUnit",type:"text",default:"%"},{key:"numCaption",label:"numCaption",type:"text",default:"訓練預算模擬增長幅度"},{key:"ceilingLabel",label:"ceilingLabel",type:"text",default:"毛利天花板"},{key:"gaugeCap",label:"gaugeCap",type:"text",default:"每 1 元收入的成本構成"},{key:"note",label:"note",type:"text",default:"如果推理成本降不下來\uFF0C收入增長會被毛利吞掉\u3002"},{key:"closing",label:"結語",type:"text",default:"算力成本是模型商業化的硬約束\u3002"},{key:"numberSlant",label:"數字傾斜",type:"toggle",default:!0,description:"主數字是否應用品牌斜切\uFF08italic-slant\uFF09效果\u3002"},{key:"auxCount",label:"卡片數量",type:"slider",default:3,min:0,max:3,step:1,description:"輔助指標數量\uFF080\u20133\uFF09\uFF1B為 0 時只保留主數字\u3002"},{key:"showCaption",label:"說明文案",type:"toggle",default:!0,description:"主數字下方解釋性說明的顯隱\u3002"},{key:"showGauge",label:"示意圖形",type:"toggle",default:!0,description:"成本 / 毛利構成的天花板示意條的顯隱\u3002"},{key:"showNote",label:"輔助註釋",type:"toggle",default:!0,description:"底部補充註釋的顯隱\u3002"},{key:"showLens",label:"品牌圖形",type:"toggle",default:!0,description:"品牌透鏡圖形\uFF08焦點圓盤\uFF09的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於主數字點綴\u3001毛利段與品牌圖形\u3002"}];var pg=`
.aic-mg { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-mg, .aic-mg * { box-sizing: border-box; }
.aic-mg .mg-glow { position: absolute; left: 34%; top: 22%; width: 60%; height: 66%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 72%); }
.aic-mg .mg-lens { position: absolute; right: -150px; bottom: -170px; width: 600px; height: 600px; opacity: .5; pointer-events: none; }

.aic-mg .mg-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-mg .mg-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-mg .mg-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 60px; line-height: .96; margin: 0; }
.aic-mg .mg-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* left zone: number + gauge + note (flex column) */
.aic-mg .mg-left { position: absolute; left: var(--pad); top: 300px; width: 1060px; bottom: 138px;
  display: flex; flex-direction: column; }

/* hero number */
.aic-mg .mg-kicker { display: flex; align-items: center; gap: 16px; margin: 0 0 6px; }
.aic-mg .mg-kicker b { width: 64px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-mg .mg-kicker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px; letter-spacing: .16em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-mg .mg-bignum { line-height: .8; }
.aic-mg .mg-caption { font-family: var(--aic-font-text); font-weight: 600; font-size: 34px; color: var(--aic-ink-dim);
  margin: 16px 0 0; max-width: 980px; }

/* margin-ceiling gauge */
.aic-mg .mg-gauge { margin-top: 34px; }
.aic-mg .mg-gauge-cap { display: flex; align-items: center; justify-content: space-between;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 12px; }
.aic-mg .mg-gauge-cap > span { white-space: nowrap; }
.aic-mg .mg-gauge-cap s { text-decoration: none; display: inline-flex; align-items: center; gap: 8px; color: var(--aic-neg); white-space: nowrap; }
.aic-mg .mg-gauge-cap s::before { content: ''; width: 26px; height: 0; border-top: 2px dashed var(--aic-neg); }
.aic-mg .mg-bar { display: flex; height: 88px; border-radius: 16px; overflow: hidden; border: 1.5px solid var(--aic-hair);
  background: var(--aic-card); }
.aic-mg .mg-seg { display: flex; flex-direction: column; justify-content: center; gap: 4px; padding: 0 22px;
  position: relative; min-width: 0; transition: flex-basis .6s cubic-bezier(.3,.7,.4,1); }
.aic-mg .mg-seg + .mg-seg { border-left: 2px solid var(--aic-paper); }
.aic-mg .mg-seg-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 18px; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; }
.aic-mg .mg-seg-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; line-height: 1;
  font-variant-numeric: tabular-nums; }
.aic-mg .mg-seg[data-tone="neg"]   { background: color-mix(in srgb, var(--aic-neg) 13%, var(--aic-card)); }
.aic-mg .mg-seg[data-tone="neg"] .mg-seg-l,
.aic-mg .mg-seg[data-tone="neg"] .mg-seg-v { color: var(--aic-neg); }
.aic-mg .mg-seg[data-tone="faint"] { background: color-mix(in srgb, var(--aic-ink) 5%, var(--aic-card)); }
.aic-mg .mg-seg[data-tone="faint"] .mg-seg-l,
.aic-mg .mg-seg[data-tone="faint"] .mg-seg-v { color: var(--aic-muted); }
.aic-mg .mg-seg[data-tone="accent"] { background: linear-gradient(150deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 96%); }
.aic-mg .mg-seg[data-tone="accent"] .mg-seg-l { color: var(--aic-accent-deep); }
.aic-mg .mg-seg[data-tone="accent"] .mg-seg-v { color: var(--aic-ink); }
/* ceiling line on top of the gauge */
.aic-mg .mg-ceiling { display: flex; align-items: center; gap: 14px; margin: 0 0 10px; }
.aic-mg .mg-ceiling i { flex: 1; height: 0; border-top: 3px solid var(--aic-ink); }
.aic-mg .mg-ceiling span { font-family: var(--aic-font-display); font-weight: 700; font-size: 18px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--aic-ink); white-space: nowrap; }

/* supporting metrics \u2014 right column, vertical cards (fills right zone) */
.aic-mg .mg-aux { position: absolute; right: var(--pad); top: 352px; width: 560px;
  display: flex; flex-direction: column; gap: 24px; }
.aic-mg .mg-aux-item { display: flex; flex-direction: column; gap: 8px; padding: 24px 30px;
  border-radius: 20px; background: var(--aic-card); border: 1.5px solid var(--aic-hair); border-left: 6px solid var(--aic-accent); }
.aic-mg .mg-aux-lbl { font-family: var(--aic-font-text); font-weight: 600; font-size: 22px; color: var(--aic-muted); }
.aic-mg .mg-aux-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 56px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; line-height: 1; }
.aic-mg .mg-aux-val u { text-decoration: none; font-size: 22px; font-weight: 600; color: var(--aic-muted); margin-left: 6px; }

.aic-mg .mg-note { margin-top: auto; padding-top: 24px;
  font-family: var(--aic-font-text); font-weight: 500; font-size: 24px; color: var(--aic-muted);
  display: flex; align-items: center; gap: 14px; max-width: 1000px; }
.aic-mg .mg-note::before { content: ''; width: 26px; height: 2px; background: var(--aic-hair-strong); flex: none; }

.aic-mg .mg-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-mg .mg-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-mg .mg-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-mg .mg-deco { width: 300px; height: 30px; }
`,dg=["neg","warn","neg","warn","accent","warn","pos","accent","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t})),fg=[{x:40,y:36,d:54},{x:66,y:30,d:38},{x:56,y:64,d:48},{x:80,y:58,d:28}];function Vr(t){let a={...Hr,...t},e={...Or,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-mg",pg);let m=w(a.accentColor),i=Math.max(0,Math.min(e.aux.length,a.auxCount)),s=e.aux.slice(0,i);return $e("div",{className:"aic-mg",style:m,children:[a.showDecorations&&Na("div",{className:"mg-glow"}),a.showLens&&Na("div",{className:"mg-lens",children:Na(A,{discs:fg})}),$e("div",{className:"mg-head",children:[$e("div",{children:[Na("p",{className:"mg-eyebrow",children:e.eyebrow}),Na("h2",{className:"mg-title",children:e.title})]}),Na("div",{className:"mg-sub",children:e.sub})]}),$e("div",{className:"mg-left",children:[$e("div",{className:"mg-kicker",children:[Na("b",{}),Na("span",{children:e.kicker})]}),Na("div",{className:"mg-bignum",children:Na(ha,{lead:e.numLead,tail:e.numTail,unit:e.numUnit,slant:a.numberSlant,size:230})}),a.showCaption&&Na("p",{className:"mg-caption",children:e.numCaption}),a.showGauge&&$e("div",{className:"mg-gauge",children:[$e("div",{className:"mg-ceiling",children:[Na("span",{children:e.ceilingLabel}),Na("i",{})]}),$e("div",{className:"mg-gauge-cap",children:[Na("span",{children:e.gaugeCap}),Na("s",{children:e.gaugeAnnotation})]}),Na("div",{className:"mg-bar",children:e.gauge.map(l=>$e("div",{className:"mg-seg","data-tone":l.tone,style:{flex:`${l.value} 0 0%`},children:[Na("span",{className:"mg-seg-l",children:l.label}),$e("span",{className:"mg-seg-v",children:[l.value,"%"]})]},l.label))})]}),a.showNote&&Na("div",{className:"mg-note",children:e.note})]}),i>0&&Na("div",{className:"mg-aux",children:s.map(l=>$e("div",{className:"mg-aux-item",children:[Na("div",{className:"mg-aux-lbl",children:l.label}),$e("div",{className:"mg-aux-val",children:[l.value,Na("u",{children:l.unit})]})]},l.label))}),$e("div",{className:"mg-foot",children:[$e("div",{className:"mg-closing",children:[Na("b",{}),e.closing]}),a.showDecorations&&Na("div",{className:"mg-deco",children:Na(k,{data:dg,gap:4})})]})]})}var To={};S(To,{controls:()=>gg,default:()=>Ur,defaultProps:()=>$r,numberBounds:()=>mg});import"react";import{jsx as va,jsxs as Va}from"react/jsx-runtime";var qr={eyebrow:"Open Source Risk",marker:"開源與大廠競爭",segment:"風險 \xB7 開源與大廠競爭",title:"壁壘被壓縮",titleTail:"風險 \xB7 開源與大廠競爭",lead:"開源模型降低能力門檻\uFF0C大廠生態壓縮初創公司的獨立空間\uFF1B初創公司必須找到資料\u3001工作流或行業入口壁壘\u3002",closing:"沒有壁壘的模型能力會迅速商品化\u3002",bandTitle:"初創公司獨立空間 \xB7 被兩側壓縮",bandLeft:"開源可替代",bandRight:"大廠生態覆蓋",bandCore:"剩餘壁壘",bandCoreSub:"資料 \xB7 工作流 \xB7 行業入口",metersTitle:"競爭壓力 \xB7 逼近壁壘線",thresholdLabel:"壁壘線",threshold:60,indicators:[{name:"開源模型效能逼近",value:86,note:"能力差距快速收窄"},{name:"大廠產品覆蓋",value:72,note:"原生整合擠壓入口"},{name:"企業自建意願",value:34,note:"內部團隊替代採購"}]},$r={...qr,chartType:"pressure",segmentCount:3,focusEnabled:!0,focusIndex:0,showBand:!0,showValues:!0,showDecorations:!0,accentColor:c.accent},mg={"indicators[].value":{min:0,max:100,semantics:"percent"}},gg=[{key:"eyebrow",label:"眉標",type:"text",default:"Open Source Risk"},{key:"marker",label:"marker",type:"text",default:"開源與大廠競爭"},{key:"segment",label:"segment",type:"text",default:"風險 \xB7 開源與大廠競爭"},{key:"title",label:"標題",type:"text",default:"壁壘被壓縮"},{key:"titleTail",label:"副標題",type:"text",default:"風險 \xB7 開源與大廠競爭"},{key:"lead",label:"導言",type:"text",default:"開源模型降低能力門檻\uFF0C大廠生態壓縮初創公司的獨立空間\uFF1B初創公司必須找到資料\u3001工作流或行業入口壁壘\u3002"},{key:"closing",label:"結語",type:"text",default:"沒有壁壘的模型能力會迅速商品化\u3002"},{key:"bandTitle",label:"bandTitle",type:"text",default:"初創公司獨立空間 \xB7 被兩側壓縮"},{key:"bandLeft",label:"bandLeft",type:"text",default:"開源可替代"},{key:"bandRight",label:"bandRight",type:"text",default:"大廠生態覆蓋"},{key:"bandCore",label:"bandCore",type:"text",default:"剩餘壁壘"},{key:"bandCoreSub",label:"bandCoreSub",type:"text",default:"資料 \xB7 工作流 \xB7 行業入口"},{key:"metersTitle",label:"metersTitle",type:"text",default:"競爭壓力 \xB7 逼近壁壘線"},{key:"thresholdLabel",label:"thresholdLabel",type:"text",default:"壁壘線"},{key:"chartType",label:"圖表型別",type:"radio",default:"pressure",options:[{value:"pressure",label:"壓力計"},{value:"bars",label:"佔比條"}],description:"主圖表樣式\uFF1A逼近壁壘線的壓力計 / 資金佔比條\u3002"},{key:"segmentCount",label:"卡片數量",type:"slider",default:3,min:2,max:3,step:1,description:"競爭壓力指標數量\uFF082\u20133\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個壓力指標作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"}],description:"選擇被高亮的壓力指標\u3002",showWhen:t=>t.focusEnabled},{key:"showBand",label:"示意圖形",type:"toggle",default:!0,description:"上方\u201C獨立空間被壓縮\u201D示意帶的顯隱\u3002",showWhen:t=>t.chartType==="pressure"},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"壓力指標數值標籤的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於賽道標記\u3001剩餘壁壘與高亮指標\u3002"}],ug=`
.aic-mt { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-mt, .aic-mt * { box-sizing: border-box; }
.aic-mt .mt-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-warn) 18%, transparent), transparent 70%); }

.aic-mt .mt-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-mt .mt-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-mt .mt-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-mt .mt-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body \u2014 flex column: lead / band / meters */
.aic-mt .mt-body { position: absolute; left: var(--pad); right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-mt .mt-marker { display: flex; align-items: center; gap: 16px; }
.aic-mt .mt-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-mt .mt-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-mt .mt-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 0; max-width: 1480px; text-wrap: pretty; }

/* squeeze band */
.aic-mt .mt-band { margin-top: 32px; }
.aic-mt .mt-band-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 16px; }
.aic-mt .mt-lane { display: flex; align-items: stretch; height: 150px; border-radius: 18px; overflow: hidden;
  border: 1.5px solid var(--aic-hair); background: var(--aic-card); }
.aic-mt .mt-side { position: relative; display: flex; flex-direction: column; justify-content: center; gap: 6px;
  padding: 0 30px; color: var(--aic-paper); transition: flex-basis .6s cubic-bezier(.3,.7,.4,1); }
.aic-mt .mt-side.l { background: linear-gradient(90deg, color-mix(in srgb, var(--aic-neg) 90%, black) 0%, var(--aic-neg) 100%); align-items: flex-start; }
.aic-mt .mt-side.r { background: linear-gradient(90deg, var(--aic-ink) 0%, color-mix(in srgb, var(--aic-ink) 78%, black) 100%); align-items: flex-end; text-align: right; }
.aic-mt .mt-side-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; opacity: .92; white-space: nowrap; }
.aic-mt .mt-side-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 40px; line-height: 1; font-variant-numeric: tabular-nums; }
.aic-mt .mt-side.l::after, .aic-mt .mt-side.r::before { content: ''; position: absolute; top: 50%; transform: translateY(-50%);
  width: 0; height: 0; border-top: 16px solid transparent; border-bottom: 16px solid transparent; }
.aic-mt .mt-side.l::after { right: -1px; border-left: 18px solid var(--aic-neg); }
.aic-mt .mt-side.r::before { left: -1px; border-right: 18px solid var(--aic-ink); }
.aic-mt .mt-core { flex: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  padding: 0 14px; text-align: center; z-index: 2;
  background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 86%);
  box-shadow: 0 0 0 4px var(--aic-card), 0 18px 40px -20px color-mix(in srgb, var(--aic-accent) 80%, transparent);
  transition: flex-basis .6s cubic-bezier(.3,.7,.4,1); }
.aic-mt .mt-core-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); white-space: nowrap; }
.aic-mt .mt-core-s { font-family: var(--aic-font-text); font-weight: 600; font-size: 15px; color: var(--aic-accent-deep); white-space: nowrap; }

/* pressure meters */
.aic-mt .mt-meters { flex: 1; min-height: 0; margin-top: 30px; display: flex; flex-direction: column; }
.aic-mt .mt-meters-t { display: flex; align-items: center; justify-content: space-between;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 6px; }
.aic-mt .mt-meters-t > span { white-space: nowrap; }
.aic-mt .mt-meters-t s { text-decoration: none; display: inline-flex; align-items: center; gap: 8px; color: var(--aic-ink); white-space: nowrap; }
.aic-mt .mt-meters-t s::before { content: ''; width: 22px; height: 0; border-top: 2px dashed var(--aic-ink); }
.aic-mt .mt-list { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center; gap: 26px; }
.aic-mt .mt-meter { display: grid; grid-template-columns: 360px 1fr 96px; align-items: center; gap: 0 28px; transition: opacity .3s; }
.aic-mt .mt-meter[data-dim="1"] { opacity: .42; }
.aic-mt .mt-meter-h { }
.aic-mt .mt-meter-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 30px; color: var(--aic-ink); line-height: 1.1; }
.aic-mt .mt-meter[data-focus="1"] .mt-meter-n { color: var(--aic-accent-deep); }
.aic-mt .mt-meter-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); margin-top: 3px; }
.aic-mt .mt-gauge { position: relative; }
.aic-mt .mt-gauge-track { height: 30px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-mt .mt-gauge-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1);
  background: linear-gradient(90deg, color-mix(in srgb, var(--aic-accent) 60%, white), var(--aic-accent)); }
.aic-mt .mt-meter[data-breach="1"] .mt-gauge-fill { background: linear-gradient(90deg, var(--aic-warn), var(--aic-neg)); }
.aic-mt .mt-line { position: absolute; top: -8px; bottom: -8px; width: 0; border-left: 2.5px dashed var(--aic-ink); }
.aic-mt .mt-line span { position: absolute; top: -26px; left: 50%; transform: translateX(-50%); white-space: nowrap;
  font-family: var(--aic-font-display); font-weight: 700; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: var(--aic-ink); }
.aic-mt .mt-val { font-family: var(--aic-font-display); font-weight: 700; font-size: 32px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; text-align: right; }
.aic-mt .mt-meter[data-breach="1"] .mt-val { color: var(--aic-neg); }

/* bars mode */
.aic-mt .mt-bars { flex: 1; min-height: 0; margin-top: 30px; display: flex; flex-direction: column; justify-content: center; gap: 40px; }

.aic-mt .mt-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-mt .mt-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-mt .mt-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-mt .mt-deco { width: 300px; height: 30px; }
`,xg=["neg","warn","neg","warn","accent","warn","pos","accent","warn","accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","warn","pos","accent","pos"].map(t=>({tone:t})),Wr=["linear-gradient(90deg, var(--aic-warn), var(--aic-neg))","color-mix(in srgb, var(--aic-ink) 80%, white)","color-mix(in srgb, var(--aic-accent) 52%, white)"];function Ur(t){let a={...$r,...t},e={...qr,...Object.fromEntries(Object.entries(a).filter(([,u])=>u!==void 0))};y(),h("aic-mt",ug);let m=w(a.accentColor),i=Math.max(2,Math.min(e.indicators.length,a.segmentCount)),s=e.indicators.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=e.threshold,p=e.indicators[0]?.value??0,d=e.indicators[1]?.value??0,n=16,o=100-n,r=M(o*p,p+d,o/2),g=o-r;return Va("div",{className:"aic-mt",style:m,children:[a.showDecorations&&va("div",{className:"mt-glow"}),Va("div",{className:"mt-head",children:[Va("div",{children:[va("p",{className:"mt-eyebrow",children:e.eyebrow}),va("h2",{className:"mt-title",children:e.title})]}),va("div",{className:"mt-sub",children:e.titleTail})]}),Va("div",{className:"mt-body",children:[Va("div",{className:"mt-marker",children:[va("b",{}),va("span",{children:e.segment})]}),va("p",{className:"mt-lead",children:e.lead}),a.chartType==="pressure"&&a.showBand&&Va("div",{className:"mt-band",children:[va("p",{className:"mt-band-t",children:e.bandTitle}),Va("div",{className:"mt-lane",children:[Va("div",{className:"mt-side l",style:{flex:`${r} 0 0%`},children:[va("span",{className:"mt-side-l",children:e.bandLeft}),a.showValues&&Va("span",{className:"mt-side-v",children:[p,"%"]})]}),Va("div",{className:"mt-core",style:{flex:`${n} 0 0%`},children:[va("span",{className:"mt-core-n",children:e.bandCore}),va("span",{className:"mt-core-s",children:e.bandCoreSub})]}),Va("div",{className:"mt-side r",style:{flex:`${g} 0 0%`},children:[va("span",{className:"mt-side-l",children:e.bandRight}),a.showValues&&Va("span",{className:"mt-side-v",children:[d,"%"]})]})]})]}),a.chartType==="pressure"?Va("div",{className:"mt-meters",children:[Va("div",{className:"mt-meters-t",children:[va("span",{children:e.metersTitle}),Va("s",{children:[e.thresholdLabel," ",f,"%"]})]}),va("div",{className:"mt-list",children:s.map((u,v)=>Va("div",{className:"mt-meter","data-focus":a.focusEnabled&&v===l?"1":"0","data-dim":a.focusEnabled&&v!==l?"1":"0","data-breach":u.value>=f?"1":"0",children:[Va("div",{className:"mt-meter-h",children:[va("div",{className:"mt-meter-n",children:u.name}),va("div",{className:"mt-meter-s",children:u.note})]}),Va("div",{className:"mt-gauge",children:[va("div",{className:"mt-gauge-track",children:va("div",{className:"mt-gauge-fill",style:{width:u.value+"%"}})}),va("div",{className:"mt-line",style:{left:f+"%"}})]}),va("div",{className:"mt-val",children:a.showValues?u.value+"%":""})]},u.name))})]}):va("div",{className:"mt-bars",children:s.map((u,v)=>va(he,{label:u.name,display:u.value+"%",value:u.value,color:Wr[v%Wr.length],focus:a.focusEnabled&&v===l,dim:a.focusEnabled&&v!==l},u.name))})]}),Va("div",{className:"mt-foot",children:[Va("div",{className:"mt-closing",children:[va("b",{}),e.closing]}),a.showDecorations&&va("div",{className:"mt-deco",children:va(k,{data:xg,gap:4})})]})]})}var Mo={};S(Mo,{controls:()=>hg,default:()=>Xr,defaultProps:()=>_r,numberBounds:()=>vg});import"react";import{jsx as za,jsxs as Ce}from"react/jsx-runtime";var Yr={eyebrow:"Infrastructure Strategy",segment:"策略 \xB7 優先基礎設施",title:"確定性預算",titleTail:"策略 \xB7 優先基礎設施",lead:"基礎設施公司更接近剛性預算\uFF0C收入確定性相對更強\uFF1B模型勝負未定時\uFF0C賣鏟子仍是更穩的資本邏輯\u3002",closing:"優先看能支撐全行業增長的基礎設施\u3002",criteriaTitle:"篩選指標 \xB7 Screening",criteria:[{name:"收入增速",note:"是否有剛性放量需求"},{name:"毛利率",note:"成本結構是否健康"},{name:"客戶集中度",note:"收入是否過度依賴少數客戶"},{name:"資源鎖定",note:"是否繫結算力 / 資料資源"}],cardsTitle:"推薦方向 \xB7 Infrastructure",cards:[{name:"GPU 雲",en:"Compute Cloud",note:"剛性算力預算\uFF0C最接近行業級基礎需求\u3002",certainty:92},{name:"資料平台",en:"Data Platform",note:"訓練與評測的資料底座\uFF0C複用性強\u3002",certainty:84},{name:"推理最佳化",en:"Inference Opt.",note:"直接壓低單位推理成本\uFF0C剛需且可量化\u3002",certainty:80},{name:"評測工具",en:"Eval & Bench",note:"模型選型的度量入口\uFF0C繫結決策鏈路\u3002",certainty:74}]},_r={...Yr,cardCount:4,columns:2,criteriaCount:4,focusEnabled:!0,focusIndex:0,showMeter:!0,showDecorations:!0,accentColor:c.accent},vg={"cards[].certainty":{min:0,max:100,semantics:"percent"}},hg=[{key:"eyebrow",label:"眉標",type:"text",default:"Infrastructure Strategy"},{key:"segment",label:"segment",type:"text",default:"策略 \xB7 優先基礎設施"},{key:"title",label:"標題",type:"text",default:"確定性預算"},{key:"titleTail",label:"副標題",type:"text",default:"策略 \xB7 優先基礎設施"},{key:"lead",label:"導言",type:"text",default:"基礎設施公司更接近剛性預算\uFF0C收入確定性相對更強\uFF1B模型勝負未定時\uFF0C賣鏟子仍是更穩的資本邏輯\u3002"},{key:"closing",label:"結語",type:"text",default:"優先看能支撐全行業增長的基礎設施\u3002"},{key:"criteriaTitle",label:"criteriaTitle",type:"text",default:"篩選指標 \xB7 Screening"},{key:"cardsTitle",label:"cardsTitle",type:"text",default:"推薦方向 \xB7 Infrastructure"},{key:"cardCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"推薦方向卡數量\uFF082\u20134\uFF09\u3002"},{key:"columns",label:"每行列數",type:"radio",default:2,options:[{value:1,label:"1 列"},{value:2,label:"2 列"}],description:"卡片網格每行的列數\u3002"},{key:"criteriaCount",label:"清單條目",type:"slider",default:4,min:2,max:4,step:1,description:"左側篩選指標清單的條目數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張推薦方向卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 張"},{value:1,label:"第 2 張"},{value:2,label:"第 3 張"},{value:3,label:"第 4 張"}],description:"選擇被高亮的方向卡\u3002",showWhen:t=>t.focusEnabled},{key:"showMeter",label:"示意圖形",type:"toggle",default:!0,description:"卡片上的確定性強度條顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於強度條\u3001高亮卡與序號\u3002"}],bg=`
.aic-sif { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-sif, .aic-sif * { box-sizing: border-box; }
.aic-sif .si-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-sif .si-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-sif .si-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-sif .si-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-sif .si-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body \u2014 two-column editorial split */
.aic-sif .si-body { position: absolute; left: var(--pad); right: var(--pad); top: 300px; bottom: 150px;
  display: grid; grid-template-columns: 580px 1fr; gap: 60px; }

/* left rail */
.aic-sif .si-rail { display: flex; flex-direction: column; min-height: 0; }
.aic-sif .si-marker { display: flex; align-items: center; gap: 16px; }
.aic-sif .si-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-sif .si-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-sif .si-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.48;
  color: var(--aic-ink); margin: 20px 0 0; text-wrap: pretty; }
.aic-sif .si-crit-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 40px 0 8px; }
.aic-sif .si-crit { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center; }
.aic-sif .si-crit-row { display: flex; align-items: baseline; gap: 22px; padding: 18px 0;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-sif .si-crit-row:last-child { border-bottom: 0; }
.aic-sif .si-crit-idx { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-accent-deep);
  width: 34px; flex: none; font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; }
.aic-sif .si-crit-main { display: flex; flex-direction: column; gap: 3px; }
.aic-sif .si-crit-n { font-family: var(--aic-font-text); font-weight: 700; font-size: 28px; color: var(--aic-ink); line-height: 1.1; }
.aic-sif .si-crit-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; color: var(--aic-muted); line-height: 1.3; }

/* right \u2014 direction cards */
.aic-sif .si-cards-wrap { display: flex; flex-direction: column; min-height: 0; }
.aic-sif .si-cards-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 18px; }
.aic-sif .si-cards { flex: 1; min-height: 0; display: grid; gap: 24px; }
.aic-sif .si-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 22px;
  background: var(--aic-card); padding: 30px 32px 26px; overflow: hidden; display: flex; flex-direction: column;
  transition: border-color .3s, background .3s, transform .3s, box-shadow .3s; }
.aic-sif .si-card[data-focus="1"] { border-color: transparent; transform: translateY(-4px);
  background: linear-gradient(158deg, color-mix(in srgb, var(--aic-accent) 18%, var(--aic-card)), var(--aic-card) 78%);
  box-shadow: 0 26px 60px -32px color-mix(in srgb, var(--aic-accent) 66%, transparent); }
.aic-sif .si-card[data-dim="1"] { opacity: .5; }
.aic-sif .si-card-hd { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
.aic-sif .si-card-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 20px; color: var(--aic-faint);
  font-variant-numeric: tabular-nums; }
.aic-sif .si-card[data-focus="1"] .si-card-no { color: var(--aic-accent-deep); }
.aic-sif .si-card-en { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-sif .si-card-n { font-family: var(--aic-font-text); font-weight: 900; font-size: 38px; line-height: 1; color: var(--aic-ink); margin: 14px 0 0; }
.aic-sif .si-card-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 21px; line-height: 1.42;
  color: var(--aic-ink-dim); margin: 12px 0 0; text-wrap: pretty; }
.aic-sif .si-meter { margin-top: auto; padding-top: 22px; }
.aic-sif .si-meter-t { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 9px; }
.aic-sif .si-meter-l { font-family: var(--aic-font-display); font-weight: 600; font-size: 16px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-sif .si-meter-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-sif .si-card[data-focus="1"] .si-meter-v { color: var(--aic-accent-deep); }
.aic-sif .si-meter-track { height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; }
.aic-sif .si-meter-fill { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.3,.7,.4,1);
  background: linear-gradient(90deg, color-mix(in srgb, var(--aic-accent) 58%, white), var(--aic-accent)); }

.aic-sif .si-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-sif .si-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-sif .si-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-sif .si-deco { width: 300px; height: 30px; }
`,yg=["accent","pos","accent","pos","warn","accent","pos","pos","accent","pos","warn","accent","pos","accent","pos","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","pos","accent","pos","warn","accent"].map(t=>({tone:t}));function Xr(t){let a={..._r,...t},e={...Yr,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-sif",bg);let m=w(a.accentColor),i=Math.max(2,Math.min(e.cards.length,a.cardCount)),s=e.cards.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(1,Math.min(2,a.columns)),p=Math.max(2,Math.min(e.criteria.length,a.criteriaCount)),d=e.criteria.slice(0,p);return Ce("div",{className:"aic-sif",style:m,children:[a.showDecorations&&za("div",{className:"si-glow"}),Ce("div",{className:"si-head",children:[Ce("div",{children:[za("p",{className:"si-eyebrow",children:e.eyebrow}),za("h2",{className:"si-title",children:e.title})]}),za("div",{className:"si-sub",children:e.titleTail})]}),Ce("div",{className:"si-body",children:[Ce("div",{className:"si-rail",children:[Ce("div",{className:"si-marker",children:[za("b",{}),za("span",{children:e.segment})]}),za("p",{className:"si-lead",children:e.lead}),za("p",{className:"si-crit-t",children:e.criteriaTitle}),za("div",{className:"si-crit",children:d.map((n,o)=>Ce("div",{className:"si-crit-row",children:[za("span",{className:"si-crit-idx",children:String(o+1).padStart(2,"0")}),Ce("div",{className:"si-crit-main",children:[za("span",{className:"si-crit-n",children:n.name}),za("span",{className:"si-crit-s",children:n.note})]})]},n.name))})]}),Ce("div",{className:"si-cards-wrap",children:[za("p",{className:"si-cards-t",children:e.cardsTitle}),za("div",{className:"si-cards",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:s.map((n,o)=>Ce("div",{className:"si-card","data-focus":a.focusEnabled&&o===l?"1":"0","data-dim":a.focusEnabled&&o!==l?"1":"0",children:[Ce("div",{className:"si-card-hd",children:[za("span",{className:"si-card-no",children:String(o+1).padStart(2,"0")}),za("span",{className:"si-card-en",children:n.en})]}),za("h3",{className:"si-card-n",children:n.name}),za("p",{className:"si-card-note",children:n.note}),a.showMeter&&Ce("div",{className:"si-meter",children:[Ce("div",{className:"si-meter-t",children:[za("span",{className:"si-meter-l",children:"確定性"}),Ce("span",{className:"si-meter-v",children:[n.certainty,"%"]})]}),za("div",{className:"si-meter-track",children:za("div",{className:"si-meter-fill",style:{width:n.certainty+"%"}})})]})]},n.name))})]})]}),Ce("div",{className:"si-foot",children:[Ce("div",{className:"si-closing",children:[za("b",{}),e.closing]}),a.showDecorations&&za("div",{className:"si-deco",children:za(k,{data:yg,gap:4})})]})]})}var Lo={};S(Lo,{controls:()=>kg,default:()=>Kr,defaultProps:()=>Qr});import wg from"react";import{jsx as ga,jsxs as Ue}from"react/jsx-runtime";var Gr={eyebrow:"Vertical Strategy",segment:"策略 \xB7 篩選垂直應用",title:"嵌入工作流",titleTail:"策略 \xB7 篩選垂直應用",lead:"垂直應用要看是否嵌入剛性流程\uFF0C而不是隻看生成效果\uFF1B好的垂直 AI 應用應該成為工作流的一部分\u3002",closing:"應用價值來自流程位置\u3002",flowTitle:"業務工作流 \xB7 AI 嵌入位置",steps:[{name:"業務觸發",en:"Trigger",note:"真實工作請求進入"},{name:"資料準備",en:"Context",note:"上下文與資料彙集"},{name:"AI 處理",en:"AI Embed",note:"嵌入式生成與決策",embed:!0},{name:"人工複核",en:"Review",note:"專家確認與修訂"},{name:"結果交付",en:"Deliver",note:"回寫至業務系統"}],embedNodeTag:"嵌入點",cardsTitle:"篩選維度 \xB7 Retention",cards:[{name:"付費留存",en:"Retention",note:"續費率能否穿越預算週期"},{name:"使用頻次",en:"Frequency",note:"是否進入高頻日常動作"},{name:"席位擴張",en:"Seat Growth",note:"團隊內部能否自然擴散"},{name:"淨收入留存",en:"NRR",note:"老客戶是否持續增購"}],tagsTitle:"落地場景",tags:["法律","醫療","客服","企業搜尋","開發者工具"]},Qr={...Gr,stepCount:5,focusEnabled:!0,focusIndex:2,cardCount:4,showTags:!0,tagCount:5,showDecorations:!0,accentColor:c.accent},kg=[{key:"eyebrow",label:"眉標",type:"text",default:"Vertical Strategy"},{key:"segment",label:"segment",type:"text",default:"策略 \xB7 篩選垂直應用"},{key:"title",label:"標題",type:"text",default:"嵌入工作流"},{key:"titleTail",label:"副標題",type:"text",default:"策略 \xB7 篩選垂直應用"},{key:"lead",label:"導言",type:"text",default:"垂直應用要看是否嵌入剛性流程\uFF0C而不是隻看生成效果\uFF1B好的垂直 AI 應用應該成為工作流的一部分\u3002"},{key:"closing",label:"結語",type:"text",default:"應用價值來自流程位置\u3002"},{key:"flowTitle",label:"flowTitle",type:"text",default:"業務工作流 \xB7 AI 嵌入位置"},{key:"cardsTitle",label:"cardsTitle",type:"text",default:"篩選維度 \xB7 Retention"},{key:"tagsTitle",label:"tagsTitle",type:"text",default:"落地場景"},{key:"stepCount",label:"流程節點",type:"slider",default:5,min:3,max:5,step:1,description:"工作流鏈路的節點數量\uFF083\u20135\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮工作流中的 AI 嵌入節點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:2,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"},{value:4,label:"第 5 個"}],description:"選擇被高亮的嵌入節點\u3002",showWhen:t=>t.focusEnabled},{key:"cardCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"底部篩選維度卡數量\uFF082\u20134\uFF09\u3002"},{key:"showTags",label:"標籤行",type:"toggle",default:!0,description:"底部落地場景標籤行的顯隱\u3002"},{key:"tagCount",label:"標籤數量",type:"slider",default:5,min:2,max:5,step:1,description:"展示的場景標籤數量\uFF082\u20135\uFF09\u3002",showWhen:t=>t.showTags},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於嵌入節點\u3001連線線與標籤\u3002"}],Ng=`
.aic-svt { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-svt, .aic-svt * { box-sizing: border-box; }
.aic-svt .sv-glow { position: absolute; right: -4%; top: -8%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-svt .sv-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-svt .sv-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-svt .sv-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-svt .sv-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body \u2014 flex column: lead / flow / cards+tags */
.aic-svt .sv-body { position: absolute; left: var(--pad); right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-svt .sv-marker { display: flex; align-items: center; gap: 16px; }
.aic-svt .sv-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-svt .sv-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-svt .sv-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 0; max-width: 1480px; text-wrap: pretty; }

/* workflow chain */
.aic-svt .sv-flow { margin-top: 34px; }
.aic-svt .sv-flow-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 18px; }
.aic-svt .sv-chain { display: flex; align-items: stretch; }
.aic-svt .sv-node { flex: 1 1 0; position: relative; border: 1.5px solid var(--aic-hair); border-radius: 18px;
  background: var(--aic-card); padding: 24px 24px 22px; display: flex; flex-direction: column; gap: 6px;
  transition: border-color .3s, background .3s, transform .3s, box-shadow .3s; }
.aic-svt .sv-node[data-embed="1"] { border-color: transparent; transform: translateY(-6px);
  background: linear-gradient(160deg, var(--aic-accent-bright), var(--aic-accent) 88%);
  box-shadow: 0 26px 58px -28px color-mix(in srgb, var(--aic-accent) 70%, transparent); }
.aic-svt .sv-node[data-dim="1"] { opacity: .56; }
.aic-svt .sv-node-tag { position: absolute; top: -14px; left: 24px; display: inline-flex; align-items: center; gap: 7px;
  padding: 5px 14px; border-radius: 999px; background: var(--aic-ink); color: var(--aic-paper);
  font-family: var(--aic-font-display); font-weight: 700; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; }
.aic-svt .sv-node[data-embed="1"] .sv-node-tag { background: var(--aic-ink); }
.aic-svt .sv-node-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 18px; color: var(--aic-faint);
  font-variant-numeric: tabular-nums; }
.aic-svt .sv-node[data-embed="1"] .sv-node-no { color: color-mix(in srgb, var(--aic-ink) 55%, transparent); }
.aic-svt .sv-node-n { font-family: var(--aic-font-text); font-weight: 800; font-size: 30px; line-height: 1.04; color: var(--aic-ink); }
.aic-svt .sv-node-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; line-height: 1.32; color: var(--aic-muted); }
.aic-svt .sv-node[data-embed="1"] .sv-node-s { color: var(--aic-accent-deep); }
.aic-svt .sv-arrow { flex: none; width: 56px; align-self: center; display: flex; align-items: center; justify-content: center; color: var(--aic-hair-strong); }
.aic-svt .sv-arrow svg { width: 30px; height: 30px; }

/* bottom band: dimension cards + tags */
.aic-svt .sv-foot-band { flex: 1; min-height: 0; margin-top: 36px; display: flex; flex-direction: column; justify-content: flex-end; gap: 26px; }
.aic-svt .sv-cards { display: grid; gap: 22px; }
.aic-svt .sv-card { border: 1.5px solid var(--aic-hair); border-radius: 18px; background: var(--aic-card);
  padding: 22px 26px 20px; display: flex; flex-direction: column; gap: 6px; }
.aic-svt .sv-card-en { font-family: var(--aic-font-display); font-weight: 600; font-size: 15px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-svt .sv-card-n { font-family: var(--aic-font-text); font-weight: 800; font-size: 30px; line-height: 1; color: var(--aic-ink); }
.aic-svt .sv-card-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; line-height: 1.32; color: var(--aic-muted); }
.aic-svt .sv-tags { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.aic-svt .sv-tags-l { font-family: var(--aic-font-display); font-weight: 600; font-size: 16px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin-right: 6px; }
.aic-svt .sv-tag { display: inline-flex; align-items: center; gap: 9px; padding: 11px 22px; border-radius: 999px;
  border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); font-family: var(--aic-font-text);
  font-weight: 600; font-size: 23px; color: var(--aic-ink); }
.aic-svt .sv-tag i { width: 9px; height: 9px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-svt .sv-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-svt .sv-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-svt .sv-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-svt .sv-deco { width: 300px; height: 30px; }
`,zg=["pos","accent","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos"].map(t=>({tone:t}));function Cg(){return ga("div",{className:"sv-arrow",children:ga("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:ga("path",{d:"M4 12h14M12 5l7 7-7 7",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})})}function Kr(t){let a={...Qr,...t},e={...Gr,...Object.fromEntries(Object.entries(a).filter(([,o])=>o!==void 0))};y(),h("aic-svt",Ng);let m=w(a.accentColor),i=Math.max(3,Math.min(e.steps.length,a.stepCount)),s=e.steps.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(2,Math.min(e.cards.length,a.cardCount)),p=e.cards.slice(0,f),d=Math.max(2,Math.min(e.tags.length,a.tagCount)),n=e.tags.slice(0,d);return Ue("div",{className:"aic-svt",style:m,children:[a.showDecorations&&ga("div",{className:"sv-glow"}),Ue("div",{className:"sv-head",children:[Ue("div",{children:[ga("p",{className:"sv-eyebrow",children:e.eyebrow}),ga("h2",{className:"sv-title",children:e.title})]}),ga("div",{className:"sv-sub",children:e.titleTail})]}),Ue("div",{className:"sv-body",children:[Ue("div",{className:"sv-marker",children:[ga("b",{}),ga("span",{children:e.segment})]}),ga("p",{className:"sv-lead",children:e.lead}),Ue("div",{className:"sv-flow",children:[ga("p",{className:"sv-flow-t",children:e.flowTitle}),ga("div",{className:"sv-chain",children:s.map((o,r)=>{let g=a.focusEnabled&&r===l;return Ue(wg.Fragment,{children:[r>0&&ga(Cg,{}),Ue("div",{className:"sv-node","data-embed":g?"1":"0","data-dim":a.focusEnabled&&r!==l?"1":"0",children:[g&&ga("span",{className:"sv-node-tag",children:e.embedNodeTag}),ga("span",{className:"sv-node-no",children:String(r+1).padStart(2,"0")}),ga("span",{className:"sv-node-n",children:o.name}),ga("span",{className:"sv-node-s",children:o.note})]})]},o.name)})})]}),Ue("div",{className:"sv-foot-band",children:[ga("div",{className:"sv-cards",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:p.map(o=>Ue("div",{className:"sv-card",children:[ga("span",{className:"sv-card-en",children:o.en}),ga("span",{className:"sv-card-n",children:o.name}),ga("span",{className:"sv-card-s",children:o.note})]},o.name))}),a.showTags&&Ue("div",{className:"sv-tags",children:[ga("span",{className:"sv-tags-l",children:e.tagsTitle}),n.map(o=>Ue("span",{className:"sv-tag",children:[ga("i",{}),o]},o))]})]})]}),Ue("div",{className:"sv-foot",children:[Ue("div",{className:"sv-closing",children:[ga("b",{}),e.closing]}),a.showDecorations&&ga("div",{className:"sv-deco",children:ga(k,{data:zg,gap:4})})]})]})}var Fo={};S(Fo,{controls:()=>Sg,default:()=>as,defaultProps:()=>Zr});import"react";import{jsx as ua,jsxs as nt}from"react/jsx-runtime";var Jr={eyebrow:"IPO Watch",segment:"策略 \xB7 觀察 IPO 視窗",title:"估值錨重定價",titleTail:"策略 \xB7 觀察 IPO 視窗",lead:"頭部公司 IPO 表現會影響整個 AI 一級市場估值錨\uFF1B如果頭部上市後估值承壓\uFF0C一級市場會同步下修預期\u3002",closing:"公開市場會重新定價 AI 敘事\u3002",axisLabel:"IPO 觀察序列 \xB7 估值錨定者",nodes:[{name:"OpenAI",sector:"通用大模型",note:"體量決定市場情緒基準"},{name:"Anthropic",sector:"安全模型",note:"增速驗證敘事可持續性"},{name:"Databricks",sector:"資料平台",note:"老牌營收驗證 AI 溢價"},{name:"CoreWeave",sector:"算力基礎設施",note:"雲成本與毛利率受考驗"}],metricsTitle:"觀察指標 \xB7 Signals",metrics:[{name:"上市表現",note:"首日與解禁後定價"},{name:"收入增速",note:"能否支撐高估值"},{name:"毛利率",note:"盈利模型是否成立"},{name:"雲成本佔比",note:"算力侵蝕利潤程度"}]},Zr={...Jr,nodeCount:4,focusEnabled:!0,focusIndex:0,showMetrics:!0,metricCount:4,showDecorations:!0,accentColor:c.accent},Sg=[{key:"eyebrow",label:"眉標",type:"text",default:"IPO Watch"},{key:"segment",label:"segment",type:"text",default:"策略 \xB7 觀察 IPO 視窗"},{key:"title",label:"標題",type:"text",default:"估值錨重定價"},{key:"titleTail",label:"副標題",type:"text",default:"策略 \xB7 觀察 IPO 視窗"},{key:"lead",label:"導言",type:"text",default:"頭部公司 IPO 表現會影響整個 AI 一級市場估值錨\uFF1B如果頭部上市後估值承壓\uFF0C一級市場會同步下修預期\u3002"},{key:"closing",label:"結語",type:"text",default:"公開市場會重新定價 AI 敘事\u3002"},{key:"axisLabel",label:"座標標籤",type:"text",default:"IPO 觀察序列 \xB7 估值錨定者"},{key:"metricsTitle",label:"metricsTitle",type:"text",default:"觀察指標 \xB7 Signals"},{key:"nodeCount",label:"節點數量",type:"slider",default:4,min:2,max:4,step:1,description:"時間軸上的觀察公司節點數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一家觀察公司作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的觀察公司\u3002",showWhen:t=>t.focusEnabled},{key:"showMetrics",label:"指標行",type:"toggle",default:!0,description:"底部觀察指標行的顯隱\u3002"},{key:"metricCount",label:"指標數量",type:"slider",default:4,min:2,max:4,step:1,description:"展示的觀察指標數量\uFF082\u20134\uFF09\u3002",showWhen:t=>t.showMetrics},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於時間軸節點與高亮公司\u3002"}],Ag=`
.aic-rp { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-rp, .aic-rp * { box-sizing: border-box; }
.aic-rp .rp-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-rp .rp-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-rp .rp-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-rp .rp-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 84px; line-height: .96; margin: 0; }
.aic-rp .rp-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body \u2014 flex column: lead / timeline / metrics */
.aic-rp .rp-body { position: absolute; left: var(--pad); right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; }
.aic-rp .rp-marker { display: flex; align-items: center; gap: 16px; }
.aic-rp .rp-marker b { width: 58px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-rp .rp-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-rp .rp-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 0; max-width: 1480px; text-wrap: pretty; }

/* timeline */
.aic-rp .rp-tl { flex: 1; min-height: 0; margin-top: 34px; display: flex; flex-direction: column; }
.aic-rp .rp-tl-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 18px; }
.aic-rp .rp-tl-inner { flex: 1; min-height: 0; position: relative; display: flex; flex-direction: column; justify-content: center; }
/* cards above the axis */
.aic-rp .rp-nodes { display: grid; gap: 28px; align-items: stretch; }
.aic-rp .rp-card { position: relative; border: 1.5px solid var(--aic-hair); border-radius: 20px;
  background: var(--aic-card); padding: 26px 30px 26px; display: flex; flex-direction: column; gap: 8px;
  transition: border-color .3s, background .3s, transform .3s, box-shadow .3s; }
.aic-rp .rp-card[data-focus="1"] { border-color: transparent; transform: translateY(-6px);
  background: linear-gradient(158deg, color-mix(in srgb, var(--aic-accent) 18%, var(--aic-card)), var(--aic-card) 78%);
  box-shadow: 0 26px 58px -30px color-mix(in srgb, var(--aic-accent) 64%, transparent); }
.aic-rp .rp-card[data-dim="1"] { opacity: .56; }
.aic-rp .rp-card-no { font-family: var(--aic-font-display); font-weight: 700; font-size: 20px; color: var(--aic-faint);
  font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; }
.aic-rp .rp-card[data-focus="1"] .rp-card-no { color: var(--aic-accent-deep); }
.aic-rp .rp-card-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 42px; line-height: 1; color: var(--aic-ink); }
.aic-rp .rp-card-sec { display: inline-flex; align-self: flex-start; align-items: center; gap: 8px; padding: 7px 16px;
  border-radius: 999px; background: color-mix(in srgb, var(--aic-ink) 6%, transparent); font-family: var(--aic-font-text);
  font-weight: 600; font-size: 19px; color: var(--aic-ink-dim); }
.aic-rp .rp-card[data-focus="1"] .rp-card-sec { background: color-mix(in srgb, var(--aic-accent) 24%, transparent); color: var(--aic-accent-deep); }
.aic-rp .rp-card-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 21px; line-height: 1.36; color: var(--aic-muted); text-wrap: pretty; }
/* the axis + node dots */
.aic-rp .rp-axis { position: relative; height: 2.5px; background: var(--aic-hair-strong); margin-top: 28px; }
.aic-rp .rp-axis::after { content: ''; position: absolute; right: -2px; top: -6px; border: 7px solid transparent; border-left-color: var(--aic-ink); }
.aic-rp .rp-dots { position: absolute; left: 0; right: 0; top: 0; display: grid; }
.aic-rp .rp-dot { position: relative; height: 0; display: flex; justify-content: center; }
.aic-rp .rp-dot i { position: absolute; top: -11px; width: 22px; height: 22px; border-radius: 50%;
  background: var(--aic-paper); border: 5px solid var(--aic-hair-strong); box-sizing: border-box; transition: border-color .3s, transform .3s; }
.aic-rp .rp-dot[data-focus="1"] i { border-color: var(--aic-accent); transform: scale(1.18); box-shadow: 0 0 0 6px color-mix(in srgb, var(--aic-accent) 18%, transparent); }
.aic-rp .rp-axislab { display: grid; margin-top: 18px; }
.aic-rp .rp-axislab span { text-align: center; font-family: var(--aic-font-display); font-weight: 600; font-size: 17px;
  letter-spacing: .14em; text-transform: uppercase; color: var(--aic-faint); }

/* observation metrics row */
.aic-rp .rp-metrics { flex: none; margin-top: 30px; }
.aic-rp .rp-metrics-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 16px; }
.aic-rp .rp-metrics-grid { display: grid; gap: 22px; }
.aic-rp .rp-metric { border: 1.5px solid var(--aic-hair); border-radius: 16px; background: var(--aic-card);
  padding: 20px 24px; display: flex; flex-direction: column; gap: 6px; }
.aic-rp .rp-metric-n { font-family: var(--aic-font-text); font-weight: 800; font-size: 27px; color: var(--aic-ink); line-height: 1; }
.aic-rp .rp-metric-s { font-family: var(--aic-font-text); font-weight: 500; font-size: 19px; color: var(--aic-muted); line-height: 1.3; }

.aic-rp .rp-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-rp .rp-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-rp .rp-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-rp .rp-deco { width: 300px; height: 30px; }
`,Eg=["accent","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","accent","pos","pos","warn","accent","pos","pos","accent","pos","warn","accent","pos","pos","accent","pos","warn","accent","pos","pos","accent","pos","warn","accent"].map(t=>({tone:t}));function as(t){let a={...Zr,...t},e={...Jr,...Object.fromEntries(Object.entries(a).filter(([,n])=>n!==void 0))};y(),h("aic-rp",Ag);let m=w(a.accentColor),i=Math.max(2,Math.min(E(e.nodes).length,Ta(a.nodeCount,4))),s=E(e.nodes).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(2,Math.min(e.metrics.length,Ta(a.metricCount,4))),p=e.metrics.slice(0,f),d=`repeat(${i}, 1fr)`;return nt("div",{className:"aic-rp",style:m,children:[a.showDecorations&&ua("div",{className:"rp-glow"}),nt("div",{className:"rp-head",children:[nt("div",{children:[ua("p",{className:"rp-eyebrow",children:e.eyebrow}),ua("h2",{className:"rp-title",children:e.title})]}),ua("div",{className:"rp-sub",children:e.titleTail})]}),nt("div",{className:"rp-body",children:[nt("div",{className:"rp-marker",children:[ua("b",{}),ua("span",{children:e.segment})]}),ua("p",{className:"rp-lead",children:e.lead}),nt("div",{className:"rp-tl",children:[ua("p",{className:"rp-tl-t",children:e.axisLabel}),nt("div",{className:"rp-tl-inner",children:[ua("div",{className:"rp-nodes",style:{gridTemplateColumns:d},children:s.map((n,o)=>nt("div",{className:"rp-card","data-focus":a.focusEnabled&&o===l?"1":"0","data-dim":a.focusEnabled&&o!==l?"1":"0",children:[ua("span",{className:"rp-card-no",children:String(o+1).padStart(2,"0")}),ua("span",{className:"rp-card-n",children:n.name}),ua("span",{className:"rp-card-sec",children:n.sector}),ua("span",{className:"rp-card-note",children:n.note})]},n.name))}),ua("div",{className:"rp-axis",children:ua("div",{className:"rp-dots",style:{gridTemplateColumns:d},children:s.map((n,o)=>ua("div",{className:"rp-dot","data-focus":a.focusEnabled&&o===l?"1":"0",children:ua("i",{})},n.name))})}),ua("div",{className:"rp-axislab",style:{gridTemplateColumns:d},children:s.map(n=>ua("span",{children:n.name},n.name))})]})]}),a.showMetrics&&nt("div",{className:"rp-metrics",children:[ua("p",{className:"rp-metrics-t",children:e.metricsTitle}),ua("div",{className:"rp-metrics-grid",style:{gridTemplateColumns:`repeat(${f}, 1fr)`},children:p.map(n=>nt("div",{className:"rp-metric",children:[ua("span",{className:"rp-metric-n",children:n.name}),ua("span",{className:"rp-metric-s",children:n.note})]},n.name))})]})]}),nt("div",{className:"rp-foot",children:[nt("div",{className:"rp-closing",children:[ua("b",{}),e.closing]}),a.showDecorations&&ua("div",{className:"rp-deco",children:ua(k,{data:Eg,gap:4})})]})]})}var Io={};S(Io,{controls:()=>Tg,default:()=>is,defaultProps:()=>ts});import"react";import{jsx as je,jsxs as Ot}from"react/jsx-runtime";var es={eyebrow:"Closing",kicker:"最終判斷",quoteLead:"融資盛宴之後\uFF0C",quoteEm:"真正的競爭",quoteTail:"才剛開始\u3002",tagline:"從資本流向\uFF0C看 AI 產業下一階段的真實重心\u3002",brandLabel:"AI CAPITAL LAB",brandSub:"FUNDING INTELLIGENCE"},ts={...es,align:"center",backgroundVariant:"paper",showKicker:!0,showQuoteMark:!0,showTagline:!0,showBrand:!0,showDecorations:!0,accentColor:c.accent},Tg=[{key:"eyebrow",label:"眉標",type:"text",default:"Closing"},{key:"kicker",label:"kicker",type:"text",default:"最終判斷"},{key:"quoteLead",label:"quoteLead",type:"text",default:"融資盛宴之後\uFF0C"},{key:"quoteEm",label:"quoteEm",type:"text",default:"真正的競爭"},{key:"quoteTail",label:"quoteTail",type:"text",default:"才剛開始\u3002"},{key:"tagline",label:"tagline",type:"text",default:"從資本流向\uFF0C看 AI 產業下一階段的真實重心\u3002"},{key:"brandLabel",label:"brandLabel",type:"text",default:"AI CAPITAL LAB"},{key:"brandSub",label:"brandSub",type:"text",default:"FUNDING INTELLIGENCE"},{key:"align",label:"對齊方式",type:"radio",default:"center",options:[{value:"center",label:"居中"},{value:"left",label:"左對齊"}],description:"金句與輔助資訊的整體對齊方式\u3002"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"paper",options:[{value:"paper",label:"淺色"},{value:"dark",label:"深色"}],description:"收尾背景\uFF1A淺色統一 / 深色換氣強調\u3002"},{key:"showKicker",label:"標題標籤",type:"toggle",default:!0,description:"頂部\u201C最終判斷\u201D標籤行的顯隱\u3002"},{key:"showQuoteMark",label:"引號裝飾",type:"toggle",default:!0,description:"超大引號裝飾符號的顯隱\u3002"},{key:"showTagline",label:"輔助資訊",type:"toggle",default:!0,description:"金句下方單行收束語的顯隱\u3002"},{key:"showBrand",label:"品牌簽名",type:"toggle",default:!0,description:"左下角品牌標識的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001鏡頭光斑與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於金句重點詞與裝飾\u3002"}],Mg=`
.aic-clo { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 120px;
  transition: background .35s, color .35s; }
.aic-clo, .aic-clo * { box-sizing: border-box; }
.aic-clo[data-bg="dark"] { background: var(--aic-ink); color: var(--aic-paper); }

.aic-clo .clo-glow { position: absolute; left: 50%; top: 42%; width: 72%; height: 84%; transform: translate(-50%,-50%);
  pointer-events: none; background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 18%, transparent), transparent 70%); }
.aic-clo[data-bg="dark"] .clo-glow { background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 26%, transparent), transparent 72%); }
.aic-clo .clo-lens { position: absolute; right: 104px; bottom: 150px; width: 250px; height: 250px; opacity: .9; }

.aic-clo .clo-eyebrow { position: absolute; top: 100px; left: var(--pad); right: var(--pad);
  display: flex; align-items: center; gap: 22px; font-family: var(--aic-font-display); font-weight: 600;
  font-size: 22px; letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); }
.aic-clo[data-bg="dark"] .clo-eyebrow { color: var(--aic-faint); }
.aic-clo .clo-eyebrow i { flex: none; width: 11px; height: 11px; border-radius: 50%; background: var(--aic-accent); }
.aic-clo .clo-eyebrow s { flex: 1; height: 1.5px; background: var(--aic-hair); text-decoration: none; }
.aic-clo[data-bg="dark"] .clo-eyebrow s { background: rgba(255,255,255,0.16); }
.aic-clo .clo-eyebrow b { font-family: var(--aic-font-text); font-weight: 700; letter-spacing: .04em;
  text-transform: none; font-size: 22px; color: var(--aic-ink-dim); }
.aic-clo[data-bg="dark"] .clo-eyebrow b { color: var(--aic-paper); }

.aic-clo .clo-body { position: absolute; left: var(--pad); right: var(--pad); top: 50%; transform: translateY(-54%);
  display: flex; flex-direction: column; }
.aic-clo.is-center .clo-body { align-items: center; text-align: center; }
.aic-clo.is-left .clo-body { align-items: flex-start; text-align: left; }

.aic-clo .clo-mark { font-family: var(--aic-font-display); font-weight: 700; font-size: 210px; line-height: .6;
  color: var(--aic-accent); height: 116px; }
.aic-clo .clo-text { font-family: var(--aic-font-text); font-weight: 900; font-size: 114px; line-height: 1.14;
  letter-spacing: -.015em; margin: 0; max-width: 1560px; }
.aic-clo .clo-line { display: block; }
.aic-clo .clo-text em { font-style: normal; color: var(--aic-accent);
  background: linear-gradient(180deg, transparent 62%, color-mix(in srgb, var(--aic-accent) 30%, transparent) 62%); }
.aic-clo[data-bg="dark"] .clo-text em { background: linear-gradient(180deg, transparent 64%, color-mix(in srgb, var(--aic-accent) 40%, transparent) 64%); }

.aic-clo .clo-rule { width: 128px; height: 5px; border-radius: 999px; background: var(--aic-ink); margin: 50px 0 0; }
.aic-clo[data-bg="dark"] .clo-rule { background: var(--aic-accent); }
.aic-clo.is-center .clo-rule { align-self: center; }
.aic-clo .clo-tag { font-family: var(--aic-font-text); font-weight: 500; font-size: 34px; line-height: 1.4;
  color: var(--aic-ink-dim); margin: 38px 0 0; max-width: 1200px; text-wrap: pretty; }
.aic-clo[data-bg="dark"] .clo-tag { color: color-mix(in srgb, var(--aic-paper) 78%, transparent); }

/* dark-panel sign-off: BrandMark hardcodes ink tones \u2014 invert them here */
.aic-clo[data-bg="dark"] .aic-viz-brand-mark { background: rgba(255,255,255,0.10); }
.aic-clo[data-bg="dark"] .aic-viz-brand-name b { color: var(--aic-paper) !important; }
.aic-clo[data-bg="dark"] .aic-viz-brand-name span { color: color-mix(in srgb, var(--aic-paper) 58%, transparent); }

.aic-clo .clo-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 92px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-clo .clo-deco { width: 300px; height: 28px; flex: none; }
`,Lg=["accent","pos","accent","pos","warn","accent","pos","pos","accent","pos","warn","accent","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos"].map(t=>({tone:t}));function is(t){let a={...ts,...t},e={...es,...Object.fromEntries(Object.entries(a).filter(([,l])=>l!==void 0))};y(),h("aic-clo",Mg);let m=w(a.accentColor),i=a.align==="left"?"left":"center",s=a.backgroundVariant==="dark";return Ot("div",{className:"aic-clo is-"+i,"data-bg":s?"dark":"paper",style:m,children:[a.showDecorations&&je("div",{className:"clo-glow"}),a.showDecorations&&je("div",{className:"clo-lens",children:je(A,{})}),Ot("div",{className:"clo-eyebrow",children:[je("i",{}),e.eyebrow,je("s",{}),a.showKicker&&je("b",{children:e.kicker})]}),Ot("div",{className:"clo-body",children:[a.showQuoteMark&&je("div",{className:"clo-mark",children:"\u201C"}),Ot("h2",{className:"clo-text",children:[je("span",{className:"clo-line",children:e.quoteLead}),Ot("span",{className:"clo-line",children:[je("em",{children:e.quoteEm}),e.quoteTail]})]}),je("div",{className:"clo-rule"}),a.showTagline&&je("p",{className:"clo-tag",children:e.tagline})]}),Ot("div",{className:"clo-foot",children:[a.showBrand?je(ei,{size:44,label:e.brandLabel,sub:e.brandSub}):je("span",{}),a.showDecorations&&je("div",{className:"clo-deco",children:je(k,{data:Lg,gap:4})})]})]})}var Ro={};S(Ro,{controls:()=>Fg,default:()=>cs,defaultProps:()=>ns});import"react";import{jsx as Ye,jsxs as _t}from"react/jsx-runtime";var os={eyebrow:"Appendix",index:"06",title:"附錄與延展",sub:"資料來源\u3001前瞻指標與研究團隊",lead:"正文之外\uFF0C補充本報告的研究口徑\u3001資料來源\u30012025 年前瞻觀察指標\uFF0C以及研究團隊資訊\uFF0C便於複核與延展閱讀\u3002",closing:"資料可複核\uFF0C判斷可延展\u3002",keywords:["研究口徑","資料來源","前瞻指標","關於團隊"]},ns={...os,backgroundVariant:"dark",layout:"left",showIndex:!0,showKeywords:!0,keywordCount:4,showDecorations:!0,accentColor:c.accent},Fg=[{key:"eyebrow",label:"眉標",type:"text",default:"Appendix"},{key:"index",label:"index",type:"text",default:"06"},{key:"title",label:"標題",type:"text",default:"附錄與延展"},{key:"sub",label:"次標題",type:"text",default:"資料來源\u3001前瞻指標與研究團隊"},{key:"lead",label:"導言",type:"text",default:"正文之外\uFF0C補充本報告的研究口徑\u3001資料來源\u30012025 年前瞻觀察指標\uFF0C以及研究團隊資訊\uFF0C便於複核與延展閱讀\u3002"},{key:"closing",label:"結語",type:"text",default:"資料可複核\uFF0C判斷可延展\u3002"},{key:"backgroundVariant",label:"背景風格",type:"radio",default:"dark",options:[{value:"dark",label:"深色"},{value:"paper",label:"淺色"}],description:"章節頁背景\uFF1A深色\uFF08強換氣節奏\uFF09/ 淺色\uFF08與正文統一\uFF09\u3002"},{key:"layout",label:"排版",type:"radio",default:"left",options:[{value:"left",label:"左對齊"},{value:"center",label:"居中"}],description:"標題與關鍵詞的整體排布方式\u3002"},{key:"showIndex",label:"章節序號",type:"toggle",default:!0,description:"超大章節編號水印的顯隱\u3002"},{key:"showKeywords",label:"關鍵詞",type:"toggle",default:!0,description:"本章關鍵詞標籤行的顯隱\u3002"},{key:"keywordCount",label:"關鍵詞數量",type:"slider",default:4,min:2,max:4,step:1,description:"展示的關鍵詞數量\uFF082\u20134\uFF09\u3002",showWhen:t=>t.showKeywords},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"鏡頭光斑\u3001背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\u3002"}],Ig=`
.aic-apx { position: relative; width: 100%; height: 100%; overflow: hidden;
  font-family: var(--aic-font-text); --pad: 120px; }
.aic-apx, .aic-apx * { box-sizing: border-box; }
.aic-apx[data-bg="dark"]  { background: var(--aic-ink); color: var(--aic-paper); --ax-dim: rgba(250,250,246,.62); --ax-faint: rgba(250,250,246,.34); --ax-hair: rgba(250,250,246,.16); }
.aic-apx[data-bg="paper"] { background: var(--aic-paper); color: var(--aic-ink); --ax-dim: var(--aic-ink-dim); --ax-faint: var(--aic-faint); --ax-hair: var(--aic-hair); }

.aic-apx .apx-glow { position: absolute; right: -6%; top: 8%; width: 56%; height: 70%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 30%, transparent), transparent 70%); }
.aic-apx .apx-lens { position: absolute; right: 110px; top: 50%; transform: translateY(-50%); width: 520px; height: 520px; opacity: .92; }

/* giant index watermark */
.aic-apx .apx-index { position: absolute; right: 60px; bottom: -120px; font-family: var(--aic-font-display);
  font-weight: 700; font-size: 760px; line-height: .7; color: transparent;
  -webkit-text-stroke: 3px var(--ax-hair); letter-spacing: -.04em; pointer-events: none; user-select: none;
  font-variant-numeric: lining-nums; }

.aic-apx .apx-body { position: absolute; left: var(--pad); right: var(--pad); top: 50%; transform: translateY(-52%);
  display: flex; flex-direction: column; }
.aic-apx.is-center .apx-body { align-items: center; text-align: center; }

.aic-apx .apx-eyebrow { display: flex; align-items: center; gap: 18px; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 24px; letter-spacing: .28em; text-transform: uppercase; color: var(--aic-accent); margin: 0 0 30px; }
.aic-apx .apx-eyebrow b { font-variant-numeric: tabular-nums; }
.aic-apx .apx-eyebrow s { display: inline-block; width: 64px; height: 2px; background: var(--aic-accent); text-decoration: none; }
.aic-apx.is-center .apx-eyebrow { justify-content: center; }

.aic-apx .apx-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 148px; line-height: .94;
  letter-spacing: -.01em; margin: 0; }
.aic-apx .apx-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 38px; color: var(--ax-dim);
  margin: 28px 0 0; }
.aic-apx .apx-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 27px; line-height: 1.5;
  color: var(--ax-dim); margin: 32px 0 0; max-width: 1000px; text-wrap: pretty; }
.aic-apx.is-center .apx-lead { margin-left: auto; margin-right: auto; }

.aic-apx .apx-kw { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 52px; }
.aic-apx.is-center .apx-kw { justify-content: center; }
.aic-apx .apx-kw span { font-family: var(--aic-font-text); font-weight: 600; font-size: 26px;
  padding: 14px 28px; border-radius: 999px; border: 1.5px solid var(--ax-hair); color: var(--ax-dim);
  display: inline-flex; align-items: center; gap: 12px; }
.aic-apx .apx-kw span::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); flex: none; }

.aic-apx .apx-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 84px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.aic-apx .apx-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 26px; color: var(--ax-dim); }
.aic-apx .apx-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-apx .apx-deco { width: 300px; height: 28px; flex: none; }
`,Rg=["accent","pos","accent","warn","pos","accent","pos","warn","accent","pos","accent","pos","warn","pos","accent","pos","accent","warn","pos","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos","accent","pos","warn","accent","pos"].map(t=>({tone:t}));function cs(t){let a={...ns,...t},e={...os,...Object.fromEntries(Object.entries(a).filter(([,p])=>p!==void 0))};y(),h("aic-apx",Ig);let m=w(a.accentColor),i=a.backgroundVariant==="paper"?"paper":"dark",s=a.layout==="center"?"center":"left",l=Math.max(2,Math.min(e.keywords.length,a.keywordCount)),f=e.keywords.slice(0,l);return _t("div",{className:"aic-apx is-"+s,"data-bg":i,style:m,children:[a.showDecorations&&Ye("div",{className:"apx-glow"}),a.showDecorations&&s==="left"&&Ye("div",{className:"apx-lens",children:Ye(A,{})}),a.showIndex&&Ye("div",{className:"apx-index",children:e.index}),_t("div",{className:"apx-body",children:[_t("p",{className:"apx-eyebrow",children:[Ye("s",{}),e.eyebrow,"\xA0",Ye("b",{children:e.index})]}),Ye("h2",{className:"apx-title",children:e.title}),Ye("div",{className:"apx-sub",children:e.sub}),Ye("p",{className:"apx-lead",children:e.lead}),a.showKeywords&&Ye("div",{className:"apx-kw",children:f.map(p=>Ye("span",{children:p},p))})]}),_t("div",{className:"apx-foot",children:[_t("div",{className:"apx-closing",children:[Ye("b",{}),e.closing]}),a.showDecorations&&Ye("div",{className:"apx-deco",children:Ye(k,{data:Rg,gap:4})})]})]})}var Do={};S(Do,{controls:()=>Dg,default:()=>ss,defaultProps:()=>rs,numberBounds:()=>Bg});import"react";import{Fragment as Hg,jsx as O,jsxs as Se}from"react/jsx-runtime";var ls={eyebrow:"Forward View \xB7 2025",title:"2025 前瞻",titleTail:"關鍵指標與觀察訊號",lead:"將 2024 的結構外推到 2025\uFF1A資本可能從規模擴張轉向效率驗證\uFF0C少數確定性方向繼續獲得資本\uFF0C敘事型估值面臨重定價\u3002",anchorValue:"+38%",anchorLabel:"垂直應用收入兌現 \xB7 2025E 情景增速",scenarioTag:"情景推演 \xB7 2024 = 100",closing:"增量來自兌現\uFF0C而非敘事\u3002",panelTitle:"2024 \u2192 2025E 指標推演\uFF08指數\uFF0C2024 = 100\uFF09",baselineLabel:"2024 基線 \xB7 100",axisFrom:"2024",axisTo:"2025E",metrics:[{label:"垂直應用收入兌現",value:138,note:"付費留存與席位擴張"},{label:"基礎設施資本確定性",value:124,note:"GPU 雲與資料平台"},{label:"平均單筆規模",value:105,note:"頭部集中度提升"},{label:"全年大額事件數",value:88,note:"事件數量理性回落"},{label:"敘事型估值",value:82,note:"面臨公開市場重定價"}]},rs={...ls,chartType:"slope",metricCount:5,focusEnabled:!0,focusIndex:0,showValues:!0,showBand:!0,showDecorations:!0,accentColor:c.accent},Dg=[{key:"eyebrow",label:"眉標",type:"text",default:"Forward View \xB7 2025"},{key:"title",label:"標題",type:"text",default:"2025 前瞻"},{key:"titleTail",label:"副標題",type:"text",default:"關鍵指標與觀察訊號"},{key:"lead",label:"導言",type:"text",default:"將 2024 的結構外推到 2025\uFF1A資本可能從規模擴張轉向效率驗證\uFF0C少數確定性方向繼續獲得資本\uFF0C敘事型估值面臨重定價\u3002"},{key:"anchorValue",label:"anchorValue",type:"text",default:"+38%"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"垂直應用收入兌現 \xB7 2025E 情景增速"},{key:"scenarioTag",label:"scenarioTag",type:"text",default:"情景推演 \xB7 2024 = 100"},{key:"closing",label:"結語",type:"text",default:"增量來自兌現\uFF0C而非敘事\u3002"},{key:"panelTitle",label:"panelTitle",type:"text",default:"2024 \u2192 2025E 指標推演\uFF08指數\uFF0C2024 = 100\uFF09"},{key:"baselineLabel",label:"baselineLabel",type:"text",default:"2024 基線 \xB7 100"},{key:"axisFrom",label:"axisFrom",type:"text",default:"2024"},{key:"axisTo",label:"axisTo",type:"text",default:"2025E"},{key:"chartType",label:"圖表型別",type:"radio",default:"slope",options:[{value:"slope",label:"推演線"},{value:"bars",label:"偏離條"}],description:"前瞻圖表樣式\uFF1A2024\u21922025E 推演線\uFF08扇形\uFF09/ 圍繞基線的偏離條\u3002"},{key:"metricCount",label:"卡片數量",type:"slider",default:5,min:3,max:5,step:1,description:"展示的前瞻指標數量\uFF083\u20135\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一個指標作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"},{value:4,label:"第 5 個"}],description:"選擇被高亮的指標\u3002",showWhen:t=>t.focusEnabled},{key:"showValues",label:"數值標籤",type:"toggle",default:!0,description:"指標 2025E 指數與變化徽標的顯隱\u3002"},{key:"showBand",label:"情景區間",type:"toggle",default:!0,description:"推演線的情景區間扇形帶的顯隱\u3002",showWhen:t=>t.chartType==="slope"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於上行指標\u3001推演線與高亮元素\u3002"}],Bg={"metrics[].value":{min:78,max:146,semantics:"coordinate"}},jg=`
.aic-fwd { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-fwd, .aic-fwd * { box-sizing: border-box; }
.aic-fwd .fwd-glow { position: absolute; right: -4%; top: -6%; width: 50%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 24%, transparent), transparent 70%); }

.aic-fwd .fwd-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-fwd .fwd-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-fwd .fwd-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-fwd .fwd-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* body: editorial rail (left) + chart panel (right) */
.aic-fwd .fwd-body { position: absolute; left: var(--pad); right: var(--pad); top: 300px; bottom: 150px;
  display: grid; grid-template-columns: 540px 1fr; gap: 72px; }
.aic-fwd .fwd-rail { display: flex; flex-direction: column; }
.aic-fwd .fwd-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 0; text-wrap: pretty; }
.aic-fwd .fwd-anchor { margin-top: auto; }
.aic-fwd .fwd-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 132px; line-height: .82;
  color: var(--aic-accent-deep); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: left bottom;
  display: inline-block; }
.aic-fwd .fwd-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 23px; color: var(--aic-ink-dim); margin-top: 18px; }
.aic-fwd .fwd-tag { display: inline-flex; align-items: center; gap: 12px; align-self: flex-start; margin-top: 26px;
  font-family: var(--aic-font-display); font-weight: 600; font-size: 19px; letter-spacing: .1em; text-transform: uppercase;
  color: var(--aic-muted); padding: 10px 20px; border: 1.5px solid var(--aic-hair-strong); border-radius: 999px; }
.aic-fwd .fwd-tag::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--aic-accent); }

.aic-fwd .fwd-chart { display: flex; flex-direction: column; min-width: 0; }
.aic-fwd .fwd-panel-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 18px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-fwd .fwd-plot { flex: 1; min-height: 0; }
.aic-fwd .fwd-svg { width: 100%; height: 100%; display: block; }
.aic-fwd .fwd-svg .lbl { font-family: var(--aic-font-display); font-weight: 600; }
.aic-fwd .fwd-svg .metric { font-family: var(--aic-font-text); font-weight: 700; }
.aic-fwd .fwd-svg .note { font-family: var(--aic-font-text); font-weight: 500; }
.aic-fwd .fwd-svg .val { font-family: var(--aic-font-display); font-weight: 700; font-variant-numeric: tabular-nums; }

/* diverging bars mode */
.aic-fwd .fwd-bars { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 26px; min-height: 0; }
.aic-fwd .fwd-bar { display: grid; grid-template-columns: 300px 1fr; align-items: center; gap: 28px; transition: opacity .3s; }
.aic-fwd .fwd-bar-lbl { display: flex; flex-direction: column; gap: 4px; }
.aic-fwd .fwd-bar-lbl b { font-family: var(--aic-font-text); font-weight: 700; font-size: 27px; color: var(--aic-ink); }
.aic-fwd .fwd-bar-lbl span { font-family: var(--aic-font-text); font-weight: 500; font-size: 18px; color: var(--aic-muted); }
.aic-fwd .fwd-bar-track { position: relative; height: 46px; border-radius: 12px; background: var(--aic-hair);
  overflow: hidden; }
.aic-fwd .fwd-bar-base { position: absolute; top: -6px; bottom: -6px; width: 2px; background: var(--aic-ink-dim); opacity: .55; }
.aic-fwd .fwd-bar-fill { position: absolute; top: 0; bottom: 0; border-radius: 8px;
  transition: width .5s cubic-bezier(.3,.7,.4,1), left .5s cubic-bezier(.3,.7,.4,1); }
.aic-fwd .fwd-bar-fill.up   { background: var(--aic-accent); }
.aic-fwd .fwd-bar-fill.down { background: color-mix(in srgb, var(--aic-neg) 78%, white); }
.aic-fwd .fwd-bar[data-focus="1"] .fwd-bar-fill.up { background: var(--aic-accent-deep); }
.aic-fwd .fwd-bar-end { position: absolute; top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 12px; }
.aic-fwd .fwd-bar-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; }
.aic-fwd .fwd-baserow { display: grid; grid-template-columns: 300px 1fr; gap: 28px; margin-top: 4px; }
.aic-fwd .fwd-baserow span { grid-column: 2; font-family: var(--aic-font-display); font-weight: 600; font-size: 17px;
  letter-spacing: .08em; text-transform: uppercase; color: var(--aic-muted); }

.aic-fwd .fwd-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-fwd .fwd-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-fwd .fwd-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-fwd .fwd-deco { width: 300px; height: 30px; }
`,Pg=["pos","accent","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos"].map(t=>({tone:t}));function Og({copy:t,metrics:a,focus:e,focusEnabled:m,showValues:i,showBand:s}){let u=b=>452-(b-78)/68*404,v=u(100),z=a.map(b=>b.value),N=u(Math.min(146,L(z,100)+5)),x=u(Math.max(78,ti(z,100)-5));return Se("svg",{className:"fwd-svg",viewBox:"0 0 1040 540",preserveAspectRatio:"xMidYMid meet",children:[s&&O("polygon",{points:`150,${v} 690,${N} 690,${x}`,fill:"color-mix(in srgb, var(--aic-accent) 10%, transparent)",stroke:"none"}),O("line",{x1:150,y1:v,x2:690,y2:v,stroke:"var(--aic-ink-dim)",strokeWidth:"1.6",strokeDasharray:"4 8",opacity:"0.55"}),O("text",{className:"lbl",x:150,y:v-14,fill:"var(--aic-muted)",fontSize:"18",children:t.baselineLabel}),O("line",{x1:150,y1:40,x2:150,y2:460,stroke:"var(--aic-hair)",strokeWidth:"1.5"}),O("text",{className:"lbl",x:150,y:486,textAnchor:"middle",fill:"var(--aic-ink-dim)",fontSize:"20",children:t.axisFrom}),O("text",{className:"lbl",x:690,y:486,textAnchor:"middle",fill:"var(--aic-ink-dim)",fontSize:"20",children:t.axisTo}),O("circle",{cx:150,cy:v,r:"7",fill:"var(--aic-ink)"}),a.map((b,C)=>{let T=b.value>=100,ja=m&&C!==e,F=m&&C===e,q=u(b.value),lt=T?F?"var(--aic-accent-deep)":"var(--aic-accent)":"color-mix(in srgb, var(--aic-neg) 75%, white)";return Se("g",{opacity:ja?.32:1,style:{transition:"opacity .3s"},children:[O("line",{x1:150,y1:v,x2:690,y2:q,stroke:lt,strokeWidth:F?6:3,strokeLinecap:"round"}),O("circle",{cx:690,cy:q,r:F?9:6.5,fill:lt}),O("text",{className:"metric",x:712,y:q-4,fill:"var(--aic-ink)",fontSize:F?26:23,children:b.label}),O("text",{className:"note",x:712,y:q+24,fill:"var(--aic-muted)",fontSize:"18",children:b.note}),i&&O("text",{className:"val",x:676,y:T?q-14:q+28,textAnchor:"end",fill:T?"var(--aic-ink)":"var(--aic-neg)",fontSize:F?27:23,children:b.value})]},b.label)})]})}function ss(t){let a={...rs,...t},e={...ls,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-fwd",jg);let m=w(a.accentColor),i=Math.max(3,Math.min(e.metrics.length,a.metricCount)),s=e.metrics.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=60,p=150,d=p-f,n=r=>(Math.max(f,Math.min(p,r))-f)/d*100,o=n(100);return Se("div",{className:"aic-fwd",style:m,children:[a.showDecorations&&O("div",{className:"fwd-glow"}),Se("div",{className:"fwd-head",children:[Se("div",{children:[O("p",{className:"fwd-eyebrow",children:e.eyebrow}),O("h2",{className:"fwd-title",children:e.title})]}),O("div",{className:"fwd-sub",children:e.titleTail})]}),Se("div",{className:"fwd-body",children:[Se("div",{className:"fwd-rail",children:[O("p",{className:"fwd-lead",children:e.lead}),Se("div",{className:"fwd-anchor",children:[O("div",{className:"fwd-anchor-v",children:e.anchorValue}),O("div",{className:"fwd-anchor-l",children:e.anchorLabel})]}),O("span",{className:"fwd-tag",children:e.scenarioTag})]}),Se("div",{className:"fwd-chart",children:[O("p",{className:"fwd-panel-t",children:e.panelTitle}),a.chartType==="slope"?O("div",{className:"fwd-plot",children:O(Og,{copy:e,metrics:s,focus:l,focusEnabled:a.focusEnabled,showValues:a.showValues,showBand:a.showBand})}):Se(Hg,{children:[O("div",{className:"fwd-bars",children:s.map((r,g)=>{let u=r.value>=100,v=n(r.value),z=u?o:v,N=Math.abs(v-o),x=a.focusEnabled&&g===l;return Se("div",{className:"fwd-bar","data-focus":x?"1":"0",style:{opacity:a.focusEnabled&&g!==l?.5:1},children:[Se("div",{className:"fwd-bar-lbl",children:[O("b",{children:r.label}),O("span",{children:r.note})]}),Se("div",{className:"fwd-bar-track",children:[O("div",{className:"fwd-bar-base",style:{left:o+"%"}}),O("div",{className:"fwd-bar-fill "+(u?"up":"down"),style:{left:z+"%",width:N+"%"}}),a.showValues&&Se("div",{className:"fwd-bar-end",style:u?{left:v+"%",marginLeft:14}:{right:100-v+"%",marginRight:14,flexDirection:"row-reverse"},children:[O("span",{className:"fwd-bar-v",children:r.value}),O(Tt,{value:(u?"+":"")+(r.value-100)+"%",dir:u?"up":"down"})]})]})]},r.label)})}),O("div",{className:"fwd-baserow",children:O("span",{children:e.baselineLabel})})]})]})]}),Se("div",{className:"fwd-foot",children:[Se("div",{className:"fwd-closing",children:[O("b",{}),e.closing]}),a.showDecorations&&O("div",{className:"fwd-deco",children:O(k,{data:Pg,gap:4})})]})]})}var Bo={};S(Bo,{controls:()=>Wg,default:()=>fs,defaultProps:()=>ds,numberBounds:()=>Vg});import"react";import{jsx as aa,jsxs as oe}from"react/jsx-runtime";var ps={eyebrow:"Data & Methodology",marker:"研究口徑",segment:"附錄 \xB7 口徑與來源",title:"資料來源與口徑",titleTail:"附錄 \xB7 口徑與來源",lead:"本報告以公開披露的 2024 年美國 AI 大額融資事件為樣本\uFF0C統一口徑後進行結構化分析\uFF1B以下為關鍵口徑與資料來源說明\u3002",statLine:"樣本 97 筆 \xB7 單筆 \u22651 億美元 \xB7 截至 2024 全年",anchorValue:"97",anchorLabel:"大額融資事件樣本量 / 筆",closing:"口徑透明\uFF0C結論才可被檢驗\u3002",colHeads:{dim:"口徑維度",level:"可信度",note:"口徑定義與來源"},rows:[{dim:"融資口徑",level:95,note:"單筆 \u22651 億美元股權融資\uFF0C剔除二級交易與併購"},{dim:"時間範圍",level:92,note:"2024-01 至 2024-12\uFF0C按融資公告日歸屬季度"},{dim:"地域範圍",level:90,note:"總部位於美國的 AI 公司\uFF0C以註冊地為準"},{dim:"資料來源",level:85,note:"公開新聞\u3001公司公告與行業資料庫多源交叉"},{dim:"匯率與單位",level:88,note:"統一折算為美元\uFF0C以\u300C億美元\u300D為展示單位"},{dim:"賽道劃分",level:78,note:"模型 / 應用 / 基礎設施 / 硬體 / 安全 五類\uFF0C按主營歸類"}],flowTitle:"口徑處理流程",flow:["資料採集","去重核對","口徑統一","結構化","交叉複核"]},ds={...ps,rowCount:6,showLevel:!0,showFlow:!0,flowStepCount:5,focusEnabled:!0,focusIndex:0,showDecorations:!0,accentColor:c.accent},Vg={"rows[].level":{min:0,max:100,semantics:"percent"}},Wg=[{key:"eyebrow",label:"眉標",type:"text",default:"Data & Methodology"},{key:"marker",label:"marker",type:"text",default:"研究口徑"},{key:"segment",label:"segment",type:"text",default:"附錄 \xB7 口徑與來源"},{key:"title",label:"標題",type:"text",default:"資料來源與口徑"},{key:"titleTail",label:"副標題",type:"text",default:"附錄 \xB7 口徑與來源"},{key:"lead",label:"導言",type:"text",default:"本報告以公開披露的 2024 年美國 AI 大額融資事件為樣本\uFF0C統一口徑後進行結構化分析\uFF1B以下為關鍵口徑與資料來源說明\u3002"},{key:"statLine",label:"statLine",type:"text",default:"樣本 97 筆 \xB7 單筆 \u22651 億美元 \xB7 截至 2024 全年"},{key:"anchorValue",label:"anchorValue",type:"text",default:"97"},{key:"anchorLabel",label:"anchorLabel",type:"text",default:"大額融資事件樣本量 / 筆"},{key:"closing",label:"結語",type:"text",default:"口徑透明\uFF0C結論才可被檢驗\u3002"},{key:"flowTitle",label:"flowTitle",type:"text",default:"口徑處理流程"},{key:"rowCount",label:"行數量",type:"slider",default:6,min:4,max:6,step:1,description:"口徑表格展示的行數量\uFF084\u20136\uFF09\u3002"},{key:"showLevel",label:"強度列",type:"toggle",default:!0,description:"可信度列\uFF08強度條 + 數值\uFF09的顯隱\u3002"},{key:"showFlow",label:"流程圖",type:"toggle",default:!0,description:"底部橫向口徑處理流程條的顯隱\u3002"},{key:"flowStepCount",label:"流程數量",type:"slider",default:5,min:3,max:5,step:1,description:"流程節點數量\uFF083\u20135\uFF09\u3002",showWhen:t=>t.showFlow},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一行作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 行"},{value:1,label:"第 2 行"},{value:2,label:"第 3 行"},{value:3,label:"第 4 行"},{value:4,label:"第 5 行"},{value:5,label:"第 6 行"}],description:"選擇被高亮的行\u3002",showWhen:t=>t.focusEnabled},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於維度標記\u3001高亮行與流程節點\u3002"}],qg=`
.aic-src { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-src, .aic-src * { box-sizing: border-box; }
.aic-src .src-glow { position: absolute; right: -4%; top: -8%; width: 52%; height: 56%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 20%, transparent), transparent 70%); }

.aic-src .src-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-src .src-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-src .src-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-src .src-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* meta band: marker + lead (left) \xB7 anchor figure (right) */
.aic-src .src-meta { position: absolute; left: var(--pad); right: var(--pad); top: 288px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 60px; }
.aic-src .src-meta-l { max-width: 1180px; }
.aic-src .src-marker { display: flex; align-items: baseline; gap: 18px; }
.aic-src .src-marker b { font-family: var(--aic-font-display); font-weight: 700; font-size: 50px; line-height: .8;
  color: var(--aic-accent-deep); transform: skewX(-9deg); transform-origin: left bottom; display: inline-block; white-space: nowrap; }
.aic-src .src-season { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-src .src-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 29px; line-height: 1.5;
  color: var(--aic-ink); margin: 22px 0 12px; text-wrap: pretty; }
.aic-src .src-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-src .src-anchor { flex: none; text-align: right; }
.aic-src .src-anchor-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 100px; line-height: .82;
  color: var(--aic-ink); font-variant-numeric: tabular-nums; transform: skewX(-9deg); transform-origin: right bottom; display: inline-block; }
.aic-src .src-anchor-l { font-family: var(--aic-font-text); font-weight: 600; font-size: 21px; color: var(--aic-muted); margin-top: 12px; }

/* table */
.aic-src .src-table { position: absolute; left: var(--pad); right: var(--pad); top: 500px; bottom: 320px;
  display: flex; flex-direction: column; }
.aic-src[data-flow="0"] .src-table { bottom: 150px; }
.aic-src .src-thead { display: grid; align-items: center; gap: 0 36px; padding: 0 26px 14px;
  border-bottom: 2px solid var(--aic-ink); }
.aic-src .src-th { font-family: var(--aic-font-display); font-weight: 600; font-size: 16px; letter-spacing: .12em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-src .src-tbody { flex: 1; display: flex; flex-direction: column; }
.aic-src .src-row { flex: 1; display: grid; align-items: center; gap: 0 36px; padding: 0 26px;
  border-bottom: 1.5px solid var(--aic-hair); border-radius: 16px; transition: background .3s, transform .3s; }
.aic-src .src-row:last-child { border-bottom: none; }
.aic-src .src-row[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-src .src-dim { display: flex; align-items: center; gap: 16px; }
.aic-src .src-dim .dot { width: 12px; height: 12px; border-radius: 3px; background: var(--aic-accent); flex: none; opacity: .55; }
.aic-src .src-row[data-focus="1"] .src-dim .dot { opacity: 1; }
.aic-src .src-dim b { font-family: var(--aic-font-display); font-weight: 700; font-size: 26px; color: var(--aic-ink); white-space: nowrap; }
.aic-src .src-level { display: flex; align-items: center; gap: 18px; }
.aic-src .src-level-track { flex: 1; height: 12px; border-radius: 999px; background: var(--aic-hair); overflow: hidden; min-width: 80px; }
.aic-src .src-level-fill { height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--aic-accent) 55%, white), var(--aic-accent-deep));
  transition: width .55s cubic-bezier(.3,.7,.4,1); }
.aic-src .src-level-v { font-family: var(--aic-font-display); font-weight: 700; font-size: 24px; color: var(--aic-ink);
  font-variant-numeric: tabular-nums; min-width: 90px; text-align: right; }
.aic-src .src-level-v u { text-decoration: none; font-size: 15px; font-weight: 600; color: var(--aic-muted); margin-left: 4px; }
.aic-src .src-note { font-family: var(--aic-font-text); font-weight: 500; font-size: 20px; color: var(--aic-ink-dim); }

/* pipeline ribbon */
.aic-src .src-flow { position: absolute; left: var(--pad); right: var(--pad); bottom: 150px; }
.aic-src .src-flow-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 0 0 14px; }
.aic-src .src-flow-row { display: flex; align-items: stretch; }
.aic-src .src-node { flex: 1 1 0; display: flex; align-items: center; gap: 14px; }
.aic-src .src-node-box { flex: 1; display: flex; align-items: center; gap: 14px; padding: 18px 22px;
  border-radius: 14px; border: 1.5px solid var(--aic-hair-strong); background: var(--aic-card); }
.aic-src .src-node-n { font-family: var(--aic-font-display); font-weight: 700; font-size: 22px; color: var(--aic-accent-deep);
  width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; flex: none;
  background: color-mix(in srgb, var(--aic-accent) 18%, transparent); }
.aic-src .src-node-x { font-family: var(--aic-font-text); font-weight: 700; font-size: 23px; color: var(--aic-ink); white-space: nowrap; }
.aic-src .src-arrow { flex: none; width: 32px; display: grid; place-items: center; color: var(--aic-hair-strong); }
.aic-src .src-arrow svg { width: 20px; height: 20px; }

.aic-src .src-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-src .src-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-src .src-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-src .src-deco { width: 300px; height: 30px; }
`,$g=["accent","pos","accent","pos","warn","accent","pos","pos","accent","warn","pos","accent","pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","pos","warn","accent","pos","accent","pos","warn","pos","accent"].map(t=>({tone:t}));function fs(t){let a={...ds,...t},e={...ps,...Object.fromEntries(Object.entries(a).filter(([,r])=>r!==void 0))};y(),h("aic-src",qg);let m=w(a.accentColor),i=Math.max(4,Math.min(E(e.rows).length,a.rowCount)),s=E(e.rows).slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=L(s.map(r=>r.level),1),p=Math.max(3,Math.min(e.flow.length,a.flowStepCount)),d=e.flow.slice(0,p),n=["minmax(240px, 0.9fr)"];a.showLevel&&n.push("minmax(300px, 1.1fr)"),n.push("1.7fr");let o=n.join(" ");return oe("div",{className:"aic-src",style:m,"data-flow":a.showFlow?"1":"0",children:[a.showDecorations&&aa("div",{className:"src-glow"}),oe("div",{className:"src-head",children:[oe("div",{children:[aa("p",{className:"src-eyebrow",children:e.eyebrow}),aa("h2",{className:"src-title",children:e.title})]}),aa("div",{className:"src-sub",children:e.titleTail})]}),oe("div",{className:"src-meta",children:[oe("div",{className:"src-meta-l",children:[oe("div",{className:"src-marker",children:[aa("b",{children:e.marker}),aa("span",{className:"src-season",children:e.segment})]}),aa("p",{className:"src-lead",children:e.lead}),aa("div",{className:"src-statline",children:e.statLine})]}),oe("div",{className:"src-anchor",children:[aa("div",{className:"src-anchor-v",children:e.anchorValue}),aa("div",{className:"src-anchor-l",children:e.anchorLabel})]})]}),oe("div",{className:"src-table",children:[oe("div",{className:"src-thead",style:{gridTemplateColumns:o},children:[aa("div",{className:"src-th",children:e.colHeads.dim}),a.showLevel&&aa("div",{className:"src-th",children:e.colHeads.level}),aa("div",{className:"src-th",children:e.colHeads.note})]}),aa("div",{className:"src-tbody",children:s.map((r,g)=>oe("div",{className:"src-row","data-focus":a.focusEnabled&&g===l?"1":"0",style:{gridTemplateColumns:o},children:[oe("div",{className:"src-dim",children:[aa("span",{className:"dot"}),aa("b",{children:r.dim})]}),a.showLevel&&oe("div",{className:"src-level",children:[aa("div",{className:"src-level-track",children:aa("div",{className:"src-level-fill",style:{width:M(r.level,f)*100+"%"}})}),oe("div",{className:"src-level-v",children:[r.level,aa("u",{children:"/100"})]})]}),aa("div",{className:"src-note",children:r.note})]},r.dim))})]}),a.showFlow&&oe("div",{className:"src-flow",children:[aa("p",{className:"src-flow-t",children:e.flowTitle}),aa("div",{className:"src-flow-row",children:d.map((r,g)=>oe("div",{className:"src-node",style:{flexGrow:g===d.length-1?0:1},children:[oe("div",{className:"src-node-box",children:[aa("span",{className:"src-node-n",children:g+1}),aa("span",{className:"src-node-x",children:r})]}),g<d.length-1&&aa("span",{className:"src-arrow",children:aa("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:aa("path",{d:"M4 12h14M13 6l6 6-6 6",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})})]},r))})]}),oe("div",{className:"src-foot",children:[oe("div",{className:"src-closing",children:[aa("b",{}),e.closing]}),a.showDecorations&&aa("div",{className:"src-deco",children:aa(k,{data:$g,gap:4})})]})]})}var jo={};S(jo,{controls:()=>Ug,default:()=>xs,defaultProps:()=>us});import"react";import{jsx as Q,jsxs as at}from"react/jsx-runtime";var gs={eyebrow:"About the Lab",segment:"研究團隊與方法",title:"關於 AI Capital Lab",titleTail:"研究團隊與方法",lead:"AI Capital Lab 專注於 AI 產業的資本流向研究\uFF0C用橫縱分析法把融資資料轉化為結構化判斷\uFF0C服務投資人\u3001創業者與產業研究者\u3002",statLine:"橫縱分析法 \xB7 多源交叉 \xB7 持續追蹤",closing:"從資本流向\uFF0C看 AI 產業的真實重心\u3002",badge:"研究團隊",listTitle:"我們做什麼",cards:[{label:"資本流向研究",note:"追蹤大額融資事件與賽道結構變化"},{label:"橫縱分析方法",note:"空間對比 \xD7 時間演化 \xD7 產業分層"},{label:"多源資料核對",note:"公開披露交叉驗證\uFF0C口徑透明可複核"},{label:"前瞻訊號追蹤",note:"收入兌現\u3001IPO 視窗與算力成本觀察"}],contactTitle:"聯絡",contacts:["research@aicapitallab.example","AI Capital Lab \xB7 行業研究"]},ms={portrait:3/4,landscape:4/3,square:1,auto:null},us={...gs,imageCount:2,imageRatio:"auto",images:[],cardCount:4,focusEnabled:!0,focusIndex:0,showContact:!0,showDecorations:!0,accentColor:c.accent,renderSlot:null},Ug=[{key:"eyebrow",label:"眉標",type:"text",default:"About the Lab"},{key:"segment",label:"segment",type:"text",default:"研究團隊與方法"},{key:"title",label:"標題",type:"text",default:"關於 AI Capital Lab"},{key:"titleTail",label:"副標題",type:"text",default:"研究團隊與方法"},{key:"lead",label:"導言",type:"text",default:"AI Capital Lab 專注於 AI 產業的資本流向研究\uFF0C用橫縱分析法把融資資料轉化為結構化判斷\uFF0C服務投資人\u3001創業者與產業研究者\u3002"},{key:"statLine",label:"statLine",type:"text",default:"橫縱分析法 \xB7 多源交叉 \xB7 持續追蹤"},{key:"closing",label:"結語",type:"text",default:"從資本流向\uFF0C看 AI 產業的真實重心\u3002"},{key:"badge",label:"badge",type:"text",default:"研究團隊"},{key:"listTitle",label:"listTitle",type:"text",default:"我們做什麼"},{key:"contactTitle",label:"contactTitle",type:"text",default:"聯絡"},{key:"imageCount",label:"圖片數量",type:"slider",default:2,min:0,max:3,step:1,description:"主視覺區圖片槽數量\uFF080\u20133\uFF09\uFF1B為 0 時以品牌圖形填充\uFF0C1 張可跟隨原圖比例\uFF0C多張自動排成畫廊\u3002"},{key:"imageRatio",label:"圖片比例",type:"radio",default:"auto",options:[{value:"portrait",label:"豎圖"},{value:"landscape",label:"橫圖"},{value:"square",label:"方形"},{value:"auto",label:"自適應"}],description:"圖片槽比例\uFF1B自適應會跟隨使用者上傳圖片的原始比例\uFF08單圖自然排布\uFF0C多圖統一為畫廊牆\uFF09\u3002"},{key:"cardCount",label:"卡片數量",type:"slider",default:4,min:2,max:4,step:1,description:"左側能力說明卡數量\uFF082\u20134\uFF09\u3002"},{key:"focusEnabled",label:"重點資訊",type:"toggle",default:!0,description:"是否高亮某一張能力卡作為視覺重點\u3002"},{key:"focusIndex",label:"重點元素",type:"select",default:0,options:[{value:0,label:"第 1 個"},{value:1,label:"第 2 個"},{value:2,label:"第 3 個"},{value:3,label:"第 4 個"}],description:"選擇被高亮的能力卡\u3002",showWhen:t=>t.focusEnabled},{key:"showContact",label:"聯絡資訊",type:"toggle",default:!0,description:"底部聯絡資訊行的顯隱\u3002"},{key:"showDecorations",label:"裝飾文案",type:"toggle",default:!0,description:"背景光暈\u3001圖片角標與條碼等裝飾的顯隱\u3002"},{key:"accentColor",label:"主題色",type:"color",default:c.accent,options:[c.accent,"#23C76A","#2F7BFF","#F2A93B","#0E110B"],description:"品牌強調色\uFF0C作用於序號\u3001高亮卡與裝飾\u3002"}],Yg=`
.aic-about { position: relative; width: 100%; height: 100%; overflow: hidden;
  background: var(--aic-paper); color: var(--aic-ink); font-family: var(--aic-font-text); --pad: 96px; }
.aic-about, .aic-about * { box-sizing: border-box; }
.aic-about .ab-glow { position: absolute; right: 8%; top: -8%; width: 48%; height: 58%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--aic-accent) 22%, transparent), transparent 70%); }

.aic-about .ab-head { position: absolute; top: 84px; left: var(--pad); right: var(--pad);
  display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 28px;
  border-bottom: 1.5px solid var(--aic-hair); }
.aic-about .ab-eyebrow { font-family: var(--aic-font-display); font-weight: 600; font-size: 22px;
  letter-spacing: .24em; text-transform: uppercase; color: var(--aic-muted); margin: 0 0 24px; }
.aic-about .ab-title { font-family: var(--aic-font-text); font-weight: 900; font-size: 80px; line-height: .96; margin: 0; }
.aic-about .ab-sub { font-family: var(--aic-font-display); font-weight: 600; font-size: 30px; color: var(--aic-ink-dim); padding-bottom: 8px; white-space: nowrap; }

/* editorial column (left) */
.aic-about .ab-side { position: absolute; left: var(--pad); top: 300px; bottom: 150px; width: 880px;
  display: flex; flex-direction: column; }
.aic-about .ab-marker { display: flex; align-items: center; gap: 16px; }
.aic-about .ab-marker b { width: 52px; height: 5px; border-radius: 3px; background: var(--aic-accent); }
.aic-about .ab-marker span { font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--aic-muted); white-space: nowrap; }
.aic-about .ab-lead { font-family: var(--aic-font-text); font-weight: 500; font-size: 28px; line-height: 1.5;
  color: var(--aic-ink); margin: 18px 0 10px; text-wrap: pretty; }
.aic-about .ab-statline { font-family: var(--aic-font-display); font-weight: 600; font-size: 20px; letter-spacing: .03em;
  color: var(--aic-muted); }
.aic-about .ab-list-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 17px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); margin: 30px 0 8px; }
.aic-about .ab-cards { display: flex; flex-direction: column; }
.aic-about .ab-card { display: grid; grid-template-columns: 78px 1fr; align-items: center; gap: 8px 4px;
  padding: 16px 18px; border-bottom: 1.5px solid var(--aic-hair); border-radius: 14px;
  transition: background .3s, transform .3s; }
.aic-about .ab-card:last-child { border-bottom: none; }
.aic-about .ab-card[data-focus="1"] { background: color-mix(in srgb, var(--aic-accent) 13%, var(--aic-card)); transform: translateX(6px); }
.aic-about .ab-card-n { grid-row: 1 / 3; font-family: var(--aic-font-display); font-weight: 700; font-size: 46px;
  line-height: .8; color: var(--aic-faint); font-variant-numeric: lining-nums; transform: skewX(-9deg);
  transform-origin: left bottom; display: inline-block; }
.aic-about .ab-card[data-focus="1"] .ab-card-n { color: var(--aic-accent-deep); }
.aic-about .ab-card-l { font-family: var(--aic-font-text); font-weight: 700; font-size: 30px; color: var(--aic-ink); align-self: end; }
.aic-about .ab-card-d { font-family: var(--aic-font-text); font-weight: 500; font-size: 21px; color: var(--aic-muted); align-self: start; }

.aic-about .ab-contact { margin-top: auto; padding-top: 22px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.aic-about .ab-contact-t { font-family: var(--aic-font-display); font-weight: 600; font-size: 16px; letter-spacing: .14em;
  text-transform: uppercase; color: var(--aic-muted); }
.aic-about .ab-contact em { font-style: normal; font-family: var(--aic-font-display); font-weight: 600; font-size: 21px;
  color: var(--aic-ink-dim); padding: 6px 16px; border: 1.5px solid var(--aic-hair-strong); border-radius: 999px; }

/* hero gallery (right) */
.aic-about .ab-gallery { position: absolute; left: 1016px; right: var(--pad); top: 300px; bottom: 150px;
  display: flex; flex-direction: column; gap: 16px; }
.aic-about .ab-cell { position: relative; overflow: hidden; border-radius: 24px;
  background: var(--aic-accent-soft); border: 1.5px solid var(--aic-hair); }
.aic-about .ab-cell.tile { flex: 1 1 0; min-height: 0; }
.aic-about .ab-cell.tile-auto { flex: 1 1 0; min-height: 0; display: grid; place-items: center; }
.aic-about .ab-cell.fill { flex: 1 1 0; }
.aic-about .ab-cell.single-fixed { margin: auto 0; width: 100%; }
.aic-about .ab-cell.single-auto { margin: auto 0; width: 100%; }
.aic-about .ab-frame { position: relative; width: 100%; height: 100%; overflow: hidden; }
.aic-about .ab-cell.tile .ab-frame, .aic-about .ab-cell.fill .ab-frame { height: 100%; }
.aic-about .ab-cell.tile-auto .ab-frame { height: 100%; display: grid; place-items: center; }
.aic-about .ab-cell.single-fixed .ab-frame { aspect-ratio: var(--ar); height: auto; max-height: 100%; width: 100%; }
.aic-about .ab-cell.single-auto .ab-frame { height: auto; }
.aic-about .ab-frame > * { position: absolute; inset: 0; width: 100%; height: 100%; }
.aic-about .ab-cell.single-auto .ab-frame > * { position: static; width: 100%; height: auto; display: block; }
.aic-about .ab-cell.tile-auto .ab-frame > [data-dashi-host-image-slot] {
  position: relative; inset: auto; width: 100%; height: auto; max-width: 100%; max-height: 100%;
}
.aic-about .ab-frame > [data-dashi-video-native="true"] {
  position: relative; inset: auto; width: auto; height: auto; max-width: 100%; max-height: 100%;
}
.aic-about .ab-badge { position: absolute; top: 16px; left: 16px; z-index: 4; font-family: var(--aic-font-display);
  font-weight: 600; font-size: 16px; letter-spacing: .12em; text-transform: uppercase; color: var(--aic-ink);
  background: var(--aic-accent); padding: 6px 13px; border-radius: 999px; white-space: nowrap; }
.aic-about .ab-deco-fill { position: absolute; inset: 0; overflow: hidden;
  background: linear-gradient(135deg, color-mix(in srgb, var(--aic-accent-bright) 70%, white), var(--aic-accent) 92%); }
.aic-about .ab-ph { position: absolute; inset: 0; display: grid; place-items: center; }
.aic-about .ab-ph-cap { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center;
  font-family: var(--aic-font-display); font-weight: 500; font-size: 17px; letter-spacing: .06em; color: var(--aic-ink-dim); }

.aic-about .ab-foot { position: absolute; left: var(--pad); right: var(--pad); bottom: 64px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px; }
.aic-about .ab-closing { display: flex; align-items: center; gap: 16px; font-family: var(--aic-font-text);
  font-weight: 600; font-size: 27px; color: var(--aic-ink); }
.aic-about .ab-closing b { width: 12px; height: 12px; border-radius: 50%; background: var(--aic-accent); flex: none; }
.aic-about .ab-deco { width: 300px; height: 30px; }
`,_g=["accent","pos","accent","pos","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","accent","warn","pos","accent","pos","pos","warn","accent","pos"].map(t=>({tone:t}));function Xg({i:t}){let a="abph-"+t;return at("div",{className:"ab-ph",children:[at("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":"true",style:{position:"absolute",inset:0},children:[Q("defs",{children:at("pattern",{id:a,width:"16",height:"16",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[Q("rect",{width:"16",height:"16",fill:"var(--aic-accent-soft)"}),Q("line",{x1:"0",y1:"0",x2:"0",y2:"16",stroke:"color-mix(in srgb, var(--aic-accent) 40%, white)",strokeWidth:"8"})]})}),Q("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),Q("span",{className:"ab-ph-cap",children:`image_slot_${t+1}`})]})}function xs(t){let a={...us,...t},e={...gs,...Object.fromEntries(Object.entries(a).filter(([,g])=>g!==void 0))};y(),h("aic-about",Yg);let m=w(a.accentColor),i=Math.max(2,Math.min(e.cards.length,a.cardCount)),s=e.cards.slice(0,i),l=Math.max(0,Math.min(i-1,a.focusIndex)),f=Math.max(0,Math.min(3,a.imageCount)),p=ms.hasOwnProperty(a.imageRatio)?a.imageRatio:"auto",d=ms[p],n=d==null,o=f===1,r=o?n?"single-auto":"single-fixed":n?"tile-auto":"tile";return at("div",{className:"aic-about",style:m,children:[a.showDecorations&&Q("div",{className:"ab-glow"}),at("div",{className:"ab-head",children:[at("div",{children:[Q("p",{className:"ab-eyebrow",children:e.eyebrow}),Q("h2",{className:"ab-title",children:e.title})]}),Q("div",{className:"ab-sub",children:e.titleTail})]}),at("div",{className:"ab-side",children:[at("div",{className:"ab-marker",children:[Q("b",{}),Q("span",{children:e.segment})]}),Q("p",{className:"ab-lead",children:e.lead}),Q("div",{className:"ab-statline",children:e.statLine}),Q("p",{className:"ab-list-t",children:e.listTitle}),Q("div",{className:"ab-cards",children:s.map((g,u)=>at("div",{className:"ab-card","data-focus":a.focusEnabled&&u===l?"1":"0",children:[Q("span",{className:"ab-card-n",children:String(u+1).padStart(2,"0")}),Q("span",{className:"ab-card-l",children:g.label}),Q("span",{className:"ab-card-d",children:g.note})]},g.label))}),a.showContact&&at("div",{className:"ab-contact",children:[Q("span",{className:"ab-contact-t",children:e.contactTitle}),e.contacts.map(g=>Q("em",{children:g},g))]})]}),Q("div",{className:"ab-gallery",children:f===0?Q("div",{className:"ab-cell fill",children:Q("div",{className:"ab-frame",children:Q("div",{className:"ab-deco-fill",children:Q(A,{})})})}):Array.from({length:f}).map((g,u)=>at("div",{className:"ab-cell "+r,style:o&&!n?{"--ar":String(d)}:null,children:[a.showDecorations&&u===0&&Q("span",{className:"ab-badge",children:e.badge}),Q("div",{className:"ab-frame",children:a.renderSlot?a.renderSlot(u,{ratio:p,ratioAR:d,preserveVideoSize:!0,adaptiveMedia:n&&o,fallbackRatio:o?4/3:void 0}):Q(Xg,{i:u})})]},u))}),at("div",{className:"ab-foot",children:[at("div",{className:"ab-closing",children:[Q("b",{}),e.closing]}),a.showDecorations&&Q("div",{className:"ab-deco",children:Q(k,{data:_g,gap:4})})]})]})}var Gg=[{id:"cover-lean-page",label:"封面 精益智造",module:pi},{id:"cover-supply-chain-page",label:"封面 鏈通全國",module:di},{id:"cover-retail-trend-page",label:"封面 把握趨勢",module:fi},{id:"cover-supply-strategy-page",label:"封面 供應鏈戰略",module:mi},{id:"cover-page",label:"封面 Cover",module:gi},{id:"summary-page",label:"摘要 Overview",module:vi},{id:"contents-page",label:"目錄 Contents",module:hi},{id:"method-page",label:"方法 Methodology",module:bi},{id:"case-page",label:"案例 Cases",module:yi},{id:"monthly-page",label:"熱力 Heatmap",module:wi},{id:"ranking-page",label:"排名 Ranking",module:ki},{id:"matrix-page",label:"象限 Quadrant",module:zi},{id:"risk-page",label:"風險 Risk",module:Ci},{id:"outlook-page",label:"策略 Outlook",module:Si},{id:"quote-page",label:"結論 Conclusion",module:Ai},{id:"chapter-page",label:"章節 市場資料",module:Ei},{id:"deal-map-page",label:"氣泡 Deal Map",module:Li},{id:"cold-start-page",label:"季度 Q1 冷啟動",module:Fi},{id:"accelerate-page",label:"季度 Q2 加速",module:Ii},{id:"peak-page",label:"季度 Q3 峰值",module:Ri},{id:"cooldown-page",label:"季度 Q4 回落",module:Di},{id:"peak-trough-page",label:"峰谷 Peak/Trough",module:ji},{id:"waterfall-page",label:"瀑布 Waterfall",module:Hi},{id:"deal-size-page",label:"區間 Deal Size",module:Vi},{id:"avg-ticket-page",label:"均值 Avg Ticket",module:Wi},{id:"investor-page",label:"圖譜 Investors",module:qi},{id:"active-capital-page",label:"排名 Active Capital",module:$i},{id:"concentration-page",label:"集中度 Concentration",module:Ui},{id:"syndicate-page",label:"陣容 Syndicate",module:Yi},{id:"knowledge-page",label:"賽道 企業搜尋",module:_i},{id:"legal-page",label:"賽道 法律 AI",module:Xi},{id:"healthcare-page",label:"賽道 醫療 AI",module:Gi},{id:"finance-page",label:"賽道 金融 AI",module:Qi},{id:"compute-page",label:"賽道 算力雲",module:Ki},{id:"chip-page",label:"賽道 AI 晶片",module:Ji},{id:"robotics-page",label:"賽道 具身智慧",module:Zi},{id:"autonomy-page",label:"賽道 自動駕駛",module:ao},{id:"safety-page",label:"賽道 AI 安全",module:eo},{id:"content-gen-page",label:"賽道 內容生成",module:to},{id:"education-page",label:"賽道 教育 AI",module:io},{id:"support-page",label:"賽道 客服 AI",module:oo},{id:"sales-page",label:"賽道 銷售行銷",module:no},{id:"low-code-page",label:"賽道 低程式碼",module:co},{id:"open-source-page",label:"賽道 開源模型",module:lo},{id:"alignment-page",label:"賽道 模型對齊",module:ro},{id:"capital-chapter-page",label:"章節 資本結構",module:so},{id:"early-stage-page",label:"訊號 早期輪",module:po},{id:"deal-structure-page",label:"結構 未披露輪次",module:fo},{id:"investor-mix-page",label:"構成 Investor Mix",module:mo},{id:"resource-page",label:"角色 戰略投資者",module:go},{id:"alliance-page",label:"聯盟 雲廠商",module:xo},{id:"ecosystem-page",label:"生態 NVIDIA",module:vo},{id:"geo-center-page",label:"地理 灣區中心",module:ho},{id:"region-cluster-page",label:"叢集 區域對比",module:yo},{id:"resource-triad-page",label:"三角 人才資本算力",module:wo},{id:"open-aicase-page",label:"案例 OpenAI",module:ko},{id:"figure-case-page",label:"案例 Figure",module:No},{id:"ssicase-page",label:"案例 SSI",module:zo},{id:"risk-chapter-page",label:"章節 風險策略",module:Co},{id:"revenue-page",label:"風險 收入驗證",module:So},{id:"compliance-page",label:"風險 監管合規",module:Ao},{id:"margin-page",label:"風險 算力成本",module:Eo},{id:"moat-page",label:"風險 壁壘壓縮",module:To},{id:"strategy-infra-page",label:"策略 優先基建",module:Mo},{id:"strategy-vertical-page",label:"策略 垂直應用",module:Lo},{id:"repricing-page",label:"策略 IPO 重定價",module:Fo},{id:"closing-page",label:"結語 Closing",module:Io},{id:"appendix-chapter-page",label:"章節 附錄",module:Ro},{id:"forward-page",label:"前瞻 Forward",module:Do},{id:"sources-page",label:"口徑 資料來源",module:Bo},{id:"about-lab-page",label:"關於 About the Lab",module:jo}],Qg=Gg.map(t=>({id:t.id,label:t.label,Component:t.module.default,controls:t.module.controls||t.module.default?.controls||[],defaultProps:t.module.defaultProps||t.module.defaults||t.module.default?.defaultProps||t.module.default?.defaults||{},...t.module.numberBounds?{numberBounds:t.module.numberBounds}:{}})),vs="",Kg=[],Jg=Kg.map(t=>({id:t.id,label:t.label,staticHtml:!0,Component:Zg(t)}));function Zg(t){return function(){return ri.createElement(ri.Fragment,null,vs?ri.createElement("style",null,vs):null,ri.createElement("div",{className:["imported-static-cover",t.className].filter(Boolean).join(" "),style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden"},dangerouslySetInnerHTML:{__html:t.innerHtml}}))}}var au=[...Jg,...Qg],eu=qo(au,{themeKey:"theme07",layoutPrefix:"THEME07"});export{eu as runtimePages};
