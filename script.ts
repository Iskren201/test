import * as PIXI from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.2.4/pixi.mjs";

const app = new PIXI.Application({ 
    width: window.innerWidth, 
    height: window.innerHeight, 
    backgroundColor: 0x000000 
});
document.body.appendChild(app.view);

// Load assets
const loader = new PIXI.Loader();
loader.add("vault", "vault.jpg")
      .add("vaultOpen", "vaultOpen.jpg")
      .add("handle", "handle.png")
      .add("handleShadow", "handleShadow.png")
      .add("door", "door.png")
      .add("doorOpen", "doorOpen.png")
      .add("doorOpenShadow", "doorOpenShadow.png")
      .add("bg", "bg.png")
      .add("blink", "blink.png");

loader.load((_, resources) => {
    const bg = new PIXI.Sprite(resources.bg.texture);
    app.stage.addChild(bg);
});
