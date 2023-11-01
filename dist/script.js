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
