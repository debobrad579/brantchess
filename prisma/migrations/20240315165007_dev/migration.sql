-- CreateTable
CREATE TABLE "HarmonySquareInformation" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "tournamentTitles" TEXT[],
    "tournamentUrls" TEXT[],

    CONSTRAINT "HarmonySquareInformation_pkey" PRIMARY KEY ("id")
);
