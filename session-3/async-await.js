const { setTimeoutPromisified } = require("./promise-creator")

async function triggerTimer() {
    console.log("before");
    await setTimeoutPromisified(1000);
    console.log("1");
    await setTimeoutPromisified(1000);
    console.log("2");
    await setTimeoutPromisified(1000);
    console.log("3");
    await setTimeoutPromisified(1000);
    console.log("4");
    await setTimeoutPromisified(1000);
    console.log("5");
    await setTimeoutPromisified(1000);
    console.log("6");
    await setTimeoutPromisified(1000);
    console.log("after");

    // console.log("before");
    // setTimeoutPromisified(1000);
    // console.log("1");
    // setTimeoutPromisified(1000);
    // console.log("2");
    // setTimeoutPromisified(1000);
    // console.log("3");
    // setTimeoutPromisified(1000);
    // console.log("4");
    // setTimeoutPromisified(1000);
    // console.log("5");
    // setTimeoutPromisified(1000);
    // console.log("6");
    // setTimeoutPromisified(1000);
    // console.log("after");

    
}

triggerTimer();