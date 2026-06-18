const copyButton = document.querySelector("[data-copy-bibtex]");
const bibtex = document.querySelector("#bibtex");

function setButtonText(text) {
  if (!copyButton) return;
  copyButton.textContent = text;
  window.setTimeout(() => {
    copyButton.textContent = "Copy BibTeX";
  }, 1600);
}

async function copyBibtex() {
  if (!bibtex) return;
  const text = bibtex.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
    setButtonText("Copied");
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    setButtonText("Selected");
  }
}

copyButton?.addEventListener("click", copyBibtex);
