import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Reset password" };
export default function ResetPasswordPage() { return <section className="auth-page"><div className="auth-context"><span>ACCOUNT RECOVERY</span><h2>Back to your route.</h2><p>Reset access securely with an expiring email verification code.</p></div><AuthForm mode="reset" /></section>; }
