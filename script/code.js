
// about section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am Ganiefah Majiet. I live in Parow, but I grew up in Bridgetown. I was born on the 18th of August, 2004. I speak both Afrikaans and English, but my home language is English. My highest level of education is matric, which I completed in 2022. Currently, I am enrolled in a full stack web development course at Life Choices Academy."
]

//loop through the content 
aboutContents.forEach( (content)=> {
    about.innerHTML += `
      <p class='lead'>${content}</p>
      `
} ) //shortcut of creating a function

// education
// Education
let education = [{
        id:1,
        year: 2022,
        description: 'Grade 12',
        place: 'The Settlers High School',
    },
    {
        id: 2,
        year: 2023,
        description: 'Currently busy studying a full stack web development course',
        place: 'Life Choices',
       
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-black">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})
 
//skills section
//html
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
//css
var i = 0;
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
//bootstrap
var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
// javascript 
var i = 0;
function move3() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
