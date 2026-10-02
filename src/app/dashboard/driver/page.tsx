import type { Metadata } from "next";
import { DriverRoute } from "@/components/driver-route";

export const metadata: Metadata = { title: "My driver route" };
export default function DriverPage() { return <DriverRoute />; }
