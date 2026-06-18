# Hydra

pypi package name is `hydra-core`

[Hydra Offical Docs](https://hydra.cc/docs/intro/)


## Boilerplate

```py
import hydra
import logging  # logging will be auto set up
from omegaconf import DictConfig, OmegaConf

@hydra.main(version_base=None, config_path="conf", config_name="config")
def my_app(cfg : DictConfig) -> None:
    print(OmegaConf.to_yaml(cfg))

if __name__ == "__main__":
    my_app()
```

Turn off dir switching (and other stuff) [from stack overflow](https://stackoverflow.com/questions/65104134/disable-file-output-of-hydra):

```yaml
# Source - https://stackoverflow.com/a/70777327
# Posted by J smit
# Retrieved 2026-05-20, License - CC BY-SA 4.0

defaults:  
  - _self_  
  - override hydra/hydra_logging: disabled  
  - override hydra/job_logging: disabled  
  
hydra:  
  output_subdir: null  
  run:  
    dir: .
```
