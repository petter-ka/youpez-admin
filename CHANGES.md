** Executing migrations of package '@angular/cli' **

▸ Remove Browserslist configuration files that matches the Angular CLI default configuration.
DELETE .browserslistrc
  Migration completed (1 file modified).

▸ Remove exported `@angular/platform-server` `renderModule` method.
  The `renderModule` method is now exported by the Angular CLI.
  Migration completed (No changes made).

▸ Remove no longer needed require calls in Karma builder main file.
UPDATE src/test.ts (458 bytes)
  Migration completed (1 file modified).

▸ Update TypeScript compiler `target` and set `useDefineForClassFields`.
  These changes are for IDE purposes as TypeScript compiler options `target` and `useDefineForClassFields` are set to `ES2022` and `false` respectively by the Angular CLI.
  To control ECMA version and features use the Browerslist configuration.
  Migration completed (No changes made).

▸ Remove options from 'angular.json' that are no longer supported by the official builders.
  Migration completed (No changes made).

➜ youpez-admin ⚡( update-to-angular17)                                                                                                                   18.17.1  3.10.13 24 minutes ago  
▶ ng update @angular/core@15 --force
Using package manager: npm
Collecting installed dependencies...
Found 66 dependencies.
Fetching dependency metadata from registry...
✔ Packages successfully installed.
➜ youpez-admin ⚡( update-to-angular17)                                                                                                                    18.17.1  3.10.13 4 minutes ago  
▶ ng update @angular/core@16 --force
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 16.2.12 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 66 dependencies.
Fetching dependency metadata from registry...
✔ Packages successfully installed.
➜ youpez-admin ⚡( update-to-angular17)                                                                                                                   18.17.1  3.10.13 12 minutes ago  
▶ ng update @angular/cli@16 --force
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 16.2.12 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 66 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "16.2.12" (was "15.2.10")...
UPDATE package.json (2902 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

▸ Remove 'defaultProject' option from workspace configuration.
  The project to use will be determined from the current working directory.
  Migration completed (No changes made).

▸ Replace removed 'defaultCollection' option in workspace configuration with 'schematicCollections'.
  Migration completed (No changes made).

▸ Update the '@angular-devkit/build-angular:server' builder configuration to disable 'buildOptimizer' for non optimized builds.
  Migration completed (No changes made).

➜ youpez-admin ⚡( update-to-angular17)                                                                                                                   18.17.1  3.10.13 20 minutes ago  
▶ ng update @angular/cli@16 --force
Error: Repository is not clean. Please commit or stash any changes before updating.
➜ youpez-admin ⚡( update-to-angular17)                                                                                                                  18.17.1  3.10.13 72 seconds ago  
▶ ng update @angular/cli@16 --force
Using package manager: npm
Collecting installed dependencies...
Found 66 dependencies.
Fetching dependency metadata from registry...
Package '@angular/cli' is already up to date.
➜ youpez-admin ⚡( update-to-angular17)                                                                                                                   18.17.1  3.10.13 82 seconds ago  
▶ ng update @angular/cli@17 --force
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 17.2.0 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 66 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/cli @ "17.2.0" (was "16.2.12")...
UPDATE package.json (2894 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

▸ Replace usages of '@nguniversal/builders' with '@angular-devkit/build-angular'.
  Migration completed (No changes made).

▸ Replace usages of '@nguniversal/' packages with '@angular/ssr'.
  Migration completed (No changes made).

▸ Replace deprecated options in 'angular.json'.
UPDATE angular.json (4401 bytes)
  Migration completed (1 file modified).

▸ Add 'browser-sync' as dev dependency when '@angular-devkit/build-angular:ssr-dev-server' is used, as it is no longer a direct dependency of '@angular-devkit/build-angular'.
  Migration completed (No changes made).

