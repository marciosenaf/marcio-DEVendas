import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const AddProducts = () => {
  return (
<section>
  <Container>
    <Row>
      <Col lg="12">
      <h4>AddProducts</h4>
      <Form>
        <FormGroup className='form__group'>
        <span>Product title</span>
        <input type="text" placeholder='Double sofa' />
        </FormGroup>

        <FormGroup className='form__group'>
        <span>Short Description</span>
        <input type="text" placeholder='lorem......' />
        </FormGroup>

        <FormGroup className='form__group'>
        <span>Description</span>
        <input type="text" placeholder='Description....' />
        </FormGroup>

        <FormGroup className='form__group'>
        <span>Price</span>
        <input type="text" placeholder='$100' />
        </FormGroup>

        <FormGroup className='form__group'>
        <span>Category</span>
        <select>
          <option value="chair">Chair</option>
          <option value="sofa">Sofa</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watch</option>
          <option value="wirless">Wirless</option>

        </select>
        </FormGroup>

      </Form>
      </Col>
    </Row>
  </Container>
</section>
  )
}

export default AddProducts