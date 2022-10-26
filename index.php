<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <form method="POST" action="area_rectangulo.php">

        <h1>Área de un rectángulo</h1>
        <label>Unidad de medida</label>
        <input type="radio" name="medida" value="m" id="" required>  m <br>
        <input type="radio" name="medida" value="cm" id="" required> cm
        <label> Base del rectángulo</label>
        <input type="number" name="base" id="" required>
        <label> Altura del rectángulo</label>
        <input type="number" name="altura" id="" required>
        <input type="submit" value="Caclular">
    </form>

</body>

</html>