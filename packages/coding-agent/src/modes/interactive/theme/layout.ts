// ============================================================================
// Layout Configuration
// ============================================================================
// Global layout settings accessible by all components.
//
// Note: currently this is init-only. Layout changes require a restart.

let outputPaddingX = 1;

/**
 * Initialize layout configuration.
 * Call this at startup with settings from SettingsManager.
 */
export function initLayout(paddingX: number): void {
	outputPaddingX = paddingX;
}

/**
 * Get the current output padding value.
 */
export function getOutputPaddingX(): number {
	return outputPaddingX;
}
