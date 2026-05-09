# PROJECT_GUARDRAILS.md
## Core Mission: Immersive React Webpage (JavaScript Edition)

> **IMPORTANT:** This is the Source of Truth for all AI agents. Read this before every task. We are strictly using **JavaScript (ES6+)**, not TypeScript.

---

## 1. Architectural Philosophy
* **Immersive but Functional:** Excessive motion is encouraged, but accessibility is non-negotiable[cite: 1].
* **Reactive, Not Proactive:** The UI must respond to user input. No scroll-jacking[cite: 1].
* **Component-First:** Build modular, reusable JS components. Use `PropTypes` or `JSDoc` for data clarity since we are not using TS[cite: 1].

---

## 2. Technical Stack (The JS Stack)
* **Framework:** React (Latest Stable)[cite: 1]
* **Animation:** Framer Motion (Main driver for scroll/morph effects)[cite: 1]
* **Styling:** Tailwind CSS[cite: 1]
* **State:** Zustand (Keep global state thin)[cite: 1]
* **Code Style:** Standard JS. Use JSDoc comments `/** @param ... */` to help AI agents maintain context.

---

## 3. High-Velocity Collaboration (Anti-Collision)
1. **State Isolation:** Do not touch `src/store/` unless the task specifically requires global state changes[cite: 1].
2. **Naming Convention:** Use `PascalCase` for components and `camelCase` for functions/variables.
3. **Collision Warning:** Before modifying `App.js` or `index.js`, the agent must provide a "Summary of Impact"[cite: 1].
4. **Z-Index Map:** 
    * Parallax Background: `-10` to `0`[cite: 1]
    * Main Body: `10`[cite: 1]
    * Modals/Nav: `50`[cite: 1]
    * Custom Cursor: `100`[cite: 1]

---

## 4. Scroll & Motion Guardrails
* **Performance:** Use `useTransform` for smooth scroll-to-value mapping[cite: 1].
* **Safety:** Wrap all heavy animations in an `isMobile` check to prevent crashing mobile browsers[cite: 1].
* **Accessibility:** Respect `prefers-reduced-motion` settings. If motion is off, provide a clean static fallback[cite: 1].

---

## 5. Conflict Resolution
* **Linting:** Run `npm run lint` frequently. AI agents must fix all linting errors before proposing a PR[cite: 1].
* **Feature Flags:** Use constants in `src/config.js` to toggle "excessive" features on/off during development[cite: 1].

---
**Last Updated:** May 2026