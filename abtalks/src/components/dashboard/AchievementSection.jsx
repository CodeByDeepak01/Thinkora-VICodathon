import { Award, Lock, Sparkles } from "lucide-react";
import { Card, EmptyState } from "../ui";

function AchievementSection({ achievements }) {
  const unlockedCount =
    achievements?.filter(
      (item) => item.status === "Unlocked"
    ).length || 0;

  if (!achievements?.length) {
    return (
      <section>
        {/* Section Header */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Achievements
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Milestones from your journey
            </p>
          </div>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            0 unlocked
          </span>
        </div>

        <EmptyState
          icon={Sparkles}
          title="No achievements yet"
          description="Complete daily challenges to unlock your first badge."
        />
      </section>
    );
  }

  return (
    <section>
      {/* Section Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Achievements
          </h2>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Milestones from your journey
          </p>
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {unlockedCount} unlocked
        </span>
      </div>

      {/* Achievement Cards */}
      <div className="grid gap-3 md:grid-cols-2">
        {achievements.map((achievement) => {
          const unlocked =
            achievement.status === "Unlocked";

          return (
            <Card
              key={achievement.id}
              padding="sm"
              className={
                unlocked
                  ? "dark:border-emerald-500/20"
                  : ""
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {achievement.title}
                    </h3>

                    {unlocked && (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        Unlocked
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-400">
                    {unlocked
                      ? "This milestone is live and ready to celebrate."
                      : "Keep shipping one more day to unlock this badge."}
                  </p>
                </div>

                {/* Achievement Icon */}
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    ${
                      unlocked
                        ? "bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                    }
                  `}
                >
                  {unlocked ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <Lock className="h-5 w-5" />
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
                <span
                  className={`
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    ${
                      unlocked
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400"
                    }
                  `}
                >
                  {achievement.status}
                </span>

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {unlocked
                    ? "Visible"
                    : "Next Target"}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementSection;