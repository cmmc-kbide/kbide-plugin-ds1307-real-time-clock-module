Blockly.Blocks['rtc_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("RTC BEGIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_sync'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("RTC TIME SYNC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_timestamp_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("RTC TIMESTAMP FORMAT")
        .appendField(new Blockly.FieldDropdown([["YYYY/MM/DD-H:M:S","RTC_TIMESTAMP_FORMAT_1"], ["DD/MM/YYYY-H:M:S","RTC_TIMESTAMP_FORMAT_2"]]), "RTC_TIMESTAMP_FORMAT");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_year'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET YEAR");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_month'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET MONTH");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_day'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET DAY");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_hour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET HOUR");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_minute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET MINUTE");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rtc_get_second'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
        .appendField("GET SECOND");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};