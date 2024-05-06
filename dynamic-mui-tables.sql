-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 06, 2024 at 01:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kahenya`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`) VALUES
(1, 'Department of Agricultural Economics & Agribusiness Management'),
(2, 'Department of Agricultural Education and Extension'),
(3, 'Department of Agricultural Engineering'),
(4, 'Animal Sciences'),
(5, 'Department of Applied Development And Community Studies'),
(6, 'Department of Biochemistry'),
(7, 'Department of Biological Sciences'),
(8, 'Department of Business Administration'),
(9, 'Department of Chemistry'),
(10, 'Department of Crops, Horticulture and Soils'),
(11, 'Department of Civil Engineering'),
(12, 'Department of Clinical Medicine'),
(13, 'Department of Computer Science'),
(14, 'Department of Curriculum And Instruction'),
(15, 'Department of Economics'),
(16, 'Department of Electrical Engineering'),
(17, 'Department of Environmental Science'),
(18, 'Department of Geography'),
(19, 'Department of History, Philosophy and Religion'),
(20, 'Department of Human Anatomy'),
(21, 'Department of Human Nutrition'),
(22, 'Department of Industrial Energy'),
(23, 'Department of Literature Language And Linguistics'),
(24, 'Department of Mathematics'),
(25, 'Department of Medicine, Child Health and Community Health'),
(26, 'Department of Natural Resources'),
(27, 'Department of Nursing'),
(28, 'Department of Peace, Security and Social Studies'),
(29, 'Department of Physics'),
(30, 'Department of Surgery and Reproductive Health'),
(31, 'Department of Medical Physiology');

-- --------------------------------------------------------

--
-- Table structure for table `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `entries`
--

INSERT INTO `entries` (`id`, `department_id`, `owner_id`, `created_at`) VALUES
(1, 1, 8, '2024-04-02 16:37:58'),
(2, 2, 2, '2024-04-02 16:51:17'),
(3, 2, 2, '2024-04-02 16:51:51');

-- --------------------------------------------------------

--
-- Table structure for table `entry_policies`
--

CREATE TABLE `entry_policies` (
  `id` int(11) NOT NULL,
  `legal_policy_id` int(11) NOT NULL,
  `require_change` tinyint(4) NOT NULL,
  `suggestion` varchar(255) NOT NULL,
  `entry_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `entry_services`
--

