
// APPARITION DU MODAL AUTOMATIQUE AU RAFRAICHISEMMENT DE LA PAGE //

// $(window).on('load', function() {
//   $('#Modal_Toggle_1').modal('show');
// });


const FAQ = document.querySelector("#FAQ");

const table_question = [
  {question: "Bonjour, comment ça va ?", awnser: "Oui ça va"},
  {question: "As-tu fais tes exercices d'algo ?", awnser: "Non pas tous"},
  {question: "Combien ils t'en reste ?", awnser: "Il m'en reste pas mal"},
  {question: "Oui mais combien ?", awnser: "Il m'en reste 2"}
];

FAQ.appendChild(toto);

table_question.forEach(question => {
  FAQ.innerHTML+=`<p>${question.question}</p>`
});
