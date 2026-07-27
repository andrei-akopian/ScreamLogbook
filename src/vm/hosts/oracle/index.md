# Orcale Cloud

Oracle cloud has some decent free instances, though the UI is horrible.

After setting up and instance and IP address.

Note that the only free option is Orcale Linux. Note that Orcale Linux is made from `Fedora > Red Hat Enterprise Linux > Orcale Linux` so its package manager is `dnf` (or `curl install.sh | sh`).

## SSH

Connect by `ssh -i <your_key> opc@<instance ip>` default username is `opc`. For IP see Compute > Instances > Details > Instances Access

## Packages

use `dnf` package manager
