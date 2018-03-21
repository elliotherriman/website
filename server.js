const fs = require("fs");
const path = require('path')
const http = require("http");
const url = require("url");
const hostname = '127.0.0.1';
const port = 8000;
const spawn = require('child_process').spawn;

// will use this to compile if there are multiple ink files, otherwise it'll use the only ink file it finds
var storyFile = "story.ink";

function execute(command, args) 
{
	spawn(command, args, { stdio: 'inherit' })
}

http.createServer(async function (request, response) 
{
	if (request.url == "/") request.url = "index.html";

    fs.readFile('./' + request.url, function(err, data) {
        if (!err) {
            var dotoffset = request.url.lastIndexOf('.');
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ request.url.substr(dotoffset) ];
            response.setHeader('Content-type' , mimetype || "text/plain");
            response.end(data);
        } else {
            console.log ('file not found: ' + request.url);
//             response.writeHead(404, "Not Found");
            response.end();
        }
    });

}).listen(port);

function setHeader(file, response)
{
            var dotoffset = request.url.lastIndexOf('.');

            response.setHeader('Content-type' , mimetype);
            response.end(data);
}
function searchDir()
{
	var inkFiles = [];
	fs.readdir(".", (err, files) => 
	{
		for (var file of files)
		{
			if (path.extname(file) == ".ink") 
			{
				inkFiles.push(file);
			}
		};
		loadInk(inkFiles);
	});
}

function loadInk(inkFiles)
{
	if (!inkFiles.length)
	{
		console.log("No ink files found.");
	}
	else if (inkFiles.length == 1)
	{
		storyFile = inkFiles[0];
	}
	
	storyFile = storyFile.substr(0, storyFile.indexOf("."));

	execute("inklecate", ["-o", storyFile + ".json", storyFile + ".ink"]);
	console.log(`Server running at http://${hostname}:${port}/`);
}

searchDir();