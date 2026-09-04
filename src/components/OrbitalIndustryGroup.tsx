import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls, Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import {
  ShoppingCart,
  Scale,
  Landmark,
  Home as HomeIcon,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Truck,
  Building,
  Hotel,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryItem {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  radius: number; // Distance from center
  speed: number; // Orbital speed modifier
  initialAngle: number; // In radians
  yOffset: number; // Vertical variance in 3D space
  color: string; // Primary color hex or CSS
  glowColor: string; // Hex glow
}

const DEFAULT_INDUSTRIES: IndustryItem[] = [
  // --- ORBIT 1: INNER RING (Radius 2.7, 3 Industries @ 0°, 120°, 240°) ---
  {
    id: "saas",
    name: "SaaS & Tech",
    icon: Cpu,
    description: "Multi-tenant cloud architecture, subscription engines, and developer SDKs.",
    radius: 2.7,
    speed: 0.1,
    initialAngle: 0,
    yOffset: 0,
    color: "#06B6D4",
    glowColor: "#22D3EE",
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: Landmark,
    description: "Neobanking infrastructure, fraud prevention ML, and PCI-DSS compliance.",
    radius: 2.7,
    speed: 0.1,
    initialAngle: (2 * Math.PI) / 3, // 120°
    yOffset: 0,
    color: "#10B981",
    glowColor: "#34D399",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "HIPAA-compliant EHR systems, telemedicine portals, and patient analytics.",
    radius: 2.7,
    speed: 0.1,
    initialAngle: (4 * Math.PI) / 3, // 240°
    yOffset: 0,
    color: "#F43F5E",
    glowColor: "#FB7185",
  },

  // --- ORBIT 2: MID-INNER RING (Radius 3.9, 3 Industries @ 30°, 150°, 270°) ---
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    description: "Omnichannel platforms, headless commerce, inventory AI, and payment gateways.",
    radius: 3.9,
    speed: 0.1,
    initialAngle: (30 * Math.PI) / 180, // 30°
    yOffset: 0,
    color: "#3B82F6",
    glowColor: "#60A5FA",
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: GraduationCap,
    description: "LMS platforms, virtual classrooms, gamified modules, and AI grading tools.",
    radius: 3.9,
    speed: 0.1,
    initialAngle: (150 * Math.PI) / 180, // 150°
    yOffset: 0,
    color: "#A855F7",
    glowColor: "#C084FC",
  },
  {
    id: "government",
    name: "Government",
    icon: Building,
    description: "E-governance portals, citizen service apps, and high-security data vaults.",
    radius: 3.9,
    speed: 0.1,
    initialAngle: (270 * Math.PI) / 180, // 270°
    yOffset: 0,
    color: "#3B82F6",
    glowColor: "#93C5FD",
  },

  // --- ORBIT 3: MID-OUTER RING (Radius 5.1, 3 Industries @ 60°, 180°, 300°) ---
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "IoT telemetry dashboards, predictive maintenance, and supply chain tracking.",
    radius: 5.1,
    speed: 0.1,
    initialAngle: (60 * Math.PI) / 180, // 60°
    yOffset: 0,
    color: "#F97316",
    glowColor: "#FB923C",
  },
  {
    id: "legal",
    name: "Legal & Consulting",
    icon: Scale,
    description:
      "Document automation, client portals, AI contract analysis, and compliance engines.",
    radius: 5.1,
    speed: 0.1,
    initialAngle: (180 * Math.PI) / 180, // 180°
    yOffset: 0,
    color: "#F59E0B",
    glowColor: "#FBBF24",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Hotel,
    description: "Booking engines, GDS integrations, and personalized itinerary platforms.",
    radius: 5.1,
    speed: 0.1,
    initialAngle: (300 * Math.PI) / 180, // 300°
    yOffset: 0,
    color: "#38BDF8",
    glowColor: "#7DD3FC",
  },

  // --- ORBIT 4: OUTER RING (Radius 6.3, 3 Industries @ 90°, 210°, 330°) ---
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description: "Fleet tracking, route optimization, real-time dispatching, and warehouse AI.",
    radius: 6.3,
    speed: 0.1,
    initialAngle: (90 * Math.PI) / 180, // 90°
    yOffset: 0,
    color: "#8B5CF6",
    glowColor: "#A78BFA",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: HomeIcon,
    description: "PropTech platforms, 3D virtual tours, tenant portals, and MLS integrations.",
    radius: 6.3,
    speed: 0.1,
    initialAngle: (210 * Math.PI) / 180, // 210°
    yOffset: 0,
    color: "#EF4444",
    glowColor: "#F87171",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    icon: Zap,
    description: "Smart grid management, renewable energy dashboards, and utility telemetry.",
    radius: 6.3,
    speed: 0.1,
    initialAngle: (330 * Math.PI) / 180, // 330°
    yOffset: 0,
    color: "#EAB308",
    glowColor: "#FDE047",
  },
];

