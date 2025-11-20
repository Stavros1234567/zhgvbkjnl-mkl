basic.forever(function () {
    calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 10000000)
    calliBot2.warteLSensor(C2Sensor.rechts, C2SensorStatus.hell)
    calliBot2.warteLSensor(C2Sensor.rechts, C2SensorStatus.hell)
    calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
    calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
})
