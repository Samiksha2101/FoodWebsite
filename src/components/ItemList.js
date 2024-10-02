import { RESTURL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
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
              <button className="  p-2 m-auto shadow-lg bg-white">Add +</button>
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
