import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Menu, X, Moon, Sun, ChevronDown, Eye, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#briefings", label: "Briefings" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#certifications", label: "Certifications" },
];

const SECTION_IDS = navLinks.map((l) => l.href.replace("#", ""));
const RESUME_URL = "/Jonathan_Tambe_Senior_DevOps_Engineer.pdf";
const NAV_HEIGHT = 80;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll-spy with lazy-section support
  const activeSection = useScrollSpy(isHomePage ? SECTION_IDS : [], NAV_HEIGHT);

  // Instant smooth scroll — uses requestAnimationFrame for zero-delay response
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    },
    []
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const sectionId = href.replace("#", "");

      if (isHomePage) {
        scrollToSection(sectionId);
      } else {
        // Navigate home then scroll
        window.location.href = `/${href}`;
      }
      setIsMobileMenuOpen(false);
    },
    [isHomePage, scrollToSection]
  );

  // Scroll state — throttled with RAF
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight indicator — tracks active link position
  useEffect(() => {
    if (!navRef.current || !activeSection) {
      setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const activeLink = navRef.current.querySelector(
      `a[data-section="${activeSection}"]`
    ) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setHighlightStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  // Theme init
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  const getNavHref = useCallback(
    (href: string) => (isHomePage ? href : `/${href}`),
    [isHomePage]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold text-foreground tracking-tight shrink-0"
          >
            Jonathan<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div
            ref={navRef}
            className="hidden lg:flex items-center gap-6 xl:gap-8 relative"
          >
            {/* Sliding highlight indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: highlightStyle.left,
                width: highlightStyle.width,
                opacity: highlightStyle.opacity,
              }}
            />
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={getNavHref(link.href)}
                  data-section={sectionId}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link text-sm whitespace-nowrap transition-colors duration-150 ${
                    isActive ? "text-foreground font-medium" : ""
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Resume Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 outline-none whitespace-nowrap">
                Resume
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-background border border-border"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/resume"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    View My Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={RESUME_URL}
                    download
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            <Button variant="hero" size="sm" asChild>
              <a
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={(e) => handleNavClick(e, "#contact")}
                className="whitespace-nowrap"
              >
                Consultation
              </a>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              className="p-2 text-foreground active:scale-95 transition-transform duration-100"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-200 ease-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={getNavHref(link.href)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-foreground bg-primary/5 border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
            {/* Mobile Resume Links */}
            <div className="border-t border-border pt-3 mt-2 space-y-1">
              <Link
                to="/resume"
                className="py-3 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-2 transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Eye className="w-4 h-4" />
                View My Resume
              </Link>
              <a
                href={RESUME_URL}
                download
                className="py-3 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-2 transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
            <Button variant="hero" size="default" asChild className="mt-3">
              <a
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Consultation
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
