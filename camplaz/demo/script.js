document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 7500, npcCollisionRadius: 100, actionDuration:900, jumpHeight: 300, npcSpeed: 250, maxSimultaneousNPCs: 4, removeNPCAfterInteractedDelay: 1000});
});