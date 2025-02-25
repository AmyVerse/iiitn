/*
  Warnings:

  - You are about to drop the `card` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "card";

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "img_url" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "addinfo" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
