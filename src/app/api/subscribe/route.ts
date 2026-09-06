import { NextResponse } from 'next/server';
import { subscribeSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Request body must be valid JSON.' },
      { status: 400 },
    );
  }

  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Invalid email address.';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  console.log(`[subscribe] new subscriber: ${parsed.data.email}`);

  return NextResponse.json(
    { ok: true, message: 'You are on the list!' },
    { status: 200 },
  );
}
