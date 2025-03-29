
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import StarRating from "@/components/ui/StarRating";

const categories = [
  "Products",
  "Services",
  "Restaurants",
  "Hotels",
  "Apps & Software",
  "Retail Stores",
  "Entertainment",
  "Travel",
  "Other"
];

const ReviewForm: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    rating: 0,
    reviewText: "",
    recommend: "yes",
    tags: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleRatingChange = (newRating: number) => {
    setForm((prev) => ({ ...prev, rating: newRating }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.title.trim() === "" || form.reviewText.trim() === "" || form.category === "" || form.rating === 0) {
      toast({
        title: "Incomplete Form",
        description: "Please fill all required fields and provide a rating.",
        variant: "destructive",
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Review Submitted!",
        description: "Your review has been submitted successfully.",
      });
      setSubmitting(false);
      navigate("/");
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Review Title*</Label>
        <Input
          id="title"
          name="title"
          placeholder="Summarize your experience"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category*</Label>
        <Select 
          value={form.category} 
          onValueChange={(value) => handleSelectChange("category", value)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label>Your Rating*</Label>
        <div className="flex items-center space-x-2">
          <StarRating
            rating={form.rating}
            interactive={true}
            onRatingChange={handleRatingChange}
            size={32}
          />
          <span className="text-sm text-gray-500">
            {form.rating > 0 ? `${form.rating} out of 5 stars` : "Click to rate"}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="reviewText">Your Review*</Label>
        <Textarea
          id="reviewText"
          name="reviewText"
          placeholder="Share details of your experience..."
          value={form.reviewText}
          onChange={handleChange}
          rows={6}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="recommend">Would you recommend this?</Label>
        <Select 
          value={form.recommend} 
          onValueChange={(value) => handleSelectChange("recommend", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Would you recommend this?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes, I recommend this</SelectItem>
            <SelectItem value="no">No, I don't recommend this</SelectItem>
            <SelectItem value="neutral">I'm neutral</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          name="tags"
          placeholder="Quality, Value, Design, etc."
          value={form.tags}
          onChange={handleChange}
        />
        <p className="text-xs text-gray-500">
          Add tags to help others find your review
        </p>
      </div>
      
      <div className="flex space-x-4 pt-4">
        <Button 
          type="button" 
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={submitting}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
