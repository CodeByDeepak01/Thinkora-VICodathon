import { motion } from "framer-motion";
import {
  Clock3,
  Sparkles,
  Target,
} from "lucide-react";
import { Badge } from "../ui";

function ChallengeHeader({ challenge }) {
  if (!challenge) {
    return null;
  }

  const progress = Math.min(
    Math.max(Number(challenge.progress) || 0, 0),
    100,
  );

  const difficulty =
    challenge.difficulty === "Hard"
      ? "danger"
      : challenge.difficulty === "Medium"
        ? "warning"
        : "primary";

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
        duration: 0.4,
      }}
      className="
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-slate-200
        bg-gradient-to-br
        from-white
        via-slate-50
        to-primary-50
        p-4
        text-slate-900
        shadow-elevated
        transition-colors
        duration-300

        dark:border-slate-800
        dark:from-[#111936]
        dark:via-[#020617]
        dark:to-[#073b3b]
        dark:text-white

        sm:p-5
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/3
          h-44
          w-44
          rounded-full
          bg-primary-500/10
          blur-3xl

          dark:bg-accent-500/10
        "
      />

      <div className="relative">
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          {/* Left */}

          <div className="min-w-0">
            {/* Day Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary-200
                bg-primary-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-primary-700
                transition-colors
                duration-300

                dark:border-primary-400/20
                dark:bg-primary-500/10
                dark:text-primary-300
              "
            >
              <Target className="h-3.5 w-3.5" />

              Day {challenge.day}
            </div>

            {/* Title */}

            <h1
              className="
                mt-3
                text-xl
                font-bold
                tracking-tight
                text-slate-900
                transition-colors
                duration-300

                dark:text-white

                sm:text-2xl
              "
            >
              {challenge.title}
            </h1>

            {/* Description */}

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                transition-colors
                duration-300

                dark:text-slate-300
              "
            >
              {challenge.description ||
                "Keep the experience polished, easy to scan, and meaningful for your audience."}
            </p>
          </div>

          {/* Difficulty */}

          <div className="shrink-0">
            <Badge variant={difficulty}>
              {challenge.difficulty}
            </Badge>
          </div>
        </div>

        {/* ================================================= */}
        {/* INFORMATION PILLS */}
        {/* ================================================= */}

        <div className="relative mt-5 flex flex-wrap gap-2">
          {/* Duration */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-sm
              text-slate-600
              shadow-sm
              transition-all
              duration-300

              hover:border-primary-200
              hover:text-primary-600

              dark:border-white/10
              dark:bg-white/[0.06]
              dark:text-slate-300
              dark:hover:border-white/20
              dark:hover:text-white
            "
          >
            <Clock3
              className="
                h-4
                w-4
                text-primary-600

                dark:text-blue-300
              "
            />

            <span>
              {challenge.estimatedDuration || "30 min"}
            </span>
          </div>

          {/* Progress */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-sm
              text-slate-600
              shadow-sm
              transition-all
              duration-300

              hover:border-primary-200
              hover:text-primary-600

              dark:border-white/10
              dark:bg-white/[0.06]
              dark:text-slate-300
              dark:hover:border-white/20
              dark:hover:text-white
            "
          >
            <Sparkles
              className="
                h-4
                w-4
                text-emerald-600

                dark:text-emerald-300
              "
            />

            <span>{progress}% complete</span>
          </div>
        </div>

        {/* ================================================= */}
        {/* PROGRESS SECTION */}
        {/* ================================================= */}

        <div className="relative mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span
              className="
                text-xs
                font-medium
                text-slate-500

                dark:text-slate-400
              "
            >
              Challenge progress
            </span>

            <span
              className="
                text-xs
                font-semibold
                text-primary-600

                dark:text-primary-300
              "
            >
              {progress}%
            </span>
          </div>

          {/* Track */}

          <div
            className="
              h-2
              overflow-hidden
              rounded-full
              bg-slate-200

              dark:bg-slate-800/90
            "
          >
            {/* Animated Progress */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                h-full
                rounded-full
                bg-gradient-to-r
                from-primary-600
                via-primary-500
                to-accent-400
                shadow-[0_0_14px_rgba(91,108,255,0.35)]
              "
            >
              {/* Shine */}

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "200%",
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-16
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  blur-sm
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ChallengeHeader;