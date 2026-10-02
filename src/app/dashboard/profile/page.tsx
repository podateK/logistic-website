import type { Metadata } from "next";
import { ProfileForm } from "@/components/profile-form";

export const metadata: Metadata = { title: "Profile settings" };
export default function ProfilePage() { return <><div className="dashboard-title"><div><span>Account settings</span><h1>Your profile</h1><p>Keep contact details and saved pickup locations current.</p></div></div><ProfileForm /></>; }
