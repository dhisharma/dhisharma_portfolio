import React, { useState } from 'react';
import { Mailer } from 'nodemailer-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [subject, setSubject] = useState('');

  const sendMail = () => {
    console.log({ name, email, phone, subject });
    let mailerConfig = {
      host: 'smtp.example.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: 'username',
        pass: 'password',
      },
    };
    const mailer = Mailer(mailerConfig, ['']);
  };
  return (
    <section className='contact' id='contact'>
      {/* email
      name
      phone
      subject */}
      <h3 className='contact-intro  text-center'>Contact me!</h3>
      <div className='form-div text-center'>
        <form className='form'>
          <div className='form-group display-flex row'>
            <label for='email' className='form-label col-md-4'>
              Email
            </label>
            <input
              type='email'
              className='form-control fields'
              placeholder='Email'
              className='col-md-8'
              id='email'
              onChange={(e) => {
                setEmail(e.target.value);
                console.log('email ' + email);
              }}
            />
          </div>
          <div className='form-group row'>
            <label for='name' className='form-label col-md-4'>
              Name
            </label>

            <input
              type='text'
              className='form-control fields'
              placeholder='Name'
              className='col-md-8'
              id='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group row'>
            <label for='phone' className='form-label col-md-4'>
              Phone
            </label>

            <input
              type='number'
              className='form-control fields'
              placeholder='Phone Number'
              className='col-md-8'
              id='phone'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='form-group row'>
            <label
              for='subject'
              placeholder='Subject'
              className='form-label col-md-4'
            >
              Subject
            </label>

            <textarea
              id='subject'
              class='form-control col-md-8'
              row='10'
              onChange={(e) => setSubject(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              sendMail(name, email, phone, subject);
            }}
          >
            {' '}
            Submit{' '}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
