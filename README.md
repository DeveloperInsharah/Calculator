# Simple Calculator

This is a simple calculator built using HTML, CSS, and JavaScript. It allows you to perform basic arithmetic operations, including addition, subtraction, multiplication, and division. The calculator is designed to handle invalid inputs such as consecutive operators and invalid expressions.

## Features

- Perform basic operations: `+`, `-`, `*`, `/`
- Clear the input (`AC` button)
- Delete the last character (`DEL` button)
- Handle invalid inputs like consecutive operators (e.g., `++` or `+-`)
- User-friendly interface

## Technologies Used

- **HTML** for the structure of the calculator
- **CSS** for styling the calculator and creating a responsive layout
- **JavaScript** for the functionality of the calculator (input handling, calculation, validation)

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser to view the calculator.
3. Click on the calculator buttons to perform calculations.
4. Press `AC` to clear the screen or `DEL` to remove the last character.
5. Press `=` to evaluate the expression.

## Example Usage

### Example 1:
- Input: `2 + 3`
- Output: `5`

### Example 2:
- Input: `5 + +`
- Output: `Error: Consecutive Operators`

### Example 3:
- Input: `3 * 4 - 2`
- Output: `10`

## Deployment on GitHub Pages

To deploy this calculator on GitHub Pages, follow these steps:

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository (e.g., `simple-calculator`).

2. **Upload your project**:
   - Push the files (`index.html`, `style.css`, `script.js`) to the newly created repository.

3. **Enable GitHub Pages**:
   - Go to the repository settings on GitHub.
   - Under the **GitHub Pages** section, select the branch to deploy (usually `main` or `master`).
   - Choose the `/root` folder to deploy from.
   
4. **Access your live calculator**:
   - After a few moments, GitHub will provide you with a URL where your calculator is deployed (e.g., `https://username.github.io/simple-calculator/`).

## Code Example

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <!-- Calculator UI here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
