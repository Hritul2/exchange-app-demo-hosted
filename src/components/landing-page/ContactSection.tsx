import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 min-h-16 w-full border-t border-rose-500/20 bg-background px-4 py-6 backdrop-blur-md md:py-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Job Opportunity Text */}
          <span className="max-w-xl text-sm text-muted-foreground">
            Looking for freelance opportunities or full-time roles in backend
            development.{" "}
            <Link
              href="https://github.com/hritul2/exchange-app"
              target="_blank"
              className="text-rose-500 transition-colors hover:text-rose-600"
            >
              @repoLink
            </Link>
          </span>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <Link href="https://github.com/Hritul2" aria-label="GitHub Profile">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://x.com/_Hritul_"
              aria-label="X (Twitter) Profile"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </Link>
            <Link href="mailto:hritul.srivastava@gmail.com" aria-label="Email">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-xs text-muted-foreground">
            © 2024 • Built with Next.js & Tailwind CSS by{" "}
            <Link
              href="https://github.com/Hritul2"
              className="text-rose-500 transition-colors duration-200 hover:text-rose-600"
            >
              @Hritul2
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
