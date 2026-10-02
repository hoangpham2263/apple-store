import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Watch.module.scss";
import SliderDefaultLayout from "../../layout/components/SliderDefaultLayout";
import axios from "axios";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";

const cx = classNames.bind(styles);
const Watch = () => {
  const [data, setData] = useState();
  const [dataIphone, setDataIphone] = useState([]);

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
  return (
    <div className={cx("wrapper")}>
      <>
        <h1 className={cx("title")}>Watch</h1>
        <SliderDefaultLayout
          images={[
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/1200x400%20(1).png",
            "https://shopdunk.com/images/uploaded/banner/banner%20thang%2011/banner%20watch%20s9_Danh%20m%E1%BB%A5c.jpg",
            "https://shopdunk.com/images/uploaded/banner/banner%20thang%2011/banner%20watch%20utra_Danh%20m%E1%BB%A5c.jpg",
          ]}
        />
      </>
      <div className={cx("container")}>
        <div className={cx("all-category")}>
          <div className={cx("category-left")}>
            <div className={cx("category")}>
              <div className={cx("category-item", "active")}>Tất cả</div>
              <div className={cx("category-item")}>Apple Watch Ultra 2</div>
              <div className={cx("category-item")}>Apple Watch Ultra 9</div>
              <div className={cx("category-item")}>Apple Watch SE</div>
              <div className={cx("category-item")}>Apple Watch Series 8</div>
              <div className={cx("category-item")}>Apple Watch Series 7</div>
              <div className={cx("category-item")}>Apple Watch Series 6</div>
              <div className={cx("category-item")}>Apple Watch Series 3</div>
            </div>
          </div>
          <div className={cx("category-right")}>
            <select>
              <option>Thứ tự hiển thị</option>
              <option>Tên: A đến Z</option>
              <option>Tên: Z đến A</option>
              <option>Thứ tự hiển thị</option>
              <option>Giá cao đến thấp</option>
            </select>
          </div>
        </div>
        <div className={cx("all-product")}>
          <HomePageItem data={dataIphone} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
