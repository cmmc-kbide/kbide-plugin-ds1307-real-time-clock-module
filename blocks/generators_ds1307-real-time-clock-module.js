Blockly.JavaScript['rtc_begin'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
#EXTINC#include <Wire.h> #END
#EXTINC#include <RtcDS1307.h> #END
#VARIABLERtcDS1307<TwoWire> ${variable_rtc_variable}(Wire); #END

#SETUP

  ${variable_rtc_variable}.Begin();
  RtcDateTime ${variable_rtc_variable}_compiled = RtcDateTime(__DATE__, __TIME__);
  // printDateTime(${variable_rtc_variable}_compiled);

  if (!${variable_rtc_variable}.IsDateTimeValid()) 
  {
    if (${variable_rtc_variable}.LastError() != 0)
    {
      
    }
    else
    {
      ${variable_rtc_variable}.SetDateTime(${variable_rtc_variable}_compiled);
    }
  }

  if (!${variable_rtc_variable}.GetIsRunning())
  {
    ${variable_rtc_variable}.SetIsRunning(true);
  }

  RtcDateTime ${variable_rtc_variable}_now = ${variable_rtc_variable}.GetDateTime();
  if (${variable_rtc_variable}_now < ${variable_rtc_variable}_compiled) 
  {
    ${variable_rtc_variable}.SetDateTime(${variable_rtc_variable}_compiled);
  }
  else if (${variable_rtc_variable}_now > ${variable_rtc_variable}_compiled) 
  {
  
  }
  else if (${variable_rtc_variable}_now == ${variable_rtc_variable}_compiled) 
  {
  
  }
  
  ${variable_rtc_variable}.SetSquareWavePin(DS1307SquareWaveOut_Low);

#END
`;
  return code;
};

Blockly.JavaScript['rtc_sync'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  return `
  RtcDateTime ${variable_rtc_variable}_now = ${variable_rtc_variable}.GetDateTime();

  char ${variable_rtc_variable}_format_year[5];
  char ${variable_rtc_variable}_format_month[5];
  char ${variable_rtc_variable}_format_day[5];
  char ${variable_rtc_variable}_format_hour[5];
  char ${variable_rtc_variable}_format_minute[5];
  char ${variable_rtc_variable}_format_second[5];
  
  sprintf(${variable_rtc_variable}_format_year, "%02d", ${variable_rtc_variable}_now.Year());
  sprintf(${variable_rtc_variable}_format_month, "%02d", ${variable_rtc_variable}_now.Month());
  sprintf(${variable_rtc_variable}_format_day, "%02d", ${variable_rtc_variable}_now.Day());
  sprintf(${variable_rtc_variable}_format_hour, "%02d", ${variable_rtc_variable}_now.Hour());
  sprintf(${variable_rtc_variable}_format_minute, "%02d", ${variable_rtc_variable}_now.Minute());
  sprintf(${variable_rtc_variable}_format_second, "%02d", ${variable_rtc_variable}_now.Second());

  `;
};

Blockly.JavaScript['rtc_timestamp_format'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  var dropdown_rtc_timestamp_format = block.getFieldValue('RTC_TIMESTAMP_FORMAT');
  // TODO: Assemble JavaScript into code variable.
  
  var code = ``;

  if (dropdown_rtc_timestamp_format == 'RTC_TIMESTAMP_FORMAT_1') {
    code = `
    String(${variable_rtc_variable}_format_year) + 
    "/" + 
    String(${variable_rtc_variable}_format_month) + 
    "/" + 
    String(${variable_rtc_variable}_format_day) +
    " " + 
    String(${variable_rtc_variable}_format_hour) + 
    ":" + 
    String(${variable_rtc_variable}_format_minute) + 
    ":" + 
    String(${variable_rtc_variable}_format_second)
    `;
  } else if (dropdown_rtc_timestamp_format == 'RTC_TIMESTAMP_FORMAT_2') {
    code = `
    String(${variable_rtc_variable}_format_day) +
    "/" + 
    String(${variable_rtc_variable}_format_month) + 
    "/" + 
    String(${variable_rtc_variable}_format_year) +
    " " + 
    String(${variable_rtc_variable}_format_hour) + 
    ":" + 
    String(${variable_rtc_variable}_format_minute) + 
    ":" + 
    String(${variable_rtc_variable}_format_second)
    `;
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_year'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Year()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_month'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Month()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_day'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Day()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_hour'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Hour()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_minute'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Minute()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rtc_get_second'] = function(block) {
  var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  ${variable_rtc_variable}_now.Second()
  `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};