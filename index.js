module.exports = function imline(base64EncodedData) {
  return '\u001b]1337;File=inline=1:' + base64EncodedData + '\u0007\n';
};
