import net from 'net'

const server = net.createServer(socket => {
    console.log(socket.remoteAddress, socket.remotePort)
    socket.on("data", data => {
        console.log(data.toString())
        const responseBody = `<h1>I create TCP servers ergo sum</h1><h2>${new Date().toUTCString()}</h2>`
        const response = `HTTP/1.1 200 OK\nContent-type: text/html\nContent-Length:${responseBody.length}\n\n${responseBody}`
        socket.write(response)
    })
})

server.listen(9999)