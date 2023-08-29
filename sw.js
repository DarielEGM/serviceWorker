self.addEventListener("install", e=>{
    console.log("serviceWorker installed");
})

self.addEventListener("activate", ()=>{
    console.log("serviceWorker activated");
})

self.addEventListener("fetch", ()=>{
    console.log("serviceWorker, interception request.");
})

self.addEventListener("message", e=>{
    console.log(`Message received from the browser: ${e.data}`);
    e.source.postMessage("Hello Brother.");
})

