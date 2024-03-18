-- CreateTable
CREATE TABLE "LikedProperty" (
    "id" TEXT NOT NULL,
    "zpid" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT,
    "price" TEXT,
    "propertyType" TEXT,

    CONSTRAINT "LikedProperty_pkey" PRIMARY KEY ("id")
);
