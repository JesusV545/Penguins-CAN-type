// Get reference to the install button
const installButton = document.getElementById('buttonInstall');

// Hide the install button by default
installButton.classList.add("hidden");

// Listen for the 'beforeinstallprompt' event which is fired when a PWA can be installed
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the prompt event so we can use it later
  window.deferredPrompt = event;

  // Show the install button to the user
  installButton.classList.toggle('hidden', false);
});

// Listen for clicks on the install button
installButton.addEventListener('click', async () => {
  // Get the stored prompt event
  const promptEvent = window.deferredPrompt;

  // If there is no prompt event, do nothing
  if (!promptEvent) {
    return;
  }

  // Show the install prompt to the user
  promptEvent.prompt();

  // Clear the stored prompt event
  window.deferredPrompt = null;

  // Hide the install button
  installButton.classList.toggle('hidden', true);
});

// Listen for the 'appinstalled' event which is fired when the PWA is installed
window.addEventListener('appinstalled', (event) => {
  // Clear the stored prompt event
  window.deferredPrompt = null;
});
