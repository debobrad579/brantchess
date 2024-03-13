-- CreateTable
CREATE TABLE "HomeInformation" (
    "location" TEXT NOT NULL,
    "locationUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeInformation_location_key" ON "HomeInformation"("location");
