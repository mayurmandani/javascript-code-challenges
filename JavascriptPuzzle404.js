/* set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message" */

function log() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
}


log('my message');  // (app) my message

log('Hello', 'Mayur'); // (app) Hello Mayur







