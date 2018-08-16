# sms-gateway-service
A simple SMS gateway service for 2/3/4G Modem and others.

# Basic idea

I have a modem with SIM card installed, not only internet access but also collect the SMS/MMS from these device.

# Data flow

Device(Modem) <--driver--> Device/RAW Data <--encode/decode--> SMS/MMS <--address--> Contact

# Device plugin

Any device plugin need these impl:

1. A driver to config & access the device
2. A decoder can transform device raw data to SMS/MMS formated data(content must be UTF-8 and timestamp is Date)
3. An encoder can transform SMS/MMS to device raw data

