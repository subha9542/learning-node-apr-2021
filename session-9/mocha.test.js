const Calculator = require("./calculator")
const chai = require("chai")
const { expect, assert } = chai;
const http = require("chai-http");
const should = require("chai").should();

chai.use(http)

describe("Calculator App Testing", ()=>{
    let CalculatorInstance = null;

    beforeEach(()=>{
        CalculatorInstance = new Calculator()
    })
    it("test for add function", ()=>{
        const result = CalculatorInstance.add(1, 2);
        // assert.equal(result, 3, "Error in Add function.");
        // expect(result).to.greaterThan(5);
        // result.should.equal(3)
    })
    it("test for subtract function", ()=>{

    })

    it("test for multiple function", ()=>{

    })

    it("test for divide function", ()=>{

    })
})

describe("Testing People API", ()=>{
    it("should verify people api is working.", (done)=>{
        chai.request("http://localhost:4500")
        .get("/people")
        .then((res)=>{
            expect(res).to.have.status(200);
            done();
        })
        .catch((err)=>{
            throw err;
        })
    })

    it("should return list of people", (done)=>{
        chai.request("http://localhost:4500")
        .get("/people")
        .then((res)=>{
            console.log();
            expect(res.body.list.length).to.eq(1);
            done();
        })
        .catch((err)=>{
            throw err;
        })
    })

    it("should check people list length equal total items", (done)=>{
        chai.request("http://localhost:4500")
        .get("/people")
        .then((res)=>{
            console.log();
            expect(res.body.list.length).to.eq(res.body.total);
            done();
        })
        .catch((err)=>{
            throw err;
        })
    })
})