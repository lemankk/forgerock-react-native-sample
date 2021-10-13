import React from 'react';
import { FormControl, Input } from 'native-base';
import { handleFailedPolicies } from '../utilities/failed-policies';

const TextField = ({ callback }) => {
  const error = '';
  const label = callback.getPrompt();
  return (
    <FormControl isInvalid={error}>
      <FormControl.Label>{label}</FormControl.Label>
      <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      <Input type="text" onChangeText={(v) => callback.setValue(v)} />
    </FormControl>
  );
};

export { TextField };
