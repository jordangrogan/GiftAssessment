const questionsFieldset = document.getElementById("questions");
const resultsDiv = document.getElementById("results");

questions.forEach((question, i) => {

  // Create Question Div (class="row")
  let questionDiv = document.createElement("div");
  questionDiv.className = "row mt-3";

  // Create Question Title Div
  let questionTitleLengend = document.createElement("legend");
  questionTitleLengend.className = "col-form-label col-sm-4 pt-0";
  questionTitleLengend.innerHTML = (i+1) + ". " + question.question;
  questionDiv.appendChild(questionTitleLengend);

  let answersDiv = document.createElement("div");
  answersDiv.className = "col-sm-8";

  // Create Answers
  answers.forEach((answer, j) => {

    let answerDiv = document.createElement("div");
    answerDiv.className = "form-check";

    let answerLabel = document.createElement("label");
    answerLabel.className = "form-check-label";
    answerLabel.innerHTML = answer;
    answerLabel.setAttribute("for", "answer_" + i + "_" + j);

    let answerInput = document.createElement("input");
    answerInput.className = "form-check-input";
    answerInput.setAttribute("id", "answer_" + i + "_" + j);
    answerInput.setAttribute("type", "radio");
    answerInput.setAttribute("name", i);
    answerInput.setAttribute("value", j);
    answerInput.setAttribute("onclick", "updateResults()");

    answerDiv.appendChild(answerInput);
    answerDiv.appendChild(answerLabel);

    answersDiv.appendChild(answerDiv);

  });

  questionDiv.appendChild(answersDiv);
  questionsFieldset.appendChild(questionDiv);

});

function compareGifts(a,b) {
  if (a.score < b.score)
    return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}

function updateResults() {

  // Check if all the boxes are filled out
  let incompleteList = "";
  let complete = true;
  questions.forEach((question, i) => {
    if(document.querySelector('input[name="' + i + '"]:checked') === null) {
      incompleteList += (i+1) + " ";
      complete = false;
    }
  });

  if(complete) {
    // Spiritual gifts questions complete

    let sortedGifts = calculateTop3Gifts();

    // Display Top 3 Gifts
    resultsDiv.innerHTML = `
    <div class="font-weight-bold">Your Top 5 Gifts Are:</div>
    <div>1. ${sortedGifts[0].gift} (${sortedGifts[0].scorePercentage.toFixed(1)}%)</div>
    <div class="ml-5 font-italic">${sortedGifts[0].description}</div>
    <div>2. ${sortedGifts[1].gift} (${sortedGifts[1].scorePercentage.toFixed(1)}%)</div>
    <div class="ml-5 font-italic">${sortedGifts[1].description}</div>
    <div>3. ${sortedGifts[2].gift} (${sortedGifts[2].scorePercentage.toFixed(1)}%)</div>
    <div class="ml-5 font-italic">${sortedGifts[2].description}</div>
    <div>4. ${sortedGifts[3].gift} (${sortedGifts[3].scorePercentage.toFixed(1)}%)</div>
    <div class="ml-5 font-italic">${sortedGifts[3].description}</div>
    <div>5. ${sortedGifts[4].gift} (${sortedGifts[4].scorePercentage.toFixed(1)}%)</div>
    <div class="ml-5 font-italic">${sortedGifts[4].description}</div>
    `;

    // Show the follow up questions & set the label names appropriately
    /* document.getElementById("spiritualGiftQuestions").className = "d-block";
    document.querySelector('label[for="whygift1"]').innerHTML = `1. ${sortedGifts[0].gift}`;
    document.querySelector('label[for="whygift2"]').innerHTML = `2. ${sortedGifts[1].gift}`;
    document.querySelector('label[for="whygift3"]').innerHTML = `3. ${sortedGifts[2].gift}`;*/
    document.querySelector('input[name="1st Top Gift"]').value = `${sortedGifts[0].gift} (${sortedGifts[0].scorePercentage.toFixed(1)}%)`;
    document.querySelector('input[name="2nd Top Gift"]').value = `${sortedGifts[1].gift} (${sortedGifts[1].scorePercentage.toFixed(1)}%)`;
    document.querySelector('input[name="3rd Top Gift"]').value = `${sortedGifts[2].gift} (${sortedGifts[2].scorePercentage.toFixed(1)}%)`;
    document.querySelector('input[name="4th Top Gift"]').value = `${sortedGifts[3].gift} (${sortedGifts[3].scorePercentage.toFixed(1)}%)`;
    document.querySelector('input[name="5th Top Gift"]').value = `${sortedGifts[4].gift} (${sortedGifts[4].scorePercentage.toFixed(1)}%)`;

  } else {
    // Spiritual gifts questions not complete
    resultsDiv.innerHTML = '<span class="font-weight-bold red">Fill in these questions above to see your spiritual gift results: ' + incompleteList + '</span>';
  }

}

function calculateTop3Gifts() {

  // Reset scores before recalculating
  resetScores();

  // Calculate Scores
  questions.forEach((question, i) => {
    switch(document.querySelector('input[name="' + i + '"]:checked').value) {
      case "0":
        // Almost Never = 1
        gifts[i%numOfGifts].score += 1;
        console.log("Adding 1 to Gift: " + gifts[i%numOfGifts].gift);
        break;
      case "1":
        // Seldom = 2
        gifts[i%numOfGifts].score += 2;
        console.log("Adding 2 to Gift: " + gifts[i%numOfGifts].gift);
        break;
      case "2":
        // Sometimes = 3
        gifts[i%numOfGifts].score += 3;
        console.log("Adding 3 to Gift: " + gifts[i%numOfGifts].gift);
        break;
      case "3":
        // Frequently = 4
        gifts[i%numOfGifts].score += 4;
        console.log("Adding 4 to Gift: " + gifts[i%numOfGifts].gift);
        break;
      case "4":
        // Almost Always = 5
        gifts[i%numOfGifts].score += 5;
        console.log("Adding 5 to Gift: " + gifts[i%numOfGifts].gift);
        break;
    }
  });

  // Calculate Percentages
  gifts.forEach((gift, i) => {
    // The gift score divided by the total number of points possible for that gift
    // The total number of points possible = the number of questions for each gift * 5 possible points
    // The number of questions for each gift = total number of questions / number of gifts (equal # of questions for each gift)
    gift.scorePercentage = gift.score / (numOfQuestions / numOfGifts * 5) * 100;
  });

  // Sort Array
  let sortedGifts = gifts.slice(); // duplicate array
  sortedGifts = sortedGifts.sort(compareGifts); // sort array
  console.log(sortedGifts);
  return sortedGifts;
}

function resetScores() {
  gifts.forEach((gift) => {
    gift.score = 0;
  });
}

updateResults(); // So that it shows the message to fill out questions

function showSmallGroupYes(show) {
  if(show) {
    document.getElementById("smallGroupYes").className = "form-group row";
  } else {
    document.getElementById("smallGroupYes").className = "form-group row d-none";
  }
}
