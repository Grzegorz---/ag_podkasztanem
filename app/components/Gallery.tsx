"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Card, CardContent } from "@/app/components/ui/card";
import AutoScroll from "embla-carousel-auto-scroll";

const images = [
    "/images/IMG-20240512-193547.jpg",
    "/images/IMG-20240624-191014.jpg",
    "/images/IMG-20240624-190956.jpg",
    "/images/IMG-20240529-213014.jpg",
    "/images/IMG-20240526-110027.jpg",
    "/images/IMG-20240520-091516.jpg",
    "/images/IMG-20240604-214742.jpg",
    "/images/IMG-20250613-220118538-HDR.jpg",
    "/images/IMG-20250613-220211788-HDR.jpg",
    "/images/IMG-20250613-220230511-HDR.jpg",
    "/images/IMG-20250613-220319426.jpg",
    "/images/IMG-20250613-220331836.jpg",
    "/images/IMG-20250613-220456553.jpg",
    "/images/IMG-20250613-220341075-HDR.jpg",
    "/images/IMG-20250613-220513036-HDR.jpg",
    "/images/IMG-20250613-221825554-HDR.jpg",
    "/images/IMG-20250613-221956961-HDR.jpg",
    "/images/IMG-20250613-222010451-HDR.jpg",
    "/images/IMG-20250613-222022287-HDR.jpg",
    "/images/IMG-20250613-222033991-HDR.jpg",
    "/images/IMG-20250613-215120544-HDR.jpg",
    "/images/IMG-20250613-215449336.jpg",
    "/images/IMG-20250613-222331385.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [api, setApi] = useState<any>();

    return (
        <section id="gallery" className="py-4 md:py-6 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 relative z-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Galeria</h2>
                    <p className="text-muted-foreground text-lg">
                        Zobacz jak wygląda wypoczynek w Mrzeżynie
                    </p>
                </div>

                <div className="py-12 md:py-16">
                    <Carousel
                        setApi={setApi}
                        className="w-full max-w-7xl mx-auto -my-12 md:-my-16"
                        opts={{ loop: true }}
                        plugins={[
                            AutoScroll({
                                speed: 1,
                                stopOnInteraction: false,
                                stopOnMouseEnter: false,
                            })
                        ]}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4 py-12 md:py-16">
                            {images.map((src, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 sm:p-2">
                                        <Card 
                                            className="overflow-hidden border-2 border-transparent hover:border-black rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.25] hover:z-50 relative cursor-pointer group"
                                            onMouseEnter={() => api?.plugins().autoScroll?.stop()}
                                            onMouseLeave={() => api?.plugins().autoScroll?.play()}
                                        >
                                            <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative">
                                                <Image
                                                    src={src}
                                                    alt={`Zdjęcie ${index + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-500"
                                                    sizes="100vw"
                                                />
                                                <div
                                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                                    onClick={() => setSelectedImage(src)}
                                                >
                                                    <ZoomIn className="w-12 h-12 text-white" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious 
                            className="left-2 md:left-6 z-[60] bg-white/80 hover:bg-white shadow-md border-0 w-10 h-10 md:w-12 md:h-12"
                            disabled={false}
                            onMouseEnter={() => api?.plugins().autoScroll?.stop()}
                            onMouseLeave={() => api?.plugins().autoScroll?.play()}
                            onClick={() => {
                                if (api) {
                                    api.scrollPrev();
                                }
                            }}
                        />
                        <CarouselNext 
                            className="right-2 md:right-6 z-[60] bg-white/80 hover:bg-white shadow-md border-0 w-10 h-10 md:w-12 md:h-12"
                            disabled={false}
                            onMouseEnter={() => api?.plugins().autoScroll?.stop()}
                            onMouseLeave={() => api?.plugins().autoScroll?.play()}
                            onClick={() => {
                                if (api) {
                                    api.scrollNext();
                                }
                            }}
                        />
                    </Carousel>
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors z-[101]"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Zamknij"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full h-full max-w-6xl max-h-[90vh]"
                        >
                            <Image
                                src={selectedImage}
                                alt="Powiększone zdjęcie"
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
