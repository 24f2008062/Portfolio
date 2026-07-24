import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

function CanvasFallback() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#888",
        fontFamily: "monospace",
        fontSize: "14px",
        zIndex: -1,
      }}
    >
      Loading 3D...
    </div>
  );
}

function CanvasErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#888",
        fontFamily: "monospace",
        fontSize: "14px",
        zIndex: -1,
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>3D unavailable</p>
      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          background: "transparent",
          border: "1px solid #444",
          color: "#888",
          fontFamily: "monospace",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
    </div>
  );
}

export function Canvas3D({ children }) {
  return (
    <ErrorBoundary
      fallbackRender={CanvasErrorFallback}
      onReset={() => {}}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Suspense fallback={<CanvasFallback />}>
          {children}
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}