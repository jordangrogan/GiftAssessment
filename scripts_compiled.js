"use strict";var questionsFieldset=document.getElementById("questions"),resultsDiv=document.getElementById("results");questions.forEach(function(c,d){var e=document.createElement("div");e.className="row mt-3";var f=document.createElement("legend");f.className="col-form-label col-sm-4 pt-0",f.innerHTML=d+1+". "+c.question,e.appendChild(f);var g=document.createElement("div");g.className="col-sm-8",answers.forEach(function(h,k){var l=document.createElement("div");l.className="form-check";var m=document.createElement("label");m.className="form-check-label",m.innerHTML=h,m.setAttribute("for","answer_"+d+"_"+k);var n=document.createElement("input");n.className="form-check-input",n.setAttribute("id","answer_"+d+"_"+k),n.setAttribute("type","radio"),n.setAttribute("name",d),n.setAttribute("value",k),n.setAttribute("onclick","updateResults()"),l.appendChild(n),l.appendChild(m),g.appendChild(l)}),e.appendChild(g),questionsFieldset.appendChild(e)});function compareGifts(c,d){return c.score<d.score?1:c.score>d.score?-1:0}function updateResults(){var c="",d=!0;if(questions.forEach(function(f,g){null===document.querySelector("input[name=\""+g+"\"]:checked")&&(c+=g+1+" ",d=!1)}),d){var e=calculateTop3Gifts();resultsDiv.innerHTML="\n    <div class=\"font-weight-bold\">Your Top 5 Gifts Are:</div>\n    <div>1. "+e[0].gift+" ("+e[0].scorePercentage+"%)</div>\n    <div class=\"ml-5 font-italic\">"+e[0].description+"</div>\n    <div>2. "+e[1].gift+" ("+e[1].scorePercentage+"%)</div>\n    <div class=\"ml-5 font-italic\">"+e[1].description+"</div>\n    <div>3. "+e[2].gift+" ("+e[2].scorePercentage+"%)</div>\n    <div class=\"ml-5 font-italic\">"+e[2].description+"</div>\n    <div>4. "+e[3].gift+" ("+e[3].scorePercentage+"%)</div>\n    <div class=\"ml-5 font-italic\">"+e[3].description+"</div>\n    <div>5. "+e[4].gift+" ("+e[4].scorePercentage+"%)</div>\n    <div class=\"ml-5 font-italic\">"+e[4].description+"</div>\n    ",document.querySelector("input[name=\"1st Top Gift\"]").value=""+e[0].gift,document.querySelector("input[name=\"2nd Top Gift\"]").value=""+e[1].gift,document.querySelector("input[name=\"3rd Top Gift\"]").value=""+e[2].gift,document.querySelector("input[name=\"4th Top Gift\"]").value=""+e[3].gift,document.querySelector("input[name=\"5th Top Gift\"]").value=""+e[4].gift}else resultsDiv.innerHTML="<span class=\"font-weight-bold red\">Fill in these questions above to see your spiritual gift results: "+c+"</span>"}function calculateTop3Gifts(){resetScores(),questions.forEach(function(d,e){switch(document.querySelector("input[name=\""+e+"\"]:checked").value){case"0":gifts[e%numOfGifts].score+=1,console.log("Adding 1 to Gift: "+gifts[e%numOfGifts].gift);break;case"1":gifts[e%numOfGifts].score+=2,console.log("Adding 2 to Gift: "+gifts[e%numOfGifts].gift);break;case"2":gifts[e%numOfGifts].score+=3,console.log("Adding 3 to Gift: "+gifts[e%numOfGifts].gift);break;case"3":gifts[e%numOfGifts].score+=4,console.log("Adding 4 to Gift: "+gifts[e%numOfGifts].gift);break;case"4":gifts[e%numOfGifts].score+=5,console.log("Adding 5 to Gift: "+gifts[e%numOfGifts].gift);}}),gifts.forEach(function(d){d.scorePercentage=100*(d.score/(5*(numOfQuestions/numOfGifts)))});var c=gifts.slice();return c=c.sort(compareGifts),console.log(c),c}function resetScores(){gifts.forEach(function(c){c.score=0})}updateResults();function showSmallGroupYes(c){document.getElementById("smallGroupYes").className=c?"form-group row":"form-group row d-none"}
