// Show the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Copy-email button with a short confirmation message
const copyButton = document.getElementById('copy-email');
const status = document.getElementById('copy-status');

copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email copied';
  } catch (err) {
    status.textContent = 'Copy failed. Email me at ' + email;
  }
  setTimeout(() => { status.textContent = ''; }, 3000);
});
