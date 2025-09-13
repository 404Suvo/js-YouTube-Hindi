# Projects related to Dom

## Project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 

```javascript
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
```

# Project 2 
``` javascript 
const form = document.querySelector('form');
// this usecase will give you empty
//const height = parseInt( document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height:- ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid height:- ${weight}`;
  }else {
    const bmi = ((weight * 10**4) / (height)**2).toFixed(2)

    //Show the results
    results.innerHTML = `Result:- ${bmi}`

    if(bmi < 18.6){
      results.innerHTML = `Result:- ${bmi}<br>You Are Under Weight</br>`
    }else if(bmi > 18.6 && bmi< 24.9 ){
      results.innerHTML = `Result:- ${bmi}<br>Your Weight is Normal</br>`
    }else if(bmi > 24.9){
      results.innerHTML = `Result:- ${bmi}<br>You Are Over Weight</br>`
    }
  }
});
```

# Project 3 
``` javascript 
const clock = document.getElementById('clock');

setInterval(function(){
  const LocalDate = new Date()
  clock.innerHTML = LocalDate.toLocaleTimeString()
}, 1000);
```
