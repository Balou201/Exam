document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    const restartButton = document.getElementById('restart-quiz');
    const resultContainer = document.getElementById('result-container');
    const animalResult = document.getElementById('animal-result');

    let currentScore = 0;
    let userAnswers = {}; // Pour stocker les réponses de l'utilisateur

    // Assurez-vous que questions, positiveCodes et negativeCodes sont définis dans quizData.js
    // et accessibles globalement ou importés. Pour ce setup simple, on les suppose globaux.

    function displayQuestions() {
        quizContainer.innerHTML = ''; // Nettoie le conteneur des questions
        questions.forEach(q => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `<p>${q.question}</p>`;

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            // Pour les questions QCM
            if (q.type === 'qcm') {
                for (const key in q.options) {
                    const label = document.createElement('label');
                    label.innerHTML = `<input type="radio" name="${q.id}" value="${key}"> ${q.options[key]}`;
                    optionsDiv.appendChild(label);
                }
            }
            // Ajoutez d'autres types de questions si nécessaire (numeric, text, checkbox)
            // Pour ce quiz, nous nous concentrons sur le QCM pour la beauté intérieure.

            questionCard.appendChild(optionsDiv);
            quizContainer.appendChild(questionCard);
        });

        submitButton.style.display = 'block'; // Affiche le bouton de soumission
        restartButton.style.display = 'none'; // Cache le bouton de redémarrage au début
        resultContainer.style.display = 'none'; // Cache les résultats
        animalResult.textContent = ''; // Réinitialise le texte de l'animal
    }

    function calculateScore() {
        currentScore = 0;
        let allAnswered = true; // Pour vérifier si toutes les questions ont été répondues

        questions.forEach(q => {
            const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`);
            if (selectedOption) {
                userAnswers[q.id] = selectedOption.value; // Stocke la réponse de l'utilisateur
                if (q.type === 'qcm' && selectedOption.value === q.answer) {
                    currentScore += q.score;
                }
                // Gérez d'autres types de questions si elles ont été ajoutées et ont un score
            } else {
                allAnswered = false; // Une question n'a pas été répondue
            }
        });

        return allAnswered;
    }

    function getAnimalCode(score) {
        // Le score total maximum est de 10 questions * 10 points/question = 100 points.
        // Ajuste les seuils pour répartir équitablement les codes.
        if (score >= 90) { // Excellent
            return positiveCodes[0]; // PHOENIX-ARDENT
        } else if (score >= 70) { // Très bon
            return positiveCodes[1]; // GUEPARD-AGILE
        } else if (score >= 50) { // Bon
            return positiveCodes[2]; // COBRA-SAGE
        } else if (score >= 30) { // Moyen
            return negativeCodes[0]; // LAMA-RÊVEUR
        } else { // À travailler
            return negativeCodes[1]; // PANDA-CALME
        }
    }

    function showResult() {
        const allAnswered = calculateScore();

        if (!allAnswered) {
            alert("Veuillez répondre à toutes les questions avant de soumettre.");
            return;
        }

        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultContainer.style.display = 'block';
        restartButton.style.display = 'block';

        const finalAnimal = getAnimalCode(currentScore);
        animalResult.textContent = finalAnimal;
        animalResult.className = ''; // Réinitialise les classes
        animalResult.classList.add(finalAnimal.split(' ')[0]); // Ajoute la classe pour le style spécifique
    }

    submitButton.addEventListener('click', showResult);
    restartButton.addEventListener('click', () => {
        // Réinitialise l'état du quiz
        currentScore = 0;
        userAnswers = {};
        quizContainer.style.display = 'block';
        displayQuestions(); // Réaffiche les questions
    });

    // Initialise le quiz au chargement de la page
    displayQuestions();
});
