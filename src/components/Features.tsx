import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, ShoppingCart, Clock, Users, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Google Gemini",
      description: "Respostas inteligentes e contextuais para cada cliente, com aprendizado contínuo."
    },
    {
      icon: MessageSquare,
      title: "Atendimento Humanizado",
      description: "Conversas naturais que seus clientes vão adorar, sem parecer robótico."
    },
    {
      icon: ShoppingCart,
      title: "Sistema de Pedidos",
      description: "Receba pedidos automaticamente pelo WhatsApp, direto para o atendente."
    },
    {
      icon: Clock,
      title: "24/7 Disponível",
      description: "Seu bot nunca dorme. Atendimento completo a qualquer hora do dia."
    },
    {
      icon: Users,
      title: "FAQ Automático",
      description: "Respostas instantâneas para perguntas frequentes dos seus clientes."
    },
    {
      icon: Zap,
      title: "Configuração Fácil",
      description: "Setup simples e rápido. Em minutos seu bot estará funcionando."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher o <span className="text-primary">AutoZap</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatize seu atendimento com a mais avançada tecnologia de IA, 
            mantendo a experiência humana que seus clientes esperam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)] transition-all duration-500 hover:-translate-y-2 border-border/50 bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--secondary)/0.3))]"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};