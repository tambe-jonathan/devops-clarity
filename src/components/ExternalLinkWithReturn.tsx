import { ReactNode } from "react";

interface ExternalLinkWithReturnProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ExternalLinkWithReturn({ href, children, className }: ExternalLinkWithReturnProps) {
  const handleClick = () => {
    // Store the current scroll position and hash
    const currentHash = window.location.hash || "#";
    sessionStorage.setItem("returnToPortfolio", currentHash);
    sessionStorage.setItem("returnToPortfolioUrl", window.location.href);
    
    // Open the external link
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <span onClick={handleClick} className={`cursor-pointer ${className || ""}`}>
      {children}
    </span>
  );
}
