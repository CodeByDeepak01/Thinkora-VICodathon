import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Edit3,
  Flame,
  Github,
  Linkedin,
  Mail,
  Target,
  Trophy,
  X,
} from "lucide-react";

import PageTransition from "../components/motion/PageTransition";
import { Card } from "../components/ui";

function ProfilePage() {
  const [student, setStudent] = useState({
    name: "Deepak",
    username: "@deepak",
    email: "dpal789557@gmail.com",
    bio: "Building consistently, learning publicly, and growing one challenge at a time.",
    currentDay: 12,
    totalDays: 60,
    streak: 12,
    longestStreak: 12,
    xp: 980,
    rank: 1,
    completed: 12,
    github: "CodeByDeepak01",
    linkedin: "Deepak",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(student);

  const progress = Math.round(
    (student.currentDay / student.totalDays) * 100
  );

  const openEditProfile = () => {
    setEditForm(student);
    setIsEditing(true);
  };

  const closeEditProfile = () => {
    setEditForm(student);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    setStudent((current) => ({
      ...current,
      name: editForm.name.trim() || current.name,
      username:
        editForm.username.trim() || current.username,
      email: editForm.email.trim() || current.email,
      bio: editForm.bio.trim() || current.bio,
      github: editForm.github.trim(),
      linkedin: editForm.linkedin.trim(),
    }));

    setIsEditing(false);
  };

  return (
    <>
      <PageTransition className="flex flex-col gap-5 pb-8">
        {/* ================================================= */}
        {/* Profile Header */}
        {/* ================================================= */}

        <Card
          padding="lg"
          className="
            border-slate-200
            bg-white
            transition-all
            duration-200

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary-600
                  text-2xl
                  font-bold
                  text-white
                  shadow-md
                  shadow-primary-600/20
                "
              >
                {student.name.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {student.name}
                  </h1>

                  <span
                    className="
                      rounded-full
                      bg-primary-50
                      px-2.5
                      py-1
                      text-xs
                      font-semibold
                      text-primary-600

                      dark:bg-primary-500/10
                      dark:text-primary-400
                    "
                  >
                    Rank #{student.rank}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {student.username}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">
                    {student.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2">
              {/* GitHub */}
              <a
                href="#"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  text-slate-600
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-slate-300
                  hover:bg-white
                  hover:text-slate-900

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-400
                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800
                  dark:hover:text-white
                "
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  text-slate-600
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-primary-300
                  hover:bg-primary-50
                  hover:text-primary-600

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-400
                  dark:hover:border-primary-500/40
                  dark:hover:bg-primary-500/10
                  dark:hover:text-primary-400
                "
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Edit */}
              <button
                type="button"
                onClick={openEditProfile}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-primary-600
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-primary-700
                  hover:shadow-md
                  hover:shadow-primary-600/20
                "
              >
                <Edit3 className="h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            {student.bio}
          </p>
        </Card>

        {/* ================================================= */}
        {/* Challenge Progress */}
        {/* ================================================= */}

        <Card
          padding="md"
          className="
            border-slate-200
            bg-white

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-400">
                Challenge Progress
              </p>

              <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                {student.currentDay} of {student.totalDays} days
              </h2>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                {progress}%
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-500">
                completed
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-primary-600
                shadow-[0_0_12px_rgba(91,108,255,0.35)]
              "
            />
          </div>
        </Card>

        {/* ================================================= */}
        {/* Stats */}
        {/* ================================================= */}

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Flame className="h-5 w-5" />}
            label="Current Streak"
            value={`${student.streak} days`}
            helper="Keep it alive"
            iconClass="
              bg-orange-50
              text-orange-500
              dark:bg-orange-500/10
              dark:text-orange-400
            "
          />

          <StatCard
            icon={<Trophy className="h-5 w-5" />}
            label="Longest Streak"
            value={`${student.longestStreak} days`}
            helper="Personal best"
            iconClass="
              bg-yellow-50
              text-yellow-500
              dark:bg-yellow-500/10
              dark:text-yellow-400
            "
          />

          <StatCard
            icon={<Award className="h-5 w-5" />}
            label="Total XP"
            value={student.xp}
            helper="Challenge points"
            iconClass="
              bg-primary-50
              text-primary-600
              dark:bg-primary-500/10
              dark:text-primary-400
            "
          />

          <StatCard
            icon={<Target className="h-5 w-5" />}
            label="Completed"
            value={`${student.completed} days`}
            helper="Challenge progress"
            iconClass="
              bg-emerald-50
              text-emerald-500
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          />
        </section>

        {/* ================================================= */}
        {/* Achievements */}
        {/* ================================================= */}

        <Card
          padding="md"
          className="
            border-slate-200
            bg-white

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Achievements
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              Your milestones
            </h2>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Achievement
              icon={<Flame className="h-5 w-5" />}
              title="First Streak"
              description="Started your journey"
              className="
                bg-orange-50
                text-orange-500
                dark:bg-orange-500/10
                dark:text-orange-400
              "
            />

            <Achievement
              icon={<Target className="h-5 w-5" />}
              title="10 Day Builder"
              description="Completed 10 challenge days"
              className="
                bg-primary-50
                text-primary-600
                dark:bg-primary-500/10
                dark:text-primary-400
              "
            />

            <Achievement
              icon={<Trophy className="h-5 w-5" />}
              title="Top Performer"
              description="Reached the top of the leaderboard"
              className="
                bg-yellow-50
                text-yellow-500
                dark:bg-yellow-500/10
                dark:text-yellow-400
              "
            />
          </div>
        </Card>

        {/* ================================================= */}
        {/* Connected Accounts */}
        {/* ================================================= */}

        <Card
          padding="md"
          className="
            border-slate-200
            bg-white

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Connected Accounts
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              Your developer profiles
            </h2>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <SocialAccount
              icon={<Github className="h-5 w-5" />}
              name="GitHub"
              username={student.github}
            />

            <SocialAccount
              icon={<Linkedin className="h-5 w-5" />}
              name="LinkedIn"
              username={student.linkedin}
            />
          </div>
        </Card>

        {/* ================================================= */}
        {/* Challenge Reminder */}
        {/* ================================================= */}

        <Card
          padding="md"
          className="
            border-primary-100
            bg-primary-50

            dark:border-primary-500/20
            dark:bg-primary-500/10
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
                bg-white
                text-primary-600
                shadow-sm

                dark:bg-slate-900/70
                dark:text-primary-400
              "
            >
              <Flame className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Keep building, {student.name}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                You're on day {student.currentDay} of your 60-day
                journey. Complete today's challenge to keep your
                streak alive.
              </p>
            </div>
          </div>
        </Card>
      </PageTransition>

      {/* ================================================= */}
      {/* Edit Profile Modal */}
      {/* ================================================= */}

      {isEditing && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-slate-950/50
            p-4
            backdrop-blur-sm
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ duration: 0.2 }}
            className="
              max-h-[90vh]
              w-full
              max-w-lg
              overflow-y-auto
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-2xl

              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            {/* Modal Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-5
                py-4

                dark:border-slate-800
              "
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Edit Profile
                </h2>

                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Update your public profile information.
                </p>
              </div>

              <button
                type="button"
                onClick={closeEditProfile}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-500
                  transition-all
                  duration-200
                  hover:bg-slate-100
                  hover:text-slate-900

                  dark:hover:bg-slate-800
                  dark:hover:text-white
                "
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSave}
              className="space-y-4 p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                />

                <FormField
                  label="Username"
                  name="username"
                  value={editForm.username}
                  onChange={handleChange}
                />
              </div>

              <FormField
                label="Email"
                name="email"
                type="email"
                value={editForm.email}
                onChange={handleChange}
              />

              {/* Bio */}
              <div>
                <label
                  htmlFor="bio"
                  className="
                    mb-1.5
                    block
                    text-sm
                    font-medium
                    text-slate-700

                    dark:text-slate-300
                  "
                >
                  Bio
                </label>

                <textarea
                  id="bio"
                  name="bio"
                  value={editForm.bio}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell people a little about yourself..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2.5
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-primary-500
                    focus:ring-2
                    focus:ring-primary-500/10

                    dark:border-slate-700
                    dark:bg-slate-950/70
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                    dark:focus:border-primary-500
                    dark:focus:ring-primary-500/20
                  "
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="GitHub"
                  name="github"
                  value={editForm.github}
                  onChange={handleChange}
                />

                <FormField
                  label="LinkedIn"
                  name="linkedin"
                  value={editForm.linkedin}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div
                className="
                  flex
                  justify-end
                  gap-2
                  border-t
                  border-slate-200
                  pt-4

                  dark:border-slate-800
                "
              >
                <button
                  type="button"
                  onClick={closeEditProfile}
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-slate-600
                    transition-all
                    duration-200
                    hover:bg-slate-100
                    hover:text-slate-900

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-slate-300
                    dark:hover:bg-slate-700
                    dark:hover:text-white
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    rounded-xl
                    bg-primary-600
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-primary-700
                    hover:shadow-md
                    hover:shadow-primary-600/20
                  "
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}

/* ====================================================== */
/* Form Field */
/* ====================================================== */

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-1.5
          block
          text-sm
          font-medium
          text-slate-700

          dark:text-slate-300
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-3
          py-2.5
          text-sm
          text-slate-900
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-primary-500
          focus:ring-2
          focus:ring-primary-500/10

          dark:border-slate-700
          dark:bg-slate-950/70
          dark:text-slate-100
          dark:placeholder:text-slate-500
          dark:focus:border-primary-500
          dark:focus:ring-primary-500/20
        "
      />
    </div>
  );
}

