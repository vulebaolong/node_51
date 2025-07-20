
-- DATABASE -----------------------
CREATE DATABASE `demo_database_1`
CREATE DATABASE IF NOT EXISTS `demo_database_1`
DROP DATABASE `demo_database_1`
DROP DATABASE IF EXISTS `demo_database_1`
USE `demo_database`

-- TABLE -----------------------
CREATE TABLE `User` (
	`id` INT PRIMARY KEY AUTO_INCREMENT, 
	`fullName` VARCHAR(255), 
	`OTP` CHAR(5),
	`avatar` VARCHAR(255)
);

RENAME TABLE `User` TO `Users`;

DROP TABLE `Users`

-- Xoá dữ liệu bên trong Users nhưng không xoá bảng
-- Xoá đi bộ nhớ tự động tăng
TRUNCATE TABLE `Foods`

-- KHI ĐÃ CÓ TABLE => ALTER TABLE -----------------------
-- Thêm cột
ALTER TABLE `Users`
ADD `password` VARCHAR(255);

-- Xoá cột
ALTER TABLE `Users`
DROP COLUMN `password`

-- RÀNG BUỘC -----------------------
-- DEFAULT: đặt giá trị mặc định cho cột
-- NOT NULL: không được rỗng, bắt buộc phải có dữ liệu
-- UNIQUE: đảm bảo cột có dữ liệu duy nhất, không có dữ liệu nào bị trùng nhau
-- PRIMARY KEY: 
		-- một bảng thì chỉ tồn tại duy nhất 1 PRIMARY KEY
		-- PRIMARY KEY có thể gắn được với nhiều cột

CREATE TABLE `Foods` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(255),
	`description` VARCHAR(255) DEFAULT "Chưa có thông tin",
)

ALTER TABLE `Foods`
-- MODIFY `id` INT NOT NULL
-- MODIFY `id` INT NOT NULL UNIQUE
-- MODIFY `id` INT PRIMARY KEY 
MODIFY `id` INT AUTO_INCREMENT

INSERT INTO `Foods` (`name`, `description`) VALUES
					("su kem", "được làm từ kem"),
					("gỏi gà", "được làm từ gà"),
					("gỏi vit", "được làm từ vịt"),
					("gỏi cá", "được làm từ cá"),
					("gỏi heo", "được làm từ heo");


ALTER TABLE `Users`
MODIFY `id` INT PRIMARY KEY  AUTO_INCREMENT

INSERT INTO `Users` (`fullName`) VALUES
					("Nguyễn Thị A"),
					("Nguyễn Thị B"),
					("Nguyễn Thị C"),
					("Nguyễn Thị D"),
					("Nguyễn Thị F")


-- kiểm tra version
SELECT VERSION()

-- TRUY VẤN
SELECT `fullName` AS `Họ và tên`
FROM `Users`
WHERE `id` = 5

-- LIMIT
SELECT *
FROM `Users`
LIMIT 2

-- RELATIONSHIP -----------------------
-- n - n (MANY to MANY)
-- 1 - n (ONE to MANY)
-- 1 - 1 (ONE to ONE)

CREATE TABLE `Orders` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,

	`userId` INT,
	`foodId` INT,
	
	FOREIGN KEY (`userId`) REFERENCES  `Users`(`id`),
	FOREIGN KEY (`foodId`) REFERENCES  `Foods`(`id`)
)

-- Khi người dùng đặt hàng
INSERT INTO `Orders`(`userId`, `foodId`) VALUES 
					(1, 2),
					(3, 1),
					(2, 5),
					(1, 3),
					(3, 2)
					
-- INNER JOIN
-- trả về các hàng có giá trị khớp nhau trong cả hai bảng

-- muốn lấy ra không phải là id, mà là dữ liệu có thể xem được
SELECT *
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
INNER JOIN `Foods` ON `Orders`.`foodId` = `Foods`.`id`

-- LEFT & RIGHT JOIN
-- trả về tất cả các hàng từ bảng bên LEFT, ngay cả khi không có bản ghi nào
SELECT *
FROM `Orders`
RIGHT JOIN `Users` ON `Orders`.`userId` = `Users`.`id`

-- CROSS JOIN
SELECT *
FROM `Orders`
CROSS JOIN `Users`

-- GROUP BY, ORDER BY


-- Lần 1 bị lỗi: Query 1 ERROR at Line 131: : Column 'id' in group statement is ambiguous
SELECT *
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `id` -- <= lỗi

-- lần 2 bị lỗi: Query 1 ERROR at Line 133: : Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'demo_database.Orders.id' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
SELECT *
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Users`.`id`

-- lần 3 thành công
SELECT `Orders`.`userId`, `Users`.`id`, `Users`.`fullName`
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Users`.`id`

-- thống kê (tổng hợp) sử dụng kết hợp với GROUP BY: COUNT(), MAX(), MIN(), SUM(), AVG()

SELECT `Orders`.`userId`, `Users`.`id`, `Users`.`fullName`, COUNT(`Users`.`id`) AS `Số lượng đặt hàng`
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Users`.`id`

-- sắp xếp ORDER BY
SELECT `Orders`.`userId`, `Users`.`id`, `Users`.`fullName`, COUNT(`Users`.`id`) AS `Số lượng đặt hàng`
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Users`.`id`
-- DESC: giảm dần
-- ASC: tăng dần
ORDER BY `Số lượng đặt hàng` DESC


-- GIẢI BÀI TẬP
-- Tìm người đã đặt hàng nhiều nhất

-- Bước 1: lấy mốc là bảng Orders
SELECT * 
FROM `Orders`

-- Bước 2: lấy thêm dữ liệu Users
SELECT * 
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`

-- Bước 3: nhóm các user xuất hiện bên trong bảng Orders, để đếm
SELECT `Orders`.`userId`, `Users`.`id`, `Users`.`fullName`, COUNT(`Orders`.`userId`) AS `Số lần mua hàng`
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Orders`.`userId`

-- Bước 4: sắp xếp từ lớn tới bé, và lấy ra record (hàng) đầu tiên
SELECT `Orders`.`userId`, `Users`.`id`, `Users`.`fullName`, COUNT(`Orders`.`userId`) AS `Số lần mua hàng`
FROM `Orders`
INNER JOIN `Users` ON `Orders`.`userId` = `Users`.`id`
GROUP BY `Orders`.`userId`
ORDER BY `Số lần mua hàng` DESC
LIMIT 1

-- Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng).

SELECT *
FROM `Users`
LEFT JOIN `Orders` ON `Users`.`id` = `Orders`.`userId`
LEFT JOIN `LikeRes` ON `Users`.`id` = `LikeRes`.`userId`
WHERE `Orders`.`id` IS NULL AND `LikeRes`.`id`













