import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./AmThanh.module.scss";
import SliderDefaultLayout from "../../layout/components/SliderDefaultLayout";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";
import axios from "axios";

const cx = classNames.bind(styles);
const AmThanh = () => {
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
        <h1 className={cx("title")}>Âm Thanh</h1>
        <SliderDefaultLayout
          images={[
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/loadm.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/mardm.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/apdm-Copy-1.png",
          ]}
        />
      </>
      <div className={cx("container")}>
        <div className={cx("all-category")}>
          <div className={cx("category-left")}>
            <div className={cx("category")}>
              <div className={cx("category-item", "active")}>Tất cả</div>
              <div className={cx("category-item")}>AirPods</div>
              <div className={cx("category-item")}>AirPods Pro</div>
              <div className={cx("category-item")}>EarPods</div>
              <div className={cx("category-item")}>Marshall</div>
              <div className={cx("category-item")}>Beats</div>
              <div className={cx("category-item")}>Harman Kardon</div>
              <div className={cx("category-item")}>JBL</div>
              <div className={cx("category-item")}>Google</div>
              <div className={cx("category-item")}>Sony</div>
              <div className={cx("category-item")}>Audio Technica</div>
              <div className={cx("category-item")}>Jabra</div>
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

export default AmThanh;
