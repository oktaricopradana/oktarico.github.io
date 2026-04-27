# Portfolio Website Setup Guide

This is your professional portfolio website showcasing your power systems engineering work and experience.

## What's Included

- **index.html** - Main page with all your content
- **style.css** - Styling with dark theme and animations
- **script.js** - Interactive features and scroll effects

## How to Upload to GitHub

### Step 1: Create Repository
1. Go to github.com and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it exactly: `yourusername.github.io` 
   - Replace `yourusername` with your actual GitHub username
   - Example: if your username is `oktarico`, name it `oktarico.github.io`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop these three files:
   - index.html
   - style.css
   - script.js
3. Scroll down and click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to **Settings** (in your repository)
2. Click **Pages** (left sidebar)
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 2-3 minutes

Your site will be live at: `https://yourusername.github.io`

## Customizing Your Content

### Update Contact Information
In `index.html`, find the contact section (near the bottom) and update:

```html
<a href="mailto:your.email@example.com" class="contact-btn">Email Me</a>
<a href="https://linkedin.com/in/yourprofile" class="contact-btn">LinkedIn</a>
<a href="https://github.com/yourusername" class="contact-btn">GitHub</a>
```

Replace with your actual email, LinkedIn URL, and GitHub username.

### Add Your Photo (Optional)
1. Upload a professional photo to your repository
2. In `index.html`, add this inside the `<div class="hero-content">`:
```html
<img src="your-photo.jpg" alt="Oktarico Susilatama" style="width: 200px; height: 200px; border-radius: 50%; margin-bottom: 2rem; border: 3px solid var(--color-accent);">
```

### Modify Projects
Edit the projects section in `index.html` to add your actual GitHub project links:

```html
<div class="project-card">
    <div class="project-icon">⚡</div>
    <h3>Your Project Name</h3>
    <p>Description of what the project does</p>
    <div class="project-tags">
        <span>Python</span>
        <span>PSCAD</span>
    </div>
    <a href="https://github.com/yourusername/project-name" style="color: var(--color-accent);">View on GitHub →</a>
</div>
```

## Adding Individual Project Pages

For each major project, create separate repositories on GitHub:

1. Create new repository (e.g., `pscad-automation-tools`)
2. Add your project code and a good README.md
3. Link to it from your portfolio

## Tips

- Keep the site updated with new projects
- Use high quality project screenshots
- Write clear descriptions that explain the value of your work
- Make sure all links work before sharing

## Color Scheme
The site uses a dark theme with cyan/orange accents. To change colors, edit the CSS variables at the top of `style.css`:

```css
--color-accent: #00d9ff;  /* Main highlight color */
--color-accent-alt: #ff6b35;  /* Secondary accent */
```

## Questions?
If something breaks or you want to modify the design, let me know and I can help you adjust it.
