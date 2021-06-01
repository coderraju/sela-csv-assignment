
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const csv=require('csvtojson')
const filePath=__dirname + '/data.csv'

console.log("filepathhh",filePath)
/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
    const uri = await mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await mongoose.connect(uri, mongooseOpts,async ()=>{
        console.log(`IN MEMORY MONGODB CONNECT:: ${uri}`);
        const collections = mongoose.connection.createCollection('customers');
        const jsonArray=await csv().fromFile(filePath);

       let jsonArray2= jsonArray.map((data)=>{
            let obj={};
            obj=data;
            obj['createdAt']=Number(obj.createdAt);
            return obj;
        })
         let x=  (await collections).insertMany(jsonArray2)
         if(x){
             console.log('Dumping data.csv into mongodb: success');
         }else{
             console.log("Error dumping data.csv into db.")
         }
    });
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}