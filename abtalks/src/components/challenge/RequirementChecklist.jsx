import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Circle, ClipboardCheck } from "lucide-react";
import { Card } from "../ui";

function RequirementChecklist({ checklist = [] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card padding="md">
      {/* Header */}
      <div className="mb-5 flex items-start gap-3">
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
          <ClipboardCheck className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            Requirements Checklist
          </p>

          <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
            Before You Submit
          </h2>
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        {checklist.map((item, index) => (
          <motion.div
            key={item.label}
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 8 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
              delay: shouldReduceMotion ? 0 : index * 0.05,
            }}
            className="
              flex
              items-start
              justify-between
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              transition-colors
              duration-200
              hover:border-slate-300
              hover:bg-white

              dark:border-slate-800
              dark:bg-slate-900/70
              dark:hover:border-slate-700
              dark:hover:bg-slate-900
            "
          >
            {/* Left */}
            <div className="flex min-w-0 flex-1 items-start gap-3">
              {item.done ? (
                <CheckCircle2
                  className="
                    mt-0.5
                    h-6
                    w-6
                    shrink-0
                    text-emerald-500
                    dark:text-emerald-400
                  "
                />
              ) : (
                <Circle
                  className="
                    mt-0.5
                    h-6
                    w-6
                    shrink-0
                    text-slate-400
                    dark:text-slate-500
                  "
                />
              )}

              <div className="min-w-0">
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.label}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.done
                    ? "Completed and ready to share."
                    : "Complete this before submission."}
                </p>
              </div>
            </div>

            {/* Status */}
            <span
              className={`
                shrink-0
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold

                ${
                  item.done
                    ? `
                      bg-emerald-100
                      text-emerald-700
                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    `
                    : `
                      bg-orange-100
                      text-orange-700
                      dark:bg-orange-500/10
                      dark:text-orange-400
                    `
                }
              `}
            >
              {item.done ? "Done" : "Pending"}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {checklist.length === 0 && (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-4
            py-8
            text-center

            dark:border-slate-700
            dark:bg-slate-900/50
          "
        >
          <ClipboardCheck className="mx-auto h-6 w-6 text-slate-400 dark:text-slate-500" />

          <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            No requirements available
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Submission requirements will appear here.
          </p>
        </div>
      )}
    </Card>
  );
}

export default RequirementChecklist;