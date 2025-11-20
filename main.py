def on_forever():
    calliBot2.motor(C2Motor.BEIDE, C2Dir.VORWAERTS, 10000000)
    calliBot2.warte_lsensor(C2Sensor.RECHTS, C2SensorStatus.HELL)
    calliBot2.warte_lsensor(C2Sensor.RECHTS, C2SensorStatus.HELL)
basic.forever(on_forever)
