import dgram from 'dgram'

const socket = dgram.createSocket("udp4");
socket.bind(5500)
socket.on("message", (msg, info) => {
    console.log(msg)
    console.log(msg.toString())
    console.log(info)
})