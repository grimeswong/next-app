import { NextRequest, NextResponse } from "next/server";

// interface Props {
//     params: number;
// }

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // inline declaration
  // Fetch data from a db
  // If not found, return 404 error,
  // Else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Mosh" });
}

// PUT - updating data
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

// Steps:
// Validate the request body
// If invalide, return 400
// Fetch the user with the given id
// If doesn't exist, return 404
// Update the user
// Return the udpated user
