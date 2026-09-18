// registry.js — single source of truth for the deck.
// Each entry pairs a pure slide component with its controls schema and its
// complete default props. The controls schema keys map 1:1 onto component
// props, so a host (the demo Tweaks panel, or any real app) can drive every
// slide generically without knowing its internals.

import CoverSlide, { controls as coverControls, defaultProps as coverDefaults } from "./slides/CoverSlide.jsx";
import CoverBandSlide, { controls as coverBandControls, defaultProps as coverBandDefaults } from "./slides/CoverBandSlide.jsx";
import CoverPosterSlide, { controls as coverPosterControls, defaultProps as coverPosterDefaults } from "./slides/CoverPosterSlide.jsx";
import CoverGridSlide, { controls as coverGridControls, defaultProps as coverGridDefaults } from "./slides/CoverGridSlide.jsx";
import CoverImageSlide, { controls as coverImageControls, defaultProps as coverImageDefaults } from "./slides/CoverImageSlide.jsx";
import MethodSlide, { controls as methodControls, defaultProps as methodDefaults } from "./slides/MethodSlide.jsx";
import TrendSlide, { controls as trendControls, defaultProps as trendDefaults } from "./slides/TrendSlide.jsx";
import SectorSlide, { controls as sectorControls, defaultProps as sectorDefaults } from "./slides/SectorSlide.jsx";
import RankSlide, { controls as rankControls, defaultProps as rankDefaults } from "./slides/RankSlide.jsx";
import QuadrantSlide, { controls as quadrantControls, defaultProps as quadrantDefaults } from "./slides/QuadrantSlide.jsx";
import ChainSlide, { controls as chainControls, defaultProps as chainDefaults } from "./slides/ChainSlide.jsx";
import CaseSlide, { controls as caseControls, defaultProps as caseDefaults } from "./slides/CaseSlide.jsx";
import SectionSlide, { controls as sectionControls, defaultProps as sectionDefaults } from "./slides/SectionSlide.jsx";
import RoundSlide, { controls as roundControls, defaultProps as roundDefaults, numberBounds as roundNumberBounds } from "./slides/RoundSlide.jsx";
import MonthlySlide, { controls as monthlyControls, defaultProps as monthlyDefaults } from "./slides/MonthlySlide.jsx";
import StatSlide, { controls as statControls, defaultProps as statDefaults } from "./slides/StatSlide.jsx";
import GeoSlide, { controls as geoControls, defaultProps as geoDefaults } from "./slides/GeoSlide.jsx";
import RiskSlide, { controls as riskControls, defaultProps as riskDefaults } from "./slides/RiskSlide.jsx";
import OutlookSlide, { controls as outlookControls, defaultProps as outlookDefaults } from "./slides/OutlookSlide.jsx";
import QuoteSlide, { controls as quoteControls, defaultProps as quoteDefaults } from "./slides/QuoteSlide.jsx";
import TableSlide, { controls as tableControls, defaultProps as tableDefaults } from "./slides/TableSlide.jsx";
import SpotlightSlide, { controls as spotlightControls, defaultProps as spotlightDefaults } from "./slides/SpotlightSlide.jsx";
import MosaicSlide, { controls as mosaicControls, defaultProps as mosaicDefaults } from "./slides/MosaicSlide.jsx";
import TimelineSlide, { controls as timelineControls, defaultProps as timelineDefaults } from "./slides/TimelineSlide.jsx";
import CoreweaveSlide, { controls as coreweaveControls, defaultProps as coreweaveDefaults } from "./slides/CoreweaveSlide.jsx";
import ValuationSlide, { controls as valuationControls, defaultProps as valuationDefaults } from "./slides/ValuationSlide.jsx";
import RiskChainSlide, { controls as riskChainControls, defaultProps as riskChainDefaults } from "./slides/RiskChainSlide.jsx";
import TakeawaySlide, { controls as takeawayControls, defaultProps as takeawayDefaults } from "./slides/TakeawaySlide.jsx";
import AgendaSlide, { controls as agendaControls, defaultProps as agendaDefaults } from "./slides/AgendaSlide.jsx";
import ValuationJumpSlide, { controls as valuationJumpControls, defaultProps as valuationJumpDefaults } from "./slides/ValuationJumpSlide.jsx";
import CaseCompareSlide, { controls as caseCompareControls, defaultProps as caseCompareDefaults } from "./slides/CaseCompareSlide.jsx";
import ColophonSlide, { controls as colophonControls, defaultProps as colophonDefaults } from "./slides/ColophonSlide.jsx";
import AarrrSlide, { controls as aarrrControls, defaultProps as aarrrDefaults } from "./slides/AarrrSlide.jsx";
import RfmSlide, { controls as rfmControls, defaultProps as rfmDefaults } from "./slides/RfmSlide.jsx";
import MabaSlide, { controls as mabaControls, defaultProps as mabaDefaults } from "./slides/MabaSlide.jsx";
import GanttSlide, { controls as ganttControls, defaultProps as ganttDefaults } from "./slides/GanttSlide.jsx";
import DoubleDiamondSlide, { controls as doubleDiamondControls, defaultProps as doubleDiamondDefaults } from "./slides/DoubleDiamondSlide.jsx";
import SwotSlide, { controls as swotControls, defaultProps as swotDefaults } from "./slides/SwotSlide.jsx";
import FiveForcesSlide, { controls as fiveForcesControls, defaultProps as fiveForcesDefaults } from "./slides/FiveForcesSlide.jsx";
import CanvasSlide, { controls as canvasControls, defaultProps as canvasDefaults } from "./slides/CanvasSlide.jsx";
import JourneySlide, { controls as journeyControls, defaultProps as journeyDefaults } from "./slides/JourneySlide.jsx";
import PyramidSlide, { controls as pyramidControls, defaultProps as pyramidDefaults } from "./slides/PyramidSlide.jsx";
import BcgSlide, { controls as bcgControls, defaultProps as bcgDefaults } from "./slides/BcgSlide.jsx";
import FlywheelSlide, { controls as flywheelControls, defaultProps as flywheelDefaults } from "./slides/FlywheelSlide.jsx";
import PestSlide, { controls as pestControls, defaultProps as pestDefaults } from "./slides/PestSlide.jsx";
import ParetoSlide, { controls as paretoControls, defaultProps as paretoDefaults } from "./slides/ParetoSlide.jsx";
import RadarSlide, { controls as radarControls, defaultProps as radarDefaults } from "./slides/RadarSlide.jsx";
import ShiftSlide, { controls as shiftControls, defaultProps as shiftDefaults } from "./slides/ShiftSlide.jsx";
import BetMatrixSlide, { controls as betMatrixControls, defaultProps as betMatrixDefaults } from "./slides/BetMatrixSlide.jsx";
import TreemapSlide, { controls as treemapControls, defaultProps as treemapDefaults } from "./slides/TreemapSlide.jsx";
import WaterfallSlide, { controls as waterfallControls, defaultProps as waterfallDefaults } from "./slides/WaterfallSlide.jsx";
import ShareSlide, { controls as shareControls, defaultProps as shareDefaults } from "./slides/ShareSlide.jsx";
import EscalationSlide, { controls as escalationControls, defaultProps as escalationDefaults } from "./slides/EscalationSlide.jsx";
import SankeySlide, { controls as sankeyControls, defaultProps as sankeyDefaults } from "./slides/SankeySlide.jsx";
import GallerySlide, { controls as galleryControls, defaultProps as galleryDefaults } from "./slides/GallerySlide.jsx";
import ScorecardSlide, { controls as scorecardControls, defaultProps as scorecardDefaults } from "./slides/ScorecardSlide.jsx";
import GaugeSlide, { controls as gaugeControls, defaultProps as gaugeDefaults } from "./slides/GaugeSlide.jsx";
import EmbodiedSlide, { controls as embodiedControls, defaultProps as embodiedDefaults } from "./slides/EmbodiedSlide.jsx";
import RoseSlide, { controls as roseControls, defaultProps as roseDefaults } from "./slides/RoseSlide.jsx";
import MarimekkoSlide, { controls as marimekkoControls, defaultProps as marimekkoDefaults } from "./slides/MarimekkoSlide.jsx";
import ConcentrationSlide, { controls as concentrationControls, defaultProps as concentrationDefaults } from "./slides/ConcentrationSlide.jsx";
import TornadoSlide, { controls as tornadoControls, defaultProps as tornadoDefaults, numberBounds as tornadoNumberBounds } from "./slides/TornadoSlide.jsx";
import MoatSlide, { controls as moatControls, defaultProps as moatDefaults } from "./slides/MoatSlide.jsx";
import SupplyChainSlide, { controls as supplyControls, defaultProps as supplyDefaults } from "./slides/SupplyChainSlide.jsx";
import ChipsSlide, { controls as chipsControls, defaultProps as chipsDefaults } from "./slides/ChipsSlide.jsx";
import BubbleSlide, { controls as bubbleControls, defaultProps as bubbleDefaults } from "./slides/BubbleSlide.jsx";
import ChronicleSlide, { controls as chronicleControls, defaultProps as chronicleDefaults } from "./slides/ChronicleSlide.jsx";
import ComputeSlide, { controls as computeControls, defaultProps as computeDefaults } from "./slides/ComputeSlide.jsx";
import RegisterSlide, { controls as registerControls, defaultProps as registerDefaults } from "./slides/RegisterSlide.jsx";
import VerticalSlide, { controls as verticalControls, defaultProps as verticalDefaults } from "./slides/VerticalSlide.jsx";
import WaffleSlide, { controls as waffleControls, defaultProps as waffleDefaults } from "./slides/WaffleSlide.jsx";
import PeakSlide, { controls as peakControls, defaultProps as peakDefaults } from "./slides/PeakSlide.jsx";
import LayerTableSlide, { controls as layerTableControls, defaultProps as layerTableDefaults } from "./slides/LayerTableSlide.jsx";
import CumulativeSlide, { controls as cumulativeControls, defaultProps as cumulativeDefaults } from "./slides/CumulativeSlide.jsx";
import HypeCycleSlide, { controls as hypeCycleControls, defaultProps as hypeCycleDefaults, numberBounds as hypeCycleNumberBounds } from "./slides/HypeCycleSlide.jsx";
import HorizonSlide, { controls as horizonControls, defaultProps as horizonDefaults } from "./slides/HorizonSlide.jsx";
import StatementSlide, { controls as statementControls, defaultProps as statementDefaults } from "./slides/StatementHeroSlide.jsx";

