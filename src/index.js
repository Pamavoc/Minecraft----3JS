import { World3D } from "./World3D";
import img from "./src/atlas1.png";

console.log("start");


const WORLD_SIZE = 50;
const WORLD_HEIGHT =10;
const DEBUG = true;


//loader
window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM chargé");
    setTimeout(makeWorld,200)
});

function makeWorld() {
    const world = new World3D(WORLD_SIZE,WORLD_HEIGHT, DEBUG);
}





