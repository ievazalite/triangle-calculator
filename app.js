const form = document.querySelector('.form-container');
const aside = document.querySelector('.aside');
const bside = document.querySelector('.bside');
const cside = document.querySelector('.cside');
const feedback = document.querySelector('.feedback');
const h2 = document.querySelector('#h2');


form.addEventListener('submit', compareData => {
    compareData.preventDefault();


    //regex
    const pattern = /^[1-5]\d{1}$/;

    if(pattern.test(aside, bside, cside)){
        console.log('all good');
    }else{
        feedback.textContent = 'You can enter numbers only from 1 to 5';
    }


    //getting the value from form
    const userAnswers = [aside.value, bside.value, cside.value];

    //comparing data
    /*userAnswers.forEach((answer) => {
        if(answer === data.equilateral){
            result.h2.textContent = `Equilateral`;
        }
        if(answer === data.isosceles){
            result.result.h2.textContent = `Isosceles`;
        }
        if(answer === data.scalene){
            result.h2.textContent = `Scalene`;
        }
        if(answer === data.impossible){
            result.h2.querySelector('').textContent = `Not possible`;
        }
    }); */


});

//getting data from json, parse, promise, catch err
fetch('data.json')
    .then((response) =>{ console.log('resolved', response); response.json();})
    .then(data => {console.log(data);})
    .catch((err) => {console.log('rejected', err)
});