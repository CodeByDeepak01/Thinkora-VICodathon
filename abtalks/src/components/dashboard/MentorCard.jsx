import { Sparkles } from "lucide-react";
import { Card } from "../ui";

function MentorCard({ message }) {
  return (
    <Card padding="md">
      <div className="flex items-start gap-4">
        {/* AI Mentor Icon */}
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
          <p className="text-base font-semibold text-primary-700 dark:text-primary-300">
            AI Mentor
          </p>

          <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
            {message}
          </p>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
            Small Step, Strong Payoff
          </p>
        </div>
      </div>
    </Card>
  );
}

export default MentorCard;