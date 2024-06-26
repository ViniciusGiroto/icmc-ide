import { IREG_KB, IREG_WC } from "../enums.js";
import Fenster from "../fenster.js";

export default class ScreenViewer extends Fenster {
  #internalRegisters;
  #wc = 0;

  constructor({ style }, config, events) {
    const body = document.createElement("screen-viewer");
    const title = document.createElement("span");
    const buttonsLeft = [];
    const buttonsRight = [];

    {
      title.innerText = "Screen";
      title.classList.add("title");
    }

    {
      const button = document.createElement("button");
      const icon = document.createElement("img");

      icon.src = "images/toggle-full-screen.png";
      button.append(icon);
      button.addEventListener("click", () => {
        body.requestFullscreen().catch((error) => {
          console.error(error);
        });
      });

      buttonsLeft.push(button);
    }

    {
      const button = document.createElement("button");
      const icon = document.createElement("img");

      icon.src = "images/erase.png";
      button.append(icon, "Clear");
      button.addEventListener("click", () => {
        body.clear();
      });
      buttonsRight.push(button);
    }

    {
      body.tabIndex = 1;
      body.addEventListener("keydown", ({ keyCode }) => {
        if (this.#internalRegisters) {
          this.#internalRegisters[IREG_KB] = keyCode;
        }
      });

      body.addEventListener("keyup", ({ keyCode }) => {
        if (this.#internalRegisters) {
          this.#internalRegisters[IREG_KB] = 0xFF;
        }
      });
    }

    super({
      title,
      body,
      style,
      buttonsLeft,
      buttonsRight
    });

    config.screenWidth.subscribe((width) => {
      body.width = width;
    });

    config.screenHeight.subscribe((height) => {
      body.height = height;
    });

    events.refresh.subscribe(({ vram, internalRegisters }) => {
      if (vram) {
        body.memory = vram;
      }

      if (internalRegisters) {
        this.#internalRegisters = internalRegisters;
      }
    });

    events.render.subscribe(() => {
      this.render();
    });

    events.setCharmap.subscribe((charmap) => {
      body.charmap = charmap;
    });
  }

  render() {
    if (!this.#internalRegisters) return;
    const newWc = this.#internalRegisters[IREG_WC];
    if (newWc === this.#wc) return;

    this.body.shouldUpdate = true;
    this.body.render();
    this.#wc = newWc;
  }
}
