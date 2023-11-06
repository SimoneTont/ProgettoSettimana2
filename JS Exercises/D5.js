/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1")
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i=0; i<pets.length; i++)
{
  console.log(pets[i])
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2")
pets.sort();
for (i=0; i<pets.length; i++)
{
  console.log(pets[i])
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3")
for (i=(pets.length-1); i>=0; i--)
{
  console.log(pets[i])
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4")
let c=pets.length-1;
for (i=0; i<pets.length; i++)
{
  if (i===c)
  {
    pets.unshift(pets[i])
    delete pets[(i+1)]
  }
}
for (i=0; i<(pets.length-1); i++)
{
  console.log(pets[i])
}
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Esercizio 5")
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (i=0; i<cars.length; i++)
{
    cars[i].licensePlate=Math.floor((Math.random()*100))+"AB"
    console.log(cars[i])
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6 parte 1")
const newCar = {
  brand: 'Toyota',
  model: 'Yaris',
  color: 'white',
  trims: ['what','is','trim'],
  licensePlate: '34AB'
}
cars.push(newCar)
for (i=0; i<cars.length; i++)
{
  console.log(cars[i])
}
//Elemento aggiunto
console.log("Esercizio 6 parte 2")
for (i=0; i<cars.length; i++)
{
  console.log(cars[i].trims.slice(0,-1))
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7")
const justTrims = [];
for (i=0; i<cars.length; i++)
{
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8")
let firstCharacter=""
let fizzBuzz=""
for (i=0; i<cars.length; i++)
{
  firstCharacter=cars[i].color.charAt(0)
  if(firstCharacter==="b")
  {
    fizzBuzz="Fizz"
  }
  else
  {
    fizzBuzz="Buzz"
  }
  console.log(fizzBuzz)
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9")
i=0
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
while (numericArray[i-1]!==32)
{
  console.log(numericArray[i])
  i++
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Esercizio 10")
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let numeriAlfabeto =[]
let lettere=[]
let alfabeto="abcdefghijklmnopqrstuvwxyz"
lettere = alfabeto.split('');
console.log(lettere)
for (i=0; i<lettere.length; i++)
{
  switch (lettere[i])
  {
    case "g":
    numeriAlfabeto.push(("g="+(i+1)))
    break;
    case "n":
    numeriAlfabeto.push(("n="+(i+1)))
    break;
    case "u":
    numeriAlfabeto.push(("u="+(i+1)))
    break;
    case "z":
    numeriAlfabeto.push(("z="+(i+1)))
    break;
    case "d":
    numeriAlfabeto.push(("d="+(i+1)))
    break;
  }
}
console.log(numeriAlfabeto)
//Versione doppio ciclo for
/*
console.log("Esercizio 10")
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let numeriAlfabeto =[]
let lettere=[]
let alfabeto="abcdefghijklmnopqrstuvwxyz"
lettere = alfabeto.split('');
console.log(lettere)
for (i=0; i<charactersArray.length; i++)
{
  for (c=0; c<lettere.length; c++)
  {
    if(charactersArray[i]===lettere[c])
    {
      numeriAlfabeto.push((c+1))
    }
  }
}
console.log(numeriAlfabeto)
*/
