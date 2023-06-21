import {Container, Row, Col} from 'react-bootstrap';
import Layout from '../layout/AppLayout';
import Gallery from '../layout/Gallery';


export default function Portfolio () {
    return(
        <Layout>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h2>Portfolio</h2>
                    </Col>
                </Row>
                    <Row>
                        <Col md={7}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis obcaecati dolore vitae ut ducimus nemo ipsum voluptas consequuntur rerum dolor aut aspernatur non, sit necessitatibus corporis magni! Corporis, tempora?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis obcaecati dolore vitae ut ducimus nemo ipsum voluptas consequuntur rerum dolor aut aspernatur non, sit necessitatibus corporis magni! Corporis, tempora?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis obcaecati dolore vitae ut ducimus nemo ipsum voluptas consequuntur rerum dolor aut aspernatur non, sit necessitatibus corporis magni! Corporis, tempora?</p>
                        </Col>
                    </Row>
            </Container>
            <Gallery/>
        </Layout>
    )
}