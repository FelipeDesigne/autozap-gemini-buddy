import { Bot, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="bg-primary p-2 rounded-lg">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold">AutoZap</h3>
              <p className="text-background/70 text-sm">Automatização inteligente</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-background/70 mb-2">
              ChatBot automatizado com Google Gemini
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-end text-sm">
              <span className="text-background/60">Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span className="text-background/60">para revolucionar seu atendimento</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 AutoZap. Transformando o atendimento ao cliente com inteligência artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};