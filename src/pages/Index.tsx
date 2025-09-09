import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { DownloadModal } from "@/components/DownloadModal";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onDownloadClick={() => setIsDownloadModalOpen(true)} />
      <Features />
      <HowItWorks />
      <Footer />
      
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
