import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { mockPhones } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />

      <HeroSection />

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">أحدث الهواتف المميزة</h2>
          <Button variant="link" className="gap-2" asChild>
            <Link href="/search">
              عرض الكل <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockPhones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </div>
      </section>

      {/* Value Proposition / Features Section could go here */}

      <footer className="py-12 bg-muted/30 border-t mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 JawalCompare. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}
