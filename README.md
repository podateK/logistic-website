# Veloq logistics platform

Veloq is a responsive, multi-role logistics web application built from the supplied requirements specification. It covers the customer shipment journey, live tracking, dispatcher and driver workflows, fleet/warehouse operations, pricing and payments, and administrative analytics.

See [TASKS.md](./TASKS.md) for the push-per-task delivery plan and [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for product, design, integration, and security decisions.

## What is included

- Responsive public site: Home, Services, Tracking, Pricing, About, Contact, and FAQ.
- Registration, login, OTP verification, password reset, profile, saved locations, and five-role RBAC preview.
- Shipment creation, distance/weight/zone pricing, all service types, card/bank/wallet/COD payment choices, invoices, bulk CSV import, and business accounts.
- Live tracking, full movement history, email/SMS/push preferences, and proof of delivery.
- Dispatch automation, scheduling, route optimization, driver route, fleet/vehicle maintenance, warehouses, and inventory.
- Revenue/delivery/driver analytics, reports, team access, languages, currencies, payment/maps/notification integrations, and typed REST examples.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Use these demo paths:

- Public tracking: `http://localhost:3000/tracking?id=VQ-2847-1903`
- Operations workspace: `http://localhost:3000/dashboard`
- Driver proof: `http://localhost:3000/dashboard/shipments/VQ-2847-1903/proof`

## Quality commands

```bash
npm run lint
npm run test
npm run build
npm run check
```

## Integration boundary

The MVP is intentionally integration-ready: external credentials for maps, payments, OTP, notifications, object storage, and a production database are not committed. Copy `.env.example` for the expected secret names. See [docs/API.md](./docs/API.md) for the REST contract and [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for production security and provider boundaries.

The checked-in UI uses deterministic data so every flow can be reviewed without access to live customer or payment systems.
