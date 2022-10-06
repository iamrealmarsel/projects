import cn from './Main.module.scss';

function Main(props) {
  const { children, onSearchChange, searchValue, title } = props;

  return (
    <div className={cn.content}>
      <div className={cn.contentHeader}>
        <h1 className={cn.contentTitle}>{searchValue ? `Поиск по запросу: ${searchValue}` : title}</h1>
        <div className={cn.contentSearch}>
          <img src='img/search.svg' alt='search' />
          <input
            onChange={onSearchChange}
            value={searchValue}
            className={cn.contentSearchInput}
            type='text'
            placeholder='Поиск...'
          />
        </div>
      </div>
      <div className={cn.contentCards}>{children}</div>
    </div>
  );
}

export default Main;