/* ====================================================== */
/* Stat Card */
/* ====================================================== */

function StatCard({
  icon,
  label,
  value,
  helper,
  iconClass,
}) {
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

        <div
          className={`rounded-xl p-2 ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

/* ====================================================== */
/* Achievement */
/* ====================================================== */

function Achievement({
  icon,
  title,
  description,
  className,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        p-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-sm

        dark:border-slate-800
        dark:bg-slate-950/60
        dark:hover:border-slate-700
      "
    >
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          ${className}
        `}
      >
        {icon}
      </div>

      <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

/* ====================================================== */
/* Social Account */
/* ====================================================== */

function SocialAccount({
  icon,
  name,
  username,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-4
        py-3
        transition-all
        duration-200
        hover:border-slate-300
        hover:bg-white

        dark:border-slate-800
        dark:bg-slate-950/60
        dark:hover:border-slate-700
        dark:hover:bg-slate-900
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white
            text-slate-700
            shadow-sm

            dark:bg-slate-800
            dark:text-slate-200
          "
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {name}
          </p>

          <p className="truncate text-xs text-slate-500 dark:text-slate-400">
            {username}
          </p>
        </div>
      </div>

      <span
        className="
          shrink-0
          rounded-full
          bg-emerald-50
          px-2.5
          py-1
          text-[10px]
          font-semibold
          text-emerald-600

          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
      >
        Connected
      </span>
    </div>
  );
}

export default ProfilePage;