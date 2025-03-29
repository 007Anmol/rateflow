
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X, Filter, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewFiltersProps {
  className?: string;
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  search: string;
  category: string;
  rating: number[];
  sortBy: string;
  tags: string[];
}

const popularTags = [
  "Technology", "Service", "Quality", "Value", "Design",
  "Performance", "Support", "Price", "Durability", "Features"
];

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ 
  className,
  onFiltersChange
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [filters, setFilters] = React.useState<FilterState>({
    search: "",
    category: "all",
    rating: [0],
    sortBy: "newest",
    tags: [],
  });
  
  const handleFilterChange = <K extends keyof FilterState>(
    key: K, 
    value: FilterState[K]
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };
  
  const toggleTag = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    
    handleFilterChange("tags", newTags);
  };
  
  const clearFilters = () => {
    const resetFilters = {
      search: "",
      category: "all",
      rating: [0],
      sortBy: "newest",
      tags: [],
    };
    setFilters(resetFilters);
    onFiltersChange?.(resetFilters);
  };
  
  const hasActiveFilters = () => {
    return (
      filters.category !== "all" ||
      filters.rating[0] > 0 ||
      filters.sortBy !== "newest" ||
      filters.tags.length > 0
    );
  };

  return (
    <div className={cn("bg-white rounded-lg shadow p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Filters</h3>
        <div className="flex space-x-2">
          {hasActiveFilters() && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            <Filter size={18} />
            <span className="ml-1">{isExpanded ? "Hide" : "Show"}</span>
          </Button>
        </div>
      </div>
      
      <div className={cn(
        "space-y-5",
        !isExpanded && "hidden md:block"
      )}>
        <div>
          <label className="text-sm font-medium mb-1 block">Category</label>
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="products">Products</SelectItem>
              <SelectItem value="services">Services</SelectItem>
              <SelectItem value="restaurants">Restaurants</SelectItem>
              <SelectItem value="hotels">Hotels</SelectItem>
              <SelectItem value="apps">Apps & Software</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium">Minimum Rating</label>
            <div className="flex items-center">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-sm ml-1">{filters.rating[0]}+</span>
            </div>
          </div>
          <Slider
            value={filters.rating}
            min={0}
            max={5}
            step={1}
            onValueChange={(value) => handleFilterChange("rating", value)}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Sort By</label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => handleFilterChange("sortBy", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort reviews" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Rating</SelectItem>
              <SelectItem value="lowest">Lowest Rating</SelectItem>
              <SelectItem value="most-helpful">Most Helpful</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Popular Tags</label>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={filters.tags.includes(tag) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-colors",
                  filters.tags.includes(tag) 
                    ? "bg-primary hover:bg-primary/90" 
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                )}
                onClick={() => toggleTag(tag)}
              >
                {tag}
                {filters.tags.includes(tag) && (
                  <X size={14} className="ml-1" />
                )}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilters;
