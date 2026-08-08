import { ExternalLink, BookOpen } from "lucide-react";
import { Card } from "../ui";

function ResourceCard({ resource }) {
  return (
    <Card padding="md">
      <div className="flex items-center justify-between gap-4">
        {/* Resource Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-9
                w-9
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
              <BookOpen className="h-4 w-4" />
            </div>

            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Resource
            </p>
          </div>

          <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
            {resource.title}
          </h3>

          <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-400">
            {resource.type}
          </p>
        </div>

        {/* Open Resource */}
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${resource.title}`}
          className="
            flex
            h-11
            w-11
            shrink-0
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
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </Card>
  );
}

export default ResourceCard;