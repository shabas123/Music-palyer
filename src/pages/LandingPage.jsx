import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function LandingPage() {
  return (
    <>
      <Container fluid className='mt-5'>
        <Row className='mt-5'>
          <Col sm={12} md={6}>
            <h2 >Welcome to <span className='text-warning'>Media Player</span></h2>
            <p className='mt-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique corrupti odit sed temporibus alias delectus dolorem eius doloremque rerum saepe quis repellendus, placeat commodi ex? Harum assumenda velit tenetur nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis incidunt error sapiente voluptate suscipit amet maxime quia id sint, nostrum quaerat aut hic ullam eos ad cupiditate commodi neque perferendis porro autem exercitationem dolor. Rerum corporis repudiandae voluptate error exercitationem nobis necessitatibus sunt fuga, commodi enim aliquam quos minima tempora.</p>
            <button className='btn btn-warning'>Get Started</button>
          </Col>

          <Col sm={12} md={6} className=''>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWpxMnl1dWJjMDByZmk5eGx1cnNkaWtxZGxwZDF3MzJ2ajRyY214dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SBXYG8OdQjvCjaYQxZ/giphy.gif" alt="" style={{ height: "350px" }} />
          </Col>
          <col md={1}></col>

        </Row>
      </Container>



      {/* -------------------------features---------------------- */}
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <h2 className='text-center' >Features</h2>
          <div className="col">
            <div className="row ">
              <div className="col mt-3">
               <Card style={{ width: "100%" }}>
                  <Card.Img  variant="top" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHhkc2lqNWFnZzM4dXE4MWpyMnJ6NDhsOHl0dXRsdjIyaDUxNTZ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJp4TYn1JJlqkBc8bl/giphy.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-3">
               <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2NsaDJqdnMzMjJ0a3ZpZnVxdXozaWpiN2RpZ2MwbnVhMm10b2F5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5kFc7jho1YZH2ekEGx/giphy.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-3">
               <Card style={{ width:"100%"}}>
                  <Card.Img variant="top" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNhY25jNjJreTc5b3luZ3J6NmxrMmczbmJsN3Z4bGpyNm85bTR5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4QF3BJr4AgNyV6OZfw/giphy.gif" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                   </Card.Body>
                </Card>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* --------------------------------------- */}

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col border rounded p-md-5 p-4">
            <div className="row">
              <div className="col-md-6">
              <h2 className='text-warning'>Simple fast and <span style={{color:"red", fontWeight:"bolder"}}> powerfull</span></h2>
              <p className='mt-2'><span className='fs-3'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum ab quae incidunt, vitae exercitationem assumenda veniam harum laborum aspernatur?</p>
              <p className='mt-2'><span className='fs-3'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum ab quae incidunt, vitae exercitationem assumenda veniam harum laborum aspernatur?</p>
              <p className='mt-2'><span className='fs-3'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum ab quae incidunt, vitae exercitationem assumenda veniam harum laborum aspernatur?</p>
             </div>
             <div className='col-md-6 co-sm-12'>
             <iframe width="100%" height="369" src="https://www.youtube.com/embed/tt2k8PGm-TI" title="ZAYN - Dusk Till Dawn (Official Video) ft. Sia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   </div>
             </div>
            </div>

          </div>
        </div>
   
    </>
  )
}




export default LandingPage
