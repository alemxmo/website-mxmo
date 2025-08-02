import React from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  empresa: string;
  onLogout: () => void;
}

const DashboardHeader = ({ empresa, onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img 
            src="/lovable-uploads/e0d7654f-584f-4726-95e1-e2f81e68a227.png" 
            alt="MXMO Logo"
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Área do Cliente MXMO
            </h1>
            <p className="text-slate-300 text-sm">Dashboard de Crescimento Exponencial</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
            <User className="h-4 w-4 text-yellow-400" />
            <span className="font-medium">{empresa}</span>
          </div>
          <Button 
            variant="destructive" 
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;