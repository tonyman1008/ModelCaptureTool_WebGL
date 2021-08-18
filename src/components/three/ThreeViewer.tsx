import * as React from "react";
import { useEffect } from "react";
import CaptureViewer from "three/CaptureViewer";
import "./ThreeViewer.css"
const ThreeViewer = () => {

    useEffect(() => {
        const three = new CaptureViewer();
        three.animate();
        return () => {
            three.clear();
        }
    }, [])
    return (
        <div className="viewerContainer">
            <canvas id="three-canvas" />
        </div>
    );
}

export default ThreeViewer;
