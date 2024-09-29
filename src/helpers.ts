export const hexToRgb = (hex: string) => {
	// Remove the hash if it's there
	hex = hex.replace(/^#/, "");

	// Parse the hex values
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	// Ensure the values are within the valid range
	return [
		Math.min(255, Math.max(0, r)),
		Math.min(255, Math.max(0, g)),
		Math.min(255, Math.max(0, b)),
	] as [number, number, number];
};

export const getBrightness = (rgb: [number, number, number]) =>
	(rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
// Convert hex to HSL and extract hue
export const getHue = (hex: string) => {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h;

	if (max === min) return 0;

	const d = max - min;
	switch (max) {
		case r:
			h = (g - b) / d + (g < b ? 6 : 0);
			break;
		case g:
			h = (b - r) / d + 2;
			break;
		case b:
			h = (r - g) / d + 4;
			break;
	}
	if (h === undefined) return 0;

	return h / 6; // Normalize to [0, 1]
};

export const rgbToHsl = (r: number, g: number, b: number) => {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0,
		s = 0,
		l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};
