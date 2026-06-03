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
// USIA PELANGI
// ===================

const birthDate = new Date("2007-06-04");

function updateAge(){

    const now = new Date();

    let age =
    now.getFullYear() -
    birthDate.getFullYear();

    const monthDiff =
    now.getMonth() -
    birthDate.getMonth();

    if(
        monthDiff < 0 ||
        (
            monthDiff === 0 &&
            now.getDate() < birthDate.getDate()
        )
    ){
        age--;
    }

    document.getElementById("timer").innerHTML =
    `🎉 Selamat Ulang Tahun Ke-${age} ❤️`;
}

updateAge();



// ===================
// ALASAN MENYAYANGI
// ===================

const reasons = [

"Aku suka senyuman kamu",

"Aku suka kepedulian kamu",

"Aku nyaman kalo ngobrol sama kamu",

"Aku suka denger cerita kamu",

"Aku suka ketawamu",

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
"❤️ AKUU SENENG BANGET KAMU MASIH SAYANG SAMA AKU HEHE I LOVE YOUU!! ❤️";

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
