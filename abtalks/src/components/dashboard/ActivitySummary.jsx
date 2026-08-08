import {
  CheckCircle2,
  Circle,
  Clock3,
  WifiOff,
} from "lucide-react";
import { Card, ValidationMessage } from "../ui";

function ActivitySummary({ activity }) {
  const offline = activity?.offline;

  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            Daily Activity
          </p>

          <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
            Today's Status
          </h2>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
          <Clock3 className="h-5 w-5" />
        </div>
      </div>

      {/* Offline Message */}
      {offline && (
        <div className="mt-4">
          <ValidationMessage
            tone="info"
            message="You're offline. Your latest activity can't be refreshed."
          />
        </div>
      )}

      {/* Activity Items */}
      <div className="mt-5 space-y-3">
        {/* GitHub */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3

            dark:border-slate-800
            dark:bg-slate-900/70
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            {activity.githubSubmitted ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Circle className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500" />
            )}

            <div className="min-w-0">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                GitHub Proof
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Updated just now
              </p>
            </div>
          </div>

          <span
            className={`
              shrink-0
              text-sm
              font-semibold
              ${
                activity.githubSubmitted
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-orange-500 dark:text-orange-400"
              }
            `}
          >
            {activity.githubSubmitted ? "Done" : "Pending"}
          </span>
        </div>

        {/* LinkedIn */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3

            dark:border-slate-800
            dark:bg-slate-900/70
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            {activity.linkedinPending ? (
              <Circle className="h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400" />
            ) : (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
            )}

            <div className="min-w-0">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                LinkedIn Post
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                One final step remains
              </p>
            </div>
          </div>

          <span
            className={`
              shrink-0
              text-sm
              font-semibold
              ${
                activity.linkedinPending
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-emerald-600 dark:text-emerald-400"
              }
            `}
          >
            {activity.linkedinPending ? "Pending" : "Done"}
          </span>
        </div>
      </div>

      {/* Footer Status */}
      <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
        {offline ? (
          <span className="inline-flex items-center gap-2">
            <WifiOff className="h-4 w-4 text-slate-500 dark:text-slate-400" />

            <span>
              Data refresh is paused until you reconnect.
            </span>
          </span>
        ) : (
          <>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Estimated remaining time:
            </span>{" "}
            {activity.estimatedRemaining}
          </>
        )}
      </p>
    </Card>
  );
}

export default ActivitySummary;