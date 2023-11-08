
// node esegue il programma tramite il prompt dei comandi e non coi servizi Web (apri console --> node index.js )

// es prova

// const numero = 3

// if(numero < 3){
//     console.log('numero < di 3');
// }else if(numero == 3){
//     console.log('numero = a 3');
// }else{
//     console.log('numero > di 3');
// }

// for(i = 0; i<=10; i++){
//     console.log(i)
// }

// ----------- 


// variabili globali


// console.log('directory', __dirname); // richiedi il percorso
// console.log('directory', __filename); // richiedi il nome del file
// console.log('directory', require); // richiedi qualcosa di specifico
// const modulo = require('modulochemiinteressa'); // richiedi un modulo specifico


// console.log('prova', process);

// ---------- 

// moduli=pacchetti=dependencies  built-in(creati da node)/interni(creati da noi)/esterni(scaricati via npm)

// Moduli interni


// creo in due file separati names.js e utils.js varaibili e funzioni che mi servono e li importo

// const saluta = require('./utils')
// const names = require('./names')


// saluta(names.persona)
// saluta(names.persona1)
// saluta(names.persona2)
// saluta('anna')


// chiamando un modulo questo eseguirà gli script contenuti 

// require("./utils")





// Moduli built-in

// os modulo per informazioni sul sistema operativo

// const os = require('os')
// const prova = {
//     nome: os.type,
//     release: os.release(),
//     memory: os.totalmem(),
//     freemMemory: os.freemem(),
// }
// console.log(prova)

// path

// const path = require('path')

// const percorsoFile = path.join("./folder", "under-folder", "prova.txt")

// const percorsoAssoluto = path.resolve(__dirname, "folder", "under-folder", "prova.txt" )
// console.log(percorsoAssoluto)

// ---------- 


// Modulo FS e intro Sync e Async

// sincrono
// const {readFileSync, writeFileSync} = require('fs')
// console.log('comincio')

// const prova = readFileSync('./folder1/prova.txt', 'utf8');
// const ciao = readFileSync('./folder1/ciao.txt', 'utf8');


// writeFileSync('./folder1/prova.txt', 'Sono la prova', {flag: 'a'});
// writeFileSync('./folder1/bella.txt', 'Sono la bella', {flag: 'a'});

// console.log('ho finito')
// console.log('passo al prossimo compito')



// ------ 

// asincrono

// const {readFile, writeFile} = require('fs')
// console.log('comincio')

// readFile('./folder1/prova.txt', 'utf8', (error, result)=>{
//     if(error){
//         console.log(error);
//         return
//     }
//     const prova = result;
//     // console.log(prova)
//     readFile('./folder1/ciao.txt', 'utf8', (error, result)=>{
//      if(error){
//         console.log(error);
//         return
//     }
//     const ciao = result;
//     // console.log(ciao)
//     writeFile('./folder1/bella.txt', 'Ciao Ciao', (error, result)=>{
//         if(error, result){
//             console.log(error)
//             return
//         }
//         console.log('ho finito')
//     })
//     })
// })

// console.log('passo al prossimo compito')

// -------------- 


// Modulo HTTP (programma node con server in ascolto), esempio di routing basico

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url === "/"){
//         res.end("Benvenuto sul sito");
//     }
//     if(req.url === "/profilo"){
//         res.end("il profilo personale");
//     }
//     res.end(`<h1>ERRORE</h1><p>Torna alla <a href="/">home</a></p>`)
    
    
// })

// server.listen(3000);