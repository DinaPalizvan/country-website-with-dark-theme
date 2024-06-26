# REST Countries API with color theme switcher

![REST Countries desktop design](help/DESKTOP_DESIGN.webp)
![REST Countries mobile design](help/MOBILE_DESIGN.webp)

## Description

Your homework is integrating with the [REST Countries API](https://restcountries.com/) to pull country data and display it like in the designs.

In this homework, you should use React and React Router. Also, you can use what you like CSS framework or library but we suggest using React-Bootstrap.

## Homework Tasks

1. Fetch all country data from the [REST Countries API](https://restcountries.com/) and display each country's flag, name, population, region, and capital on the homepage in individual cards.
2. Ensure each country card is clickable, redirecting the user to a detailed page. On this page, display the country's flag, name, native name, population, region, sub-region, capital, top-level domain, currencies, languages, and all bordering countries.
3. Implement a search input on the homepage to allow users to search for countries by name.
4. Provide a select option on the homepage to filter countries based on their regions.
5. Ensure the website supports both dark and light modes.
6. Make the website responsive for mobile, tablet, desktop, and large screens.

### Detailed Requirements:

- **Homepage:**

  - Display all countries with their flag, name, population, region, and capital in individual cards.
  - Include a search input to find countries by name.
  - Include a filter option to select and display countries by region.
  - Toggle between light and dark modes.
  - Ensure responsiveness across various devices.

- **Country Detail Page:**
  - Display detailed information including:
    - Flag
    - Name
    - Native name
    - Population
    - Region
    - Sub-region
    - Capital
    - Top-level domain
    - Currencies
    - Languages
    - Bordering countries
  - Enable navigation to border countries' detail pages via clickable links.

### User Interaction:

- Users can search for a country by its name using the search input.
- Users can filter the countries displayed on the homepage by region using the select option.
- Clicking on a country card redirects the user to a detailed page with comprehensive information about the selected country.
- Users can click on bordering countries to view their details.
- Users can toggle between light and dark modes.
- The website should be fully responsive, providing an optimal viewing experience on mobile, tablet, desktop, and large screens.

> **⚠️ NOTE ⚠️: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data if you prefer to use that instead. However, please be aware that the data in the JSON file might not be up-to-date.**

## More details

Your task is to build out the project to the designs inside the `help/design` folder.

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use an icon font library for the icons.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## How to Deliver the Assignment

1. **Complete the Project:**

   - Ensure that all the specified tasks are implemented.
   - Test the website to confirm all functionalities work correctly, including the homepage, search, filter, country detail pages, dark/light mode, and responsiveness.

2. **Prepare the Code:**

   - Organize your code into a well-structured repository.
   - Include a README file with instructions on how to run the project locally, an overview of the project, and any other relevant details.
   - Make sure your code is clean and well-commented.

3. **Upload to GitHub:**

   - Create a new public repository on [GitHub](https://github.com/).
   - Push your project code to this repository.
   - Ensure all necessary files are included in the repository.

4. **Deploy the Project:**

   - Choose a hosting provider from the following options: (you can also use other hosts)
     - [GitHub Pages](https://pages.github.com/)
     - [Vercel](https://vercel.com/)
     - [Netlify](https://www.netlify.com/)
   - Deploy your website following the provider’s instructions.
   - Ensure the deployed site is fully functional and accessible.

5. **Submit the Assignment:**
   - Provide the link to your public GitHub repository.
   - Provide the link to the deployed website.
   - Ensure that both links are accessible and working correctly.

### Example of Submission Information:

- **GitHub Repository:** [https://github.com/username/project-name](https://github.com/username/project-name)
- **Deployed Website:** [https://project-name.vercel.app](https://project-name.vercel.app)
