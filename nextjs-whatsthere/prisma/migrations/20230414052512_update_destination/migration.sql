/*
  Warnings:

  - Made the column `name` on table `destination` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "attraction" ALTER COLUMN "startTime" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "endTime" SET DEFAULT NOW() + interval '3 hours';

-- AlterTable
ALTER TABLE "destination" ALTER COLUMN "name" SET NOT NULL;
