const sendBtn = document.querySelector("#sendBtn"); // input
const chatGpt = document.querySelector("#chatGpt"); // title
const QAsection = document.createElement("section");
document.querySelector("#main").appendChild(QAsection); //message

QAsection.id = "qa-section";

// document.querySelector('#input-section').before(QAsection)
let punctuation = 0;

function randomPunctuation() {
  var punctuations = [
    "!?",
    "!!",
    "??",
    ".",
    "...",
    "!??!",
    "!!!???",
    "??!??!??",
    "!!?!!?!!?!!",
  ];
  var random = Math.floor(Math.random() * punctuations.length);
  var randomValue = punctuations[random];
  punctuation = randomValue;
  return punctuation;
}

function debugMe() {
  var debugMeArray = [
    "Pourquoi ?",
    "Reformule ta question.",
    "Reformule ta problématique.",
    "Est-ce que tu es sûr de ce que tu as écrit ?",
    "As-tu affiché du debug (console.log en JS, print_r ou var_dump en PHP, ...) ?",
    "Est-ce que le fichier est bien appelé ?",
    "Où est ton fichier ?",
    "Où est la déclaration de ta fonction ?",
    "Où exécutes-tu ta fonction ?",
    "Où est la déclaration de ta variable ?",
    "Qu'y a-t-il dans ta variable ?",
    "Décris-moi ce que tu veux faire en langage courant.",
    "Que fait ton code ?",
    "Tu as regardé sur Google ?",
    "Google est ton ami ;)",
    "Il manquerait pas un point-virgule ou une parenthèse ?",
    "Est-ce que ton code est bien indenté ?",
    "As-tu regardé dans l'inspecteur du navigateur ?",
    "Prends un papier et un crayon ;)",
    "Fais une pause :)",
    "Que fait cette fonction ?",
  ];
  return debugMeArray[Math.floor(Math.random() * debugMeArray.length)];
}

const tab = [
  { keywords: ["man", "strong", "strongest", "fastest"], answer: "Bruce Lee" },
  { keywords: ["woman", "smart"], answer: "Marie Curie" },
  {
    keywords: ["man", "smart", "genius", "high", "iq"],
    answer: "Albert Einstein",
  },
];

//is groot
//is debug

function chatAnswer(e) {
  e.preventDefault();
  // Disparition de la page Chat GPT
  chatGpt.style.display = "none";

  // Création de la div container de la question (modif : className au lieu d'id = pour pouvoir compter les div)
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.style.cssText =
    "background : #353540; display: flex; justify-content: space-between; align-items: start; font-size: 20px";
  QAsection.appendChild(questionDiv);

  // Variable qui compte les div question pour pvr faire une boucle avec au moment de la création des div réponses, et ne pas les faire se répéter avec la boucle du tableau des questions/réponses
  numberDiv = document.querySelectorAll(".question").length;

  // Création de la div container de la réponse
  const answerDiv = document.createElement("div");
  answerDiv.className = "answer";
  answerDiv.style.cssText =
    "background : #444653; display: flex; justify-content: space-between; align-items: start";
  QAsection.appendChild(answerDiv);

  sendBtn.addEventListener("click", function () {
    const topDiv = document.querySelector("#top");
    topDiv.scrollTop = topDiv.offsetHeight;
  });

  //  si Groot actif il répond groot sinon il fait
  if (grootBox.checked) {
    randomPunctuation();
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="groot${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
    // Typewriter permet de simuler l'écriture en direct
    var typewriter = new Typewriter(`#groot${numberDiv}`, {
      cursor: "",
    });
    typewriter
      .changeDelay(50)
      .typeString(`Je s'appelle Groot ${punctuation}`)
      .start();
  } else if (debugBox.checked) {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="debug${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
    // Typewriter permet de simuler l'écriture en direct
    var typewriter = new Typewriter(`#debug${numberDiv}`, {
      cursor: "",
    });
    typewriter.changeDelay(50).typeString(debugMe()).start();
  } else {
    if (!input.value == "") {
      questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
      answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="answer${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      var typewriter = new Typewriter(`#answer${numberDiv}`, {
        cursor: "",
      });
      // modification
      typewriter.changeDelay(50).typeString(getAnswer(input.value)).start();
    } else {
      // si le input est vide
      questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
      answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="empty${numberDiv}"></p><div id="thumbs-div" class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      var typewriter = new Typewriter(`#empty${numberDiv}`, {
        cursor: "",
      });
      typewriter
        .changeDelay(50)
        .typeString("Oh vous ne voulez pas me parler ??? Je suis vexé...")
        .start();
    }
  }
  // Bouton like et dislike + intéraction. Si l'un est up l'autre ne l'est plus
  let btnUp = false;
  let btnDown = false;

  const thumbsUp = answerDiv.childNodes[2].childNodes[0];
  thumbsUp.onclick = () => {
    if (btnDown == true) {
      btnUp = true;
      thumbsUp.style.cssText = "color: lightgreen";
      btnDown = false;
      thumbsDown.style.cssText = "";
    } else if (btnUp == true) {
      btnUp = false;
      thumbsUp.style.cssText = "";
    } else {
      btnUp = true;
      thumbsUp.style.cssText = "color: lightgreen";
    }
  };

  const thumbsDown = answerDiv.childNodes[2].childNodes[1];
  thumbsDown.onclick = () => {
    if (btnUp == true) {
      btnDown = true;
      thumbsDown.style.cssText = "color: red";
      btnUp = false;
      thumbsUp.style.cssText = "";
    } else if (btnDown == true) {
      btnDown = false;
      thumbsDown.style.cssText = "";
    } else {
      btnDown = true;
      thumbsDown.style.cssText = "color: red";
    }
  };

  input.value = "";
}

