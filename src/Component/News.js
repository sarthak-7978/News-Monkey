import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfiniteScroll from "react-infinite-scroll-component";

AOS.init();


export default class News extends PureComponent {
    static defaultProps = {
        country: 'in',
        category: 'general',
        page: 9,
        heading: ''
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        page: PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResaults: 0,
        }
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pagesize=${this.props.page}&apikey=ad7abcf3bb304824931f409efeba0b61&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResaults: parsedData.totalResaults,
            loading: false
        });
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePreviousclick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextclick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pagesize=${this.props.page}&apikey=ad7abcf3bb304824931f409efeba0b61&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResaults: parsedData.totalResaults,
            loading: false
        });
       
      };
    render() {
        return (
            <div className='container my-3'>
                <h1 className=' text-dark text-center mb-4' style={{ marginTop: "75px" }}>NewsMonkey - Top headlines {this.props.heading}</h1>
                {this.state.loading && <Spinner/>} 


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResaults}
                    loader={<Spinner/>}
                >
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem imageUrl={element.urlToImage} titles={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} newsurl={element.url} author={element.author} publish={element.publishedAt} data-aos="fade-up" />
                            </div>
                        })}
                    </div>
                </div>
                </InfiniteScroll>

            </div>
        )
    }
}
