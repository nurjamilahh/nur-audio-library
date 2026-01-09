/**
 * Menghentikan semua elemen audio yang sedang diputar di halaman web
 * dan mengembalikan waktunya ke posisi awal (0).
 */
export function stopAllAudio(): void {
  const allAudios = document.querySelectorAll("audio");
  allAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

/**
 * Memainkan audio tertentu dengan efek volume yang meningkat secara bertahap (Fade-In).
 * * @param audio - Elemen HTMLAudioElement yang akan dimainkan.
 * @param targetVolume - Volume akhir yang diinginkan (rentang 0.0 sampai 1.0).
 * @param step - Besar kenaikan volume setiap interval (default: 0.01).
 * @param interval - Jeda waktu antar kenaikan volume dalam milidetik (default: 100ms).
 */
export function fadeInAudio(
  audio: HTMLAudioElement,
  targetVolume: number,
  step: number = 0.01,
  interval: number = 100
): void {
  // Pastikan suara lain berhenti agar tidak bertabrakan
  stopAllAudio();

  audio.volume = 0;
  audio.play().catch((error) => {
    console.warn(
      "Autoplay dicegah oleh browser. Pastikan ada interaksi user terlebih dahulu.",
      error
    );
  });

  const fadeIn = setInterval(() => {
    try {
      if (audio.volume < targetVolume) {
        let nextVolume = audio.volume + step;

        // Pastikan tidak melebihi target atau batas maksimal volume (1.0)
        if (nextVolume > targetVolume) nextVolume = targetVolume;
        if (nextVolume > 1) nextVolume = 1;

        audio.volume = Number(nextVolume.toFixed(2));
      } else {
        clearInterval(fadeIn);
      }
    } catch (error) {
      console.error("Gagal melakukan fade-in audio:", error);
      clearInterval(fadeIn);
    }
  }, interval);
}
