
import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock data for featured reviews
const featuredReviews = [
  {
    id: "1",
    title: "Incredible Experience with the Latest iPad Pro",
    rating: 4.5,
    content: "I've been using the new iPad Pro for a month now and it has completely transformed my workflow. The display is stunning, and the M2 chip makes everything incredibly fast. Battery life is excellent, lasting me a full day of work without any issues.",
    userName: "Michael Thompson",
    userAvatar: "",
    date: "2023-04-15T10:30:00Z",
    helpful: 28,
    notHelpful: 3,
    comments: 12,
    tags: ["Technology", "iPad", "Apple"],
    featured: true
  },
  {
    id: "2",
    title: "Disappointed with Customer Service at Cloud Hosting",
    rating: 2,
    content: "I've been using Cloud Hosting for my business website for 2 years, but their recent customer service changes have been terrible. Wait times are now over an hour, and the representatives seem poorly trained.",
    userName: "Sarah Johnson",
    userAvatar: "",
    date: "2023-05-20T14:15:00Z",
    helpful: 45,
    notHelpful: 8,
    comments: 23,
    tags: ["Service", "Web Hosting", "Support"],
    featured: true
  },
  {
    id: "3",
    title: "Best Noise-Cancelling Headphones I've Ever Tried",
    rating: 5,
    content: "These headphones have exceeded all my expectations. The noise cancellation is so good that I can't hear anything around me, even in a noisy coffee shop. Sound quality is excellent, with rich bass and clear highs.",
    userName: "David Chen",
    userAvatar: "",
    date: "2023-06-10T09:45:00Z",
    helpful: 37,
    notHelpful: 2,
    comments: 15,
    tags: ["Technology", "Audio", "Headphones"],
    featured: true
  }
];

const FeaturedReviews: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Reviews</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center"
          onClick={() => navigate('/explore')}
        >
          See all
          <ArrowRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedReviews;
