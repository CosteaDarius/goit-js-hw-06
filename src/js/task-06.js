const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const requiredLength = Number(inputElement.dataset.length);
  const currentLength = inputElement.value.length;

  if (currentLength === requiredLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
