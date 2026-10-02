# Veloq logistics platform

Veloq is a responsive, multi-role logistics web application built from the supplied requirements specification. It covers the customer shipment journey, live tracking, dispatcher and driver workflows, fleet/warehouse operations, pricing and payments, and administrative analytics.

See [TASKS.md](./TASKS.md) for the push-per-task delivery plan and [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for product, design, integration, and security decisions.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

The MVP is intentionally integration-ready: external credentials for maps, payments, OTP, notifications, storage, and a production database are not committed.
