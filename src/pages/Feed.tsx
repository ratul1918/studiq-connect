import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import CreatePost from "@/components/CreatePost";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const Feed = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      // Fetch user profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(profileData);

      // Fetch posts
      await fetchPosts();

      // Fetch user likes
      const { data: likesData } = await supabase
        .from("post_likes")
        .select("post_id")
        .eq("user_id", session.user.id);

      if (likesData) {
        setUserLikes(new Set(likesData.map(like => like.post_id)));
      }

      setLoading(false);
    };

    fetchData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/auth");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchPosts = async () => {
    let query = supabase
      .from("posts")
      .select(`
        *,
        profiles:user_id (
          full_name,
          avatar_url,
          role
        )
      `)
      .order("created_at", { ascending: false });

    if (selectedCategory !== "all") {
      query = query.eq("category", selectedCategory as any);
    }

    const { data } = await query;
    setPosts(data || []);
  };

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [selectedCategory, user]);

  if (loading) {
    return (
      <>
        <Navigation user={user} />
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="space-y-6">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation user={user} />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          <CreatePost user={user} profile={profile} onPostCreated={fetchPosts} />

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="lost_found">Lost & Found</TabsTrigger>
              <TabsTrigger value="buy_sell">Buy/Sell</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-4 mt-6">
              {posts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No posts yet. Be the first to share something!</p>
                </div>
              ) : (
                posts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    currentUserId={user?.id}
                    isLiked={userLikes.has(post.id)}
                    onLikeToggle={fetchPosts}
                  />
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Feed;
