const http = require('http');

/* function requestListener(req, res){
     es mejor usar funciones anónimas
}


http.createServer(requestListener);
 */



// creamos un servidor
const server = http.createServer( (req, res) => {
    const url = req.url;

    //console.log(req.url, req.method, req.headers);
    // process.exit();

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first response page!!</title></head>');
        res.write(`
            <body>
							<form method="post" action="/message">
								<input type="text" name="message">
								<input type="submit" value="Enviar" name="enviar">
							</form>
            </body>
        `);
        res.write('</html>');
        return res.end();
    }

    //enviando respuestas
    res.setHeader('Content-Type', 'text/html'); 
		res.write('<html>');
		res.write('<head><title>My first response page!!</title></head>');
		res.write('<body><h1>Ah, crack, mandaste un formulario</h1><img width="500px" src="https://laverdadnoticias.com/__export/1577737733205/sites/laverdad/img/2019/12/30/perro_viral_1.png_423682103.png"/></body>');
		res.write('</html>');
		return res.end();
} );


// el servidor escucha los request
server.listen(5000);