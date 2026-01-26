"use client";

import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Card, CardContent } from "@/app/components/ui/card";

// Placeholders from Unsplash
const images = [
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070", // Hero beach
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070", // Room interior
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070", // Resort view
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070", // Pool/Garden
    "https://images.unsplash.com/photo-1571896349842-6e5a513e6102?q=80&w=2070", // Detail
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025", // Bedroom
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Galeria</h2>
                    <p className="text-muted-foreground text-lg">
                        Zobacz jak wygląda wypoczynek w Mrzeżynie
                    </p>
                </div>

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {images.map((src, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all">
                                        <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative group">
                                            <Image
                                                src={src}
                                                alt={`Zdjęcie ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
