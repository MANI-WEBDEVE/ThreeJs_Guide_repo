import * as Three from "three";

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)