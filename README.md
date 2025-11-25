# Sign-Up Form Project

This is a sign-up form project from The Odin Project's Intermediate HTML and CSS course.

## Setup Complete

The HTML and CSS files have been created with all the required specifications:
- Semi-transparent logo section overlay
- Form validation styling using `:invalid` and `:focus` pseudo-classes
- Create Account button color: `#596D48`
- Default input borders: `#E5E7EB`
- Blue focus states with box-shadow

## Required Assets to Download

Before viewing the project, you need to download these assets:

### 1. Background Image
- Find a high-quality background image (suggested: nature/landscape photo)
- Download from [Unsplash](https://unsplash.com/) or similar free stock photo site
- Save as `background-image.jpg` in the project root
- Update the photo credit in `index.html` with photographer name and link

### 2. Odin Logo
- Download the Odin logo from [The Odin Project](https://www.theodinproject.com/)
- Save as `odin-logo.png` in the project root

### 3. Font (Optional)
- The CSS uses a fallback to Norse Bold from Google Fonts
- For the authentic Norse Bold font, you may need to download it separately
- Place the font file in a `fonts/` directory and update the `@import` in `style.css`

## Viewing the Project

1. Make sure all assets are downloaded and placed in the correct locations
2. Open `index.html` in your web browser
3. Test the form validation by:
   - Focusing on inputs (should see blue border)
   - Entering invalid passwords (should see red border)
   - Entering mismatched passwords (both should show red border)

## Git Repository

The repository has been initialized. To make your first commit:

```bash
cd signup-form
git add .
git commit -m "Initial commit: Add sign-up form HTML and CSS"
```

## Notes

- Mobile responsiveness is not required for this project
- Password matching validation is intentionally not implemented (per project requirements)
- Focus is on desktop layout and form styling
