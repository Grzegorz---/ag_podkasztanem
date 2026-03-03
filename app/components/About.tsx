import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Wifi, ParkingSquare, Utensils, Gamepad2 } from "lucide-react";

const features = [
    {
        icon: Wifi,
        title: "Lokalizacja",
        description: "100m od morza i portu, 20m od lasu i rzeki Regi. Idealne miejsce na wypoczynek.",
    },
    {
        icon: ParkingSquare,
        title: "Udogodnienia",
        description: "Parking, sprzęt plażowy (leżaki, parawany), sprzęt sportowy.",
    },
    {
        icon: Utensils,
        title: "Wyżywienie",
        description: "Domowa stołówka na miejscu. Całodzienne wyżywienie w atrakcyjnej cenie.",
    },
    {
        icon: Gamepad2,
        title: "Dla Dzieci",
        description: "Plac zabaw, huśtawki, dużo zieleni i bezpieczny teren.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">O Nas</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Zapraszamy do naszego kameralnego ośrodka &quot;Pod Kasztanem&quot;. Oferujemy spokój,
                        bliskość natury i rodzinną atmosferę zaledwie 200 metrów od szerokiej, piaszczystej plaży.
                        Jako Ośrodek Wypoczynkowy &quot;Pod Kasztanem&quot; dokładamy wszelkich starań, by nasi Goście czerpali zadowolenie i satysfakcję z pobytu u nas.
                        Ośrodek położony jest w odległości 100 m od morza i portu oraz 20 m od ściany lasu i rzeki Regi.
                        Oddajemy do Państwa dyspozycji: sprzęt plażowy (parawany, leżaki), sprzęt sportowy (piłki, kometki), plac zabaw oraz grill.
                        Na terenie ośrodka znajduje się stołówka, w której serwujemy pyszne, domowe posiłki.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                            <CardHeader className="flex flex-col items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl font-bold text-center">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
