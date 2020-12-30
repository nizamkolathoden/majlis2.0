import React from "react";
import { useFormik } from "formik";
import classes from "../../../../App.module.css";

const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      admissionNumber: "",
      name: ""
    },
    onSubmit: values => {
      console.log('form submission', values)
      login()
    },
    validate: values => {
      let errors = {}

      if (!values.admissionNumber) {
        errors.admissionNumber = 'Admission Number required'
      }

      if (!values.name) {
        errors.name = 'Name required'
      } else if (/[0-9~@#$^*()_+=[\]{}|\\,.?:<>'"/;`%]/.test(values.name)) {
        formik.values.name = ""
        errors.name = 'invalid Name format'
      }

      return errors
    },


  });
  console.log(formik.values)

  //login
  const login = () => {
    console.log('called')
    fetch('/auth/login', {
      method: 'Post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        admno: formik.values.admissionNumber
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.error) {
        alert(data.error)
      }
      if (data.token !== undefined) {
        //localstorage token name Token_majlis
        localStorage.setItem("Token_majlis", JSON.stringify(data.token))
        //localstorge user user_majlis
        localStorage.setItem("user_majlis", JSON.stringify(data.user))
        /* dispatch({type:'USER',payload:data.user})
        history.push('/user') */
      }

    }
    )

  }



  return (
    <div className={classes.AuthSection}>
      <form onSubmit={formik.handleSubmit} action="Post" className={classes.AuthForm}>
        <input
          id="admissionNumber"
          type="number"
          name="admissionNumber"
          placeholder={formik.errors.admissionNumber && formik.touched.admissionNumber ? formik.errors.admissionNumber : "Admission number"}
          className={formik.errors.admissionNumber && formik.touched.admissionNumber ? classes.errorMessage : `${classes.Input_admission} ${classes.Input}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.admissionNumber}

        />
        <input
          id="name"
          type="text"
          name="name"
          placeholder={formik.errors.name && formik.touched.name ? formik.errors.name : 'Name'}
          className={formik.errors.name && formik.touched.name ? classes.errorMessage : `${classes.Input_name} ${classes.Input}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        <input className={classes.Submit} type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default AuthForm;
