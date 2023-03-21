// Register a service worker for your application
export function register() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service worker registered: ", registration);
          })
          .catch((error) => {
            console.error("Service worker registration failed: ", error);
          });
      });
    }
  }
  
  // Unregister the service worker for your application
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  
  