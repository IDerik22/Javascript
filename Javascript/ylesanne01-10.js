/*
Erik Teppan
21.09.2023
ylesanne 1 kuni 10
*/

//ylesanne 10//
const toode = {
  nimetus: 'Piim',
  hind: 3.60,
  kogus: 2,
  koguhind: function () {
    return this.hind * this.kogus;
  },
  muudaKogus: function (uusKogus) {
    this.kogus = uusKogus;
  },
  kuvaSisu: function () {
    return `${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`;
  }
};

console.log("Toote omadused:");
console.log("Nimetus:", toode.nimetus);
console.log("Hind:", toode.hind);
console.log("Kogus:", toode.kogus);

const ostukorv = {
  tooted: [
    { nimi: 'Piim', hind: 3.60, kogus: 2 },
    { nimi: 'Leib', hind: 2.00, kogus: 1 },
    { nimi: 'Munad', hind: 1.50, kogus: 6 },
    { nimi: 'Juust', hind: 4.20, kogus: 1 },
    { nimi: 'Erik Teppan ', hind: 2.30, kogus: 3 },
  ],
  kuvaSisu: function () {
    console.log("Ostukorvi sisu:");
    this.tooted.forEach(function (toode) {
      console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
    });
  },
  lisaToode: function (nimi, hind, kogus) {
    this.tooted.push({ nimi, hind, kogus });
  },
  koguSumma: function () {
    let summa = 0;
    this.tooted.forEach(function (toode) {
      summa += toode.hind * toode.kogus;
    });
    return summa;
  }
};

ostukorv.kuvaSisu();
ostukorv.lisaToode('Kohv', 5.80, 2);
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());

//ylesanne 9//

