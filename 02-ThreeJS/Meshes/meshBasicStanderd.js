import * as lil from "lil-gui";
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

const loader = new Three.TextureLoader();
const color = loader.load("../text/color.jpg")
const roughness = loader.load("../text/roughness.jpg")
const normal = loader.load("../text/normal.png")
const height = loader.load("../text/height.png")
const emisive = loader.load("../text/emissive.jpg")


//* geometry name and material
const geometry = new Three.BoxGeometry(2, 1,2);
const material = new Three.MeshStandardMaterial({map: color ,roughnessMap: roughness, normalMap: normal, displacementMap: height, displacementScale: 0, emisiveMap: emisive});
const cube = new Three.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//* rendrering for canvas
const renderer = new Three.WebGLRenderer({canvas,  antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

//* orbitControls seetings
const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;

const gui = new lil.GUI();
const materialFolder = gui.addFolder("Material");
materialFolder.add(material, "roughness", 0, 1).name("Roughness");
materialFolder.add(material, "metalness", 0, 1).name("Metalness");
materialFolder.add(material, "transparent", false).name("Transparent");
materialFolder.add(material, "opacity", 0, 1).name("Opacity");
materialFolder.add(material, "displacementScale", 0, 1).name("Displacement Scale");
materialFolder.add(material, "displacementBias", -1, 1).name("Displacement Bias");
materialFolder.open();

const meshFolder = gui.addFolder("Mesh");
meshFolder.add(cube.scale, "x", 0, 5).name("Scale X");
meshFolder.add(cube.scale, "y", 0, 5).name("Scale Y");
meshFolder.add(cube.scale, "z", 0, 5).name("Scale Z");
meshFolder.open();


//* animation of cube
const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    control.update();
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
};
animate()
