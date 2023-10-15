import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// GET - getting data
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST - creating data
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  // if validation is failed
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // to check the user is existing in database?
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  // if user is existing in db, return error message (bad request)
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  // if validation is success
  const newUser = await prisma.user.create({
    // Do not just set body that users can inject malicious codes
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}

