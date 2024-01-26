# Weather Frontend

A frontend react app that utilises data.gov.sg APIs to retrieve traffic and weather information. This is in tandem with https://github.com/jfaylon/weather-backend

## Prequisites

- Must be able to connect to the backend server using https://github.com/jfaylon/weather-backend
- Node version used is v18.17.1. It is not guaranteed that it will work for newer or older versions.
- NextJS v14.1.0 was used.

## Installation

- Clone the repository and install node modules
```bash
  npm install
```

- Add the ENVs to a .env file or copy the .env.example file
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Running the Application

- Running in development mode 

```
npm run dev
```

- Running in production mode
```
npm run build && npm run start
```

## Tech limitations and Assumptions
- MUI was used for the date time picker and the select dropdown because it has good pre-built components for the use case.
- The MobileDateTimePicker was used to lessen or prevent keyboard strokes when using the desktop
- There were no images found in the 3rd Party APIs to make the weather more appealing.
- the entire formatted name was used because it was found out that there multiple cameras with the same name like `Bukit Merah Expressway`.
- Props drilling was used due to the nature of the use case that the components are not deeply nested and have less dependencies between each other.
- The minimum comparable phone tested was iPhone XR as per Google Developer Tools. This may not guarantee phones that have smaller resolutions.
- `NextJS` was used because `create-react-app` is deprecated and it was suggested to use other frameworks such as `NextJS` instead of `create-react-app`. Source: https://react.dev/learn/start-a-new-react-project and https://github.com/facebook/create-react-app/issues/13072

## Possible Improvements
- Use images for the weather statuses.
- If the components get complicated due to numerous dependencies, Context API or Redux may be suggested to replace Props drilling.
- Loading mechanisms for better UI experience may be implemented.


