/**
 * Stops all audio elements currently playing on the web page
 * and resets their playback position to the beginning (0).
 */
export function stopAllAudio() {
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    });
}
/**
 * Plays a specific audio element with a gradual volume increase effect (Fade-In).
 * * @param audio - The HTMLAudioElement to be played.
 * @param targetVolume - The desired final volume level (range 0.0 to 1.0).
 * @param step - The amount of volume increase per interval (default: 0.01).
 * @param interval - The time delay between volume increments in milliseconds (default: 100ms).
 */
export function fadeInAudio(audio, targetVolume, step = 0.01, interval = 100) {
    // Ensure other sounds are stopped to prevent overlapping
    stopAllAudio();
    audio.volume = 0;
    audio.play().catch((error) => {
        console.warn("Autoplay was prevented by the browser. Ensure there is user interaction first.", error);
    });
    const fadeIn = setInterval(() => {
        try {
            if (audio.volume < targetVolume) {
                let nextVolume = audio.volume + step;
                // Ensure it doesn't exceed the target or the maximum volume limit (1.0)
                if (nextVolume > targetVolume)
                    nextVolume = targetVolume;
                if (nextVolume > 1)
                    nextVolume = 1;
                audio.volume = Number(nextVolume.toFixed(2));
            }
            else {
                clearInterval(fadeIn);
            }
        }
        catch (error) {
            console.error("Failed to fade-in audio:", error);
            clearInterval(fadeIn);
        }
    }, interval);
}
//# sourceMappingURL=audio-helper.js.map