# 🎵 nur-audio-library

A lightweight TypeScript helper library to manage web audio elements with features like smooth fade-in transitions and instant stop.

🔗 **Live Demo:** [https://nurjamilahh.github.io/nur-audio-library/](https://nurjamilahh.github.io/nur-audio-library/)
![Nur Audio Demo Preview](assets/nur-audio-library-repo.png)

---

## Features

- **`stopAllAudio`**: Instantly pauses all `<audio>` elements in the DOM and resets their playback time to zero.
- **`fadeInAudio`**: Plays a specific audio element with a gradual volume increase to prevent sudden loud sounds.
- **TypeScript Ready**: Full type support for `HTMLAudioElement`.

---

## Installation & Setup

1. **Clone the repository** or copy the `js/audio-helper.ts` file into your project.
2. **Compile TypeScript** (if needed):

   ```bash
   npx tsc
   ```

   The compiled JavaScript will be located in the `dist/` folder.

---

## Usage

1. **Importing the Library**

   **Using TypeScript (Source):**

   ```typescript
   import { fadeInAudio, stopAllAudio } from "./js/audio-helper";
   ```

   **Using JavaScript in Browser (Build):**

   ```javascript
   import { fadeInAudio, stopAllAudio } from "./dist/audio-helper.js";
   ```

2. **Implementation Example**

   ```
   const myAudio = document.getElementById("bg-music") as HTMLAudioElement;

   // Play audio with a smooth fade-in to 70% volume
   fadeInAudio(myAudio, 0.7);

   // Optional: Use this if you need to stop all other sounds manually
   // stopAllAudio();
   ```

---

## API Reference

### `fadeInAudio` Parameters

The `fadeInAudio` function accepts the following arguments to customize the transition:

| Parameter      | Type               | Default    | Description                                      |
| :------------- | :----------------- | :--------- | :----------------------------------------------- |
| `audio`        | `HTMLAudioElement` | _Required_ | The audio element to be played.                  |
| `targetVolume` | `number`           | _Required_ | Final volume level (range 0.0 to 1.0).           |
| `step`         | `number`           | `0.01`     | The amount of volume increase per interval.      |
| `interval`     | `number`           | `100`      | Delay between volume increments in milliseconds. |

---

## Folder Structure

- **js/**: Contains the original TypeScript source code (audio-helper.ts).
- **dist/**: Contains the compiled production-ready JavaScript files.
- **assets/**: Contains audio files (e.g., rocket-396890.mp3).
- **index.html**: A demo page to test the audio functions.

---

## License

This project is licensed under the MIT License - feel free to use it in your own projects!

---

## Contact & Connect
Thank you for checking out my learning notes! If you have any questions or would like to discuss anything, feel free to reach me at:

<p align="left">
  <a href="https://github.com/nurjamilahh">
    <img src="https://img.shields.io/badge/NURJAM_PROJECTS-24292e?style=for-the-badge&logo=github&logoColor=white" alt="Nurjam Projects" height="30">
  </a>
  <a href="https://linkedin.com/in/nur-jamilah-harahap" target="blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:worknurjam@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" height="30">
  </a>
  <a href="https://wa.me/6285782602672">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" height="30">
  </a>
</p>

**Scan atau klik QR di bawah untuk terhubung di LinkedIn:**
<p align="left">
<a href="https://www.linkedin.com/in/nur-jamilah-harahap">
 <img src="https://lh3.googleusercontent.com/d/1G-v6Kl-hBczhH3HbuoGAQ2SLMyHA4ggW" width="150" alt="LinkedIn QR">
</a>
</p>

---

_This is part of the **Nurjam Projects** collection — exploring code, one experiment at a time._
