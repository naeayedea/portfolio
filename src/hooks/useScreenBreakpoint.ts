import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";

import tailwindConfig from "../tailwind.config"; // Your tailwind config

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens

export function useScreenBreakpoint<K extends string>(breakpointKey: K) {
    const breakpointValue = breakpoints[breakpointKey as keyof typeof breakpoints];
    const bool = useMediaQuery({
        query: `(max-width: ${breakpointValue})`,
    });

    return {
        [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
        [`isAbove`]: !bool,
        [`isBelow`]: bool,
    } as Record<K, number> & Record<"isAbove" | "isBelow", boolean>;
}