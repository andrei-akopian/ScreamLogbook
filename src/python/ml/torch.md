### Skeleton

Dataloader:

```py
class MyDataset(Dataset):
    def __init__(self):
    def __len__(self):
        return 
    def __getitem__(self, idx):
        return X, y

train_ds = MyDataset(TRAIN_PATH)
test_ds = MyDataset(TEST_PATH)

train_loader = DataLoader(
    dataset=train_ds,        
    batch_size=10,          
    shuffle=True,
)

test_loader = DataLoader(
    dataset=test_ds,        
    batch_size=10,           
    shuffle=True,           
)
```

training code:

```py
model = nn.Sequential(
    nn.Linear(len(input), 500),
    nn.ReLU(),
    nn.Linear(500, len(output))
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
