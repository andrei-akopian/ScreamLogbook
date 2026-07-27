### Skeleton

Dataloader:

```py
class MyDataset(torch.utils.data.Dataset):
    def __init__(self):
    def __len__(self):
        return 
    def __getitem__(self, idx):
        return X, y

train_ds = MyDataset(TRAIN_PATH)
test_ds = MyDataset(TEST_PATH)

train_loader = torch.utils.data.DataLoader(
    dataset=train_ds,        
    batch_size=10,          
    shuffle=True,
)

test_loader = torch.utils.data.DataLoader(
    dataset=test_ds,        
    batch_size=10,           
    shuffle=True,           
)
```

training code:

```py
model = torch.nn.Sequential(
    torch.nn.Linear(len(input), 500),
    torch.nn.ReLU(),
    torch.nn.Linear(500, len(output))
)

optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
criterion = torch.nn.MSELoss() 

epochs = 100
for epoch in range(epochs):
    model.train()
    for batch_idx, (data, target) in enumerate(train_loader):
        output = model(data)
        loss = criterion(output, target)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch} complete. Loss: {loss.item():.4f}")
```

validation

```py
model.eval()
val_loss = 0
correct = 0
with torch.no_grad():
    for data, target in test_loader:
        output = model(data)
        val_loss += criterion(output, target).item()
avg_loss = val_loss / len(test_loader)
print("Validation loss", avg_loss)
```

alternatively, validation oneliner

```py
model.eval()
with torch.no_grad():
    # Calculate all batch losses in a single line
    avg_loss = torch.tensor([criterion(model(x), y).item() for x, y in test_loader]).mean().item()
print(f"Validation loss: {avg_loss}")
```

## Device Selection

- cpu is cpu
- mps is an AppleSilicon thing
- cuda is Nvidias gpus (so the actual gpus that you want)

```py
import torch
def get_device(train_cfg) -> torch.device:
    if bool(train_cfg.cpu_only):
        return torch.device("cpu")
    if torch.cuda.is_available():
        return torch.device("cuda", torch.cuda.current_device())
    if hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
        return torch.device("mps")
    return torch.device("cpu")
```

## Optimizers & Schedulers

```py
from torch.optim.lr_scheduler import ExponentialLR, CosineAnnealingLR

model = nn.Linear(in_features=10, out_features=2)
optimizer = optim.AdamW(model.parameters(), lr=0.01)

scheduler = ExponentialLR(optimizer, gamma=0.9)
# scheduler = CosineAnnealingLR(optimizer, T_max=num_epochs)  # code

for epoch in range(5):
    # train and val code
    # update scheduler last
    scheduler.step() 
    current_lr = scheduler.get_last_lr()[0]
    print(f"Epoch {epoch+1} complete. Next Learning Rate: {current_lr:.6f}")
```
