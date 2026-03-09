# SiriusXMca - Setup Instructions

## 1. Install dependencies
```bash
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Replace these files in your project:

| Output File | → Place in your project at |
|---|---|
| `src/App.tsx` | `src/App.tsx` |
| `src/index.css` | `src/index.css` |
| `tailwind.config.js` | `tailwind.config.js` |
| `src/components/Navbar.tsx` | `src/components/Navbar.tsx` |
| `src/components/Hero.tsx` | `src/components/Hero.tsx` |
| `src/components/Services.tsx` | `src/components/Services.tsx` |
| `src/components/About.tsx` | `src/components/About.tsx` |
| `src/components/Testimonials.tsx` | `src/components/Testimonials.tsx` |
| `src/components/Contact.tsx` | `src/components/Contact.tsx` |
| `src/components/Footer.tsx` | `src/components/Footer.tsx` |

## 3. Add images
Place these images in `public/images/`:
- `hero-bg.jpg`
- `service-radio.jpg`
- `service-laptop.jpg`
- `service-gaming.jpg`

## 4. Run
```bash
npm start
```