import { ArrowRight, MessageCircle, Bot, Bell } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Cliente envia mensagem",
      description: "Seu cliente inicia uma conversa no WhatsApp normalmente, como sempre fez."
    },
    {
      icon: Bot,
      title: "AutoZap responde",
      description: "Nossa IA Google Gemini entende e responde de forma humana e contextual."
    },
    {
      icon: Bell,
      title: "Pedido é processado",
      description: "Se for um pedido, é automaticamente enviado para o atendente anotar."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como funciona o <span className="text-primary">AutoZap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e automatizado que transforma seu atendimento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 animate-pulse" />
                  <div className="relative bg-primary p-6 rounded-full shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xs">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full ml-8">
                    <ArrowRight className="h-8 w-8 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <p className="text-muted-foreground">Atendimento contínuo</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              90%
            </div>
            <p className="text-muted-foreground">Redução no tempo de resposta</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <p className="text-muted-foreground">Automatização de FAQ</p>
          </div>
        </div>
      </div>
    </section>
  );
};