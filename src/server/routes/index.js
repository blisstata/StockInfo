import getAllCustomers from './customer/get-all-customers';
import getCustomerData from './customer/get-customer-data';
import updateCustomerData from './customer/update-customer-data';
import getAllStocks from './stock/get-all-stocks';
import getBestPerformingStocks from './stock/get-best-performing-stocks';
import getStockData from './stock/get-stock-data';

const routes = [
    getAllCustomers,
    getCustomerData,
    updateCustomerData,
    getAllStocks,
    getBestPerformingStocks,
    getStockData
];

export default routes;