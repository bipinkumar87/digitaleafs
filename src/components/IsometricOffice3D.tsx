"use client";

import { useEffect, useRef, useState } from "react";

export default function IsometricOffice3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let animationFrameId: number;
    let renderer: any = null;
    let scene: any = null;
    let camera: any = null;
    let mainGroup: any = null;

    async function initThree() {
      // 1. Load Three.js (from node_modules or CDN fallback)
      let THREE: any;
      try {
        THREE = await import("three");
      } catch (err) {
        if (!(window as any).THREE) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load Three.js CDN"));
            document.head.appendChild(script);
          });
        }
        THREE = (window as any).THREE;
      }

      if (!isMounted || !containerRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // 2. Scene Setup
      scene = new THREE.Scene();
      scene.background = null;

      // 3. True Isometric Orthographic Camera (Open Front Diamond View)
      const aspect = width / height;
      const d = width < 768 ? 19.5 : 14.8;
      camera = new THREE.OrthographicCamera(
        -d * aspect,
        d * aspect,
        d,
        -d,
        1,
        1000
      );

      // Classic 45-degree isometric angle looking into the open (+X, +Z) front cutaway
      camera.position.set(28, 23, 28);
      camera.lookAt(0, -1.0, 0);

      // 4. WebGL Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // 5. Balanced Studio Architectural Lighting (Rich contrast, zero blowout)
      const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.72);
      scene.add(ambientLight);

      // Main Directional Key Sun Light (from top-front-right)
      const dirLight = new THREE.DirectionalLight(0xfffaec, 1.35);
      dirLight.position.set(20, 38, 22);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 140;
      dirLight.shadow.camera.left = -25;
      dirLight.shadow.camera.right = 25;
      dirLight.shadow.camera.top = 25;
      dirLight.shadow.camera.bottom = -25;
      dirLight.shadow.bias = -0.0004;
      scene.add(dirLight);

      // Soft Rim / Fill Light from left
      const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.45);
      fillLight.position.set(-22, 20, 15);
      scene.add(fillLight);

      // Subtle Interior Warm Glows
      const devLight = new THREE.PointLight(0xf59e0b, 1.1, 20);
      devLight.position.set(-5, 5.5, 4);
      scene.add(devLight);

      const confLight = new THREE.PointLight(0xffedd5, 1.0, 20);
      confLight.position.set(6, 5.5, -2);
      scene.add(confLight);

      // 6. Materials Palette (Ditto Reference Image Dark Luxury Contrast)
      const colors = {
        floorBase: 0x1b1b1e,
        floorCarpet: 0x2a2a30,
        floorWood: 0x7c4925,
        wallDark: 0x202024,
        wallBrick: 0x5c2f20,
        orangeYellow: 0xf59e0b,
        woodSlat: 0xa46c3a,
        metalBlack: 0x141416,
        chairWhite: 0xe5e7eb,
        chairBlack: 0x181c24,
        glass: 0x60a5fa,
        plantGreen: 0x22c55e,
        screenCyan: 0x38bdf8,
        screenOrange: 0xf97316,
        skinTone1: 0xf1c29b,
        skinTone2: 0x8d5524,
        skinTone3: 0xc68642,
        clothingBlue: 0x2563eb,
        clothingBlack: 0x1e293b,
        clothingYellow: 0xf59e0b,
        clothingWhite: 0xf1f5f9,
      };

      const matFloorBase = new THREE.MeshStandardMaterial({ color: colors.floorBase, roughness: 0.9 });
      const matFloorCarpet = new THREE.MeshStandardMaterial({ color: colors.floorCarpet, roughness: 0.95 });
      const matFloorWood = new THREE.MeshStandardMaterial({ color: colors.floorWood, roughness: 0.55 });
      const matWallDark = new THREE.MeshStandardMaterial({ color: colors.wallDark, roughness: 0.7 });
      const matWallBrick = new THREE.MeshStandardMaterial({ color: colors.wallBrick, roughness: 0.85 });
      const matOrangeAccent = new THREE.MeshStandardMaterial({ color: colors.orangeYellow, roughness: 0.4 });
      const matDesk = new THREE.MeshStandardMaterial({ color: colors.orangeYellow, roughness: 0.35 });
      const matWoodSlat = new THREE.MeshStandardMaterial({ color: colors.woodSlat, roughness: 0.5 });
      const matMetalBlack = new THREE.MeshStandardMaterial({ color: colors.metalBlack, roughness: 0.35, metalness: 0.7 });
      const matChairWhite = new THREE.MeshStandardMaterial({ color: colors.chairWhite, roughness: 0.5 });
      const matChairBlack = new THREE.MeshStandardMaterial({ color: colors.chairBlack, roughness: 0.5 });
      const matGlass = new THREE.MeshPhysicalMaterial({
        color: colors.glass,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        transmission: 0.6,
        thickness: 0.4,
      });
      const matPlant = new THREE.MeshStandardMaterial({ color: colors.plantGreen, roughness: 0.6 });
      const matScreenCyan = new THREE.MeshBasicMaterial({ color: colors.screenCyan });
      const matScreenOrange = new THREE.MeshBasicMaterial({ color: colors.screenOrange });

      // Main Group
      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // ----------------------------------------------------
      // A. FOUNDATION PODIUM & FLOORING
      // ----------------------------------------------------
      const baseGeo = new THREE.BoxGeometry(26, 0.8, 26);
      const baseMesh = new THREE.Mesh(baseGeo, matFloorBase);
      baseMesh.position.y = -0.4;
      baseMesh.receiveShadow = true;
      mainGroup.add(baseMesh);

      // Developer Bay Carpet (Front-Left & Center-Left Zone: X < 1.5, Z > -4)
      const carpetGeo = new THREE.BoxGeometry(15.0, 0.05, 18.0);
      const carpetMesh = new THREE.Mesh(carpetGeo, matFloorCarpet);
      carpetMesh.position.set(-5.3, 0.03, 3.8);
      carpetMesh.receiveShadow = true;
      mainGroup.add(carpetMesh);

      // Conference Room Teak Wood Floor (Right / Upper-Right Zone: X > 1.5)
      const woodFloorGeo = new THREE.BoxGeometry(10.6, 0.06, 25.6);
      const woodFloorMesh = new THREE.Mesh(woodFloorGeo, matFloorWood);
      woodFloorMesh.position.set(7.5, 0.04, 0);
      woodFloorMesh.receiveShadow = true;
      mainGroup.add(woodFloorMesh);

      // Lounge Dark Tile Floor (Top-Left / Back-Center Zone: X < 1.5, Z < -4)
      const loungeFloorGeo = new THREE.BoxGeometry(15.0, 0.06, 8.6);
      const loungeFloorMesh = new THREE.Mesh(loungeFloorGeo, matFloorBase);
      loungeFloorMesh.position.set(-5.3, 0.04, -8.5);
      loungeFloorMesh.receiveShadow = true;
      mainGroup.add(loungeFloorMesh);

      // ----------------------------------------------------
      // B. OPEN-FRONT CUTAWAY WALLS (STRICTLY BACK-LEFT X=-13 & BACK-RIGHT Z=-13)
      // ----------------------------------------------------
      // 1. Back-Left Wall (X = -13, runs down-left along Z from -13 to +13)
      const wallBackLeft = new THREE.Mesh(new THREE.BoxGeometry(0.6, 7.2, 26.6), matWallDark);
      wallBackLeft.position.set(-13, 3.6, 0);
      wallBackLeft.castShadow = true;
      wallBackLeft.receiveShadow = true;
      mainGroup.add(wallBackLeft);

      // Yellow 3D Wave Accent Panel mounted on the Back-Left Wall!
      const waveBackPanel = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.4, 9.5), matOrangeAccent);
      waveBackPanel.position.set(-12.55, 3.4, 5.5);
      waveBackPanel.castShadow = true;
      mainGroup.add(waveBackPanel);

      for (let i = 0; i < 6; i++) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 9.2), matOrangeAccent);
        rib.position.set(-12.35, 1.8 + i * 0.65, 5.5);
        mainGroup.add(rib);
      }

      // 2. Back-Right Wall (Z = -13, runs down-right along X from -13 to +13)
      // Left segment behind Lounge (Dark/Light Lounge Wall)
      const wallBackLounge = new THREE.Mesh(new THREE.BoxGeometry(14.8, 7.2, 0.6), matWallDark);
      wallBackLounge.position.set(-5.6, 3.6, -13);
      wallBackLounge.castShadow = true;
      wallBackLounge.receiveShadow = true;
      mainGroup.add(wallBackLounge);

      // Orange Accent inside Private Focus Booth (X: -4 to 2, Z = -12.6)
      const boothOrangeWall = new THREE.Mesh(new THREE.BoxGeometry(4.5, 6.8, 0.2), matOrangeAccent);
      boothOrangeWall.position.set(-0.5, 3.4, -12.65);
      mainGroup.add(boothOrangeWall);

      // Right segment behind Conference Room (Industrial Red-Brown Brick Wall!)
      const wallBackConf = new THREE.Mesh(new THREE.BoxGeometry(11.4, 7.2, 0.6), matWallBrick);
      wallBackConf.position.set(7.5, 3.6, -13);
      wallBackConf.castShadow = true;
      wallBackConf.receiveShadow = true;
      mainGroup.add(wallBackConf);

      // NOTE: FRONT SIDES (X = +13 and Z = +13) ARE COMPLETELY OPEN! NO WALLS BLOCKING THE VIEW!

      // ----------------------------------------------------
      // C. INTERNAL ACOUSTIC WOOD SLATS & GLASS PARTITIONS
      // ----------------------------------------------------
      // Vertical Wood Slat Screen dividing Lounge (Z < -3.5) and Developer Desks (Z > -3.5)
      for (let i = 0; i < 19; i++) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(0.25, 5.8, 0.18), matWoodSlat);
        slat.position.set(-12.2 + i * 0.55, 2.9, -3.8);
        slat.castShadow = true;
        mainGroup.add(slat);
      }

      // Glass Wall Partition separating Developer Zone (X < 2.1) and Conference Room (X > 2.1)
      const glassDivider = new THREE.Mesh(new THREE.BoxGeometry(0.15, 6.2, 24.8), matGlass);
      glassDivider.position.set(2.1, 3.1, -0.2);
      mainGroup.add(glassDivider);

      // Black Metal Mullions along Glass Partition
      for (let z = -12; z <= 12; z += 4) {
        const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.22, 6.2, 0.22), matMetalBlack);
        mullion.position.set(2.1, 3.1, z);
        mainGroup.add(mullion);
      }
      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 24.8), matMetalBlack);
      topRail.position.set(2.1, 6.2, -0.2);
      mainGroup.add(topRail);

      // Signature Yellow Entrance Door Frame on the front glass entrance
      const doorPostL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 5.2, 0.28), matOrangeAccent);
      doorPostL.position.set(2.1, 2.6, 5.2);
      mainGroup.add(doorPostL);
      const doorPostR = new THREE.Mesh(new THREE.BoxGeometry(0.28, 5.2, 0.28), matOrangeAccent);
      doorPostR.position.set(2.1, 2.6, 8.2);
      mainGroup.add(doorPostR);
      const doorLint = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 3.2), matOrangeAccent);
      doorLint.position.set(2.1, 5.2, 6.7);
      mainGroup.add(doorLint);

      // ----------------------------------------------------
      // D. DEVELOPER WORKSPACE (OPEN FRONT-LEFT)
      // ----------------------------------------------------
      function createDeskPod(xCenter: number, zCenter: number, benchLen: number, angleY = 0) {
        const deskGroup = new THREE.Group();

        // Yellow Workbench Top
        const top = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.15, benchLen), matDesk);
        top.position.set(0, 1.45, 0);
        top.castShadow = true;
        top.receiveShadow = true;
        deskGroup.add(top);

        // Black metal legs
        const legOffsets = [
          [-1.4, 0.725, benchLen / 2 - 0.2],
          [1.4, 0.725, benchLen / 2 - 0.2],
          [-1.4, 0.725, -benchLen / 2 + 0.2],
          [1.4, 0.725, -benchLen / 2 + 0.2],
        ];
        legOffsets.forEach(([lx, ly, lz]) => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.45, 0.12), matMetalBlack);
          leg.position.set(lx, ly, lz);
          deskGroup.add(leg);
        });

        // Center Divider
        const divider = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.6, benchLen * 0.94), matOrangeAccent);
        divider.position.set(0, 1.8, 0);
        deskGroup.add(divider);

        // Dual Monitors & Chairs
        const setupCount = Math.floor(benchLen / 2.4);
        for (let s = 0; s < setupCount; s++) {
          const zOff = -benchLen / 2 + 1.3 + s * 2.4;

          // Monitor Side A
          const monStand1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.35, 10), matMetalBlack);
          monStand1.position.set(-0.6, 1.65, zOff);
          deskGroup.add(monStand1);

          const monBody1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.75, 1.25), matChairWhite);
          monBody1.position.set(-0.6, 2.08, zOff);
          deskGroup.add(monBody1);

          const screen1 = new THREE.Mesh(new THREE.PlaneGeometry(1.18, 0.68), s % 2 === 0 ? matScreenCyan : matScreenOrange);
          screen1.rotation.y = -Math.PI / 2;
          screen1.position.set(-0.64, 2.08, zOff);
          deskGroup.add(screen1);

          // Monitor Side B
          const monStand2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.35, 10), matMetalBlack);
          monStand2.position.set(0.6, 1.65, zOff);
          deskGroup.add(monStand2);

          const monBody2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.75, 1.25), matChairWhite);
          monBody2.position.set(0.6, 2.08, zOff);
          deskGroup.add(monBody2);

          const screen2 = new THREE.Mesh(new THREE.PlaneGeometry(1.18, 0.68), matScreenCyan);
          screen2.rotation.y = Math.PI / 2;
          screen2.position.set(0.64, 2.08, zOff);
          deskGroup.add(screen2);

          // Chairs
          createChair(-2.0, zOff, Math.PI / 2, deskGroup);
          createChair(2.0, zOff, -Math.PI / 2, deskGroup);

          // Developers Coding
          if (s % 2 === 0) {
            createSeatedPerson(-1.85, 1.32, zOff, Math.PI / 2, deskGroup, colors.clothingBlack, colors.skinTone1);
          } else {
            createSeatedPerson(1.85, 1.32, zOff, -Math.PI / 2, deskGroup, colors.clothingBlue, colors.skinTone2);
          }
        }

        deskGroup.position.set(xCenter, 0, zCenter);
        deskGroup.rotation.y = angleY;
        mainGroup.add(deskGroup);
      }

      function createChair(x: number, z: number, rotY: number, parent: any) {
        const chairGroup = new THREE.Group();
        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.8), matChairWhite);
        seat.position.y = 0.9;
        chairGroup.add(seat);

        const back = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.8), matChairBlack);
        back.position.set(0.35, 1.4, 0);
        chairGroup.add(back);

        const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.85, 8), matMetalBlack);
        spindle.position.y = 0.45;
        chairGroup.add(spindle);

        const star = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.05, 5), matChairWhite);
        star.position.y = 0.05;
        chairGroup.add(star);

        chairGroup.position.set(x, 0, z);
        chairGroup.rotation.y = rotY;
        parent.add(chairGroup);
      }

      function createSeatedPerson(x: number, y: number, z: number, rotY: number, parent: any, shirtColor: number, skinColor: number) {
        const pGroup = new THREE.Group();
        const matShirt = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.7 });
        const matSkin = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.6 });

        const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.35), matShirt);
        torso.position.y = 0.35;
        pGroup.add(torso);

        const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), matSkin);
        head.position.y = 0.82;
        pGroup.add(head);

        const hair = new THREE.Mesh(new THREE.SphereGeometry(0.23, 10, 10), matMetalBlack);
        hair.position.set(0, 0.88, -0.05);
        pGroup.add(hair);

        pGroup.position.set(x, y, z);
        pGroup.rotation.y = rotY;
        parent.add(pGroup);
      }

      // Bench 1 (Main Long Desk in Dev Bay)
      createDeskPod(-7.5, 4.2, 9.6, 0);

      // Bench 2 (Front Parallel Desk)
      createDeskPod(-2.2, 8.8, 6.2, Math.PI / 2);

      // ----------------------------------------------------
      // E. CONFERENCE & STRATEGY ROOM (OPEN FRONT-RIGHT)
      // ----------------------------------------------------
      const confGroup = new THREE.Group();

      // Oval Yellow Meeting Table (Completely open and visible on right!)
      const confTableGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.16, 32);
      confTableGeo.scale(1.15, 1, 1.85);
      const confTable = new THREE.Mesh(confTableGeo, matDesk);
      confTable.position.set(7.6, 1.45, 2.5);
      confTable.castShadow = true;
      confGroup.add(confTable);

      // Table Pedestals
      const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), matMetalBlack);
      leg1.position.set(7.6, 0.7, 0.5);
      confGroup.add(leg1);

      const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.4, 16), matMetalBlack);
      leg2.position.set(7.6, 0.7, 4.5);
      confGroup.add(leg2);

      // Executive Conference Chairs around the table
      const chairAngles = [0, 0.85, 1.7, 2.45, 3.14, 3.95, 4.8, 5.55];
      chairAngles.forEach((ang, idx) => {
        const cx = 7.6 + Math.cos(ang) * 2.5;
        const cz = 2.5 + Math.sin(ang) * 3.8;
        createChair(cx, cz, -ang + Math.PI, confGroup);

        if (idx === 0 || idx === 2 || idx === 5) {
          createSeatedPerson(cx, 1.32, cz, -ang + Math.PI, confGroup, colors.clothingBlack, colors.skinTone3);
        }
      });

      // Whiteboard Presentation Stand facing front-left against brick wall!
      const boardGroup = new THREE.Group();
      const boardFrame = new THREE.Mesh(new THREE.BoxGeometry(4.0, 2.6, 0.12), matMetalBlack);
      boardFrame.position.set(0, 3.4, 0);
      boardGroup.add(boardFrame);

      const boardCanvas = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 2.4), matChairWhite);
      boardCanvas.position.set(0, 3.4, 0.08);
      boardGroup.add(boardCanvas);

      const chartMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.4), new THREE.MeshBasicMaterial({ color: colors.orangeYellow }));
      chartMesh.position.set(0, 3.4, 0.09);
      boardGroup.add(chartMesh);

      const easelLeg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8, 8), matMetalBlack);
      easelLeg1.position.set(-1.5, 1.4, 0);
      boardGroup.add(easelLeg1);

      const easelLeg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8, 8), matMetalBlack);
      easelLeg2.position.set(1.5, 1.4, 0);
      boardGroup.add(easelLeg2);

      boardGroup.position.set(7.6, 0, -9.8);
      confGroup.add(boardGroup);

      // Presenter standing next to Whiteboard
      const pGroup = new THREE.Group();
      const pTorso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.85, 0.35), new THREE.MeshStandardMaterial({ color: colors.clothingWhite }));
      pTorso.position.y = 1.8;
      pGroup.add(pTorso);
      const pHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), new THREE.MeshStandardMaterial({ color: colors.skinTone2 }));
      pHead.position.y = 2.45;
      pGroup.add(pHead);
      const pLegs = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.35, 0.25), matChairBlack);
      pLegs.position.y = 0.68;
      pGroup.add(pLegs);
      pGroup.position.set(5.2, 0, -7.8);
      confGroup.add(pGroup);

      mainGroup.add(confGroup);

      // ----------------------------------------------------
      // F. BREAKOUT LOUNGE & WATER COOLER (TOP-CENTER)
      // ----------------------------------------------------
      const loungeGroup = new THREE.Group();

      // Modern Dark Sofa
      const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.7, 1.8), matChairBlack);
      sofaBase.position.set(-7.5, 0.45, -8.5);
      loungeGroup.add(sofaBase);

      const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.25, 0.5), matChairBlack);
      sofaBack.position.set(-7.5, 1.35, -9.15);
      loungeGroup.add(sofaBack);

      // Yellow Cushions
      const cushion1 = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.25), matOrangeAccent);
      cushion1.position.set(-9.0, 1.15, -8.8);
      loungeGroup.add(cushion1);

      const cushion2 = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.25), matOrangeAccent);
      cushion2.position.set(-6.0, 1.15, -8.8);
      loungeGroup.add(cushion2);

      // Person relaxing on sofa
      createSeatedPerson(-8.0, 1.3, -8.4, 0, loungeGroup, colors.clothingBlue, colors.skinTone1);

      // Water Cooler Dispenser
      const cooler = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.1, 0.95), matChairWhite);
      cooler.position.set(-4.0, 1.05, -11.5);
      loungeGroup.add(cooler);

      const waterBottle = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 1.1, 16), matGlass);
      waterBottle.position.set(-4.0, 2.65, -11.5);
      loungeGroup.add(waterBottle);

      // Yellow Storage Credenza Cabinet
      const credenza = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.5, 1.3), matOrangeAccent);
      credenza.position.set(0.2, 0.75, -5.5);
      loungeGroup.add(credenza);

      mainGroup.add(loungeGroup);

      // ----------------------------------------------------
      // G. INDOOR POTTED PLANTS
      // ----------------------------------------------------
      function createPlant(x: number, z: number, scale = 1.0) {
        const plantGroup = new THREE.Group();
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.55 * scale, 0.42 * scale, 0.95 * scale, 16), matMetalBlack);
        pot.position.y = 0.48 * scale;
        pot.castShadow = true;
        plantGroup.add(pot);

        for (let f = 0; f < 6; f++) {
          const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5 * scale), matPlant);
          foliage.position.set(
            (Math.sin((f / 6) * Math.PI * 2) * 0.35) * scale,
            (1.0 + Math.random() * 0.35) * scale,
            (Math.cos((f / 6) * Math.PI * 2) * 0.35) * scale
          );
          plantGroup.add(foliage);
        }
        plantGroup.position.set(x, 0, z);
        mainGroup.add(plantGroup);
      }

      createPlant(-11.4, 11.2, 1.3);
      createPlant(-11.4, -1.8, 1.1);
      createPlant(11.4, 11.2, 1.3);
      createPlant(11.4, -11.2, 1.2);
      createPlant(1.2, 11.2, 1.2);
      createPlant(3.6, -11.2, 1.0);

      // 7. Interactive Mouse Parallax
      let targetRotY = 0;
      let targetRotX = 0;
      let currentRotY = 0;
      let currentRotX = 0;

      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotY = x * 0.1;
        targetRotX = y * 0.07;
      };

      window.addEventListener("mousemove", handlePointerMove);

      // 8. Render Animation Loop
      let clock = 0;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        clock += 0.015;

        currentRotY += (targetRotY - currentRotY) * 0.05;
        currentRotX += (targetRotX - currentRotX) * 0.05;

        if (mainGroup) {
          mainGroup.rotation.y = currentRotY;
          mainGroup.rotation.x = currentRotX;
          mainGroup.position.y = Math.sin(clock) * 0.06;
        }

        renderer.render(scene, camera);
      };

      animate();
      setIsLoaded(true);

      // 9. Resize Handling
      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        const asp = w / h;
        const currentD = w < 768 ? 19.5 : 14.8;

        camera.left = -currentD * asp;
        camera.right = currentD * asp;
        camera.top = currentD;
        camera.bottom = -currentD;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }

    initThree();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden select-none">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#171717]/80 backdrop-blur-sm z-20">
          <div className="w-10 h-10 border-2 border-[#F28D52] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#F9F7E3]/70">
            Rendering Three.js Isometric Studio...
          </span>
        </div>
      )}

      {/* Interactive 3D Beacon Hotspots Layer */}
      {isLoaded && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Beacon 1: Engineering Pod (Open Front-Left) */}
          <div
            className="absolute top-[56%] left-[26%] pointer-events-auto group cursor-pointer"
            onClick={() => setActiveHotspot(activeHotspot === "dev" ? null : "dev")}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-emerald-400/30 animate-ping"></span>
              <span className="relative w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#171717] shadow-lg shadow-emerald-400/50"></span>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl bg-[#1b1b1b]/95 border border-white/10 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-95 group-hover:scale-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Lead Engineering Pod
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Next.js &amp; Mobile Dev</div>
              <div className="text-[11px] text-[#F9F7E3]/70 mt-1 leading-tight">
                Senior full-stack developers crafting high-speed code with 100% ownership.
              </div>
            </div>
          </div>

          {/* Beacon 2: Strategy & Sprint Room (Open Front-Right) */}
          <div
            className="absolute top-[48%] right-[24%] pointer-events-auto group cursor-pointer"
            onClick={() => setActiveHotspot(activeHotspot === "conf" ? null : "conf")}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-[#F28D52]/30 animate-ping"></span>
              <span className="relative w-3.5 h-3.5 rounded-full bg-[#F28D52] border-2 border-[#171717] shadow-lg shadow-[#F28D52]/50"></span>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 p-3 rounded-xl bg-[#1b1b1b]/95 border border-[#F28D52]/30 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-95 group-hover:scale-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#F28D52] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28D52] animate-pulse"></span>
                Strategy &amp; Architecture
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Sprint Review &amp; Staging</div>
              <div className="text-[11px] text-[#F9F7E3]/70 mt-1 leading-tight">
                Live demo links shared on Day 2. Direct reviews with zero middleman delays.
              </div>
            </div>
          </div>

          {/* Beacon 3: Breakout Lounge (Top-Center) */}
          <div
            className="absolute top-[28%] left-[48%] pointer-events-auto group cursor-pointer"
            onClick={() => setActiveHotspot(activeHotspot === "lounge" ? null : "lounge")}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-cyan-400/30 animate-ping"></span>
              <span className="relative w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#171717] shadow-lg shadow-cyan-400/50"></span>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl bg-[#1b1b1b]/95 border border-white/10 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-95 group-hover:scale-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Support &amp; Warranty
              </div>
              <div className="text-xs font-bold text-white mt-0.5">30-Day Tech Warranty</div>
              <div className="text-[11px] text-[#F9F7E3]/70 mt-1 leading-tight">
                Zero retainer fees. Direct 1-on-1 lead engineer support guaranteed.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top 3D Interactive Studio Live Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none z-30">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1b1b]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#F9F7E3]/70 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#F28D52] animate-pulse"></span>
          <span>Three.js 3D Interactive Studio</span>
        </div>
      </div>
    </div>
  );
}
