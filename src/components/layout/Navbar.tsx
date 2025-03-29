
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Plus, Home } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RateFlow</span>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex items-center space-x-1 text-gray-600"
              onClick={() => navigate("/")}
            >
              <Home size={18} />
              <span>Home</span>
            </Button>
          </div>
          
          <div className="hidden md:block w-full max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="search" 
                placeholder="Search reviews..." 
                className="pl-10 w-full bg-gray-50"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center"
              onClick={() => navigate("/explore")}
            >
              Explore
            </Button>
            <Button 
              onClick={() => navigate("/write-review")}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white flex items-center space-x-1"
              size="sm"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">Write Review</span>
              <span className="sm:hidden">Review</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="md:hidden border-t border-gray-100 bg-gray-50 px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search reviews..." 
            className="pl-10 w-full bg-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
