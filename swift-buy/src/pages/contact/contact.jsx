import React, { useState } from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (formData.fullName.length < 3) {
            newErrors.fullName =
                "Full name must be at least 3 characters long.";
        }

        if (formData.subject.length < 3) {
            newErrors.subject = "Subject must be at least 3 characters long.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (formData.body.length < 3) {
            newErrors.body = "Body must be at least 3 characters long.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            console.log("Form Data Submitted: ", formData);
            alert("Form submitted successfully!");
        } else {
            setErrors(formErrors);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    {errors.fullName && (
                        <p className={styles.errorText}>{errors.fullName}</p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    {errors.subject && (
                        <p className={styles.errorText}>{errors.subject}</p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <p className={styles.errorText}>{errors.email}</p>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label>Body:</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                    {errors.body && (
                        <p className={styles.errorText}>{errors.body}</p>
                    )}
                </div>

                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