CREATE TABLE `entry_services` (
  `id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `digital` tinyint(4) NOT NULL,
  `timeline_id` int(11) NOT NULL,
  `ecitizen` tinyint(4) NOT NULL,
  `entry_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `legal_policies`
--

CREATE TABLE `legal_policies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `legal_policies`
--

INSERT INTO `legal_policies` (`id`, `name`) VALUES
(1, 'Egerton University ICT Policy'),
(2, 'HR Policy & Procedure Manual'),
(3, 'Procurement Policy'),
(4, 'Fiscal Policy'),
(5, 'M&E Policy'),
(6, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`id`, `title`) VALUES
(1, 'VC'),
(2, 'DVC AFP'),
(3, 'DVC AR&E'),
(4, 'Principal'),
(5, 'Registrar'),
(6, 'Director'),
(7, 'Dean'),
(8, 'COD/Hod'),
(9, 'Coordinator');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`) VALUES
(1, 'Registry Administration'),
(2, 'ICT User Support Services'),
(3, 'ICT Security and Maintenance'),
(4, 'Staff Recruitment and Selection'),
(5, 'Staff Leave Management'),
(6, 'Staff Discipline'),
(7, 'Budget Preparation and Implementation'),
(8, 'Payments'),
(9, 'Preparation of University Strategic Plans'),
(10, 'Registration for NHIF Services'),
(11, 'Payment of Pension Benefits'),
(12, 'NSSF Services'),
(13, 'Insurance Services'),
(14, 'Security Services'),
(15, 'Procurement of Insurance Services'),
(16, 'Maintenance of Plant and equipment'),
(17, 'Allocation of Staff Houses'),
(18, 'Landscaping and Maintenance of University grounds'),
(19, 'Maintenance of Infrastructure and Equipment'),
(20, 'Accommodation Services'),
(21, 'Catering Services'),
(22, 'Monitoring of Accommodation and Catering & Disability Services'),
(23, 'Provision of transport services and work ticketing'),
(24, 'Motor Vehicle Maintenance and Repairs'),
(25, 'Handing-over'),
(26, 'Medical Services'),
(27, 'Staff Orientation/Induction'),
(28, 'Alumni Services'),
(29, 'Staff Deployment'),
(30, 'Management of Capital Projects'),
(31, 'Repair and Maintenance of Pump sets and General Plumbing Works'),
(32, 'Water Treatment'),
(33, 'Waste Water Management'),
(34, 'Legal services'),
(35, 'Collecting, organizing, editing and uploading information to the University website'),
(36, 'Student Finance Accounting'),
(37, 'Income Generating Activities'),
(38, 'Marketing and Communication'),
(39, 'Fundraising'),
(40, 'Staff Performance appraisal'),
(41, 'Recruitment of Chaplaincy Fellows'),
(42, 'Approval of Students’ Development Project Proposals'),
(43, 'Games Activities'),
(44, 'Curriculum Development and Review'),
(45, 'Production of University Catalogue'),
(46, 'Admission and registration of students'),
(47, 'Orientation of First Year Students'),
(48, 'Timetabling'),
(49, 'Teaching'),
(50, 'Examinations Management'),
(51, 'Theses Examination'),
(52, 'Calibration of equipment'),
(53, 'Circulation Services'),
(54, 'Students Counseling'),
(55, 'Students Discipline'),
(56, 'Recruiting International Students'),
(57, 'Facilitation of International Students’ Passes'),
(58, 'Facilitation of  Memorandum of Understanding'),
(59, 'Facilitation of  Staff &Students Exchange  Programmes'),
(60, 'Library Collection Development and Management'),
(61, 'Library Technical Processing Services'),
(62, 'Library Archives Services'),
(63, 'Validation of Transcripts and Certificates'),
(64, 'Student Registration for Clubs and Associations'),
(65, 'Work-Study Programme'),
(66, 'Bursary Allocation'),
(67, 'Conducting of Student Union Elections/Inauguration/Induction'),
(68, 'Recruitment and Training of Peer Counselors'),
(69, 'Student’s Death & Funeral'),
(70, 'Culture Week and Thanks Giving Service'),
(71, 'Public lectures/Career Talks'),
(72, 'Library Weeding and Disposal of Print Collection'),
(73, 'Re-registration of Students'),
(74, 'Deferment'),
(75, 'Programme Transfer'),
(76, 'Examination Administration'),
(77, 'Course Registration'),
(78, 'Credit Transfer'),
(79, 'Appointment of Part-time Lecturers/ Technicians'),
(80, 'Appointment of External Examiner'),
(81, 'Academic Practicals'),
(82, 'Academic Trips'),
(83, 'Teaching Practice /Field /Industrial Attachment'),
(84, 'Internal Engineering Practice'),
(85, 'Examination Administration'),
(86, 'Remarking failed exams'),
(87, 'Retaking failed Courses'),
(88, 'Library Resource Centre'),
(89, 'Africana, Periodicals and Special collections services'),
(90, 'Library Reference Services'),
(91, 'JD Rockefeller (TEAL) Library'),
(92, 'Library Shelving and Withdrawal of Torn Books'),
(93, 'Research proposals  submission during covid pandemic'),
(94, 'Thesis submission during covid'),
(95, 'Virtual graduation'),
(96, 'M&E of Protocols Approved by the Ethics Committee'),
(97, 'Ethical  Review of  Research Proposals'),
(98, 'Funding and  Management  of Research Projects'),
(99, 'Extension  and Outreach Activities'),
(100, 'Dissemination of Research Findings'),
(101, 'Industry Liaison'),
(102, 'Short term training'),
(103, 'Shows and exhibitions'),
(104, 'Internal Audit'),
(105, 'Communication'),
(106, 'University Meetings'),
(107, 'Employee, Customer and Work Environment Satisfaction Surveys'),
(108, 'Teaching Effectiveness Evaluation'),
(109, 'Self-Assessment of Academic Programmes'),
(110, 'Management Review'),
(111, 'Complaints Handling'),
(112, 'Appointment of HODs/CODs /Directors'),
(113, 'Handling Corruption'),
(114, 'Procurement of Goods and Services'),
(115, 'Disposal of Stores and Equipment'),
(116, 'Auditing Academic Procedures and Processes'),
(117, 'Internal Financial and Systems Audit'),
(118, 'Analysis of External Examiners’ Report'),
(119, 'Fundraising'),
(120, 'Imprest Management'),
(121, 'Receiving Income'),
(122, 'Preparation of Quarterly And Annual Financial Reports'),
(123, 'Marketing and Communication'),
(124, 'Alumni Services'),
(125, 'Corruption Risk Assessment'),
(126, 'Payments'),
(127, 'Student Finance Accounting'),
(128, 'Income Generating Activities'),
(129, 'Processing of Tender'),
(130, 'Official Staff Travel Abroad'),
(131, 'Internal Audit'),
(132, 'Communication'),
(133, 'University Meetings'),
(134, 'Employee, Customer and Work Environment Satisfaction Surveys'),
(135, 'Teaching Effectiveness Evaluation'),
(136, 'Self-Assessment of Academic Programmes'),
(137, 'Management Review'),
(138, 'Complaints Handling'),
(139, 'Appointment of HODs/CODs /Directors'),
(140, 'Handling Corruption'),
(141, 'Procurement of Goods and Services'),
(142, 'Disposal of Stores and Equipment'),
(143, 'Auditing Academic Procedures and Processes'),
(144, 'Internal Financial and Systems Audit'),
(145, 'Analysis of External Examiners’ Report'),
(146, 'Fundraising'),
(147, 'Imprest Management'),
(148, 'Receiving Income'),
(149, 'Preparation of Quarterly And Annual Financial Reports'),
(150, 'Marketing and Communication'),
(151, 'Alumni Services'),
(152, 'Corruption Risk Assessment'),
(153, 'Payments'),
(154, 'Student Finance Accounting'),
(155, 'Income Generating Activities'),
(156, 'Processing of Tender'),
(157, 'Official Staff Travel Abroad'),
(158, 'Sales');

