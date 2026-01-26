import { Facebook, Instagram, Palmtree } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group h-fit w-fit">
                            <Palmtree className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold font-serif tracking-tight">Pod Kasztanem</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Spokojny wypoczynek blisko plaży. Idealne miejsce na rodzinne wakacje w Mrzeżynie.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Na skróty</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">O nas</Link></li>
                            <li><Link href="#gallery" className="hover:text-primary transition-colors">Galeria</Link></li>
                            <li><Link href="#offer" className="hover:text-primary transition-colors">Oferta</Link></li>
                            <li><Link href="#location" className="hover:text-primary transition-colors">Lokalizacja</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Social Media</h4>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Pod Kasztanem Mrzeżyno. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}
