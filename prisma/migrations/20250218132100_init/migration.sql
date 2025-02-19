/*
  Warnings:

  - Added the required column `addinfo` to the `card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "card" ADD COLUMN     "addinfo" TEXT NOT NULL;
