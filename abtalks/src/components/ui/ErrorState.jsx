import { AlertTriangle, RotateCcw } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

function ErrorState({
  title,
  description,
  actionLabel = "Try again",
  onAction,
}) {
  return (
    <Card padding="md" className="border-amber-200 bg-amber-50" role="alert">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-amber-100 p-2 text-amber-700">
          <AlertTriangle className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          </div>
          {onAction ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={onAction}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" /> {actionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default ErrorState;
