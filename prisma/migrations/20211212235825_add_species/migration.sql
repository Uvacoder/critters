/*
  Warnings:

  - Added the required column `species` to the `critters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "critters" ADD COLUMN     "species" TEXT NOT NULL;
