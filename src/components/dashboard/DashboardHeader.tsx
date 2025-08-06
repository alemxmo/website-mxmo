import React from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  empresa: string;
  onLogout: () => void;
}

const DashboardHeader = ({ empresa, onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-3 sm:p-4 lg:p-6 shadow-2xl">
      <div className="max-w-full mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:container lg:mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <img 
            src="/lovable-uploads/e0d7654f-584f-4726-95e1-e2f81e68a227.png" 
            alt="MXMO Logo"
            className="h-7 w-auto sm:h-8 lg:h-10"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-base font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent sm:text-lg lg:text-2xl">
              Área do Cliente MXMO
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm truncate">Dashboard de Crescimento Exponencial</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 flex-1 sm:flex-none">
            <User className="h-4 w-4 text-yellow-400 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base truncate">{empresa}</span>
          </div>
          <Button 
            variant="destructive" 
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-3 py-1.5 sm:px-4 sm:py-2"
            size="sm"
          >
            <LogOut className="h-4 w-4" />
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;