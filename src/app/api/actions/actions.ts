'use server'
import { PrismaClient } from '@prisma/client'

type Link = {
  id: number
  name: string
  url: string
}

const prisma = new PrismaClient()

// 🟢 Add Data
export async function addProduct(formData: FormData) {
  const name = formData.get('name') as string
  const url = formData.get('url') as string

  await prisma.link.create({
    data: { name, url },
  })
}

// 🟡 Update Data
export async function updateProduct(formData: FormData) {
  const id = Number(formData.get('id'))
  const name = formData.get('name') as string
  const url = formData.get('url') as string

  await prisma.link.update({
    where: { id },
    data: { name, url },
  })
}

// 🔴 Delete Data
export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get('id'))

  await prisma.link.delete({
    where: { id },
  })
}
