-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pruebas
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `comunas`
--

DROP TABLE IF EXISTS `comunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comunas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `region_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`),
  CONSTRAINT `comunas_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunas`
--

LOCK TABLES `comunas` WRITE;
/*!40000 ALTER TABLE `comunas` DISABLE KEYS */;
INSERT INTO `comunas` VALUES (1,'Angol',12),(2,'Carahue',12),(3,'Cholchol',12),(4,'Collipulli',12),(5,'Cunco',12),(6,'Curacautín',12),(7,'Curarrehue',12),(8,'Ercilla',12),(9,'Freire',12),(10,'Galvarino',12),(11,'Gorbea',12),(12,'Lautaro',12),(13,'Loncoche',12),(14,'Lonquimay',12),(15,'Los Sauces',12),(16,'Lumaco',12),(17,'Melipeuco',12),(18,'Nueva Imperial',12),(19,'Padre Las Casas',12),(20,'Perquenco',12),(21,'Pitrufquén',12),(22,'Pucón',12),(23,'Purén',12),(24,'Renaico',12),(25,'Saavedra',12),(26,'Temuco',12),(27,'Teodoro Schmidt',12),(28,'Toltén',12),(29,'Traiguén',12),(30,'Victoria',12),(31,'Vilcún',12),(32,'Villarrica',12),(33,'Corral',13),(34,'Futrono',13),(35,'La Unión',13),(36,'Lago Ranco',13),(37,'Lanco',13),(38,'Los Lagos',13),(39,'Mariquina',13),(40,'Máfil',13),(41,'Paillaco',13),(42,'Panguipulli',13),(43,'Río Bueno',13),(44,'Valdivia',13),(45,'Ancud',14),(46,'Calbuco',14),(47,'Castro',14),(48,'Chaitén',14),(49,'Chonchi',14),(50,'Cochamó',14),(51,'Curaco de Vélez',14),(52,'Dalcahue',14),(53,'Fresia',14),(54,'Frutillar',14),(55,'Futaleufú',14),(56,'Hualaihué',14),(57,'Llanquihue',14),(58,'Los Muermos',14),(59,'Maullín',14),(60,'Osorno',14),(61,'Palena',14),(62,'Puerto Montt',14),(63,'Puerto Octay',14),(64,'Puerto Varas',14),(65,'Puqueldón',14),(66,'Purranque',14),(67,'Puyehue',14),(68,'Queilén',14),(69,'Quellón',14),(70,'Quemchi',14),(71,'Quinchao',14),(72,'Río Negro',14),(73,'San Juan de la Costa',14),(74,'San Pablo',14),(75,'Aysén',15),(76,'Chile Chico',15),(77,'Cisnes',15),(78,'Cochrane',15),(79,'Coyhaique',15),(80,'Guaitecas',15),(81,'Lago Verde',15),(82,'O\'Higgins',15),(83,'Río Ibáñez',15),(84,'Tortel',15),(85,'Antártica',16),(86,'Cabo de Hornos',16),(87,'Laguna Blanca',16),(88,'Natales',16),(89,'Porvenir',16),(90,'Primavera',16),(91,'Punta Arenas',16),(92,'Río Verde',16),(93,'San Gregorio',16),(94,'Timaukel',16),(95,'Torres del Paine',16),(1101,'Iquique',2),(1107,'Alto Hospicio',2),(1401,'Pozo Almonte',2),(1402,'Camiña',2),(1403,'Colchane',2),(1404,'Huara',2),(1405,'Pica',2),(2101,'Antofagasta',3),(2102,'Mejillones',3),(2103,'Sierra Gorda',3),(2104,'Taltal',3),(2201,'Calama',3),(2202,'Ollagüe',3),(2203,'San Pedro de Atacama',3),(2301,'Tocopilla',3),(2302,'María Elena',3),(3101,'Copiapó',4),(3102,'Caldera',4),(3103,'Tierra Amarilla',4),(3201,'Chañaral',4),(3202,'Diego de Almagro',4),(3301,'Vallenar',4),(3302,'Alto del Carmen',4),(3303,'Freirina',4),(3304,'Huasco',4),(4101,'La Serena',5),(4102,'Coquimbo',5),(4103,'Andacollo',5),(4104,'La Higuera',5),(4105,'Paiguano',5),(4106,'Vicuña',5),(4201,'Illapel',5),(4202,'Canela',5),(4203,'Los Vilos',5),(4204,'Salamanca',5),(4301,'Ovalle',5),(4302,'Combarbalá',5),(4303,'Monte Patria',5),(4304,'Punitaqui',5),(4305,'Río Hurtado',5),(5101,'Valparaíso',6),(5102,'Casablanca',6),(5103,'Concón',6),(5104,'Juan Fernández',6),(5105,'Puchuncaví',6),(5107,'Quintero',6),(5109,'Viña del Mar',6),(5201,'Isla de Pascua',6),(5301,'Los Andes',6),(5302,'Calle Larga',6),(5303,'Rinconada',6),(5304,'San Esteban',6),(5401,'La Ligua',6),(5402,'Cabildo',6),(5403,'Papudo',6),(5404,'Petorca',6),(5405,'Zapallar',6),(5501,'Quillota',6),(5502,'Calera',6),(5503,'Hijuelas',6),(5504,'La Cruz',6),(5506,'Nogales',6),(5601,'San Antonio',6),(5602,'Algarrobo',6),(5603,'Cartagena',6),(5604,'El Quisco',6),(5605,'El Tabo',6),(5606,'Santo Domingo',6),(5701,'San Felipe',6),(5702,'Catemu',6),(5703,'Llaillay',6),(5704,'Panquehue',6),(5705,'Putaendo',6),(5706,'Santa María',6),(5801,'Quilpué',6),(5802,'Limache',6),(5803,'Olmué',6),(5804,'Villa Alemana',6),(6101,'Rancagua',8),(6102,'Codegua',8),(6103,'Coinco',8),(6104,'Coltauco',8),(6105,'Doñihue',8),(6106,'Graneros',8),(6107,'Las Cabras',8),(6108,'Machalí',8),(6109,'Malloa',8),(6110,'Mostazal',8),(6111,'Olivar',8),(6112,'Peumo',8),(6113,'Pichidegua',8),(6114,'Quinta de Tilcoco',8),(6115,'Rengo',8),(6116,'Requínoa',8),(6117,'San Vicente',8),(6201,'Pichilemu',8),(6202,'La Estrella',8),(6203,'Litueche',8),(6204,'Marchihue',8),(6205,'Navidad',8),(6206,'Paredones',8),(6301,'San Fernando',8),(6302,'Chépica',8),(6303,'Chimbarongo',8),(6304,'Lolol',8),(6305,'Nancagua',8),(6306,'Palmilla',8),(6307,'Peralillo',8),(6308,'Placilla',8),(6309,'Pumanque',8),(6310,'Santa Cruz',8),(7101,'Talca',9),(7102,'Constitución',9),(7103,'Curepto',9),(7104,'Empedrado',9),(7105,'Maule',9),(7106,'Pelarco',9),(7107,'Pencahue',9),(7108,'Río Claro',9),(7109,'San Clemente',9),(7110,'San Rafael',9),(7201,'Cauquenes',9),(7202,'Chanco',9),(7203,'Pelluhue',9),(7301,'Curicó',9),(7302,'Hualañé',9),(7303,'Licantén',9),(7304,'Molina',9),(7305,'Rauco',9),(7306,'Romeral',9),(7307,'Sagrada Familia',9),(7308,'Teno',9),(7309,'Vichuquén',9),(7401,'Linares',9),(7402,'Colbún',9),(7403,'Longaví',9),(7404,'Parral',9),(7405,'Retiro',9),(7406,'San Javier',9),(7407,'Villa Alegre',9),(7408,'Yerbas Buenas',9),(8101,'Concepción',11),(8102,'Coronel',11),(8103,'Chiguayante',11),(8104,'Florida',11),(8105,'Hualqui',11),(8106,'Lota',11),(8107,'Penco',11),(8108,'San Pedro de la Paz',11),(8109,'Santa Juana',11),(8110,'Talcahuano',11),(8111,'Tomé',11),(8112,'Hualpén',11),(8201,'Lebu',11),(8202,'Arauco',11),(8203,'Cañete',11),(8204,'Contulmo',11),(8205,'Curanilahue',11),(8206,'Los Álamos',11),(8207,'Tirúa',11),(8301,'Los Ángeles',11),(8302,'Antuco',11),(8303,'Cabrero',11),(8304,'Laja',11),(8305,'Mulchén',11),(8306,'Nacimiento',11),(8307,'Negrete',11),(8308,'Quilaco',11),(8309,'Quilleco',11),(8310,'San Rosendo',11),(8311,'Santa Bárbara',11),(8312,'Tucapel',11),(8313,'Yumbel',11),(8314,'Alto Biobío',11),(13101,'Santiago',7),(13102,'Cerrillos',7),(13103,'Cerro Navia',7),(13104,'Conchalí',7),(13105,'El Bosque',7),(13106,'Estación Central',7),(13107,'Huechuraba',7),(13108,'Independencia',7),(13109,'La Cisterna',7),(13110,'La Florida',7),(13111,'La Granja',7),(13112,'La Pintana',7),(13113,'La Reina',7),(13114,'Las Condes',7),(13115,'Lo Barnechea',7),(13116,'Lo Espejo',7),(13117,'Lo Prado',7),(13118,'Macul',7),(13119,'Maipú',7),(13120,'Ñuñoa',7),(13121,'Pedro Aguirre Cerda',7),(13122,'Peñalolén',7),(13123,'Providencia',7),(13124,'Pudahuel',7),(13125,'Quilicura',7),(13126,'Quinta Normal',7),(13127,'Recoleta',7),(13128,'Renca',7),(13129,'San Joaquín',7),(13130,'San Miguel',7),(13131,'San Ramón',7),(13132,'Vitacura',7),(13201,'Puente Alto',7),(13202,'Pirque',7),(13203,'San José de Maipo',7),(13301,'Colina',7),(13302,'Lampa',7),(13303,'Tiltil',7),(13401,'San Bernardo',7),(13402,'Buin',7),(13403,'Calera de Tango',7),(13404,'Paine',7),(13501,'Melipilla',7),(13502,'Alhué',7),(13503,'Curacaví',7),(13504,'María Pinto',7),(13505,'San Pedro',7),(13601,'Talagante',7),(13602,'El Monte',7),(13603,'Isla de Maipo',7),(13604,'Padre Hurtado',7),(13605,'Peñaflor',7),(15101,'Arica',1),(15102,'Camarones',1),(15201,'Putre',1),(15202,'General Lagos',1),(16101,'Chillán',10),(16102,'Bulnes',10),(16103,'Cobquecura',10),(16104,'Coelemu',10),(16105,'Coihueco',10),(16106,'Chillán Viejo',10),(16107,'El Carmen',10),(16108,'Ninhue',10),(16109,'Ñiquén',10),(16110,'Pemuco',10),(16111,'Pinto',10),(16112,'Portezuelo',10),(16113,'Quillón',10),(16114,'Quirihue',10),(16115,'Ránquil',10),(16116,'San Carlos',10),(16117,'San Fabián',10),(16118,'San Ignacio',10),(16119,'San Nicolás',10),(16120,'Treguaco',10),(16121,'Yungay',10);
/*!40000 ALTER TABLE `comunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regiones`
--

DROP TABLE IF EXISTS `regiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regiones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regiones`
--

LOCK TABLES `regiones` WRITE;
/*!40000 ALTER TABLE `regiones` DISABLE KEYS */;
INSERT INTO `regiones` VALUES (3,'Antofagasta'),(1,'Arica y Parinacota'),(4,'Atacama'),(15,'Aysén'),(11,'Biobío'),(5,'Coquimbo'),(12,'La Araucanía'),(8,'Libertador General Bernardo O Higgins'),(14,'Los Lagos'),(13,'Los Ríos'),(16,'Magallanes y de la Antártica Chilena'),(9,'Maule'),(7,'Metropolitana de Santiago'),(10,'Ñuble'),(2,'Tarapacá'),(6,'Valparaíso');
/*!40000 ALTER TABLE `regiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `rut` varchar(12) NOT NULL,
  `email` varchar(100) NOT NULL,
  `region_id` int DEFAULT NULL,
  `comuna_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`),
  KEY `region_id` (`region_id`),
  KEY `comuna_id` (`comuna_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`id`),
  CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`comuna_id`) REFERENCES `comunas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (32,'admin','$2b$10$fcXwjU3yraQPzFXkAq.OMeHdc0W9SZVSlwy5LjMuT3KNZzjGjnm0y','admin',1,'','',NULL,NULL),(71,'vicente','$2b$10$NygVwG98Ejn01C2PbNuZNu5MhHlT4Tkax4W6OLTVP8F4z.tCrSeCG','user',1,'21266144-9','vicenteorellana2011@gmail.com',8,6301);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-26  1:36:35
