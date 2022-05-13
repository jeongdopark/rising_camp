import React, { useEffect, useState }from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import SpinPage from '../spin';
import '../news.css'
import { useSelector, useDispatch } from 'react-redux';
const NewsList = ({ selectNavName }) => {
    
    const [ articles, setArticles ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch()
    const userInfo_selector = useSelector((state) => state.loginInfo)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
          }, 1000);
        if(selectNavName === 'save'){
            const localStorage_save = JSON.parse(localStorage.getItem(userInfo_selector.user_name))
            setArticles(localStorage_save)
        }else{
            const fetchData = async () => {
                try{
                    const query = selectNavName === 'all' ? '' : `&category=${selectNavName}`
                    const response = await axios.get(
                        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=08deec7da1a64b9e9342560e27366a16`
                    );
                    setArticles(response.data.articles)
                }catch(e){
                    console.log(e);
                }
            };
            fetchData();
        }
        
        return () => {clearTimeout(timer); setLoading(true)}
    }, [selectNavName])

    

    // if(loading){
    //     return (
    //         <div className="loading">
    //             <SpinPage/>
    //         </div>
    //     )
    // }

   if(!articles){
       return null;
   }
    return (
        <>  {
            loading ? <SpinPage/> :
        
            <div className="noewListBlock">
                {articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))}
            </div> 
            }
        </>

    )
}

export default NewsList;