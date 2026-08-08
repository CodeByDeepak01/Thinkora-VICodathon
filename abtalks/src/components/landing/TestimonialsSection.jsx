import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "../ui";

const testimonials = [
  {
    name: "Aarav",
    role: "Computer Science Student",
    quote:
      "I started with one small commit a day and suddenly my GitHub looked real. The challenge made me consistent.",
    badge: "Consistency Unlocked",
  },
  {
    name: "Meera",
    role: "Frontend Developer Aspirant",
    quote:
      "The daily structure helped me stop procrastinating and actually ship projects I could show recruiters.",
    badge: "Portfolio Ready",
  },
  {
    name: "Rohan",
    role: "Final Year Student",
    quote:
      "ABTalks gave me the push I needed to post consistently and build a story around my learning.",
    badge: "Confidence Built",
  },
];

function TestimonialsSection() {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-5 max-w-2xl">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          Testimonials
        </p>

        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Students who turned consistency into opportunity.
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
          >
            <Card
              padding="md"
              className="h-full"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary-50
                    text-primary-600

                    dark:bg-primary-500/10
                    dark:text-primary-400
                  "
                >
                  <Quote className="h-5 w-5" />
                </div>

                {/* Badge */}
                <span
                  className="
                    rounded-full
                    bg-primary-50
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-primary-600

                    dark:bg-primary-500/10
                    dark:text-primary-400
                  "
                >
                  {item.badge}
                </span>
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                "{item.quote}"
              </p>

              {/* Student */}
              <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.role}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;