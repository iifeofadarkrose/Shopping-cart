import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
  
  function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    return (
      <div>
        <img src={imgUrl} alt="" className="object-cover h-52 w-full"/>
        <div className="flex flex-col">
            <h1 className="flex justify-between items-baseline m-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-gray-400">{formatCurrency(price)}</span>
            </h1>
            
        </div>
      </div>
    );
  }
  
  export default StoreItem;
  