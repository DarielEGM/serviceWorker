"use strict";

if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}

navigator.serviceWorker.ready.then(res=>{
    res.active.postMessage("Hello how are you?");
})

navigator.serviceWorker.addEventListener("message",e=>{
    console.log(`Message received from serviceWorker: ${e.data}`);
})