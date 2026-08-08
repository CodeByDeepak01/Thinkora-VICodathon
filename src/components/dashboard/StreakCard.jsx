import { Flame, Sparkles } from "lucide-react";
import { Card } from "../ui";

function StreakCard({ student }) {
  const hasStreak = student.streak > 0;

  return (
    <Card padding="md">
      <div className="flex flex-col gap-5">
        {/* Main Streak */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                <Flame className="h-5 w-5" />
              </div>

              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Current streak
              </p>
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              {hasStreak
                ? `${student.streak} days`
                : "Start today"}
            </p>

            <p className="mt-1 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              {hasStreak
                ? "Consistency beats intensity when the streak is alive."
                : "Your first small win today can become your first streak."}
            </p>
          </div>

          {/* Streak Icon */}
          <div className="hidden rounded-2xl bg-orange-50 p-3 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400 sm:block">
            <Flame className="h-6 w-6" />
          </div>
        </div>

        {/* Best Run */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Best run
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              {student.longestStreak} days
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Keep the momentum going for one more day.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Challenge progress
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                  Day {student.currentDay}
                </p>
              </div>

              <Sparkles className="h-5 w-5 text-primary-500 dark:text-primary-400" />
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Goal {student.totalDays} days
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StreakCard;