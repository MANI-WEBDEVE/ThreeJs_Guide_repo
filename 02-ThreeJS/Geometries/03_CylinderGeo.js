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
const geometry = new Three.CylinderGeometry(1 ,1, 1.2, 30);
const material = new Three.MeshBasicMaterial({color: "#a64253", wireframe: true});
const cylinder = new Three.Mesh(geometry, material);
scene.add(cylinder);
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

cylinder.rotateY(1.58)
const clock = new Three.Clock();

//* animation of cylinder 
const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    control.update();
    // cylinder.rotation.x = clock.getElapsedTime();
    // cylinder.rotation.y = clock.getElapsedTime();  
    // cylinder.rotation.z = clock.getElapsedTime();    
}

//* call the function of animation
animate();