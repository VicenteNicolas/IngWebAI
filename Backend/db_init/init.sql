
-- 1. CREACIÓN DE USUARIOS Y PERMISOS

-- Usuario Lector (dbReader)
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'password';
GRANT SELECT ON miappdb.* TO 'user'@'%';

-- Usuario Escritor (dbWriter) - EL QUE TE FALTABA
CREATE USER IF NOT EXISTS 'app_writer'@'%' IDENTIFIED BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON miappdb.* TO 'app_writer'@'%';

-- Aplicar permisos
FLUSH PRIVILEGES;


-- 2. ESTRUCTURA DE TABLAS

USE miappdb;

CREATE TABLE IF NOT EXISTS regiones (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS comunas (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES regiones(id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    rut VARCHAR(12) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    region_id INT,
    comuna_id INT,
    role ENUM('user', 'admin') DEFAULT 'user',
    activo TINYINT(1) DEFAULT 1,
    terms_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (region_id) REFERENCES regiones(id),
    FOREIGN KEY (comuna_id) REFERENCES comunas(id)
);


-- 3. CARGA DE DATOS INICIALES

INSERT IGNORE INTO regiones (id, nombre) VALUES (5, 'Region de Valparaiso');
INSERT IGNORE INTO regiones (id, nombre) VALUES (13, 'Region Metropolitana');

INSERT IGNORE INTO comunas (id, nombre, region_id) VALUES (501, 'Valparaiso', 5);
INSERT IGNORE INTO comunas (id, nombre, region_id) VALUES (502, 'Vina del Mar', 5);
INSERT IGNORE INTO comunas (id, nombre, region_id) VALUES (503, 'Quilpue', 5);
INSERT IGNORE INTO comunas (id, nombre, region_id) VALUES (1301, 'Santiago', 13);
INSERT IGNORE INTO comunas (id, nombre, region_id) VALUES (1302, 'Providencia', 13);

-- SE CREA EL USUARIO DE ADMIN
INSERT IGNORE INTO usuarios (username, password, rut, email, region_id, comuna_id, role, activo) 
VALUES ('admin', '$2b$12$uMxJdtlqdSgOxm4mwz8WAOsHMshCyvwmRGAcgdVUEAla6YzENPX06', '00000000-0', 'admin@admin.cl', 5, 501, 'admin', 1);
