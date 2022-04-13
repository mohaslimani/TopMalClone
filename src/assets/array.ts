interface myImage {
  jpg: {
    large_image_url: string
  }
}

export interface myArray {
  mal_id: number,
  url: string,
  rank: number,
  score: number,
  title: string,
  images: myImage;
  synopsis: string
  // published: {prop: {from:{year: number}}},
}


