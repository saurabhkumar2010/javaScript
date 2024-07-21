//generate a random color

// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];   
//     }
//     return color;
//   }; 
  
//   let intervalId;
//   const startChangingColor = function () {
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);  
//     }
  
//     function changeBgColor() {  
//       document.body.style.backgroundColor = randomColor();
//     }
//   };
//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   document.querySelector('#start').addEventListener('click', startChangingColor);
  
//   document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let changeColor = function(){
  let str = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++){
    color += str[Math.floor(Math.random()*16)]
  }
  document.body.style.backgroundColor = color;

}

let intervalId; 

document.querySelector('#start').addEventListener('click', ()=>{
  console.log("start");
  intervalId = setInterval(changeColor,1000);
});



document.querySelector('#stop').addEventListener('click', ()=>{
  console.log("stop");
  clearInterval(intervalId);
  intervalId = null;

});




