// Shuffle array utility function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Full question set for basic questions
const allQuestions = [
    { question: "What is the first step in assessing a casualty at an incident?", answers: ["Start CPR", "Check the casualty's pulse", "Ensure the area is safe", "Call emergency services"], correct: 2 },
    { question: "Which of the following is a sign of a severe allergic reaction (anaphylactic shock)?", answers: ["Sneezing", "Rash on the arm", "Swollen lips and breathing difficulty", "Mild itching"], correct: 2 },
    { question: "Which item is NOT typically included in a basic first aid kit?", answers: ["Adhesive tape", "Stethoscope", "Gauze pads", "Alcohol-free wipes"], correct: 1 },
    { question: "What should you do if a person is unresponsive but breathing normally?", answers: ["Place them in the recovery position", "Perform chest compressions", "Give rescue breaths", "Shake them gently to wake them up"], correct: 0 },
    { question: "How should you treat a burn injury?", answers: ["Apply ice directly on the burn", "Cool the burn with running water", "Cover with an adhesive bandage", "Rub oil on the burn"], correct: 1 },
    { question: "What is the primary purpose of a triangular bandage in first aid?", answers: ["To clean wounds", "To support injured limbs", "To check pulse", "To wrap around the head"], correct: 1 },
    { question: "Which action should be taken if someone is choking but still able to cough?", answers: ["Give back blows immediately", "Encourage them to keep coughing", "Perform abdominal thrusts", "Start CPR"], correct: 1 },
    { question: "What should you do first if you suspect someone has a broken bone?", answers: ["Move the injured limb", "Immobilize the area", "Massage the injury", "Apply heat"], correct: 1 },
    { question: "Which item is most suitable for cleaning a wound before applying a dressing?", answers: ["Alcohol-free wipes", "Soap", "Saltwater", "Detergent"], correct: 0 },
    { question: "When should you call for emergency help if a person is unresponsive?", answers: ["After checking for breathing and pulse", "After trying to wake them up", "Immediately without checking anything", "Only if there is bleeding"], correct: 0 },
    { question: "Which of the following symptoms indicates heat exhaustion?", answers: ["Dry skin", "Heavy sweating", "Slow heartbeat", "Shivering"], correct: 1 },
    { question: "What should you use to cover a bleeding wound?", answers: ["A plastic bag", "A sterile dressing", "An adhesive tape directly on the wound", "A piece of cloth"], correct: 1 },
    { question: "How should you treat a chemical burn to the eye?", answers: ["Rub the eye to relieve irritation", "Rinse the eye continuously with clean water", "Cover the eye with a bandage", "Apply an ointment"], correct: 1 },
    { question: "Which of the following is a sign of shock?", answers: ["High fever", "Rapid, weak pulse", "Blurred vision", "Nosebleed"], correct: 1 },
    { question: "What is the first thing you should do when treating an unconscious person?", answers: ["Check their wallet", "Shout for help", "Assess their breathing and pulse", "Move them to another location"], correct: 2 },
    { question: "What should you do if someone has a nosebleed?", answers: ["Tilt their head back", "Pinch the nostrils and lean forward", "Lie them down flat", "Apply a warm cloth to the nose"], correct: 1 },
    { question: "When treating a sprained ankle, which method should you use?", answers: ["Heat therapy", "RICE (Rest, Ice, Compress, Elevate)", "Continuous movement", "Bandage tightly and continue to walk"], correct: 1 },
    { question: "What should you do if someone has a minor burn?", answers: ["Apply butter or oil", "Hold the burn under cold running water", "Cover with a warm cloth", "Rub ice directly on the burn"], correct: 1 },
    { question: "What is the recommended rate of chest compressions for CPR on an adult?", answers: ["60 compressions per minute", "80 compressions per minute", "100-120 compressions per minute", "140 compressions per minute"], correct: 2 },
    { question: "How do you recognize a choking infant?", answers: ["Crying loudly", "Unable to cough or make noise", "Breathing heavily", "Laughing continuously"], correct: 1 },
    { question: "What is the first priority when giving first aid?", answers: ["Protect yourself", "Start CPR immediately", "Give the casualty food", "Move the injured person"], correct: 0 },
    { question: "How many chest compressions should you perform per minute during CPR?", answers: ["50-70", "80-90", "100-120", "130-150"], correct: 2 },
    { question: "What is the recommended method for treating a nosebleed?", answers: ["Tilt the head back", "Pinch the nose and lean forward", "Blow the nose hard", "Apply ice to the forehead"], correct: 1 },
    { question: "How should you treat a minor burn?", answers: ["Apply butter or oil", "Hold the burn under cool running water", "Cover the burn with a thick cloth", "Rub the burn with salt"], correct: 1 },
    { question: "What should you do if someone is choking but still able to cough?", answers: ["Perform abdominal thrusts", "Encourage them to keep coughing", "Give them a glass of water", "Hit them on the back immediately"], correct: 1 },
    { question: "What does the 'D' in DRSABC stand for in first aid?", answers: ["Danger", "Diagnosis", "Defibrillation", "Direct pressure"], correct: 0 },
    { question: "Which of the following is NOT a symptom of shock?", answers: ["Rapid pulse", "Warm, dry skin", "Pale, cold skin", "Rapid, shallow breathing"], correct: 1 },
    { question: "How should you treat a sprained ankle?", answers: ["Apply heat immediately", "RICE method: Rest, Ice, Compression, Elevation", "Keep walking on it", "Massage the affected area"], correct: 1 },
    { question: "What is the correct way to help someone having an asthma attack?", answers: ["Lay them flat on their back", "Sit them upright and give them their inhaler", "Give them a drink of water", "Cover their mouth with a cloth"], correct: 1 },
    { question: "What type of bleeding is characterized by bright red blood that spurts out?", answers: ["Venous bleeding", "Capillary bleeding", "Arterial bleeding", "Internal bleeding"], correct: 2 },
    { question: "Which type of wound involves a rough and uneven edge caused by a blunt object?", answers: ["Incised wound", "Laceration wound", "Abrasion wound", "Puncture wound"], correct: 1 },
    { question: "What should you do for someone with suspected hypothermia?", answers: ["Rub their skin to generate heat", "Provide them with a hot drink immediately", "Warm them gradually and wrap them in blankets", "Submerge them in warm water"], correct: 2 },
    { question: "How should you treat a suspected fracture?", answers: ["Move the limb to check mobility", "Immobilize the area and call for help", "Apply direct pressure on the bone", "Give the person painkillers"], correct: 1 },
    { question: "What is the most effective way to treat a sting from a sea creature?", answers: ["Apply vinegar to the area", "Rub with alcohol", "Use ice to reduce swelling", "Cover with a thick bandage"], correct: 0 },
    { question: "What should you do first if you suspect someone has a spinal injury?", answers: ["Move them to a comfortable position", "Keep their head and neck still", "Sit them up immediately", "Give them a drink of water"], correct: 1 }
];

