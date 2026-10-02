"use client";

import { ArrowLeft, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Mode = "login" | "register" | "reset" | "verify";

const copy = {
  login: { title: "Welcome back", text: "Sign in to manage shipments and operations.", action: "Sign in" },
  register: { title: "Create your Veloq account", text: "Start shipping or join an operations team.", action: "Continue to verification" },
  reset: { title: "Reset your password", text: "We’ll send a secure reset code to your email.", action: "Send reset code" },
  verify: { title: "Verify your account", text: "Enter the six-digit code sent to alex@northstar.example.", action: "Verify and continue" },
} as const;

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const content = copy[mode];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mode === "register") router.push("/verify");
    else if (mode === "verify" || mode === "login") router.push("/dashboard");
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="auth-success" role="status">
        <CheckCircle2 size={38} />
        <h1>Check your inbox</h1>
        <p>A six-digit reset code is on its way. For this demo, continue with any six digits.</p>
        <Link className="button" href="/verify">Enter verification code</Link>
      </div>
    );
  }

  return (
    <div className="auth-card">
      {mode !== "login" && <Link className="auth-back" href={mode === "verify" ? "/register" : "/login"}><ArrowLeft size={16} /> Back</Link>}
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <form onSubmit={submit}>
        {mode === "register" && (
          <>
            <label>Full name<input required autoComplete="name" placeholder="Alex Morgan" /></label>
            <div className="auth-choice" role="group" aria-label="Account type">
              <label><input type="radio" name="account" defaultChecked /> Customer</label>
              <label><input type="radio" name="account" /> Business</label>
              <label><input type="radio" name="account" /> Driver</label>
            </div>
          </>
        )}
        {mode !== "verify" && (
          <label>Email address<div className="input-with-icon"><Mail size={17} /><input required type="email" autoComplete="email" placeholder="alex@company.com" /></div></label>
        )}
        {mode === "register" && (
          <label>Phone number<div className="input-with-icon"><Phone size={17} /><input required type="tel" autoComplete="tel" placeholder="+1 555 014 7000" /></div></label>
        )}
        {(mode === "login" || mode === "register") && (
          <label>Password
            <div className="input-with-icon"><LockKeyhole size={17} /><input required type={showPassword ? "text" : "password"} autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder="At least 8 characters" /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
          </label>
        )}
        {mode === "verify" && (
          <label>Verification code<input className="otp-input" required inputMode="numeric" pattern="[0-9]{6}" maxLength={6} defaultValue="284719" aria-describedby="otp-help" /><small id="otp-help">Demo mode: use any six digits.</small></label>
        )}
        {mode === "login" && <div className="auth-form-meta"><label><input type="checkbox" /> Keep me signed in</label><Link href="/reset-password">Forgot password?</Link></div>}
        <button className="button auth-submit" type="submit">{content.action}</button>
      </form>
      {mode === "login" && <p className="auth-switch">New to Veloq? <Link href="/register">Create an account</Link></p>}
      {mode === "register" && <p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p>}
      {mode === "verify" && <button className="text-button auth-resend" type="button">Resend code</button>}
    </div>
  );
}
