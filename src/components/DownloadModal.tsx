import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Download, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const correctPassword = "H7#pX!3rT@qZ9v%M2^dL&cF8*GwS1$bUoJ4+KmE";
  const downloadLink = "https://drive.google.com/drive/folders/17dLYnuLWGQ0V2hvBwtI4-h-sPSjCqTT2?usp=sharing";

  const handleDownload = () => {
    if (password !== correctPassword) {
      toast({
        title: "Senha incorreta",
        description: "Por favor, verifique a senha e tente novamente.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate loading and redirect
    setTimeout(() => {
      window.open(downloadLink, '_blank');
      setIsLoading(false);
      setPassword("");
      onClose();
      
      toast({
        title: "Download iniciado!",
        description: "O AutoZap será baixado em uma nova aba.",
      });
    }, 1000);
  };

  const handleClose = () => {
    setPassword("");
    setShowPassword(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            Baixar AutoZap
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              Para proteger nosso software, você precisa da senha de acesso.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-base font-medium">
              Senha de acesso
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha fornecida"
                className="pr-12 h-12 text-base"
                onKeyPress={(e) => e.key === 'Enter' && handleDownload()}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleDownload}
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={!password || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Verificando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Baixar Agora
                </div>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};