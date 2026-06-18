# File IO in C++

```cpp
#include <cstdio>
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

void fileFunction(const std::string& filename)
{
    std::string line;
    std::ifstream fh(filename);
    if (fh.is_open()) {
        while (std::getline(fh, line)) {
            std::cout << line << std::endl;
        }
    } else {
        std::cout << "Unable to open file" << std::endl;
    }
    fh.close();
    std::cout << "File Closed" << std::endl;
}

int main(int argc, char** argv) {
  fileFunction("file.txt");
  return 0;
}
```
