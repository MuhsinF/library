/*
  Warnings:

  - The values [READING,WANT_TO_READ] on the enum `Collection` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `cover` on the `Book` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Collection_new" AS ENUM ('READ');
ALTER TABLE "Book" ALTER COLUMN "collection" DROP DEFAULT;
ALTER TABLE "Book" ALTER COLUMN "collection" TYPE "Collection_new" USING ("collection"::text::"Collection_new");
ALTER TYPE "Collection" RENAME TO "Collection_old";
ALTER TYPE "Collection_new" RENAME TO "Collection";
DROP TYPE "Collection_old";
ALTER TABLE "Book" ALTER COLUMN "collection" SET DEFAULT 'READ';
COMMIT;

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "cover",
ALTER COLUMN "collection" SET DEFAULT 'READ';
