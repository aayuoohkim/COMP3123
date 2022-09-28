var http = require("http");
//TODO - Use Employee Module here
const employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8089;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    if (req.url === "/") {
      //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
      res.write("<h1>Welcome to Lab Exercise 03</h1>");
    }

    if (req.url === "/employee") {
      //TODO - Display all details for employees in JSON format
      for (const employee of employees) {
        res.write(JSON.stringify(employee, null, 2) + "\n");
      }
    }

    if (req.url === "/employee/names") {
      //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
      //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      let array = employees.map(
        (employee) => employee.firstName + " " + employee.lastName
      );
      array = array.sort();
      res.write(JSON.stringify(array));
    }

    if (req.url === "/employee/totalsalary") {
      //TODO - Display Sum of all employees salary in given JSON format
      //e.g. { "total_salary" : 100 }
      let sum = 0;
      for (const employee of employees) {
        sum += employee.Salary;
      }
      res.write(`{ "total_salary" : ${sum} }`);
    }
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
