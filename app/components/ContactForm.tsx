"use client";

import { useState } from "react";
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

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

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

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

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

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSubmitStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Nowa wiadomość z podkasztanem.pl od ${values.name}`,
                    from_name: "Pod Kasztanem — Formularz kontaktowy",
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    "Data przyjazdu": values.arrivalDate,
                    message: values.message,
                    // Honeypot field — bots fill this, real users don't
                    botcheck: "",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                form.reset();
            } else {
                setSubmitStatus("error");
                setErrorMessage(data.message || "Wystąpił błąd. Spróbuj ponownie.");
            }
        } catch {
            setSubmitStatus("error");
            setErrorMessage("Nie udało się wysłać wiadomości. Sprawdź połączenie z internetem.");
        }
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
                    {submitStatus === "success" ? (
                        <div className="text-center py-12 space-y-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif font-bold">Dziękujemy!</h3>
                            <p className="text-muted-foreground">
                                Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setSubmitStatus("idle")}
                                className="mt-4"
                            >
                                Wyślij kolejną wiadomość
                            </Button>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {submitStatus === "error" && (
                                    <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                        <p className="text-sm text-red-700 dark:text-red-400">
                                            {errorMessage}
                                        </p>
                                    </div>
                                )}

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

                                <Button
                                    type="submit"
                                    className="w-full text-lg py-6"
                                    disabled={submitStatus === "loading"}
                                >
                                    {submitStatus === "loading" ? (
                                        <span className="inline-flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Wysyłanie...
                                        </span>
                                    ) : (
                                        "Wyślij wiadomość"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    )}
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
