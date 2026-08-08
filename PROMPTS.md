# Prompt 1 – Project Initialization & Architecture

## Goal

Set up the project foundation before building any UI.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior frontend engineer.

We are building a hackathon project called **ABTalks Redesign** for ViCodathon.

### Tech Stack

- React (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React Icons

### Requirements

Build only the project foundation.

Do NOT design the UI.

Do NOT generate business logic.

Keep the project clean, modular, and scalable.

The application must be mobile-first (390px).

The project must contain exactly these routes:

- /
- /dashboard
- /day/12

There is:

- No authentication
- No backend
- No database

Use mocked JSON files only.

### Tasks

1. Create a scalable folder structure.
2. Configure React Router.
3. Create a reusable Layout component.
4. Create placeholder pages:
   - LandingPage.jsx
   - DashboardPage.jsx
   - ChallengeDayPage.jsx
5. Configure routing for the required routes.
6. Create a `data` folder with empty JSON files:
   - student.json
   - challenge.json
   - leaderboard.json
   - achievements.json
7. Add a global stylesheet ready for Tailwind.
8. Keep everything production-ready and easy to extend.

Generate only the project architecture. Do not build any UI yet.


# Prompt 2 – Design System

## Goal

Create a reusable design system before building any screens.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer.

The project architecture is already complete.

Do NOT build any pages yet.

Your task is to create a reusable Design System for the entire application.

Project:
ABTalks Redesign (ViCodathon)

Tech Stack:
- React
- Tailwind CSS
- Framer Motion
- Lucide React

Requirements:

The application is mobile-first (390px).

The design should feel modern, premium, and motivating for college students participating in a 60-day coding challenge.

Create only reusable UI foundations.

Tasks:

1. Configure a reusable color palette using Tailwind.
2. Define typography scale.
3. Define spacing scale.
4. Define border radius standards.
5. Define shadow styles.
6. Create reusable Button component.
7. Create reusable Card component.
8. Create reusable ProgressBar component.
9. Create reusable Badge component.
10. Create reusable Input component.

Do not create Landing Page, Dashboard, or Challenge Page.

Keep components reusable and scalable.

Write clean React code using Tailwind CSS.


# Prompt 3 – Landing Page

## Goal

Build a modern mobile-first Landing Page that introduces ABTalks, builds trust, and motivates students to join the 60-day coding challenge.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Product Designer and Frontend Engineer.

The project architecture and design system are already complete.

Now build ONLY the Landing Page for the ABTalks Redesign project.

Do not modify routing, architecture, or other pages.

### Objective

Design a modern, premium, mobile-first Landing Page that immediately explains what ABTalks is and convinces a college student to join the 60-day coding challenge.

Primary viewport: **390px**

### Landing Page Sections

- Hero Section
- Trust Statistics
- Why ABTalks
- How It Works
- Student Benefits
- Testimonials
- Final CTA
- Footer

### UI Requirements

- Mobile-first
- Dark theme
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Reusable components
- Modern developer-focused design

### Code Requirements

- Modular React components
- Mock JSON data where appropriate
- Clean architecture
- Do not build Dashboard or Challenge Day pages


# Prompt 4 – Student Dashboard

## Goal

Build a modern, mobile-first Student Dashboard that motivates users to maintain their streak and clearly communicates daily progress throughout the 60-day challenge.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Product Designer and React Frontend Engineer.

The project architecture, design system, and Landing Page are already complete.

Now build ONLY the Student Dashboard page.

Do not modify the Landing Page or routing.

### Objective

Create a premium mobile-first dashboard that answers:

- Where am I?
- What should I do today?
- What is my current streak?
- How much have I completed?
- What motivates me to continue?

### Dashboard Sections

- Welcome Header
- Current Streak Card
- Overall Progress
- Today's Challenge
- Achievement Section
- Leaderboard Preview
- AI Mentor Card
- Daily Activity Summary
- Bottom Navigation

### Edge Cases

- First day
- Missed streak
- Empty achievements
- Challenge completed

### UI Requirements

- Mobile-first
- Dark theme
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Reusable components

### Code Requirements

- Modular React components
- Mock JSON data
- Production-ready architecture
- Do not build the Challenge Day page


# Prompt 5 – Challenge Day Page

## Goal

Build a mobile-first Challenge Day experience where students can understand today's task, track progress, and submit GitHub and LinkedIn proof of work using mocked data.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Product Designer and React Frontend Engineer.

The project architecture, design system, Landing Page, and Student Dashboard are already complete.

Now build ONLY the Challenge Day page for route:

/day/12

### Objective

Design a premium mobile-first Challenge Day page that helps students complete and submit today's challenge.

### Sections

- Challenge Header
- Challenge Description
- Requirements Checklist
- Learning Resources
- Submission Form
- Submission Progress
- AI Mentor Card
- Success State
- Bottom Navigation

### Edge Cases

- Nothing submitted
- GitHub only submitted
- LinkedIn only submitted
- Invalid URL
- Submission completed
- Challenge completed
- Missed streak

### UI Requirements

- Mobile-first
- Dark theme
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Code Requirements

- Reusable React components
- Mock JSON data
- Production-ready architecture
- No backend


# Prompt 6 – Micro-interactions & Animations

## Goal

Improve the overall user experience by adding subtle animations and micro-interactions without changing the existing layouts or architecture.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer specializing in motion design.

The project architecture and all three required pages are already complete.

Do NOT redesign the UI.

Do NOT change routing.

Only improve the experience using Framer Motion and reusable animation patterns.

### Landing Page

- Hero animation
- CTA animation
- Statistics animation
- Feature card animations
- Testimonial animations

### Dashboard

- Welcome animation
- Streak animation
- Progress animation
- Achievement animation
- AI Mentor animation

### Challenge Day

- Checklist animations
- Submission animation
- Success modal animation
- XP animation

### Global Improvements

- Page transitions
- Skeleton loading
- Hover effects
- Focus states
- Error feedback
- Success feedback
- Smooth scrolling

### Requirements

- Mobile-first
- Performance optimized
- Reusable animation components
- Framer Motion best practices
- No layout redesign


# Prompt 7 – Edge Cases, Empty States & User Experience

## Goal

Improve the application by handling real-world scenarios, empty states, validation, accessibility, and user feedback without changing the existing layouts.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Product Designer, UX Engineer, and React Frontend Engineer.

The project architecture, three pages, design system, and animations are already complete.

Improve the application by handling:

### Landing Page

- First-time visitor
- Returning visitor
- Challenge states

### Dashboard

- First day (no streak)
- Missed day
- Empty profile
- No achievements
- Challenge completed
- Offline state

### Challenge Day

- Nothing submitted
- GitHub only submitted
- LinkedIn only submitted
- Invalid URLs
- Success state
- Challenge completed
- Loading state
- Error state

### Accessibility

Improve keyboard navigation, focus states, form accessibility, and screen reader support.

### Code Requirements

- Reusable EmptyState component
- Reusable ErrorState component
- Reusable LoadingSkeleton component
- Reusable ValidationMessage component

Do not redesign the existing UI.


# Prompt 8 – Mobile Responsiveness, Accessibility & UX Audit

## Goal

Review the completed application and improve responsiveness, accessibility, usability, and overall design consistency before the final submission.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Frontend Architect, Mobile UX Designer, and Accessibility Engineer.

The application is feature complete.

Perform a complete UI/UX audit.

Improve:

### Mobile Responsiveness

- 390px optimization
- Responsive layouts
- Touch targets
- Typography
- Card spacing
- Overflow handling
- Form usability

### Accessibility

- Semantic HTML
- aria-labels
- Keyboard navigation
- Focus indicators
- Screen reader support
- Color contrast

### UX Consistency

- Typography hierarchy
- Card styles
- Button variants
- Input styles
- Icon consistency
- Animation consistency

### Forms

- Better validation
- Disabled states
- Success feedback
- Loading states

### Performance

- Remove duplicate code
- Optimize components
- Improve maintainability

Do not add new features.

Do not redesign the application.

Prepare the project for final hackathon submission.


# Prompt 9 – UI Refinement & Content Visibility

## Goal

Improve the overall quality of the user interface by fixing readability, spacing, content hierarchy, and mobile usability without changing the application's architecture.

## AI Tool

GitHub Copilot Agent

## Prompt

Perform a complete UI refinement pass across the Landing Page, Dashboard, and Challenge Day.

Do not redesign the application.

Improve the existing implementation by focusing on:

- Fix low-contrast or unreadable text.
- Ensure every card contains meaningful content instead of appearing empty.
- Improve typography hierarchy (headings, descriptions, labels).
- Reduce excessive whitespace and balance spacing.
- Improve statistic cards by adding numbers, labels, icons, and helper text.
- Improve achievement cards with icons, titles, descriptions, and status.
- Improve testimonial readability and spacing.
- Improve leaderboard with avatars, rankings, XP, and better visual hierarchy.
- Improve submission progress by adding progress bars, percentages, and completion states.
- Improve Daily Activity with meaningful status indicators and timestamps.
- Improve form placeholders, validation messages, and icons.
- Improve footer layout and information.
- Ensure all pages look polished on a 390px mobile viewport.
- Maintain the existing design language and architecture.

Focus on polish, readability, and production-quality UI without adding new features.


# Prompt 10 – Bottom Navigation Refinement

## Goal

Refine the existing bottom navigation by improving spacing, readability, responsiveness, and micro-interactions without changing the current functionality or routing.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior frontend engineer.

Do NOT rebuild the bottom navigation.

Do NOT change routing.

Do NOT rename components.

Do NOT change icons.

Keep the existing implementation.

Your task is ONLY to refine and polish the current Bottom Navigation.

Improve:

- Active pill width
- Navigation spacing
- Icon alignment
- Label readability
- Active tab animation
- Tap feedback
- Mobile responsiveness (390px)
- Shadows and border radius
- Overall visual polish

Do not change functionality.



# Prompt 11 – Light / Dark Mode Toggle

## Goal

Add a global Light/Dark mode toggle to the ABTalks application without changing the existing layouts, routes, or component structure.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer.

The ABTalks application is already built with React, Tailwind CSS, React Router DOM, Framer Motion, and Lucide React.

Add a complete global theme system.

### Requirements

Use:

- React Context
- Tailwind CSS dark mode
- localStorage
- Lucide React icons

Create:

- ThemeContext.jsx
- ThemeProvider
- useTheme hook

The context should provide:

- darkMode
- toggleTheme

### Theme Behavior

Dark mode should be the default theme.

The theme toggle should switch between:

- Dark Mode
- Light Mode

Persist the selected theme using localStorage.

Apply the theme using the `dark` class on the root HTML element.

### Toggle Button

Use:

- Sun icon for dark mode
- Moon icon for light mode

The button should include:

- Hover effect
- Smooth transition
- Accessible aria-label
- Keyboard accessibility

### Important

Do NOT create separate theme state inside individual components.

Use one global source of truth.

Do NOT change the existing routing or page structure.


# Prompt 12 – Theme Context Integration

## Goal

Connect the global ThemeContext to the existing Layout and remove duplicate theme state.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer.

The application already has a ThemeProvider and useTheme hook.

Update the existing Layout component to use the global theme context.

Remove the local:

- darkMode useState
- theme useEffect
- localStorage theme logic
- toggleTheme function




# Prompt 13 – Light Mode UI Refinement

## Goal

Make the existing ABTalks UI look professional, balanced, and readable in Light Mode while preserving the existing Dark Mode design.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer and UI/UX designer.

The ABTalks application already supports Light Mode and Dark Mode.

Some components currently look good in Dark Mode but look too bright, too white, or have poor contrast when Light Mode is enabled.

Perform a complete Light Mode refinement pass without changing the existing functionality, routes, or component structure.

### Requirements

Review all major UI elements, including:

- Header
- Navigation
- Hero section
- Cards
- Dashboard sections
- Challenge sections
- Leaderboard
- Profile
- Buttons
- Badges
- Inputs
- Progress bars
- Achievement cards
- FAQ
- Footer

### Theme Colors

Use appropriate Tailwind `dark:` classes.

For example:

```text
text-slate-900 dark:text-white
text-slate-600 dark:text-slate-300
bg-white dark:bg-slate-950
bg-slate-50 dark:bg-slate-900
border-slate-200 dark:border-white/10



# Prompt 14 – Premium Card Hover Effect

## Goal

Improve the visual quality of existing cards by adding subtle and professional hover interactions without changing their current structure or functionality.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer.

Improve the existing cards throughout the ABTalks application.

Do NOT redesign the cards.

Do NOT change the existing content.

Keep the existing implementation.

Your task is ONLY to add a polished hover interaction.

Improve:

- Slight upward movement
- Border highlight
- Shadow enhancement
- Smooth transitions
- Subtle icon interaction
- Light Mode appearance
- Dark Mode appearance
- Mobile responsiveness

Do not make the cards bounce, rotate excessively, or move too much.

Do not change functionality.


# Prompt 15 – Landing Page Hero Enhancement

## Goal

Make the ABTalks landing page Hero section more attractive, premium, and professional while keeping the existing functionality.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior Product Designer and Frontend Engineer.

Improve the existing HeroSection.

Do NOT change routing.

Do NOT remove the existing visitor-state logic.

Do NOT remove the existing CTA functionality.

Keep the existing implementation.

Your task is ONLY to improve the visual quality of the Hero section.

Improve:

- Hero typography
- Background gradients
- Visual hierarchy
- CTA presentation
- Dashboard preview
- Spacing
- Shadows
- Borders
- Framer Motion animations
- Mobile responsiveness
- Light Mode
- Dark Mode

Make the Hero feel like a premium modern developer-product landing page.

Do not change functionality.


# Prompt 16 – Hero Dashboard 3D Tilt Effect

## Goal

Add a subtle 3D cursor-follow effect to the dashboard preview inside the Hero section.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend and motion-design engineer.

Add a subtle 3D tilt interaction to the existing dashboard preview inside HeroSection.

Do NOT tilt the entire Hero section.

Do NOT change the existing Hero content.

Do NOT change routing.

Keep the existing implementation.

Use Framer Motion for the interaction.

The dashboard preview should:

- Tilt slightly toward the cursor
- Move smoothly
- Return smoothly when the cursor leaves
- Use subtle rotation
- Have realistic perspective
- Work correctly with reduced-motion preferences
- Remain static on mobile and touch devices

Keep the effect professional and lightweight.

Do not change functionality.


# Prompt 17 – Gradual Challenge Progress Animation

## Goal

Make the challenge progress bar animate gradually from 0% to the actual progress value.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer.

Improve the existing challenge progress bar.

Do NOT change the progress data.

Do NOT change the existing challenge logic.

Keep the existing implementation.

The progress bar should:

- Start from 0%
- Gradually animate to the actual percentage
- Show the correct percentage
- Use a smooth transition
- Have a subtle gradient
- Have a subtle glow
- Include a polished shine effect

For example, Day 12 of 60 should represent approximately 20% progress.

Respect reduced-motion preferences.

Do not change functionality.


# Prompt 18 – Challenge Header Enhancement

## Goal

Improve the ChallengeHeader so students can clearly understand their current challenge and progress.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer.

Improve the existing ChallengeHeader.

Do NOT change the challenge data structure.

Do NOT change routing.

Keep the existing implementation.

Improve:

- Day indicator
- Challenge title
- Description
- Difficulty badge
- Estimated duration
- Progress percentage
- Progress bar
- Icons
- Typography
- Spacing
- Borders
- Gradients
- Animations
- Mobile responsiveness
- Light Mode
- Dark Mode

Make the header feel premium, clear, and motivating.

Do not change functionality.


# Prompt 19 – Dashboard Welcome Header

## Goal

Make the dashboard welcome header more personal, motivating, and visually polished.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer and UI/UX designer.

Improve the existing WelcomeHeader component.

Do NOT change the dashboard logic.

Do NOT add authentication.

Do NOT change routing.

Keep the existing implementation.

Improve:

- Student avatar
- Student name
- Greeting
- Current challenge day
- Total challenge days
- Streak message
- Typography
- Spacing
- Icons
- Animations
- Responsive layout
- Light Mode
- Dark Mode

If no profile image is available, show the student's first initial as the avatar.

For now, use "D" as the fallback initial.

Do not change functionality.


# Prompt 20 – Submission Form Contrast Fix

## Goal

Improve the readability and contrast of the GitHub and LinkedIn submission fields.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior frontend engineer.

Improve the existing SubmissionForm component.

Do NOT change the validation logic.

Do NOT change the submission logic.

Do NOT change the data structure.

Keep the existing implementation.

Improve:

- Input background
- Input text color
- Placeholder color
- Border color
- Focus state
- Error state
- Success state
- Disabled state
- Light Mode contrast
- Dark Mode contrast

Make sure typed text and placeholder text are clearly visible.

Do not change functionality.


# Prompt 21 – 60-Day Challenge Journey

## Goal

Improve the 60-day challenge journey so students can clearly understand their past, current, and upcoming challenge days.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer.

Improve the existing ChallengeJourney component.

Do NOT change the existing challenge data structure.

Keep the existing implementation.

Support the existing statuses:

- On time
- Rejected
- Missed
- Missed - catch up
- Current
- Future

Improve:

- Day indicators
- Status colors
- Current-day highlight
- Hover effects
- Animations
- Tooltips
- Legend
- Spacing
- Mobile responsiveness
- Light Mode
- Dark Mode

Keep the journey easy to understand at a glance.

Do not change functionality.


# Prompt 22 – Achievement Section Refinement

## Goal

Make the achievements section more motivating, readable, and visually consistent.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior UI/UX engineer.

Improve the existing AchievementSection.

Do NOT change the achievement logic.

Do NOT change the existing data structure.

Keep the existing implementation.

Improve:

- Achievement icons
- Achievement titles
- Descriptions
- Unlocked state
- Locked state
- Status labels
- Card styling
- Hover effects
- Spacing
- Typography
- Light Mode
- Dark Mode
- Mobile responsiveness

Make unlocked achievements feel rewarding while keeping locked achievements clearly visible as future goals.

Do not change functionality.


# Prompt 23 – FAQ Accordion

## Goal

Improve the FAQ section with a clean, accessible, and smooth accordion interaction.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer.

Improve the existing FAQSection.

Do NOT use a third-party accordion library.

Keep the existing FAQ data.

Keep the existing implementation.

The FAQ should:

- Open when clicked
- Close when clicked again
- Allow only one FAQ to remain open
- Animate smoothly
- Rotate the chevron when opened
- Support keyboard interaction
- Be accessible
- Work on mobile
- Work in Light Mode
- Work in Dark Mode

Use Framer Motion for the opening and closing animation.

Do not change functionality.


# Prompt 24 – Footer Section Refinement

## Goal

Improve the FooterSection after removing the Bottom Navigation.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior frontend engineer.

Improve the existing FooterSection.

Do NOT add the Bottom Navigation back.

Do NOT change routing.

Keep the existing implementation.

Include and refine:

- ABTalks branding
- Instagram icon
- LinkedIn icon
- YouTube icon
- X icon
- Discord icon
- Contact email
- Social hover effects
- Responsive layout
- Spacing
- Typography
- Light Mode
- Dark Mode

Keep the footer clean, minimal, and professional.

Do not change functionality.


# Prompt 25 – Final UI and Theme Audit

## Goal

Perform a final UI/UX and theme audit of the complete ABTalks application before submission.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior frontend architect and UI/UX engineer.

Perform a complete final audit of the ABTalks application.

Do NOT redesign the application.

Do NOT change routing.

Do NOT remove working features.

Keep the existing implementation.

Review:

- Landing Page
- Dashboard
- Challenge Page
- Leaderboard
- Profile
- Navigation
- Footer
- Light Mode
- Dark Mode

Check:

- Text contrast
- Card consistency
- Button consistency
- Input visibility
- Progress bars
- Badges
- Icons
- Spacing
- Alignment
- Hover effects
- Animations
- Mobile responsiveness
- Accessibility
- Theme switching
- Theme persistence

Fix any visual inconsistencies, responsive issues, contrast problems, spacing issues, or theme-related problems.

Make the entire application feel consistent, polished, and production-ready.

Do not change existing functionality.


# Prompt 26 – Login and Register Navigation

## Goal

Add Login and Register buttons to the existing ABTalks navigation without changing the current navigation structure or functionality.

## AI Tool

GitHub Copilot Agent

## Prompt

You are my senior React frontend engineer.

Add Login and Register actions to the existing ABTalks Layout.

Do NOT redesign the existing navigation.

Do NOT change existing routes.

Do NOT remove the theme toggle.

Keep the existing implementation.

Add:

- Login button
- Register button
- Proper spacing
- Responsive behavior
- Light Mode support
- Dark Mode support
- Hover states
- Focus states

The Login button should navigate to:

/login

The Register button should navigate to:

/register

Use React Router navigation.

The Register button should have stronger primary styling.

The Login button should use a subtle secondary/outline style.

Keep the existing:

- ABTalks logo
- Home navigation
- Dashboard navigation
- Challenge navigation
- Leaderboard navigation
- Profile navigation
- Theme toggle

On mobile, make sure Login and Register remain accessible without causing horizontal overflow.

Do not implement backend authentication yet.

Do not add JWT or API calls.

Only implement the navigation and routing for Login and Register.