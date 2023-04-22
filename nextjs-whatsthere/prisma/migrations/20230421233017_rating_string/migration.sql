-- AlterTable
ALTER TABLE "attractions" ALTER COLUMN "rating" SET DATA TYPE VARCHAR(32),
ALTER COLUMN "startTime" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "endTime" SET DEFAULT NOW() + interval '3 hours';
