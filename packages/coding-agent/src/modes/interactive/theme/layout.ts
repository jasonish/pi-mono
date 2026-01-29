// ============================================================================
// Layout Configuration
// ============================================================================
// Global layout settings accessible by all components.
// Similar to theme.ts but for layout properties like padding.

// Use globalThis to share layout across module loaders (tsx + jiti in dev mode)
const LAYOUT_KEY = Symbol.for("@mariozechner/pi-coding-agent:layout");

interface LayoutConfig {
	outputPaddingX: number;
}

function getLayoutConfig(): LayoutConfig {
	const config = (globalThis as Record<symbol, LayoutConfig | undefined>)[LAYOUT_KEY];
	if (!config) {
		// Return default if not initialized
		return { outputPaddingX: 1 };
	}
	return config;
}

function setLayoutConfig(config: LayoutConfig): void {
	(globalThis as Record<symbol, LayoutConfig>)[LAYOUT_KEY] = config;
}

/**
 * Initialize layout configuration.
 * Call this at startup with settings from SettingsManager.
 */
export function initLayout(outputPaddingX: number): void {
	setLayoutConfig({ outputPaddingX });
}

/**
 * Update the output padding setting.
 */
export function setOutputPaddingX(padding: number): void {
	const config = getLayoutConfig();
	config.outputPaddingX = padding;
	setLayoutConfig(config);
}

/**
 * Get the current output padding value.
 * Components should call this when rendering.
 */
export function getOutputPaddingX(): number {
	return getLayoutConfig().outputPaddingX;
}
