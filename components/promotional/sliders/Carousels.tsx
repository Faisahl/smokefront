import React from 'react'
import useEmblaCarousel from "embla-carousel-react";

type Props = {}

const Carousels = (props: Props) => {
  let emblaNodes = [].slice.call(document.querySelectorAll('.embla'));
  let options = {
    loop: false,
    dragFree: true,
    slidesToScroll: "auto"
  }
  
  // let emblaCarousels = emblaNodes.map(node => {
  //     return useEmblaCarousel(emblaNodes,options
  // }))
  
  return (
    <div>Carousels</div>
  )
}

export default Carousels