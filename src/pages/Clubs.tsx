import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { Users2 } from "lucide-react";

const Clubs = () => {
  const [user, setUser] = useState<any>(null);
  const [clubs, setClubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: clubsData } = await supabase
        .from("clubs")
        .select(`
          *,
          universities (name)
        `)
        .order("created_at", { ascending: false });

      setClubs(clubsData || []);
      setLoading(false);
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <Navigation user={user} />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">University Clubs</h1>
          <p className="text-muted-foreground">Discover and join clubs across universities</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <Users2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No clubs available yet</p>
            </div>
          ) : (
            clubs.map((club) => (
              <Card key={club.id} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>
                      <AvatarImage src={club.avatar_url} />
                      <AvatarFallback>{club.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {club.universities?.name}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {club.description || "No description available"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {club.member_count} members
                    </span>
                    <Button size="sm">Join Club</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Clubs;
