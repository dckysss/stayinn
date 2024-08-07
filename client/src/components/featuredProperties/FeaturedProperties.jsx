import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("https://stayinn.up.railway.app/api/hotels?featured=true&limit=4");

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : error ? (
        <div>Failed to fetch data: {error.message} or API is currently offline</div>
      ) : (
        <>
          {data.map((item) => (
            <Link className="fpItem" to={`/hotels/${item._id}`} key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {rupiah(item.cheapestPrice)}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
