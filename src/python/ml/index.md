## Experiment Tracking

### AIM

Note: AIM ui is almost completely unusable.

[aim (github)](https://github.com/aimhubio/aim) and [docs](https://aimstack.readthedocs.io/en/latest/)

`pip3 install aim`

`aim init`

```py
from aim import Run

# Initialize a new run
run = Run()

# Log run parameters
run["hparams"] = {
    "learning_rate": 0.001,
    "batch_size": 32,
}

# or more likely
# aim_run["hparams"] = cfg_dict  # store the hydra config

# Log metrics
for i in range(10):
    run.track(i, name='loss', step=i, context={ "subset":"train" })
    run.track(i, name='acc', step=i, context={ "subset":"train" })
```

`aim up` to open webui

### [Wandb](./python/ml/wandb.md)
