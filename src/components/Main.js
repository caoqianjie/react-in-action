require('normalize.css/normalize.css');
require('styles/main.scss');
import React from 'react';
//获取图片相关的数据
let imageDatas = require('data/imageData.json');
// 将图片名信息转成图片url路径信息
let getImageUrl = imageDataArr => {
    imageDataArr.forEach(item => {
        item.imageUrl = require('../images/'+item.filename);
    })
};
getImageUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-sec">

          </section>
          <nav className="controller-nav ">

          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
