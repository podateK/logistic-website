import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Verify account" };
export default function VerifyPage() { return <section className="auth-page"><div className="auth-context"><span>OTP VERIFICATION</span><h2>One quick check.</h2><p>Verification protects your addresses, payments, operations data, and delivery history.</p></div><AuthForm mode="verify" /></section>; }
