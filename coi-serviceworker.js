/* Self-unregister: previous deploys installed a service worker here. */
(() => {
  if (typeof window === "undefined") {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => {
      event.waitUntil((async () => {
        await self.registration.unregister();
        const clients = await self.clients.matchAll();
        clients.forEach((client) => client.navigate(client.url));
      })());
    });
  }
})();
