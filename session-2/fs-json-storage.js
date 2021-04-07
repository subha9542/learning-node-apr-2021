const fs = require("fs");

const employee = {
    name : "xyz",
    age : 45,
    tech : ["angular", "react", "node"],
    talk : function(){}
};

const jsonContent = JSON.stringify(employee);

console.log(jsonContent)

fs.writeFile("./session-2/employee.json", jsonContent, (error, response)=>{
    if(error){
        console.error(error);
        return false;
    }
    console.log("Data stored successfully.")
})

fs.readFile("./session-2/employee.json", (error, response)=>{
    if(error){
        console.error(error);
        return false;
    }
    const content = JSON.parse(response.toString());
    content.company = "xyz";

    fs.writeFile("./session-2/employee.json", JSON.stringify(content), (error, response)=>{
        if(error){
            console.error(error);
            return false;
        }
        console.log("Data stored successfully.")
    })
})

