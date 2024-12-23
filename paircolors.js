const pairColors = [
    ["F4B419", "143d59"],
    ["210070", "213970"],
    ["5B0E2D", "FF9781"],
    ["210070", "213970"],
    ["ffa781", "5B0E2D"],
    ["0E387A", "9FAFCA"],
    ["EFC8B1", "514644"],
    ["f9858B", "761137"],
    ["FFB8B1", "993441"],
];

const pairBoxContainer = document.querySelector(".pair__box-container");
const pairBox = document.querySelector(".pair__box");
for(let i = 0; i < pairColors.length; i++){
    pairBoxContainer.innerHTML += `
    <div class="comb__box">
        <div class="pair__box pair__box-1" style="background-color:#${pairColors[i][0]}">#${pairColors[i][0]}</div>
        <div class="pair__box pair__box-2" style="background-color:#${pairColors[i][1]}">#${pairColors[i][1]}</div>
    </div>`;
}