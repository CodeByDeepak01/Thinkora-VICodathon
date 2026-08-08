import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import {
  Button,
  Card,
  Input,
  ValidationMessage,
} from "../ui";

function SubmissionForm({ submission, onSubmit }) {
  const shouldReduceMotion = useReducedMotion();

  const [github, setGithub] = useState(
    submission.github.value
  );

  const [linkedin, setLinkedin] = useState(
    submission.linkedin.value
  );

  const [githubMessage, setGithubMessage] = useState(
    submission.github.message
  );

  const [linkedinMessage, setLinkedinMessage] = useState(
    submission.linkedin.message
  );

  const [submitState, setSubmitState] = useState("idle");

  const handleSubmit = () => {
    const githubValue = github.trim();
    const linkedinValue = linkedin.trim();

    const githubValid = githubValue.includes("github.com");
    const linkedinValid = linkedinValue.includes("linkedin.com");

    setGithubMessage(
      githubValue === ""
        ? "Please add your GitHub URL."
        : githubValid
        ? "GitHub repository looks ready."
        : "Please provide a valid GitHub URL."
    );

    setLinkedinMessage(
      linkedinValue === ""
        ? "Please add your LinkedIn URL."
        : linkedinValid
        ? "LinkedIn post looks ready."
        : "Please provide a valid LinkedIn URL."
    );

    if (githubValid && linkedinValid) {
      setSubmitState("success");
      onSubmit();
    } else {
      setSubmitState("error");
    }
  };

  const githubHasError =
    githubMessage.toLowerCase().includes("please");

  const linkedinHasError =
    linkedinMessage.toLowerCase().includes("please");

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 10 }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
      }}
    >
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
            <Send className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Submit Proof
            </p>

            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              Share Your Work
            </h2>

            <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">
              Paste your public GitHub repository and LinkedIn
              post so reviewers can verify your progress.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-6">
          {/* GitHub */}
          <div className="space-y-3">
            <label
              htmlFor="github-url"
              className="text-base font-medium text-slate-800 dark:text-slate-200"
            >
              GitHub Repository / Commit
            </label>

            <Input
              id="github-url"
              type="url"
              value={github}
              placeholder="https://github.com/username/project"
              onChange={(e) => {
                setGithub(e.target.value);

                if (submitState !== "idle") {
                  setSubmitState("idle");
                }
              }}
              error={
                submitState === "error" &&
                github.trim() === ""
              }
            />

            <div
              className={`
                flex
                items-center
                gap-2
                text-sm

                ${
                  githubHasError
                    ? "text-red-500 dark:text-red-400"
                    : "text-emerald-600 dark:text-emerald-400"
                }
              `}
            >
              {githubHasError ? (
                <AlertCircle className="h-5 w-5 shrink-0" />
              ) : (
                <CheckCircle2 className="h-5 w-5 shrink-0" />
              )}

              <span>{githubMessage}</span>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="space-y-3">
            <label
              htmlFor="linkedin-url"
              className="text-base font-medium text-slate-800 dark:text-slate-200"
            >
              LinkedIn Post
            </label>

            <Input
              id="linkedin-url"
              type="url"
              value={linkedin}
              placeholder="https://linkedin.com/..."
              onChange={(e) => {
                setLinkedin(e.target.value);

                if (submitState !== "idle") {
                  setSubmitState("idle");
                }
              }}
              error={
                submitState === "error" &&
                linkedin.trim() === ""
              }
            />

            <div
              className={`
                flex
                items-center
                gap-2
                text-sm

                ${
                  linkedinHasError
                    ? "text-red-500 dark:text-red-400"
                    : "text-emerald-600 dark:text-emerald-400"
                }
              `}
            >
              {linkedinHasError ? (
                <AlertCircle className="h-5 w-5 shrink-0" />
              ) : (
                <CheckCircle2 className="h-5 w-5 shrink-0" />
              )}

              <span>{linkedinMessage}</span>
            </div>
          </div>

          {/* Validation */}
          {submitState === "success" && (
            <ValidationMessage
              tone="success"
              message="Submission looks good. Ready to continue."
            />
          )}

          {submitState === "error" && (
            <ValidationMessage
              tone="error"
              message="Please complete both links before submitting."
            />
          )}

          {/* Submit Button */}
          <Button
            size="lg"
            className="
              w-full
              justify-center
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
            onClick={handleSubmit}
            disabled={submission.completed}
          >
            {submission.completed
              ? "Proof Submitted"
              : "Submit Proof"}

            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default SubmissionForm;