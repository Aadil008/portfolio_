# Cybersecurity Portfolio Website

This is a modern, interactive portfolio website designed for cybersecurity professionals. The website features a sleek design with animations, interactive elements, and a responsive layout that works on all devices.

## Features

- Animated particle network background
- Terminal-style introduction with typing animation
- Interactive hexagonal skills visualization
- 3D project cards with tilt effects
- Scroll-triggered animations
- Dark/light mode toggle
- Responsive design for all devices
- Cyberpunk-inspired color scheme

## Project Structure

```
portfolio-website/
├── public/              # Public assets
├── src/                 # Source code
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── App.css          # Main application styles
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## Customization

### Personal Information

Edit the data in `src/App.tsx` to update your personal information, including:
- Name and contact details
- Professional summary
- Work experience
- Education
- Skills and competencies
- Projects
- Certifications

### Styling

- Global styles: `src/index.css`
- Component-specific styles: `src/App.css`
- Tailwind configuration: `tailwind.config.js`

### Components

All components are in the `src/components` directory. Each component is responsible for a specific section of the portfolio:

- `Header.tsx`: Contact information and call-to-action buttons
- `TerminalIntro.tsx`: Terminal-style introduction animation
- `NavBar.tsx`: Navigation menu with dark/light mode toggle
- `About.tsx`: About me section
- `HexagonSkills.tsx`: Interactive skills visualization
- `Skills.tsx`: Detailed skills and competencies
- `Experience.tsx`: Work experience timeline
- `Education.tsx`: Educational background
- `Projects.tsx`: Project showcase with 3D cards
- `Certifications.tsx`: Professional certifications
- `Contact.tsx`: Contact form and information

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Parallax Tilt (3D effects)
- GSAP (animations)
- Particles.js (background animation)
- AOS (scroll animations)

## License

This project is open source and available for personal and commercial use.

## Acknowledgements

- Icons from Heroicons
- Fonts from Google Fonts
- Inspiration from modern cybersecurity websites
