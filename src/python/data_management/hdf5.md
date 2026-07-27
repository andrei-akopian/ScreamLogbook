8 June 2026

# HDF5
[official hdf5py docs](https://docs.h5py.org/en/stable/index.html)

```py
import h5py
f = h5py.File('mytestfile.hdf5', 'r')
print(list(f.keys()))
print(dset.shape)
print(dset.dshape)
```

## Writing
```py
dset = f.create_dataset("mydataset", (100,), dtype='i')
print(dset.shape)  # (100,)
```