// KBAT questions as previously defined
const kbatQuestions = [
    { question: "In a situation where multiple casualties are present, what is the most effective way to manage the scene as a first aider?", answers: ["Provide first aid to the person nearest to you", "Prioritize the most severely injured", "Wait for emergency services to arrive", "Start CPR on the first person you see"], correct: 1 },
    { question: "What should a first aider do if a casualty has a suspected spinal injury but needs to be moved to a safe location immediately?", answers: ["Move them quickly to minimize danger", "Use a team and keep the head and spine aligned", "Drag them by their legs to safety", "Sit them up first, then lift"], correct: 1 },
    { question: "Why is it important to remain calm and in control when giving first aid?", answers: ["To avoid alarming bystanders", "To think clearly and perform procedures correctly", "To impress others with your skills", "To slow down the casualty's pulse rate"], correct: 1 },
    { question: "What is the rationale for avoiding the use of adhesive dressings on a burn?", answers: ["They stick to the wound, causing more damage", "They do not absorb fluid", "They are expensive", "They are only for minor cuts"], correct: 0 },
    { question: "In what scenario would a first aider need to perform chest compressions only (without rescue breaths)?", answers: ["If they are untrained or uncomfortable giving rescue breaths", "If the casualty has a pulse but is unconscious", "If the casualty is still breathing", "When waiting for help in a public area"], correct: 0 },
    { question: "You encounter a person with a deep wound to their arm that is bleeding profusely. After applying direct pressure, the bleeding continues. What should you do next?", answers: ["Apply a tourniquet above the wound", "Elevate the arm and wait for help", "Place ice on the wound", "Wrap the wound with a warm cloth"], correct: 0 },
    { question: "During an incident involving multiple injuries, you identify a person who is unresponsive and not breathing. What is the priority action you should take?", answers: ["Check their pulse", "Begin CPR immediately", "Move on to the next injured person", "Look for medical information on them"], correct: 1 },
    { question: "A person in your care begins to show symptoms of hypoglycemia (low blood sugar). What is the best immediate action to take?", answers: ["Give them sugary food or drink if conscious", "Force them to lie down", "Withhold any food until medical help arrives", "Give them water only"], correct: 0 },
    { question: "What should you do if a person is suspected of having a spinal injury after a fall?", answers: ["Move them to a sitting position", "Keep their head and neck still", "Encourage them to stand up slowly", "Massage their back gently"], correct: 1 },
    { question: "During a chemical burn, what is the most important action to take if you do not know the specific chemical involved?", answers: ["Wash the area with water immediately", "Apply a burn cream", "Neutralize with vinegar or baking soda", "Cover with a clean bandage"], correct: 0 },
    { question: "A person collapses and is unresponsive but breathing. What should you do next?", answers: ["Begin CPR immediately", "Place them in the recovery position", "Give them something to drink", "Leave them until help arrives"], correct: 1 },
    { question: "You come across a person with a deep wound that is bleeding heavily. What is the most critical first step?", answers: ["Apply a tourniquet immediately", "Apply direct pressure to the wound", "Wash the wound with antiseptic", "Give the person pain medication"], correct: 1 },
    { question: "During a seizure, what is the most important thing you should avoid doing?", answers: ["Clear the area of dangerous objects", "Hold the person down", "Place something soft under their head", "Time the duration of the seizure"], correct: 1 },
    { question: "What is the best way to handle a suspected heart attack while waiting for medical help to arrive?", answers: ["Give the person a sugary drink", "Have them lay flat on their back", "Help them to a comfortable sitting position", "Leave them alone until help arrives"], correct: 2 },
    { question: "How should you respond if someone is experiencing a severe allergic reaction and has already used their EpiPen?", answers: ["Give them a glass of water", "Call emergency services immediately", "Wait for the reaction to subside on its own", "Lay them down flat"], correct: 1 },
];

