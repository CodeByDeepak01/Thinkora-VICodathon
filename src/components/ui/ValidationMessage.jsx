import { AlertCircle, CheckCircle2, Info } from "lucide-react";

function ValidationMessage({ message, tone = "info", className = "" }) {
  const toneStyles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    error: "border-red-200 bg-red-50 text-red-700",
    info: "border-slate-200 bg-slate-50 text-slate-700",
  };

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  };

  const Icon = icons[tone] || Info;

  return (
    <div
      className={`flex items-start gap-2 rounded-2xl border px-3 py-2 text-sm ${toneStyles[tone]} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

export default ValidationMessage;
