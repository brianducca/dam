INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLPatio');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLCocina');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLJardinDelantero');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLLiving');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLHabitacion1');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLHabitacion2');

INSERT INTO DAM.Usuarios (username, password) VALUES ('test', '1234');
INSERT INTO DAM.Usuarios (username, password) VALUES ('test2', '1234');

INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 1', 'Patio',1,1);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 2', 'Cocina',2,1);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 3', 'Jardin Delantero',3,1);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 4', 'Living',4,2);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 5', 'Habitacion 1',5,2);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId,usuarioId) VALUES ('Sensor 6', 'Habitacion 2',6,2);


INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),60,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),40,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),30,2 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),50,3 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),33,5 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),17,4 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),29,6 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),20,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),44,4 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),61,5 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),12,2 );

