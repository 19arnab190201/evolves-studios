const CLOUDINARY_UPLOAD_PREFIX = "/video/upload/";

/**
 * Builds a Cloudinary video URL with optimal size transformations based on
 * the rendered container dimensions. Uses device pixel ratio for sharpness
 * on retina displays.
 *
 * @param baseUrl - Original Cloudinary video URL (e.g. from projects.json)
 * @param width - Rendered width in CSS pixels
 * @param height - Rendered height in CSS pixels
 * @returns Optimized URL or original if not a Cloudinary URL
 */
export function getCloudinaryVideoUrl(
  baseUrl: string,
  width: number,
  height: number
): string {
  if (!baseUrl.includes("res.cloudinary.com") || !baseUrl.includes(CLOUDINARY_UPLOAD_PREFIX)) {
    return baseUrl;
  }

  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio ?? 1, 2) : 1;
  const w = Math.ceil(width * dpr);
  const h = Math.ceil(height * dpr);

  const transforms = [
    `w_${w}`,
    `h_${h}`,
    "c_fill",
    "q_auto",
    "f_auto",
  ].join(",");

  const idx = baseUrl.indexOf(CLOUDINARY_UPLOAD_PREFIX);
  if (idx === -1) return baseUrl;

  const insertAt = idx + CLOUDINARY_UPLOAD_PREFIX.length;
  return baseUrl.slice(0, insertAt) + transforms + "/" + baseUrl.slice(insertAt);
}
