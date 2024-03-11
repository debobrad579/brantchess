-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);
