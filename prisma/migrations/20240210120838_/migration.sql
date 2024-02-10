-- CreateTable
CREATE TABLE `Chat` (
    `id` VARCHAR(191) NOT NULL,
    `firstMember` VARCHAR(191) NOT NULL,
    `secondMember` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Chat_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
