-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2022 at 05:57 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uniform_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_color`
--

CREATE TABLE `tb_color` (
  `cl_id` bigint(20) NOT NULL,
  `cl_name` varchar(50) NOT NULL,
  `cl_status` bit(1) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_color`
--

INSERT INTO `tb_color` (`cl_id`, `cl_name`, `cl_status`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(2, 'สีน้ำเงิน', b'1', 'test', '2022-05-13', '', ''),
(4, 'สีคราม', b'1', 'test', '2022-05-13', 'test', '2022-05-13'),
(5, 'สีแดงเลือดหมู', b'1', 'test', '2022-05-13', '', ''),
(6, 'สีฟ้าสว่าง', b'1', 'test', '2022-05-13', '', ''),
(7, 'สีเขียวอมฟ้า', b'1', 'test', '2022-05-13', '', ''),
(8, 'สีกรมท่า', b'1', 'test', '2022-05-13', '', ''),
(9, 'สีม่วง', b'1', 'test', '2022-05-13', '', ''),
(10, 'สียีนส์', b'1', 'test', '2022-05-13', '', ''),
(11, 'สีเทา', b'1', 'test', '2022-05-13', '', ''),
(12, 'สีเขียวเข้ม', b'1', 'test', '2022-05-13', '', ''),
(13, 'สีน้ำเงิน', b'1', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_figure`
--

CREATE TABLE `tb_figure` (
  `fg_id` bigint(20) NOT NULL,
  `fg_name` varchar(50) NOT NULL,
  `fg_status` bit(1) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_figure`
--

INSERT INTO `tb_figure` (`fg_id`, `fg_name`, `fg_status`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 'กางเกงกีฬาขายาวผู้ชาย', b'1', 'test', '2022-05-13', 'test', '2022-05-13'),
(4, 'ขาสั้น', b'1', 'test', '2022-05-13', '', ''),
(8, 'กาเกงยีนส์ทรงเข้ารูป', b'1', 'test', '2022-05-13', '', ''),
(9, 'กาเกงยีนส์ทรงกว้าง', b'1', 'test', '2022-05-13', '', ''),
(10, 'กาเกงยีนส์ทรงสกินนี่', b'1', 'test', '2022-05-13', '', ''),
(11, 'กาเกงยีนส์ทรงตรง', b'1', 'test', '2022-05-13', '', ''),
(12, 'กางเกงทรงหลวม', b'1', 'test', '2022-05-13', '', ''),
(13, 'กางเกงขายาวทรงกว้าง', b'1', 'test', '2022-05-13', '', ''),
(14, 'กางเกงขา5ส่วนผู้ชาย', b'1', 'test', '2022-05-13', '', ''),
(15, 'กางเกงขาสั้น', b'1', 'test', '2022-05-13', '', ''),
(16, 'กางเกงขาสั้นทรงกว้าง', b'1', 'test', '2022-05-13', '', ''),
(17, 'กางเกงยีนขาสั้น', b'1', 'test', '2022-05-13', '', ''),
(25, 'กางเกงยีนส์ทรงกระบอก', b'1', 'test', '2022-05-13', '', ''),
(26, 'กางเกงยีนส์ทรงขาบานผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(27, 'กาเกงยีนส์เอวสูงขาตรงผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(28, 'กางเกงขาบานผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(29, 'กระโปรงพลีทผ่าข้างผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(30, 'กระโปรงทรงบอลลูนผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(31, 'กระโปรงสั้นเอวสูงผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(32, 'กระโปรงทรงเอผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(33, 'กางเกงขาสั้นมีจีบผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(34, 'กางเกงขาสั้นผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(35, 'กระโปรงทรงแคบผู้หญิง', b'1', 'test', '2022-05-13', '', ''),
(36, 'กางเกงกีฬาขายาวผู้ชาย', b'1', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_gender`
--

CREATE TABLE `tb_gender` (
  `gd_id` bigint(20) NOT NULL,
  `gd_name` varchar(10) NOT NULL,
  `create_by` varchar(50) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_by` varchar(50) DEFAULT NULL,
  `update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_gender`
--

INSERT INTO `tb_gender` (`gd_id`, `gd_name`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 'หญิง', 'test001', '2022-12-05', NULL, NULL),
(2, 'ชาย', 'test', '2022-05-13', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_order`
--

CREATE TABLE `tb_order` (
  `od_id` bigint(20) NOT NULL,
  `od_status` varchar(20) NOT NULL,
  `od_sell` decimal(10,0) DEFAULT NULL,
  `od_address` varchar(250) NOT NULL,
  `od_phone` int(10) NOT NULL,
  `od_active` bit(1) DEFAULT NULL,
  `od_date` datetime NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order`
--

INSERT INTO `tb_order` (`od_id`, `od_status`, `od_sell`, `od_address`, `od_phone`, `od_active`, `od_date`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 'กำลังจัดส่ง', '1600', 'ปางประกง', 23456789, b'1', '2022-05-20 00:00:00', 'test', '2022-05-13', 'test', '2022-05-20'),
(2, 'ชำระเงินแล้ว', '1500', 'ปางประกง', 23456789, b'1', '2022-05-13 00:00:00', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_detail`
--

CREATE TABLE `tb_order_detail` (
  `odd_id` bigint(20) NOT NULL,
  `od_id` bigint(20) NOT NULL,
  `pd_name` varchar(50) NOT NULL,
  `gd_name` varchar(10) NOT NULL,
  `cl_name` varchar(50) NOT NULL,
  `pt_name` varchar(50) NOT NULL,
  `fg_name` varchar(50) NOT NULL,
  `odd_amount` int(11) DEFAULT NULL,
  `odd_sell` decimal(10,0) DEFAULT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order_detail`
--

INSERT INTO `tb_order_detail` (`odd_id`, `od_id`, `pd_name`, `gd_name`, `cl_name`, `pt_name`, `fg_name`, `odd_amount`, `odd_sell`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 1, 'เสื้อโปโล', 'หญิง', 'สีขาว', 'ผ้าฝ้าย', 'แขนยาว', 1, '1500', 'tesr1', '2022-05-13', 'tesr1', '2022-05-13');

-- --------------------------------------------------------

--
-- Table structure for table `tb_pattern`
--

CREATE TABLE `tb_pattern` (
  `pt_id` bigint(20) NOT NULL,
  `pt_name` varchar(50) NOT NULL,
  `pt_status` bit(1) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_pattern`
--

INSERT INTO `tb_pattern` (`pt_id`, `pt_name`, `pt_status`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 'ผ้าป่าน', b'1', 'test', '2022-05-13', 'test', '2022-05-13'),
(2, 'ผ้าฝ้าย', b'1', 'test', '2022-05-13', '', ''),
(3, 'ผ้าซาติน', b'1', 'test', '2022-05-13', '', ''),
(4, 'ผ้าลินิน', b'1', 'test', '2022-05-13', '', ''),
(5, 'ผ้าใยสังเคราะห์', b'1', 'test', '2022-05-13', '', ''),
(7, 'ผ้าคอตตอน', b'1', 'test', '2022-05-13', '', ''),
(8, 'ผ้าชีฟอง', b'1', 'test', '2022-05-13', '', ''),
(9, 'ผ้าไนลอน', b'1', 'test', '2022-05-13', '', ''),
(10, 'ผ้าขนสัตว์', b'1', 'test', '2022-05-13', '', ''),
(11, 'ผ้าลูกไม้', b'1', 'test', '2022-05-13', '', ''),
(12, 'ผ้าแพร', b'1', 'test', '2022-05-13', '', ''),
(13, 'ผ้าชีฟอง', b'1', 'undefined', 'undefined', '', ''),
(14, 'ผ้าฮานาโกะ', b'1', 'undefined', 'undefined', '', ''),
(15, 'ผ้ากำมะหยี่', b'1', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `pd_id` bigint(20) NOT NULL,
  `pd_name` varchar(100) NOT NULL,
  `pd_image` varchar(500) NOT NULL,
  `pd_status` bit(1) NOT NULL,
  `pd_amount` int(11) NOT NULL,
  `pd_detail` varchar(250) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`pd_id`, `pd_name`, `pd_image`, `pd_status`, `pd_amount`, `pd_detail`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 'undefined', 'https://img.ltwebstatic.com/images3_pi/2021/06/16/1623807875133db989cca37d2ffa9fd0d994963896_thumbnail_900x.webp', b'1', 10, '95% เส้นใยสังเคราะห์, 5% แปนเด็กซ์', 'test', '2022-05-13', 'test', '2022-05-13'),
(2, 'เสื้อยืด ทรงหลวม', 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/447291/item/thgoods_56_447291.jpg?width=1600&impolicy=quality_75', b'1', 50, 'ดีไซน์แขนสามส่วนออกแบบมาเพื่อตอบรับความต้องการของลูกค้า', 'test', '2022-05-13', '', ''),
(4, 'เสื้อเชิ้ตแจ็คแก็ต', 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/452344/item/thgoods_02_452344.jpg?width=1600&impolicy=quality_75', b'1', 50, 'เนื้อผ้ายืดหยุ่นได้ดี มีน้ำหนักเบา และแห้งเร็ว ซึ่งเป็นผลงานการพัฒนาร่วมกับ Toray Industries', 'test', '2022-05-13', '', ''),
(5, 'เสื้อเชิ้ต คอเปิด', 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/449176/item/thgoods_09_449176.jpg?width=1600&impolicy=quality_75', b'1', 50, 'ดีไซน์เพรียวบางมาพร้อมกระเป๋าปะที่หน้าอก', 'test', '2022-05-13', '', ''),
(7, 'กางเกงยีนส์', 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/447647/item/thgoods_64_447647.jpg?width=1600&impolicy=quality_75', b'1', 50, 'ผ้าเดนิมเนื้อยืดพิเศษ 90% เกงยีนส์เนื้อผ้ายืดหยุ่นที่สุดของยูนิโคล่', 'test', '2022-05-13', '', ''),
(8, 'กระโปรงยีนส์', 'https://img.ltwebstatic.com/images3_pi/2021/11/20/163738752600c3ab4ae4cd0913dcf66b43e905a70d.png', b'1', 50, '85% ฝ้าย, 15% เส้นใยสังเคราะห์', 'test', '2022-05-13', '', ''),
(9, 'กระโปรงสีล้วน', 'https://img.ltwebstatic.com/images2_pi/2019/03/12/15523689862302687333_thumbnail_900x1199.webp', b'1', 50, '85% ฝ้าย, 15% เส้นใยสังเคราะห์', 'test', '2022-05-13', '', ''),
(10, 'กระโปรงทรงบาน', 'https://img.ltwebstatic.com/images3_pi/2021/06/16/1623807875133db989cca37d2ffa9fd0d994963896_thumbnail_900x.webp', b'1', 50, '95% เส้นใยสังเคราะห์, 5% แปนเด็กซ์', 'test', '2022-05-13', '', ''),
(11, 'กระโปรงทรงบานมากๆ', 'https://img.ltwebstatic.com/images3_pi/2021/06/16/1623807875133db989cca37d2ffa9fd0d994963896_thumbnail_900x.webp', b'1', 50, '95% เส้นใยสังเคราะห์, 5% แปนเด็กซ์', 'test', '2022-05-13', '', ''),
(12, 'กระโปรงทรงบานมากๆ', 'https://img.ltwebstatic.com/images3_pi/2021/06/16/1623807875133db989cca37d2ffa9fd0d994963896_thumbnail_900x.webp', b'1', 50, '95% เส้นใยสังเคราะห์, 5% แปนเด็กซ์', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_list`
--

CREATE TABLE `tb_product_list` (
  `pdl_id` bigint(20) NOT NULL,
  `pd_id` bigint(20) NOT NULL,
  `gd_id` bigint(20) NOT NULL,
  `cl_id` bigint(20) NOT NULL,
  `pt_id` bigint(20) NOT NULL,
  `fg_id` bigint(20) NOT NULL,
  `sz_id` bigint(20) NOT NULL,
  `pdl_price` decimal(10,0) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product_list`
--

INSERT INTO `tb_product_list` (`pdl_id`, `pd_id`, `gd_id`, `cl_id`, `pt_id`, `fg_id`, `sz_id`, `pdl_price`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(1, 2, 3, 2, 1, 1, 5, '1500', 'test', '2022-05-13', 'test', '2022-05-13'),
(2, 2, 1, 2, 1, 1, 3, '1500', 'test', '2022-05-13', '', ''),
(3, 2, 1, 2, 1, 1, 5, '1500', 'test', '2022-05-13', '', ''),
(4, 2, 1, 2, 1, 1, 3, '1500', 'test', '2022-05-13', '', ''),
(6, 2, 1, 2, 1, 1, 6, '1500', 'test', '2022-05-13', '', ''),
(7, 3, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(8, 4, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(9, 5, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(10, 6, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(11, 7, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(12, 8, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(13, 9, 2, 2, 1, 2, 6, '1500', 'test', '2022-05-13', '', ''),
(14, 9, 1, 3, 1, 3, 5, '1500', 'test', '2022-05-13', '', ''),
(15, 4, 1, 5, 1, 4, 5, '1500', 'test', '2022-05-13', '', ''),
(16, 10, 1, 5, 1, 6, 7, '1500', 'test', '2022-05-13', '', ''),
(17, 10, 1, 5, 5, 6, 7, '1500', 'test', '2022-05-13', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_size`
--

CREATE TABLE `tb_size` (
  `sz_id` bigint(20) NOT NULL,
  `sz_name` varchar(2) NOT NULL,
  `create_by` varchar(50) NOT NULL,
  `create_date` varchar(50) NOT NULL,
  `update_by` varchar(50) NOT NULL,
  `update_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_size`
--

INSERT INTO `tb_size` (`sz_id`, `sz_name`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
(3, 'XS', 'test', '2022-05-13', '', ''),
(4, 'S', 'test', '2022-05-13', '', ''),
(5, 'M', 'test', '2022-05-13', '', ''),
(6, 'L', 'test', '2022-05-13', '', ''),
(7, 'XL', 'test', '2022-05-13', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_color`
--
ALTER TABLE `tb_color`
  ADD PRIMARY KEY (`cl_id`);

--
-- Indexes for table `tb_figure`
--
ALTER TABLE `tb_figure`
  ADD PRIMARY KEY (`fg_id`);

--
-- Indexes for table `tb_gender`
--
ALTER TABLE `tb_gender`
  ADD PRIMARY KEY (`gd_id`);

--
-- Indexes for table `tb_order`
--
ALTER TABLE `tb_order`
  ADD PRIMARY KEY (`od_id`);

--
-- Indexes for table `tb_order_detail`
--
ALTER TABLE `tb_order_detail`
  ADD PRIMARY KEY (`odd_id`);

--
-- Indexes for table `tb_pattern`
--
ALTER TABLE `tb_pattern`
  ADD PRIMARY KEY (`pt_id`);

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`pd_id`);

--
-- Indexes for table `tb_product_list`
--
ALTER TABLE `tb_product_list`
  ADD PRIMARY KEY (`pdl_id`);

--
-- Indexes for table `tb_size`
--
ALTER TABLE `tb_size`
  ADD PRIMARY KEY (`sz_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_color`
--
ALTER TABLE `tb_color`
  MODIFY `cl_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_figure`
--
ALTER TABLE `tb_figure`
  MODIFY `fg_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tb_gender`
--
ALTER TABLE `tb_gender`
  MODIFY `gd_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_order`
--
ALTER TABLE `tb_order`
  MODIFY `od_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_order_detail`
--
ALTER TABLE `tb_order_detail`
  MODIFY `odd_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_pattern`
--
ALTER TABLE `tb_pattern`
  MODIFY `pt_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tb_product`
--
ALTER TABLE `tb_product`
  MODIFY `pd_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tb_product_list`
--
ALTER TABLE `tb_product_list`
  MODIFY `pdl_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tb_size`
--
ALTER TABLE `tb_size`
  MODIFY `sz_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
