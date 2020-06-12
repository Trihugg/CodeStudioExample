var http = require('http');
var server = http.createServer((req, res)=>{
    if(req.url == '/')
    {
        //res.end('Hello my friends');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p style="color:red"> This is home page </p>');
        res.end();
    }
    else if(req.url == '/student')
    {
        //res.end('Hello my friends');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p style="color:blue"> This is student page updates part 2</p> <table align="center"><tr><td ><h1 align="center" style="color:red ">Login</h1></td></tr><tr><td><input class="inputtext" type="text" name="un" placeholder="Email"></td></tr><tr><td><input class="inputtext" type="Password" name="pw" placeholder="Password"></td></tr><tr><td align="center" style="padding-top: 15px"><input class="button" type="submit" value="Sign in"></td></tr><tr><td align="center"><a style="font-size: 20px;text-decoration:none;" href="loginadmin.php">Login for Admin</a></td></tr><tr><td align="center"><a href="createacount.php" style="text-decoration:none;">Creat Acount</a></td></tr></table></body>');
        res.end();
    }
    else
    {
        //res.end('Hello my friends');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p style="color:black"> No find page !! </p>');
        res.end();
    }
    

});

server.listen(5000);
console.log('server is running');