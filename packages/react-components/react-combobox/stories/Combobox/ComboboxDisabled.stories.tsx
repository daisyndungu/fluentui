import * as React from 'react';
import { makeStyles, shorthands, useId } from '@fluentui/react-components';
import { Combobox, Option } from '@fluentui/react-combobox';
import type { ComboboxProps } from '@fluentui/react-combobox';

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: 'grid',
    gridTemplateRows: 'repeat(1fr)',
    justifyItems: 'start',
    ...shorthands.gap('2px'),
    maxWidth: '400px',
  },
});

export const Disabled = (props: Partial<ComboboxProps>) => {
  const comboId = useId('combo-disabled');
  const options = ['Cat', 'Dog', 'Ferret', 'Fish', 'Hamster', 'Snake'];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox aria-labelledby={comboId} disabled placeholder="Select an animal" {...props}>
        {options.map(option => (
          <Option key={option}>{option}</Option>
        ))}
      </Combobox>
    </div>
  );
};
