// console.log(THREE)
// console.log(target)
const scene = new THREE.Scene();
// console.log(scene)

const geometry = new THREE.BoxGeometry(4, 4, 4);

const material = new THREE.MeshBasicMaterial({ color: "#072636" });

const box = new THREE.Mesh(geometry, material);

scene.add(box);

const size = {
  width: 1000,
  height: 600,
};

const { width, height } = size;

const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 7
camera.position.x = 3
scene.add(camera);

//* Rendrer this is Director

const target = document.querySelector(".webGl");
const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(width, height);
renderer.render(scene, camera);
