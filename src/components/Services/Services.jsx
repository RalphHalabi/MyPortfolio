import { useState } from 'react';
import './Services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section
      className='services section'
      id='services'
    >
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              Product <br /> Designer
            </h3>
          </div>

          <span
            className='services__button'
            onClick={() => toggleTab(1)}
          >
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>Product Designer</h3>
              <p className='services__modal-description'>
                Offering over 2 years of expertise, I provide high-quality
                services to clients and companies, ensuring satisfaction and
                excellence in every project.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Crafting innovative product designs.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Blending form and function to create user experiences.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Transforming ideas into tangible.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Maintenance and Support.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span
            className='services__button'
            onClick={() => toggleTab(2)}
          >
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>Ui/Ux Designer</h3>
              <p className='services__modal-description'>
                Offering over 2 years of expertise, I provide high-quality
                services to clients and companies, ensuring satisfaction and
                excellence in every project.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    I develop the user interface.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Web page development.</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Web Application Development.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Maintenance and Support.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-edit services__icon'></i>
            <h3 className='services__title'>
              Web Service & <br /> Solutions
            </h3>
          </div>

          <span
            className='services__button'
            onClick={() => toggleTab(3)}
          >
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>
                Web Services & Solutions
              </h3>
              <p className='services__modal-description'>
                Offering over 2 years of expertise, I provide high-quality
                services to clients and companies, ensuring satisfaction and
                excellence in every project.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Performance Enhancement Suite.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>SEO Integration.</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Web Application Development.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Maintenance and Support.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
