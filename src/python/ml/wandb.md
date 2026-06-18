# wandb

```zsh
pip install wandb
```

`wandb login`

```py
import wandb
wandb.login()  # or will use the `wandb login` supplied account

wandb.init(
    entity="your-username-or-workspace-name",
    project="my-experiments"
)

wandb.log({
    "epoch": epoch,
    "loss": loss,
    "accuracy": accuracy,
})
```

## For Hydra Integration

```py
@hydra.main(version_base=None, config_path="conf", config_name="config")
def main(cfg: DictConfig):
    wandb.init(
        # entity=cfg.wandb.entity,
        project=cfg.wandb.project
    )
```

```yaml
wandb:
  project: "test"
```

[my Hydra notes](./hydra)
