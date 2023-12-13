import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://stayinn.up.railway.app/api/hotels/countByCity?cities=jakarta,yogyakarta,bali"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <div className="itemContainer">
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/688053.jpg?k=da426cecdc6492da255ca0612c4bb41bd785b2565c83405f7281f15c05b16376&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jakarta</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/city/max500/688189.jpg?k=f1e882ea63a9ac9b680d43ba379069f878951bdcbb2ea53bdcd6b05d524de87a&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Yogyakarta</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/max500/50938.jpg?k=61fc24194f6d6fdff9623c2e065d21de10c9d775ff7bb91aa8bf84440397572c&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bali</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
