import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui";

const faqs = [
  {
    question:
      "Is purchasing a Claude subscription mandatory for this challenge?",
    answer:
      "No. A paid Claude subscription is not mandatory. You can participate using the tools and resources available to you.",
  },
  {
    question: "Do I need to create a Claude account?",
    answer:
      "You only need an account if the particular challenge requires access to Claude. Check the daily task instructions for details.",
  },
  {
    question: "Where can I find the daily task?",
    answer:
      "Your daily task is available from the Challenge section. Open today's challenge to view the instructions, requirements, and resources.",
  },
  {
    question:
      "Will I receive daily tasks or teaching sessions?",
    answer:
      "The challenge focuses primarily on daily hands-on tasks. Additional learning resources may be provided when they are useful for completing a challenge.",
  },
  {
    question: "What if I miss a day's task?",
    answer:
      "Don't stop. You can catch up on missed work and continue your journey. Your progress tracker will show your current status.",
  },
  {
    question:
      "Will I receive goodies after completing the challenge?",
    answer:
      "Eligibility for goodies or rewards depends on the challenge rules and completion criteria. Check the official challenge announcements for the latest details.",
  },
  {
    question:
      "Who should I contact if I have an issue with a task?",
    answer:
      "Use the official ABTalks community/support channel to ask questions or report an issue with a challenge task.",
  },
  {
    question:
      "Is there any YouTube channel for the Claude Challenge?",
    answer:
      "Yes. You can check the official ABTalks YouTube channel for challenge-related content, explanations, and updates.",
  },
  {
    question:
      "Will we explore different AI tools during the challenge?",
    answer:
      "Yes. The challenge may introduce different AI tools and workflows to help you understand how modern developer tools can be used effectively.",
  },
  {
    question:
      "Can I use tools other than Claude for the challenge?",
    answer:
      "Yes, unless a specific task explicitly requires Claude. The goal is to learn, build, and ship useful work.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary-50
            text-primary-600

            dark:bg-primary-500/10
            dark:text-primary-400
          "
        >
          <CircleHelp className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
            Frequently Asked Questions
          </h2>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Everything you need to know
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="mt-5 space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                transition-all
                duration-200
                hover:border-slate-300
                hover:bg-white

                dark:border-slate-800
                dark:bg-slate-900/70
                dark:hover:border-slate-700
                dark:hover:bg-slate-900
              "
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-3.5
                  py-3.5
                  text-left
                  text-sm
                  font-semibold
                  text-slate-800
                  transition-colors
                  hover:text-slate-900

                  dark:text-slate-200
                  dark:hover:text-white

                  sm:px-4
                "
              >
                <span>{faq.question}</span>

                <ChevronDown
                  className={`
                    h-4
                    w-4
                    shrink-0
                    text-slate-400
                    transition-transform
                    duration-200

                    dark:text-slate-500

                    ${
                      isOpen
                        ? "rotate-180 text-primary-600 dark:text-primary-400"
                        : ""
                    }
                  `}
                />
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className="
                        border-t
                        border-slate-200
                        bg-white
                        px-4
                        py-3

                        dark:border-slate-800
                        dark:bg-slate-950/60
                      "
                    >
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="
          mt-4
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-3.5
          py-3
          text-xs
          leading-5
          text-slate-500

          dark:border-slate-800
          dark:bg-slate-900/60
          dark:text-slate-400

          sm:px-4
        "
      >
        Still have questions? Reach out through the{" "}
        <button
          type="button"
          className="
            font-medium
            text-primary-600
            transition-colors
            hover:text-primary-700

            dark:text-primary-400
            dark:hover:text-primary-300
          "
        >
          ABTalks community
        </button>{" "}
        or check the{" "}
        <button
          type="button"
          className="
            font-medium
            text-primary-600
            transition-colors
            hover:text-primary-700

            dark:text-primary-400
            dark:hover:text-primary-300
          "
        >
          ABTalks YouTube channel
        </button>
        .
      </div>
    </Card>
  );
}

export default FAQSection;