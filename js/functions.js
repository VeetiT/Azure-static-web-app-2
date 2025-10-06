function showAnswers() {
  const answers = document.querySelectorAll(".answer");
  answers.forEach(answer => {
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
}
