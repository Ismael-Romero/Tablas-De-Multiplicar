# Tablas de Multiplicar

Este programa por consola realizado con **JavaScript** te permite calcular la tabla de multiplicar de una entrada n * m, donde: n es la base y m su limite. Además, crea un archivo con el resultado de la multiplicación realizada.

------

## ¿Cómo usarlo?

El programa es simple de usar, únicamente bastara con ejecutar alguno de los siguientes comandos que se listan a continuación:

| **Comando** | **Descripción** | **Obligatorio** |
|-------------|-----------------|-----------------|
|-b, --base   | Establece la base de la tabla de multiplicar          | Sí |
|-l, --limit  | Establece el limite de la multiplicación              | No |
|-s, --show   | Muestra por consola el resultado de la multiplicación | No |

_**Ejemplos:**_

> El siguiente comando crea un archivo con la tabla de multiplicar de 12x60 y muestra por consola el resultado:
    _**node app -b 12 -l 60 -s true**_
----
> El siguiente comando crea un archivo con la tabla de multiplicar de 12x60 y sin mostrar por consola el resultado:
    _**node app -b 12 -l 60**_