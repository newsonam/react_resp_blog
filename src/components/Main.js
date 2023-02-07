import React,{useState}from 'react';
import { Button,Card,CardBody,Image,Stack,Heading,Text, } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import {Data} from './Data.js';
import './style.css';
function Main(props) {
    const [data,]=useState(Data);
    return (
        <div>
            <section className='section-first'>
                <div className="section-first-left">
                    <img src="./images/truck.png" alt="loading" className='truck-logo-image' />
                    <h1 className='discover'>Discover the Best <span className='red'>Food</span> and Drinks</h1>
                    <p className='naturally-text'>Naturally made Healthcare Products for the better care & support of your body</p>
                    <Button
                        size='lg'
                        height='55px'
                        width='200px'
                        border='2px'
                        colorScheme='red'
                        borderRadius='25px'
                        className="explore-btn"
                    >
                        Explore Now!
                    </Button>
                </div>
                <div>
                    <img src="./images/pizza.png" alt="loading" className='pizza-image' />
                </div>

            </section>


            <section className='section-second'>
                <img src="./images/about.png" alt="loading" className="about-img" />

                <div className="section-second-right">
                    <h1 className='about-title'>About Us</h1>
                    <p className='about-para'>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum
                        has been the industry's standard dummy text ever since the 1500s when an unknown printer took a gallery of
                        type and scrampled it to make a type specimen book .It has survived not only five centuries.
                    </p>
                    <Button
                        size='lg'
                        height='55px'
                        width='200px'
                        border='2px'
                        colorScheme='red'
                        borderRadius='25px'
                        className="read-btn"
                    >
                        Read More
                    </Button>
                </div>
            </section>


            <section className="card-wrapper">
                <h1 className="latest">Latest Articles</h1>
               <div className='food-card'>
                {data.map((food)=>{

                return(
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={food.image}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' className='food-title'>{food.title}</Heading>
                            <Text>
                               {food.description}
                            </Text>
                            <Button
                        size='sm'
                        height='50px'
                        width='100px'
                        border='1px'
                        borderRadius='25px'
                        className="explore-btn"
                    >
                         Read More
                    </Button>
                        </Stack>
                    </CardBody>
                
                </Card>
                );
                })}
                </div>
            </section>

            {/* footer */}
            <footer className='footer-wrapper'>
                <img src="./images/truck.png" alt="loading" className='truck-image' />

                <div className='contact-wrapper'>
                    <h3 className='contact'>Contact Us</h3>
                    <div>
                        <h5 className='address'>Lorem Ipsum Pvt. Ltd.,Magalton</h5>
                        <h5 className='address'>Road Phartosh Gate near YTM </h5>
                        <h5 className='address'> Market , XYZ-343434</h5>
                    </div>
                    <h5 className='email'>example2020@gmail.com</h5>
                    <h5 className='code'>(904) 443-0343</h5>
                </div>

                <div className='more-wrapper'>
                    <h3 className='more'>More</h3>
                    <h5 className='about'>About Us</h5>
                    <h5 className='product'>Products</h5>
                    <h5 className='career'>Career</h5>
                    <h5 className='contactus'>Contact Us</h5>

                </div>
                <div className='text-icons'>
                    <h3 className='social-text'>Social Links</h3>
                    <div className='icons-wrapper'>
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebookF />
                    </div>
                    <div>

                        <p className='copyright'>2022 Food Truck Example</p>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Main;