import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Bookmark.css'


const getBookmark = () => {
    const storedData = localStorage.getItem('BookmarkData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
};
  


export default function Bookmark() {
    var bookmarks = getBookmark()

    var bookmarkElements = bookmarks.map(bookmark => {
                                let altImgUrl = `https://s2.googleusercontent.com/s2/favicons?domain=www.${ bookmark.url }&sz=128`
                                let imgUrl = `https://${bookmark.url}/favicon.ico`
                                return (
                                    <Col className = 'd-flex justify-content-center'>
                                        <Link to = {`https://${bookmark.url}`} className = 'bookmark-item'>
                                            <img className = 'img' src = {imgUrl} onError = { 
                                                ({currentTarget}) => {
                                                    currentTarget.onerror = null
                                                    currentTarget.src = altImgUrl
                                                }
                                            } alt = { altImgUrl } />
                                            <div className = 'label'>
                                                { bookmark.name }
                                            </div>
                                        </Link>
                                    </Col>
                                )
                            })

    return (
        <Container className = 'bookmark-container'>
            <Row className = 'bookmark'>
                { bookmarkElements }
            </Row>
        </Container>
    )
}