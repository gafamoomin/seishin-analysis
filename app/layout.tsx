import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "聖心女子大学 × 聖心インターナショナル 教育活動収支分析",
  description:
    "学校法人聖心女子学院 2025年度（令和7年度）事業活動収支内訳表をもとにした、聖心女子大学と聖心インターナショナルの教育活動収支の比較分析。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
