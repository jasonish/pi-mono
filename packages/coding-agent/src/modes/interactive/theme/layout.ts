// ============================================================================
// Layout Configuration
// ============================================================================
// Global layout settings accessible by all components.
// Similar to theme.ts but for layout properties like padding.
//
// Note: currently this is init-only. Layout changes require a restart.

// Use globalThis to share layout across module loaders (tsx + jiti in dev mode)
const LAYOUT_KEY = Symbol.for("@mariozechner/pi-coding-agent:layout");

interface LayoutConfig {
	outputPaddingX: number;
}

function getLayoutConfig(): LayoutConfig | undefined {
	return (globalThis as Record<symbol, LayoutConfig | undefined>)[LAYOUT_KEY];
}

/**
 * Initialize layout configuration.
 * Call this at startup with settings from SettingsManager.
 */
export function initLayout(outputPaddingX: number): void {
	(globalThis as Record<symbol, LayoutConfig>)[LAYOUT_KEY] = { outputPaddingX };
}

/**
 * Get the current output padding value.
 * Components should call this when rendering.
 */
export function getOutputPaddingX(): number {
	return getLayoutConfig()?.outputPaddingX ?? 1;
}
