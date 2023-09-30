// manipulação de data - aula 77

/* Date cria uma instância Js que representa um único momento no tempo.
 */

/* constructor:
new Date()

new Date(value) : um valor intwieo representando o número de milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco Zero)..

new Date(datastring): valor String que representa uma data.

new Date(year,month,day,hour,minute,second,milisecond) 

year: valor inteiro que representa o ano

month: um valor inteiro que representa o mês

hour: um valor inteiro que representa a hora do dia

minute: um valor inteiro que representa o segmento de um minuto de tempo.

second: um valor inteiro que representa o segmento de segundo do tempo 

milisecond: um valor inteiro que representa o segmento de milisegundo do tempo 
*/

/*propriedades: 
DatePrototype: permite adicionar a propriedes a um objeto js Date

Date.length: é 7. Esse é o número de argumentos manipulados pelo construtor*/

/*Métodos:
Date.now(): retorna o valor númerico correspondete ao tempo corrente -  o número de milisegundos passados desde 1 de janeiro de 1970, 00:00:00 UTC

Date.parse(): analisa uma string que representa uma data e retorna o número de milisegundos desde 1 de janeiro, 1970, 00:00:00, hora local

Date.UTC(): Aceita os mesmos parâmetros como a forma mais longa do construtor (i.e. 2 até 7) e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00 UTC.
*/

/* Métodos new Date() :

getDate(): Retorna o dia do mês (de 1 a 30) da data representada pelo objeto 'Date'.

getDay(): Retorna o dia da semana de (0 a 6, onde 0 é domingo) 

getFullYear(): retorna o ano coom quatro dígitos da data representada pelo objeto 'Date'

getMonth(): retorna o mês (de 0 a 11, onde 0 é janeiro) da data representada pelo objeto 'Date'

getHours(): retorna a hora (de 0 a 23)

getMinutes(): retorna os minutos (de 0 59) 

getSeconds(): retorna os segundos (de 0 a 59)

getMiliseconds(): retorna os milisegundos

getTime(): retorna o valor númerico (em milisegundo desde a época)

getTimezoneOffset(): retorna o deslocamento do fuso horário em minutos entre fuso horário local e o UTC(tempo universal coodenado.)

setDate(dia): define o dia do mês

setFullYear(ano[,mês[,dia]]): define o ano da data, podendo opcionalmente definir o mês e o dia 

setMonth(mês[,dia]): define  mês da data, podendo opcionalmente definir o dia 

setHours(hora[,minuto[,segundo[,milisegundo]]]): define a hora, podendo opcionalmente definir os minutos, segundos e milisegundos

setMinutes(minuto[,segundos[,milisegundos]]): define os minutos, podendo opcionalmente definir os segundos e milisegundos

setSeconds(segundo[,milisegundos]): define os segundos, podendo opcionalmente definir os milisegundos

setMiliseconds(miliseconds): define os milisegundos

setTime(valor): define data e hora do objeto, com base em um valor númerico  de milisegundo
*/

var init = new Date();
var end = new Date();
var final = end.getTime() - init.getTime();
console.log(final);

console.log(Date.now()); //timeStamp

var data = new Date();
console.log(`Mês: ${data.getMonth()}`);
console.log(data.getDate());
console.log(data.getTime()); //timeStamp
console.log(Date.now());
console.log(data.getDay());

//formatação de datas e horas em strng:
console.log(`Data: ${data.toDateString()}`);
console.log(`data local: ${data.toLocaleDateString()}`);
console.log(`Horário: ${data.toTimeString()}`);
console.log(`Hora: ${data.toLocaleTimeString()}`);
console.log(`Tempo Universal: ${data.toUTCString()}`);

// Relógio:

function RelogioDigital() {
  const relogio = document.getElementById("relogioReal");
  const newData = new Date();
  const hora = newData.toLocaleTimeString();
  relogio.innerHTML = hora;
}

const intervalo = setInterval(RelogioDigital, 1000); //aumenta o horário em 1 seg
