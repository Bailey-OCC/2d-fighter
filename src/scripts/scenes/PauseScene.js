import { MAIN_MENU_BACKGROUND } from "../../assets/data/MainMenuImgData.js";
import { MENU_CENTER } from "../utils/global.js";
import { BUTTON_PADDING, BUTTON_HEIGHT, BUTTON_WIDTH, BUTTONS } from "../../assets/data/buttonsData.js";
import { Button } from "../form/Button.js";
import { MenuScene } from "./MenuScene.js";

export class PauseScene extends MenuScene {
    constructor(game) {
        super(game);
        this.buttons = this.getButtons();
    }

    draw(){
        this.drawBackground(this.game.ctxHigh);
        this.drawButtons(this.game.ctxHigh);
    }

    drawBackground(ctx){
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "gray";
        ctx.globalAlpha = 0.5;

    }

    getButtons() {
            let buttonList = [
                new Button(BUTTONS.PLAY, "PLAY"),
                new Button(BUTTONS.HOW, "HOW"),
                new Button(BUTTONS.SETTINGS, "SETTINGS"),
            ];
    
            for (let i = 0; i < buttonList.length; i++) {
                let dX = MENU_CENTER.X - BUTTON_WIDTH/2;
                let dY = MENU_CENTER.Y - BUTTON_HEIGHT + (BUTTON_HEIGHT * i) + (BUTTON_PADDING * i);
                buttonList[i].rect.x = dX;
                buttonList[i].rect.y = dY;
            }
            return buttonList;
        }//end getButtons
}