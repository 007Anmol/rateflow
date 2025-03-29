
import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ReviewCardProps {
  id: string;
  title: string;
  rating: number;
  content: string;
  userName: string;
  userAvatar?: string;
  date: string;
  helpful: number;
  notHelpful: number;
  comments: number;
  tags?: string[];
  featured?: boolean;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  title,
  rating,
  content,
  userName,
  userAvatar,
  date,
  helpful,
  notHelpful,
  comments,
  tags = [],
  featured = false,
  className,
}) => {
  const [helpfulCount, setHelpfulCount] = React.useState(helpful);
  const [notHelpfulCount, setNotHelpfulCount] = React.useState(notHelpful);
  const [userVote, setUserVote] = React.useState<"helpful" | "not-helpful" | null>(null);
  const { toast } = useToast();

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

  const formattedDate = React.useMemo(() => {
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    } catch (error) {
      return "Invalid date";
    }
  }, [date]);

  return (
    <div 
      className={cn(
        "review-card animate-fade-in",
        featured && "review-card-featured",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <Link to={`/review/${id}`} className="hover:underline">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{title}</h3>
        </Link>
        <StarRating rating={rating} size={18} />
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-slate-50">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 overflow-hidden">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
            ) : (
              userName.charAt(0).toUpperCase()
            )}
          </div>
          <div>
            <span className="text-sm font-medium text-gray-900">{userName}</span>
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "text-xs flex items-center space-x-1 h-8 px-2",
              userVote === "helpful" && "text-green-600"
            )}
            onClick={handleHelpful}
          >
            <ThumbsUp size={14} />
            <span>{helpfulCount}</span>
          </Button>
          
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "text-xs flex items-center space-x-1 h-8 px-2",
              userVote === "not-helpful" && "text-red-600"
            )}
            onClick={handleNotHelpful}
          >
            <ThumbsDown size={14} />
            <span>{notHelpfulCount}</span>
          </Button>
          
          <Link to={`/review/${id}`}>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs flex items-center space-x-1 h-8 px-2"
            >
              <MessageCircle size={14} />
              <span>{comments}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
