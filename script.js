var resume = {
    name : "SHIVANI A",
    contact : {
        email : "shivani@gmail.com",
        phone : "1234567890"
    },
    education : [
        {
            degree: "BE in Computer Science",
            institution: "Anna University",
            year: 2020
        },
        {
            degree: "Diploma in Computer Science",
            institution: "State Board of Technical Education",
            year: 2017
        },
        {
            degree: "SSLC",
            institution: "State Board",
            year: 2013
        }
    ],
    "experience": [
        {
          position: "Full Stack Developer",
          company: "Zoho",
          years: 1
        },
        {
          position: "Software Developer",
          company: "TCS",
          years: 1
        }
      ],
      skills: ["JavaScript", "Python", "C++", "Java"],
      languages: [
        {
          language: "English",
          fluency: "Excellent"
        },
        {
          language: "Tamil",
          fluency: "Excellent"
          }
      ],
      interests: ["Readin books","listening music","Watching Tv"]
}


//console.log(resume);

//for loop
for(var i=0;i<resume.skills.length;i++){
  console.log(resume.skills[i]);
}


for(var i=0;i<resume.education.length;i++){
  console.log(resume.education[i]);
}



//for in loop
for(let key in resume){
  console.log(key + ":" , resume[key] );
}

for(let key in resume.contact){
  console.log(key + ":", resume.contact[key]);
}

//for of loop
for(let skill of resume.skills){
  console.log(skill);
}

for(let experience of resume.experience){
  console.log(experience);
}

//for Each loop
resume.interests.forEach(function(interest){
  console.log(interest);
});


resume.education.forEach(function(edu){
  console.log(edu);
});

resume.experience.forEach(function(exp){
  console.log(exp);
});