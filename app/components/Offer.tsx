import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const offers = [
    {
        title: "Pokoje Gościnne",
        price: "od 110 zł",
        period: "/osoba",
        description: "Pokoje 2, 3, 4 i 5-osobowe z łazienkami",
        features: ["Śniadanie + obiadokolacja w opcji (75 zł)", "Zniżki dla dzieci do lat 7", "Sprzęt plażowy", "TV, lodówka, czajnik elektryczny", "Dostęp do WiFi", "Parking", "Teren rekreacyjny z altanką i grillem", "Smaczne posiłki przygotowywane na miejscu"],
        featured: true,
    },
    {
        title: "Domek 'Pod Kasztanem'",
        price: "od 650 zł",
        period: "/doba",
        description: "Nowy drewniany domek całoroczny [2025]",
        features: ["45 m² powierzchni", "salon z aneksem kuchennym", "główna sypialnia z łożem małżeńskim", "druga sypialnia z dwoma łóżkami pojedynczymi", "Wyposażona łazienka z ogrzewaniem podłogowym", "Taras z meblami ogrodowymi", "Klimatyzacja", "Ogrzewanie", "TV 55'", "W pełni wyposaony aneks kuchenny: płyta indukcyjna, zmywarka, lodówka, mikrofala, duży zestaw naczyń kuchennych", "Czajnik elektryczny", "Dostęp do WiFi", "Dla 4-6 osób", "Parking"],
        featured: false,
    },
    {
        title: "Wyżywienie",
        price: "80 zł",
        period: "/dziennie",
        description: "Domowa kuchnia - zrónicowane menu - smaczne dania",
        features: ["Śniadanie: bufet szwedzki", "Obiadokolacja: zupa + drugie danie", "Kompot/deser", "Możliwość wykupienia na miejscu"],
        featured: false,
    },
    {
        title: "Śniadania",
        price: "30 zł",
        period: "/dziennie",
        description: "Bogaty wybór dań na początek dnia",
        features: ["Bufet szwedzki", "Kawa/herbata"],
        featured: false,
    },
];

export default function Offer() {
    return (
        <section id="offer" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Nasza Oferta</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Cennik na sezon letni 2026:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {offers.map((offer, index) => (
                        <Card
                            key={index}
                            className={`flex flex-col border shadow-lg hover:shadow-2xl transition-all duration-300 relative ${offer.featured ? 'border-primary shadow-xl scale-105 z-10' : ''}`}
                        >
                            {offer.featured && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                                    Polecamy
                                </div>
                            )}
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                                <CardDescription>{offer.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow text-center">
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-primary">{offer.price}</span>
                                    <span className="text-muted-foreground font-medium">{offer.period}</span>
                                </div>
                                <ul className="space-y-3 text-left max-w-[200px] mx-auto">
                                    {offer.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <Check className="h-4 w-4 text-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="pt-4">
                                <Button className="w-full" variant={offer.featured ? "default" : "outline"} asChild>
                                    <Link href="#contact">Rezerwuj</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
