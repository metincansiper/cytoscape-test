var cytoscape = require('cytoscape');
var $ = require('jquery');

$(function () { // on dom ready

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: true,
    style: [
      {
        selector: 'node',
        css: {
          'content': 'data(id)',
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: 'node:parent',
        css: {
          'padding': function (ele) {
            return ele.data('padding') || 5;
          },
          'text-valign': 'top',
          'text-halign': 'center',
          'background-color': '#bbb'
        }
      },
      {
        selector: 'edge',
        css: {
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      },
      {
        selector: ':selected',
        css: {
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black'
        }
      }
    ],
    elements: {
      nodes: [
        {data: {id: 'a', parent: 'b'}, position: {x: 215, y: 85}},
        {data: {id: 'b'}},
        {data: {id: 'c', parent: 'b'}, position: {x: 300, y: 85}},
        {data: {id: 'd'}, position: {x: 215, y: 175}},
        {data: {id: 'e'}},
        {data: {id: 'f', parent: 'e'}, position: {x: 300, y: 175}}
      ],
      edges: [
        {data: {id: 'ad', source: 'a', target: 'd'}},
        {data: {id: 'eb', source: 'e', target: 'b'}}

      ]
    },
    layout: {
      name: 'preset',
      padding: 5
    }
  });
}); // on dom ready