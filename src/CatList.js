// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {

        const catPics = this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.source_url} alt="" />)

    return (
        <div>
          {catPics}
        </div>
      )
    }
}



export default CatList;