sendBtn.addEventListener("click", chatAnswer);

/*
  on récupère input
  on sépare input
  on le met dans un tableau
  pour chaque input -> on verifie si il dans notre keywords
  pour chaque réponse positive, on récupère la key
  on compte le nombre de key identiques
  on récupère la réponse de la key la plus nombreuse
  on affiche la réponse
*/

//Cette fonction prend une entrée de chaîne comme argument et renvoie un tableau de mots séparés par une virgule ou un ou plusieurs espaces. La fonction utilise une expression régulière /[,\s]+/ pour séparer la chaîne d'entrée sur une virgule ou un ou plusieurs espaces consécutifs. Le tableau de chaînes résultant est ensuite renvoyé
function getWordArray(input) {
  return input.split(/[,\s]+/);
}

/*
Cette fonction prend un tableau de chaînes wordArray comme argument et renvoie un tableau d'indices d'objets dans myArray qui correspondent aux mots clés dans wordArray.

La fonction initialise un tableau vide answerArray. Il utilise ensuite deux boucles forEach imbriquées. La boucle externe parcourt chaque mot de wordArray et la boucle interne parcourt chaque objet de myArray.

Pour chaque itération de la boucle interne, la fonction utilise une boucle for pour parcourir chaque mot-clé dans la propriété de mot-clé de l'objet actuel. Si un mot de wordArray correspond à un mot-clé, l'index de l'objet courant dans myArray est poussé vers answerArray.

Enfin, la fonction renvoie answerArray.
*/
function getAnswerArray(wordArray) {
  let answerArray = [];
  wordArray.forEach((word) => {
    tab.forEach((obj) => {
      for (let i = 0; i < obj.keywords.length; i++) {
        if (word === obj.keywords[i]) {
          answerArray.push(tab.indexOf(obj));
        }
      }
    });
  });
  return answerArray;
}

