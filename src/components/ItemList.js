import { RESTURL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAction = (item) => {
    //dispatch an action
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info.id}
          className="p-2 m-auto flex justify-between text-left border-gray-200 border-b-2"
        >
          <div className="w-9/12">
            <div>
              <span className="p-2">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3 h-48 ">
            <div className="absolute">
              <button
                className="  p-2 m-auto shadow-lg bg-white"
                onClick={() => handleAction(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={RESTURL + item.card.info.imageId}
              className="w-full h-36 rounded-md"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
