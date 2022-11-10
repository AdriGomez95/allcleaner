import React from 'react'

import { Grid, Text, Card, Col, Row } from "@nextui-org/react";



import Barra from "../../Barra/Barra"
import img1 from '../../imagenes/111.jpeg'
import img2 from '../../imagenes/22.jpg'
import img3 from '../../imagenes/3.jpg'
import img4 from '../../imagenes/4.jpg'
import img5 from '../../imagenes/5.jpg'
import img6 from '../../imagenes/6.jpg'
import img7 from '../../imagenes/7.webp'



function Especifications ()  {

    return (
      <div>
        <Barra/>
        <br></br>



        <Text h1 size={60} css={{ textGradient: "45deg, $cyan500 -20%, $blue600 50%", }} weight="bold">
            Especificaciones 
        </Text>
        <Text h1 size={60} css={{ textGradient: "45deg, $cyan300 -20%, $blue600 100%", }} weight="bold">
            de nuestro producto
        </Text>
        <br></br>



        <Grid.Container gap={2} justify='center'>
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            {/*<Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            Your day your way
                            </Text>*/}
                            <Text h2 color="black">
                                Uso
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img1}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Text color="#d1d1d1" size={18}>
                                            Industrial y doméstico.
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>




            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="black">
                                Limpieza
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img2}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        Limpieza profunda
                                    </Text>
                                    <Text color="#d1d1d1" >
                                        y multisuperficies.
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>




            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="black">
                                Seguridad
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img3}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        Es un producto seguro y de fácil aplicación.
                                    </Text>
                                    <Text color="#d1d1d1" >
                                        No causa irritación en la piel, no es toxico.
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>





            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="white">
                                Diluyente en agua
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img4}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        Liquido biodegradable
                                    </Text>
                                    <Text color="#d1d1d1" >
                                        hecho a base de agua y sales minerales.
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>





            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="black">
                                Aroma
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img5}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        Fresco aroma a eucalipto y limón.
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>





            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="black">
                                Hipoalergénico
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img6}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        No contiene solventes.
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>





            
            <Grid xs={6} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h2 color="black">
                                Precio
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={img7}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                        </Card.Body>
                    <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                    <Text color="#d1d1d1" >
                                        Económico y rendidor a un precio competitivo en el mercado, 
                                        <br/> en donde minimiza costos y brindará un mejor servicio e incrementará sus ganancias
                                    </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            
        </Grid.Container>

      </div>
    );
  };
  
  export default Especifications;

  