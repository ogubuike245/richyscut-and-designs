# Component Renaming Plan

This document outlines a comprehensive renaming strategy to make component names more descriptive and self-documenting while incorporating the original component names.

## Current vs. Proposed Component Names

### Common Components (Utility/Reusable)

| Current Name | Proposed Name | Description |
|--------------|---------------|-------------|
| `LoadingSpinner` | `LoadingSpinnerIndicator` | More descriptive - indicates it's a visual loading indicator |
| `SkeletonLoader` | `SkeletonContentLoader` | Clarifies it loads skeleton content placeholders |

### Shared Components (Layout/Navigation)

| Current Name | Proposed Name | Description |
|--------------|---------------|-------------|
| `Header` | `SiteHeaderNavigation` | Indicates it's the main site header with navigation |
| `Footer` | `SiteFooterInfo` | Clarifies it's the site footer with information |
| `BackToTop` | `BackToTopScrollButton` | More descriptive - indicates it's a scroll-to-top button |
| `ScrollToTop` | `AutoScrollToTopHandler` | Clarifies it automatically handles scroll-to-top behavior |
| `WhatsAppFloat` | `WhatsAppFloatingContactButton` | Very descriptive - floating contact button for WhatsApp |

### Dashboard Components (Admin/Management)

| Current Name | Proposed Name | Description |
|--------------|---------------|-------------|
| `Dashboard` | `AdminDashboardContainer` | Indicates it's the main admin dashboard container |
| `DashboardHeader` | `DashboardHeaderWithActions` | Clarifies it contains header with action buttons |
| `DailyStatsSection` | `DailyStatsDisplaySection` | More descriptive - section that displays daily statistics |
| `WaitlistSection` | `WaitlistManagementSection` | Indicates it manages the waitlist, not just displays it |
| `WalkinFormSection` | `WalkinCustomerFormSection` | Clarifies it's specifically for walk-in customer forms |
| `WaitlistItem` | `WaitlistCustomerItem` | More descriptive - represents a customer item in waitlist |

### Queue Components (Customer-facing)

| Current Name | Proposed Name | Description |
|--------------|---------------|-------------|
| `BookingPanel` | `OnlineBookingFormPanel` | Very descriptive - online booking form panel |
| `WaitlistSidebar` | `QueueWaitlistSidebar` | Clarifies it's a sidebar showing queue waitlist |

## Benefits of This Naming Convention

1. **Self-Documenting**: Names immediately convey purpose and functionality
2. **Searchability**: Easier to find components when searching codebase
3. **Maintainability**: New developers can understand component purpose quickly
4. **Consistency**: Follows a pattern of `[Context][Component][Type/Purpose]`
5. **Original Name Preservation**: Incorporates original names while adding context

## Implementation Strategy

### Phase 1: Common Components
- Rename utility components first as they have the least dependencies
- Update all import statements

### Phase 2: Shared Components
- Rename layout/navigation components
- Update imports in pages and other components

### Phase 3: Feature-Specific Components
- Rename dashboard and queue components
- Update all related imports and exports

### Phase 4: Update Documentation
- Update README files
- Update component documentation
- Update any references in comments

## File Naming Convention

Component files will follow the same naming pattern:
- `LoadingSpinnerIndicator.js`
- `OnlineBookingFormPanel.js`
- `WhatsAppFloatingContactButton.js`

This ensures consistency between component names and file names.

## Import/Export Updates

All index.js files will be updated to export components with their new names:

```javascript
// Before
export { default as LoadingSpinner } from './LoadingSpinner';

// After
export { default as LoadingSpinnerIndicator } from './LoadingSpinnerIndicator';
```

## Migration Notes

- All imports across the codebase will need to be updated
- Component references in JSX will need to be updated
- CSS class names can remain the same to avoid breaking styles
- This change is purely for code organization and readability