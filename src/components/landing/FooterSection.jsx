import {
  Instagram,
  Linkedin,
  Youtube,
  X,
  MessageCircle,
  Mail,
} from "lucide-react";

function FooterSection() {
  return (
    <footer
      className="
        mt-6
        border-t
        border-slate-200
        pt-6
        dark:border-slate-800
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-5

          lg:flex-row
        "
      >
        {/* Left */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            ABTalks
          </p>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Build • Ship • Grow
          </p>

          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            © 2026 ABTalks. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              text-primary-500
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            <Instagram className="h-4 w-4" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              text-primary-500
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="
              text-primary-500
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            <Youtube className="h-4 w-4" />
          </a>

          {/* X */}
          <a
            href="#"
            aria-label="X"
            className="
              text-primary-500
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            <X className="h-4 w-4" />
          </a>

          {/* Discord */}
          <a
            href="#"
            aria-label="Discord"
            className="
              text-primary-500
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        {/* Contact */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-sm
            text-slate-500

            dark:text-slate-400
          "
        >
          <Mail className="h-4 w-4 text-primary-500 dark:text-primary-400" />

          <span>
            For any issue or enquiry:
          </span>

          <a
            href="mailto:team@abtalks.in"
            className="
              font-medium
              text-primary-600
              transition-colors
              duration-200
              hover:text-primary-700

              dark:text-primary-400
              dark:hover:text-primary-300
            "
          >
            team@abtalks.in
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;