
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
 i = 0;
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

//testimonials
let testimonials= [{
    id:1,
    name: 'Rayhaan Khan',
    image:  'https://i.postimg.cc/Y0bdBxXT/C12-Rayhaan-Khan-2.jpg',
    description: "Ganiefah Majiet is the kindest-hearted and most dedicated woman I've ever met. She consistently manages to uplift the mood in a dark room and always strives to help everyone to the best of her ability. Once her mind is set on something, she ensures that she gives her utmost effort to excel. I highly recommend Ganiefah to everyone, as she would be a valuable addition to the workplace and is always seeking to improve.",
},
{
    id: 2,
    name: "Laiquah Cotie",
    image: 'https://i.postimg.cc/cCRNRPLw/C12-Laiquah-Cotie-2.jpg',
    description: "Ganiefah is a hard worker who never gives up and consistently applies herself, often going above and beyond what is required. It is a pleasure to have her on your team, as she is a reliable team player and performs well under pressure. She consistently delivers results when they are needed. Additionally, she has a helpful and cheerful personality.",

   
},
{
    id: 3,
    name: "Eighton Lee Paulse",
    image: 'https://i.postimg.cc/43fRzWDh/C12-C2-Eighton-Lee-Paulse-2.jpg',
    description: "Ganiefah radiates vibrant and joyful energy. She is highly motivated in her work and puts her heart and soul into everything she does. Her personality is truly unique and enjoyable, and she shows great respect for everybody around her. Ganiefah brings only positive energy, always brightening up the mood wherever she goes. I wholeheartedly recommend her without hesitation.",

},
{
    id: 4,
    name: "Codi Kader",
    image: 'https://i.postimg.cc/qBY96pX9/Codi-Kader.jpg',
    description: "Ganiefah excels both in group settings and when working independently. She possesses the remarkable ability to adapt to any environment she finds herself in. Once you get to know her, you experience a genuine sense of belonging, as she welcomes you with warmth and kindness.Ganiefah's personality is wonderfully bubbly, making her a valuable addition to any workplace or business. She demonstrates exceptional proficiency in HTML & CSS. When collaborating with a team, she is the go-to person for assistance, always willing to lend a hand. This willingness to help is an invaluable asset when working in a team.",
},
{
    id: 5,
    name: "Uzukhanye Dywili",
    image: 'https://i.postimg.cc/6Qn4vpNQ/C11-Uzukhanye-Dywili-4.jpg',
    description: "Working with Ganiefah Majiet was an incredible experience. Their professionalism, attention to detail, and communication skills made the entire process seamless. They consistently exceeded my expectations and delivered exceptional results. I would highly recommend Ganiefah Majiet to anyone looking for a talented and dedicated professional.",

},
]
let divTestimonials = document.querySelector('.testimonials');
testimonials.forEach((data)=> {
    divTestimonials.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.name}</h4>
        <div id="card-body">
               <img src= "${data.image}" class = "img-fluid">
               <p class="text-black">${data.description}
            </p>
        </div>
    </div>
    `
})


// projects 
let projects = [{
    id:1,
    image: "https://i.postimg.cc/SRtkN3Dh/Screenshot-2023-05-11-140653.png",
    description: 'Krusty Burger Home Page Project',
    link1: "https://github.com/ganiefah/home.git",
    link2: "https://celadon-kleicha-5fadcb.netlify.app/",
    
},
{
    id: 2,
    image:'https://i.postimg.cc/9FfK1tHq/Screenshot-2023-05-12-093429.png',
    description: 'calender Example',
    link1:"https://github.com/ganiefah/calendar.git",
    link2: "https://charming-scone-180e99.netlify.app/",
   
},
{
    id: 3,
    image:'https://i.postimg.cc/d0X80VqN/Screenshot-2023-05-26-144454.png',
    description: 'Javascript Calculator',
    link1:"https://github.com/ganiefah/javasript-calculator.git",
    link2: "https://ganiefah-calculator.netlify.app/",
   
},
{
    id: 2,
    image:'https://i.postimg.cc/pVKD2v3k/Screenshot-2023-05-26-144333.png',
    description: 'BMI Calculator',
    link1:"https://github.com/ganiefah/bmi_calculator.git",
    link2: "https://ganiefahs-bmi-calculator.netlify.app/",
   
},
]
//
let divProjects = document.querySelector('.projects');
projects.forEach((data)=> {
divProjects.innerHTML += `
<div class="card">
    <div class="card-body">
        <p class="text-black">
        <img src= "${data.image}" class = "img-fluid">
        <p class="text-black">${data.description}</p>
        <a href=${data.link1}  target = "_blank" role="button">Github</a>
        <a href=${data.link2}  target = "_blank" role="button">Netlify</a>
    </div>
</div>
`  
})