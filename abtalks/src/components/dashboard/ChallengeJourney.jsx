import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Card } from "../ui";

const journeyDays = Array.from({ length: 60 }, (_, index) => {
  const day = index + 1;

  /*
   * Demo statuses.
   * Later these can come from your backend/dashboard.json.
   */
  let status = "future";

  if (day <= 8) {
    status = "onTime";
  } else if (day === 9) {
    status = "rejected";
  } else if (day === 10) {
    status = "missed";
  } else if (day === 11) {
    status = "catchUp";
  } else if (day === 12) {
    status = "current";
  }

  return {
    day,
    status,
  };
});

const statusStyles = {
  onTime: {
    label: "On time",
    className:
      "border-emerald-400/30 bg-emerald-500 text-white shadow-sm",
  },

  rejected: {
    label: "Rejected",
    className:
      "border-purple-400/30 bg-purple-600 text-white shadow-sm",
  },

  missed: {
    label: "Missed",
    className:
      "border-red-400/30 bg-red-500 text-white shadow-sm",
  },

  catchUp: {
    label: "Missed - catch up",
    className:
      "border-yellow-400 bg-red-500 text-white shadow-[0_0_0_1px_rgba(250,204,21,0.9)]",
  },

  current: {
    label: "Current",
    className:
      "border-primary-300 bg-primary-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]",
  },

  future: {
    label: "Future",
    className:
      "border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500",
  },
};

function ChallengeJourney() {
  return (
    <Card padding="md">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            60-Day Journey
          </p>

          <div className="mt-1 flex items-center gap-2">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              Your challenge progress
            </h2>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Day 12 of 60
            </span>
          </div>
        </div>

        {/* Flame */}
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-orange-200
            bg-orange-50
            text-orange-500

            dark:border-orange-500/20
            dark:bg-orange-500/10
            dark:text-orange-400
          "
        >
          <Flame className="h-4 w-4" />
        </div>
      </div>

      {/* Journey Grid */}
      <div
        className="
          mt-4
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-3

          dark:border-slate-800
          dark:bg-slate-950/70
        "
      >
        <div className="grid grid-cols-10 gap-2">
          {journeyDays.map((item, index) => {
            const status = statusStyles[item.status];

            return (
              <motion.button
                key={item.day}
                type="button"
                title={`Day ${item.day} — ${status.label}`}
                aria-label={`Day ${item.day} — ${status.label}`}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.15,
                  delay: Math.min(index * 0.008, 0.35),
                }}
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={`
                  aspect-square
                  w-full
                  rounded-lg
                  border
                  text-[10px]
                  font-semibold
                  transition-shadow
                  duration-200
                  sm:text-xs
                  ${status.className}
                `}
              >
                {item.day}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">
        <LegendItem
          color="bg-emerald-500"
          label="On time"
        />

        <LegendItem
          color="bg-purple-600"
          label="Rejected"
        />

        <LegendItem
          color="bg-red-500"
          label="Missed"
        />

        <LegendItem
          color="bg-red-500"
          border="border-yellow-400"
          label="Missed - catch up"
        />

        <LegendItem
          color="bg-slate-100 dark:bg-slate-900"
          border="border-slate-300 dark:border-slate-700"
          label="Future"
        />
      </div>
    </Card>
  );
}

function LegendItem({
  color,
  border = "",
  label,
}) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`
          h-3
          w-3
          shrink-0
          rounded-full
          border
          ${color}
          ${border}
        `}
      />

      <span>{label}</span>
    </span>
  );
}

export default ChallengeJourney;