// Select 15 random basic questions and 5 random KBAT questions
let selectedBasicQuestions = shuffleArray(allQuestions).slice(0, 15);
let selectedKbatQuestions = shuffleArray(kbatQuestions).slice(0, 5);

// Combine the two sets of questions and shuffle them
let selectedQuestions = shuffleArray(selectedBasicQuestions.concat(selectedKbatQuestions));
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score-container");
const questionNumberElement = document.getElementById("question-number");
const resetButton = document.querySelector('.reset-btn');
const progressBar = document.getElementById('progress');
const progressPercentage = document.getElementById('progress-percentage');

// Display the current question
function showQuestion(question) {
    questionElement.textContent = question.question;
    answersElement.innerHTML = ''; // Clear previous answers

    // Generate buttons dynamically with fixed answer options
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(question, index);
        answersElement.appendChild(button);
    });

    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
}

// Check the user's answer
function checkAnswer(question, selectedAnswer) {
    const correctAnswer = question.correct;

    const buttons = answersElement.querySelectorAll('.option-btn');
    buttons.forEach((button, index) => {
        button.disabled = true; // Disable buttons once an answer is selected
        if (index === correctAnswer) {
            button.classList.add('correct'); // Highlight correct answer
        } else if (index === selectedAnswer) {
            button.classList.add('wrong'); // Highlight wrong answer if selected
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        showEmojiAnimation('👍'); // Show thumbs up for correct answer
    } else {
        showEmojiAnimation('👎'); // Show thumbs down for incorrect answer
        vibrate(); // Vibrate on wrong answer
    }
    scoreElement.innerText = `Score: ${score}`;
}

// Function to move to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(selectedQuestions[currentQuestionIndex]);
    }
    updateProgressBar();
}

