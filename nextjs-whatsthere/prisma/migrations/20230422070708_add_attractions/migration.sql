-- CreateTable
CREATE TABLE "attractions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255),
    "rating" DOUBLE PRECISION NOT NULL,
    "startTime" VARCHAR(128) NOT NULL,
    "endTime" VARCHAR(128) NOT NULL,
    "listId" INTEGER NOT NULL,

    CONSTRAINT "attractions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_listId_fkey" FOREIGN KEY ("listId") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
