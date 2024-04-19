import classNames from "classnames/bind";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//
import styles from "./CreateProduct.module.scss";
import { ImageToBase64 } from "../../utility/ImageToBase64";
import config from "../../config";

// select option
import IphoneSelect from "./components/IphoneSelect";
import IpadSelect from "./components/IpadSelect";
import MacSelect from "./components/MacSelect";
import WatchSelect from "./components/WatchSelect";
import AmThanhSelect from "./components/AmThanhSelect";
import PhuKienSelect from "./components/PhuKienSelect";

const cx = classNames.bind(styles);

const CreateProduct = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    price: "",
    category: "",
    version: "",
    quantity: "",
    imageAvt: [],
    imageDescribe: [],
    colors: [],
    capacitys: [],
    percentDiscount: "",
  });
  console.log(data);
  // handle
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImageAvt = async (e) => {
    const multipleImages = e.target.files;
    const arrMultipleImage = [];

    for (let i = 0; i < multipleImages.length; ++i) {
      const base = await ImageToBase64(multipleImages[i]);
      arrMultipleImage.push(base);
    }

    setData((prev) => {
      return {
        ...prev,
        imageAvt: arrMultipleImage,
      };
    });
  };

  const handleImageDescribe = async (color, e) => {
    const multipleImages = e.target.files;
    const arrMultipleImage = [];

    for (let i = 0; i < multipleImages.length; ++i) {
      const base = await ImageToBase64(multipleImages[i]);
      arrMultipleImage.push(base);
    }

    setData((prev) => {
      // Kiểm tra xem color đã tồn tại trong mảng chưa
      const colorIndex = prev.imageDescribe.findIndex((item) => Object.keys(item)[0] === color);

      if (colorIndex !== -1) {
        // Nếu color đã tồn tại, cập nhật mảng tại vị trí color
        prev.imageDescribe[colorIndex][color] = arrMultipleImage;
      } else {
        // Nếu color chưa tồn tại, thêm một phần tử mới vào mảng
        prev.imageDescribe.push({ [color]: arrMultipleImage });
      }

      return {
        ...prev,
      };
    });
  };
  console.log(data);

  const handleSelectChangeColor = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    const isCheck = selectedValues.toString();
    if (!data.colors.includes(isCheck)) {
      setData((prev) => {
        let newColors = [...prev.colors, ...selectedValues];
        return {
          ...prev,
          colors: newColors,
        };
      });
    }
  };

  const handleSelectChangeCapacity = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    const isCheck = selectedValues.toString();
    if (!data.capacitys.includes(isCheck)) {
      setData((prev) => {
        let newCapacitys = [...prev.capacitys, ...selectedValues];
        return {
          ...prev,
          capacitys: newCapacitys,
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.title &&
      data.price &&
      data.category &&
      data.version &&
      data.quantity &&
      data.imageAvt.length > 0 &&
      data.imageDescribe.length > 0 &&
      data.colors.length > 0 &&
      data.capacitys.length > 0 &&
      data.percentDiscount
    ) {
      try {
        const axiosProduct = await axios.post(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product/create`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(axiosProduct.data.message);
        // setData("");
        if (alert) {
          navigate(`/${config.routes.createProduct}`);
        }
      } catch (error) {
        toast("Admin mới có quyền thêm sản phẩm");
        console.log(error);
      }
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin");
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("createProduct")}>
        <form className={cx("form-createProduct")} onSubmit={handleSubmit}>
          <h1 className={cx("heading")}>Thêm Sản Phẩm</h1>
          {/* Title */}
          <div className={cx("createProduct-item")}>
            <label className={cx("createProduct-item-label")}>Title:</label>
            <input
              className={cx("createProduct-item-input")}
              name="title"
              type="text"
              onChange={handleOnChange}
            />
          </div>
          {/* Image avatar */}
          <div className={cx("createProduct-item")}>
            <label className={cx("createProduct-item-label")}>Image Avatar:</label>
            <input
              className={cx("createProduct-item-input", "createProduct-item-input-image")}
              name="image"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageAvt}
            />
            <div className={cx("image-avatar")}>
              {data?.imageAvt?.map((el, index) => (
                <img className={cx("image-avatar-img")} key={index} src={el} alt="" />
              ))}
            </div>
          </div>
          {/* colors */}
          <div className={cx("createProduct-male", "block-colors")}>
            <div className={cx("createProduct-male-title-block")}>
              <label className={cx("createProduct-male-title")}>Color:</label>
            </div>
            <div className={cx("createProduct-male-input-block")}>
              <select
                className={cx("createProduct-male-input-block-select")}
                name="colors"
                multiple={true}
                value={data.colors}
                onChange={handleSelectChangeColor}
              >
                <option value={"black"}>Black</option>
                <option value={"pink"}>Pink</option>
                <option value={"yellow"}>Yellow</option>
                <option value={"green"}>Green</option>
                <option value={"blue"}>Blue</option>
                <option value={"purple"}>Purple</option>
                <option value={"white"}>White</option>
                <option value={"red"}>Red</option>
                <option value={"silver"}>Silver</option>
                <option value={"gray"}>Gray</option>
              </select>
            </div>
            <div className={cx("show-color-select")}>
              {data?.colors?.map((color, index) => (
                <div className={cx("show-color-select-item")} key={index}>
                  {color}/
                </div>
              ))}
            </div>
          </div>
          {/* Describe Image */}
          {data?.colors?.map((color, index) => {
            const nameColor = color;
            const newColor = data?.imageDescribe[index];
            // console.log(newColor2[newColor1]);
            return (
              <div className={cx("createProduct-item")} key={index}>
                <label className={cx("createProduct-item-label")}>Describe Image {color} :</label>
                <input
                  className={cx("createProduct-item-input", "createProduct-item-input-image")}
                  name="image"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImageDescribe(color, e)}
                />
                <div className={cx("image-avatar")}>
                  {nameColor &&
                    newColor &&
                    newColor[nameColor] &&
                    newColor[nameColor].map((el, index) => (
                      <img className={cx("image-avatar-img")} key={index} src={el} alt="" />
                    ))}
                </div>
              </div>
            );
          })}
          <div className={cx("two-row")}>
            {/* Category */}
            <div className={cx("createProduct-male", "category-block")}>
              <div className={cx("createProduct-male-title-block")}>
                <label className={cx("createProduct-male-title")}>Category:</label>
              </div>
              <div className={cx("createProduct-male-input-block ")}>
                <select
                  className=""
                  id="category"
                  name="category"
                  value={data.category}
                  onChange={handleOnChange}
                >
                  <option value={""}>Select Category</option>
                  <option value={"iphone"}>IPhone</option>
                  <option value={"ipad"}>IPad</option>
                  <option value={"mac"}>Mac</option>
                  <option value={"watch"}>Watch</option>
                  <option value={"amThanh"}>Âm Thanh</option>
                  <option value={"phuKien"}>Phụ Kiện</option>
                </select>
              </div>
            </div>
            {/* version */}
            <div className={cx("createProduct-male", "version-block")}>
              <div className={cx("createProduct-male-title-block")}>
                <label className={cx("createProduct-male-title")}>Version:</label>
              </div>
              <div className={cx("createProduct-male-input-block", "version-block-select")}>
                <select
                  className="version-select"
                  id="version"
                  name="version"
                  value={data.version}
                  onChange={handleOnChange}
                >
                  {data.category === "" && <option>Select Version</option>}
                  {data.category === "iphone" && <IphoneSelect />}
                  {data.category === "ipad" && <IpadSelect />}
                  {data.category === "mac" && <MacSelect />}
                  {data.category === "watch" && <WatchSelect />}
                  {data.category === "amThanh" && <AmThanhSelect />}
                  {data.category === "phuKien" && <PhuKienSelect />}
                </select>
              </div>
            </div>
          </div>
          <div className={cx("two-row")}>
            {/* Price */}
            <div className={cx("createProduct-item")}>
              <label className={cx("createProduct-item-label")}>Price:</label>
              <input
                className={cx("createProduct-item-input", "mg-right-20")}
                name="price"
                type="text"
                onChange={handleOnChange}
              />
            </div>
            {/* Quantity */}
            <div className={cx("createProduct-item")}>
              <label className={cx("createProduct-item-label")}>Quantity:</label>
              <input
                className={cx("createProduct-item-input")}
                name="quantity"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </div>
          {/* capacity */}
          <div className={cx("createProduct-male", "block-colors")}>
            <div className={cx("createProduct-male-title-block")}>
              <label className={cx("createProduct-male-title")}>Capacity:</label>
            </div>
            <div className={cx("createProduct-male-input-block")}>
              <select
                className=""
                name="capacity"
                multiple={true}
                value={data.capacitys}
                onChange={handleSelectChangeCapacity}
              >
                <option value={"64GB"}>64GB</option>
                <option value={"128GB"}>128GB</option>
                <option value={"256GB"}>256GB</option>
                <option value={"512GB"}>512GB</option>
                <option value={"1000GB"}>1TB</option>
                <option value={"2000GB"}>2TB</option>
              </select>
            </div>
            <div className={cx("show-color-select")}>
              {data?.capacitys?.map((capacity, index) => (
                <div className={cx("show-color-select-item")} key={index}>
                  {capacity}/
                </div>
              ))}
            </div>
          </div>
          {/* percentDiscount */}
          <div className={cx("createProduct-item")}>
            <label className={cx("createProduct-item-label")}>Percent Discount:</label>
            <input
              className={cx("createProduct-item-input", "mg-right-20")}
              name="percentDiscount"
              type="text"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className={cx("btnSubmit")}>
            Thêm Sản Phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
