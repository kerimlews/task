
import { must } from '../../../validation/rule-builder';
import { beValidEmail, beLongerThan, beNotEmpty } from '../../../validation/predicates';

export const ruleSet = {
  email: must(beNotEmpty)
    .withMessage('Email is required')
    .and(beValidEmail)
    .withMessage('Email is not valid'),
  message: must(beLongerThan(30))
    .withMessage('Message must be longer than 30 charatchers')
};
