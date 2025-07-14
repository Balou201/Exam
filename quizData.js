// quizData.js

const questions = [
    {
        id: "q1",
        type: "qcm",
        question: "1. Un train électrique roule vers le nord. Le vent souffle de l'ouest. Dans quelle direction la fumée du train va-t-elle ?",
        options: {
            a: "Vers l'est",
            b: "Vers le nord",
            c: "Il n'y a pas de fumée",
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
            b: "Le chiffre 7",
            c: "Le chiffre 8",
            d: "Le chiffre 0"
        },
        answer: "b"
    },
    {
        id: "q3",
        type: "qcm",
        question: "3. Je suis toujours devant vous, mais vous ne pouvez jamais me rattraper. Qui suis-je ?",
        options: {
            a: "Le passé",
            b: "Le futur",
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
            c: "Un coq ne pond pas d'œufs",
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
            c: "Rome est le nom de son cheval",
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
            b: "Une éponge",
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
            a: "Une rivière",
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
            b: "Un feu",
            c: "Un enfant",
            d: "Un monstre"
        },
        answer: "b"
    },
    {
        id: "q9",
        type: "numeric",
        question: "9. Si une brique pèse un kilo plus une demi-brique, combien pèse une brique ?",
        answer: "2" // Réponse en kg
    },
    {
        id: "q10",
        type: "text",
        question: "10. Quel est le fleuve le plus long du monde ?",
        answer: "nil" // Réponse attendue "Nil" (case insensitive)
    },
    {
        id: "q11",
        type: "qcm",
        question: "11. Quel animal dort le plus au monde ?",
        options: {
            a: "Le paresseux",
            b: "Le koala",
            c: "Le chat",
            d: "La chauve-souris"
        },
        answer: "b"
    },
    {
        id: "q12",
        type: "numeric",
        question: "12. Il y a 3 pommes dans le panier. Tu en prends 2. Combien de pommes as-tu ?",
        answer: "2"
    },
    {
        id: "q13",
        type: "qcm",
        question: "13. Qu'est-ce qui monte mais ne redescend jamais ?",
        options: {
            a: "L'âge",
            b: "Une fusée",
            c: "Le niveau d'eau",
            d: "Un ballon d'hélium"
        },
        answer: "a"
    },
    {
        // Question piège invisible (checkbox)
        id: "trap1",
        type: "checkbox",
        question: "Ceci est une question piège invisible. Ne la cochez pas !",
        answer: false, // La bonne "réponse" est de ne pas la cocher
        hidden: true // Marque la question comme invisible
    },
    {
        // Question piège invisible (texte)
        id: "trap2",
        type: "text",
        question: "Ceci est une deuxième question piège invisible. Ne la remplissez pas !",
        answer: "", // La bonne "réponse" est de ne rien écrire
        hidden: true // Marque la question comme invisible
    }
];

// quizData.js (partie des codes animaux)

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
