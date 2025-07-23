const questions = [
    {
        id: "bi1",
        type: "qcm",
        question: "1. Tu vois quelqu’un se faire humilier en public. Quelle est ta réaction instinctive ?",
        options: {
            a: "Je ris avec les autres pour ne pas être exclu",
            b: "Je regarde ailleurs, ce n'est pas mon affaire",
            c: "Je m'interpose ou je soutiens discrètement la personne", // Bonne réponse
            d: "Je filme pour le poster plus tard"
        },
        answer: "c",
        score: 10
    },
    {
        id: "bi2",
        type: "qcm",
        question: "2. Tu apprends qu’une rumeur circule sur quelqu’un que tu connais peu. Que fais-tu ?",
        options: {
            a: "Je la répète, c’est amusant",
            b: "Je ne dis rien, mais je l’écoute",
            c: "Je défends la personne ou cherche la vérité", // Bonne réponse
            d: "Je bloque cette personne sur les réseaux"
        },
        answer: "c",
        score: 10
    },
    {
        id: "bi3",
        type: "qcm",
        question: "3. On te confie un secret personnel. Que fais-tu ?",
        options: {
            a: "Je le raconte à mon/ma meilleur(e) ami(e), ça compte pas",
            b: "Je garde le secret, même si c’est tentant de le partager", // Bonne réponse
            c: "Je fais semblant d’avoir oublié",
            d: "Je le partage anonymement pour en parler"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi4",
        type: "qcm",
        question: "4. Tu réalises que tu as blessé quelqu’un sans le vouloir. Quelle est ta réaction ?",
        options: {
            a: "Je l’ignore, ce n’était pas volontaire",
            b: "Je m’excuse sincèrement et j’essaie de réparer", // Bonne réponse
            c: "Je dis qu’il/elle est trop sensible",
            d: "Je me justifie en montrant que j’avais raison"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi5",
        type: "qcm",
        question: "5. Une personne marginalisée te demande de l’aide. Que fais-tu ?",
        options: {
            a: "Je l’aide si ça ne me dérange pas trop",
            b: "Je fais semblant de ne pas l’avoir vue",
            c: "Je l’aide naturellement, sans réfléchir", // Bonne réponse
            d: "Je la renvoie à quelqu’un d’autre"
        },
        answer: "c",
        score: 10
    },
    {
        id: "bi6",
        type: "qcm",
        question: "6. Quel est ton premier réflexe lorsque tu es confronté(e) à un désaccord ?",
        options: {
            a: "Je m'énerve et j'essaie d'imposer mon point de vue",
            b: "J'écoute attentivement l'autre personne pour comprendre sa perspective", // Bonne réponse
            c: "Je coupe court à la discussion pour éviter le conflit",
            d: "Je cherche des alliés pour me soutenir"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi7",
        type: "qcm",
        question: "7. Tu as du temps libre. Comment préfères-tu l'utiliser ?",
        options: {
            a: "À me concentrer sur mes propres passe-temps et intérêts",
            b: "À passer du temps avec mes proches et renforcer mes liens", // Bonne réponse
            c: "À chercher de nouvelles activités pour me distraire",
            d: "À me reposer et ne rien faire"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi8",
        type: "qcm",
        question: "8. Une personne de ton entourage partage une réussite. Quelle est ta réaction ?",
        options: {
            a: "Je ressens de l'envie et je compare ma situation à la sienne",
            b: "Je la félicite sincèrement et je me réjouis pour elle", // Bonne réponse
            c: "Je me dis que c'est de la chance et je minimise sa réussite",
            d: "Je change de sujet rapidement"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi9",
        type: "qcm",
        question: "9. On te propose une opportunité qui pourrait te profiter, mais qui nuirait à quelqu'un d'autre. Que fais-tu ?",
        options: {
            a: "J'accepte l'opportunité, mes intérêts passent avant tout",
            b: "Je refuse l'opportunité si elle doit nuire à autrui", // Bonne réponse
            c: "Je cherche un moyen de profiter de l'opportunité sans que l'autre le sache",
            d: "J'hésite et je demande l'avis de mes amis"
        },
        answer: "b",
        score: 10
    },
    {
        id: "bi10",
        type: "qcm",
        question: "10. Comment réagis-tu face à la critique, qu'elle soit constructive ou non ?",
        options: {
            a: "Je me vexe et je me défends immédiatement",
            b: "J'écoute la critique et j'essaie d'en tirer des leçons pour m'améliorer", // Bonne réponse
            c: "Je l'ignore, je sais ce que je vaux",
            d: "Je cherche à savoir qui m'a critiqué pour me venger"
        },
        answer: "b",
        score: 10
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
