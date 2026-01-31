export interface Phone {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    image: string;
    specs: {
        screen: string;
        processor: string;
        ram: string;
        storage: string;
        camera: string;
        battery: string;
    };
    isNew?: boolean;
}

export const mockPhones: Phone[] = [
    {
        id: "1",
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 450000, // DZD (Example)
        originalPrice: 480000,
        image: "/images/s24-ultra.png",
        specs: {
            screen: "6.8\" QHD+",
            processor: "Snapdragon 8 Gen 3",
            ram: "12GB",
            storage: "512GB",
            camera: "200MP Main",
            battery: "5000mAh",
        },
        isNew: true,
    },
    {
        id: "2",
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 520000,
        image: "/images/iphone-15-pro-max.png",
        specs: {
            screen: "6.7\" Super Retina",
            processor: "A17 Pro",
            ram: "8GB",
            storage: "256GB",
            camera: "48MP Main",
            battery: "4441mAh",
        },
    },
    {
        id: "3",
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        price: 360000,
        originalPrice: 390000,
        image: "/images/xiaomi-14.png",
        specs: {
            screen: "6.73\" AMOLED",
            processor: "Snapdragon 8 Gen 3",
            ram: "16GB",
            storage: "512GB",
            camera: "50MP Leica",
            battery: "5000mAh",
        },
        isNew: true,
    },
    {
        id: "4",
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 280000,
        image: "/images/pixel-8-pro.png",
        specs: {
            screen: "6.7\" OLED",
            processor: "Tensor G3",
            ram: "12GB",
            storage: "128GB",
            camera: "50MP Main",
            battery: "5050mAh",
        },
    },
    {
        id: "5",
        name: "Redmi Note 13 Pro+",
        brand: "Xiaomi",
        price: 95000,
        originalPrice: 105000,
        image: "/images/redmi-note-13.png",
        specs: {
            screen: "6.67\" AMOLED",
            processor: "Dimensity 7200",
            ram: "12GB",
            storage: "256GB",
            camera: "200MP",
            battery: "5000mAh",
        },
    },
];

export const brands = [
    { name: "Samsung", logo: "/brands/samsung.svg" },
    { name: "Apple", logo: "/brands/apple.svg" },
    { name: "Xiaomi", logo: "/brands/xiaomi.svg" },
    { name: "Oppo", logo: "/brands/oppo.svg" },
    { name: "Realme", logo: "/brands/realme.svg" },
    { name: "Google", logo: "/brands/google.svg" },
];
