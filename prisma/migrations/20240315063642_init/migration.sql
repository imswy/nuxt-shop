-- CreateTable
CREATE TABLE `classify` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,
    `state` TINYINT NULL,
    `icon` VARCHAR(255) NULL,
    `sort` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop` (
    `id` INTEGER NOT NULL,
    `sellNo` VARCHAR(255) NULL,
    `category_id` INTEGER NULL,
    `name` VARCHAR(255) NULL,
    `icon` VARCHAR(255) NULL,
    `sort` INTEGER NULL,
    `price` INTEGER NULL,
    `remark` LONGTEXT NULL,
    `shipment_type` TINYINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
