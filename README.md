# 聖心女子大学 × 聖心インターナショナル 教育活動収支分析

学校法人聖心女子学院 2025年度（令和7年度）会計報告書「事業活動収支内訳表」をもとにした、
聖心女子大学と聖心インターナショナルの教育活動収支の比較分析サイト。

- Next.js 15（App Router）/ React 18 / TypeScript
- Tailwind CSS v4
- recharts（比較棒グラフ）

## ローカルで動かす

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Vercel にデプロイ（2通り）

### A. GitHub 経由（おすすめ・自動デプロイ）

1. このフォルダを GitHub のリポジトリに push する
2. https://vercel.com/new を開く
3. 「Import Git Repository」で対象リポジトリを選択
4. フレームワークは `Next.js` が自動検出される。設定はそのままで `Deploy`
5. 以降、`main` に push するたびに自動で再デプロイ

### B. CLI 経由

```bash
npm i -g vercel   # 初回のみ
vercel            # 質問にEnterで進める（プレビューURL発行）
vercel --prod     # 本番デプロイ
```

## データの差し替え

数値・分析文はすべて `data/analysis.ts` に集約してある。
ここを編集すれば、グラフ・比率カード・明細テーブル・分析ポイントがまとめて更新される。

## 構成

```
app/
  layout.tsx            ルートレイアウト・メタdata
  page.tsx              レポート本体のレイアウト
  globals.css           Tailwind v4・テーマトークン・日本語フォント
  components/
    ComparisonChart.tsx recharts の比較棒グラフ（"use client"）
data/
  analysis.ts           数値・比率・分析文の一元管理
```
