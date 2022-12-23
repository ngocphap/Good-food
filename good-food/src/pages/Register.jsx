import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, FormGroup, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [numberSDT, setNumberSDT] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const navigete = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firebase database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              numberSDT,
              photoURL: downloadURL,
            });
          });
        }
      );

      // console.log(user);
      setLoading(false);
      navigete("/login");
    } catch (error) {
      setLoading(false);
      toast.error("bi loi");
    }
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loadding..........</h5>
              </Col>
            ) : (
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Đăng Ký</h3>

                <Form className="form_page mb-5 " onSubmit={register}>
                  <FormGroup className="form_group">
                    <input
                      type="text"
                      placeholder="Nhập Họ Tên"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      // required
                      // ref={loginNameRef}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="number"
                      placeholder="Nhập Số Điện Thoại"
                      value={numberSDT}
                      onChange={(e) => setNumberSDT(e.target.value)}
                      // required
                      // ref={loginNameRef}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Nhập Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // required
                      // ref={loginNameRef}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      // required
                      // ref={loginPasswordRef}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      // required
                    />
                  </FormGroup>
                  <Button color="danger" type="submit" className="mb-5 w-100">
                    Đăng Ký
                  </Button>
                  <p>
                    Đã có tài khoản ?<Link to="/login">Đăng nhập</Link>
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

export default Register;
