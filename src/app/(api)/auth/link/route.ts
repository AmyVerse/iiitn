import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const links = await prisma.link.findMany()

    return NextResponse.json(links, { status: 200 })
  } catch (error) {
    console.error('Error fetching links:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
