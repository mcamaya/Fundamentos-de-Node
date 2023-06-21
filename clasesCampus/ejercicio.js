const http = require('http');
const fs = require('fs');
const server = http.createServer( (req, res) => {

	const url = req.url;
	const method = req.method;

	const navbar = `
	<nav class="navbar navbar-expand-lg bg-body-tertiary text-center bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">HOME</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav d-flex justify-content-lg-center ms-sm-auto text-center fs-5">
          <li class="nav-item">
            <a class="nav-link text-light" href="/users">Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/categories">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/products">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/employees">Empleados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/customers">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/sales">Ventas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/shopping">Compras</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
	`;

	res.setHeader('Content-Type', 'text/html');
	
    switch (url) {
			case '/':
				res.write(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
						<meta charset="UTF-8">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Document</title>
						<style>
								.main-container {
										background-color: lightblue;
										height: 100vh;
								}
						</style>
						<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				</head>
				<body>
				${navbar}
						<div class="main-container row g-0">
								<div class="d-flex align-items-center justify-content-center">
										<h1>HOME</h1>
								</div>
						</div>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
				</body>
				</html>
				`);
				break;

			case '/users':
				res.write(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
						<meta charset="UTF-8">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Users | Ventartemis</title>
						<style>
								.main-container {
										background-color: lightblue;
										height: 100vh;
								}
								.table-container {
										height: 55vh;
										width: 70vw;
								}
						</style>
						<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				</head>
				<body>
				${navbar}
						<div class="main-container row g-0">
								<div class="d-flex align-items-center justify-content-center flex-column">
										<h1 class="mb-5">USERS</h1>
										<div class="table-container bg-light p-5 rounded">
												<table class="table-light h-100 w-100">
														<thead>
																<tr>
																	<th scope="col">#</th>
																	<th scope="col">Name</th>
																	<th scope="col">Phone</th>
																	<th scope="col">Email</th>
																	<th scope="col">Address</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<th scope="row">1</th>
																	<td>Mark Otto</td>
																	<td>3105641531</td>
																	<td>markotto@mail.com</td>
																	<td>Street 1129 E Walnut St</td>
																</tr>
																<tr>
																	<th scope="row">2</th>
																	<td>Jacob Thornton</td>
																	<td>3154516451</td>
																	<td>jacobthor@mail.com</td>
																	<td>Street 3930 Glade Rd</td>
																</tr>
																<tr>
																	<th scope="row">3</th>
																	<td>Lady Bird</td>
																	<td>31101561563</td>
																	<td>lady@bird.com</td>
																	<td>Street 710 Railroad Grade Trail</td>
																</tr>
																<tr>
																	<th scope="row">4</th>
																	<td>Anna Gold</td>
																	<td>3120564320</td>
																	<td>annagold@mail.com</td>
																	<td>Street 7995 Bellfort St</td>
																</tr>

																<tr>
																	<th scope="row">5</th>
																	<td>Mark Otto</td>
																	<td>3105641531</td>
																	<td>markotto@mail.com</td>
																	<td>Street 1129 E Walnut St</td>
																</tr>
																<tr>
																	<th scope="row">6</th>
																	<td>Jacob Thornton</td>
																	<td>3154516451</td>
																	<td>jacobthor@mail.com</td>
																	<td>Street 3930 Glade Rd</td>
																</tr>
																<tr>
																	<th scope="row">7</th>
																	<td>Lady Bird</td>
																	<td>31101561563</td>
																	<td>lady@bird.com</td>
																	<td>Street 710 Railroad Grade Trail</td>
																</tr>
																<tr>
																	<th scope="row">8</th>
																	<td>Anna Gold</td>
																	<td>3120564320</td>
																	<td>annagold@mail.com</td>
																	<td>Street 7995 Bellfort St</td>
																</tr>
															</tbody>
												</table>
										</div>
								</div>
						</div>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
				</body>
				</html>
				`);
				break;
								
			case '/categories':
				res.write(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
						<meta charset="UTF-8">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Categories | Ventartemis</title>
						<style>
								.main-container {
										background-color: lightblue;
										height: 100vh;
								}
								.table-container {
										width: 70vw;
								}
								.table-img {
									width: 80px;
									height: 80px;
									object-fit: cover;
									border-radius: 50%;
								}
						</style>
						<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				</head>
				<body>
				${navbar}
						<div class="main-container row g-0">
								<div class="d-flex align-items-center justify-content-center flex-column">
										<h1 class="mb-5">CATEGORIES</h1>
										<div class="table-container bg-light p-5 rounded">
												<table class="table-light h-100 w-100">
														<thead>
																<tr>
																	<th scope="p-3 col">#</th>
																	<th scope="p-3 col">Name</th>
																	<th scope="p-3 col">Description</th>
																	<th scope="p-3 col">Image</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td class="p-3" scope="row">1</td>
																	<td class="p-3">Clothes</td>
																	<td class="p-3">Browse For Your Favorite Brands online at Revolve. 10% Off for New Revolve Customers! Select From a Wide Variety of Brands in Attractive Designs. Shop Today!</td>
																	<td class="p-3"><img class="table-img" src="https://images.squarespace-cdn.com/content/v1/575c7d10044262e4c49720f7/9148c4ea-35e9-4040-b410-a84963f24353/GettyImages-1206779030-9450b9fda5694431a1056bf86aff0818.jpg?format=1000w" alt=""></td>
																</tr>
																<tr>
																	<td class="p-3" scope="row">2</td>
																	<td class="p-3">Electronics</td>
																	<td class="p-3">Shop Best Buy for electronics. Witd locations all over, we're your neighborhood electronics store witd all electronics you're looking for from top brands.</td>
																	<td class="p-3"><img class="table-img" src="https://content.jdmagicbox.com/comp/ahmedabad/17/079p757217/catalogue/general-electronics-bavla-ahmedabad-electronic-goods-showrooms-7gjxb28i65.jpg" alt=""></td>
																</tr>
																<tr>
																	<td class="p-3" scope="row">3</td>
																	<td class="p-3">Furniture</td>
																	<td class="p-3">Shop Wayfair for A Zillion Things Home across all styles and budgets. 5000 brands of furniture, lighting, cookware, and more. Free Shipping on most items.</td>
																	<td class="p-3"><img class="table-img" src="https://www.rd.com/wp-content/uploads/2022/07/GettyImages-1379424970-scaled.jpg" alt=""></td>
																</tr>
																<tr>
																	<td class="p-3" scope="row">4</td>
																	<td class="p-3">Shoes</td>
																	<td class="p-3">Every sneaker you want is always available and verified by StockX. Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy and more!</td>
																	<td class="p-3"><img class="table-img" src="https://www.shutterstock.com/image-photo/shelves-casual-shoes-fashionable-shop-260nw-215951434.jpg" alt=""></td>
																</tr>
																<tr>
																	<td class="p-3" scope="row">5</td>
																	<td class="p-3">Jewelry</td>
																	<td class="p-3">Shop fine jewelry creations of timeless beauty and superlative craftsmanship that will be treasured always. Enjoy complimentary shipping and returns on all countries.</td>
																	<td class="p-3"><img class="table-img" src="https://cdn.shopify.com/s/files/1/0053/7034/7594/files/jewels.jpg?v=1554234194" alt=""></td>
																</tr>
															</tbody>
												</table>
										</div>
								</div>
						</div>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
				</body>
				</html>
				`);
				break;

			case '/products':

				break;

			case '/employees':
				res.write(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Categories | Ventartemis</title>
					<style>
						.main-container {
							background-color: lightblue;
							height: 100vh;
						}
					</style>
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				</head>
				<body>
				${navbar}
					<div class="main-container row g-0">
						<div class="d-flex align-items-center justify-content-center flex-column">
							<h1 class="mb-5">Confidential Message</h1>
							<div class="flex-column bg-light p-5 rounded">
								<form class="p-3 row g-0 flex-column" action="/message" method="post">
								<label for="nombre">Name</label>
								<input class="mb-4" type="text" name="nombre" id="nombre">
								
								<input type="submit" value="Send">
								</form>
							</div>
						</div>
					</div>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
				</body>
				</html>
				`);
				break;

			case '/customers':
				res.write(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
						<meta charset="UTF-8">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Categories | Ventartemis</title>
						<style>
								.main-container {
										background-color: lightblue;
										height: 100vh;
								}
						</style>
						<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
				</head>
				<body>
				${navbar}
						<div class="main-container row g-0">
								<div class="d-flex align-items-center justify-content-center flex-column">
										<h1 class="mb-5">SIGN UP</h1>
										<div class="flex-column bg-light p-5 rounded">
												<form class="p-3 row g-0 flex-column" action="/create-customer" method="post">
													<label for="nombre">Name</label>
													<input class="mb-4" type="text" name="nombre" id="nombre">
													<label for="celular">Phone</label>
													<input class="mb-4" type="number" name="celular" id="celular">
													<label for="correo">E-mail</label>
													<input class="mb-4" type="email" name="correo" id="correo">
													<input type="submit" value="Send">
												</form>
										</div>
								</div>
						</div>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
				</body>
				</html>
				`);
				break;

			case '/sales':

				break;

			case '/shopping':
				
				break;	
		  
			case '/create-customer':
				res.write(`
				si funciona
				`);
				break;

			case '/message':
				if (method === 'POST') {
					fs.writeFileSync('message.txt', 'This is a very confidential message');
					res.statusCode = 302;
					res.setHeader('Location', '/');
					return res.end();
				} else {
					res.write('pailas');
				}

				break;

			default:
				res.write(`
					<!DOCTYPE html>
					<html lang="en">
					<head>
							<meta charset="UTF-8">
							<meta http-equiv="X-UA-Compatible" content="IE=edge">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<title>Document</title>
							<style>
									.main-container {
											background-color: lightblue;
											height: 100vh;
									}
							</style>
							<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
					</head>
					<body>
					${navbar}
							<div class="main-container row g-0">
									<div class="d-flex align-items-center justify-content-center flex-column">
											<h1>404</h1>
											<h4>Lo sentimos, no encontramos la página que estabas buscando</h4>
									</div>
							</div>
							<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
					</body>
					</html>
					`);
			}
			
			/* if (url === '/message' && method === 'POST') {
				fs.writeFileSync('message.txt', 'This is a very confidential message');
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			} */
			
			
			res.end();

} );

server.listen(7000);