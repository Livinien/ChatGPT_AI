
// APPARITION DU MODAL AUTOMATIQUE AU RAFRAICHISEMMENT DE LA PAGE //

// $(window).on('load', function() {
//   $('#Modal_Toggle_1').modal('show');
// });


const FAQ = document.querySelector("#message");

const input = document.querySelector("#input");

const mainPage = document.querySelector("#title");

const search = document.querySelector("#search");

const affichageQuestion = document.createElement("section");
FAQ.appendChild(affichageQuestion);

const table_question = [
  {question: "Bonjour, comment ça va ?", answer: "Oui ça va"},
  {question: "As-tu fais tes exercices d'algo ?", answer: "Non pas tous"},
  {question: "Combien ils t'en reste ?", answer: "Il m'en reste pas mal"},
  {question: "Oui mais combien ?", answer: "Il m'en reste 2"}
];

// Récupérer la div message et créer une div à l'intérieur de la div message.
FAQ.appendChild(affichageQuestion);


// Recupère la question et remplace la page principale par l'affichage des questions et des réponses.
function questionAnswer(e) {
  // question.preventDefault();

  mainPage.style.display = "none";

  const questionDiv = document.createElement("div");
  questionDiv.className = "addQuestion";
  questionDiv.style.cssText = "background : #353540; display: flex; justify-content: space-between; align-items: start; font-size: 20px";
  FAQ.appendChild(questionDiv);

  const answerDiv = document.createElement("div");
  answerDiv.className = "addAnswer";
  answerDiv.style.cssText = "background : #444653; display: flex; justify-content: space-between; align-items: start; font-size: 20px";
  FAQ.appendChild(answerDiv);


  input.addEventListener("click", function () {
    const topDiv = document.querySelector('#top');
    topDiv.scrollTop = topDiv.offsetHeight;
  });
};

for(let i = 0; i < table_question.length; i++) {
  if(table_question[i].question == search.value) {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg%22/%3E</div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${table_question[i].question}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
  }
}

// Creer une fonction qui cache le contenu de l'id title
// Lorsque on clique sur le bouton, cela appelle la fonction

function hidden() {
  mainPage.style.display = "none";
}

input.addEventListener('click', (e) => {   
  let newDiv = document.querySelector('#title');   
  newDiv.style.visibility = "hidden"; 
});
// input.addEventListener("click", mainPage);



// input.addEventListener("click", function questionAnswer()  {
//   FAQ.appendChild(affichageQuestion);
// });





// table_question.forEach(question => {
//   FAQ.innerHTML+=`<p>${question.question}</p>`
// });
