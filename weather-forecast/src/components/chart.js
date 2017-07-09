import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({data, color}) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  </div>
);
