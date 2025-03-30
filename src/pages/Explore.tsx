
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ReviewFilters from "@/components/reviews/ReviewFilters";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FilterX } from "lucide-react";
import { filterReviews, FilterOptions, Review } from "@/data/reviews";

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: searchParams.get("q") || "",
    category: searchParams.get("category") || "all",
    rating: searchParams.get("rating") ? parseInt(searchParams.get("rating") || "0") : 0,
    sortBy: searchParams.get("sortBy") || "newest",
    tags: searchParams.get("tags") ? searchParams.get("tags")?.split(",") || [] : [],
  });
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [hasFilters, setHasFilters] = useState(false);
  
  useEffect(() => {
    // Update filter options from URL params
    setFilterOptions({
      search: searchParams.get("q") || "",
      category: searchParams.get("category") || "all",
      rating: searchParams.get("rating") ? parseInt(searchParams.get("rating") || "0") : 0,
      sortBy: searchParams.get("sortBy") || "newest",
      tags: searchParams.get("tags") ? searchParams.get("tags")?.split(",") || [] : [],
    });
    
    // Initialize search query from URL
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);
  
  useEffect(() => {
    // Apply filters
    const results = filterReviews({
      search: filterOptions.search,
      category: filterOptions.category,
      rating: filterOptions.rating,
      sortBy: filterOptions.sortBy,
      tags: filterOptions.tags,
    });
    
    setFilteredReviews(results);
    
    // Check if any filters are active
    setHasFilters(
      filterOptions.search !== "" ||
      filterOptions.category !== "all" ||
      filterOptions.rating > 0 ||
      filterOptions.sortBy !== "newest" ||
      (filterOptions.tags && filterOptions.tags.length > 0)
    );
    
    // Update URL with filters
    const newParams = new URLSearchParams();
    if (filterOptions.search) newParams.set("q", filterOptions.search);
    if (filterOptions.category && filterOptions.category !== "all") newParams.set("category", filterOptions.category);
    if (filterOptions.rating > 0) newParams.set("rating", filterOptions.rating.toString());
    if (filterOptions.sortBy && filterOptions.sortBy !== "newest") newParams.set("sortBy", filterOptions.sortBy);
    if (filterOptions.tags && filterOptions.tags.length > 0) newParams.set("tags", filterOptions.tags.join(","));
    
    setSearchParams(newParams, { replace: true });
  }, [filterOptions, setSearchParams]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilterOptions({ ...filterOptions, search: searchQuery });
  };
  
  const handleFiltersChange = (newFilters: any) => {
    setFilterOptions(newFilters);
  };
  
  const clearAllFilters = () => {
    setSearchQuery("");
    setFilterOptions({
      search: "",
      category: "all",
      rating: 0,
      sortBy: "newest",
      tags: [],
    });
  };

  return (
    <Layout pageTitle="Explore Reviews">
      <div className="mb-6">
        <form onSubmit={handleSearch} className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="search"
            placeholder="Search reviews..."
            className="pl-10 py-5 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            Search
          </Button>
        </form>
        
        {hasFilters && (
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">{filteredReviews.length}</span> {filteredReviews.length === 1 ? 'result' : 'results'} found
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-sm flex items-center"
            >
              <FilterX size={16} className="mr-1" />
              Clear all filters
            </Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ReviewFilters 
            onFiltersChange={handleFiltersChange}
            className="sticky top-24"
          />
        </div>
        
        <div className="lg:col-span-3">
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any reviews matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={clearAllFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
