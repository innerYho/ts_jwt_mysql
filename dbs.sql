CREATE database 'restaurante';

CREATE TABLE `restaurante`.`usuarios` (`id` INT NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(45) NOT NULL , `password` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `restaurante`.`productos` (`id` INT NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(45) NOT NULL , `descripcion` VARCHAR(45) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `productos` (`id`, `nombre`, `descripcion`) VALUES (NULL, 'Coca Cola', 'Bebida con gas'), (NULL, 'Sibarita', 'Pizza de 500 grs'),(NULL, 'Corona', 'Bebida con alcohol');


