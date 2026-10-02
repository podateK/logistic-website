import { calculateQuote, validateQuoteInput } from "@/lib/domain";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "invalid_json", message: "Provide a valid JSON request body." }, { status: 400 }); }
  const result = validateQuoteInput(body);
  if (!result.ok) return Response.json({ error: "validation_failed", details: result.errors }, { status: 422 });
  return Response.json({ data: calculateQuote(result.value) });
}
