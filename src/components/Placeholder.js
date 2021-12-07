import React,{Card,Button} from "react-bootstrap";

function Placeholderfn() {
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src="https://www.sportbusinessmag.com/wp-content/uploads/2020/06/latvia-2018.jpg" />
                <Card.Body>
                    <Card.Title>Rally cars</Card.Title>
                    <Card.Text>
                    Rally racings

                    </Card.Text>
                    <Button variant="primary">Check</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/05/14/1331722974814_6/nasser-al-attiyah-et-sa-mini-all4-racing" />
                <Card.Body>
                    <Card.Title>In the Middle of the desert!</Card.Title>
                    <Card.Text>
                    Rally racings

                    </Card.Text>
                    <Button variant="primary">Check</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i0.wp.com/arcticrallyfinland.fi/wp-content/uploads/2021/02/Kindholm_Taneli_Niinimaki-6138.jpg?fit=674%2C449&ssl=1" />
                <Card.Body>
                    <Card.Title>Or else , the Snow</Card.Title>
                    <Card.Text>
                        Rally racings
                    </Card.Text>
                    <Button variant="primary">Check</Button>
                </Card.Body>
            </Card>

           
        </div>

    )
}
export default Placeholderfn;