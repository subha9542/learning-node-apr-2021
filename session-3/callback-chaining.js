setTimeout(()=>{
    console.log("1000")
    setTimeout(()=>{
        console.log("2000")
        setTimeout(()=>{
            console.log("3000")
            setTimeout(()=>{
                console.log("4000")
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)