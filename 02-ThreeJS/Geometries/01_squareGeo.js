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
)

//* geometry name and material
const geometry = new Three.BoxGeometry(1, 1, 1, 10, 10, 10);
const material = new Three.MeshBasicMaterial({color: "#7A00E2", wireframe: true});
const cube = new Three.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//* rendrering for canvas
const renderer = new Three.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);


//* orbitControls seetings
const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true

//* responsive 3D web

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


//* animation of cube 
const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    control.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;    
}

//* call the function of animation
animate();