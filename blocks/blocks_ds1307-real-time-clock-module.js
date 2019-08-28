Blockly.Blocks['ds1307_real_time_clock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DS1307 REAL TIME CLOCK");
    this.appendDummyInput()
        .appendField("DEBUG : ")
        .appendField(new Blockly.FieldVariable("DS1307_DEBUG"), "DS1307_DEBUG");
    this.appendDummyInput()
        .appendField("DAY : ")
        .appendField(new Blockly.FieldVariable("DS1307_DAY"), "DS1307_DAY");
    this.appendDummyInput()
        .appendField("MONTH : ")
        .appendField(new Blockly.FieldVariable("DS1307_MONTH"), "DS1307_MONTH");
    this.appendDummyInput()
        .appendField("YEAR : ")
        .appendField(new Blockly.FieldVariable("DS1307_YEAR"), "DS1307_YEAR");
    this.appendDummyInput()
        .appendField("HOUR : ")
        .appendField(new Blockly.FieldVariable("DS1307_HOUR"), "DS1307_HOUR");
    this.appendDummyInput()
        .appendField("MINUTE : ")
        .appendField(new Blockly.FieldVariable("DS1307_MINUTE"), "DS1307_MINUTE");
    this.appendDummyInput()
        .appendField("SECOND : ")
        .appendField(new Blockly.FieldVariable("DS1307_SECOND"), "DS1307_SECOND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};