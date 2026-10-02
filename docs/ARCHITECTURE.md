# Veloq architecture and product decisions

## Product

Veloq is a multi-role delivery operations platform. Customers quote, book, pay for, and track shipments. Dispatchers coordinate routes. Drivers manage assigned stops and proof of delivery. Administrators operate users, fleet, pricing, inventory, warehouses, reporting, and integrations.

## Technical baseline

- Next.js 16 App Router and React 19 with strict TypeScript.
- Server Components for content and read-heavy screens; focused Client Components for forms, filters, simulated live states, and local demo persistence.
- Route groups separate the public site, authentication, and authenticated workspace.
- Route handlers demonstrate stable REST contracts. Domain services remain independent of transport so a production database or third-party provider can replace demo repositories.
- CSS Modules/global tokens provide the visual system without coupling the UI to a component framework.

## Visual system

- `fleet-ink` `#0B1F2A`: navigation, high-emphasis text, operational chrome.
- `logistics-paper` `#F4F7F8`: page field and quiet surfaces.
- `dispatch-orange` `#FF5C35`: primary action and active movement.
- `route-blue` `#1D5FD1`: routes, links, information, in-transit status.
- `delivered-green` `#16A36D`: successful and delivered states.
- `divider` `#CBD5DA`: structural rules and data separation.
- Barlow Condensed carries route-board headlines; IBM Plex Sans carries controls and body copy.

The public hero is a route board: origin, destination, current vehicle position, status, and ETA share one visual field. In the application, the same language becomes dense but calm operational tables and timelines. Status colors are semantic, not decorative.

## Data and integration boundaries

The first release uses typed fixtures and browser persistence to make workflows reviewable without secrets. Production adapters are expected for:

- Identity and OTP: Auth0, Clerk, Supabase Auth, or a custom OAuth/JWT service.
- Persistence: PostgreSQL with a transactional order/status-event model.
- Payments: Stripe, Paystack, and Flutterwave webhooks behind one payment interface.
- Maps: Mapbox or Google Maps routing/geocoding behind one maps interface.
- Notifications: email, SMS, and push queues with idempotent delivery jobs.
- Media: signed object-storage uploads for proof-of-delivery images and signatures.

## Security baseline

The UI does not treat hidden navigation as authorization. Production deployment must verify JWT/OAuth sessions on the server and apply role/tenant checks in every mutation and data query. HTTPS, secure cookies, CSRF protection, rate limiting, webhook signature validation, audit logs, file scanning, and least-privilege provider keys are deployment requirements.
