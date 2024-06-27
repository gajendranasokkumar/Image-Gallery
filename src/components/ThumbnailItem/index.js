// src/components/ThumbnailItem/index.js
import './index.css'

const ThumbnailItem = ({imageDetails, isActive, onClickThumbnail}) => {
  const {thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    onClickThumbnail(imageDetails)
  }

  return (
    <li className={`thumbnail-item ${isActive ? 'active' : ''}`}>
      <button className="thumbnail-button" onClick={onClickImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
