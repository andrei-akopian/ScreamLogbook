# Manim

- [Manim Docs](https://docs.manim.community/)
- [FlyingFrames by Kolibril](https://flyingframes.readthedocs.io/en/latest/index.html)

Reender Qualities and Resolutions, also see [Wikipedia](https://en.wikipedia.org/wiki/16:9_aspect_ratio#Common_resolutions)
|Command|Quality|
| - | - |
| `-ql` | 854x480 15FPS (FWVGA)|
| `-qm` | 1280x720 30FPS (HD)|
| `-qh` | 1920x1080 60FPS (FHD)|
| `-qp` | 2560x1440 60FPS (QHD)|
| `-qk` | 3840x2160 60FPS (4K UHD)|

Generally use the HD and FHD qualities, as QHD and 4K don't work an all devices.

Custom resolution: `-r 500,500`

Warning, the scale of the cordinate system is different from the reendering resolution. It is attached to be proportional to the resolution width. This is set by `config.frame_width=10`

Useful:
- `-s` saves only the last frame of the animation

## Adding Objects

- [Creation / Introduction Animations](https://docs.manim.community/en/stable/reference/manim.animation.creation.html)
