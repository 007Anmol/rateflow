
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  content: string;
  userName: string;
  userAvatar?: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

interface ReviewCommentsProps {
  reviewId: string;
  initialComments?: Comment[];
}

const ReviewComments: React.FC<ReviewCommentsProps> = ({
  reviewId,
  initialComments = []
}) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newComment.trim() === "") {
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        content: newComment,
        userName: "You",
        date: new Date().toISOString(),
        helpful: 0,
        notHelpful: 0
      };
      
      setComments([comment, ...comments]);
      setNewComment("");
      setSubmitting(false);
      
      toast({
        title: "Comment posted",
        description: "Your comment has been added to the review.",
      });
    }, 1000);
  };
  
  const handleVote = (commentId: string, voteType: "helpful" | "notHelpful") => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          [voteType]: comment[voteType] + 1
        };
      }
      return comment;
    }));
    
    toast({
      title: "Vote recorded",
      description: "Thank you for your feedback.",
    });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="Add your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3"
        />
        <Button 
          type="submit" 
          disabled={submitting || newComment.trim() === ""}
        >
          {submitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
      
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="p-4 border border-gray-100 rounded-lg bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 overflow-hidden">
                  {comment.userAvatar ? (
                    <img src={comment.userAvatar} alt={comment.userName} className="w-full h-full object-cover" />
                  ) : (
                    comment.userName.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{comment.userName}</span>
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                  <div className="mt-3 flex items-center space-x-4">
                    <button 
                      className="flex items-center text-xs text-gray-500 hover:text-gray-700"
                      onClick={() => handleVote(comment.id, "helpful")}
                    >
                      <ThumbsUp size={14} className="mr-1" />
                      <span>{comment.helpful}</span>
                    </button>
                    <button 
                      className="flex items-center text-xs text-gray-500 hover:text-gray-700"
                      onClick={() => handleVote(comment.id, "notHelpful")}
                    >
                      <ThumbsDown size={14} className="mr-1" />
                      <span>{comment.notHelpful}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewComments;
