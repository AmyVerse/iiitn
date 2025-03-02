'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 🟢 Add Spotlight (Auto Date)
export async function addSpotlight(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const content = formData.get('content') as string
  const image = formData.get('image') as string

  await prisma.spotlight.create({
    data: {
      title,
      description,
      content,
      image,
      date: new Date(), // Auto date
    },
  })
}

// 🟡 Update Spotlight
export async function updateSpotlight(formData: FormData) {
  const id = Number(formData.get('id'))
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const content = formData.get('content') as string
  const image = formData.get('image') as string

  await prisma.spotlight.update({
    where: { id },
    data: { title, description, content, image },
  })
}

// 🔴 Delete Spotlight
export async function deleteSpotlight(formData: FormData) {
  const id = Number(formData.get('id'))

  await prisma.spotlight.delete({
    where: { id },
  })
}
