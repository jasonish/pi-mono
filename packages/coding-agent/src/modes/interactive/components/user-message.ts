import { Container, Markdown, type MarkdownTheme, Spacer } from "@mariozechner/pi-tui";
import { getOutputPaddingX } from "../theme/layout.js";
import { getMarkdownTheme, theme } from "../theme/theme.js";

/**
 * Component that renders a user message
 */
export class UserMessageComponent extends Container {
	constructor(text: string, markdownTheme: MarkdownTheme = getMarkdownTheme()) {
		super();
		this.addChild(new Spacer(1));
		this.addChild(
			new Markdown(text, getOutputPaddingX(), 1, markdownTheme, {
				bgColor: (text: string) => theme.bg("userMessageBg", text),
				color: (text: string) => theme.fg("userMessageText", text),
			}),
		);
	}
}
