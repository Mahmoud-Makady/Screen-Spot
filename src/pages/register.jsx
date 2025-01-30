import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { ContextLang } from '../Context/ContextLang';


export default function Register() {
      const { contextLang } = useContext(ContextLang);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Email validation
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Name validation
  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  // Username validation
  const validateUsername = (value) => {
    const usernameRegex = /^\S+$/; // No spaces allowed
    if (!usernameRegex.test(value)) {
      setUsernameError("Username cannot contain spaces");
    } else {
      setUsernameError("");
    }
  };

  // Password validation
  const validatePassword = (value) => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !emailError &&
      !nameError &&
      !usernameError &&
      !passwordError &&
      !confirmPasswordError &&
      email &&
      name &&
      username &&
      password &&
      confirmPassword
    ) {
      console.log("Registration successful!");
      alert("Registration successful!");
    }
  };

  return (
    <>
      <div className="container py-5 pt-5 mt-4" style={{height: 525}}>
        <div className="row pt-5">
          <div className="col-md-6 pt-4 text-center">
            <img src={logo} alt="logo" width={250}/>
            <h1 className='text-secondary text-center mt-3'>
            {contextLang === "En" ? "Create An Account" : "تسجيل حساب جديد"}
            </h1>
            
          </div>
          <div className="col-md-6">
          <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationName">
          <Form.Control
            className="mb-2"
            type="text"
            placeholder={contextLang === "En" ? "Full Name" : "الاسم الكامل"}
            required
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationUsername">
          <InputGroup hasValidation>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder={contextLang === "En" ? "Username" : "اسم المستخدم"}
              required
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError && (
              <Form.Text className="text-danger">{usernameError}</Form.Text>
            )}
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationEmail">
          <Form.Control
            className="mb-2"
            type="email"
            placeholder={contextLang === "En" ? "Email Address" : "البريد الالكتروني"}
            required
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <Form.Text className="text-danger">{emailError}</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationPassword">
          <Form.Control
            className="mb-2"
            type="password"
            placeholder={contextLang === "En" ? "Password" : "كلمة السر"}
            required
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <Form.Text className="text-danger">{passwordError}</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationConfirmPassword">
          <Form.Control
            className="mb-2"
            type="password"
            placeholder={contextLang === "En" ? "Password" : "تأكيد كلمة السر"}
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && (
            <Form.Text className="text-danger">
              {confirmPasswordError}
            </Form.Text>
          )}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 text-white">
        <Form.Check
          required
          label={contextLang === "En" ? "Agree to terms and conditions" : "الموافقة على الشروط والأحكام"}
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">
        {contextLang === "En" ? "Register" : "تسجيل الحساب"}
      </Button>
      <br />
      <p className="text-secondary">
      {contextLang === "En" ? "You have an account ?" : "تمتلك حسابا بالفعل ؟"}
        <Link className='text-primary' as={Link} to="./login">
          {contextLang === "En" ? "Login" : "تسجيل الدخول"}
        </Link>
      </p>
    </Form>
          </div>
        </div>
      
    
      </div>
    </>
  );
}
