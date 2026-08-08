import {
  ArrowRight,
  Clock3,
  Trophy,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  EmptyState,
} from "../ui";

function TodayChallengeCard({ challenge }) {
  if (!challenge) {
    return (
      <EmptyState
        title="No challenge available"
        description="There is no challenge available for today."
      />
    );
  }

  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            Today's Challenge
          </p>

          <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
            {challenge.title}
          </h2>
        </div>

        <Badge
          variant={challenge.completed ? "success" : "primary"}
        >
          {challenge.completed ? "Completed" : "Live"}
        </Badge>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className="
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-3
            py-1.5
            text-sm
            font-medium
            text-slate-700

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-300
          "
        >
          {challenge.difficulty}
        </span>

        <span
          className="
            flex
            items-center
            gap-1
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-3
            py-1.5
            text-sm
            font-medium
            text-slate-700

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-300
          "
        >
          <Clock3 className="h-4 w-4 text-primary-500 dark:text-primary-400" />

          {challenge.estimatedTime}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <Button
          className="
            w-full
            justify-center
            transition-transform
            duration-200
            hover:-translate-y-0.5
          "
          size="lg"
        >
          {challenge.completed
            ? "Review Progress"
            : "Continue"}

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Success */}
      {challenge.completed && (
        <div
          className="
            mt-5
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-emerald-200
            bg-emerald-50
            px-4
            py-3

            dark:border-emerald-500/20
            dark:bg-emerald-500/10
          "
        >
          <Trophy
            className="
              mt-0.5
              h-5
              w-5
              shrink-0
              text-emerald-600
              dark:text-emerald-400
            "
          />

          <div>
            <p
              className="
                text-sm
                font-semibold
                text-emerald-700
                dark:text-emerald-400
              "
            >
              Challenge Completed
            </p>

            <p
              className="
                mt-1
                text-sm
                leading-6
                text-emerald-600
                dark:text-emerald-300/80
              "
            >
              Great work! Today's challenge is complete.
              Keep your streak alive tomorrow.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}

export default TodayChallengeCard;