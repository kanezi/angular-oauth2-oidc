# AngularOauth2Oidc

## LINKS

[Google developer console](https://console.cloud.google.com/apis/dashboard)

[Google openid config](https://accounts.google.com/.well-known/openid-configuration)

[Gitlab openid config](https://gitlab.com/.well-known/openid-configuration)


[Google Gmail - manage labels](https://developers.google.com/gmail/api/guides/labels)

[Google Gmail - manage labels - REST reference](https://developers.google.com/gmail/api/reference/rest/v1/users.labels)


[Gitlab list current user API](https://docs.gitlab.com/ee/api/users.html#for-non-administrator-users-1)

[Online PKCE Generator Tool](https://tonyxu-io.github.io/pkce-generator/)

---

## STEPS

* create new angular app
  ```
  ng new angular-oauth2-oidc
  cd angular-oauth2-oidc
  ```

* add ng-zorro ui library
  ```
  ng add ng-zorro-antd
  ```

* configure test skiping and optionally inline styling
  ```
    "schematics": {
        "@schematics/angular:component": {
        "style": "less",
        "inlineStyle": true,
        "skipTests": true
        }
  ```   

* remove typescript strict property initialization in *tsconfig.json*
  ```
  "strictPropertyInitialization": false
  ```

* push project to github and create workflow to publish to github pages
  (check that you have valid app and github pages url which we'll use with google and github client registration)

* add [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) library
  ```
  ng add angular-auth-oidc-client
  ```
  authority url for google: *https://accounts.google.com*

  authority url for gitlab: *https://gitlab.com*


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
