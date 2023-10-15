import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

// interface Props {
//     params: number;
// }

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user)  // if return object is falsely
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

// PUT - updating data
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  // if validation is failed, return error message and status code
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: params.id }
  })

  // if user is not existing, return error message and status code
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // if validation is success and user is found in db
  const updatedUser = await prisma.user.update({
    where: { id: user.id }, 
    data: {
      name: body.name, 
      email: body.email
    }
  });
  return NextResponse.json(updatedUser);
}

// DELETE - deleting data
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  // to check user whether is existing
  const user = await prisma.user.findUnique({
    where: { id: params.id }
  })

  // if user is not existing, return error message with status code
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // if user is existing, delete user in db 
  await prisma.user.delete({
    where: { id: user.id }
  })
  return NextResponse.json({});
}

// Fetch user from database
// If not found, return 404
// Delete the user
// Return 200
