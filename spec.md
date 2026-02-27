# Specification

## Summary
**Goal:** Remove all continuous/looping animations site-wide so no element is in constant motion during normal browsing.

**Planned changes:**
- Stop the auto-scrolling marquee in the Partners section so partner logos display statically
- Remove any infinite rotation, pulse, or perpetual CSS keyframe animations on the floating circular element in the Hero section
- Eliminate any other elements across the site that animate in a continuous loop without user interaction
- Preserve hover animations (card lift, image zoom, button scale)
- Preserve scroll-triggered fade-in animations that play once on viewport entry
- Preserve the one-time stats counter animation in the Hero section

**User-visible outcome:** The site has no constantly moving elements during idle browsing; only hover interactions and one-time scroll/load animations remain active.
