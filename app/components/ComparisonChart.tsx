"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { lineItems, ENTITY_COLOR, ENTITY_LABEL } from "@/data/analysis";

const fmt = (n: number) =>
  `${n < 0 ? "△" : ""}${Math.abs(n).toLocaleString()}`;

type TooltipPayload = {
  payload: { label: string; univ: number; inter: number };
}[];

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload;
}) {
  if (!active || !payload || payload.length === 0) return null;
  const row = payload[0].payload;
  return (
    <div className="rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm shadow-sm">
      <p className="mb-1 font-medium text-[var(--color-ink)]">{row.label}</p>
      <p className="text-[var(--color-crimson)]">
        {ENTITY_LABEL.univ}：{fmt(row.univ)} 百万円
      </p>
      <p className="text-[var(--color-gold)]">
        {ENTITY_LABEL.inter}：{fmt(row.inter)} 百万円
      </p>
    </div>
  );
}

export default function ComparisonChart() {
  return (
    <div className="h-[380px] w-full sm:h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={lineItems}
          margin={{ top: 24, right: 8, left: 0, bottom: 8 }}
          barGap={4}
        >
          <CartesianGrid
            vertical={false}
            stroke="var(--color-line)"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: "var(--color-muted)" }}
            interval={0}
            tickLine={false}
            axisLine={{ stroke: "var(--color-line)" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--color-muted)" }}
            tickFormatter={(v: number) => v.toLocaleString()}
            tickLine={false}
            axisLine={false}
            width={56}
          />
          <ReferenceLine y={0} stroke="var(--color-muted)" />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
          />
          <Bar dataKey="univ" name={ENTITY_LABEL.univ} radius={[2, 2, 0, 0]}>
            {lineItems.map((_, i) => (
              <Cell key={i} fill={ENTITY_COLOR.univ} />
            ))}
          </Bar>
          <Bar dataKey="inter" name={ENTITY_LABEL.inter} radius={[2, 2, 0, 0]}>
            {lineItems.map((_, i) => (
              <Cell key={i} fill={ENTITY_COLOR.inter} />
            ))}
            <LabelList
              dataKey="inter"
              position="top"
              formatter={(v: number) => (v === 439 ? "+439" : "")}
              style={{ fontSize: 11, fill: "var(--color-gold)", fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
