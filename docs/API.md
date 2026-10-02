# REST API contract

The included route handlers are a typed demonstration boundary. They return deterministic demo data and do not persist records. A production adapter should place authentication, tenant scoping, idempotency, persistence, and provider calls behind these contracts.

## `POST /api/quotes`

Request:

```json
{
  "distanceKm": 18.6,
  "weightKg": 4,
  "shipmentType": "express",
  "zone": "local"
}
```

Returns distance, weight, zone, service multiplier, tax, and total components. Invalid domain values return HTTP `422`; malformed JSON returns `400`.

## `GET /api/orders`

Returns the demo order collection and total count.

## `POST /api/orders`

Accepts the quote fields plus `pickupAddress`, `deliveryAddress`, `contactName`, `contactPhone`, and an optional `scheduledAt`. A scheduled shipment requires `scheduledAt`. Success returns HTTP `201`, a unique `VQ-0000-0000` tracking ID, the locked quote, and a `Location` header.

## `GET /api/tracking/:id`

Returns current status, ETA, driver, GPS location, and ordered movement events for a known shipment. Use `VQ-2847-1903` for the fixture. Unknown IDs return HTTP `404`.

## Production security requirements

- Verify OAuth/JWT sessions in every protected handler.
- Resolve organization/tenant scope from the verified session, never request JSON.
- Validate provider webhook signatures and store idempotency keys.
- Rate-limit login, OTP, quote, tracking, upload, and mutation routes.
- Use signed upload URLs, content limits, MIME validation, and malware scanning for proof images.
- Write append-only audit events for status, price, permission, and payout changes.
