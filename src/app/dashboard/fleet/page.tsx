import type { Metadata } from "next";
import { FleetWorkspace } from "@/components/fleet-workspace";

export const metadata: Metadata = { title: "Fleet management" };
export default function FleetPage() { return <FleetWorkspace />; }
