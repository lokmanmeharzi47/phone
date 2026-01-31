import Link from "next/link";
import { Phone } from "@/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Smartphone, Battery, MemoryStick } from "lucide-react";

interface ProductCardProps {
    phone: Phone;
}

export function ProductCard({ phone }: ProductCardProps) {
    return (
        <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
            <CardHeader className="p-0 relative aspect-[4/5] bg-muted/20 flex items-center justify-center overflow-hidden">
                {phone.isNew && (
                    <Badge className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                        جديد
                    </Badge>
                )}
                {phone.originalPrice && (
                    <Badge variant="destructive" className="absolute top-3 left-3 z-10">
                        تخفيض
                    </Badge>
                )}
                <div className="w-48 h-auto transition-transform duration-500 group-hover:scale-110">
                    {/* Placeholder for image, using a div with text if no image loads, or we will implement Next/Image correctly later */}
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400 rounded-md">
                        {phone.name}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs text-muted-foreground mb-1">{phone.brand}</p>
                        <h3 className="font-bold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                            {phone.name}
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground my-3">
                    <div className="flex items-center gap-1">
                        <Smartphone className="w-3 h-3" />
                        <span>{phone.specs.screen}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        <span>{phone.specs.processor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {/* RAM icon simulation */}
                        <span className="font-bold">RAM</span>
                        <span>{phone.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Battery className="w-3 h-3" />
                        <span>{phone.specs.battery}</span>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-primary">
                            {phone.price.toLocaleString()} د.ج
                        </span>
                        {phone.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through decoration-destructive/50">
                                {phone.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-white" variant="outline" asChild>
                    <Link href={`/phone/${phone.id}`}>
                        عرض التفاصيل
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