// Update the progress bar function
function updateProgressBar() {
    let progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = progress + '%';
    progressPercentage.textContent = Math.round(progress);
}

// Show the first question and set up the event listeners
showQuestion(selectedQuestions[currentQuestionIndex]);

// Next question button functionality
nextButton.onclick = () => {
    nextQuestion();
};

// Back button functionality
const prevButton = document.getElementById("back-btn");
prevButton.onclick = () => {
    prevQuestion();
};

// Reset button functionality
resetButton.addEventListener('click', function() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = "Score: 0";
    nextButton.disabled = false;
    resetButton.style.display = 'none'; // Hide reset button
    selectedBasicQuestions = shuffleArray(allQuestions).slice(0, 15); // Shuffle and select 15 questions
    selectedKbatQuestions = shuffleArray(kbatQuestions).slice(0, 5); // Shuffle and select 5 KBAT questions
    selectedQuestions = shuffleArray(selectedBasicQuestions.concat(selectedKbatQuestions)); // Combine and shuffle
    showQuestion(selectedQuestions[currentQuestionIndex]);
});

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        questionElement.innerText = "Quiz Complete! Final Score: " + score;
        nextButton.disabled = true;
        resetButton.style.display = 'block'; // Show reset button when quiz is over
    }

    updateProgressBar(); // Update the progress bar after moving to the next question
}

// Emoji animation function
function showEmojiAnimation(emoji) {
    const emojiContainer = document.createElement('div');
    emojiContainer.innerHTML = emoji;
    emojiContainer.style.position = 'absolute';
    emojiContainer.style.fontSize = '50px';
    emojiContainer.style.top = '50%';
    emojiContainer.style.left = '50%';
    emojiContainer.style.transform = 'translate(-50%, -50%)';
    emojiContainer.style.opacity = 1;

    document.body.appendChild(emojiContainer);

    setTimeout(() => {
        emojiContainer.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(emojiContainer);
        }, 1000);
    }, 2000);
}

// Vibrate on wrong answer
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

// Start the quiz by showing the first question
showQuestion(selectedQuestions[currentQuestionIndex]);

// Function to prompt the user for their username
function promptForUsername() {
    // Create a modal for username entry
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Enter your username</h2>
            <input type="text" id="username-input" placeholder="Username" required />
            <button id="submit-username">Submit</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Add event listener for submit button
    document.getElementById('submit-username').onclick = function() {
        const usernameInput = document.getElementById('username-input').value;
        if (usernameInput) {
            saveScore(usernameInput); // Call function to save score
            document.body.removeChild(modal); // Remove modal
        } else {
            alert("Please enter a username!"); // Alert if username is empty
        }
    };
}

// Function to save the user's score in localStorage
function saveScore(username) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const newEntry = { username, score };
    
    leaderboard.push(newEntry);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    alert("Score saved!"); // Optionally alert the user
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        questionElement.innerText = "Quiz Complete! Final Score: " + score;
        nextButton.disabled = true;
        resetButton.style.display = 'block'; // Show reset button when quiz is over
        promptForUsername(); // Prompt for username after completing the quiz
    }

    updateProgressBar(); // Update the progress bar after moving to the next question
}
