console.log("welcome to spotify"); 
let songs=[
    {songname: "kahani suno", filepath: "song/1.mp3",coverpath: "covers/2.jpg"},
    {songname: "kahani suno", filepath: "song/1.mp3",coverpath: "covers/2.jpg"},
    {songname: "kahani suno", filepath: "song/1.mp3",coverpath: "covers/2.jpg"},
    {songname: "kahani suno", filepath: "song/1.mp3",coverpath: "covers/2.jpg"},
    {songname: "kahani suno", filepath: "song/1.mp3",coverpath: "covers/2.jpg"},
]
let audioele=new Audio('1.mp3');
let songindex=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
// audioele.play();
masterplay.addEventListener('click',()=>{
    if(audioele.paused || audioele.currentTime<=0){
        audioele.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioele.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioele.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seekpar;
    progress=parseInt((audioele.currentTime/audioele.duration)*100);
    // console.log(progress);
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioele.currentTime= myprogressBar.value*audioele.duration/100;
})
// array.from(document.getElementsByClassName('songitemplay')),forEach[(element)=>{
//   Element.addEventListener('click',(e.target)=>{
//     console.log(e);
//   })
// }]