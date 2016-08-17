// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md


declare var System: any;

(function () {
  /***********************************************************************************************
   * User Configuration.
   **********************************************************************************************/
  /** Map relative paths to URLs. */
  const map: any = {
  };

  /** User packages configuration. */
  const packages: any = {
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  /***********************************************************************************************
   * Everything underneath this line is managed by the CLI.
   **********************************************************************************************/
  const barrels: string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',

    // App specific barrels.
    'app',
    'app/shared',
    'examples',
    'code'
    /** @cli-barrel */
  ];

  const cliSystemConfigPackages: any = {};
  barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
  });

  /** Type declaration for ambient System. */
  System.config({
    map: {
      '@angular': '/vendor/@angular',
      'rxjs': '/vendor/rxjs',
      'main': './main.js',
      './code/app.component': './code/app.component.js'
    },
    packages: cliSystemConfigPackages
  });

  // Apply the user's configuration.
  System.config({ map, packages });
}());
