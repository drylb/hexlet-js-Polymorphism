// @ts-check

import path from 'path';
import fs from 'fs';
import JsonParser from '../parsers/JsonParser';
import YamlParser from '../parsers/YamlParser';
import Config from './Config';

// BEGIN (write your solution here)
class ConfigFactory {
  static factory(filePath) {
    const extension = path.extname(filePath);
    const completeFilePath = path.join(process.cwd(), filePath);
    console.log(extension);
    let temp;
    const data = fs.readFileSync(completeFilePath);
    switch (extension) {
      case '.json':
        temp = JsonParser(data);
        break;
      case '.yaml':
      case '.yml':
        temp = YamlParser(data);
        break;
      default:
        throw new Error(`This extension: ${extension} is not supported`);
    }
    return new Config(temp);
  }
}

export default ConfigFactory;
// END

/* ConfigFactory.js
Создайте фабрику, которая принимает на вход путь до файла конфигурации в формате либо json либо yaml
и возвращает объект класса Config. Конструктор класса Config принимает на вход объект с данными,
полученными из конфигурационных файлов и предоставляет к нему доступ с помощью метода getValue.

Пример
import path from 'path';
import ConfigFactory from '../ConfigFactory.js';

const filePath = path.join(__dirname, '__fixtures__', 'test.yml');
const config = ConfigFactory.factory(filePath);
config.getValue('key'); // value
console.log(config.constructor.name); // Config

Учтите что файлы формата YAML могут иметь разные расширения: yaml и yml.
Фабрика должна работать с обоими.

parsers/JsonParser.js
Реализуйте класс, отвечающий за парсинг json. Используйте внутри JSON.parse().

parsers/YamlParser.js
Реализуйте класс, отвечающий за парсинг yaml. Для парсинга используется сторонний компонент js-yaml.
Используйте метод load(). */
