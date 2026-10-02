import assert from "node:assert/strict";
import test from "node:test";
import { calculateQuote, createTrackingId, validateOrderInput, validateQuoteInput } from "../src/lib/domain.ts";

test("calculates a deterministic local express quote", () => {
  const quote = calculateQuote({ distanceKm: 18.6, weightKg: 4, shipmentType: "express", zone: "local" });
  assert.deepEqual(quote, { currency: "USD", distanceCharge: 15.25, weightCharge: 2.72, zoneFee: 4.5, serviceMultiplier: 1.45, subtotal: 40.56, tax: 3.6, total: 44.16 });
});

test("rejects invalid quote values", () => {
  const result = validateQuoteInput({ distanceKm: -1, weightKg: 0, shipmentType: "overnight" });
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.errors.length, 3);
});

test("requires a date for scheduled shipments", () => {
  const result = validateOrderInput({ distanceKm: 10, weightKg: 2, shipmentType: "scheduled", pickupAddress: "A street", deliveryAddress: "B street", contactName: "Alex", contactPhone: "555" });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok(result.errors.includes("scheduledAt is required for scheduled shipments."));
});

test("formats generated tracking IDs", () => {
  assert.equal(createTrackingId(1727873234567), "VQ-7323-4567");
  assert.match(createTrackingId(), /^VQ-\d{4}-\d{4}$/);
});
