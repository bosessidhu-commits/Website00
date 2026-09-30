# Optimize gallery images for mobile

## What will change
- Generate responsive WebP and AVIF variants at mobile, tablet, and desktop sizes during the app build.
- Serve each gallery tile through `srcset`/`sizes` so phones download only the image resolution they need.
- Keep deferred loading and add asynchronous decoding to reduce initial page work.
- Preserve the original full-resolution images for the enlarged gallery viewer.

## Technical details
- Add `vite-imagetools` to the existing Vite setup.
- Update gallery image data to include optimized responsive sources alongside the originals.
- Verify the preview at mobile and desktop widths, including opening the enlarged viewer.
