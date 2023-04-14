-- AlterTable
ALTER TABLE "attraction" ALTER COLUMN "startTime" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "endTime" SET DEFAULT NOW() + interval '3 hours';

-- AlterTable
ALTER TABLE "destination" ADD COLUMN     "name" VARCHAR(255);
