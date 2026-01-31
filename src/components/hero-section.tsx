import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                    اعثر على <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">أفضل سعر</span><br />
                    لهاتفك الجديد
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    قارن بين آلاف الهواتف من مختلف المتاجر، اطلع على المواصفات الكاملة،
                    واشترِ بأذكى سعر في السوق.
                </p>

                <div className="max-w-xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative flex items-center bg-background rounded-xl border shadow-xl p-2">
                        <Search className="h-6 w-6 text-muted-foreground mr-3 ml-2" />
                        <Input
                            type="text"
                            placeholder="اكتب اسم الهاتف (مثلاً: iPhone 15 Pro...)"
                            className="flex-1 border-none shadow-none focus-visible:ring-0 text-lg py-6"
                        />
                        <Button size="lg" className="rounded-lg gap-2">
                            بحث
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        ✅ مقارنة المواصفات
                    </span>
                    <span className="flex items-center gap-1">
                        ✅ تحديث يومي للأسعار
                    </span>
                    <span className="flex items-center gap-1">
                        ✅ متاجر موثوقة
                    </span>
                </div>
            </div>
        </section>
    );
}
