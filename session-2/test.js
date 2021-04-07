
// Get filename using Yargs 
const filename = "abc.txt";

// store filename in array and save in file.

fs.readFile("listoffile.json", (error, content)=>{
    const array = JSON.parse(content.toString())
    // Push new file name to array and write content back to the same file.
})

// check if file exists using fs.exists();

// if yes, console.log "please provide new filename".

// if no, create new file and add content "You are awesome"

// command - node assignment.js --filename=abc.txt

