export const transcriptionIntoEng = (str: string) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'с' && str[i + 1] === 'х') {
      res += 'shh';
      i += 2;
    }
    switch (str[i].toLowerCase()) {
      case 'а':
        res += 'a';
      break;
      case 'б':
        res += 'b';
        break;
      case 'в':
        res += 'v';
        break;
      case 'г':
        res += 'g';
        break;
      case 'д':
        res += 'd';
        break;
      case 'е':
        res += 'e';
        break;
      case 'є':
        res += 'ye';
      break;
      case 'ж':
        res += 'j';
        break;
      case 'з':
        res += 'z';
        break;
      case 'и':
        res += 'y';
        break;
      case 'і':
        res += 'i';
        break;
      case 'й':
        res += 'iyi';
        break;
      case 'к':
        res += 'k';
      break;
      case 'л':
        res += 'l';
        break;
      case 'м':
        res += 'm';
        break;
      case 'н':
        res += 'n';
        break;
      case 'о':
        res += 'o';
        break;
      case 'п':
        res += 'p';
        break;
      case 'р':
        res += 'r';
      break;
      case 'с':
        res += 's';
        break;
      case 'т':
        res += 't';
        break;
      case 'у':
        res += 'u';
        break;
      case 'ф':
        res += 'f';
        break;
      case 'х':
        res += 'h';
        break;
      case 'ц':
        res += 'c';
      break;
      case 'ч':
        res += 'ch';
        break;
      case 'ш':
        res += 'sh';
        break;
      case 'щ':
        res += 'tsch';
        break;
      case 'ь':
        res += '\'\'';
        break;
      case 'ї':
        res += 'yyi';
        break;
      case 'ю':
        res += 'you';
        break;
      case 'я':
        res += 'ya';
        break;
      case ' ':
        res +='-';
      break;
      case '-':
        res +='--';
      break;
      default:
        res += str[i].toLowerCase();
    }
  }
  return res;
}

export const transcriptionIntoUkr = (str: string) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {

    if (str[i] === 's' && str[i + 1] === 'h' && str[i + 2] === 'h') {
      res += 'сх';
      i += 2;
      continue;
  };

    if (str[i] === 's' && str[i + 1] === 'h') {
        res += 'ш';
        i++;
        continue;
    };

    if (str[i] === 'y' && str[i + 1] === 'o' && str[i + 2] === 'u') {
      res += 'ю';
      i += 2;
      continue;
    };

    if (str[i] === 'y' && str[i + 1] === 'a') {
      res += 'я';
      i++;
      continue;
    }

    if (str[i] === 'y' && str[i + 1] === 'e') {
      res += 'є';
      i++;
      continue;
    }

    if (str[i] === 'c' && str[i + 1] === 'h') {
      res += 'ч';
      i++;
      continue;
    }

    if (str[i] === '-' && str[i + 1] === '-') {
      res += '-';
      i++;
      continue;
    }

    if (str[i] === 't' && str[i + 1] === 's' && str[i + 2] === 'c' && str[i + 3] === 'h') {
      res += 'щ';
      i += 3;
      continue;
    }

    if (str[i] === 'i' && str[i + 1] === 'y' && str[i + 2] === 'i') {
      res += 'й';
      i += 2;
      continue;
    }

    if (str[i] === 'y' && str[i + 1] === 'y' && str[i + 2] === 'i') {
      res += 'ї';
      i += 2;
      continue;
    }

    if (str[i] === '\'' && str[i + 1] === '\'') {
      res += 'ь';
      i++;
      continue;
    }


    switch (str[i].toLowerCase()) {
      case 'a':
        res += 'а';
      break;
      case 'b':
        res += 'б';
        break;
      case 'c':
        res += 'ц';
        break;
      case 'd':
        res += 'д';
        break;
      case 'e':
        res += 'е';
        break;
      case 'ye':
        res += 'є';
        break;
      case 'ch':
        res += 'ч';
        break;
      case 'yi':
        res += 'ї';
        break;
      case 'tch':
        res += 'щ';
        break;
      case 'f':
        res += 'ф';
        break;
      case 'g':
        res += 'г';
        break;
      case 'ya':
        res += 'я';
        break;
      case 'h':
        res += 'х';
        break;
      case 'i':
        res += 'і';
        break;
      case 'j':
        res += 'ж';
        break;
      case 'k':
        res += 'к';
        break;
      case 'l':
        res += 'л';
        break;
      case 'm':
        res += 'м';
        break;
      case 'n':
        res += 'н';
      break;
      case 'o':
        res += 'о';
        break;
      case 'p':
        res += 'п';
        break;
      case 'r':
        res += 'р';
        break;
      case 's':
        res += 'с';
      break;
      case 't':
        res += 'т';
        break;
      case 'v':
        res += 'в';
        break;
      case 'u':
        res += 'у';
        break;
      case 'y':
        res += 'и';
        break;
      case 'z':
        res += 'з';
        break;
      case '-':
        res +=' ';
      break;
      default:
        res += str[i].toLowerCase();
    }
  }
  return res;
}