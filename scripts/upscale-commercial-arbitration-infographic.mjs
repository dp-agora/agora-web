/**
 * One-off / repeatable: scale the arbitration insight infographic to 2× width
 * for retina-safe display inside the article column (~48rem max).
 * Run: node scripts/upscale-commercial-arbitration-infographic.mjs
 */
import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const target = join(
    root,
    "public/images/insights/commercial-arbitration-venezuela-infographic.png"
);

const OUT_W = 2048;
const OUT_H = 1536; // 768 * (2048/1024)

const meta = await sharp(target).metadata();
if (meta.width && meta.width >= 2000) {
    console.log(`Skip: already ${meta.width}px wide (${target})`);
    process.exit(0);
}

const buf = await sharp(target)
    .resize(OUT_W, OUT_H, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    .sharpen({ sigma: 0.6, m1: 0.7, m2: 3 })
    .png({ compressionLevel: 8, adaptiveFiltering: true })
    .toBuffer();

await sharp(buf).toFile(target);
console.log(`Wrote ${OUT_W}×${OUT_H} PNG to ${target}`);
