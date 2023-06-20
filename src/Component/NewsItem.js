import React, { PureComponent } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


export default class NewsItem extends PureComponent {
   
    render() {
        let {titles,description,imageUrl,newsurl,author,publish} = this.props
        return (
            <div className="card my-3 mx-1" data-aos="zoom-in-up" data-aos-duration="1500">
                <img src={!imageUrl?"https://png.pngtree.com/template/20220505/ourmid/pngtree-breaking-news-logo-flat-vector-banner-image_1335485.jpg":imageUrl} className="card-img-top" alt="..." style={{height : "200px",backgroundSize : "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title">{titles}...</h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} On {new Date(publish).toGMTString()}</small></p>
                    <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}
