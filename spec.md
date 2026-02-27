# Specification

## Summary
**Goal:** Fix all compilation and build errors in the MriCare+ project so it deploys successfully to the Internet Computer network.

**Planned changes:**
- Audit and fix all Motoko backend compilation errors in `backend/main.mo`
- Remove all Next.js-specific imports and constructs from the React/TypeScript frontend (e.g., `next/image`, `next/font`, App Router APIs)
- Replace Next.js constructs with standard React/Vite-compatible equivalents
- Resolve any TypeScript or module resolution errors in the frontend build

**User-visible outcome:** The application compiles and deploys successfully to the Internet Computer network with all existing features (announcement bar, navbar, hero, procedures, dentistry, partners, services, doctors, consultation form, footer) fully functional.
