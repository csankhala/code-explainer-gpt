Disclaimer: Based on Open API samples

## Code Explainer GPT

1. Enter your code in text area and submit
2. This will explain code's language, purpose, better alternatives

## Demo (hosted on Render)

https://code-explainer-gpt.onrender.com/

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd code-explainer-gpt
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! 

For the full context behind Open API, check out the [tutorial](https://platform.openai.com/docs/quickstart).
