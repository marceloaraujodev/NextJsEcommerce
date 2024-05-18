
import styled from 'styled-components';
import Center from './Center';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useState } from 'react';
import axios from 'axios';

const Bg = styled.div`
  background-color: #222;
  color: white;
  /* margin-top: auto; */
  /* margin-bottom: 0; */

  /* margin: auto 0; */
`;

const FooterLink = styled.a`
  font-size: .9rem;
`;
const FooterText = styled.p`
  font-size: .9rem;
`;

export default function Footer() {
  const [email, setEmail] = useState('');

  async function handleEmail(){
    console.log(email)
    const response = await axios.post('/api/newsletter', {email});
    console.log(response)
  }
  return (
    <>
      <Bg>

        <Center>
          <footer>
            <div className="container">
              <footer className="pt-5 pb-4">
                <div className="row pb-4">
                  <div className="col-6 col-md-2 mb-3">
                    <h5>Site Map</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <FooterLink href="/" className="nav-link p-0 text-white">
                          Home
                        </FooterLink>
                      </li>
                      <li className="nav-item mb-2">
                        <FooterLink href="/products" className="nav-link p-0 text-white">
                          Products
                        </FooterLink>
                      </li>
                      <li className="nav-item mb-2">
                        <FooterLink href="/categories" className="nav-link p-0 text-white">
                          Categories
                        </FooterLink>
                      </li>

                      <li className="nav-item mb-2">
                        <FooterLink href="#" className="nav-link p-0 text-white">
                          About
                        </FooterLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-2 mb-3">
                  <h5>Account</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <FooterLink href="/account" className="nav-link p-0 text-white">
                          Account
                        </FooterLink>
                      </li>
                      <li className="nav-item mb-2">
                        <FooterLink href="/admin" className="nav-link p-0 text-white">
                          Admin
                        </FooterLink>
                      </li>
                      <li className="nav-item mb-2">
                        <FooterLink href="/cart" className="nav-link p-0 text-white">
                          Cart
                        </FooterLink>
                      </li>

                    </ul>
                  </div>

                  <div className="col-6 col-md-2 mb-3">
                    {/* <h5>Section</h5> */}
                   
                  </div>

                  <div className="col-md-5 offset-md-1 mb-3">
                    <form >
                      <h5>Subscribe to our newsletter</h5>
                      <FooterText>Monthly digest of what's new and exciting from us.</FooterText>
                      <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label
                          htmlFor="newsletter1"
                          className="visually-hidden"
                        >
                          Email address
                        </label>
                        <input
                          id="newsletter1"
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button $outline $white type="button" 
                          onClick={handleEmail}
                         >
                          Subscribe
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-2 border-top">
                  <p>© 2024 Company, Inc. All rights reserved.</p>
                  <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                      <a className="link-body-emphasis" href="#">
                        <svg className="bi" width="24" height="24">
                          <use xlinkHref="#twitter"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-body-emphasis" href="#">
                        <svg className="bi" width="24" height="24">
                          <use xlinkHref="#instagram"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-body-emphasis" href="#">
                        <svg className="bi" width="24" height="24">
                          <use xlinkHref="#facebook"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </footer>
        </Center>

      </Bg>
    </>
  );
}
