import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const fimg = await prisma.faculty.findMany({ orderBy: { id: 'desc' } })

    return NextResponse.json(fimg, { status: 200 })
  } catch (error) {
    console.error('Error fetching links:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
