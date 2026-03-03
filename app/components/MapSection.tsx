"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/app/components/ui/skeleton";

// Dynamically import the Map component to disable SSR (Leaflet requires window)
const Map = dynamic(() => import("./Map"), {
    loading: () => <Skeleton className="w-full h-[400px] rounded-lg" />,
    ssr: false,
});

export default function MapSection() {
    return (
        <section id="location" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Lokalizacja</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Znajdź nas w Mrzeżynie
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {/* Info Panel */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card p-6 rounded-lg shadow-md border text-left">
                            <h3 className="font-bold text-xl mb-4">Odległości</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Plaża</span>
                                    <span className="font-bold">100 m</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Las / Rzeka</span>
                                    <span className="font-bold">20 m</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Kołobrzeg</span>
                                    <span className="font-bold">18 km</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Trzebiatów</span>
                                    <span className="font-bold">10 km</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-md border text-left">
                            <h3 className="font-bold text-xl mb-2">Adres</h3>
                            <p className="text-muted-foreground">
                                ul. Marynarska 5<br />
                                72-330 Mrzeżyno
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden shadow-lg border relative z-0">
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
}
