# Linux Network Diagnosing

`iwconfig`
- `wlan0` is WiFi
- `eth0` is ethernet (cable)
- `lo` is localhost (I think)

`lspci`

`ifconfig`

`ethtool` is deprecated (gives error), use `nmcli`
- `nmcli device wifi list`
- `nmcli device show`
- `nmcli device status`

`inxi -Fxx` (general device information)

`speedtest` by Ookla (cli version, needs installation)

Then start punching keywords into Google.
