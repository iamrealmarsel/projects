import ContentLoader from 'react-content-loader';
import cn from './Card.module.scss';

function Card(props) {
  const {
    id,
    price,
    image,
    title,
    onFavoriteClick,
    onPlusClick,
    isAdded,
    isFavorite,
    favorited = false,
    loading = false,
  } = props;

  const product = { price, image, title, id, parentId: id };
  let favoriteElement = null;

  const handlePlusClick = () => {
    onPlusClick(product);
  };

  const handleFavoriteClick = () => {
    onFavoriteClick(product);
  };

  if (onFavoriteClick) {
    favoriteElement = favorited ? (
      <div className={cn.cardFavorite} onClick={handleFavoriteClick}>
        <img src='/img/heart-liked.svg' alt='liked' />
      </div>
    ) : (
      <div className={cn.cardFavorite} onClick={handleFavoriteClick}>
        <img src={isFavorite(id) ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt='liked' />
      </div>
    );
  }

  return (
    <div className={cn.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={158}
          height={204}
          viewBox='0 0 158 204'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='0' y='0' rx='10' ry='10' width='158' height='90' />
          <rect x='0' y='100' rx='0' ry='0' width='158' height='15' />
          <rect x='0' y='122' rx='0' ry='0' width='100' height='15' />
          <rect x='0' y='160' rx='8' ry='8' width='80' height='25' />
          <rect x='126' y='154' rx='8' ry='8' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          {favoriteElement}
          <img width='133' height='112' src={image} alt='' />
          <h5 className={cn.cardTitle}>{title}</h5>
          <div className={cn.cardBottom}>
            <div className={cn.cardPrice}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlusClick && (
              <img
                className={cn.cardPlus}
                src={isAdded(id) ? '/img/button-checked.svg' : '/img/button-plus.svg'}
                alt='plus'
                onClick={handlePlusClick}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
