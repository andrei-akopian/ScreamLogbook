# SLURM

[Official Docs](https://slurm.schedmd.com/overview.html)

see partitions

`sacctmgr show assoc user=$USER format=Cluster,Account,Partition,QOS`

see nodes and thier configure cpus and gpus `sinfo -o "%P %N %G"`

job allocations

`srun --account=YOURGROUP_NAME --nodes=1 --partition=es1 --time=1:0:0 --qos=FILLIN --pty bash`

see your jobs

`squeue -u <your_user_name>` and `scontrol show job <your_job_number>`

see job statuses

`sacct --format=jobid,jobname%40,state`

Output logs will be save to current directory.

## Monitoring

`srun –jobid=$your_job_id –pty /bin/bash`

`scontrol show job <jobid>` then `ssh <nodeid>`

## Various places that use slurm and have docs

[StonyBrook](https://rci.stonybrook.edu/hpc/)
