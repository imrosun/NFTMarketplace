import React from 'react'
// INTERNAL IMPORT
import Style from "../styles/index.module.css"
import { HeroSection, 
  Service, BigNFTSlider, 
  Category, Subscribe, Title, 
  Filter, NFTCard, Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex"


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Latest Audio Collection"
        paragraph="Dicover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      
      <FollowerTab />      
      <Slider />
      <Collection />      
      <Title
        heading="Featured NFTs"
        paragraph="Dicover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home