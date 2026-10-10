"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Prototyp",
  "Krótka seria",
  "Element konstrukcyjny",
  "Obudowa / osłona",
  "Wyposażenie warsztatowe",
  "Inne",
] as const;

export function QuoteForm({ className }: { className?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [projectType, setProjectType] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    // Local mock submission — wire to API / email provider when available.
    await new Promise((resolve) => setTimeout(resolve, 900));

    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("email") || !data.get("description")) {
      setState("error");
      return;
    }

    setState("success");
    form.reset();
    setProjectType("");
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "rounded-3xl border border-steel-line/70 bg-white/90 p-8 shadow-[0_20px_50px_-36px_rgb(16_19_23_/_0.35)] md:p-10",
          className
        )}
        role="status"
      >
        <p className="tech-label text-steel-spark">Wysłano</p>
        <h3 className="font-display mt-3 text-2xl font-semibold text-steel-ink">
          Dziękujemy za zgłoszenie.
        </h3>
        <p className="mt-3 max-w-md text-steel-mute">
          Otrzymaliśmy opis projektu. Skontaktujemy się w sprawie kolejnych
          kroków i ewentualnych pytań technicznych.
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => setState("idle")}
        >
          Wyślij kolejne zgłoszenie
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-6 rounded-3xl border border-steel-line/70 bg-white/90 p-6 shadow-[0_20px_50px_-36px_rgb(16_19_23_/_0.35)] md:p-10",
        className
      )}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Imię i nazwisko / firma</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="organization"
            placeholder="np. Jan Kowalski / Acme Sp. z o.o."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jan@firma.pl"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+48 …"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">Rodzaj projektu</Label>
          <Select
            value={projectType}
            onValueChange={(value) => setProjectType(value ?? "")}
          >
            <SelectTrigger id="projectType" className="w-full">
              <SelectValue placeholder="Wybierz kategorię" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="projectType" value={projectType} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Opis projektu</Label>
        <Textarea
          id="description"
          name="description"
          required
          rows={6}
          placeholder="Materiał, wymiary, ilość, termin, załączniki (link) lub opis funkcji…"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="files">Link do dokumentacji (opcjonalnie)</Label>
        <Input
          id="files"
          name="files"
          type="url"
          placeholder="https://… (Drive, Dropbox, WeTransfer)"
        />
        <p className="text-xs text-steel-mute">
          Na tym etapie formularz przyjmuje link. Bezpośrednie przesyłanie
          plików można podłączyć w kolejnej iteracji.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" name="consent" required />
        <Label htmlFor="consent" className="text-sm leading-relaxed font-normal">
          Wyrażam zgodę na kontakt w sprawie wyceny i przetwarzanie danych
          wyłącznie w tym celu.
        </Label>
      </div>

      {state === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Uzupełnij wymagane pola i spróbuj ponownie.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        className="min-w-44 rounded-xl bg-steel-spark text-steel-spark-fg hover:bg-steel-spark/90"
      >
        {state === "submitting" ? "Wysyłanie…" : "Wyślij zapytanie"}
      </Button>
    </form>
  );
}
