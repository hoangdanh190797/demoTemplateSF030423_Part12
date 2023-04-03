import React from 'react'
import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import { getArticlesAll } from '../store/slice/articlesSlice'

export default function Home() {
    const dispatch = useAppDispatch();
    const { articles } = useAppSelector((state: any) => {
        return state.articles;
    })
    useEffect(() => {
        dispatch(getArticlesAll())
    })

    return (
        <>
            {/* <div className="home-page">
                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <ul className="nav nav-pills outline-active">
                                    <li className="nav-item">
                                        <a className="nav-link disabled" >Your Feed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" >Global Feed</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="article-preview">
                                <div className="article-meta">
                                    <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
                                    <div className="info">
                                        <a className="author">Eric Simons</a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart" /> 29
                                    </button>
                                </div>
                                <a className="preview-link">
                                    <h1>How to build webapps that scale</h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                </a>
                            </div>
                            <div className="article-preview">
                                <div className="article-meta">
                                    <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                                    <div className="info">
                                        <a className="author">Albert Pai</a>
                                        <span className="date">January 20th</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart" /> 32
                                    </button>
                                </div>
                                <a className="preview-link">
                                    <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                                    <p>This is the description for the post.</p>
                                    <span>Read more...</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tags</p>
                                <div className="tag-list">
                                    <a className="tag-pill tag-default">programming</a>
                                    <a className="tag-pill tag-default">javascript</a>
                                    <a className="tag-pill tag-default">emberjs</a>
                                    <a className="tag-pill tag-default">angularjs</a>
                                    <a className="tag-pill tag-default">react</a>
                                    <a className="tag-pill tag-default">mean</a>
                                    <a className="tag-pill tag-default">node</a>
                                    <a className="tag-pill tag-default">rails</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {articles.map((item: any) => {
                return (
                    <div style={{textAlign:'left'}}>
                        {item.title}
                    </div>
                )
            })}
        </>
    )
}
