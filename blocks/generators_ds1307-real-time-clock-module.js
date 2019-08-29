Blockly.JavaScript['ds1307_real_time_clock'] = function(block) {
  var variable_ds1307_debug = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_DEBUG'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_day = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_DAY'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_month = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_MONTH'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_year = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_YEAR'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_hour = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_HOUR'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_minute = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_MINUTE'), Blockly.Variables.NAME_TYPE);
  var variable_ds1307_second = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DS1307_SECOND'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `

#EXTINC
#include <Wire.h>
#include <RtcDS1307.h>
RtcDS1307<TwoWire> Rtc(Wire);
#define countof(a) (sizeof(a) / sizeof(a[0]))
#END

#FUNCTION
void printDateTime(const RtcDateTime& dt)
{
    // char datestring[20];

    // snprintf_P(datestring, 
    //         countof(datestring),
    //         PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
    //         dt.Month(),
    //         dt.Day(),
    //         dt.Year(),
    //         dt.Hour(),
    //         dt.Minute(),
    //         dt.Second() );
    // Serial.print(datestring);

    ${variable_ds1307_day} = dt.Day();
    ${variable_ds1307_month} = dt.Month();
    ${variable_ds1307_year} = dt.Year();
    ${variable_ds1307_hour} = dt.Hour();
    ${variable_ds1307_minute} = dt.Minute();
    ${variable_ds1307_second} = dt.Second();
}
#END

#SETUP
    Rtc.Begin();
    RtcDateTime compiled = RtcDateTime(__DATE__, __TIME__);
    printDateTime(compiled);
    
    if (!Rtc.IsDateTimeValid()) 
    {
        if (Rtc.LastError() != 0)
        {
            // we have a communications error
            // see https://www.arduino.cc/en/Reference/WireEndTransmission for 
            // what the number means
            ${variable_ds1307_debug} = Rtc.LastError();
        }
        else
        {
            // Common Causes:
            //    1) first time you ran and the device wasn't running yet
            //    2) the battery on the device is low or even missing

            // Serial.println("RTC lost confidence in the DateTime!");
            // following line sets the RTC to the date & time this sketch was compiled
            // it will also reset the valid flag internally unless the Rtc device is
            // having an issue

            Rtc.SetDateTime(compiled);
        }
    }

    if (!Rtc.GetIsRunning())
    {
        // Serial.println("RTC was not actively running, starting now");
        Rtc.SetIsRunning(true);
    }

    RtcDateTime now = Rtc.GetDateTime();
    if (now < compiled) 
    {
        // Serial.println("RTC is older than compile time!  (Updating DateTime)");
        Rtc.SetDateTime(compiled);
    }
    else if (now > compiled) 
    {
        // Serial.println("RTC is newer than compile time. (this is expected)");
    }
    else if (now == compiled) 
    {
        // Serial.println("RTC is the same as compile time! (not expected but all is fine)");
    }

    // never assume the Rtc was last configured by you, so
    // just clear them to your needed state
    Rtc.SetSquareWavePin(DS1307SquareWaveOut_Low); 
#END


    if (!Rtc.IsDateTimeValid()) 
    {
        if (Rtc.LastError() != 0)
        {
            // we have a communications error
            // see https://www.arduino.cc/en/Reference/WireEndTransmission for 
            // what the number means
            // Serial.print("RTC communications error = ");
            // Serial.println(Rtc.LastError());
            ${variable_ds1307_debug} = Rtc.LastError();
        }
        else
        {
            // Common Causes:
            //    1) the battery on the device is low or even missing and the power line was disconnected
            // Serial.println("RTC lost confidence in the DateTime!");
        }
    }

    RtcDateTime now = Rtc.GetDateTime();

    printDateTime(now);
    // Serial.println();

  `;
  return code;
};