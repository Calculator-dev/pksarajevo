export type TrainerProfile = {
  slug: string;
  name: string;
  role: string;
  shortDescription: string;
  heroImage: string;
  heroImagePosition?: string;
  intro: string;
  highlights: string[];
  sections: Array<{
    title: string;
    items: string[];
  }>;
};

export const trainerProfiles: TrainerProfile[] = [
  {
    slug: "bakir-hadziahmetovic",
    name: "Bakir Hadžiahmetović",
    role: "Glavni trener",
    shortDescription:
      "Certificirani trener sa fokusom na razvoj tehnike, takmičarski rad i vođenje trenažnog procesa kluba.",
    heroImage: "/images/gallery-16.jpg",
    heroImagePosition: "object-center md:object-[center_30%]",
    intro:
      "Bakir Hadžiahmetović vodi trenažni proces takmičarskih plivača i razvoj kluba kroz planiranje treninga, rad na tehnici i organizaciju sportskog segmenta. U radu kombinuje stručno trenersko znanje, iskustvo u vođenju ekipe i odgovornost za cjelokupan sportski napredak plivača.",
    highlights: [
      "Certified FINA L1 Coach od maja 2023.",
      "Planiranje treninga za takmičarske plivače",
      "Vođenje sportskog segmenta plivačkog kluba",
    ],
    sections: [
      {
        title: "Relevantno iskustvo",
        items: [
          "Aktivno radi kao plivački trener u Sarajevu od 13. aprila 2021.",
          "Kao glavni trener planira i vodi treninge za takmičarske plivače.",
          "Ima iskustvo u vođenju grupe od 15 takmičarskih plivača i organizaciji sportskog rada kluba.",
          "Kroz ulogu sportskog direktora razvija timski rad, strukturu treninga i svakodnevnu koordinaciju klupskih aktivnosti.",
        ],
      },
      {
        title: "Edukacija i certifikati",
        items: [
          "Certified FINA L1 Coach, World Aquatics, Ljubljana, maj 2023.",
          "Bachelor Degree in International Relations and European Studies, International Burch University.",
          "Znanje engleskog jezika na C1 nivou, korisno za praćenje međunarodnih edukacija i savremenih trenerskih materijala.",
        ],
      },
      {
        title: "Šta donosi klubu",
        items: [
          "Sistematičan pristup planiranju treninga i razvoju takmičarskih grupa.",
          "Odgovornost u radu sa djecom i sportistima kroz jasnu organizaciju procesa.",
          "Fokus na tehniku, disciplinu, kontinuitet rada i dugoročni napredak plivača.",
        ],
      },
    ],
  },
  {
    slug: "amna-dracic",
    name: "Amna Dračić",
    role: "Trener",
    shortDescription:
      "Posvećena radu sa djecom, početnicima i individualnom pristupu u vodi.",
    heroImage: "/images/gallery-18.jpg",
    intro:
      "Amna Dračić u radu sa plivačima stavlja naglasak na sigurnost u vodi, postepeni razvoj samopouzdanja i individualni pristup svakom djetetu. Posebno je usmjerena na početne faze učenja i stvaranje pozitivnog odnosa prema plivanju i timskom radu.",
    highlights: [
      "Rad sa djecom i početnicima",
      "Individualni pristup svakom plivaču",
      "Fokus na sigurnost i osnovnu tehniku",
    ],
    sections: [
      {
        title: "Fokus rada",
        items: [
          "Rad sa početnicima i djecom koja tek ulaze u svijet plivanja.",
          "Razvoj osnovnih plivačkih navika, sigurnosti u vodi i samopouzdanja.",
          "Postepen i pažljiv pristup prilagođen uzrastu i nivou svakog plivača.",
        ],
      },
      {
        title: "Pristup treningu",
        items: [
          "Naglasak na strpljenju, komunikaciji i motivaciji djece.",
          "Podsticanje timskog duha i pozitivne atmosfere na treningu.",
          "Rad na pravilnim osnovama koje plivačima olakšavaju napredak u više nivoe programa.",
        ],
      },
      {
        title: "Uloga u klubu",
        items: [
          "Važna podrška školi plivanja i razvoju najmlađih članova kluba.",
          "Pomaže djeci da steknu rutinu, disciplinu i ljubav prema plivanju.",
          "Doprinosi stabilnom prelazu iz početnih grupa ka naprednijem radu.",
        ],
      },
    ],
  },
  {
    slug: "ines-kuric",
    name: "Ines Kurić",
    role: "Trener",
    shortDescription:
      "Radi na usavršavanju stilova, radu sa djecom i pripremi plivača za naredni nivo.",
    heroImage: "/images/gallery-03.jpg",
    intro:
      "Ines Kurić kombinuje iskustvo rada sa djecom, licencu plivačkog sudije i razvijene komunikacijske vještine kroz različita radna i volonterska okruženja. U klubu doprinosi tehničkom usavršavanju plivača, disciplini rada i kvalitetnom odnosu prema timu i svakom djetetu pojedinačno.",
    highlights: [
      "Trener u plivačkom klubu sa iskustvom rada sa djecom",
      "Licencirani plivački sudija",
      "Volontersko iskustvo i poznavanje prve pomoći",
    ],
    sections: [
      {
        title: "Relevantno iskustvo",
        items: [
          "Radi kao trener u plivačkom klubu sa fokusom na rad sa djecom.",
          "Licencirani je plivački sudija, što dodatno doprinosi razumijevanju takmičarskih pravila i sportskog procesa.",
          "Kroz promocije i rad sa ljudima razvila je komunikaciju, organizaciju i timski pristup u svakodnevnom radu.",
        ],
      },
      {
        title: "Timski rad i odgovornost",
        items: [
          "Volontiranje u Crvenom križu donijelo joj je iskustvo pomoći drugima i poznavanje prve pomoći.",
          "U radu sa djecom njeguje strpljenje, odgovornost i jasnu komunikaciju.",
          "Doprinosi pozitivnoj atmosferi, timskom duhu i sigurnosti na treningu.",
        ],
      },
      {
        title: "Obrazovanje i dodatne vještine",
        items: [
          "Završena srednja medicinska škola, smjer farmaceutsko-kozmetički tehničar.",
          "Trenutno studentica Fakulteta za kriminalistiku, kriminologiju i sigurnosne studije.",
          "Poznavanje engleskog i španskog jezika.",
        ],
      },
    ],
  },
];

export function getTrainerBySlug(slug: string) {
  return trainerProfiles.find((trainer) => trainer.slug === slug);
}
