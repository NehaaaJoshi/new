let no= document.querySelector("#no");
let yes= document.querySelector("#yes");
let h1= document.querySelector("#heading");
let img=document.querySelector("img");
let container= document.querySelector(".container");
let btn= document.querySelector(".btn");
let body= document.querySelector("body");


const moveBtn = () =>{
    var x = Math.random() * (window.innerWidth - no.offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - no.offsetHeight) - 48;
    img.src="emotional.gif";
    yes.innerText="ok";
    img.style.height="50vmin"
     body.style.backgroundColor="darkcyan";
     img.style.marginTop="5vmin";


   no.style.position="absolute";
   no.style.left= x +'px';
   no.style.top= y+'px';

   h1.innerText=" Manjaooo Na !!";
}

no.addEventListener("mouseenter", moveBtn);

const nextpg = () =>{
    h1.innerText=" Hurayyyy !!";
    // h1.style.marginTop="5vmin";
    img.src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" ;
    no.style.display="none";
    yes.style.display="none";
  btn.classList.remove("hide");
  body.style.backgroundColor="#ff5d8f";
  }

yes.addEventListener("click", nextpg);

const nextpg2 = () =>{
    h1.innerText=" I Love Youuuu too Aalu<3";
    img.src="shy.gif";
        img.style.height="60vmin";
        img.style.borderRadius="50%";
        btn.classList.add("hide");
        // container.style.marginTop=" 7vmin";

}

btn.addEventListener("click",nextpg2 );






