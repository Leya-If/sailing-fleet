(function() {
  'use strict';

  angular
    .module('flot')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // $translateProvider.translations('en', {
    //   // TITLE: 'Sailing Fleet',
    //   sailing_school: 'Sailing School',
    //   contacts: 'Contacts',
    //   conditions_of_program: 'Conditions of Program',
    //   training_program: 'Training Program, Entertainment',
    //   leaders: 'Leaders',
    //   own_ships: 'Own Ships',
    //   route: 'Route',
    //   food: 'Food',
    //   bath: 'Bath, Body Care',
    //   BUTTON_LANG_EN: 'en',
    //   BUTTON_LANG_RU: 'ru'
    // });
    // $translateProvider.translations('ru', {
    //   // TITLE: 'Парусная флотилия',
    //   // sailing_school: 'Школа парусов',
    //   // contacts: 'Контакты',
    //   // conditions_of_program: 'Условия программы',
    //   // training_program: 'Тренинговая программа',
    //   // leaders: 'Ведущие',
    //   // own_ships: 'Наши лодки',
    //   // route: 'Маршрут',
    //   // food: 'Питание',
    //   // bath: 'Баня, гигиена',
    //
    // });

    $translateProvider.useStaticFilesLoader({
      prefix: 'app/translations/data-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  }

})();
