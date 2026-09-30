## Resources

- [learn c++ in y minutes](https://learnxinyminutes.com/c++/)

## Basics

```cpp
int main(){
  std::cout << "Hello, World!" << std::endl;
  std::cout << (int)('8'-'0') << std::endl; // 8
}
```

```bash
g++ -std=c++20 <filename>
```
or zig droping compiler
```bash
zig c++ -std=c++20 <filename>
```

### Standard libary and Namespaces

```cpp
#include <iostream>
#include <vector>
using namespace std;
using std::vector;

int main() {
    vector<int> numbers = {1, 2, 3};
}
```
