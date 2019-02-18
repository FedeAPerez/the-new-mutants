# the-new-mutants
Mutant API Challenge para MercadoLibre

# Inicio de aplicación
Pre-Requisitos
NPM y NodeJS

## Ejecutar
 
    npm install

    npm run start-dev
    
## Correr Tests
    
    npm run test
    
Se puede revisar pantallas de coverage en el archivo ./coverage/index.html

# Consideraciones
 - Se toman los sets de datos como pulidos de antemano y no se realizan validaciones sobre los mismos, con el espíritu del challenge con funciones de API por sobre una API en sí.
 - Se analizaron diferentes soluciones como **Tries** y árboles para realizar la búsqueda de secuencias, las mismas no resultaron óptimas para el tiempo del challenge debido a que las cadenas no necesariamente comienzan con la secuencia, por lo que se debía ingresar cada item de la matriz junto a las palabras posibles a formar a partir de cada dirección. Estas implementaciones resultaban más complicadas de realizar y a la vez no tan sencillas de interpretar debido a que se producían múltiples pasajes por la misma cadena más de una vez. 
 - Se optó por la solución trivial junto a algunas optimizaciones, la misma operará como al menos O(N^2), otras variantes relacionadas a árboles podrían contar con soluciones en el espacio de O(n) haciendo más costosa el insert pero facilitando la búsqueda.


## Para la resolución de Stats
- Se optó por aggregates para la información en stats, esto hace ligeramente más costosa la la carga de nuevos adns pero para la consulta a /stats se revisa únicamente un documento. En caso de no realizar esta agregación, se deberían recorrer N registros de la tabla para realizar la consulta.


# Tecnologías utilizadas
- Almacenamiento documental en Firebase
- Tests mediante Mocha, supertest y nyc para reportes.
- NodeJS, express como facilitador de routing.
- Heroku como PaaS
