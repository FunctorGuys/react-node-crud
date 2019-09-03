import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { I18N_USE_DEFAULT_LANGUAGE } from 'config';
import Root from './Root';

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
let messages = null;

import( /* webpackMode: "eager" */ `react-intl/locale-data/${languageWithoutRegionCode}`).then(module => addLocaleData(module.default));

try {
  import( /* webpackMode: "eager" */ `i18n/locales/${languageWithoutRegionCode}.json`)
    .then(module => {
      if (!I18N_USE_DEFAULT_LANGUAGE) { messages = module.default; }
    })
    .catch(err => console.log('ERROR', err));
  // eslint-disable-next-line no-empty
} catch (ex) { }

class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: languageWithoutRegionCode,
      messages: messages,
    };
  }

  switchLanguage = (lang) => () => {
    this.setState({
      lang
    });
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.lang}
        messages={this.state.messages}
      >
        <Choose>
          <When condition={true || this.state.messages}>
            <Root />
          </When>
          <When condition={!this.state.messages}>
            <div>Messages not found: {JSON.stringify(this.state.messages)} </div>
          </When>
        </Choose>
      </IntlProvider>
    );
  }
}

export default LanguageProvider;
