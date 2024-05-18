document.addEventListener('DOMContentLoaded', function () {
    // Gerekli DOM öğelerini seçiyoruz
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const questionElement = questionContainer.querySelector('.question');
    const optionsElement = questionContainer.querySelector('.options');
    const nextButton = document.getElementById('next-btn');
    const resultsElement = document.getElementById('results');

    // Soruları ve kullanıcı cevaplarını tutacak değişkenler
    let currentQuestionIndex = 0;
    let questions = [];
    let userAnswers = [];
    let timer;

    // JSONPlaceholder API'sinden soruları çekiyoruz
    async function fetchQuestions() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // İlk 10 soruyu alıp, seçenekleri oluşturuyoruz
        questions = data.slice(0, 10).map((item, index) => ({
            id: item.id,
            title: item.title,
            body: item.body,
            options: generateOptions(item.body, index)
        }));
        // İlk soruyu gösteriyoruz
        showQuestion();
    }

    // Seçenekleri oluşturan fonksiyon
    function generateOptions(body, index) {
        // Sorunun içeriğinden 4 kelimeyi seçenek olarak alıyoruz
        const words = body.split(' ').slice(0, 4); // İlk 4 kelimeyi al
        return words.map((word, i) => ({
            text: `${String.fromCharCode(65 + i)}: ${word}`,
            correct: i === 0 // Demo için ilk seçeneği doğru olarak belirliyoruz
        }));
    }

    // Soruyu gösteren fonksiyon
    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.title;
        optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.classList.add('btn');
            button.classList.add('btn-outline-primary');
            button.textContent = option.text;
            button.disabled = true;
            button.classList.add('disabled');
            button.addEventListener('click', () => selectAnswer(index));
            optionsElement.appendChild(button);
        });
        quizContainer.style.display = 'flex';
        // 10 saniye sonra seçenekleri etkinleştiriyoruz
        timer = setTimeout(enableOptions, 10000);
        // 30 saniye sonra sonraki soruya geçiyoruz
        setTimeout(nextQuestion, 30000);
    }

    // Seçenekleri etkinleştiren fonksiyon
    function enableOptions() {
        optionsElement.querySelectorAll('button').forEach(button => {
            button.disabled = false;
            button.classList.remove('disabled');
        });
    }

    // Kullanıcının cevabını seçen fonksiyon
    function selectAnswer(index) {
        if (userAnswers[currentQuestionIndex] == null) {
            userAnswers[currentQuestionIndex] = index;
        }
    }

    // Sonraki soruya geçiş fonksiyonu
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // Sonuçları gösteren fonksiyon
    function showResults() {
        quizContainer.style.display = 'none';
        resultsElement.style.display = 'block';
        resultsElement.innerHTML = '<h2 class="fw-bolder accordion-button">Sonuçlar</h2>';
        questions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = "list-group-item alert"
            const userAnswer = userAnswers[index] != null ? question.options[userAnswers[index]].text : 'Cevaplanmadı';
            resultItem.textContent = `${question.title} - Verdiğiniz cevap: ${userAnswer}`;
            resultsElement.appendChild(resultItem);
        });
    }

    // Soruları çekiyoruz
    fetchQuestions();

    // "Sonraki" butonuna tıklama olayını dinliyoruz
    nextButton.addEventListener('click', nextQuestion);
});
