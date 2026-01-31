import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, ShoppingBag, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4 mt-8">
                            <Link href="/" className="font-semibold text-lg">الرئيسية</Link>
                            <Link href="/search" className="font-semibold text-lg">تصفح الهواتف</Link>
                            <Link href="/compare" className="font-semibold text-lg">مقارنة</Link>
                            <Link href="/blog" className="font-semibold text-lg">الأخبار</Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary text-primary-foreground p-1 rounded-lg">
                            <ShoppingBag className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-xl hidden sm:inline-block">JawalCompare</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 mx-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">الرئيسية</Link>
                    <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors">تصفح الهواتف</Link>
                    <Link href="/compare" className="text-sm font-medium hover:text-primary transition-colors">مقارنة</Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">الأخبار</Link>
                </nav>

                {/* Search & Actions */}
                <div className="flex items-center gap-2">
                    <div className="relative hidden lg:block w-64">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="ابحث عن جوال..."
                            className="pr-9 bg-muted/50 focus:bg-background transition-colors border-none focus:ring-1"
                        />
                    </div>

                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5 lg:hidden" />
                        <span className="sr-only">بحث</span>
                    </Button>

                    <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                        <User className="h-4 w-4" />
                        <span>دخول</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
