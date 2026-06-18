import ComparisonChart from "./components/ComparisonChart";
import PerStudentChart from "./components/PerStudentChart";
import {
  balance,
  ratios,
  tableRows,
  points,
  students,
  perStudentCards,
  ENTITY_LABEL,
} from "@/data/analysis";

const yen = (n: number) =>
  `${n < 0 ? "△" : ""}${Math.abs(n).toLocaleString()}`;

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      {/* ヘッダー */}
      <header className="border-b border-line pb-8">
        <p className="text-sm font-medium tracking-widest text-crimson">
          学校法人 聖心女子学院 ／ 2025年度（令和7年度）会計報告書
        </p>
        <h1 className="mt-3 font-serif-jp text-3xl font-bold leading-tight text-ink sm:text-4xl">
          聖心女子大学 <span className="text-muted">×</span> 聖心インターナショナル
          <br />
          教育活動収支の構造比較
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
          同じ学校法人に属する2拠点だが、教育活動収支の構造はほぼ正反対。
          補助金・授業料・人件費の組み合わせが、黒字と赤字を分けている。
        </p>
      </header>

      {/* ヒーロー：収支差額の対比 */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-6">
          <p className="text-sm text-muted">{ENTITY_LABEL.univ}</p>
          <p className="mt-1 text-xs text-muted">教育活動収支差額</p>
          <p className="mt-2 font-serif-jp text-4xl font-bold text-crimson">
            △34<span className="ml-1 text-lg font-medium">百万円</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            収支差額率 {balance.univ.rate}%（ほぼ均衡〜微減）
          </p>
        </div>
        <div className="rounded-xl border-2 border-gold/40 bg-white p-6">
          <p className="text-sm text-muted">{ENTITY_LABEL.inter}</p>
          <p className="mt-1 text-xs text-muted">教育活動収支差額</p>
          <p className="mt-2 font-serif-jp text-4xl font-bold text-gold">
            +439<span className="ml-1 text-lg font-medium">百万円</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            収支差額率 +{balance.inter.rate}%（高採算）
          </p>
        </div>
      </section>

      {/* グラフ */}
      <section className="mt-14">
        <h2 className="font-serif-jp text-xl font-bold text-ink">
          主要項目の比較
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-5 text-xs text-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-crimson" />
            {ENTITY_LABEL.univ}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-gold" />
            {ENTITY_LABEL.inter}
          </span>
          <span className="text-muted/70">単位：百万円</span>
        </div>
        <div className="mt-4 rounded-xl border border-line bg-white p-4 sm:p-6">
          <ComparisonChart />
        </div>
      </section>

      {/* 1人あたり */}
      <section className="mt-14">
        <h2 className="font-serif-jp text-xl font-bold text-ink">
          1人あたりで見ると
        </h2>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <span>
            <span className="font-medium text-crimson">{ENTITY_LABEL.univ}</span>{" "}
            在籍 {students.univ.total.toLocaleString()}人
            <span className="text-xs text-muted/70">（{students.univ.note}）</span>
          </span>
          <span>
            <span className="font-medium text-gold">{ENTITY_LABEL.inter}</span>{" "}
            在籍 {students.inter.total.toLocaleString()}人
            <span className="text-xs text-muted/70">（{students.inter.note}）</span>
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {perStudentCards.map((c) => (
            <div
              key={c.label}
              className="rounded-lg border border-line bg-white p-4"
            >
              <p className="text-xs leading-5 text-muted">{c.label}</p>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-base font-bold text-crimson">{c.univ}</span>
                <span className="text-xs text-muted">大学</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-base font-bold text-gold">{c.inter}</span>
                <span className="text-xs text-muted">インター</span>
              </div>
              {c.mult && c.mult !== "—" && (
                <p className="mt-2 text-xs text-muted">インターが {c.mult}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-line bg-white p-4 sm:p-6">
          <PerStudentChart />
        </div>

        <p className="mt-4 rounded-lg bg-paper px-4 py-3 text-[15px] leading-7 text-ink">
          注目すべきは、インターは
          <span className="font-medium">1人あたりの人件費はむしろ高い</span>
          （159万円 vs 89万円＝少人数で手厚い）にもかかわらず、授業料単価が2.4倍のためそれを上回り、
          <span className="font-medium text-gold">生徒1人あたり約75万円の余剰</span>
          を生んでいる点。「経費を削って稼ぐ」のではなく「高単価×補助金不要」の構造である。
        </p>
      </section>

      {/* 比率 */}
      <section className="mt-14">
        <h2 className="font-serif-jp text-xl font-bold text-ink">主要比率</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ratios.map((r) => (
            <div
              key={r.label}
              className={`rounded-lg border bg-white p-4 ${
                r.hint ? "border-crimson/30" : "border-line"
              }`}
            >
              <p className="text-xs leading-5 text-muted">{r.label}</p>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-lg font-bold text-crimson">{r.univ}</span>
                <span className="text-xs text-muted">大学</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-lg font-bold text-gold">{r.inter}</span>
                <span className="text-xs text-muted">インター</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 明細テーブル */}
      <section className="mt-14">
        <h2 className="font-serif-jp text-xl font-bold text-ink">
          教育活動収支 明細
        </h2>
        <p className="mt-1 text-xs text-muted">単位：百万円</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="px-4 py-3 text-left font-medium">科目</th>
                <th className="px-4 py-3 text-right font-medium">
                  {ENTITY_LABEL.univ}
                </th>
                <th className="px-4 py-3 text-right font-medium">
                  {ENTITY_LABEL.inter}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr
                  key={row.label}
                  className={`border-b border-line/60 last:border-0 ${
                    row.emphasis ? "bg-paper font-medium" : ""
                  }`}
                >
                  <td className="px-4 py-3 text-ink">{row.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-ink">
                    {yen(row.univ)}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-ink">
                    {yen(row.inter)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 分析ポイント */}
      <section className="mt-14">
        <h2 className="font-serif-jp text-xl font-bold text-ink">分析ポイント</h2>
        <div className="mt-5 space-y-5">
          {points.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span className="mt-1 font-serif-jp text-sm font-bold text-crimson">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-line pl-4">
                <h3 className="font-medium text-ink">{p.title}</h3>
                <p className="mt-1 text-[15px] leading-7 text-muted">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 総括 */}
      <section className="mt-14 rounded-xl bg-crimson px-6 py-8 text-white sm:px-8">
        <h2 className="font-serif-jp text-xl font-bold">総括</h2>
        <p className="mt-3 text-[15px] leading-7 text-white/90">
          「補助金＋低めの授業料＋手厚い研究・奨学投資＝薄利」の大学モデルと、
          「高授業料＋補助金なし＋軽い経費＝高採算」のインターモデルの対比。
          法人全体では、インターの黒字が大学の赤字を吸収する補完関係になっている。
        </p>
      </section>

      {/* フッター */}
      <footer className="mt-12 border-t border-line pt-6 text-xs leading-6 text-muted">
        <p>
          出典：学校法人聖心女子学院 2025年度（令和7年度）会計報告書「事業活動収支内訳表」。
          在籍数は同法人「情報公開 学生・生徒・児童数」（2025年5月1日現在）。
          金額は百万円未満を四捨五入。比率・1人あたり額は決算額と在籍数より算出。
        </p>
        <p className="mt-1">本資料は分析目的で作成したものです。</p>
      </footer>
    </main>
  );
}
