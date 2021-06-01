# sela-csv-file-response

1. git clone https://github.com/coderraju/sela-csv-assignment.git
2. cd sela-csv-assignment/


 make sure node is installed on your system v8+ 

3. npm install
4. npm start
App listening at http://localhost:3000
IN MEMORY MONGODB CONNECT:: mongodb://127.0.0.1:55070/1a7bfdc1-e8ce-4f18-8f7f-396f9d308c95?
Data loaded from data.csv file.

5. POST http://127.0.0.1:3000/api/v1/search?startDate=1124259791235&endDate=1363197705953
 response :

 {
    "success": true,
    "download_url": "http://127.0.0.1:3000/api/v1/csv/download"
}

6. Download response csv through browser : http://127.0.0.1:3000/api/v1/csv/download
