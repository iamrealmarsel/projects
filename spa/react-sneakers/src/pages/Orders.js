import { useContext } from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import Main from '../layouts/Main';

function Orders(props) {
  const { onSearchChange, searchValue, isLoading } = props;
  const { orders } = useContext(AppContext);

  const renderItems = () => {
    const filteredOrders = orders.filter((order) => {
      return order.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (isLoading ? [...Array(8)] : filteredOrders).map((val, index) => (
      <Card {...val} key={index} loading={isLoading} />
    ));
  };

  return (
    <Main onSearchChange={onSearchChange} searchValue={searchValue} title='Мои покупки'>
      {renderItems()}
    </Main>
  );
}

export default Orders;
