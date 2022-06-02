<?php


	$arrayEstudiantes = array('Javier','Jean','Ricardo','Juan','Edy','Cecilia','Brigith');
	print("<h1 align='center'>Listado de Estudiantes del 5B DBP</h1>");
	echo('<table align="center" border=1 style="background:yellow">');
	echo '<tr>';   
	echo '<th>Posicion</th>';
	echo '<th>Apellido</th>';
	echo '</tr>'; 
if(file_exists('Estudiantes.xml')){
        $archivoXml = simplexml_load_file('Estudiantes.xml');
        print_r($archivoXml);

        foreach ($archivoXml->estudiante as $key => $estud){
        	echo "Estudiante: ".$estud->apellido." con cedula: ".$estud->cedula ."<br>";
        	echo "Dato". $estud->celular;
        }}else{
        	exit('Nose ouede cargar');
        }
	
	foreach ($arrayEstudiantes as $key => $value) {
		echo '<tr>';   
	    echo "<td> $key </td>";
	    echo '<td>'.$value.'</td>';
	    echo '</tr>';
	}
	echo '</table>';  

?>