import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Sign in" };
export default function LoginPage() { return <section className="auth-page"><div className="auth-context"><span>VQ / SECURE ACCESS</span><h2>One account.<br />Every delivery.</h2><p>Customers, drivers, and operations teams enter through the same secure doorway.</p></div><AuthForm mode="login" /></section>; }
