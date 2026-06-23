---
name: design-system-portfolio-framer-website
description: Creates implementation-ready design-system guidance derived from local Figma styles in "Portfolio Framer website".
---

<!-- TYPEUI_SH_MANAGED_START -->

# Portfolio Framer website

## Mission
Document and operationalize the Portfolio Framer website style foundations extracted from Figma so teams can build consistent interfaces quickly.

## Brand
- Product/brand: Portfolio Framer website
- Audience: Designers and engineers building this product
- Product surface: marketing site

## Style Foundations
- Visual style: structured, token-driven, layered, radius Radius/radius/sm/Radius/radius/md/Radius/radius/lg/Radius/radius/xl
- Typography scale: display-xl, display-lg, heading-lg, heading-md, body-lg, body-md, caption-sm
- Color palette: Primitives/neutral/white, Primitives/neutral/black, Primitives/neutral/ink, Primitives/neutral/surface-dark, Primitives/neutral/gray-300, Primitives/neutral/gray-200, Primitives/brand/lime, Primitives/accent/orange, Primitives/accent/blue, Primitives/accent/green, Color/bg/primary, Color/bg/inverse, Color/bg/subtle, Color/text/primary
- Spacing scale: Spacing/spacing/3xs, Spacing/spacing/2xs, Spacing/spacing/xs, Spacing/spacing/sm, Spacing/spacing/md, Spacing/spacing/lg, Spacing/spacing/xl, Spacing/spacing/2xl, Spacing/spacing/3xl, Spacing/spacing/4xl, Spacing/spacing/5xl, Spacing/spacing/6xl, Spacing/spacing/7xl, Layout/page/margin
- Radius/shadow/motion tokens: Shadow/md, Shadow/sm, Shadow/lg, Shadow/xl

## Component Families
- Header
- Drawer
- Footer
- Tags
- Company logo
- AI Item
- work ai - item
- Project
- Breakpoint=Desktop
- Breakpoint=Scroll down
- Breakpoint=Tablet
- Breakpoint=Mobile
- experience card
- skill item

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use extracted color tokens before introducing one-off values: Primitives/neutral/white
- Primitives/neutral/black
- Primitives/neutral/ink
- Primitives/neutral/surface-dark
- Primitives/neutral/gray-300
- Primitives/neutral/gray-200.
- Use shared typography styles for headings
- body text
- and labels.
- Define all interaction states for interactive components: default
- hover
- focus-visible
- active
- disabled
- and loading.

## Rules: Don't
- Do not duplicate existing style tokens with one-off naming.
- Do not remove focus-visible indicators or keyboard support.
- Do not hard-code raw values where local styles or variables already exist.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy
4. variants
5. and interactions.
6. Add accessibility acceptance criteria.
7. Add anti-patterns and migration notes.
8. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule uses "must".
- Every recommendation uses "should".
- Every accessibility rule is testable in implementation.
- Prefer system consistency over local visual exceptions.

## Acceptance Checklist
- Frontmatter exists with valid `name` and `description`.
- Guidance is under 500 lines for `skill.md` when possible.
- Accessibility and interaction states are explicitly documented.
- Rules are concrete, testable, and non-ambiguous.
- Output can be reused in other repositories with only variable replacement.

## TypeUI + Agentic Integration
This `SKILL.md` is intended for `typeui.sh` CLI workflows.
It can later be integrated with agentic tools including Claude Code, OpenCode, Gemini CLI, Cursor, and similar assistants.

<!-- TYPEUI_SH_MANAGED_END -->
