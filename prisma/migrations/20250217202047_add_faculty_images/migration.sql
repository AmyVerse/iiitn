/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FacultyImages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FacultyImages" DROP COLUMN "createdAt";

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "FacultyImages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
