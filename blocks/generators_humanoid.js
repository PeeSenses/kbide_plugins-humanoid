Blockly.JavaScript['block_type'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `#EXTINC
  #include "Adafruit_PWMServoDriver.h"
  Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();
  #define SERVOMIN  150
  #define SERVOMAX  600
  #END
  #BLOCKSETUP
  pwm.begin();
  pwm.setPWMFreq(60);
  #END
  `;
  return code;
};
Blockly.JavaScript[`lls`] = function(block) {
  var lls1 = block.getFieldValue(`lls1`);
  var lls2 = block.getFieldValue(`lls2`);
  var lls3 = block.getFieldValue(`lls3`);
  var lls4 = block.getFieldValue(`lls4`);
  // TODO: Assemble JasvaScript into code variable.
  var code = 
  `
  #EXTINC
  uint16_t pulsells1;
  uint16_t pulsells2;
  uint16_t pulsells3;
  uint16_t pulsells4;
  #END

  pulsells1 = map(${lls1}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells2 = map(${lls2}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells3 = map(${lls3}, 0, 180, SERVOMIN, SERVOMAX);
  pulsells4 = map(${lls4}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0,0,pulsells1);
  pwm.setPWM(1,0,pulsells2);
  pwm.setPWM(2,0,pulsells3);
  pwm.setPWM(3,0,pulsells4);`;
  return code;
};

Blockly.JavaScript[`lrs`] = function(block) {
  var lrs1 = block.getFieldValue(`lrs1`);
  var lrs2 = block.getFieldValue(`lrs2`);
  var lrs3 = block.getFieldValue(`lrs3`);
  var lrs4 = block.getFieldValue(`lrs4`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
  uint16_t pulselrs1;
  uint16_t pulselrs2;
  uint16_t pulselrs3;
  uint16_t pulselrs4;
  #END

  pulselrs1 = map(${lrs1}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs2 = map(${lrs2}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs3 = map(${lrs3}, 0, 180, SERVOMIN, SERVOMAX);
  pulselrs4 = map(${lrs4}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0,0,pulselrs1);
  pwm.setPWM(1,0,pulselrs2);
  pwm.setPWM(2,0,pulselrs3);
  pwm.setPWM(3,0,pulselrs4);
  `;
  return code;
};

Blockly.JavaScript[`hls`] = function(block) {
  var hls1 = block.getFieldValue(`hls1`);
  var hls2 = block.getFieldValue(`hls2`);
  var hls3 = block.getFieldValue(`hls3`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
  uint16_t pulsehls1;
  uint16_t pulsehls2;
  uint16_t pulsehls3;
  #END
  uint16_t pulsehls1 = map(${hls1}, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehls2 = map(${hls2}, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehls3 = map(${hls3}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0,0,pulsehls1);
  pwm.setPWM(1,0,pulsehls2);
  pwm.setPWM(2,0,pulsehls3);`
  ;
  return code;
};
Blockly.JavaScript[`hrs`] = function(block) {
  var  hrs1= block.getFieldValue(`hrs1`);
  var  hrs2= block.getFieldValue(`hrs2`);
  var  hrs3= block.getFieldValue(`hrs3`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
  uint16_t pulsehrs1;
  uint16_t pulsehrs2;
  uint16_t pulsehrs3;
  #END
  uint16_t pulsehrs1 = map(${hrs1}, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehrs2 = map(${hrs2}, 0, 180, SERVOMIN, SERVOMAX);
  uint16_t pulsehrs3 = map(${hrs3}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(0,0,pulsehrs1);
  pwm.setPWM(1,0,pulsehrs2);
  pwm.setPWM(2,0,pulsehrs3);`;
  return code;
};
Blockly.JavaScript[`sv`] = function(block) {
  var pin = block.getFieldValue(`pin`);
  var degree = block.getFieldValue(`degree`);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  #EXTINC
  uint16_t pin;
  uint16_t degree;
  #END
  uint16_t pulsesv = map(${degree}, 0, 180, SERVOMIN, SERVOMAX);
  pwm.setPWM(${pin},0,pulsesv);`
  ;
  return code;
};


Blockly.JavaScript['asx'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['asy'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['asz'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['walk'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ``;
  return code;
};
Blockly.JavaScript['stand'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ``;
  return code;
};