import { motion } from "framer-motion";
import {
  Flame,
  Trophy,
  TrendingUp,
  Target,
  Medal,
} from "lucide-react";
import { Card } from "../components/ui";
import PageTransition from "../components/motion/PageTransition";

const leaderboard = [
  {
    rank: 1,
    name: "Deepak",
    xp: 980,
    status: "Current standing",
    tier: "Top tier",
    streak: 12,
    completed: 12,
    isCurrentUser: true,
  },
  {
    rank: 2,
    name: "Sparsh",
    xp: 945,
    status: "Keeping pace",
    tier: "Top tier",
    streak: 11,
    completed: 11,
  },
  {
    rank: 3,
    name: "Yash",
    xp: 912,
    status: "Keeping pace",
    tier: "Top tier",
    streak: 10,
    completed: 10,
  },
  {
    rank: 4,
    name: "Asha",
    xp: 891,
    status: "Keeping pace",
    tier: "Close behind",
    streak: 9,
    completed: 10,
  },
  {
    rank: 5,
    name: "Meera",
    xp: 878,
    status: "Keeping pace",
    tier: "Close behind",
    streak: 9,
    completed: 10,
  },
  {
    rank: 6,
    name: "Rohan",
    xp: 845,
    status: "Keeping pace",
    tier: "Close behind",
    streak: 8,
    completed: 9,
  },
  {
    rank: 7,
    name: "Ananya",
    xp: 824,
    status: "Building momentum",
    tier: "Rising",
    streak: 8,
    completed: 9,
  },
  {
    rank: 8,
    name: "Karan",
    xp: 798,
    status: "Building momentum",
    tier: "Rising",
    streak: 7,
    completed: 8,
  },
  {
    rank: 9,
    name: "Priya",
    xp: 765,
    status: "Keeping pace",
    tier: "Rising",
    streak: 6,
    completed: 8,
  },
  {
    rank: 10,
    name: "Aditya",
    xp: 742,
    status: "Building momentum",
    tier: "Rising",
    streak: 6,
    completed: 7,
  },
];

