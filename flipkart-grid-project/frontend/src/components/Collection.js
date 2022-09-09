import React from 'react'
import './Collection.css'
import NftCard from './NftCard'

function Collection() {
    const nfts=[
        {
            title:'Kamara',
            Description: 'Anime Style Girl',
            src:'../images/img1.jpg',
        },
        {
            title:'Kamara',
            Description: 'Anime Style Girl',
            src:'../images/img2.jpg',
        },
        {
            title:'Kamara',
            Description: 'Anime Style Girl',
            src:'../images/img3.jpg',
        },
    ]
  return (
    <section class="nft-collection">
            <h2 class="heading">Collection</h2>
            
            <div class="cards-container">
                <NftCard 
                imgsrc={nfts[0].src}
                />
                <NftCard 
                imgsrc={nfts[1].src}
                />
                <NftCard 
                imgsrc={nfts[2].src}
                />

            </div>
    </section>
    
  )
}

export default Collection