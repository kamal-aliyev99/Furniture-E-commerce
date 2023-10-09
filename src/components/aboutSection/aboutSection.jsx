import React from 'react'
import './aboutSection.scss'
import Button from '../buttons/button'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about.png'

const AboutSection = ({short}) => {
  const images = useSelector((state) => state.productsData.images);


  return (
    <section className="aboutSection">
        <div className="aboutSection__items">
          <div className="aboutSection__image">
            <img src={aboutImage} alt="Furniture"/>
          </div>
          <div className="aboutSection__text">
            <div className="aboutSection__p">
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                { !short &&
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat et voluptates repudiandae sint et molestiae non</p>
                }
            </div>
            { short &&
                <Link to="/about"><Button theme={"light"}>learn more</Button></Link>
            }
            </div>
        </div>
      </section>
  )
}

export default AboutSection