import React from 'react'
import './NftCard.css'




function NftCard(props) {

    const isrc=props.imgsrc;

  return (
    <div class="nft-card">
        <a href="">
            <img src="{isrc}" class="card-img"></img>
        </a>
    </div>
  )
}

export default NftCard