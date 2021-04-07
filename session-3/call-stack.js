// callstack - console.log(1);
//     async - setTimeout(()=>{ console.log(2) }, 1000);
//     async - setTimeout(()=>{ console.log(3) }, 1000);
// callstack - console.log(4)

// callstack - onsole.log(1);
//     callback queue - setTimeout(()=>{ console.log(2) }, 0);
//     callback queue - setTimeout(()=>{ console.log(3) }, 0);
// callstack - console.log(4)

// 1423