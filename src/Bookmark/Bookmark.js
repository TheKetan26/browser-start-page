import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Bookmark.css'


export default function Bookmark(props) {
    var bookmarkElements = props.bookmarks.map(bookmark => {
                                return (
                                    <Col className = 'd-flex justify-content-center'>
                                        <span className = 'bookmark-item'>
                                            <div className = 'img'/>
                                            <div className = 'label'>
                                                { bookmark.label }
                                            </div>
                                        </span>
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