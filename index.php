<!DOCTYPE html>
<html lang="ES">
<head>
	<meta charset="utf-8">
	<title>Practica 3| Administración de servidores</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/esttilos.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/java.js"></script>

</head>
<body>
	<?php 
		include 'views/encabezado.html';
		if (isset($_GET['view'])&&$_GET['view']=='log') {
			# code...
		}
		else
		{
			include 'views/home.html';
		}
	 ?>
	<footer>
	<!--
			<p>Trabajo realizado por Juan carlos Menbreño y Roderick Narváez</p>
			<p></p>
			-->
	</footer>
</body>
</html>
