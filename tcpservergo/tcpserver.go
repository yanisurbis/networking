package main

import (
	"log"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", "127.0.0.1:0")

	if err != nil {
		log.Fatal(err)
	}

	defer func() { _ = listener.Close() }()

	log.Printf("bound to %q", listener.Addr())

	for {
		conn, err := listener.Accept()
		log.Println("A handshake was completed")

		if err != nil {
			log.Fatal(err)
		}

		go func(c net.Conn) {

			defer c.Close()
		}(conn)
	}
}
