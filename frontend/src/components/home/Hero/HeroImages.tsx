const HeroImages = () => {
  return (
    <div className="w-padded mx-auto">
    <figure className="hidden mob:flex flex-col">
      <img
        src="./src/assets/Home/hero/hero-lg.jpg"
        width={2880}
        height={1402}
      />
      <figcaption className="hidden">NIKE HERO IMAGE</figcaption>
    </figure>
    <figure className="flex mob:hidden">
      <img
        src="./src/assets/Home/hero/hero-sm.jpg"
        width={414}
        height={500}
      />
      <figcaption className="hidden">NIKE HERO IMAGE</figcaption>
    </figure>
  </div>
  )
}

export default HeroImages