/*
Cette fonction prend un tableau d'indices answerArray comme argument et renvoie un objet qui compte les occurrences de chaque index dans answerArray.

La fonction utilise la méthode reduce pour parcourir answerArray et créer un objet qui garde une trace des occurrences de chaque index.

La méthode reduce prend deux arguments : allIndexes et index. allIndexes est un accumulateur qui commence comme un objet vide {} et est mis à jour à chaque itération. index est l'élément actuel dans answerArray.

À chaque itération, la fonction vérifie si l'index actuel existe dans allIndexes à l'aide de l'opérateur in. Si c'est le cas, la valeur de la propriété pour cet index est incrémentée de 1. Si ce n'est pas le cas, une nouvelle propriété est créée pour cet index avec une valeur de 1.

Enfin, la fonction renvoie allIndexes qui est un objet qui représente le nombre d'occurrences pour chaque index dans answerArray.
*/
function getOccurrence(answerArray) {
  return answerArray.reduce((allIndexes, index) => {
    if (index in allIndexes) {
      allIndexes[index]++;
    } else {
      allIndexes[index] = 1;
    }
    return allIndexes;
  }, {});
}

/* 
Cette fonction prend un objet objectOccurence qui compte les occurrences de chaque index comme argument et renvoie l'index avec le nombre le plus élevé ou un index aléatoire si plusieurs index ont le même nombre le plus élevé.

La fonction initialise les variables maxIndex, maxValue et pickRandomAnswer qui gardent une trace de l'index avec le nombre le plus élevé, la valeur du nombre le plus élevé et un tableau d'indices avec le même nombre le plus élevé, respectivement.

La fonction utilise ensuite une boucle for...in pour parcourir les propriétés dans objectOccurence. A chaque itération, la valeur de la propriété courante est stockée dans la variable value.

La fonction compare value avec maxValue. Si la valeur est supérieure à maxValue, maxValue et maxIndex sont mis à jour. Si la valeur est égale à maxValue, maxIndex est poussé vers pickRandomAnswer.

Enfin, la fonction renvoie soit la valeur de maxIndex si pickRandomAnswer n'inclut pas maxIndex, soit un index aléatoire de pickRandomAnswer si c'est le cas. L'index aléatoire est choisi en générant un nombre aléatoire entre 0 et la longueur de pickRandomAnswer et en l'utilisant comme index pour accéder à une valeur dans pickRandomAnswer.
*/

function getIndex(objectOccurence) {
  var maxIndex;
  var maxValue = 0;
  var pickRandomAnswer = [];
  for (const index in objectOccurence) {
    const value = objectOccurence[index];
    if (value > maxValue) {
      maxValue = value;
      maxIndex = index;
    } else if (value == maxValue) {
      if (pickRandomAnswer.includes(maxIndex)) {
        pickRandomAnswer.push(index);
      } else {
        pickRandomAnswer.push(maxIndex);
        pickRandomAnswer.push(index);
      }
    }
  }
  //console.log(pickRandomAnswer);
  if (pickRandomAnswer.includes(maxIndex)) {
    return pickRandomAnswer[
      Math.floor(Math.random() * pickRandomAnswer.length)
    ];
  }
  return maxIndex;
}

/*
Cette fonction est une fonction de haut niveau qui combine toutes les fonctions précédentes pour renvoyer une réponse basée sur l'entrée.

La fonction prend une entrée de chaîne comme argument et renvoie une chaîne qui est la réponse.

La fonction appelle getWordArray(input) pour diviser l'entrée en un tableau de mots.

Ensuite, il appelle getAnswerArray(wordArray) pour obtenir un tableau d'indices correspondant aux mots de wordArray dans l'objet myArray.

Ensuite, il appelle getOccurrence(answerArray) pour obtenir un objet qui compte les occurrences de chaque index dans answerArray.

Enfin, il appelle getIndex(occurrence) pour obtenir l'index avec le nombre le plus élevé ou un index aléatoire si plusieurs index ont le même nombre le plus élevé.

Enfin, il renvoie la réponse correspondant à l'index en accédant à la propriété answer de l'objet dans myArray avec le même index.
*/

function getAnswer(input) {
  const wordArray = getWordArray(input);
  const answerArray = getAnswerArray(wordArray);
  const occurrence = getOccurrence(answerArray);
  const index = getIndex(occurrence);
  if (index == undefined) {
    return "Je ne souhaite pas répondre à votre question... Retentez plus tard.";
  }
  return tab[index].answer;
}
