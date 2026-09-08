# 🖼️ How to Add Teddy Bear Photos to Your Website

## Quick Guide

The images are configured in the `script.js` file. Here's how to add your own teddy bear photos:

## 📍 Where to Change Images

**File:** `script.js`  
**Location:** Lines 2-141 (the `products` array)

Each product has an `image` property that you need to update.

## 🎯 Two Easy Methods

### Method 1: Use Online Image URLs (Easiest)

1. **Find free teddy bear images:**
   - **Pixabay:** https://pixabay.com/images/search/teddy%20bear/
   - **Unsplash:** https://unsplash.com/s/photos/teddy-bear
   - **Pexels:** https://www.pexels.com/search/teddy%20bear/

2. **Copy the image URL:**
   - Right-click on the image
   - Select "Copy image address" or "Copy image link"

3. **Paste in script.js:**
   ```javascript
   {
       id: 1,
       name: "Cloudy the Dreamer",
       price: 29.99,
       image: "https://your-copied-image-url-here.jpg",  // 👈 Paste here
       rating: 4.9,
       reviews: 234,
       description: "Ultra-soft and huggable, perfect for bedtime cuddles"
   }
   ```

### Method 2: Use Local Images (Recommended for Production)

1. **Create an images folder:**
   - In your project folder, create a folder named `images`
   - Your structure should look like:
   ```
   dreamyteddy/
   ├── images/
   │   ├── teddy1.jpg
   │   ├── teddy2.jpg
   │   ├── teddy3.jpg
   │   └── ... (12 images total)
   ├── index.html
   ├── styles.css
   └── script.js
   ```

2. **Add your images:**
   - Save your teddy bear photos in the `images` folder
   - Name them: `teddy1.jpg`, `teddy2.jpg`, `teddy3.jpg`, etc.

3. **Update script.js:**
   ```javascript
   {
       id: 1,
       name: "Cloudy the Dreamer",
       price: 29.99,
       image: "images/teddy1.jpg",  // 👈 Local path
       rating: 4.9,
       reviews: 234,
       description: "Ultra-soft and huggable, perfect for bedtime cuddles"
   }
   ```

## 📝 Step-by-Step Example

Let's say you want to add an image for "Cloudy the Dreamer":

1. Open `script.js` in any text editor
2. Find the product with `id: 1` (Cloudy the Dreamer)
3. Look for the line: `image: "images/teddy1.jpg",`
4. Replace `"images/teddy1.jpg"` with your image URL or path

**Before:**
```javascript
image: "images/teddy1.jpg",
```

**After (using online URL):**
```javascript
image: "https://cdn.pixabay.com/photo/2020/05/25/17/21/teddy-bear-5218643_1280.jpg",
```

**After (using local image):**
```javascript
image: "images/cloudy-dreamer.jpg",
```

## 🖼️ Image Requirements

- **Format:** JPG, PNG, or WebP
- **Size:** Recommended 600x600 pixels or larger
- **Aspect Ratio:** Square (1:1) works best
- **File Size:** Keep under 500KB for faster loading

## ✅ Quick Checklist

- [ ] Open `script.js`
- [ ] Find the `products` array (starts around line 2)
- [ ] For each product (1-12), update the `image` property
- [ ] Save the file
- [ ] Refresh your browser to see the changes

## 🎨 Example Image Sources

Here are some example URLs you can use (replace with your own):

```javascript
// Example 1: Pixabay
image: "https://cdn.pixabay.com/photo/2020/05/25/17/21/teddy-bear-5218643_1280.jpg",

// Example 2: Unsplash
image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop",

// Example 3: Local file
image: "images/my-teddy-bear.jpg",
```

## 🚨 Troubleshooting

**Images not showing?**
- Check that the image URL is correct
- Make sure the image path is correct (case-sensitive!)
- For local images, ensure the `images` folder exists
- Check browser console for errors (F12)

**Images look blurry?**
- Use higher resolution images (at least 600x600px)
- Use JPG format for photos
- Compress images if file size is too large

## 💡 Pro Tips

1. **Name your images descriptively:** `brown-teddy.jpg`, `pink-teddy.jpg`
2. **Use consistent image sizes** for a uniform look
3. **Optimize images** before uploading (use tools like TinyPNG)
4. **Test locally first** before pushing to GitHub

---

**Need help?** Check the comments in `script.js` - they have detailed instructions too!

