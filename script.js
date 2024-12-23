const plateList1 = [
    "#000000",
    "#6200EE",
    "#3700B3",
    "#344955",
    "#232F34",
    "#4A6572",
    "#F9AA33",
    "#5D1049",
    "#4E0D3A",
    "#720D5D",
    "#E30425",
    "#FEDBD0",
    "#442C2E",
    "#FEEAE6",
    "#FF0266",
    "#03DAC5",
    "#442C2E",
    "#344955",
    "#F4511E",
    "#356859",
    "#37966F",
    "#B9E4C9",
    "#FFFBE6",
    "#FEDBD0",
    "#B00020 ",
    "#2f3640",
    "#192a56",
    "#273c75",
    "#718093",
    "#7f8fa6",
    "#f5f6fa",
    "#c23616",
    "#e84118",
    "#0097e6",
    "#00a8ff",
    "#8c7ae6",
    "#9c88ff",
    "#4cd137",
    "#44bd32",
    "#353b48",
    "#40739e",
    "#487eb0",
    "#68f1f8",
    "#13D9E7",
    "#083744",
    "#165363",
    "#166474",
    "#0f7c8f",
];


const colorBoxContainer1 = document.querySelector(".box__container-1");
for(let i = 0; i < plateList1.length; i++){
    colorBoxContainer1.innerHTML += `<div class="box" style="background-color:${plateList1[i]}">${plateList1[i]}</div>`;
}




const plateList2 = [
    "#FF0000",
    "#0000FF",
    "#006400",
    "#FFFFFF",
    "#000000",
    "#FFFF00",
    "#8F00FF",
    "#FF00FF",
    "#FFFDD0",
    "#D2B48C",
    "#FFDB58",
    "#FF7F50",
    "#E6E6FA",
    "#FFE5B4",
    "#4B0082",
    "#667357",
    "#007FFF",
    "#FAF9F6",
    "#A020F0",
    "#C0C0C0",
    "#964B00",
    "#808080",
    "#FFC0CB",
    "#808000",
    "#800000",
    "#36454F",
    "#CD7F32",
    "#FFD700",
    "#008080",
    "#000080",
    "#800020",
    "#E0B0FF",
    "#B7410E",
    "#E0115F",
    "#00FFFF",
    "#F5F5DC",
    "#30D5C8",
    "#FFBF00",
    "#3EB489",
];


const colorBoxContainer2 = document.querySelector(".box__container-2");
for(let i = 0; i < plateList2.length; i++){
    colorBoxContainer2.innerHTML += `<div class="box" style="background-color:${plateList2[i]}">${plateList2[i]}</div>`;
}

