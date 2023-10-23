"use client";

import { title } from "@/components/primitives";
import { useEffect, useState } from "react";
import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";

export interface Visitor {
    category: string;
    count: number;
    data: Datum[];
}

export interface Datum {
    name: string;
    value: number;
}

const VisitorPage = () => {
    const [data, setData] = useState<Visitor[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    process.env.NEXT_PUBLIC_BACKEND_URL + "reports/visitor/"
                );
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className={title()}>Visitantes</h1>
            <div className="mt-8">
                <Grid numItemsSm={2} numItemsLg={3} className="gap-20">
                    {data.map((item) => (
                        <Card key={item.category} className="p-8">
                            <Title>{item.category}</Title>
                            <Flex
                                justifyContent="start"
                                alignItems="baseline"
                                className="space-x-20"
                            >
                                <Metric>{item.count}</Metric>
                                <Text>Total</Text>
                            </Flex>
                            <Flex className="mt-8">
                                <Text>
                                    {item.category === "Usuarios"
                                        ? "Ciudad"
                                        : "Página"}
                                </Text>
                                <Text className="text-right">
                                    {item.category === "Usuarios"
                                        ? "Cantidad"
                                        : "Vistas"}
                                </Text>
                            </Flex>
                            <BarList
                                data={item.data}
                                valueFormatter={(number: number) =>
                                    Intl.NumberFormat("us")
                                        .format(number)
                                        .toString()
                                }
                                className="mt-2"
                            />
                        </Card>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default VisitorPage;
