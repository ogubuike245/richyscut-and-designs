# Component Organization Guide

This document explains the new organized structure of components in this project to make development and debugging easier.

## 📁 Folder Structure

```
src/components/
├── shared/           # Components used across multiple pages
├── common/           # Utility components (loading, skeleton, etc.)
├── dashboard/        # Dashboard page specific components
├── queue/           # Queue/Booking page specific components
└── README.md        # This documentation
```

## 🔄 Component Categories

### 📱 Shared Components (`/shared`)
Components that appear on multiple pages or are part of the global layout:
- **SiteHeaderNavigation.js** - Navigation header (all pages)
- **SiteFooterInfo.js** - Site footer (all pages)
- **BackToTopScrollButton.js** - Scroll to top button (multiple pages)
- **AutoScrollToTopHandler.js** - Auto scroll utility (route changes)
- **WhatsAppFloatingContactButton.js** - WhatsApp floating button (all pages)

### 🛠️ Common Components (`/common`)
Utility components that can be reused anywhere:
- **LoadingSpinnerIndicator.js** - Loading spinner with various sizes
- **SkeletonContentLoader.js** - Skeleton loading components (cards, lists, stats)

### 📊 Dashboard Components (`/dashboard`)
Components specific to the Dashboard page:
- **AdminDashboardContainer.js** - Main dashboard component
- **DashboardHeaderWithActions.js** - Dashboard header with refresh
- **DailyStatsDisplaySection.js** - Statistics display
- **WaitlistManagementSection.js** - Queue management section
- **WalkinCustomerFormSection.js** - Walk-in customer form
- **WaitlistCustomerItem.js** - Individual queue item

### 📅 Queue Components (`/queue`)
Components specific to the Queue/Booking page:
- **OnlineBookingFormPanel.js** - Main booking form
- **QueueWaitlistSidebar.js** - Current queue sidebar

## 📦 Import Examples

### Using Shared Components
```javascript
import { SiteHeaderNavigation, SiteFooterInfo, BackToTopScrollButton } from '../components/shared';
```

### Using Common Components
```javascript
import { LoadingSpinner, SkeletonStats } from '../components/common';
```

### Using Dashboard Components
```javascript
import { DashboardHeader, DailyStatsSection } from '../components/dashboard';
```

### Using Queue Components
```javascript
import { BookingPanel, WaitlistSidebar } from '../components/queue';
```

## 🎯 Benefits

1. **Easy Identification** - Quickly know which components belong to which page
2. **Better Organization** - Logical grouping of related components
3. **Improved Debugging** - Easier to locate and fix page-specific issues
4. **Cleaner Imports** - Use destructured imports from index files
5. **Scalability** - Easy to add new components in the right category

## 🔧 Development Guidelines

### When adding new components:

1. **Shared Components** - If used on 2+ pages or part of global layout
2. **Common Components** - If it's a utility/reusable component
3. **Page-Specific** - If only used on one specific page

### Naming Convention:
- Use PascalCase for component files
- Use descriptive names that indicate purpose
- Add page prefix for page-specific components when needed

### Import Guidelines:
- Always use the index.js exports when possible
- Update index.js when adding new components
- Keep relative imports consistent (../ for going up directories)

## 🚀 Migration Notes

All existing imports have been updated to use the new structure. The application should work exactly the same as before, but with much better organization for future development.