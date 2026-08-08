import { motion } from "framer-motion";
import {
  CalendarDays,
  Flame,
  Sparkles,
  Trophy,
} from "lucide-react";

function WelcomeHeader({ student }) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

  const isEmptyProfile =
    !student?.bio && !student?.socials?.length;

  const currentDay = student?.currentDay ?? 1;
  const totalDays = student?.totalDays ?? 60;
  const streak = student?.streak ?? currentDay;

  const progress = Math.min(
    Math.round((currentDay / totalDays) * 100),
    100
  );

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-slate-200
        bg-white
        p-4
        shadow-soft

        dark:border-slate-800
        dark:bg-slate-900/80
        dark:shadow-elevated

        sm:p-5
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-primary-500/10
          blur-3xl

          dark:bg-primary-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/3
          h-40
          w-40
          rounded-full
          bg-accent-500/10
          blur-3xl
        "
      />

      <div className="relative">
        {/* Top Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Student */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
  className="
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center
    rounded-full
    bg-primary-600
    text-lg
    font-bold
    text-white
    shadow-lg
    shadow-primary-600/25
  "
>
  D
</div>

            {/* Name */}
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Your developer journey
              </p>

              <h1 className="mt-0.5 truncate text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                {greeting}, {student?.name || "Developer"} 👋
              </h1>
            </div>
          </div>

          {/* Day Badge */}
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-primary-200
              bg-primary-50
              px-3
              py-2
              text-sm
              font-semibold
              text-primary-700

              dark:border-primary-500/20
              dark:bg-primary-500/10
              dark:text-primary-300
            "
          >
            <CalendarDays className="h-4 w-4" />

            Day {currentDay} of {totalDays}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Challenge progress
            </span>

            <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
              {progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-primary-600
                to-primary-400
                shadow-[0_0_12px_rgba(91,108,255,0.4)]
              "
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {/* Streak */}
          <div
            className="
              rounded-xl
              border
              border-orange-100
              bg-orange-50
              px-3
              py-3

              dark:border-orange-500/10
              dark:bg-orange-500/10
            "
          >
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500 dark:text-orange-400" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Streak
              </span>
            </div>

            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {streak} days
            </p>
          </div>

          {/* Completed */}
          <div
            className="
              rounded-xl
              border
              border-emerald-100
              bg-emerald-50
              px-3
              py-3

              dark:border-emerald-500/10
              dark:bg-emerald-500/10
            "
          >
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Completed
              </span>
            </div>

            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {currentDay} days
            </p>
          </div>

          {/* Momentum */}
          <div
            className="
              col-span-2
              rounded-xl
              border
              border-primary-100
              bg-primary-50
              px-3
              py-3

              dark:border-primary-500/10
              dark:bg-primary-500/10

              sm:col-span-1
            "
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary-500 dark:text-primary-400" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Momentum
              </span>
            </div>

            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {progress >= 50
                ? "Strong"
                : progress >= 20
                  ? "Building"
                  : "Starting"}
            </p>
          </div>
        </div>

        {/* Profile / Streak Message */}
        <div
          className="
            mt-4
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-3
            py-3
            text-sm
            leading-6
            text-slate-600

            dark:border-slate-800
            dark:bg-slate-950/60
            dark:text-slate-400
          "
        >
          <Flame className="mt-0.5 h-4 w-4 shrink-0 text-orange-500 dark:text-orange-400" />

          <span>
            {isEmptyProfile
              ? "Add a short intro and your socials so your profile tells your developer story."
              : "Keep your streak alive today. One focused build is all it takes to keep the momentum going."}
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export default WelcomeHeader;