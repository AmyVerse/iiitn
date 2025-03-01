import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const alumni = await prisma.alumni.findFirst()

    return NextResponse.json(alumni, { status: 200 })
  } catch (error) {
    console.error('Error fetching alumni:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
