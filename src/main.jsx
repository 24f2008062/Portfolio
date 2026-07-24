import React, { useEffect, useState, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  PanelsTopLeft,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
} from "lucide-react";
import { ThreeDProvider, useThreeD } from "./context/ThreeDContext";
import { Canvas3D } from "./components/three/Canvas3D";
import { TerminalPanel } from "./components/hero/TerminalPanel";
import "./styles.css";