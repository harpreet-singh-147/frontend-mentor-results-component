const resultsStatsContainer = document.querySelector(
  '.results__stats-container'
);

fetch('data.json')
  .then(res => res.json())
  .then(results => createResults(results));

const createResults = results => {
  results.forEach(result => {
    const resultsStatsDiv = document.createElement('div');
    resultsStatsDiv.classList.add('results__stat');
    resultsStatsDiv.style.color = result.color;
    resultsStatsDiv.style.backgroundColor = result.backgroundColor;

    const resultsStatsTextContainer = document.createElement('div');
    resultsStatsTextContainer.classList.add('results__stat-text-container');

    const resultsIcon = document.createElement('img');
    resultsIcon.src = result.icon;

    const resultStatText = document.createElement('p');
    resultStatText.classList.add('results__stat-text');
    resultStatText.textContent = result.category;

    const resultStatScore = document.createElement('p');
    resultStatScore.classList.add('results__stat-score');

    const resultScoreSpan = document.createElement('span');
    resultScoreSpan.classList.add('results__score-bold');
    resultScoreSpan.textContent = `${result.score} `;

    resultStatScore.appendChild(resultScoreSpan);

    const scoreText = document.createTextNode('/ 100');
    resultStatScore.appendChild(scoreText);

    resultsStatsTextContainer.append(resultsIcon, resultStatText);

    resultsStatsDiv.append(resultsStatsTextContainer, resultStatScore);

    resultsStatsContainer.appendChild(resultsStatsDiv);
  });
};
