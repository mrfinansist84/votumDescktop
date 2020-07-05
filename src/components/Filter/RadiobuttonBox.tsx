import React from 'react';
import { RadioButtonBoxProps } from './interface';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {BLUE_FOR_CARD} from '../../global/pallete';

export const RadioButtonBox: React.FC<RadioButtonBoxProps> = ({ filterHandler, value, filters }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterHandler((event.target as HTMLInputElement).value)
  };

  return (
    <RadioGroup
      name="protocolsFilter"
      style={{ flexDirection: 'row' }}
      value={value}
      onChange={handleChange} >

      {filters.map((item: {value: string, label: string}, i: number) => (
        <FormControlLabel
          key={i}
          value={item.value}
          label={item.label}
          control={<Radio style={{ color: BLUE_FOR_CARD }} />}
          style={{ marginRight: 40 }} />
      ))}
    </RadioGroup>
  )
}
