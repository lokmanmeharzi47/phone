"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { date: "Jan", price: 480000 },
    { date: "Feb", price: 475000 },
    { date: "Mar", price: 470000 },
    { date: "Apr", price: 460000 },
    { date: "May", price: 450000 },
    { date: "Jun", price: 450000 },
];

export function PriceHistoryChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>تاريخ الأسعار (آخر 6 أشهر)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
formatter={(value) => {
  if (typeof value !== 'number') return ['—', 'السعر'];
  return [`${value.toLocaleString()} د.ج`, 'السعر'];
}}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#2563eb" // primary blue
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#2563eb" }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
