import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PostCardProps {
  post: {
    id: string;
    content: string;
    category: string;
    image_url?: string;
    like_count: number;
    comment_count: number;
    created_at: string;
    profiles: {
      full_name: string;
      avatar_url?: string;
      role: string;
    };
  };
  currentUserId?: string;
  isLiked?: boolean;
  onLikeToggle?: () => void;
}

const PostCard = ({ post, currentUserId, isLiked, onLikeToggle }: PostCardProps) => {
  const [liked, setLiked] = useState(isLiked || false);
  const [likeCount, setLikeCount] = useState(post.like_count);
  const { toast } = useToast();

  const handleLike = async () => {
    if (!currentUserId) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to like posts",
        variant: "destructive",
      });
      return;
    }

    try {
      if (liked) {
        // Unlike
        const { error } = await supabase
          .from("post_likes")
          .delete()
          .eq("post_id", post.id)
          .eq("user_id", currentUserId);

        if (error) throw error;
        setLiked(false);
        setLikeCount(likeCount - 1);
      } else {
        // Like
        const { error } = await supabase
          .from("post_likes")
          .insert({ post_id: post.id, user_id: currentUserId });

        if (error) throw error;
        setLiked(true);
        setLikeCount(likeCount + 1);
      }
      onLikeToggle?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      events: "bg-secondary text-secondary-foreground",
      academics: "bg-primary text-primary-foreground",
      lost_found: "bg-destructive text-destructive-foreground",
      buy_sell: "bg-accent text-accent-foreground",
      general: "bg-muted text-muted-foreground",
    };
    return colors[category] || colors.general;
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      student: "bg-primary/10 text-primary",
      faculty: "bg-secondary/10 text-secondary",
      club_admin: "bg-accent/10 text-accent",
    };
    return colors[role] || colors.student;
  };

  return (
    <Card className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.profiles.avatar_url} />
              <AvatarFallback>{post.profiles.full_name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{post.profiles.full_name}</p>
                <Badge variant="secondary" className={getRoleBadgeColor(post.profiles.role)}>
                  {post.profiles.role}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
              </p>
            </div>
          </div>
          <Badge className={getCategoryColor(post.category)}>
            {post.category.replace("_", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap mb-4">{post.content}</p>
        {post.image_url && (
          <img
            src={post.image_url}
            alt="Post content"
            className="w-full rounded-lg object-cover max-h-96"
          />
        )}
      </CardContent>
      <CardFooter className="flex gap-2 border-t pt-4">
        <Button
          variant="ghost"
          size="sm"
          className={liked ? "text-destructive" : ""}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 mr-1 ${liked ? "fill-current" : ""}`} />
          {likeCount}
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle className="h-4 w-4 mr-1" />
          {post.comment_count}
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
