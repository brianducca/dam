SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DAM` DEFAULT CHARACTER SET utf8 ;
USE `DAM` ;

-- -----------------------------------------------------
-- Table `DAM`.`Electrovalvulas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Electrovalvulas` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Electrovalvulas` (
  `electrovalvulaId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`electrovalvulaId`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `DAM`.`Dispositivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Usuarios` (
  `usuarioId` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NULL,
  `password` VARCHAR(50) NULL,
 
  PRIMARY KEY (`usuarioId`),
  INDEX `fk_Usuarios_idx` (`usuarioId` ASC) ,
 
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Dispositivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Dispositivos` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Dispositivos` (
  `dispositivoId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `ubicacion` VARCHAR(200) NULL,
  `electrovalvulaId` INT NOT NULL,
  `deleted` TINYINT NOT NULL DEFAULT 0,
  `usuarioId` INT NULL,
  PRIMARY KEY (`dispositivoId`, `electrovalvulaId`),
  INDEX `fk_Dispositivos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Dispositivos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION),
  CONSTRAINT `fk_Dispositivos_Usuarios1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `DAM`.`Usuarios` (`usuarioId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION),
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Mediciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Mediciones` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Mediciones` (
  `medicionId` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  `valor` VARCHAR(100) NULL,
  `dispositivoId` INT NOT NULL,
  PRIMARY KEY (`medicionId`, `dispositivoId`),
  INDEX `fk_Mediciones_Dispositivos_idx` (`dispositivoId` ASC) ,
  CONSTRAINT `fk_Mediciones_Dispositivos`
    FOREIGN KEY (`dispositivoId`)
    REFERENCES `DAM`.`Dispositivos` (`dispositivoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Log_Riegos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DAM`.`Log_Riegos` ;

CREATE TABLE IF NOT EXISTS `DAM`.`Log_Riegos` (
  `logRiegoId` INT NOT NULL AUTO_INCREMENT,
  `apertura` TINYINT NULL,
  `fecha` DATETIME NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`logRiegoId`, `electrovalvulaId`),
  INDEX `fk_Log_Riegos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Log_Riegos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
