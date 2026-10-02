import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Create account" };
export default function RegisterPage() { return <section className="auth-page"><div className="auth-context"><span>START SHIPPING</span><h2>Move the first parcel today.</h2><p>Your profile keeps addresses, locations, shipment history, and notification preferences together.</p></div><AuthForm mode="register" /></section>; }
