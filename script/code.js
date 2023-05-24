
// about section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am 18 years old.", "your mom"
]

//loop through the content 
aboutContents.forEach( (content,i)=> {
    about.innerHTML += `
      <p class='lead'>${i+1} ${content}</p>
      `
} ) //shortcut of creating a function

// education
// Education
let education = [{
        id:1,
        year: 2022,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})