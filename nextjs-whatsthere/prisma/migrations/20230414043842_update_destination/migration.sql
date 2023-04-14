/*
  Warnings:

  - You are about to drop the column `name` on the `destination` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attraction" ALTER COLUMN "startTime" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "endTime" SET DEFAULT NOW() + interval '2 hours';

-- AlterTable
ALTER TABLE "destination" DROP COLUMN "name";
