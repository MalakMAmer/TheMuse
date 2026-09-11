// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const container = document.getElementById("model-container");

// // Scene
// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   45,
//   container.clientWidth / container.clientHeight,
//   0.1,
//   1000,
// );

// camera.position.set(0, 0, 0);

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//   alpha: true,
//   antialias: true,
// });

// renderer.setSize(container.clientWidth, container.clientHeight);

// renderer.setPixelRatio(window.devicePixelRatio);

// container.appendChild(renderer.domElement);

// // Lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 2);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// // Load GLB
// const loader = new GLTFLoader();

// loader.load(
//   "./models/model.glb",

//   function (gltf) {
//     console.log("MODEL LOADED!");

//     const model = gltf.scene;

//     // Find the model's actual center
//     const box = new THREE.Box3().setFromObject(model);
//     const center = box.getCenter(new THREE.Vector3());

//     // Create a new pivot
//     const pivot = new THREE.Group();

//     scene.add(pivot);

//     // Move the model so its visual center is at the pivot
//     model.position.sub(center);

//     // Put the model inside the pivot
//     pivot.add(model);

//     // Scale
//     const size = box.getSize(new THREE.Vector3());
//     const maxDimension = Math.max(size.x, size.y, size.z);

//     const isMobile = window.innerWidth <= 768;
//     const targetSize = isMobile ? 1 : 4;

//     const scale = targetSize / maxDimension;

//     model.scale.set(scale, scale, scale);

//     // Rotate the CENTER pivot
//     function animate() {
//         requestAnimationFrame(animate);

//         pivot.rotation.y += 0.005;

//         renderer.render(scene, camera);
//     }

//     animate();
//     },

//     function (progress) {
//         console.log(
//         "Loading:",
//         ((progress.loaded / progress.total) * 100).toFixed(2) + "%",
//         );
//     },

//     function (error) {
//         console.error("MODEL ERROR:", error);
//     },
// );

// // Resize
// window.addEventListener("resize", function () {
//   camera.aspect = container.clientWidth / container.clientHeight;

//   camera.updateProjectionMatrix();

//   renderer.setSize(container.clientWidth, container.clientHeight);
// });
