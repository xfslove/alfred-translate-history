"use strict";
var alfy = require('alfy');
var configstore = require('configstore');
var history = new configstore('translate-history');

var histories = JSON.parse(history.get('history') || '[]').reverse();
var items = [];
histories.forEach(input => {
    items.push({
        title: input.from.join(' '),
        subtitle: `${input.to.join(' ')} Date: ${new Date(input.time).toDateString()}`,
        text: {
            copy: input.from.join(' ')
        }
    })
});
if (items.length === 0) {
    items.push({
        title: 'No history.'
    })
}
alfy.output(items);