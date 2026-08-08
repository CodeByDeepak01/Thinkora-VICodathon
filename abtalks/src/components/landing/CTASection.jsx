import { ArrowRight } from "lucide-react";
import { Button, Card } from "../ui";

function CTASection() {
  return (
    <section className="mt-8">
      <Card
        padding="lg"
        className="
          overflow-hidden
          border-primary-200
          bg-gradient-to-br
          from-primary-600
          via-primary-600
          to-indigo-700
          text-white

          dark:border-primary-500/30
          dark:from-primary-700
          dark:via-primary-700
          dark:to-indigo-900
        "
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-100 dark:text-primary-200">
              Ready to Begin?
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Join the 60-Day Challenge and
              <br className="hidden sm:block" />
              Build Your Developer Journey.
            </h2>

            <p className="mt-3 text-sm leading-6 text-primary-100 dark:text-primary-200">
              Build daily, maintain your streak, share your work publicly,
              and create a portfolio recruiters will notice.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size="lg"
            className="
              w-full
              justify-center
              bg-white
              text-slate-900
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-slate-100
              hover:shadow-lg
              sm:w-auto
            "
          >
            Start Challenge
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default CTASection;