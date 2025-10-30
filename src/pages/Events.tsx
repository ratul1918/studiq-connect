import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import { format } from "date-fns";

const Events = () => {
  const [user, setUser] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: eventsData } = await supabase
        .from("events")
        .select(`
          *,
          clubs (
            name,
            universities (name)
          )
        `)
        .gte("event_date", new Date().toISOString())
        .order("event_date", { ascending: true });

      setEvents(eventsData || []);
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <Navigation user={user} />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-muted-foreground">Don't miss out on campus activities</p>
        </header>

        <div className="space-y-4">
          {events.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming events</p>
            </div>
          ) : (
            events.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-hover transition-smooth">
                <div className="grid md:grid-cols-[200px_1fr] gap-0">
                  {event.image_url && (
                    <div className="h-48 md:h-full">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                  )}
                  <div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                          <Badge variant="secondary">{event.clubs?.name}</Badge>
                        </div>
                        <Button>RSVP</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-primary" />
                          <span>{format(new Date(event.event_date), "PPP 'at' p")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.rsvp_count} attending</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
