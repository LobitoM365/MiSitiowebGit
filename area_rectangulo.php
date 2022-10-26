<?php
  $base=$_POST["base"];
  $altura=$_POST["altura"];
  $medida=$_POST["medida"];
  $area=0;
  $area=$base*$altura;
  echo "<h1>"."<br>"."El área de ese rectángulo es: "."</br>". $base." * ".$altura. " = ". $area. $medida."2"."</h1>";
?>