// すべて百万円単位（2025年度 / 令和7年度 事業活動収支内訳表より）

export type Entity = "univ" | "inter";

export const ENTITY_LABEL: Record<Entity, string> = {
  univ: "聖心女子大学",
  inter: "聖心インターナショナル",
};

export const ENTITY_COLOR: Record<Entity, string> = {
  univ: "#9B1B30", // 聖心の深紅
  inter: "#A67C00", // 対比のゴールド
};

// グラフ用：主要項目の比較
export const lineItems: { label: string; univ: number; inter: number }[] = [
  { label: "学生納付金", univ: 2838, inter: 1656 },
  { label: "経常費補助金", univ: 463, inter: 6 },
  { label: "寄付金", univ: 116, inter: 82 },
  { label: "人件費", univ: 2155, inter: 931 },
  { label: "教育研究経費", univ: 1469, inter: 373 },
  { label: "収支差額", univ: -34, inter: 439 },
];

// 収支差額（ヒーロー）
export const balance = {
  univ: { value: -34, rate: -0.9 },
  inter: { value: 439, rate: 23.9 },
};

// 主要比率
export const ratios: { label: string; univ: string; inter: string; hint?: boolean }[] = [
  { label: "納付金依存度（対収入）", univ: "72.6%", inter: "90.2%", hint: true },
  { label: "補助金比率（対収入）", univ: "11.8%", inter: "0.3%", hint: true },
  { label: "人件費 ÷ 学生納付金", univ: "76%", inter: "56%", hint: true },
  { label: "教育研究経費比率（対収入）", univ: "37.6%", inter: "20.3%" },
  { label: "人件費率（対収入）", univ: "55.1%", inter: "50.7%" },
  { label: "収支差額率", univ: "△0.9%", inter: "+23.9%", hint: true },
];

// 明細テーブル
export const tableRows: {
  label: string;
  univ: number;
  inter: number;
  emphasis?: boolean;
}[] = [
  { label: "学生生徒等納付金", univ: 2838, inter: 1656 },
  { label: "経常費等補助金", univ: 463, inter: 6 },
  { label: "寄付金", univ: 116, inter: 82 },
  { label: "教育活動収入計", univ: 3912, inter: 1836, emphasis: true },
  { label: "人件費", univ: 2155, inter: 931 },
  { label: "教育研究経費", univ: 1469, inter: 373 },
  { label: "教育活動支出計", univ: 3945, inter: 1397, emphasis: true },
  { label: "教育活動収支差額", univ: -34, inter: 439, emphasis: true },
];

// 分析ポイント
export const points: { title: string; body: string }[] = [
  {
    title: "学生納付金",
    body: "規模は大学が約1.7倍だが、収入に占める比率はインターが圧倒的（90% vs 73%）。授業料単価が高く補助金に依存しない『高授業料モデル』がインターの収益基盤。",
  },
  {
    title: "補助金",
    body: "最大の構造差。大学は国庫補助金（私学助成）を中心に4.63億円を受給。インターは地方補助の556万円のみで、制度上ほぼ私学助成の対象外。この差を高授業料で補っている。",
  },
  {
    title: "寄付金",
    body: "額面は大学（1.16億）が上だが、収入比率はインター（4.5%）の方が高く、規模に対する寄付調達力は相対的にインターが強い。",
  },
  {
    title: "人件費",
    body: "収入比では両校とも50%台。だが納付金に対する負担で見ると、大学は納付金の76%を人件費が消費するのに対し、インターは56%にとどまる。これが黒字の主因。",
  },
  {
    title: "収支結果",
    body: "大学は奨学費（2.52億 vs 450万）や図書館・研究設備の減価償却といった重い固定費が乗り、収支はほぼ均衡〜微減。インターは経費が軽く、収支差額率24%という高採算を示す。",
  },
];

// 在籍数（2025年5月1日現在・学校法人聖心女子学院 情報公開より）
export const students: Record<Entity, { total: number; note: string }> = {
  univ: { total: 2420, note: "学部2,349＋大学院71" },
  inter: { total: 584, note: "幼75・小158・中167・高184" },
};

// 1人あたり指標（万円、四捨五入）。グラフ用は納付金・収入・人件費。
export const perStudentChart: {
  label: string;
  univ: number;
  inter: number;
}[] = [
  { label: "学生納付金", univ: 117, inter: 284 },
  { label: "教育活動収入", univ: 162, inter: 314 },
  { label: "人件費", univ: 89, inter: 159 },
];

// 1人あたり指標カード
export const perStudentCards: {
  label: string;
  univ: string;
  inter: string;
  mult?: string;
}[] = [
  { label: "1人あたり 学生納付金", univ: "約117万円", inter: "約284万円", mult: "2.4倍" },
  { label: "1人あたり 教育活動収入", univ: "約162万円", inter: "約314万円", mult: "1.9倍" },
  { label: "1人あたり 人件費", univ: "約89万円", inter: "約159万円", mult: "1.8倍" },
  { label: "1人あたり 収支差額", univ: "△約1.4万円", inter: "+約75万円", mult: "—" },
];
