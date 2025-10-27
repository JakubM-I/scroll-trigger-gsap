# scroll-trigger-gsap

A small demo project showing a test implementation of GSAP (GreenSock Animation Platform) with the ScrollTrigger plugin.

This repository contains a minimal page that demonstrates scroll-driven animations, a simple countdown intro, a sticky section that swaps titles/descriptions/images, and a video that plays during a specific scroll range.

## What you can find here

- `index.html` — demo page wired to GSAP and ScrollTrigger
- `style.css` — basic styles used by the demo
- `script.js` — GSAP animations and ScrollTrigger setup
- `lib/` — included GSAP and ScrollTrigger library files
- `img/`, `video/` — media used in the demo

## How to run

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari).
2. Scroll the page to see the animations. The video in the bottom banner will play automatically during the defined scroll range.

Note: If the video doesn't play correctly due to local file restrictions, serve the folder with a simple local server. For example:

```bash
# from the project root
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Purpose

This project is intended as a quick test and learning playground for GSAP and ScrollTrigger — experimenting with timelines, scrubbed scroll animations, pinned/sticky sections, and controlling media playback based on scroll progress.

## License

Feel free to reuse or adapt this demo for learning or prototyping purposes.
