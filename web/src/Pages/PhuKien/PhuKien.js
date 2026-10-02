import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./PhuKien.module.scss";
import SliderDefaultLayout from "../../layout/components/SliderDefaultLayout";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";
import axios from "axios";

const cx = classNames.bind(styles);
const PhuKien = () => {
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
        <h1 className={cx("title")}>Phụ Kiện</h1>
        <SliderDefaultLayout
          images={[
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/Gardm12.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/pkdm.png",
          ]}
        />
      </>
      <div className={cx("container")}>
        <div className={cx("all-category")}>
          <div className={cx("category-left")}>
            <div className={cx("category")}>
              <div className={cx("category-item", "active")}>Tất cả</div>
              <div className={cx("category-item")}>Đồng hồ Garmin</div>
              <div className={cx("category-item")}>Cường lực bảo vệ</div>
              <div className={cx("category-item")}>Sạc, cáp</div>
              <div className={cx("category-item")}>Bao da/ Ốp lưng</div>
              <div className={cx("category-item")}>Sạc dự phòng</div>
              <div className={cx("category-item")}>Balo/ Túi chống sốc</div>
              <div className={cx("category-item")}>Chuột/ Bàn phím</div>
              <div className={cx("category-item")}>Bút Apple Pencil</div>
              <div className={cx("category-item")}>Dây Đeo Apple Watch</div>
              <div className={cx("category-item")}>AirTags</div>
              <div className={cx("category-item")}>Apple TV</div>
              <div className={cx("category-item")}>Máy ảnh</div>
              <div className={cx("category-item")}>Máy đọc sách</div>
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

export default PhuKien;
