
// APPARITION DU MODAL AUTOMATIQUE AU RAFRAICHISEMMENT DE LA PAGE //

// $(window).on('load', function() {
//   $('#Modal_Toggle_1').modal('show');
// });


const FAQ = document.querySelector("#message");
const input = document.querySelector("#input");
const afficherQuestion = document.createElement("div");
const mainPage = document.querySelector("#title");

const table_question = [
  {question: "Bonjour, comment ça va ?", awnser: "Oui ça va"},
  {question: "As-tu fais tes exercices d'algo ?", awnser: "Non pas tous"},
  {question: "Combien ils t'en reste ?", awnser: "Il m'en reste pas mal"},
  {question: "Oui mais combien ?", awnser: "Il m'en reste 2"}
];

FAQ.appendChild(afficherQuestion);
// recuperer la div message et creer une div de la div message
table_question.forEach(question => {
  FAQ.innerHTML+=`<p>${question.question}</p>`
});
//fonction la question et  remplace la page principale par l'affichage des questions et des reponses.
function QuestionAwnser(question){
  question.preventDefault();
  mainPage.style.display = "none";
  FAQ.appendChild(afficherQuestion);
};