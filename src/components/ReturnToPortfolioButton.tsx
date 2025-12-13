import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReturnToPortfolioButton() {
  const [showButton, setShowButton] = useState(false);
  const [returnHash, setReturnHash] = useState("#");

  useEffect(() => {
    // Check if user came from an external link click
    const storedHash = sessionStorage.getItem("returnToPortfolio");
    
    if (storedHash) {
      setReturnHash(storedHash);
      setShowButton(true);
      
      // Clear storage after a delay to prevent showing on refresh
      const timer = setTimeout(() => {
        sessionStorage.removeItem("returnToPortfolio");
        sessionStorage.removeItem("returnToPortfolioUrl");
        setShowButton(false);
      }, 60000); // Hide after 1 minute
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleReturn = () => {
    sessionStorage.removeItem("returnToPortfolio");
    sessionStorage.removeItem("returnToPortfolioUrl");
    setShowButton(false);
    
    // Navigate to the stored hash
    window.location.hash = returnHash;
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
      <Button
        onClick={handleReturn}
        variant="outline"
        size="sm"
        className="bg-background/95 backdrop-blur-sm shadow-lg border-border hover:bg-muted transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Return to Portfolio
      </Button>
    </div>
  );
}
