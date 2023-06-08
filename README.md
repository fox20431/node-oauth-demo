A very simple demo of OAuth 2.0 using Node.js，to add GitHub login to your app and access GitHub API.

## Getting started

### Create the GitHub OAuth App

Here is [a quick link](https://github.com/settings/developers) for creating OAuth App.

There are a few concerns related to the creation of the GitHub OAuth App.

1. Once an OAuth App is created, a Client ID is immediately generated.
2. We need to generate the Client Secret manually.
3. The purpose of the `application name` is to display it on the consent page for the user, so fill it in with any name you want.
4. `Homepage URL` and `Application description` are in order to help users learn more about your application, so fill it with any content you want too.
5. The `Authorization callback URL` is important, only the value of the `Authorization callback URL` can carry the `authorization code` and receive the `access token`.

### Run the demo

First of all, install the dependencies:

```sh
npm install
```

There are three places about github oauth parameter is needs change to your own in the project:

1. `clientID` in `index.js`;
2. `clientSecret` in `index.js`;
3. `client_id` in `public/index.html`.

Now, run the server.

```bash
$ node index.js
```

Visit http://localhost:8080 in your browser, and click the link to login GitHub.

