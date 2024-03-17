// ASYNC JS
// khanni sunu jubani suno

// asia koi bhi code jismein kucchh time lgta hai js me usey by default is most cases async code maan kar side stack me daal diya jata hai


/*// setTimeout -  settimeout ka code kuch der baad chalta hai
console.log("hey1")
console.log("hey2")
console.log("hey3")
setTimeout(function(){
   console.log("hey");
}, 5000)
console.log("hey4")
*/


/// setInterval - set interval ka code kuchh der baad chalta hai baar baar ek particular interval tume mein
 /*setInterval(function(){
    console.log("Ashish")
 }, 2000)
 */
/* set interval kys hm rok skte hai usme ek variable banana padega 
var count = 1;
const hamarainterval = setInterval(function(){
    if(count === 3) clearInterval(hamarainterval);
    console.log(count);
    count++;
}, 1000);
*/


/*/ Fetch - ye kisi aur url par jaa kar kuch data laayega ya data humaare pass se us url par lekar jaayega
// kyoki internet par jayega phir data ko lekar aayega to isme time lgta hai to by default hi js mein fetch ko async banaaya gaya hai fetch ka kaam hia data lana wh bhi kisi url se ab aisa ho skta hai us url ki website slow ho, to deta laane me time lage aur agar fetch synchronous hota to uske baad ka code tab tak nhi chalta jb tak uska data nahi aajata, which are big problem pura code atak skta tha
// jaoo panchi letter lekar aao  jab aajana to bata dena mai aage ka code chalta hu
/*
fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(readable => console.log(readable.results[0].gender))
*/

/*
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(raw => raw.json())
.then(res => console.log(res))
Here is complete fetch
*/

/* Axios (or others HTTP Libraries) - ye bhi whi karega jo fetch karta bas ya thoda jaada developer friendly hai
axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result.data.results[0]))
*/


// Promise - ye janab ke ander jo code likhoge wo apna kaam karega aur khud side stack me chala jayega us code ko lekar jab ander se code ko resolve kiya jayega tab ye chalenge
// Promise kya hai?
// Kuch code socho man mein socho, jo ki async code ho, mataln ki yeh side stack mein jayega aur baad mei chalega main stack ke, ab yeh socho ki apne is code ko likha hai to iska answer kabhi aayega aur aise bhi ho sakta hai kis answer naa aaye, promises kya hai aisa samjho ki app promise ke ander koi bhi async code likhdo jo me main aaye aur promise aapko ek parchi dedeta hai and wo parchi par default likha hota hai waiting , parchi par do event hote hai mainly ek event ka naam hai then aur ek event ka naam hai catch, ager aapka data aagaya to parchi pe resolved likhjaayega waiting ki jagah and then chalega aur agar data mein dikkat aayi to catch chalega and waiting ki jagah rejected lik jayega
// promises kya hai?
// aman raghav ke pass gaya aur bola ki khanna lene bhejdo ksisko raghav ne kisi ko bhej diya and aman ko bola ye parchi lelo jab bhi wo banda aajayega to parchi par pata chal jaayega

/*const parchi = new Promise(function(resolve, reject){
 // jake ek user laao and agar wo male ho to green button
 fetch(`https://randomuser.me/api/`) 
 .then(raw => raw.json())
 .then(result => {
 if(result.results[0].gender === "male") resolve();
 else reject();
 });
});

parchi
.then(function(){
   console.log("hara button daba")
})
.catch(function(){
   console.log("laal button daba")
})
*/

// Ye sabhi use hi tab hote kiye jate hai jab apko kuch aisa krna ho jismein time lagega


// callbacks
// callback kuchh bhi ek function hai jisse pass kiya gaya ho kisi aur function main aur jab wo function chale to app i=us pass kiye gaye callback function ko chala paayege 
// to  use kaise kre 
// callback pahli cheej to ek function hai, app is function wo sab likhdo jo apko chalna ho jab answer aajaye, aur isse tab chalo jab aapka async code chal chuka ho
// hamra task yh hai - User se ka data mangaao and jab data aajaye to us data ke name, gender and email ko print karo

/*function getData(url, callback){
   fetch(url)
   .then(raw => raw.json())
   .then(result => {
      callback(result)
   })
}
getData("https://randomuser.me/api/", function(result){
   console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first)
})
*/

// Async/Await - koi bhi function banaalo and uske ander to man mein aaye wo async code likhdo, ab jab app async likhte ho to baad waali line phle chal jaati hai kyuki asyn side stack pe ho to baad wali line phale chal jaati hai kyuki asyn side stack pe hota hai aur baad wali line agar async ke basis pr hui to apka code fail ho jaega, wo isliye kyuki aapka code depend karta hai async code par jo ki baad mein chalega sync code chalne ke baad

/*
async function abcd(){
 let a =  await fetch(`https://randomuser.me/api/`);
 a = await a.json();
    console.log(a)
}
abcd()
*/

// Event Loop

// Callbacks vs Promises vs Async/Await
// ek url se data lekar aao and usey console par show karo
//Callback question is completed
/*
function dataFetcher(url, callback){
   const parchi = new Promise(function(resolve, reject){
   fetch(url)
   .then(raw => raw.json())
   .then(result => {
      callback(result);
   })
})
dataFetcher("https://randomuser.me/api/", function(result){
 console.log(result)
})
return parchi
}
dataFetcher("https://randomuser.me/api/")
.then(function(result){
   console.log(result)
})
*/

// Async/Await Question solve
/*async function dataFetcher(url){
   let data = await fetch(url);
   let result = await data.json();
   return result;
}

async function hh(){
   let data = await dataFetcher("https://randomuser.me/api/")
   console.log(data);
}
hh()
*/

// Generators - app execution ko pause kr skte ho and bol skte ho ki ab agla step karo aur fir app agla step jab bhi chahiye wo step kar skte ho
/*function* printNums(){
   console.log("started");
   yield 1;
   console.log("pehla chal chuka");
   yield 2;
   console.log("dusra chal chuka")
   yield 3;
}

const ans = printNums();
console.log (ans.next().value);
console.log (ans.next().value);
console.log (ans.next().value);
*/

// Web workers
// usually humara poora code single thread par chalta hai par kai baar kuch bade calculations perform karne pad jate hai jiski wajah se aapka main thread busy hojaata hai yaa fir wo kaafi jaada loaded hojaata hai aur aapke baaki tasts ki performance kam ho jaati hai

