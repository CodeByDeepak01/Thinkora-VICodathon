import {
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Card } from "../ui";

const benefits = [
  {
    title: "Build Momentum Faster",
    description:
      "Small daily wins keep your learning alive, even during busy college schedules.",
    icon: Zap,
    iconColor: "text-amber-500 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    title: "Career-Ready Habits",
    description:
      "Develop consistency, shipping habits, and public proof that recruiters value.",
    icon: BrainCircuit,
    iconColor: "text-purple-500 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    title: "Track Real Progress",
    description:
      "Visualize your streaks, achievements, and growth throughout the challenge.",
    icon: TrendingUp,
    iconColor: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "Earn Credibility",
    description:
      "Build a portfolio backed by real projects and visible daily contributions.",
    icon: ShieldCheck,
    iconColor: "text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
];

function BenefitsSection() {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-5 max-w-2xl">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          Student Benefits
        </p>

        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Everything you need to stay motivated and keep moving.
        </h2>
      </div>

      {/* Benefits */}
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              padding="md"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    ${benefit.iconBg}
                    ${benefit.iconColor}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default BenefitsSection;