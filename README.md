# Frontend Developer Test Assignment

Downloaded from https://drive.google.com/open?id=1PxsoK7WoPnb4FKJ2-bWRbycDfnk_65oJ​ and completed by **Herman Schmidt**.

### To run this project:

You can use **npm**:

```
$ npm install
$ npm start
```

Or, if you prefer, you can use **yarn**:

```
$ yarn
$ yarn start
```

To run test, do `npm test` or `yarn test`.

---

## Task 1 - Clean up, refactor and write tests:

I've refactored the project splitting it in modules, and now it's folder structure looks like this:

```
src/
├── common/
│   ├── components/
│   ├── helpers/
│   ├── ...
│   ├── constants.js
├── core/
│   ├── components/
│   ├── helpers/
│   ├── constants.js
│   ├── provider.js
│   ├── index.js
├── moduleA/
│   ├── components/
│   ├── helpers/
│   ├── constants.js
│   ├── index.js
├── moduleB/
│   ├── components/
│   ├── helpers/
│   ├── constants.js
│   ├── index.js
...
```

Each module has an `index.js` in order to give other modules an easy access to the main component.

The reason why I decided this architecture, is to make it easy to scale and mantain. It's necessary to spread responsabilities among the objects, functions and components to accomplish a robust app.

I splitted the Table component in three different ones: `Table`, `TableHeader` and `TableBody`. It's important to mantain files splitted and smaller, due when there's many developers working on the same project, small and splitted files have less probabilities to result in code conflicts, and in case of having one, it's easier to solve.

I've also decoupled lots of functions from components and move them into _helpers_ folders. I've found lots of unnecessary code, repeating itself. I had to do a huge cleanup.

Same with constants: I've decoupled most of them from the components and moved them into the apropiated _constants_ folders.

Component names were also changed, removing dashes, turning them into camel case, and beginning each name with capital letters, in order to follow conventions and good practices.

I've found a few bugs in the project (i.e.: numbers below the 3 in the Risk Level selector which throw an error), and they were solved.

In order to style the project with _SASS_, I had to first do some configuration in webpack, adding the following lines on `/webpack.config.js`:

```
      {
        test: /\.scss$/,
        use: [
          "style-loader", //Inject styles into DOM
          "css-loader", //Turns css into commonjs
          "sass-loader" //Turns sass into css
        ]
      }
```

Then I installed the `node-sass` library.

I've followed the [BEM](https://getbem.com/naming/) naming convention to name the classes for styling (it's a great way to avoid styling conflicts). As [BEM](https://getbem.com/naming/) names tend to be large, I decided to do a cleaner and easier management of it installing the `bem-names` library.

For number formatting (splitting thousands with commas and reducing the decimals to only 2 digits) I've installed the `numbro` library.

In the links, I've replaced `Link` by `NavLink` with the purpose of get a different class name in the active links and therefore style them properly.

During the refactoring and code cleanup, it was necessary to make some tests to check the accuracy of the reports and results (besides it was required by this assessment). Since after the refactoring and code cleanup, the logic of the report generator is mainly located in the `src/common/helpers/generateReports.js` file, I've created some tests to assure the accuracy of its reports. You can find all the tests on the `src/test` module.

## Task 2 - Integrate an API

In order to integrate the ​ http://localhost:3000/api/cones​ endpoint, I've created a `provider.js` file on the `core` module, which exports the `getCones()` function, and through the `axios` library, it returns a Promise object which resolves in the fetched data from the `cones` endpoint.

## Task 3 - Add a new feature:

I've added three more parameter selectors to the App:

- **Years**
- **Initial Sum**
- **Monthly Sum**

You can generate different reports changing their values.
