import React, { useEffect } from 'react';
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='product-info'>{product?.title}</div>
          <div className='product-info'>₩{product?.price}</div>
          <div className='choice'>
            {product?.choice === true ? 'Conscious choice' : ''}
          </div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item, index) => (
                  <Dropdown.Item href='#/action-1' key={index}>
                    {item}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-button'>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
