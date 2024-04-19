import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Mac.module.scss";
import SliderDefaultLayout from "../../layout/components/SliderDefaultLayout";
import axios from "axios";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";

const cx = classNames.bind(styles);
const Mac = () => {
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
        <h1 className={cx("title")}>Mac</h1>
        <SliderDefaultLayout
          images={[
            "https://shopdunk.com/images/uploaded/banner/thang_12_1/1200x400%20(2)-Copy-1.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/dmam1.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/m2dm.png",
          ]}
        />
      </>
      <div className={cx("container")}>
        <div className={cx("all-category")}>
          <div className={cx("category-left")}>
            <div className={cx("category")}>
              <div className={cx("category-item", "active")}>Tất cả</div>
              <div className={cx("category-item")}>MacBook Pro M2</div>
              <div className={cx("category-item")}>MacBook Pro M3</div>
              <div className={cx("category-item")}>MacBook Air</div>
              <div className={cx("category-item")}>iMac</div>
              <div className={cx("category-item")}>Mac Mini</div>
              <div className={cx("category-item")}>Mac Pro</div>
              <div className={cx("category-item")}>Mac Studio</div>
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

export default Mac;