//noolfunk eriline
const leiaUnikaalsedNimed = (nimed) => {
  const unikaalsedNimed = [];

  for (let i = 0; i < nimed.length; i++) {
    if (!unikaalsedNimed.includes(nimed[i])) {
      unikaalsedNimed.push(nimed[i]);
    }
  }

  return unikaalsedNimed;
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Erik", "Jüri"];
const unikaalsed = leiaUnikaalsedNimed(nimed);
console.log("Unikaalsed nimed:", unikaalsed);

//noolfunk shhh
const salajaneSonum = (sisendS6num) => {
  const taishaalikud = "aeiouAEIOU";
  let salajaneVersioon = "";

  for (let i = 0; i < sisendS6num.length; i++) {
    if (taishaalikud.includes(sisendS6num[i])) {
      salajaneVersioon += "*";
    } else {
      salajaneVersioon += sisendS6num[i];
    }
  }

  return salajaneVersioon;
};

const sisendS6num = "Tere, ma olen Erik Teppan!";
const salajaneVersioon = salajaneSonum(sisendS6num);
console.log(`Sisend: ${sisendS6num}`);
console.log(`Salajane versioon: ${salajaneVersioon}`);

//funk tais,kogu,kesk
function arvudeKoguarvJaKeskmine(...arvud) {
  const koguarv = arvud.length;
  const summa = arvud.reduce((acc, arv) => acc + arv, 0);
  const keskmine = summa / koguarv;

  console.log(`Arvude koguarv: ${koguarv}`);
  console.log(`Arvude keskmine: ${keskmine}`);
}

arvudeKoguarvJaKeskmine(10, 20, 30, 40);

//funk kuup e 
function kuupaevEesti(kuupaev) {
  const kuupaevaosad = kuupaev.split(".");
  const paev = kuupaevaosad[0];
  const kuu = kuupaevaosad[1];
  const aasta = kuupaevaosad[2];

  const kuud = [
    "jaanuar",
    "veebruar",
    "marts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember",
  ];

  const kuuEesti = kuud[parseInt(kuu) - 1];

  console.log(`Kuupäev eesti keeles: ${paev}. ${kuuEesti} 20${aasta}`);
}

kuupaevEesti("19.07.23");

//funk
function kfunk() {
  console.log("Sinu nimi siin (Erik Teppan)");
}

//nool funk
const noolefunk = () => {
  console.log("Sinu nimi siin (Erik Teppan)");
};

kfunk();
noolefunk();

//ylesanne 6//

//bron
const broneeringuarv = 4; // Sisestatud broneeringu arv

switch (broneeringuarv) {
  case 1:
  case 2:
    console.log("Valige laud kahele inimesele.");
    break;
  case 3:
  case 4:
    console.log("Valige laud neljale inimesele.");
    break;
  case 5:
  case 6:
    console.log("Valige laud kuuele inimesele.");
    break;
  default:
    console.log("Valige suur laud.");
    break;
}


//pos voi neg
const number = 42;

switch (true) {
  case number > 0:
    console.log("Number on positiivne.");
    break;
  case number < 0:
    console.log("Number on negatiivne.");
    break;
  default:
    console.log("Number on null.");
    break;
}

//ylesanne 5//

//pilet
const vanus = 25;
const piletiTyyp = "taispilet";

let piletihind;

if (piletiTyyp === "taispilet") {
  if (vanus < 18) {
    piletihind = 10;
  } else if (vanus >= 18 && vanus <= 64) {
    piletihind = 20;
  } else {
    piletihind = 15;
  }
} else if (piletiTyyp === "sooduspilet") {
  if (vanus < 18 || vanus >= 65) {
    piletihind = 8;
  } else if (vanus >= 18 && vanus <= 64) {
    piletihind = 15;
  }
}

console.log(`Pileti hind: ${piletihind} eurot`);

//kasutaja
const kasutajanimi = "admin";

if (kasutajanimi === "admin") {
  console.log("Tere, administraator!");
} else {
  console.log("Tere, kulaline!");
}

//temp
const temperatuur = 20;

if (temperatuur > 25) {
  console.log("Vaga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
  console.log("Mõnus temperatuur");
} else {
  console.log("Jahe ilm");
}
//ylesanne 4//

//nädalapäevad
let nadalapaevad = ["Esmaspaev", "Teisipaev", "Kolmapaev", "Neljapaev", "Reede"];
console.log("Nädalapäevad:", nadalapaevad);

console.log("Massiivi suurus:", nadalapaevad.length);

nadalapaevad.push("Laupaev", "Puhapaev");
console.log("Nadalapaevad peale lisamist:", nadalapaevad);

nadalapaevad.sort(function (a, b) {
  return b.localeCompare(a);
});
console.log("Nadalapaevad kahanevas jarjekorras:", nadalapaevad);

console.log("Viimane nadalapaev:", nadalapaevad[nadalapaevad.length - 1]);

//masiivid
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";
let koodiList = koodid.split(" ");
console.log("Saadud koodide arv:", koodiList.length);

let mitmesIndex = koodiList.indexOf("35482977");
console.log("Kood 35482977 indeks:", mitmesIndex);

let poolMassiivist = koodiList.slice(0, koodiList.length / 2);
console.log("Pool koodidest:", poolMassiivist)

//sportlased
let sportlased = [
  ["Alice", 25, [10.2, 9.8, 10.5]],
  ["Bob", 22, [9.5, 9.6, 9.7]],
  ["Charlie", 28, [11.1, 11.2, 11.5]]
];

for (let i = 0; i < sportlased.length; i++) {
  let nimi = sportlased[i][0];
  let parimTulemus = Math.max(...sportlased[i][2]);
  console.log(`${nimi} parim tulemus: ${parimTulemus}`);
}

// ylesanne 3 //

//aeg ja kaugus
const soiduk = 100;
const kiirus = 50;
const soidua = soiduk / kiirus;
console.log(`Soidu aeg: ${soidua} tundi`);

// postitus
const pa = 137;
const postitus = Math.ceil(pa / 10);
const vlp = pa % 10;
console.log(`Lehekulgi: ${postitus}, Viimasel lehel postitusi: ${vlp}`);

//server
const serveriv = 400;
const elektrih = 0.0969;
const voolut = serveriv / 1000
const tookulu = voolut * elektrih;
console.log(`Serveri tookulu uhe tunni jooksul: ${tookulu.toFixed(2)} eurot`);

//ylesanne 2//

// kell
const currentDate = new Date();
const tunnid = currentDate.getHours();
const minutid = currentDate.getMinutes();
const sekundid = currentDate.getSeconds();
const times = `${tunnid}:${minutid}:${sekundid} PM`;
console.log(times);

//sitttaat
const kq = "Elu on nagu jalgratas. Et tasakaalus pusida, pead liikuma.";
const autor = "Albert Einstein";
const fq = `${kq} - ${autor}`;
console.log(fq);

//mal
const esin = "mario";
const peren = "loll";
const tasin1 = `${esin[0]}${peren[0]}`;
console.log(`Tere, minu nimi on ${esin} ${peren}.`);

//p pikkus
const taisn = `${peren}, ${esin}`;
const commaIndex = taisn.indexOf(",");
const perenInUpperCase = taisn.slice(0, commaIndex).toUpperCase();
console.log(`Perenimi suurtähtedega: ${perenInUpperCase}`);
console.log(`Perenime pikkus: ${peren.length}`);

//e post
const userEmail = "mario.nice@example.com";
const newEmail = userEmail.replace(/@.+$/, "@gmail.com");
console.log(`Uus e-posti aadress: ${newEmail}`);

//andmed
const dataRow = "IP-aadress: 192.168.1.1, Email: mario.digeer@pewpew.com";
const ipMatch = dataRow.match(/\d+\.\d+\.\d+\.\d+/);
const emailMatch = dataRow.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
console.log(`IP-aadress: ${ipMatch[0]}, Email: ${emailMatch[0]}`);

//ylesanne 1 //
//huba huba
let arv = 4.2;
console.log(arv);

const y = "Will Code 4 food";
console.log(y);

const w = undefined;
console.log(typeof w);

const arr = [1, 2, 3];
console.log(arr);

const z = true;
console.log(z);

const f = FALSE;
console.log(f);

let arv2 = "\"123\"";
console.log(arv2);

