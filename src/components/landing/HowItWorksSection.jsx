import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "../ui";

const steps = [
  {
    title: "Join the Challenge",
    description:
      "Choose a learning track and begin your 60-day journey.",
  },
  {
    title: "Build Every Day",
    description:
      "Complete one focused coding task daily.",
  },
  {
    title: "Submit GitHub",
    description:
      "Share your repository or commit as proof of work.",
  },
  {
    title: "Post on LinkedIn",
    description:
      "Build your public learning story and visibility.",
  },
  {
    title: "Maintain Your Streak",
    description:
      "Stay consistent and unlock achievements every week.",
  },
  {
    title: "Grow Your Portfolio",
    description:
      "Finish with projects and proof recruiters can trust.",
  },
];

function HowItWorksSection() {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-5 max-w-2xl">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          How It Works
        </p>

        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          From first commit to a visible portfolio in one flow.
        </h2>
      </div>

      {/* Steps */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            padding="md"
            className="group"
          >
            {/* Top */}
            <div className="flex items-center justify-between gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-primary-600
                  text-xs
                  font-bold
                  text-white
                  shadow-sm
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                {index + 1}
              </div>

              {index !== steps.length - 1 ? (
                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-slate-400
                    transition-colors
                    duration-200
                    group-hover:text-primary-500
                    dark:text-slate-600
                    dark:group-hover:text-primary-400
                  "
                />
              ) : (
                <CheckCircle2
                  className="
                    h-4
                    w-4
                    text-emerald-500
                    dark:text-emerald-400
                  "
                />
              )}
            </div>

            {/* Content */}
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;