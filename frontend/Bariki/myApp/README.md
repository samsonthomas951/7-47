

## How to View Pages

To view different pages, you need to edit the `App.jsx` file to render the page you want to see. Here's how you can do it:

1. Open the `App.jsx` file located in the `src` directory.

2. Import the component for the page you want to view. For example, if you want to view the `LoginSignUp` page, add the following import statement at the top of the file:
    ```javascript
    import LoginSignUp from './pages/LoginSignUp.jsx';
    ```

3. Replace the existing component in the `return` statement with the component you want to render. For example:
    ```javascript
    function App() {
      return (
        <div className="App">
          <LoginSignUp />
        </div>
      );
    }

    export default App;
    ```

4. Save the `App.jsx` file and start your development server if it's not already running:
    ```bash
    npm run dev
    ```

5. Open your web browser and navigate to the ip address given to view the selected page.

## Available Pages

Here is a list of pages you can navigate to by following the instructions above:

- `LoginSignUp` - Login and Sign Up page
- `Dashboard` - Dashboard page
- `Home` - Home page
- `Donations` - Custom Donations page
- `Favorites` - Favorites page
- `AccountSettings` - Account Settings page
- `History` - History page

Each of these pages is located in the `src/pages` directory. 

