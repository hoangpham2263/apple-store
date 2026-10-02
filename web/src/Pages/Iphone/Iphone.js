import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { toast } from "react-toastify";

import styles from "./Iphone.module.scss";
import SliderDefaultLayout from "../../layout/components/SliderDefaultLayout";
import HomePageItem from "../../layout/components/HomePageItem/HomePageItem";
import axios from "axios";

const cx = classNames.bind(styles);
const Iphone = () => {
  const allCategory = [
    "Tất cả",
    "iPhone 15 series",
    "iPhone 14 series",
    "iPhone 13 series",
    "iPhone 12 series",
    "iPhone 11 series",
    "iPhone SE",
  ];
  const [data, setData] = useState();
  const [dataIphone, setDataIphone] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [lengthPageIndex, setLengthPageIndex] = useState(null);
  const [selectCategory, setSelectCategory] = useState("Tất cả");
  const [version, setVersion] = useState(null);
  const [sort, setSort] = useState(null);

  // call api
  useEffect(() => {
    (async () => {
      const params = {
        limit: 12,
        page: pageIndex,
        category: "iphone",
        sort: sort,
      };
      if (version !== "Tất cả") {
        params.version = version;
      } else {
        delete params.version;
      }
      const axiosProduct = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/product`, {
        params: params,
      });
      setData(axiosProduct.data);
    })();
  }, [pageIndex, version, sort]);

  // get length page
  useEffect(() => {
    (async () => {
      const params = {
        category: "iphone",
      };
      if (version !== "Tất cả") {
        params.version = version;
      } else {
        delete params.version;
      }
      const axiosProduct = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/product`, {
        params: params,
      });
      setLengthPageIndex(Math.ceil(axiosProduct.data.length / 12));
    })();
  }, [version]);
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

  // handle click item category
  const handleClickItemCategory = (category) => {
    setVersion(category);
    setPageIndex(1);
    setSelectCategory(category);
  };

  const handleCategorySelect = (e) => {
    if (e.target.value !== false) {
      setSort(e.target.value);
    } else {
      setSort(null);
    }
  };

  // handle pagination
  const handlePagination = (page) => {
    setPageIndex(page);
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };
  const handlePaginationLeft = () => {
    if (pageIndex > 1) {
      console.log(pageIndex);
      setPageIndex(pageIndex - 1);
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
    } else {
      toast.warning("Đã ở trang đầu!");
    }
  };
  const handlePaginationRight = () => {
    if (pageIndex < lengthPageIndex) {
      setPageIndex(pageIndex + 1);
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
    } else {
      toast.warning("Đã ở trang cuối!");
    }
  };
  return (
    <div className={cx("wrapper")}>
      <>
        <h1 className={cx("title")}>IPhone</h1>
        <SliderDefaultLayout
          images={[
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/15dm.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/13dm.png",
            "https://shopdunk.com/images/uploaded/banner/banner_thang12/14dm.png",
          ]}
        />
      </>
      <div className={cx("container")}>
        <div className={cx("all-category")}>
          <div className={cx("category-left")}>
            <div className={cx("category")}>
              {allCategory.map((item, index) => {
                return (
                  <div
                    className={cx("category-item", `${item === selectCategory ? "active" : ""}`)}
                    key={index}
                    onClick={() => handleClickItemCategory(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cx("category-right")}>
            <select onChange={handleCategorySelect}>
              <option value={false}>Thứ tự hiển thị</option>
              <option value={"title"}>Tên: A đến Z</option>
              <option value={"-title"}>Tên: Z đến A</option>
              <option value={"price"}>Giá thấp đến cao</option>
              <option value={"-price"}>Giá cao đến thấp</option>
            </select>
          </div>
        </div>
        <div className={cx("all-product")}>
          <HomePageItem data={dataIphone} />
        </div>
      </div>
      <div className={cx("limiting")}>
        <div className={cx("item-page")} onClick={handlePaginationLeft}>
          <FaAngleLeft />
        </div>
        {[...Array(lengthPageIndex)].map((_, index) => {
          return (
            <div
              className={cx("item-page", `${pageIndex === index + 1 ? "active" : ""}`)}
              key={index}
              onClick={() => handlePagination(index + 1)}
            >
              {index + 1}
            </div>
          );
        })}
        <div className={cx("item-page")} onClick={handlePaginationRight}>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Iphone;
