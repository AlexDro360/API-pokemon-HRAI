# Explicación de la practica.

Esta pratica consistio en consumir una api y crear una aplicacion web que contenga una tabla listada, con foto y nombre de los elemntos, ademas cada registro debe contener 3 botones, para eleiminar, ver y editar. Asi mismo debe tener un filtro y una paginacion. Debido a las restricciones de las APIs, para editar y eliminar solo se hace en la tabla y no directamente en la API. Para esta practica se uso como base el proyecto de login creado anteriormente.

## Servicio pokemon

![Uploading {E1D56A05-98D7-4DC7-8347-B78CEC33DE73}.png…]()

Para este trabajo se uso la API llamada POKEAPI la cual tiene el siguiente link https://pokeapi.co/api/v2/ . Esta API contiene un listado de todos los pokemones existentes en los juegos como en las series, asi tambien contiene información sobre ello. Este servicio se creo para interactuar con la API de pokemons. Este servicio contiene el metodo getPokemon que hace una peticion get a la API para obtener todos los pokemones. El metodo getPok lo que hace es obtener informacion sobre un pokemon en especifico para lo cual recibe la url a donde hacer la peticion. esta url se encuentra junto al nombre en el listado de todos los pokemons.

## Componente pokemon-list
Este componente es el componente principal que muestra una tabla con los pokemones de la API. Este componente esat compuesto por los siguientes metodos.
#### ngOnInit

