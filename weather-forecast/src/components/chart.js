import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
 } from 'react-sparklines';

const average = data => _.round(_.sum(data)/data.length);

export default ({data, units, color}) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type='avg' />
    </Sparklines>
    <div>{average(data)} {units}</div>
  </div>
);
