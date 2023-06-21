import {Container, Row, Col} from "react-bootstrap";
import Layout from '../layout/AppLayout';

export default function About (){
    return(
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h2>About</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus pariatur ipsam sunt quod necessitatibus, inventore ab corporis itaque consequatur perferendis recusandae, eius dolorem perspiciatis dolor ipsum magni? Nihil, quos!</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}