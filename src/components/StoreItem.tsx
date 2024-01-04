import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const quantity = 1;

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="h-[100%]">
      <img src={imgUrl} alt="" className="object-cover h-52 w-full" />
      <div className="flex flex-col">
        <h1 className="flex justify-between items-baseline m-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-gray-400">{formatCurrency(price)}</span>
        </h1>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button onClick={()=> increaseCartQuantity(id)} className="text-white w-full rounded-md p-2 bg-gray-500 border-collapse border-2 border-solid border-fuchsia-700">
              +Add to cart
            </button>
          ) : (
            <div className="flex items-center justify-center flex-col gap-1">
              <div className="flex flex-row justify-center items-center gap-2">
                <button onClick={()=> decreaseCartQuantity(id)} className="text-white rounded-md p-3 bg-gray-500 border-collapse border-2 border-solid border-fuchsia-700">
                  -
                </button>
                <div>
                  <span className="text-[30px]">{quantity}</span>
                  In Cart
                </div>

                <button onClick={()=> increaseCartQuantity(id)} className="text-white rounded-md p-3 bg-gray-500 border-collapse border-2 border-solid border-fuchsia-700">
                  +
                </button>
              </div>

              <div className="flex items-center justify-center gap-1">
                <button onClick={()=> removeFromCart(id)} className="fs-4 rounded-md p-2 bg-red-500 border-collapse border-2 border-solid">
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
