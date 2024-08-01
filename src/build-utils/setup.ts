import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const configPath = path.resolve(__dirname, '..\\services\\redBagApi.ts');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo de configuração:', err);
    rl.close();
    return;
  }

  const useMockRegex = /const useMock = (true|false);/;
  const match = data.match(useMockRegex);

  if (match) {
    rl.question('Deseja alterar o mock para true ou false? ', (answer) => {
      const newValue = answer.toLowerCase() === 'true';
      const newData = data.replace(
        useMockRegex,
        `const useMock = ${newValue};`
      );

      fs.writeFile(configPath, newData, 'utf8', (err) => {
        if (err) {
          console.error('Erro ao escrever no arquivo de configuração:', err);
        } else {
          console.log(`useMock alterado para ${newValue}`);
        }
        rl.close();
      });
    });
  } else {
    console.error(
      'Não foi possível encontrar a configuração useMock no arquivo.'
    );
    rl.close();
  }
});
