import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Github,
  Linkedin,
  PlayCircle,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "../ui";
import { useRef } from "react";

function HeroSection({ visitorState = "first-time" }) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  /* ================================================= */
  /* 3D TILT VALUES */
  /* ================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);

  const handleCardMouseMove = (event) => {
    if (shouldReduceMotion || !cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ================================================= */
  /* VISITOR STATE */
  /* ================================================= */

  const isActive = visitorState === "active";
  const isCompleted = visitorState === "completed";
  const isReturning = visitorState === "returning";

  const headline = isCompleted
    ? "You already built real momentum. Keep the streak alive."
    : isActive
      ? "Your challenge is live. Keep the momentum going."
      : isReturning
        ? "Welcome back. Your next step is ready."
        : "Build your coding streak. Become recruiter-visible.";

  const subtext = isCompleted
    ? "Your work is already paying off. Review your progress and carry that momentum into the next challenge."
    : isActive
      ? "You've started your challenge. A few focused steps today will bring your progress and proof together."
      : isReturning
        ? "Pick up where you left off and make today count with a small win."
        : "ABTalks helps college students turn daily coding into momentum, GitHub proof, and a visible portfolio that stands out.";

  const ctaLabel = isCompleted
    ? "View Progress"
    : isActive
      ? "Continue Challenge"
      : isReturning
        ? "Resume Challenge"
        : "Start Challenge";

  return (
    <section
      className="
        relative
        overflow-hidden
        py-8
        transition-colors
        duration-300
        sm:py-12
        lg:py-16
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[5%]
            top-0
            h-72
            w-72
            rounded-full
            bg-primary-500/10
            blur-[110px]
            dark:bg-primary-600/15
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            h-80
            w-80
            rounded-full
            bg-accent-500/10
            blur-[120px]
            dark:bg-accent-500/10
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-primary-500/5
            blur-[100px]
            dark:bg-primary-500/10
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(15,23,42,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.7)_1px,transparent_1px)]
            [background-size:48px_48px]
            dark:opacity-[0.035]
            dark:[background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          "
        />
      </div>

      {/* ================================================= */}
      {/* HERO GRID */}
      {/* ================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-12
          lg:grid-cols-[1.05fr_.95fr]
          lg:gap-16
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
          }}
        >
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
              shadow-sm
              dark:border-primary-400/20
              dark:bg-primary-500/10
              dark:text-primary-300
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            60-day coding challenge for ambitious students
          </div>

          <div className="mt-6">
            <h1
              className="
                max-w-3xl
                text-[2.6rem]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-slate-950
                dark:text-white
                sm:text-[3.5rem]
                lg:text-[4.25rem]
              "
            >
              {headline}
            </h1>

            <div
              className="
                mt-5
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-primary-600
                to-accent-400
                shadow-[0_0_12px_rgba(68,84,230,0.2)]
                dark:shadow-[0_0_15px_rgba(68,84,230,0.35)]
              "
            />

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600
                dark:text-slate-300
                sm:text-lg
              "
            >
              {subtext}
            </p>
          </div>

          {/* CTA */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="
                group
                w-full
                justify-center
                shadow-[0_0_25px_rgba(68,84,230,0.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_35px_rgba(68,84,230,0.35)]
                sm:w-auto
              "
            >
              {ctaLabel}

              <ArrowRight
                className="
                  ml-2
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Button>

            <Button
  variant="heroSecondary"
  size="lg"
  className="
    group
    w-full
    justify-center
    sm:w-auto
    text-slate-700
    dark:text-white
  "
>
  <PlayCircle
    className="
      mr-2
      h-4
      w-4
      transition-transform
      duration-200
      group-hover:scale-110
    "
  />

  See How It Works
</Button>
          </div>

          {/* STATS */}

          <div
            className="
              mt-9
              grid
              max-w-lg
              grid-cols-3
              gap-6
              border-t
              border-slate-200
              pt-6
              dark:border-white/10
            "
          >
            <HeroStat value="60" label="Days" />
            <HeroStat value="1" label="Build Every Day" />
            <HeroStat value="100%" label="Public Progress" />
          </div>

          {/* TRUST */}

          <div className="mt-7 flex max-w-xl items-start gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
                dark:bg-emerald-500/10
                dark:text-emerald-400
              "
            >
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Build proof, not just certificates.
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Every day gives you something real to show:
                code, progress, consistency, and projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.08,
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Outer Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary-500/10
              blur-[100px]
              dark:bg-primary-600/15
            "
          />

          {/* FLOATING RANK */}

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-3
              top-8
              z-20
              hidden
              items-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              bg-white/95
              px-3
              py-2
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-slate-900/90
              sm:flex
            "
          >
            <div
              className="
                rounded-lg
                bg-yellow-50
                p-1.5
                text-yellow-600
                dark:bg-yellow-400/10
                dark:text-yellow-400
              "
            >
              <Trophy className="h-4 w-4" />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Current Rank
              </p>

              <p
                className="
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                #1 Leaderboard
              </p>
            </div>
          </motion.div>

          {/* FLOATING STREAK */}

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-4
              -left-3
              z-20
              hidden
              items-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              bg-white/95
              px-3
              py-2
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-slate-900/90
              sm:flex
            "
          >
            <div
              className="
                rounded-lg
                bg-orange-50
                p-1.5
                text-orange-600
                dark:bg-orange-500/10
                dark:text-orange-400
              "
            >
              <Flame className="h-4 w-4" />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Consistency
              </p>

              <p
                className="
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                12 Day Streak
              </p>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* 3D TILT DASHBOARD CARD */}
          {/* ================================================= */}

          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              rotateX: shouldReduceMotion ? 0 : rotateX,
              rotateY: shouldReduceMotion ? 0 : rotateY,
              transformPerspective: 1200,
            }}
            className="relative"
          >
            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-gradient-to-br
                from-slate-100
                via-white
                to-slate-100
                p-2
                shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                transition-shadow
                duration-300
                hover:shadow-[0_30px_90px_rgba(68,84,230,0.20)]
                dark:border-white/10
                dark:from-slate-800
                dark:via-slate-900
                dark:to-slate-950
                dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]
                dark:hover:shadow-[0_30px_90px_rgba(68,84,230,0.20)]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-slate-200
                  bg-white
                  dark:border-white/10
                  dark:bg-slate-950
                "
              >
                {/* Top Bar */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    px-4
                    py-3
                    dark:border-white/10
                  "
                >
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>

                  <span
                    className="
                      hidden
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-1
                      text-[9px]
                      text-slate-400
                      dark:border-white/5
                      dark:bg-white/[0.03]
                      dark:text-slate-500
                      sm:block
                    "
                  >
                    ABTalks Dashboard
                  </span>

                  <Sparkles
                    className="
                      h-4
                      w-4
                      text-primary-500
                      dark:text-primary-400
                    "
                  />
                </div>

                <div className="p-4 sm:p-5">
                  {/* Dashboard Header */}

                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="
                          text-xs
                          text-slate-500
                        "
                      >
                        Your developer journey
                      </p>

                      <h2
                        className="
                          mt-1
                          text-lg
                          font-bold
                          text-slate-900
                          dark:text-white
                          sm:text-xl
                        "
                      >
                        Keep building.
                      </h2>
                    </div>

                    <div
                      className="
                        rounded-xl
                        bg-primary-50
                        p-2.5
                        text-primary-600
                        dark:bg-primary-500/10
                        dark:text-primary-400
                      "
                    >
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Streak */}

                  <div
                    className="
                      mt-4
                      rounded-2xl
                      border
                      border-primary-200
                      bg-gradient-to-br
                      from-primary-50
                      to-white
                      p-4
                      dark:border-primary-400/20
                      dark:from-primary-500/15
                      dark:to-transparent
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p
                          className="
                            text-xs
                            text-primary-600
                            dark:text-primary-300
                          "
                        >
                          Current streak
                        </p>

                        <div className="mt-1 flex items-baseline gap-2">
                          <span
                            className="
                              text-4xl
                              font-black
                              text-slate-900
                              dark:text-white
                            "
                          >
                            12
                          </span>

                          <span
                            className="
                              text-sm
                              text-slate-500
                              dark:text-slate-400
                            "
                          >
                            days
                          </span>
                        </div>
                      </div>

                      <div
                        className="
                          rounded-xl
                          bg-orange-50
                          p-2.5
                          text-orange-600
                          dark:bg-orange-500/10
                          dark:text-orange-400
                        "
                      >
                        <Flame className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Progress */}

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span
                          className="
                            text-[10px]
                            text-slate-500
                          "
                        >
                          Day 12 of 60
                        </span>

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            text-primary-600
                            dark:text-primary-300
                          "
                        >
                          20%
                        </span>
                      </div>

                      <div
                        className="
                          h-2
                          overflow-hidden
                          rounded-full
                          bg-slate-200
                          dark:bg-slate-800
                        "
                      >
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: "20%",
                          }}
                          transition={{
                            duration: shouldReduceMotion
                              ? 0
                              : 0.9,
                            delay: shouldReduceMotion
                              ? 0
                              : 0.35,
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-primary-600
                            to-accent-400
                            shadow-[0_0_12px_rgba(91,108,255,0.4)]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Proof Items */}

                  <div className="mt-4 space-y-2">
                    <ProofItem
                      icon={<Github className="h-4 w-4" />}
                      title="GitHub Proof"
                      subtitle="Daily commit submitted"
                      completed
                    />

                    <ProofItem
                      icon={<Linkedin className="h-4 w-4" />}
                      title="LinkedIn Post"
                      subtitle="Share today's progress"
                      completed={false}
                    />

                    <ProofItem
                      icon={<TargetIcon />}
                      title="Today's Challenge"
                      subtitle="Ready to continue"
                      completed
                    />
                  </div>

                  {/* Bottom Stats */}

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <PreviewStat value="980" label="XP" />
                    <PreviewStat value="12" label="Days" />
                    <PreviewStat value="#1" label="Rank" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ====================================================== */
/* HERO STAT */
/* ====================================================== */

function HeroStat({ value, label }) {
  return (
    <div>
      <p
        className="
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          sm:text-2xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[10px]
          font-medium
          uppercase
          tracking-wide
          text-slate-500
          sm:text-xs
        "
      >
        {label}
      </p>
    </div>
  );
}

/* ====================================================== */
/* PROOF ITEM */
/* ====================================================== */

function ProofItem({
  icon,
  title,
  subtitle,
  completed,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-3
        py-2.5
        transition-all
        duration-200
        hover:border-primary-200
        hover:bg-white
        dark:border-white/5
        dark:bg-white/[0.025]
        dark:hover:border-white/10
        dark:hover:bg-white/[0.045]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            bg-white
            text-slate-600
            shadow-sm
            dark:bg-white/[0.05]
            dark:text-slate-300
          "
        >
          {icon}
        </div>

        <div>
          <p
            className="
              text-xs
              font-semibold
              text-slate-800
              dark:text-slate-200
            "
          >
            {title}
          </p>

          <p className="mt-0.5 text-[10px] text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      {completed ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      ) : (
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-orange-400
            shadow-[0_0_8px_rgba(251,146,60,0.5)]
          "
        />
      )}
    </div>
  );
}

/* ====================================================== */
/* PREVIEW STAT */
/* ====================================================== */

function PreviewStat({ value, label }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-2
        py-2.5
        text-center
        dark:border-white/5
        dark:bg-white/[0.025]
      "
    >
      <p
        className="
          text-sm
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[9px]
          uppercase
          tracking-wide
          text-slate-500
        "
      >
        {label}
      </p>
    </div>
  );
}

/* ====================================================== */
/* TARGET ICON */
/* ====================================================== */

function TargetIcon() {
  return (
    <div className="h-4 w-4 rounded-full border-2 border-current" />
  );
}

export default HeroSection;