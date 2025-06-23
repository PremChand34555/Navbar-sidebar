# Responsive Navbar & Sidebar UI

A modern, responsive navigation system featuring both a navbar and sidebar with dark mode toggle functionality.

## Features

- **Responsive Design**: Adapts seamlessly to mobile and desktop screens
- **Dark Mode Toggle**: Switch between light and dark themes with persistent preference
- **Mobile-Friendly Navigation**: Collapsible sidebar on mobile devices
- **Modern UI Components**: Clean, professional design with smooth animations
- **Accessibility Features**: Focus states, keyboard navigation, and semantic HTML

## Preview

### Desktop View (Light Mode)
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                           [🌙] Dark Mode │
├─────────────┬───────────────────────────────────────────────────────────┤
│             │                                                           │
│   Brand     │  Dashboard                                                │
│             │                                                           │
│  [📊] Dashboard │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │
│  [👤] Profile   │  │ Statistics  │ │Recent       │ │ Tasks       │         │
│  [📁] Projects  │  │             │ │Activity     │ │             │         │
│  [📅] Calendar  │  │ Users: 1,254│ │             │ │ ☑ Project   │         │
│  [✉️] Messages  │  │ New: +12%   │ │ John Doe    │ │ ☐ Review    │         │
│  [⚙️] Settings  │  │ Revenue: $12k│ │ Anna Smith  │ │ ☐ Present   │         │
│             │  │ Conv: 3.2%  │ │ Robert J.   │ │ ☐ Meeting   │         │
│             │  └─────────────┘ └─────────────┘ └─────────────┘         │
│             │                                                           │
│             │                                                           │
│  Dark Mode [☀️] │                                                           │
│             │                                                           │
│  [🚪] Logout    │                                                           │
│             │                                                           │
└─────────────┴───────────────────────────────────────────────────────────┘
```

### Mobile View (Dark Mode)
```
┌─────────────────────────────┐
│ [☰] Brand           [☀️]    │
├─────────────────────────────┤
│                             │
│  Dashboard                  │
│                             │
│  ┌─────────────────────┐    │
│  │     Statistics      │    │
│  │                     │    │
│  │   Users: 1,254      │    │
│  │   New: +12%         │    │
│  │   Revenue: $12k     │    │
│  │   Conv: 3.2%        │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │   Recent Activity   │    │
│  │                     │    │
│  │   John Doe          │    │
│  │   Anna Smith        │    │
│  │   Robert Johnson    │    │
│  └─────────────────────┘    │
│                             │
└─────────────────────────────┘

/* When sidebar is open */
┌─────────────────────────────┐
│ ┌───────────────────────┐   │
│ │  Brand          [✕]   │   │
│ │                       │   │
│ │  [📊] Dashboard       │   │
│ │  [👤] Profile         │   │
│ │  [📁] Projects        │   │
│ │  [📅] Calendar        │   │
│ │  [✉️] Messages        │   │
│ │  [⚙️] Settings        │   │
│ │                       │   │
│ │  Dark Mode [☀️]       │   │
│ │                       │   │
│ │  [🚪] Logout          │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### Features Showcase

- **Responsive Layout**: The sidebar automatically collapses on mobile devices and can be toggled with the menu button
- **Dark Mode Toggle**: Click the sun/moon icon to switch between light and dark themes
- **Interactive Elements**: All buttons feature hover effects and ripple animations when clicked
- **Smooth Transitions**: Color changes and sidebar movements have smooth animations
- **Accessibility**: Full keyboard navigation support and proper focus indicators

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript

## Usage

1. Clone or download this repository
2. Open `index.html` in your browser
3. No build steps required!

## Customization

- Edit the Tailwind configuration in the `<head>` section of `index.html` to change the color scheme
- Modify the navigation items in the sidebar as needed
- Add your own content to the main section

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Flexbox
- CSS Variables
- ES6 JavaScript

## License

MIT License - Feel free to use and modify for your projects! 