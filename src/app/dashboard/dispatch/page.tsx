import type { Metadata } from "next";
import { DispatchBoard } from "@/components/dispatch-board";

export const metadata: Metadata = { title: "Dispatch board" };
export default function DispatchPage() { return <DispatchBoard />; }
