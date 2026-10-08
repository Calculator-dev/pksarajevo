import type { Metadata } from "next";
import { AthleteProfile } from "@/components/athlete-profile";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Esma Dizić — PK Sarajevo",
  description:
    "Esma Dizić, takmičarka Plivačkog kluba Sarajevo: 30.76 na 50 m delfin, vrh Evrope u 2015. godištu, 15 oborenih rekorda.",
};

export default function EsmaDizicPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AthleteProfile />
      <Footer />
    </main>
  );
}
