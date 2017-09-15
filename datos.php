
<?php 
function llenar(){
		$ruta="netmon/etc/hosts/";
		$contenedor= opendir($ruta);
		while ($archivo=readdir($contenedor)) {
			
			if (!is_dir($ruta.$archivo)) {
				$array[]=file_get_contents($ruta.$archivo);
			}
			
		}
		echo '[';
		for ($i=0; $i <sizeof($array)-1; $i++) { 
			echo $array[$i],',';
		}
		echo $array[sizeof($array)-1],']';
}

	if (isset($_GET['get']) && ($_GET['get'])=='hosts') {
		llenar();
		# code...
	}
	elseif (isset($_GET['get']) && ($_GET['get'])=='servicios') {
		llenar();
	}
 ?>