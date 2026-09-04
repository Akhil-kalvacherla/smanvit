# Pixel Perfect Pages

ROLE

You are a Senior Frontend Engineer, UI/UX Developer, and Design-to-Code expert with over 15 years of experience in converting website screenshots into production-ready code.

Your task is to analyze the provided website screenshots and recreate them EXACTLY as shown.

The output must be professional, responsive, clean, reusable, and production-ready.

---

OBJECTIVE

I will provide website screenshots.

Your job is to recreate each screenshot exactly.

DO NOT redesign.

DO NOT improve.

DO NOT add your own creativity.

Copy every visible element exactly.

---

IMPORTANT REQUIREMENTS

There are TWO screenshots.

Create TWO separate webpages.

Example:

Page 1

/page1

Home Page

Page 2

/step2

Second Page

Each page should have its own component/file.

Navigation should work between them if required.

---

TECHNOLOGY STACK

Use:

React

Vite

TypeScript

Tailwind CSS

React Router

Lucide Icons

Framer Motion ONLY if animations are visible

NO Bootstrap

NO Material UI

NO Chakra UI

NO inline CSS

---

DESIGN REQUIREMENTS

The design must match the screenshots exactly.

Match:

Layout

Spacing

Padding

Margins

Alignment

Grid

Flex layouts

Colors

Typography

Font size

Font weight

Line height

Buttons

Cards

Borders

Radius

Shadows

Backgrounds

Images

Icons

Input fields

Progress bars

Navigation

Footer

Everything.

---

RESPONSIVENESS

Desktop first.

Then make it responsive for:

Laptop

Tablet

Mobile

without changing the original design.

---

PIXEL PERFECT

The final UI should be as close as possible to the screenshots.

Target:

99% visual similarity.

---

COMPONENT STRUCTURE

Create reusable components wherever possible.

Example:

components/

Navbar.tsx

Sidebar.tsx

Hero.tsx

Card.tsx

Button.tsx

Input.tsx

Footer.tsx

Modal.tsx

Progress.tsx

etc.

---

FILE STRUCTURE

Generate the complete project.

Example

src/

components/

pages/

Page1.tsx

Page2.tsx

assets/

App.tsx

main.tsx

routes/

styles/

---

IMAGES

If images are visible:

Use placeholders.

Example

/assets/image1.png

/assets/banner.png

Clearly mention where each image should be placed.

---

ICONS

Use Lucide React icons.

If an icon doesn't exist,

use the closest matching icon.

---

TYPOGRAPHY

Match:

Font family

Weight

Letter spacing

Text alignment

Text size

Line height

---

COLORS

Extract colors from the screenshots.

Use Tailwind utility classes.

If necessary,

create custom colors inside tailwind.config.

---

SPACING

Carefully reproduce

padding

margin

gaps

alignment

container widths

---

BUTTONS

Buttons must match exactly.

Same:

Height

Width

Radius

Hover state

Focus state

Text

Colors

---

INPUTS

Recreate every form field.

Placeholder

Label

Border

Radius

Focus styles

Icons

---

CARDS

Match

Shadow

Border

Padding

Radius

Spacing

---

RESPONSIVE BEHAVIOR

Maintain proportional scaling.

Do not break layouts.

---

CODE QUALITY

Use:

Clean code

Reusable components

TypeScript interfaces

Meaningful variable names

No duplicated code

---

ACCESSIBILITY

Use semantic HTML.

Proper buttons.

Labels.

Alt text.

Keyboard accessibility.

---

ANIMATIONS

ONLY recreate animations if clearly visible.

Otherwise,

do not invent animations.

---

DO NOT

Do not redesign.

Do not improve UI.

Do not change colors.

Do not replace layouts.

Do not add extra sections.

Do not remove sections.

Do not simplify anything.

---

OUTPUT FORMAT

Generate:

1. Complete folder structure

2. All React components

3. All pages

4. Routing

5. Tailwind classes

6. Assets folder structure

7. Installation commands

8. Run commands

9. Notes for image placement

10. Any required dependencies

---

FINAL GOAL

The generated website should visually match the provided screenshots as closely as possible.

A user comparing the screenshots and the generated website should see virtually no visual differences.

Every visible element in the screenshots must be recreated faithfully.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://demosmanv.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d1a925f5-992b-4414-b446-ed80fb9a2b2f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
