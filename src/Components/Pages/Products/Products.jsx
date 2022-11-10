import React from 'react'
import { Grid, Text, Card, Row, Modal, Image } from "@nextui-org/react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import Barra from "../../Barra/Barra";
import e1 from '../../imagenes/etiqueta1.png'
import e2 from '../../imagenes/etiqueta2.png'
import e3 from '../../imagenes/etiqueta3.png'
import e4 from '../../imagenes/etiqueta4.png'


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


function Products ()  {
  
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const [visible2, setVisible2] = React.useState(false);
    const handler2 = () => setVisible2(true);
    const closeHandler2 = () => {
        setVisible2(false);
        console.log("closed");
    };
    const [visible3, setVisible3] = React.useState(false);
    const handler3 = () => setVisible3(true);
    const closeHandler3 = () => {
        setVisible3(false);
        console.log("closed");
    };
    const [visible4, setVisible4] = React.useState(false);
    const handler4 = () => setVisible4(true);
    const closeHandler4 = () => {
        setVisible4(false);
        console.log("closed");
    };

  
    return (
        <div>
            <Barra/>
            <br></br>



            <Text h1 size={60} css={{ textGradient: "45deg, $cyan500 -20%, $blue600 50%", }} weight="bold">
                Productos 
            </Text>
            <br></br>

            
            <Modal noPadding open={visible} onClose={closeHandler}>
                <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                <Text color="#363449">
                    Desengrasante de cocina
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Image
                    showSkeleton
                    src={e1}
                    width={400}
                    height={490}
                />
                </Modal.Body>
            </Modal>
            <Modal noPadding open={visible2} onClose={closeHandler2}>
                <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                <Text color="#363449">
                    Desinfectante para baños
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Image
                    showSkeleton
                    src={e2}
                    width={400}
                    height={490}
                />
                </Modal.Body>
            </Modal>
            <Modal noPadding open={visible3} onClose={closeHandler3}>
                <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                <Text color="#363449">
                    Limpia alfombras
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Image
                    showSkeleton
                    src={e3}
                    width={400}
                    height={490}
                />
                </Modal.Body>
            </Modal>
            <Modal noPadding open={visible4} onClose={closeHandler4}>
                <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                <Text color="#363449">
                    Limpiador de muebles
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Image
                    showSkeleton
                    src={e4}
                    width={400}
                    height={490}
                />
                </Modal.Body>
            </Modal>

            <Grid.Container gap={2} justify='center'>
                <Grid xs={6} sm={3}>
                    <Card isPressable onClick={handler}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={e1}
                                objectFit="contain"
                                width="80%"
                                height={140}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>Desengrasante de cocina</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid xs={6} sm={3}>
                    <Card isPressable onClick={handler2}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={e2}
                                objectFit="contain"
                                width="80%"
                                height={140}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>Desinfectante para baños</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid xs={6} sm={3}>
                    <Card isPressable onClick={handler3}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={e3}
                                objectFit="contain"
                                width="80%"
                                height={140}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>Limpia alfombras</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid xs={6} sm={3}>
                    <Card isPressable onClick={handler4}>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={e4}
                                objectFit="contain"
                                width="80%"
                                height={140}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>Limpiador de muebles</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>


                <Grid xs={6} sm={4}>
                    <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid.Container>
            

        </div>
    );
};
  
  export default Products;

  
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
];