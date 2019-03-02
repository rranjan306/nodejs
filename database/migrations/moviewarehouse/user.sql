--
-- Table structure for table `user`
--

CREATE TABLE `user`(
  `id` int(10) unsigned  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10)  NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,

  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
