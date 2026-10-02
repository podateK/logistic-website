import type { Metadata } from "next";
import { AdminSettings } from "@/components/admin-settings";

export const metadata: Metadata = { title: "Platform settings" };
export default function AdminPage() { return <AdminSettings />; }
