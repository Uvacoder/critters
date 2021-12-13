/*
  Warnings:

  - You are about to drop the column `date_found` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `date_missing` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `reward_amount` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "date_found",
DROP COLUMN "date_missing",
DROP COLUMN "reward_amount",
ADD COLUMN     "dateFound" TEXT,
ADD COLUMN     "dateMissing" TEXT,
ADD COLUMN     "rewardAmount" INTEGER;
