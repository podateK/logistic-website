export const shipmentTypes = ["same-day", "express", "standard", "scheduled"] as const;
export type ShipmentType = (typeof shipmentTypes)[number];

export type QuoteInput = {
  distanceKm: number;
  weightKg: number;
  shipmentType: ShipmentType;
  zone?: "local" | "regional" | "intercity";
};

export type OrderInput = QuoteInput & {
  pickupAddress: string;
  deliveryAddress: string;
  contactName: string;
  contactPhone: string;
  scheduledAt?: string;
};

const speedMultiplier: Record<ShipmentType, number> = {
  standard: 1,
  express: 1.45,
  "same-day": 1.9,
  scheduled: 1.15,
};

const zoneFee = { local: 4.5, regional: 11, intercity: 24 } as const;

export function calculateQuote(input: QuoteInput) {
  const zone = input.zone ?? "local";
  const subtotal = (5.5 + input.distanceKm * 0.82 + input.weightKg * 0.68 + zoneFee[zone]) * speedMultiplier[input.shipmentType];
  const tax = subtotal * 0.08875;
  return {
    currency: "USD" as const,
    distanceCharge: round(input.distanceKm * 0.82),
    weightCharge: round(input.weightKg * 0.68),
    zoneFee: zoneFee[zone],
    serviceMultiplier: speedMultiplier[input.shipmentType],
    subtotal: round(subtotal),
    tax: round(tax),
    total: round(subtotal + tax),
  };
}

export function validateQuoteInput(value: unknown): { ok: true; value: QuoteInput } | { ok: false; errors: string[] } {
  const input = value as Partial<QuoteInput> | null;
  const errors: string[] = [];
  if (!input || typeof input !== "object") return { ok: false, errors: ["Request body must be a JSON object."] };
  if (typeof input.distanceKm !== "number" || input.distanceKm <= 0 || input.distanceKm > 5000) errors.push("distanceKm must be between 0 and 5000.");
  if (typeof input.weightKg !== "number" || input.weightKg <= 0 || input.weightKg > 10000) errors.push("weightKg must be between 0 and 10000.");
  if (!shipmentTypes.includes(input.shipmentType as ShipmentType)) errors.push(`shipmentType must be one of: ${shipmentTypes.join(", ")}.`);
  if (input.zone && !["local", "regional", "intercity"].includes(input.zone)) errors.push("zone must be local, regional, or intercity.");
  return errors.length ? { ok: false, errors } : { ok: true, value: input as QuoteInput };
}

export function validateOrderInput(value: unknown): { ok: true; value: OrderInput } | { ok: false; errors: string[] } {
  const quote = validateQuoteInput(value);
  const input = value as Partial<OrderInput> | null;
  const errors = quote.ok ? [] : [...quote.errors];
  if (!input || typeof input !== "object") return { ok: false, errors };
  for (const field of ["pickupAddress", "deliveryAddress", "contactName", "contactPhone"] as const) {
    if (typeof input[field] !== "string" || input[field]!.trim().length < 3) errors.push(`${field} is required.`);
  }
  if (input.shipmentType === "scheduled" && !input.scheduledAt) errors.push("scheduledAt is required for scheduled shipments.");
  return errors.length ? { ok: false, errors } : { ok: true, value: input as OrderInput };
}

export function createTrackingId(now = Date.now()) {
  const digits = String(now).slice(-8);
  return `VQ-${digits.slice(0, 4)}-${digits.slice(4)}`;
}

function round(value: number) { return Math.round(value * 100) / 100; }
