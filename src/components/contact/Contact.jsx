import React from 'react'
import mailIcon from "../../assets/mail-icon.png"
import phoneIcon from "../../assets/phone-icon.png"
import locationIcon from "../../assets/location-icon.png"
import msgIcon from "../../assets/msg-icon.png"
import whiteArrow from "../../assets/white-arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [values, setValues] = React.useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});

  const validateField = (field, value) => {
    const v = (value || '').trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (field) {
      case 'name':
        if (!v) return 'Name is required.';
        if (/[0-9]/.test(v)) return 'Name must not contain numbers.';
        return '';
      case 'email':
        if (!v) return 'Email is required.';
        if (!emailRe.test(v)) return 'Enter a valid email address.';
        return '';
      case 'message':
        if (!v) return 'Message is required.';
        return '';
      case 'phone':
        if (!value) return '';
        if (/[A-Za-z]/.test(value)) return 'Phone number must not contain letters.';
        const digits = (value.match(/\d/g) || []).length;
        if (digits > 0 && digits < 7) return 'Enter a valid phone number.';
        return '';
      default:
        return '';
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // run custom validation
    const validationErrors = {};
  if (!values.name.trim()) validationErrors.name = 'Name is required.';
  else if (/[0-9]/.test(values.name)) validationErrors.name = 'Name must not contain numbers.';
    if (!values.email.trim()) validationErrors.email = 'Email is required.';
    else {
      // simple email regex
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(values.email)) validationErrors.email = 'Enter a valid email address.';
    }
    if (!values.message.trim()) validationErrors.message = 'Message is required.';
    // phone: disallow letters; require at least 7 digits
    if (values.phone && /[A-Za-z]/.test(values.phone)) validationErrors.phone = 'Phone number must not contain letters.';
    else {
      const digits = (values.phone.match(/\d/g) || []).length;
      if (values.phone && digits < 7) validationErrors.phone = 'Enter a valid phone number.';
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSending(true);
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "24eb5620-2199-4fd1-8d3b-8e0ce1c3ea96");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setResult("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="text-black/60 flex flex-col items-center max-w-screen-2xl mx-auto pt-20 md:px-12 px-4 pb-20">
      <div className="text-center mb-24">
        <h3 className='className="text-4xl font-bold text-blue-950"'>
          Contact Us
        </h3>
        <h1 className='text-4xl font-bold text-blue-950"'>Get in Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:justify-between font-semibold px-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-2xl font-semibold text-blue-950">
              Send us a message
            </h1>
            <img className="w-10" src={msgIcon} alt="" />
          </div>
          <p className="text-[17px] mb-6">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img className="w-8" src={mailIcon} alt="" />
              <p>Contact@GreatStack.dev</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8" src={phoneIcon} alt="" />
              <p>+1 123-456-7890</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8" src={locationIcon} alt="" />
              <p className="w-[65%]">
                77 Massachusetts Ave, Cambridge MA 02139, United States
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-6">
          <div>
            <p>Your name</p>
            <input
              className="w-full bg-[#f4edfa] h-12 p-5 font-normal text-sm"
              name="name"
              value={values.name}
              onChange={(e) => {
                const v = e.target.value;
                setValues({ ...values, name: v });
                const err = validateField('name', v);
                setErrors(prev => {
                  const next = { ...prev };
                  if (err) next.name = err; else delete next.name;
                  return next;
                });
              }}
              placeholder="Enter your name"
              type="text"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <p>Phone number</p>
            <input
              className="w-full bg-[#f4edfa] h-12 p-5 font-normal text-sm"
              name="phone"
              inputMode="tel"
              value={values.phone}
              onChange={(e) => {
                const v = e.target.value;
                setValues({ ...values, phone: v });
                const err = validateField('phone', v);
                setErrors(prev => {
                  const next = { ...prev };
                  if (err) next.phone = err; else delete next.phone;
                  return next;
                });
              }}
              placeholder="Enter mobile number"
              type="tel"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <p>Your Email</p>
            <input
              className="w-full bg-[#f4edfa] h-12 p-5 font-normal text-sm"
              name="email"
              value={values.email}
              onChange={(e) => {
                const v = e.target.value;
                setValues({ ...values, email: v });
                const err = validateField('email', v);
                setErrors(prev => {
                  const next = { ...prev };
                  if (err) next.email = err; else delete next.email;
                  return next;
                });
              }}
              placeholder="Enter your email id"
              type="email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <p>Write your message here</p>
            <textarea
              className="w-full bg-[#f4edfa] h-40 p-5 font-normal text-sm resize-none"
              name="message"
              value={values.message}
              onChange={(e) => {
                const v = e.target.value;
                setValues({ ...values, message: v });
                const err = validateField('message', v);
                setErrors(prev => {
                  const next = { ...prev };
                  if (err) next.message = err; else delete next.message;
                  return next;
                });
              }}
              placeholder="Enter your message"
              type="text"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="captcha border w-[80%] h-16"></div>
          <button
            disabled={sending}
            className={`bg-blue-900 rounded-full flex items-center justify-center text-white w-[200px] p-4 btn gap-4 ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            <p>{sending ? 'Sending...' : 'Submit now'}</p>
            <img className="w-6" src={whiteArrow} alt="" />
          </button>

          {result && (
            <p className="mt-3 text-sm text-black/70">{result}</p>
          )}
        </form>
      </div>
      <hr className="w-full border-black/80 mt-28 mb-4" />
      <div className='text-black/80 font-semibold flex flex-col md:flex-row md:justify-between items-center w-full'>
        <p>© 2024 Edusity. All rights reserved.</p>
        <div className='flex gap-6'>
          <a href="">Teams of Services</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Contact