import { mockPhones } from "@/lib/mock-data";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PriceHistoryChart } from "@/components/price-chart";
import { ArrowLeft, Check, Share2, Heart, ExternalLink, Store } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const phone = mockPhones.find((p) => p.id === id);

    if (!phone) {
        notFound();
    }

    // Mock store prices for this phone
    const stores = [
        { name: "Jumia DZ", price: phone.price + 5000, logo: "J", url: "#", type: "Online" },
        { name: "OuedKniss (Pro)", price: phone.price, logo: "O", url: "#", type: "Marketplace" },
        { name: "Uno Hypermarket", price: phone.price + 12000, logo: "U", url: "#", type: "Retail" },
        { name: "Local Store Alger", price: phone.price - 2000, logo: "L", url: "#", type: "Local" },
    ].sort((a, b) => a.price - b.price);

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            {/* Breadcrumb / Header */}
            <div className="bg-muted/30 border-b py-4">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">الرئيسية</Link>
                    <span>/</span>
                    <Link href="/search" className="hover:text-primary">{phone.brand}</Link>
                    <span>/</span>
                    <span className="text-foreground font-medium">{phone.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Image & Key Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative aspect-[4/5] bg-white rounded-2xl border flex items-center justify-center p-8 shadow-sm">
                            {phone.isNew && <Badge className="absolute top-4 right-4">جديد</Badge>}
                            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold">
                                {phone.name} Image
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-muted rounded-lg border cursor-pointer hover:border-primary transition-colors"></div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details & Prices */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl font-black mb-2">{phone.name}</h1>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-500" /> متوفر في 4 متاجر
                                        </span>
                                        <span>|</span>
                                        <span>إصدار: 2024</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Heart className="w-5 h-5 text-muted-foreground" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Share2 className="w-5 h-5 text-muted-foreground" />
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-6 flex items-end gap-3">
                                <div className="flex flex-col">
                                    <span className="text-sm text-muted-foreground font-medium">أفضل سعر</span>
                                    <span className="text-4xl font-extrabold text-primary">{stores[0].price.toLocaleString()} د.ج</span>
                                </div>
                                {phone.originalPrice && (
                                    <span className="text-lg text-muted-foreground line-through mb-1">
                                        {phone.originalPrice.toLocaleString()}
                                    </span>
                                )}
                                <Badge variant="secondary" className="mb-2 text-green-600 bg-green-100 hover:bg-green-100">
                                    توفير {(phone.originalPrice || 0) - stores[0].price} د.ج
                                </Badge>
                            </div>
                        </div>

                        <Separator />

                        {/* Compare Prices Section */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Store className="w-5 h-5" />
                                مقارنة الأسعار
                            </h2>
                            <div className="border rounded-xl overflow-hidden bg-card">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/50">
                                            <TableHead className="text-right">المتجر</TableHead>
                                            <TableHead className="text-right">الحالة</TableHead>
                                            <TableHead className="text-right">السعر</TableHead>
                                            <TableHead className="text-right"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {stores.map((store, idx) => (
                                            <TableRow key={idx}>
                                                <TableCell className="font-medium">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                                                            {store.logo}
                                                        </div>
                                                        {store.name}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className="font-normal">
                                                        {store.type}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="font-bold text-lg">
                                                    {store.price.toLocaleString()}
                                                </TableCell>
                                                <TableCell>
                                                    <Button size="sm" className="w-full gap-2" asChild>
                                                        <a href={store.url} target="_blank" rel="noreferrer">
                                                            شراء <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        {/* Tabs: Specs & History */}
                        <Tabs defaultValue="specs" className="w-full">
                            <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-lg">
                                <TabsTrigger value="specs" className="flex-1 py-2 text-base">المواصفات التقنية</TabsTrigger>
                                <TabsTrigger value="history" className="flex-1 py-2 text-base">تاريخ السعر</TabsTrigger>
                                <TabsTrigger value="reviews" className="flex-1 py-2 text-base">المراجعات</TabsTrigger>
                            </TabsList>

                            <TabsContent value="specs" className="mt-6">
                                <div className="bg-card border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    {Object.entries(phone.specs).map(([key, value]) => (
                                        <div key={key} className="flex justify-between border-b pb-2 last:border-0">
                                            <span className="font-medium text-muted-foreground capitalize">{key}</span>
                                            <span className="font-semibold dir-ltr text-right">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="history" className="mt-6">
                                <PriceHistoryChart />
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-6">
                                <div className="bg-card border rounded-xl p-8 text-center text-muted-foreground">
                                    قريباً: مراجعات المستخدمين والخبراء
                                </div>
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
            </div>
        </main>
    );
}
