import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import floor from "../../images/floor.jpg";
import './footer3D.css'

let camera, scene, renderer, bulbLight, bulbMat, hemiLight;
let ballMat, cubeMat, floorMat;

let previousShadowMap = false;

const bulbLuminousPowers = {
  "110000 lm (1000W)": 110000,
  "3500 lm (300W)": 3500,
  "1700 lm (100W)": 1700,
  "800 lm (60W)": 800,
  "400 lm (40W)": 400,
  "180 lm (25W)": 180,
  "20 lm (4W)": 20,
  Off: 0,
};

const hemiLuminousIrradiances = {
  "0.0001 lx (Moonless Night)": 0.0001,
  "0.002 lx (Night Airglow)": 0.002,
  "0.5 lx (Full Moon)": 0.5,
  "3.4 lx (City Twilight)": 3.4,
  "50 lx (Living Room)": 50,
  "100 lx (Very Overcast)": 100,
  "350 lx (Office Room)": 350,
  "400 lx (Sunrise/Sunset)": 400,
  "1000 lx (Overcast)": 1000,
  "18000 lx (Daylight)": 18000,
  "50000 lx (Direct Sun)": 50000,
};

const params = {
  shadows: true,
  exposure: 0.68,
  bulbPower: Object.keys(bulbLuminousPowers)[1],
  hemiIrradiance: Object.keys(hemiLuminousIrradiances)[4],
};

const Floore3d = (props) => {
    const ref = useRef({});

    useEffect(() => {
      if (!ref.current.mount) {
        ref.current.mount = true
        const container = document.getElementById("container");
  
        camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );
        camera.position.x = -4;
        camera.position.z = 20;
        camera.position.y = 2;
  
        scene = new THREE.Scene();
  
        const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
        bulbLight = new THREE.PointLight(0xffee88, 1, 100, 2);
  
        bulbMat = new THREE.MeshStandardMaterial({
          emissive: 0xffffee,
          emissiveIntensity: 1,
          color: 0x000000,
        });
        bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
        bulbLight.position.set(0, 2, 0);
        bulbLight.castShadow = true;
        scene.add(bulbLight);
  
        hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 0.02);
        scene.add(hemiLight);
  
        floorMat = new THREE.MeshStandardMaterial({
          roughness: 0.8,
          color: 0xffffff,
          metalness: 0.2,
          bumpScale: 1,
        });
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(floor, function (map) {
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          map.repeat.set(10, 24);
          map.colorSpace = THREE.SRGBColorSpace;
          floorMat.map = map;
          floorMat.needsUpdate = true;
        });
  
        cubeMat = new THREE.MeshStandardMaterial({
          roughness: 0.7,
          color: 0xffffff,
          bumpScale: 1,
          metalness: 0.2,
        });
  
        ballMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.5,
          metalness: 1.0,
        });
  
        const floorGeometry = new THREE.PlaneGeometry(20, 20);
        const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
        floorMesh.receiveShadow = true;
        floorMesh.rotation.x = -Math.PI / 2.0;
        scene.add(floorMesh);
  
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
        renderer.setAnimationLoop(animate);
        renderer.shadowMap.enabled = true;
        renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement);
  
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 20;
  
        window.addEventListener("resize", onWindowResize);
      }
    }, []);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize(window.innerWidth - 200, window.innerHeight  - 200);
    }
  
    function animate() {
      renderer.toneMappingExposure = Math.pow(params.exposure, 8.0); // to allow for very bright scenes.
  
      if (params.shadows !== previousShadowMap) {
        ballMat.needsUpdate = true;
        cubeMat.needsUpdate = true;
        floorMat.needsUpdate = true;
        previousShadowMap = params.shadows;
      }
  
      bulbLight.power = bulbLuminousPowers[params.bulbPower];
      bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow(0.02, 1.0); // convert from intensity to irradiance at bulb surface
  
      hemiLight.intensity = hemiLuminousIrradiances[params.hemiIrradiance];
      const time = Date.now() * 0.0005;
  
      bulbLight.position.y = Math.cos(time) * 0.75 + 1.25;
  
      renderer.render(scene, camera);
    }

    return <div id="container"></div>
};

export default Floore3d;