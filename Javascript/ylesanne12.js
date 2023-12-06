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

  const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Erik Teppan', hind: 2.30, kogus: 3 },
    ],
    kuvaSisu: function () {
      const ostukorvElement = document.getElementById("ostukorv");
      ostukorvElement.innerHTML = ""; // Tühjendame ostukorvi sisu
  
      this.tooted.forEach(function (toode) {
        const li = document.createElement("li");
        li.textContent = `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`;
        ostukorvElement.appendChild(li);
      });
      arvutaKogusumma();
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
  
  lisaOstukorvi("Kohv", 5.80, 2);
  console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
  
  function lisaOstukorvi(nimi, hind, kogus) {
      ostukorv.lisaToode(nimi, hind, kogus);
      ostukorv.kuvaSisu();
  }
  
  function arvutaKogusumma() {
      const kogusummaSilt = document.getElementById("kogusummaSilt");
      const kogusumma = ostukorv.koguSumma();
      kogusummaSilt.textContent = "Kogusumma: " + kogusumma + " €";
  }
  