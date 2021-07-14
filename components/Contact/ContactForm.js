import React, {useState, useEffect} from 'react'
import classes from './ContactForm.module.css'
import Notification from '../ui/Notification'

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
        
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
}

export default function ContactForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
        const timer = setTimeout(() => {
            setRequestStatus(null);
            setRequestError(null);
        }, 3000);

        return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event) {
        event.preventDefault();

        // optional: add client-side validation

        setRequestStatus('pending');
        
        try {
            await sendContactData({
                email,
                name,
                message,
            });

            setRequestStatus('success');
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!',
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!',
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        };
    }


    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangeMessage(event) {
        setMessage(event.target.value)
    }


    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email' id='email'>Your Email</label>
                        <input type='email' id='email' required value={email} onChange={onChangeEmail} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name' id='name'>Your Name</label>
                        <input type='name' id='name' required  value={name} onChange={onChangeName} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='message' id='message'>Your Message</label>
                        <textarea id='message' required rows={5} value={message} onChange={onChangeMessage} />
                    </div>
                </div>

                <div className={classes.action}>
                    <button>Send Message</button>
                </div>
            </form>

          {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                    />
            )}
        </section>
    )
}
