"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/table";
import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { DataRow } from "./nodes.types";

const NodesPage = () => {
    const [data, setData] = useState<DataRow[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    process.env.NEXT_PUBLIC_BACKEND_URL + "nodes/storage/"
                );
                console.log(
                    process.env.NEXT_PUBLIC_BACKEND_URL + "nodes/storage/"
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
            <h1 className={title()}>Nodos</h1>
            <br />
            <Table
                isStriped
                aria-label="Example static collection table"
                className="mt-7"
            >
                <TableHeader>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Created At</TableColumn>
                    <TableColumn>Updated At</TableColumn>
                    <TableColumn>Is Active</TableColumn>
                    <TableColumn>Date Time</TableColumn>
                    <TableColumn>Temperature</TableColumn>
                    <TableColumn>Humidity</TableColumn>
                    <TableColumn>Pressure</TableColumn>
                    <TableColumn>Altitude</TableColumn>
                    <TableColumn>Node</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.created_at}</TableCell>
                            <TableCell>{row.updated_at}</TableCell>
                            <TableCell>{row.is_active.toString()}</TableCell>
                            <TableCell>{row.date_time}</TableCell>
                            <TableCell>{row.temperature}</TableCell>
                            <TableCell>{row.humidity}</TableCell>
                            <TableCell>{row.pressure}</TableCell>
                            <TableCell>{row.altitude}</TableCell>
                            <TableCell>{row.node}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default NodesPage;
