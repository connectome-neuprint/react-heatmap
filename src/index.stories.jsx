import React from 'react';

import Heatmap from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Heatmap',
  component: Heatmap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// set up some example data
const data = [
  {column: 'AlphaXX', row: 'AlphaXX', value: 34},
  {column: 'Beta', row: 'Beta', value: 0, label: '0', label2: '2', forceLabel: true},
  {column: 'Dish', row: 'Dish', value: 5000, label2: '0', forceLabel: true},
  {column: 'Dish', row: 'Cish', value: 18, label2: '5', forceLabel: true},
  {column: 'AlphaXX', row: 'Beta', value: 450, label2: '0', forceLabel: true },
  {column: 'Beta', row: 'Cish', value: 21, label2: '3'},
  {column: 'Cish', row: 'AlphaXX', value: null, label2: '8', forceLabel: true},
  {column: 'Dish', row: 'AlphaXX', value: 38, label: 'alternative', label2: '1'},
];

const xLabels = [["AlphaXX", '#ff0000'], "Beta", "Cish", "Dish"]

for ( let i = 0; i < 7; i+=1) {
  ["AlphaXX", "Beta", "Cish", "Dish"].forEach(item => {xLabels.push(`${item}${i}`)});
}

const yLabels = [["AlphaXX","#ff0000"],[ "Beta", "#00ff00"], ["Cish", "#0000ff"], "Dish", "Beta1"].reverse();


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heatmap {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data,
  width: 800,
	xLabels,
	yLabels,
  colors: ['#396a9f', '#e2b72f'],
  preserveTopLevelOrder: true
};
