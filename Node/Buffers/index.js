var buf = new Buffer(100);
buf.write("abcd", 0, 4, "ascii");

console.log(buf.toString("ascii"));