"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Imię musi mieć co najmniej 2 znaki.",
    }),
    email: z.string().email({
        message: "Nieprawidłowy adres email.",
    }),
    phone: z.string().min(9, {
        message: "Numer telefonu musi mieć co najmniej 9 znaków.",
    }),
    arrivalDate: z.string().min(1, {
        message: "Data przyjazdu jest wymagana.",
    }),
    message: z.string().min(10, {
        message: "Wiadomość musi mieć co najmniej 10 znaków.",
    }),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            arrivalDate: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // For visual feedback only since Netlify handles POST submission via HTML attributes
        // Or we can use fetch to post to Netlify functions equivalent
        console.log(values);
        alert("Dziękujemy za wiadomość! Wkrótce się skontaktujemy.");
    }

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Kontakt</h2>
                    <p className="text-muted-foreground text-lg">
                        Masz pytania? Chcesz zarezerwować? Napisz do nas!
                    </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg border">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            {/* Netlify Hidden Fields */}
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imię i Nazwisko</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jan Kowalski" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="jan@example.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefon</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+48 000 000 000" type="tel" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="arrivalDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data planowanego przyjazdu</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wiadomość</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Dzień dobry, czy macie państwo wolny pokój w terminie..."
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full text-lg py-6">
                                Wyślij wiadomość
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="mt-12 text-center text-muted-foreground">
                    <p className="font-bold text-lg">Pod Kasztanem</p>
                    <p>ul. Marynarska 5, 72-330 Mrzeżyno</p>
                    <p className="mt-2">Tel: <span className="text-foreground font-semibold">+48 694 727 655</span></p>
                    <p>Email: <a href="mailto:kontakt@podkasztanem.pl" className="text-primary hover:underline">kontakt@podkasztanem.pl</a></p>
                </div>
            </div>
        </section>
    );
}