-- --------------------------------------------------------

--
-- Table structure for table `timelines`
--

CREATE TABLE `timelines` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timelines`
--

INSERT INTO `timelines` (`id`, `title`) VALUES
(1, 'Y1-2023/24'),
(2, 'Y2-2024/25'),
(3, 'Y3-2025/26'),
(4, 'Y4-2026/27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_department_id` (`department_id`),
  ADD KEY `fk_owner_id` (`owner_id`);

--
-- Indexes for table `entry_policies`
--
ALTER TABLE `entry_policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_legal_policy_id` (`legal_policy_id`),
  ADD KEY `fk_entry_policy_id` (`entry_id`);

--
-- Indexes for table `entry_services`
--
ALTER TABLE `entry_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_entry_id` (`entry_id`),
  ADD KEY `fk_service_id` (`service_id`),
  ADD KEY `fk_timeline_id` (`timeline_id`);

--
-- Indexes for table `legal_policies`
--
ALTER TABLE `legal_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timelines`
--
ALTER TABLE `timelines`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `entry_policies`
--
ALTER TABLE `entry_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entry_services`
--
ALTER TABLE `entry_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `legal_policies`
--
ALTER TABLE `legal_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `timelines`
--
ALTER TABLE `timelines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `entries`
--
ALTER TABLE `entries`
  ADD CONSTRAINT `fk_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  ADD CONSTRAINT `fk_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`id`);

--
-- Constraints for table `entry_policies`
--
ALTER TABLE `entry_policies`
  ADD CONSTRAINT `fk_entry_policy_id` FOREIGN KEY (`entry_id`) REFERENCES `entries` (`id`),
  ADD CONSTRAINT `fk_legal_policy_id` FOREIGN KEY (`legal_policy_id`) REFERENCES `legal_policies` (`id`);

--
-- Constraints for table `entry_services`
--
ALTER TABLE `entry_services`
  ADD CONSTRAINT `fk_entry_id` FOREIGN KEY (`entry_id`) REFERENCES `entries` (`id`),
  ADD CONSTRAINT `fk_service_id` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `fk_timeline_id` FOREIGN KEY (`timeline_id`) REFERENCES `timelines` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
