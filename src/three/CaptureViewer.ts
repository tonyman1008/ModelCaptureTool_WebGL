import * as THREE from 'three'
import ViewportController from "./base/ViewportController";
import * as dat from "dat-gui";

export default class CaptureViewer {
    scene: THREE.Scene;
    container: HTMLCanvasElement;

    viewportControls: ViewportController;
    datGUI: dat;


    constructor() {
        this.scene = new THREE.Scene()
        this.container = document.getElementById('three-canvas') as HTMLCanvasElement;

        //initial set manager
        this.viewportControls = new ViewportController();
        this.viewportControls.init(this.container);
        this.viewportControls.camera.position.set(0, 0, 100)
        this.viewportControls.controls.enableRotate = false;

        this.datGUI = new dat.GUI({ width: 300 });
        this.setGUI()
    }

    setGUI() {
        //Basic gui setting
        this.datGUI.width = '450px'
    }

    resetViewPort() {
        console.log("reset viewport")
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.viewportControls.render(this.scene);
    }

    clear() {

    }
}
