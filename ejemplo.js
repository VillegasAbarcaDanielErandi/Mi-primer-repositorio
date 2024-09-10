
let num1=1
let num2=2.0
let cadena="hola"
console.log(num1)
console.log(num2)
console.log(cadena)
console.log("hola mundo")

const txt1=new String("Hola a todos")

console.log(txt1)
console.log('1.2.3.4.5'.split('.'))
console.log(txt1.split(' '))
console.log(txt1.length)
console.log(txt1.charAt(1))

//Arreglos

var animales=['tigra', 'ballena', 'lobo', 'aguila']
console.log(animales.length)
console.log(animales.pop())
console.log(animales)

console.log(animales.push("perro"))
console.log(animales)

let numeros=[11,10,5,4,12]
console.log(numeros.reverse())

var juntar=numeros.join()
console.log(juntar)

let anio=[1995,1999,2024,2020]
function encontrar(item){
    return item>=2000
}
console.log(anio.find(encontrar))

let anio2=[1995,1999,2024,2020]
function encontrar2(item){
    return item>=2000
}
console.log(anio.some(encontrar2))


var vestimenta =['camisa', 'gorra', 'pantalon'] 
function miFuncion(item,index){
    console.log(index+":"+item)
}
vestimenta.forEach(miFuncion)


let array=Array.from("1A2B3C4D")
console.log(array)

//every

let numeros1=[32,33,15,40]
miFuncion2()
function validarArray(item){
    return item>=19
}

function miFuncion2(){
    console.log(numeros1.every(validarArray))
}


//De un determinado arreglo con nombre y edad
//Buscar aquellas personas que tengan mas de 5 años
//5 elementos
 
let personas=[
    {nombre: "Alan",edad:80},
    {nombre: "Damian",edad:6},
    {nombre: "Daniel",edad:16},
    {nombre: "Pedro",edad:1},
    {nombre: "Andrea",edad:3},
]

let busqueda = personas.filter(personas=>personas.edad>5)
console.log(busqueda)

//hacer una busqueda de 10 trabajadores donde sean developers
let trabajadores=[
    {nombre: "Alan",puesto:"front"},
    {nombre: "Damian",puesto:"Pendejo"},
    {nombre: "Daniel",puesto:"Developer"},
    {nombre: "Pedro",puesto:"Rappi-san"},
    {nombre: "Andrea",puesto:"My love"},
    {nombre: "Jorge",puesto:"Box"},
    {nombre: "Ponce",puesto:"Minion"},
    {nombre: "Vania",puesto:"Strawberry"},
    {nombre: "Valentina",puesto:"Model"},
    {nombre: "Ximena",puesto:"Singer"},
]
let busqueda2 = trabajadores.filter(trabajadores=>trabajadores.puesto==="Developer")
console.log(busqueda2)