![{91F58F23-D950-496D-879C-3DC0BEA57434}](https://github.com/user-attachments/assets/a5786226-c763-4ee1-b0a1-6360df7b29b2)


Este metodo llama al metodo getPokemons del servicio de pokemon para obtener la lista de los pokemones, esta lista se mapea de forma que se crea un nuevo arreglo con con el ID, el cual es autoincrementable, el nombre del pokemon, la url la cual contiene toda la informacion sobre el pokemon, el avatar, sus stats y sus habilidades. posteriormente se recorre la lista creada de pokemones y a cada pokemon se realiza la llamada al metodo getPok para obtener su informacion y guardar el avatar, las stats y sus habilidades. Finalmente se guarda en dataSource para que se muestren en la tabla.

#### applyFilter

![{825A4CE0-F8EA-43E5-8077-FC4033B12852}](https://github.com/user-attachments/assets/b9904c91-9669-4321-9607-3b3ef9d53d18)

Este metodo contiene un evento el cual cada que el usuario escriba en la entrada de filtro filtrara en dataResource los pokemones que cumplan con la condicion, la API no tiene forma para realizar un filtro directamente por lo que se decidio hacerlo de esta forma.

#### openVer

![{A6C5E0C5-565A-4B3F-9E19-7652909D7BA7}](https://github.com/user-attachments/assets/92cb1d23-445f-47dc-821b-617de9d6f457)


Este mtodo lo que hace es abrir el componente llamado PokemonInformacionComponent  de forma modal al cual se le pasa el pokemon que se selecciono  para que se muestre su informacion.

#### openEditar

![{BF197897-8835-4733-8DF7-ACFAE43A2824}](https://github.com/user-attachments/assets/0487e3e4-28ec-44d6-bb0e-f9e6ddefd0eb)

Este metodo lo que hace es abrir de forma modal el componente PokemonEditarComponent y se le pasa la informacion del pokemon, despues en caso de que se reciba una respuesta cuando se cierre la ventana se obtendra la posicion del pokemon modificado, despues se remplazara el pokemon por el nuevo pokemon modifica y finalmente de reemplazan los datos del dataSource por los nuevos para que se actualicen.

#### openEliminar

![{92B43D1F-AEF7-4F8E-8B51-3AD5D72F0F41}](https://github.com/user-attachments/assets/89f5fd40-076c-496c-a962-1f5be45f9493)

Este metodo abre el compoenente PokemonEliminarComponent de forma modal y envia el pokemon a eliminar, si se recibe un respuesta exitosa con el pokemon, se busca la posicion de ese pokemon y se elimina usando splice al que se le pasa la posicion y un 1 para indicar que se eliminara un elemnto. Finalmente se reemplaza los datos anteriores por los nuevos para que se actualice la tabla.

#### HTML del componente

![{7886CFDA-9DD5-46A3-8324-9D109F69EDAE}](https://github.com/user-attachments/assets/2cccb42a-0d43-4810-bf2c-1f913cc854a7)

El HTML consiste en una tabla que contiene un ID, un Nombre, un Avatar y Acciones, cada celda esta reacionado con su respectiva informacion del pokemon, en el caso de las acciones cuando se da clic al bototn llaman a su respectivo metodo y mandan el pokemon que corresponde.

## Componente Pokemon Informacion

![{B91E65D1-0374-495C-A2E6-F8374821F90A}](https://github.com/user-attachments/assets/0c128576-9244-455f-b140-c11cfaa20318)

Este coomponente consiste enu dialog que recorre las habilidades del pokemon recibido en el ts y genera parrafos con esa informacion para mostrarla, asi mismo recorre las habilidades del pokemon y genra un parrafo para cada una. Tambien contiene un boton para aceoptar y cerrar el componente.

![{43C079F2-BC2D-4BC4-81E9-17D1F491A96F}](https://github.com/user-attachments/assets/7e3b1cc1-541e-4264-955c-9f89932fe52e)

En el ts solo se inicializan los datos como data para su uso.

## Componente Eliminar Pokemon

![imagen](https://github.com/user-attachments/assets/8ea25bb1-07f5-4b73-a03e-488526f7f417)

Este componente contiene un dialog que pregunta si desea eleminar el pokemon seleccionado, asi mismo tiene dos botones, uno para aceptar y otro para cancelar, en caso de que se acpte regresa el pokemon recibido como respuesta para que sea eliminado. En el ts solo esta inicializado el pokemon que recibe el componente.

## Componente editar pokemon

![{1161E1DE-0C77-44EE-9ADC-CE3392E55788}](https://github.com/user-attachments/assets/02009447-2ef3-4a14-8a06-b396267ddbb1)

Este componente contiene un dialog con diferentes input que permiten editar los detalles de un pokemon, contiene uno para el nombre, asi mismo recorre las habilidades del pokemon y genera inputs para cada habilidad al igual que con las estadisticas, genera inputs para cada una; cada input esta relacionado con su valor correspondiente por lo que cuando se modifica en el formulario igual se modifica igual en ela variable que guarda la informacion del pokemon (data). Al final cuando se de clic en aceptar se cierra el componente y se regresa el pokemon con sus datos actualizados. 

![{EA416540-C8E9-418A-991F-989DE668CDD8}](https://github.com/user-attachments/assets/43c5c982-ab26-4c1a-86b5-104d9d4f2504)

El ts solo tiene en donde se inicializan los datos del pokemon y se crea una copia de la variable para de esta forma trabajar sobre ella ya que sino se modificarian los datos del pokemon aun cuando no se han aceptado.

# Reultados

![{6BC69738-5B8C-4396-BD83-7AC1C1DD430D}](https://github.com/user-attachments/assets/2a5ff9c9-c0e7-47c0-8870-ac3dd6402ca4)

![{633CAC0C-00B9-4BBB-B758-A40681CA5940}](https://github.com/user-attachments/assets/36fd07cc-6037-4940-a7c9-4f1bf4799db5)

### Pantalla de informacion 

![{BC546E52-AD1F-4EFB-BB74-55A3C7101E1F}](https://github.com/user-attachments/assets/b54cd7bb-34ad-4ac6-a808-d5a1b398f7ea)

![{02700295-BA34-43AF-8A3E-7A23EB08C198}](https://github.com/user-attachments/assets/6dfd91aa-44e5-4d64-8dc5-d4f2d868f8eb)

## Pantalla de editar informacion

![{989D213C-6DD5-447E-8779-59548B99CAFF}](https://github.com/user-attachments/assets/74fce45d-8a6f-4494-93ee-682fcd50a05c)

![{88DD5FA2-02AD-47D6-8B0E-CDE7FEE4785F}](https://github.com/user-attachments/assets/9c812a3e-e36f-40d1-9319-3ed3540ebf45)

Si se acepta se guarada la informacion y se actualiza en la tabla.

![{0CDE5B34-20CC-4BBA-8CE2-3B5895C3A4CC}](https://github.com/user-attachments/assets/566cc937-c4c1-491a-8575-a2e60f4ffaa4)

![{CED6BCF0-8238-413A-8BAE-2C89512FC1A1}](https://github.com/user-attachments/assets/6325f2ac-d121-4a6b-a378-996b7b8cf12f)

## Pantalla de eliminar

![{CCCF1C5F-59B6-49B7-A6B4-70BCFF6D2A30}](https://github.com/user-attachments/assets/89b54f06-9a86-4264-a805-ae108a2c12b7)

Si se acepta se elimina y se actualiza la tabla.

![{093877E8-864D-4A99-A547-CF37480FF486}](https://github.com/user-attachments/assets/807a53e9-b750-44e5-bf85-37cd58bc3956)

## Filtro

![{FF499A76-7590-4EF3-B73D-F73D7C72ADB9}](https://github.com/user-attachments/assets/dfc6b643-6643-42dc-808b-fc252eaf590f)


![{94EEB6FE-6502-4A85-B9B3-65B0603AF5D9}](https://github.com/user-attachments/assets/6965466a-9660-44d2-a4d7-4cb5684d4c49)

## Paginacion

![{E87974D7-F199-4D4A-A7D0-3CA61D2C47EA}](https://github.com/user-attachments/assets/95759caf-54dd-4d41-8717-1080a8ee02cd)

![{FECC07D5-642C-4BC5-A2DC-872EDDA5E6DD}](https://github.com/user-attachments/assets/6e167147-d9c2-49c5-8223-f5e251e67daa)

![{A6160B24-D2EB-4175-AE5B-FB0EDC76184C}](https://github.com/user-attachments/assets/7668252d-1e55-47f5-8a49-678226f09d27)

![{4A0C35B7-05EA-492F-8117-AADB007DC64C}](https://github.com/user-attachments/assets/79d5f7b9-fb0d-45b4-8d0f-682cba07e19e)

![{BFE9AA3E-FBBA-43B4-AF28-C783EFCFDF58}](https://github.com/user-attachments/assets/b071ba70-d3f8-4cb8-9a2c-a603f4f3a618)




