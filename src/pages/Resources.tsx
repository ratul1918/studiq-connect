import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Download, FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const Resources = () => {
  const [user, setUser] = useState<any>(null);
  const [resources, setResources] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: resourcesData } = await supabase
        .from("resources")
        .select(`
          *,
          profiles (full_name),
          departments (name)
        `)
        .order("created_at", { ascending: false });

      setResources(resourcesData || []);
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <Navigation user={user} />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Academic Resources</h1>
          <p className="text-muted-foreground">Access study materials shared by students</p>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          {resources.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No resources available yet</p>
            </div>
          ) : (
            resources.map((resource) => (
              <Card key={resource.id} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{resource.course_code}</Badge>
                        {resource.departments && (
                          <Badge variant="secondary">{resource.departments.name}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        by {resource.profiles?.full_name} •{" "}
                        {formatDistanceToNow(new Date(resource.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      <Download className="h-4 w-4 inline mr-1" />
                      {resource.downloads} downloads
                    </span>
                    <Button size="sm">Download</Button>
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

export default Resources;
