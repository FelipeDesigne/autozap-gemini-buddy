import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Bot } from "lucide-react";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero = ({ onDownloadClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--whatsapp)),hsl(var(--tech-blue)))] opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30">
              <Bot className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Auto<span className="text-white/90">Zap</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
          ChatBot automatizado com Google Gemini para atendimento humanizado
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Perfeito para FAQ e lanchonetes. Receba pedidos pelo WhatsApp de forma automática!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={onDownloadClick}
            className="bg-white text-primary hover:bg-white/90 shadow-[0_0_40px_hsl(var(--whatsapp)/0.5)] text-lg px-8 py-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--whatsapp)/0.7)]"
          >
            <Zap className="mr-2 h-5 w-5" />
            Baixar AutoZap
          </Button>
          
          <div className="flex items-center gap-2 text-white/80">
            <MessageCircle className="h-5 w-5" />
            <span>Integração WhatsApp</span>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            🤖 Google Gemini IA
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            💬 Atendimento Humanizado
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            📱 WhatsApp Integration
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            🍔 Sistema de Pedidos
          </div>
        </div>
      </div>
    </section>
  );
};