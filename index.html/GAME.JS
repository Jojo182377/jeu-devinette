const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Londres", "Berlin", "Rome", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Combien font 5 x 5 ?",
        answers: ["10", "20", "25", "30", "15"],
        correct: "25"
    },
    {
        question: "Qui est le créateur de Facebook ?",
        answers: ["Bill Gates", "Elon Musk", "Mark Zuckerberg", "Jeff Bezos", "Steve Jobs"],
        correct: "Mark Zuckerberg"
    },
    {
        question: "quel pays a offert la statue de la liberté aux états-unis ?",
        answers: ["royaume-unis","france","espagne","italie","canada"],
        correct: "france"
    },
    {
        question: "quel animal peut dormir debout ?",
        answers: ["cheval","chat","serpent","lapin","canard"],
        correct: "cheval"
    },
    {
        question: "dans quel pays le café a-t-il été inventé ?",
        answers: ["brésil","éthiopie","italie","turquie","inde"],
        correct: "éthiopie"
    },
    {
        question:"quel est l'animal le plus lent du monde ?",
        answers:["escargot","tortue","bernard-l'hermite","paresseux","poisson-lune"],
        correct:"paresseux"
    },
    {
        question:"en quel années la rdc a t'il eu son indépendance ?",
        answers:["1980","1962","1882","1960","2006"],
        correct:"1960"
    },
    {
        question:"dans une course de voiture il y'a 3 voiture et le 1e,le 2e,le 3e et le troisième dépasse le deuxième il prend quel position",
        answers:["il devient 1er","il devient 4ème","il devient 2ème","il devient 5ème","il reste toujour le troisième"],
        correct:"il devient 2ème"
    },
    {
        question:"on me brise sans me toucher, on me cherche pour se concentrer. qui suis-je ?",
        answers:["le sommeil","le verre","la glace","le silence","la patience"],
        correct:"le silence"
    },
    {
        question:"plus je sèche, plus je devient mouillé. qui suis-je ?",
        answers:["l'éponge","la pluie","la serviette","le savon","le nuage"],
        correct:"la serviette"
    },
    {
        question:"plus je suis grand moins on me voit. qui suis-je ?",
        answers:["l'obscurité","la rivière","le soleil","l'air","la force"],
        correct:"l'obscurité"
    },
    {
        question:"je n'ai pas de vie, mais je meurs si on m'oublie. qui suis-je ?",
        answers:["un humain","la voix","le souvenir","la nuit","la pluie"],
        correct:"le souvenir"
    },
    {
        question:"je traverse une maison sans bougé. qui suis-je ?",
        answers:["le vent","la lumière","le chien","le bruit","aucune réponse n'est vrai !"],
        correct:"la lumière"
    },
    {
        question:"on m'appelle et je réponds, mais je n'ai ni bouche ni oreilles. qui suis-je ?",
        answers:["ombre","sonnerie","vent","silence","écho"],
        correct:"écho"
    },
    {
        question:"j'ai une aiguille mais je ne couds pas. qui suis-je ?",
        answers:["horloge","boussole","gramophone","thermomètre","balance"],
        correct:"boussole"
    },
    {
        question:"je n'ai pas des poumons, pourtant j'ai besoins d'air pour vivre. qui suis-je ?",
        answers:["feu","poisson","bactérie","nuage","champignon"],
        correct:"feu"
    },
    {
        question:"je traverse villes et champs sans jamais bouger. qui suis-je ?",
        answers:["train","route","nuage","ombre","éléctricité"],
        correct:"route"
    },
    {
        question:"je tombe chaque jour, mais jamais je ne me fait mal. qui suis-je ?",
        answers:["la pluie","le sable","feuille","température","la nuit"],
        correct:"la nuit"
    },
    {
        question:"selon vous qui a pu crée ce mini jeu ?",
        answers:["internet","un inconnue","mon frère","mawanda","moi"],
        correct:"mawanda"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreSection = document.getElementById("score-section");
const finalScoreEl = document.getElementById("final-score");

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("div");
        btn.textContent = answer;
        btn.classList.add("answer");
        btn.onclick = () => checkAnswer(answer);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        alert("✅ Bonne réponse !");
    } else {
        alert("❌ Mauvaise réponse !");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}
function endGame() {
    document.getElementById("game").classList.add("hidden");
    scoreSection.classList.remove("hidden");
    finalScoreEl.textContent = `${score} / ${questions.length}`;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
    scoreSection.classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    showQuestion();
}

function shareWhatsApp() {
    const text = `J'ai obtenu ${score}/${questions.length} au Jeu de Devinette 🎯 ! Essaie de battre mon score !`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareFacebook() {
    const url = "https://ton-site-de-jeu.com"; // Change par ton vrai lien
    const text = `J'ai obtenu ${score}/${questions.length} au Jeu de Devinette 🎯 !`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
}

showQuestion();