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
      "Bivša državna prvakinja sa više od 10 godina plivačkog iskustva i tri godine rada kao trener sa djecom svih uzrasta.",
    heroImage: "/images/gallery-18.jpg",
    intro:
      "Amna Dračić donosi spoj dugogodišnjeg takmičarskog iskustva i praktičnog rada kao trener. Kroz više od 10 godina aktivnog bavljenja plivanjem, kao i tri godine rada sa djecom svih uzrasta i nivoa znanja, razvila je snažan osjećaj za tehniku, individualni pristup i postepeni razvoj plivača od škole plivanja do prvih takmičenja.",
    highlights: [
      "Više od 10 godina plivačkog iskustva",
      "3 godine rada kao trener",
      "Iskustvo od škole plivanja do prvih takmičenja",
    ],
    sections: [
      {
        title: "Obrazovanje i sportska osnova",
        items: [
          "Završila Gimnaziju 'Meša Selimović' u Tuzli, matematičko-informatički smjer.",
          "Trenutno studentica Ekonomskog fakulteta Univerziteta u Sarajevu.",
          "Gimnastikom se bavila od četvrte godine, a zatim se plivanju posvetila više od 10 godina.",
          "Tokom takmičarske karijere bila državna prvakinja i osvajala međunarodne medalje i pehare.",
        ],
      },
      {
        title: "Trenersko iskustvo",
        items: [
          "Kao trener radi već tri godine sa djecom svih uzrasta i nivoa znanja.",
          "Ima iskustvo u radu sa mini grupama i školom plivanja.",
          "Radila je sa predtakmičarskim grupama na usavršavanju tehnike i prelazu ka ozbiljnijem radu.",
          "Pratila je plivače koji tek ulaze u takmičenja i na samim takmičarskim nastupima.",
          "Posjeduje iskustvo i u vođenju administrativnih poslova unutar kluba.",
        ],
      },
      {
        title: "Pristup radu i dodatne vještine",
        items: [
          "Odlično poznaje sve tehnike plivanja i veliku pažnju posvećuje pravilnoj izvedbi i detaljima.",
          "Radi sa djecom svih uzrasta uz individualni pristup, posvećenost i ljubav prema radu sa djecom.",
          "Ima iskustvo u radu sa djecom sa poteškoćama u razvoju i volontiranju na inkluzivnim takmičenjima.",
          "Govori engleski jezik i posjeduje osnovno znanje njemačkog jezika.",
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
