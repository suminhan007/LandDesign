import { mapToNewRange } from "./mapToNewRange";

export function drawWave(data, canvas, audio, samples, barWidth = 2, barGap = 2, defaultColor = "#999", activeColor = "#FF0000", normalize?: boolean,amplify?:boolean) {
    console.log('drawWave',data);
    
    const ctx = canvas.getContext("2d");
    let newData = data;
    if (normalize) {
      const max = Math.max(...data);
      newData = mapToNewRange(data, 0, max);
    }
    if (amplify) {
      const min = Math.min(...data);
      const max = Math.max(...data);
      const newMin = Math.min(...data.filter((i) => i !== min));
      newData = mapToNewRange(
        data.filter((i) => i !== min),
        newMin,
        max
      );
    }

    const width = canvas.width;
    const height = canvas.height;
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const playedSamples = Math.floor((currentTime / duration) * samples);
    ctx.clearRect(0, 0, width, height);

    newData.forEach((value, index) => {
      const x = index * barWidth + index * barGap;
      const y = value * height;

      ctx.fillStyle = index < playedSamples ? activeColor : defaultColor;
      ctx.fillRect(x, height - y, barWidth, y);
    });
  }