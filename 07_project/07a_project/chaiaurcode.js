const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (bt) {
  bt.addEventListener('click', function (e) {
   
    if (e.target.id === 'grey') {
        // body.style.backgroundColor = "grey";
          body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {  
    //   body.style.backgroundColor = "white";
      body.style.backgroundColor = "e.target.id";
    }
    if (e.target.id === 'blue') {
        // body.style.backgroundColor = "blue";
          body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
    //   body.style.backgroundColor ="yellow";
      body.style.backgroundColor = e.target.id;
    }
  });
});   



