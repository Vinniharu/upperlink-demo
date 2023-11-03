AOS.init();
let dropmenu = document.getElementById("drop");

const drop = (e) => {
  if (e.name == "menu-outline") {
    dropmenu.classList.add("h-auto");
    dropmenu.classList.add("opacity-100");
    e.name = "close-outline";
  } else {
    dropmenu.classList.remove("h-auto");
    dropmenu.classList.remove("opacity-100");
    e.name = "menu-outline";
  }
};

window.addEventListener("load", () =>{
  const ind = document.getElementById("ind");
  const bus = document.getElementById("bus");
  const sta = document.getElementById("sta");
  const der = document.getElementById("der");

  const funcInd = () => {
    let countInd = 0;
    let setInd = setInterval(() => {
      if (countInd < 50) {
        countInd++;
        ind.innerHTML = countInd + "+";
      } else {
        ind.innerHTML = "50+";
        clearInterval(setInd);
      }
    }, 50);
  };

  const funcBus = () => {
    let countBus = 5000;
    let setBus = setInterval(() => {
      if (countBus < 20000) {
        countBus++;
        bus.innerHTML = countBus + "+";
      } else {
        bus.innerHTML = "20000+";
        clearInterval(setBus);
      }
    }, 10);
  };

  const funcSta = () => {
    let countSta = 0;
    let setSta = setInterval(() => {
      if (countSta < 15) {
        countSta++;
        sta.innerHTML = countSta + "+";
      } else {
        sta.innerHTML = "15+";
        clearInterval(setSta);
      }
    }, 50);
  };

  const funcDer = () => {
    let countDer = 10000;
    let setDer = setInterval(() => {
      if (countDer < 500000) {
        countDer++;
        der.innerHTML = countDer + "+";
      } else {
        der.innerHTML = "50000+";
        clearInterval(setDer);
      }
    }, 10);
  };

  funcInd();
  funcBus();
  funcSta();
  funcDer();
});