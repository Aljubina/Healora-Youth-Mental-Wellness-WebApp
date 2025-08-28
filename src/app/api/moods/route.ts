import { NextRequest, NextResponse } from "next/server";

// GET /api/moods
export async function GET() {
  // In the future: fetch moods from DB
  return NextResponse.json({ moods: [] });
}

// POST /api/moods
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // In the future: save mood to DB
    return NextResponse.json({ success: true, mood: body });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
