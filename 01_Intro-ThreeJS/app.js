//* Create a Scene;
const scene = new THREE.Scene();

//* Create a Camera;
//* Camera frustum: 65 - field of view in degrees, window.innerWidth / window.innerHeight - aspect ratio, 0.1 - near, 100 - far
const camera = new THREE.PerspectiveCamera(
  65, //* field of view in degrees (smaller value is a more zoomed in view)
  window.innerWidth / window.innerHeight, // aspect ratio of the canvas element (width / height)
  0.1, //* near - the closest an object can be rendered from the camera
  100 //* far - the furthest an object can be rendered from the camera
);

camera.position.z = 4;
scene.add(camera);

//* create a Mesh

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "#7A00E6" });
let mesh = new THREE.Mesh(box, material);

//* scene add mesh
scene.add(mesh);

//* position on threeJS X,Y and Z
// mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.position.z = 1;

//* Rrotation on threeJS
// mesh.rotation.x = 2;
// mesh.rotation.y = 1;
// mesh.rotation.z = 1;

//* Scale on threeJS

// mesh.scale.x = 2;
// mesh.scale.y = 6;
// mesh.scale.z = 20;

//* rendrer part
const canvas = document.querySelector(".webGl");
let render = new THREE.WebGLRenderer({ canvas, antialias: true });
render.setSize(window.innerWidth, window.innerHeight);
render.render(scene, camera);

const clock = new THREE.Clock();


const animate = () => {
  window.requestAnimationFrame(animate);
  // console.log(window.requestAnimationFrame(animate))
  render.render(scene, camera);
  mesh.rotation.y = clock.getElapsedTime()
  // mesh.rotation.x = clock.getElapsedTime()
  // mesh.rotation.z = clock.getElapsedTime()
}

animate();