function LeaderboardPage() {
  const currentUser = leaderboard.find(
    (student) => student.isCurrentUser
  );

  const totalStudents = leaderboard.length;

  return (
    <PageTransition className="flex flex-col gap-5 pb-8">
      {/* ================================================== */}
      {/* Header */}
      {/* ================================================== */}

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
          Community
        </p>

        <div className="mt-2 flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-primary-50
              text-primary-600

              dark:bg-primary-500/10
              dark:text-primary-400
            "
          >
            <Trophy className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Leaderboard
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              See who's leading the 60-day challenge.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* Current Standing */}
      {/* ================================================== */}

      <Card
        padding="md"
        className="
          border-primary-100
          bg-primary-50

          dark:border-primary-500/20
          dark:bg-primary-500/10
        "
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
                bg-white
                text-primary-600
                shadow-sm

                dark:bg-slate-900/70
                dark:text-primary-400
              "
            >
              <Medal className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                Your current standing
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                #{currentUser.rank} · {currentUser.name}
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                You're currently leading the challenge. Keep
                building and shipping consistently.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:block sm:text-right">
            <div>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {currentUser.xp}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                XP
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm font-semibold text-orange-500 sm:mt-2 sm:justify-end">
              <Flame className="h-4 w-4" />
              {currentUser.streak} day streak
            </div>
          </div>
        </div>
      </Card>

      {/* ================================================== */}
      {/* Top 3 */}
      {/* ================================================== */}

      <section className="grid gap-3 sm:grid-cols-3">
        {leaderboard.slice(0, 3).map((student, index) => (
          <PodiumCard
            key={student.name}
            student={student}
            position={index}
          />
        ))}
      </section>

      {/* ================================================== */}
      {/* Leaderboard */}
      {/* ================================================== */}

      <Card
        padding="md"
        className="
          border-slate-200
          bg-white

          dark:border-slate-800
          dark:bg-slate-900/80
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Leaderboard
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              Top performers
            </h2>
          </div>

          <span
            className="
              hidden
              rounded-full
              bg-primary-50
              px-3
              py-1
              text-xs
              font-semibold
              text-primary-600

              dark:bg-primary-500/10
              dark:text-primary-400

              sm:block
            "
          >
            60-Day Challenge
          </span>
        </div>

        {/* Table Header */}
        <div
          className="
            mt-5
            hidden
            grid-cols-[60px_1fr_90px_90px_100px]
            items-center
            gap-3
            border-b
            border-slate-200
            px-3
            pb-3
            text-[11px]
            font-semibold
            uppercase
            tracking-wide
            text-slate-400

            dark:border-slate-800

            md:grid
          "
        >
          <span>Rank</span>
          <span>Developer</span>
          <span className="text-center">Days</span>
          <span className="text-center">Streak</span>
          <span className="text-right">XP</span>
        </div>

        {/* Ranking List */}
        <div className="mt-3 space-y-2">
          {leaderboard.map((student, index) => (
            <LeaderboardRow
              key={student.name}
              student={student}
              index={index}
            />
          ))}
        </div>
      </Card>

      {/* ================================================== */}
      {/* Challenge Stats */}
      {/* ================================================== */}

      <section className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Your Rank"
          value={`#${currentUser.rank}`}
          helper={`Out of ${totalStudents} shown`}
          icon={<Trophy className="h-4 w-4" />}
          iconStyle="primary"
        />

        <StatCard
          label="Your XP"
          value={currentUser.xp}
          helper="Total challenge XP"
          icon={<TrendingUp className="h-4 w-4" />}
          iconStyle="green"
        />

        <StatCard
          label="Current Streak"
          value={`${currentUser.streak} days`}
          helper="Keep it alive"
          icon={<Flame className="h-4 w-4" />}
          iconStyle="orange"
        />
      </section>

      {/* ================================================== */}
      {/* Motivation */}
      {/* ================================================== */}

      <Card
        padding="md"
        className="
          border-slate-200
          bg-white

          dark:border-slate-800
          dark:bg-slate-900/80
        "
      >
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
              bg-orange-50
              text-orange-500

              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            <Flame className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Keep your streak alive
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Every completed challenge adds momentum. Keep
              building, sharing, and shipping to stay ahead.
            </p>
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}

/* ====================================================== */
/* Podium Card */
/* ====================================================== */

function PodiumCard({ student, position }) {
  const styles = {
    0: {
      wrapper:
        "border-yellow-200 bg-yellow-50 dark:border-yellow-500/20 dark:bg-yellow-500/10",
      icon:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
      rank: "1st",
    },
    1: {
      wrapper:
        "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60",
      icon:
        "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
      rank: "2nd",
    },
    2: {
      wrapper:
        "border-orange-200 bg-orange-50 dark:border-orange-500/20 dark:bg-orange-500/10",
      icon:
        "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
      rank: "3rd",
    },
  };

  const style = styles[position];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: position * 0.08,
      }}
      whileHover={{ y: -3 }}
      className={`
        rounded-2xl
        border
        p-4
        transition-shadow
        duration-200
        hover:shadow-md
        ${style.wrapper}
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-sm
            font-bold
            ${style.icon}
          `}
        >
          {style.rank}
        </div>

        <Trophy className="h-5 w-5 text-slate-400 dark:text-slate-500" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            text-sm
            font-bold
            ${
              student.isCurrentUser
                ? "bg-primary-600 text-white"
                : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            }
          `}
        >
          {student.name.charAt(0)}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {student.name}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {student.completed} days completed
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {student.xp}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            XP
          </p>
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-orange-500 dark:text-orange-400">
          <Flame className="h-4 w-4" />
          {student.streak}
        </div>
      </div>
    </motion.div>
  );
}

/* ====================================================== */
/* Leaderboard Row */
/* ====================================================== */

function LeaderboardRow({ student, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: index * 0.035,
      }}
      whileHover={{ y: -1 }}
      className={`
        rounded-xl
        border
        px-3
        py-3
        transition-all
        duration-200

        ${
          student.isCurrentUser
            ? `
              border-primary-200
              bg-primary-50
              shadow-sm

              dark:border-primary-500/30
              dark:bg-primary-500/10
            `
            : `
              border-slate-200
              bg-slate-50
              hover:border-primary-200
              hover:bg-white
              hover:shadow-sm

              dark:border-slate-800
              dark:bg-slate-900/60
              dark:hover:border-slate-700
              dark:hover:bg-slate-900
            `
        }
      `}
    >
      {/* Desktop */}
      <div className="hidden grid-cols-[60px_1fr_90px_90px_100px] items-center gap-3 md:grid">
        {/* Rank */}
        <RankBadge rank={student.rank} />

        {/* Developer */}
        <DeveloperInfo student={student} />

        {/* Completed */}
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {student.completed}
          </p>

          <p className="text-[10px] text-slate-500 dark:text-slate-500">
            days
          </p>
        </div>

        {/* Streak */}
        <div className="flex items-center justify-center gap-1 text-sm font-semibold text-orange-500 dark:text-orange-400">
          <Flame className="h-4 w-4" />
          {student.streak}
        </div>

        {/* XP */}
        <div className="text-right">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {student.xp.toLocaleString()} XP
          </p>

          <p className="text-[10px] text-slate-500 dark:text-slate-500">
            {student.tier}
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between gap-3 md:hidden">
        <div className="flex min-w-0 items-center gap-3">
          <RankBadge rank={student.rank} />

          <DeveloperInfo student={student} />
        </div>

        <div className="shrink-0 text-right">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {student.xp.toLocaleString()} XP
          </p>

          <div className="mt-1 flex items-center justify-end gap-1 text-xs font-semibold text-orange-500 dark:text-orange-400">
            <Flame className="h-3.5 w-3.5" />
            {student.streak}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ====================================================== */
/* Rank Badge */
/* ====================================================== */

function RankBadge({ rank }) {
  const rankStyle =
    rank === 1
      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
      : rank === 2
      ? "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
      : rank === 3
      ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
      : "bg-white text-slate-500 dark:bg-slate-800 dark:text-slate-400";

  return (
    <div
      className={`
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-full
        text-xs
        font-bold
        ${rankStyle}
      `}
    >
      #{rank}
    </div>
  );
}

/* ====================================================== */
/* Developer Info */
/* ====================================================== */

function DeveloperInfo({ student }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      {/* Avatar */}
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          text-sm
          font-semibold

          ${
            student.isCurrentUser
              ? "bg-primary-600 text-white"
              : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          }
        `}
      >
        {student.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p
            className={`
              truncate
              text-sm
              font-semibold

              ${
                student.isCurrentUser
                  ? "text-primary-700 dark:text-primary-300"
                  : "text-slate-900 dark:text-white"
              }
            `}
          >
            {student.name}
          </p>

          {student.isCurrentUser && (
            <span
              className="
                rounded-full
                bg-primary-100
                px-2
                py-0.5
                text-[10px]
                font-semibold
                text-primary-700

                dark:bg-primary-500/10
                dark:text-primary-300
              "
            >
              You
            </span>
          )}
        </div>

        <p className="truncate text-xs text-slate-500 dark:text-slate-400">
          {student.status}
        </p>
      </div>
    </div>
  );
}

/* ====================================================== */
/* Statistics Card */
/* ====================================================== */

function StatCard({
  label,
  value,
  helper,
  icon,
  iconStyle = "primary",
}) {
  const iconStyles = {
    primary:
      "bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400",

    green:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",

    orange:
      "bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400",
  };

  return (
    <Card
      padding="md"
      className="
        border-slate-200
        bg-white
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md

        dark:border-slate-800
        dark:bg-slate-900/80
      "
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {label}
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
            {helper}
          </p>
        </div>

        {icon && (
          <div
            className={`
              rounded-xl
              p-2
              ${iconStyles[iconStyle]}
            `}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export default LeaderboardPage;