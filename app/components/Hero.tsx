"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/ag_podkasztanem/images/IMG-20240512-193547.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 drop-shadow-lg leading-tight">
                        Ośrodek wypoczynkowy <br className="hidden md:block" /> w Mrzeżynie
                        <span className="block text-2xl md:text-3xl mt-4 font-sans font-light opacity-90 italic">
                            &quot;Wakacje tak jak kiedyś...&quot;
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-gray-100"
                >
                    Pokoje, domki kempingowe i pole namiotowe • 100m od morza
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
                        <Link href="#offer">Zobacz ofertę</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
