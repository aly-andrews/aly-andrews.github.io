# Add image and alt text

## Purpose
Add an image to a page using the correct Jekyll path syntax and strong, accessible alt text.

## When to Use
- Adding photos to the about page, work page, or landing page
- Adding new portfolio thumbnails
- Fixing images that don’t load or have weak alt text

## Pre-written Prompt

```
Add this image to [PAGE_FILE]:
- Image file: [ASSET_PATH]
- Placement: [WHERE ON PAGE]
- Alt text intent: [WHAT SHOULD THE ALT COMMUNICATE]

Requirements:
- Use Liquid `relative_url` for paths
- Use descriptive alt text (not “image”)
- Ensure image is responsive and not cropped unless explicitly requested
- If the image may fail to load, include an onerror fallback placeholder like existing site patterns

Show me the updated markup and confirm the path is correct.
```

## Correct path syntax

Use this (preferred):

```html
<img
  src="{{ '/assets/images/your-image.png' | relative_url }}"
  alt="Describe what the user should understand from the image">
```

If you’re using the existing placeholder approach:

```html
<img
  src="{{ '/assets/images/your-image.png' | relative_url }}"
  alt="Describe the image clearly"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
<div class="image-placeholder" style="display:none;">
  <p>Upload image</p>
</div>
```

## Alt text rules of thumb

- Describe the **content and intent**, not the filename
- Keep it short (usually one sentence)
- Avoid “image of” unless needed for clarity
- If purely decorative, consider `alt=""` and `aria-hidden="true"`

Examples:
- “Aly Andrews smiling in a portrait photo”
- “YouTube Silver Play Button award”
- “Photography session portrait in warm light”

## Troubleshooting

- **Image not showing**: verify filename and folder match exactly (case sensitive)
- **Broken path**: ensure you used `relative_url`
- **Cropping**: check CSS rules (object-fit, aspect-ratio) on that component

