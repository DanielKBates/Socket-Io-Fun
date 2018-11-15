const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

io.on("connection", (socket) => {
    console.log("A user has connected.");
    socket.on("disconnect", ()=>{
        console.log("A user has disconnected")
    });
    socket.on("message", (msg)=>{
        console.log("message: "+msg);
        io.emit("message", msg)
    })
})

http.listen(3000, () => {
    console.log(`App is lisenting on 3000`)
})

