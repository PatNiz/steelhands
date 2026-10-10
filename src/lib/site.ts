export const siteConfig = {
  name: "SteelHands",
  tagline: "Projektujemy. Produkujemy. Dostarczamy.",
  description:
    "Masz rysunek, szkic albo sam pomysł? Przekładamy go na metal — od prototypu i krótkiej serii po wyrób, który da się wziąć do ręki i zamontować.",
  url: "https://steelhands.pl",
  locale: "pl_PL",
  email: "kontakt@steelhands.pl",
  phone: "+48 000 000 000",
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/produkty", label: "Produkty" },
  { href: "/produkcja-na-zamowienie", label: "Produkcja na zamówienie" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export const quoteCta = {
  href: "/zamow-wycenie",
  label: "Zamów wycenę",
} as const;

export const processSteps = [
  {
    id: "01",
    title: "Pomysł lub dokumentacja",
    description:
      "Wystarczy szkic na kartce, plik STEP albo zdjęcie tego, co chcesz uzyskać. Ustalamy materiał, ilości i to, na czym naprawdę Ci zależy.",
  },
  {
    id: "02",
    title: "Projekt i przygotowanie",
    description:
      "Dopinamy dokumentację tak, żeby dało się to wykonać w warsztacie — bez niespodzianek na hali i bez zgadywania wymiarów.",
  },
  {
    id: "03",
    title: "Organizacja produkcji",
    description:
      "Dobieramy proces: laser, gięcie, CNC, spawanie. Koordynujemy partnerów, terminy i jakość — Ty nie skaczesz między zakładami.",
  },
  {
    id: "04",
    title: "Wykończenie i dostawa",
    description:
      "Malowanie, montaż, pakowanie i dostawa. Na końcu masz gotowy element lub komplet, a nie półprodukt do samodzielnego dogryzania.",
  },
] as const;

export const capabilities = [
  {
    title: "Cięcie laserowe",
    description:
      "Czyste, powtarzalne wykroje z blachy — stal, nierdzewka, aluminium. Od jednej sztuki po krótką serię.",
  },
  {
    title: "Gięcie blach",
    description:
      "Obudowy, wsporniki, kątowniki i detale, które muszą trafić w wymiar i dobrze się składać przy montażu.",
  },
  {
    title: "Obróbka CNC",
    description:
      "Części, które wymagają dokładności: uchwyty, tuleje, elementy maszynowe frezowane lub toczone.",
  },
  {
    title: "Spawanie",
    description:
      "Złącza i konstrukcje przygotowane pod obciążenia, montaż i dalsze wykończenie — bez „na oko”.",
  },
  {
    title: "Malowanie proszkowe",
    description:
      "Powłoka, która wygląda i trzyma się w warsztacie. Dobieramy kolor i przygotowanie powierzchni pod realne warunki.",
  },
  {
    title: "Montaż",
    description:
      "Składamy podzespoły w gotowy produkt. Mniej roboty po Twojej stronie, mniej ryzyka przy odbiorze.",
  },
] as const;

export const productCategories = [
  {
    slug: "wyposazenie-warsztatowe",
    title: "Wyposażenie warsztatowe",
    description:
      "Stoły, regały i uchwyty zaprojektowane pod ciężką, codzienną pracę — nie pod katalogową fotografię.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "akcesoria-garazowe",
    title: "Akcesoria garażowe",
    description:
      "Porządek i nośność w garażu: rozwiązania, które da się zamontować i które nie uginają się pod narzędziem.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "elementy-konstrukcyjne",
    title: "Elementy konstrukcyjne",
    description:
      "Ramy, wsporniki i detale nośne dopasowane do Twojego montażu, nie do uniwersalnego „na półkę”.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "obudowy-i-oslony",
    title: "Obudowy i osłony",
    description:
      "Panele, osłony i obudowy maszyn — z otworami, tolerancjami i wykończeniem pod konkretne urządzenie.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const pageHeroImages = {
  produkty:
    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2200&q=80",
  produkcja:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2200&q=80",
  realizacje:
    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2200&q=80",
  firmy:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=80",
  oNas:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=80",
  wycena:
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2200&q=80",
  kontakt:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=80",
} as const;

export const projects = [
  {
    slug: "stol-warsztatowy",
    title: "Stół warsztatowy modułowy",
    category: "Wyposażenie warsztatowe",
    summary:
      "Stalowa konstrukcja z półkami i blatem pod intensywną pracę — sztywna, serwisowalna, bez zbędnych ozdobników.",
    process: ["Projekt", "Cięcie laserowe", "Gięcie", "Spawanie", "Malowanie"],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "obudowa-maszyny",
    title: "Obudowa urządzenia przemysłowego",
    category: "Obudowy i osłony",
    summary:
      "Zestaw paneli z blachy nierdzewnej: otwory serwisowe, powtarzalny montaż, spójne pasowanie między elementami.",
    process: ["Dokumentacja", "Cięcie", "Gięcie", "Montaż"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "uchwyty-montazowe",
    title: "Uchwyty montażowe CNC",
    category: "Elementy konstrukcyjne",
    summary:
      "Seria uchwytów frezowanych pod precyzyjne pozycjonowanie — tam, gdzie milimetr ma znaczenie na linii.",
    process: ["Model 3D", "Obróbka CNC", "Kontrola", "Dostawa"],
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "regal-garazowy",
    title: "Regał garażowy ciężki",
    category: "Akcesoria garażowe",
    summary:
      "Regał o podwyższonej nośności: prosty montaż, stabilna geometria, wykończenie pod codzienne użytkowanie.",
    process: ["Szkic", "Projekt", "Produkcja", "Wykończenie"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const faqItems = [
  {
    question: "Czy SteelHands ma własną halę i park maszyn?",
    answer:
      "Nie budujemy marki na liście maszyn. Koordynujemy cały proces u sprawdzonych partnerów produkcyjnych — od projektu po dostawę. Dla Ciebie oznacza to jednego rozmówcę i jeden punkt odpowiedzialności, zamiast kilku zakładów do ogarnięcia.",
  },
  {
    question: "Z jakich materiałów najczęściej pracujecie?",
    answer:
      "Najczęściej: stal konstrukcyjna, stal nierdzewna i aluminium. Materiał dobieramy do obciążenia, środowiska i budżetu — pomagamy w tej decyzji już przy pierwszym omówieniu projektu.",
  },
  {
    question: "Czy mogę zamówić tylko jedną sztukę albo prototyp?",
    answer:
      "Tak. Robimy pojedyncze prototypy, krótkie serie i większe partie. Skala zależy od Twojej dokumentacji i celu — nie narzucamy minimalnego „pakietu fabrycznego”.",
  },
  {
    question: "Jak wygląda wycena i ile to trwa?",
    answer:
      "Wypełniasz formularz, dołączasz plik albo opis. Sprawdzamy wykonalność, proponujemy proces i wracamy z konkretną ofertą. Na tym etapie nic Cię nie zobowiązuje — najpierw jasne warunki, potem decyzja.",
  },
] as const;
