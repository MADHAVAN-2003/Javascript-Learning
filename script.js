const containerId = document.getElementById("container");

//function to fetch data from LocalHost
async function localhostData() {
  try {
    const api = "http://192.168.29.179:4000/mcq";
    const fetchApi = await fetch(api);
    const data = await fetchApi.json();
    console.log(data);
    
    //looping the elements and appending to out html to display the mcq
    data.forEach((element, index) => {
      const mcqDiv = document.createElement('div');
      mcqDiv.classList.add('mcq');

      const questionSpan = document.createElement('span');
      questionSpan.innerHTML = `Question ${index + 1}: ${element.question}<br/>`;

      const optionsSpan = document.createElement('span');
      optionsSpan.innerHTML = `Options : ${element.options.map(opt => opt.text).join(", ")}<br/>`;

      const button = document.createElement('button');
      button.textContent = 'Show Answer';
      button.addEventListener('click', () => {
        showAnswer(index);
      });

      const answerDiv = document.createElement('div');
      answerDiv.id = `answer${index}`;
      answerDiv.style.display = 'none';
      answerDiv.innerHTML = `Correct Answer : ${element.options.find(opt => opt.isCorrect).text}`;

      mcqDiv.appendChild(questionSpan);
      mcqDiv.appendChild(optionsSpan);
      mcqDiv.appendChild(button);
      mcqDiv.appendChild(answerDiv);

      containerId.appendChild(mcqDiv);
    });
  } catch (err) {
    console.log(err);
  }
}

function showAnswer(index) {
  const answerDiv = document.getElementById(`answer${index}`);
  if (answerDiv.style.display === "none") {
    answerDiv.style.display = "block";
  } else {
    answerDiv.style.display = "none";
  }
}

localhostData();

