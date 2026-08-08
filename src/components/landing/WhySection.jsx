import {
  ArrowUpRight,
  BookOpen,
  GitBranch,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Card } from "../ui";

const reasons = [
  {
    title: "Build Consistency",
    description:
      "Develop a daily coding habit that compounds into real skills over 60 days.",
    icon: Sparkles,
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    title: "Learn in Public",
    description:
      "Share your journey consistently and build confidence through visible progress.",
    icon: BookOpen,
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "Strengthen GitHub",
    description:
      "Create an authentic contribution history that reflects your commitment.",
    icon: GitBranch,
    iconColor: "text-purple-500 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    title: "Get Recruiter Visibility",
    description:
      "Turn projects and daily work into a portfolio recruiters immediately understand.",
    icon: Trophy,
    iconColor: "text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
];

function WhySection() {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-5 max-w-2xl">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          Why ABTalks
        </p>

        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          A challenge built for consistency, not just streaks.
        </h2>
      </div>

      {/* Reasons */}
      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <Card
              key={reason.title}
              padding="md"
              className="group"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    ${reason.iconBg}
                    ${reason.iconColor}
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="
                    h-5
                    w-5
                    text-slate-400
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-primary-600

                    dark:text-slate-600
                    dark:group-hover:text-primary-400
                  "
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {reason.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {reason.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default WhySection;