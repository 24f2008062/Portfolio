import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThreeDContext = createContext(null);

export function ThreeDProvider({ children }) {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [webglSupported, setWebglSupported] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        setWebglSupported(!!gl);
      } catch {
        setWebglSupported(false);
      }
    };

    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
    };

    checkWebGL();
    checkReducedMotion();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener?.("change", handleChange);

    return () => {
      mediaQuery.removeEventListener?.("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const enabled = webglSupported && !prefersReducedMotion;
    setShouldRender3D(enabled);
  }, [webglSupported, prefersReducedMotion]);

  const value = useMemo(
    () => ({
      shouldRender3D,
      webglSupported,
      prefersReducedMotion,
    }),
    [shouldRender3D, webglSupported, prefersReducedMotion]
  );

  return (
    <ThreeDContext.Provider value={value}>
      {children}
    </ThreeDContext.Provider>
  );
}

export function useThreeD() {
  const context = useContext(ThreeDContext);
  if (!context) {
    throw new Error("useThreeD must be used within a ThreeDProvider");
  }
  return context;
}