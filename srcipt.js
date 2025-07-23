document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    const restartButton = document.getElementById('restart-quiz');
    const resultContainer = document.getElementById('result-container');
    const animalResult = document.getElementById('animal-result');

    let currentScore = 0;
    let userAnswers = {}; // To store user's selected answers

    // Ensure questions, positiveCodes, and negativeCodes are defined in quizData.js
    // and are accessible (make sure quizData.js is loaded BEFORE script.js in index.html)

    function displayQuestions() {
        quizContainer.innerHTML = ''; // Clear previous questions
        questions.forEach(q => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('question-card');
            questionCard.innerHTML = `<p>${q.question}</p>`;

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            // Handle QCM type questions
            if (q.type === 'qcm') {
                for (const key in q.options) {
                    const label = document.createElement('label');
                    // Check if there's a stored answer for this question and pre-select it
                    const isChecked = userAnswers[q.id] === key ? 'checked' : '';
                    label.innerHTML = `<input type="radio" name="${q.id}" value="${key}" ${isChecked}> ${q.options[key]}`;
                    optionsDiv.appendChild(label);
                }
            }
            // Add other question types (numeric, text, checkbox) if they were part of quizData.js
            // For this "Beauté intérieure" quiz, we are focusing on QCM.

            questionCard.appendChild(optionsDiv);
            quizContainer.appendChild(questionCard);
        });

        submitButton.style.display = 'block'; // Show the submit button
        restartButton.style.display = 'none'; // Hide restart button initially
        resultContainer.style.display = 'none'; // Hide results container
        animalResult.textContent = ''; // Clear animal result text
    }

    function calculateScore() {
        currentScore = 0;
        let allAnswered = true; // Flag to check if all questions are answered

        questions.forEach(q => {
            const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`);
            if (selectedOption) {
                userAnswers[q.id] = selectedOption.value; // Store the user's answer
                if (q.type === 'qcm' && selectedOption.value === q.answer) {
                    currentScore += q.score;
                }
                // Handle scores for other question types if added
            } else {
                allAnswered = false; // A question was not answered
            }
        });
        return allAnswered;
    }

    // This function is based on the logic you provided in the previous turn for animal codes
    function getAnimalCode(score) {
        // Max score is 10 questions * 10 points/question = 100 points.
        // Adjust thresholds to distribute codes evenly.
        if (score >= 90) { // Excellent
            return positiveCodes[0]; // PHOENIX-ARDENT
        } else if (score >= 70) { // Very good
            return positiveCodes[1]; // GUEPARD-AGILE
        } else if (score >= 50) { // Good
            return positiveCodes[2]; // COBRA-SAGE
        } else if (score >= 30) { // Average
            return negativeCodes[0]; // LAMA-RÊVEUR
        } else { // Needs improvement
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
        animalResult.className = ''; // Reset existing classes
        // Add a class based on the animal name (first word) for specific styling
        animalResult.classList.add(finalAnimal.split(' ')[0]);
    }

    submitButton.addEventListener('click', showResult);
    restartButton.addEventListener('click', () => {
        // Reset quiz state
        currentScore = 0;
        userAnswers = {}; // Clear stored answers
        quizContainer.style.display = 'block';
        displayQuestions(); // Redisplay questions
    });

    // Initialize the quiz when the page loads
    displayQuestions();
});
