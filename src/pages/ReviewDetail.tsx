
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import StarRating from "@/components/ui/StarRating";
import ReviewComments from "@/components/reviews/ReviewComments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, Flag, MessageCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { getReviewById, getCommentsByReviewId, Review, Comment } from "@/data/reviews";

const ReviewDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [review, setReview] = useState<Review | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [userVote, setUserVote] = useState<"helpful" | "not-helpful" | null>(null);
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [notHelpfulCount, setNotHelpfulCount] = useState(0);
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const foundReview = getReviewById(id);
        if (foundReview) {
          setReview(foundReview);
          setHelpfulCount(foundReview.helpful);
          setNotHelpfulCount(foundReview.notHelpful);
          
          const reviewComments = getCommentsByReviewId(id);
          setComments(reviewComments);
        }
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  const handleHelpful = () => {
    if (userVote === "helpful") {
      setHelpfulCount(helpfulCount - 1);
      setUserVote(null);
    } else {
      if (userVote === "not-helpful") {
        setNotHelpfulCount(notHelpfulCount - 1);
      }
      setHelpfulCount(helpfulCount + 1);
      setUserVote("helpful");
      toast({
        title: "Feedback recorded",
        description: "Thanks for letting us know this review was helpful.",
      });
    }
  };

  const handleNotHelpful = () => {
    if (userVote === "not-helpful") {
      setNotHelpfulCount(notHelpfulCount - 1);
      setUserVote(null);
    } else {
      if (userVote === "helpful") {
        setHelpfulCount(helpfulCount - 1);
      }
      setNotHelpfulCount(notHelpfulCount + 1);
      setUserVote("not-helpful");
      toast({
        title: "Feedback recorded",
        description: "Thanks for letting us know this review was not helpful.",
      });
    }
  };
  
  const handleShare = () => {
    // Copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Review link copied to clipboard",
    });
  };
  
  const handleReport = () => {
    toast({
      title: "Review reported",
      description: "Thank you for helping us maintain quality content.",
    });
  };
  
  if (loading) {
    return (
      <Layout showBackButton pageTitle="Loading Review...">
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
            <div className="w-full h-36 bg-gray-200 rounded mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!review) {
    return (
      <Layout showBackButton pageTitle="Review Not Found">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Review not found</h3>
          <p className="text-gray-600 mb-6">
            The review you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            onClick={() => navigate("/explore")}
          >
            Browse all reviews
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout showBackButton>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <Badge className="mb-3 bg-gray-100 text-gray-800 hover:bg-gray-200">
              {review.category.charAt(0).toUpperCase() + review.category.slice(1)}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{review.title}</h1>
            <div className="flex items-center space-x-2">
              <StarRating rating={review.rating} size={24} />
              <span className="text-lg font-medium">{review.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 overflow-hidden">
              {review.userAvatar ? (
                <img src={review.userAvatar} alt={review.userName} className="w-full h-full object-cover" />
              ) : (
                review.userName.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <div className="font-medium text-gray-900">{review.userName}</div>
              <div className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 whitespace-pre-line">{review.content}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {review.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-slate-50">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "flex items-center space-x-1",
                  userVote === "helpful" && "bg-green-50 text-green-600 border-green-200"
                )}
                onClick={handleHelpful}
              >
                <ThumbsUp size={16} />
                <span>Helpful ({helpfulCount})</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "flex items-center space-x-1",
                  userVote === "not-helpful" && "bg-red-50 text-red-600 border-red-200"
                )}
                onClick={handleNotHelpful}
              >
                <ThumbsDown size={16} />
                <span>Not Helpful ({notHelpfulCount})</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1"
                onClick={handleShare}
              >
                <Share2 size={16} />
                <span>Share</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1"
                onClick={handleReport}
              >
                <Flag size={16} />
                <span>Report</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <ReviewComments 
            reviewId={review.id}
            initialComments={comments}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ReviewDetail;
