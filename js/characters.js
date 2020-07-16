const textArea = document.getElementById("my-textarea");
const remain = document.getElementById("my-textarea-remain");
const maxchar = 100;

textArea.addEventListener('input', () => {
  const remaining = maxchar - textArea.value.length;
  const color = remaining < 10 ? 'red': null;

  remain.textContent = remaining +' characters remaining';
  remain.style.color = color;
})