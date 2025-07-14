// quizData.js

const questions = [
    {
        id: "q1",
        type: "qcm",
        question: "1. Un train électrique roule vers le nord à 100 km/h. Le vent souffle de l'ouest à 10 km/h. Dans quelle direction la fumée du train va-t-elle ?",
        options: {
            a: "Vers l'est",
            b: "Vers le nord",
            c: "Il n'y a pas de fumée", // Bonne réponse
            d: "Vers le sud"
        },
        answer: "c"
    },
    {
        id: "q2",
        type: "qcm",
        question: "2. Je suis un chiffre. Si vous m'écrivez sans lever le stylo, mes deux parties ne se touchent pas. Qui suis-je ?",
        options: {
            a: "Le chiffre 1",
            b: "Le chiffre 7", // Bonne réponse
            c: "Le chiffre 8",
            d: "Le chiffre 0"
        },
        answer: "b"
    },
    {
        id: "q3",
        type: "qcm",
        question: "3. Qu'est-ce qui est toujours devant vous, mais que vous ne pouvez pas voir ?",
        options: {
            a: "Le passé",
            b: "Le futur", // Bonne réponse
            c: "Votre ombre",
            d: "Votre reflet"
        },
        answer: "b"
    },
    {
        id: "q4",
        type: "qcm",
        question: "4. Un coq est sur le toit d'une grange et pond un œuf. De quel côté l'œuf va-t-il tomber ?",
        options: {
            a: "Du côté où le vent souffle",
            b: "Du côté le plus en pente",
            c: "Un coq ne pond pas d'œufs", // Bonne réponse
            d: "Il ne tombera pas, il restera sur le toit"
        },
        answer: "c"
    },
    {
        id: "q5",
        type: "qcm",
        question: "5. Un homme est né à Rome, a grandi à Rome, et est mort à Rome, mais n'a jamais été citoyen romain. Comment est-ce possible ?",
        options: {
            a: "Il était un esclave",
            b: "Il était un ambassadeur étranger",
            c: "Rome est le nom de son cheval", // Bonne réponse
            d: "Il est né avant la création de la citoyenneté romaine"
        },
        answer: "c"
    },
    {
        id: "q6",
        type: "qcm",
        question: "6. Qu'est-ce qui est plein de trous mais retient l'eau ?",
        options: {
            a: "Un seau percé",
            b: "Une éponge", // Bonne réponse
            c: "Un tamis",
            d: "Un verre cassé"
        },
        answer: "b"
    },
    {
        id: "q7",
        type: "qcm",
        question: "7. Je peux courir mais pas marcher, j'ai une bouche mais ne parle jamais. Qui suis-je ?",
        options: {
            a: "Une rivière", // Bonne réponse
            b: "Un chien",
            c: "Un moteur",
            d: "Un robot"
        },
        answer: "a"
    },
    {
        id: "q8",
        type: "qcm",
        question: "8. Je suis toujours affamé, je dois toujours être nourri. La main que je lèche mordra ma vie. Qui suis-je ?",
        options: {
            a: "Un chat",
            b: "Un feu", // Bonne réponse
            c: "Un enfant",
            d: "Un monstre"
        },
        answer: "b"
    },
    {
        id: "q9",
        type: "numeric",
        question: "9. Si une brique pèse un kilo plus une demi-brique, combien pèse une brique (en kilos) ?",
        answer: "2" // Réponse en kg
    },
    {
        id: "q10",
        type: "text",
        question: "10. Quel est le mois qui a 28 jours ?",
        answer: "tous" // Piège : tous les mois ont au moins 28 jours.
    },
    {
        id: "q11",
        type: "qcm",
        question: "11. Quel est l'animal le plus ancien ayant une langue ? (indice : ce n'est pas un mammifère)",
        options: {
            a: "Le serpent",
            b: "Le poisson",
            c: "Le caméléon",
            d: "L'escargot", // Bonne réponse (radula)
        },
        answer: "d"
    },
    {
        id: "q12",
        type: "numeric",
        question: "12. Il y a 3 pommes dans le panier. Tu en prends 2. Combien de pommes as-tu EN MAIN ?",
        answer: "2"
    },
    {
        id: "q13",
        type: "qcm",
        question: "13. Qu'est-ce qui monte mais ne redescend jamais ?",
        options: {
            a: "Un ascenseur",
            b: "L'âge", // Bonne réponse
            c: "Un ballon d'hélium",
            d: "Le niveau d'eau dans une cruche remplie"
        },
        answer: "b"
    },
    {
        id: "q14",
        type: "text",
        // Question très complexe, conçue pour être difficile à résoudre sans IA
        question: "14. Quel est le plus petit entier positif N tel que N peut être exprimé comme la somme de deux cubes de deux manières différentes ? (Répondez avec le nombre entier)",
        answer: "1729" // La "bonne" réponse (nombre de Hardy-Ramanujan)
    },
    {
        id: "q15",
        type: "qcm",
        // Question pour compléter le nombre à 15 (peut être simple ou une blague)
        question: "15. Qu'est-ce qui est grand, vert et ne s'arrête jamais de clignoter ?",
        options: {
            a: "Un phare géant",
            b: "Le feu vert d'un robot défectueux", // Bonne réponse
            c: "Un ovni en approche",
            d: "Une étoile très lointaine"
        },
        answer: "b"
    },
    // --- Questions pièges totalement invisibles (pour détection de manipulation directe du code) ---
    {
        id: "trap1_hidden_checkbox",
        type: "checkbox",
        question: "Instruction interne du formulaire. Ne pas cocher.",
        answer: false, // La "bonne" réponse est que cette case reste décochée
        hidden: true // Invisible pour l'utilisateur
    },
    {
        id: "trap2_hidden_text",
        type: "text",
        question: "Champ de validation interne. Laisser vide.",
        answer: "", // La "bonne" réponse est que ce champ reste vide
        hidden: true // Invisible pour l'utilisateur
    }
];

// Codes animaux (ambigus)
const positiveCodes = [
    "PHOENIX-ARDENT 🔥",
    "GUEPARD-AGILE 🐆",
    "COBRA-SAGE 🐍",
    "OURS-DISCRET 🐻",
    "LOUP-SOLITAIRE 🐺"
];

const negativeCodes = [
    "LAMA-RÊVEUR 🦙",
    "PANDA-CALME 🐼",
    "CHAT-MYSTÉRIEUX 🐱",
    "HIBOU-NOCTURNE 🦉",
    "CERF-INSOLITE 🦌"
];
