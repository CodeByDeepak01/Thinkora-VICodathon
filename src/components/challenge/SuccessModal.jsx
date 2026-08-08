import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Card } from "../ui";

function SuccessModal({ success }) {
  if (!success?.visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        fixed
        inset-x-4
        bottom-5
        z-50
        mx-auto
        max-w-2xl
      "
    >
      <Card
        padding="md"
        className="
          border-emerald-200
          bg-white
          shadow-xl

          dark:border-emerald-500/20
          dark:bg-slate-900
        "
      >
        <div className="flex items-start gap-4">
          {/* Success Icon */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-emerald-50
              text-emerald-500

              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <CheckCircle2 className="h-6 w-6" />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            {/* Title */}
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {success.message}
              </h3>

              <Sparkles className="h-5 w-5 shrink-0 text-yellow-500 dark:text-yellow-400" />
            </div>

            {/* Rewards */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className="
                  rounded-full
                  bg-amber-50
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-amber-700

                  dark:bg-amber-500/10
                  dark:text-amber-400
                "
              >
                ⭐ +{success.xp} XP
              </span>

              <span
                className="
                  rounded-full
                  bg-orange-50
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-orange-700

                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                🔥 {success.streakPreview} Day Streak
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-emerald-50
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-emerald-700

                  dark:bg-emerald-500/10
                  dark:text-emerald-400
                "
              >
                <Trophy className="h-3.5 w-3.5" />
                Completed
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Excellent work! Today's challenge has been successfully
              completed. Tomorrow's challenge unlocks at{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                12:00 AM
              </span>
              . Keep your streak alive and continue building momentum.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default SuccessModal;