import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import SliderHome from "../../layout/components/SliderHome";
import styles from "./Home.module.scss";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";
import config from "../../config";

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState();
  const [dataIphone, setDataIphone] = useState([]);
  const [dataIpad, setDataIpad] = useState([]);

  useEffect(() => {
    (async () => {
      const axiosProduct = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      setData(axiosProduct.data);
    })();
  }, []);

  // getDataIphone
  useEffect(() => {
    const getDataIphone = (data) => {
      if (data) {
        const newIphone = data.filter((dataItem) => {
          return dataItem.category === "iphone";
        });
        setDataIphone(newIphone);
      }
    };
    getDataIphone(data);
  }, [data]);

  useEffect(() => {
    const getDataIpad = (data) => {
      if (data) {
        const newIpad = data.filter((dataItem) => {
          return (dataItem.category = "ipad");
        });
        setDataIpad(newIpad);
      }
    };
    getDataIpad(data);
  }, [data]);
  return (
    <div className={cx("wrapper")}>
      <SliderHome />
      <HomePageItem
        data={dataIphone}
        length={4}
        title={"iPhone"}
        btn={true}
        link={config.routes.iphone}
      />
      <HomePageItem
        data={dataIpad}
        length={4}
        title={"iPad"}
        btn={true}
        link={config.routes.ipad}
      />
      <HomePageItem
        data={dataIphone}
        length={4}
        title={"Mac"}
        btn={true}
        link={config.routes.mac}
      />
      <HomePageItem
        data={dataIphone}
        length={4}
        title={"Watch"}
        btn={true}
        link={config.routes.watch}
      />
      <HomePageItem
        data={dataIphone}
        length={4}
        title={"Âm thanh"}
        btn={true}
        link={config.routes.amThanh}
      />
      <HomePageItem
        data={dataIphone}
        length={4}
        title={"Phụ kiện"}
        btn={true}
        link={config.routes.phuKien}
      />
      <div className={cx("img-block")}>
        <img
          className={cx("img")}
          src="https://shopdunk.com/images/uploaded/Trang%20ch%E1%BB%A7/2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
