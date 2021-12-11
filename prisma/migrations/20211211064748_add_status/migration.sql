/*
  Warnings:

  - Added the required column `status` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Made the column `reward` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LOST', 'FOUND');

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "status" "Status" NOT NULL,
ALTER COLUMN "reward" SET NOT NULL,
ALTER COLUMN "reward" SET DEFAULT false;
