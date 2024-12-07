// // Array of data
// const items = [
//   { title: "Graduation Project", description: "" },
//   { title: "البطاقة 2", description: "هذا هو وصف البطاقة الثانية." },
//   { title: "البطاقة 3", description: "هذا هو وصف البطاقة الثالثة." },
// ];

// // Reference to the card container
// const cardc = document.getElementById("card-container");

// // Loop through the array and create cards
// items.forEach((item) => {
//   // Create a card element
//   const card = document.createElement("div");
//   card.className = "col-md-4"; // Bootstrap column class

//   card.innerHTML = `
//       <div class="card">
//           <div class="card-body">
//               <h5 class="card-title">${item.title}</h5>
//               <p class="card-text">${item.description}</p>
//           </div>
//       </div>
//   `;

//   // Append the card to the container
//   cardc.appendChild(card);
// });

// myyy
// Array of data
const projects = [
  {
    title: "Graduation Project",
    description:
      "System for Converting Arabic Sign Language for the Deaf and Mute into Text.",
    Toolsـtechniques: "python ,kivy ,computer vision ,CNN",
    url_Github: "https://github.com/fatenkabalan/Graduation-Project.git",
  },
  {
    title: "Semester Project",
    description:
      "Website for Learning English Tenses Grammar 'Grammary Tense'.",
    Toolsـtechniques: "python ,django ,NLP ,HTML ,CSS",
    url_Github: "https://github.com/fatenkabalan/Semester-Project.git",
  },
  {
    title: "Database assignment",
    description: "",
    Toolsـtechniques: "SQL ,ERD",
    url_Github: "https://github.com/fatenkabalan/Database-Assignment.gits",
  },
  {
    title: "Data Mining Assignment",
    description: "",
    Toolsـtechniques: "python ,pandas ,sklearn ,seaborn ,matplotlib",
    url_Github: "https://github.com/fatenkabalan/Data-Mining-Assignment.git",
  },
  {
    title: "Computer Graphics Assignment",
    description: "",
    Toolsـtechniques: "c++ ,opencv",
    url_Github:
      "https://github.com/fatenkabalan/Computer-Graphics-Assignment.git",
  },
  {
    title: "Security Assignment",
    description: "",
    Toolsـtechniques: "c#",
    url_Github: "https://github.com/fatenkabalan/Security-Assignment.git",
  },
];

// Reference to the card container
const cardContainer = document.getElementById("card-container");

// Loop through the array and create cards
projects.forEach((item) => {
  // Create a card element
  const card = document.createElement("div");
  card.className = "col-md-4"; // Bootstrap column class

  card.innerHTML = `<div class="card">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">
                ${item.description}
                </p>
                <p><b>Tools and Techniques: </b>${item.Toolsـtechniques}</p>
                <a
                  href=${item.url_Github}
                  class="btn btn-secondary"
                  >Go To Github</a
                >
              </div>
            </div>
  `;

  // Append the card to the container
  cardContainer.appendChild(card);
});
