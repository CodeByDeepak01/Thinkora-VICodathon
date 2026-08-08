import { CheckCircle2, Target } from "lucide-react";
import { Card } from "../ui";

function ProgressCard({ student }) {
  const progress = Math.min(
    100,
    Math.round((student.currentDay / student.totalDays) * 100)
  );

  return (
    <Card padding="md">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                <Target className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Challenge progress
                </p>

                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Your 60-day journey
                </p>
              </div>
            </div>
          </div>

          {/* Percentage */}
          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {progress}%
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              complete
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-primary-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Day {student.currentDay}
            </span>

            <span className="text-slate-500 dark:text-slate-400">
              Goal: {student.totalDays} days
            </span>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Completed
              </p>
            </div>

            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              {student.currentDay}
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              challenge days completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary-500 dark:text-primary-400" />

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Remaining
              </p>
            </div>

            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              {Math.max(
                0,
                student.totalDays - student.currentDay
              )}
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              days left in your journey
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProgressCard;