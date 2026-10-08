export const clubStats = [
  { value: "09", label: "Godina rada" },
  { value: "1000+", label: "Plivača kroz PKS" },
  { value: "15", label: "Državnih rekorda", accent: true },
];

export const clubValues = [
  {
    title: "Individualni pristup",
    text: "Svaki plivač dobiva program prilagođen svojim sposobnostima i ciljevima.",
  },
  {
    title: "Međunarodne licence",
    text: "Treneri s višegodišnjim iskustvom u radu s plivačima svih uzrasta.",
  },
  {
    title: "Dokazani rezultati",
    text: "Medalje i rekordi na domaćim i međunarodnim takmičenjima.",
  },
  {
    title: "Ljubav prema sportu",
    text: "Plivanje nije samo sport, već način života koji donosi zdravlje i radost.",
  },
];

export type Program = {
  lane: number;
  meta: string;
  name: string;
  description: string;
  schedule: Array<{ days: string; time: string }>;
  price: string;
  unit: string;
  cta: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    lane: 1,
    meta: "Početnici · 3,5–14 godina",
    name: "Škola plivanja",
    description:
      "Sigurno savladavanje osnova uz individualni pristup. 16 termina mjesečno.",
    schedule: [
      { days: "Pon · Sri · Pet", time: "17:30–18:30" },
      { days: "Subota", time: "09:00–10:00" },
    ],
    price: "70",
    unit: "KM / mj.",
    cta: "Prijavi se",
  },
  {
    lane: 2,
    meta: "Predtakmičari · 16 termina po 2 sata",
    name: "Napredna škola",
    description:
      "Usavršavanje kraula, prsnog, leđnog i delfin stila i priprema za takmičarski nivo.",
    schedule: [{ days: "Pon · Uto · Sri · Pet", time: "18:30–20:30" }],
    price: "120",
    unit: "KM / mj.",
    cta: "Prijavi se",
  },
  {
    lane: 3,
    meta: "Takmičari · 32 termina po 2 sata",
    name: "Takmičarski program",
    description:
      "Za plivače koji su prošli predtakmičarski program — domaća i međunarodna takmičenja.",
    schedule: [
      { days: "Pon · Sri · Pet", time: "07:00–08:30" },
      { days: "Pon · Uto · Sri · Pet", time: "18:30–20:30" },
      { days: "Subota", time: "09:00–11:00" },
      { days: "Nedjelja", time: "07:00–09:00" },
    ],
    price: "150",
    unit: "KM / mj.",
    cta: "Prijavi se",
    featured: true,
  },
  {
    lane: 4,
    meta: "1 na 1 s trenerom",
    name: "Individualni treninzi",
    description: "Fokus na specifične ciljeve. Ulaznica za bazen plaća se dodatno.",
    schedule: [{ days: "Termin", time: "Po dogovoru" }],
    price: "30",
    unit: "KM / sat",
    cta: "Dogovori termin",
  },
];

export const pool = {
  name: "Hotel Hollywood",
  address: "Dr. Mustafe Pintola 23",
  mapUrl: "https://maps.google.com/?q=Hotel+Hollywood+Sarajevo",
};

export const contactInfo = {
  phone: "+387 62 831 421",
  phoneHref: "tel:+38762831421",
  email: "infopksarajevo@gmail.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
};

export type ResultRow = {
  place: "1" | "2" | "3" | "LR" | "—";
  swimmer: string;
  event: string;
  time?: string;
  note?: string;
  highlight?: boolean;
};

export type Meet = {
  name: string;
  date: string;
  field: string;
  source: string;
  href: string;
  rows: ResultRow[];
};

export const meets: Meet[] = [
  {
    name: "Plivački (re)START 2026",
    date: "04.10.2026",
    field: "670 takmičara",
    source: "TVSA",
    href: "https://tvsa.ba/esma-dizic-11-iz-sarajeva-na-50-metara-delfin-stigla-na-sam-evropski-vrh/",
    rows: [
      { place: "1", swimmer: "Esma Dizić", event: "50 m delfin", time: "30.76", note: "Vrh Evrope, 2015. godište", highlight: true },
      { place: "—", swimmer: "Esma Dizić", event: "50 m prsno", time: "37.95" },
      { place: "LR", swimmer: "Uma Mujan", event: "50 m delfin", time: "32.73", note: "Top 7 Evrope u uzrastu" },
      { place: "LR", swimmer: "Uma Mujan", event: "50 m slobodno", time: "31.61", note: "Lični rekord" },
      { place: "LR", swimmer: "Uma Mujan", event: "50 m leđno", time: "36.97", note: "Lični rekord" },
    ],
  },
  {
    name: "Jesenji kup Subotice 2026",
    date: "27.09.2026",
    field: "~370 takmičara",
    source: "Federalna",
    href: "https://federalna.ba/odlicni-rezultati-plivackog-kluba-sarajevo-na-takmicenju-u-subotici-eown1",
    rows: [
      { place: "1", swimmer: "Esma Dizić", event: "2 discipline", note: "2× zlato · najuspješnija, 2015." },
      { place: "1", swimmer: "Uma Mujan", event: "100 m mješovito", note: "Zlato" },
      { place: "1", swimmer: "Faruk Avdić", event: "100 m leđno", note: "Zlato" },
      { place: "3", swimmer: "Uma Mujan", event: "100 m delfin", note: "Bronza" },
      { place: "3", swimmer: "Vedad Ligata", event: "100 m mješovito", note: "Bronza" },
      { place: "—", swimmer: "Vedad Ligata", event: "100 m slobodno", time: "1:02.99" },
    ],
  },
];

export const newsArticles = [
  {
    date: "04.10.2026",
    source: "TVSA",
    href: "https://tvsa.ba/esma-dizic-11-iz-sarajeva-na-50-metara-delfin-stigla-na-sam-evropski-vrh/",
    title: "Esma Dizić na samom evropskom vrhu na 50 m delfin",
    summary:
      "Pobjeda na mitingu „Plivački (re)START 2026“ sa 30.76 — vrijeme koje je trenutno svrstava na vrh Evrope u 2015. godištu. Uma Mujan oborila je četiri lična rekorda.",
    image: "/images/gallery-2026-07.jpg",
    imageAlt: "Plivačica PK Sarajevo u crvenoj kapi",
    cta: "Pročitaj na TVSA",
  },
  {
    date: "27.09.2026",
    source: "Federalna",
    href: "https://federalna.ba/odlicni-rezultati-plivackog-kluba-sarajevo-na-takmicenju-u-subotici-eown1",
    title: "Šest medalja na Jesenjem kupu Subotice",
    summary:
      "Pet plivača PKS-a, šest medalja i niz ličnih rekorda. Esma je proglašena najuspješnijom takmičarkom 2015. godišta.",
    image: "/images/gallery-2026-06.jpg",
    imageAlt: "Plivačica PK Sarajevo pliva leđno",
    cta: "Pročitaj na Federalnoj",
  },
];
