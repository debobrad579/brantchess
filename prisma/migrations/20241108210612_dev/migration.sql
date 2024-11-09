-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "brantchess";

-- CreateTable
CREATE TABLE "brantchess"."Tournament" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "defendingChampion" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "format" TEXT NOT NULL,
    "startingTime" INTEGER NOT NULL,
    "increment" INTEGER NOT NULL,
    "flyerURL" TEXT,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brantchess"."Champion" (
    "firstInitial" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "years" INTEGER[]
);

-- CreateTable
CREATE TABLE "brantchess"."HomeInformation" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "locationUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "HomeInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brantchess"."HarmonySquareInformation" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "tournamentTitles" TEXT[],
    "tournamentUrls" TEXT[],

    CONSTRAINT "HarmonySquareInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Champion_firstInitial_lastName_key" ON "brantchess"."Champion"("firstInitial", "lastName");
