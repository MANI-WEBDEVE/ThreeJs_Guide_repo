import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector(".canvas");

//* creating a Scene
const scene = new Three.Scene();
//* camera position
const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
//* add lighting
const ambientLight = new Three.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const pointLight = new Three.PointLight(0xffffff, 3);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const directionalLight = new Three.DirectionalLight(0xffffff, 2);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

function addLightHelper(light) {
    const helper = new Three.PointLightHelper(light);
    scene.add(helper);
}

addLightHelper(pointLight);
addLightHelper(directionalLight);

//* geometry name and material
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshStandardMaterial({color: "red" ,roughness: 0, metalness: 0});
const cube = new Three.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//* rendrering for canvas
const renderer = new Three.WebGLRenderer({canvas,  antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

//* orbitControls seetings
const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;


//* animation of cube
const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    control.update();
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
};
animate()
