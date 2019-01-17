const questionsDiv = document.getElementById("questions");

questions.forEach((question, i) => {

  // Create Question Div
  let questionDiv = document.createElement("div");
  questionDiv.className = "question";

  // Create Question Title Div
  let questionTitleDiv = document.createElement("div");
  questionTitleDiv.className = "question-title";
  questionTitleDiv.innerHTML = (i+1) + ". " + question.question;
  questionDiv.appendChild(questionTitleDiv);

  // Create Answers
  answers.forEach((answer, j) => {
    let answerDiv = document.createElement("div");
    let answerInput = document.createElement("input");
    let answerLabel = document.createElement("label");
    answerLabel.innerHTML = answer;
    answerInput.setAttribute("type", "radio");
    answerInput.setAttribute("name", i);
    answerInput.setAttribute("value", j);
    answerDiv.appendChild(answerInput);
    answerDiv.appendChild(answerLabel);
    questionDiv.appendChild(answerDiv);
  });

  questionsDiv.appendChild(questionDiv);
});

function compareGifts(a,b) {
  if (a.score < b.score)
    return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}

function submitForm() {

  // TODO: Form Validation

  // Hide Form
  document.getElementById("assessment").style.display = "none";

  // Calculate Scores
  questions.forEach((question, i) => {
    switch(document.querySelector('input[name="' + i + '"]:checked').value) {
      case "0":
        // Almost Never = 1
        gifts[i%24].score += 1;
        console.log("Adding 1 to Gift: " + gifts[i%24].gift);
        break;
      case "1":
        // Seldom = 2
        gifts[i%24].score += 2;
        console.log("Adding 2 to Gift: " + gifts[i%24].gift);
        break;
      case "2":
        // Sometimes = 3
        gifts[i%24].score += 3;
        console.log("Adding 3 to Gift: " + gifts[i%24].gift);
        break;
      case "3":
        // Frequently = 4
        gifts[i%24].score += 4;
        console.log("Adding 4 to Gift: " + gifts[i%24].gift);
        break;
      case "4":
        // Almost Always = 5
        gifts[i%24].score += 5;
        console.log("Adding 5 to Gift: " + gifts[i%24].gift);
        break;
    }
  });

  // Sort Array
  let sortedGifts = gifts.slice(); // duplicate array
  sortedGifts = sortedGifts.sort(compareGifts); // sort array
  console.log(sortedGifts);

  // Display Top 3 Gifts
  document.getElementById("results").innerHTML = `
  <h1>Your Top 3 Gifts</h1>
  <h2>1. ${sortedGifts[0].gift}</h2>
  <p>${sortedGifts[0].description}</p>
  <h2>2. ${sortedGifts[1].gift}</h2>
  <p>${sortedGifts[1].description}</p>
  <h2>3. ${sortedGifts[2].gift}</h2>
  <p>${sortedGifts[2].description}</p>
  `;

  // Reset Scores - possibly at the very end
  // resetScores();

}

function resetScores() {
  gifts.forEach((gift) => {
    gift.score = 0;
  });
}
