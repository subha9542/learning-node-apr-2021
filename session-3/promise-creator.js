// setTimeout(()=>{
//     console.log("dasdsad")
// }, 1000)


// creator
function setTimeoutPromisified(delay) {

    return new Promise(function (resolve, reject) {

        if (!delay) {
            reject("Delay not provided.")
        }

        // Logic
        setTimeout(function () {
            resolve({ dummy: "data" });
        }, delay);
    })
}


// consumer
setTimeoutPromisified(500).then((data) => {
    return setTimeoutPromisified(500).then((data) => {
        return setTimeoutPromisified().then((data) => {
        }).catch(() => {
            console.error("inner most promise")
        })
    })
        .catch(() => {
            console.error("inner promise")
        })
})
    .catch((error) => {
        console.log(error);
    })

module.exports = {
    setTimeoutPromisified
}