import React from 'react'
import {useForm, useStep} from 'react-hooks-helper';
import Names from './formSteps/Names';
import Address from './formSteps/Address';
import Contact from './formSteps/Contact';
import Review from './formSteps/Review';
import Submit from './formSteps/Submit';
import './multiStepForm.css';

const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
};

const steps = [
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" },
  ];

  const renderSwitch = (step, props) => {
    switch (step.id) {
        case "names":
          return <Names {...props}/>;
        case "address":
          return <Address {...props}/>;
        case "contact":
          return <Contact  {...props}/>;
        case "review":
          return <Review {...props}/>;
        case "submit":
          return <Submit {...props}/>;
      }
  }
  
const MultiStepForm = () => {
    const [formData, setFormData] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
      });
      const props = { formData, setFormData, navigation };
    return (
        <div>
            <h1>Multi step form</h1>
            <div style={{background: 'grey', padding: '20px', borderRadius: '20px', display: 'grid', gridGap: '20px', gridAutoFlow: 'column' }}>
                {steps.map((item) => (
                    <h1 className={item.id === step.id ? 'white' : 'black' }>{item.id}</h1>
                ))}
            </div>
            {renderSwitch(step, props)}
        </div>
    )
}

export default MultiStepForm
