
import React from "react";
import Navbar from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showBackButton = false,
  pageTitle
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {(showBackButton || pageTitle) && (
          <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center">
              {showBackButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                >
                  <ArrowLeft size={18} className="mr-1" />
                  Back
                </Button>
              )}
              
              {pageTitle && (
                <h1 className="text-xl font-bold text-gray-900">{pageTitle}</h1>
              )}
            </div>
          </div>
        )}
        
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">R</span>
                </div>
                <span className="text-lg font-bold text-gray-900">RateFlow</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Honest reviews that help people make better decisions.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} RateFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
