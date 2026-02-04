# Video Files

Upload your video files here to display them on the landing page.

## File Structure

- `video1.mp4` - First video in carousel (required)
- `video2.mp4` - Second video in carousel (optional)
- `video3.mp4` - Third video in carousel (optional)
- `video1-poster.jpg` - Thumbnail/poster image for video1 (optional)
- `video2-poster.jpg` - Thumbnail/poster image for video2 (optional)
- `video3-poster.jpg` - Thumbnail/poster image for video3 (optional)

## Supported Formats

- **MP4** (recommended) - Best browser compatibility
- **WebM** - Alternative format for better compression

## Video Recommendations

- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio**: 16:9
- **File Size**: Keep under 50MB per video for faster loading
- **Codec**: H.264 for MP4
- **Duration**: 2-5 minutes recommended for portfolio showcase

## How to Add Videos

1. Export your video as MP4 format
2. Name it `video1.mp4`, `video2.mp4`, or `video3.mp4`
3. Upload to this directory (`assets/videos/`)
4. (Optional) Create a poster image (thumbnail) and name it `video1-poster.jpg`, etc.
5. The video will automatically appear in the carousel

## Compression Tips

To reduce file size:
- Use HandBrake or similar tool to compress
- Target bitrate: 2-5 Mbps for 1080p
- Use two-pass encoding for better quality

## Notes

- Videos are loaded on-demand (preload="metadata")
- Placeholder will show until video file is uploaded
- Multiple format support: MP4 (primary) and WebM (fallback)
