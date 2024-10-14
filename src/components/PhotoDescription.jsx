import React, { useEffect, useState } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";

const PhotoDescription = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photoData, setPhotosData] = useState({});
  const { id: id } = useParams();
  useEffect(() => {
    const getPhoto = async () => {
      const apikey = "V6np3zEsNV5gAO0IaKO3nLeXQtSslHCIoSxLMnr3Olk";
      const apiUrl = `https://api.unsplash.com/photos/${id}/?client_id=${apikey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotosData(data);
      setIsLoading(false);
      console.log(data);
    };

    getPhoto();
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Row
          style={{
            width: "100%",
            height: "80vh",
            padding: "10px",
            backgroundColor: `${photoData.color}35`,
          }}
        >
          <Col md={6}>
            <Image
              src={photoData.urls.regular}
              fluid
              style={{
                width: "100%",
                height: "400px",
                padding: "10px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col md={6}>
            <ListGroup
              variant='flush'
              style={{
                padding: "10px",
              }}
            >
              <ListGroup.Item
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <h3>
                  Uploaded By: {photoData.user.name} ({photoData.user.id})
                </h3>
                <h4>Upload Date: {photoData.created_at}</h4>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <h6>Width: {photoData.width}</h6>
                <h6>Height: {photoData.height}</h6>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Button
                  as='a'
                  href={photoData.links.download}
                  target='_blank'
                  variant='dark'
                >
                  Download
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PhotoDescription;
