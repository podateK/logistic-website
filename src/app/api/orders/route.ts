import { calculateQuote, createTrackingId, validateOrderInput } from "@/lib/domain";

const orders = [
  { trackingId: "VQ-2847-1903", status: "in_transit", shipmentType: "same-day", total: 37.64 },
  { trackingId: "VQ-2847-1844", status: "assigned", shipmentType: "express", total: 42.18 },
];

export async function GET() { return Response.json({ data: orders, meta: { total: orders.length } }); }

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "invalid_json", message: "Provide a valid JSON request body." }, { status: 400 }); }
  const result = validateOrderInput(body);
  if (!result.ok) return Response.json({ error: "validation_failed", details: result.errors }, { status: 422 });
  const trackingId = createTrackingId();
  return Response.json({ data: { trackingId, status: "pending", quote: calculateQuote(result.value), createdAt: new Date().toISOString() } }, { status: 201, headers: { Location: `/api/tracking/${trackingId}` } });
}
