import { Target, BookOpen, Code2 } from "lucide-react";
import { Card } from "../ui";

function ChallengeDetails({ challenge }) {
  return (
    <Card padding="md">
      {/* Heading */}
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
          Challenge Description
        </p>

        <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {challenge.description}
        </h2>
      </div>

      {/* Focus */}
      <div
        className="
          mt-5
          rounded-2xl
          border
          border-primary-100
          bg-primary-50
          p-4

          dark:border-primary-500/20
          dark:bg-primary-500/10
        "
      >
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary-600 dark:text-primary-400" />

          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Focus for Today
          </h3>
        </div>

        <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
          Keep the experience clear, readable, responsive, and easy to
          complete on mobile devices.
        </p>
      </div>

      {/* Objectives & Skills */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {/* Objectives */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-4

            dark:border-slate-800
            dark:bg-slate-900/70
          "
        >
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500 dark:text-blue-400" />

            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Learning Objectives
            </h3>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {challenge.objectives.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600 dark:bg-primary-400" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-4

            dark:border-slate-800
            dark:bg-slate-900/70
          "
        >
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-purple-500 dark:text-purple-400" />

            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Skills Covered
            </h3>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {challenge.skills.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600 dark:bg-primary-400" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default ChallengeDetails;