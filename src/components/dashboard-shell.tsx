"use client";

import {
  BarChart3,
  Bell,
  Boxes,
  ChevronDown,
  CircleUserRound,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  PackagePlus,
  Settings,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState, type ReactNode } from "react";
import { Brand } from "./brand";

export type UserRole = "Customer" | "Dispatcher" | "Driver" | "Admin" | "Super Admin";

type RoleContextValue = { role: UserRole; setRole: (role: UserRole) => void };
const RoleContext = createContext<RoleContextValue | null>(null);

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used inside DashboardShell");
  return context;
}

const nav = [
  ["Overview", "/dashboard", LayoutDashboard, ["Customer", "Dispatcher", "Driver", "Admin", "Super Admin"]],
  ["Create shipment", "/dashboard/shipments/new", PackagePlus, ["Customer", "Dispatcher", "Admin", "Super Admin"]],
  ["Shipments", "/dashboard/shipments", Boxes, ["Customer", "Dispatcher", "Driver", "Admin", "Super Admin"]],
  ["Dispatch board", "/dashboard/dispatch", Map, ["Dispatcher", "Admin", "Super Admin"]],
  ["Fleet", "/dashboard/fleet", Truck, ["Dispatcher", "Admin", "Super Admin"]],
  ["Warehouses", "/dashboard/warehouses", Warehouse, ["Admin", "Super Admin"]],
  ["Reports", "/dashboard/reports", BarChart3, ["Admin", "Super Admin"]],
  ["Access control", "/dashboard/access", ShieldCheck, ["Super Admin"]],
  ["Settings", "/dashboard/profile", Settings, ["Customer", "Dispatcher", "Driver", "Admin", "Super Admin"]],
] as const;

const roles: UserRole[] = ["Customer", "Dispatcher", "Driver", "Admin", "Super Admin"];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [role, setRole] = useState<UserRole>("Admin");
  const [mobileOpen, setMobileOpen] = useState(false);
  const available = nav.filter((item) => (item[3] as readonly string[]).includes(role));

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <div className="dashboard-frame">
        <aside className={mobileOpen ? "dashboard-sidebar is-open" : "dashboard-sidebar"}>
          <div className="sidebar-brand"><Brand /><button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X size={20} /></button></div>
          <div className="workspace-name"><span>Workspace</span><strong>Northstar Commerce</strong></div>
          <nav aria-label="Workspace navigation">
            {available.map(([label, href, Icon]) => {
              const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
              return <Link key={href} href={href} data-active={active || undefined} onClick={() => setMobileOpen(false)}><Icon size={18} /><span>{label}</span></Link>;
            })}
          </nav>
          <Link className="sidebar-signout" href="/"><LogOut size={17} /> Sign out</Link>
        </aside>
        <div className="dashboard-main">
          <header className="dashboard-header">
            <button className="dashboard-menu" type="button" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu size={21} /></button>
            <div className="role-control">
              <span>Preview role</span>
              <label><select value={role} onChange={(event) => setRole(event.target.value as UserRole)}>{roles.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label>
            </div>
            <div className="dashboard-user"><button type="button" aria-label="Notifications"><Bell size={19} /><i /></button><Link href="/dashboard/profile"><span><strong>Alex Morgan</strong><small>{role}</small></span><CircleUserRound size={32} /></Link></div>
          </header>
          <div className="dashboard-content">{children}</div>
        </div>
      </div>
    </RoleContext.Provider>
  );
}
