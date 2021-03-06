const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1805';

// Use connect method to connect to the server
// Redis

function insert(tablename, params) {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		// 增
		db.collection(tablename).insertMany([{
			username: params.username,
			password: params.password
		}], function(err, result) {
			console.log(result);
		});
		client.close();
	});
}
function search(tablename,params,callback){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		//查
		db.collection(tablename).find(params).toArray(function(err, docs) {
			assert.equal(err, null);
			console.log("Found the following records");
			callback(docs)
		});
		//关闭数据库
		client.close();
	})
}
console.log("开始使用mongodb");

module.exports = {
	insert: insert,
	search: search
}