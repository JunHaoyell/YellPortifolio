// components/main/RotateScreenPrompt.tsx
"use client";

import { useEffect, useState } from "react";

const RotateScreenPrompt = ({ children }: { children: React.ReactNode }) => {
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    handleOrientationChange(); // Check orientation on initial load
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  if (isLandscape === null) {
    return null; // Render nothing until orientation is determined
  }

  if (!isLandscape) {
    return (
      <div style={styles}>
        <p>
          Please rotate your device to landscape mode for the best experience.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "#ffffff",
  opacity: 0.8,
  fontSize: "18px",
  fontWeight: "bold",
};

export default RotateScreenPrompt;
