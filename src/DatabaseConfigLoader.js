/* eslint-disable no-param-reassign */
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// BEGIN (write your solution here)

// VERSION #1 without Lodash

/* class DatabaseConfigLoader {
  constructor(pathToConfig) {
    this.pathToConfig = pathToConfig;
  }

  load(env, obj = {}) {
    const buildEnvName = `database.${env}.json`;
    const finalPath = `${this.pathToConfig}/${buildEnvName}`;
    const dataFromFile = fs.readFileSync(finalPath, 'utf-8');
    const parsedData = JSON.parse(dataFromFile);
    const checkKeys = Object.keys(obj);
    if (checkKeys.length === 0) {
      Object.assign(obj, parsedData);
    }
    if ('extend' in obj) {
      const extension = parsedData.extend;
      const keys = Object.entries(parsedData);
      keys.forEach(([key, value]) => {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = value;
        }
        if (key === 'extended') {
          obj[key] = value;
        }
      });
      if (extension === undefined) {
        delete obj.extend;
        return obj;
      }
      this.load(extension, obj);
    }
    return obj;
  }
} */

// VERSION #2 With Lodash.

class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const fileName = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, fileName);
    const raw = fs.readFileSync(filePath);
    const config = JSON.parse(raw);

    if (!_.has(config, 'extend')) {
      return config;
    }

    const newEnv = config.extend;
    const configWithoutExtend = _.omit(config, 'extend');

    return { ...this.load(newEnv), ...configWithoutExtend };
  }
}

export default DatabaseConfigLoader;
// END

/*
DatabaseConfigLoader.js
Реализуйте и экспортируйте по умолчанию класс DatabaseConfigLoader,
который отвечает за загрузку конфигурации для базы данных. У класса следующий интерфейс:

Конструктор - принимает на вход путь, по которому нужно искать конфигурацию
load(env) - метод, который грузит конфигурацию для конкретной среды окружения.
Он загружает файл database.${env}.json, парсит его и возвращает результат наружу.
Пример

const pathToConfigs = path.join(__dirname, '__fixtures__');
const loader = new DatabaseConfigLoader(pathToConfigs);
const config = loader.load('production'); // loading database.production.json
// {
//   host: 'google.com',
//   username: 'postgres',
// };
В этом классе и конфигурации реализована поддержка расширения.
Если в загружаемой конфигурации есть ключ extend, то нужно загрузить конфигурацию
с этим именем (он соответствует env). Далее конфигурации сливаются между собой так,
что приоритет имеет загруженная раньше. Более подробный пример посмотрите в тестах. */
