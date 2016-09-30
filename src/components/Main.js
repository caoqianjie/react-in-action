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
let ImgFigure = React.createClass({
    render(){
        return <figure className="img-figure">
            <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
            <figcaption>
                <h2 className="img-title">
                    {this.props.data.title}
                </h2>
            </figcaption>
        </figure>
    }
});

class AppComponent extends React.Component {
  render() {
      let controllerUtils = [];
      let imgFigures = [];
      imageDatas.forEach(item =>{
          imgFigures.push(<ImgFigure data={item}/>)
      });

    return (
      <section className="stage">
          <section className="img-sec">
              {imgFigures}
          </section>
          <nav className="controller-nav ">
              {controllerUtils}
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
