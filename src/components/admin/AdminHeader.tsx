import React from "react";
import { Button } from "@/components/ui/button";
import { Settings, LogOut } from "lucide-react";

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader = ({ onLogout }: AdminHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sm:p-6 shadow-2xl">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <img 
            src="/lovable-uploads/c4f1c955-faa6-413d-bdd2-33d221cd6bd5.png" 
            alt="MXMO Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              MXMO - Editor Administrativo
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm">Painel de Gestão de Empresas</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 sm:px-4">
            <Settings className="h-4 w-4 text-yellow-400" />
            <span className="font-medium text-sm sm:text-base">MXMOADM</span>
          </div>
          <Button 
            variant="destructive" 
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-3 sm:px-4"
            size="sm"
          >
            <LogOut className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;