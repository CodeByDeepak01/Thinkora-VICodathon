import { Sparkles } from "lucide-react";
import { Card } from "../ui";

function AIMentorCard({ message }) {
  return (
    <Card padding="md">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-primary-50
            text-primary-600

            dark:bg-primary-500/10
            dark:text-primary-400

            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          <Sparkles className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
            AI Mentor
          </p>

          <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
            Daily Insight
          </h3>

          <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
            {message}
          </p>

          {/* Mentor Tip */}
          <div
            className="
              mt-4
              inline-flex
              rounded-full
              bg-primary-50
              px-3
              py-1
              text-sm
              font-medium
              text-primary-700

              dark:bg-primary-500/10
              dark:text-primary-300
            "
          >
            💡 Small step, strong payoff
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AIMentorCard;