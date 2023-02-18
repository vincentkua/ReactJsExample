CREATE DATABASE  IF NOT EXISTS `spmovies` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spmovies`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: spmovies
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genre_table`
--

DROP TABLE IF EXISTS `genre_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_table` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`genre_id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_table`
--

LOCK TABLES `genre_table` WRITE;
/*!40000 ALTER TABLE `genre_table` DISABLE KEYS */;
INSERT INTO `genre_table` VALUES (1,'sci-fi','sci-fi movie category'),(2,'fantasy','fantasy movie category'),(3,'action','action movie category'),(4,'comedy','comedy movie category'),(5,'horror','horror movie category'),(6,'adventure','adventure movie category'),(7,'fiction','fiction movie category');
/*!40000 ALTER TABLE `genre_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_table`
--

DROP TABLE IF EXISTS `movie_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_table` (
  `movie_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `release_date` datetime NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `genre_id` int NOT NULL,
  `active` varchar(1) NOT NULL,
  `date_inserted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`movie_id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_genreid_idx` (`genre_id`),
  CONSTRAINT `fk_genreid` FOREIGN KEY (`genre_id`) REFERENCES `genre_table` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_table`
--

LOCK TABLES `movie_table` WRITE;
/*!40000 ALTER TABLE `movie_table` DISABLE KEYS */;
INSERT INTO `movie_table` VALUES (1,'Black Adam','Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam!','2022-10-21 00:00:00','movie1.jpg',3,'Y','2022-12-16 21:05:39'),(2,'Avatar','James Cameron\'s Academy Award®-winning 2009 epic adventure \"Avatar\", returns to theaters September 23','2009-12-18 00:00:00','movie2.jpg',3,'N','2022-12-16 22:44:37'),(3,'Black Panther: Wakanda Forever','Wakanda Forever is a 2022 American superhero film based on the Marvel Comics character Black Panther. Produced by Marvel Studios','2022-11-11 00:00:00','movie3.jpg',6,'Y','2022-12-16 22:56:18'),(4,'Emancipation','A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.','2022-12-09 00:00:00','movie4.jpg',6,'Y','2022-12-17 00:40:36');
/*!40000 ALTER TABLE `movie_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_table_log`
--

DROP TABLE IF EXISTS `movie_table_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_table_log` (
  `changelog_id` int NOT NULL AUTO_INCREMENT,
  `change_type` varchar(45) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `movie_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `release_date` datetime NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `genre_id` int NOT NULL,
  `active` varchar(1) NOT NULL,
  `date_inserted` datetime NOT NULL,
  PRIMARY KEY (`changelog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_table_log`
--

LOCK TABLES `movie_table_log` WRITE;
/*!40000 ALTER TABLE `movie_table_log` DISABLE KEYS */;
INSERT INTO `movie_table_log` VALUES (1,'UPDATE','2022-12-19 15:10:03',9,'Emancipation 9','A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 15:09:38'),(2,'UPDATE','2022-12-19 15:11:39',9,'Emancipation 9','update movie description test','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 15:09:38'),(3,'UPDATE','2022-12-19 15:17:04',9,'Emancipation 9','Update again','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 15:09:38'),(4,'DELETE','2022-12-19 15:18:09',9,'Emancipation 9','Update again 2','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 15:09:38'),(5,'DELETE','2022-12-19 20:47:50',10,'Emancipation 9','A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 20:42:02'),(6,'DELETE','2022-12-19 20:49:34',11,'Emancipation 9','A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 20:48:50'),(7,'UPDATE','2022-12-19 22:33:25',12,'Emancipation 7','A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.','2022-12-09 00:00:00','movie5.jpg',6,'Y','2022-12-19 22:31:29'),(8,'UPDATE','2022-12-19 22:43:52',12,'update movie name','update movie description test','2022-12-19 00:00:00','movie12.jpg',4,'Y','2022-12-19 00:00:00');
/*!40000 ALTER TABLE `movie_table_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'spadmin@gmail.com','spadmin','admin','$2a$10$Pqtz/HF2T1JXbBuI0Fzs8Ok63qAS0jo1S3.tFYSJB1LNO4TZWnuky'),(12,'spuser@gmail.com','spuser','member','$2a$10$2hiDZccaRWWBvSUbJ7.7e.wwJbTQG8ulm21ywnviNHRDmPziEyjwS');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 22:57:26
