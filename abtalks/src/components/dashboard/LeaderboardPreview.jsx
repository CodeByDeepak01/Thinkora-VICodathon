import { Trophy } from "lucide-react";
import { Card } from "../ui";

function LeaderboardPreview({ leaderboard = [] }) {
  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400">
            <Trophy className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Leaderboard Preview
            </p>

            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              Top 5
            </h2>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mt-5 space-y-3">
        {leaderboard.length > 0 ? (
          leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`
                flex
                items-center
                justify-between
                gap-4
                rounded-xl
                border
                px-4
                py-3
                transition-all
                duration-200
                hover:-translate-y-0.5

                ${
                  entry.isMe
                    ? `
                      border-primary-200
                      bg-primary-50
                      dark:border-primary-500/30
                      dark:bg-primary-500/10
                    `
                    : `
                      border-slate-200
                      bg-slate-50
                      dark:border-slate-800
                      dark:bg-slate-900/70
                    `
                }
              `}
            >
              {/* Left */}
              <div className="flex min-w-0 items-center gap-4">
                {/* Avatar */}
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-sm
                    font-semibold

                    ${
                      entry.isMe
                        ? "bg-primary-600 text-white"
                        : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    }
                  `}
                >
                  {entry.name?.charAt(0)?.toUpperCase() || "?"}
                </div>

                {/* User Info */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p
                      className={`
                        truncate
                        text-base
                        font-semibold

                        ${
                          entry.isMe
                            ? "text-primary-700 dark:text-primary-300"
                            : "text-slate-900 dark:text-white"
                        }
                      `}
                    >
                      {entry.name}
                    </p>

                    {entry.isMe && (
                      <span
                        className="
                          rounded-full
                          bg-primary-100
                          px-2
                          py-0.5
                          text-xs
                          font-medium
                          text-primary-700

                          dark:bg-primary-500/15
                          dark:text-primary-300
                        "
                      >
                        You
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                    #{entry.rank} •{" "}
                    {entry.isMe
                      ? "Current standing"
                      : "Keeping pace"}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="shrink-0 text-right">
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {entry.points.toLocaleString()} XP
                </p>

                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  {entry.rank <= 3
                    ? "Top tier"
                    : "Close behind"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center dark:border-slate-800 dark:bg-slate-900/50">
            <Trophy className="mx-auto h-6 w-6 text-slate-400 dark:text-slate-500" />

            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              No leaderboard data yet
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Keep completing challenges to appear here.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

export default LeaderboardPreview;