import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import User from "../../store/user";

const AvatarUpload = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "1",
      name: "avatar.png",
      status: "done",
      url: User.user.avatar,
    },
  ]);

  // @ts-ignore
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // @ts-ignore
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    // @ts-ignore
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        // @ts-ignore
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default AvatarUpload;
