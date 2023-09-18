import { NextRequest, NextResponse } from "next/server";

// GET - getting data
export function GET(request: NextRequest) {
  // if remove request arugment, this request will return cache data
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John " },
  ]);
}

// POST - creating data
// PUT - updating data
