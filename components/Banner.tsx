import { useRef } from "react";
import { useRouter } from "next/router";
import { FlagCloth, type FlagClothInstance } from "flag-cloth/react";

const DEFAULT_LOCALE = "es";

export function Banner() {
  const flagRef = useRef<FlagClothInstance | null>(null);
  const { locale } = useRouter();
  const texture = `/banner-${locale ?? DEFAULT_LOCALE}.png`;

  return (
    <FlagCloth
      ref={flagRef}
      texture={texture}
      canvasWidth="100%"
      canvasHeight="100%"
      width={3}
      height={2.03}
      segments={{ x: 64, y: 40 }}
      attachment={{
        points: [[64, 0], [64, 40]]
      }}
      wind={{
        direction: [-1, 0.08, 0.3],
        strength: 7,
        turbulence: 0.34,
      }}
      interaction={{
        enabled: true,
        dragRadius: 2,
      }}
      lighting={{
        enabled: true,
        direction: [-1, 1, -1],
      }}
      material={{
        shininess: 18,
        ambient: 0.95,
        specular: 1,
        shadowOffsetX: -10,
        shadowOffsetY: 12,
        shadowColor: "#00000000",
        shadowBlur: 0,
      }}
    />
  );
}
