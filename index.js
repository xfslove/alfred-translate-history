"use strict";
var alfy = require('alfy');
var configstore = require('configstore');
var history = new configstore('translate-history');

var histories = JSON.parse(history.get('history') || '[]').reverse();
var items = [];
histories.forEach(input => {
    items.push({
        title: input.from,
        subtitle: `${input.to} Date: ${new Date(input.time).toDateString()}`,
        text: {
            copy: input.from,
            largetype: `${input.from}\n${input.to}`
        }
    })
});
if (items.length === 0) {
    items.push({
        title: 'No history.'
    })
}
alfy.output(items);