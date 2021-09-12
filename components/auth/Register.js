import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'
import { toast } from "react-toastify";
import ButtonLoader from "../layout/ButtonLoader";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearErrors } from "../../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    biography: "",
  });

  const { name, email, password, biography } = user;

  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push("/login");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      biography,
    };
debugger
    dispatch(registerUser(userData));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">{t("common:join_us")}</h1>

            <div className="form-group">
              <label htmlFor="name_field">{t("common:name")}</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">{t("common:email")}</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">{t("common:password")}</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>{t("common:biography")}</Form.Label>
                <Form.Control 
                as="textarea"
                value={biography}
                onChange={onChange}
                name="biography"
                placeholder={t('common:bio_tip')}
                rows={3} />
              </Form.Group>
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              {loading ? <ButtonLoader /> : "REGISTER"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
