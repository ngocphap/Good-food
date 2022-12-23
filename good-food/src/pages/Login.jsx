import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, FormGroup, Form, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import "../styles/login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      console.log("loi");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loadding..........</h5>
              </Col>
            ) : (
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Đăng Nhập</h3>

                <Form className="form_page mb-5 " onSubmit={login}>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      // ref={loginNameRef}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      // ref={loginPasswordRef}
                    />
                  </FormGroup>

                  <Button color="danger" type="submit" className="mb-5 w-100">
                    Đăng Nhập
                  </Button>
                  <p>
                    Chưa có tài khoản?
                    <Link to="/register">Đăng ký</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
