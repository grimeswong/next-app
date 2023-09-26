import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET - getting data
export function GET(request: NextRequest) {
  // if remove request arugment, this request will return cache data
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John " },
  ]);
}

// POST - creating data
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // Validate
  // If invalid, return 400,
  // Else, return
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

// PUT - updating data
