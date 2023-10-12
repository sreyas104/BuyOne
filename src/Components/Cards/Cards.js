// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function Cards(props) {
    const data = props.data;

    const Navigate = useNavigate();


    const handleProductClick = (val) => {
        Navigate('/product-details', { state: { id: val } });

    }

    return (
        <Card onClick={() => {
            handleProductClick(data.id)
        }} style={{ width: '15rem', cursor: 'pointer' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
                {/* <Button className='mb-1' variant="primary" style={{ width: '100%' }}>Add to Cart</Button>
                <Button className='mb-1' variant="primary" style={{ width: '100%' }}>Buy Now</Button> */}
            </Card.Body>
        </Card>
    );
}

export default Cards;