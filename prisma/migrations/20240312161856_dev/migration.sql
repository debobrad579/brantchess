-- CreateTable
CREATE TABLE "Champion" (
    "firstInitial" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "years" INTEGER[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Champion_firstInitial_lastName_key" ON "Champion"("firstInitial", "lastName");
