# 🎨 Theme Customization Guide

This guide explains how to customize the barbershop website's design system for a professional, minimalist, and natural look.

## 🎯 Design Philosophy

Our design system follows these principles:
- **Minimalist**: Clean, uncluttered interfaces with purposeful elements
- **Natural**: Warm, earthy tones that feel welcoming and authentic
- **Professional**: Consistent typography and spacing for credibility
- **Accessible**: High contrast ratios and readable font sizes

## 🎨 Color Customization

### Primary Brand Colors
Edit these variables in `src/App.css` at the top of the `:root` section:

```css
/* Primary Colors - Your main brand color */
--color-primary: #dc3545;        /* Main brand color (red) */
--color-primary-dark: #c82333;   /* Darker shade for hover states */
--color-primary-light: #ff6b7a;  /* Lighter shade for accents */
--color-primary-alpha: rgba(220, 53, 69, 0.1); /* Transparent version */
```

### Alternative Color Schemes

#### Warm & Natural (Recommended)
```css
--color-primary: #8B4513;        /* Saddle Brown */
--color-primary-dark: #654321;   /* Dark Brown */
--color-primary-light: #D2691E;  /* Chocolate */
```

#### Modern & Professional
```css
--color-primary: #2C3E50;        /* Dark Blue-Gray */
--color-primary-dark: #1A252F;   /* Darker Blue-Gray */
--color-primary-light: #34495E;  /* Lighter Blue-Gray */
```

#### Elegant & Sophisticated
```css
--color-primary: #2F4F4F;        /* Dark Slate Gray */
--color-primary-dark: #1C2F2F;   /* Darker Slate */
--color-primary-light: #708090;  /* Slate Gray */
```

## 📝 Typography Customization

### Font Families
```css
/* Primary font for body text and UI elements */
--font-primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Display font for headings and hero text */
--font-display: "Playfair Display", serif;

/* Monospace font for code and technical text */
--font-mono: "Monaco", "Menlo", "Consolas", monospace;
```

### Alternative Font Combinations

#### Classic & Readable
```css
--font-primary: "Source Sans Pro", sans-serif;
--font-display: "Merriweather", serif;
```

#### Modern & Clean
```css
--font-primary: "Roboto", sans-serif;
--font-display: "Montserrat", sans-serif;
```

#### Warm & Friendly
```css
--font-primary: "Open Sans", sans-serif;
--font-display: "Lora", serif;
```

### Font Size Scale
Our type scale follows a harmonious progression:
```css
--font-size-xs: 0.65rem;    /* Small labels, captions */
--font-size-sm: 0.8rem;     /* Secondary text */
--font-size-base: 0.9rem;   /* Body text */
--font-size-md: 1rem;       /* Default size */
--font-size-lg: 1.1rem;     /* Emphasized text */
--font-size-xl: 1.3rem;     /* Small headings */
--font-size-2xl: 1.5rem;    /* Medium headings */
--font-size-3xl: 2rem;      /* Large headings */
--font-size-4xl: 2.5rem;    /* Hero text */
--font-size-5xl: 3rem;      /* Large hero text */
--font-size-6xl: 4.5rem;    /* Extra large display */
```

## 📏 Spacing System

Our spacing follows an 8px grid system:
```css
--space-xs: 0.25rem;   /* 4px - Tight spacing */
--space-sm: 0.5rem;    /* 8px - Small gaps */
--space-md: 0.75rem;   /* 12px - Medium gaps */
--space-lg: 1rem;      /* 16px - Standard spacing */
--space-xl: 1.5rem;    /* 24px - Large spacing */
--space-2xl: 2rem;     /* 32px - Section spacing */
--space-3xl: 3rem;     /* 48px - Large sections */
--space-4xl: 4rem;     /* 64px - Hero spacing */
--space-5xl: 6rem;     /* 96px - Extra large spacing */
```

## 🎭 Theme Variations

### Dark Mode Theme
To create a dark theme, override these variables:
```css
.dark-theme {
  --color-bg-primary: #1a1a1a;
  --color-bg-secondary: #2c2c2c;
  --color-text-primary: #ffffff;
  --color-text-secondary: #cccccc;
  --color-text-muted: #999999;
}
```

### High Contrast Theme
For better accessibility:
```css
.high-contrast {
  --color-primary: #000000;
  --color-text-primary: #000000;
  --color-bg-primary: #ffffff;
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

## 🛠️ Quick Customization Examples

### Change to Earth Tones
```css
:root {
  --color-primary: #8B4513;        /* Saddle Brown */
  --color-primary-dark: #654321;
  --color-bg-secondary: #F5F5DC;   /* Beige background */
  --color-text-primary: #2F1B14;   /* Dark brown text */
}
```

### Modern Minimalist
```css
:root {
  --color-primary: #000000;        /* Pure black */
  --color-primary-dark: #333333;
  --color-bg-secondary: #FAFAFA;   /* Light gray background */
  --border-radius-md: 0px;         /* Sharp corners */
  --shadow-md: none;               /* No shadows */
}
```

### Warm & Welcoming
```css
:root {
  --color-primary: #D2691E;        /* Chocolate */
  --color-primary-dark: #A0522D;
  --color-bg-secondary: #FFF8DC;   /* Cornsilk background */
  --color-text-primary: #2F1B14;
}
```

## 📱 Responsive Design

The theme automatically adapts to different screen sizes. Key breakpoints:
- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 769px`

## 🎨 Brand Guidelines

### Logo Usage
- Maintain clear space around the logo
- Use the primary color for the icon background
- Ensure contrast meets WCAG AA standards

### Color Usage
- Primary color: Call-to-action buttons, links, highlights
- Gray scale: Text hierarchy, backgrounds, borders
- Status colors: Success, warning, error states

### Typography Hierarchy
1. **Display**: Hero headings (font-display, 4xl-6xl)
2. **Heading**: Section titles (font-primary, xl-3xl, semibold)
3. **Body**: Regular text (font-primary, base-lg, normal)
4. **Caption**: Small text (font-primary, xs-sm, normal)

## 🔧 Implementation Tips

1. **Test changes incrementally**: Modify one section at a time
2. **Check contrast**: Use tools like WebAIM's contrast checker
3. **Preview on devices**: Test on mobile, tablet, and desktop
4. **Maintain consistency**: Use design tokens throughout
5. **Document changes**: Keep track of customizations

## 🎯 Best Practices

- **Limit color palette**: Use 2-3 main colors plus neutrals
- **Consistent spacing**: Stick to the spacing scale
- **Readable typography**: Maintain good contrast and sizing
- **Performance**: Optimize font loading and CSS
- **Accessibility**: Follow WCAG guidelines

---

*This theme system provides a solid foundation for creating a professional, minimalist barbershop website that appeals to customers and provides an excellent user experience.*