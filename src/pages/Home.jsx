import { Container, Row, Col } from "react-bootstrap";
import Layout from '../layout/AppLayout';

export default function Home () {
    return(
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h2>Home</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ullam labore ducimus mollitia atque fugiat voluptatibus doloribus, dolore illum pariatur officiis nulla et doloremque reiciendis tenetur. Laborum accusamus deserunt quidem!</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}