import { AlertCircle } from "lucide-react";
import Card from "./Card";

function EmptyState({
  title,
  description,
  icon: Icon = AlertCircle,
  action,
  children,
  className = "",
}) {
  return (
    <Card
      padding="md"
      className={`bg-slate-50 ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-white p-2 text-slate-600 shadow-sm">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="text-sm leading-6 text-slate-600">{description}</p>
          {action ? <div className="pt-1">{action}</div> : null}
          {children ? <div className="pt-1">{children}</div> : null}
        </div>
      </div>
    </Card>
  );
}

export default EmptyState;
