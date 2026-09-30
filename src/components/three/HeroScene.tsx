"use client";
/* eslint-disable react-hooks/purity, react-hooks/immutability -- Three.js scene-graph setup is intentionally imperative */
import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ---------- utilities ---------- */

function useIsMobile() {
  // evaluated during render on client only (component is client-only + dynamic ssr:false)
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);
}

/* ---------- particles ---------- */
function Particles({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = Math.sin(t * 0.25) * 0.25;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#8ea2ff"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- QA nodes + links ---------- */
function NodeField({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        pos: [
          Math.cos((i / 10) * Math.PI * 2) * (3.4 + Math.random()),
          (Math.random() - 0.5) * 4,
          Math.sin((i / 10) * Math.PI * 2) * 2.4 - 1,
        ] as [number, number, number],
        speed: 0.6 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );

  const lineGeo = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i].pos;
      const b = nodes[(i + 1) % nodes.length].pos;
      pts.push(...a, ...b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, [nodes]);

  useFrame((state) => {
    if (!group.current || reduced) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#4f8cff" transparent opacity={0.28} />
      </lineSegments>
      {nodes.map((n, i) => (
        <Float key={i} speed={n.speed} rotationIntensity={0.2} floatIntensity={1.2}>
          <mesh position={n.pos}>
            <octahedronGeometry args={[0.09, 0]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#8fc3ff" : "#2f6bff"}
              emissive={i % 3 === 0 ? "#1e3f6e" : "#16295e"}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ---------- stylised executive avatar (original, abstract-premium) ---------- */
function Avatar({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const targetX = reduced ? 0 : pointer.y * 0.18;
    const targetY = reduced ? Math.sin(t * 0.2) * 0.1 : pointer.x * 0.35 + Math.sin(t * 0.25) * 0.06;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 3, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3, delta);
    group.current.position.y = Math.sin(t * 0.8) * (reduced ? 0 : 0.08);
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* pedestal */}
      <mesh position={[0, -1.55, 0]}>
        <cylinderGeometry args={[1.15, 1.35, 0.12, 48]} />
        <meshStandardMaterial color="#0d0d14" roughness={0.35} metalness={0.8} />
      </mesh>
      <mesh position={[0, -1.47, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.18, 1.32, 64]} />
        <meshBasicMaterial color="#2f6bff" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* torso — modern suit silhouette */}
      <mesh position={[0, -0.55, 0]}>
        <capsuleGeometry args={[0.52, 0.75, 8, 24]} />
        <meshStandardMaterial color="#14141c" roughness={0.55} metalness={0.35} />
      </mesh>
      {/* shirt V */}
      <mesh position={[0, -0.35, 0.42]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.26, 0.6, 0.04]} />
        <meshStandardMaterial color="#e8eaf0" roughness={0.6} metalness={0.05} />
      </mesh>
      {/* shoulders */}
      <mesh position={[-0.52, -0.35, 0]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial color="#14141c" roughness={0.55} metalness={0.35} />
      </mesh>
      <mesh position={[0.52, -0.35, 0]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial color="#14141c" roughness={0.55} metalness={0.35} />
      </mesh>

      {/* neck + head — abstract premium bust */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.14, 0.16, 0.22, 24]} />
        <meshStandardMaterial color="#b08d68" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.68, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#c9a07e" roughness={0.45} metalness={0.08} />
      </mesh>
      {/* hair — neat executive cut */}
      <mesh position={[0, 0.82, -0.04]} scale={[1, 0.72, 1]}>
        <sphereGeometry args={[0.33, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color="#101014" roughness={0.7} metalness={0.15} />
      </mesh>

      {/* halo ring — leadership motif */}
      <mesh position={[0, 0.72, -0.25]} rotation={[0.25, 0, 0]}>
        <torusGeometry args={[0.62, 0.015, 12, 80]} />
        <meshBasicMaterial color="#8fc3ff" transparent opacity={0.5} />
      </mesh>

      {/* chest badge — QA checkpoint */}
      <Float speed={2} floatIntensity={0.6}>
        <mesh position={[0.32, -0.5, 0.48]}>
          <octahedronGeometry args={[0.07, 0]} />
          <meshStandardMaterial color="#8fc3ff" emissive="#14315e" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

/* ---------- floating glass QA panels ---------- */
function GlassPanels({ reduced }: { reduced: boolean }) {
  const panels: { pos: [number, number, number]; rot: [number, number, number]; label: string }[] = [
    { pos: [-2.6, 0.7, -1.2], rot: [0, 0.5, 0], label: "AUTO" },
    { pos: [2.6, 0.4, -1.4], rot: [0, -0.5, 0], label: "QA" },
    { pos: [-2.2, -1.1, 0.4], rot: [0, 0.35, 0], label: "API" },
    { pos: [2.3, -0.9, 0.6], rot: [0, -0.35, 0], label: "TOSCA" },
  ];
  return (
    <group>
      {panels.map((p, i) => (
        <Float key={i} speed={reduced ? 0 : 1.4} rotationIntensity={0.15} floatIntensity={1.4}>
          <mesh position={p.pos} rotation={p.rot}>
            <boxGeometry args={[1.05, 0.62, 0.04]} />
            <meshPhysicalMaterial
              color="#0e0e18"
              transparent
              opacity={0.55}
              roughness={0.15}
              metalness={0.2}
            />
          </mesh>
          <mesh position={[p.pos[0], p.pos[1] - 0.22, p.pos[2] + 0.03]} rotation={p.rot}>
            <boxGeometry args={[0.7, 0.025, 0.005]} />
            <meshBasicMaterial color={i % 2 ? "#8fc3ff" : "#2f6bff"} transparent opacity={0.85} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ---------- liquid obsidian elements (distorting chrome) ---------- */
function LiquidChrome({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  const knot = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!knot.current || reduced) return;
    const t = state.clock.elapsedTime;
    knot.current.rotation.x = t * 0.18;
    knot.current.rotation.y = t * 0.24;
  });

  return (
    <group>
      {/* flanking liquid-metal blobs */}
      <Float speed={reduced ? 0 : 1.8} rotationIntensity={0.4} floatIntensity={2}>
        <mesh position={[-3.1, 0.1, -0.6]}>
          <icosahedronGeometry args={[0.55, 24]} />
          <MeshDistortMaterial
            color="#0b0b12"
            roughness={0.12}
            metalness={0.95}
            distort={0.45}
            speed={reduced ? 0 : 2.2}
          />
        </mesh>
      </Float>
      {!compact && (
        <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.3} floatIntensity={1.6}>
          <mesh position={[3.2, -0.5, -0.9]}>
            <icosahedronGeometry args={[0.7, 24]} />
            <MeshDistortMaterial
              color="#0d1220"
              roughness={0.15}
              metalness={0.9}
              distort={0.4}
              speed={reduced ? 0 : 1.8}
            />
          </mesh>
        </Float>
      )}
      {/* liquid torus knot halo */}
      <mesh ref={knot} position={[0, 1.9, -2.2]}>
        <torusKnotGeometry args={[0.5, 0.16, 120, 20]} />
        <MeshDistortMaterial
          color="#101828"
          roughness={0.2}
          metalness={0.85}
          distort={0.3}
          speed={reduced ? 0 : 1.5}
        />
      </mesh>
      {/* thin chrome ring catching the blue light */}
      <mesh position={[0, -1.44, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.36, 1.4, 64]} />
        <meshBasicMaterial color="#e8eefc" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Rig({ reduced }: { reduced: boolean }) {
  const { camera, pointer } = useThree();
  useFrame((_, delta) => {
    if (reduced) return;
    const tx = pointer.x * 0.5;
    const ty = 1.1 + pointer.y * 0.3;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tx, 2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, ty, 2, delta);
    camera.lookAt(0, 0.1, 0);
  });
  return null;
}

export default function HeroScene() {
  const isMobile = useIsMobile();
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 1.1, 7.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden
    >
      <ambientLight intensity={0.55} />
      <spotLight position={[4, 6, 5]} angle={0.5} intensity={90} color="#2f6bff" />
      <pointLight position={[-5, 2, 3]} intensity={18} color="#4f8cff" />
      <pointLight position={[2, -1, 4]} intensity={10} color="#8fc3ff" />
      <directionalLight position={[0, 4, 6]} intensity={0.7} color="#ffffff" />

      <Avatar reduced={reduced} />
      <LiquidChrome reduced={reduced} compact={isMobile} />
      <GlassPanels reduced={reduced || isMobile} />
      <NodeField reduced={reduced} />
      <Particles count={isMobile ? 160 : 550} reduced={reduced} />

      {/* faint testing grid floor */}
      <gridHelper args={[24, 32, "#2a2a3d", "#15151f"]} position={[0, -1.7, -2]} />

      <ContactShadows position={[0, -1.62, 0]} opacity={0.55} scale={8} blur={2.4} far={3} color="#000" />
      <Rig reduced={reduced} />
    </Canvas>
  );
}
