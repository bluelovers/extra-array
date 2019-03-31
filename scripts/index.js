// Datatype methods:
Array.is = require('./is');

// About methods:
Array.equal = require('./equal');
Array.first = require('./first');
Array.middle = require('./middle');
Array.last = require('./last');
Array.values = require('./values');

// Generate methods:
Array.arange = require('./arange');
Array.linspace = require('./linspace');
Array.fromEntries = require('./from-entries');
Array.fromLists = require('./from-lists');

// Search methods:
Array.indexOf = require('./index-of');
Array.indicesOf = require('./indices-of');
Array.lastIndexOf = require('./last-index-of');
Array.includes = require('./includes');
Array.includesOnly = require('./includes-only');
Array.binarySearch = require('./binary-search');
Array.binarySearch.closest = require('./binary-search.closest');
Array.binarySearch.first = require('./binary-search.first');
Array.binarySearch.last = require('./binary-search.last');
Array.contains = require('./contains');
Array.count = require('./count');
Array.countAll = require('./count-all');

// Transform methods:
Array.join = require('./join');
Array.pick = require('./pick');
Array.pickAs = require('./pick-as');
Array.slice = require('./slice');
Array.copy = require('./copy');
Array.move = require('./move');
Array.compact = require('./compact');
Array.unique = require('./unique');
Array.fill = require('./fill');
Array.reverse = require('./reverse');
Array.sort = require('./sort');
Array.sortIndex = require('./sort-index');
Array.zip = require('@extra-iterable/zip');
Array.unzip = Array.zip;
Array.zipObject = require('./zip-object');
Array.append = require('./append');
Array.repeat = require('./repeat');

// Functional methods:
Array.forEach = require('./for-each');
Array.some = require('./some');
Array.every = require('./every');
Array.find = require('./find');
Array.findIndex = require('./find-index');
Array.findAll = require('./find-all');
Array.findAllIndices = require('./find-all-indices');
Array.reduce = require('./reduce');
Array.filter = require('./filter');
Array.map = require('./map');

// Evaluate methods:
Array.any = require('./any');
Array.all = require('./all');
Array.max = require('./max');
Array.min = require('./min');
Array.sum = require('./sum');
Array.average = require('./average');
Array.hammingDistance = require('./hamming-distance');
Array.euclideanDistance = require('./euclidean-distance');
module.exports = Array;
