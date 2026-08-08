import {
  BarChart3,
  GitBranch,
  MessageSquareMore,
  Sparkles,
} from "lucide-react";
import { Card } from "../ui";

const stats = [
  {
    label: "Students joined",
    value: "4.8k+",
    helper: "Active learners building momentum every week",
    icon: Sparkles,
    iconColor: "text-purple-500 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    label: "GitHub commits",
    value: "120k+",
    helper: "Consistent shipping, not just started projects",
    icon: GitBranch,
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    label: "LinkedIn posts",
    value: "18k+",
    helper: "Visible stories that help students stand out",
    icon: MessageSquareMore,
    iconColor: "text-cyan-500 dark:text-cyan-400",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
  },
  {
    label: "Projects shipped",
    value: "2.3k+",
    helper: "Real output students can showcase with pride",
    icon: BarChart3,
    iconColor: "text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
];

function TrustSection() {
  return (
    <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            padding="md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {/* Value */}
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {stat.helper}
                </p>
              </div>

              {/* Colorful Icon */}
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  ${stat.iconBg}
                  ${stat.iconColor}
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}

export default TrustSection;