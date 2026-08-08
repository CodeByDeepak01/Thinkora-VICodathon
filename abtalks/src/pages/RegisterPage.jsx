import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Input } from "../components/ui";

function RegisterPage() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Temporary frontend-only registration.
    // Connect this to your backend API later.
    navigate("/login");
  };

  return (
    <div className="min-h-[calc(100vh-93px)] w-full py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-2">
        {/* ================================================= */}
        {/* LEFT SIDE - BRAND MESSAGE */}
        {/* ================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -20 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
          }}
          className="hidden lg:block"
        >
          <div className="max-w-lg">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/20">
                <Code2 className="h-6 w-6" />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  AB
                  <span className="text-primary-600">Talks</span>
                </h1>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Build • Ship • Grow
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mt-10 text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Start your journey.
              <br />
              <span className="text-primary-600">
                Build something real.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 dark:text-slate-300">
              Join the ABTalks 60-day challenge and turn consistent
              daily coding into real projects, public proof, and a
              recruiter-visible developer journey.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-3">
              {[
                "Build a consistent coding habit",
                "Create visible GitHub proof",
                "Grow a recruiter-ready portfolio",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* REGISTER CARD */}
        {/* ================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            delay: shouldReduceMotion ? 0 : 0.05,
          }}
          className="w-full"
        >
          <div
            className="
              rounded-[1.5rem]
              border
              border-slate-200
              bg-white
              p-5
              shadow-xl
              shadow-slate-200/50
              dark:border-white/10
              dark:bg-slate-900
              dark:shadow-black/20
              sm:p-7
            "
          >
            {/* Mobile Brand */}
            <div className="mb-7 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  AB
                  <span className="text-primary-600">Talks</span>
                </h1>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Build • Ship • Grow
                </p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
                Start your journey
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Join ABTalks and start building your developer
                journey.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="register-name"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  Full name
                </label>

                <div className="relative">
                  <User
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <Input
                    id="register-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="register-email"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="register-password"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <Input
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    className="pl-10 pr-11"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="
                      absolute
                      right-3
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-400
                      transition
                      hover:bg-slate-100
                      hover:text-slate-700
                      dark:hover:bg-white/10
                      dark:hover:text-slate-200
                    "
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="register-confirm-password"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <Input
                    id="register-confirm-password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="pl-10 pr-11"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current,
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="
                      absolute
                      right-3
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-400
                      transition
                      hover:bg-slate-100
                      hover:text-slate-700
                      dark:hover:bg-white/10
                      dark:hover:text-slate-200
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full justify-center"
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Login */}
            <div className="mt-6 border-t border-slate-200 pt-6 text-center dark:border-white/10">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-primary-600 transition hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Security Note */}
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs leading-5 text-slate-500 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-400">
              Create your account to save your challenge progress,
              achievements, and developer profile.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterPage;