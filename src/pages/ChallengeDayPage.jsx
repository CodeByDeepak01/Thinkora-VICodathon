import { useEffect, useState } from "react";
import challengeData from "../data/challenge-day.json";
import PageTransition from "../components/motion/PageTransition";
import RevealSection from "../components/motion/RevealSection";
import ChallengeHeader from "../components/challenge/ChallengeHeader";
import ChallengeDetails from "../components/challenge/ChallengeDetails";
import RequirementChecklist from "../components/challenge/RequirementChecklist";
import ResourceCard from "../components/challenge/ResourceCard";
import SubmissionForm from "../components/challenge/SubmissionForm";
import SubmissionProgress from "../components/challenge/SubmissionProgress";
import AIMentorCard from "../components/challenge/AIMentorCard";
import SuccessModal from "../components/challenge/SuccessModal";
import { EmptyState, ErrorState, LoadingSkeleton } from "../components/ui";

function ChallengeDayPage() {
  const [submissionState, setSubmissionState] = useState(
    challengeData.submission,
  );
  const [successState, setSuccessState] = useState(challengeData.success);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLate, setIsLate] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (submissionState.completed) {
      setIsLate(true);
      return;
    }

    setSubmissionState((prev) => ({
      ...prev,
      completed: true,
      github: { ...prev.github, valid: true },
      linkedin: { ...prev.linkedin, valid: true },
      overall: 100,
    }));
    setSuccessState({
      visible: true,
      xp: challengeData.success.xp,
      streakPreview: challengeData.success.streakPreview,
      message: challengeData.success.message,
    });
  };

  if (isLoading) {
    return (
      <PageTransition className="flex flex-col gap-4 pb-4">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
          <LoadingSkeleton lines={5} />
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
          <LoadingSkeleton lines={4} />
        </div>
      </PageTransition>
    );
  }

  if (hasError) {
    return (
      <PageTransition className="flex flex-col gap-4 pb-4">
        <ErrorState
          title="We could not load the challenge details"
          description="Please retry in a moment. Your current progress will stay intact."
          onAction={() => setHasError(false)}
        />
      </PageTransition>
    );
  }

  return (
    <PageTransition className="flex flex-col gap-4 pb-4">
      <ChallengeHeader challenge={challengeData} />
      <RevealSection delay={0.03}>
        <ChallengeDetails challenge={challengeData} />
      </RevealSection>
      <RevealSection delay={0.05}>
        <RequirementChecklist checklist={challengeData.checklist} />
      </RevealSection>

      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
          Learning resources
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {challengeData.resources.map((resource, index) => (
            <RevealSection key={resource.title} delay={0.07 + index * 0.03}>
              <ResourceCard resource={resource} />
            </RevealSection>
          ))}
        </div>
      </div>

      {isLate ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          This submission was already marked complete. You can review your
          status instead of submitting again.
        </div>
      ) : null}

      {submissionState.completed ? (
        <EmptyState
          title="Challenge completed"
          description="You already submitted your proof. Keep going and your next streak starts with your next update."
        />
      ) : null}

      <RevealSection delay={0.12}>
        <SubmissionForm submission={submissionState} onSubmit={handleSubmit} />
      </RevealSection>
      <RevealSection delay={0.14}>
        <SubmissionProgress submission={submissionState} />
      </RevealSection>
      <RevealSection delay={0.16}>
        <AIMentorCard message={submissionState.mentorMessage} />
      </RevealSection>
      <SuccessModal success={successState} />
    </PageTransition>
  );
}

export default ChallengeDayPage;