// Single Orbital Node Component
interface OrbitalNodeProps {
  item: IndustryItem;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  onSelect: (item: IndustryItem) => void;
  isAnyHovered: boolean;
}

function OrbitalNode({ item, hoveredId, setHoveredId, onSelect, isAnyHovered }: OrbitalNodeProps) {
  const meshRef = useRef<THREE.Group>(null!);
  const currentAngle = useRef(item.initialAngle);
  const currentScale = useRef(1);

  const isHovered = hoveredId === item.id;
  const Icon = item.icon;

  useFrame((_state, delta) => {
    if (!meshRef.current) return;

    // Smooth, gentle orbital rotation. Slows down uniformly on hover for easy clicking
    const speedFactor = isAnyHovered ? 0.25 : 1.0;
    currentAngle.current += delta * item.speed * speedFactor;

    // Calculate exact orbital coordinates on the ring plane
    const x = Math.cos(currentAngle.current) * item.radius;
    const z = Math.sin(currentAngle.current) * item.radius;
    const y = 0; // Pure, clean orbit along the ring line!

    meshRef.current.position.set(x, y, z);

    // Target scale calculation on hover
    const targetScale = isHovered ? 1.35 : isAnyHovered ? 0.9 : 1.0;
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, delta * 8);
    meshRef.current.scale.setScalar(currentScale.current);
  });

  return (
    <group ref={meshRef}>
      {/* 3D Glowing Sphere Base */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId(item.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHoveredId(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(item);
        }}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={isHovered ? item.glowColor : item.color}
          emissive={isHovered ? item.glowColor : item.color}
          emissiveIntensity={isHovered ? 2.2 : 0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Pulsing Aura Ring on Hover */}
      {isHovered && (
        <mesh>
          <ringGeometry args={[0.3, 0.36, 32]} />
          <meshBasicMaterial
            color={item.glowColor}
            side={THREE.DoubleSide}
            transparent
            opacity={0.85}
          />
        </mesh>
      )}

      {/* HTML Icon & Badge Overlay */}
      <Html
        position={[0, 0, 0]}
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
        style={{ pointerEvents: "auto" }}
      >
        <div
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onSelect(item)}
          className={`flex flex-col items-center cursor-pointer select-none transition-all duration-300 ${
            isHovered ? "scale-125 z-50" : "scale-100 hover:scale-110"
          }`}
        >
          {/* Icon Orb */}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-11 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${
              isHovered
                ? "bg-blue-600 text-white border-blue-300 shadow-blue-500/50 ring-4 ring-blue-400/30"
                : "bg-white/95 backdrop-blur-md text-slate-800 border-slate-200 hover:border-blue-400 shadow-sm"
            }`}
            style={{
              boxShadow: isHovered ? `0 0 20px ${item.glowColor}` : "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm" />
          </div>

          {/* Industry Name Pill */}
          <div
            className={`mt-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-tight whitespace-nowrap transition-all duration-300 shadow-sm border ${
              isHovered
                ? "bg-blue-600 text-white border-blue-400 scale-105"
                : "bg-white/95 text-slate-800 border-slate-200/90"
            }`}
          >
            {item.name}
          </div>
        </div>
      </Html>
    </group>
  );
}

// Concentric Orbital Ring Planes (Radii: 2.7, 3.9, 5.1, 6.3 matching the 4 orbits)
function OrbitalRings() {
  return (
    <group>
      {/* Orbit 1: Inner Ring (Radius 2.7) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.68, 2.72, 128]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
      {/* Orbit 2: Mid-Inner Ring (Radius 3.9) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.88, 3.92, 128]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
      {/* Orbit 3: Mid-Outer Ring (Radius 5.1) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.08, 5.12, 128]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
      {/* Orbit 4: Outer Ring (Radius 6.3) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[6.28, 6.32, 128]} />
        <meshBasicMaterial color="#EAB308" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Central 3D Core Sphere with SMANV Brand
function CentralCore({ hoveredItem }: { hoveredItem: IndustryItem | null }) {
  const coreRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Core Glowing Mesh */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial
          color={hoveredItem ? hoveredItem.glowColor : "#2563EB"}
          emissive={hoveredItem ? hoveredItem.color : "#1D4ED8"}
          emissiveIntensity={hoveredItem ? 1.8 : 1.0}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Glass Shell */}
      <mesh scale={1.15}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshPhysicalMaterial
          color="#60A5FA"
          transparent
          opacity={0.25}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
        />
      </mesh>

      {/* Central HTML Logo Badge */}
      <Html center position={[0, 0, 0]} distanceFactor={8} style={{ pointerEvents: "none" }}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center border-2 border-blue-400 select-none overflow-hidden p-2">
          <img src="/assets/logo.jpg" alt="SMANV Logo" className="w-full h-full object-contain" />
        </div>
      </Html>
    </group>
  );
}

// Dynamic Responsive Camera Rig for Mobile Optimization
function ResponsiveCameraRig() {
  const { camera, size } = useThree();

  useFrame(() => {
    const isMobile = size.width < 640;
    const isTablet = size.width >= 640 && size.width < 1024;

    // Adjust camera distance z and elevation y based on screen width
    const targetZ = isMobile ? 14.5 : isTablet ? 11.5 : 9.5;
    const targetY = isMobile ? 3.5 : isTablet ? 2.5 : 2.0;

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
    camera.updateProjectionMatrix();
  });

  return null;
}

// Main Orbital Scene inside Canvas
interface SceneProps {
  industries: IndustryItem[];
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  onSelect: (item: IndustryItem) => void;
}

function Scene({ industries, hoveredId, setHoveredId, onSelect }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const hoveredItem = useMemo(
    () => industries.find((i) => i.id === hoveredId) || null,
    [industries, hoveredId],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle parallax tilt
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.15,
      0.05,
    );
  });

  return (
    <group ref={groupRef}>
      <ResponsiveCameraRig />
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3B82F6" />

      <Sparkles count={50} scale={12} size={2.2} speed={0.3} color="#60A5FA" opacity={0.5} />

      <CentralCore hoveredItem={hoveredItem} />

      {/* Shared Orbital Plane tilted at a comfortable 3D angle */}
      <group rotation={[Math.PI / 6, 0, 0]}>
        <OrbitalRings />

        {/* Render Dynamic Industry Nodes */}
        {industries.map((item) => (
          <OrbitalNode
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            onSelect={onSelect}
            isAnyHovered={hoveredId !== null}
          />
        ))}
      </group>
    </group>
  );
}

// React Class Error Boundary for 3D Canvas Safety
class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown) {
    console.warn("3D Orbital Canvas encountered an error, rendering fallback:", error);
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export interface OrbitalIndustryGroupProps {
  industries?: IndustryItem[];
  onSelectIndustry?: (industry: IndustryItem) => void;
  className?: string;
}

export default function OrbitalIndustryGroup({
  industries = DEFAULT_INDUSTRIES,
  onSelectIndustry,
  className = "",
}: OrbitalIndustryGroupProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(
    industries[0] ?? DEFAULT_INDUSTRIES[0]!,
  );

  const handleSelect = (item: IndustryItem) => {
    setSelectedIndustry(item);
    if (onSelectIndustry) {
      onSelectIndustry(item);
    }
  };

  const activeDisplay = useMemo(
    () => industries.find((i) => i.id === hoveredId) || selectedIndustry,
    [industries, hoveredId, selectedIndustry],
  );

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 text-slate-900 shadow-xl shadow-slate-200/60 sm:p-8 ${className}`}
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-4 max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          3D Interactive Industry Orbit
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Solutions Across Every Industry
        </h2>
        <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:text-sm">
          Hover or tap on any orbital sector node to explore specialized capabilities and
          architecture.
        </p>
      </div>

      {/* Quick Mobile Sector Selector Bar */}
      <div className="no-scrollbar relative z-10 mb-2 flex gap-2 overflow-x-auto pb-2 sm:hidden">
        {industries.map((ind) => {
          const Icon = ind.icon;
          const isActive = activeDisplay.id === ind.id;
          return (
            <button
              type="button"
              key={ind.id}
              onClick={() => handleSelect(ind)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-medium transition-all ${
                isActive
                  ? "border-blue-400 bg-blue-600 text-white shadow-md"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Canvas Container */}
      <div className="relative h-[380px] w-full sm:h-[500px]">
        <CanvasErrorBoundary
          fallback={
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  const isActive = activeDisplay.id === ind.id;
                  return (
                    <button
                      type="button"
                      key={ind.id}
                      onClick={() => handleSelect(ind)}
                      onMouseEnter={() => setHoveredId(ind.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-3 transition-all ${
                        isActive
                          ? "scale-105 border-blue-400 bg-blue-50 text-blue-900 shadow-md"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-blue-600" />
                      <span className="text-xs font-semibold">{ind.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 2, 9.5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            className="h-full w-full cursor-grab active:cursor-grabbing"
          >
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <Scene
                industries={industries}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                onSelect={handleSelect}
              />
            </Float>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 3}
              rotateSpeed={0.5}
            />
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* Active Industry Detail Card Drawer */}
      {activeDisplay && (
        <div className="relative z-10 mt-2 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-lg backdrop-blur-md transition-all duration-300 sm:flex-row sm:p-6">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
              style={{ backgroundColor: activeDisplay.color }}
            >
              <activeDisplay.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">{activeDisplay.name}</h3>
                {hoveredId === activeDisplay.id && (
                  <span className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600">
                    Hovered
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-snug sm:text-sm">
                {activeDisplay.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleSelect(activeDisplay)}
            className="shrink-0 cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-500"
          >
            Explore {activeDisplay.name} →
          </button>
        </div>
      )}
    </div>
  );
}
