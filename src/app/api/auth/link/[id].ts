import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.link.delete({ where: { id: Number(params.id) } })
    return NextResponse.json({ message: 'Link deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting link' }, { status: 500 })
  }
}
