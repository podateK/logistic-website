import { trackingRecords } from "@/lib/demo-data";

export async function GET(_request: Request, context: RouteContext<"/api/tracking/[id]">) {
  const { id } = await context.params;
  const record = trackingRecords[id as keyof typeof trackingRecords];
  if (!record) return Response.json({ error: "not_found", message: `No shipment found for ${id}.` }, { status: 404 });
  return Response.json({ data: record });
}
