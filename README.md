# Missing Error Handling in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in an HTTP server.  The provided `bug.js` file shows an example of an HTTP server without error handling, and `bugSolution.js` provides a corrected version with robust error handling.

## Bug

The original code lacks error handling, leaving the server vulnerable to crashing due to unexpected issues such as network errors or issues with request processing. 

## Solution

The solution implements comprehensive error handling using `server.on('error', ...)` to gracefully handle various server errors.  It also includes additional error handling within the request handler itself to address potential issues during request processing.