export const SLIDES = [
  { id: "cover",  label: "封面",     title: "調研報告封面",     Component: CoverSlide,  controls: coverControls,  defaultProps: coverDefaults },
  { id: "coverband",  label: "封面·橫向", title: "橫向編輯式封面", Component: CoverBandSlide,  controls: coverBandControls,  defaultProps: coverBandDefaults },
  { id: "coverposter", label: "封面·海報", title: "中央對稱海報封面", Component: CoverPosterSlide, controls: coverPosterControls, defaultProps: coverPosterDefaults },
  { id: "covergrid",  label: "封面·網格", title: "深色模組網格封面", Component: CoverGridSlide,  controls: coverGridControls,  defaultProps: coverGridDefaults },
  { id: "coverimage", label: "封面·影像", title: "全幅影像封面",     Component: CoverImageSlide, controls: coverImageControls, defaultProps: coverImageDefaults },
  { id: "agenda", label: "導覽",     title: "報告導覽 / 目錄",   Component: AgendaSlide, controls: agendaControls, defaultProps: agendaDefaults },
  { id: "method", label: "研究方法", title: "橫縱分析法",       Component: MethodSlide, controls: methodControls, defaultProps: methodDefaults },
  { id: "trend",  label: "市場全景", title: "逐季度融資額走勢", Component: TrendSlide,  controls: trendControls,  defaultProps: trendDefaults },
  { id: "chronicle", label: "年度編年", title: "2024 大額融資事件編年", Component: ChronicleSlide, controls: chronicleControls, defaultProps: chronicleDefaults },
  { id: "sector", label: "橫向透視", title: "行業賽道融資額佔比", Component: SectorSlide, controls: sectorControls, defaultProps: sectorDefaults },
  { id: "rank",   label: "頭部玩家", title: "頭部玩家融資排名",     Component: RankSlide,     controls: rankControls,     defaultProps: rankDefaults },
  { id: "table",  label: "速查表",   title: "頭部玩家融資速查表",   Component: TableSlide,    controls: tableControls,    defaultProps: tableDefaults },
  { id: "bubble", label: "融資體量", title: "Top 10 公司融資氣泡陣", Component: BubbleSlide, controls: bubbleControls, defaultProps: bubbleDefaults },
  { id: "quadrant", label: "選題四象限", title: "資本熱度 × 商業兌現", Component: QuadrantSlide, controls: quadrantControls, defaultProps: quadrantDefaults },
  { id: "chain",  label: "產業鏈分層", title: "產業鏈分層透視",     Component: ChainSlide,    controls: chainControls,    defaultProps: chainDefaults },
  { id: "layertable", label: "產業鏈速查", title: "AI 產業鏈分層速查表", Component: LayerTableSlide, controls: layerTableControls, defaultProps: layerTableDefaults },
  { id: "vertical", label: "應用層",   title: "下游應用層 · 垂直應用", Component: VerticalSlide, controls: verticalControls, defaultProps: verticalDefaults },
  { id: "case",   label: "典型案例", title: "Anthropic 案例",      Component: CaseSlide,     controls: caseControls,     defaultProps: caseDefaults },
  { id: "spotlight", label: "案例聚焦", title: "xAI 案例聚焦",        Component: SpotlightSlide, controls: spotlightControls, defaultProps: spotlightDefaults },
  { id: "coreweave", label: "賣鏟贏家", title: "CoreWeave 案例",       Component: CoreweaveSlide, controls: coreweaveControls, defaultProps: coreweaveDefaults },
  { id: "casecompare", label: "案例對比", title: "三大案例對比速覽", Component: CaseCompareSlide, controls: caseCompareControls, defaultProps: caseCompareDefaults },
  { id: "section", label: "章節頁",  title: "結構透視與展望",      Component: SectionSlide,  controls: sectionControls,  defaultProps: sectionDefaults },
  { id: "round",  label: "輪次結構", title: "融資輪次結構對比",     Component: RoundSlide,    controls: roundControls,    defaultProps: roundDefaults, numberBounds: roundNumberBounds },
  { id: "waffle", label: "輪次單點陣圖", title: "97 筆大額融資 · 輪次構成", Component: WaffleSlide, controls: waffleControls, defaultProps: waffleDefaults },
  { id: "monthly", label: "月度明細", title: "逐月融資額明細",      Component: MonthlySlide,  controls: monthlyControls,  defaultProps: monthlyDefaults },
  { id: "peak",   label: "單月峰值", title: "全年單月峰值 · 雙峰節奏", Component: PeakSlide, controls: peakControls, defaultProps: peakDefaults },
  { id: "cumulative", label: "資金累積", title: "全年資金累積 · S 曲線", Component: CumulativeSlide, controls: cumulativeControls, defaultProps: cumulativeDefaults },
  { id: "stat",   label: "核心資料", title: "大數字 · 資本大年",     Component: StatSlide,     controls: statControls,     defaultProps: statDefaults },
  { id: "geo",    label: "地區分佈", title: "融資的地理版圖",     Component: GeoSlide,      controls: geoControls,      defaultProps: geoDefaults },
  { id: "mosaic", label: "地理圖集", title: "資本地理圖集",        Component: MosaicSlide,   controls: mosaicControls,   defaultProps: mosaicDefaults },
  { id: "valuationjump", label: "估值躍遷", title: "Anthropic 估值躍遷", Component: ValuationJumpSlide, controls: valuationJumpControls, defaultProps: valuationJumpDefaults },
  { id: "valuation", label: "估值之謎", title: "估值之謎 · 市銷率",    Component: ValuationSlide, controls: valuationControls, defaultProps: valuationDefaults },
  { id: "risk",   label: "風險研判", title: "當前市場的主要風險", Component: RiskSlide,     controls: riskControls,     defaultProps: riskDefaults },
  { id: "riskchain", label: "風險傳導", title: "風險傳導鏈條",        Component: RiskChainSlide, controls: riskChainControls, defaultProps: riskChainDefaults },
  { id: "outlook", label: "投資建議", title: "投資建議與策略",   Component: OutlookSlide,  controls: outlookControls,  defaultProps: outlookDefaults },
  { id: "timeline", label: "策略時間軸", title: "階段性投資策略路線圖", Component: TimelineSlide, controls: timelineControls, defaultProps: timelineDefaults },
  { id: "horizon", label: "三視野", title: "三視野投資框架", Component: HorizonSlide, controls: horizonControls, defaultProps: horizonDefaults },
  { id: "takeaway", label: "核心結論", title: "三條核心結論",        Component: TakeawaySlide, controls: takeawayControls, defaultProps: takeawayDefaults },
  { id: "quote",  label: "金句頁",   title: "結論 · 一句話總結",   Component: QuoteSlide,    controls: quoteControls,    defaultProps: quoteDefaults },
  { id: "aarrr", label: "AARRR",   title: "AARRR 增長漏斗模型",  Component: AarrrSlide,   controls: aarrrControls,   defaultProps: aarrrDefaults },
  { id: "rfm",   label: "RFM",     title: "RFM 標的分層模型",    Component: RfmSlide,     controls: rfmControls,     defaultProps: rfmDefaults },
  { id: "maba",  label: "MABA",    title: "MABA 賽道矩陣",       Component: MabaSlide,    controls: mabaControls,    defaultProps: mabaDefaults },
  { id: "gantt", label: "建倉甘特",   title: "分階段建倉路線圖",     Component: GanttSlide,   controls: ganttControls,   defaultProps: ganttDefaults },
  { id: "doublediamond", label: "決策雙鑽", title: "投資決策雙鑽",        Component: DoubleDiamondSlide, controls: doubleDiamondControls, defaultProps: doubleDiamondDefaults },
  { id: "swot",  label: "SWOT",    title: "SWOT 模型",            Component: SwotSlide,       controls: swotControls,       defaultProps: swotDefaults },
  { id: "fiveforces", label: "五力", title: "波特五力模型",       Component: FiveForcesSlide, controls: fiveForcesControls, defaultProps: fiveForcesDefaults },
  { id: "canvas", label: "畫布",    title: "商業模式畫布",         Component: CanvasSlide,     controls: canvasControls,     defaultProps: canvasDefaults },
  { id: "journey", label: "旅程圖", title: "使用者旅程地圖",         Component: JourneySlide,    controls: journeyControls,    defaultProps: journeyDefaults },
  { id: "pyramid", label: "金字塔", title: "金字塔模型",           Component: PyramidSlide,    controls: pyramidControls,    defaultProps: pyramidDefaults },
  { id: "bcg",     label: "波士頓矩陣", title: "BCG 波士頓矩陣",     Component: BcgSlide,        controls: bcgControls,        defaultProps: bcgDefaults },
  { id: "flywheel", label: "飛輪", title: "飛輪模型",              Component: FlywheelSlide,   controls: flywheelControls,   defaultProps: flywheelDefaults },
  { id: "pest",    label: "PEST",    title: "PEST 宏觀環境分析",    Component: PestSlide,       controls: pestControls,       defaultProps: pestDefaults },
  { id: "pareto",  label: "資本集中度", title: "資本集中度 · 帕累託",  Component: ParetoSlide,     controls: paretoControls,     defaultProps: paretoDefaults },
  { id: "radar",   label: "風險雷達", title: "風險訊號雷達圖",        Component: RadarSlide,      controls: radarControls,      defaultProps: radarDefaults },
  { id: "register", label: "風險登記冊", title: "風險登記冊",          Component: RegisterSlide,   controls: registerControls,   defaultProps: registerDefaults },
  { id: "shift",   label: "正規化轉變", title: "敘事驅動 → 兌現驅動",   Component: ShiftSlide,      controls: shiftControls,      defaultProps: shiftDefaults },
  { id: "hypecycle", label: "成熟度曲線", title: "技術成熟度曲線", Component: HypeCycleSlide, controls: hypeCycleControls, defaultProps: hypeCycleDefaults, numberBounds: hypeCycleNumberBounds },
  { id: "betmatrix", label: "決策矩陣", title: "投資標的決策矩陣",     Component: BetMatrixSlide,  controls: betMatrixControls,  defaultProps: betMatrixDefaults },
  { id: "share",   label: "資本大年", title: "AI 佔全美風投份額",     Component: ShareSlide,      controls: shareControls,      defaultProps: shareDefaults },
  { id: "waterfall", label: "季度節奏", title: "季度融資節奏 · 橋接", Component: WaterfallSlide,  controls: waterfallControls,  defaultProps: waterfallDefaults },
  { id: "treemap", label: "資金版圖", title: "賽道資金版圖 · 樹圖",  Component: TreemapSlide,    controls: treemapControls,    defaultProps: treemapDefaults },
  { id: "escalation", label: "單筆階梯", title: "資金鉅額化 · 單筆階梯", Component: EscalationSlide, controls: escalationControls, defaultProps: escalationDefaults },
  { id: "gallery",  label: "實驗室影像", title: "模型層頭部實驗室影像志", Component: GallerySlide,   controls: galleryControls,   defaultProps: galleryDefaults },
  { id: "sankey",   label: "資本流向",   title: "資本流向桑基圖",       Component: SankeySlide,    controls: sankeyControls,    defaultProps: sankeyDefaults },
  { id: "scorecard", label: "投資記分卡", title: "頭部標的投資記分卡",   Component: ScorecardSlide, controls: scorecardControls, defaultProps: scorecardDefaults },
  { id: "gauge",    label: "泡沫溫度計", title: "估值泡沫溫度計",       Component: GaugeSlide,     controls: gaugeControls,     defaultProps: gaugeDefaults },
  { id: "embodied", label: "具身智慧", title: "下游前沿 · 具身智慧",     Component: EmbodiedSlide,  controls: embodiedControls,  defaultProps: embodiedDefaults },
  { id: "rose",     label: "月度玫瑰", title: "逐月融資 · 玫瑰圖",       Component: RoseSlide,      controls: roseControls,      defaultProps: roseDefaults },
  { id: "marimekko", label: "資金矩陣", title: "產業鏈資金結構矩陣",   Component: MarimekkoSlide, controls: marimekkoControls, defaultProps: marimekkoDefaults },
  { id: "concentration", label: "三重集中", title: "資本大年 · 三重集中", Component: ConcentrationSlide, controls: concentrationControls, defaultProps: concentrationDefaults },
  { id: "statement", label: "資本主張", title: "全幅影像主張頁", Component: StatementSlide, controls: statementControls, defaultProps: statementDefaults },
  { id: "tornado",  label: "輪次背向", title: "輪次結構 · 筆數 ↔ 金額", Component: TornadoSlide,  controls: tornadoControls,  defaultProps: tornadoDefaults, numberBounds: tornadoNumberBounds },
  { id: "moat",     label: "護城河",   title: "頭部公司護城河剖析",   Component: MoatSlide,      controls: moatControls,      defaultProps: moatDefaults },
  { id: "supply",   label: "算力卡脖", title: "算力供應鏈的瓶頸",   Component: SupplyChainSlide, controls: supplyControls, defaultProps: supplyDefaults },
  { id: "chips",    label: "AI 晶片", title: "上游硬體 · AI 晶片",     Component: ChipsSlide,     controls: chipsControls,     defaultProps: chipsDefaults },
  { id: "compute",  label: "算力軍備", title: "算力軍備競賽 · GPU 叢集", Component: ComputeSlide, controls: computeControls, defaultProps: computeDefaults },
  { id: "colophon", label: "封底",     title: "資料來源 / 封底",   Component: ColophonSlide, controls: colophonControls, defaultProps: colophonDefaults },
];

export default SLIDES;
