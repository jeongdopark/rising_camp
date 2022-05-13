import React, { useState, useEffect } from 'react';
import '../news.css'
import { StarFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { saveNews } from '../reducer/Save';
const NewsItem = ({ article }) => { 
    // const save_news_test = useSelector(state => state.save)    
    // const dispatch = useDispatch()
    const { title, description, url, urlToImage } = article;
    const [ star, setStar ] = useState(true)

    const localStroage_user = JSON.parse(localStorage.getItem('login_info'))
    let localStorage_user_favorite = JSON.parse(localStorage.getItem(localStroage_user.name))
    
    useEffect(() => {
        if(localStorage_user_favorite !== null){
            localStorage_user_favorite.forEach((e) => {
                if(e.url === url){
                    setStar(false)
                }
            })
        }
    },[star])
    
    
    

    
    const onClickStar = (e) => {
        console.log(url);
        setStar(!star)
        let valid = true;    
        // article = {...article, favorite:star}
        let localStorage_user_favorite = JSON.parse(localStorage.getItem(localStroage_user.name))
        if(localStorage_user_favorite.length > 0){
            localStorage_user_favorite.map((e) => 
            {if(e.url === url){
                valid = false
            } })
        }
        // if(localStorage_user_favorite.length > 1){
        //     localStorage_user_favorite = localStorage_user_favorite.filter((e) => e.url !== url )

        // }
        if(valid === true){
            localStorage_user_favorite.push(article)
        }else{

            localStorage_user_favorite = localStorage_user_favorite.filter((e) => e.url !== url )
        }
        
        localStorage.setItem(localStroage_user.name, JSON.stringify(localStorage_user_favorite))
        
        
        // if(localStorage_user_favorite === null || localStorage_user_favorite.length === 0){
        //     let favorite_array = []
        //     favorite_array.push(article)
        //     console.log(favorite_array);
        //     localStorage.setItem(localStroage_user.name, JSON.stringify(favorite_array));
        // }else{
        //     console.log('hello');
        //     localStorage_user_favorite.push(article)
        //     console.log(localStorage_user_favorite);
        // }


        // if(localStorage_user_favorite === null){
        //     
        // }else{
            
            
            
        //     if(valid === true){
                
                
        //     }
            
        // }
        // console.log(localStorage_user_favorite);
        // console.log(localStroage_user);
        
    }

    
    
    return(
        <div className="newsItemBlock">
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img className="thumbnail-IMG" src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} className="contentTitle" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p className="contentDescription">{description}</p>
                <div className="star-icon-wrap" onClick={onClickStar}>
                    {star === true ?
                    <StarFilled className="star-icon" style={{color: "#717171"}}/> :
                    <StarFilled className="star-icon" style={{color: "#ffd400"}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsItem;