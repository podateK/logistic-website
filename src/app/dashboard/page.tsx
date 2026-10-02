import type { Metadata } from "next";
import { DashboardOverview } from "@/components/dashboard-overview";

export const metadata: Metadata = { title: "Operations overview" };
export default function DashboardPage() { return <DashboardOverview />; }
