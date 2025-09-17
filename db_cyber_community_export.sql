-- -------------------------------------------------------------
-- TablePlus 6.7.0(634)
--
-- https://tableplus.com/
--
-- Database: db_cyber_community
-- Generation Time: 2025-09-17 19:04:09.8720
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `Articles`;
CREATE TABLE `Articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `imageUrl` varchar(500) DEFAULT NULL,
  `views` int NOT NULL DEFAULT '0',
  `userId` int NOT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ChatGroupMembers`;
CREATE TABLE `ChatGroupMembers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `chatGroupId` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `chatGroupId` (`chatGroupId`),
  CONSTRAINT `ChatGroupMembers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`),
  CONSTRAINT `ChatGroupMembers_ibfk_2` FOREIGN KEY (`chatGroupId`) REFERENCES `ChatGroups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ChatGroups`;
CREATE TABLE `ChatGroups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `keyForChatOne` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `ownerId` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyForChatOne` (`keyForChatOne`),
  KEY `ownerId` (`ownerId`),
  CONSTRAINT `ChatGroups_ibfk_1` FOREIGN KEY (`ownerId`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ChatMessages`;
CREATE TABLE `ChatMessages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chatGroupId` int NOT NULL,
  `userIdSender` int NOT NULL,
  `messageText` text,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `chatGroupId` (`chatGroupId`),
  KEY `userIdSender` (`userIdSender`),
  CONSTRAINT `ChatMessages_ibfk_1` FOREIGN KEY (`chatGroupId`) REFERENCES `ChatGroups` (`id`),
  CONSTRAINT `ChatMessages_ibfk_2` FOREIGN KEY (`userIdSender`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Permissions`;
CREATE TABLE `Permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `endpoint` varchar(255) NOT NULL,
  `method` varchar(100) NOT NULL,
  `module` varchar(100) NOT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `RolePermission`;
CREATE TABLE `RolePermission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int NOT NULL,
  `permissionId` int NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  KEY `permissionId` (`permissionId`),
  CONSTRAINT `RolePermission_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`),
  CONSTRAINT `RolePermission_ibfk_2` FOREIGN KEY (`permissionId`) REFERENCES `Permissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Roles`;
CREATE TABLE `Roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `facebookId` varchar(255) DEFAULT NULL,
  `googleId` varchar(255) DEFAULT NULL,
  `roleId` int NOT NULL DEFAULT '2',
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `totpSecret` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `facebookId` (`facebookId`),
  UNIQUE KEY `googleId` (`googleId`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Articles` (`id`, `title`, `content`, `imageUrl`, `views`, `userId`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'Content about learning NextJS...', 'https://picsum.photos/seed/1/600/400', 15, 1, 0, 0, NULL, '2024-01-01 08:00:00', '2024-01-01 08:00:00'),
(2, NULL, 'Content about mastering React Query...', 'https://picsum.photos/seed/2/600/400', 32, 2, 0, 0, NULL, '2024-01-02 09:00:00', '2024-01-02 09:00:00'),
(3, NULL, 'Content about JavaScript tips...', 'https://picsum.photos/seed/3/600/400', 45, 1, 0, 0, NULL, '2024-01-03 10:00:00', '2024-01-03 10:00:00'),
(4, NULL, 'Comparison anh long đẹp trai content...', 'https://picsum.photos/seed/4/600/400', 27, 3, 0, 0, NULL, '2024-01-04 11:00:00', '2025-08-06 14:07:21'),
(5, NULL, 'Content about TypeScript...', 'https://picsum.photos/seed/5/600/400', 12, 2, 0, 0, NULL, '2024-01-05 12:00:00', '2024-01-05 12:00:00'),
(6, NULL, 'Content about SQL joins...', 'https://picsum.photos/seed/6/600/400', 8, 3, 0, 0, NULL, '2024-01-06 13:00:00', '2024-01-06 13:00:00'),
(7, NULL, 'Extensions content...', 'https://picsum.photos/seed/7/600/400', 60, 1, 0, 0, NULL, '2024-01-07 14:00:00', '2024-01-07 14:00:00'),
(8, NULL, 'Content about React optimization...', 'https://picsum.photos/seed/8/600/400', 33, 2, 0, 0, NULL, '2024-01-08 15:00:00', '2024-01-08 15:00:00'),
(9, NULL, 'Content about API design...', 'https://picsum.photos/seed/9/600/400', 18, 3, 0, 0, NULL, '2024-01-09 16:00:00', '2024-01-09 16:00:00'),
(10, NULL, 'Predictions about web development...', 'https://picsum.photos/seed/10/600/400', 21, 1, 0, 0, NULL, '2024-01-10 17:00:00', '2024-01-10 17:00:00');

INSERT INTO `ChatGroupMembers` (`id`, `userId`, `chatGroupId`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(7, 6, 4, 0, 0, NULL, '2025-08-24 04:08:18', '2025-08-24 04:08:18'),
(8, 11, 4, 0, 0, NULL, '2025-08-24 04:08:18', '2025-08-24 04:08:18'),
(9, 27, 8, 0, 0, NULL, '2025-08-24 04:16:03', '2025-08-24 04:16:03'),
(10, 11, 8, 0, 0, NULL, '2025-08-24 04:16:03', '2025-08-24 04:16:03'),
(11, 2, 9, 0, 0, NULL, '2025-08-24 04:23:51', '2025-08-24 04:23:51'),
(12, 6, 9, 0, 0, NULL, '2025-08-24 04:23:51', '2025-08-24 04:23:51'),
(13, 27, 9, 0, 0, NULL, '2025-08-24 04:23:51', '2025-08-24 04:23:51'),
(14, 11, 9, 0, 0, NULL, '2025-08-24 04:23:51', '2025-08-24 04:23:51'),
(15, 2, 10, 0, 0, NULL, '2025-08-24 04:24:23', '2025-08-24 04:24:23'),
(16, 6, 10, 0, 0, NULL, '2025-08-24 04:24:23', '2025-08-24 04:24:23'),
(17, 27, 10, 0, 0, NULL, '2025-08-24 04:24:23', '2025-08-24 04:24:23'),
(18, 11, 10, 0, 0, NULL, '2025-08-24 04:24:23', '2025-08-24 04:24:23');

INSERT INTO `ChatGroups` (`id`, `keyForChatOne`, `name`, `ownerId`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, '6-11', NULL, 11, 0, 0, NULL, '2025-08-24 04:08:18', '2025-08-24 04:08:18'),
(8, '11-27', NULL, 11, 0, 0, NULL, '2025-08-24 04:16:03', '2025-08-24 04:16:03'),
(9, NULL, 'minh báo', 11, 0, 0, NULL, '2025-08-24 04:23:51', '2025-08-24 04:23:51'),
(10, NULL, 'minh báo', 11, 0, 0, NULL, '2025-08-24 04:24:23', '2025-08-24 04:24:23');

INSERT INTO `ChatMessages` (`id`, `chatGroupId`, `userIdSender`, `messageText`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 8, 11, 'hello', 0, 0, NULL, '2025-08-24 04:39:06', '2025-08-24 04:39:06'),
(2, 8, 11, 'minh béo đâu rồi', 0, 0, NULL, '2025-08-24 04:39:11', '2025-08-24 04:39:11'),
(3, 8, 11, 'minh béo ơi', 0, 0, NULL, '2025-08-24 04:40:21', '2025-08-24 04:40:21'),
(4, 8, 27, 'tui đây ', 0, 0, NULL, '2025-08-24 04:40:27', '2025-08-24 04:40:27'),
(5, 8, 27, 'em ăn cơm chưa', 0, 0, NULL, '2025-08-24 04:40:30', '2025-08-24 04:40:30'),
(6, 8, 11, '1', 0, 0, NULL, '2025-08-24 04:48:58', '2025-08-24 04:48:58'),
(7, 8, 11, '1', 0, 0, NULL, '2025-08-24 04:48:58', '2025-08-24 04:48:58'),
(8, 8, 11, '23', 0, 0, NULL, '2025-08-24 04:48:58', '2025-08-24 04:48:58'),
(9, 8, 11, '1', 0, 0, NULL, '2025-08-24 04:48:58', '2025-08-24 04:48:58'),
(10, 8, 11, '23', 0, 0, NULL, '2025-08-24 04:48:58', '2025-08-24 04:48:58');

INSERT INTO `Permissions` (`id`, `name`, `endpoint`, `method`, `module`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Get Info User', '/api/auth/get-info', 'GET', 'Auth', 0, 0, '2025-08-17 03:24:57', '2025-08-17 03:24:57', '2025-08-17 03:25:08');

INSERT INTO `RolePermission` (`id`, `roleId`, `permissionId`, `isActive`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 1, 0, 0, NULL, '2025-08-17 03:27:29', '2025-09-10 12:35:13'),
(4, 3, 1, 0, 0, 0, NULL, '2025-08-17 03:31:32', '2025-08-17 03:31:32');

INSERT INTO `Roles` (`id`, `name`, `description`, `isActive`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'ROLE_ADMIN', 'Quản Trị Hệ Thống', 0, 0, 0, NULL, '2025-07-30 13:47:38', '2025-08-20 09:26:56'),
(2, 'ROLE_USER', 'Người Dùng Hệ Thống', 0, 0, 0, NULL, '2025-07-30 13:47:38', '2025-08-17 04:57:34'),
(3, 'ROLE_DEV', 'Người Dùng Lập Trình', 1, 0, 0, NULL, '2025-08-17 03:31:23', '2025-08-17 03:31:23');

INSERT INTO `Users` (`id`, `email`, `fullName`, `avatar`, `password`, `facebookId`, `googleId`, `roleId`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `totpSecret`) VALUES
(2, 'long@gmail.com', 'long', NULL, '$2b$10$z9OW4dCou0jQtmsQnhaUNerW.tnbYCiGL.0cDx6DT.ZwOiIBYpvt6', NULL, NULL, 2, 0, 0, NULL, '2025-08-06 14:54:52', '2025-08-06 14:54:52', NULL),
(3, 'long1@gmail.com', 'long', 'images/q6esuikfzl3fdtw8b80v', '$2b$11$rO4aXB8WQT.jl0E1RZE/v.eDjnya6vHWOEniNS7OoaXER1C18kKRq', NULL, NULL, 2, 0, 0, NULL, '2025-08-06 14:57:42', '2025-08-31 02:34:52', NULL),
(4, 'long2@gmail.com', 'long', NULL, '$2b$15$aeIUy/31onpsgE0LhhE4uu1sHCVTXk59krgtssKzzfvmY4LkDOzG.', NULL, NULL, 2, 0, 0, NULL, '2025-08-06 14:57:57', '2025-08-06 14:57:57', NULL),
(5, 'long3@gmail.com', 'long', NULL, '$2b$10$/DQRKZVdgrghk.IFAa432e5i.dDOfDCEsQpZZnu/35tfpikb9CqKi', NULL, NULL, 2, 0, 0, NULL, '2025-08-06 14:59:10', '2025-08-06 14:59:10', NULL),
(6, 'long4@gmail.com', 'long4', NULL, '$2b$10$.ANJh7uAalXYRJxgy.8Rzuqg4klwb3iYTh0wWMPgHW/uTGDA5eseO', NULL, NULL, 2, 0, 0, NULL, '2025-08-13 06:21:57', '2025-08-13 06:21:57', NULL),
(8, 'long5@gmail.com', 'long', NULL, '$2b$10$HdcCTzzC0HOPkoT2rAM55uRqG7DaNMygiISZrOQgjcQjCGlVkgwam', NULL, NULL, 2, 0, 0, NULL, '2025-08-16 17:52:52', '2025-08-16 17:52:52', NULL),
(9, 'long6@gmail.com', 'long', NULL, '$2b$10$YscrCYBPAbI7H1zTP5xCNeaGu0I9/CkuPqVeo04br2sj6CMjm7.fG', NULL, NULL, 2, 0, 0, NULL, '2025-08-16 17:54:22', '2025-08-16 17:54:22', NULL),
(10, 'long7@gmail.com', 'bi', NULL, '$2b$10$5lDC6dRdKs.SDRhJGmAqBOivOvl2bb8PNBol7P3HAr4md25Q9gi2e', NULL, NULL, 2, 0, 0, NULL, '2025-08-16 17:56:11', '2025-08-24 02:02:07', NULL),
(11, 'vulebaolong@gmail.com', 'Bảo Long Vũ Lê', 'local-1756608644411-891220719.png', NULL, NULL, '100424098984127389694', 2, 0, 0, NULL, '2025-08-19 18:11:35', '2025-08-31 02:50:44', NULL),
(27, 'long999@gmail.com', 'long999', NULL, '$2b$10$miCNfM018YGp6v.T3hK8ge67tbQnpeeIRJeYkxKYt9miRaLbB668C', NULL, NULL, 2, 0, 0, NULL, '2025-08-24 04:14:12', '2025-08-24 04:14:36', NULL),
(29, 'anhlong@gmail.com', 'anhlong', NULL, '$2b$10$0OvroazH4h8zi/BxVJJAs./Pegu9Ol.SW1LvshcSsHQPQ.1JmqHPa', NULL, NULL, 2, 0, 0, NULL, '2025-09-10 13:37:01', '2025-09-14 02:22:36', NULL);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;