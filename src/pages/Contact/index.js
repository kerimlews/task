import React, { useState } from 'react';
import Layout from 'components/Layout';
import { ruleSet } from './models/rule-set';
import { post } from 'utils/ajax';
import Alert from 'components/Alert';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import { useTextInput } from 'utils/hooks';
import { isInstanceValid } from 'validation/validator';

const Contact = () => {
  const [alert, setAlert] = useState({ type: 'danger', message: [] });
  const [isLoading, setLoading] = useState(false);
  const [isSubmitAttempted, setSubmitAttempted] = useState(false);
  const email = useTextInput('', 'E-mail', isSubmitAttempted, ruleSet.email);
  const message = useTextInput('', 'Message', isSubmitAttempted, ruleSet.message);
  const state = {
    email: email.value,
    message: message.value
  };

  const submit = () => {
    setSubmitAttempted(true);

    if (isInstanceValid(state, ruleSet))
      sendRequest();
  }

  const sendRequest = async () => {
    setLoading(true);

    const response = await post('contact', state);

    const type = response.success
      ? 'success'
      : 'danger';

    setAlert({ type, message: response.message })
    setLoading(false);
  }

  return (
  <Layout title="Contact us">

      <div className="col-12">

        <Alert {...alert} />

        <TextInput {...email} />
        <TextInput {...message} />

        <div className="mt-2">
          <Button
            isLoading={isLoading}
            onClick={submit}
            type="primary"
            value="Submit"
          />
        </div>

      </div>

  </Layout>
  );
}



export default Contact;
