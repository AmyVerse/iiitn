// src/app/api/users/route.ts
import { prisma } from "@/lib/prisma"; // Make sure this path is correct
import { NextResponse } from "next/server";

// Fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Prisma query for users
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

// Create a new user
export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
