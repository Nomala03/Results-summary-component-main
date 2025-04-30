const summaryData = [ {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    bgColor: " #fff1f1",
    textColor: " #C87777"
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    bgColor: " #fdf8f1",
    textColor: " #f3bd52" 
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    bgColor: " #f0fffa",
    textColor: " #3fccad"
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    bgColor: " #eaeaff",
    textColor: " #6363e0"
  }];
  
  // Select the container to inject summary items
  const summaryContainer = document.querySelector('.right-card');
  
  // Create and inject the summary items
  function generateSummary() {
    // Insert "Summary" heading
    summaryContainer.innerHTML = `<h1>Summary</h1>`;
  
    // Insert summary items
    summaryData.forEach(item => {
      const summaryItem = document.createElement('div');
      summaryItem.className = `summary-item`;
      summaryItem.style.backgroundColor = item.bgColor; 
      summaryItem.style.color = item.textColor;
  
      summaryItem.innerHTML = `
        <div class="label">
          <img src="${item.icon}" alt="${item.category}-icon">
          <span>${item.category}</span>
        </div>
        <span><span class="score2">${item.score}</span> <span class="total">/ 100</span></span>
      `;
      summaryContainer.appendChild(summaryItem);
    });
  
    // Insert Continue button
    const continueBtn = document.createElement('button');
    continueBtn.id = "continue-btn";
    continueBtn.textContent = "Continue";
    summaryContainer.appendChild(continueBtn);
  }
  
  // Calculate and update the total average score
  function updateTotalScore() {
    const scores = summaryData.map(item => item.score);
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const average = Math.round(sum / scores.length);
  
    const bigScore = document.querySelector('.score-circle .score1');
    bigScore.textContent = average;
  }
  
  // Enable Continue button once data is loaded
  function enableContinue() {
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', () => {
    window.location.href = 'recorded.html'; 
    });
  }
  
  // Run all functions
  generateSummary();
  updateTotalScore();
  enableContinue();
  