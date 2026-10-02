import type { Metadata } from "next";
import { WarehouseWorkspace } from "@/components/warehouse-workspace";

export const metadata: Metadata = { title: "Warehouses & inventory" };
export default function WarehousesPage() { return <WarehouseWorkspace />; }
