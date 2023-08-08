import {useParams} from "react-router-dom";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const NewsPage = () => {
    // 현재 URL의 파라미터를 가져오는데 사용됩니다.
    const params = useParams();
    // 카테고리가 선택되지 않았으면 기본값 ALL로 사용
    const category = params.category || 'all';

    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>

    )
}
export default NewsPage;