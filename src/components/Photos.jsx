import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const count = 1;
const apikey = "rxjuo8O2DbH1AOlqf9tb2CPsM4blD_0nzMXZp2XSdGw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

const Photos = () => {
  const [photosData, setPhotosData] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPhotosData((prevData) => {
      return [...prevData, ...data];
    });
  };

  useEffect(() => {
    getPhotos();
  }, []);


  console.log(photosData);

  return (
    <Container fluid>
      <Row sm={1} md={2} lg={4}>
        {photosData.map((photo) => (
          <Col style={{ padding: "0" }}>
            <LinkContainer to={`/photos/${photo.id}`}>
              <Card className='text-white custom-card'>
                <Card.Img src={photo.urls.small} />
                <Card.ImgOverlay>
                  <Card.Title>{photo.user.name}</Card.Title>
                  <Card.Text>{photo.description}</Card.Text>
                  <Card.Text>{photo.created_at}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </LinkContainer>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Photos;
