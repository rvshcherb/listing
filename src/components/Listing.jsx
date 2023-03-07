import React from "react";

export const Listing = ({ items, renderPrice }) => {

  return (
    <div className="item-list">
      {items.map(item => ( item.state === 'active' && (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt=""/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length <= 50 ? item.title : item.title.slice(0,49) + '...'}</p>
            {renderPrice(item.currency_code, item.price)}
            <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high'}`}>{item.quantity} left</p>
         </div>
        </div>
      )))}
    </div>
  )
}

Listing.defaultProps = {
  items: [],
}