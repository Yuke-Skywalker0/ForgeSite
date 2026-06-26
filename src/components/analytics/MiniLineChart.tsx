interface MiniLineChartProps {
  data: number[];
  color?: string;
  height?: number;
}

/** Grafico a linee minimale in SVG puro: niente Chart.js/Recharts per un
 *  widget così semplice, zero dipendenze aggiuntive da verificare/installare. */
export function MiniLineChart({ data, color = "#34D399", height = 64 }: MiniLineChartProps) {
  if (data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 280;
  const step = width / (data.length - 1 || 1);

  const points = data
    .map((value, i) => {
      const x = i * step;
      const y = height - ((value - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none" aria-hidden="true">
      <polygon points={areaPoints} fill={color} opacity={0.08} />
      <polyline points={points} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
