import { onBeforeUnmount, ref } from 'vue'

export function useAudioLevel() {
  const level = ref(0)
  const error = ref('')
  let context: AudioContext | null = null
  let analyser: AnalyserNode | null = null
  let stream: MediaStream | null = null
  let animationFrame = 0

  function sample() {
    if (!analyser) return
    const data = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteTimeDomainData(data)

    let sum = 0
    for (const value of data) {
      const centered = (value - 128) / 128
      sum += centered * centered
    }

    const rms = Math.sqrt(sum / data.length)
    level.value = Math.min(1, level.value * 0.75 + rms * 5 * 0.25)
    animationFrame = window.requestAnimationFrame(sample)
  }

  async function start() {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      error.value = 'Microphone access is not available in this browser.'
      return
    }

    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      context = new AudioContext()
      analyser = context.createAnalyser()
      analyser.fftSize = 256
      context.createMediaStreamSource(stream).connect(analyser)
      sample()
    } catch {
      error.value = 'Microphone permission was not granted.'
    }
  }

  function stop() {
    if (animationFrame) window.cancelAnimationFrame(animationFrame)
    stream?.getTracks().forEach(track => track.stop())
    void context?.close()
    stream = null
    context = null
    analyser = null
    level.value = 0
  }

  onBeforeUnmount(stop)

  return {
    level,
    error,
    start,
    stop,
  }
}
