import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-semibold">
              DevOps<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/70 text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with */}
          <p className="flex items-center gap-1 text-sm text-primary-foreground/70">
            Built with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> and automation
          </p>
        </div>
      </div>
    </footer>
  );
}
