
import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
  className?: string;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  color = "text-amber-400",
  className,
  interactive = false,
  onRatingChange,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  // Calculate the filled stars, half stars, and empty stars
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

  const handleClick = (clickedRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(clickedRating);
    }
  };

  return (
    <div 
      className={cn("flex", className)}
      onMouseLeave={() => interactive && setHoverRating(0)}
    >
      {Array.from({ length: filledStars }).map((_, i) => (
        <Star
          key={`star-filled-${i}`}
          size={size}
          className={cn(
            "fill-current stroke-0", 
            color,
            interactive && "cursor-pointer transition-transform hover:scale-110"
          )}
          onMouseEnter={() => interactive && setHoverRating(i + 1)}
          onClick={() => handleClick(i + 1)}
          data-active={interactive && hoverRating >= i + 1}
          style={{
            opacity: interactive && hoverRating > 0 ? (hoverRating >= i + 1 ? 1 : 0.3) : 1,
          }}
        />
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <Star 
            size={size} 
            className={cn("stroke-0 fill-gray-200", interactive && "cursor-pointer")} 
          />
          <StarHalf
            size={size}
            className={cn(
              "absolute top-0 left-0 fill-current stroke-0", 
              color,
              interactive && "cursor-pointer"
            )}
            onMouseEnter={() => interactive && setHoverRating(filledStars + 0.5)}
            onClick={() => handleClick(filledStars + 0.5)}
          />
        </div>
      )}
      
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`star-empty-${i}`}
          size={size}
          className={cn(
            "stroke-0 fill-gray-200", 
            interactive && "cursor-pointer transition-transform hover:scale-110"
          )}
          onMouseEnter={() => interactive && setHoverRating(filledStars + (hasHalfStar ? 1 : 0) + i + 1)}
          onClick={() => handleClick(filledStars + (hasHalfStar ? 1 : 0) + i + 1)}
          data-active={interactive && hoverRating >= filledStars + (hasHalfStar ? 1 : 0) + i + 1}
          style={{
            opacity: interactive && hoverRating > 0 
              ? (hoverRating >= filledStars + (hasHalfStar ? 1 : 0) + i + 1 ? 1 : 0.3) 
              : 1,
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
