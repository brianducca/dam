#! /bin/bash
#Revisar si este archivo tiene permisos de ejecución, sino correr  chmod +x import.sh
mongoimport --host mongo --port 27017 --authenticationDatabase admin --username root --password rootPass --db DAM --collection Usuarios --type json --file /mongo-seed/import.json --jsonArray