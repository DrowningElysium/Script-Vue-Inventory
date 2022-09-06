export default interface Inventory {
  id: number;
  productCode: string;
  name: string;
  actualAmount: number;
  minimalAmount: number;
  price: number;
}
