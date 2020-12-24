import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { isEmpty } from 'loadsh';
import { ruleSet } from './src/pages/Contact/models/rule-set';
import { validateProp } from './src/validation/validator';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = [];

app.post('/api/contact', function (req, res, next) {
  const { email, message } = req.body;

  const errorEmail = validateProp(email, ruleSet.email);
  const errorMessage = validateProp(message, ruleSet.message);

  const isValid = isEmpty(errorEmail) || isEmpty(errorMessage);

  if (!isValid) {
    return res.json({
      success: false,
      message: [errorMessage, errorEmail].filter(Boolean)
    }).status(422);
  }

  data.push(req.body);

  const successMsg = 'Your message has been sent!';
  return res.json({
    success: true,
    message: [successMsg]
  }).status(200)
})

app.listen(4000, function () {
  console.log('server started on 4000')
})
