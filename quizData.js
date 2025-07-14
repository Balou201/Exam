// quizData.js

const questions = [
    {
        question: "1. Un train électrique roule vers le nord. Le vent souffle de l'ouest. Dans quelle direction la fumée du train va-t-elle ?",
        options: {
            a: "Vers l'est",
            b: "Vers le nord",
            c: "Il n'y a pas de fumée", // Bonne réponse
            d: "Vers le sud"
        },
        answer: "c"
    },
    {
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
        question: "3. Je suis toujours devant vous, mais vous ne pouvez jamais me rattraper. Qui suis-je ?",
        options: {
            a: "Le passé",
            b: "Le futur", // Bonne réponse
            c: "Votre ombre",
            d: "Votre reflet"
        },
        answer: "b"
    },
    {
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
        question: "6. Je n'ai ni corps, ni âme, ni esprit, mais je peux vous dire ce que vous voulez savoir. Qui suis-je ?",
        options: {
            a: "Une boule de cristal",
            b: "Un livre", // Bonne réponse
            c: "Un robot",
            d: "Une application"
        },
        answer: "b"
    },
    {
        question: "7. Qu'est-ce qui est plein de trous mais retient l'eau ?",
        options: {
            a: "Un seau percé",
            b: "Une éponge", // Bonne réponse
            c: "Un tamis",
            d: "Un verre cassé"
        },
        answer: "b"
    },
    {
        question: "8. Je peux courir mais pas marcher, j'ai une bouche mais ne parle jamais. Qui suis-je ?",
        options: {
            a: "Une rivière", // Bonne réponse
            b: "Un chien",
            c: "Un moteur",
            d: "Un robot"
        },
        answer: "a"
    },
    {
        question: "9. Si vous enlevez le mot 'tout', il reste 'quelque chose'. Si vous enlevez le mot 'quelque chose', le mot 'tout' reste. De quel mot parle-t-on ?",
        options: {
            a: "Le mot 'tout'",
            b: "Le mot 'quelque chose'",
            c: "Le mot 'rien'", // Bonne réponse
            d: "Un mystère"
        },
        answer: "c"
    },
    {
        question: "10. Je suis toujours affamé, je dois toujours être nourri. La main que je lèche mordra ma vie. Qui suis-je ?",
        options: {
            a: "Un chat",
            b: "Un feu", // Bonne réponse
            c: "Un enfant",
            d: "Un monstre"
        },
        answer: "b"
    }
];

const positiveCodes = [
    "CHOUETTE-FUTÉ 🦉",
    "RENARD-MALIN 🦊",
    "SINGE-SAVANT 🐒",
    "PIE-INTELLIGENTE 🐦",
    "DAUPHIN-SUPÉRIEUR 🐬"
];

const negativeCodes = [
    "ESCARGOT-CONFUS 🐌",
    "POULE-PERDUE 🐔",
    "POISSON-SANS-MÉMOIRE 🐠",
    "LIMACE-DANS-LE-BROUILLARD 🐛",
    "KOALA-ENDORMI 🐨"
];
