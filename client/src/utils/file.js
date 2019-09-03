export const getVideoDuration = (file) => {
  return new Promise((res) => {
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.src = window.URL.createObjectURL(file)

    video.onloadedmetadata = () => {
      res(video.duration)
    }

    video.loadeddata = () => {
      setTimeout(() => window.URL.revokeObjectURL(video.src))
    }
  })
}

export const getImageDimension = (file) => {
  return new Promise((res) => {
    const img = new Image()
    img.src = window.URL.createObjectURL(file)

    img.onload = () => {
      res({
        width: img.width,
        height: img.height
      })
    }
  })
}

export const convertFileSize = (size) => {
  const i = Math.floor(Math.log(size) / Math.log(1024))

  return {
    measure: ['B', 'kB', 'MB', 'GB', 'TB'][i],
    size: (size / Math.pow(1024, i)) * 1,
  }
}