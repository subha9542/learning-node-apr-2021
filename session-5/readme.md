C:\Program Files\MongoDB\Server\4.*\bin

mongo.exe - Mongo CLI
mongod.exe - Mongo Database Engine

- Open Command Prompt
- Goto > C:\Program Files\MongoDB\Server\4.2\bin using Command Prompt
- Create folder in c:/ name as "data" in data folder create folder as "db"


- Run in bin folder > mongod.exe or mongod

- Run in bin folder > mongod.exe --dbpath c:/users/USERNAME/desktop/data/db


New Command Prompt > Run in bin folder > mongo.exe or mongo


Mac Users 
cd TO THE BIN FOLDER.
./mongod --dbpath ~/data/db


List All DBs
show dbs

Switch to DB or Create New DB
use DB_NAME

List All collections in DB
show collections

Create new Collection
db.COLLECTION_NAME.insert({ name : "abc" })

Get All Data 
db.COLLECTION_NAME.find()

Get All Data 
db.COLLECTION_NAME.find( { name : "abc" } )

Get only one record
db.COLLECTION_NAME.findOne({ name : "abc" })

Bin Folder > MongoImport
mongoimport.exe -d DATABASE -c COLLECTION_NAME -f c:/users/USERNAME/desktop/data.json

desktop/data.json 

mongoimport.exe --db tacoshop --collection people --drop --file c:/users/USERNAME/desktop/data.json --jsonArray

mongoimport.exe --db DBNAME --collection COLLECTION_NAME --file C:/USERS/TCSID/desktop/data.json --jsonArray

mongoimport.exe --db tacoshop --collection people --drop --file data.json --jsonArray


MAC > ./mongoimport -d tacoshop -c people -f data.json


### Setting New Project 
- Create new folder.
- Run `npm init`
- Run `npm install express ejs mongoose`
- Create application.js to setup Express Application.

