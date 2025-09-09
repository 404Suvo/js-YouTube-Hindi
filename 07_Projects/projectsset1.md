# Projects related to Dom

## Project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (box){
  console.log(box);
  box.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    switch (e.target.id)
    {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "blue":
        body.style.backgroundColor = "blue"
        break;

      case "yellow":
        body.style.backgroundColor = "yellow"
        break;
      
      case "white":
        body.style.backgroundColor = "white"
        break;
        
      case "purple":
      body.style.backgroundColor = "purple"
      break;
    }
  })
});
