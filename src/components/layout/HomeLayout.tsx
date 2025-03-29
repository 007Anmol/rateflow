
import React from "react";
import Layout from "./Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <Layout>
      <div className="mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Honest Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find trustworthy reviews for products, services, and businesses that matter to you
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Search for products, services, or businesses..."
              className="pl-12 pr-24 py-6 text-lg rounded-full shadow-md border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-full"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      
      {children}
    </Layout>
  );
};

export default HomeLayout;
