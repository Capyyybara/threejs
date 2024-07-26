import "./index.css"
import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(render.domElement)

// 创建几何体
const geometry = new THREE.BoxGeometry(5, 5, 5)
// 创建材质,实则也就是创建了shader
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 创建网格
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5;

let animationId;
function animate() {
    animationId = requestAnimationFrame(animate)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    render.render(scene, camera)
}
animate()