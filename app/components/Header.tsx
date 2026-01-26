"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Palmtree } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "O nas", href: "#about" },
    { name: "Galeria", href: "#gallery" },
    { name: "Oferta", href: "#offer" },
    { name: "Lokalizacja", href: "#location" },
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
                    ? "bg-white/80 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Palmtree className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    <span className="text-xl font-bold font-serif tracking-tight text-foreground">
                        Pod Kasztanem
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
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
                                    key={item.href}
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
