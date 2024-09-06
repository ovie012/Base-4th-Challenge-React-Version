import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const emailRef = useRef();
  const errorStyle = {
    border: '1.5px solid hsl(0, 93%, 68%)',
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailRef.current.value;
    if (email === '') {
      setError(true);
      setErrorText(`field can't be empty`);
    } else if(!emailRegex.test(email)) {
      setError(true);
      setErrorText(`Please provide a valid email`);
    } else {
      setError(false);
      setErrorText('');
    };
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="info">
              <div className="logo">
                  <img src="/logo.svg" alt="base apparel" />
              </div>
              <div className="text-info">
                  <h1>We're <span>coming soon</span></h1>
                  <p>Hello fellow shoppers! We're currently building our new fashion store. 
                      Add your email below to stay up-to-date with announcements and our launch deals.</p>
              </div>
              <div className='form'>
                  <form>
                      <input 
                        style={error ? errorStyle : {}} 
                        ref={emailRef} 
                        className="input" 
                        type="text" 
                        placeholder="Email Address" 
                      />
                      {error && 
                        <img 
                          className="error-logo" 
                          src="/icon-error.svg" 
                          alt="error" 
                        />
                      }
                      <button 
                        onClick={handleSubmit} 
                        className="button" 
                        type="button"
                      >
                          <img src="/icon-arrow.svg" />
                      </button>
                  </form>
                  {error && <p className="error">{errorText}</p>}
                  {/*take note, you only ever need {error && anything} if the element isn't displayed by an active class */}
                  {/* i believe it is a better practice to just set a class to active if theres error example:: ${error ? 'active' : ''} but i intentionally tried doing everything dynamically for educational purposes since i normally do it using css */}
              </div>
          </div>
          <div className="image">
              <div className="img">
                  <img className="desktop" src="/hero-desktop.jpg" alt="banner" />
                  <img className="mobile" src="/hero-mobile.jpg" alt="base apparel" />
              </div>
          </div>
          </div>
      </main>
    </>
  )
};

export default App

//LEGEND.DEV coded this










//better coding practice below

// import { useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const [error, setError] = useState(false);
//   const [errorText, setErrorText] = useState('');
//   const emailRef = useRef(null);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) return "Field can't be empty";
//     if (!emailRegex.test(email)) return 'Please provide a valid email';
//     return '';
//   };

//   const handleSubmit = () => {
//     const email = emailRef.current.value;
//     const validationError = validateEmail(email);
//     setError(!!validationError);
//     setErrorText(validationError);
//   };

//   return (
//     <main>
//       <div className="container">
//         <div className="info">
//           <div className="logo">
//             <img src="/logo.svg" alt="Base Apparel" />
//           </div>
//           <div className="text-info">
//             <h1>We're <span>coming soon</span></h1>
//             <p>
//               Hello fellow shoppers! We're currently building our new fashion store. 
//               Add your email below to stay up-to-date with announcements and our launch deals.
//             </p>
//           </div>
//           <div className="form">
//             <form>
//               <input 
//                 ref={emailRef}
//                 className={`input ${error ? 'error-input' : ''}`}
//                 type="text"
//                 placeholder="Email Address"
//                 style={error ? { border: '1.5px solid hsl(0, 93%, 68%)' } : {}}
//               />
//               {error && <img className="error-logo" src="/icon-error.svg" alt="Error" />}
//               <button onClick={handleSubmit} className="button" type="button">
//                 <img src="/icon-arrow.svg" alt="Submit" />
//               </button>
//             </form>
//             {error && <p className="error">{errorText}</p>}
//           </div>
//         </div>
//         <div className="image">
//           <div className="img">
//             <img className="desktop" src="/hero-desktop.jpg" alt="Banner" />
//             <img className="mobile" src="/hero-mobile.jpg" alt="Base Apparel" />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
