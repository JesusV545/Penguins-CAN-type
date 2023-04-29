const butInstall = document.getElementById('buttonInstall');
butInstall.classList.add("hidden");

// Show the install button when beforeinstallprompt event is triggered
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// Handle click event on the install button
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  
  if (!promptEvent) {
    return;
  }

  try {
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
  } catch (err) {
    console.error('Failed to prompt the user to install the app', err);
  }
});

// Reset the deferredPrompt variable when the app is installed
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

