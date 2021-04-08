// setup express 


// setup application routes

app.get("/employee", ()=>{

});

app.get("/employees", (req, res)=>{
    // Use fs to get employee json data as JSON Object.
    // send response for employees
})

app.get("/employee/:id", (req, res)=>{
    // Use fs to get employee json data as JSON Object.
    const { params } = req;
    const { id } = params;
    // Use array find methods to find employee by id
    // send response for employee
})

app.get("/project/:id", (req, res)=>{
    // Use fs to get employee json data as JSON Object.
    const { params } = req;
    const { id } = params;
    // Use array find methods to find employee by id
    // send response for employee
});

app.get("/getemployeedetails", (req, res)=>{
    // Logic same as the demo code for post and comments.
});

// Part 2

app.get("/employees-list", (req, res)=>{
    // Data from http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees
    // Create EJS template and enable EJS view engine express.
    // Create list of employee using API Data and EJS for loop.
});



// start application.