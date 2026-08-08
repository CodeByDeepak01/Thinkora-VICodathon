import { CheckCircle2, Circle, ClipboardCheck } from "lucide-react";
import {
  Card,
  ProgressBar,
  ValidationMessage,
} from "../ui";

function SubmissionProgress({ submission }) {
  const pending = [
    !submission.github.valid ? "GitHub" : null,
    !submission.linkedin.valid ? "LinkedIn" : null,
  ].filter(Boolean);

  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-primary-50
              text-primary-600

              dark:bg-primary-500/10
              dark:text-primary-400
            "
          >
            <ClipboardCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Submission Progress
            </p>

            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {submission.overall}% Complete
            </h2>
          </div>
        </div>

        {/* Overall Status */}
        <span
          className={`
            shrink-0
            rounded-full
            px-3
            py-1.5
            text-sm
            font-semibold

            ${
              submission.completed
                ? `
                  bg-emerald-100
                  text-emerald-700
                  dark:bg-emerald-500/10
                  dark:text-emerald-400
                `
                : `
                  bg-primary-100
                  text-primary-700
                  dark:bg-primary-500/10
                  dark:text-primary-300
                `
            }
          `}
        >
          {submission.completed ? "Submitted" : "In Progress"}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-5">
        <ProgressBar
          value={submission.overall}
          max={100}
          label="Submission Readiness"
        />
      </div>

      {/* Pending Information */}
      {pending.length > 0 && (
        <div className="mt-4">
          <ValidationMessage
            tone="info"
            message={`Still waiting on: ${pending.join(" and ")}.`}
          />
        </div>
      )}

      {/* Status Cards */}
      <div className="mt-5 space-y-3">
        {/* GitHub */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            transition-all
            duration-200
            hover:border-slate-300
            hover:bg-white

            dark:border-slate-800
            dark:bg-slate-900/70
            dark:hover:border-slate-700
            dark:hover:bg-slate-900
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            {submission.github.valid ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Circle className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500" />
            )}

            <div className="min-w-0">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                GitHub
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Repository or commit link
              </p>
            </div>
          </div>

          <span
            className={`
              shrink-0
              text-sm
              font-semibold
              ${
                submission.github.valid
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-orange-600 dark:text-orange-400"
              }
            `}
          >
            {submission.github.valid ? "Completed" : "Pending"}
          </span>
        </div>

        {/* LinkedIn */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            transition-all
            duration-200
            hover:border-slate-300
            hover:bg-white

            dark:border-slate-800
            dark:bg-slate-900/70
            dark:hover:border-slate-700
            dark:hover:bg-slate-900
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            {submission.linkedin.valid ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Circle className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500" />
            )}

            <div className="min-w-0">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                LinkedIn
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Public proof of your work
              </p>
            </div>
          </div>

          <span
            className={`
              shrink-0
              text-sm
              font-semibold
              ${
                submission.linkedin.valid
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-orange-600 dark:text-orange-400"
              }
            `}
          >
            {submission.linkedin.valid
              ? "Completed"
              : "Pending"}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default SubmissionProgress;