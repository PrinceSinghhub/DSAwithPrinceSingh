const items = document.querySelectorAll(".item");

      items.forEach((item) => {
        const x = item.querySelector(".title");
        const y = item.querySelector(".content");

        x.addEventListener("click", () => {
          item.classList.toggle("active");
        });
      });
      
// -------------------------------------Main Bar --------------------------------------


let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 25,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(rgba(0, 128, 0, 0.747) ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

// -------------------------------------------------------------------
