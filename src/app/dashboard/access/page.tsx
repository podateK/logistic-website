import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";

export const metadata: Metadata = { title: "Role access" };
const roles = [
  ["Customer", "Book and track own shipments", [1, 0, 0, 0, 0]],
  ["Dispatcher", "Coordinate orders, drivers, and routes", [1, 1, 1, 0, 0]],
  ["Driver", "View assigned stops and submit delivery proof", [0, 0, 1, 1, 0]],
  ["Admin", "Manage a company’s full logistics operation", [1, 1, 1, 1, 1]],
  ["Super Admin", "Control every organization and platform setting", [1, 1, 1, 1, 1]],
] as const;
const capabilities = ["Shipments", "Dispatch", "Fleet", "Proof", "Reports"];

export default function AccessPage() {
  return <><div className="dashboard-title"><div><span>Authentication & authorization</span><h1>Role access</h1><p>A clear RBAC model for five operational responsibilities.</p></div><button className="button" type="button">Invite user</button></div><section className="panel permissions-panel"><div className="permission-row header"><span>Role</span>{capabilities.map((item) => <span key={item}>{item}</span>)}</div>{roles.map(([role, description, access]) => <div className="permission-row" key={role}><span><strong>{role}</strong><small>{description}</small></span>{access.map((allowed, index) => <span key={capabilities[index]} aria-label={`${capabilities[index]} ${allowed ? "allowed" : "not allowed"}`}>{allowed ? <Check size={17} /> : <Minus size={17} />}</span>)}</div>)}</section><section className="panel user-management"><div className="panel-heading"><div><span>Organization users</span><h2>Team access</h2></div><span>8 active</span></div>{[["Alex Morgan","alex@northstar.example","Admin","Active"],["Maya Chen","maya@northstar.example","Dispatcher","Active"],["Noah Williams","noah@northstar.example","Driver","Active"],["Sam Taylor","sam@northstar.example","Customer","Invited"]].map(([name,email,role,status])=><div className="user-row" key={email}><i>{name.split(" ").map(value=>value[0]).join("")}</i><span><strong>{name}</strong><small>{email}</small></span><b>{role}</b><em data-status={status}>{status}</em><button type="button">Manage</button></div>)}</section></>;
}
