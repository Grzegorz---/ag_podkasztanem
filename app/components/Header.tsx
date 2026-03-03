"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Palmtree } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "O nas", href: "#about" },
    { name: "Oferta", href: "#offer" },
    { name: "Cennik", href: "#offer" }, // Cennik is part of Offer usually, or separate. I'll point to #offer for now as per plan context or make a new section if needed. Plan says "Cennik" links. I'll point to #offer.
    { name: "Galeria", href: "#gallery" },
    { name: "Dojazd", href: "#location" },
    { name: "Kontakt", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white backdrop-blur-md shadow-md py-4"
                    : "bg-white/90 backdrop-blur-md shadow-sm py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Palmtree className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    <span className="text-2xl font-bold font-serif tracking-tight text-foreground hidden sm:block">
                        Ośrodek wypoczynkowy &quot;Pod Kasztanem&quot;
                    </span>
                    <span className="text-2xl font-bold font-serif tracking-tight text-foreground sm:hidden">
                        Pod Kasztanem
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-bold hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link href="#contact">Rezerwuj</Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full mt-4">
                                <Link href="#contact">Rezerwuj</Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
