import Link from "next/link";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <Brand />
          <p>Every mile visible. Every handoff accountable.</p>
          <span>Operations center online 24/7</span>
        </div>
        <div>
          <strong>Platform</strong>
          <Link href="/services">Services</Link>
          <Link href="/tracking">Tracking</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Operations</Link>
        </div>
        <div>
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <strong>Service desk</strong>
          <a href="tel:+15550147000">+1 555 014 7000</a>
          <a href="mailto:dispatch@veloq.example">dispatch@veloq.example</a>
          <span>Mon-Sun, all hours</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Veloq Logistics</span>
        <span>Demo platform · English · USD</span>
      </div>
    </footer>
  );
}
