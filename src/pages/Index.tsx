
import React from "react";
import HomeLayout from "@/components/layout/HomeLayout";
import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import CategoryList from "@/components/reviews/CategoryList";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <HomeLayout>
      <CategoryList />
      
      <FeaturedReviews />
      
      <section className="py-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl my-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your reviews help others make better decisions. 
            Join our community and make your voice heard.
          </p>
          <Link to="/write-review">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
              Write a Review
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <section className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
            <p className="text-gray-600">
              Real reviews from verified users. No fake content or hidden agendas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find What You Need</h3>
            <p className="text-gray-600">
              Powerful search and filters to help you discover exactly what you're looking for.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-600">
              Connect with others, share experiences, and help make better decisions.
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Index;
