const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.querySelector(".music-icon");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!isPlaying){

        music.play();

        musicBtn.innerHTML = "⏸ Pause Lagu";

        musicIcon.classList.add("rotate");

        isPlaying = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "▶ Putar Lagu";

        musicIcon.classList.remove("rotate");

        isPlaying = false;
    }

});

document.getElementById("openBtn").addEventListener("click", () => {

   music.play()
.then(() => {
    console.log("Music playing");
})
.catch(err => {
    console.log(err);
});

    document.querySelector(".letter")
    .scrollIntoView({
        behavior:"smooth"
    });

});



// ===================
// COUNTDOWN HUBUNGAN
// ===================

const startDate = new Date("2025-01-01");

function updateTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days =
    Math.floor(diff / (1000*60*60*24));

    const hours =
    Math.floor(diff/(1000*60*60)%24);

    const minutes =
    Math.floor(diff/(1000*60)%60);

    document.getElementById("timer").innerHTML=
    `${days} Hari ${hours} Jam ${minutes} Menit`;
}

setInterval(updateTimer,1000);

updateTimer();



// ===================
// ALASAN MENYAYANGI
// ===================

const reasons = [

"Aku suka caramu tersenyum",

"Aku suka caramu peduli",

"Aku nyaman saat berbicara denganmu",

"Aku suka mendengar ceritamu",

"Aku suka tawamu",

"Aku suka semangatmu",

"Aku suka semua hal kecil tentangmu",

"Aku suka karena kamu adalah kamu ❤️"
];

document.getElementById("reasonBtn")
.addEventListener("click",()=>{

const random =
Math.floor(
Math.random()*reasons.length
);

document.getElementById("reasonBox")
.innerHTML = reasons[random];

});



// ===================
// SURPRISE BUTTON
// ===================

document.getElementById("surpriseBtn")
.addEventListener("click",()=>{

confetti({
particleCount:250,
spread:180
});

document.getElementById("surpriseMessage")
.innerHTML =
"❤️ Aku bersyukur dipertemukan denganmu, Pelangi ❤️";

});



// ===================
// HATI BERJATUHAN
// ===================

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
Math.random()*20 + 15 + "px";

heart.style.animationDuration =
Math.random()*4 + 4 + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);
