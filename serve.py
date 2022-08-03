#!/usr/bin/env python3

import http.server
import socketserver
import socket
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class Handler (http.server.SimpleHTTPRequestHandler):
    def __init__(self, request, client_address, server):
        super().__init__(request, client_address, server, directory='build')

    def end_headers (self):
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

class Server(socketserver.TCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.bind(self.server_address)

with Server(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
