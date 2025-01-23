package com.indium.Spring_Boot_Basics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Door {
    @Autowired
   // @Qualifier("soundAlarm")
    private Alarm alarm;

    public void open() {
        alarm.activate();
    }

    public void close() {
        alarm.deactivate();
    }
}
