function loadQuestions(section) {
    const questionList = document.getElementById('question-list');

    // Map section names to file paths
    const sectionFiles = {
        'Supervised Learning': 'assets/html/supervised-learning.html',
        'Unsupervised Learning': 'assets/html/unsupervised-learning.html',
        'Deep Learning': 'assets/html/deep-learning.html',
        'Data Preprocessing': 'assets/html/data-preprocessing.html',
        'Model Evaluation': 'assets/html/model-evaluation.html'
    };

    // Fetch and load the corresponding file
    if (sectionFiles[section]) {
        fetch(sectionFiles[section])
            .then(response => response.text())
            .then(data => {
                questionList.innerHTML = data;
            })
            .catch(error => {
                questionList.innerHTML = '<p>Error loading content. Please try again later.</p>';
                console.error('Error loading section:', error);
            });
    } else {
        questionList.innerHTML = '<h2>Welcome</h2><p>This page contains a collection of Machine Learning interview questions and answers.</p>';
    }
}