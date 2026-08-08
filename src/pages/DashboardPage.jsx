import dashboardData from "../data/dashboard.json";

import PageTransition from "../components/motion/PageTransition";
import RevealSection from "../components/motion/RevealSection";

import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import ChallengeJourney from "../components/dashboard/ChallengeJourney";
import StreakCard from "../components/dashboard/StreakCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import TodayChallengeCard from "../components/dashboard/TodayChallengeCard";
import AchievementSection from "../components/dashboard/AchievementSection";
import LeaderboardPreview from "../components/dashboard/LeaderboardPreview";
import MentorCard from "../components/dashboard/MentorCard";
import ActivitySummary from "../components/dashboard/ActivitySummary";
import FAQSection from "../components/dashboard/FAQSection";
import FooterSection from "../components/landing/FooterSection";

function DashboardPage() {
  const { student } = dashboardData;

  return (
    <PageTransition className="flex flex-col gap-4 pb-4">
      {/* Welcome */}
      <WelcomeHeader student={student} />

      {/* 60-Day Challenge Journey */}
      <RevealSection delay={0.03}>
        <ChallengeJourney />
      </RevealSection>

      {/* Streak */}
      <RevealSection delay={0.05}>
        <StreakCard student={student} />
      </RevealSection>

      {/* Progress */}
      <RevealSection delay={0.07}>
        <ProgressCard student={student} />
      </RevealSection>

      {/* Today's Challenge */}
      <RevealSection delay={0.09}>
        <TodayChallengeCard challenge={student.challenge} />
      </RevealSection>

      {/* Achievements */}
      <RevealSection delay={0.11}>
        <AchievementSection
          achievements={student.achievements}
        />
      </RevealSection>

      {/* Leaderboard */}
      <RevealSection delay={0.13}>
        <LeaderboardPreview
          leaderboard={student.leaderboard}
        />
      </RevealSection>

      {/* AI Mentor */}
      <RevealSection delay={0.15}>
        <MentorCard
          message={student.mentorMessage}
        />
      </RevealSection>

      {/* Daily Activity */}
      <RevealSection delay={0.17}>
        <ActivitySummary
          activity={student.activity}
        />
      </RevealSection>

      {/* FAQ - Last Section */}
      <RevealSection delay={0.19}>
        <FAQSection />
      </RevealSection>

      <FooterSection />

    </PageTransition>

    
  );
}

export default DashboardPage;